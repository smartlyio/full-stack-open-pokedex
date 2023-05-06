const express = require('express'),
  app = express(),

  // Heroku dynamically sets a port
  PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// eslint-disable-next-line no-unused-vars
app.get(
  '/health',
  (_req, res) => {

    res.send('ok')

  }
)

// // // eslint-disable-next-line no-unused-vars
// // app.get('/health', (_req, res) => {
// //   throw 'error...'
// //   // eslint-disable-next-line no-unreachable
// //   res.send('ok')
// // })

app.listen(
  PORT,
  () => {

    // eslint-disable-next-line no-console
    console.log(`server started on port ${PORT}`)

  }
)
