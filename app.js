const express = require("express");
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 8080;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  console.log("server started on port 5000");
});
