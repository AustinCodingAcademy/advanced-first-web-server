import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  occupation: String,
  avatar: String
});

export default mongoose.model('User', userSchema);
