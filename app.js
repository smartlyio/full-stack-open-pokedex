const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3001;

app.use(express.static("dist"));

app.get("/", (req, res) => {
  // eslint-disable-next-line no-unreachable
  res.status(400);
});
app.listen(PORT, () => {
  console.log("server started on port 5000");
});
