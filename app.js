const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  console.log('allo')
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('13') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)//eslint-disable-line
})
