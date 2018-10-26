const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.json());

const users = require("./state").users;

// Set an id variable equal to the current ammount of users
let idCount = users.length;

// Returns the index of the user in the users array that matches the id
function findUser(id) {
  return users.findIndex(user => {
    return user._id === Number(id);
  });
}

// Return all users
app.get("/users", (req, res, next) => {
  return res.send(users);
});

// Return single user based on id
app.get("/users/:userid", (req, res, next) => {
  const index = findUser(req.params.userid);
  if (index < 0) return res.send("User not found");
  return res.send(users[index]);
});

// Add a user
app.post("/users", (req, res, next) => {
  idCount++;
  users.push({ ...req.body, _id: idCount });
  return res.json(users[users.length - 1]);
});

// Change a value in a single user object based on id
app.put("/users/:userid", (req, res, next) => {
  const index = findUser(req.params.userid);
  if (index < 0) return res.send("User not found");
  users[index].name = "bob";
  return res.json(users[index]);
});

// Delete a single user based on id
app.delete("/users/:userid", (req, res, next) => {
  const index = findUser(req.params.userid);
  if (index < 0) return res.send("User not found");
  users.splice(index, 1);
  return res.send("deleted");
});

app.use((req, res, next) => {
  res.send("404 Page not found.");
});

app.listen(3002, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3002");
});
