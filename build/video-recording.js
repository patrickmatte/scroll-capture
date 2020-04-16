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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
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

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./js/tsunami/window.js
var tsunami_window = __webpack_require__(9);

// EXTERNAL MODULE: ./js/tsunami/utils/number.js
var number = __webpack_require__(8);

// CONCATENATED MODULE: ./js/tsunami/utils/date.js

function timeAMPM(date) {
  var hours = date.getHours();
  var ampm = hours >= 12 ? 'pm' : 'am';
  var minutes = Object(number["a" /* addLeadingZero */])(date.getMinutes());
  var seconds = Object(number["a" /* addLeadingZero */])(date.getSeconds());
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    ampm: ampm
  };
}
function formatAMPM(date) {
  var spaceBetween = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var dateData = timeAMPM(date);
  var strTime = dateData.hours + ':' + dateData.minutes + spaceBetween + ampm;
  return strTime;
}
function toUnixString(date) {
  return date.getFullYear() + "-" + Object(number["a" /* addLeadingZero */])(date.getMonth() + 1) + "-" + Object(number["a" /* addLeadingZero */])(date.getDate()) + " " + Object(number["a" /* addLeadingZero */])(date.getHours()) + ":" + Object(number["a" /* addLeadingZero */])(date.getMinutes()) + ":" + Object(number["a" /* addLeadingZero */])(date.getSeconds());
}
function toUnixUTCString(date) {
  return date.getUTCFullYear() + "-" + Object(number["a" /* addLeadingZero */])(date.getUTCMonth() + 1) + "-" + Object(number["a" /* addLeadingZero */])(date.getUTCDate()) + " " + Object(number["a" /* addLeadingZero */])(date.getUTCHours()) + ":" + Object(number["a" /* addLeadingZero */])(date.getUTCMinutes()) + ":" + Object(number["a" /* addLeadingZero */])(date.getUTCSeconds());
}
function addHours(date, hours) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return date;
}
function addDays(date, days) {
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  return date;
}
var months = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
};
function getMonth(date, language) {
  if (!language) {
    language = "en";
  }

  var month;

  switch (language) {
    case "en":
      month = months[language][date.getMonth()];
      break;
  }

  return month;
}
function getAge(birthDate) {
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
    age--;
  }

  return age;
}
function treatAsUTC(date) {
  var result = new Date(date);
  result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
  return result;
}
function minutesBetween(startDate, endDate) {
  var millisecondsPerMinute = 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerMinute;
}
function hoursBetween(startDate, endDate) {
  var millisecondsPerHour = 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerHour;
}
function daysBetween(startDate, endDate) {
  var millisecondsPerDay = 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}
function weeksBetween(startDate, endDate) {
  var millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerWeek;
}
function monthsBetween(startDate, endDate) {
  var millisecondsPerMonth = 365 / 12 * 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerMonth;
}
function yearsBetween(startDate, endDate) {
  var millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
  return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerYear;
}
function getFamiliarTimeBetween(startDate, endDate) {
  var text = "";
  var yearsBetween = yearsBetween(startDate, endDate);

  if (yearsBetween >= 1) {
    var yearsBetweenFloor = Math.floor(yearsBetween);

    if (yearsBetweenFloor > 1) {
      text = yearsBetweenFloor.toString() + " years ago";
    } else {
      text = yearsBetweenFloor.toString() + " year ago";
    }
  } else {
    var _monthsBetween = _monthsBetween(startDate, endDate);

    if (_monthsBetween >= 1) {
      var monthsBetweenFloor = Math.floor(_monthsBetween);

      if (monthsBetweenFloor > 1) {
        text = monthsBetweenFloor.toString() + " months ago";
      } else {
        text = monthsBetweenFloor.toString() + " month ago";
      }
    } else {
      var _weeksBetween = _weeksBetween(startDate, endDate);

      if (_weeksBetween >= 1) {
        var weeksBetweenFloor = Math.floor(_weeksBetween);

        if (weeksBetweenFloor > 1) {
          text = weeksBetweenFloor.toString() + " weeks ago";
        } else {
          text = weeksBetweenFloor.toString() + " week ago";
        }
      } else {
        var _daysBetween = _daysBetween(startDate, endDate);

        if (_daysBetween >= 1) {
          var daysBetweenFloor = Math.floor(_daysBetween);

          if (daysBetweenFloor > 1) {
            text = daysBetweenFloor.toString() + " days ago";
          } else {
            text = daysBetweenFloor.toString() + " day ago";
          }
        } else {
          var _hoursBetween = _hoursBetween(startDate, endDate);

          if (_hoursBetween >= 1) {
            var hoursBetweenFloor = Math.floor(_hoursBetween);

            if (hoursBetweenFloor > 1) {
              text = hoursBetweenFloor.toString() + " hours ago";
            } else {
              text = hoursBetweenFloor.toString() + " hour ago";
            }
          } else {
            var _minutesBetween = _minutesBetween(startDate, endDate);

            if (_minutesBetween > 1) {
              var minutesBetweenFloor = Math.floor(_minutesBetween);

              if (minutesBetweenFloor > 1) {
                text = minutesBetweenFloor.toString() + " minutes ago";
              } else {
                text = minutesBetweenFloor.toString() + " minute ago";
              }
            } else {
              text = "Just now";
            }
          }
        }
      }
    }
  }

  return text;
}
// CONCATENATED MODULE: ./js/video-recording.js



