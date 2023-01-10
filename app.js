const express = require("express")
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3001

app.use(express.static("dist"))

app.get("/health", (req, res) => {
  res.send("ok")
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
