/* global process */

const express = require("express");
const app = express();


// Heroku dynamisch setzt einen Port

const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
    // console.log("server started on port 5000");
});