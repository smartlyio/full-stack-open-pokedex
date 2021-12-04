const express = require("express");
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
	console.log("server started on port 5000");
});

//health check for the deployment pipeline
app.get("/health", (req, res) => {
	res.send("ok");
});

//version number simple req, res server response
app.get("/version", (req, res) => {
	res.send("1"); //corresponding to the current version number deployed
});
