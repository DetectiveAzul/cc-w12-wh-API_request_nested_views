const PubSub = require('../helpers/pub_sub.js');

const MovieSortTitleView = function(element) {
  this.element = element;
};

MovieSortTitleView.prototype.bindEvents = function () {
  element.addEventListener('click', (event) => {
    // PubSub.publish('MovieSortTitleView:sort-by-title', event.target.)
    console.log(event.target.);
  });
};

module.exports = MovieSortTitleView;
