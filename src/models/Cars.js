import mongoose from 'mongoose';

const carSchema = mongoose.Schema({
  make: String,
  model: String,
  year: Number,
  type: String,
  engine: String,
  mpg: Number,
  price: Number,
});

export default mongoose.model('Car', carSchema);
