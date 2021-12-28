const express = require('express');
const app = express();
const PORT = require('./utils').PORT;

app.use(express.static('dist'));

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
