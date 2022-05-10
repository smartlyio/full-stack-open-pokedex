const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000


app.use(express.static('dist'))
app.use(express.json())

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {})

