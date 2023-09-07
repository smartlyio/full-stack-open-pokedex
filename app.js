const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: '.' })
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
