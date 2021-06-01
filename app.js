const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

// Health check to confirm if the app is running
app.get('/health', (req, res) => {
  res.send('ok')
})

// Check app version
app.get('/version', (req, res) => {
  res.send('7')
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
