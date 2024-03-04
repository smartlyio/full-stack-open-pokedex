import React from 'react';
import { createRoot } from 'react-dom';
import App from './App.';

// Server.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.static("dist"));
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

// Client.jsx


const root = createRoot(document.getElementById('root'));
root.render( < App / > );