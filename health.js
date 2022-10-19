const express = require("express");
const healthRouter = express().router();

healthRouter.get("/", (req, res) => {
  res.send("ok");
});

module.exports = healthRouter;
