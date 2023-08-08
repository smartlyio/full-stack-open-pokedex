const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('a new version deployed!!') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok 200 test test new branch')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5001')
})
