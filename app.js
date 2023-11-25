const process = require('process')
const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

/* eslint-disable no-unused-vars */
app.get('/version', (req, res) => {
  res.send('4') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log('server started on port 5000')
})
