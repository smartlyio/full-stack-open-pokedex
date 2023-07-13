const express = require('express')
const app = express()

// Heroku dynamically sets a port
const port = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${port}`)
})
