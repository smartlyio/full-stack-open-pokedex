const express = require('express');
const app = express();

// Conditionally load dotenv in development mode
if (process.env.NODE_ENV === 'development') {
  const dotenv = require('dotenv');
  dotenv.config();
}

const PORT = process.env.PORT || 3000;
app.use(express.static('dist'));

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
