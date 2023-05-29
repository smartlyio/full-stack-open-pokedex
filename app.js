import express from 'express'
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(static("dist"))

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
