const express = require('express')
const csp = require('express-csp-header')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(csp({
  policies: {
    'default-src': [csp.NONE],
    'img-src': [csp.SELF],
  }
}))

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
