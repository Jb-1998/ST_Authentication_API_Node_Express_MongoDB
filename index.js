const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");

// Connet to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);
// Import Routes

const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

// MiddleWares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes MiddleWares

app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);

app.listen(3000, () => console.log("Server Up and Running"));
