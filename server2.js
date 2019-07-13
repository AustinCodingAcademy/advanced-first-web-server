//Part Two: Express Routes:

const express = require('express');
//const bodyParser = require('body-parser');
const state = require("./state");

let users = state.users
const app = express();
 
app.get("/users", function(req,res){
        res.json(users)
    });
app.get("/users/1",function(req,res){
        res.json(users[0])
    });
app.post("/users",function(req,res) {
        res.json(users.push({
        "_id": 6,
        "name": "Fox Mulder",
        "occupation": "Another FBI Agent",
        "avatar": "https://pbs.twimg.com/profile_images/718881904834056192/WnMTb__R.jpg"}));
    });
app.put("/users/1",function(req,res){
        res.json(users[0].name ="A.D. Skinner")
    });
app.delete("/users/1",function(req,res){
        res.send("deleted")
        res.json(users[0] = {})  
    });

app.listen(3000, (err)=>{
    if(err){
        console.log("Nothing here, kid", err)
    };
    console.log("Server running on port 3000...")
})
