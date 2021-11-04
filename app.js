require('dotenv').config()
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  // eslint-disable-next-line
  console.log(process.env.VERSION)
  res.send(process.env.VERSION)
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log('server started on port 5000')
})
