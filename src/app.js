const MovieData = require('./models/movie_data.js');
const MovieListView = require('./views/movie_list_view.js');
const MovieFilterView = require('./views/movie_filter_view.js');

console.log('JS file loaded');
document.addEventListener('DOMContentLoaded', () => {
  //console.log('DOM Content loaded');
  const movieData = new MovieData();
  movieData.receiveFilter();

  // Start Movie Filter View
  const movieFilterElement = document.querySelector('#filter-by select');
  const movieFilterView = new MovieFilterView(movieFilterElement);
  movieFilterView.receiveData();
  // Start Movie List View
  const movieListElement = document.querySelector('div#movie-list');
  const movieListView = new MovieListView(movieListElement);
  movieListView.receiveData();

  //Start Model
  movieData.getData();
});
