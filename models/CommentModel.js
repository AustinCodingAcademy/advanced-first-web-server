const mongoose = require('mongoose');

let commentSchema = new mongoose.Schema({
    body: String
});

let Comment = mongoose.model('Comment', commentSchema);



module.exports = Comment