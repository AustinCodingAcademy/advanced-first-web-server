import express from 'express';
import mongoose from 'mongoose';
import ContactRoutes from './routes/ContactRoutes';
import bodyParser from 'body-parser';

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/contact-list');

app.use(bodyParser.json());
app.use(ContactRoutes);
app.use(function (err, request, response) {
  return response.status(500).send(`Whoops... mistakes were made. ${err}`);
});

const PORT = 3001;

app.listen(PORT, (err) => {
  if (err) {
    return console.log('ERROR!', err);
  }

  return console.log('Listening on: http://localhost:' + PORT);
});
