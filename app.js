/* eslint-disable no-console */
const express = require('express')
const app = express()
const { exec } = require('child_process')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})

app.get('/healthcheck', (req, res) => {
  res.send('okiee')
})

app.get('/version', (req, res) => {
  const query = req.query

  const SHA_COMMAND =
    query.short === 'true' ? 'git rev-parse --short HEAD' : 'git rev-parse HEAD'

  exec(SHA_COMMAND, (error, stdout, stderr) => {
    if (error) {
      res.send(`error: ${error.message}`)
      return
    }
    if (stderr) {
      res.send(stderr)
      return
    }
    res.send(stdout)
  })
})
