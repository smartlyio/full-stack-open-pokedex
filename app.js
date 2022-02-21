const express = require('express')
const app = express()
const process = require('process')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))
app.get('/health', (req, res) => {
  res.send('ok')
})
pp.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})
app.listen(PORT, () => {
  console.log('server started on port 8080')
})
