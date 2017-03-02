const express = require('express');
const router = express.Router();
const MoviesController = require('../controllers/MoviesController');

router.get('/movies', MoviesController.list);

router.get('/movies/:_id', MoviesController.show);

router.post('/movies', MoviesController.create);

router.put('/movies/:_id', MoviesController.update);

router.delete('/movies/:_id', MoviesController.remove);

module.exports = router;
