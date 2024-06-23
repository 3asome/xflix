// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/movies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div>
      <h1>Xflix</h1>
      <input type="search" value={searchTerm} onChange={handleSearch} placeholder="Search for movies and TV shows" />
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie._id}>
            <img src={movie.poster} alt={movie.title} />
            <h2>{movie.title}</h2>
            <p>{movie.synopsis}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;