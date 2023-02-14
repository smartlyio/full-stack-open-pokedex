const express = require('express')
const app = express()

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// eslint-disable-next-line no-undef
const isDevelopment = process.env.NODE_ENV === 'development'

if (!isDevelopment) {
  let webpackMiddleware = require('webpack-dev-middleware')
  let webpack = require('webpack')
  let webpackConfig = require('./webpack.config.js')
  app.use(webpackMiddleware(webpack(webpackConfig), {}))
}


app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.get('/version', (req, res) => {
  res.send('1.1')
})

//check github webhook