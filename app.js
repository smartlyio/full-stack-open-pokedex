const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000 // eslint-disable-line

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('21:27')
})

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line
})
