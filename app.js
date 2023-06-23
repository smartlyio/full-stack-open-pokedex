const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.send('Welcome')
})

app.get('/version', (req, res) => {
  // Branch 11.14 another change to check pull request again!
  res.send('7')
})

app.get('/health', (req, res) => {
// app.get('/health', () => {
  // throw 'THE SERVER IS ON FIRE'
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${PORT}`)
})
