const express = require('express')
const cors = require('cors')
const hcRouter = require('./routers/checks')
const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use('/dummy', hcRouter)

module.exports = app
