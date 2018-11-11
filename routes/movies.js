const express = require("express");
const router = express.Router();
const MoviesController = require('../controllers/movies.js');

router.get("/", MoviesController.movies_get_all);
router.get("/:movie_id", MoviesController.movies_get_movie);
module.exports = router;

