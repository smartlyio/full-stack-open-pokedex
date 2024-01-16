const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  // eslint-disable-next-line eqeqeq
  if (PORT != 8080) throw 'error...  '
  res.send('ok')
})
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
