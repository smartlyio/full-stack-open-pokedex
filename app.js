const express = require('express')
const app = express()

const { expressCspHeader, INLINE, NONE, SELF } = require('express-csp-header')

app.use(expressCspHeader({
  directives: {
    'default-src': [SELF,'https://pokemon-pfru.onrender.com/','https://pokeapi.co/'],
    'script-src': [SELF, INLINE, 'https://pokemon-pfru.onrender.com/'],
    'style-src': [SELF, INLINE, 'https://pokemon-pfru.onrender.com/','https://pokeapi.co', 'https://fonts.googleapis.com/'],
    'img-src': ['data:', 'images', 'https://raw.githubusercontent.com/'],
    'worker-src': [NONE],
    'block-all-mixed-content': true
  }
}))

const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.status(200).send('Everything goody')
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
