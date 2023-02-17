const express = require('express')
const process = require('process')

const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('8')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started at: http://localhost:5000')
})
