const express = require('express')
const app = express()

// Heroku dynamically sets a port, test
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.get('/health', (req,res) => {
  res.send('ok')
})



app.use(express.static('dist'))


app.listen(PORT, () => {
  console.log('server started on port 5000')
})
