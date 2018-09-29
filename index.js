let express = require ("express");
let bodyParser = require ("body-parser");

const app = express();
app.use (bodyParser.json());
app.listen (3002,(err) => {
    if (err) {
        return console.log ("Error, err");
    }
});





//Part 2//
/*## Part 2. Use the express built in REST methods to do the same thing as Part 1
* Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js
* Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js
* Give your server the ability to respond to a POST request with a path "/users" and just add a hard coded user object to the users array from state.js. .json() the last user in the array to send it back to the client. (if you do another GET request you should see this added)
* Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value on the first user object in the users array in state.js. .json() this user to send it back to the client.
* Give your server the ability to respond to a DELETE request with a path "/users/1" and remove one item from the users array. send() back a messsage "deleted" */


//users + GET means we ant to interact with the entire array of users and get all of them//
app.get ("/users", function (request,response, next)
{
  response.send (arr.users);
});
//users/1 + GET means look at the entire array of users and find the first one//
app.get ("/users/1", function (req,res,next){
    return (users[1]);
});
//users + POST means get the entire array of users and add another user to it.
app.post ("/users",function (request,response,next){
    response.json (arr.length-1)
});
//users/1 + PUT means look at the entire array of users and find the first one and update it//
app.put ("/users/1", function (request,response,next){
    response.json(user1.name = Fred)
});
//users/1 + DELETE means look at the entire array of users and delete one of them//
app.delete ("/users/1", function (request,response,next){
    response.send(arr.delete[1]("deleted"))
});




