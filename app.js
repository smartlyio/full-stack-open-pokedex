const express = require('express')
const app = express()
const { exec } = require('child_process')

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/health', (req, res) => { // 11.11 - health check
  res.send('ok') // 11.12
  exec('sh ./health_check.sh', (err, stdout, stderr) => {
    if (err || stderr) {
      return res.send('1')
    }
    console.log(stdout)
  })
})




app.get('/version', (req, res) => { // 11.11 - version endpoint
  res.send('1') // change this string to ensure a new version deployed
}
)


app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
