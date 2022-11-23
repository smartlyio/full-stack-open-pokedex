
const express = require('express')
const app = express()

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
app.get('/health', (_, res) => {
  res.send('ok')
})