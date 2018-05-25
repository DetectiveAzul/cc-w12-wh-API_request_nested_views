const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const config = require('../../config.json');

const MovieData = function() {
  this.movieData = null;
}

MovieData.prototype.getData = function () {
  const request = new Request(config.movieAPI);
  request.get( (movieData) => {
    this.movieData = movieData;
    PubSub.publish('MovieData:movies-ready', this.movieData);
  });
};

MovieData.prototype.receiveFilter = function() {
  PubSub.subscribe('MovieFilterView:filtered-director', (event) => {
    const filteredMovies = this.filterMovieData(event.detail);
    console.log(filteredMovies);
    PubSub.publish('MovieData:movies-ready', filteredMovies);
  });
};

MovieData.prototype.filterMovieData = function (director) {
  return this.movieData.filter((movie) => {
    return (director === undefined || director === 'All' || movie.director === director)
  });
};

module.exports = MovieData;

// PubSub.subscribe('MovieFilterView:filtered-director', (event) => {
