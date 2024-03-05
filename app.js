import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.';
const express = require("express");
const app = express();
// Heroku dynamisch setzt einen Port
//
const PORT = process.env.PORT || 5000;
app.use(express.static("dist"));
app.listen(PORT, () => {
    //
    //console.log(`Server started on port ${PORT}`);
});
const root = createRoot(document.getElementById('root'));
root.render( < App / > );