var params = Object(tsunami_window["a" /* getSearchParams */])();
var tabId = Number(params.tabId);
chrome.storage.local.get(["json"], function (result) {
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
}); // let backButton = document.querySelector(".sc-back-button");
// if (backButton) {
//     backButton.addEventListener("click", () => {
//         let msg = { txt: "scrollCaptureLocation", location: "scroll-capture/scenario" };
//         chrome.tabs.sendMessage(tabId, msg);
//     });
// }

chrome.runtime.getBackgroundPage(function (page) {
  if (page.videoURL) {
    console.log("page.videoURL", page.videoURL);
    player.src = page.videoURL;
    var date = new Date();
    var ampmTime = timeAMPM(date); // Screen Shot 2020-03-20 at 4.35.14 PM

    var dateData = {
      year: date.getFullYear(),
      month: Object(number["a" /* addLeadingZero */])(date.getMonth() + 1),
      date: Object(number["a" /* addLeadingZero */])(date.getDate())
    };
    ampmTime.ampm = ampmTime.ampm.toUpperCase();
    var videoFileName = "Scroll Capture ".concat(dateData.year, "-").concat(dateData.month, "-").concat(dateData.date, " at ").concat(ampmTime.hours, ".").concat(ampmTime.minutes, ".").concat(ampmTime.seconds, " ").concat(ampmTime.ampm, ".webm");
    var buttons = document.querySelectorAll("a.sc-download-button");

    for (var i = 0; i < buttons.length; i++) {
      var button = buttons[i];
      button.href = page.videoURL;
      button.download = videoFileName;
    }

    var fileNameButton = document.querySelector(".sc-video-filename a.sc-download-button");
    fileNameButton.innerHTML = videoFileName;
  }
});

/***/ }),

/***/ 8:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getRandomArbitrary */
/* unused harmony export getRandomInt */
/* unused harmony export getRandomIntInclusive */
/* unused harmony export randomWithinRange */
/* unused harmony export randomIntegerWithinRange */
/* unused harmony export isEven */
/* unused harmony export isOdd */
/* unused harmony export isInteger */
/* unused harmony export isPrime */
/* unused harmony export roundDecimalToPlace */
/* unused harmony export loopIndex */
/* unused harmony export isBetween */
/* unused harmony export constrain */
/* unused harmony export createStepsBetween */
/* unused harmony export interpolate */
/* unused harmony export normalize */
/* unused harmony export map */
/* unused harmony export getWeightedAverage */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return format; });
/* unused harmony export formatCurrency */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getOrdinalSuffix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addLeadingZero; });
/* unused harmony export spell */
/* unused harmony export componentToHex */
/* unused harmony export rgbToHex */
/* unused harmony export hexToRgb */
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
} // Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} // Returns a random integer between min (included) and max (included)
// Using Math.round() will give you a non-uniform distribution!

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 Creates a random number within the defined range.

 @param min: The minimum value the random number can be.
 @param min: The maximum value the random number can be.
 @return Returns a random number within the range.
 */

