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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return roundDecimalToPlace; });
/* unused harmony export roundDecimalTo1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return roundDecimalTo2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return roundDecimalTo3; });
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
/* unused harmony export degToRad */
/* unused harmony export radToDeg */
/* unused harmony export smoothstep */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return lerp; });
/* unused harmony export norm */
/* unused harmony export clamp */
/* unused harmony export mod */
/* unused harmony export modWrap */
/* unused harmony export random1D */
/* unused harmony export noise1D */
/* unused harmony export randomRange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return randomInt; });
/* unused harmony export mapClamp */
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

function roundDecimalToPlace(value) {
  var place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var p = Math.pow(10, place);
  return Math.round(value * p) / p;
}
function roundDecimalTo1(value) {
  return roundDecimalToPlace(value, 1);
}
function roundDecimalTo2(value) {
  return roundDecimalToPlace(value, 2);
}
function roundDecimalTo3(value) {
  return roundDecimalToPlace(value, 3);
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
  return lerp(norm(value, min1, max1), min2, max2);
} // export function map(value, min1, max1, min2, max2) {
// 	return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
// }

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
 console.log(32 + getOrdinalSuffix(32)); // Traces 32nd
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
function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
function radToDeg(rad) {
  return rad * 180 / Math.PI;
}
function smoothstep(value, min, max) {
  var x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}
function lerp(a, b, t) {
  return a + t * (b - a); // return a(1-t) + bt
  //return min + (max - min) * value;
}
function norm(value, min, max) {
  return (value - min) / (max - min);
}
function clamp(value, min, max) {
  return Math.max(Math.min(value, max), min);
}
function mod(n, m) {
  return (n % m + m) % m;
} //a modulo function that handles negatives numbers 'correctly'

function modWrap(n, m) {
  return (n % m + m) % m;
} //random with seed, returns 0-1 range

function random1D(seed) {
  return modWrap(Math.sin(seed) * 43758.5453, 1);
} //returns 0-1 range

function noise1D(x) {
  var i = Math.floor(x);
  var f = modWrap(x, 1);
  var u = f * f * (3.0 - 2.0 * f);
  return lerp(u, random1D(i), random1D(i + 1.0));
}
function randomRange(min, max) {
  return min + Math.random() * (max - min);
}
function randomInt(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1));
}
function mapClamp(value, min1, max1, min2, max2) {
  return clamp(lerp(norm(value, min1, max1), min2, max2), min2, max2);
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendTrackEventMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sendTrackPageMessage; });
function sendTrackEventMessage(category, action) {
  var label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  chrome.runtime.sendMessage({
    txt: "scrollCaptureTrackEvent",
    category: category,
    action: action,
    label: label
  });
}
function sendTrackPageMessage(path) {
  chrome.runtime.sendMessage({
    txt: "scrollCaptureTrackPage",
    path: path
  });
}

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./js/tsunami/utils/number.js
var number = __webpack_require__(0);

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
// EXTERNAL MODULE: ./js/model/GABridge.js
var GABridge = __webpack_require__(1);

// CONCATENATED MODULE: ./js/video-recording.js



chrome.storage.local.get(["json"], function (result) {
  var colorTheme = "Dark";

  if (result) {
    if (result.json) {
      var data = JSON.parse(result.json);

      if (data.settings) {
        colorTheme = data.settings.colorThemes;
      }
    }
  }

  ;
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
window.addEventListener("resize", function () {
  dispatchVideoHeigth();
});
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  switch (msg.txt) {
    case "scrollCaptureColorTheme":
      document.body.querySelector(".sc-default").setAttribute("data-theme-light", msg.isColorThemeLight);
      break;

    case "scrollCaptureUpdateVideo":
      updateVideo();
      break;

    case "scrollCaptureUnloadVideo":
      unloadVideo();
      break;

    case "scrollCaptureShowVideo":
      dispatchVideoHeigth();
      break;
  }
});
var player = document.querySelector('.sc-video-player');
player.setAttribute("muted", "true");
player.setAttribute("autoplay", "true");
player.setAttribute("playsinline", "true");
player.setAttribute('controls', '1');
player.addEventListener('canplay', function () {
  dispatchVideoHeigth();
});

function dispatchVideoHeigth() {
  chrome.runtime.getBackgroundPage(function (page) {
    var msg = {
      txt: "scrollCaptureVideoHeight",
      height: document.body.scrollHeight
    };
    chrome.tabs.sendMessage(page.tabId, msg);
  });
}

function updateVideo() {
  chrome.runtime.getBackgroundPage(function (page) {
    if (page.videoURL) {
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
        button.addEventListener("click", function () {
          Object(GABridge["a" /* sendTrackEventMessage */])("download", "click");
        });
      }

      var fileNameButton = document.querySelector(".sc-video-filename a.sc-download-button");
      fileNameButton.textContent = videoFileName;
    }
  });
}

