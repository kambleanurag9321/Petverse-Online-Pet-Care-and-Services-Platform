const express = require("express");
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "PetVerse API is running"
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`PetVerse server running on port ${PORT}`);
});