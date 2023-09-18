const express = require('express')
const app = express()
const { exec } = require('child_process')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => { // 11.11 - health check
  res.send('ok')
})

app.get('/custom_health_check', (req, res) => { // 11.12 - custom health check
  res.send('everything is ok')
  exec('run ./health_check.sh', (err) => {
    if (err) {
      res.send('1')
    } else {
      res.send('0')
    }
  })
})


app.get('/version', (req, res) => { // 11.11 - version endpoint
  res.send('1') // change this string to ensure a new version deployed
}
)


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
