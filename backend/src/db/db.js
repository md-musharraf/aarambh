const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully");

    // Clean up old indices and recreate correct ones
    const Booking = require("../models/booking.model");
    const BookingCollection = Booking.collection;

    // Get all indices and drop old ones if they exist
    try {
      const indices = await BookingCollection.getIndexes();
      console.log("Current indices:", Object.keys(indices));

      // Drop old "date_1" index if it exists
      if (indices.date_1) {
        await BookingCollection.dropIndex("date_1");
        console.log("Dropped old date_1 index");
      }

      // Drop old "eventDate_1" index if it exists to recreate it
      if (indices.eventDate_1) {
        await BookingCollection.dropIndex("eventDate_1");
        console.log("Dropped existing eventDate_1 index");
      }
    } catch (err) {
      // Code 26 is NamespaceNotFound - safe to ignore since collection doesn't exist yet
      if (err.code !== 26) {
        console.warn("Warning updating indexes:", err.message);
      }
    }

    // Migrate legacy documents where eventDate is missing/null but date exists
    const bookingsToMigrate = await Booking.find({
      $or: [
        { eventDate: { $exists: false } },
        { eventDate: null }
      ]
    });

    if (bookingsToMigrate.length > 0) {
      console.log(`Found ${bookingsToMigrate.length} legacy bookings to migrate.`);
      for (const doc of bookingsToMigrate) {
        const rawDoc = doc.toObject();
        const legacyDate = rawDoc.date;
        if (legacyDate) {
          doc.eventDate = new Date(legacyDate);
          await doc.save({ validateBeforeSave: false });
          console.log(`Migrated booking ID ${doc._id} (${doc.name}): ${legacyDate} -> ${doc.eventDate}`);
        } else {
          console.warn(`Booking ID ${doc._id} has no date or eventDate. Deleting to avoid duplicate null constraint.`);
          await Booking.deleteOne({ _id: doc._id });
        }
      }
      console.log("Database migration completed successfully.");
    }

    // Recreate the correct unique index
    await BookingCollection.createIndex({ eventDate: 1 }, { unique: true });
    console.log("Created unique index on eventDate");

    // Seed default admin if none exists
    const adminAuthModel = require("../models/adminAuth.model");
    const { ADMIN_PHONE, ADMIN_PASSWORD } = require("../config/admin.credentials");
    const adminCount = await adminAuthModel.countDocuments();
    if (adminCount === 0) {
      console.log("No admins found in database. Seeding default admin...");
      const defaultAdmin = new adminAuthModel({
        phone: ADMIN_PHONE,
        password: ADMIN_PASSWORD
      });
      await defaultAdmin.save();
      console.log(`Default admin seeded successfully with phone: ${ADMIN_PHONE}`);
    } else {
      console.log(`Admins exist in the database (count: ${adminCount}). Skipping seed.`);
    }
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;

