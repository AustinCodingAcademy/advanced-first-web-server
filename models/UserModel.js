const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    occupation: String,
    weapon: String
});

let User = mongoose.model('User', userSchema);



module.exports = User