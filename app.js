const express = require("express");
const config = require("./config");
const app = express();

// Heroku dynamically sets a port
const PORT = config.PORT || 5001;

app.get("/health", (req, res) => {
  res.send("ok");
});

app.use(express.static("dist"));

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port  ${PORT}`);
  /* eslint-enable no-console */
});
