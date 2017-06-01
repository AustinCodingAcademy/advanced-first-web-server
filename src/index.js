// 1. Import the express module
import express from "express";

// 12. import bodyparser middleware
//     yarn add body-paser
import bodyParser from "body-parser";

// 14. import mongoose
// yarn add mongoose
import mongoose from "mongoose";

// 17. import models
import User from "./models/User.js";

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

// 20. middleware lecture - Example
app.use((request, response, next) => {
  console.log("middleware is executed")
  next();
});



// 8.   db of users
// const users = [
//   {
//     id: 1,
//     name: 'Dale Cooper'
//   },
//   {
//     id: 2,
//     name: 'Spike Spiegel'
//   }
// ];


// 3. Set our port to server the application on
const PORT = 8001;


// 6. / route
app.get("/", (request, response) => {
  console.log("/route was called");
  return response.json({
    that: "works for /"
  });
});


// 5. users route
app.get('/users', (request, response, next) => {
//  console.log("/users route was called ", users);

// 23. new user - ^^ add 'next above too'


// user object is defined below from the POST
  User.find().exec()
  .then((data) => {
    return response.json(data);
  })
  .catch(err => {
    return console.log('fetching failed ', err.message);
    // return response.json('exectued');
  });
});


/* filtering the get

User.find({
  name: 'nick1'
}).exec()...


http://someurl.com/users?name=blitzen

"name" is the in the request

*/




//22. added next
app.get('/users/:id', (request, response, next) => {

  User.findById(request.params.id).exec()
  .then ((user) => {
    return response.json(user);
  })
  .catch((err) => {
// 22. sned  error  to error handler
    return next(err);
  });
  // console.log(request.params.id);
  // // return response.json(null);
  // const foundUser = users.find((user) => {
  //   return String(user.id) === request.params.id
  // });
  // console.log(foundUser);
  // return response.json(foundUser || null);
});

// 14. delete
app.delete('/users/:id', (request, response, next) => {
  User.findByIdAndRemove(request.params.id).exec()
  .then((user) => {
    return response.json(user);
  })
  .catch((err) => {
    console.log('Error deleting ', err.message);
    return next(err);
  });
});

// // 10.  post to users array
// app.post("/users", (request, response) => {
// //  console.log(request);
//   const user = {
//     id: users.length + 1,
//     ...request.body
//   };
//   users.push(user);
//   return response.json(user);
// });

app.post('/users', (request, response, next) => {
  // create user object first;  new instance of User
  const user = new User(request.body);

  user.save()  // promise
 .then(storedUser => {
   console.log('User was saved');
   return response.json(storedUser);
 })
 .catch((err) => {
   console.log('User was NOT saved');
   // return response.json('Executed')
   return next(err);
 });
});


// 7.  default message route
app.get('/*', (request, response) => {
  return response.json({
    message: 'Not implmented yet'
  });
});


// 21. middleweare lecutre - error example
// pass as a function; 4 arguments make it an error handler
// 3 arguments it is exectued like "normal" middleware
app.use((err, request, response, next) => {
  console.log('error middleware is executed', err)
  // next();

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
