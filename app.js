const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3001

app.use(express.static('dist'))


app.listen(PORT, () => {
  //console.log('server started on port 5000')
})

// eslint-disable-next-line no-unused-vars
app.get('/health', (req, res) => {

  throw new Error('server does not work properly')
  // res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('3')
})
