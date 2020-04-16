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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* binding */ Point_Point; });

// CONCATENATED MODULE: ./js/tsunami/geom/math.js
function math_lerp(a, b, t) {
  return a + t * (b - a); // return a(1-t) + bt
}
// CONCATENATED MODULE: ./js/tsunami/geom/Point.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Point_Point = /*#__PURE__*/function () {
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "add",
    value: function add(p) {
      return new Point(this.x + p.x, this.y + p.y);
    }
  }, {
    key: "abs",
    value: function abs() {
      return new Point(Math.abs(this.x), Math.abs(this.y));
    }
  }, {
    key: "clamp",
    value: function clamp(minX, maxX, minY, maxY) {
      this.clampX(minX, maxX);
      this.clampY(minY, maxY);
    }
  }, {
    key: "clampX",
    value: function clampX(min, max) {
      this.x = Math.max(this.x, min);
      this.x = Math.min(this.x, max);
    }
  }, {
    key: "clampY",
    value: function clampY(min, max) {
      this.y = Math.max(this.y, min);
      this.y = Math.min(this.y, max);
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(p) {
      this.x = p.x;
      this.y = p.y;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }
  }, {
    key: "equals",
    value: function equals(point) {
      return this.x == point.x && this.y == point.y;
    }
  }, {
    key: "divide",
    value: function divide(p) {
      return new Point(this.x / p.x, this.y / p.y);
    }
  }, {
    key: "divideScalar",
    value: function divideScalar(scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    }
  }, {
    key: "multiply",
    value: function multiply(p) {
      return new Point(this.x * p.x, this.y * p.y);
    }
  }, {
    key: "multiplyScalar",
    value: function multiplyScalar(scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "subtract",
    value: function subtract(p) {
      return new Point(this.x - p.x, this.y - p.y);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      return {
        x: this.x,
        y: this.y
      };
    }
  }, {
    key: "deserialize",
    value: function deserialize(obj) {
      this.copyFrom(obj);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[Point" + " x=" + this.x + " y=" + this.y + "]";
    }
  }, {
    key: "magnitude",
    get: function get() {
      return Point.distance(this);
    }
  }], [{
    key: "lerp",
    value: function lerp(p0, p1, t) {
      return new Point(math_lerp(p0.x, p1.x, t), math_lerp(p0.y, p1.y, t));
    }
  }, {
    key: "distance",
    value: function distance(p1) {
      var p2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Point();
      return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
    }
  }, {
    key: "polar",
    value: function polar(len, radians) {
      return new Point(len * Math.cos(radians), len * Math.sin(radians));
    }
  }, {
    key: "getAngle",
    value: function getAngle(point) {
      var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Point();
      return Math.atan2(point.y - center.y, point.x - center.x);
    }
  }]);

  return Point;
}();



