let express = require("express");

const app = express();
app.use(express.static('public'));

let users = require("./state").users;

app.use(function(req, res, next) {

   request.method
   if (request.path === "/user") {
      return res.send(users);
   } else {
      return res.send("not found");
   }
})

app.listen(3002, (err) => {localStorage
   if (err) {
      return console.log("Error", err);
   }
   console.log("Web server is now living in apartment 3002");
})