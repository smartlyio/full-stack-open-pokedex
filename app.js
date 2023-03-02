const express = require('express')
const app = express()
require('dotenv').config()

// Heroku dynamically sets a port

const PORT = process.env.NODE_ENV !== 'test' ? process.env.PORT : 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
  /* eslint-enable no-console */
})
