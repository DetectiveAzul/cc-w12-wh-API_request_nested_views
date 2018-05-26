const MovieView = function(movie) {
  this.movie = movie;
  this.element = null;
};

MovieView.prototype.createElement = function () {
  const movieDiv = document.createElement('div');
  movieDiv.setAttribute('id', 'movie');
  return this.element = movieDiv;
};

MovieView.prototype.render = function() {
  this.renderHTMLElement('img', 'movie-poster', 'id')
  this.renderHTMLElement('h2', 'movie-title', 'title');
  this.renderHTMLElement('p', 'movie-year', 'release_date');
  this.renderHTMLElement('p', 'movie-description', 'description');
};

MovieView.prototype.renderHTMLElement = function(elementType, htmlClass, content) {
  const element = document.createElement(elementType);
  element.classList.add(htmlClass);

  if (elementType === 'img') {
    element.src = `images/${this.movie[content]}.jpg`;
  } else {
    element.textContent = this.movie[content];
  }
  this.element.appendChild(element);
}

module.exports = MovieView;
