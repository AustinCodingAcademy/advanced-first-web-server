/*  eslint-disable no-unused-vars*/

// the library we're using to handle request and responses
import express from 'express';

// connects our database to the client
import mongoose from 'mongoose';

// parses the json file out from models for request and responses
import bodyParser from 'body-parser';

// we use models to maintain data structure integrity and and handle CRUD Methods
// CRUD = Create, Read, Update, Delete
// Is singular because we are talking about one single instance of the entire
// database
import User from './models/Users';
// import Place from './models/Places';
// import Car from './models/Cars';
// import Animal from './models/Animals';

// Use mongoose to connect the database to the server port??
mongoose.connect('mongodb://localhost/local-users');

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
app.use(bodyParser.json());

// sets the port for the app to run on.
const PORT = 3000;

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

app.post('/people', (request, response) => {
  console.log('Post was recieved');
  return response.json({
    response: 'post'
  });
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
