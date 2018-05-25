const MovieView = function(movie) {
  this.movie = movie;
  this.element = null;
};

MovieView.prototype.createElement = function () {
  const movieDiv = document.createElement('div');
  movieDiv.setAttribute('id', 'movie');
  return this.element = movieDiv;
};

module.exports = MovieView;
