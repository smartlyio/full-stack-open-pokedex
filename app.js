const express = require('express')
const app = express()
const { version } = require('./package.json')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  throw Error('Error')

  // eslint-disable-next-line no-unreachable
  const string = `ok - version: ${version}`
  res.send(string)
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
