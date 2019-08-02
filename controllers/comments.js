const Comment = require('../models/CommentModel')

exports.list = function list(req,res){
    Comment.find(function(err,comments){
        if(err)
          return console.log(err);
          else{
            res.json(comments) 
          }    
    })
};
exports.show = function show(req,res){
    Comment.findById(req.params.id,function(err,comment){
        if(err)
          return console.log(err);
          else{
            res.json(comment)  
          }  
    })
};
exports.create = function create(req,res){
    let newComment = new Comment(req.body);
    newComment.save()
    res.json(newComment)  
};

exports.update = function update(req,res){
    Comment.findByIdAndUpdate(req.params.id,{$set:req.body},{new: true},function(err,comment){
        if(err){
            console.log(err)
        }
        res.json(comment)   
    }); 
};

exports.remove = function remove(req,res){
    Comment.deleteById(req.params.id,function (err) {});
    res.send("deleted")
}