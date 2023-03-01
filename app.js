const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001
// eslint-disable-next-line no-console
console.log(PORT)

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
