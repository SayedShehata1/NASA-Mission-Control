// express code
const express = require("express");
const app = express();

// use middleware to parse any incoming JSON from Requests
app.use(express.json());

module.exports = app;
