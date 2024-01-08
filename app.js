const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('2')
})

// eslint-disable-next-line no-unused-vars
app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
