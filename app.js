const express = require('express')
const app = express()


// Heroku dynamically sets a port
const PORT = process.env.PORT || 5005

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('2.0.0')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5005')
})
