import process from "node:process";

const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = 5000; //process.env.PORT ||

app.use(express.static("dist"));

app.listen(process.env.PORT || PORT, () => {
  // eslint-disable-next-line no-console
  console.log("server started on port 5000");
});

//Pipeline check endpoints
app.get("/health", (req, res) => {
  res.send("ok");
});

app.get("/version", (req, res) => {
  res.send("1"); // change this string to ensure a new version deployed
});
