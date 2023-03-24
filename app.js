const express = require('express')

const app = express()
app.use(express.json())

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('Health is OK!')
  res.send('ok')
})

app.get('/version', (req, res) => {
  // eslint-disable-next-line no-console
  console.log('version 1')
  res.send('1') // change this string to ensure a new version deployed
})

// This middleware must be last after the other endpoints
app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable-next-line no-console */
  console.log('server started on port 5000')
})
