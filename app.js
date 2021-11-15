const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.get('/health', (req, res) => {
  res.send('ok')
})

const randomString = (Math.random() + 1).toString(36).substring(5)
app.get('/version', (req, res) => {
  res.send(randomString)
})

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
