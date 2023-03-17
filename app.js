const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-unreachable
  res.send('health ok')
})

app.get('/version', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req)
  res.send('TODO') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5001')
})
