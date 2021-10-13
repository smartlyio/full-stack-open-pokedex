/* eslint-disable no-console */
const express = require('express')
const app = express()

// Heroku dynamically sets a port
// const PORT = process.env.PORT || 5000;

app.use(express.static('dist'))

// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 3000, function(){
  console.log('Express server listening on port %d in %s mode', this.address().port, app.settings.env)
})
