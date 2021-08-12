const express = require('express')
const app = express()
require('dotenv').config()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('Pulse found')
})

app.get('/version', (req, res) => {
  res.send('New version deployed') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log('server started on port 5000') //eslint-disable-line
})
