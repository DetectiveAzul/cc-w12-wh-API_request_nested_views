const PubSub = require('../helpers/pub_sub.js');

const MovieFilterView = function(element) {
  this.element = element;
  this.populated = false;
};

MovieFilterView.prototype.receiveData = function () {
  PubSub.subscribe('MovieData:movies-ready', (event) => {
    if (this.populated === false) this.populateMenu(event.detail);
    this.element.addEventListener('change', (event) => {
      PubSub.publish('MovieFilterView:filtered-director', event.target.value);
    });
  });
};

MovieFilterView.prototype.populateMenu = function (movieData) {
  const filteredOptions = this.filterOptions(movieData);
  filteredOptions.forEach( (director) => {
    this.createOption(director);
  });
  this.populated = true;
};

MovieFilterView.prototype.filterOptions = function (movieData) {
  const listOfDirectors = movieData.map( (movie) => {
    return movie.director;
  });
  const filteredDirectors = listOfDirectors.filter( (director, position, array) => {
    if (position === array.indexOf(director)) return director;
  });
  return filteredDirectors.sort();
};

MovieFilterView.prototype.createOption = function(director) {
  const option = document.createElement('option');
  option.value = director;
  option.textContent = director;
  this.element.appendChild(option);
};

module.exports = MovieFilterView;
