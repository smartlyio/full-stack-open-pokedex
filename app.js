const express = require('express')
const { version } = require('./package.json')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.use('/health', (_req, res) => {
  res.send('ok')
})

app.use('/version', (_req, res) => {
  res.send(version)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
