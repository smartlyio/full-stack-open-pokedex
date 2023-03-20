const express = require('express')
const app = express()
const { version } = require('./package.json')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {//Task 11.11
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (req, res) => {
  //res.send('1') // change this string to ensure a new version deployed
  res.send(version) // change this string to ensure a new version deployed
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port ' + PORT)
})