function randomWithinRange(min, max) {
  return min + Math.random() * (max - min);
}
/**
 Creates a random integer within the defined range.

 @param min: The minimum value the random integer can be.
 @param min: The maximum value the random integer can be.
 @return Returns a random integer within the range.
 */

function randomIntegerWithinRange(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}
/**
 Determines if the number is even.

 @param value: A number to determine if it is divisible by <code>2</code>.
 @return Returns <code>true</code> if the number is even; otherwise <code>false</code>.
 @example
 <code>
 console.log(isEven(7)); // Traces false
 console.log(isEven(12)); // Traces true
 </code>
 */

function isEven(value) {
  return (value & 1) == 0;
}
/**
 Determines if the number is odd.

 @param value: A number to determine if it is not divisible by <code>2</code>.
 @return Returns <code>true</code> if the number is odd; otherwise <code>false</code>.
 @example
 <code>
 console.log(isOdd(7)); // Traces true
 console.log(isOdd(12)); // Traces false
 </code>
 */

function isOdd(value) {
  return !isEven(value);
}
/**
 Determines if the number is an integer.

 @param value: A number to determine if it contains no decimal values.
 @return Returns <code>true</code> if the number is an integer; otherwise <code>false</code>.
 @example
 <code>
 console.log(isInteger(13)); // Traces true
 console.log(isInteger(1.2345)); // Traces false
 </code>
 */

function isInteger(value) {
  return value % 1 == 0;
}
/**
 Determines if the number is prime.

 @param value: A number to determine if it is only divisible by <code>1</code> and itself.
 @return Returns <code>true</code> if the number is prime; otherwise <code>false</code>.
 @example
 <code>
 console.log(isPrime(13)); // Traces true
 console.log(isPrime(4)); // Traces false
 </code>
 */

function isPrime(value) {
  if (value == 1 || value == 2) return true;
  if (isEven(value)) return false;
  var s = Math.sqrt(value);

  for (var i = 3; i <= s; i++) {
    if (value % i == 0) return false;
  }

  return true;
}
/**
 Rounds a number's decimal value to a specific place.

 @param value: The number to round.
 @param place: The decimal place to round.
 @return Returns the value rounded to the defined place.
 @example
 <code>
 console.log(roundToPlace(3.14159, 2)); // Traces 3.14
 console.log(roundToPlace(3.14159, 3)); // Traces 3.142
 </code>
 */

function roundDecimalToPlace(value, place) {
  var p = Math.pow(10, place);
  return Math.round(value * p) / p;
}
/**
 Determines if index is included within the collection length otherwise the index loops to the beginning or end of the range and continues.

 @param index: Shop to loop if needed.
 @param length: The total elements in the collection.
 @return A valid zero-based index.
 @example
 <code>
 var colors:Array = new Array("Red", "Green", "Blue");

 console.logcolors[loopIndex(2, colors.length)]); // Traces Blue
 console.logcolors[loopIndex(4, colors.length)]); // Traces Green
 console.logcolors[loopIndex(-6, colors.length)]); // Traces Red
 </code>
 */

function loopIndex(index, length) {
  if (index < 0) index = length + index % length;
  if (index >= length) return index % length;
  return index;
}
/**
 Determines if the value is included within a range.

 @param value: Number to determine if it is included in the range.
 @param firstValue: First value of the range.
 @param secondValue: Second value of the range.
 @return Returns <code>true</code> if the number falls within the range; otherwise <code>false</code>.
 @usageNote The range values do not need to be in order.
 @example
 <code>
 console.log(isBetween(3, 0, 5)); // Traces true
 console.log(isBetween(7, 0, 5)); // Traces false
 </code>
 */

function isBetween(value, firstValue, secondValue) {
  return !(value < Math.min(firstValue, secondValue) || value > Math.max(firstValue, secondValue));
}
/**
 Determines if value falls within a range; if not it is snapped to the nearest range value.

 @param value: Number to determine if it is included in the range.
 @param firstValue: First value of the range.
 @param secondValue: Second value of the range.
 @return Returns either the number as passed, or its value once snapped to nearest range value.
 @usageNote The constraint values do not need to be in order.
 @example
 <code>
 console.log(constrain(3, 0, 5)); // Traces 3
 console.log(constrain(7, 0, 5)); // Traces 5
 </code>
 */

