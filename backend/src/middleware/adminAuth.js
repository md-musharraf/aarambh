const adminAuthModel = require("../models/adminAuth.model");

const verifyAdmin = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "";
    const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const admin = await adminAuthModel.findOne({ token });
    if (!admin) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    req.admin = admin;
    next();
  } catch (err) {
    console.error("Admin verification error:", err);
    res.status(500).json({ message: "Server error during authentication" });
  }
};

module.exports = verifyAdmin;
