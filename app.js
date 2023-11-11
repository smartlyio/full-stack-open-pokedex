const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1.1') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  // simulate broken deployment: this test passed, now commenting it out
  // throw 'error...healthcheck'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})

