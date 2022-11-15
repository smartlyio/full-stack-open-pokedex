const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const port = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 8080')
})
