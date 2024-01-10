const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.get('/health', (req, res) => {
  res.send('ok merge only tag testing ')
})

app.listen(PORT, () => {
  //eslint-disable-next-line
  console.log('server started on port 5000')
})