/***/ }),

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Rectangle = /*#__PURE__*/function () {
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Rectangle);

    this._position = new _Point__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    this._size = new _Point__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    this.center = new _Point__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    this.halfSize = new _Point__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Rectangle, [{
    key: "contains",
    value: function contains(point) {
      var hit = point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height ? true : false;
      return hit;
    }
  }, {
    key: "intersects",
    value: function intersects(rect) {
      return rect.x + rect.width > this.x && rect.y + rect.height > this.y && rect.x < this.x + this.width && rect.y < this.y + this.height;
    }
  }, {
    key: "intersect",
    value: function intersect(b) {
      var a = this;
      var x = Math.max(a.x, b.x);
      var num1 = Math.min(a.x + a.width, b.x + b.width);
      var y = Math.max(a.y, b.y);
      var num2 = Math.min(a.y + a.height, b.y + b.height);
      var result;

      if (num1 >= x && num2 >= y) {
        result = new Rectangle(x, y, num1 - x, num2 - y);
      } else {
        result = new Rectangle();
      }

      return result;
    }
  }, {
    key: "equals",
    value: function equals(rect) {
      return this.x == rect.x && this.y == rect.y && this.width == rect.width && this.height == rect.height;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Rectangle(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(rect) {
      this.x = rect.x;
      this.y = rect.y;
      this.width = rect.width;
      this.height = rect.height;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[Rectangle" + " x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
    }
  }, {
    key: "scaleWidth",
    value: function scaleWidth(height) {
      return new Rectangle(this.x, this.y, height * this.widthToHeight, height);
    }
  }, {
    key: "scaleHeight",
    value: function scaleHeight(width) {
      return new Rectangle(this.x, this.y, width, width * this.heightToWidth);
    }
  }, {
    key: "scaleToFillRect",
    value: function scaleToFillRect(rect) {
      // let scaled = this.scaleHeight(rect.width);
      //
      // if (scaled.height < rect.height) {
      // 	scaled = this.scaleWidth(rect.height);
      // }
      var amount = this.getScaleToFill(rect);
      return this.scale(amount, amount);
    }
  }, {
    key: "scaleToFitRect",
    value: function scaleToFitRect(rect) {
      // let scaled = this.scaleHeight(rect.width);
      //
      // if (scaled.height > rect.height) {
      // 	scaled = this.scaleWidth(rect.height);
      // }
      // scaled.x = (rect.width - scaled.width) / 2;
      // scaled.y = (rect.height - scaled.height) / 2;
      var amount = this.getScaleToFitRect(rect);
      return this.scale(amount, amount);
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      return new Rectangle(this.x, this.y, this.width * x, this.height * y);
    }
  }, {
    key: "scaleToArea",
    value: function scaleToArea(area) {
      var height = Math.sqrt(area / this.widthToHeight);
      var width = area / height;
      return new Rectangle(0, 0, width, height);
    }
  }, {
    key: "getScaleToFill",
    value: function getScaleToFill(rect) {
      var scale;

      if (this.widthToHeight > rect.widthToHeight) {
        scale = rect.height / this.height;
      } else {
        scale = rect.width / this.width;
      }

      return scale;
    }
  }, {
    key: "getScaleToFitRect",
    value: function getScaleToFitRect(rect) {
      var scale;

      if (this.widthToHeight > rect.widthToHeight) {
        scale = rect.width / this.width;
      } else {
        scale = rect.height / this.height;
      }

      return scale;
    }
  }, {
    key: "x",
    get: function get() {
      return this.position.x;
    },
    set: function set(value) {
      this.position.x = value;
      this.center.x = this.position.x + this.halfSize.x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.position.y;
    },
    set: function set(value) {
      this.position.y = value;
      this.center.y = this.position.y + this.halfSize.y;
    }
  }, {
    key: "width",
    get: function get() {
      return this.size.x;
    },
    set: function set(value) {
      this.size.x = value;
      this.halfSize.x = value / 2;
      this.center.x = this.position.x + this.halfSize.x;
    }
  }, {
    key: "height",
    get: function get() {
      return this.size.y;
    },
    set: function set(value) {
      this.size.y = value;
      this.halfSize.y = value / 2;
      this.center.y = this.position.y + this.halfSize.y;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(value) {
      this._position = value;
    }
  }, {
    key: "size",
    get: function get() {
      return this._size;
    },
    set: function set(value) {
      this._size = value;
    }
  }, {
    key: "area",
    get: function get() {
      return this.size.x * this.size.y;
    }
  }, {
    key: "widthToHeight",
    get: function get() {
      return this.width / this.height;
    }
  }, {
    key: "heightToWidth",
    get: function get() {
      return this.height / this.width;
    }
  }, {
    key: "isPortrait",
    get: function get() {
      return this.width <= this.height;
    }
  }, {
    key: "isLandscape",
    get: function get() {
      return this.height <= this.width;
    }
  }]);

  return Rectangle;
}();



/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(24);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tsunami_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);

var params = Object(_tsunami_window__WEBPACK_IMPORTED_MODULE_0__[/* getSearchParams */ "a"])();
var tabId = Number(params.tabId);
chrome.storage.sync.get(["json"], function (result) {
  var data = JSON.parse(result.json);
  var colorTheme = data.settings.colorThemes;
  var isColorThemeLight;

  switch (colorTheme) {
    case "Dark":
    case "Light":
      isColorThemeLight = colorTheme == "Light";
      break;

    default:
      var darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      var isDarkMode = darkModeMatchMedia.matches;
      isColorThemeLight = !isDarkMode;
      break;
  }

  document.body.querySelector(".sc-default").setAttribute("data-theme-light", isColorThemeLight);
});
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  switch (msg.txt) {
    case "scrollCaptureColorTheme":
      document.body.querySelector(".sc-default").setAttribute("data-theme-light", msg.isColorThemeLight);
      break;
  }
});
chrome.runtime.getBackgroundPage(function (page) {
  var player = document.querySelector('.sc-video-player');
  player.addEventListener('canplay', function () {
    this.muted = true;
    player.setAttribute('controls', '1');
    this.play();
    var msg = {
      txt: "scrollCaptureVideoHeigth",
      height: document.body.scrollHeight
    };
    chrome.tabs.sendMessage(tabId, msg);
  });
  var backButton = document.querySelector(".sc-back-button");

  if (backButton) {
    backButton.addEventListener("click", function () {
      var msg = {
        txt: "scrollCaptureLocation",
        location: "scroll-capture/scenario"
      };
      chrome.tabs.sendMessage(tabId, msg);
    });
  }

  if (page.videoURL) {
    player.src = page.videoURL; // let date = new Date();
    // let ampmTime = timeAMPM(date);
    // // Screen Shot 2020-03-20 at 4.35.14 PM
    // let dateData = {
    //     year: date.getFullYear(),
    //     month: addLeadingZero(date.getMonth() + 1),
    //     date: addLeadingZero(date.getDate())
    // };
    // ampmTime.ampm = ampmTime.ampm.toUpperCase();
    // let download = `Scroll Capture ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}.webm`;

    var buttons = document.querySelectorAll("a.sc-download-button");

    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.href = page.videoURL;
      button.download = page.videoFileName;
    }

    var fileNameButton = document.querySelector(".sc-video-filename a.sc-download-button");
    fileNameButton.innerHTML = page.videoFileName;
  }
});

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isMobile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isTouch; });
/* unused harmony export getCookie */
/* unused harmony export serialize */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getSearchParams; });
/* unused harmony export getRect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return localToGlobal; });
/* unused harmony export localToGlobalX */
/* unused harmony export localToGlobalY */
/* unused harmony export isHidden */
/* unused harmony export getDeviceMotionDifference */
/* unused harmony export forceProtocol */
/* unused harmony export fileExists */
/* unused harmony export getElementSelector */
/* harmony import */ var _geom_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


