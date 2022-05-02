const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = 5000 //process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-line no-use-before-define
  //console.log('server started on port 5000')
})
