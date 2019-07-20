//Parts 3 and 4: bring in body-parser, use Path Variables :

const express = require('express');
const bodyParser = require('body-parser');
const state = require("./state");

let users = state.users
const app = express();

app.use(bodyParser.json());

//GET:
app.get("/users", function(req,res){
        res.json(users)
});
//GET w Path Variables:
app.get("/users/name/:userName",function(req,res){
        let filtereduser = users.filter(u=>u.name === req.params.userName)
        res.json(filtereduser)
});
app.get("/users/:someid",function(req,res){
        let foundUser = users.find(u=>u["_id"] == req.params.someid)
        res.json(foundUser)
});
//POST:
app.post("/users",function(req,res) {
    let newUser = req.body;
    users.push(newUser)
    res.json(newUser)
});
//PUT:
app.put("/users/:someid",function(req,res){
        let foundUserIndex = users.findIndex((u => u["_id"] == req.params.someid));
        users[foundUserIndex] = req.body
        res.json(req.body)
});
//DELETE: w/ new key value "isActive:false".
app.delete("/users/:someid",function(req,res){
        let foundUserIndex = users.findIndex((u => u["_id"] == req.params.someid));
        users[foundUserIndex].isActive= "false";
        res.send("deleted")
});

app.listen(8080, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 8080...")
})