var isMobile = {
  android: navigator.userAgent.match(/Android/i) ? true : false,
  blackBerry: navigator.userAgent.match(/BlackBerry/i) ? true : false,
  iOS: navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false,
  windows: navigator.userAgent.match(/IEMobile/i) ? true : false
};
isMobile.any = isMobile.android || isMobile.blackBerry || isMobile.iOS || isMobile.windows;
var isTouch = ("ontouchend" in window);
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return "";
}
function serialize(obj) {
  var str = [];

  for (var p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  }

  return str.join("&");
}
function getSearchParams(url, dontDecodeURI) {
  var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!url) {
    url = window.location.href;
  }

  if (url.indexOf('?') != -1) {
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
      var string = hashes[i];
      var equalIndex = string.indexOf("=");

      if (equalIndex != -1) {
        var hash = []; //let hash = hashes[i].split('=');

        hash[0] = string.substr(0, equalIndex);
        hash[1] = string.substr(equalIndex + 1);

        if (dontDecodeURI) {
          obj[hash[0]] = hash[1];
        } else {
          obj[hash[0]] = decodeURI(hash[1]);
        }
      } else {
        obj[string] = null;
      }
    }
  }

  return obj;
}
function getRect() {
  var rectangle = new _geom_Rectangle__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
  rectangle.width = window.innerWidth;
  rectangle.height = window.innerHeight;
  return rectangle;
}
function localToGlobal(element, root, point) {
  var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!point) {
    point = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
  }

  while (element && element != root) {
    //point.x += element.offsetLeft - element.parentNode.scrollLeft;
    //point.y += element.offsetTop - element.parentNode.scrollTop;
    // if (debug) {
    // 	console.log("localToGlobal element", element.className, element.offsetTop);
    // }
    point.x += element.offsetLeft;
    point.y += element.offsetTop;
    element = element.parentNode;
  }

  return point;
}
function localToGlobalX(element, root) {
  var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  while (element != root) {
    // if (debug) {
    // 	console.log("element", element.className, element.offsetLeft);
    // }
    x += element.offsetLeft;
    element = element.parentNode;
  }

  return x;
}
function localToGlobalY(element, root) {
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  while (element != root) {
    // if (debug) {
    // 	console.log("element", element.nodeName, element.className, element.offsetTop);
    // }
    y += element.offsetTop;
    element = element.parentNode;
  }

  return y;
}
function isHidden() {
  return document[window.hidden];
}
var devideOrientation = "";
var deviceDirection = "";
function getDeviceMotionDifference(event) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var devideOrientation = "landscape";
  var deviceDirection = "up";
  var x = 0;
  var y = 0;

  if (height > width) {
    devideOrientation = "portrait";
  }

  if (devideOrientation == "portrait") {
    if (event.accelerationIncludingGravity.y > 0) {
      deviceDirection = "down";
    }

    x = event.accelerationIncludingGravity.x;
    y = event.accelerationIncludingGravity.z;
  }

  if (devideOrientation == "landscape") {
    if (event.accelerationIncludingGravity.x > 0) {
      deviceDirection = "down";
    }

    x = event.accelerationIncludingGravity.y;
    y = event.accelerationIncludingGravity.z;
  }

  if (devideOrientation != devideOrientation || deviceDirection != deviceDirection) {
    devideOrientation = devideOrientation;
    deviceDirection = deviceDirection;
    this.initialAccelerationIncludingGravity = {
      x: x,
      y: y
    };
  }

  var diff = {
    x: x - this.initialAccelerationIncludingGravity.x,
    y: y - this.initialAccelerationIncludingGravity.y
  };
  return diff;
}
function forceProtocol(url, protocol) {
  var isHttps = protocol.indexOf("https") != -1;
  var urlIsHttps = url.indexOf("https") != -1;

  if (isHttps && !urlIsHttps) {
    url = url.split("http").join("https");
  } else if (!isHttps && urlIsHttps) {
    url = url.split("https").join("http");
  }

  return url;
}
function fileExists(url) {
  var req = new XMLHttpRequest();
  req.open('HEAD', url, false);
  req.send();
  return req.status !== 404;
}
function getElementSelector(element) {
  var names = [];

  while (element) {
    var elSelector = element.nodeName;
    var className = element.className;

    if (className) {
      elSelector = elSelector + "." + className.split(" ").join(".");
    }

    names.push(elSelector);

    if (element != document.body) {
      element = element.parentNode;
    } else {
      element = null;
    }
  }

  names = names.reverse();
  var selector = names.join(" > ");
  return selector;
}

/***/ })

/******/ });