/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/*! exports provided: movieAPI, default */
/***/ (function(module) {

eval("module.exports = {\"movieAPI\":\"https://ghibliapi.herokuapp.com/films\"};\n\n//# sourceURL=webpack:///./config.json?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovieData = __webpack_require__(/*! ./models/movie_data.js */ \"./src/models/movie_data.js\");\nconst MovieListView = __webpack_require__(/*! ./views/movie_list_view.js */ \"./src/views/movie_list_view.js\");\n\nconsole.log('JS file loaded');\ndocument.addEventListener('DOMContentLoaded', () => {\n  //console.log('DOM Content loaded');\n  // Start Movie ListView\n  const movieListElement = document.querySelector('div#movie-list');\n  const movieListView = new MovieListView(movieListElement);\n  movieListView.receiveData();\n  \n  //Start Model\n  const movieData = new MovieData();\n  movieData.getData();\n});\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/pub_sub.js":
/*!********************************!*\
  !*** ./src/helpers/pub_sub.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n  publish: function(channel, payload) {\n    const event = new CustomEvent(channel, {\n      detail: payload\n    });\n    document.dispatchEvent(event);\n  },\n  subscribe: function(channel, callback) {\n    document.addEventListener(channel, callback);\n  }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./src/helpers/pub_sub.js?");

/***/ }),

/***/ "./src/helpers/request_helper.js":
/*!***************************************!*\
  !*** ./src/helpers/request_helper.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Request = function (url) {\n  this.url = url\n}\n\nRequest.prototype.get = function (onComplete) {\n  const xhr = new XMLHttpRequest();\n  xhr.open('GET', this.url);\n  xhr.addEventListener('load', function() {\n    if(this.status !== 200){\n      return;\n    }\n    const data = JSON.parse(this.responseText);\n    onComplete(data);\n  });\n  xhr.send();\n};\n\nmodule.exports = Request;\n\n\n//# sourceURL=webpack:///./src/helpers/request_helper.js?");

/***/ }),

/***/ "./src/models/movie_data.js":
/*!**********************************!*\
  !*** ./src/models/movie_data.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst Request = __webpack_require__(/*! ../helpers/request_helper.js */ \"./src/helpers/request_helper.js\");\nconst config = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n\nconst MovieData = function() {\n\n}\n\nMovieData.prototype.getData = function () {\n  const request = new Request(config.movieAPI);\n  request.get( (movieData) => {\n    //console.log(movieData);\n    PubSub.publish('MovieData:movies-ready', movieData);\n  });\n};\n\n\nmodule.exports = MovieData;\n\n\n//# sourceURL=webpack:///./src/models/movie_data.js?");

/***/ }),

/***/ "./src/views/movie_list_view.js":
/*!**************************************!*\
  !*** ./src/views/movie_list_view.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./src/helpers/pub_sub.js\");\nconst MovieView = __webpack_require__(/*! ./movie_view.js */ \"./src/views/movie_view.js\")\n\nconst MovieListView = function(element) {\n  this.element = element;\n  this.movies = null;\n}\n\n\nMovieListView.prototype.receiveData = function () {\n  PubSub.subscribe('MovieData:movies-ready', (event) => {\n    //console.log(event.detail);\n    this.movies = event.detail;\n    this.createMovieViews();\n  });\n};\n\nMovieListView.prototype.createMovieViews = function () {\n  this.clearElement();\n  this.movies.forEach((movie) => {\n    const movieView = this.createMovieView(movie);\n    movieView.render();\n  });\n};\n\nMovieListView.prototype.createMovieView = function (movie) {\n  const movieView = new MovieView(movie);\n  this.element.appendChild (movieView.createElement());\n  return movieView;\n};\n\nMovieListView.prototype.clearElement = function() {\n  this.element.innerHTML = '';\n}\n\n\nmodule.exports = MovieListView;\n\n\n//# sourceURL=webpack:///./src/views/movie_list_view.js?");

/***/ }),

/***/ "./src/views/movie_view.js":
/*!*********************************!*\
  !*** ./src/views/movie_view.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MovieView = function(movie) {\n  this.movie = movie;\n  this.element = null;\n};\n\nMovieView.prototype.createElement = function () {\n  const movieDiv = document.createElement('div');\n  movieDiv.setAttribute('id', 'movie');\n  return this.element = movieDiv;\n};\n\nMovieView.prototype.render = function() {\n  this.renderHTMLElement('h2', 'movie-title', 'title');\n  this.renderHTMLElement('p', 'movie-description', 'description');\n};\n\n\n\nMovieView.prototype.renderHTMLElement = function(elementType, htmlClass, content) {\n  const element = document.createElement(elementType);\n  element.classList.add(htmlClass);\n  element.textContent = this.movie[content];\n  this.element.appendChild(element);\n}\n\nmodule.exports = MovieView;\n\n\n//# sourceURL=webpack:///./src/views/movie_view.js?");

/***/ })

/******/ });