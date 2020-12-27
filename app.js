const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})


// Just something for the new branch
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  // console.log('server started on port 5000')
})

// This is a change for exercise 11.22
// Happy new year!
