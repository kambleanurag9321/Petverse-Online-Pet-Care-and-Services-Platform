import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import petRoutes from "./routes/petRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
const petRoutes = require("./routes/petRoutes");

app.use("/api/pets", petRoutes);

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/pets", petRoutes);

// Database
connectDB();

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "PetVerse API is running",
  });
});

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PetVerse server running on port ${PORT}`);
});