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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/Fluidify.js":
/*!*******************************!*\
  !*** ./resources/Fluidify.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Fluidify; });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./resources/helpers.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Fluidify =
/*#__PURE__*/
function () {
  function Fluidify(elem) {
    _classCallCheck(this, Fluidify);

    this.elem = elem;
    this.videoPlayer = $('iframe[src*="youtube.com"], \
        ' + 'iframe[src*="vimeo.com"], \
        ' + 'iframe[src*="wistia.com"], \
        ' + 'iframe[src*="kickstarter.com"]');
    $ = jQuery;
  }

  _createClass(Fluidify, [{
    key: "setStyles",
    value: function setStyles() {
      var fluidWrap = '<style>' + 'iframe[src*="youtube.com"], \
        ' + 'iframe[src*="vimeo.com"], \
        ' + 'iframe[src*="wistia.com"], \
        ' + 'iframe[src*="kickstarter.com"] { \
            width: 100%; \
            height: 100%; \
        } \
        </style>';
      $('body').prepend(fluidWrap);
      this.videoPlayer.wrap('<div class="fluidify-wrapper">');
      this.videoPlayer.each(function () {
        $(this).css({
          'width': '100%'
        });
      });
    } // Determine the size of the video player wrapper

  }, {
    key: "setSize",
    value: function setSize() {
      var video = {};
      video.ratio = 0.5625, //16x9 aspect ratio
      video.width = $('.fluidify-wrapper').width(), video.height = video.ratio * video.width, // change the size of the video based on the ratio
      this.videoPlayer.css({
        'width': video.width,
        'height': video.height
      });
    } // Make the video player fluid/responsive

  }, {
    key: "makeFluid",
    value: function makeFluid() {
      var _this = this;

      var fluidifyVideo = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__["debounce"])(function () {
        _this.setSize();
      }, 5);
      $(window).on('resize', fluidifyVideo);
    }
  }, {
    key: "init",
    value: function init() {
      this.setStyles();
      this.setSize();
      this.makeFluid();
    }
  }]);

  return Fluidify;
}();



/***/ }),

/***/ "./resources/helpers.js":
/*!******************************!*\
  !*** ./resources/helpers.js ***!
  \******************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
        args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

;


/***/ }),

/***/ "./resources/index.js":
/*!****************************!*\
  !*** ./resources/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fluidify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fluidify */ "./resources/Fluidify.js");


(function ($) {
  $.fn.fluidify = function () {
    var elem = this;
    new _Fluidify__WEBPACK_IMPORTED_MODULE_0__["default"](this).init();
  };
})(jQuery);

jQuery('body').fluidify();

/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./resources/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ChrisHammond/Documents/SITES/Github-Projects/fluidify/resources/index.js */"./resources/index.js");


/***/ })

/******/ });
//# sourceMappingURL=fluidify.js.map