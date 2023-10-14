const express = require("express");
const app = express();

const PORT = process.env.PORT || 1097;

app.use(express.static("dist"));

app.get("/health", (req, res) => {
  res.send("ok");
});

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
