const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const config = require('../../config.json');

const MovieData = function() {
  this.movieData = null;
  this.filter = null;
  this.director = 'All';
};

MovieData.prototype.getData = function () {
  const request = new Request(config.movieAPI);
  this.selectSortBy();
  request.get( (movieData) => {
    this.movieData = movieData;
    PubSub.publish('MovieData:movies-ready', this.movieData);
  });
};

MovieData.prototype.receiveFilter = function() {
  PubSub.subscribe('MovieFilterView:filtered-director', (event) => {
    this.director = event.detail;
    this.sortAndFilter();
  });
};

MovieData.prototype.filterMovieData = function (director) {
  return this.movieData.filter((movie) => {
    return (director === 'All' || movie.director === director);
  });
};

MovieData.prototype.selectSortBy = function () {
  PubSub.subscribe('MovieSortView:sort', (event) => {
    this.filter = event.detail;
    this.sortAndFilter();
  });
};

MovieData.prototype.sortMovies = function (movieData) {
  if (this.filter === 'title-sort') {
    return this.sortByTitle(movieData);
  } else {
    return this.sortByYear(movieData);
  };
};

MovieData.prototype.sortByTitle = function (movieData) {
  return movieData.sort((movie1, movie2) => {
    return (movie1.title > movie2.title) ? 1 : ((movie2.title > movie1.title) ? -1 : 0);
  });
};

MovieData.prototype.sortByYear = function (movieData) {
  return movieData.sort((movie1, movie2) => {
    return (movie1.release_date > movie2.release_date) ? 1 : ((movie2.release_date > movie1.release_date) ? -1 : 0);
  });
};

MovieData.prototype.sortAndFilter = function () {
  const filteredMovies = this.filterMovieData(this.director);
  const sortedMovies = this.sortMovies(filteredMovies);
  PubSub.publish('MovieData:movies-ready', sortedMovies);

};

module.exports = MovieData;
