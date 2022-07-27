const express = require('express')
const app = express()
const pjson = require('./package.json')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

const version = /(.*(\.)){2}/
app.get('/version', (req, res) => {
  res.send((pjson.version).replace(version, ''))
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
