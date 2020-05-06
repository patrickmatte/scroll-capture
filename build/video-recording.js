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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0FCcmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2pzL3ZpZGVvLXJlY29yZGluZy5qcyJdLCJuYW1lcyI6WyJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJNYXRoIiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZmxvb3IiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwicm91bmREZWNpbWFsVG9QbGFjZSIsInBsYWNlIiwicCIsInBvdyIsInJvdW5kIiwicm91bmREZWNpbWFsVG8xIiwicm91bmREZWNpbWFsVG8yIiwicm91bmREZWNpbWFsVG8zIiwibG9vcEluZGV4IiwiaW5kZXgiLCJsZW5ndGgiLCJpc0JldHdlZW4iLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJjb25zdHJhaW4iLCJjcmVhdGVTdGVwc0JldHdlZW4iLCJiZWdpbiIsImVuZCIsInN0ZXBzIiwic3RlcHNCZXR3ZWVuIiwiaW5jcmVtZW50IiwicHVzaCIsImludGVycG9sYXRlIiwiYW1vdW50Iiwibm9ybWFsaXplIiwibWluaW11bSIsIm1heGltdW0iLCJQZXJjZW50IiwibWFwIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImdldFdlaWdodGVkQXZlcmFnZSIsImRlc3QiLCJuIiwiZm9ybWF0Iiwia0RlbGltIiwibWluTGVuZ3RoIiwiZmlsbENoYXIiLCJpc05hTiIsInJlbWFpbmRlciIsIm51bSIsInRvU3RyaW5nIiwibGVuIiwiYWRkQ2hhciIsInRvdGFsRGVsaW0iLCJ0b3RhbFJlbWFpbiIsIm51bVNwbGl0Iiwic3BsaXQiLCJzcGxpY2UiLCJzaGlmdCIsImpvaW4iLCJzdWJzdHIiLCJmb3JtYXRDdXJyZW5jeSIsImZvcmNlRGVjaW1hbHMiLCJjdXJyZW5jeSIsInRvRml4ZWQiLCJnZXRPcmRpbmFsU3VmZml4IiwiYWRkTGVhZGluZ1plcm8iLCJzcGVsbCIsIm9uZXNTcGVsbGluZ3MiLCJ0ZW5zU3BlbGxpbmdzIiwic3BlbGxpbmciLCJtaWxsaW9ucyIsInRob3VzYW5kcyIsImh1bmRyZWRzIiwidGVucyIsIm9uZXMiLCJjb21wb25lbnRUb0hleCIsImMiLCJoZXgiLCJyZ2JUb0hleCIsInJnYiIsInIiLCJnIiwiYiIsImhleFRvUmdiIiwicmVzdWx0IiwiZXhlYyIsInBhcnNlSW50Iiwic2VuZFRyYWNrRXZlbnRNZXNzYWdlIiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInR4dCIsInNlbmRUcmFja1BhZ2VNZXNzYWdlIiwicGF0aCIsInRpbWVBTVBNIiwiZGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJhbXBtIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdEFNUE0iLCJzcGFjZUJldHdlZW4iLCJkYXRlRGF0YSIsInN0clRpbWUiLCJ0b1VuaXhTdHJpbmciLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsInRvVW5peFVUQ1N0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsImFkZEhvdXJzIiwic2V0VGltZSIsImdldFRpbWUiLCJhZGREYXlzIiwiZGF5cyIsIm1vbnRocyIsImVuIiwiZnIiLCJsYW5ndWFnZSIsIm1vbnRoIiwiZ2V0QWdlIiwiYmlydGhEYXRlIiwidG9kYXkiLCJEYXRlIiwiYWdlIiwibSIsInRyZWF0QXNVVEMiLCJzZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJtaW51dGVzQmV0d2VlbiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJtaWxsaXNlY29uZHNQZXJNaW51dGUiLCJob3Vyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJIb3VyIiwiZGF5c0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJEYXkiLCJ3ZWVrc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJXZWVrIiwibW9udGhzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1Blck1vbnRoIiwieWVhcnNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyWWVhciIsImdldEZhbWlsaWFyVGltZUJldHdlZW4iLCJ0ZXh0IiwieWVhcnNCZXR3ZWVuRmxvb3IiLCJtb250aHNCZXR3ZWVuRmxvb3IiLCJ3ZWVrc0JldHdlZW5GbG9vciIsImRheXNCZXR3ZWVuRmxvb3IiLCJob3Vyc0JldHdlZW5GbG9vciIsIm1pbnV0ZXNCZXR3ZWVuRmxvb3IiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJjb2xvclRoZW1lIiwianNvbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzZXR0aW5ncyIsImNvbG9yVGhlbWVzIiwiaXNDb2xvclRoZW1lTGlnaHQiLCJkYXJrTW9kZU1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaXNEYXJrTW9kZSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoVmlkZW9IZWlndGgiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInVwZGF0ZVZpZGVvIiwidW5sb2FkVmlkZW8iLCJwbGF5ZXIiLCJnZXRCYWNrZ3JvdW5kUGFnZSIsInBhZ2UiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwidGFiSWQiLCJ2aWRlb1VSTCIsInNyYyIsImFtcG1UaW1lIiwieWVhciIsInRvVXBwZXJDYXNlIiwidmlkZW9GaWxlTmFtZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwiaHJlZiIsImRvd25sb2FkIiwiZmlsZU5hbWVCdXR0b24iLCJ0ZXh0Q29udGVudCIsInBhdXNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDTyxTQUFTQSxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQzVDLFNBQU9DLElBQUksQ0FBQ0MsTUFBTCxNQUFpQkYsR0FBRyxHQUFHRCxH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QUFDbEcsT0FBdkcsY0FBa0hrRyxRQUFRLENBQUNoRyxPQUEzSCxjQUFzSWdHLFFBQVEsQ0FBQ25HLElBQS9JLFVBQWpCO0FBRUEsVUFBSXVHLE9BQU8sR0FBRzFCLFFBQVEsQ0FBQzJCLGdCQUFULENBQTBCLHNCQUExQixDQUFkOztBQUNBLFdBQUssSUFBSXhNLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd1TSxPQUFPLENBQUM1TCxNQUE1QixFQUFvQ1gsQ0FBQyxFQUFyQyxFQUF5QztBQUNyQyxZQUFJeU0sTUFBTSxHQUFHRixPQUFPLENBQUN2TSxDQUFELENBQXBCO0FBQ0F5TSxjQUFNLENBQUNDLElBQVAsR0FBY2QsSUFBSSxDQUFDSyxRQUFuQjtBQUNBUSxjQUFNLENBQUNFLFFBQVAsR0FBa0JMLGFBQWxCO0FBQ0FHLGNBQU0sQ0FBQ3hCLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDbkMvRiwyREFBcUIsQ0FBQyxVQUFELEVBQWEsT0FBYixDQUFyQjtBQUNILFNBRkQ7QUFHSDs7QUFDRCxVQUFJMEgsY0FBYyxHQUFHL0IsUUFBUSxDQUFDRSxhQUFULENBQXVCLHlDQUF2QixDQUFyQjtBQUNBNkIsb0JBQWMsQ0FBQ0MsV0FBZixHQUE2QlAsYUFBN0I7QUFDSDtBQUNKLEdBMUJEO0FBMkJIOztBQUVELFNBQVNiLFdBQVQsR0FBdUI7QUFDbkJDLFFBQU0sQ0FBQ29CLEtBQVAsR0FEbUIsQ0FFbkI7QUFDQTtBQUNILEMiLCJmaWxlIjoidmlkZW8tcmVjb3JkaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDYpO1xuIiwiXG4vLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBtaW4gKyAoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG5cdHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG5cdHJldHVybiAodmFsdWUgJiAxKSA9PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcblx0cmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuXHRyZXR1cm4gKHZhbHVlICUgMSkgPT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuXHRpZiAodmFsdWUgPT0gMSB8fCB2YWx1ZSA9PSAyKVxuXHRcdHJldHVybiB0cnVlO1xuXG5cdGlmIChpc0V2ZW4odmFsdWUpKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHR2YXIgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG5cdGZvciAodmFyIGkgPSAzOyBpIDw9IHM7IGkrKylcblx0aWYgKHZhbHVlICUgaSA9PSAwKVxuXHRcdHJldHVybiBmYWxzZTtcblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEpIHtcblx0dmFyIHAgPSBNYXRoLnBvdygxMCwgcGxhY2UpO1xuXG5cdHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogcCkgLyBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG8xKHZhbHVlKSB7XG5cdHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kRGVjaW1hbFRvMih2YWx1ZSkge1xuXHRyZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUbzModmFsdWUpIHtcblx0cmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDMpO1xufVxuXG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcblx0aWYgKGluZGV4IDwgMClcblx0XHRpbmRleCA9IGxlbmd0aCArIGluZGV4ICUgbGVuZ3RoO1xuXG5cdGlmIChpbmRleCA+PSBsZW5ndGgpXG5cdFx0cmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuXG5cdHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgdmFsdWUgaXMgaW5jbHVkZWQgd2l0aGluIGEgcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQHVzYWdlTm90ZSBUaGUgcmFuZ2UgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDMsIDAsIDUpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG5cdHJldHVybiAhKHZhbHVlIDwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHx8IHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB2YWx1ZSBmYWxscyB3aXRoaW4gYSByYW5nZTsgaWYgbm90IGl0IGlzIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyBlaXRoZXIgdGhlIG51bWJlciBhcyBwYXNzZWQsIG9yIGl0cyB2YWx1ZSBvbmNlIHNuYXBwZWQgdG8gbmVhcmVzdCByYW5nZSB2YWx1ZS5cbiBAdXNhZ2VOb3RlIFRoZSBjb25zdHJhaW50IHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNvbnN0cmFpbigzLCAwLCA1KSk7IC8vIFRyYWNlcyAzXG4gY29uc29sZS5sb2coY29uc3RyYWluKDcsIDAsIDUpKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJhaW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG5cdHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKSwgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBldmVubHkgc3BhY2VkIG51bWVyaWNhbCBpbmNyZW1lbnRzIGJldHdlZW4gdHdvIG51bWJlcnMuXG5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBwYXJhbSBzdGVwczogVGhlIG51bWJlciBvZiBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyBhbiBBcnJheSBjb21wcmlzZWQgb2YgdGhlIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigwLCA1LCA0KSk7IC8vIFRyYWNlcyAxLDIsMyw0XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDEsIDMsIDMpKTsgLy8gVHJhY2VzIDEuNSwyLDIuNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBzQmV0d2VlbihiZWdpbiwgZW5kLCBzdGVwcykge1xuXHRzdGVwcysrO1xuXG5cdHZhciBpID0gMDtcblx0dmFyIHN0ZXBzQmV0d2VlbiA9IFtdO1xuXHR2YXIgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG5cdHdoaWxlICgrK2kgPCBzdGVwcylcblx0XHRzdGVwc0JldHdlZW4ucHVzaCgoaSAqIGluY3JlbWVudCkgKyBiZWdpbik7XG5cblx0cmV0dXJuIHN0ZXBzQmV0d2Vlbjtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHZhbHVlIGJldHdlZW4gdHdvIHNwZWNpZmllZCB2YWx1ZXMuXG5cbiBAcGFyYW0gYW1vdW50OiBUaGUgbGV2ZWwgb2YgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLiBJZiA8Y29kZT4wPC9jb2RlPiwgPGNvZGU+YmVnaW48L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkOyBpZiA8Y29kZT4xPC9jb2RlPiwgPGNvZGU+ZW5kPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZC5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaW50ZXJwb2xhdGUoMC41LCAwLCAxMCkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlKGFtb3VudCwgYmVnaW4sIGVuZCkge1xuXHRyZXR1cm4gYmVnaW4gKyAoZW5kIC0gYmVnaW4pICogYW1vdW50O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgcGVyY2VudGFnZSBvZiBhIHZhbHVlIGluIGEgZ2l2ZW4gcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQuXG4gQHBhcmFtIG1pbmltdW06IFRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIG1heGltdW06IFRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhub3JtYWxpemUoOCwgNCwgMjApLmRlY2ltYWxQZXJjZW50YWdlKTsgLy8gVHJhY2VzIDAuMjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIG1pbmltdW0sIG1heGltdW0pIHtcblx0cmV0dXJuIG5ldyBQZXJjZW50KCh2YWx1ZSAtIG1pbmltdW0pIC8gKG1heGltdW0gLSBtaW5pbXVtKSk7XG59XG5cbi8qKlxuIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSBjb29yZGluYXRlIHNwYWNlIHRvIGFub3RoZXIuXG5cbiBAcGFyYW0gdmFsdWU6IFZhbHVlIGZyb20gdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UgdG8gbWFwIHRvIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMTogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDE6IEVuZGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMjogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgyOiBFbmRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobWFwKDAuNzUsIDAsIDEsIDAsIDEwMCkpOyAvLyBUcmFjZXMgNzVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcblx0cmV0dXJuIG1pbjIgKyAobWF4MiAtIG1pbjIpICogKCh2YWx1ZSAtIG1pbjEpIC8gKG1heDEgLSBtaW4xKSk7XG59XG5cbi8qKlxuIExvdyBwYXNzIGZpbHRlciBhbG9ncml0aG0gZm9yIGVhc2luZyBhIHZhbHVlIHRvd2FyZCBhIGRlc3RpbmF0aW9uIHZhbHVlLiBXb3JrcyBiZXN0IGZvciB0d2VlbmluZyB2YWx1ZXMgd2hlbiBubyBkZWZpbml0ZSB0aW1lIGR1cmF0aW9uIGV4aXN0cyBhbmQgd2hlbiB0aGUgZGVzdGluYXRpb24gdmFsdWUgY2hhbmdlcy5cblxuIElmIDxjb2RlPigwLjUgPCBuIDwgMSk8L2NvZGU+LCB0aGVuIHRoZSByZXN1bHRpbmcgdmFsdWVzIHdpbGwgb3ZlcnNob290IChwaW5nLXBvbmcpIHVudGlsIHRoZXkgcmVhY2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlLiBXaGVuIDxjb2RlPm48L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiAxLCBhcyBpdHMgdmFsdWUgaW5jcmVhc2VzLCB0aGUgdGltZSBpdCB0YWtlcyB0byByZWFjaCB0aGUgZGVzdGluYXRpb24gYWxzbyBpbmNyZWFzZXMuIEEgcGxlYXNpbmcgdmFsdWUgZm9yIDxjb2RlPm48L2NvZGU+IGlzIDUuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlLlxuIEBwYXJhbSBkZXN0OiBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gQHBhcmFtIG46IFRoZSBzbG93ZG93biBmYWN0b3IuXG4gQHJldHVybiBUaGUgd2VpZ2h0ZWQgYXZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodGVkQXZlcmFnZSh2YWx1ZSwgZGVzdCwgbikge1xuXHRyZXR1cm4gdmFsdWUgKyAoZGVzdCAtIHZhbHVlKSAvIG47XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiXCI8L2NvZGU+LlxuIEBwYXJhbSBtaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgbnVtYmVyOyBkZWZhdWx0cyB0byA8Y29kZT4wIDwvY29kZT4uXG4gQHBhcmFtIGZpbGxDaGFyOiBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdXNlZCB0byBtYWtlIHRoZSBudW1iZXIgdGhlIG1pbmltdW0gbGVuZ3RoOyBkZWZhdWx0cyB0byA8Y29kZT5cIjBcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0KDEyMzQ1NjcsIFwiLFwiLCA4KSk7IC8vIFRyYWNlcyAwMSwyMzQsNTY3XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBrRGVsaW0sIG1pbkxlbmd0aCwgZmlsbENoYXIpIHtcblx0aWYgKCFrRGVsaW0pIHtcblx0XHRrRGVsaW0gPSBcIixcIjtcblx0fVxuXHRpZiAoaXNOYU4obWluTGVuZ3RoKSkge1xuXHRcdG1pbkxlbmd0aCA9IDA7XG5cdH1cblx0aWYgKCFmaWxsQ2hhcikge1xuXHRcdGZpbGxDaGFyID0gXCIwXCI7XG5cdH1cblx0dmFyIHJlbWFpbmRlciA9IHZhbHVlICUgMTtcblx0dmFyIG51bSA9IE1hdGguZmxvb3IodmFsdWUpLnRvU3RyaW5nKCk7XG5cdHZhciBsZW4gPSBudW0ubGVuZ3RoO1xuXG5cdGlmIChtaW5MZW5ndGggIT0gMCAmJiBtaW5MZW5ndGggPiBsZW4pIHtcblx0XHRtaW5MZW5ndGggLT0gbGVuO1xuXG5cdFx0dmFyIGFkZENoYXIgPSBmaWxsQ2hhciB8fCAnMCc7XG5cblx0XHR3aGlsZSAobWluTGVuZ3RoLS0pXG5cdFx0XHRudW0gPSBhZGRDaGFyICsgbnVtO1xuXHR9XG5cblx0aWYgKGtEZWxpbSAhPSBudWxsICYmIG51bS5sZW5ndGggPiAzKSB7XG5cdFx0dmFyIHRvdGFsRGVsaW0gID0gTWF0aC5mbG9vcihudW0ubGVuZ3RoIC8gMyk7XG5cdFx0dmFyIHRvdGFsUmVtYWluID0gbnVtLmxlbmd0aCAlIDM7XG5cdFx0dmFyIG51bVNwbGl0ICAgPSBudW0uc3BsaXQoJycpO1xuXHRcdHZhciBpID0gLTE7XG5cblx0XHR3aGlsZSAoKytpIDwgdG90YWxEZWxpbSlcblx0XHRcdG51bVNwbGl0LnNwbGljZSh0b3RhbFJlbWFpbiArICg0ICogaSksIDAsIGtEZWxpbSk7XG5cblx0XHRpZiAodG90YWxSZW1haW4gPT0gMClcblx0XHRcdG51bVNwbGl0LnNoaWZ0KCk7XG5cblx0XHRudW0gPSBudW1TcGxpdC5qb2luKCcnKTtcblx0fVxuXG5cdGlmIChyZW1haW5kZXIgIT0gMClcblx0XHRudW0gKz0gcmVtYWluZGVyLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuXG5cdHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuXHRpZiAoZm9yY2VEZWNpbWFscyA9PSBudWxsKSB7XG5cdFx0Zm9yY2VEZWNpbWFscyA9IHRydWU7XG5cdH1cblx0aWYgKCFrRGVsaW0pIHtcblx0XHRrRGVsaW0gID0gXCIsXCI7XG5cdH1cblx0dmFyIHJlbWFpbmRlciA9IHZhbHVlICUgMTtcblx0dmFyIGN1cnJlbmN5ID0gZm9ybWF0KE1hdGguZmxvb3IodmFsdWUpLCBrRGVsaW0pO1xuXG5cdGlmIChyZW1haW5kZXIgIT0gMCB8fCBmb3JjZURlY2ltYWxzKVxuXHRcdGN1cnJlbmN5ICs9IHJlbWFpbmRlci50b0ZpeGVkKDIpLnN1YnN0cigxKTtcblxuXHRyZXR1cm4gY3VycmVuY3k7XG59XG5cbi8qKlxuIEZpbmRzIHRoZSBlbmdsaXNoIG9yZGluYWwgc3VmZml4IGZvciB0aGUgbnVtYmVyIGdpdmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZmluZCB0aGUgb3JkaW5hbCBzdWZmaXggb2YuXG4gQHJldHVybiBSZXR1cm5zIHRoZSBzdWZmaXggZm9yIHRoZSBudW1iZXIsIDIgY2hhcmFjdGVycy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKDMyICsgZ2V0T3JkaW5hbFN1ZmZpeCgzMikpOyAvLyBUcmFjZXMgMzJuZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodmFsdWUpIHtcblx0aWYgKHZhbHVlID49IDEwICYmIHZhbHVlIDw9IDIwKVxuXHRcdHJldHVybiAndGgnO1xuXG5cdGlmICh2YWx1ZSA9PSAwKVxuXHRcdHJldHVybiAnJztcblxuXHRzd2l0Y2ggKHZhbHVlICUgMTApIHtcblx0XHRjYXNlIDMgOlxuXHRcdFx0cmV0dXJuICdyZCc7XG5cdFx0Y2FzZSAyIDpcblx0XHRcdHJldHVybiAnbmQnO1xuXHRcdGNhc2UgMSA6XG5cdFx0XHRyZXR1cm4gJ3N0Jztcblx0XHRkZWZhdWx0IDpcblx0XHRcdHJldHVybiAndGgnO1xuXHR9XG59XG5cbi8qKlxuIEFkZHMgYSBsZWFkaW5nIHplcm8gZm9yIG51bWJlcnMgbGVzcyB0aGFuIHRlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGFkZCBsZWFkaW5nIHplcm8uXG4gQHJldHVybiBOdW1iZXIgYXMgYSBTdHJpbmc7IGlmIHRoZSBudW1iZXIgd2FzIGxlc3MgdGhhbiB0ZW4gdGhlIG51bWJlciB3aWxsIGhhdmUgYSBsZWFkaW5nIHplcm8uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybyg3KSk7IC8vIFRyYWNlcyAwN1xuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDExKSk7IC8vIFRyYWNlcyAxMVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvKHZhbHVlKSB7XG5cdHJldHVybiAodmFsdWUgPCAxMCkgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuIFNwZWxscyB0aGUgcHJvdmlkZWQgbnVtYmVyLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gc3BlbGwuIE5lZWRzIHRvIGJlIGxlc3MgdGhhbiA5OTk5OTk5OTkuXG4gQHJldHVybiBUaGUgbnVtYmVyIHNwZWxsZWQgb3V0IGFzIGEgU3RyaW5nLlxuIEB0aHJvd3MgPGNvZGU+RXJyb3I8L2NvZGU+IGlmIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gOTk5OTk5OTk5LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coc3BlbGwoMCkpOyAvLyBUcmFjZXMgWmVyb1xuIGNvbnNvbGUubG9nKHNwZWxsKDIzKSk7IC8vIFRyYWNlcyBUd2VudHktVGhyZWVcbiBjb25zb2xlLmxvZyhzcGVsbCgyMDA1Njc4KSk7IC8vIFRyYWNlcyBUd28gTWlsbGlvbiwgRml2ZSBUaG91c2FuZCwgU2l4IEh1bmRyZWQgU2V2ZW50eS1FaWdodFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwZWxsKHZhbHVlKSB7XG5cdGlmICh2YWx1ZSA+IDk5OTk5OTk5OSkge1xuXHRcdHRocm93ICgnVmFsdWUgdG9vIGxhcmdlIGZvciB0aGlzIG1ldGhvZC4nKTtcblx0fVxuXG5cdHZhciBvbmVzU3BlbGxpbmdzID0gWycnLCAnT25lJywgJ1R3bycsICdUaHJlZScsICdGb3VyJywgJ0ZpdmUnLCAnU2l4JywgJ1NldmVuJywgJ0VpZ2h0JywgJ05pbmUnLCAnVGVuJywgJ0VsZXZlbicsICdUd2VsdmUnLCAnVGhpcnRlZW4nLCAnRm91cnRlZW4nLCAnRmlmdGVlbicsICdTaXh0ZWVuJywgJ1NldmVudGVlbicsICdFaWdodGVlbicsICdOaW5ldGVlbiddO1xuXHR2YXIgdGVuc1NwZWxsaW5ncyA9IFsnJywgJycsICdUd2VudHknLCAnVGhpcnR5JywgJ0ZvcnR5JywgJ0ZpZnR5JywgJ1NpeHR5JywgJ1NldmVudHknLCAnRWlnaHR5JywgJ05pbmV0eSddO1xuXHR2YXIgc3BlbGxpbmcgICAgICAgPSAnJztcblxuXHR2YXIgbWlsbGlvbnMgPSB2YWx1ZSAvIDEwMDAwMDA7XG5cdHZhbHVlICAgICAgICAgICAgICAlPSAxMDAwMDAwO1xuXG5cdHZhciB0aG91c2FuZHMgPSB2YWx1ZSAvIDEwMDA7XG5cdHZhbHVlICAgICAgICAgICAgICAgJT0gMTAwMDtcblxuXHR2YXIgaHVuZHJlZHMgPSB2YWx1ZSAvIDEwMDtcblx0dmFsdWUgICAgICAgICAgICAgICU9IDEwMDtcblxuXHR2YXIgdGVucyA9IHZhbHVlIC8gMTA7XG5cdHZhbHVlICAgICAgICAgICU9IDEwO1xuXG5cdHZhciBvbmVzID0gdmFsdWUgJSAxMDtcblxuXHRpZiAobWlsbGlvbnMgIT0gMCkge1xuXHRcdHNwZWxsaW5nICs9IChzcGVsbGluZy5sZW5ndGggPT0gMCkgPyAnJyA6ICcsICc7XG5cdFx0c3BlbGxpbmcgKz0gc3BlbGwobWlsbGlvbnMpICsgJyBNaWxsaW9uJztcblx0fVxuXG5cdGlmICh0aG91c2FuZHMgIT0gMCkge1xuXHRcdHNwZWxsaW5nICs9IChzcGVsbGluZy5sZW5ndGggPT0gMCkgPyAnJyA6ICcsICc7XG5cdFx0c3BlbGxpbmcgKz0gc3BlbGwodGhvdXNhbmRzKSArICcgVGhvdXNhbmQnO1xuXHR9XG5cblx0aWYgKGh1bmRyZWRzICE9IDApIHtcblx0XHRzcGVsbGluZyArPSAoc3BlbGxpbmcubGVuZ3RoID09IDApID8gJycgOiAnLCAnO1xuXHRcdHNwZWxsaW5nICs9IHNwZWxsKGh1bmRyZWRzKSArICcgSHVuZHJlZCc7XG5cdH1cblxuXHRpZiAodGVucyAhPSAwIHx8IG9uZXMgIT0gMCkge1xuXHRcdHNwZWxsaW5nICs9IChzcGVsbGluZy5sZW5ndGggPT0gMCkgPyAnJyA6ICcgJztcblxuXHRcdGlmICh0ZW5zIDwgMilcblx0XHRcdHNwZWxsaW5nICs9IG9uZXNTcGVsbGluZ3NbdGVucyAqIDEwICsgb25lc107XG5cdFx0ZWxzZSB7XG5cdFx0XHRzcGVsbGluZyArPSB0ZW5zU3BlbGxpbmdzW3RlbnNdO1xuXG5cdFx0XHRpZiAob25lcyAhPSAwKVxuXHRcdFx0XHRzcGVsbGluZyArPSAnLScgKyBvbmVzU3BlbGxpbmdzW29uZXNdO1xuXHRcdH1cblx0fVxuXG5cdGlmIChzcGVsbGluZy5sZW5ndGggPT0gMClcblx0XHRyZXR1cm4gJ1plcm8nO1xuXG5cdHJldHVybiBzcGVsbGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcblx0bGV0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuXHRyZXR1cm4gaGV4Lmxlbmd0aCA9PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcblx0cmV0dXJuIGNvbXBvbmVudFRvSGV4KHJnYi5yKSArIGNvbXBvbmVudFRvSGV4KHJnYi5nKSArIGNvbXBvbmVudFRvSGV4KHJnYi5iKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuXHRsZXQgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG5cdHJldHVybiByZXN1bHQgPyB7XG5cdFx0cjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG5cdFx0ZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG5cdFx0YjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG5cdFx0dG9TdHJpbmc6ZnVuY3Rpb24oKXtcblx0XHRcdHJldHVybiAoXCJyOlwiICsgdGhpcy5yICsgXCIsZzpcIiArIHRoaXMuZyArIFwiLGI6XCIgKyB0aGlzLmIpXG5cdFx0fVxuXHR9IDogbnVsbDtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgPSBcIlwiKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnRcIiwgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZVwiLCBwYXRoIH0pO1xufSIsImltcG9ydCB7YWRkTGVhZGluZ1plcm99IGZyb20gXCIuL251bWJlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZUFNUE0oZGF0ZSkge1xuXHRsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG5cdGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0bGV0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSk7XG5cdGxldCBzZWNvbmRzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xuXHRob3VycyA9IGhvdXJzICUgMTI7XG5cdGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcblx0cmV0dXJuIHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGFtcG0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFNUE0oZGF0ZSwgc3BhY2VCZXR3ZWVuID0gXCJcIikge1xuXHRsZXQgZGF0ZURhdGEgPSB0aW1lQU1QTShkYXRlKTtcblx0bGV0IHN0clRpbWUgPSBkYXRlRGF0YS5ob3VycyArICc6JyArIGRhdGVEYXRhLm1pbnV0ZXMgKyBzcGFjZUJldHdlZW4gKyBhbXBtO1xuXHRyZXR1cm4gc3RyVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFN0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4VVRDU3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDRGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ1NlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb3VycyhkYXRlLCBob3Vycykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoaG91cnMgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBsZXQgbW9udGhzID0ge1xuXHRlbjpbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcblx0ZnI6W1wiSmFudmllclwiLCBcIkbDqXZyaWVyXCIsIFwiTWFyc1wiLCBcIkF2cmlsXCIsIFwiTWFpXCIsIFwiSnVpblwiLCBcIkp1aWxsZXRcIiwgXCJBb8O7dFwiLCBcIlNlcHRlbWJyZVwiLCBcIk9jdG9icmVcIiwgXCJOb3ZlbWJyZVwiLCBcIkTDqWNlbWJyZVwiXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGUsIGxhbmd1YWdlKSB7XG5cdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRsYW5ndWFnZSA9IFwiZW5cIjtcblx0fVxuXHRsZXQgbW9udGg7XG5cdHN3aXRjaChsYW5ndWFnZSkge1xuXHRcdGNhc2UgXCJlblwiOlxuXHRcdFx0bW9udGggPSBtb250aHNbbGFuZ3VhZ2VdW2RhdGUuZ2V0TW9udGgoKV07XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gbW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZ2UoYmlydGhEYXRlKSB7XG5cdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdGxldCBhZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdGxldCBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuXHRpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcblx0XHRhZ2UtLTtcblx0fVxuXHRyZXR1cm4gYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJlYXRBc1VUQyhkYXRlKSB7XG5cdGxldCByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcblx0cmVzdWx0LnNldE1pbnV0ZXMocmVzdWx0LmdldE1pbnV0ZXMoKSAtIHJlc3VsdC5nZXRUaW1lem9uZU9mZnNldCgpKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTWludXRlID0gNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTWludXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVySG91ciA9IDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVySG91cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckRheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlcldlZWsgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlcldlZWs7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTW9udGggPSAzNjUgLyAxMiAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJZZWFyID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlclllYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYW1pbGlhclRpbWVCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgdGV4dCA9IFwiXCI7XG5cdGxldCB5ZWFyc0JldHdlZW4gPSB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0aWYgKHllYXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0bGV0IHllYXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih5ZWFyc0JldHdlZW4pO1xuXHRcdGlmICh5ZWFyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhcnMgYWdvXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhciBhZ29cIjtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0bGV0IG1vbnRoc0JldHdlZW4gPSBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0aWYgKG1vbnRoc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0bGV0IG1vbnRoc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobW9udGhzQmV0d2Vlbik7XG5cdFx0XHRpZiAobW9udGhzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aHMgYWdvXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aCBhZ29cIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHdlZWtzQmV0d2VlbiA9IHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0aWYgKHdlZWtzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdGxldCB3ZWVrc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3Iod2Vla3NCZXR3ZWVuKTtcblx0XHRcdFx0aWYgKHdlZWtzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2Vla3MgYWdvXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrIGFnb1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZGF5c0JldHdlZW4gPSBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRpZiAoZGF5c0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdGxldCBkYXlzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihkYXlzQmV0d2Vlbik7XG5cdFx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5cyBhZ29cIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheSBhZ29cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbiA9IGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihob3Vyc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXJzIGFnb1wiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VyIGFnb1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW4gPSBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuID4gMSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobWludXRlc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlcyBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gXCJKdXN0IG5vd1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dDtcbn0iLCJpbXBvcnQgeyB0aW1lQU1QTSB9IGZyb20gXCIuL3RzdW5hbWkvdXRpbHMvZGF0ZVwiO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm8gfSBmcm9tIFwiLi90c3VuYW1pL3V0aWxzL251bWJlclwiO1xuaW1wb3J0IHsgc2VuZFRyYWNrRXZlbnRNZXNzYWdlIH0gZnJvbSBcIi4vbW9kZWwvR0FCcmlkZ2VcIjtcblxuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImpzb25cIl0sIChyZXN1bHQpID0+IHtcbiAgICBsZXQgY29sb3JUaGVtZSA9IFwiRGFya1wiO1xuICAgIGlmKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0Lmpzb24pIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuanNvbik7XG4gICAgICAgICAgICBpZiAoZGF0YS5zZXR0aW5ncykge1xuICAgICAgICAgICAgICAgIGNvbG9yVGhlbWUgPSBkYXRhLnNldHRpbmdzLmNvbG9yVGhlbWVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBsZXQgaXNDb2xvclRoZW1lTGlnaHQ7XG4gICAgc3dpdGNoIChjb2xvclRoZW1lKSB7XG4gICAgICAgIGNhc2UgXCJEYXJrXCI6XG4gICAgICAgIGNhc2UgXCJMaWdodFwiOlxuICAgICAgICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAoY29sb3JUaGVtZSA9PSBcIkxpZ2h0XCIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBsZXQgZGFya01vZGVNYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcbiAgICAgICAgICAgIGxldCBpc0RhcmtNb2RlID0gZGFya01vZGVNYXRjaE1lZGlhLm1hdGNoZXM7XG4gICAgICAgICAgICBpc0NvbG9yVGhlbWVMaWdodCA9ICFpc0RhcmtNb2RlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5zYy1kZWZhdWx0XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWUtbGlnaHRcIiwgaXNDb2xvclRoZW1lTGlnaHQpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpPT4ge1xuICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbn0pXG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHN3aXRjaCAobXNnLnR4dCkge1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZUNvbG9yVGhlbWVcIjpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcihcIi5zYy1kZWZhdWx0XCIpLnNldEF0dHJpYnV0ZShcImRhdGEtdGhlbWUtbGlnaHRcIiwgbXNnLmlzQ29sb3JUaGVtZUxpZ2h0KTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVVwZGF0ZVZpZGVvXCI6XG4gICAgICAgICAgICB1cGRhdGVWaWRlbygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlVW5sb2FkVmlkZW9cIjpcbiAgICAgICAgICAgIHVubG9hZFZpZGVvKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVTaG93VmlkZW9cIjpcbiAgICAgICAgICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn0pO1xuXG5sZXQgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLXBsYXllcicpO1xucGxheWVyLnNldEF0dHJpYnV0ZShcIm11dGVkXCIsIFwidHJ1ZVwiKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoXCJhdXRvcGxheVwiLCBcInRydWVcIik7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKFwicGxheXNpbmxpbmVcIiwgXCJ0cnVlXCIpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnMScpO1xucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gICAgZGlzcGF0Y2hWaWRlb0hlaWd0aCgpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoVmlkZW9IZWlndGgoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuZ2V0QmFja2dyb3VuZFBhZ2UoKHBhZ2UpID0+IHtcbiAgICAgICAgbGV0IG1zZyA9IHsgdHh0OiBcInNjcm9sbENhcHR1cmVWaWRlb0hlaWdodFwiLCBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IH07XG4gICAgICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHBhZ2UudGFiSWQsIG1zZyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZpZGVvKCkge1xuICAgIGNocm9tZS5ydW50aW1lLmdldEJhY2tncm91bmRQYWdlKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChwYWdlLnZpZGVvVVJMKSB7XG4gICAgICAgICAgICBwbGF5ZXIuc3JjID0gcGFnZS52aWRlb1VSTDtcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGxldCBhbXBtVGltZSA9IHRpbWVBTVBNKGRhdGUpO1xuICAgICAgICAgICAgLy8gU2NyZWVuIFNob3QgMjAyMC0wMy0yMCBhdCA0LjM1LjE0IFBNXG4gICAgICAgICAgICBsZXQgZGF0ZURhdGEgPSB7XG4gICAgICAgICAgICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICAgICAgICAgICAgICBkYXRlOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhbXBtVGltZS5hbXBtID0gYW1wbVRpbWUuYW1wbS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICAgICAgbGV0IHZpZGVvRmlsZU5hbWUgPSBgU2Nyb2xsIENhcHR1cmUgJHtkYXRlRGF0YS55ZWFyfS0ke2RhdGVEYXRhLm1vbnRofS0ke2RhdGVEYXRhLmRhdGV9IGF0ICR7YW1wbVRpbWUuaG91cnN9LiR7YW1wbVRpbWUubWludXRlc30uJHthbXBtVGltZS5zZWNvbmRzfSAke2FtcG1UaW1lLmFtcG19LndlYm1gO1xuXG4gICAgICAgICAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLnNjLWRvd25sb2FkLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBidXR0b24gPSBidXR0b25zW2ldO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5ocmVmID0gcGFnZS52aWRlb1VSTDtcbiAgICAgICAgICAgICAgICBidXR0b24uZG93bmxvYWQgPSB2aWRlb0ZpbGVOYW1lO1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJkb3dubG9hZFwiLCBcImNsaWNrXCIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZpbGVOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYy12aWRlby1maWxlbmFtZSBhLnNjLWRvd25sb2FkLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGZpbGVOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gdmlkZW9GaWxlTmFtZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1bmxvYWRWaWRlbygpIHtcbiAgICBwbGF5ZXIucGF1c2UoKTtcbiAgICAvLyBwbGF5ZXIucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgICAvLyBwbGF5ZXIubG9hZCgpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=