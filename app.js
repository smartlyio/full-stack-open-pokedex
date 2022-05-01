require('dotenv').config()
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = 5000

app.use(express.static('dist'))

// app.get("/hello", (req, res) => {
//   res.status(200).send("Hello i am akash")
// })

app.listen(PORT, () => {
  // console.log('server started on port 5000')
})
