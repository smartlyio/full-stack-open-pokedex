const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/health2', (req, res) => {
  res.send('ok2')
})

app.listen(PORT, () => {
  console.log('server started on port 5000') // eslint-disable-line no-console
})

//here is the change made for 11.13
//here is the change made for 11.13 again
//Just Add some change to check whether it changes something
//Just Add more change to check whether it changes something