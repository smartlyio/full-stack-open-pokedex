/* eslint-disable no-console */
/* eslint-disable no-undef */
const express = require("express");
require("dotenv").config();
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
