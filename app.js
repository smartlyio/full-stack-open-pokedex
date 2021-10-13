const express = require('express')
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
// const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 5000)