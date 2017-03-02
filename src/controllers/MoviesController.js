const MovieModel = require('../models/MovieModel');
const MoviesController = {};

MoviesController.list = function (request, response, next) {
  MovieModel.find().exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

MoviesController.show = function (request, response, next) {
  MovieModel.findById(request.params._id).exec()
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

MoviesController.create = function (request, response, next) {
  const movie = new MovieModel({
    movieTitle: request.body.movieTitle,
    PosterPath: request.body.PosterPath,
    overview: request.body.overview,
    releasedate: request.body.releasedate,
  });

  movie.save()
    // When the save completes, return the newly created contact
    .then(data => {
      return response.json(data);
    })
    .catch(err => {
      return next(err);
    });
};

MoviesController.update = function (request, response, next) {
  MovieModel.findById(request.params._id)
    .then(movie => {
      movie.movieTitle = request.body.movieTitle || movie.movieTitle;
      movie.PosterPath = request.body.PosterPath || movie.PosterPath;
      movie.overview = request.body.overview || movie.overview;
      movie.releasedate = request.body.releasedate || movie.releasedate;

      return movie.save();
    })
    .then(movie => {
      return response.json(movie);
    })
    .catch(err => {
      return next(err);
    });
};

MoviesController.remove = function (request, response, next) {
  MovieModel.findByIdAndRemove(request.params._id).exec()
        .then(movie => {
          return response.json(movie);
        })
        .catch(err => {
          return next(err);
        });
};

module.exports = MoviesController;
