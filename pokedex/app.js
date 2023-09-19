const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

// brrrrrr

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
