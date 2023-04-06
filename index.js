const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// Middleware to parse JSON and urlencoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a route
app.get("/", (req, res) => {
  res.send("Server is up and running!");
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
