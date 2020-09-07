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
/* unused harmony export round1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return round2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return round3; });
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
/* unused harmony export mix */
/* unused harmony export norm */
/* unused harmony export clamp */
/* unused harmony export mod */
/* unused harmony export modWrap */
/* unused harmony export random1D */
/* unused harmony export noise1D */
/* unused harmony export randomRange */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return randomInt; });
/* unused harmony export mapClamp */
/* unused harmony export sineWave */
/* unused harmony export clampTime */
/* unused harmony export easeOut */
/* unused harmony export spring */
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
function round1(value) {
  return roundDecimalToPlace(value, 1);
}
function round2(value) {
  return roundDecimalToPlace(value, 2);
}
function round3(value) {
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
    var addChar = fillChar || "0";

    while (minLength--) {
      num = addChar + num;
    }
  }

  if (kDelim != null && num.length > 3) {
    var totalDelim = Math.floor(num.length / 3);
    var totalRemain = num.length % 3;
    var numSplit = num.split("");
    var i = -1;

    while (++i < totalDelim) {
      numSplit.splice(totalRemain + 4 * i, 0, kDelim);
    }

    if (totalRemain == 0) numSplit.shift();
    num = numSplit.join("");
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
  if (value >= 10 && value <= 20) return "th";
  if (value == 0) return "";

  switch (value % 10) {
    case 3:
      return "rd";

    case 2:
      return "nd";

    case 1:
      return "st";

    default:
      return "th";
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
  return value < 10 ? "0" + value : value.toString();
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
    throw "Value too large for this method.";
  }

  var onesSpellings = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  var tensSpellings = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  var spelling = "";
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
    spelling += spelling.length == 0 ? "" : ", ";
    spelling += spell(millions) + " Million";
  }

  if (thousands != 0) {
    spelling += spelling.length == 0 ? "" : ", ";
    spelling += spell(thousands) + " Thousand";
  }

  if (hundreds != 0) {
    spelling += spelling.length == 0 ? "" : ", ";
    spelling += spell(hundreds) + " Hundred";
  }

  if (tens != 0 || ones != 0) {
    spelling += spelling.length == 0 ? "" : " ";
    if (tens < 2) spelling += onesSpellings[tens * 10 + ones];else {
      spelling += tensSpellings[tens];
      if (ones != 0) spelling += "-" + onesSpellings[ones];
    }
  }

  if (spelling.length == 0) return "Zero";
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
function mix(a, b, t) {
  return lerp(a, b, t);
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
function sineWave() {
  var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var frequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.PI;
  var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var amplitude = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  return Math.sin(angle * frequency + time * speed) * amplitude;
}
function clampTime(time, startTime, duration) {
  return clamp(time - startTime, 0.0, duration) / duration;
}
/**
 Ease a value with some elasticity
 @param value: The current value
 @param target: The target value
 @param friction: The friction from 0 to 1
 @return The ease value
 @example
 <code>
 value += easeOut(value, target, friction);
 </code>
 */

function easeOut(value, target) {
  var friction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
  return (target - value) * friction;
}
/**
 Ease a value with some elasticity
 @param value: The current value
 @param target: The target value
 @param friction: The friction from 0 to 1
 @param speed: The current speed
 @param elasticity: The elasticity from 0 to 1
 @return The new speed value.
 @example
 <code>
 speed = spring(value, target, friction, speed, elasticity);
 value += speed;
 </code>
 */

function spring(value) {
  var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var friction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
  var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var elasticity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return speed * elasticity + (target - value) * friction;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0FCcmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2pzL3ZpZGVvLXJlY29yZGluZy5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZmxvb3IiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwicm91bmREZWNpbWFsVG9QbGFjZSIsInBsYWNlIiwicCIsInBvdyIsInJvdW5kIiwicm91bmQxIiwicm91bmQyIiwicm91bmQzIiwibG9vcEluZGV4IiwiaW5kZXgiLCJsZW5ndGgiLCJpc0JldHdlZW4iLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJjb25zdHJhaW4iLCJjcmVhdGVTdGVwc0JldHdlZW4iLCJiZWdpbiIsImVuZCIsInN0ZXBzIiwic3RlcHNCZXR3ZWVuIiwiaW5jcmVtZW50IiwicHVzaCIsImludGVycG9sYXRlIiwiYW1vdW50Iiwibm9ybWFsaXplIiwibWluaW11bSIsIm1heGltdW0iLCJQZXJjZW50IiwibWFwIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImxlcnAiLCJub3JtIiwiZ2V0V2VpZ2h0ZWRBdmVyYWdlIiwiZGVzdCIsIm4iLCJmb3JtYXQiLCJrRGVsaW0iLCJtaW5MZW5ndGgiLCJmaWxsQ2hhciIsImlzTmFOIiwicmVtYWluZGVyIiwibnVtIiwidG9TdHJpbmciLCJsZW4iLCJhZGRDaGFyIiwidG90YWxEZWxpbSIsInRvdGFsUmVtYWluIiwibnVtU3BsaXQiLCJzcGxpdCIsInNwbGljZSIsInNoaWZ0Iiwiam9pbiIsInN1YnN0ciIsImZvcm1hdEN1cnJlbmN5IiwiZm9yY2VEZWNpbWFscyIsImN1cnJlbmN5IiwidG9GaXhlZCIsImdldE9yZGluYWxTdWZmaXgiLCJhZGRMZWFkaW5nWmVybyIsInNwZWxsIiwib25lc1NwZWxsaW5ncyIsInRlbnNTcGVsbGluZ3MiLCJzcGVsbGluZyIsIm1pbGxpb25zIiwidGhvdXNhbmRzIiwiaHVuZHJlZHMiLCJ0ZW5zIiwib25lcyIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsInJnYlRvSGV4IiwicmdiIiwiciIsImciLCJiIiwiaGV4VG9SZ2IiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJkZWdUb1JhZCIsImRlZ3JlZXMiLCJQSSIsInJhZFRvRGVnIiwicmFkIiwic21vb3Roc3RlcCIsIngiLCJhIiwidCIsIm1peCIsImNsYW1wIiwibW9kIiwibSIsIm1vZFdyYXAiLCJyYW5kb20xRCIsInNlZWQiLCJzaW4iLCJub2lzZTFEIiwiZiIsInUiLCJyYW5kb21SYW5nZSIsInJhbmRvbUludCIsIm1hcENsYW1wIiwic2luZVdhdmUiLCJhbmdsZSIsImZyZXF1ZW5jeSIsInRpbWUiLCJzcGVlZCIsImFtcGxpdHVkZSIsImNsYW1wVGltZSIsInN0YXJ0VGltZSIsImR1cmF0aW9uIiwiZWFzZU91dCIsInRhcmdldCIsImZyaWN0aW9uIiwic3ByaW5nIiwiZWxhc3RpY2l0eSIsInNlbmRUcmFja0V2ZW50TWVzc2FnZSIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJ0eHQiLCJzZW5kVHJhY2tQYWdlTWVzc2FnZSIsInBhdGgiLCJ0aW1lQU1QTSIsImRhdGUiLCJob3VycyIsImdldEhvdXJzIiwiYW1wbSIsIm1pbnV0ZXMiLCJnZXRNaW51dGVzIiwic2Vjb25kcyIsImdldFNlY29uZHMiLCJmb3JtYXRBTVBNIiwic3BhY2VCZXR3ZWVuIiwiZGF0ZURhdGEiLCJzdHJUaW1lIiwidG9Vbml4U3RyaW5nIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJ0b1VuaXhVVENTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsImdldFVUQ1NlY29uZHMiLCJhZGRIb3VycyIsInNldFRpbWUiLCJnZXRUaW1lIiwiYWRkRGF5cyIsImRheXMiLCJtb250aHMiLCJlbiIsImZyIiwibGFuZ3VhZ2UiLCJtb250aCIsImdldEFnZSIsImJpcnRoRGF0ZSIsInRvZGF5IiwiRGF0ZSIsImFnZSIsInRyZWF0QXNVVEMiLCJzZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJtaW51dGVzQmV0d2VlbiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJtaWxsaXNlY29uZHNQZXJNaW51dGUiLCJob3Vyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJIb3VyIiwiZGF5c0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJEYXkiLCJ3ZWVrc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJXZWVrIiwibW9udGhzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1Blck1vbnRoIiwieWVhcnNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyWWVhciIsImdldEZhbWlsaWFyVGltZUJldHdlZW4iLCJ0ZXh0IiwieWVhcnNCZXR3ZWVuRmxvb3IiLCJtb250aHNCZXR3ZWVuRmxvb3IiLCJ3ZWVrc0JldHdlZW5GbG9vciIsImRheXNCZXR3ZWVuRmxvb3IiLCJob3Vyc0JldHdlZW5GbG9vciIsIm1pbnV0ZXNCZXR3ZWVuRmxvb3IiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJjb2xvclRoZW1lIiwianNvbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzZXR0aW5ncyIsImNvbG9yVGhlbWVzIiwiaXNDb2xvclRoZW1lTGlnaHQiLCJkYXJrTW9kZU1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaXNEYXJrTW9kZSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoVmlkZW9IZWlndGgiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInVwZGF0ZVZpZGVvIiwidW5sb2FkVmlkZW8iLCJwbGF5ZXIiLCJnZXRCYWNrZ3JvdW5kUGFnZSIsInBhZ2UiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwidGFiSWQiLCJ2aWRlb1VSTCIsInNyYyIsImFtcG1UaW1lIiwieWVhciIsInRvVXBwZXJDYXNlIiwidmlkZW9GaWxlTmFtZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwiaHJlZiIsImRvd25sb2FkIiwiZmlsZU5hbWVCdXR0b24iLCJ0ZXh0Q29udGVudCIsInBhdXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNB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LENBQUMyQixnQkFBVCxDQUEwQixzQkFBMUIsQ0FBZDs7QUFDQSxXQUFLLElBQUk5TyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNk8sT0FBTyxDQUFDbE8sTUFBNUIsRUFBb0NYLENBQUMsRUFBckMsRUFBeUM7QUFDckMsWUFBSStPLE1BQU0sR0FBR0YsT0FBTyxDQUFDN08sQ0FBRCxDQUFwQjtBQUNBK08sY0FBTSxDQUFDQyxJQUFQLEdBQWNkLElBQUksQ0FBQ0ssUUFBbkI7QUFDQVEsY0FBTSxDQUFDRSxRQUFQLEdBQWtCTCxhQUFsQjtBQUNBRyxjQUFNLENBQUN4QixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ25DOUYsMkRBQXFCLENBQUMsVUFBRCxFQUFhLE9BQWIsQ0FBckI7QUFDSCxTQUZEO0FBR0g7O0FBQ0QsVUFBSXlILGNBQWMsR0FBRy9CLFFBQVEsQ0FBQ0UsYUFBVCxDQUF1Qix5Q0FBdkIsQ0FBckI7QUFDQTZCLG9CQUFjLENBQUNDLFdBQWYsR0FBNkJQLGFBQTdCO0FBQ0g7QUFDSixHQTFCRDtBQTJCSDs7QUFFRCxTQUFTYixXQUFULEdBQXVCO0FBQ25CQyxRQUFNLENBQUNvQixLQUFQLEdBRG1CLENBRW5CO0FBQ0E7QUFDSCxDIiwiZmlsZSI6InZpZGVvLXJlY29yZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIi8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiAxKSA9PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAxID09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBwcmltZS5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG9ubHkgZGl2aXNpYmxlIGJ5IDxjb2RlPjE8L2NvZGU+IGFuZCBpdHNlbGYuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgcHJpbWU7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc1ByaW1lKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNQcmltZSg0KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09IDEgfHwgdmFsdWUgPT0gMikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGlzRXZlbih2YWx1ZSkpIHJldHVybiBmYWxzZTtcblxuICB2YXIgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG4gIGZvciAodmFyIGkgPSAzOyBpIDw9IHM7IGkrKykgaWYgKHZhbHVlICUgaSA9PSAwKSByZXR1cm4gZmFsc2U7XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuIFJvdW5kcyBhIG51bWJlcidzIGRlY2ltYWwgdmFsdWUgdG8gYSBzcGVjaWZpYyBwbGFjZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB0byByb3VuZC5cbiBAcGFyYW0gcGxhY2U6IFRoZSBkZWNpbWFsIHBsYWNlIHRvIHJvdW5kLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgdmFsdWUgcm91bmRlZCB0byB0aGUgZGVmaW5lZCBwbGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAyKSk7IC8vIFRyYWNlcyAzLjE0XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDMpKTsgLy8gVHJhY2VzIDMuMTQyXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgcGxhY2UgPSAxKSB7XG4gIHZhciBwID0gTWF0aC5wb3coMTAsIHBsYWNlKTtcblxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHApIC8gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMSh2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDIodmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQzKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAzKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiBpbmRleCBpcyBpbmNsdWRlZCB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gbGVuZ3RoIG90aGVyd2lzZSB0aGUgaW5kZXggbG9vcHMgdG8gdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHJhbmdlIGFuZCBjb250aW51ZXMuXG5cbiBAcGFyYW0gaW5kZXg6IFNob3AgdG8gbG9vcCBpZiBuZWVkZWQuXG4gQHBhcmFtIGxlbmd0aDogVGhlIHRvdGFsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuIEByZXR1cm4gQSB2YWxpZCB6ZXJvLWJhc2VkIGluZGV4LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFyIGNvbG9yczpBcnJheSA9IG5ldyBBcnJheShcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiKTtcblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgyLCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgQmx1ZVxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCg0LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgR3JlZW5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoLTYsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBSZWRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29wSW5kZXgoaW5kZXgsIGxlbmd0aCkge1xuICBpZiAoaW5kZXggPCAwKSBpbmRleCA9IGxlbmd0aCArIChpbmRleCAlIGxlbmd0aCk7XG5cbiAgaWYgKGluZGV4ID49IGxlbmd0aCkgcmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuXG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgdmFsdWUgaXMgaW5jbHVkZWQgd2l0aGluIGEgcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQHVzYWdlTm90ZSBUaGUgcmFuZ2UgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDMsIDAsIDUpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiAhKHZhbHVlIDwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHx8IHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB2YWx1ZSBmYWxscyB3aXRoaW4gYSByYW5nZTsgaWYgbm90IGl0IGlzIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyBlaXRoZXIgdGhlIG51bWJlciBhcyBwYXNzZWQsIG9yIGl0cyB2YWx1ZSBvbmNlIHNuYXBwZWQgdG8gbmVhcmVzdCByYW5nZSB2YWx1ZS5cbiBAdXNhZ2VOb3RlIFRoZSBjb25zdHJhaW50IHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNvbnN0cmFpbigzLCAwLCA1KSk7IC8vIFRyYWNlcyAzXG4gY29uc29sZS5sb2coY29uc3RyYWluKDcsIDAsIDUpKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJhaW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKSwgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBldmVubHkgc3BhY2VkIG51bWVyaWNhbCBpbmNyZW1lbnRzIGJldHdlZW4gdHdvIG51bWJlcnMuXG5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBwYXJhbSBzdGVwczogVGhlIG51bWJlciBvZiBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyBhbiBBcnJheSBjb21wcmlzZWQgb2YgdGhlIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigwLCA1LCA0KSk7IC8vIFRyYWNlcyAxLDIsMyw0XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDEsIDMsIDMpKTsgLy8gVHJhY2VzIDEuNSwyLDIuNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBzQmV0d2VlbihiZWdpbiwgZW5kLCBzdGVwcykge1xuICBzdGVwcysrO1xuXG4gIHZhciBpID0gMDtcbiAgdmFyIHN0ZXBzQmV0d2VlbiA9IFtdO1xuICB2YXIgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG4gIHdoaWxlICgrK2kgPCBzdGVwcykgc3RlcHNCZXR3ZWVuLnB1c2goaSAqIGluY3JlbWVudCArIGJlZ2luKTtcblxuICByZXR1cm4gc3RlcHNCZXR3ZWVuO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgdmFsdWUgYmV0d2VlbiB0d28gc3BlY2lmaWVkIHZhbHVlcy5cblxuIEBwYXJhbSBhbW91bnQ6IFRoZSBsZXZlbCBvZiBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuIElmIDxjb2RlPjA8L2NvZGU+LCA8Y29kZT5iZWdpbjwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQ7IGlmIDxjb2RlPjE8L2NvZGU+LCA8Y29kZT5lbmQ8L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkLlxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpbnRlcnBvbGF0ZSgwLjUsIDAsIDEwKSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYW1vdW50LCBiZWdpbiwgZW5kKSB7XG4gIHJldHVybiBiZWdpbiArIChlbmQgLSBiZWdpbikgKiBhbW91bnQ7XG59XG5cbi8qKlxuIERldGVybWluZXMgYSBwZXJjZW50YWdlIG9mIGEgdmFsdWUgaW4gYSBnaXZlbiByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZC5cbiBAcGFyYW0gbWluaW11bTogVGhlIGxvd2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gbWF4aW11bTogVGhlIHVwcGVyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG5vcm1hbGl6ZSg4LCA0LCAyMCkuZGVjaW1hbFBlcmNlbnRhZ2UpOyAvLyBUcmFjZXMgMC4yNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgbWluaW11bSwgbWF4aW11bSkge1xuICByZXR1cm4gbmV3IFBlcmNlbnQoKHZhbHVlIC0gbWluaW11bSkgLyAobWF4aW11bSAtIG1pbmltdW0pKTtcbn1cblxuLyoqXG4gTWFwcyBhIHZhbHVlIGZyb20gb25lIGNvb3JkaW5hdGUgc3BhY2UgdG8gYW5vdGhlci5cblxuIEBwYXJhbSB2YWx1ZTogVmFsdWUgZnJvbSB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZSB0byBtYXAgdG8gdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4xOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MTogRW5kaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4yOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDI6IEVuZGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhtYXAoMC43NSwgMCwgMSwgMCwgMTAwKSk7IC8vIFRyYWNlcyA3NVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gbGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4Mik7XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4vLyBcdHJldHVybiBtaW4yICsgKG1heDIgLSBtaW4yKSAqICgodmFsdWUgLSBtaW4xKSAvIChtYXgxIC0gbWluMSkpO1xuLy8gfVxuXG4vKipcbiBMb3cgcGFzcyBmaWx0ZXIgYWxvZ3JpdGhtIGZvciBlYXNpbmcgYSB2YWx1ZSB0b3dhcmQgYSBkZXN0aW5hdGlvbiB2YWx1ZS4gV29ya3MgYmVzdCBmb3IgdHdlZW5pbmcgdmFsdWVzIHdoZW4gbm8gZGVmaW5pdGUgdGltZSBkdXJhdGlvbiBleGlzdHMgYW5kIHdoZW4gdGhlIGRlc3RpbmF0aW9uIHZhbHVlIGNoYW5nZXMuXG5cbiBJZiA8Y29kZT4oMC41IDwgbiA8IDEpPC9jb2RlPiwgdGhlbiB0aGUgcmVzdWx0aW5nIHZhbHVlcyB3aWxsIG92ZXJzaG9vdCAocGluZy1wb25nKSB1bnRpbCB0aGV5IHJlYWNoIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZS4gV2hlbiA8Y29kZT5uPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gMSwgYXMgaXRzIHZhbHVlIGluY3JlYXNlcywgdGhlIHRpbWUgaXQgdGFrZXMgdG8gcmVhY2ggdGhlIGRlc3RpbmF0aW9uIGFsc28gaW5jcmVhc2VzLiBBIHBsZWFzaW5nIHZhbHVlIGZvciA8Y29kZT5uPC9jb2RlPiBpcyA1LlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZS5cbiBAcGFyYW0gZGVzdDogVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuIEBwYXJhbSBuOiBUaGUgc2xvd2Rvd24gZmFjdG9yLlxuIEByZXR1cm4gVGhlIHdlaWdodGVkIGF2ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRlZEF2ZXJhZ2UodmFsdWUsIGRlc3QsIG4pIHtcbiAgcmV0dXJuIHZhbHVlICsgKGRlc3QgLSB2YWx1ZSkgLyBuO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIlwiPC9jb2RlPi5cbiBAcGFyYW0gbWluTGVuZ3RoOiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIG51bWJlcjsgZGVmYXVsdHMgdG8gPGNvZGU+MCA8L2NvZGU+LlxuIEBwYXJhbSBmaWxsQ2hhcjogVGhlIGxlYWRpbmcgY2hhcmFjdGVyIHVzZWQgdG8gbWFrZSB0aGUgbnVtYmVyIHRoZSBtaW5pbXVtIGxlbmd0aDsgZGVmYXVsdHMgdG8gPGNvZGU+XCIwXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdCgxMjM0NTY3LCBcIixcIiwgOCkpOyAvLyBUcmFjZXMgMDEsMjM0LDU2N1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwga0RlbGltLCBtaW5MZW5ndGgsIGZpbGxDaGFyKSB7XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gXCIsXCI7XG4gIH1cbiAgaWYgKGlzTmFOKG1pbkxlbmd0aCkpIHtcbiAgICBtaW5MZW5ndGggPSAwO1xuICB9XG4gIGlmICghZmlsbENoYXIpIHtcbiAgICBmaWxsQ2hhciA9IFwiMFwiO1xuICB9XG4gIHZhciByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG4gIHZhciBudW0gPSBNYXRoLmZsb29yKHZhbHVlKS50b1N0cmluZygpO1xuICB2YXIgbGVuID0gbnVtLmxlbmd0aDtcblxuICBpZiAobWluTGVuZ3RoICE9IDAgJiYgbWluTGVuZ3RoID4gbGVuKSB7XG4gICAgbWluTGVuZ3RoIC09IGxlbjtcblxuICAgIHZhciBhZGRDaGFyID0gZmlsbENoYXIgfHwgXCIwXCI7XG5cbiAgICB3aGlsZSAobWluTGVuZ3RoLS0pIG51bSA9IGFkZENoYXIgKyBudW07XG4gIH1cblxuICBpZiAoa0RlbGltICE9IG51bGwgJiYgbnVtLmxlbmd0aCA+IDMpIHtcbiAgICB2YXIgdG90YWxEZWxpbSA9IE1hdGguZmxvb3IobnVtLmxlbmd0aCAvIDMpO1xuICAgIHZhciB0b3RhbFJlbWFpbiA9IG51bS5sZW5ndGggJSAzO1xuICAgIHZhciBudW1TcGxpdCA9IG51bS5zcGxpdChcIlwiKTtcbiAgICB2YXIgaSA9IC0xO1xuXG4gICAgd2hpbGUgKCsraSA8IHRvdGFsRGVsaW0pIG51bVNwbGl0LnNwbGljZSh0b3RhbFJlbWFpbiArIDQgKiBpLCAwLCBrRGVsaW0pO1xuXG4gICAgaWYgKHRvdGFsUmVtYWluID09IDApIG51bVNwbGl0LnNoaWZ0KCk7XG5cbiAgICBudW0gPSBudW1TcGxpdC5qb2luKFwiXCIpO1xuICB9XG5cbiAgaWYgKHJlbWFpbmRlciAhPSAwKSBudW0gKz0gcmVtYWluZGVyLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuXG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuICBpZiAoZm9yY2VEZWNpbWFscyA9PSBudWxsKSB7XG4gICAgZm9yY2VEZWNpbWFscyA9IHRydWU7XG4gIH1cbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSBcIixcIjtcbiAgfVxuICB2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICB2YXIgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cbiAgaWYgKHJlbWFpbmRlciAhPSAwIHx8IGZvcmNlRGVjaW1hbHMpIGN1cnJlbmN5ICs9IHJlbWFpbmRlci50b0ZpeGVkKDIpLnN1YnN0cigxKTtcblxuICByZXR1cm4gY3VycmVuY3k7XG59XG5cbi8qKlxuIEZpbmRzIHRoZSBlbmdsaXNoIG9yZGluYWwgc3VmZml4IGZvciB0aGUgbnVtYmVyIGdpdmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZmluZCB0aGUgb3JkaW5hbCBzdWZmaXggb2YuXG4gQHJldHVybiBSZXR1cm5zIHRoZSBzdWZmaXggZm9yIHRoZSBudW1iZXIsIDIgY2hhcmFjdGVycy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKDMyICsgZ2V0T3JkaW5hbFN1ZmZpeCgzMikpOyAvLyBUcmFjZXMgMzJuZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodmFsdWUpIHtcbiAgaWYgKHZhbHVlID49IDEwICYmIHZhbHVlIDw9IDIwKSByZXR1cm4gXCJ0aFwiO1xuXG4gIGlmICh2YWx1ZSA9PSAwKSByZXR1cm4gXCJcIjtcblxuICBzd2l0Y2ggKHZhbHVlICUgMTApIHtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gXCJyZFwiO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBcIm5kXCI7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFwic3RcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwidGhcIjtcbiAgfVxufVxuXG4vKipcbiBBZGRzIGEgbGVhZGluZyB6ZXJvIGZvciBudW1iZXJzIGxlc3MgdGhhbiB0ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBhZGQgbGVhZGluZyB6ZXJvLlxuIEByZXR1cm4gTnVtYmVyIGFzIGEgU3RyaW5nOyBpZiB0aGUgbnVtYmVyIHdhcyBsZXNzIHRoYW4gdGVuIHRoZSBudW1iZXIgd2lsbCBoYXZlIGEgbGVhZGluZyB6ZXJvLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oNykpOyAvLyBUcmFjZXMgMDdcbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybygxMSkpOyAvLyBUcmFjZXMgMTFcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVybyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAxMCA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpO1xufVxuXG4vKipcbiBTcGVsbHMgdGhlIHByb3ZpZGVkIG51bWJlci5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIHNwZWxsLiBOZWVkcyB0byBiZSBsZXNzIHRoYW4gOTk5OTk5OTk5LlxuIEByZXR1cm4gVGhlIG51bWJlciBzcGVsbGVkIG91dCBhcyBhIFN0cmluZy5cbiBAdGhyb3dzIDxjb2RlPkVycm9yPC9jb2RlPiBpZiA8Y29kZT52YWx1ZTwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDk5OTk5OTk5OS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHNwZWxsKDApKTsgLy8gVHJhY2VzIFplcm9cbiBjb25zb2xlLmxvZyhzcGVsbCgyMykpOyAvLyBUcmFjZXMgVHdlbnR5LVRocmVlXG4gY29uc29sZS5sb2coc3BlbGwoMjAwNTY3OCkpOyAvLyBUcmFjZXMgVHdvIE1pbGxpb24sIEZpdmUgVGhvdXNhbmQsIFNpeCBIdW5kcmVkIFNldmVudHktRWlnaHRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGVsbCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiA5OTk5OTk5OTkpIHtcbiAgICB0aHJvdyBcIlZhbHVlIHRvbyBsYXJnZSBmb3IgdGhpcyBtZXRob2QuXCI7XG4gIH1cblxuICB2YXIgb25lc1NwZWxsaW5ncyA9IFtcbiAgICBcIlwiLFxuICAgIFwiT25lXCIsXG4gICAgXCJUd29cIixcbiAgICBcIlRocmVlXCIsXG4gICAgXCJGb3VyXCIsXG4gICAgXCJGaXZlXCIsXG4gICAgXCJTaXhcIixcbiAgICBcIlNldmVuXCIsXG4gICAgXCJFaWdodFwiLFxuICAgIFwiTmluZVwiLFxuICAgIFwiVGVuXCIsXG4gICAgXCJFbGV2ZW5cIixcbiAgICBcIlR3ZWx2ZVwiLFxuICAgIFwiVGhpcnRlZW5cIixcbiAgICBcIkZvdXJ0ZWVuXCIsXG4gICAgXCJGaWZ0ZWVuXCIsXG4gICAgXCJTaXh0ZWVuXCIsXG4gICAgXCJTZXZlbnRlZW5cIixcbiAgICBcIkVpZ2h0ZWVuXCIsXG4gICAgXCJOaW5ldGVlblwiLFxuICBdO1xuICB2YXIgdGVuc1NwZWxsaW5ncyA9IFtcIlwiLCBcIlwiLCBcIlR3ZW50eVwiLCBcIlRoaXJ0eVwiLCBcIkZvcnR5XCIsIFwiRmlmdHlcIiwgXCJTaXh0eVwiLCBcIlNldmVudHlcIiwgXCJFaWdodHlcIiwgXCJOaW5ldHlcIl07XG4gIHZhciBzcGVsbGluZyA9IFwiXCI7XG5cbiAgdmFyIG1pbGxpb25zID0gdmFsdWUgLyAxMDAwMDAwO1xuICB2YWx1ZSAlPSAxMDAwMDAwO1xuXG4gIHZhciB0aG91c2FuZHMgPSB2YWx1ZSAvIDEwMDA7XG4gIHZhbHVlICU9IDEwMDA7XG5cbiAgdmFyIGh1bmRyZWRzID0gdmFsdWUgLyAxMDA7XG4gIHZhbHVlICU9IDEwMDtcblxuICB2YXIgdGVucyA9IHZhbHVlIC8gMTA7XG4gIHZhbHVlICU9IDEwO1xuXG4gIHZhciBvbmVzID0gdmFsdWUgJSAxMDtcblxuICBpZiAobWlsbGlvbnMgIT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbChtaWxsaW9ucykgKyBcIiBNaWxsaW9uXCI7XG4gIH1cblxuICBpZiAodGhvdXNhbmRzICE9IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwodGhvdXNhbmRzKSArIFwiIFRob3VzYW5kXCI7XG4gIH1cblxuICBpZiAoaHVuZHJlZHMgIT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbChodW5kcmVkcykgKyBcIiBIdW5kcmVkXCI7XG4gIH1cblxuICBpZiAodGVucyAhPSAwIHx8IG9uZXMgIT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PSAwID8gXCJcIiA6IFwiIFwiO1xuXG4gICAgaWYgKHRlbnMgPCAyKSBzcGVsbGluZyArPSBvbmVzU3BlbGxpbmdzW3RlbnMgKiAxMCArIG9uZXNdO1xuICAgIGVsc2Uge1xuICAgICAgc3BlbGxpbmcgKz0gdGVuc1NwZWxsaW5nc1t0ZW5zXTtcblxuICAgICAgaWYgKG9uZXMgIT0gMCkgc3BlbGxpbmcgKz0gXCItXCIgKyBvbmVzU3BlbGxpbmdzW29uZXNdO1xuICAgIH1cbiAgfVxuXG4gIGlmIChzcGVsbGluZy5sZW5ndGggPT0gMCkgcmV0dXJuIFwiWmVyb1wiO1xuXG4gIHJldHVybiBzcGVsbGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgbGV0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFRvSGV4KHJnYi5yKSArIGNvbXBvbmVudFRvSGV4KHJnYi5nKSArIGNvbXBvbmVudFRvSGV4KHJnYi5iKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICBsZXQgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHRcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gXCJyOlwiICsgdGhpcy5yICsgXCIsZzpcIiArIHRoaXMuZyArIFwiLGI6XCIgKyB0aGlzLmI7XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcykge1xuICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZCkge1xuICByZXR1cm4gKHJhZCAqIDE4MCkgLyBNYXRoLlBJO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3Roc3RlcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgbGV0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpKTtcbiAgcmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgcmV0dXJuIGEgKyB0ICogKGIgLSBhKTtcbiAgLy8gcmV0dXJuIGEoMS10KSArIGJ0XG4gIC8vcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXgoYSwgYiwgdCkge1xuICByZXR1cm4gbGVycChhLCBiLCB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm0odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL2EgbW9kdWxvIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBuZWdhdGl2ZXMgbnVtYmVycyAnY29ycmVjdGx5J1xuZXhwb3J0IGZ1bmN0aW9uIG1vZFdyYXAobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vcmFuZG9tIHdpdGggc2VlZCwgcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20xRChzZWVkKSB7XG4gIHJldHVybiBtb2RXcmFwKE1hdGguc2luKHNlZWQpICogNDM3NTguNTQ1MywgMSk7XG59XG5cbi8vcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiBub2lzZTFEKHgpIHtcbiAgbGV0IGkgPSBNYXRoLmZsb29yKHgpO1xuICBsZXQgZiA9IG1vZFdyYXAoeCwgMSk7XG4gIGxldCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBsZXJwKHUsIHJhbmRvbTFEKGkpLCByYW5kb20xRChpICsgMS4wKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQ2xhbXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGNsYW1wKGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpLCBtaW4yLCBtYXgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmVXYXZlKGFuZ2xlID0gMCwgZnJlcXVlbmN5ID0gTWF0aC5QSSwgdGltZSA9IDAsIHNwZWVkID0gMSwgYW1wbGl0dWRlID0gMSkge1xuICByZXR1cm4gTWF0aC5zaW4oYW5nbGUgKiBmcmVxdWVuY3kgKyB0aW1lICogc3BlZWQpICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBUaW1lKHRpbWUsIHN0YXJ0VGltZSwgZHVyYXRpb24pIHtcbiAgcmV0dXJuIGNsYW1wKHRpbWUgLSBzdGFydFRpbWUsIDAuMCwgZHVyYXRpb24pIC8gZHVyYXRpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBlYXNlIHZhbHVlXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YWx1ZSArPSBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uKTtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uID0gMC4xKSB7XG4gIHJldHVybiAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcGFyYW0gc3BlZWQ6IFRoZSBjdXJyZW50IHNwZWVkXG4gQHBhcmFtIGVsYXN0aWNpdHk6IFRoZSBlbGFzdGljaXR5IGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgbmV3IHNwZWVkIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gc3BlZWQgPSBzcHJpbmcodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24sIHNwZWVkLCBlbGFzdGljaXR5KTtcbiB2YWx1ZSArPSBzcGVlZDtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJpbmcodmFsdWUsIHRhcmdldCA9IDAsIGZyaWN0aW9uID0gMC4xLCBzcGVlZCA9IDAsIGVsYXN0aWNpdHkgPSAwKSB7XG4gIHJldHVybiBzcGVlZCAqIGVsYXN0aWNpdHkgKyAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrRXZlbnRNZXNzYWdlKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsID0gXCJcIikge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja0V2ZW50XCIsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrUGFnZU1lc3NhZ2UocGF0aCkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIiwgcGF0aCB9KTtcbn0iLCJpbXBvcnQge2FkZExlYWRpbmdaZXJvfSBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBTVBNKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGxldCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRsZXQgc2Vjb25kcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbXBtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUsIHNwYWNlQmV0d2VlbiA9IFwiXCIpIHtcblx0bGV0IGRhdGVEYXRhID0gdGltZUFNUE0oZGF0ZSk7XG5cdGxldCBzdHJUaW1lID0gZGF0ZURhdGEuaG91cnMgKyAnOicgKyBkYXRlRGF0YS5taW51dGVzICsgc3BhY2VCZXR3ZWVuICsgYW1wbTtcblx0cmV0dXJuIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFVUQ1N0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0RhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDSG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG91cnMoZGF0ZSwgaG91cnMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgbGV0IG1vbnRocyA9IHtcblx0ZW46W1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdGZyOltcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIiwgXCJKdWlsbGV0XCIsIFwiQW/Du3RcIiwgXCJTZXB0ZW1icmVcIiwgXCJPY3RvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEw6ljZW1icmVcIl1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlLCBsYW5ndWFnZSkge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0bGFuZ3VhZ2UgPSBcImVuXCI7XG5cdH1cblx0bGV0IG1vbnRoO1xuXHRzd2l0Y2gobGFuZ3VhZ2UpIHtcblx0XHRjYXNlIFwiZW5cIjpcblx0XHRcdG1vbnRoID0gbW9udGhzW2xhbmd1YWdlXVtkYXRlLmdldE1vbnRoKCldO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIG1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGJpcnRoRGF0ZSkge1xuXHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0aWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0YWdlLS07XG5cdH1cblx0cmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWF0QXNVVEMoZGF0ZSkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG5cdHJlc3VsdC5zZXRNaW51dGVzKHJlc3VsdC5nZXRNaW51dGVzKCkgLSByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1pbnV0ZSA9IDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckhvdXIgPSA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckhvdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1vbnRoID0gMzY1IC8gMTIgICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyWWVhciA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJZZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IHRleHQgPSBcIlwiO1xuXHRsZXQgeWVhcnNCZXR3ZWVuID0geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdGlmICh5ZWFyc0JldHdlZW4gPj0gMSkge1xuXHRcdGxldCB5ZWFyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoeWVhcnNCZXR3ZWVuKTtcblx0XHRpZiAoeWVhcnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXJzIGFnb1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXIgYWdvXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGxldCBtb250aHNCZXR3ZWVuID0gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdGlmIChtb250aHNCZXR3ZWVuID49IDEpIHtcblx0XHRcdGxldCBtb250aHNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1vbnRoc0JldHdlZW4pO1xuXHRcdFx0aWYgKG1vbnRoc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGhzIGFnb1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGggYWdvXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB3ZWVrc0JldHdlZW4gPSB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdGlmICh3ZWVrc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRsZXQgd2Vla3NCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHdlZWtzQmV0d2Vlbik7XG5cdFx0XHRcdGlmICh3ZWVrc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWtzIGFnb1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2VlayBhZ29cIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuID0gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRsZXQgZGF5c0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoZGF5c0JldHdlZW4pO1xuXHRcdFx0XHRcdGlmIChkYXlzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheXMgYWdvXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXkgYWdvXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW4gPSBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoaG91cnNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VycyBhZ29cIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91ciBhZ29cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuID0gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1pbnV0ZXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZSBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IFwiSnVzdCBub3dcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59IiwiaW1wb3J0IHsgdGltZUFNUE0gfSBmcm9tIFwiLi90c3VuYW1pL3V0aWxzL2RhdGVcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvIH0gZnJvbSBcIi4vdHN1bmFtaS91dGlscy9udW1iZXJcIjtcbmltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuL21vZGVsL0dBQnJpZGdlXCI7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJqc29uXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgbGV0IGNvbG9yVGhlbWUgPSBcIkRhcmtcIjtcbiAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb2xvclRoZW1lID0gZGF0YS5zZXR0aW5ncy5jb2xvclRoZW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGlzQ29sb3JUaGVtZUxpZ2h0O1xuICAgIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgICAgICBjYXNlIFwiRGFya1wiOlxuICAgICAgICBjYXNlIFwiTGlnaHRcIjpcbiAgICAgICAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gKGNvbG9yVGhlbWUgPT0gXCJMaWdodFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGRhcmtNb2RlTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gICAgICAgICAgICBsZXQgaXNEYXJrTW9kZSA9IGRhcmtNb2RlTWF0Y2hNZWRpYS5tYXRjaGVzO1xuICAgICAgICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAhaXNEYXJrTW9kZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIGlzQ29sb3JUaGVtZUxpZ2h0KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKT0+IHtcbiAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eHQpIHtcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVDb2xvclRoZW1lXCI6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIG1zZy5pc0NvbG9yVGhlbWVMaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVVcGRhdGVWaWRlb1wiOlxuICAgICAgICAgICAgdXBkYXRlVmlkZW8oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvXCI6XG4gICAgICAgICAgICB1bmxvYWRWaWRlbygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvXCI6XG4gICAgICAgICAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxubGV0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1wbGF5ZXInKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoXCJtdXRlZFwiLCBcInRydWVcIik7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgXCJ0cnVlXCIpO1xucGxheWVyLnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJzEnKTtcbnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwYXRjaFZpZGVvSGVpZ3RoKCkge1xuICAgIGNocm9tZS5ydW50aW1lLmdldEJhY2tncm91bmRQYWdlKChwYWdlKSA9PiB7XG4gICAgICAgIGxldCBtc2cgPSB7IHR4dDogXCJzY3JvbGxDYXB0dXJlVmlkZW9IZWlnaHRcIiwgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCB9O1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShwYWdlLnRhYklkLCBtc2cpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWRlbygpIHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRCYWNrZ3JvdW5kUGFnZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAocGFnZS52aWRlb1VSTCkge1xuICAgICAgICAgICAgcGxheWVyLnNyYyA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgYW1wbVRpbWUgPSB0aW1lQU1QTShkYXRlKTtcbiAgICAgICAgICAgIC8vIFNjcmVlbiBTaG90IDIwMjAtMDMtMjAgYXQgNC4zNS4xNCBQTVxuICAgICAgICAgICAgbGV0IGRhdGVEYXRhID0ge1xuICAgICAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2aWRlb0ZpbGVOYW1lID0gYFNjcm9sbCBDYXB0dXJlICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfS53ZWJtYDtcblxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICAgICAgICAgICAgICBidXR0b24uaHJlZiA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwiZG93bmxvYWRcIiwgXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmaWxlTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtdmlkZW8tZmlsZW5hbWUgYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmaWxlTmFtZUJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZGVvRmlsZU5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gICAgcGxheWVyLnBhdXNlKCk7XG4gICAgLy8gcGxheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgLy8gcGxheWVyLmxvYWQoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9