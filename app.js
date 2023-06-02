const express = require('express')
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', () => {
  // res.send('ok')
  throw 'error...'
})

app.get('/version', (req, res) => {
  res.send('3') // change this string to ensure a new version deployedgit re
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
