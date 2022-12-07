const express = require('express')
const app = express()


// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('17')
})

// switch to "break" the app for periodic checks
let isWorking = true

app.get('/break', (req, res) => {
  isWorking = false
  res.send('you broke the app')
})
app.get('/fix', (req, res) => {
  isWorking = true
  res.send('you fixed the app')
})

app.get('/health', (req, res) => {
  if (isWorking) {
    res.send('ok')
  } else {
    res.status(404)
  }
})

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line
})