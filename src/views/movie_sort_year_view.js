const PubSub = require('../helpers/pub_sub.js');

const MovieSortYearView = function(element) {
  this.element = element;
};

MovieSortYearView.prototype.bindEvents = function () {
  this.element.addEventListener('click', (event) => {
    PubSub.publish('MovieSortView:sort', event.target.id);
  });
};
module.exports = MovieSortYearView;
