// 192.168.166.160

let express = require("express");
let users = require("./state.js").users;

const app = express();

app.use(express.static('public'))

app.get("/users",function(req,res,next){
    return res.send(users);
});

app.get("/users/1",function(req,res,next){
    return res.send(users[0]);
});

app.post("/users",function(req,res,next){
    users.push({
        "_id": 5,
        "name": "William Wallace",
        "occupation": "Scottish man",
        "avatar": "https://en.wikipedia.org/wiki/File:Wallace_Monument_20080505_Stained_glass_William_Wallace.jpg"
        })
        return res.send(users);
});

app.put("/users/1",function(req,res,next){
    users[0].name = "King Dale Cooper";
    return res.send(users[0]);
});

app.delete("/users",function(req,res,next){
    let nombre = users[0].name
    users.shift();
    return res.send("rip "+nombre);
});

app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3002");
});
