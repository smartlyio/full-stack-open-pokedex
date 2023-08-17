const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  throw 'error'
  // eslint-disable-next-line
  res.send('ok')
})

app.listen(PORT, '0.0.0.0', () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
