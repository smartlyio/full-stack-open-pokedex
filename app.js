const express = require("express")
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000



app.get("/health", (req, res) => {
  res.send("ok")
})

app.get("/version", (req, res) => {
  res.send("2")
})


app.use(express.static("dist"))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
