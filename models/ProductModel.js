const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
});

let Product = mongoose.model('Product', productSchema);



module.exports = Product