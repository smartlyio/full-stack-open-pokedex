const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// Health check endpoint
app.get('/health', () => {
  throw new Error('Not healthy...')
  // res.send('ok')
})

// Dummy route to check for a diff in deployed code
app.get('/version', (req, res) => {
  res.send('4')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
