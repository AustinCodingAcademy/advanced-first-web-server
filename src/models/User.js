// User model file
// http://austincodingacademy.github.io/fullstack-gitbook/lesson-8/lesson-8.html
// http://mongoosejs.com/docs/guide.html

// import {Schema } from 'mongoose';
// var kittySchema = mongoose.Schema({
//     name: String
// });

import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  name: String,
  occupation: String,
  avatar: String
});

// remember to use the SINGULAR version of 'User' below
// mongoose looks for "users" by default
export default mongoose.model('User', userSchema);
