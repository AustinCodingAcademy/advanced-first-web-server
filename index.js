const express = require("express");

const app = express();

app.use(express.static("public"));

const users = require("./state").users;
app.use((req, res, next) => {
  switch (req.method) {
    case "GET":
      switch (req.path) {
        case "/users":
          res.send(users);
          break;
        case "/users/1":
          res.send(users[0]);
          break;
        default:
          res.send("Not Found");
      }
      break;
    case "POST":
      switch (req.path) {
        case "/users":
          users.push({
            _id: 6,
            name: "Paul",
            occupation: "developer",
            avatar:
              "https://pbs.twimg.com/profile_images/858002219311837185/3hOvqcN1_400x400.jpg"
          });
          res.json(users[users.length - 1]);
          break;
        default:
          res.send("Not Found");
      }
      break;
    case "PUT":
      switch (req.path) {
        case "/users/1":
          users[0].name = "bob";
          res.json(users[0]);
          break;
        default:
          res.send("Not Found");
      }
      break;
    case "DELETE":
      switch (req.path) {
        case "/users/1":
          users.splice(0, 1);
          res.send("deleted");
          break;
        default:
          res.send("Not Found");
      }
      break;
    default:
      res.send("Invalid Request");
  }
});

app.listen(3002, err => {
  if (err) {
    return console.log("Error", err);
  }
  console.log("Web server is now living in apartment 3002");
});
