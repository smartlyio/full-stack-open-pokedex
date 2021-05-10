/* eslint-disable no-console */
/* eslint-disable semi */
/* eslint-disable quotes */
const express = require("express");
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log("server started on port 5000");
});

// endpoint for application health check
app.get("/health", (req, res) => {
  res.send("ok");
});

// endpoint to keep track of application versioning
app.get("/version", (req, res) => {
  res.send("1");
});
