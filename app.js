const express = require('express')
const process = require('process')

const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4000

app.use(express.static('dist'))

app.get('/health', (_, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 4000')
})