const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  movieTitle: {
    required: true,
    type: String
  },

  PosterPath: {
    required: true,
    type: String
  },

  overview: {
    required: true,
    type: String
  },

  releasedate: {
    required: true,
    type: String
  }
});

module.exports = mongoose.model('Movie', movieSchema);
