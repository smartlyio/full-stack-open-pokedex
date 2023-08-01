const express = require('express')
const app = express()

const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header')

app.use(expressCspHeader({
  directives: {
    'default-src': [SELF],
    'script-src': [SELF, INLINE, 'somehost.com'],
    'style-src': [SELF, 'mystyles.net'],
    'img-src': ['data:', 'images.com'],
    'worker-src': [NONE],
    'block-all-mixed-content': true
  }
}))

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
