const express = require('express');
const app = express();

// Heroku dynamically sets a port
// eslint-disable-next-line
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/health', (req, res) => {
    res.send('OK');
});

app.get('/version', (req, res) => {
    res.send('1');
});

app.listen(PORT, () => {
    // eslint-disable-next-line
    console.log('server started on port 5000');
});
