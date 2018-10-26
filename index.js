const express = require("express");
const bodyParser = require("body-parser")
const users = require("./state").users;
let idCount = users.length;

const app = express();

// Set Static Path
app.use(express.static('public'));
// Body Parser Middleware
app.use(bodyParser.json());

// GET
app.get("/users", function(req, res, next) {
   res.json(users);
})

app.get("/users/1", function (req, res, next) {
   res.json(users[0])
})

// userId can be anything, custom variable
app.get("/users/:userId", function (req, res, next) {
   return res.json(users[req.params.userId - 1]);
})

// POST
// adding hardcoded user object to state.js users array
// app.post("/users", function(req, res, next) {
//    const newUser = {
//       _id: users[users.length - 1]._id + 1,
//       name: req.body.name,
//       occupation: "developer",
//       avatar: "https://pbs.twimg"
//    }
//    users.push(newUser);
//    return res.json(users[users.length - 1]);
// })

app.post("/users", (req, res, next) => {
   idCount++;
   const newUser = {
      _id: idCount,
      name: req.body.name
   }
   users.push(newUser);
   return res.json(users[users.length - 1]);
})

// PUT
app.put('/users/1', (req, res, next) => {
   users[0].name = "Bob";
   return res.json(users[0]);
})

app.put('/users/:userId', (req, res, next) => {
   users[req.params.userId - 1].name = "Zora"
   users[req.params.userId - 1].occupation = "Mercenary";
   return res.json(users[req.params.userId - 1]);
})

// DELETE
app.delete('/users/1', (req, res, next) => {
   delete users[0];
   return res.send("deleted");
})

app.delete('/users/:id', (req, res, next) => {
   users[req.params.id - 1].isActive = false;
   return res.send("deleted");
})

// use is generic, default action if not post, get, etc.
app.use(function(req, res) {
   res.send("not found");
})

// tell server to listen on port 3002
app.listen(3002, (err) => {
   if (err) {
      return console.log("Error", err);
   }
   console.log("Web server is now living in apartment 3002");
})