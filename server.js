//Part One: 
const express = require('express');
//const bodyParser = require('body-parser');
const state = require("./state");

let users = state.users
const app = express();
 
app.use(function(req,res){
    if(req.method ==="GET" && req.path === "/users"){
        res.json(users)
    };
    if(req.method ==="GET" && req.path === "/users/1"){
        res.json(users[0])
    };
    if(req.method ==="POST" && req.path === "/users"){
        res.json(users.push({
        "_id": 6,
        "name": "Fox Mulder",
        "occupation": "Another FBI Agent",
        "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"}));
    };
    if(req.method ==="PUT" && req.path === "/users/1"){
        res.json(users[0].name ="A.D. Skinner")
    };
    if(req.method ==="DELETE" && req.path === "/users/1"){
        res.send("deleted")
        res.json(users[0] = {})  
    };
    res.send("what do you want??")
})

app.listen(8000, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 8000...")
})
