const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.json())

/* eslint-disable */

app.get('/health', (_req, res) => {
  res.send('testing practice branch')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
  /* eslint-disable */
})
