const express = require("express");

const app = express();

app.use(express.static("public"));

const users = require("./state").users;

app.get("/users", (req, res, next) => {
  return res.send(users);
});
app.get("/users/1", (req, res, next) => {
  return res.send(users[0]);
});
app.post("/users", (req, res, next) => {
  users.push({
    _id: 6,
    name: "Paul",
    occupation: "developer",
    avatar:
      "https://pbs.twimg.com/profile_images/858002219311837185/3hOvqcN1_400x400.jpg"
  });
  return res.json(users[users.length - 1]);
});
app.put("/users/1", (req, res, next) => {
  users[0].name = "bob";
  return res.json(users[0]);
});
app.get("/users/1", (req, res, next) => {
  users.splice(0, 1);
  return res.send("deleted");
});

app.listen(3002, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3002");
});
