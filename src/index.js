import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Connect to mongoose db
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contact-list');

app.use(bodyParser.json());

const contactRoutes = require('./routes/ContactRoutes');
app.use(contactRoutes);

// Declare the route
app.all('/*', (request, response) => {
  return response.send(request.params['0']);
});

// Error handler middleware
app.use(function (err, request, response) {
  return response.status(500).send('You done screwed up. ' + err);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
