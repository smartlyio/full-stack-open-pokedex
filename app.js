/* eslint-disable no-undef */
/* eslint-disable no-console */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
// const PORT = process.env.PORT || 5000;事事顺遂

app.use(express.static('dist'))

var server_port = process.env.YOUR_PORT || process.env.PORT || 80
var server_host = process.env.YOUR_HOST || '0.0.0.0'
server.listen(server_port, server_host, function() {
  console.log('Listening on port %d', server_port)
})