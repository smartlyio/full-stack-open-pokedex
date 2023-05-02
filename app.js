const express = require('express')
const app = express()


// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000
// const PORT = 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // throw 'error...'
  // // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('9') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
