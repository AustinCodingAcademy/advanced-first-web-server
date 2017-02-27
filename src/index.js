import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// Connect to mongo database
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contact-list');

app.use(bodyParser.json());

import contactRoutes from './routes/ContactRoutes';
app.use(contactRoutes);

app.use(function (err, request, response) {
  return response.status(500).send('Uh oh something went wrong! ' + err);
});

// Set our port
const PORT = 3001;

// Tell our instance of express to listen to request made on our port
app.listen(PORT, function (err) {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
