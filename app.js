const express = require("express");
const app = express();

// Heroku dynamically sets a port

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  // throw new Error("not healthy");
  // eslint-disable-next-line no-unreachable
  res.send("ok");
});

app.get("/version", (req, res) => {
  res.send("v7 deployed");
});

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`);
});
