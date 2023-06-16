const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})


app.get('/version', function(req, res){
  console.log('req_body', req.body)
  res.send(1)
})

app.get('/health', function(req, res){
  console.log('req', req.body)
  res.send('Ok!')
})