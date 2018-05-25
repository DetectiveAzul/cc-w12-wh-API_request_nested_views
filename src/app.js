const MovieData = require('./models/movie_data.js');
const MovieListView = require('./views/movie_list_view.js');

console.log('JS file loaded');
document.addEventListener('DOMContentLoaded', () => {
  //console.log('DOM Content loaded');
  // Start Movie ListView
  const movieListElement = document.querySelector('div#movie-list');
  const movieListView = new MovieListView(movieListElement);
  movieListView.receiveData();
  
  //Start Model
  const movieData = new MovieData();
  movieData.getData();
});
