const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request_helper.js');
const config = require('../../config.json');

const MovieData = function() {

}

MovieData.prototype.getData = function () {
  const request = new Request(config.movieAPI);
  request.get( (movieData) => {
    //console.log(movieData);
    PubSub.publish('MovieData:movies-ready', movieData);
  });
};


module.exports = MovieData;
