const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Initialize multer upload
const upload = multer({
  storage: storage,
}).single("video");

// Route to handle file upload
app.post("/upload", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error uploading file");
    } else {
      console.log(req.file);
      res.send("File uploaded successfully");
    }
  });
});

// Create a route
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
