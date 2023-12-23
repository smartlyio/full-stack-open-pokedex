const express = require("express");
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});

app.get("/health", (req, res) => {
  // throw new Error("oops");
  // eslint-disable-next-line no-unreachable
  res.send("ok").status(200);
});

app.get("/version", (req, res) => {
  res.send("v7 deployed");
});
