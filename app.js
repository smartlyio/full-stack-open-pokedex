const express = require('express')
const app = express()


// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

const healthRouter = require('express').Router()
healthRouter.get('/', (req, res) => {
  res.send('ok')
})

const versionRouter = require('express').Router()
versionRouter.get('/', (req, res) => {
  res.send('1.0.1') // change this string to ensure a new version deployed
})

app.use('/health', healthRouter)
app.use('/version', versionRouter)
app.use(express.static('dist'))







app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started on port 5000')
})
