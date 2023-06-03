const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4100;

app.use(express.static("dist"));

app.listen(PORT);
