const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// healthcheck
app.get('/health', (req, res) => {
  res.send('ok')
})

// listen
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
