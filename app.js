const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  throw 'erroRRR...'
  res.send('ok') // eslint-disable-line no-unreachable
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line
})