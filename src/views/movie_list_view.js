const PubSub = require('../helpers/pub_sub.js');
const MovieView = require('./movie_view.js')

const MovieListView = function(element) {
  this.element = element;
  this.movies = null;
}


MovieListView.prototype.receiveData = function () {
  this.receiveFilter();
  PubSub.subscribe('MovieData:movies-ready', (event) => {
    //console.log(event.detail);
    this.movies = event.detail;
    this.createMovieViews();
  });

};

MovieListView.prototype.receiveFilter = function() {
  PubSub.subscribe('MovieFilterView:filtered-director', (event) => {
    console.log(event.detail);
  });
}

MovieListView.prototype.createMovieViews = function () {
  this.clearElement();
  this.movies.forEach((movie) => {
    const movieView = this.createMovieView(movie);
    movieView.render();
  });
};

MovieListView.prototype.createMovieView = function (movie) {
  const movieView = new MovieView(movie);
  this.element.appendChild (movieView.createElement());
  return movieView;
};

MovieListView.prototype.clearElement = function() {
  this.element.innerHTML = '';
}


module.exports = MovieListView;
