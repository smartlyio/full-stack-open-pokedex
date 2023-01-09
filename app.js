const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 8080

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  throw 'eeeeerrr'
  // res.send('HEALTH HAS BEEN CHECKED AND IT IS OK')
})

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)
})
