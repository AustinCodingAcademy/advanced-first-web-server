import express from 'express';
import bodyParser from 'body-parser';
import ContactRoutes from './routes/ContactRoutes';

const app = express();

// Connect to mongoose db
import mongoose from 'mongoose';
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contact-list');

app.use(bodyParser.json());
app.use(ContactRoutes);

// Error handler middleware
app.use(function (err, request, response) {
  return response.status(500).send(err);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
