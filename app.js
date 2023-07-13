const express = require('express')
const app = express()

// Heroku dynamically sets a port
const port = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${port}`)
})

app.get('/version', (req, res) => {
  res.send('V0.2.0') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})