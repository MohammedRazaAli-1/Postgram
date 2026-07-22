const express = require('express');

const postmodel = require('./models/post.model');

const app = express();

app.use(express.json())

module.exports = app