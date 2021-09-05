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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return roundDecimalToPlace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return round1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return round2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return round3; });
/* unused harmony export loopIndex */
/* unused harmony export isBetween */
/* unused harmony export constrain */
/* unused harmony export createStepsBetween */
/* unused harmony export interpolate */
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
/* unused harmony export removeMultipleRotations */
/* unused harmony export hexColorStringToNumber */
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// Returns a random integer between min (included) and max (included)
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
  return (value & 1) === 0;
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
  return value % 1 === 0;
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
  if (value === 1 || value === 2) {
    return true;
  }

  if (isEven(value)) {
    return false;
  }

  const s = Math.sqrt(value);
  for (let i = 3; i <= s; i++) {
    if (value % i === 0) {
      return false;
    }
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
function roundDecimalToPlace(value, place = 1) {
  const p = Math.pow(10, place);

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
  if (index < 0) {
    index = length + (index % length);
  }

  if (index >= length) {
    return index % length;
  }

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
  return !(
    value < Math.min(firstValue, secondValue) ||
    value > Math.max(firstValue, secondValue)
  );
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
  return Math.min(
    Math.max(value, Math.min(firstValue, secondValue)),
    Math.max(firstValue, secondValue)
  );
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

  let i = 0;
  const stepsBetween = [];
  const increment = (end - begin) / steps;

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
// export function normalize(value, minimum, maximum) {
//   return new Percent((value - minimum) / (maximum - minimum));
// }

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
}
// export function map(value, min1, max1, min2, max2) {
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
  const remainder = value % 1;
  let num = Math.floor(value).toString();
  const len = num.length;

  if (minLength !== 0 && minLength > len) {
    minLength -= len;

    const addChar = fillChar || "0";

    while (minLength--) {
      num = addChar + num;
    }
  }

  if (kDelim !== null && num.length > 3) {
    const totalDelim = Math.floor(num.length / 3);
    const totalRemain = num.length % 3;
    const numSplit = num.split("");
    let i = -1;

    while (++i < totalDelim) {
      numSplit.splice(totalRemain + 4 * i, 0, kDelim);
    }

    if (totalRemain === 0) {
      numSplit.shift();
    }

    num = numSplit.join("");
  }

  if (remainder !== 0) {
    num += remainder.toString().substr(1);
  }

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
  if (forceDecimals === null) {
    forceDecimals = true;
  }
  if (!kDelim) {
    kDelim = ",";
  }
  const remainder = value % 1;
  let currency = format(Math.floor(value), kDelim);

  if (remainder !== 0 || forceDecimals) {
    currency += remainder.toFixed(2).substr(1);
  }

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
  if (value >= 10 && value <= 20) {
    return "th";
  }

  if (value === 0) {
    return "";
  }

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
    throw new Error("Value too large for this method.");
  }

  const onesSpellings = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tensSpellings = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  let spelling = "";

  const millions = value / 1000000;
  value %= 1000000;

  const thousands = value / 1000;
  value %= 1000;

  const hundreds = value / 100;
  value %= 100;

  const tens = value / 10;
  value %= 10;

  const ones = value % 10;

  if (millions !== 0) {
    spelling += spelling.length === 0 ? "" : ", ";
    spelling += spell(millions) + " Million";
  }

  if (thousands !== 0) {
    spelling += spelling.length === 0 ? "" : ", ";
    spelling += spell(thousands) + " Thousand";
  }

  if (hundreds !== 0) {
    spelling += spelling.length === 0 ? "" : ", ";
    spelling += spell(hundreds) + " Hundred";
  }

  if (tens !== 0 || ones !== 0) {
    spelling += spelling.length === 0 ? "" : " ";

    if (tens < 2) {
      spelling += onesSpellings[tens * 10 + ones];
    } else {
      spelling += tensSpellings[tens];

      if (ones !== 0) {
        spelling += "-" + onesSpellings[ones];
      }
    }
  }

  if (spelling.length === 0) {
    return "Zero";
  }

  return spelling;
}

function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
  return componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        toString: function () {
          return "r:" + this.r + ",g:" + this.g + ",b:" + this.b;
        },
      }
    : null;
}

function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

function radToDeg(rad) {
  return (rad * 180) / Math.PI;
}

function smoothstep(value, min, max) {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
}

function lerp(a, b, t) {
  return a + t * (b - a);
  // return a(1-t) + bt
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
  return ((n % m) + m) % m;
}

//a modulo function that handles negatives numbers 'correctly'
function modWrap(n, m) {
  return ((n % m) + m) % m;
}

//random with seed, returns 0-1 range
function random1D(seed) {
  return modWrap(Math.sin(seed) * 43758.5453, 1);
}

