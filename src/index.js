import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './models/Users';

/*  eslint-disable no-unused-vars*/

mongoose.connect('mongodb://localhost/local-users');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MongoDB is connected');
});

const app = express();
const PORT = 5100;

app.use(bodyParser.json());


// This is the middleware we added in on May31,2017
app.use((err, request, response, next) => {
  console.log('my middleware is running');
  next(err);
});

app.get('/', (request, response) => {
  return response.json({
    this: 'is working'
  });
});

app.get('/thesecond', (request, response, next) => {
  return next(new Error('Error is thrown'));
});

app.get('/*', (err, request, response) => {
  return response.json({
    couldnt: 'find anything so were posting this as an error.'
  });
});

app.listen(PORT, () => {
  console.log('server is listening on port ', PORT);
});

app.post('/users', (request, response) => {
  const user = new User(request.body);

  user.save()
    .then(storedUser => {
      console.log('User was saved');
      return response.json(storedUser);
    })
    .catch(() => {
      console.log('User was NOT saved');
      return response.json('Executed');
    });
});

app.use((err, request, response) => {
  console.log('Error is thrown line 62', err);
  return response.status(500).json({message: err.message});

});
