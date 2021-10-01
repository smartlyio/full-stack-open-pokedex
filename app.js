const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000 // eslint-disable-line

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  // Let's create a linting error
  // by adding a semicolon
  res.send('17:12 — This commit will be deployed version number will increase by one.');
})

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line
})