function constrain(value, firstValue, secondValue) {
  return Math.min(Math.max(value, Math.min(firstValue, secondValue)), Math.max(firstValue, secondValue));
}
/**
 Creates evenly spaced numerical increments between two numbers.

 @param begin: The starting value.
 @param end: The ending value.
 @param steps: The number of increments between the starting and ending values.
 @return Returns an Array comprised of the increments between the two values.
 @example
 <code>
 console.log(createStepsBetween(0, 5, 4)); // Traces 1,2,3,4
 console.log(createStepsBetween(1, 3, 3)); // Traces 1.5,2,2.5
 </code>
 */

function createStepsBetween(begin, end, steps) {
  steps++;
  var i = 0;
  var stepsBetween = [];
  var increment = (end - begin) / steps;

  while (++i < steps) {
    stepsBetween.push(i * increment + begin);
  }

  return stepsBetween;
}
/**
 Determines a value between two specified values.

 @param amount: The level of interpolation between the two values. If <code>0</code>, <code>begin</code> value is returned; if <code>1</code>, <code>end</code> value is returned.
 @param begin: The starting value.
 @param end: The ending value.
 @example
 <code>
 console.log(interpolate(0.5, 0, 10)); // Traces 5
 </code>
 */

function interpolate(amount, begin, end) {
  return begin + (end - begin) * amount;
}
/**
 Determines a percentage of a value in a given range.

 @param value: The value to be converted.
 @param minimum: The lower value of the range.
 @param maximum: The upper value of the range.
 @example
 <code>
 console.log(normalize(8, 4, 20).decimalPercentage); // Traces 0.25
 </code>
 */

function normalize(value, minimum, maximum) {
  return new Percent((value - minimum) / (maximum - minimum));
}
/**
 Maps a value from one coordinate space to another.

 @param value: Value from the input coordinate space to map to the output coordinate space.
 @param min1: Starting value of the input coordinate space.
 @param max1: Ending value of the input coordinate space.
 @param min2: Starting value of the output coordinate space.
 @param max2: Ending value of the output coordinate space.
 @example
 <code>
 console.log(map(0.75, 0, 1, 0, 100)); // Traces 75
 </code>
 */

function map(value, min1, max1, min2, max2) {
  return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
}
/**
 Low pass filter alogrithm for easing a value toward a destination value. Works best for tweening values when no definite time duration exists and when the destination value changes.

 If <code>(0.5 < n < 1)</code>, then the resulting values will overshoot (ping-pong) until they reach the destination value. When <code>n</code> is greater than 1, as its value increases, the time it takes to reach the destination also increases. A pleasing value for <code>n</code> is 5.

 @param value: The current value.
 @param dest: The destination value.
 @param n: The slowdown factor.
 @return The weighted average.
 */

function getWeightedAverage(value, dest, n) {
  return value + (dest - value) / n;
}
/**
 Formats a number as a string.

 @param value: The number you wish to format.
 @param kDelim: The character used to seperate thousands; defaults to <code>""</code>.
 @param minLength: The minimum length of the number; defaults to <code>0 </code>.
 @param fillChar: The leading character used to make the number the minimum length; defaults to <code>"0"</code>.
 @return Returns the formatted number as a String.
 @example
 <code>
 console.log(format(1234567, ",", 8)); // Traces 01,234,567
 </code>
 */

