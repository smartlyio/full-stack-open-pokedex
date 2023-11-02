import express, { static as expressStatic } from 'express'
const app = express()

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(expressStatic('dist'))

app.listen(PORT, () => {
	console.log('server started on port 5000')
})
