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
/* 0 */,
/* 1 */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return roundDecimalToPlace; });
/* unused harmony export roundDecimalTo1 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return roundDecimalTo2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return roundDecimalTo3; });
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

/***/ }),
/* 2 */
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
var number = __webpack_require__(1);

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
// EXTERNAL MODULE: ./js/view/GABridge.js
var GABridge = __webpack_require__(2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL3V0aWxzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlkZW8tcmVjb3JkaW5nLmpzIl0sIm5hbWVzIjpbImdldFJhbmRvbUFyYml0cmFyeSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJnZXRSYW5kb21JbnQiLCJmbG9vciIsImdldFJhbmRvbUludEluY2x1c2l2ZSIsInJhbmRvbVdpdGhpblJhbmdlIiwicmFuZG9tSW50ZWdlcldpdGhpblJhbmdlIiwiaXNFdmVuIiwidmFsdWUiLCJpc09kZCIsImlzSW50ZWdlciIsImlzUHJpbWUiLCJzIiwic3FydCIsImkiLCJyb3VuZERlY2ltYWxUb1BsYWNlIiwicGxhY2UiLCJwIiwicG93Iiwicm91bmQiLCJyb3VuZERlY2ltYWxUbzEiLCJyb3VuZERlY2ltYWxUbzIiLCJyb3VuZERlY2ltYWxUbzMiLCJsb29wSW5kZXgiLCJpbmRleCIsImxlbmd0aCIsImlzQmV0d2VlbiIsImZpcnN0VmFsdWUiLCJzZWNvbmRWYWx1ZSIsImNvbnN0cmFpbiIsImNyZWF0ZVN0ZXBzQmV0d2VlbiIsImJlZ2luIiwiZW5kIiwic3RlcHMiLCJzdGVwc0JldHdlZW4iLCJpbmNyZW1lbnQiLCJwdXNoIiwiaW50ZXJwb2xhdGUiLCJhbW91bnQiLCJub3JtYWxpemUiLCJtaW5pbXVtIiwibWF4aW11bSIsIlBlcmNlbnQiLCJtYXAiLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiZ2V0V2VpZ2h0ZWRBdmVyYWdlIiwiZGVzdCIsIm4iLCJmb3JtYXQiLCJrRGVsaW0iLCJtaW5MZW5ndGgiLCJmaWxsQ2hhciIsImlzTmFOIiwicmVtYWluZGVyIiwibnVtIiwidG9TdHJpbmciLCJsZW4iLCJhZGRDaGFyIiwidG90YWxEZWxpbSIsInRvdGFsUmVtYWluIiwibnVtU3BsaXQiLCJzcGxpdCIsInNwbGljZSIsInNoaWZ0Iiwiam9pbiIsInN1YnN0ciIsImZvcm1hdEN1cnJlbmN5IiwiZm9yY2VEZWNpbWFscyIsImN1cnJlbmN5IiwidG9GaXhlZCIsImdldE9yZGluYWxTdWZmaXgiLCJhZGRMZWFkaW5nWmVybyIsInNwZWxsIiwib25lc1NwZWxsaW5ncyIsInRlbnNTcGVsbGluZ3MiLCJzcGVsbGluZyIsIm1pbGxpb25zIiwidGhvdXNhbmRzIiwiaHVuZHJlZHMiLCJ0ZW5zIiwib25lcyIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsInJnYlRvSGV4IiwicmdiIiwiciIsImciLCJiIiwiaGV4VG9SZ2IiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHh0Iiwic2VuZFRyYWNrUGFnZU1lc3NhZ2UiLCJwYXRoIiwidGltZUFNUE0iLCJkYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsImFtcG0iLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwiZm9ybWF0QU1QTSIsInNwYWNlQmV0d2VlbiIsImRhdGVEYXRhIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwibW9udGgiLCJnZXRBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsIkRhdGUiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInRleHQiLCJ5ZWFyc0JldHdlZW5GbG9vciIsIm1vbnRoc0JldHdlZW5GbG9vciIsIndlZWtzQmV0d2VlbkZsb29yIiwiZGF5c0JldHdlZW5GbG9vciIsImhvdXJzQmV0d2VlbkZsb29yIiwibWludXRlc0JldHdlZW5GbG9vciIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImNvbG9yVGhlbWUiLCJqc29uIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInNldHRpbmdzIiwiY29sb3JUaGVtZXMiLCJpc0NvbG9yVGhlbWVMaWdodCIsImRhcmtNb2RlTWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJpc0RhcmtNb2RlIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hWaWRlb0hlaWd0aCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwidXBkYXRlVmlkZW8iLCJ1bmxvYWRWaWRlbyIsInBsYXllciIsImdldEJhY2tncm91bmRQYWdlIiwicGFnZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJ0YWJJZCIsInZpZGVvVVJMIiwic3JjIiwiYW1wbVRpbWUiLCJ5ZWFyIiwidG9VcHBlckNhc2UiLCJ2aWRlb0ZpbGVOYW1lIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJocmVmIiwiZG93bmxvYWQiLCJmaWxlTmFtZUJ1dHRvbiIsInRleHRDb250ZW50IiwicGF1c2UiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxTQUFTQSxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQzVDLFNBQU9DLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkYsR0FBRyxHQUFHRCxH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QUNsRyxPQUF2RyxjQUFrSGtHLFFBQVEsQ0FBQ2hHLE9BQTNILGNBQXNJZ0csUUFBUSxDQUFDbkcsSUFBL0ksVUFBakI7QUFFQSxVQUFJdUcsT0FBTyxHQUFHMUIsUUFBUSxDQUFDMkIsZ0JBQVQsQ0FBMEIsc0JBQTFCLENBQWQ7O0FBQ0EsV0FBSyxJQUFJeE0sQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR3VNLE9BQU8sQ0FBQzVMLE1BQTVCLEVBQW9DWCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3JDLFlBQUl5TSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ3ZNLENBQUQsQ0FBcEI7QUFDQXlNLGNBQU0sQ0FBQ0MsSUFBUCxHQUFjZCxJQUFJLENBQUNLLFFBQW5CO0FBQ0FRLGNBQU0sQ0FBQ0UsUUFBUCxHQUFrQkwsYUFBbEI7QUFDQUcsY0FBTSxDQUFDeEIsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNuQy9GLDJEQUFxQixDQUFDLFVBQUQsRUFBYSxPQUFiLENBQXJCO0FBQ0gsU0FGRDtBQUdIOztBQUNELFVBQUkwSCxjQUFjLEdBQUcvQixRQUFRLENBQUNFLGFBQVQsQ0FBdUIseUNBQXZCLENBQXJCO0FBQ0E2QixvQkFBYyxDQUFDQyxXQUFmLEdBQTZCUCxhQUE3QjtBQUNIO0FBQ0osR0ExQkQ7QUEyQkg7O0FBRUQsU0FBU2IsV0FBVCxHQUF1QjtBQUNuQkMsUUFBTSxDQUFDb0IsS0FBUCxHQURtQixDQUVuQjtBQUNBO0FBQ0gsQyIsImZpbGUiOiJ2aWRlby1yZWNvcmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJcbi8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcblx0cmV0dXJuIG1pbiArIChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcblx0cmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgbWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBldmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW47IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0V2ZW4oNykpOyAvLyBUcmFjZXMgZmFsc2VcbiBjb25zb2xlLmxvZyhpc0V2ZW4oMTIpKTsgLy8gVHJhY2VzIHRydWVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW4odmFsdWUpIHtcblx0cmV0dXJuICh2YWx1ZSAmIDEpID09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBvZGQuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBub3QgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIG9kZDsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzT2RkKDcpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc09kZCgxMikpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09kZCh2YWx1ZSkge1xuXHRyZXR1cm4gIWlzRXZlbih2YWx1ZSk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgY29udGFpbnMgbm8gZGVjaW1hbCB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlcjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxLjIzNDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG5cdHJldHVybiAodmFsdWUgJSAxKSA9PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgcHJpbWUuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBvbmx5IGRpdmlzaWJsZSBieSA8Y29kZT4xPC9jb2RlPiBhbmQgaXRzZWxmLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIHByaW1lOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNQcmltZSgxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzUHJpbWUoNCkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1lKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA9PSAxIHx8IHZhbHVlID09IDIpXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0aWYgKGlzRXZlbih2YWx1ZSkpXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdHZhciBzID0gTWF0aC5zcXJ0KHZhbHVlKTtcblx0Zm9yICh2YXIgaSA9IDM7IGkgPD0gczsgaSsrKVxuXHRpZiAodmFsdWUgJSBpID09IDApXG5cdFx0cmV0dXJuIGZhbHNlO1xuXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiBSb3VuZHMgYSBudW1iZXIncyBkZWNpbWFsIHZhbHVlIHRvIGEgc3BlY2lmaWMgcGxhY2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgdG8gcm91bmQuXG4gQHBhcmFtIHBsYWNlOiBUaGUgZGVjaW1hbCBwbGFjZSB0byByb3VuZC5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHZhbHVlIHJvdW5kZWQgdG8gdGhlIGRlZmluZWQgcGxhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMikpOyAvLyBUcmFjZXMgMy4xNFxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAzKSk7IC8vIFRyYWNlcyAzLjE0MlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIHBsYWNlID0gMSkge1xuXHR2YXIgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG5cblx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwKSAvIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUbzEodmFsdWUpIHtcblx0cmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG8yKHZhbHVlKSB7XG5cdHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kRGVjaW1hbFRvMyh2YWx1ZSkge1xuXHRyZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMyk7XG59XG5cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiBpbmRleCBpcyBpbmNsdWRlZCB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gbGVuZ3RoIG90aGVyd2lzZSB0aGUgaW5kZXggbG9vcHMgdG8gdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHJhbmdlIGFuZCBjb250aW51ZXMuXG5cbiBAcGFyYW0gaW5kZXg6IFNob3AgdG8gbG9vcCBpZiBuZWVkZWQuXG4gQHBhcmFtIGxlbmd0aDogVGhlIHRvdGFsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuIEByZXR1cm4gQSB2YWxpZCB6ZXJvLWJhc2VkIGluZGV4LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFyIGNvbG9yczpBcnJheSA9IG5ldyBBcnJheShcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiKTtcblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgyLCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgQmx1ZVxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCg0LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgR3JlZW5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoLTYsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBSZWRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29wSW5kZXgoaW5kZXgsIGxlbmd0aCkge1xuXHRpZiAoaW5kZXggPCAwKVxuXHRcdGluZGV4ID0gbGVuZ3RoICsgaW5kZXggJSBsZW5ndGg7XG5cblx0aWYgKGluZGV4ID49IGxlbmd0aClcblx0XHRyZXR1cm4gaW5kZXggJSBsZW5ndGg7XG5cblx0cmV0dXJuIGluZGV4O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSB2YWx1ZSBpcyBpbmNsdWRlZCB3aXRoaW4gYSByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgZmFsbHMgd2l0aGluIHRoZSByYW5nZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAdXNhZ2VOb3RlIFRoZSByYW5nZSB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzQmV0d2Vlbig3LCAwLCA1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2Vlbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcblx0cmV0dXJuICEodmFsdWUgPCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkgfHwgdmFsdWUgPiBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHZhbHVlIGZhbGxzIHdpdGhpbiBhIHJhbmdlOyBpZiBub3QgaXQgaXMgc25hcHBlZCB0byB0aGUgbmVhcmVzdCByYW5nZSB2YWx1ZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIGVpdGhlciB0aGUgbnVtYmVyIGFzIHBhc3NlZCwgb3IgaXRzIHZhbHVlIG9uY2Ugc25hcHBlZCB0byBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuIEB1c2FnZU5vdGUgVGhlIGNvbnN0cmFpbnQgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY29uc3RyYWluKDMsIDAsIDUpKTsgLy8gVHJhY2VzIDNcbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cmFpbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcblx0cmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpLCBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpO1xufVxuXG4vKipcbiBDcmVhdGVzIGV2ZW5seSBzcGFjZWQgbnVtZXJpY2FsIGluY3JlbWVudHMgYmV0d2VlbiB0d28gbnVtYmVycy5cblxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQHBhcmFtIHN0ZXBzOiBUaGUgbnVtYmVyIG9mIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIGFuIEFycmF5IGNvbXByaXNlZCBvZiB0aGUgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDAsIDUsIDQpKTsgLy8gVHJhY2VzIDEsMiwzLDRcbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMSwgMywgMykpOyAvLyBUcmFjZXMgMS41LDIsMi41XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RlcHNCZXR3ZWVuKGJlZ2luLCBlbmQsIHN0ZXBzKSB7XG5cdHN0ZXBzKys7XG5cblx0dmFyIGkgPSAwO1xuXHR2YXIgc3RlcHNCZXR3ZWVuID0gW107XG5cdHZhciBpbmNyZW1lbnQgPSAoZW5kIC0gYmVnaW4pIC8gc3RlcHM7XG5cblx0d2hpbGUgKCsraSA8IHN0ZXBzKVxuXHRcdHN0ZXBzQmV0d2Vlbi5wdXNoKChpICogaW5jcmVtZW50KSArIGJlZ2luKTtcblxuXHRyZXR1cm4gc3RlcHNCZXR3ZWVuO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgdmFsdWUgYmV0d2VlbiB0d28gc3BlY2lmaWVkIHZhbHVlcy5cblxuIEBwYXJhbSBhbW91bnQ6IFRoZSBsZXZlbCBvZiBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuIElmIDxjb2RlPjA8L2NvZGU+LCA8Y29kZT5iZWdpbjwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQ7IGlmIDxjb2RlPjE8L2NvZGU+LCA8Y29kZT5lbmQ8L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkLlxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpbnRlcnBvbGF0ZSgwLjUsIDAsIDEwKSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYW1vdW50LCBiZWdpbiwgZW5kKSB7XG5cdHJldHVybiBiZWdpbiArIChlbmQgLSBiZWdpbikgKiBhbW91bnQ7XG59XG5cbi8qKlxuIERldGVybWluZXMgYSBwZXJjZW50YWdlIG9mIGEgdmFsdWUgaW4gYSBnaXZlbiByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZC5cbiBAcGFyYW0gbWluaW11bTogVGhlIGxvd2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gbWF4aW11bTogVGhlIHVwcGVyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG5vcm1hbGl6ZSg4LCA0LCAyMCkuZGVjaW1hbFBlcmNlbnRhZ2UpOyAvLyBUcmFjZXMgMC4yNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgbWluaW11bSwgbWF4aW11bSkge1xuXHRyZXR1cm4gbmV3IFBlcmNlbnQoKHZhbHVlIC0gbWluaW11bSkgLyAobWF4aW11bSAtIG1pbmltdW0pKTtcbn1cblxuLyoqXG4gTWFwcyBhIHZhbHVlIGZyb20gb25lIGNvb3JkaW5hdGUgc3BhY2UgdG8gYW5vdGhlci5cblxuIEBwYXJhbSB2YWx1ZTogVmFsdWUgZnJvbSB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZSB0byBtYXAgdG8gdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4xOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MTogRW5kaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4yOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDI6IEVuZGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhtYXAoMC43NSwgMCwgMSwgMCwgMTAwKSk7IC8vIFRyYWNlcyA3NVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuXHRyZXR1cm4gbWluMiArIChtYXgyIC0gbWluMikgKiAoKHZhbHVlIC0gbWluMSkgLyAobWF4MSAtIG1pbjEpKTtcbn1cblxuLyoqXG4gTG93IHBhc3MgZmlsdGVyIGFsb2dyaXRobSBmb3IgZWFzaW5nIGEgdmFsdWUgdG93YXJkIGEgZGVzdGluYXRpb24gdmFsdWUuIFdvcmtzIGJlc3QgZm9yIHR3ZWVuaW5nIHZhbHVlcyB3aGVuIG5vIGRlZmluaXRlIHRpbWUgZHVyYXRpb24gZXhpc3RzIGFuZCB3aGVuIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZSBjaGFuZ2VzLlxuXG4gSWYgPGNvZGU+KDAuNSA8IG4gPCAxKTwvY29kZT4sIHRoZW4gdGhlIHJlc3VsdGluZyB2YWx1ZXMgd2lsbCBvdmVyc2hvb3QgKHBpbmctcG9uZykgdW50aWwgdGhleSByZWFjaCB0aGUgZGVzdGluYXRpb24gdmFsdWUuIFdoZW4gPGNvZGU+bjwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDEsIGFzIGl0cyB2YWx1ZSBpbmNyZWFzZXMsIHRoZSB0aW1lIGl0IHRha2VzIHRvIHJlYWNoIHRoZSBkZXN0aW5hdGlvbiBhbHNvIGluY3JlYXNlcy4gQSBwbGVhc2luZyB2YWx1ZSBmb3IgPGNvZGU+bjwvY29kZT4gaXMgNS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWUuXG4gQHBhcmFtIGRlc3Q6IFRoZSBkZXN0aW5hdGlvbiB2YWx1ZS5cbiBAcGFyYW0gbjogVGhlIHNsb3dkb3duIGZhY3Rvci5cbiBAcmV0dXJuIFRoZSB3ZWlnaHRlZCBhdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0ZWRBdmVyYWdlKHZhbHVlLCBkZXN0LCBuKSB7XG5cdHJldHVybiB2YWx1ZSArIChkZXN0IC0gdmFsdWUpIC8gbjtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCJcIjwvY29kZT4uXG4gQHBhcmFtIG1pbkxlbmd0aDogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBudW1iZXI7IGRlZmF1bHRzIHRvIDxjb2RlPjAgPC9jb2RlPi5cbiBAcGFyYW0gZmlsbENoYXI6IFRoZSBsZWFkaW5nIGNoYXJhY3RlciB1c2VkIHRvIG1ha2UgdGhlIG51bWJlciB0aGUgbWluaW11bSBsZW5ndGg7IGRlZmF1bHRzIHRvIDxjb2RlPlwiMFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXQoMTIzNDU2NywgXCIsXCIsIDgpKTsgLy8gVHJhY2VzIDAxLDIzNCw1NjdcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIGtEZWxpbSwgbWluTGVuZ3RoLCBmaWxsQ2hhcikge1xuXHRpZiAoIWtEZWxpbSkge1xuXHRcdGtEZWxpbSA9IFwiLFwiO1xuXHR9XG5cdGlmIChpc05hTihtaW5MZW5ndGgpKSB7XG5cdFx0bWluTGVuZ3RoID0gMDtcblx0fVxuXHRpZiAoIWZpbGxDaGFyKSB7XG5cdFx0ZmlsbENoYXIgPSBcIjBcIjtcblx0fVxuXHR2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuXHR2YXIgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcblx0dmFyIGxlbiA9IG51bS5sZW5ndGg7XG5cblx0aWYgKG1pbkxlbmd0aCAhPSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuXHRcdG1pbkxlbmd0aCAtPSBsZW47XG5cblx0XHR2YXIgYWRkQ2hhciA9IGZpbGxDaGFyIHx8ICcwJztcblxuXHRcdHdoaWxlIChtaW5MZW5ndGgtLSlcblx0XHRcdG51bSA9IGFkZENoYXIgKyBudW07XG5cdH1cblxuXHRpZiAoa0RlbGltICE9IG51bGwgJiYgbnVtLmxlbmd0aCA+IDMpIHtcblx0XHR2YXIgdG90YWxEZWxpbSAgPSBNYXRoLmZsb29yKG51bS5sZW5ndGggLyAzKTtcblx0XHR2YXIgdG90YWxSZW1haW4gPSBudW0ubGVuZ3RoICUgMztcblx0XHR2YXIgbnVtU3BsaXQgICA9IG51bS5zcGxpdCgnJyk7XG5cdFx0dmFyIGkgPSAtMTtcblxuXHRcdHdoaWxlICgrK2kgPCB0b3RhbERlbGltKVxuXHRcdFx0bnVtU3BsaXQuc3BsaWNlKHRvdGFsUmVtYWluICsgKDQgKiBpKSwgMCwga0RlbGltKTtcblxuXHRcdGlmICh0b3RhbFJlbWFpbiA9PSAwKVxuXHRcdFx0bnVtU3BsaXQuc2hpZnQoKTtcblxuXHRcdG51bSA9IG51bVNwbGl0LmpvaW4oJycpO1xuXHR9XG5cblx0aWYgKHJlbWFpbmRlciAhPSAwKVxuXHRcdG51bSArPSByZW1haW5kZXIudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG5cblx0cmV0dXJuIG51bTtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIGN1cnJlbmN5IHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGZvcmNlRGVjaW1hbHM6IElmIHRoZSBudW1iZXIgc2hvdWxkIGFsd2F5cyBoYXZlIHR3byBkZWNpbWFsIHBsYWNlcyA8Y29kZT50cnVlPC9jb2RlPiwgb3Igb25seSBzaG93IGRlY2ltYWxzIGlzIHRoZXJlIGlzIGEgZGVjaW1hbHMgdmFsdWUgPGNvZGU+ZmFsc2U8L2NvZGU+OyBkZWZhdWx0cyB0byA8Y29kZT50cnVlPC9jb2RlPi5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIixcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0Q3VycmVuY3koMTIzNC41KSk7IC8vIFRyYWNlcyBcIjEsMjM0LjUwXCJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeSh2YWx1ZSwgZm9yY2VEZWNpbWFscywga0RlbGltKSB7XG5cdGlmIChmb3JjZURlY2ltYWxzID09IG51bGwpIHtcblx0XHRmb3JjZURlY2ltYWxzID0gdHJ1ZTtcblx0fVxuXHRpZiAoIWtEZWxpbSkge1xuXHRcdGtEZWxpbSAgPSBcIixcIjtcblx0fVxuXHR2YXIgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuXHR2YXIgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cblx0aWYgKHJlbWFpbmRlciAhPSAwIHx8IGZvcmNlRGVjaW1hbHMpXG5cdFx0Y3VycmVuY3kgKz0gcmVtYWluZGVyLnRvRml4ZWQoMikuc3Vic3RyKDEpO1xuXG5cdHJldHVybiBjdXJyZW5jeTtcbn1cblxuLyoqXG4gRmluZHMgdGhlIGVuZ2xpc2ggb3JkaW5hbCBzdWZmaXggZm9yIHRoZSBudW1iZXIgZ2l2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBmaW5kIHRoZSBvcmRpbmFsIHN1ZmZpeCBvZi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHN1ZmZpeCBmb3IgdGhlIG51bWJlciwgMiBjaGFyYWN0ZXJzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coMzIgKyBnZXRPcmRpbmFsU3VmZml4KDMyKSk7IC8vIFRyYWNlcyAzMm5kXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPj0gMTAgJiYgdmFsdWUgPD0gMjApXG5cdFx0cmV0dXJuICd0aCc7XG5cblx0aWYgKHZhbHVlID09IDApXG5cdFx0cmV0dXJuICcnO1xuXG5cdHN3aXRjaCAodmFsdWUgJSAxMCkge1xuXHRcdGNhc2UgMyA6XG5cdFx0XHRyZXR1cm4gJ3JkJztcblx0XHRjYXNlIDIgOlxuXHRcdFx0cmV0dXJuICduZCc7XG5cdFx0Y2FzZSAxIDpcblx0XHRcdHJldHVybiAnc3QnO1xuXHRcdGRlZmF1bHQgOlxuXHRcdFx0cmV0dXJuICd0aCc7XG5cdH1cbn1cblxuLyoqXG4gQWRkcyBhIGxlYWRpbmcgemVybyBmb3IgbnVtYmVycyBsZXNzIHRoYW4gdGVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gYWRkIGxlYWRpbmcgemVyby5cbiBAcmV0dXJuIE51bWJlciBhcyBhIFN0cmluZzsgaWYgdGhlIG51bWJlciB3YXMgbGVzcyB0aGFuIHRlbiB0aGUgbnVtYmVyIHdpbGwgaGF2ZSBhIGxlYWRpbmcgemVyby5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDcpKTsgLy8gVHJhY2VzIDA3XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oMTEpKTsgLy8gVHJhY2VzIDExXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm8odmFsdWUpIHtcblx0cmV0dXJuICh2YWx1ZSA8IDEwKSA/ICcwJyArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gU3BlbGxzIHRoZSBwcm92aWRlZCBudW1iZXIuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBzcGVsbC4gTmVlZHMgdG8gYmUgbGVzcyB0aGFuIDk5OTk5OTk5OS5cbiBAcmV0dXJuIFRoZSBudW1iZXIgc3BlbGxlZCBvdXQgYXMgYSBTdHJpbmcuXG4gQHRocm93cyA8Y29kZT5FcnJvcjwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiA5OTk5OTk5OTkuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhzcGVsbCgwKSk7IC8vIFRyYWNlcyBaZXJvXG4gY29uc29sZS5sb2coc3BlbGwoMjMpKTsgLy8gVHJhY2VzIFR3ZW50eS1UaHJlZVxuIGNvbnNvbGUubG9nKHNwZWxsKDIwMDU2NzgpKTsgLy8gVHJhY2VzIFR3byBNaWxsaW9uLCBGaXZlIFRob3VzYW5kLCBTaXggSHVuZHJlZCBTZXZlbnR5LUVpZ2h0XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlbGwodmFsdWUpIHtcblx0aWYgKHZhbHVlID4gOTk5OTk5OTk5KSB7XG5cdFx0dGhyb3cgKCdWYWx1ZSB0b28gbGFyZ2UgZm9yIHRoaXMgbWV0aG9kLicpO1xuXHR9XG5cblx0dmFyIG9uZXNTcGVsbGluZ3MgPSBbJycsICdPbmUnLCAnVHdvJywgJ1RocmVlJywgJ0ZvdXInLCAnRml2ZScsICdTaXgnLCAnU2V2ZW4nLCAnRWlnaHQnLCAnTmluZScsICdUZW4nLCAnRWxldmVuJywgJ1R3ZWx2ZScsICdUaGlydGVlbicsICdGb3VydGVlbicsICdGaWZ0ZWVuJywgJ1NpeHRlZW4nLCAnU2V2ZW50ZWVuJywgJ0VpZ2h0ZWVuJywgJ05pbmV0ZWVuJ107XG5cdHZhciB0ZW5zU3BlbGxpbmdzID0gWycnLCAnJywgJ1R3ZW50eScsICdUaGlydHknLCAnRm9ydHknLCAnRmlmdHknLCAnU2l4dHknLCAnU2V2ZW50eScsICdFaWdodHknLCAnTmluZXR5J107XG5cdHZhciBzcGVsbGluZyAgICAgICA9ICcnO1xuXG5cdHZhciBtaWxsaW9ucyA9IHZhbHVlIC8gMTAwMDAwMDtcblx0dmFsdWUgICAgICAgICAgICAgICU9IDEwMDAwMDA7XG5cblx0dmFyIHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcblx0dmFsdWUgICAgICAgICAgICAgICAlPSAxMDAwO1xuXG5cdHZhciBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuXHR2YWx1ZSAgICAgICAgICAgICAgJT0gMTAwO1xuXG5cdHZhciB0ZW5zID0gdmFsdWUgLyAxMDtcblx0dmFsdWUgICAgICAgICAgJT0gMTA7XG5cblx0dmFyIG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG5cdGlmIChtaWxsaW9ucyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJywgJztcblx0XHRzcGVsbGluZyArPSBzcGVsbChtaWxsaW9ucykgKyAnIE1pbGxpb24nO1xuXHR9XG5cblx0aWYgKHRob3VzYW5kcyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJywgJztcblx0XHRzcGVsbGluZyArPSBzcGVsbCh0aG91c2FuZHMpICsgJyBUaG91c2FuZCc7XG5cdH1cblxuXHRpZiAoaHVuZHJlZHMgIT0gMCkge1xuXHRcdHNwZWxsaW5nICs9IChzcGVsbGluZy5sZW5ndGggPT0gMCkgPyAnJyA6ICcsICc7XG5cdFx0c3BlbGxpbmcgKz0gc3BlbGwoaHVuZHJlZHMpICsgJyBIdW5kcmVkJztcblx0fVxuXG5cdGlmICh0ZW5zICE9IDAgfHwgb25lcyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJyAnO1xuXG5cdFx0aWYgKHRlbnMgPCAyKVxuXHRcdFx0c3BlbGxpbmcgKz0gb25lc1NwZWxsaW5nc1t0ZW5zICogMTAgKyBvbmVzXTtcblx0XHRlbHNlIHtcblx0XHRcdHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cblx0XHRcdGlmIChvbmVzICE9IDApXG5cdFx0XHRcdHNwZWxsaW5nICs9ICctJyArIG9uZXNTcGVsbGluZ3Nbb25lc107XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNwZWxsaW5nLmxlbmd0aCA9PSAwKVxuXHRcdHJldHVybiAnWmVybyc7XG5cblx0cmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuXHRsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XG5cdHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuXHRyZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG5cdGxldCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcblx0cmV0dXJuIHJlc3VsdCA/IHtcblx0XHRyOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcblx0XHRnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcblx0XHRiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcblx0XHR0b1N0cmluZzpmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIChcInI6XCIgKyB0aGlzLnIgKyBcIixnOlwiICsgdGhpcy5nICsgXCIsYjpcIiArIHRoaXMuYilcblx0XHR9XG5cdH0gOiBudWxsO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR4dDogXCJzY3JvbGxDYXB0dXJlVHJhY2tFdmVudFwiLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja1BhZ2VNZXNzYWdlKHBhdGgpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR4dDogXCJzY3JvbGxDYXB0dXJlVHJhY2tQYWdlXCIsIHBhdGggfSk7XG59IiwiaW1wb3J0IHthZGRMZWFkaW5nWmVyb30gZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lQU1QTShkYXRlKSB7XG5cdGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0bGV0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRsZXQgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcblx0bGV0IHNlY29uZHMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG5cdGhvdXJzID0gaG91cnMgJSAxMjtcblx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuXHRyZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcywgYW1wbSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QU1QTShkYXRlLCBzcGFjZUJldHdlZW4gPSBcIlwiKSB7XG5cdGxldCBkYXRlRGF0YSA9IHRpbWVBTVBNKGRhdGUpO1xuXHRsZXQgc3RyVGltZSA9IGRhdGVEYXRhLmhvdXJzICsgJzonICsgZGF0ZURhdGEubWludXRlcyArIHNwYWNlQmV0d2VlbiArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4U3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhVVENTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENEYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0hvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdXJzKGRhdGUsIGhvdXJzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChob3VycyAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGxldCBtb250aHMgPSB7XG5cdGVuOltcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRmcjpbXCJKYW52aWVyXCIsIFwiRsOpdnJpZXJcIiwgXCJNYXJzXCIsIFwiQXZyaWxcIiwgXCJNYWlcIiwgXCJKdWluXCIsIFwiSnVpbGxldFwiLCBcIkFvw7t0XCIsIFwiU2VwdGVtYnJlXCIsIFwiT2N0b2JyZVwiLCBcIk5vdmVtYnJlXCIsIFwiRMOpY2VtYnJlXCJdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSwgbGFuZ3VhZ2UpIHtcblx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdGxhbmd1YWdlID0gXCJlblwiO1xuXHR9XG5cdGxldCBtb250aDtcblx0c3dpdGNoKGxhbmd1YWdlKSB7XG5cdFx0Y2FzZSBcImVuXCI6XG5cdFx0XHRtb250aCA9IG1vbnRoc1tsYW5ndWFnZV1bZGF0ZS5nZXRNb250aCgpXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShiaXJ0aERhdGUpIHtcblx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0bGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0bGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdGFnZS0tO1xuXHR9XG5cdHJldHVybiBhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVhdEFzVVRDKGRhdGUpIHtcblx0bGV0IHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xuXHRyZXN1bHQuc2V0TWludXRlcyhyZXN1bHQuZ2V0TWludXRlcygpIC0gcmVzdWx0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNaW51dGUgPSA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJIb3VyID0gNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJIb3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyV2VlayA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyV2Vlaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNb250aCA9IDM2NSAvIDEyICAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlclllYXIgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyWWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhbWlsaWFyVGltZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCB0ZXh0ID0gXCJcIjtcblx0bGV0IHllYXJzQmV0d2VlbiA9IHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRpZiAoeWVhcnNCZXR3ZWVuID49IDEpIHtcblx0XHRsZXQgeWVhcnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHllYXJzQmV0d2Vlbik7XG5cdFx0aWYgKHllYXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFycyBhZ29cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFyIGFnb1wiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRsZXQgbW9udGhzQmV0d2VlbiA9IG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRpZiAobW9udGhzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRsZXQgbW9udGhzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtb250aHNCZXR3ZWVuKTtcblx0XHRcdGlmIChtb250aHNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRocyBhZ29cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRoIGFnb1wiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgd2Vla3NCZXR3ZWVuID0gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRpZiAod2Vla3NCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0bGV0IHdlZWtzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih3ZWVrc0JldHdlZW4pO1xuXHRcdFx0XHRpZiAod2Vla3NCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrcyBhZ29cIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWsgYWdvXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXlzQmV0d2VlbiA9IGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdGlmIChkYXlzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGRheXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRpZiAoZGF5c0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXlzIGFnb1wiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5IGFnb1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuID0gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGhvdXJzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91cnMgYWdvXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXIgYWdvXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbiA9IG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW4gPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtaW51dGVzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGUgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBcIkp1c3Qgbm93XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0O1xufSIsImltcG9ydCB7IHRpbWVBTVBNIH0gZnJvbSBcIi4vdHN1bmFtaS91dGlscy9kYXRlXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVybyB9IGZyb20gXCIuL3RzdW5hbWkvdXRpbHMvbnVtYmVyXCI7XG5pbXBvcnQgeyBzZW5kVHJhY2tFdmVudE1lc3NhZ2UgfSBmcm9tIFwiLi92aWV3L0dBQnJpZGdlXCI7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJqc29uXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgbGV0IGNvbG9yVGhlbWUgPSBcIkRhcmtcIjtcbiAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb2xvclRoZW1lID0gZGF0YS5zZXR0aW5ncy5jb2xvclRoZW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGlzQ29sb3JUaGVtZUxpZ2h0O1xuICAgIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgICAgICBjYXNlIFwiRGFya1wiOlxuICAgICAgICBjYXNlIFwiTGlnaHRcIjpcbiAgICAgICAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gKGNvbG9yVGhlbWUgPT0gXCJMaWdodFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGRhcmtNb2RlTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gICAgICAgICAgICBsZXQgaXNEYXJrTW9kZSA9IGRhcmtNb2RlTWF0Y2hNZWRpYS5tYXRjaGVzO1xuICAgICAgICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAhaXNEYXJrTW9kZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIGlzQ29sb3JUaGVtZUxpZ2h0KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKT0+IHtcbiAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eHQpIHtcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVDb2xvclRoZW1lXCI6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIG1zZy5pc0NvbG9yVGhlbWVMaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVVcGRhdGVWaWRlb1wiOlxuICAgICAgICAgICAgdXBkYXRlVmlkZW8oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvXCI6XG4gICAgICAgICAgICB1bmxvYWRWaWRlbygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvXCI6XG4gICAgICAgICAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxubGV0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1wbGF5ZXInKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoXCJtdXRlZFwiLCBcInRydWVcIik7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgXCJ0cnVlXCIpO1xucGxheWVyLnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJzEnKTtcbnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwYXRjaFZpZGVvSGVpZ3RoKCkge1xuICAgIGNocm9tZS5ydW50aW1lLmdldEJhY2tncm91bmRQYWdlKChwYWdlKSA9PiB7XG4gICAgICAgIGxldCBtc2cgPSB7IHR4dDogXCJzY3JvbGxDYXB0dXJlVmlkZW9IZWlnaHRcIiwgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCB9O1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShwYWdlLnRhYklkLCBtc2cpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWRlbygpIHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRCYWNrZ3JvdW5kUGFnZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAocGFnZS52aWRlb1VSTCkge1xuICAgICAgICAgICAgcGxheWVyLnNyYyA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgYW1wbVRpbWUgPSB0aW1lQU1QTShkYXRlKTtcbiAgICAgICAgICAgIC8vIFNjcmVlbiBTaG90IDIwMjAtMDMtMjAgYXQgNC4zNS4xNCBQTVxuICAgICAgICAgICAgbGV0IGRhdGVEYXRhID0ge1xuICAgICAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2aWRlb0ZpbGVOYW1lID0gYFNjcm9sbCBDYXB0dXJlICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfS53ZWJtYDtcblxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICAgICAgICAgICAgICBidXR0b24uaHJlZiA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwiZG93bmxvYWRcIiwgXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmaWxlTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtdmlkZW8tZmlsZW5hbWUgYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmaWxlTmFtZUJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZGVvRmlsZU5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gICAgcGxheWVyLnBhdXNlKCk7XG4gICAgLy8gcGxheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgLy8gcGxheWVyLmxvYWQoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9