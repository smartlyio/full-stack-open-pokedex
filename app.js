const express = require('express');
const app = express();
import { PORT } from './utils';

app.use(express.static('dist'));

app.listen(PORT, () => {
	console.log(`server started on port ${PORT}`);
});