function unloadVideo() {
  player.pause(); // player.removeAttribute('src');
  // player.load();
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0FCcmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2pzL3ZpZGVvLXJlY29yZGluZy5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZmxvb3IiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwicm91bmREZWNpbWFsVG9QbGFjZSIsInBsYWNlIiwicCIsInBvdyIsInJvdW5kIiwicm91bmREZWNpbWFsVG8xIiwicm91bmREZWNpbWFsVG8yIiwicm91bmREZWNpbWFsVG8zIiwibG9vcEluZGV4IiwiaW5kZXgiLCJsZW5ndGgiLCJpc0JldHdlZW4iLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJjb25zdHJhaW4iLCJjcmVhdGVTdGVwc0JldHdlZW4iLCJiZWdpbiIsImVuZCIsInN0ZXBzIiwic3RlcHNCZXR3ZWVuIiwiaW5jcmVtZW50IiwicHVzaCIsImludGVycG9sYXRlIiwiYW1vdW50Iiwibm9ybWFsaXplIiwibWluaW11bSIsIm1heGltdW0iLCJQZXJjZW50IiwibWFwIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImxlcnAiLCJub3JtIiwiZ2V0V2VpZ2h0ZWRBdmVyYWdlIiwiZGVzdCIsIm4iLCJmb3JtYXQiLCJrRGVsaW0iLCJtaW5MZW5ndGgiLCJmaWxsQ2hhciIsImlzTmFOIiwicmVtYWluZGVyIiwibnVtIiwidG9TdHJpbmciLCJsZW4iLCJhZGRDaGFyIiwidG90YWxEZWxpbSIsInRvdGFsUmVtYWluIiwibnVtU3BsaXQiLCJzcGxpdCIsInNwbGljZSIsInNoaWZ0Iiwiam9pbiIsInN1YnN0ciIsImZvcm1hdEN1cnJlbmN5IiwiZm9yY2VEZWNpbWFscyIsImN1cnJlbmN5IiwidG9GaXhlZCIsImdldE9yZGluYWxTdWZmaXgiLCJhZGRMZWFkaW5nWmVybyIsInNwZWxsIiwib25lc1NwZWxsaW5ncyIsInRlbnNTcGVsbGluZ3MiLCJzcGVsbGluZyIsIm1pbGxpb25zIiwidGhvdXNhbmRzIiwiaHVuZHJlZHMiLCJ0ZW5zIiwib25lcyIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsInJnYlRvSGV4IiwicmdiIiwiciIsImciLCJiIiwiaGV4VG9SZ2IiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJkZWdUb1JhZCIsImRlZ3JlZXMiLCJQSSIsInJhZFRvRGVnIiwicmFkIiwic21vb3Roc3RlcCIsIngiLCJhIiwidCIsImNsYW1wIiwibW9kIiwibSIsIm1vZFdyYXAiLCJyYW5kb20xRCIsInNlZWQiLCJzaW4iLCJub2lzZTFEIiwiZiIsInUiLCJyYW5kb21SYW5nZSIsInJhbmRvbUludCIsIm1hcENsYW1wIiwic2VuZFRyYWNrRXZlbnRNZXNzYWdlIiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInR4dCIsInNlbmRUcmFja1BhZ2VNZXNzYWdlIiwicGF0aCIsInRpbWVBTVBNIiwiZGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJhbXBtIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdEFNUE0iLCJzcGFjZUJldHdlZW4iLCJkYXRlRGF0YSIsInN0clRpbWUiLCJ0b1VuaXhTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInRvVW5peFVUQ1N0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsImFkZEhvdXJzIiwic2V0VGltZSIsImdldFRpbWUiLCJhZGREYXlzIiwiZGF5cyIsIm1vbnRocyIsImVuIiwiZnIiLCJsYW5ndWFnZSIsIm1vbnRoIiwiZ2V0QWdlIiwiYmlydGhEYXRlIiwidG9kYXkiLCJEYXRlIiwiYWdlIiwidHJlYXRBc1VUQyIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInRleHQiLCJ5ZWFyc0JldHdlZW5GbG9vciIsIm1vbnRoc0JldHdlZW5GbG9vciIsIndlZWtzQmV0d2VlbkZsb29yIiwiZGF5c0JldHdlZW5GbG9vciIsImhvdXJzQmV0d2VlbkZsb29yIiwibWludXRlc0JldHdlZW5GbG9vciIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImNvbG9yVGhlbWUiLCJqc29uIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInNldHRpbmdzIiwiY29sb3JUaGVtZXMiLCJpc0NvbG9yVGhlbWVMaWdodCIsImRhcmtNb2RlTWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJpc0RhcmtNb2RlIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hWaWRlb0hlaWd0aCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwidXBkYXRlVmlkZW8iLCJ1bmxvYWRWaWRlbyIsInBsYXllciIsImdldEJhY2tncm91bmRQYWdlIiwicGFnZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJ0YWJJZCIsInZpZGVvVVJMIiwic3JjIiwiYW1wbVRpbWUiLCJ5ZWFyIiwidG9VcHBlckNhc2UiLCJ2aWRlb0ZpbGVOYW1lIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJocmVmIiwiZG93bmxvYWQiLCJmaWxlTmFtZUJ1dHRvbiIsInRleHRDb250ZW50IiwicGF1c2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7O0FDakZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sU0FBU0Esa0JBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUM1QyxTQUFPQyxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsSUFBOEJBLEdBQXJDO0FBQ0EsQyxDQUVEO0FBQ0E7O0FBQ08sU0FBU0ksWUFBVCxDQUFzQkosR0FBdEIsRUFBMkJDLEdBQTNCLEVBQWdDO0FBQ3RDLFNBQU9DLElBQUksQ0FBQ0csS0FBTCxDQUFXSCxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBdkIsQ0FBWCxJQUEwQ0EsR0FBakQ7QUFDQSxDLENBRUQ7QUFDQTs7QUFDTyxTQUFTTSxxQkFBVCxDQUErQk4sR0FBL0IsRUFBb0NDLEdBQXBDLEVBQXlDO0FBQy9DLFNBQU9DLElBQUksQ0FBQ0csS0FBTCxDQUFXSCxJQUFJLENBQUNDLE1BQUwsTUFBaUJGLEdBQUcsR0FBR0QsR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOENBLEdBQXJEO0FBQ0E7QUFFRDs7Ozs7Ozs7QUFPTyxTQUFTTyxpQkFBVCxDQUEyQlAsR0FBM0IsRUFBZ0NDLEdBQWhDLEVBQXFDO0FBQzNDLFNBQU9ELEdBQUcsR0FBSUUsSUFBSSxDQUFDQyxNQUFMLE1BQWlCRixHQUFHLEdBQUdELEdBQXZCLENBQWQ7QUFDQTtBQUVEOzs7Ozs7OztBQU9PLFNBQVNRLHdCQUFULENBQWtDUixHQUFsQyxFQUF1Q0MsR0FBdkMsRUFBNEM7QUFDbEQsU0FBT0MsSUFBSSxDQUFDRyxLQUFMLENBQVdILElBQUksQ0FBQ0MsTUFBTCxNQUFpQixJQUFJRixHQUFKLEdBQVVELEdBQTNCLElBQWtDQSxHQUE3QyxDQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7O0FBV08sU0FBU1MsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFDN0IsU0FBTyxDQUFDQSxLQUFLLEdBQUcsQ0FBVCxLQUFlLENBQXRCO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0MsS0FBVCxDQUFlRCxLQUFmLEVBQXNCO0FBQzVCLFNBQU8sQ0FBQ0QsTUFBTSxDQUFDQyxLQUFELENBQWQ7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7QUFXTyxTQUFTRSxTQUFULENBQW1CRixLQUFuQixFQUEwQjtBQUNoQyxTQUFRQSxLQUFLLEdBQUcsQ0FBVCxJQUFlLENBQXRCO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0csT0FBVCxDQUFpQkgsS0FBakIsRUFBd0I7QUFDOUIsTUFBSUEsS0FBSyxJQUFJLENBQVQsSUFBY0EsS0FBSyxJQUFJLENBQTNCLEVBQ0MsT0FBTyxJQUFQO0FBRUQsTUFBSUQsTUFBTSxDQUFDQyxLQUFELENBQVYsRUFDQyxPQUFPLEtBQVA7QUFFRCxNQUFJSSxDQUFDLEdBQUdaLElBQUksQ0FBQ2EsSUFBTCxDQUFVTCxLQUFWLENBQVI7O0FBQ0EsT0FBSyxJQUFJTSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJRixDQUFyQixFQUF3QkUsQ0FBQyxFQUF6QjtBQUNBLFFBQUlOLEtBQUssR0FBR00sQ0FBUixJQUFhLENBQWpCLEVBQ0MsT0FBTyxLQUFQO0FBRkQ7O0FBSUEsU0FBTyxJQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7OztBQVlPLFNBQVNDLG1CQUFULENBQTZCUCxLQUE3QixFQUErQztBQUFBLE1BQVhRLEtBQVcsdUVBQUgsQ0FBRztBQUNyRCxNQUFJQyxDQUFDLEdBQUdqQixJQUFJLENBQUNrQixHQUFMLENBQVMsRUFBVCxFQUFhRixLQUFiLENBQVI7QUFFQSxTQUFPaEIsSUFBSSxDQUFDbUIsS0FBTCxDQUFXWCxLQUFLLEdBQUdTLENBQW5CLElBQXdCQSxDQUEvQjtBQUNBO0FBRU0sU0FBU0csZUFBVCxDQUF5QlosS0FBekIsRUFBZ0M7QUFDdEMsU0FBT08sbUJBQW1CLENBQUNQLEtBQUQsRUFBUSxDQUFSLENBQTFCO0FBQ0E7QUFFTSxTQUFTYSxlQUFULENBQXlCYixLQUF6QixFQUFnQztBQUN0QyxTQUFPTyxtQkFBbUIsQ0FBQ1AsS0FBRCxFQUFRLENBQVIsQ0FBMUI7QUFDQTtBQUVNLFNBQVNjLGVBQVQsQ0FBeUJkLEtBQXpCLEVBQWdDO0FBQ3RDLFNBQU9PLG1CQUFtQixDQUFDUCxLQUFELEVBQVEsQ0FBUixDQUExQjtBQUNBO0FBR0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlTyxTQUFTZSxTQUFULENBQW1CQyxLQUFuQixFQUEwQkMsTUFBMUIsRUFBa0M7QUFDeEMsTUFBSUQsS0FBSyxHQUFHLENBQVosRUFDQ0EsS0FBSyxHQUFHQyxNQUFNLEdBQUdELEtBQUssR0FBR0MsTUFBekI7QUFFRCxNQUFJRCxLQUFLLElBQUlDLE1BQWIsRUFDQyxPQUFPRCxLQUFLLEdBQUdDLE1BQWY7QUFFRCxTQUFPRCxLQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7Ozs7O0FBY08sU0FBU0UsU0FBVCxDQUFtQmxCLEtBQW5CLEVBQTBCbUIsVUFBMUIsRUFBc0NDLFdBQXRDLEVBQW1EO0FBQ3pELFNBQU8sRUFBRXBCLEtBQUssR0FBR1IsSUFBSSxDQUFDRixHQUFMLENBQVM2QixVQUFULEVBQXFCQyxXQUFyQixDQUFSLElBQTZDcEIsS0FBSyxHQUFHUixJQUFJLENBQUNELEdBQUwsQ0FBUzRCLFVBQVQsRUFBcUJDLFdBQXJCLENBQXZELENBQVA7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7QUFjTyxTQUFTQyxTQUFULENBQW1CckIsS0FBbkIsRUFBMEJtQixVQUExQixFQUFzQ0MsV0FBdEMsRUFBbUQ7QUFDekQsU0FBTzVCLElBQUksQ0FBQ0YsR0FBTCxDQUFTRSxJQUFJLENBQUNELEdBQUwsQ0FBU1MsS0FBVCxFQUFnQlIsSUFBSSxDQUFDRixHQUFMLENBQVM2QixVQUFULEVBQXFCQyxXQUFyQixDQUFoQixDQUFULEVBQTZENUIsSUFBSSxDQUFDRCxHQUFMLENBQVM0QixVQUFULEVBQXFCQyxXQUFyQixDQUE3RCxDQUFQO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7Ozs7QUFhTyxTQUFTRSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUNDLEdBQW5DLEVBQXdDQyxLQUF4QyxFQUErQztBQUNyREEsT0FBSztBQUVMLE1BQUluQixDQUFDLEdBQUcsQ0FBUjtBQUNBLE1BQUlvQixZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxTQUFTLEdBQUcsQ0FBQ0gsR0FBRyxHQUFHRCxLQUFQLElBQWdCRSxLQUFoQzs7QUFFQSxTQUFPLEVBQUVuQixDQUFGLEdBQU1tQixLQUFiO0FBQ0NDLGdCQUFZLENBQUNFLElBQWIsQ0FBbUJ0QixDQUFDLEdBQUdxQixTQUFMLEdBQWtCSixLQUFwQztBQUREOztBQUdBLFNBQU9HLFlBQVA7QUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7QUFXTyxTQUFTRyxXQUFULENBQXFCQyxNQUFyQixFQUE2QlAsS0FBN0IsRUFBb0NDLEdBQXBDLEVBQXlDO0FBQy9DLFNBQU9ELEtBQUssR0FBRyxDQUFDQyxHQUFHLEdBQUdELEtBQVAsSUFBZ0JPLE1BQS9CO0FBQ0E7QUFFRDs7Ozs7Ozs7Ozs7O0FBV08sU0FBU0MsU0FBVCxDQUFtQi9CLEtBQW5CLEVBQTBCZ0MsT0FBMUIsRUFBbUNDLE9BQW5DLEVBQTRDO0FBQ2xELFNBQU8sSUFBSUMsT0FBSixDQUFZLENBQUNsQyxLQUFLLEdBQUdnQyxPQUFULEtBQXFCQyxPQUFPLEdBQUdELE9BQS9CLENBQVosQ0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0csR0FBVCxDQUFhbkMsS0FBYixFQUFvQm9DLElBQXBCLEVBQTBCQyxJQUExQixFQUFnQ0MsSUFBaEMsRUFBc0NDLElBQXRDLEVBQTRDO0FBQ2xELFNBQU9DLElBQUksQ0FBQ0MsSUFBSSxDQUFDekMsS0FBRCxFQUFRb0MsSUFBUixFQUFjQyxJQUFkLENBQUwsRUFBMEJDLElBQTFCLEVBQWdDQyxJQUFoQyxDQUFYO0FBQ0EsQyxDQUNEO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUFVTyxTQUFTRyxrQkFBVCxDQUE0QjFDLEtBQTVCLEVBQW1DMkMsSUFBbkMsRUFBeUNDLENBQXpDLEVBQTRDO0FBQ2xELFNBQU81QyxLQUFLLEdBQUcsQ0FBQzJDLElBQUksR0FBRzNDLEtBQVIsSUFBaUI0QyxDQUFoQztBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU0MsTUFBVCxDQUFnQjdDLEtBQWhCLEVBQXVCOEMsTUFBdkIsRUFBK0JDLFNBQS9CLEVBQTBDQyxRQUExQyxFQUFvRDtBQUMxRCxNQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNaQSxVQUFNLEdBQUcsR0FBVDtBQUNBOztBQUNELE1BQUlHLEtBQUssQ0FBQ0YsU0FBRCxDQUFULEVBQXNCO0FBQ3JCQSxhQUFTLEdBQUcsQ0FBWjtBQUNBOztBQUNELE1BQUksQ0FBQ0MsUUFBTCxFQUFlO0FBQ2RBLFlBQVEsR0FBRyxHQUFYO0FBQ0E7O0FBQ0QsTUFBSUUsU0FBUyxHQUFHbEQsS0FBSyxHQUFHLENBQXhCO0FBQ0EsTUFBSW1ELEdBQUcsR0FBRzNELElBQUksQ0FBQ0csS0FBTCxDQUFXSyxLQUFYLEVBQWtCb0QsUUFBbEIsRUFBVjtBQUNBLE1BQUlDLEdBQUcsR0FBR0YsR0FBRyxDQUFDbEMsTUFBZDs7QUFFQSxNQUFJOEIsU0FBUyxJQUFJLENBQWIsSUFBa0JBLFNBQVMsR0FBR00sR0FBbEMsRUFBdUM7QUFDdENOLGFBQVMsSUFBSU0sR0FBYjtBQUVBLFFBQUlDLE9BQU8sR0FBR04sUUFBUSxJQUFJLEdBQTFCOztBQUVBLFdBQU9ELFNBQVMsRUFBaEI7QUFDQ0ksU0FBRyxHQUFHRyxPQUFPLEdBQUdILEdBQWhCO0FBREQ7QUFFQTs7QUFFRCxNQUFJTCxNQUFNLElBQUksSUFBVixJQUFrQkssR0FBRyxDQUFDbEMsTUFBSixHQUFhLENBQW5DLEVBQXNDO0FBQ3JDLFFBQUlzQyxVQUFVLEdBQUkvRCxJQUFJLENBQUNHLEtBQUwsQ0FBV3dELEdBQUcsQ0FBQ2xDLE1BQUosR0FBYSxDQUF4QixDQUFsQjtBQUNBLFFBQUl1QyxXQUFXLEdBQUdMLEdBQUcsQ0FBQ2xDLE1BQUosR0FBYSxDQUEvQjtBQUNBLFFBQUl3QyxRQUFRLEdBQUtOLEdBQUcsQ0FBQ08sS0FBSixDQUFVLEVBQVYsQ0FBakI7QUFDQSxRQUFJcEQsQ0FBQyxHQUFHLENBQUMsQ0FBVDs7QUFFQSxXQUFPLEVBQUVBLENBQUYsR0FBTWlELFVBQWI7QUFDQ0UsY0FBUSxDQUFDRSxNQUFULENBQWdCSCxXQUFXLEdBQUksSUFBSWxELENBQW5DLEVBQXVDLENBQXZDLEVBQTBDd0MsTUFBMUM7QUFERDs7QUFHQSxRQUFJVSxXQUFXLElBQUksQ0FBbkIsRUFDQ0MsUUFBUSxDQUFDRyxLQUFUO0FBRURULE9BQUcsR0FBR00sUUFBUSxDQUFDSSxJQUFULENBQWMsRUFBZCxDQUFOO0FBQ0E7O0FBRUQsTUFBSVgsU0FBUyxJQUFJLENBQWpCLEVBQ0NDLEdBQUcsSUFBSUQsU0FBUyxDQUFDRSxRQUFWLEdBQXFCVSxNQUFyQixDQUE0QixDQUE1QixDQUFQO0FBRUQsU0FBT1gsR0FBUDtBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7QUFZTyxTQUFTWSxjQUFULENBQXdCL0QsS0FBeEIsRUFBK0JnRSxhQUEvQixFQUE4Q2xCLE1BQTlDLEVBQXNEO0FBQzVELE1BQUlrQixhQUFhLElBQUksSUFBckIsRUFBMkI7QUFDMUJBLGlCQUFhLEdBQUcsSUFBaEI7QUFDQTs7QUFDRCxNQUFJLENBQUNsQixNQUFMLEVBQWE7QUFDWkEsVUFBTSxHQUFJLEdBQVY7QUFDQTs7QUFDRCxNQUFJSSxTQUFTLEdBQUdsRCxLQUFLLEdBQUcsQ0FBeEI7QUFDQSxNQUFJaUUsUUFBUSxHQUFHcEIsTUFBTSxDQUFDckQsSUFBSSxDQUFDRyxLQUFMLENBQVdLLEtBQVgsQ0FBRCxFQUFvQjhDLE1BQXBCLENBQXJCO0FBRUEsTUFBSUksU0FBUyxJQUFJLENBQWIsSUFBa0JjLGFBQXRCLEVBQ0NDLFFBQVEsSUFBSWYsU0FBUyxDQUFDZ0IsT0FBVixDQUFrQixDQUFsQixFQUFxQkosTUFBckIsQ0FBNEIsQ0FBNUIsQ0FBWjtBQUVELFNBQU9HLFFBQVA7QUFDQTtBQUVEOzs7Ozs7Ozs7OztBQVVPLFNBQVNFLGdCQUFULENBQTBCbkUsS0FBMUIsRUFBaUM7QUFDdkMsTUFBSUEsS0FBSyxJQUFJLEVBQVQsSUFBZUEsS0FBSyxJQUFJLEVBQTVCLEVBQ0MsT0FBTyxJQUFQO0FBRUQsTUFBSUEsS0FBSyxJQUFJLENBQWIsRUFDQyxPQUFPLEVBQVA7O0FBRUQsVUFBUUEsS0FBSyxHQUFHLEVBQWhCO0FBQ0MsU0FBSyxDQUFMO0FBQ0MsYUFBTyxJQUFQOztBQUNELFNBQUssQ0FBTDtBQUNDLGFBQU8sSUFBUDs7QUFDRCxTQUFLLENBQUw7QUFDQyxhQUFPLElBQVA7O0FBQ0Q7QUFDQyxhQUFPLElBQVA7QUFSRjtBQVVBO0FBRUQ7Ozs7Ozs7Ozs7OztBQVdPLFNBQVNvRSxjQUFULENBQXdCcEUsS0FBeEIsRUFBK0I7QUFDckMsU0FBUUEsS0FBSyxHQUFHLEVBQVQsR0FBZSxNQUFNQSxLQUFyQixHQUE2QkEsS0FBSyxDQUFDb0QsUUFBTixFQUFwQztBQUNBO0FBRUQ7Ozs7Ozs7Ozs7Ozs7O0FBYU8sU0FBU2lCLEtBQVQsQ0FBZXJFLEtBQWYsRUFBc0I7QUFDNUIsTUFBSUEsS0FBSyxHQUFHLFNBQVosRUFBdUI7QUFDdEIsVUFBTyxrQ0FBUDtBQUNBOztBQUVELE1BQUlzRSxhQUFhLEdBQUcsQ0FBQyxFQUFELEVBQUssS0FBTCxFQUFZLEtBQVosRUFBbUIsT0FBbkIsRUFBNEIsTUFBNUIsRUFBb0MsTUFBcEMsRUFBNEMsS0FBNUMsRUFBbUQsT0FBbkQsRUFBNEQsT0FBNUQsRUFBcUUsTUFBckUsRUFBNkUsS0FBN0UsRUFBb0YsUUFBcEYsRUFBOEYsUUFBOUYsRUFBd0csVUFBeEcsRUFBb0gsVUFBcEgsRUFBZ0ksU0FBaEksRUFBMkksU0FBM0ksRUFBc0osV0FBdEosRUFBbUssVUFBbkssRUFBK0ssVUFBL0ssQ0FBcEI7QUFDQSxNQUFJQyxhQUFhLEdBQUcsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLFFBQVQsRUFBbUIsUUFBbkIsRUFBNkIsT0FBN0IsRUFBc0MsT0FBdEMsRUFBK0MsT0FBL0MsRUFBd0QsU0FBeEQsRUFBbUUsUUFBbkUsRUFBNkUsUUFBN0UsQ0FBcEI7QUFDQSxNQUFJQyxRQUFRLEdBQVMsRUFBckI7QUFFQSxNQUFJQyxRQUFRLEdBQUd6RSxLQUFLLEdBQUcsT0FBdkI7QUFDQUEsT0FBSyxJQUFpQixPQUF0QjtBQUVBLE1BQUkwRSxTQUFTLEdBQUcxRSxLQUFLLEdBQUcsSUFBeEI7QUFDQUEsT0FBSyxJQUFrQixJQUF2QjtBQUVBLE1BQUkyRSxRQUFRLEdBQUczRSxLQUFLLEdBQUcsR0FBdkI7QUFDQUEsT0FBSyxJQUFpQixHQUF0QjtBQUVBLE1BQUk0RSxJQUFJLEdBQUc1RSxLQUFLLEdBQUcsRUFBbkI7QUFDQUEsT0FBSyxJQUFhLEVBQWxCO0FBRUEsTUFBSTZFLElBQUksR0FBRzdFLEtBQUssR0FBRyxFQUFuQjs7QUFFQSxNQUFJeUUsUUFBUSxJQUFJLENBQWhCLEVBQW1CO0FBQ2xCRCxZQUFRLElBQUtBLFFBQVEsQ0FBQ3ZELE1BQVQsSUFBbUIsQ0FBcEIsR0FBeUIsRUFBekIsR0FBOEIsSUFBMUM7QUFDQXVELFlBQVEsSUFBSUgsS0FBSyxDQUFDSSxRQUFELENBQUwsR0FBa0IsVUFBOUI7QUFDQTs7QUFFRCxNQUFJQyxTQUFTLElBQUksQ0FBakIsRUFBb0I7QUFDbkJGLFlBQVEsSUFBS0EsUUFBUSxDQUFDdkQsTUFBVCxJQUFtQixDQUFwQixHQUF5QixFQUF6QixHQUE4QixJQUExQztBQUNBdUQsWUFBUSxJQUFJSCxLQUFLLENBQUNLLFNBQUQsQ0FBTCxHQUFtQixXQUEvQjtBQUNBOztBQUVELE1BQUlDLFFBQVEsSUFBSSxDQUFoQixFQUFtQjtBQUNsQkgsWUFBUSxJQUFLQSxRQUFRLENBQUN2RCxNQUFULElBQW1CLENBQXBCLEdBQXlCLEVBQXpCLEdBQThCLElBQTFDO0FBQ0F1RCxZQUFRLElBQUlILEtBQUssQ0FBQ00sUUFBRCxDQUFMLEdBQWtCLFVBQTlCO0FBQ0E7O0FBRUQsTUFBSUMsSUFBSSxJQUFJLENBQVIsSUFBYUMsSUFBSSxJQUFJLENBQXpCLEVBQTRCO0FBQzNCTCxZQUFRLElBQUtBLFFBQVEsQ0FBQ3ZELE1BQVQsSUFBbUIsQ0FBcEIsR0FBeUIsRUFBekIsR0FBOEIsR0FBMUM7QUFFQSxRQUFJMkQsSUFBSSxHQUFHLENBQVgsRUFDQ0osUUFBUSxJQUFJRixhQUFhLENBQUNNLElBQUksR0FBRyxFQUFQLEdBQVlDLElBQWIsQ0FBekIsQ0FERCxLQUVLO0FBQ0pMLGNBQVEsSUFBSUQsYUFBYSxDQUFDSyxJQUFELENBQXpCO0FBRUEsVUFBSUMsSUFBSSxJQUFJLENBQVosRUFDQ0wsUUFBUSxJQUFJLE1BQU1GLGFBQWEsQ0FBQ08sSUFBRCxDQUEvQjtBQUNEO0FBQ0Q7O0FBRUQsTUFBSUwsUUFBUSxDQUFDdkQsTUFBVCxJQUFtQixDQUF2QixFQUNDLE9BQU8sTUFBUDtBQUVELFNBQU91RCxRQUFQO0FBQ0E7QUFFTSxTQUFTTSxjQUFULENBQXdCQyxDQUF4QixFQUEyQjtBQUNqQyxNQUFJQyxHQUFHLEdBQUdELENBQUMsQ0FBQzNCLFFBQUYsQ0FBVyxFQUFYLENBQVY7QUFDQSxTQUFPNEIsR0FBRyxDQUFDL0QsTUFBSixJQUFjLENBQWQsR0FBa0IsTUFBTStELEdBQXhCLEdBQThCQSxHQUFyQztBQUNBO0FBRU0sU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBdUI7QUFDN0IsU0FBT0osY0FBYyxDQUFDSSxHQUFHLENBQUNDLENBQUwsQ0FBZCxHQUF3QkwsY0FBYyxDQUFDSSxHQUFHLENBQUNFLENBQUwsQ0FBdEMsR0FBZ0ROLGNBQWMsQ0FBQ0ksR0FBRyxDQUFDRyxDQUFMLENBQXJFO0FBQ0E7QUFFTSxTQUFTQyxRQUFULENBQWtCTixHQUFsQixFQUF1QjtBQUM3QixNQUFJTyxNQUFNLEdBQUcsNENBQTRDQyxJQUE1QyxDQUFpRFIsR0FBakQsQ0FBYjtBQUNBLFNBQU9PLE1BQU0sR0FBRztBQUNmSixLQUFDLEVBQUVNLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLENBQUQsQ0FBUCxFQUFZLEVBQVosQ0FESTtBQUVmSCxLQUFDLEVBQUVLLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLENBQUQsQ0FBUCxFQUFZLEVBQVosQ0FGSTtBQUdmRixLQUFDLEVBQUVJLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDLENBQUQsQ0FBUCxFQUFZLEVBQVosQ0FISTtBQUlmbkMsWUFBUSxFQUFDLG9CQUFVO0FBQ2xCLGFBQVEsT0FBTyxLQUFLK0IsQ0FBWixHQUFnQixLQUFoQixHQUF3QixLQUFLQyxDQUE3QixHQUFpQyxLQUFqQyxHQUF5QyxLQUFLQyxDQUF0RDtBQUNBO0FBTmMsR0FBSCxHQU9ULElBUEo7QUFRQTtBQUVNLFNBQVNLLFFBQVQsQ0FBa0JDLE9BQWxCLEVBQTJCO0FBQ2pDLFNBQU9BLE9BQU8sR0FBR25HLElBQUksQ0FBQ29HLEVBQWYsR0FBb0IsR0FBM0I7QUFDQTtBQUVNLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXVCO0FBQzdCLFNBQU9BLEdBQUcsR0FBRyxHQUFOLEdBQVl0RyxJQUFJLENBQUNvRyxFQUF4QjtBQUNBO0FBRU0sU0FBU0csVUFBVCxDQUFxQi9GLEtBQXJCLEVBQTRCVixHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7QUFDNUMsTUFBSXlHLENBQUMsR0FBR3hHLElBQUksQ0FBQ0QsR0FBTCxDQUFTLENBQVQsRUFBWUMsSUFBSSxDQUFDRixHQUFMLENBQVMsQ0FBVCxFQUFZLENBQUNVLEtBQUssR0FBR1YsR0FBVCxLQUFpQkMsR0FBRyxHQUFHRCxHQUF2QixDQUFaLENBQVosQ0FBUjtBQUNBLFNBQU8wRyxDQUFDLEdBQUdBLENBQUosSUFBUyxJQUFJLElBQUlBLENBQWpCLENBQVA7QUFDQTtBQUVNLFNBQVN4RCxJQUFULENBQWN5RCxDQUFkLEVBQWlCWixDQUFqQixFQUFvQmEsQ0FBcEIsRUFBdUI7QUFDN0IsU0FBT0QsQ0FBQyxHQUFHQyxDQUFDLElBQUliLENBQUMsR0FBR1ksQ0FBUixDQUFaLENBRDZCLENBRTdCO0FBQ0E7QUFDQTtBQUVNLFNBQVN4RCxJQUFULENBQWN6QyxLQUFkLEVBQXFCVixHQUFyQixFQUEwQkMsR0FBMUIsRUFBK0I7QUFDckMsU0FBTyxDQUFDUyxLQUFLLEdBQUdWLEdBQVQsS0FBaUJDLEdBQUcsR0FBR0QsR0FBdkIsQ0FBUDtBQUNBO0FBRU0sU0FBUzZHLEtBQVQsQ0FBZW5HLEtBQWYsRUFBc0JWLEdBQXRCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN0QyxTQUFPQyxJQUFJLENBQUNELEdBQUwsQ0FBU0MsSUFBSSxDQUFDRixHQUFMLENBQVNVLEtBQVQsRUFBZ0JULEdBQWhCLENBQVQsRUFBK0JELEdBQS9CLENBQVA7QUFDQTtBQUVNLFNBQVM4RyxHQUFULENBQWF4RCxDQUFiLEVBQWdCeUQsQ0FBaEIsRUFBbUI7QUFDekIsU0FBTyxDQUFFekQsQ0FBQyxHQUFHeUQsQ0FBTCxHQUFVQSxDQUFYLElBQWdCQSxDQUF2QjtBQUNBLEMsQ0FFRDs7QUFDTyxTQUFTQyxPQUFULENBQWlCMUQsQ0FBakIsRUFBb0J5RCxDQUFwQixFQUF1QjtBQUM3QixTQUFPLENBQUV6RCxDQUFDLEdBQUd5RCxDQUFMLEdBQVVBLENBQVgsSUFBZ0JBLENBQXZCO0FBQ0EsQyxDQUVEOztBQUNPLFNBQVNFLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQzlCLFNBQU9GLE9BQU8sQ0FBQzlHLElBQUksQ0FBQ2lILEdBQUwsQ0FBU0QsSUFBVCxJQUFpQixVQUFsQixFQUE4QixDQUE5QixDQUFkO0FBQ0EsQyxDQUVEOztBQUNPLFNBQVNFLE9BQVQsQ0FBaUJWLENBQWpCLEVBQW9CO0FBQzFCLE1BQUkxRixDQUFDLEdBQUdkLElBQUksQ0FBQ0csS0FBTCxDQUFXcUcsQ0FBWCxDQUFSO0FBQ0EsTUFBSVcsQ0FBQyxHQUFHTCxPQUFPLENBQUNOLENBQUQsRUFBSSxDQUFKLENBQWY7QUFDQSxNQUFJWSxDQUFDLEdBQUdELENBQUMsR0FBR0EsQ0FBSixJQUFTLE1BQU0sTUFBTUEsQ0FBckIsQ0FBUjtBQUNBLFNBQU9uRSxJQUFJLENBQUNvRSxDQUFELEVBQUlMLFFBQVEsQ0FBQ2pHLENBQUQsQ0FBWixFQUFpQmlHLFFBQVEsQ0FBQ2pHLENBQUMsR0FBRyxHQUFMLENBQXpCLENBQVg7QUFDQTtBQUVNLFNBQVN1RyxXQUFULENBQXFCdkgsR0FBckIsRUFBMEJDLEdBQTFCLEVBQStCO0FBQ3JDLFNBQU9ELEdBQUcsR0FBR0UsSUFBSSxDQUFDQyxNQUFMLE1BQWlCRixHQUFHLEdBQUdELEdBQXZCLENBQWI7QUFDQTtBQUVNLFNBQVN3SCxTQUFULENBQW1CeEgsR0FBbkIsRUFBd0JDLEdBQXhCLEVBQTZCO0FBQ25DLFNBQU9DLElBQUksQ0FBQ0csS0FBTCxDQUFXTCxHQUFHLEdBQUdFLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkYsR0FBRyxHQUFHRCxHQUFOLEdBQVksQ0FBN0IsQ0FBakIsQ0FBUDtBQUNBO0FBRU0sU0FBU3lILFFBQVQsQ0FBa0IvRyxLQUFsQixFQUF5Qm9DLElBQXpCLEVBQStCQyxJQUEvQixFQUFxQ0MsSUFBckMsRUFBMkNDLElBQTNDLEVBQWlEO0FBQ3ZELFNBQU80RCxLQUFLLENBQUMzRCxJQUFJLENBQUNDLElBQUksQ0FBQ3pDLEtBQUQsRUFBUW9DLElBQVIsRUFBY0MsSUFBZCxDQUFMLEVBQTBCQyxJQUExQixFQUFnQ0MsSUFBaEMsQ0FBTCxFQUE0Q0QsSUFBNUMsRUFBa0RDLElBQWxELENBQVo7QUFDQSxDOzs7Ozs7O0FDNWpCRDtBQUFBO0FBQU8sU0FBU3lFLHFCQUFULENBQStCQyxRQUEvQixFQUF5Q0MsTUFBekMsRUFBNkQ7QUFBQSxNQUFaQyxLQUFZLHVFQUFKLEVBQUk7QUFDaEVDLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCO0FBQUVDLE9BQUcsRUFBRSx5QkFBUDtBQUFrQ04sWUFBUSxFQUFSQSxRQUFsQztBQUE0Q0MsVUFBTSxFQUFOQSxNQUE1QztBQUFvREMsU0FBSyxFQUFMQTtBQUFwRCxHQUEzQjtBQUNIO0FBRU0sU0FBU0ssb0JBQVQsQ0FBOEJDLElBQTlCLEVBQW9DO0FBQ3ZDTCxRQUFNLENBQUNDLE9BQVAsQ0FBZUMsV0FBZixDQUEyQjtBQUFFQyxPQUFHLEVBQUUsd0JBQVA7QUFBaUNFLFFBQUksRUFBSkE7QUFBakMsR0FBM0I7QUFDSCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUVPLFNBQVNDLFFBQVQsQ0FBa0JDLElBQWxCLEVBQXdCO0FBQzlCLE1BQUlDLEtBQUssR0FBR0QsSUFBSSxDQUFDRSxRQUFMLEVBQVo7QUFDQSxNQUFJQyxJQUFJLEdBQUdGLEtBQUssSUFBSSxFQUFULEdBQWMsSUFBZCxHQUFxQixJQUFoQztBQUNBLE1BQUlHLE9BQU8sR0FBRzNELHdDQUFjLENBQUN1RCxJQUFJLENBQUNLLFVBQUwsRUFBRCxDQUE1QjtBQUNBLE1BQUlDLE9BQU8sR0FBRzdELHdDQUFjLENBQUN1RCxJQUFJLENBQUNPLFVBQUwsRUFBRCxDQUE1QjtBQUNBTixPQUFLLEdBQUdBLEtBQUssR0FBRyxFQUFoQjtBQUNBQSxPQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSCxHQUFXLEVBQXhCLENBTjhCLENBTUY7O0FBQzVCLFNBQU87QUFBRUEsU0FBSyxFQUFMQSxLQUFGO0FBQVNHLFdBQU8sRUFBUEEsT0FBVDtBQUFrQkUsV0FBTyxFQUFQQSxPQUFsQjtBQUEyQkgsUUFBSSxFQUFKQTtBQUEzQixHQUFQO0FBQ0E7QUFFTSxTQUFTSyxVQUFULENBQW9CUixJQUFwQixFQUE2QztBQUFBLE1BQW5CUyxZQUFtQix1RUFBSixFQUFJO0FBQ25ELE1BQUlDLFFBQVEsR0FBR1gsUUFBUSxDQUFDQyxJQUFELENBQXZCO0FBQ0EsTUFBSVcsT0FBTyxHQUFHRCxRQUFRLENBQUNULEtBQVQsR0FBaUIsR0FBakIsR0FBdUJTLFFBQVEsQ0FBQ04sT0FBaEMsR0FBMENLLFlBQTFDLEdBQXlETixJQUF2RTtBQUNBLFNBQU9RLE9BQVA7QUFDQTtBQUVNLFNBQVNDLFlBQVQsQ0FBc0JaLElBQXRCLEVBQTRCO0FBQ2xDLFNBQU9BLElBQUksQ0FBQ2EsV0FBTCxLQUFxQixHQUFyQixHQUEyQnBFLHdDQUFjLENBQUN1RCxJQUFJLENBQUNjLFFBQUwsS0FBa0IsQ0FBbkIsQ0FBekMsR0FBaUUsR0FBakUsR0FBdUVyRSx3Q0FBYyxDQUFDdUQsSUFBSSxDQUFDZSxPQUFMLEVBQUQsQ0FBckYsR0FBd0csR0FBeEcsR0FBOEd0RSx3Q0FBYyxDQUFDdUQsSUFBSSxDQUFDRSxRQUFMLEVBQUQsQ0FBNUgsR0FBZ0osR0FBaEosR0FBc0p6RCx3Q0FBYyxDQUFDdUQsSUFBSSxDQUFDSyxVQUFMLEVBQUQsQ0FBcEssR0FBMEwsR0FBMUwsR0FBZ001RCx3Q0FBYyxDQUFDdUQsSUFBSSxDQUFDTyxVQUFMLEVBQUQsQ0FBck47QUFDQTtBQUVNLFNBQVNTLGVBQVQsQ0FBeUJoQixJQUF6QixFQUErQjtBQUNyQyxTQUFPQSxJQUFJLENBQUNpQixjQUFMLEtBQXdCLEdBQXhCLEdBQThCeEUsd0NBQWMsQ0FBQ3VELElBQUksQ0FBQ2tCLFdBQUwsS0FBcUIsQ0FBdEIsQ0FBNUMsR0FBdUUsR0FBdkUsR0FBNkV6RSx3Q0FBYyxDQUFDdUQsSUFBSSxDQUFDbUIsVUFBTCxFQUFELENBQTNGLEdBQWlILEdBQWpILEdBQXVIMUUsd0NBQWMsQ0FBQ3VELElBQUksQ0FBQ29CLFdBQUwsRUFBRCxDQUFySSxHQUE0SixHQUE1SixHQUFrSzNFLHdDQUFjLENBQUN1RCxJQUFJLENBQUNxQixhQUFMLEVBQUQsQ0FBaEwsR0FBeU0sR0FBek0sR0FBK001RSx3Q0FBYyxDQUFDdUQsSUFBSSxDQUFDc0IsYUFBTCxFQUFELENBQXBPO0FBQ0E7QUFFTSxTQUFTQyxRQUFULENBQWtCdkIsSUFBbEIsRUFBd0JDLEtBQXhCLEVBQStCO0FBQ3JDRCxNQUFJLENBQUN3QixPQUFMLENBQWF4QixJQUFJLENBQUN5QixPQUFMLEtBQWtCeEIsS0FBSyxHQUFHLEVBQVIsR0FBYSxFQUFiLEdBQWtCLElBQWpEO0FBQ0EsU0FBT0QsSUFBUDtBQUNBO0FBRU0sU0FBUzBCLE9BQVQsQ0FBaUIxQixJQUFqQixFQUF1QjJCLElBQXZCLEVBQTZCO0FBQ25DM0IsTUFBSSxDQUFDd0IsT0FBTCxDQUFheEIsSUFBSSxDQUFDeUIsT0FBTCxLQUFrQkUsSUFBSSxHQUFHLEVBQVAsR0FBWSxFQUFaLEdBQWlCLEVBQWpCLEdBQXNCLElBQXJEO0FBQ0EsU0FBTzNCLElBQVA7QUFDQTtBQUVNLElBQUk0QixNQUFNLEdBQUc7QUFDbkJDLElBQUUsRUFBQyxDQUFDLFNBQUQsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE9BQWpDLEVBQTBDLEtBQTFDLEVBQWlELE1BQWpELEVBQXlELE1BQXpELEVBQWlFLFFBQWpFLEVBQTJFLFdBQTNFLEVBQXdGLFNBQXhGLEVBQW1HLFVBQW5HLEVBQStHLFVBQS9HLENBRGdCO0FBRW5CQyxJQUFFLEVBQUMsQ0FBQyxTQUFELEVBQVksU0FBWixFQUF1QixNQUF2QixFQUErQixPQUEvQixFQUF3QyxLQUF4QyxFQUErQyxNQUEvQyxFQUF1RCxTQUF2RCxFQUFrRSxNQUFsRSxFQUEwRSxXQUExRSxFQUF1RixTQUF2RixFQUFrRyxVQUFsRyxFQUE4RyxVQUE5RztBQUZnQixDQUFiO0FBS0EsU0FBU2hCLFFBQVQsQ0FBa0JkLElBQWxCLEVBQXdCK0IsUUFBeEIsRUFBa0M7QUFDeEMsTUFBSSxDQUFDQSxRQUFMLEVBQWU7QUFDZEEsWUFBUSxHQUFHLElBQVg7QUFDQTs7QUFDRCxNQUFJQyxLQUFKOztBQUNBLFVBQU9ELFFBQVA7QUFDQyxTQUFLLElBQUw7QUFDQ0MsV0FBSyxHQUFHSixNQUFNLENBQUNHLFFBQUQsQ0FBTixDQUFpQi9CLElBQUksQ0FBQ2MsUUFBTCxFQUFqQixDQUFSO0FBQ0E7QUFIRjs7QUFLQSxTQUFPa0IsS0FBUDtBQUNBO0FBRU0sU0FBU0MsTUFBVCxDQUFnQkMsU0FBaEIsRUFBMkI7QUFDakMsTUFBSUMsS0FBSyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBLE1BQUlDLEdBQUcsR0FBR0YsS0FBSyxDQUFDdEIsV0FBTixLQUFzQnFCLFNBQVMsQ0FBQ3JCLFdBQVYsRUFBaEM7QUFDQSxNQUFJbkMsQ0FBQyxHQUFHeUQsS0FBSyxDQUFDckIsUUFBTixLQUFtQm9CLFNBQVMsQ0FBQ3BCLFFBQVYsRUFBM0I7O0FBQ0EsTUFBSXBDLENBQUMsR0FBRyxDQUFKLElBQVVBLENBQUMsS0FBSyxDQUFOLElBQVd5RCxLQUFLLENBQUNwQixPQUFOLEtBQWtCbUIsU0FBUyxDQUFDbkIsT0FBVixFQUEzQyxFQUFpRTtBQUNoRXNCLE9BQUc7QUFDSDs7QUFDRCxTQUFPQSxHQUFQO0FBQ0E7QUFFTSxTQUFTQyxVQUFULENBQW9CdEMsSUFBcEIsRUFBMEI7QUFDaEMsTUFBSXBDLE1BQU0sR0FBRyxJQUFJd0UsSUFBSixDQUFTcEMsSUFBVCxDQUFiO0FBQ0FwQyxRQUFNLENBQUMyRSxVQUFQLENBQWtCM0UsTUFBTSxDQUFDeUMsVUFBUCxLQUFzQnpDLE1BQU0sQ0FBQzRFLGlCQUFQLEVBQXhDO0FBQ0EsU0FBTzVFLE1BQVA7QUFDQTtBQUVNLFNBQVM2RSxjQUFULENBQXdCQyxTQUF4QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDbEQsTUFBSUMscUJBQXFCLEdBQUcsS0FBSyxJQUFqQztBQUNBLFNBQU8sQ0FBQ04sVUFBVSxDQUFDSyxPQUFELENBQVYsR0FBc0JMLFVBQVUsQ0FBQ0ksU0FBRCxDQUFqQyxJQUFnREUscUJBQXZEO0FBQ0E7QUFFTSxTQUFTQyxZQUFULENBQXNCSCxTQUF0QixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDaEQsTUFBSUcsbUJBQW1CLEdBQUcsS0FBSyxFQUFMLEdBQVUsSUFBcEM7QUFDQSxTQUFPLENBQUNSLFVBQVUsQ0FBQ0ssT0FBRCxDQUFWLEdBQXNCTCxVQUFVLENBQUNJLFNBQUQsQ0FBakMsSUFBZ0RJLG1CQUF2RDtBQUNBO0FBRU0sU0FBU0MsV0FBVCxDQUFxQkwsU0FBckIsRUFBZ0NDLE9BQWhDLEVBQXlDO0FBQy9DLE1BQUlLLGtCQUFrQixHQUFHLEtBQUssRUFBTCxHQUFVLEVBQVYsR0FBZSxJQUF4QztBQUNBLFNBQU8sQ0FBQ1YsVUFBVSxDQUFDSyxPQUFELENBQVYsR0FBc0JMLFVBQVUsQ0FBQ0ksU0FBRCxDQUFqQyxJQUFnRE0sa0JBQXZEO0FBQ0E7QUFFTSxTQUFTQyxZQUFULENBQXNCUCxTQUF0QixFQUFpQ0MsT0FBakMsRUFBMEM7QUFDaEQsTUFBSU8sbUJBQW1CLEdBQUcsSUFBSSxFQUFKLEdBQVMsRUFBVCxHQUFjLEVBQWQsR0FBbUIsSUFBN0M7QUFDQSxTQUFPLENBQUNaLFVBQVUsQ0FBQ0ssT0FBRCxDQUFWLEdBQXNCTCxVQUFVLENBQUNJLFNBQUQsQ0FBakMsSUFBZ0RRLG1CQUF2RDtBQUNBO0FBRU0sU0FBU0MsYUFBVCxDQUF1QlQsU0FBdkIsRUFBa0NDLE9BQWxDLEVBQTJDO0FBQ2pELE1BQUlTLG9CQUFvQixHQUFHLE1BQU0sRUFBTixHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsRUFBdEIsR0FBMkIsSUFBdEQ7QUFDQSxTQUFPLENBQUNkLFVBQVUsQ0FBQ0ssT0FBRCxDQUFWLEdBQXNCTCxVQUFVLENBQUNJLFNBQUQsQ0FBakMsSUFBZ0RVLG9CQUF2RDtBQUNBO0FBRU0sU0FBU0MsWUFBVCxDQUFzQlgsU0FBdEIsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQ2hELE1BQUlXLG1CQUFtQixHQUFHLE1BQU0sRUFBTixHQUFXLEVBQVgsR0FBZ0IsRUFBaEIsR0FBcUIsSUFBL0M7QUFDQSxTQUFPLENBQUNoQixVQUFVLENBQUNLLE9BQUQsQ0FBVixHQUFzQkwsVUFBVSxDQUFDSSxTQUFELENBQWpDLElBQWdEWSxtQkFBdkQ7QUFDQTtBQUVNLFNBQVNDLHNCQUFULENBQWdDYixTQUFoQyxFQUEyQ0MsT0FBM0MsRUFBb0Q7QUFDMUQsTUFBSWEsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJSCxZQUFZLEdBQUdBLFlBQVksQ0FBQ1gsU0FBRCxFQUFZQyxPQUFaLENBQS9COztBQUNBLE1BQUlVLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUN0QixRQUFJSSxpQkFBaUIsR0FBRzVMLElBQUksQ0FBQ0csS0FBTCxDQUFXcUwsWUFBWCxDQUF4Qjs7QUFDQSxRQUFJSSxpQkFBaUIsR0FBRyxDQUF4QixFQUEyQjtBQUMxQkQsVUFBSSxHQUFHQyxpQkFBaUIsQ0FBQ2hJLFFBQWxCLEtBQStCLFlBQXRDO0FBQ0EsS0FGRCxNQUVPO0FBQ04rSCxVQUFJLEdBQUdDLGlCQUFpQixDQUFDaEksUUFBbEIsS0FBK0IsV0FBdEM7QUFDQTtBQUNELEdBUEQsTUFPTztBQUNOLFFBQUkwSCxjQUFhLEdBQUdBLGNBQWEsQ0FBQ1QsU0FBRCxFQUFZQyxPQUFaLENBQWpDOztBQUNBLFFBQUlRLGNBQWEsSUFBSSxDQUFyQixFQUF3QjtBQUN2QixVQUFJTyxrQkFBa0IsR0FBRzdMLElBQUksQ0FBQ0csS0FBTCxDQUFXbUwsY0FBWCxDQUF6Qjs7QUFDQSxVQUFJTyxrQkFBa0IsR0FBRyxDQUF6QixFQUE0QjtBQUMzQkYsWUFBSSxHQUFHRSxrQkFBa0IsQ0FBQ2pJLFFBQW5CLEtBQWdDLGFBQXZDO0FBQ0EsT0FGRCxNQUVPO0FBQ04rSCxZQUFJLEdBQUdFLGtCQUFrQixDQUFDakksUUFBbkIsS0FBZ0MsWUFBdkM7QUFDQTtBQUNELEtBUEQsTUFPTztBQUNOLFVBQUl3SCxhQUFZLEdBQUdBLGFBQVksQ0FBQ1AsU0FBRCxFQUFZQyxPQUFaLENBQS9COztBQUNBLFVBQUlNLGFBQVksSUFBSSxDQUFwQixFQUF1QjtBQUN0QixZQUFJVSxpQkFBaUIsR0FBRzlMLElBQUksQ0FBQ0csS0FBTCxDQUFXaUwsYUFBWCxDQUF4Qjs7QUFDQSxZQUFJVSxpQkFBaUIsR0FBRyxDQUF4QixFQUEyQjtBQUMxQkgsY0FBSSxHQUFHRyxpQkFBaUIsQ0FBQ2xJLFFBQWxCLEtBQStCLFlBQXRDO0FBQ0EsU0FGRCxNQUVPO0FBQ04rSCxjQUFJLEdBQUdHLGlCQUFpQixDQUFDbEksUUFBbEIsS0FBK0IsV0FBdEM7QUFDQTtBQUNELE9BUEQsTUFPTztBQUNOLFlBQUlzSCxZQUFXLEdBQUdBLFlBQVcsQ0FBQ0wsU0FBRCxFQUFZQyxPQUFaLENBQTdCOztBQUNBLFlBQUlJLFlBQVcsSUFBSSxDQUFuQixFQUFzQjtBQUNyQixjQUFJYSxnQkFBZ0IsR0FBRy9MLElBQUksQ0FBQ0csS0FBTCxDQUFXK0ssWUFBWCxDQUF2Qjs7QUFDQSxjQUFJYSxnQkFBZ0IsR0FBRyxDQUF2QixFQUEwQjtBQUN6QkosZ0JBQUksR0FBR0ksZ0JBQWdCLENBQUNuSSxRQUFqQixLQUE4QixXQUFyQztBQUNBLFdBRkQsTUFFTztBQUNOK0gsZ0JBQUksR0FBR0ksZ0JBQWdCLENBQUNuSSxRQUFqQixLQUE4QixVQUFyQztBQUNBO0FBQ0QsU0FQRCxNQU9PO0FBQ04sY0FBSW9ILGFBQVksR0FBR0EsYUFBWSxDQUFDSCxTQUFELEVBQVlDLE9BQVosQ0FBL0I7O0FBQ0EsY0FBSUUsYUFBWSxJQUFJLENBQXBCLEVBQXVCO0FBQ3RCLGdCQUFJZ0IsaUJBQWlCLEdBQUdoTSxJQUFJLENBQUNHLEtBQUwsQ0FBVzZLLGFBQVgsQ0FBeEI7O0FBQ0EsZ0JBQUlnQixpQkFBaUIsR0FBRyxDQUF4QixFQUEyQjtBQUMxQkwsa0JBQUksR0FBR0ssaUJBQWlCLENBQUNwSSxRQUFsQixLQUErQixZQUF0QztBQUNBLGFBRkQsTUFFTztBQUNOK0gsa0JBQUksR0FBR0ssaUJBQWlCLENBQUNwSSxRQUFsQixLQUErQixXQUF0QztBQUNBO0FBQ0QsV0FQRCxNQU9PO0FBQ04sZ0JBQUlnSCxlQUFjLEdBQUdBLGVBQWMsQ0FBQ0MsU0FBRCxFQUFZQyxPQUFaLENBQW5DOztBQUNBLGdCQUFJRixlQUFjLEdBQUcsQ0FBckIsRUFBd0I7QUFDdkIsa0JBQUlxQixtQkFBbUIsR0FBR2pNLElBQUksQ0FBQ0csS0FBTCxDQUFXeUssZUFBWCxDQUExQjs7QUFDQSxrQkFBSXFCLG1CQUFtQixHQUFHLENBQTFCLEVBQTZCO0FBQzVCTixvQkFBSSxHQUFHTSxtQkFBbUIsQ0FBQ3JJLFFBQXBCLEtBQWlDLGNBQXhDO0FBQ0EsZUFGRCxNQUVPO0FBQ04rSCxvQkFBSSxHQUFHTSxtQkFBbUIsQ0FBQ3JJLFFBQXBCLEtBQWlDLGFBQXhDO0FBQ0E7QUFDRCxhQVBELE1BT087QUFDTitILGtCQUFJLEdBQUcsVUFBUDtBQUNBO0FBQ0Q7QUFDRDtBQUNEO0FBQ0Q7QUFDRDs7QUFDRCxTQUFPQSxJQUFQO0FBQ0EsQzs7Ozs7QUNwS0Q7QUFDQTtBQUNBO0FBRUEvRCxNQUFNLENBQUNzRSxPQUFQLENBQWVDLEtBQWYsQ0FBcUJDLEdBQXJCLENBQXlCLENBQUMsTUFBRCxDQUF6QixFQUFtQyxVQUFDckcsTUFBRCxFQUFZO0FBQzNDLE1BQUlzRyxVQUFVLEdBQUcsTUFBakI7O0FBQ0EsTUFBR3RHLE1BQUgsRUFBVztBQUNQLFFBQUlBLE1BQU0sQ0FBQ3VHLElBQVgsRUFBaUI7QUFDYixVQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXMUcsTUFBTSxDQUFDdUcsSUFBbEIsQ0FBWDs7QUFDQSxVQUFJQyxJQUFJLENBQUNHLFFBQVQsRUFBbUI7QUFDZkwsa0JBQVUsR0FBR0UsSUFBSSxDQUFDRyxRQUFMLENBQWNDLFdBQTNCO0FBQ0g7QUFDSjtBQUNKOztBQUFBO0FBQ0QsTUFBSUMsaUJBQUo7O0FBQ0EsVUFBUVAsVUFBUjtBQUNJLFNBQUssTUFBTDtBQUNBLFNBQUssT0FBTDtBQUNJTyx1QkFBaUIsR0FBSVAsVUFBVSxJQUFJLE9BQW5DO0FBQ0E7O0FBQ0o7QUFDSSxVQUFJUSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDQyxVQUFQLENBQWtCLDhCQUFsQixDQUF6QjtBQUNBLFVBQUlDLFVBQVUsR0FBR0gsa0JBQWtCLENBQUNJLE9BQXBDO0FBQ0FMLHVCQUFpQixHQUFHLENBQUNJLFVBQXJCO0FBQ0E7QUFUUjs7QUFXQUUsVUFBUSxDQUFDQyxJQUFULENBQWNDLGFBQWQsQ0FBNEIsYUFBNUIsRUFBMkNDLFlBQTNDLENBQXdELGtCQUF4RCxFQUE0RVQsaUJBQTVFO0FBQ0gsQ0F2QkQ7QUF5QkFFLE1BQU0sQ0FBQ1EsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsWUFBSztBQUNuQ0MscUJBQW1CO0FBQ3RCLENBRkQ7QUFJQTNGLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlMkYsU0FBZixDQUF5QkMsV0FBekIsQ0FBcUMsVUFBQ0MsR0FBRCxFQUFNQyxNQUFOLEVBQWNDLFlBQWQsRUFBK0I7QUFDaEUsVUFBUUYsR0FBRyxDQUFDM0YsR0FBWjtBQUNJLFNBQUsseUJBQUw7QUFDSW1GLGNBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxhQUFkLENBQTRCLGFBQTVCLEVBQTJDQyxZQUEzQyxDQUF3RCxrQkFBeEQsRUFBNEVLLEdBQUcsQ0FBQ2QsaUJBQWhGO0FBQ0E7O0FBQ0osU0FBSywwQkFBTDtBQUNJaUIsaUJBQVc7QUFDWDs7QUFDSixTQUFLLDBCQUFMO0FBQ0lDLGlCQUFXO0FBQ1g7O0FBQ0osU0FBSyx3QkFBTDtBQUNJUCx5QkFBbUI7QUFDbkI7QUFaUjtBQWNILENBZkQ7QUFpQkEsSUFBSVEsTUFBTSxHQUFHYixRQUFRLENBQUNFLGFBQVQsQ0FBdUIsa0JBQXZCLENBQWI7QUFDQVcsTUFBTSxDQUFDVixZQUFQLENBQW9CLE9BQXBCLEVBQTZCLE1BQTdCO0FBQ0FVLE1BQU0sQ0FBQ1YsWUFBUCxDQUFvQixVQUFwQixFQUFnQyxNQUFoQztBQUNBVSxNQUFNLENBQUNWLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUMsTUFBbkM7QUFDQVUsTUFBTSxDQUFDVixZQUFQLENBQW9CLFVBQXBCLEVBQWdDLEdBQWhDO0FBQ0FVLE1BQU0sQ0FBQ1QsZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsWUFBTTtBQUNyQ0MscUJBQW1CO0FBQ3RCLENBRkQ7O0FBSUEsU0FBU0EsbUJBQVQsR0FBK0I7QUFDM0IzRixRQUFNLENBQUNDLE9BQVAsQ0FBZW1HLGlCQUFmLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUN2QyxRQUFJUCxHQUFHLEdBQUc7QUFBRTNGLFNBQUcsRUFBRSwwQkFBUDtBQUFtQ21HLFlBQU0sRUFBRWhCLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjZ0I7QUFBekQsS0FBVjtBQUNBdkcsVUFBTSxDQUFDd0csSUFBUCxDQUFZdEcsV0FBWixDQUF3Qm1HLElBQUksQ0FBQ0ksS0FBN0IsRUFBb0NYLEdBQXBDO0FBQ0gsR0FIRDtBQUlIOztBQUVELFNBQVNHLFdBQVQsR0FBdUI7QUFDbkJqRyxRQUFNLENBQUNDLE9BQVAsQ0FBZW1HLGlCQUFmLENBQWlDLFVBQUNDLElBQUQsRUFBVTtBQUN2QyxRQUFJQSxJQUFJLENBQUNLLFFBQVQsRUFBbUI7QUFDZlAsWUFBTSxDQUFDUSxHQUFQLEdBQWFOLElBQUksQ0FBQ0ssUUFBbEI7QUFDQSxVQUFJbkcsSUFBSSxHQUFHLElBQUlvQyxJQUFKLEVBQVg7QUFDQSxVQUFJaUUsUUFBUSxHQUFHdEcsUUFBUSxDQUFDQyxJQUFELENBQXZCLENBSGUsQ0FJZjs7QUFDQSxVQUFJVSxRQUFRLEdBQUc7QUFDWDRGLFlBQUksRUFBRXRHLElBQUksQ0FBQ2EsV0FBTCxFQURLO0FBRVhtQixhQUFLLEVBQUV2Rix3Q0FBYyxDQUFDdUQsSUFBSSxDQUFDYyxRQUFMLEtBQWtCLENBQW5CLENBRlY7QUFHWGQsWUFBSSxFQUFFdkQsd0NBQWMsQ0FBQ3VELElBQUksQ0FBQ2UsT0FBTCxFQUFEO0FBSFQsT0FBZjtBQUtBc0YsY0FBUSxDQUFDbEcsSUFBVCxHQUFnQmtHLFFBQVEsQ0FBQ2xHLElBQVQsQ0FBY29HLFdBQWQsRUFBaEI7QUFDQSxVQUFJQyxhQUFhLDRCQUFxQjlGLFFBQVEsQ0FBQzRGLElBQTlCLGNBQXNDNUYsUUFBUSxDQUFDc0IsS0FBL0MsY0FBd0R0QixRQUFRLENBQUNWLElBQWpFLGlCQUE0RXFHLFFBQVEsQ0FBQ3BHLEtBQXJGLGNBQThGb0csUUFBUSxDQUFDakcsT0FBdkcsY0FBa0hpRyxRQUFRLENBQUMvRixPQUEzSCxjQUFzSStGLFFBQVEsQ0FBQ2xHLElBQS9JLFVBQWpCO0FBRUEsVUFBSXNHLE9BQU8sR0FBRzFCLFFBQVEsQ0FBQzJCLGdCQUFULENBQTBCLHNCQUExQixDQUFkOztBQUNBLFdBQUssSUFBSS9OLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUc4TixPQUFPLENBQUNuTixNQUE1QixFQUFvQ1gsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxZQUFJZ08sTUFBTSxHQUFHRixPQUFPLENBQUM5TixDQUFELENBQXBCO0FBQ0FnTyxjQUFNLENBQUNDLElBQVAsR0FBY2QsSUFBSSxDQUFDSyxRQUFuQjtBQUNBUSxjQUFNLENBQUNFLFFBQVAsR0FBa0JMLGFBQWxCO0FBQ0FHLGNBQU0sQ0FBQ3hCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDbkM5RiwyREFBcUIsQ0FBQyxVQUFELEVBQWEsT0FBYixDQUFyQjtBQUNILFNBRkQ7QUFHSDs7QUFDRCxVQUFJeUgsY0FBYyxHQUFHL0IsUUFBUSxDQUFDRSxhQUFULENBQXVCLHlDQUF2QixDQUFyQjtBQUNBNkIsb0JBQWMsQ0FBQ0MsV0FBZixHQUE2QlAsYUFBN0I7QUFDSDtBQUNKLEdBMUJEO0FBMkJIOztBQUVELFNBQVNiLFdBQVQsR0FBdUI7QUFDbkJDLFFBQU0sQ0FBQ29CLEtBQVAsR0FEbUIsQ0FFbkI7QUFDQTtBQUNILEMiLCJmaWxlIjoidmlkZW8tcmVjb3JkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiXG4vLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBtaW4gKyAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG5cdHJldHVybiAodmFsdWUgJiAxKSA9PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcblx0cmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuXHRyZXR1cm4gKHZhbHVlICUgMSkgPT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPT0gMSB8fCB2YWx1ZSA9PSAyKVxuXHRcdHJldHVybiB0cnVlO1xuXG5cdGlmIChpc0V2ZW4odmFsdWUpKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHR2YXIgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG5cdGZvciAodmFyIGkgPSAzOyBpIDw9IHM7IGkrKylcblx0aWYgKHZhbHVlICUgaSA9PSAwKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEpIHtcblx0dmFyIHAgPSBNYXRoLnBvdygxMCwgcGxhY2UpO1xuXG5cdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogcCkgLyBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG8xKHZhbHVlKSB7XG5cdHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kRGVjaW1hbFRvMih2YWx1ZSkge1xuXHRyZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUbzModmFsdWUpIHtcblx0cmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDMpO1xufVxuXG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcblx0aWYgKGluZGV4IDwgMClcblx0XHRpbmRleCA9IGxlbmd0aCArIGluZGV4ICUgbGVuZ3RoO1xuXG5cdGlmIChpbmRleCA+PSBsZW5ndGgpXG5cdFx0cmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuXG5cdHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgdmFsdWUgaXMgaW5jbHVkZWQgd2l0aGluIGEgcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQHVzYWdlTm90ZSBUaGUgcmFuZ2UgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDMsIDAsIDUpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG5cdHJldHVybiAhKHZhbHVlIDwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHx8IHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB2YWx1ZSBmYWxscyB3aXRoaW4gYSByYW5nZTsgaWYgbm90IGl0IGlzIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyBlaXRoZXIgdGhlIG51bWJlciBhcyBwYXNzZWQsIG9yIGl0cyB2YWx1ZSBvbmNlIHNuYXBwZWQgdG8gbmVhcmVzdCByYW5nZSB2YWx1ZS5cbiBAdXNhZ2VOb3RlIFRoZSBjb25zdHJhaW50IHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNvbnN0cmFpbigzLCAwLCA1KSk7IC8vIFRyYWNlcyAzXG4gY29uc29sZS5sb2coY29uc3RyYWluKDcsIDAsIDUpKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJhaW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKSwgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBldmVubHkgc3BhY2VkIG51bWVyaWNhbCBpbmNyZW1lbnRzIGJldHdlZW4gdHdvIG51bWJlcnMuXG5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBwYXJhbSBzdGVwczogVGhlIG51bWJlciBvZiBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyBhbiBBcnJheSBjb21wcmlzZWQgb2YgdGhlIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigwLCA1LCA0KSk7IC8vIFRyYWNlcyAxLDIsMyw0XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDEsIDMsIDMpKTsgLy8gVHJhY2VzIDEuNSwyLDIuNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBzQmV0d2VlbihiZWdpbiwgZW5kLCBzdGVwcykge1xuXHRzdGVwcysrO1xuXG5cdHZhciBpID0gMDtcblx0dmFyIHN0ZXBzQmV0d2VlbiA9IFtdO1xuXHR2YXIgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG5cdHdoaWxlICgrK2kgPCBzdGVwcylcblx0XHRzdGVwc0JldHdlZW4ucHVzaCgoaSAqIGluY3JlbWVudCkgKyBiZWdpbik7XG5cblx0cmV0dXJuIHN0ZXBzQmV0d2Vlbjtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHZhbHVlIGJldHdlZW4gdHdvIHNwZWNpZmllZCB2YWx1ZXMuXG5cbiBAcGFyYW0gYW1vdW50OiBUaGUgbGV2ZWwgb2YgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLiBJZiA8Y29kZT4wPC9jb2RlPiwgPGNvZGU+YmVnaW48L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkOyBpZiA8Y29kZT4xPC9jb2RlPiwgPGNvZGU+ZW5kPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZC5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaW50ZXJwb2xhdGUoMC41LCAwLCAxMCkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlKGFtb3VudCwgYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gYmVnaW4gKyAoZW5kIC0gYmVnaW4pICogYW1vdW50O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgcGVyY2VudGFnZSBvZiBhIHZhbHVlIGluIGEgZ2l2ZW4gcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQuXG4gQHBhcmFtIG1pbmltdW06IFRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIG1heGltdW06IFRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhub3JtYWxpemUoOCwgNCwgMjApLmRlY2ltYWxQZXJjZW50YWdlKTsgLy8gVHJhY2VzIDAuMjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIG1pbmltdW0sIG1heGltdW0pIHtcblx0cmV0dXJuIG5ldyBQZXJjZW50KCh2YWx1ZSAtIG1pbmltdW0pIC8gKG1heGltdW0gLSBtaW5pbXVtKSk7XG59XG5cbi8qKlxuIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSBjb29yZGluYXRlIHNwYWNlIHRvIGFub3RoZXIuXG5cbiBAcGFyYW0gdmFsdWU6IFZhbHVlIGZyb20gdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UgdG8gbWFwIHRvIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMTogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDE6IEVuZGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMjogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgyOiBFbmRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobWFwKDAuNzUsIDAsIDEsIDAsIDEwMCkpOyAvLyBUcmFjZXMgNzVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcblx0cmV0dXJuIGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpO1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuLy8gXHRyZXR1cm4gbWluMiArIChtYXgyIC0gbWluMikgKiAoKHZhbHVlIC0gbWluMSkgLyAobWF4MSAtIG1pbjEpKTtcbi8vIH1cblxuLyoqXG4gTG93IHBhc3MgZmlsdGVyIGFsb2dyaXRobSBmb3IgZWFzaW5nIGEgdmFsdWUgdG93YXJkIGEgZGVzdGluYXRpb24gdmFsdWUuIFdvcmtzIGJlc3QgZm9yIHR3ZWVuaW5nIHZhbHVlcyB3aGVuIG5vIGRlZmluaXRlIHRpbWUgZHVyYXRpb24gZXhpc3RzIGFuZCB3aGVuIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZSBjaGFuZ2VzLlxuXG4gSWYgPGNvZGU+KDAuNSA8IG4gPCAxKTwvY29kZT4sIHRoZW4gdGhlIHJlc3VsdGluZyB2YWx1ZXMgd2lsbCBvdmVyc2hvb3QgKHBpbmctcG9uZykgdW50aWwgdGhleSByZWFjaCB0aGUgZGVzdGluYXRpb24gdmFsdWUuIFdoZW4gPGNvZGU+bjwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDEsIGFzIGl0cyB2YWx1ZSBpbmNyZWFzZXMsIHRoZSB0aW1lIGl0IHRha2VzIHRvIHJlYWNoIHRoZSBkZXN0aW5hdGlvbiBhbHNvIGluY3JlYXNlcy4gQSBwbGVhc2luZyB2YWx1ZSBmb3IgPGNvZGU+bjwvY29kZT4gaXMgNS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWUuXG4gQHBhcmFtIGRlc3Q6IFRoZSBkZXN0aW5hdGlvbiB2YWx1ZS5cbiBAcGFyYW0gbjogVGhlIHNsb3dkb3duIGZhY3Rvci5cbiBAcmV0dXJuIFRoZSB3ZWlnaHRlZCBhdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0ZWRBdmVyYWdlKHZhbHVlLCBkZXN0LCBuKSB7XG5cdHJldHVybiB2YWx1ZSArIChkZXN0IC0gdmFsdWUpIC8gbjtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCJcIjwvY29kZT4uXG4gQHBhcmFtIG1pbkxlbmd0aDogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBudW1iZXI7IGRlZmF1bHRzIHRvIDxjb2RlPjAgPC9jb2RlPi5cbiBAcGFyYW0gZmlsbENoYXI6IFRoZSBsZWFkaW5nIGNoYXJhY3RlciB1c2VkIHRvIG1ha2UgdGhlIG51bWJlciB0aGUgbWluaW11bSBsZW5ndGg7IGRlZmF1bHRzIHRvIDxjb2RlPlwiMFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXQoMTIzNDU2NywgXCIsXCIsIDgpKTsgLy8gVHJhY2VzIDAxLDIzNCw1NjdcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIGtEZWxpbSwgbWluTGVuZ3RoLCBmaWxsQ2hhcikge1xuXHRpZiAoIWtEZWxpbSkge1xuXHRcdGtEZWxpbSA9IFwiLFwiO1xuXHR9XG5cdGlmIChpc05hTihtaW5MZW5ndGgpKSB7XG5cdFx0bWluTGVuZ3RoID0gMDtcblx0fVxuXHRpZiAoIWZpbGxDaGFyKSB7XG5cdFx0ZmlsbENoYXIgPSBcIjBcIjtcblx0fVxuXHR2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuXHR2YXIgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcblx0dmFyIGxlbiA9IG51bS5sZW5ndGg7XG5cblx0aWYgKG1pbkxlbmd0aCAhPSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuXHRcdG1pbkxlbmd0aCAtPSBsZW47XG5cblx0XHR2YXIgYWRkQ2hhciA9IGZpbGxDaGFyIHx8ICcwJztcblxuXHRcdHdoaWxlIChtaW5MZW5ndGgtLSlcblx0XHRcdG51bSA9IGFkZENoYXIgKyBudW07XG5cdH1cblxuXHRpZiAoa0RlbGltICE9IG51bGwgJiYgbnVtLmxlbmd0aCA+IDMpIHtcblx0XHR2YXIgdG90YWxEZWxpbSAgPSBNYXRoLmZsb29yKG51bS5sZW5ndGggLyAzKTtcblx0XHR2YXIgdG90YWxSZW1haW4gPSBudW0ubGVuZ3RoICUgMztcblx0XHR2YXIgbnVtU3BsaXQgICA9IG51bS5zcGxpdCgnJyk7XG5cdFx0dmFyIGkgPSAtMTtcblxuXHRcdHdoaWxlICgrK2kgPCB0b3RhbERlbGltKVxuXHRcdFx0bnVtU3BsaXQuc3BsaWNlKHRvdGFsUmVtYWluICsgKDQgKiBpKSwgMCwga0RlbGltKTtcblxuXHRcdGlmICh0b3RhbFJlbWFpbiA9PSAwKVxuXHRcdFx0bnVtU3BsaXQuc2hpZnQoKTtcblxuXHRcdG51bSA9IG51bVNwbGl0LmpvaW4oJycpO1xuXHR9XG5cblx0aWYgKHJlbWFpbmRlciAhPSAwKVxuXHRcdG51bSArPSByZW1haW5kZXIudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG5cblx0cmV0dXJuIG51bTtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIGN1cnJlbmN5IHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGZvcmNlRGVjaW1hbHM6IElmIHRoZSBudW1iZXIgc2hvdWxkIGFsd2F5cyBoYXZlIHR3byBkZWNpbWFsIHBsYWNlcyA8Y29kZT50cnVlPC9jb2RlPiwgb3Igb25seSBzaG93IGRlY2ltYWxzIGlzIHRoZXJlIGlzIGEgZGVjaW1hbHMgdmFsdWUgPGNvZGU+ZmFsc2U8L2NvZGU+OyBkZWZhdWx0cyB0byA8Y29kZT50cnVlPC9jb2RlPi5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIixcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0Q3VycmVuY3koMTIzNC41KSk7IC8vIFRyYWNlcyBcIjEsMjM0LjUwXCJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeSh2YWx1ZSwgZm9yY2VEZWNpbWFscywga0RlbGltKSB7XG5cdGlmIChmb3JjZURlY2ltYWxzID09IG51bGwpIHtcblx0XHRmb3JjZURlY2ltYWxzID0gdHJ1ZTtcblx0fVxuXHRpZiAoIWtEZWxpbSkge1xuXHRcdGtEZWxpbSAgPSBcIixcIjtcblx0fVxuXHR2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuXHR2YXIgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cblx0aWYgKHJlbWFpbmRlciAhPSAwIHx8IGZvcmNlRGVjaW1hbHMpXG5cdFx0Y3VycmVuY3kgKz0gcmVtYWluZGVyLnRvRml4ZWQoMikuc3Vic3RyKDEpO1xuXG5cdHJldHVybiBjdXJyZW5jeTtcbn1cblxuLyoqXG4gRmluZHMgdGhlIGVuZ2xpc2ggb3JkaW5hbCBzdWZmaXggZm9yIHRoZSBudW1iZXIgZ2l2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBmaW5kIHRoZSBvcmRpbmFsIHN1ZmZpeCBvZi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHN1ZmZpeCBmb3IgdGhlIG51bWJlciwgMiBjaGFyYWN0ZXJzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coMzIgKyBnZXRPcmRpbmFsU3VmZml4KDMyKSk7IC8vIFRyYWNlcyAzMm5kXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPj0gMTAgJiYgdmFsdWUgPD0gMjApXG5cdFx0cmV0dXJuICd0aCc7XG5cblx0aWYgKHZhbHVlID09IDApXG5cdFx0cmV0dXJuICcnO1xuXG5cdHN3aXRjaCAodmFsdWUgJSAxMCkge1xuXHRcdGNhc2UgMyA6XG5cdFx0XHRyZXR1cm4gJ3JkJztcblx0XHRjYXNlIDIgOlxuXHRcdFx0cmV0dXJuICduZCc7XG5cdFx0Y2FzZSAxIDpcblx0XHRcdHJldHVybiAnc3QnO1xuXHRcdGRlZmF1bHQgOlxuXHRcdFx0cmV0dXJuICd0aCc7XG5cdH1cbn1cblxuLyoqXG4gQWRkcyBhIGxlYWRpbmcgemVybyBmb3IgbnVtYmVycyBsZXNzIHRoYW4gdGVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gYWRkIGxlYWRpbmcgemVyby5cbiBAcmV0dXJuIE51bWJlciBhcyBhIFN0cmluZzsgaWYgdGhlIG51bWJlciB3YXMgbGVzcyB0aGFuIHRlbiB0aGUgbnVtYmVyIHdpbGwgaGF2ZSBhIGxlYWRpbmcgemVyby5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDcpKTsgLy8gVHJhY2VzIDA3XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oMTEpKTsgLy8gVHJhY2VzIDExXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm8odmFsdWUpIHtcblx0cmV0dXJuICh2YWx1ZSA8IDEwKSA/ICcwJyArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gU3BlbGxzIHRoZSBwcm92aWRlZCBudW1iZXIuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBzcGVsbC4gTmVlZHMgdG8gYmUgbGVzcyB0aGFuIDk5OTk5OTk5OS5cbiBAcmV0dXJuIFRoZSBudW1iZXIgc3BlbGxlZCBvdXQgYXMgYSBTdHJpbmcuXG4gQHRocm93cyA8Y29kZT5FcnJvcjwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiA5OTk5OTk5OTkuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhzcGVsbCgwKSk7IC8vIFRyYWNlcyBaZXJvXG4gY29uc29sZS5sb2coc3BlbGwoMjMpKTsgLy8gVHJhY2VzIFR3ZW50eS1UaHJlZVxuIGNvbnNvbGUubG9nKHNwZWxsKDIwMDU2NzgpKTsgLy8gVHJhY2VzIFR3byBNaWxsaW9uLCBGaXZlIFRob3VzYW5kLCBTaXggSHVuZHJlZCBTZXZlbnR5LUVpZ2h0XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlbGwodmFsdWUpIHtcblx0aWYgKHZhbHVlID4gOTk5OTk5OTk5KSB7XG5cdFx0dGhyb3cgKCdWYWx1ZSB0b28gbGFyZ2UgZm9yIHRoaXMgbWV0aG9kLicpO1xuXHR9XG5cblx0dmFyIG9uZXNTcGVsbGluZ3MgPSBbJycsICdPbmUnLCAnVHdvJywgJ1RocmVlJywgJ0ZvdXInLCAnRml2ZScsICdTaXgnLCAnU2V2ZW4nLCAnRWlnaHQnLCAnTmluZScsICdUZW4nLCAnRWxldmVuJywgJ1R3ZWx2ZScsICdUaGlydGVlbicsICdGb3VydGVlbicsICdGaWZ0ZWVuJywgJ1NpeHRlZW4nLCAnU2V2ZW50ZWVuJywgJ0VpZ2h0ZWVuJywgJ05pbmV0ZWVuJ107XG5cdHZhciB0ZW5zU3BlbGxpbmdzID0gWycnLCAnJywgJ1R3ZW50eScsICdUaGlydHknLCAnRm9ydHknLCAnRmlmdHknLCAnU2l4dHknLCAnU2V2ZW50eScsICdFaWdodHknLCAnTmluZXR5J107XG5cdHZhciBzcGVsbGluZyAgICAgICA9ICcnO1xuXG5cdHZhciBtaWxsaW9ucyA9IHZhbHVlIC8gMTAwMDAwMDtcblx0dmFsdWUgICAgICAgICAgICAgICU9IDEwMDAwMDA7XG5cblx0dmFyIHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcblx0dmFsdWUgICAgICAgICAgICAgICAlPSAxMDAwO1xuXG5cdHZhciBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuXHR2YWx1ZSAgICAgICAgICAgICAgJT0gMTAwO1xuXG5cdHZhciB0ZW5zID0gdmFsdWUgLyAxMDtcblx0dmFsdWUgICAgICAgICAgJT0gMTA7XG5cblx0dmFyIG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG5cdGlmIChtaWxsaW9ucyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJywgJztcblx0XHRzcGVsbGluZyArPSBzcGVsbChtaWxsaW9ucykgKyAnIE1pbGxpb24nO1xuXHR9XG5cblx0aWYgKHRob3VzYW5kcyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJywgJztcblx0XHRzcGVsbGluZyArPSBzcGVsbCh0aG91c2FuZHMpICsgJyBUaG91c2FuZCc7XG5cdH1cblxuXHRpZiAoaHVuZHJlZHMgIT0gMCkge1xuXHRcdHNwZWxsaW5nICs9IChzcGVsbGluZy5sZW5ndGggPT0gMCkgPyAnJyA6ICcsICc7XG5cdFx0c3BlbGxpbmcgKz0gc3BlbGwoaHVuZHJlZHMpICsgJyBIdW5kcmVkJztcblx0fVxuXG5cdGlmICh0ZW5zICE9IDAgfHwgb25lcyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJyAnO1xuXG5cdFx0aWYgKHRlbnMgPCAyKVxuXHRcdFx0c3BlbGxpbmcgKz0gb25lc1NwZWxsaW5nc1t0ZW5zICogMTAgKyBvbmVzXTtcblx0XHRlbHNlIHtcblx0XHRcdHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cblx0XHRcdGlmIChvbmVzICE9IDApXG5cdFx0XHRcdHNwZWxsaW5nICs9ICctJyArIG9uZXNTcGVsbGluZ3Nbb25lc107XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNwZWxsaW5nLmxlbmd0aCA9PSAwKVxuXHRcdHJldHVybiAnWmVybyc7XG5cblx0cmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuXHRsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XG5cdHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuXHRyZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG5cdGxldCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcblx0cmV0dXJuIHJlc3VsdCA/IHtcblx0XHRyOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcblx0XHRnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcblx0XHRiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcblx0XHR0b1N0cmluZzpmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIChcInI6XCIgKyB0aGlzLnIgKyBcIixnOlwiICsgdGhpcy5nICsgXCIsYjpcIiArIHRoaXMuYilcblx0XHR9XG5cdH0gOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcykge1xuXHRyZXR1cm4gZGVncmVlcyAqIE1hdGguUEkgLyAxODA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWQpIHtcblx0cmV0dXJuIHJhZCAqIDE4MCAvIE1hdGguUEk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhzdGVwICh2YWx1ZSwgbWluLCBtYXgpIHtcblx0bGV0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpKTtcblx0cmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcblx0cmV0dXJuIGEgKyB0ICogKGIgLSBhKTtcblx0Ly8gcmV0dXJuIGEoMS10KSArIGJ0XG5cdC8vcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtKHZhbHVlLCBtaW4sIG1heCkge1xuXHRyZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZChuLCBtKSB7XG5cdHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9hIG1vZHVsbyBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgbmVnYXRpdmVzIG51bWJlcnMgJ2NvcnJlY3RseSdcbmV4cG9ydCBmdW5jdGlvbiBtb2RXcmFwKG4sIG0pIHtcblx0cmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL3JhbmRvbSB3aXRoIHNlZWQsIHJldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tMUQoc2VlZCkge1xuXHRyZXR1cm4gbW9kV3JhcChNYXRoLnNpbihzZWVkKSAqIDQzNzU4LjU0NTMsIDEpO1xufVxuXG4vL3JldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gbm9pc2UxRCh4KSB7XG5cdGxldCBpID0gTWF0aC5mbG9vcih4KTtcblx0bGV0IGYgPSBtb2RXcmFwKHgsIDEpO1xuXHRsZXQgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuXHRyZXR1cm4gbGVycCh1LCByYW5kb20xRChpKSwgcmFuZG9tMUQoaSArIDEuMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcblx0cmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcENsYW1wKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG5cdHJldHVybiBjbGFtcChsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKSwgbWluMiwgbWF4Mik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrRXZlbnRNZXNzYWdlKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsID0gXCJcIikge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja0V2ZW50XCIsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrUGFnZU1lc3NhZ2UocGF0aCkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIiwgcGF0aCB9KTtcbn0iLCJpbXBvcnQge2FkZExlYWRpbmdaZXJvfSBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBTVBNKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGxldCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRsZXQgc2Vjb25kcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbXBtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUsIHNwYWNlQmV0d2VlbiA9IFwiXCIpIHtcblx0bGV0IGRhdGVEYXRhID0gdGltZUFNUE0oZGF0ZSk7XG5cdGxldCBzdHJUaW1lID0gZGF0ZURhdGEuaG91cnMgKyAnOicgKyBkYXRlRGF0YS5taW51dGVzICsgc3BhY2VCZXR3ZWVuICsgYW1wbTtcblx0cmV0dXJuIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFVUQ1N0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0RhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDSG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG91cnMoZGF0ZSwgaG91cnMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgbGV0IG1vbnRocyA9IHtcblx0ZW46W1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdGZyOltcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIiwgXCJKdWlsbGV0XCIsIFwiQW/Du3RcIiwgXCJTZXB0ZW1icmVcIiwgXCJPY3RvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEw6ljZW1icmVcIl1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlLCBsYW5ndWFnZSkge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0bGFuZ3VhZ2UgPSBcImVuXCI7XG5cdH1cblx0bGV0IG1vbnRoO1xuXHRzd2l0Y2gobGFuZ3VhZ2UpIHtcblx0XHRjYXNlIFwiZW5cIjpcblx0XHRcdG1vbnRoID0gbW9udGhzW2xhbmd1YWdlXVtkYXRlLmdldE1vbnRoKCldO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIG1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGJpcnRoRGF0ZSkge1xuXHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0aWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0YWdlLS07XG5cdH1cblx0cmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWF0QXNVVEMoZGF0ZSkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG5cdHJlc3VsdC5zZXRNaW51dGVzKHJlc3VsdC5nZXRNaW51dGVzKCkgLSByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1pbnV0ZSA9IDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckhvdXIgPSA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckhvdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1vbnRoID0gMzY1IC8gMTIgICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyWWVhciA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJZZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IHRleHQgPSBcIlwiO1xuXHRsZXQgeWVhcnNCZXR3ZWVuID0geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdGlmICh5ZWFyc0JldHdlZW4gPj0gMSkge1xuXHRcdGxldCB5ZWFyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoeWVhcnNCZXR3ZWVuKTtcblx0XHRpZiAoeWVhcnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXJzIGFnb1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXIgYWdvXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGxldCBtb250aHNCZXR3ZWVuID0gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdGlmIChtb250aHNCZXR3ZWVuID49IDEpIHtcblx0XHRcdGxldCBtb250aHNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1vbnRoc0JldHdlZW4pO1xuXHRcdFx0aWYgKG1vbnRoc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGhzIGFnb1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGggYWdvXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB3ZWVrc0JldHdlZW4gPSB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdGlmICh3ZWVrc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRsZXQgd2Vla3NCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHdlZWtzQmV0d2Vlbik7XG5cdFx0XHRcdGlmICh3ZWVrc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWtzIGFnb1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2VlayBhZ29cIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuID0gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRsZXQgZGF5c0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoZGF5c0JldHdlZW4pO1xuXHRcdFx0XHRcdGlmIChkYXlzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheXMgYWdvXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXkgYWdvXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW4gPSBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoaG91cnNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VycyBhZ29cIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91ciBhZ29cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuID0gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1pbnV0ZXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZSBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IFwiSnVzdCBub3dcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59IiwiaW1wb3J0IHsgdGltZUFNUE0gfSBmcm9tIFwiLi90c3VuYW1pL3V0aWxzL2RhdGVcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvIH0gZnJvbSBcIi4vdHN1bmFtaS91dGlscy9udW1iZXJcIjtcbmltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuL21vZGVsL0dBQnJpZGdlXCI7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJqc29uXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgbGV0IGNvbG9yVGhlbWUgPSBcIkRhcmtcIjtcbiAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb2xvclRoZW1lID0gZGF0YS5zZXR0aW5ncy5jb2xvclRoZW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGlzQ29sb3JUaGVtZUxpZ2h0O1xuICAgIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgICAgICBjYXNlIFwiRGFya1wiOlxuICAgICAgICBjYXNlIFwiTGlnaHRcIjpcbiAgICAgICAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gKGNvbG9yVGhlbWUgPT0gXCJMaWdodFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGRhcmtNb2RlTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gICAgICAgICAgICBsZXQgaXNEYXJrTW9kZSA9IGRhcmtNb2RlTWF0Y2hNZWRpYS5tYXRjaGVzO1xuICAgICAgICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAhaXNEYXJrTW9kZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIGlzQ29sb3JUaGVtZUxpZ2h0KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKT0+IHtcbiAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eHQpIHtcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVDb2xvclRoZW1lXCI6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIG1zZy5pc0NvbG9yVGhlbWVMaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVVcGRhdGVWaWRlb1wiOlxuICAgICAgICAgICAgdXBkYXRlVmlkZW8oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvXCI6XG4gICAgICAgICAgICB1bmxvYWRWaWRlbygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvXCI6XG4gICAgICAgICAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxubGV0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1wbGF5ZXInKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoXCJtdXRlZFwiLCBcInRydWVcIik7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgXCJ0cnVlXCIpO1xucGxheWVyLnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJzEnKTtcbnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwYXRjaFZpZGVvSGVpZ3RoKCkge1xuICAgIGNocm9tZS5ydW50aW1lLmdldEJhY2tncm91bmRQYWdlKChwYWdlKSA9PiB7XG4gICAgICAgIGxldCBtc2cgPSB7IHR4dDogXCJzY3JvbGxDYXB0dXJlVmlkZW9IZWlnaHRcIiwgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCB9O1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShwYWdlLnRhYklkLCBtc2cpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWRlbygpIHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRCYWNrZ3JvdW5kUGFnZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAocGFnZS52aWRlb1VSTCkge1xuICAgICAgICAgICAgcGxheWVyLnNyYyA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgYW1wbVRpbWUgPSB0aW1lQU1QTShkYXRlKTtcbiAgICAgICAgICAgIC8vIFNjcmVlbiBTaG90IDIwMjAtMDMtMjAgYXQgNC4zNS4xNCBQTVxuICAgICAgICAgICAgbGV0IGRhdGVEYXRhID0ge1xuICAgICAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2aWRlb0ZpbGVOYW1lID0gYFNjcm9sbCBDYXB0dXJlICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfS53ZWJtYDtcblxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICAgICAgICAgICAgICBidXR0b24uaHJlZiA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwiZG93bmxvYWRcIiwgXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmaWxlTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtdmlkZW8tZmlsZW5hbWUgYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmaWxlTmFtZUJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZGVvRmlsZU5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gICAgcGxheWVyLnBhdXNlKCk7XG4gICAgLy8gcGxheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgLy8gcGxheWVyLmxvYWQoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9