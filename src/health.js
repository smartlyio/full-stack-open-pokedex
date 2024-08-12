const app = require('express').Router()

/*
app.get('/health', (req, res) => {
  res.send('ok')
})
*/

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok')
})

module.exports = app