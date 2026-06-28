const express = require("express");
const helmet = require("helmet");
const imageRouter = require("./router/image.route");
const bookingRouter = require("./router/booking.route");
const adminRouter = require("./router/adminAuth.route");
const app = express();
const cors = require("cors");

// Secure HTTP response headers
app.use(helmet({
  contentSecurityPolicy: false // Disable CSP to avoid blocking external assets like ImageKit
}));

app.use(
  cors({
    credentials: true,
    origin: function (origin, callback) {
      // Allow requests with no origin (Postman, server-to-server)
      if (!origin) return callback(null, true);

      const allowed = [
        "https://the-city-garden.vercel.app",
        "https://aarambh-banquet-ranchi.vercel.app",
        "https://aarambh-ecru.vercel.app",
        "https://aarambhbanquetranchi.com",
        "https://www.aarambhbanquetranchi.com",
      ];

      // Allow any Vercel preview URL for this project
      const isVercelPreview =
        /^https:\/\/(the-city-garden|aarambh-banquet-ranchi|aarambh-ecru).*\.vercel\.app$/.test(origin);
      // Allow localhost on any port for local dev
      const isLocalhost = /^http:\/\/localhost:\d+$/.test(origin);
      const isLocalIP = /^http:\/\/10\.\d+\.\d+\.\d+:\d+$/.test(origin);

      if (
        allowed.includes(origin) ||
        isVercelPreview ||
        isLocalhost ||
        isLocalIP
      ) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS: " + origin));
      }
    },
  }),
);

// Middleware to parse JSON bodies
app.use(express.json());

// Health check — keeps Render awake & lets you verify the backend is running
app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api", imageRouter);
app.use("/api", bookingRouter);
app.use("/api", adminRouter);

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error("Unhandled server error:", err.message || err, err.stack || "");
  res.status(err.status || 500).json({
    message: err.message || "Internal server error occurred",
  });
});

module.exports = app;

