const express = require('express')
const app = express()

// Changed to port 3000 as 5000 is used internally by macOS...
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

// app.get('/health', (req, res) => {
//   res.send('ok')
// })

// ! work on below - perhaps use a custome check
//! perhaps set the header in the check and send the version here
//! !!!!!!!!!!!1
app.get('/version', (req, res) => {
  res.send('14') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 3000')
})
