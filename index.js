
let express = require("express");
let users = require("./state").users;
const app = express();

//I commented out the original code before refactoring using Express, and included the instructions

//app.use(function(request,response,next){
    //Give your server the ability to respond to a GET request with a path "/users" and return the users array from state.js
    // if (request.path == "/users" && request.method == "GET"){
    //     return response.send(users);
    // }
app.get("/users", function(request, response, next){
    response.send(users);
}
    //Give your server the ability to respond to a GET request with a path "/users/1" and return the first user object from the users array from state.js
    // if (request.path == "/users/1" && request.method == "GET"){
    //     return response.send(users[0]);
    // }
    app.get("/users/1", function(request, response, next){
        response.send(users[0]);
    }   
    // //Give your server the ability to respond to a POST request with a path "/users" and just add a hard coded user object to the users array from state.js. .json() the last user in the array to send it back to the client. (if you do another GET request you should see this added)
    // if (request.path == "/users" && request.method == "POST"){
    //     users.push({
    //         "_id": 6,
    //         "name": "Dora",
    //         "occupation": "Explorer",
    //         "avatar": "https://en.wikipedia.org/wiki/Dora_the_Explorer#/media/File:Dora_and_Boots.jpg"
    //     });
    //     return response.send(users[users.length-1]).json();
    // }
    app.post("/users", function(request, response, next){
        let newUser = {
            "_id": 6,
            "name": "Dora",
            "occupation": "Explorer",
            "avatar": "https://en.wikipedia.org/wiki/Dora_the_Explorer#/media/File:Dora_and_Boots.jpg"
        };
        users.push(newUser);
        response.send(newUser);
    }
    // //Give your server the ability to respond to a PUT request with a path "/users/1" and just change any key value on the first user object in the users array in state.js. .json() this user to send it back to the client.
    // if (request.path == "/users/1" && request.method == "PUT"){
    //     users[0] = {
    //         "_id": 1,
    //         "name": "Dale Cooper",
    //         "occupation": "Pilot",
    //         "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
    //     }
    //     return response.send(users[0]).json();
    // }
    app.put("/users/1", function(request, response, next){
        users[0] ={
            "_id": 1,
            "name": "Dale Cooper",
            "occupation": "Pilot",
            "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"
        };
        response.send(users[0]);
    }   


    // //Give your server the ability to respond to a DELETE request with a path "/users/1" and remove one item from the users array. send() back a messsage "deleted"
    // if (request.path == "/users/1" && request.method == "DELETE"){
    //     users.shift(); //remove the first user in the array
    //     return response.send("deleted");
    // }
    app.delete("/users/1", function(request, response, next){
        users.shift();
        response.send("deleted");
    }


 


app.listen(100, (err) => {
if (err) {
  return console.log("Error", err);
}
console.log("Web server is now living in apartment 100");
});
