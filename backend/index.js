import cors from "cors";
import "dotenv/config";
import express from "express";
import { connectDB } from "./config/db.js";
import courseRouter from "./routes/courseRouter.js";
import { clerkMiddleware } from "@clerk/express";
import bookingRouter from "./routes/bookingRouter.js";

const app = express();
const port = process.env.PORT || 4000;

// Middleware
const allowedOrigins = process.env.ALLOWED_ORIGINS
  ? process.env.ALLOWED_ORIGINS.split(",")
  : [];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) return callback(null, true);

      const allowedLocalhost = /^http:\/\/localhost:517[0-9]$/;
      if (allowedLocalhost.test(origin)) return callback(null, true);

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Clerk middleware — this adds Clerk data to requests
app.use(clerkMiddleware());

// Serve uploads
app.use("/uploads", express.static("uploads"));

// Database
connectDB();

// Routes
app.use("/api/course", courseRouter);
app.use("/api/booking", bookingRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});
