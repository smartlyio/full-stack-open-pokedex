const express = require('express');
const app = express();

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/health', (req, res) => {
	throw 'error...';
	// eslint-disable-next-line no-unreachable
	res.send('ok');
});

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
