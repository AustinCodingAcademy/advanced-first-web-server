const Vehicle = require('../models/VehicleModel')

exports.list = function list(req,res){
    Vehicle.find(function(err,vehicles){
        if(err)
          return console.log(err);
          else{
            res.json(vehicles) 
          }    
    })
};
exports.show = function show(req,res){
    Vehicle.findById(req.params.id,function(err,vehicle){
        if(err)
          return console.log(err);
          else{
            res.json(vehicle)  
          }  
    })
};
exports.create = function create(req,res){
    let newVehicle = new Vehicle(req.body);
    newVehicle.save()
    res.json(newVehicle)  
};
exports.update = function update(req,res){
    Vehicle.findByIdAndUpdate(req.params.id,{$set:req.body},{new: true},function(err,vehicle){
        if(err){
            console.log(err)
        }
        res.json(vehicle)   
    }); 
};
exports.remove = function remove(req,res){
    Vehicle.deleteById(req.params.id,function (err) {});
    res.send("deleted")
}
