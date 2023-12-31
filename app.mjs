import express from 'express'
import process from 'process'
import path from 'path'
import { fileURLToPath } from 'url'



// Calcula el directorio actual a partir de import.meta.url
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'dist' })
})

app.get('/health-check', (req, res) => {
  throw new Error('Health check failed')
  // eslint-disable-next-line no-unreachable
  console.log('Health check passed')
  res.status(200).json({ status: 'ok' })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log('server started on port 5000')
})
