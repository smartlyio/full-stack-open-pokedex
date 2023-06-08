const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('6') // change this string to ensure a new version deployed
})

app.get('/health', (_req, res) => {
  // throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
