const express = require("express");
const bodyParser = require("body-parser")
const users = require("./state").users;

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static Path
// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));

// userId can be anything, custom variable
app.get("/users:userId", function (req, res, next) {
   res.json(users[req.params.userId])
})

// GET
app.get("/users", function(req, res, next) {
   res.json(users);
})

// POST
app.post("/users", function(req, res, next) {
   const newUser = {
      _id: users[users.length - 1]._id + 1,
      name: req.body.name,
      occupation: "developer",
      avatar: "https://pbs.twimg"
   }
   users.push(newUser);
   return res.json(newUser);
})

// use is generic, default action if not post, get, etc.
app.use(function(req, res) {
   res.send("not found");
})

// PUT
app.put('/users/:id', (req, res, next) => {
   users[req.params.id].name = "Bob";

   return res.send(users[req.params.id]);
})

// DELETE
app.delete('/users/:id', (req, res, next) => {
   users.splice(req.params.id, 1);

   return res.send(users);
})

// tell server to listen on port 3002
app.listen(3002, (err) => {
   if (err) {
      return console.log("Error", err);
   }
   console.log("Web server is now living in apartment 3002");
})