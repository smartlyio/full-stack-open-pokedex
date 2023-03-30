const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))
app.get('/health', (req, res) => {
  res.send('ok')
})
// ! JATKA  => 11.11 Health check and rollback
app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`server started on port ${PORT}`)
})
