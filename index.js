let express = require("express");

const app = express();

const users = require('./state.js').users

let newUser = {
    "_id": 6,
    "name": "???",
    "occupation": "???",
    "avatar": "https://upload.wikimedia.org/wikipedia/en/5/50/Agentdalecooper.jpg"

}
//use this function when any request comes in on port 3002
app.get("/users", (req,res)=>{
    return res.send(users)
})

app.get('/users/1', (req,res) =>{
    return res.send(users[0])
})
app.post('/users', (req,res)=>{
    users.push(newUser)
    return res.send(users)
})
app.put('/users/1', (req, res)=>{
    users[0].occupation = 'Irs'
    return res.send(users[0])
})

app.delete('/users/1',(req,res)=>{
    users.shift()
    return res.send('deleted')
})



//listening on port 3002
app.listen(3002, (err) => {
    if (err) {
        return console.log("Error", err);
    }
    console.log("Web server is now living in apartment 3002");
});

