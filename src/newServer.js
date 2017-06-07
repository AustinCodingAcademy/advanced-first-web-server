/*  eslint-disable no-unused-vars*/

// the library we're using to handle request and responses
import express from 'express';

// connects our database to the client
import mongoose from 'mongoose';

// parses the json file out from models for request and responses
import bodyParser from 'body-parser';

// this promise must be global so mongoose can use it with DB and in here
mongoose.Promise = global.Promise;

// this is where our secret encoder is
require('dotenv').config();

// we use models to maintain data structure integrity and and handle CRUD Methods
// CRUD = Create, Read, Update, Delete
// Is singular because we are talking about one single instance of the entire
// database
// import User from './models/UserModel';
// import Place from './models/Places';
// import Car from './models/Cars';
// import Animal from './models/Animals';

import AuthenticationRouter from './routers/AuthenticationRouter';

// Use mongoose to connect the database to the server port??
mongoose.connect('mongodb://localhost/local');

// copy/pasted from mongoose documentation - change var to const
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // console.log to make sure its running
  console.log('MongoDB is connected');
});

// this is our entry point, it creates the app we can access all thing with the
// express function(s)
const app = express();

// says to use the bodyParser function to return responses and requests
// it is a middleware and it extends the functionality of the express
app.use(bodyParser.json());
// Uses the AuthenticationController to route to the right place
app.use(AuthenticationRouter);

// sets the port for the app to run on.
const PORT = 3000;

// important to NOTE when creating new instances keep the variable in the scope
// of that function because in Node.js all vars are accessible and any user can
// change them. keep vars local to the function that needs them.

app.use((err, request, response, next) => {
  console.log('error middleware is executed');
  // this must have a status to return in the response correctly
  return response.status(500).json({
    message: err.message
  });
});

const People = [
  { id: 1,
    name: 'Joe',
    age: 67
  },
  { id: 2,
    name: 'Jill',
    age: 78
  },
  { id: 3,
    name: 'Jack',
    age: 30
  },
  { id: 4,
    name: 'Jane',
    age: 7
  },
];

// .get methods listen for get requests
// .get handles GET requests, points the request to a file and return a response
app.get('/people', (request, response, next) => {
  console.log('users was requested');
  return response.json(People);
});

// this wild card id creates a key value pair id:## inside the params objects
app.get('/people/:id', (request, response) => {
  const query = request.params;
  console.log(query);
  const match = People.find((person) => {
    return String(person.id) === query.id;
  });
  if (match) {
    return response.json(match);
  }
  return response.json('nothing in ' + query.id);
});

// This is the wildcard to take care of any random inputs
app.get('/people/*', (request, response) => {
  console.log('didn\'t find that user');
  return response.json(null);
});

// is pushing the POST request to the array of People this know as State-ful
// because it remembers
app.post('/people', (request, response) => {
  //  the body object is created with the body-parser that express app is using
  console.log(request.body);
  const newPerson = {id: People.length + 1, ...request.body};
  People.push(newPerson);
  return response.json({newPerson});
});

app.delete('/people', (request, response) => {
  const toCut = request.params;
  console.log('delete was received for ' + toCut);
  const match = People.find((person) => {
    return String(person.id) === toCut.id;
  });
  // if (match) {
  //   return response.json(match);
  // }
  // @TODO: add delete function
  return response.json('just deleted ' + toCut.id);
});

// .get handles GET requests, points the request to a file and return a response
app.get('/users', (request, response, next) => {
  console.log('things was requested');
  return response.json({
    message: 'things is now a go-go'
  });
});

// .get handles GET requests, points the request to a file and return a response
app.get('/newget', (request, response, next) => {
  console.log('newget was requested');
  return response.json({
    message: 'newget is now going'
  });
});

// .get handles GET requests, points the request to a file and return a response
app.get('/extra', (request, response, next) => {
  console.log('this is getting extra');
  return response.json({
    message: 'EXTRA EXTRA'
  });
});

// Put things above this function
// .listen is a method that takes a PORT as an argument and set the app to
// run on that PORT; second arguments is a function that can take an error log
// always need to implement an error case in case and error is happening.
// Look at express documentation for implementing error logging
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('newServer app is running on port', PORT);
});
