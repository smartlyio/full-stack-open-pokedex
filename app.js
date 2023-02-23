const express = require('express')
const app = express()

// Deploy to Fly.io requires the following port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
// A very basic endpoint to check app responds to HTTP requests
app.get('/health', (req, res) => {
  res.send('ok')
})
app.get('/version', (req, res) => {
  res.send('1')
})
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})