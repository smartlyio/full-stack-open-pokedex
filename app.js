require('dotenv').config()
const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000
const APPVERSION = '3' // change this string to ensure a new version deployed
const EXPERIMENT = 'creating new branch and testing pull request'

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send(`${APPVERSION}`)
})

app.get('/experiment', (req, res) => {
  res.send(`${EXPERIMENT}`)
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
