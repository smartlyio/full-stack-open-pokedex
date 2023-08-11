const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line
const PORT = 8081 || process.env.PORT

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server started on port ${PORT}`)})
