const express = require('express')
const app = express()

app.get('/version', (req, res) => {
	res.send('1') // change this string to ensure a new version deployed
})

// Heroku dynamically sets a port
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
	console.log('server started on port 5000')
})