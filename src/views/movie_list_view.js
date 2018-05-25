const PubSub = require('../helpers/pub_sub.js');

const MovieListView = function(element) {
  this.element = element;
  this.movies = null;
}


MovieListView.prototype.receiveData = function () {
  PubSub.subscribe('MovieData:movies-ready', (event) => {
    //console.log(event.detail);
    this.movies = event.detail;
  });
};




module.exports = MovieListView;
