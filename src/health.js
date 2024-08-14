const app = require('express').Router()

app.get('/health', (req, res) => {
  res.send('ok')
})

module.exports = app