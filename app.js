const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/health', (_req, res) => {
  throw 'this is an error'
  res.send('i am in good health')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable */
  console.log('server started on port 5000')
  /* eslint-disable */
})
