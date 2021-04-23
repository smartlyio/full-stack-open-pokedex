const express = require('express')
const app = express()

// Heroku dynamically sets a port
/* eslint-disable no-undef */
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('version is 5') // change this string to ensure a new version deployed.
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
})
