const express = require('express')
const app = express()

const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header')

app.use(expressCspHeader({
  directives: {
    'default-src': [SELF,'https://pokemon-pfru.onrender.com/','https://pokeapi.co/'],
    'script-src': [SELF, INLINE, 'https://pokemon-pfru.onrender.com/'],
    'style-src': [SELF, 'https://pokemon-pfru.onrender.com/'],
    'img-src': ['data:', 'images'],
    'worker-src': [NONE],
    'block-all-mixed-content': true
  }
}))

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
