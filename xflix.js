// server.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/xflix', { useNewUrlParser: true, useUnifiedTopology: true });

const movieSchema = new mongoose.Schema({
  title: String,
  poster: String,
  synopsis: String,
  cast: [String],
  genre: String,
  rating: Number
});

const Movie = mongoose.model('Movie', movieSchema);

app.get('/movies', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

app.get('/movies/:id', async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});