function format(value, kDelim, minLength, fillChar) {
  if (!kDelim) {
    kDelim = ",";
  }

  if (isNaN(minLength)) {
    minLength = 0;
  }

  if (!fillChar) {
    fillChar = "0";
  }

  var remainder = value % 1;
  var num = Math.floor(value).toString();
  var len = num.length;

  if (minLength != 0 && minLength > len) {
    minLength -= len;
    var addChar = fillChar || '0';

    while (minLength--) {
      num = addChar + num;
    }
  }

  if (kDelim != null && num.length > 3) {
    var totalDelim = Math.floor(num.length / 3);
    var totalRemain = num.length % 3;
    var numSplit = num.split('');
    var i = -1;

    while (++i < totalDelim) {
      numSplit.splice(totalRemain + 4 * i, 0, kDelim);
    }

    if (totalRemain == 0) numSplit.shift();
    num = numSplit.join('');
  }

  if (remainder != 0) num += remainder.toString().substr(1);
  return num;
}
/**
 Formats a number as a currency string.

 @param value: The number you wish to format.
 @param forceDecimals: If the number should always have two decimal places <code>true</code>, or only show decimals is there is a decimals value <code>false</code>; defaults to <code>true</code>.
 @param kDelim: The character used to seperate thousands; defaults to <code>","</code>.
 @return Returns the formatted number as a String.
 @example
 <code>
 console.log(formatCurrency(1234.5)); // Traces "1,234.50"
 </code>
 */

function formatCurrency(value, forceDecimals, kDelim) {
  if (forceDecimals == null) {
    forceDecimals = true;
  }

  if (!kDelim) {
    kDelim = ",";
  }

  var remainder = value % 1;
  var currency = format(Math.floor(value), kDelim);
  if (remainder != 0 || forceDecimals) currency += remainder.toFixed(2).substr(1);
  return currency;
}
/**
 Finds the english ordinal suffix for the number given.

 @param value: Number to find the ordinal suffix of.
 @return Returns the suffix for the number, 2 characters.
 @example
 <code>
 console.log32 + getOrdinalSuffix(32)); // Traces 32nd
 </code>
 */

function getOrdinalSuffix(value) {
  if (value >= 10 && value <= 20) return 'th';
  if (value == 0) return '';

  switch (value % 10) {
    case 3:
      return 'rd';

    case 2:
      return 'nd';

    case 1:
      return 'st';

    default:
      return 'th';
  }
}
/**
 Adds a leading zero for numbers less than ten.

 @param value: Number to add leading zero.
 @return Number as a String; if the number was less than ten the number will have a leading zero.
 @example
 <code>
 console.log(addLeadingZero(7)); // Traces 07
 console.log(addLeadingZero(11)); // Traces 11
 </code>
 */

function addLeadingZero(value) {
  return value < 10 ? '0' + value : value.toString();
}
/**
 Spells the provided number.

 @param value: Number to spell. Needs to be less than 999999999.
 @return The number spelled out as a String.
 @throws <code>Error</code> if <code>value</code> is greater than 999999999.
 @example
 <code>
 console.log(spell(0)); // Traces Zero
 console.log(spell(23)); // Traces Twenty-Three
 console.log(spell(2005678)); // Traces Two Million, Five Thousand, Six Hundred Seventy-Eight
 </code>
 */

function spell(value) {
  if (value > 999999999) {
    throw 'Value too large for this method.';
  }

  var onesSpellings = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  var tensSpellings = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  var spelling = '';
  var millions = value / 1000000;
  value %= 1000000;
  var thousands = value / 1000;
  value %= 1000;
  var hundreds = value / 100;
  value %= 100;
  var tens = value / 10;
  value %= 10;
  var ones = value % 10;

  if (millions != 0) {
    spelling += spelling.length == 0 ? '' : ', ';
    spelling += spell(millions) + ' Million';
  }

  if (thousands != 0) {
    spelling += spelling.length == 0 ? '' : ', ';
    spelling += spell(thousands) + ' Thousand';
  }

  if (hundreds != 0) {
    spelling += spelling.length == 0 ? '' : ', ';
    spelling += spell(hundreds) + ' Hundred';
  }

  if (tens != 0 || ones != 0) {
    spelling += spelling.length == 0 ? '' : ' ';
    if (tens < 2) spelling += onesSpellings[tens * 10 + ones];else {
      spelling += tensSpellings[tens];
      if (ones != 0) spelling += '-' + onesSpellings[ones];
    }
  }

  if (spelling.length == 0) return 'Zero';
  return spelling;
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(rgb) {
  return componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    toString: function toString() {
      return "r:" + this.r + ",g:" + this.g + ",b:" + this.b;
    }
  } : null;
}

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