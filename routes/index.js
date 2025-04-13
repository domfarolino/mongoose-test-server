const express = require('express');
const router  = express.Router();
const mongoose = require('mongoose');

// Mongoose setup.
//
// A temporary server that I've spun up just to debug
// https://github.com/Automattic/mongoose/issues/15015.
const MONGO_URL = `mongodb+srv://dom:Ax1xvo2c3iaWtEKj@main-cluster.5fjrn1r.mongodb.net/?retryWrites=true&w=majority&appName=main-cluster`;
mongoose.connect(MONGO_URL);

mongoose.connection.on('error', _ => console.error('connection error:'));
mongoose.connection.once('open', _ => {console.log('Connected to mongoose!')});

router.get('/', (request, response, next) => {
  response.status(200).send(`Loaded path '/' correctly!`);
});

module.exports = router;
