/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
// const PORT = process.env.PORT || 5000;

app.use(express.static('dist'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Our app is running on port ${ PORT }`)
})
