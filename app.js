const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})
