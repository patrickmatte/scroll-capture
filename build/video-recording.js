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
  player.pause();
  player.removeAttribute('src');
  player.load();
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL3V0aWxzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlkZW8tcmVjb3JkaW5nLmpzIl0sIm5hbWVzIjpbImdldFJhbmRvbUFyYml0cmFyeSIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJnZXRSYW5kb21JbnQiLCJmbG9vciIsImdldFJhbmRvbUludEluY2x1c2l2ZSIsInJhbmRvbVdpdGhpblJhbmdlIiwicmFuZG9tSW50ZWdlcldpdGhpblJhbmdlIiwiaXNFdmVuIiwidmFsdWUiLCJpc09kZCIsImlzSW50ZWdlciIsImlzUHJpbWUiLCJzIiwic3FydCIsImkiLCJyb3VuZERlY2ltYWxUb1BsYWNlIiwicGxhY2UiLCJwIiwicG93Iiwicm91bmQiLCJyb3VuZERlY2ltYWxUbzEiLCJyb3VuZERlY2ltYWxUbzIiLCJyb3VuZERlY2ltYWxUbzMiLCJsb29wSW5kZXgiLCJpbmRleCIsImxlbmd0aCIsImlzQmV0d2VlbiIsImZpcnN0VmFsdWUiLCJzZWNvbmRWYWx1ZSIsImNvbnN0cmFpbiIsImNyZWF0ZVN0ZXBzQmV0d2VlbiIsImJlZ2luIiwiZW5kIiwic3RlcHMiLCJzdGVwc0JldHdlZW4iLCJpbmNyZW1lbnQiLCJwdXNoIiwiaW50ZXJwb2xhdGUiLCJhbW91bnQiLCJub3JtYWxpemUiLCJtaW5pbXVtIiwibWF4aW11bSIsIlBlcmNlbnQiLCJtYXAiLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwiZ2V0V2VpZ2h0ZWRBdmVyYWdlIiwiZGVzdCIsIm4iLCJmb3JtYXQiLCJrRGVsaW0iLCJtaW5MZW5ndGgiLCJmaWxsQ2hhciIsImlzTmFOIiwicmVtYWluZGVyIiwibnVtIiwidG9TdHJpbmciLCJsZW4iLCJhZGRDaGFyIiwidG90YWxEZWxpbSIsInRvdGFsUmVtYWluIiwibnVtU3BsaXQiLCJzcGxpdCIsInNwbGljZSIsInNoaWZ0Iiwiam9pbiIsInN1YnN0ciIsImZvcm1hdEN1cnJlbmN5IiwiZm9yY2VEZWNpbWFscyIsImN1cnJlbmN5IiwidG9GaXhlZCIsImdldE9yZGluYWxTdWZmaXgiLCJhZGRMZWFkaW5nWmVybyIsInNwZWxsIiwib25lc1NwZWxsaW5ncyIsInRlbnNTcGVsbGluZ3MiLCJzcGVsbGluZyIsIm1pbGxpb25zIiwidGhvdXNhbmRzIiwiaHVuZHJlZHMiLCJ0ZW5zIiwib25lcyIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsInJnYlRvSGV4IiwicmdiIiwiciIsImciLCJiIiwiaGV4VG9SZ2IiLCJyZXN1bHQiLCJleGVjIiwicGFyc2VJbnQiLCJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHh0Iiwic2VuZFRyYWNrUGFnZU1lc3NhZ2UiLCJwYXRoIiwidGltZUFNUE0iLCJkYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsImFtcG0iLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwiZm9ybWF0QU1QTSIsInNwYWNlQmV0d2VlbiIsImRhdGVEYXRhIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwibW9udGgiLCJnZXRBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsIkRhdGUiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInRleHQiLCJ5ZWFyc0JldHdlZW5GbG9vciIsIm1vbnRoc0JldHdlZW5GbG9vciIsIndlZWtzQmV0d2VlbkZsb29yIiwiZGF5c0JldHdlZW5GbG9vciIsImhvdXJzQmV0d2VlbkZsb29yIiwibWludXRlc0JldHdlZW5GbG9vciIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImNvbG9yVGhlbWUiLCJqc29uIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInNldHRpbmdzIiwiY29sb3JUaGVtZXMiLCJpc0NvbG9yVGhlbWVMaWdodCIsImRhcmtNb2RlTWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJpc0RhcmtNb2RlIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hWaWRlb0hlaWd0aCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwidXBkYXRlVmlkZW8iLCJ1bmxvYWRWaWRlbyIsInBsYXllciIsImdldEJhY2tncm91bmRQYWdlIiwicGFnZSIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJ0YWJJZCIsInZpZGVvVVJMIiwic3JjIiwiYW1wbVRpbWUiLCJ5ZWFyIiwidG9VcHBlckNhc2UiLCJ2aWRlb0ZpbGVOYW1lIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJocmVmIiwiZG93bmxvYWQiLCJmaWxlTmFtZUJ1dHRvbiIsInRleHRDb250ZW50IiwicGF1c2UiLCJyZW1vdmVBdHRyaWJ1dGUiLCJsb2FkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7QUNqRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ08sU0FBU0Esa0JBQVQsQ0FBNEJDLEdBQTVCLEVBQWlDQyxHQUFqQyxFQUFzQztBQUM1QyxTQUFPQyxJQUFJLENBQUND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Q3JHLEtBQXJGLGNBQThGcUcsUUFBUSxDQUFDbEcsT0FBdkcsY0FBa0hrRyxRQUFRLENBQUNoRyxPQUEzSCxjQUFzSWdHLFFBQVEsQ0FBQ25HLElBQS9JLFVBQWpCO0FBRUEsVUFBSXVHLE9BQU8sR0FBRzFCLFFBQVEsQ0FBQzJCLGdCQUFULENBQTBCLHNCQUExQixDQUFkOztBQUNBLFdBQUssSUFBSXhNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd1TSxPQUFPLENBQUM1TCxNQUE1QixFQUFvQ1gsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxZQUFJeU0sTUFBTSxHQUFHRixPQUFPLENBQUN2TSxDQUFELENBQXBCO0FBQ0F5TSxjQUFNLENBQUNDLElBQVAsR0FBY2QsSUFBSSxDQUFDSyxRQUFuQjtBQUNBUSxjQUFNLENBQUNFLFFBQVAsR0FBa0JMLGFBQWxCO0FBQ0FHLGNBQU0sQ0FBQ3hCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDbkMvRiwyREFBcUIsQ0FBQyxVQUFELEVBQWEsT0FBYixDQUFyQjtBQUNILFNBRkQ7QUFHSDs7QUFDRCxVQUFJMEgsY0FBYyxHQUFHL0IsUUFBUSxDQUFDRSxhQUFULENBQXVCLHlDQUF2QixDQUFyQjtBQUNBNkIsb0JBQWMsQ0FBQ0MsV0FBZixHQUE2QlAsYUFBN0I7QUFDSDtBQUNKLEdBMUJEO0FBMkJIOztBQUVELFNBQVNiLFdBQVQsR0FBdUI7QUFDbkJDLFFBQU0sQ0FBQ29CLEtBQVA7QUFDQXBCLFFBQU0sQ0FBQ3FCLGVBQVAsQ0FBdUIsS0FBdkI7QUFDQXJCLFFBQU0sQ0FBQ3NCLElBQVA7QUFDSCxDIiwiZmlsZSI6InZpZGVvLXJlY29yZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIlxuLy8gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChleGNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChpbmNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCkge1xuXHRyZXR1cm4gbWluICsgKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSk7XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXJXaXRoaW5SYW5nZShtaW4sIG1heCkge1xuXHRyZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEgKyBtYXggLSBtaW4pICsgbWluKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgZXZlbjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzRXZlbig3KSk7IC8vIFRyYWNlcyBmYWxzZVxuIGNvbnNvbGUubG9nKGlzRXZlbigxMikpOyAvLyBUcmFjZXMgdHJ1ZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXZlbih2YWx1ZSkge1xuXHRyZXR1cm4gKHZhbHVlICYgMSkgPT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIG9kZC5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG5vdCBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgb2RkOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNPZGQoNykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzT2RkKDEyKSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKHZhbHVlKSB7XG5cdHJldHVybiAhaXNFdmVuKHZhbHVlKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXIuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBjb250YWlucyBubyBkZWNpbWFsIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEuMjM0NSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcblx0cmV0dXJuICh2YWx1ZSAlIDEpID09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBwcmltZS5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG9ubHkgZGl2aXNpYmxlIGJ5IDxjb2RlPjE8L2NvZGU+IGFuZCBpdHNlbGYuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgcHJpbWU7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc1ByaW1lKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNQcmltZSg0KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWUodmFsdWUpIHtcblx0aWYgKHZhbHVlID09IDEgfHwgdmFsdWUgPT0gMilcblx0XHRyZXR1cm4gdHJ1ZTtcblxuXHRpZiAoaXNFdmVuKHZhbHVlKSlcblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0dmFyIHMgPSBNYXRoLnNxcnQodmFsdWUpO1xuXHRmb3IgKHZhciBpID0gMzsgaSA8PSBzOyBpKyspXG5cdGlmICh2YWx1ZSAlIGkgPT0gMClcblx0XHRyZXR1cm4gZmFsc2U7XG5cblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuIFJvdW5kcyBhIG51bWJlcidzIGRlY2ltYWwgdmFsdWUgdG8gYSBzcGVjaWZpYyBwbGFjZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB0byByb3VuZC5cbiBAcGFyYW0gcGxhY2U6IFRoZSBkZWNpbWFsIHBsYWNlIHRvIHJvdW5kLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgdmFsdWUgcm91bmRlZCB0byB0aGUgZGVmaW5lZCBwbGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAyKSk7IC8vIFRyYWNlcyAzLjE0XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDMpKTsgLy8gVHJhY2VzIDMuMTQyXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgcGxhY2UgPSAxKSB7XG5cdHZhciBwID0gTWF0aC5wb3coMTAsIHBsYWNlKTtcblxuXHRyZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHApIC8gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kRGVjaW1hbFRvMSh2YWx1ZSkge1xuXHRyZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUbzIodmFsdWUpIHtcblx0cmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG8zKHZhbHVlKSB7XG5cdHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAzKTtcbn1cblxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIGluZGV4IGlzIGluY2x1ZGVkIHdpdGhpbiB0aGUgY29sbGVjdGlvbiBsZW5ndGggb3RoZXJ3aXNlIHRoZSBpbmRleCBsb29wcyB0byB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgcmFuZ2UgYW5kIGNvbnRpbnVlcy5cblxuIEBwYXJhbSBpbmRleDogU2hvcCB0byBsb29wIGlmIG5lZWRlZC5cbiBAcGFyYW0gbGVuZ3RoOiBUaGUgdG90YWwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gQHJldHVybiBBIHZhbGlkIHplcm8tYmFzZWQgaW5kZXguXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YXIgY29sb3JzOkFycmF5ID0gbmV3IEFycmF5KFwiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIpO1xuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDIsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBCbHVlXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDQsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBHcmVlblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgtNiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIFJlZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3BJbmRleChpbmRleCwgbGVuZ3RoKSB7XG5cdGlmIChpbmRleCA8IDApXG5cdFx0aW5kZXggPSBsZW5ndGggKyBpbmRleCAlIGxlbmd0aDtcblxuXHRpZiAoaW5kZXggPj0gbGVuZ3RoKVxuXHRcdHJldHVybiBpbmRleCAlIGxlbmd0aDtcblxuXHRyZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGluY2x1ZGVkIHdpdGhpbiBhIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBmYWxscyB3aXRoaW4gdGhlIHJhbmdlOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEB1c2FnZU5vdGUgVGhlIHJhbmdlIHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzQmV0d2VlbigzLCAwLCA1KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDcsIDAsIDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuXHRyZXR1cm4gISh2YWx1ZSA8IE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB8fCB2YWx1ZSA+IE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdmFsdWUgZmFsbHMgd2l0aGluIGEgcmFuZ2U7IGlmIG5vdCBpdCBpcyBzbmFwcGVkIHRvIHRoZSBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgZWl0aGVyIHRoZSBudW1iZXIgYXMgcGFzc2VkLCBvciBpdHMgdmFsdWUgb25jZSBzbmFwcGVkIHRvIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG4gQHVzYWdlTm90ZSBUaGUgY29uc3RyYWludCB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgM1xuIGNvbnNvbGUubG9nKGNvbnN0cmFpbig3LCAwLCA1KSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RyYWluKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuXHRyZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSksIE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSk7XG59XG5cbi8qKlxuIENyZWF0ZXMgZXZlbmx5IHNwYWNlZCBudW1lcmljYWwgaW5jcmVtZW50cyBiZXR3ZWVuIHR3byBudW1iZXJzLlxuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAcGFyYW0gc3RlcHM6IFRoZSBudW1iZXIgb2YgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgYW4gQXJyYXkgY29tcHJpc2VkIG9mIHRoZSBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMCwgNSwgNCkpOyAvLyBUcmFjZXMgMSwyLDMsNFxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigxLCAzLCAzKSk7IC8vIFRyYWNlcyAxLjUsMiwyLjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGVwc0JldHdlZW4oYmVnaW4sIGVuZCwgc3RlcHMpIHtcblx0c3RlcHMrKztcblxuXHR2YXIgaSA9IDA7XG5cdHZhciBzdGVwc0JldHdlZW4gPSBbXTtcblx0dmFyIGluY3JlbWVudCA9IChlbmQgLSBiZWdpbikgLyBzdGVwcztcblxuXHR3aGlsZSAoKytpIDwgc3RlcHMpXG5cdFx0c3RlcHNCZXR3ZWVuLnB1c2goKGkgKiBpbmNyZW1lbnQpICsgYmVnaW4pO1xuXG5cdHJldHVybiBzdGVwc0JldHdlZW47XG59XG5cbi8qKlxuIERldGVybWluZXMgYSB2YWx1ZSBiZXR3ZWVuIHR3byBzcGVjaWZpZWQgdmFsdWVzLlxuXG4gQHBhcmFtIGFtb3VudDogVGhlIGxldmVsIG9mIGludGVycG9sYXRpb24gYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy4gSWYgPGNvZGU+MDwvY29kZT4sIDxjb2RlPmJlZ2luPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZDsgaWYgPGNvZGU+MTwvY29kZT4sIDxjb2RlPmVuZDwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGludGVycG9sYXRlKDAuNSwgMCwgMTApKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZShhbW91bnQsIGJlZ2luLCBlbmQpIHtcblx0cmV0dXJuIGJlZ2luICsgKGVuZCAtIGJlZ2luKSAqIGFtb3VudDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHBlcmNlbnRhZ2Ugb2YgYSB2YWx1ZSBpbiBhIGdpdmVuIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgdmFsdWUgdG8gYmUgY29udmVydGVkLlxuIEBwYXJhbSBtaW5pbXVtOiBUaGUgbG93ZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBtYXhpbXVtOiBUaGUgdXBwZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobm9ybWFsaXplKDgsIDQsIDIwKS5kZWNpbWFsUGVyY2VudGFnZSk7IC8vIFRyYWNlcyAwLjI1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG5cdHJldHVybiBuZXcgUGVyY2VudCgodmFsdWUgLSBtaW5pbXVtKSAvIChtYXhpbXVtIC0gbWluaW11bSkpO1xufVxuXG4vKipcbiBNYXBzIGEgdmFsdWUgZnJvbSBvbmUgY29vcmRpbmF0ZSBzcGFjZSB0byBhbm90aGVyLlxuXG4gQHBhcmFtIHZhbHVlOiBWYWx1ZSBmcm9tIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlIHRvIG1hcCB0byB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjE6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgxOiBFbmRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjI6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MjogRW5kaW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG1hcCgwLjc1LCAwLCAxLCAwLCAxMDApKTsgLy8gVHJhY2VzIDc1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG5cdHJldHVybiBtaW4yICsgKG1heDIgLSBtaW4yKSAqICgodmFsdWUgLSBtaW4xKSAvIChtYXgxIC0gbWluMSkpO1xufVxuXG4vKipcbiBMb3cgcGFzcyBmaWx0ZXIgYWxvZ3JpdGhtIGZvciBlYXNpbmcgYSB2YWx1ZSB0b3dhcmQgYSBkZXN0aW5hdGlvbiB2YWx1ZS4gV29ya3MgYmVzdCBmb3IgdHdlZW5pbmcgdmFsdWVzIHdoZW4gbm8gZGVmaW5pdGUgdGltZSBkdXJhdGlvbiBleGlzdHMgYW5kIHdoZW4gdGhlIGRlc3RpbmF0aW9uIHZhbHVlIGNoYW5nZXMuXG5cbiBJZiA8Y29kZT4oMC41IDwgbiA8IDEpPC9jb2RlPiwgdGhlbiB0aGUgcmVzdWx0aW5nIHZhbHVlcyB3aWxsIG92ZXJzaG9vdCAocGluZy1wb25nKSB1bnRpbCB0aGV5IHJlYWNoIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZS4gV2hlbiA8Y29kZT5uPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gMSwgYXMgaXRzIHZhbHVlIGluY3JlYXNlcywgdGhlIHRpbWUgaXQgdGFrZXMgdG8gcmVhY2ggdGhlIGRlc3RpbmF0aW9uIGFsc28gaW5jcmVhc2VzLiBBIHBsZWFzaW5nIHZhbHVlIGZvciA8Y29kZT5uPC9jb2RlPiBpcyA1LlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZS5cbiBAcGFyYW0gZGVzdDogVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuIEBwYXJhbSBuOiBUaGUgc2xvd2Rvd24gZmFjdG9yLlxuIEByZXR1cm4gVGhlIHdlaWdodGVkIGF2ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRlZEF2ZXJhZ2UodmFsdWUsIGRlc3QsIG4pIHtcblx0cmV0dXJuIHZhbHVlICsgKGRlc3QgLSB2YWx1ZSkgLyBuO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIlwiPC9jb2RlPi5cbiBAcGFyYW0gbWluTGVuZ3RoOiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIG51bWJlcjsgZGVmYXVsdHMgdG8gPGNvZGU+MCA8L2NvZGU+LlxuIEBwYXJhbSBmaWxsQ2hhcjogVGhlIGxlYWRpbmcgY2hhcmFjdGVyIHVzZWQgdG8gbWFrZSB0aGUgbnVtYmVyIHRoZSBtaW5pbXVtIGxlbmd0aDsgZGVmYXVsdHMgdG8gPGNvZGU+XCIwXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdCgxMjM0NTY3LCBcIixcIiwgOCkpOyAvLyBUcmFjZXMgMDEsMjM0LDU2N1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwga0RlbGltLCBtaW5MZW5ndGgsIGZpbGxDaGFyKSB7XG5cdGlmICgha0RlbGltKSB7XG5cdFx0a0RlbGltID0gXCIsXCI7XG5cdH1cblx0aWYgKGlzTmFOKG1pbkxlbmd0aCkpIHtcblx0XHRtaW5MZW5ndGggPSAwO1xuXHR9XG5cdGlmICghZmlsbENoYXIpIHtcblx0XHRmaWxsQ2hhciA9IFwiMFwiO1xuXHR9XG5cdHZhciByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG5cdHZhciBudW0gPSBNYXRoLmZsb29yKHZhbHVlKS50b1N0cmluZygpO1xuXHR2YXIgbGVuID0gbnVtLmxlbmd0aDtcblxuXHRpZiAobWluTGVuZ3RoICE9IDAgJiYgbWluTGVuZ3RoID4gbGVuKSB7XG5cdFx0bWluTGVuZ3RoIC09IGxlbjtcblxuXHRcdHZhciBhZGRDaGFyID0gZmlsbENoYXIgfHwgJzAnO1xuXG5cdFx0d2hpbGUgKG1pbkxlbmd0aC0tKVxuXHRcdFx0bnVtID0gYWRkQ2hhciArIG51bTtcblx0fVxuXG5cdGlmIChrRGVsaW0gIT0gbnVsbCAmJiBudW0ubGVuZ3RoID4gMykge1xuXHRcdHZhciB0b3RhbERlbGltICA9IE1hdGguZmxvb3IobnVtLmxlbmd0aCAvIDMpO1xuXHRcdHZhciB0b3RhbFJlbWFpbiA9IG51bS5sZW5ndGggJSAzO1xuXHRcdHZhciBudW1TcGxpdCAgID0gbnVtLnNwbGl0KCcnKTtcblx0XHR2YXIgaSA9IC0xO1xuXG5cdFx0d2hpbGUgKCsraSA8IHRvdGFsRGVsaW0pXG5cdFx0XHRudW1TcGxpdC5zcGxpY2UodG90YWxSZW1haW4gKyAoNCAqIGkpLCAwLCBrRGVsaW0pO1xuXG5cdFx0aWYgKHRvdGFsUmVtYWluID09IDApXG5cdFx0XHRudW1TcGxpdC5zaGlmdCgpO1xuXG5cdFx0bnVtID0gbnVtU3BsaXQuam9pbignJyk7XG5cdH1cblxuXHRpZiAocmVtYWluZGVyICE9IDApXG5cdFx0bnVtICs9IHJlbWFpbmRlci50b1N0cmluZygpLnN1YnN0cigxKTtcblxuXHRyZXR1cm4gbnVtO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgY3VycmVuY3kgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0gZm9yY2VEZWNpbWFsczogSWYgdGhlIG51bWJlciBzaG91bGQgYWx3YXlzIGhhdmUgdHdvIGRlY2ltYWwgcGxhY2VzIDxjb2RlPnRydWU8L2NvZGU+LCBvciBvbmx5IHNob3cgZGVjaW1hbHMgaXMgdGhlcmUgaXMgYSBkZWNpbWFscyB2YWx1ZSA8Y29kZT5mYWxzZTwvY29kZT47IGRlZmF1bHRzIHRvIDxjb2RlPnRydWU8L2NvZGU+LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiLFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXRDdXJyZW5jeSgxMjM0LjUpKTsgLy8gVHJhY2VzIFwiMSwyMzQuNTBcIlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlLCBmb3JjZURlY2ltYWxzLCBrRGVsaW0pIHtcblx0aWYgKGZvcmNlRGVjaW1hbHMgPT0gbnVsbCkge1xuXHRcdGZvcmNlRGVjaW1hbHMgPSB0cnVlO1xuXHR9XG5cdGlmICgha0RlbGltKSB7XG5cdFx0a0RlbGltICA9IFwiLFwiO1xuXHR9XG5cdHZhciByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG5cdHZhciBjdXJyZW5jeSA9IGZvcm1hdChNYXRoLmZsb29yKHZhbHVlKSwga0RlbGltKTtcblxuXHRpZiAocmVtYWluZGVyICE9IDAgfHwgZm9yY2VEZWNpbWFscylcblx0XHRjdXJyZW5jeSArPSByZW1haW5kZXIudG9GaXhlZCgyKS5zdWJzdHIoMSk7XG5cblx0cmV0dXJuIGN1cnJlbmN5O1xufVxuXG4vKipcbiBGaW5kcyB0aGUgZW5nbGlzaCBvcmRpbmFsIHN1ZmZpeCBmb3IgdGhlIG51bWJlciBnaXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGZpbmQgdGhlIG9yZGluYWwgc3VmZml4IG9mLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgc3VmZml4IGZvciB0aGUgbnVtYmVyLCAyIGNoYXJhY3RlcnMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZygzMiArIGdldE9yZGluYWxTdWZmaXgoMzIpKTsgLy8gVHJhY2VzIDMybmRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsU3VmZml4KHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSAyMClcblx0XHRyZXR1cm4gJ3RoJztcblxuXHRpZiAodmFsdWUgPT0gMClcblx0XHRyZXR1cm4gJyc7XG5cblx0c3dpdGNoICh2YWx1ZSAlIDEwKSB7XG5cdFx0Y2FzZSAzIDpcblx0XHRcdHJldHVybiAncmQnO1xuXHRcdGNhc2UgMiA6XG5cdFx0XHRyZXR1cm4gJ25kJztcblx0XHRjYXNlIDEgOlxuXHRcdFx0cmV0dXJuICdzdCc7XG5cdFx0ZGVmYXVsdCA6XG5cdFx0XHRyZXR1cm4gJ3RoJztcblx0fVxufVxuXG4vKipcbiBBZGRzIGEgbGVhZGluZyB6ZXJvIGZvciBudW1iZXJzIGxlc3MgdGhhbiB0ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBhZGQgbGVhZGluZyB6ZXJvLlxuIEByZXR1cm4gTnVtYmVyIGFzIGEgU3RyaW5nOyBpZiB0aGUgbnVtYmVyIHdhcyBsZXNzIHRoYW4gdGVuIHRoZSBudW1iZXIgd2lsbCBoYXZlIGEgbGVhZGluZyB6ZXJvLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oNykpOyAvLyBUcmFjZXMgMDdcbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybygxMSkpOyAvLyBUcmFjZXMgMTFcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVybyh2YWx1ZSkge1xuXHRyZXR1cm4gKHZhbHVlIDwgMTApID8gJzAnICsgdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpO1xufVxuXG4vKipcbiBTcGVsbHMgdGhlIHByb3ZpZGVkIG51bWJlci5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIHNwZWxsLiBOZWVkcyB0byBiZSBsZXNzIHRoYW4gOTk5OTk5OTk5LlxuIEByZXR1cm4gVGhlIG51bWJlciBzcGVsbGVkIG91dCBhcyBhIFN0cmluZy5cbiBAdGhyb3dzIDxjb2RlPkVycm9yPC9jb2RlPiBpZiA8Y29kZT52YWx1ZTwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDk5OTk5OTk5OS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHNwZWxsKDApKTsgLy8gVHJhY2VzIFplcm9cbiBjb25zb2xlLmxvZyhzcGVsbCgyMykpOyAvLyBUcmFjZXMgVHdlbnR5LVRocmVlXG4gY29uc29sZS5sb2coc3BlbGwoMjAwNTY3OCkpOyAvLyBUcmFjZXMgVHdvIE1pbGxpb24sIEZpdmUgVGhvdXNhbmQsIFNpeCBIdW5kcmVkIFNldmVudHktRWlnaHRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGVsbCh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPiA5OTk5OTk5OTkpIHtcblx0XHR0aHJvdyAoJ1ZhbHVlIHRvbyBsYXJnZSBmb3IgdGhpcyBtZXRob2QuJyk7XG5cdH1cblxuXHR2YXIgb25lc1NwZWxsaW5ncyA9IFsnJywgJ09uZScsICdUd28nLCAnVGhyZWUnLCAnRm91cicsICdGaXZlJywgJ1NpeCcsICdTZXZlbicsICdFaWdodCcsICdOaW5lJywgJ1RlbicsICdFbGV2ZW4nLCAnVHdlbHZlJywgJ1RoaXJ0ZWVuJywgJ0ZvdXJ0ZWVuJywgJ0ZpZnRlZW4nLCAnU2l4dGVlbicsICdTZXZlbnRlZW4nLCAnRWlnaHRlZW4nLCAnTmluZXRlZW4nXTtcblx0dmFyIHRlbnNTcGVsbGluZ3MgPSBbJycsICcnLCAnVHdlbnR5JywgJ1RoaXJ0eScsICdGb3J0eScsICdGaWZ0eScsICdTaXh0eScsICdTZXZlbnR5JywgJ0VpZ2h0eScsICdOaW5ldHknXTtcblx0dmFyIHNwZWxsaW5nICAgICAgID0gJyc7XG5cblx0dmFyIG1pbGxpb25zID0gdmFsdWUgLyAxMDAwMDAwO1xuXHR2YWx1ZSAgICAgICAgICAgICAgJT0gMTAwMDAwMDtcblxuXHR2YXIgdGhvdXNhbmRzID0gdmFsdWUgLyAxMDAwO1xuXHR2YWx1ZSAgICAgICAgICAgICAgICU9IDEwMDA7XG5cblx0dmFyIGh1bmRyZWRzID0gdmFsdWUgLyAxMDA7XG5cdHZhbHVlICAgICAgICAgICAgICAlPSAxMDA7XG5cblx0dmFyIHRlbnMgPSB2YWx1ZSAvIDEwO1xuXHR2YWx1ZSAgICAgICAgICAlPSAxMDtcblxuXHR2YXIgb25lcyA9IHZhbHVlICUgMTA7XG5cblx0aWYgKG1pbGxpb25zICE9IDApIHtcblx0XHRzcGVsbGluZyArPSAoc3BlbGxpbmcubGVuZ3RoID09IDApID8gJycgOiAnLCAnO1xuXHRcdHNwZWxsaW5nICs9IHNwZWxsKG1pbGxpb25zKSArICcgTWlsbGlvbic7XG5cdH1cblxuXHRpZiAodGhvdXNhbmRzICE9IDApIHtcblx0XHRzcGVsbGluZyArPSAoc3BlbGxpbmcubGVuZ3RoID09IDApID8gJycgOiAnLCAnO1xuXHRcdHNwZWxsaW5nICs9IHNwZWxsKHRob3VzYW5kcykgKyAnIFRob3VzYW5kJztcblx0fVxuXG5cdGlmIChodW5kcmVkcyAhPSAwKSB7XG5cdFx0c3BlbGxpbmcgKz0gKHNwZWxsaW5nLmxlbmd0aCA9PSAwKSA/ICcnIDogJywgJztcblx0XHRzcGVsbGluZyArPSBzcGVsbChodW5kcmVkcykgKyAnIEh1bmRyZWQnO1xuXHR9XG5cblx0aWYgKHRlbnMgIT0gMCB8fCBvbmVzICE9IDApIHtcblx0XHRzcGVsbGluZyArPSAoc3BlbGxpbmcubGVuZ3RoID09IDApID8gJycgOiAnICc7XG5cblx0XHRpZiAodGVucyA8IDIpXG5cdFx0XHRzcGVsbGluZyArPSBvbmVzU3BlbGxpbmdzW3RlbnMgKiAxMCArIG9uZXNdO1xuXHRcdGVsc2Uge1xuXHRcdFx0c3BlbGxpbmcgKz0gdGVuc1NwZWxsaW5nc1t0ZW5zXTtcblxuXHRcdFx0aWYgKG9uZXMgIT0gMClcblx0XHRcdFx0c3BlbGxpbmcgKz0gJy0nICsgb25lc1NwZWxsaW5nc1tvbmVzXTtcblx0XHR9XG5cdH1cblxuXHRpZiAoc3BlbGxpbmcubGVuZ3RoID09IDApXG5cdFx0cmV0dXJuICdaZXJvJztcblxuXHRyZXR1cm4gc3BlbGxpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG5cdGxldCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcblx0cmV0dXJuIGhleC5sZW5ndGggPT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXgocmdiKSB7XG5cdHJldHVybiBjb21wb25lbnRUb0hleChyZ2IucikgKyBjb21wb25lbnRUb0hleChyZ2IuZykgKyBjb21wb25lbnRUb0hleChyZ2IuYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcblx0bGV0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuXHRyZXR1cm4gcmVzdWx0ID8ge1xuXHRcdHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuXHRcdGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuXHRcdGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuXHRcdHRvU3RyaW5nOmZ1bmN0aW9uKCl7XG5cdFx0XHRyZXR1cm4gKFwicjpcIiArIHRoaXMuciArIFwiLGc6XCIgKyB0aGlzLmcgKyBcIixiOlwiICsgdGhpcy5iKVxuXHRcdH1cblx0fSA6IG51bGw7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrRXZlbnRNZXNzYWdlKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsID0gXCJcIikge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja0V2ZW50XCIsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrUGFnZU1lc3NhZ2UocGF0aCkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIiwgcGF0aCB9KTtcbn0iLCJpbXBvcnQge2FkZExlYWRpbmdaZXJvfSBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBTVBNKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGxldCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRsZXQgc2Vjb25kcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbXBtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUsIHNwYWNlQmV0d2VlbiA9IFwiXCIpIHtcblx0bGV0IGRhdGVEYXRhID0gdGltZUFNUE0oZGF0ZSk7XG5cdGxldCBzdHJUaW1lID0gZGF0ZURhdGEuaG91cnMgKyAnOicgKyBkYXRlRGF0YS5taW51dGVzICsgc3BhY2VCZXR3ZWVuICsgYW1wbTtcblx0cmV0dXJuIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFVUQ1N0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0RhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDSG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG91cnMoZGF0ZSwgaG91cnMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgbGV0IG1vbnRocyA9IHtcblx0ZW46W1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdGZyOltcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIiwgXCJKdWlsbGV0XCIsIFwiQW/Du3RcIiwgXCJTZXB0ZW1icmVcIiwgXCJPY3RvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEw6ljZW1icmVcIl1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlLCBsYW5ndWFnZSkge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0bGFuZ3VhZ2UgPSBcImVuXCI7XG5cdH1cblx0bGV0IG1vbnRoO1xuXHRzd2l0Y2gobGFuZ3VhZ2UpIHtcblx0XHRjYXNlIFwiZW5cIjpcblx0XHRcdG1vbnRoID0gbW9udGhzW2xhbmd1YWdlXVtkYXRlLmdldE1vbnRoKCldO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIG1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGJpcnRoRGF0ZSkge1xuXHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0aWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0YWdlLS07XG5cdH1cblx0cmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWF0QXNVVEMoZGF0ZSkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG5cdHJlc3VsdC5zZXRNaW51dGVzKHJlc3VsdC5nZXRNaW51dGVzKCkgLSByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1pbnV0ZSA9IDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckhvdXIgPSA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckhvdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1vbnRoID0gMzY1IC8gMTIgICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyWWVhciA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJZZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IHRleHQgPSBcIlwiO1xuXHRsZXQgeWVhcnNCZXR3ZWVuID0geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdGlmICh5ZWFyc0JldHdlZW4gPj0gMSkge1xuXHRcdGxldCB5ZWFyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoeWVhcnNCZXR3ZWVuKTtcblx0XHRpZiAoeWVhcnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXJzIGFnb1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXIgYWdvXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGxldCBtb250aHNCZXR3ZWVuID0gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdGlmIChtb250aHNCZXR3ZWVuID49IDEpIHtcblx0XHRcdGxldCBtb250aHNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1vbnRoc0JldHdlZW4pO1xuXHRcdFx0aWYgKG1vbnRoc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGhzIGFnb1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGggYWdvXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB3ZWVrc0JldHdlZW4gPSB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdGlmICh3ZWVrc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRsZXQgd2Vla3NCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHdlZWtzQmV0d2Vlbik7XG5cdFx0XHRcdGlmICh3ZWVrc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWtzIGFnb1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2VlayBhZ29cIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuID0gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRsZXQgZGF5c0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoZGF5c0JldHdlZW4pO1xuXHRcdFx0XHRcdGlmIChkYXlzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheXMgYWdvXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXkgYWdvXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW4gPSBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoaG91cnNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VycyBhZ29cIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91ciBhZ29cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuID0gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1pbnV0ZXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZSBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IFwiSnVzdCBub3dcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59IiwiaW1wb3J0IHsgdGltZUFNUE0gfSBmcm9tIFwiLi90c3VuYW1pL3V0aWxzL2RhdGVcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvIH0gZnJvbSBcIi4vdHN1bmFtaS91dGlscy9udW1iZXJcIjtcbmltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuL3ZpZXcvR0FCcmlkZ2VcIjtcblxuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImpzb25cIl0sIChyZXN1bHQpID0+IHtcbiAgICBsZXQgY29sb3JUaGVtZSA9IFwiRGFya1wiO1xuICAgIGlmKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0Lmpzb24pIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuanNvbik7XG4gICAgICAgICAgICBpZiAoZGF0YS5zZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIGNvbG9yVGhlbWUgPSBkYXRhLnNldHRpbmdzLmNvbG9yVGhlbWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgaXNDb2xvclRoZW1lTGlnaHQ7XG4gICAgc3dpdGNoIChjb2xvclRoZW1lKSB7XG4gICAgICAgIGNhc2UgXCJEYXJrXCI6XG4gICAgICAgIGNhc2UgXCJMaWdodFwiOlxuICAgICAgICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAoY29sb3JUaGVtZSA9PSBcIkxpZ2h0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgZGFya01vZGVNYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcbiAgICAgICAgICAgIGxldCBpc0RhcmtNb2RlID0gZGFya01vZGVNYXRjaE1lZGlhLm1hdGNoZXM7XG4gICAgICAgICAgICBpc0NvbG9yVGhlbWVMaWdodCA9ICFpc0RhcmtNb2RlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5zYy1kZWZhdWx0XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWUtbGlnaHRcIiwgaXNDb2xvclRoZW1lTGlnaHQpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpPT4ge1xuICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR4dCkge1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZUNvbG9yVGhlbWVcIjpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5zYy1kZWZhdWx0XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWUtbGlnaHRcIiwgbXNnLmlzQ29sb3JUaGVtZUxpZ2h0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVVwZGF0ZVZpZGVvXCI6XG4gICAgICAgICAgICB1cGRhdGVWaWRlbygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlVW5sb2FkVmlkZW9cIjpcbiAgICAgICAgICAgIHVubG9hZFZpZGVvKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVTaG93VmlkZW9cIjpcbiAgICAgICAgICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG5sZXQgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLXBsYXllcicpO1xucGxheWVyLnNldEF0dHJpYnV0ZShcIm11dGVkXCIsIFwidHJ1ZVwiKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBcInRydWVcIik7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJ0cnVlXCIpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnMScpO1xucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgZGlzcGF0Y2hWaWRlb0hlaWd0aCgpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoVmlkZW9IZWlndGgoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuZ2V0QmFja2dyb3VuZFBhZ2UoKHBhZ2UpID0+IHtcbiAgICAgICAgbGV0IG1zZyA9IHsgdHh0OiBcInNjcm9sbENhcHR1cmVWaWRlb0hlaWdodFwiLCBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IH07XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHBhZ2UudGFiSWQsIG1zZyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZpZGVvKCkge1xuICAgIGNocm9tZS5ydW50aW1lLmdldEJhY2tncm91bmRQYWdlKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChwYWdlLnZpZGVvVVJMKSB7XG4gICAgICAgICAgICBwbGF5ZXIuc3JjID0gcGFnZS52aWRlb1VSTDtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCBhbXBtVGltZSA9IHRpbWVBTVBNKGRhdGUpO1xuICAgICAgICAgICAgLy8gU2NyZWVuIFNob3QgMjAyMC0wMy0yMCBhdCA0LjM1LjE0IFBNXG4gICAgICAgICAgICBsZXQgZGF0ZURhdGEgPSB7XG4gICAgICAgICAgICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgICAgICAgICBkYXRlOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhbXBtVGltZS5hbXBtID0gYW1wbVRpbWUuYW1wbS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IHZpZGVvRmlsZU5hbWUgPSBgU2Nyb2xsIENhcHR1cmUgJHtkYXRlRGF0YS55ZWFyfS0ke2RhdGVEYXRhLm1vbnRofS0ke2RhdGVEYXRhLmRhdGV9IGF0ICR7YW1wbVRpbWUuaG91cnN9LiR7YW1wbVRpbWUubWludXRlc30uJHthbXBtVGltZS5zZWNvbmRzfSAke2FtcG1UaW1lLmFtcG19LndlYm1gO1xuXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLnNjLWRvd25sb2FkLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBidXR0b25zW2ldO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5ocmVmID0gcGFnZS52aWRlb1VSTDtcbiAgICAgICAgICAgICAgICBidXR0b24uZG93bmxvYWQgPSB2aWRlb0ZpbGVOYW1lO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJkb3dubG9hZFwiLCBcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZpbGVOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYy12aWRlby1maWxlbmFtZSBhLnNjLWRvd25sb2FkLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGZpbGVOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gdmlkZW9GaWxlTmFtZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1bmxvYWRWaWRlbygpIHtcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICBwbGF5ZXIucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICBwbGF5ZXIubG9hZCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=