//returns 0-1 range
function noise1D(x) {
  const i = Math.floor(x);
  const f = modWrap(x, 1);
  const u = f * f * (3.0 - 2.0 * f);
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

function sineWave(
  angle = 0,
  frequency = Math.PI,
  time = 0,
  speed = 1,
  amplitude = 1
) {
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
function easeOut(value, target, friction = 0.1) {
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
function spring(
  value,
  target = 0,
  friction = 0.1,
  speed = 0,
  elasticity = 0
) {
  return speed * elasticity + (target - value) * friction;
}

function removeMultipleRotations(angle) {
  const circle = Math.PI * 2;
  while (angle > circle / 2) {
    angle -= circle;
  }
  while (angle < -circle / 2) {
    angle += circle;
  }
  return angle;
}

function hexColorStringToNumber(value) {
  return Number(value.replace("#", "0x"));
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sendTrackEventMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sendTrackPageMessage; });
function sendTrackEventMessage(category, action, label = "") {
    chrome.runtime.sendMessage({ txt: "scrollCaptureTrackEvent", category, action, label });
}

function sendTrackPageMessage(path) {
    chrome.runtime.sendMessage({ txt: "scrollCaptureTrackPage", path });
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
	let hours = date.getHours();
	let ampm = hours >= 12 ? 'pm' : 'am';
	let minutes = Object(number["a" /* addLeadingZero */])(date.getMinutes());
	let seconds = Object(number["a" /* addLeadingZero */])(date.getSeconds());
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	return { hours, minutes, seconds, ampm };
}

function formatAMPM(date, spaceBetween = "") {
	let dateData = timeAMPM(date);
	let strTime = dateData.hours + ':' + dateData.minutes + spaceBetween + ampm;
	return strTime;
}

function toUnixString(date) {
	return date.getFullYear() + "-" + Object(number["a" /* addLeadingZero */])(date.getMonth() + 1) + "-" + Object(number["a" /* addLeadingZero */])(date.getDate()) + " " + Object(number["a" /* addLeadingZero */])(date.getHours()) + ":" + Object(number["a" /* addLeadingZero */])(date.getMinutes()) + ":" + Object(number["a" /* addLeadingZero */])(date.getSeconds());
}

function toUnixUTCString(date) {
	return date.getUTCFullYear() + "-" + Object(number["a" /* addLeadingZero */])(date.getUTCMonth() + 1) + "-" + Object(number["a" /* addLeadingZero */])(date.getUTCDate()) + " " + Object(number["a" /* addLeadingZero */])(date.getUTCHours()) + ":" + Object(number["a" /* addLeadingZero */])(date.getUTCMinutes()) + ":" + Object(number["a" /* addLeadingZero */])(date.getUTCSeconds());
}

function addHours(date, hours) {
	date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
	return date;
}

function addDays(date, days) {
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	return date;
}

let months = {
	en:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	fr:["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
};

function getMonth(date, language) {
	if (!language) {
		language = "en";
	}
	let month;
	switch(language) {
		case "en":
			month = months[language][date.getMonth()];
			break;
	}
	return month;
}

function getAge(birthDate) {
	let today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	let m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

function treatAsUTC(date) {
	let result = new Date(date);
	result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
	return result;
}

function minutesBetween(startDate, endDate) {
	let millisecondsPerMinute = 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerMinute;
}

function hoursBetween(startDate, endDate) {
	let millisecondsPerHour = 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerHour;
}

function daysBetween(startDate, endDate) {
	let millisecondsPerDay = 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

function weeksBetween(startDate, endDate) {
	let millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerWeek;
}

function monthsBetween(startDate, endDate) {
	let millisecondsPerMonth = 365 / 12  * 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerMonth;
}

function yearsBetween(startDate, endDate) {
	let millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerYear;
}

function getFamiliarTimeBetween(startDate, endDate) {
	let text = "";
	let yearsBetween = yearsBetween(startDate, endDate);
	if (yearsBetween >= 1) {
		let yearsBetweenFloor = Math.floor(yearsBetween);
		if (yearsBetweenFloor > 1) {
			text = yearsBetweenFloor.toString() + " years ago";
		} else {
			text = yearsBetweenFloor.toString() + " year ago";
		}
	} else {
		let monthsBetween = monthsBetween(startDate, endDate);
		if (monthsBetween >= 1) {
			let monthsBetweenFloor = Math.floor(monthsBetween);
			if (monthsBetweenFloor > 1) {
				text = monthsBetweenFloor.toString() + " months ago";
			} else {
				text = monthsBetweenFloor.toString() + " month ago";
			}
		} else {
			let weeksBetween = weeksBetween(startDate, endDate);
			if (weeksBetween >= 1) {
				let weeksBetweenFloor = Math.floor(weeksBetween);
				if (weeksBetweenFloor > 1) {
					text = weeksBetweenFloor.toString() + " weeks ago";
				} else {
					text = weeksBetweenFloor.toString() + " week ago";
				}
			} else {
				let daysBetween = daysBetween(startDate, endDate);
				if (daysBetween >= 1) {
					let daysBetweenFloor = Math.floor(daysBetween);
					if (daysBetweenFloor > 1) {
						text = daysBetweenFloor.toString() + " days ago";
					} else {
						text = daysBetweenFloor.toString() + " day ago";
					}
				} else {
					let hoursBetween = hoursBetween(startDate, endDate);
					if (hoursBetween >= 1) {
						let hoursBetweenFloor = Math.floor(hoursBetween);
						if (hoursBetweenFloor > 1) {
							text = hoursBetweenFloor.toString() + " hours ago";
						} else {
							text = hoursBetweenFloor.toString() + " hour ago";
						}
					} else {
						let minutesBetween = minutesBetween(startDate, endDate);
						if (minutesBetween > 1) {
							let minutesBetweenFloor = Math.floor(minutesBetween);
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




chrome.storage.local.get(["json"], (result) => {
    let colorTheme = "Dark";
    if(result) {
        if (result.json) {
            let data = JSON.parse(result.json);
            if (data.settings) {
                colorTheme = data.settings.colorThemes;
            }
        }
    };
    let isColorThemeLight;
    switch (colorTheme) {
        case "Dark":
        case "Light":
            isColorThemeLight = (colorTheme == "Light");
            break;
        default:
            let darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
            let isDarkMode = darkModeMatchMedia.matches;
            isColorThemeLight = !isDarkMode;
            break;
    }
    document.body.querySelector(".sc-default").setAttribute("data-theme-light", isColorThemeLight);
});

window.addEventListener("resize", ()=> {
    dispatchVideoHeigth();
})

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
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

let player = document.querySelector('.sc-video-player');
player.setAttribute("muted", "true");
player.setAttribute("autoplay", "true");
player.setAttribute("playsinline", "true");
player.setAttribute('controls', '1');
player.addEventListener('canplay', () => {
    dispatchVideoHeigth();
});

function dispatchVideoHeigth() {
    chrome.runtime.getBackgroundPage((page) => {
        let msg = { txt: "scrollCaptureVideoHeight", height: document.body.scrollHeight };
        chrome.tabs.sendMessage(page.tabId, msg);
    });
}

function updateVideo() {
    chrome.runtime.getBackgroundPage((page) => {
        if (page.videoURL) {
            player.src = page.videoURL;
            let date = new Date();
            let ampmTime = timeAMPM(date);
            // Screen Shot 2020-03-20 at 4.35.14 PM
            let dateData = {
                year: date.getFullYear(),
                month: Object(number["a" /* addLeadingZero */])(date.getMonth() + 1),
                date: Object(number["a" /* addLeadingZero */])(date.getDate())
            };
            ampmTime.ampm = ampmTime.ampm.toUpperCase();
            let videoFileName = `Scroll Capture ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}.webm`;

            let buttons = document.querySelectorAll("a.sc-download-button");
            for (let i = 0; i < buttons.length; i++) {
                let button = buttons[i];
                button.href = page.videoURL;
                button.download = videoFileName;
                button.addEventListener("click", () => {
                    Object(GABridge["a" /* sendTrackEventMessage */])("download", "click");
                });
            }
            let fileNameButton = document.querySelector(".sc-video-filename a.sc-download-button");
            fileNameButton.textContent = videoFileName;
        }
    });
}

function unloadVideo() {
    player.pause();
    // player.removeAttribute('src');
    // player.load();
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0FCcmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2pzL3ZpZGVvLXJlY29yZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBLHdCQUF3QjtBQUN4Qix5QkFBeUI7QUFDekI7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esd0RBQXdEO0FBQ3hEO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLGdDQUFnQztBQUNoQztBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQix5QkFBeUI7QUFDekI7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLHVDQUF1QztBQUN2QztBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlEQUFpRDtBQUNqRCxpREFBaUQ7QUFDakQsa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdFQUF3RTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLDBDQUEwQztBQUMxQztBQUNBO0FBQ087QUFDUDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwySEFBMkg7QUFDM0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsb0RBQW9EO0FBQ3BELG1GQUFtRjtBQUNuRjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG9LQUFvSztBQUNwSyx5REFBeUQ7QUFDekQ7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGlDQUFpQztBQUNqQztBQUNBO0FBQ087QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7O0FDMXJCQTtBQUFBO0FBQU87QUFDUCxnQ0FBZ0MsMERBQTBEO0FBQzFGOztBQUVPO0FBQ1AsZ0NBQWdDLHNDQUFzQztBQUN0RSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOd0M7O0FBRWpDO0FBQ1A7QUFDQTtBQUNBLGVBQWUsd0NBQWM7QUFDN0IsZUFBZSx3Q0FBYztBQUM3QjtBQUNBLDRCQUE0QjtBQUM1QixTQUFTO0FBQ1Q7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLG1DQUFtQyx3Q0FBYyw4QkFBOEIsd0NBQWMseUJBQXlCLHdDQUFjLDBCQUEwQix3Q0FBYyw0QkFBNEIsd0NBQWM7QUFDdE47O0FBRU87QUFDUCxzQ0FBc0Msd0NBQWMsaUNBQWlDLHdDQUFjLDRCQUE0Qix3Q0FBYyw2QkFBNkIsd0NBQWMsK0JBQStCLHdDQUFjO0FBQ3JPOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7O0FDcEtnRDtBQUNRO0FBQ0M7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixRQUFRO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBYztBQUNyQyxzQkFBc0Isd0NBQWM7QUFDcEM7QUFDQTtBQUNBLGtEQUFrRCxjQUFjLEdBQUcsZUFBZSxHQUFHLGNBQWMsTUFBTSxlQUFlLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCLEdBQUcsY0FBYzs7QUFFakw7QUFDQSwyQkFBMkIsb0JBQW9CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlEQUFxQjtBQUN6QyxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InZpZGVvLXJlY29yZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA2KTtcbiIsIi8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiAxKSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIG9kZC5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG5vdCBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgb2RkOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNPZGQoNykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzT2RkKDEyKSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKHZhbHVlKSB7XG4gIHJldHVybiAhaXNFdmVuKHZhbHVlKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXIuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBjb250YWlucyBubyBkZWNpbWFsIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEuMjM0NSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICUgMSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IDEgfHwgdmFsdWUgPT09IDIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0V2ZW4odmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG4gIGZvciAobGV0IGkgPSAzOyBpIDw9IHM7IGkrKykge1xuICAgIGlmICh2YWx1ZSAlIGkgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEpIHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwKSAvIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDEodmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQyKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMyh2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMyk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbGVuZ3RoICsgKGluZGV4ICUgbGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5kZXggJSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGluY2x1ZGVkIHdpdGhpbiBhIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBmYWxscyB3aXRoaW4gdGhlIHJhbmdlOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEB1c2FnZU5vdGUgVGhlIHJhbmdlIHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzQmV0d2VlbigzLCAwLCA1KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDcsIDAsIDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gIShcbiAgICB2YWx1ZSA8IE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB8fFxuICAgIHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdmFsdWUgZmFsbHMgd2l0aGluIGEgcmFuZ2U7IGlmIG5vdCBpdCBpcyBzbmFwcGVkIHRvIHRoZSBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgZWl0aGVyIHRoZSBudW1iZXIgYXMgcGFzc2VkLCBvciBpdHMgdmFsdWUgb25jZSBzbmFwcGVkIHRvIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG4gQHVzYWdlTm90ZSBUaGUgY29uc3RyYWludCB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgM1xuIGNvbnNvbGUubG9nKGNvbnN0cmFpbig3LCAwLCA1KSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RyYWluKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gTWF0aC5taW4oXG4gICAgTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSksXG4gICAgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIENyZWF0ZXMgZXZlbmx5IHNwYWNlZCBudW1lcmljYWwgaW5jcmVtZW50cyBiZXR3ZWVuIHR3byBudW1iZXJzLlxuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAcGFyYW0gc3RlcHM6IFRoZSBudW1iZXIgb2YgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgYW4gQXJyYXkgY29tcHJpc2VkIG9mIHRoZSBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMCwgNSwgNCkpOyAvLyBUcmFjZXMgMSwyLDMsNFxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigxLCAzLCAzKSk7IC8vIFRyYWNlcyAxLjUsMiwyLjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGVwc0JldHdlZW4oYmVnaW4sIGVuZCwgc3RlcHMpIHtcbiAgc3RlcHMrKztcblxuICBsZXQgaSA9IDA7XG4gIGNvbnN0IHN0ZXBzQmV0d2VlbiA9IFtdO1xuICBjb25zdCBpbmNyZW1lbnQgPSAoZW5kIC0gYmVnaW4pIC8gc3RlcHM7XG5cbiAgd2hpbGUgKCsraSA8IHN0ZXBzKSB7XG4gICAgc3RlcHNCZXR3ZWVuLnB1c2goaSAqIGluY3JlbWVudCArIGJlZ2luKTtcbiAgfVxuXG4gIHJldHVybiBzdGVwc0JldHdlZW47XG59XG5cbi8qKlxuIERldGVybWluZXMgYSB2YWx1ZSBiZXR3ZWVuIHR3byBzcGVjaWZpZWQgdmFsdWVzLlxuXG4gQHBhcmFtIGFtb3VudDogVGhlIGxldmVsIG9mIGludGVycG9sYXRpb24gYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy4gSWYgPGNvZGU+MDwvY29kZT4sIDxjb2RlPmJlZ2luPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZDsgaWYgPGNvZGU+MTwvY29kZT4sIDxjb2RlPmVuZDwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGludGVycG9sYXRlKDAuNSwgMCwgMTApKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZShhbW91bnQsIGJlZ2luLCBlbmQpIHtcbiAgcmV0dXJuIGJlZ2luICsgKGVuZCAtIGJlZ2luKSAqIGFtb3VudDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHBlcmNlbnRhZ2Ugb2YgYSB2YWx1ZSBpbiBhIGdpdmVuIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgdmFsdWUgdG8gYmUgY29udmVydGVkLlxuIEBwYXJhbSBtaW5pbXVtOiBUaGUgbG93ZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBtYXhpbXVtOiBUaGUgdXBwZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobm9ybWFsaXplKDgsIDQsIDIwKS5kZWNpbWFsUGVyY2VudGFnZSk7IC8vIFRyYWNlcyAwLjI1XG4gPC9jb2RlPlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG4vLyAgIHJldHVybiBuZXcgUGVyY2VudCgodmFsdWUgLSBtaW5pbXVtKSAvIChtYXhpbXVtIC0gbWluaW11bSkpO1xuLy8gfVxuXG4vKipcbiBNYXBzIGEgdmFsdWUgZnJvbSBvbmUgY29vcmRpbmF0ZSBzcGFjZSB0byBhbm90aGVyLlxuXG4gQHBhcmFtIHZhbHVlOiBWYWx1ZSBmcm9tIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlIHRvIG1hcCB0byB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjE6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgxOiBFbmRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjI6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MjogRW5kaW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG1hcCgwLjc1LCAwLCAxLCAwLCAxMDApKTsgLy8gVHJhY2VzIDc1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbi8vIFx0cmV0dXJuIG1pbjIgKyAobWF4MiAtIG1pbjIpICogKCh2YWx1ZSAtIG1pbjEpIC8gKG1heDEgLSBtaW4xKSk7XG4vLyB9XG5cbi8qKlxuIExvdyBwYXNzIGZpbHRlciBhbG9ncml0aG0gZm9yIGVhc2luZyBhIHZhbHVlIHRvd2FyZCBhIGRlc3RpbmF0aW9uIHZhbHVlLiBXb3JrcyBiZXN0IGZvciB0d2VlbmluZyB2YWx1ZXMgd2hlbiBubyBkZWZpbml0ZSB0aW1lIGR1cmF0aW9uIGV4aXN0cyBhbmQgd2hlbiB0aGUgZGVzdGluYXRpb24gdmFsdWUgY2hhbmdlcy5cblxuIElmIDxjb2RlPigwLjUgPCBuIDwgMSk8L2NvZGU+LCB0aGVuIHRoZSByZXN1bHRpbmcgdmFsdWVzIHdpbGwgb3ZlcnNob290IChwaW5nLXBvbmcpIHVudGlsIHRoZXkgcmVhY2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlLiBXaGVuIDxjb2RlPm48L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiAxLCBhcyBpdHMgdmFsdWUgaW5jcmVhc2VzLCB0aGUgdGltZSBpdCB0YWtlcyB0byByZWFjaCB0aGUgZGVzdGluYXRpb24gYWxzbyBpbmNyZWFzZXMuIEEgcGxlYXNpbmcgdmFsdWUgZm9yIDxjb2RlPm48L2NvZGU+IGlzIDUuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlLlxuIEBwYXJhbSBkZXN0OiBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gQHBhcmFtIG46IFRoZSBzbG93ZG93biBmYWN0b3IuXG4gQHJldHVybiBUaGUgd2VpZ2h0ZWQgYXZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodGVkQXZlcmFnZSh2YWx1ZSwgZGVzdCwgbikge1xuICByZXR1cm4gdmFsdWUgKyAoZGVzdCAtIHZhbHVlKSAvIG47XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiXCI8L2NvZGU+LlxuIEBwYXJhbSBtaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgbnVtYmVyOyBkZWZhdWx0cyB0byA8Y29kZT4wIDwvY29kZT4uXG4gQHBhcmFtIGZpbGxDaGFyOiBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdXNlZCB0byBtYWtlIHRoZSBudW1iZXIgdGhlIG1pbmltdW0gbGVuZ3RoOyBkZWZhdWx0cyB0byA8Y29kZT5cIjBcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0KDEyMzQ1NjcsIFwiLFwiLCA4KSk7IC8vIFRyYWNlcyAwMSwyMzQsNTY3XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBrRGVsaW0sIG1pbkxlbmd0aCwgZmlsbENoYXIpIHtcbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSBcIixcIjtcbiAgfVxuICBpZiAoaXNOYU4obWluTGVuZ3RoKSkge1xuICAgIG1pbkxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKCFmaWxsQ2hhcikge1xuICAgIGZpbGxDaGFyID0gXCIwXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcbiAgY29uc3QgbGVuID0gbnVtLmxlbmd0aDtcblxuICBpZiAobWluTGVuZ3RoICE9PSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuICAgIG1pbkxlbmd0aCAtPSBsZW47XG5cbiAgICBjb25zdCBhZGRDaGFyID0gZmlsbENoYXIgfHwgXCIwXCI7XG5cbiAgICB3aGlsZSAobWluTGVuZ3RoLS0pIHtcbiAgICAgIG51bSA9IGFkZENoYXIgKyBudW07XG4gICAgfVxuICB9XG5cbiAgaWYgKGtEZWxpbSAhPT0gbnVsbCAmJiBudW0ubGVuZ3RoID4gMykge1xuICAgIGNvbnN0IHRvdGFsRGVsaW0gPSBNYXRoLmZsb29yKG51bS5sZW5ndGggLyAzKTtcbiAgICBjb25zdCB0b3RhbFJlbWFpbiA9IG51bS5sZW5ndGggJSAzO1xuICAgIGNvbnN0IG51bVNwbGl0ID0gbnVtLnNwbGl0KFwiXCIpO1xuICAgIGxldCBpID0gLTE7XG5cbiAgICB3aGlsZSAoKytpIDwgdG90YWxEZWxpbSkge1xuICAgICAgbnVtU3BsaXQuc3BsaWNlKHRvdGFsUmVtYWluICsgNCAqIGksIDAsIGtEZWxpbSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdGFsUmVtYWluID09PSAwKSB7XG4gICAgICBudW1TcGxpdC5zaGlmdCgpO1xuICAgIH1cblxuICAgIG51bSA9IG51bVNwbGl0LmpvaW4oXCJcIik7XG4gIH1cblxuICBpZiAocmVtYWluZGVyICE9PSAwKSB7XG4gICAgbnVtICs9IHJlbWFpbmRlci50b1N0cmluZygpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuICBpZiAoZm9yY2VEZWNpbWFscyA9PT0gbnVsbCkge1xuICAgIGZvcmNlRGVjaW1hbHMgPSB0cnVlO1xuICB9XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gXCIsXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCB8fCBmb3JjZURlY2ltYWxzKSB7XG4gICAgY3VycmVuY3kgKz0gcmVtYWluZGVyLnRvRml4ZWQoMikuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbmN5O1xufVxuXG4vKipcbiBGaW5kcyB0aGUgZW5nbGlzaCBvcmRpbmFsIHN1ZmZpeCBmb3IgdGhlIG51bWJlciBnaXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGZpbmQgdGhlIG9yZGluYWwgc3VmZml4IG9mLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgc3VmZml4IGZvciB0aGUgbnVtYmVyLCAyIGNoYXJhY3RlcnMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZygzMiArIGdldE9yZGluYWxTdWZmaXgoMzIpKTsgLy8gVHJhY2VzIDMybmRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsU3VmZml4KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSAyMCkge1xuICAgIHJldHVybiBcInRoXCI7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUgJSAxMCkge1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBcInJkXCI7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gXCJzdFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJ0aFwiO1xuICB9XG59XG5cbi8qKlxuIEFkZHMgYSBsZWFkaW5nIHplcm8gZm9yIG51bWJlcnMgbGVzcyB0aGFuIHRlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGFkZCBsZWFkaW5nIHplcm8uXG4gQHJldHVybiBOdW1iZXIgYXMgYSBTdHJpbmc7IGlmIHRoZSBudW1iZXIgd2FzIGxlc3MgdGhhbiB0ZW4gdGhlIG51bWJlciB3aWxsIGhhdmUgYSBsZWFkaW5nIHplcm8uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybyg3KSk7IC8vIFRyYWNlcyAwN1xuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDExKSk7IC8vIFRyYWNlcyAxMVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDEwID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuIFNwZWxscyB0aGUgcHJvdmlkZWQgbnVtYmVyLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gc3BlbGwuIE5lZWRzIHRvIGJlIGxlc3MgdGhhbiA5OTk5OTk5OTkuXG4gQHJldHVybiBUaGUgbnVtYmVyIHNwZWxsZWQgb3V0IGFzIGEgU3RyaW5nLlxuIEB0aHJvd3MgPGNvZGU+RXJyb3I8L2NvZGU+IGlmIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gOTk5OTk5OTk5LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coc3BlbGwoMCkpOyAvLyBUcmFjZXMgWmVyb1xuIGNvbnNvbGUubG9nKHNwZWxsKDIzKSk7IC8vIFRyYWNlcyBUd2VudHktVGhyZWVcbiBjb25zb2xlLmxvZyhzcGVsbCgyMDA1Njc4KSk7IC8vIFRyYWNlcyBUd28gTWlsbGlvbiwgRml2ZSBUaG91c2FuZCwgU2l4IEh1bmRyZWQgU2V2ZW50eS1FaWdodFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwZWxsKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDk5OTk5OTk5OSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIHRvbyBsYXJnZSBmb3IgdGhpcyBtZXRob2QuXCIpO1xuICB9XG5cbiAgY29uc3Qgb25lc1NwZWxsaW5ncyA9IFtcbiAgICBcIlwiLFxuICAgIFwiT25lXCIsXG4gICAgXCJUd29cIixcbiAgICBcIlRocmVlXCIsXG4gICAgXCJGb3VyXCIsXG4gICAgXCJGaXZlXCIsXG4gICAgXCJTaXhcIixcbiAgICBcIlNldmVuXCIsXG4gICAgXCJFaWdodFwiLFxuICAgIFwiTmluZVwiLFxuICAgIFwiVGVuXCIsXG4gICAgXCJFbGV2ZW5cIixcbiAgICBcIlR3ZWx2ZVwiLFxuICAgIFwiVGhpcnRlZW5cIixcbiAgICBcIkZvdXJ0ZWVuXCIsXG4gICAgXCJGaWZ0ZWVuXCIsXG4gICAgXCJTaXh0ZWVuXCIsXG4gICAgXCJTZXZlbnRlZW5cIixcbiAgICBcIkVpZ2h0ZWVuXCIsXG4gICAgXCJOaW5ldGVlblwiLFxuICBdO1xuICBjb25zdCB0ZW5zU3BlbGxpbmdzID0gW1xuICAgIFwiXCIsXG4gICAgXCJcIixcbiAgICBcIlR3ZW50eVwiLFxuICAgIFwiVGhpcnR5XCIsXG4gICAgXCJGb3J0eVwiLFxuICAgIFwiRmlmdHlcIixcbiAgICBcIlNpeHR5XCIsXG4gICAgXCJTZXZlbnR5XCIsXG4gICAgXCJFaWdodHlcIixcbiAgICBcIk5pbmV0eVwiLFxuICBdO1xuICBsZXQgc3BlbGxpbmcgPSBcIlwiO1xuXG4gIGNvbnN0IG1pbGxpb25zID0gdmFsdWUgLyAxMDAwMDAwO1xuICB2YWx1ZSAlPSAxMDAwMDAwO1xuXG4gIGNvbnN0IHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcbiAgdmFsdWUgJT0gMTAwMDtcblxuICBjb25zdCBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuICB2YWx1ZSAlPSAxMDA7XG5cbiAgY29uc3QgdGVucyA9IHZhbHVlIC8gMTA7XG4gIHZhbHVlICU9IDEwO1xuXG4gIGNvbnN0IG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG4gIGlmIChtaWxsaW9ucyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwobWlsbGlvbnMpICsgXCIgTWlsbGlvblwiO1xuICB9XG5cbiAgaWYgKHRob3VzYW5kcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwodGhvdXNhbmRzKSArIFwiIFRob3VzYW5kXCI7XG4gIH1cblxuICBpZiAoaHVuZHJlZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKGh1bmRyZWRzKSArIFwiIEh1bmRyZWRcIjtcbiAgfVxuXG4gIGlmICh0ZW5zICE9PSAwIHx8IG9uZXMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIgXCI7XG5cbiAgICBpZiAodGVucyA8IDIpIHtcbiAgICAgIHNwZWxsaW5nICs9IG9uZXNTcGVsbGluZ3NbdGVucyAqIDEwICsgb25lc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cbiAgICAgIGlmIChvbmVzICE9PSAwKSB7XG4gICAgICAgIHNwZWxsaW5nICs9IFwiLVwiICsgb25lc1NwZWxsaW5nc1tvbmVzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3BlbGxpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiWmVyb1wiO1xuICB9XG5cbiAgcmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuICByZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0XG4gICAgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFwicjpcIiArIHRoaXMuciArIFwiLGc6XCIgKyB0aGlzLmcgKyBcIixiOlwiICsgdGhpcy5iO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWQpIHtcbiAgcmV0dXJuIChyYWQgKiAxODApIC8gTWF0aC5QSTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aHN0ZXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpKTtcbiAgcmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgcmV0dXJuIGEgKyB0ICogKGIgLSBhKTtcbiAgLy8gcmV0dXJuIGEoMS10KSArIGJ0XG4gIC8vcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXgoYSwgYiwgdCkge1xuICByZXR1cm4gbGVycChhLCBiLCB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm0odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL2EgbW9kdWxvIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBuZWdhdGl2ZXMgbnVtYmVycyAnY29ycmVjdGx5J1xuZXhwb3J0IGZ1bmN0aW9uIG1vZFdyYXAobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vcmFuZG9tIHdpdGggc2VlZCwgcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20xRChzZWVkKSB7XG4gIHJldHVybiBtb2RXcmFwKE1hdGguc2luKHNlZWQpICogNDM3NTguNTQ1MywgMSk7XG59XG5cbi8vcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiBub2lzZTFEKHgpIHtcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoeCk7XG4gIGNvbnN0IGYgPSBtb2RXcmFwKHgsIDEpO1xuICBjb25zdCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBsZXJwKHUsIHJhbmRvbTFEKGkpLCByYW5kb20xRChpICsgMS4wKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQ2xhbXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGNsYW1wKGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpLCBtaW4yLCBtYXgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmVXYXZlKFxuICBhbmdsZSA9IDAsXG4gIGZyZXF1ZW5jeSA9IE1hdGguUEksXG4gIHRpbWUgPSAwLFxuICBzcGVlZCA9IDEsXG4gIGFtcGxpdHVkZSA9IDFcbikge1xuICByZXR1cm4gTWF0aC5zaW4oYW5nbGUgKiBmcmVxdWVuY3kgKyB0aW1lICogc3BlZWQpICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBUaW1lKHRpbWUsIHN0YXJ0VGltZSwgZHVyYXRpb24pIHtcbiAgcmV0dXJuIGNsYW1wKHRpbWUgLSBzdGFydFRpbWUsIDAuMCwgZHVyYXRpb24pIC8gZHVyYXRpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBlYXNlIHZhbHVlXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YWx1ZSArPSBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uKTtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uID0gMC4xKSB7XG4gIHJldHVybiAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcGFyYW0gc3BlZWQ6IFRoZSBjdXJyZW50IHNwZWVkXG4gQHBhcmFtIGVsYXN0aWNpdHk6IFRoZSBlbGFzdGljaXR5IGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgbmV3IHNwZWVkIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gc3BlZWQgPSBzcHJpbmcodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24sIHNwZWVkLCBlbGFzdGljaXR5KTtcbiB2YWx1ZSArPSBzcGVlZDtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJpbmcoXG4gIHZhbHVlLFxuICB0YXJnZXQgPSAwLFxuICBmcmljdGlvbiA9IDAuMSxcbiAgc3BlZWQgPSAwLFxuICBlbGFzdGljaXR5ID0gMFxuKSB7XG4gIHJldHVybiBzcGVlZCAqIGVsYXN0aWNpdHkgKyAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyhhbmdsZSkge1xuICBjb25zdCBjaXJjbGUgPSBNYXRoLlBJICogMjtcbiAgd2hpbGUgKGFuZ2xlID4gY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlIC09IGNpcmNsZTtcbiAgfVxuICB3aGlsZSAoYW5nbGUgPCAtY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlICs9IGNpcmNsZTtcbiAgfVxuICByZXR1cm4gYW5nbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhDb2xvclN0cmluZ1RvTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrRXZlbnRNZXNzYWdlKGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsID0gXCJcIikge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja0V2ZW50XCIsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrUGFnZU1lc3NhZ2UocGF0aCkge1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVUcmFja1BhZ2VcIiwgcGF0aCB9KTtcbn0iLCJpbXBvcnQge2FkZExlYWRpbmdaZXJvfSBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBTVBNKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGxldCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRsZXQgc2Vjb25kcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbXBtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUsIHNwYWNlQmV0d2VlbiA9IFwiXCIpIHtcblx0bGV0IGRhdGVEYXRhID0gdGltZUFNUE0oZGF0ZSk7XG5cdGxldCBzdHJUaW1lID0gZGF0ZURhdGEuaG91cnMgKyAnOicgKyBkYXRlRGF0YS5taW51dGVzICsgc3BhY2VCZXR3ZWVuICsgYW1wbTtcblx0cmV0dXJuIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFVUQ1N0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0RhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDSG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG91cnMoZGF0ZSwgaG91cnMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgbGV0IG1vbnRocyA9IHtcblx0ZW46W1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdGZyOltcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIiwgXCJKdWlsbGV0XCIsIFwiQW/Du3RcIiwgXCJTZXB0ZW1icmVcIiwgXCJPY3RvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEw6ljZW1icmVcIl1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlLCBsYW5ndWFnZSkge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0bGFuZ3VhZ2UgPSBcImVuXCI7XG5cdH1cblx0bGV0IG1vbnRoO1xuXHRzd2l0Y2gobGFuZ3VhZ2UpIHtcblx0XHRjYXNlIFwiZW5cIjpcblx0XHRcdG1vbnRoID0gbW9udGhzW2xhbmd1YWdlXVtkYXRlLmdldE1vbnRoKCldO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIG1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGJpcnRoRGF0ZSkge1xuXHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0aWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0YWdlLS07XG5cdH1cblx0cmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWF0QXNVVEMoZGF0ZSkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG5cdHJlc3VsdC5zZXRNaW51dGVzKHJlc3VsdC5nZXRNaW51dGVzKCkgLSByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1pbnV0ZSA9IDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckhvdXIgPSA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckhvdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1vbnRoID0gMzY1IC8gMTIgICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyWWVhciA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJZZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IHRleHQgPSBcIlwiO1xuXHRsZXQgeWVhcnNCZXR3ZWVuID0geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdGlmICh5ZWFyc0JldHdlZW4gPj0gMSkge1xuXHRcdGxldCB5ZWFyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoeWVhcnNCZXR3ZWVuKTtcblx0XHRpZiAoeWVhcnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXJzIGFnb1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXIgYWdvXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGxldCBtb250aHNCZXR3ZWVuID0gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdGlmIChtb250aHNCZXR3ZWVuID49IDEpIHtcblx0XHRcdGxldCBtb250aHNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1vbnRoc0JldHdlZW4pO1xuXHRcdFx0aWYgKG1vbnRoc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGhzIGFnb1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGggYWdvXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB3ZWVrc0JldHdlZW4gPSB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdGlmICh3ZWVrc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRsZXQgd2Vla3NCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHdlZWtzQmV0d2Vlbik7XG5cdFx0XHRcdGlmICh3ZWVrc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWtzIGFnb1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2VlayBhZ29cIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuID0gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRsZXQgZGF5c0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoZGF5c0JldHdlZW4pO1xuXHRcdFx0XHRcdGlmIChkYXlzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheXMgYWdvXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXkgYWdvXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW4gPSBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoaG91cnNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VycyBhZ29cIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91ciBhZ29cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuID0gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1pbnV0ZXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZSBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IFwiSnVzdCBub3dcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59IiwiaW1wb3J0IHsgdGltZUFNUE0gfSBmcm9tIFwiLi90c3VuYW1pL3V0aWxzL2RhdGVcIjtcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvIH0gZnJvbSBcIi4vdHN1bmFtaS91dGlscy9udW1iZXJcIjtcbmltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuL21vZGVsL0dBQnJpZGdlXCI7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbXCJqc29uXCJdLCAocmVzdWx0KSA9PiB7XG4gICAgbGV0IGNvbG9yVGhlbWUgPSBcIkRhcmtcIjtcbiAgICBpZihyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuICAgICAgICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgICAgICAgICBjb2xvclRoZW1lID0gZGF0YS5zZXR0aW5ncy5jb2xvclRoZW1lcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgbGV0IGlzQ29sb3JUaGVtZUxpZ2h0O1xuICAgIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgICAgICBjYXNlIFwiRGFya1wiOlxuICAgICAgICBjYXNlIFwiTGlnaHRcIjpcbiAgICAgICAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gKGNvbG9yVGhlbWUgPT0gXCJMaWdodFwiKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgbGV0IGRhcmtNb2RlTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gICAgICAgICAgICBsZXQgaXNEYXJrTW9kZSA9IGRhcmtNb2RlTWF0Y2hNZWRpYS5tYXRjaGVzO1xuICAgICAgICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAhaXNEYXJrTW9kZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIGlzQ29sb3JUaGVtZUxpZ2h0KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKT0+IHtcbiAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG59KVxuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICBzd2l0Y2ggKG1zZy50eHQpIHtcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVDb2xvclRoZW1lXCI6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtZGVmYXVsdFwiKS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRoZW1lLWxpZ2h0XCIsIG1zZy5pc0NvbG9yVGhlbWVMaWdodCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNjcm9sbENhcHR1cmVVcGRhdGVWaWRlb1wiOlxuICAgICAgICAgICAgdXBkYXRlVmlkZW8oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvXCI6XG4gICAgICAgICAgICB1bmxvYWRWaWRlbygpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvXCI6XG4gICAgICAgICAgICBkaXNwYXRjaFZpZGVvSGVpZ3RoKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG59KTtcblxubGV0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1wbGF5ZXInKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoXCJtdXRlZFwiLCBcInRydWVcIik7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKFwiYXV0b3BsYXlcIiwgXCJ0cnVlXCIpO1xucGxheWVyLnNldEF0dHJpYnV0ZShcInBsYXlzaW5saW5lXCIsIFwidHJ1ZVwiKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJzEnKTtcbnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICAgIGRpc3BhdGNoVmlkZW9IZWlndGgoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwYXRjaFZpZGVvSGVpZ3RoKCkge1xuICAgIGNocm9tZS5ydW50aW1lLmdldEJhY2tncm91bmRQYWdlKChwYWdlKSA9PiB7XG4gICAgICAgIGxldCBtc2cgPSB7IHR4dDogXCJzY3JvbGxDYXB0dXJlVmlkZW9IZWlnaHRcIiwgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCB9O1xuICAgICAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZShwYWdlLnRhYklkLCBtc2cpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWRlbygpIHtcbiAgICBjaHJvbWUucnVudGltZS5nZXRCYWNrZ3JvdW5kUGFnZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAocGFnZS52aWRlb1VSTCkge1xuICAgICAgICAgICAgcGxheWVyLnNyYyA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBsZXQgYW1wbVRpbWUgPSB0aW1lQU1QTShkYXRlKTtcbiAgICAgICAgICAgIC8vIFNjcmVlbiBTaG90IDIwMjAtMDMtMjAgYXQgNC4zNS4xNCBQTVxuICAgICAgICAgICAgbGV0IGRhdGVEYXRhID0ge1xuICAgICAgICAgICAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICAgICAgICAgICAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgICAgICAgICAgICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGxldCB2aWRlb0ZpbGVOYW1lID0gYFNjcm9sbCBDYXB0dXJlICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfS53ZWJtYDtcblxuICAgICAgICAgICAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICAgICAgICAgICAgICBidXR0b24uaHJlZiA9IHBhZ2UudmlkZW9VUkw7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICAgICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwiZG93bmxvYWRcIiwgXCJjbGlja1wiKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBmaWxlTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2MtdmlkZW8tZmlsZW5hbWUgYS5zYy1kb3dubG9hZC1idXR0b25cIik7XG4gICAgICAgICAgICBmaWxlTmFtZUJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZGVvRmlsZU5hbWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gICAgcGxheWVyLnBhdXNlKCk7XG4gICAgLy8gcGxheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgLy8gcGxheWVyLmxvYWQoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9