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

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`


const movieList = document.getElementById('movie-list');

// Sample movie data
const movies = [
    { title: 'Movie 1', poster: 'https://picsum.photos/100/150' },
    { title: 'Movie 2', poster: 'https://picsum.photos/100/150' },
    { title: 'Movie 3', poster: 'https://picsum.photos/100/150' },
    { title: 'Movie 4', poster: 'https://picsum.photos/100/150' },
    { title: 'Movie 5', poster: 'https://picsum.photos/100/150' },
];

// Render movie list
movies.forEach((movie) => {
    const listItem = document.createElement('li');
    const moviePoster = document.createElement('img');
    const movieTitle = document.createElement('h3');

    moviePoster.src = movie.poster;
    movieTitle.textContent = movie.title;

    listItem.appendChild(moviePoster);
    listItem.appendChild(movieTitle);
    movieList.appendChild(listItem);
});
