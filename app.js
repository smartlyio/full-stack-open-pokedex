const express = require('express');
const app = express();

//eslint-disable-next-line
const PORT = process.env.PORT || 5000;

app.use(express.static('dist'));

app.listen(PORT, () => {
    //eslint-disable-next-line
    console.log('server started on port 5000');
});

app.get('/health', (req, res) => {
    res.send('ok');
});

app.get('/version', (req, res) => {
    res.send('1');
});
