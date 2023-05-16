const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3003

app.use(express.static('dist'))

app.get('/healthy', (req, res) => {
  res.send('healthy')
})
app.get('/version', (req, res) => {
  res.send('1.0.2')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  // console.log(`server started on port ${PORT}`)
})
