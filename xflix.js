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