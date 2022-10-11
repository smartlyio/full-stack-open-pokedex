const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/miguel', (req, res) => {
  res.send('is a snake!')
})

app.get('/marco', (req, res) => {
  res.send('polo!!')
})

app.get('/hello there', (req, res) => {
  res.send('General Kenobi')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5001')
})
