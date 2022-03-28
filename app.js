const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = 5000; //process.env.PORT ||

app.use(express.static("dist"));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log("server started on port 5000");
});
