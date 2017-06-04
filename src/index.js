// 1. Import the express module
import express from "express";

// 2. create the Router
const express = express.Router();

// 3. import models
import User from "./models/User.js";

// 12. import bodyparser middleware
//     yarn add body-paser
import bodyParser from "body-parser";

// 14. import mongoose
// yarn add mongoose
import mongoose from "mongoose";



// 15.  odbc
// http://mongoosejs.com/docs/index.html

mongoose.connect('mongodb://localhost/q2-contact-list');

// http://mongoosejs.com/docs/connections.html
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("mongoDB connected");
});

// 2. Create a new instance of express
const app = express();

// 13. use bodyparser middleware with express
app.use(bodyParser.json());

// add the references to the Router()
app.use(UserRouter);

// 20. middleware lecture - Example
app.use((request, response, next) => {
  console.log("middleware is executed")
  next();
});

// 3. Set our port to server the application on
const PORT = 8001;


// 6. / route
app.get("/", (request, response) => {
  console.log("/route was called");
  return response.json({
    that: "works for /"
  });
});



// 7.  default message route
app.get('/*', (request, response) => {
  return response.json({
    message: 'not implmented yet'
  });
});


// 21. middleweare lecutre - error example
// pass as a function; 4 arguments make it an error handler
// 3 arguments it is exectued like "normal" middleware
app.use((err, request, response, next) => {
  console.log("error middleware is executed", err)

// 23.  error response plus status code
  return response.status(500).json({message: err.message});
});

// 4. Tell our instance of express to listen to request made on our port
app.listen(PORT, (err) => {
  if (err) {
    return console.log('Error!', err);  // error handler just in cases
  }
  return console.log('Listening on: http://localhost:' + PORT)
});
