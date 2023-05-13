const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})

app.get('/hello', (req, res) => {
  res.send('H3LL0')
})

app.get('/nohello', (req, res) => {
  res.send('N0H3LL0')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
