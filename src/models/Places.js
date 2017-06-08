import mongoose from 'mongoose';

const placeSchema = mongoose.Schema({
  name: String,
  latitude: String,
  longitude: String,
  region: String,
  country: String,
  language: String,
  timezone: String,
});

export default mongoose.model('Place', placeSchema);
