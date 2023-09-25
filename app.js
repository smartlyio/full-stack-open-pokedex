const express = require("express");
const app = express();

// Heroku dynamically sets a port
// const PORT = process.env.PORT || 5001;
const PORT = 5001;
// console.log({ PORT });

app.use(express.static("dist"));

app.get("/version", (req, res) => {
  res.send("1"); // change this string to ensure a new version deployed
});

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`);
});
