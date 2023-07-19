const express = require('express')
const app = express()


if (process.env.NODE_ENV === 'development') {
  const dotenv = require('dotenv')
  dotenv.config()
}

const PORT = process.env.PORT || 3000
app.use(express.static('dist'))
/*
app.get('/health', (req, res) => {
  res.send('ok')
})
*/
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
