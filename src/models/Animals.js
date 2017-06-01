import mongoose from 'mongoose';

const animalSchema = mongoose.Schema({
  commonName: String,
  latinName: String,
  country: String,
  foodSource: String,
  predator: String,
  threatLevel: Number,
});

export default mongoose.model('Animal', animalSchema);
