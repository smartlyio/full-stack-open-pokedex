const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (_, res) => {
  res.send('ok')
})

app.get('/version', (_, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`) //eslint-disable-line
})
