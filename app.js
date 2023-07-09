const express = require("express");
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = 4100;

app.use(express.static("dist"));

app.listen(PORT);
