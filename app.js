import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.';

/* global process */
const express = require("express");
const app = express();
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000;
app.use(express.static("dist"));
app.listen(PORT, () => {
    // console.log("server started on port 5000");
});


const root = createRoot(document.getElementById('root'));
root.render( < App / > );