const User = require('../models/UserModel')


exports.list = function list(req,res){
    User.find(function(err,users){
        if(err)
          return console.log(err);
          else{
            res.json(users) 
          }    
    })
};

exports.show = function show(req,res){
    User.findById(req.params.id,function(err,user){
        if(err)
          return console.log(err);
          else{
            res.json(user)  
          }  
    })
};
exports.create = function create(req,res){
    let newUser = new User(req.body);
    newUser.save()
    res.json(newUser)  
};

exports.update = function update(req,res){
    User.findByIdAndUpdate(req.params.id,{$set:req.body},{new: true}, function(err,user){
        if(err){
            console.log(err)
        }
        res.json(user)   
    }); 
};

exports.remove = function remove(req,res){
    User.deleteById(req.params.id,function (err) {});
    res.send("deleted")
}
