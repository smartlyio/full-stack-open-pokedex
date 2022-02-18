const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/test', (req, res) => {
  res.send('test')
})

app.get('/test2', (req, res) => {
  res.send('test2')
})


app.listen(PORT)
