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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
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
var GABridge = __webpack_require__(0);

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
      fileNameButton.innerHTML = videoFileName;
    }
  });
}

function unloadVideo() {
  player.pause(); // player.removeAttribute('src');
  // player.load();
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL3V0aWxzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL3V0aWxzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlkZW8tcmVjb3JkaW5nLmpzIl0sIm5hbWVzIjpbInNlbmRUcmFja0V2ZW50TWVzc2FnZSIsImNhdGVnb3J5IiwiYWN0aW9uIiwibGFiZWwiLCJjaHJvbWUiLCJydW50aW1lIiwic2VuZE1lc3NhZ2UiLCJ0eHQiLCJzZW5kVHJhY2tQYWdlTWVzc2FnZSIsInBhdGgiLCJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZmxvb3IiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwicm91bmREZWNpbWFsVG9QbGFjZSIsInBsYWNlIiwicCIsInBvdyIsInJvdW5kIiwibG9vcEluZGV4IiwiaW5kZXgiLCJsZW5ndGgiLCJpc0JldHdlZW4iLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJjb25zdHJhaW4iLCJjcmVhdGVTdGVwc0JldHdlZW4iLCJiZWdpbiIsImVuZCIsInN0ZXBzIiwic3RlcHNCZXR3ZWVuIiwiaW5jcmVtZW50IiwicHVzaCIsImludGVycG9sYXRlIiwiYW1vdW50Iiwibm9ybWFsaXplIiwibWluaW11bSIsIm1heGltdW0iLCJQZXJjZW50IiwibWFwIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImdldFdlaWdodGVkQXZlcmFnZSIsImRlc3QiLCJuIiwiZm9ybWF0Iiwia0RlbGltIiwibWluTGVuZ3RoIiwiZmlsbENoYXIiLCJpc05hTiIsInJlbWFpbmRlciIsIm51bSIsInRvU3RyaW5nIiwibGVuIiwiYWRkQ2hhciIsInRvdGFsRGVsaW0iLCJ0b3RhbFJlbWFpbiIsIm51bVNwbGl0Iiwic3BsaXQiLCJzcGxpY2UiLCJzaGlmdCIsImpvaW4iLCJzdWJzdHIiLCJmb3JtYXRDdXJyZW5jeSIsImZvcmNlRGVjaW1hbHMiLCJjdXJyZW5jeSIsInRvRml4ZWQiLCJnZXRPcmRpbmFsU3VmZml4IiwiYWRkTGVhZGluZ1plcm8iLCJzcGVsbCIsIm9uZXNTcGVsbGluZ3MiLCJ0ZW5zU3BlbGxpbmdzIiwic3BlbGxpbmciLCJtaWxsaW9ucyIsInRob3VzYW5kcyIsImh1bmRyZWRzIiwidGVucyIsIm9uZXMiLCJjb21wb25lbnRUb0hleCIsImMiLCJoZXgiLCJyZ2JUb0hleCIsInJnYiIsInIiLCJnIiwiYiIsImhleFRvUmdiIiwicmVzdWx0IiwiZXhlYyIsInBhcnNlSW50IiwidGltZUFNUE0iLCJkYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsImFtcG0iLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwiZm9ybWF0QU1QTSIsInNwYWNlQmV0d2VlbiIsImRhdGVEYXRhIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwibW9udGgiLCJnZXRBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsIkRhdGUiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInRleHQiLCJ5ZWFyc0JldHdlZW5GbG9vciIsIm1vbnRoc0JldHdlZW5GbG9vciIsIndlZWtzQmV0d2VlbkZsb29yIiwiZGF5c0JldHdlZW5GbG9vciIsImhvdXJzQmV0d2VlbkZsb29yIiwibWludXRlc0JldHdlZW5GbG9vciIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImNvbG9yVGhlbWUiLCJqc29uIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInNldHRpbmdzIiwiY29sb3JUaGVtZXMiLCJpc0NvbG9yVGhlbWVMaWdodCIsImRhcmtNb2RlTWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJpc0RhcmtNb2RlIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hWaWRlb0hlaWd0aCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwidXBkYXRlVmlkZW8iLCJ1bmxvYWRWaWRlbyIsInBsYXllciIsImdldEJhY2tncm91bmRQYWdlIiwicGFnZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJ0YWJJZCIsInZpZGVvVVJMIiwic3JjIiwiYW1wbVRpbWUiLCJ5ZWFyIiwidG9VcHBlckNhc2UiLCJ2aWRlb0ZpbGVOYW1lIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJocmVmIiwiZG93bmxvYWQiLCJmaWxlTmFtZUJ1dHRvbiIsImlubmVySFRNTCIsInBhdXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQU8sU0FBU0EscUJBQVQsQ0FBK0JDLFFBQS9CLEVBQXlDQyxNQUF6QyxFQUE2RDtBQUFBLE1BQVpDLEtBQVksdUVBQUosRUFBSTtBQUNoRUMsUUFBTSxDQUFDQyxPQUFQLENBQWVDLFdBQWYsQ0FBMkI7QUFBRUMsT0FBRyxFQUFFLHlCQUFQO0FBQWtDTixZQUFRLEVBQVJBLFFBQWxDO0FBQTRDQyxVQUFNLEVBQU5BLE1BQTVDO0FBQW9EQyxTQUFLLEVBQUxBO0FBQXBELEdBQTNCO0FBQ0g7QUFFTSxTQUFTSyxvQkFBVCxDQUE4QkMsSUFBOUIsRUFBb0M7QUFDdkNMLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxXQUFmLENB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QWxCO0FBQ0FHLGNBQU0sQ0FBQ3hCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDbkMvTCwyREFBcUIsQ0FBQyxVQUFELEVBQWEsT0FBYixDQUFyQjtBQUNILFNBRkQ7QUFHSDs7QUFDRCxVQUFJME4sY0FBYyxHQUFHL0IsUUFBUSxDQUFDRSxhQUFULENBQXVCLHlDQUF2QixDQUFyQjtBQUNBNkIsb0JBQWMsQ0FBQ0MsU0FBZixHQUEyQlAsYUFBM0I7QUFDSDtBQUNKLEdBMUJEO0FBMkJIOztBQUVELFNBQVNiLFdBQVQsR0FBdUI7QUFDbkJDLFFBQU0sQ0FBQ29CLEtBQVAsR0FEbUIsQ0FFbkI7QUFDQTtBQUNILEMiLCJmaWxlIjoidmlkZW8tcmVjb3JkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDUpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9IFwiXCIpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR4dDogXCJzY3JvbGxDYXB0dXJlVHJhY2tFdmVudFwiLCBjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja1BhZ2VNZXNzYWdlKHBhdGgpIHtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR4dDogXCJzY3JvbGxDYXB0dXJlVHJhY2tQYWdlXCIsIHBhdGggfSk7XG59IiwiXG4vLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBtaW4gKyAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG5cdHJldHVybiAodmFsdWUgJiAxKSA9PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcblx0cmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuXHRyZXR1cm4gKHZhbHVlICUgMSkgPT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPT0gMSB8fCB2YWx1ZSA9PSAyKVxuXHRcdHJldHVybiB0cnVlO1xuXG5cdGlmIChpc0V2ZW4odmFsdWUpKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHR2YXIgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG5cdGZvciAodmFyIGkgPSAzOyBpIDw9IHM7IGkrKylcblx0aWYgKHZhbHVlICUgaSA9PSAwKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSkge1xuXHR2YXIgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG5cblx0cmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwKSAvIHA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcblx0aWYgKGluZGV4IDwgMClcblx0XHRpbmRleCA9IGxlbmd0aCArIGluZGV4ICUgbGVuZ3RoO1xuXG5cdGlmIChpbmRleCA+PSBsZW5ndGgpXG5cdFx0cmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuXG5cdHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgdmFsdWUgaXMgaW5jbHVkZWQgd2l0aGluIGEgcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQHVzYWdlTm90ZSBUaGUgcmFuZ2UgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDMsIDAsIDUpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG5cdHJldHVybiAhKHZhbHVlIDwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHx8IHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB2YWx1ZSBmYWxscyB3aXRoaW4gYSByYW5nZTsgaWYgbm90IGl0IGlzIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyBlaXRoZXIgdGhlIG51bWJlciBhcyBwYXNzZWQsIG9yIGl0cyB2YWx1ZSBvbmNlIHNuYXBwZWQgdG8gbmVhcmVzdCByYW5nZSB2YWx1ZS5cbiBAdXNhZ2VOb3RlIFRoZSBjb25zdHJhaW50IHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNvbnN0cmFpbigzLCAwLCA1KSk7IC8vIFRyYWNlcyAzXG4gY29uc29sZS5sb2coY29uc3RyYWluKDcsIDAsIDUpKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJhaW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKSwgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBldmVubHkgc3BhY2VkIG51bWVyaWNhbCBpbmNyZW1lbnRzIGJldHdlZW4gdHdvIG51bWJlcnMuXG5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBwYXJhbSBzdGVwczogVGhlIG51bWJlciBvZiBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyBhbiBBcnJheSBjb21wcmlzZWQgb2YgdGhlIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigwLCA1LCA0KSk7IC8vIFRyYWNlcyAxLDIsMyw0XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDEsIDMsIDMpKTsgLy8gVHJhY2VzIDEuNSwyLDIuNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBzQmV0d2VlbihiZWdpbiwgZW5kLCBzdGVwcykge1xuXHRzdGVwcysrO1xuXG5cdHZhciBpID0gMDtcblx0dmFyIHN0ZXBzQmV0d2VlbiA9IFtdO1xuXHR2YXIgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG5cdHdoaWxlICgrK2kgPCBzdGVwcylcblx0XHRzdGVwc0JldHdlZW4ucHVzaCgoaSAqIGluY3JlbWVudCkgKyBiZWdpbik7XG5cblx0cmV0dXJuIHN0ZXBzQmV0d2Vlbjtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHZhbHVlIGJldHdlZW4gdHdvIHNwZWNpZmllZCB2YWx1ZXMuXG5cbiBAcGFyYW0gYW1vdW50OiBUaGUgbGV2ZWwgb2YgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLiBJZiA8Y29kZT4wPC9jb2RlPiwgPGNvZGU+YmVnaW48L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkOyBpZiA8Y29kZT4xPC9jb2RlPiwgPGNvZGU+ZW5kPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZC5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaW50ZXJwb2xhdGUoMC41LCAwLCAxMCkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlKGFtb3VudCwgYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gYmVnaW4gKyAoZW5kIC0gYmVnaW4pICogYW1vdW50O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgcGVyY2VudGFnZSBvZiBhIHZhbHVlIGluIGEgZ2l2ZW4gcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQuXG4gQHBhcmFtIG1pbmltdW06IFRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIG1heGltdW06IFRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhub3JtYWxpemUoOCwgNCwgMjApLmRlY2ltYWxQZXJjZW50YWdlKTsgLy8gVHJhY2VzIDAuMjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIG1pbmltdW0sIG1heGltdW0pIHtcblx0cmV0dXJuIG5ldyBQZXJjZW50KCh2YWx1ZSAtIG1pbmltdW0pIC8gKG1heGltdW0gLSBtaW5pbXVtKSk7XG59XG5cbi8qKlxuIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSBjb29yZGluYXRlIHNwYWNlIHRvIGFub3RoZXIuXG5cbiBAcGFyYW0gdmFsdWU6IFZhbHVlIGZyb20gdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UgdG8gbWFwIHRvIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMTogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDE6IEVuZGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMjogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgyOiBFbmRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobWFwKDAuNzUsIDAsIDEsIDAsIDEwMCkpOyAvLyBUcmFjZXMgNzVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcblx0cmV0dXJuIG1pbjIgKyAobWF4MiAtIG1pbjIpICogKCh2YWx1ZSAtIG1pbjEpIC8gKG1heDEgLSBtaW4xKSk7XG59XG5cbi8qKlxuIExvdyBwYXNzIGZpbHRlciBhbG9ncml0aG0gZm9yIGVhc2luZyBhIHZhbHVlIHRvd2FyZCBhIGRlc3RpbmF0aW9uIHZhbHVlLiBXb3JrcyBiZXN0IGZvciB0d2VlbmluZyB2YWx1ZXMgd2hlbiBubyBkZWZpbml0ZSB0aW1lIGR1cmF0aW9uIGV4aXN0cyBhbmQgd2hlbiB0aGUgZGVzdGluYXRpb24gdmFsdWUgY2hhbmdlcy5cblxuIElmIDxjb2RlPigwLjUgPCBuIDwgMSk8L2NvZGU+LCB0aGVuIHRoZSByZXN1bHRpbmcgdmFsdWVzIHdpbGwgb3ZlcnNob290IChwaW5nLXBvbmcpIHVudGlsIHRoZXkgcmVhY2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlLiBXaGVuIDxjb2RlPm48L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiAxLCBhcyBpdHMgdmFsdWUgaW5jcmVhc2VzLCB0aGUgdGltZSBpdCB0YWtlcyB0byByZWFjaCB0aGUgZGVzdGluYXRpb24gYWxzbyBpbmNyZWFzZXMuIEEgcGxlYXNpbmcgdmFsdWUgZm9yIDxjb2RlPm48L2NvZGU+IGlzIDUuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlLlxuIEBwYXJhbSBkZXN0OiBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gQHBhcmFtIG46IFRoZSBzbG93ZG93biBmYWN0b3IuXG4gQHJldHVybiBUaGUgd2VpZ2h0ZWQgYXZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodGVkQXZlcmFnZSh2YWx1ZSwgZGVzdCwgbikge1xuXHRyZXR1cm4gdmFsdWUgKyAoZGVzdCAtIHZhbHVlKSAvIG47XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiXCI8L2NvZGU+LlxuIEBwYXJhbSBtaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgbnVtYmVyOyBkZWZhdWx0cyB0byA8Y29kZT4wIDwvY29kZT4uXG4gQHBhcmFtIGZpbGxDaGFyOiBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdXNlZCB0byBtYWtlIHRoZSBudW1iZXIgdGhlIG1pbmltdW0gbGVuZ3RoOyBkZWZhdWx0cyB0byA8Y29kZT5cIjBcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0KDEyMzQ1NjcsIFwiLFwiLCA4KSk7IC8vIFRyYWNlcyAwMSwyMzQsNTY3XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBrRGVsaW0sIG1pbkxlbmd0aCwgZmlsbENoYXIpIHtcblx0aWYgKCFrRGVsaW0pIHtcblx0XHRrRGVsaW0gPSBcIixcIjtcblx0fVxuXHRpZiAoaXNOYU4obWluTGVuZ3RoKSkge1xuXHRcdG1pbkxlbmd0aCA9IDA7XG5cdH1cblx0aWYgKCFmaWxsQ2hhcikge1xuXHRcdGZpbGxDaGFyID0gXCIwXCI7XG5cdH1cblx0dmFyIHJlbWFpbmRlciA9IHZhbHVlICUgMTtcblx0dmFyIG51bSA9IE1hdGguZmxvb3IodmFsdWUpLnRvU3RyaW5nKCk7XG5cdHZhciBsZW4gPSBudW0ubGVuZ3RoO1xuXG5cdGlmIChtaW5MZW5ndGggIT0gMCAmJiBtaW5MZW5ndGggPiBsZW4pIHtcblx0XHRtaW5MZW5ndGggLT0gbGVuO1xuXG5cdFx0dmFyIGFkZENoYXIgPSBmaWxsQ2hhciB8fCAnMCc7XG5cblx0XHR3aGlsZSAobWluTGVuZ3RoLS0pXG5cdFx0XHRudW0gPSBhZGRDaGFyICsgbnVtO1xuXHR9XG5cblx0aWYgKGtEZWxpbSAhPSBudWxsICYmIG51bS5sZW5ndGggPiAzKSB7XG5cdFx0dmFyIHRvdGFsRGVsaW0gID0gTWF0aC5mbG9vcihudW0ubGVuZ3RoIC8gMyk7XG5cdFx0dmFyIHRvdGFsUmVtYWluID0gbnVtLmxlbmd0aCAlIDM7XG5cdFx0dmFyIG51bVNwbGl0ICAgPSBudW0uc3BsaXQoJycpO1xuXHRcdHZhciBpID0gLTE7XG5cblx0XHR3aGlsZSAoKytpIDwgdG90YWxEZWxpbSlcblx0XHRcdG51bVNwbGl0LnNwbGljZSh0b3RhbFJlbWFpbiArICg0ICogaSksIDAsIGtEZWxpbSk7XG5cblx0XHRpZiAodG90YWxSZW1haW4gPT0gMClcblx0XHRcdG51bVNwbGl0LnNoaWZ0KCk7XG5cblx0XHRudW0gPSBudW1TcGxpdC5qb2luKCcnKTtcblx0fVxuXG5cdGlmIChyZW1haW5kZXIgIT0gMClcblx0XHRudW0gKz0gcmVtYWluZGVyLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuXG5cdHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuXHRpZiAoZm9yY2VEZWNpbWFscyA9PSBudWxsKSB7XG5cdFx0Zm9yY2VEZWNpbWFscyA9IHRydWU7XG5cdH1cblx0aWYgKCFrRGVsaW0pIHtcblx0XHRrRGVsaW0gID0gXCIsXCI7XG5cdH1cblx0dmFyIHJlbWFpbmRlciA9IHZhbHVlICUgMTtcblx0dmFyIGN1cnJlbmN5ID0gZm9ybWF0KE1hdGguZmxvb3IodmFsdWUpLCBrRGVsaW0pO1xuXG5cdGlmIChyZW1haW5kZXIgIT0gMCB8fCBmb3JjZURlY2ltYWxzKVxuXHRcdGN1cnJlbmN5ICs9IHJlbWFpbmRlci50b0ZpeGVkKDIpLnN1YnN0cigxKTtcblxuXHRyZXR1cm4gY3VycmVuY3k7XG59XG5cbi8qKlxuIEZpbmRzIHRoZSBlbmdsaXNoIG9yZGluYWwgc3VmZml4IGZvciB0aGUgbnVtYmVyIGdpdmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZmluZCB0aGUgb3JkaW5hbCBzdWZmaXggb2YuXG4gQHJldHVybiBSZXR1cm5zIHRoZSBzdWZmaXggZm9yIHRoZSBudW1iZXIsIDIgY2hhcmFjdGVycy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nMzIgKyBnZXRPcmRpbmFsU3VmZml4KDMyKSk7IC8vIFRyYWNlcyAzMm5kXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPj0gMTAgJiYgdmFsdWUgPD0gMjApXG5cdFx0cmV0dXJuICd0aCc7XG5cblx0aWYgKHZhbHVlID09IDApXG5cdFx0cmV0dXJuICcnO1xuXG5cdHN3aXRjaCAodmFsdWUgJSAxMCkge1xuXHRcdGNhc2UgMyA6XG5cdFx0XHRyZXR1cm4gJ3JkJztcblx0XHRjYXNlIDIgOlxuXHRcdFx0cmV0dXJuICduZCc7XG5cdFx0Y2FzZSAxIDpcblx0XHRcdHJldHVybiAnc3QnO1xuXHRcdGRlZmF1bHQgOlxuXHRcdFx0cmV0dXJuICd0aCc7XG5cdH1cbn1cblxuLyoqXG4gQWRkcyBhIGxlYWRpbmcgemVybyBmb3IgbnVtYmVycyBsZXNzIHRoYW4gdGVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gYWRkIGxlYWRpbmcgemVyby5cbiBAcmV0dXJuIE51bWJlciBhcyBhIFN0cmluZzsgaWYgdGhlIG51bWJlciB3YXMgbGVzcyB0aGFuIHRlbiB0aGUgbnVtYmVyIHdpbGwgaGF2ZSBhIGxlYWRpbmcgemVyby5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDcpKTsgLy8gVHJhY2VzIDA3XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oMTEpKTsgLy8gVHJhY2VzIDExXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm8odmFsdWUpIHtcblx0cmV0dXJuICh2YWx1ZSA8IDEwKSA/ICcwJyArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gU3BlbGxzIHRoZSBwcm92aWRlZCBudW1iZXIuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBzcGVsbC4gTmVlZHMgdG8gYmUgbGVzcyB0aGFuIDk5OTk5OTk5OS5cbiBAcmV0dXJuIFRoZSBudW1iZXIgc3BlbGxlZCBvdXQgYXMgYSBTdHJpbmcuXG4gQHRocm93cyA8Y29kZT5FcnJvcjwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiA5OTk5OTk5OTkuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhzcGVsbCgwKSk7IC8vIFRyYWNlcyBaZXJvXG4gY29uc29sZS5sb2coc3BlbGwoMjMpKTsgLy8gVHJhY2VzIFR3ZW50eS1UaHJlZVxuIGNvbnNvbGUubG9nKHNwZWxsKDIwMDU2NzgpKTsgLy8gVHJhY2VzIFR3byBNaWxsaW9uLCBGaXZlIFRob3VzYW5kLCBTaXggSHVuZHJlZCBTZXZlbnR5LUVpZ2h0XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlbGwodmFsdWUpIHtcblx0aWYgKHZhbHVlID4gOTk5OTk5OTk5KSB7XG5cdFx0dGhyb3cgKCdWYWx1ZSB0b28gbGFyZ2UgZm9yIHRoaXMgbWV0aG9kLicpO1xuXHR9XG5cblx0dmFyIG9uZXNTcGVsbGluZ3MgPSBbJycsICdPbmUnLCAnVHdvJywgJ1RocmVlJywgJ0ZvdXInLCAnRml2ZScsICdTaXgnLCAnU2V2ZW4nLCAnRWlnaHQnLCAnTmluZScsICdUZW4nLCAnRWxldmVuJywgJ1R3ZWx2ZScsICdUaGlydGVlbicsICdGb3VydGVlbicsICdGaWZ0ZWVuJywgJ1NpeHRlZW4nLCAnU2V2ZW50ZWVuJywgJ0VpZ2h0ZWVuJywgJ05pbmV0ZWVuJ107XG5cdHZhciB0ZW5zU3BlbGxpbmdzID0gWycnLCAnJywgJ1R3ZW50eScsICdUaGlydHknLCAnRm9ydHknLCAnRmlmdHknLCAnU2l4dHknLCAnU2V2ZW50eScsICdFaWdodHknLCAnTmluZXR5J107XG5cdHZhciBzcGVsbGluZyAgICAgICA9ICcnO1xuXG5cdHZhciBtaWxsaW9ucyA9IHZhbHVlIC8gMTAwMDAwMDtcblx0dmFsdWUgICAgICAgICAgICAgICU9IDEwMDAwMDA7XG5cblx0dmFyIHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcblx0dmFsdWUgICAgICAgICAgICAgICAlPSAxMDAwO1xuXG5cdHZhciBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuXHR2YWx1ZSAgICAgICAgICAgICAgJT0gMTAwO1xuXG5cdHZhciB0ZW5zID0gdmFsdWUgLyAxMDtcblx0dmFsdWUgICAgICAgICAgJT0gMTA7XG5cblx0dmFyIG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG5cdGlmIChtaWxsaW9ucyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJywgJztcblx0XHRzcGVsbGluZyArPSBzcGVsbChtaWxsaW9ucykgKyAnIE1pbGxpb24nO1xuXHR9XG5cblx0aWYgKHRob3VzYW5kcyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJywgJztcblx0XHRzcGVsbGluZyArPSBzcGVsbCh0aG91c2FuZHMpICsgJyBUaG91c2FuZCc7XG5cdH1cblxuXHRpZiAoaHVuZHJlZHMgIT0gMCkge1xuXHRcdHNwZWxsaW5nICs9IChzcGVsbGluZy5sZW5ndGggPT0gMCkgPyAnJyA6ICcsICc7XG5cdFx0c3BlbGxpbmcgKz0gc3BlbGwoaHVuZHJlZHMpICsgJyBIdW5kcmVkJztcblx0fVxuXG5cdGlmICh0ZW5zICE9IDAgfHwgb25lcyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJyAnO1xuXG5cdFx0aWYgKHRlbnMgPCAyKVxuXHRcdFx0c3BlbGxpbmcgKz0gb25lc1NwZWxsaW5nc1t0ZW5zICogMTAgKyBvbmVzXTtcblx0XHRlbHNlIHtcblx0XHRcdHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cblx0XHRcdGlmIChvbmVzICE9IDApXG5cdFx0XHRcdHNwZWxsaW5nICs9ICctJyArIG9uZXNTcGVsbGluZ3Nbb25lc107XG5cdFx0fVxuXHR9XG5cblx0aWYgKHNwZWxsaW5nLmxlbmd0aCA9PSAwKVxuXHRcdHJldHVybiAnWmVybyc7XG5cblx0cmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuXHRsZXQgaGV4ID0gYy50b1N0cmluZygxNik7XG5cdHJldHVybiBoZXgubGVuZ3RoID09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuXHRyZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG5cdGxldCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcblx0cmV0dXJuIHJlc3VsdCA/IHtcblx0XHRyOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcblx0XHRnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcblx0XHRiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcblx0XHR0b1N0cmluZzpmdW5jdGlvbigpe1xuXHRcdFx0cmV0dXJuIChcInI6XCIgKyB0aGlzLnIgKyBcIixnOlwiICsgdGhpcy5nICsgXCIsYjpcIiArIHRoaXMuYilcblx0XHR9XG5cdH0gOiBudWxsO1xufVxuIiwiaW1wb3J0IHthZGRMZWFkaW5nWmVyb30gZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lQU1QTShkYXRlKSB7XG5cdGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0bGV0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRsZXQgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcblx0bGV0IHNlY29uZHMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG5cdGhvdXJzID0gaG91cnMgJSAxMjtcblx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuXHRyZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcywgYW1wbSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QU1QTShkYXRlLCBzcGFjZUJldHdlZW4gPSBcIlwiKSB7XG5cdGxldCBkYXRlRGF0YSA9IHRpbWVBTVBNKGRhdGUpO1xuXHRsZXQgc3RyVGltZSA9IGRhdGVEYXRhLmhvdXJzICsgJzonICsgZGF0ZURhdGEubWludXRlcyArIHNwYWNlQmV0d2VlbiArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4U3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhVVENTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENEYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0hvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdXJzKGRhdGUsIGhvdXJzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChob3VycyAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGxldCBtb250aHMgPSB7XG5cdGVuOltcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRmcjpbXCJKYW52aWVyXCIsIFwiRsOpdnJpZXJcIiwgXCJNYXJzXCIsIFwiQXZyaWxcIiwgXCJNYWlcIiwgXCJKdWluXCIsIFwiSnVpbGxldFwiLCBcIkFvw7t0XCIsIFwiU2VwdGVtYnJlXCIsIFwiT2N0b2JyZVwiLCBcIk5vdmVtYnJlXCIsIFwiRMOpY2VtYnJlXCJdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSwgbGFuZ3VhZ2UpIHtcblx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdGxhbmd1YWdlID0gXCJlblwiO1xuXHR9XG5cdGxldCBtb250aDtcblx0c3dpdGNoKGxhbmd1YWdlKSB7XG5cdFx0Y2FzZSBcImVuXCI6XG5cdFx0XHRtb250aCA9IG1vbnRoc1tsYW5ndWFnZV1bZGF0ZS5nZXRNb250aCgpXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShiaXJ0aERhdGUpIHtcblx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0bGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0bGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdGFnZS0tO1xuXHR9XG5cdHJldHVybiBhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVhdEFzVVRDKGRhdGUpIHtcblx0bGV0IHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xuXHRyZXN1bHQuc2V0TWludXRlcyhyZXN1bHQuZ2V0TWludXRlcygpIC0gcmVzdWx0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNaW51dGUgPSA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJIb3VyID0gNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJIb3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyV2VlayA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyV2Vlaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNb250aCA9IDM2NSAvIDEyICAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlclllYXIgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyWWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhbWlsaWFyVGltZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCB0ZXh0ID0gXCJcIjtcblx0bGV0IHllYXJzQmV0d2VlbiA9IHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRpZiAoeWVhcnNCZXR3ZWVuID49IDEpIHtcblx0XHRsZXQgeWVhcnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHllYXJzQmV0d2Vlbik7XG5cdFx0aWYgKHllYXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFycyBhZ29cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFyIGFnb1wiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRsZXQgbW9udGhzQmV0d2VlbiA9IG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRpZiAobW9udGhzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRsZXQgbW9udGhzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtb250aHNCZXR3ZWVuKTtcblx0XHRcdGlmIChtb250aHNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRocyBhZ29cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRoIGFnb1wiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgd2Vla3NCZXR3ZWVuID0gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRpZiAod2Vla3NCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0bGV0IHdlZWtzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih3ZWVrc0JldHdlZW4pO1xuXHRcdFx0XHRpZiAod2Vla3NCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrcyBhZ29cIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWsgYWdvXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXlzQmV0d2VlbiA9IGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdGlmIChkYXlzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGRheXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRpZiAoZGF5c0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXlzIGFnb1wiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5IGFnb1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuID0gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGhvdXJzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91cnMgYWdvXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXIgYWdvXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbiA9IG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW4gPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtaW51dGVzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGUgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBcIkp1c3Qgbm93XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0O1xufSIsImltcG9ydCB7IHRpbWVBTVBNIH0gZnJvbSBcIi4vdHN1bmFtaS91dGlscy9kYXRlXCI7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVybyB9IGZyb20gXCIuL3RzdW5hbWkvdXRpbHMvbnVtYmVyXCI7XG5pbXBvcnQgeyBzZW5kVHJhY2tFdmVudE1lc3NhZ2UgfSBmcm9tIFwiLi92aWV3L0dBQnJpZGdlXCI7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJqc29uXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgbGV0IGNvbG9yVGhlbWUgPSBcIkRhcmtcIjtcbiAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb2xvclRoZW1lID0gZGF0YS5zZXR0aW5ncy5jb2xvclRoZW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGlzQ29sb3JUaGVtZUxpZ2h0O1xuICAgIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgICAgICBjYXNlIFwiRGFya1wiOlxuICAgICAgICBjYXNlIFwiTGlnaHRcIjpcbiAgICAgICAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gKGNvbG9yVGhlbWUgPT0gXCJMaWdodFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGRhcmtNb2RlTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gICAgICAgICAgICBsZXQgaXNEYXJrTW9kZSA9IGRhcmtNb2RlTWF0Y2hNZWRpYS5tYXRjaGVzO1xuICAgICAgICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAhaXNEYXJrTW9kZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIGlzQ29sb3JUaGVtZUxpZ2h0KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKT0+IHtcbiAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eHQpIHtcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVDb2xvclRoZW1lXCI6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIG1zZy5pc0NvbG9yVGhlbWVMaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVVcGRhdGVWaWRlb1wiOlxuICAgICAgICAgICAgdXBkYXRlVmlkZW8oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvXCI6XG4gICAgICAgICAgICB1bmxvYWRWaWRlbygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvXCI6XG4gICAgICAgICAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxubGV0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1wbGF5ZXInKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoXCJtdXRlZFwiLCBcInRydWVcIik7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgXCJ0cnVlXCIpO1xucGxheWVyLnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJzEnKTtcbnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwYXRjaFZpZGVvSGVpZ3RoKCkge1xuICAgIGNocm9tZS5ydW50aW1lLmdldEJhY2tncm91bmRQYWdlKChwYWdlKSA9PiB7XG4gICAgICAgIGxldCBtc2cgPSB7IHR4dDogXCJzY3JvbGxDYXB0dXJlVmlkZW9IZWlnaHRcIiwgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCB9O1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShwYWdlLnRhYklkLCBtc2cpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWRlbygpIHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRCYWNrZ3JvdW5kUGFnZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAocGFnZS52aWRlb1VSTCkge1xuICAgICAgICAgICAgcGxheWVyLnNyYyA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgYW1wbVRpbWUgPSB0aW1lQU1QTShkYXRlKTtcbiAgICAgICAgICAgIC8vIFNjcmVlbiBTaG90IDIwMjAtMDMtMjAgYXQgNC4zNS4xNCBQTVxuICAgICAgICAgICAgbGV0IGRhdGVEYXRhID0ge1xuICAgICAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2aWRlb0ZpbGVOYW1lID0gYFNjcm9sbCBDYXB0dXJlICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfS53ZWJtYDtcblxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICAgICAgICAgICAgICBidXR0b24uaHJlZiA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwiZG93bmxvYWRcIiwgXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmaWxlTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtdmlkZW8tZmlsZW5hbWUgYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmaWxlTmFtZUJ1dHRvbi5pbm5lckhUTUwgPSB2aWRlb0ZpbGVOYW1lO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVubG9hZFZpZGVvKCkge1xuICAgIHBsYXllci5wYXVzZSgpO1xuICAgIC8vIHBsYXllci5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuICAgIC8vIHBsYXllci5sb2FkKCk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==