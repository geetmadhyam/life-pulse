const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = 8000;

connectDB();

app.get("/", (req, res) => {
  res.send("LifePulse API is running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});