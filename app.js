const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001
// eslint-disable-next-line no-console
console.log(PORT)

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('6') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
