const Product = require('../models/ProductModel')

exports.list = function list(req,res){
    Product.find(function(err,products){
        if(err)
          return console.log(err);
          else{
            res.json(products) 
          }    
    })
};
exports.show = function show(req,res){
    Product.findById(req.params.id,function(err,product){
        if(err)
          return console.log(err);
          else{
            res.json(product)  
          }  
    })
};
exports.create = function create(req,res){
    let newProduct = new Product(req.body);
    newProduct.save()
    res.json(newProduct)  
};
exports.update = function update(req,res){
    Product.findByIdAndUpdate(req.params.id,{$set:req.body},{new: true},function(err,product){
        if(err){
            console.log(err)
        }
        res.json(product)   
    }); 
};
exports.remove = function remove(req,res){
    Product.deleteById(req.params.id,function (err) {});
    res.send("deleted")
}
