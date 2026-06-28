const express = require("express");
const adminAuthModel = require("../models/adminAuth.model");
const crypto = require("crypto");
const rateLimit = require("express-rate-limit");
const verifyAdmin = require("../middleware/adminAuth");
const router = express.Router();

// Rate limiter for admin login to prevent brute force attacks (max 5 requests per 15 mins)
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { message: "Too many login attempts, please try again after 15 minutes" },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/admin/register — create a new admin
router.post("/admin/register", async (req, res) => {
  const { phone, password } = req.body;

  const admin = new adminAuthModel({ phone, password });
  await admin.save();

  res.json({ message: "Admin created successfully" });
});

// POST /api/admin/login
router.post("/admin/login", loginLimiter, async (req, res) => {
  // Sanitize input to prevent NoSQL injection
  const phoneStr = String(req.body.phone || "").trim();
  const passwordStr = String(req.body.password || "");

  if (!phoneStr || !passwordStr) {
    return res.status(400).json({ message: "Phone and password are required" });
  }

  try {
    const admin = await adminAuthModel.findOne({ phone: phoneStr });

    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    if (admin.password !== passwordStr) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate secure dynamic session token
    const token = crypto.randomBytes(32).toString("hex");
    admin.token = token;
    await admin.save();

    res.json({
      message: "Admin logged in successfully",
      admin,
      token,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// POST /api/admin/logout — clear active session token
router.post("/admin/logout", verifyAdmin, async (req, res) => {
  try {
    req.admin.token = null;
    await req.admin.save();
    res.json({ message: "Logged out successfully" });
  } catch (err) {
    console.error("Logout error:", err);
    res.status(500).json({ message: "Server error during logout" });
  }
});

// GET /api/admin/verify — verify active session
router.get("/admin/verify", verifyAdmin, async (req, res) => {
  res.json({ valid: true, admin: req.admin });
});

module.exports = router;
