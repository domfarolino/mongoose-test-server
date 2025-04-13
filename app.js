'use strict';

const path = require('path');
const express = require('express');

const routes = require('./routes/index');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', routes);

console.log('Creating server on port', 8000);
require('http').createServer(app).listen(8000, _ => {});

// Catch 404 and forward to error handler.
app.use((request, response, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use((err, request, response, next) => {
  response.status(err.status || 500);
  response.send(`${err.status} Error: ${err.message}`);
});

module.exports = app;
