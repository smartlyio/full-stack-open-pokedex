const express = require('express')
const process = require('process')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 3003

app.use(express.static('dist'))

app.listen(PORT, () => {
  // console.log(`server started on port ${PORT}`);
})
