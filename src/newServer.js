import express from 'express';
/*  eslint-disable no-unused-vars*/
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import User from './models/Users';

/* eslint-disable */

mongoose.connect('mongodb://localhost/local');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('MongoDB is connected');
});

const app = express();
app.use(bodyParser.json());


const PORT = 3000;




app.get('/recipes', (request, response, next) => {
  console.log('recipes was requested');
  return response.json({
    message: 'recipes is a go-go'
  });
});

app.get('/users', (request, response, next) => {
  console.log('things was requested');
  return response.json({
    message: 'things is now a go-go'
  });
});

app.get('/newget', (request, response, next) => {
  console.log('newget was requested');
  return response.json({
    message: 'newget is now going'
  });
});

app.get('/extra', (request, response, next) => {
  console.log('this is getting extra');
  return response.json({
    message: 'EXTRA EXTRA'
  });
});

// Put things above this function
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log('newServer app is running on port', PORT);
});
