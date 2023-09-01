const express = require('express')

const app = express()
const cors = require('cors')

app.get ('/health', (req, res) => {
  res.send ('ok')
})

app.get('/version', (req, res) => {
  res.send('1')
})


app.use(cors())



// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
