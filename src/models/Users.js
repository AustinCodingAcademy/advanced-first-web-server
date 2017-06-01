import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  occupation: String,
  avatar: String
});

export default mongoose.model('User', userSchema);
