let state = require('../state');
let users = state.users

//GET
exports.list = function list(req,res){
    res.json(users)
};
//GET by ID
exports.show = function show(req,res){
    let foundUser = users.find(u=>u["_id"] == req.params.someid)
    res.json(foundUser)
};
//GET by name
exports.showByName = function(req,res){
    let filtereduser = users.filter(u=>u.name === req.params.userName)
    res.json(filtereduser)
};
//POST
exports.create = function create(req,res){
    let newUser = req.body;
    users.push(newUser)
    res.json(newUser)
};
//PUT
exports.update = function update(req,res){
    let foundUserIndex = users.findIndex((u => u["_id"] == req.params.someid));
    users[foundUserIndex] = req.body
    res.json(req.body)
};
//DELETE
exports.remove = function remove(req,res){
    let foundUserIndex = users.findIndex((u => u["_id"] == req.params.someid));
    users[foundUserIndex].isActive= "false";
    res.send("deleted")
}

//NOTE to self: CRUD API: Create, Read, Update and Delete