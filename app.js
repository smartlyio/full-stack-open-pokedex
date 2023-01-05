// prettier-ignore
const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = 5000

app.use(express.static('dist'))

app.listen(PORT)
