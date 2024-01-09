const express = require('express')
const cors = require('cors')
const hcRouter = require('./routers/checks')
const app = express()
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.use(cors())
app.use('/dummy', hcRouter)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
