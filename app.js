const express = require('express')
const res = require('express/lib/response')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
