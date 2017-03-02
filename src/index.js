// Require the express module (package.json)
const express = require('express');
const bodyParser = require('body-parser');

// Create a new instance of express
const app = express();

// Connect to our mongo database
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/movie-list');

app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const MovieRoutes = require('./routes/MovieRoutes');
app.use(MovieRoutes);

app.use(function (err, request, response) {
  return response.status(500).send('Uh oh something went wrong! ' + err);
});

// Set our port to server the application on
const PORT = 3001;

// Tell our instance of express to listen to request made on our port
app.listen(PORT, function (err) {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
