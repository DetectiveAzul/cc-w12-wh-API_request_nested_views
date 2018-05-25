const PubSub = require('../helpers/pub_sub.js');
const MovieView = require('./movie_view.js')

const MovieListView = function(element) {
  this.element = element;
  this.movies = null;
}


MovieListView.prototype.receiveData = function () {
  PubSub.subscribe('MovieData:movies-ready', (event) => {
    //console.log(event.detail);
    this.movies = event.detail;
    this.createMovieViews();
  });
};

MovieListView.prototype.createMovieViews = function () {
  this.movies.forEach((movie) => {
    this.createMovieView(movie);
  });
};

MovieListView.prototype.createMovieView = function (movie) {
  const movieView = new MovieView(movie);
  this.element.appendChild (movieView.createElement());
  console.log('I am a movie', movieView.movie);
};


module.exports = MovieListView;
