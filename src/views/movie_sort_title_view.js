const PubSub = require('../helpers/pub_sub.js');

const MovieSortTitleView = function(element) {
  this.element = element;
};

MovieSortTitleView.prototype.bindEvents = function () {
  this.element.addEventListener('click', (event) => {
    PubSub.publish('MovieSortView:sort', event.target.id);
  });
};

module.exports = MovieSortTitleView;
