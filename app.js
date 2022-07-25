const express = require("express");
const process = require("process");
const cors = require("cors");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;
app.use(express.static("dist"));
app.use(cors());
app.get("/", (req, res) => {
  res.send("success");
});
app.get("/health", (req, res) => {
  res.send("ok ok");
});

app.listen(PORT, () => {});
