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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export supportsTemplateLiterals */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transformLiterals; });
let supportsTemplateLiterals = false;
try {
    eval("`foo`");
    supportsTemplateLiterals = true;
} catch (e) { }


function transformLiterals(expression) {
    if (!supportsTemplateLiterals) {
        let evalExpression = expression.split("`").join("");
        let chunks = evalExpression.split("${");
        let nodes = [];
        for (let i = 0; i < chunks.length; i++) {
            let chunk = chunks[i];
            if (chunk.indexOf("}") == -1) {
                if (chunk) {
                    chunk = "'" + chunk + "'";
                    nodes.push(chunk);
                }
            } else {
                let chunkBits = chunk.split("}");
                for (let j = 0; j < chunkBits.length; j++) {
                    let chunkBit = chunkBits[j];
                    if (chunkBit) {
                        if (j > 0) chunkBit = "'" + chunkBit + "'";
                        nodes.push(chunkBit);
                    }
                }
            }
        }
        expression = nodes.join(" + ");
    }
    return expression;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(7);
module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "app", function() { return /* binding */ app; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ main_Main; });

// EXTERNAL MODULE: ./js/model/GABridge.js
var GABridge = __webpack_require__(1);

// EXTERNAL MODULE: ./js/tsunami/utils/number.js
var number = __webpack_require__(0);

// CONCATENATED MODULE: ./js/tsunami/geom/Point.js


class Point_Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static lerp(p0, p1, t) {
    return new Point_Point(Object(number["d" /* lerp */])(p0.x, p1.x, t), Object(number["d" /* lerp */])(p0.y, p1.y, t));
  }

  static distance(p1, p2 = new Point_Point()) {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
  }

  static polar(len, radians) {
    return new Point_Point(len * Math.cos(radians), len * Math.sin(radians));
  }

  static getAngle(point, center = new Point_Point()) {
    return Math.atan2(point.y - center.y, point.x - center.x);
  }

  static random() {
    return new Point_Point(Math.random(), Math.random());
  }

  static rotate(p, a) {
    const x = Math.cos(a) * p.x - Math.sin(a) * p.y;
    const y = Math.sin(a) * p.x + Math.cos(a) * p.y;
    p.x = x;
    p.y = y;
  }

  add(p) {
    return new Point_Point(this.x + p.x, this.y + p.y);
  }

  get magnitude() {
    return Point_Point.distance(this);
  }

  abs() {
    return new Point_Point(Math.abs(this.x), Math.abs(this.y));
  }

  clamp(minX, maxX, minY, maxY) {
    this.clampX(minX, maxX);
    this.clampY(minY, maxY);
  }

  clampX(min, max) {
    this.x = Math.max(this.x, min);
    this.x = Math.min(this.x, max);
  }

  clampY(min, max) {
    this.y = Math.max(this.y, min);
    this.y = Math.min(this.y, max);
  }

  copyFrom(p) {
    this.x = p.x;
    this.y = p.y;
  }

  clone() {
    return new Point_Point(this.x, this.y);
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }

  divide(p) {
    return new Point_Point(this.x / p.x, this.y / p.y);
  }

  divideScalar(scalar) {
    return new Point_Point(this.x / scalar, this.y / scalar);
  }

  multiply(p) {
    return new Point_Point(this.x * p.x, this.y * p.y);
  }

  multiplyScalar(scalar) {
    return new Point_Point(this.x * scalar, this.y * scalar);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  subtract(p) {
    return new Point_Point(this.x - p.x, this.y - p.y);
  }

  serialize() {
    return { x: this.x, y: this.y };
  }

  deserialize(obj) {
    this.copyFrom(obj);
  }

  math(callback) {
    this.x = callback(this.x);
    this.y = callback(this.y);
    return this;
  }

  toString() {
    return '[Point x=' + this.x + ' y=' + this.y + ']';
  }
}

// CONCATENATED MODULE: ./js/tsunami/geom/Rectangle.js


class Rectangle_Rectangle {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this._position = new Point_Point();
    this._size = new Point_Point();
    this.center = new Point_Point();
    this.halfSize = new Point_Point();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get x() {
    return this.position.x;
  }

  set x(value) {
    this.position.x = value;
    this.center.x = this.position.x + this.halfSize.x;
  }

  get y() {
    return this.position.y;
  }

  set y(value) {
    this.position.y = value;
    this.center.y = this.position.y + this.halfSize.y;
  }

  get width() {
    return this.size.x;
  }

  set width(value) {
    this.size.x = value;
    this.halfSize.x = value / 2;
    this.center.x = this.position.x + this.halfSize.x;
  }

  get height() {
    return this.size.y;
  }

  set height(value) {
    this.size.y = value;
    this.halfSize.y = value / 2;
    this.center.y = this.position.y + this.halfSize.y;
  }

  contains(point) {
    const hit =
      point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height
        ? true
        : false;
    return hit;
  }

  intersects(rect) {
    return (
      rect.x + rect.width > this.x &&
      rect.y + rect.height > this.y &&
      rect.x < this.x + this.width &&
      rect.y < this.y + this.height
    );
  }

  intersect(b) {
    const a = this;
    const x = Math.max(a.x, b.x);
    const num1 = Math.min(a.x + a.width, b.x + b.width);
    const y = Math.max(a.y, b.y);
    const num2 = Math.min(a.y + a.height, b.y + b.height);
    let result;
    if (num1 >= x && num2 >= y) {
      result = new Rectangle_Rectangle(x, y, num1 - x, num2 - y);
    } else {
      result = new Rectangle_Rectangle();
    }
    return result;
  }

  equals(rect) {
    return this.x === rect.x && this.y === rect.y && this.width === rect.width && this.height === rect.height;
  }

  clone() {
    return new Rectangle_Rectangle(this.x, this.y, this.width, this.height);
  }

  copyFrom(rect) {
    this.x = rect.x;
    this.y = rect.y;
    this.width = rect.width;
    this.height = rect.height;
  }

  get position() {
    return this._position;
  }

  set position(value) {
    this._position = value;
    this.center.x = this.position.x + this.halfSize.x;
    this.center.y = this.position.y + this.halfSize.y;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get area() {
    return this.size.x * this.size.y;
  }

  toString() {
    return '[Rectangle x=' + this.x + ' y=' + this.y + ' width=' + this.width + ' height=' + this.height + ']';
  }

  get widthToHeight() {
    return this.width / this.height;
  }

  get heightToWidth() {
    return this.height / this.width;
  }

  scaleWidth(height) {
    return new Rectangle_Rectangle(this.x, this.y, height * this.widthToHeight, height);
  }

  scaleHeight(width) {
    return new Rectangle_Rectangle(this.x, this.y, width, width * this.heightToWidth);
  }

  scaleToFillRect(rect) {
    // let scaled = this.scaleHeight(rect.width);
    //
    // if (scaled.height < rect.height) {
    // 	scaled = this.scaleWidth(rect.height);
    // }
    const amount = this.getScaleToFill(rect);
    return this.scale(amount, amount);
  }

  scaleToFitRect(rect) {
    // let scaled = this.scaleHeight(rect.width);
    //
    // if (scaled.height > rect.height) {
    // 	scaled = this.scaleWidth(rect.height);
    // }
    // scaled.x = (rect.width - scaled.width) / 2;
    // scaled.y = (rect.height - scaled.height) / 2;
    const amount = this.getScaleToFitRect(rect);
    return this.scale(amount, amount);
  }

  scale(x, y) {
    return new Rectangle_Rectangle(this.x, this.y, this.width * x, this.height * y);
  }

  scaleToArea(area) {
    const height = Math.sqrt(area / this.widthToHeight);
    const width = area / height;
    return new Rectangle_Rectangle(0, 0, width, height);
  }

  getScaleToFill(rect) {
    let scale;
    if (this.widthToHeight > rect.widthToHeight) {
      scale = rect.height / this.height;
    } else {
      scale = rect.width / this.width;
    }
    return scale;
  }

  getScaleToFitRect(rect) {
    let scale;
    if (this.widthToHeight > rect.widthToHeight) {
      scale = rect.width / this.width;
    } else {
      scale = rect.height / this.height;
    }
    return scale;
  }

  get isPortrait() {
    return this.width <= this.height;
  }

  get isLandscape() {
    return this.height <= this.width;
  }

  get topLeft() {
    return this.position;
  }

  get topRight() {
    return new Point_Point(this.x + this.width, this.y);
  }

  get bottomRight() {
    return this.position.add(this.size);
  }

  get bottomLeft() {
    return new Point_Point(this.x, this.y + this.height);
  }

  getRandomPoint() {
    const randomSize = Point_Point.random();
    randomSize.x *= this.size.x;
    randomSize.y *= this.size.y;
    return this.position.add(randomSize);
  }
}

// CONCATENATED MODULE: ./js/tsunami/window.js



let isMobile;
if (typeof navigator !== 'undefined') {
  isMobile = {
    android: navigator.userAgent.match(/Android/i) ? true : false,
    blackBerry: navigator.userAgent.match(/BlackBerry/i) ? true : false,
    iOS: navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false,
    windows: navigator.userAgent.match(/IEMobile/i) ? true : false,
  };
  isMobile.any = isMobile.android || isMobile.blackBerry || isMobile.iOS || isMobile.windows;
}

let isTouch;

if (typeof window !== 'undefined') {
  isTouch = 'ontouchend' in window;
}

function getCookie(cname) {
  const name = cname + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function serialize(obj) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}

function getSearchParams(url, dontDecodeURI, obj = {}) {
  if (!url) {
    url = window.location.href;
  }

  if (url.indexOf('?') !== -1) {
    const hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (let i = 0; i < hashes.length; i++) {
      const string = hashes[i];
      const equalIndex = string.indexOf('=');
      if (equalIndex !== -1) {
        const hash = [];
        //let hash = hashes[i].split('=');
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
  const rectangle = new Rectangle_Rectangle();
  rectangle.width = window.innerWidth;
  rectangle.height = window.innerHeight;
  return rectangle;
}

function localToGlobal(element, root, point, debug = false) {
  if (!point) {
    point = new Point_Point();
  }
  while (element && element !== root) {
    //point.x += element.offsetLeft - element.parentNode.scrollLeft;
    //point.y += element.offsetTop - element.parentNode.scrollTop;
    if (debug) {
      console.log('localToGlobal element', element.nodeName, element.className, element.offsetTop);
    }
    point.x += element.offsetLeft;
    point.y += element.offsetTop;
    element = element.parentNode;
  }
  return point;
}

function localToGlobalX(element, root, x = 0, debug = false) {
  while (element !== root) {
    // if (debug) {
    // 	console.log("element", element.className, element.offsetLeft);
    // }
    x += element.offsetLeft;
    element = element.parentNode;
  }
  return x;
}

function localToGlobalY(element, root, y = 0, debug = false) {
  while (element !== root) {
    // if (debug) {
    // 	console.log("element", element.nodeName, element.className, element.offsetTop);
    // }
    y += element.offsetTop;
    element = element.parentNode;
  }
  return y;
}

function hasWebGL() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
}

function isHidden() {
  return document[window.hidden];
}

function forceProtocol(url, protocol) {
  const isHttps = protocol.indexOf('https') !== -1;
  const urlIsHttps = url.indexOf('https') !== -1;
  if (isHttps && !urlIsHttps) {
    url = url.split('http').join('https');
  } else if (!isHttps && urlIsHttps) {
    url = url.split('https').join('http');
  }
  return url;
}

function fileExists(url) {
  const req = new XMLHttpRequest();
  req.open('HEAD', url, false);
  req.send();
  return req.status !== 404;
}

function getElementSelector(element) {
  let names = [];
  while (element) {
    let elSelector = element.nodeName;
    const className = element.className;
    if (className) {
      elSelector = elSelector + '.' + className.split(' ').join('.');
    }
    names.push(elSelector);
    if (element !== document.body) {
      element = element.parentNode;
    } else {
      element = null;
    }
  }
  names = names.reverse();
  const selector = names.join(' > ');
  return selector;
}

// CONCATENATED MODULE: ./js/tsunami/events.js


const events = {
  mouseover: 'mouseover',
  mouseout: 'mouseout',
  mousedown: 'mousedown',
  mouseup: 'mouseup',
  mousemove: 'mousemove',
  click: 'click',
  transitionend: 'transitionend',
  animationstart: 'animationstart',
  animationiteration: 'animationiteration',
  animationend: 'animationend',
};

if (isTouch) {
  events.mouseover = 'touchstart';
  events.mouseout = 'touchend';
  events.mousedown = 'touchstart';
  events.mouseup = 'touchend';
  events.mousemove = 'touchmove';
  events.click = 'click';
}

const platforms = {
  OTransition: {
    transitionend: 'otransitionend',
    animationstart: 'oanimationstart',
    animationiteration: 'oanimationiteration',
    animationend: 'oanimationend',
  },
  MozTransition: {
    transitionend: 'transitionend',
    animationstart: 'moznimationstart',
    animationiteration: 'moznimationiteration',
    animationend: 'moznimationend',
  },
  WebkitTransition: {
    transitionend: 'webkitTransitionEnd',
    animationstart: 'webkitAnimationStart',
    animationiteration: 'webkitAnimationIteration',
    animationend: 'webkitAnimationEnd',
  },
};

if (typeof window !== 'undefined') {
  window.addEventListener('load', function () {
    for (const i in platforms) {
      const data = platforms[i];
      if (document.body.style[i] !== undefined) {
        events.transitionend = data.transitionend;
        events.animationstart = data.animationstart;
        events.animationiteration = data.animationiteration;
        events.animationend = data.animationend;
      }
    }
  });
}

function createCustomEvent(type, params) {
  let event;
  try {
    event = new CustomEvent(event, params);
  } catch (e) {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, params.bubbles, params.bubbles, params.detail);
  }
  return event;
}

class BaseEvent extends Event {
  constructor(type, data, eventInit) {
    super(type, eventInit);
    this.data = data;
  }
}

// CONCATENATED MODULE: ./js/tsunami/ChangeEvent.js


class ChangeEvent_ChangeEvent extends BaseEvent {
  static dispatch(eventTarget, type, value) {
    eventTarget.dispatchEvent(new ChangeEvent_ChangeEvent(type, value));
  }
}

// CONCATENATED MODULE: ./js/tsunami/data/Data.js


class Data_Data extends EventTarget {
  get value() {
    return this._value;
  }

  set value(value) {
    if (value !== this._value || this.forceChangeEvent) {
      this._value = value;
      ChangeEvent_ChangeEvent.dispatch(this, 'value', this.value);
    }
  }

  reset(value) {
    this.value = value;
  }

  toString() {
    if (this.debug) {
      console.log('Data.toString', this.value);
    }
    return this.value.toString();
  }

  serialize() {
    return this.value;
  }

  deserialize(value) {
    this.value = value;
  }

  copy(data) {
    this.value = data.value;
    ChangeEvent_ChangeEvent.dispatch(this, 'value', this.value);
  }

  destroy() {
    this.value = null;
    return super.destroy();
  }

  static get CHANGE() {
    return 'value';
  }
}

// CONCATENATED MODULE: ./js/tsunami/data/DataPrimitive.js


class DataPrimitive_DataPrimitive extends Data_Data {
  constructor(value, modifiers = []) {
    super();
    this.modifiers = modifiers;
    this.length = new Data_Data();
    this.value = value;
  }

  get value() {
    return super.value;
  }

  set value(value) {
    for (let i = 0; i < this.modifiers.length; i++) {
      const modifier = this.modifiers[i];
      if (modifier) {
        value = modifier(value);
      }
    }
    super.value = value;
    this.length.value = Math.max(1, this.value.toString().length);
  }

  destroy() {
    this.modifiers = [];
    if (this.validation) {
      try {
        this.validation.destroy();
      } catch (e) {
        // continue regardless of error
      }
    }
    this.validation = null;
    return super.destroy();
  }
}

// CONCATENATED MODULE: ./js/tsunami/utils/string.js
function truncate(string, maxLength, addAfter = '') {
  if (string.length > maxLength) {
    string = string.substr(0, maxLength - addAfter.length) + addAfter;
  }
  return string;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function isLengthMinimum1(string) {
  return string.length > 0;
}

function boolify(value = false) {
  return ['true', '1', 'yes', 'y', 'on'].indexOf(String(value).toLowerCase()) !== -1;
}

function string_serialize(obj) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}

// CONCATENATED MODULE: ./js/tsunami/data/BooleanData.js



class BooleanData_BooleanData extends DataPrimitive_DataPrimitive {
  constructor(value = false, modifiers = []) {
    super(value, modifiers);
  }

  get value() {
    return super.value;
  }

  set value(value = false) {
    super.value = boolify(value);
  }

  reset(value = false) {
    super.reset(value);
  }
}

// CONCATENATED MODULE: ./js/tsunami/data/NumberData.js


class NumberData_NumberData extends DataPrimitive_DataPrimitive {
  constructor(value = NaN, modifiers = []) {
    super(value, modifiers);
  }

  get value() {
    return super.value;
  }

  set value(value = NaN) {
    super.value = Number(value);
  }

  reset(value = 0) {
    super.reset(value);
  }

  add(value = 1) {
    this.value += value;
  }

  subtract(value = 1) {
    this.value -= value;
  }
}

// CONCATENATED MODULE: ./js/tsunami/data/ObjectData.js



class ObjectData_ObjectData extends Data_Data {
  constructor(value) {
    super();
    this.value = value;
    this.forceChangeEvent = false;
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (value !== this._value) {
      this._deselectValue(this._value);
      this._selectValue(value);
    }
    super.value = value;
  }

  toString() {
    return this.value.toString();
  }

  _deselectValue(data) {
    if (data) {
      if (data.isSelected) {
        if (data.isSelected instanceof BooleanData_BooleanData) {
          data.isSelected.value = false;
        }
      }
    }
  }

  _selectValue(data) {
    if (data) {
      if (data.isSelected) {
        if (data.isSelected instanceof BooleanData_BooleanData) {
          data.isSelected.value = true;
        }
      }
    }
  }
}

// CONCATENATED MODULE: ./js/tsunami/data/ArrayData.js






class ArrayData_ArrayData extends Data_Data {
  static get ITEM_CHANGE() {
    return 'item-change';
  }

  constructor() {
    super();

    this.dataItemChangeHandler = this.dataItemChangeHandler.bind(this);
    this.selectedItemChange = this.selectedItemChange.bind(this);
    this.selectedIndexChange = this.selectedIndexChange.bind(this);

    this.lastIndex = new NumberData_NumberData();
    this.length = new NumberData_NumberData();
    this.length.addEventListener(Data_Data.CHANGE, () => {
      this.lastIndex.value = this.length.value - 1;
    });
    this.length.value = arguments.length;
    this._value = [];
    this.selectedItem = new ObjectData_ObjectData();
    this.selectedItem.addEventListener(Data_Data.CHANGE, this.selectedItemChange);
    this.selectedIndex = new NumberData_NumberData();
    this.selectedIndex.addEventListener(Data_Data.CHANGE, this.selectedIndexChange);
    this.nextIndex = new NumberData_NumberData();
    this.prevIndex = new NumberData_NumberData();
    this.dataClass = Object;
    this.push.apply(this, arguments);
  }

  selectedItemChange(event) {
    this.updateSelectedIndex();
    this.setSelectedData(this.selectedItem.value);
  }

  updateSelectedIndex() {
    this.selectedIndex.removeEventListener(Data_Data.CHANGE, this.selectedIndexChange);
    const index = this.value.indexOf(this.selectedItem.value);
    this.selectedIndex.value = index;
    this.selectedIndex.addEventListener(Data_Data.CHANGE, this.selectedIndexChange);
  }

  setSelectedData(value) {
    if (this.previousSelectedItem) {
      if (this.previousSelectedItem.isSelectedItem instanceof Data_Data) {
        this.previousSelectedItem.isSelectedItem.value = false;
      }
    }
    if (this.selectedData) {
      this.selectedData.copy(value);
    }
    this.previousSelectedItem = value;
    if (this.previousSelectedItem) {
      if (this.previousSelectedItem.isSelectedItem instanceof Data_Data) {
        this.previousSelectedItem.isSelectedItem.value = true;
      }
    }

    const index = this.selectedIndex.value;

    let nextIndex = index + 1;
    if (nextIndex > this.value.length - 1) {
      nextIndex = 0;
    }
    this.nextIndex.value = nextIndex;
    if (this.nextData) {
      this.nextData.copy(this.value[this.nextIndex.value]);
    }

    let prevIndex = index - 1;
    if (prevIndex < 0) {
      prevIndex = this.value.length - 1;
    }
    this.prevIndex.value = prevIndex;
    if (this.prevData) {
      this.prevData.copy(this.value[this.prevIndex.value]);
    }
  }

  selectedIndexChange(event) {
    const index = this.selectedIndex.value;
    this.selectedItem.removeEventListener(Data_Data.CHANGE, this.selectedItemChange);
    this.selectedItem.value = this.value[index];
    this.selectedItem.addEventListener(Data_Data.CHANGE, this.selectedItemChange);
    this.setSelectedData(this.selectedItem.value);
  }

  clear() {
    return this.splice(0, this.value.length);
  }

  dataItemChangeHandler(e) {
    const event = new BaseEvent(ArrayData_ArrayData.ITEM_CHANGE, this.value);
    this.dispatchEvent(event);
  }

  item(index) {
    return this._value[index];
  }

  get value() {
    return this._value;
  }

  set value(value) {
    if (!value) {
      value = [];
    }

    for (let i = 0; i < this._value.length; i++) {
      const oldItem = this._value[i];
      if (oldItem instanceof Data_Data) {
        oldItem.removeEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    const args = [0, this.value.length].concat(value);
    this.splice.apply(this, args);
    // this.splice(0, this.value.length);
    // this._value = value;

    for (let i = 0; i < this._value.length; i++) {
      const item = this._value[i];
      if (item instanceof Data_Data) {
        item.addEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    this.length.value = this._value.length;

    ChangeEvent_ChangeEvent.dispatch(this, 'value', this.value);
    this.dataItemChangeHandler(null);

    if (this.includes(this.selectedItem.value)) {
      this.updateSelectedIndex();
    } else {
      this.selectedItem.value = null;
    }
  }

  indexOf(searchElement, fromIndex) {
    return this._value.indexOf(searchElement, fromIndex);
  }

  map(callback) {
    return this._value.map(callback);
  }

  find(callback) {
    return this._value.find(callback);
  }

  findByKey(key, value) {
    const selected = this.find((element) => {
      return element[key].toString() === value.toString();
    });
    return selected;
  }

  filter(callback) {
    return this._value.filter(callback);
  }

  pop() {
    const item = this._value.pop();
    if (item instanceof Data_Data) {
      item.removeEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
    }
    this.length.value = this._value.length;
    const event = new BaseEvent('remove', {
      value: [item],
      index: this.value.length,
      total: 1,
    });
    this.dispatchEvent(event);
    if (item === this.selectedItem.value) {
      this.selectedItem.value = null;
    } else {
      this.updateSelectedIndex();
    }
    return item;
  }

  push() {
    const previousLength = this.value.length;
    const length = this._value.push.apply(this._value, arguments);
    this.length.value = length;
    const added = [];
    for (let i = 0; i < arguments.length; i++) {
      added.push(arguments[i]);
    }
    for (let i = 0; i < added.length; i++) {
      const item = added[i];
      if (item instanceof Data_Data) {
        item.addEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    if (added.length > 0) {
      const event = new BaseEvent('add', {
        value: added,
        index: previousLength,
        total: arguments.length,
      });
      this.dispatchEvent(event);
    }
    return length;
  }

  reverse() {
    this._value.reverse();
    const event = new BaseEvent('reverse', { value: this._value });
    this.dispatchEvent(event);
    this.updateSelectedIndex();
  }

  shift() {
    const item = this._value.shift();
    if (item instanceof Data_Data) {
      item.removeEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
    }
    this.length.value = this._value.length;
    const event = new BaseEvent('remove', {
      value: [item],
      index: 0,
      total: 1,
    });
    this.dispatchEvent(event);
    if (item === this.selectedItem.value) {
      this.selectedItem.value = null;
    } else {
      this.updateSelectedIndex();
    }
    return item;
  }

  swap(index_A, index_B) {
    const temp = this._value[index_A];
    this._value[index_A] = this._value[index_B];
    this._value[index_B] = temp;
    const event = new BaseEvent('sort', { value: this._value });
    this.dispatchEvent(event);
    this.updateSelectedIndex();
  }

  sort(compareFunction) {
    this._value.sort(compareFunction);
    const event = new BaseEvent('sort', { value: this._value });
    this.dispatchEvent(event);
    this.updateSelectedIndex();
  }

  splice() {
    const elements = this._value.splice.apply(this._value, arguments);
    for (let i = 0; i < elements.length; i++) {
      const item = elements[i];
      if (item instanceof Data_Data) {
        item.removeEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    const added = [];
    for (let i = 2; i < arguments.length; i++) {
      added.push(arguments[i]);
    }
    this.length.value = this._value.length;
    for (let i = 0; i < added.length; i++) {
      const item = added[i];
      if (item instanceof Data_Data) {
        item.addEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    const index = arguments[0];
    if (elements.length > 0) {
      const event = new BaseEvent('remove', {
        value: elements,
        index: index,
        total: elements.length,
      });
      this.dispatchEvent(event);
    }
    if (added.length > 0) {
      const event = new BaseEvent('add', {
        value: added,
        index: index,
        total: added.length,
      });
      this.dispatchEvent(event);
    }
    // if (elements.length > 0 || added.length > 0) {
    // }
    if (this.includes(this.selectedItem.value)) {
      this.updateSelectedIndex();
    } else {
      this.selectedItem.value = null;
    }
    return elements;
  }

  remove(element) {
    const index = this.indexOf(element);
    if (index !== -1) {
      this.splice(index, 1);
    }
  }

  unshift() {
    const length = this._value.unshift.apply(this._value, arguments);
    this.length.value = length;
    const added = [];
    for (let i = 0; i < arguments.length; i++) {
      added.push(arguments[i]);
    }
    for (let i = 0; i < added.length; i++) {
      const item = added[i];
      if (item instanceof Data_Data) {
        item.addEventListener(Data_Data.CHANGE, this.dataItemChangeHandler);
      }
    }
    if (added.length > 0) {
      const event = new BaseEvent('add', {
        value: added,
        index: 0,
        total: arguments.length,
      });
      this.dispatchEvent(event);
    }
    this.updateSelectedIndex();
    return length;
  }

  includes(element) {
    const index = this.indexOf(element);
    return index !== -1;
  }

  join() {
    return this._value.join.apply(this._value, arguments);
  }

  concat() {
    return this._value.concat.apply(this._value, arguments);
  }

  slice() {
    return this._value.slice.apply(this._value, arguments);
  }

  serialize() {
    const array = [];
    this.forEach((obj) => {
      array.push(obj.serialize());
    });
    return array;
  }

  deserialize(data) {
    const array = [];
    data.forEach((obj) => {
      const instance = new this.dataClass();
      instance.deserialize(obj);
      array.push(instance);
    });
    this.value = array;
  }

  toString() {
    return this.value.toString();
  }
}

// CONCATENATED MODULE: ./js/tsunami/await.js
function awaitEvent(dispatcher, eventName, stopPropagation, stopImmediatePropagation, preventDefault) {
  const promise = new Promise(function (resolve, reject) {
    const eventHandler = function (event) {
      // event.stopPropagation();
      if (stopPropagation && event.stopPropagation) {
        event.stopPropagation();
      }
      if (stopImmediatePropagation && event.stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }
      if (preventDefault && event.preventDefault) {
        event.preventDefault();
      }
      dispatcher.removeEventListener(eventName, eventHandler);
      resolve(event);
    };

    dispatcher.addEventListener(eventName, eventHandler);
  });

  return promise;
}

function awaitTransition(dispatcher, cssProperties) {
  const promise = new Promise(function (resolve, reject) {
    let eventName = 'transitionend';
    const eventNames = {
      OTransition: 'otransitionend',
      WebkitTransition: 'webkitTransitionEnd',
    };
    for (const i in eventNames) {
      if (document.body.style[i] !== undefined) {
        eventName = eventNames[i];
      }
    }

    const eventHandler = function (event) {
      let isProperty;
      for (let i = 0; i < cssProperties.length; i++) {
        const prop = cssProperties[i];
        if (prop === event.propertyName) {
          isProperty = true;
        }
      }
      if (!isProperty) {
        return;
      }
      event.stopPropagation();
      //event.stopImmediatePropagation();
      //event.preventDefault();
      dispatcher.removeEventListener(eventName, eventHandler);
      resolve(event);
    };

    dispatcher.addEventListener(eventName, eventHandler);
  });

  return promise;
}

function awaitAnimation(dispatcher, animationName) {
  const promise = new Promise(function (resolve, reject) {
    let eventName = 'animationend';
    const eventNames = {
      OTransition: 'oanimationend',
      MozTransition: 'moznimationend',
      WebkitTransition: 'webkitAnimationEnd',
    };
    for (const i in eventNames) {
      if (document.body.style[i] !== undefined) {
        eventName = eventNames[i];
      }
    }

    const eventHandler = function (event) {
      if (animationName !== event.animationName || dispatcher !== event.target) {
        return;
      }
      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
      dispatcher.removeEventListener(eventName, eventHandler);
      resolve(event);
    };

    dispatcher.addEventListener(eventName, eventHandler);
  });

  return promise;
}

function awaitTimeout(seconds = 0) {
  if (isNaN(seconds) || seconds <= 0) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, seconds * 1000);
    });
  }
}

function awaitCallback(target, method) {
  const promise = new Promise((resolve, reject) => {
    target[method] = () => {
      delete target[method];
      resolve(arguments);
    };
  });
  return promise;
}

function awaitAnimationFrame(total = 1) {
  total = Math.max(1, Math.round(total));
  let count = 0;
  const promise = new Promise(function (resolve, reject) {
    function animationFrame() {
      count++;
      if (count >= total) {
        resolve();
      } else {
        window.requestAnimationFrame(animationFrame);
      }
    }
    window.requestAnimationFrame(animationFrame);
  });
  return promise;
}

function awaitVideoFirstFrame(video, timeout = 5000, debug) {
  const loadedmetadata = awaitEvent(video, 'loadedmetadata');
  // const loadedmetadataTimeout = awaitTimeout(timeout);
  const promise = Promise.race([loadedmetadata]);
  return promise.then((event) => {
    if (debug) {
      console.log('loadedmetadata');
    }
    const loadeddataPromise = awaitEvent(video, 'loadeddata');
    let playPromise = video.play();
    if (!playPromise) {
      playPromise = loadeddataPromise;
    }
    // const playPromiseTimeout = awaitTimeout(timeout);
    const promise = Promise.race([playPromise]);
    return promise.then(() => {
      if (debug) {
        console.log('playPromise or loadeddata');
      }
      video.pause();
      return video;
    });
  });
}

// CONCATENATED MODULE: ./js/tsunami/data/StringData.js


class StringData_StringData extends DataPrimitive_DataPrimitive {
  constructor(value = '', modifiers = []) {
    super(value, modifiers);
  }

  get value() {
    return super.value;
  }

  set value(value = '') {
    super.value = value.toString();
  }

  reset(value = '') {
    super.reset(value);
  }
}

// CONCATENATED MODULE: ./js/model/Action.js









class Action_Action extends EventTarget {

	constructor(type = "Action", name = "Action", description = "Add an Action") {
		super();
		this.capture = this.capture.bind(this);
		this.play = this.play.bind(this);
		this.reCapture = this.reCapture.bind(this);

		this.type = type;
		this.name = new StringData_StringData();
		this.name.addEventListener(Data_Data.CHANGE, () => {
			this.name.length.value = Math.max(this.name.value.length, 4);
		});
		this.name.value = name;
		this.icon = new StringData_StringData();
		this.description = new StringData_StringData(description);
		this.captureDescription = new StringData_StringData();
		this.isTestable = new BooleanData_BooleanData();
		this.isCaptureable = new BooleanData_BooleanData();
		this.isCapturing = new BooleanData_BooleanData();
		this.changeCursorOnCapture = new BooleanData_BooleanData();
		this.isCapturing.addEventListener(Data_Data.CHANGE, (event) => {
			if (this.changeCursorOnCapture.value) app.model.showCaptureIcon.value = event.data;
		});
		this.isPlaying = new BooleanData_BooleanData();
		this.delay = new NumberData_NumberData(0);
		this.isSelectedItem = new BooleanData_BooleanData();


		this._array = [this];
	}

	get array() {
		return this._array;
	}

	set array(value) {
		this._array = value;
		this.dispatchEvent(new BaseEvent("change_array", value));
	}

	clone() {

	}

	copy(action) {
		if(!action) return;
		this.delay.value = action.delay.value;
		this.isCaptureable.value = action.isCaptureable.value;
		this.isTestable.value = action.isTestable.value;
	}

	triggerDelay() {
		let promise1 = awaitTimeout(this.delay.value);
		let promise2 = promise1.then(() => {
			return this.trigger();
		});
		return promise2;
	}

	trigger() {
		return Promise.resolve();
	}

	serialize() {
		return {
			type:this.type,
			delay:this.delay.serialize(),
			name:this.name.serialize()
		}
	}

	deserialize(data) {
		if(!data) return;
		this.type = data.type;
		this.delay.deserialize(data.delay);
		this.name.deserialize(data.name);
	}

	capture() {
		this.isCapturing.value = true;
	}

	reCapture() {
		Object(GABridge["a" /* sendTrackEventMessage */])("Action", "reCapture", this.type);
		this.capture();
	}

	captureComplete() {
		this.isCapturing.value = false;
		app.model.save();
	}

	captureAtInit() {
	}

	play() {
		Object(GABridge["a" /* sendTrackEventMessage */])("Action", "play", this.type);
		this.isPlaying.value = true;
		let promise1 = this.trigger();
		let promise2 = promise1.then(() => {
			this.isPlaying.value = false;
			app.model.save();
		});
		return promise2;
	}
}
// CONCATENATED MODULE: ./js/tsunami/animation/Clock.js


class Clock_Clock extends EventTarget {
  constructor() {
    super();
    this.time = NaN;
    this.index = 0;
    this.seconds = 0;
    this.allFrames = 0;
    this.animationFrame = this.animationFrame.bind(this);
  }

  static get TICK() {
    return 'tick';
  }

  static get FPS() {
    return 'fps';
  }

  start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    window.requestAnimationFrame(this.animationFrame);
    this.fpsTimeout = setTimeout(this.dispatchFrameSeconds.bind(this), 1000);
    return this;
  }

  pause() {
    this.isRunning = false;
    clearTimeout(this.fpsTimeout);
  }

  animationFrame(time) {
    this.time = time;
    this.index++;
    const event = new BaseEvent(Clock_Clock.TICK, this.time);
    this.dispatchEvent(event);
    if (this.isRunning) {
      window.requestAnimationFrame(this.animationFrame);
    }
  }

  dispatchFrameSeconds() {
    this.allFrames += this.index;
    this.seconds++;
    const event = new BaseEvent(Clock_Clock.FPS, {
      frames: this.index,
      averageFrames: Math.round((this.allFrames / this.seconds) * 10) / 10,
    });
    this.dispatchEvent(event);
    this.index = 0;
    setTimeout(this.dispatchFrameSeconds.bind(this), 1000);
  }
}

let clock;

function getClock() {
  if (!clock) clock = new Clock_Clock().start();
  return clock;
}

// CONCATENATED MODULE: ./js/tsunami/animation/Tween.js



class Tween_Tween extends EventTarget {
  constructor(
    startTime = 0,
    duration = 1,
    properties = [],
    updateHandler = null,
    completeHandler = null,
    name = '',
    debug = false
  ) {
    super();
    if (startTime < 0) {
      throw new Error('Tween startTime must be greater than or equal to 0');
    }
    if (duration <= 0) {
      throw new Error('Tween duration must be greater than 0');
    }
    this.tick = this.tick.bind(this);
    this._startTime = startTime;
    this._duration = duration;
    this.name = name;
    this.debug = debug;
    this.properties = properties;
    this.updateHandler = updateHandler;
    this.completeHandler = completeHandler;
    this._tweenTime = NaN;
    this._time = NaN;
    this.forceUpdate = false;
  }

  get startTime() {
    return this._startTime;
  }

  set startTime(value) {
    this._startTime = value;
    this.dispatchEvent(new Event(Tween_Tween.CHANGE));
  }

  get endTime() {
    return this.startTime + this.duration;
  }

  get duration() {
    return this._duration;
  }

  set duration(value) {
    this._duration = Object(number["i" /* roundDecimalToPlace */])(value, 3);
    this.dispatchEvent(new Event(Tween_Tween.CHANGE));
  }

  start(time = 0, updateHandler = null) {
    this.clock = getClock();
    this.stop();
    if (updateHandler) {
      this.updateHandler = updateHandler;
    }
    const promise = new Promise((resolve, reject) => {
      const completeCallback = (event) => {
        this.removeEventListener(Tween_Tween.COMPLETE, completeCallback);
        resolve(this);
      };
      this.addEventListener(Tween_Tween.COMPLETE, completeCallback);
    });
    this._tweenTime = NaN;
    this.time = time;
    this.previousTime = this.clock.time;
    this.clock.addEventListener(Clock_Clock.TICK, this.tick);
    return promise;
  }

  tick(event) {
    const currentTime = this.clock.time;
    this.time += (currentTime - this.previousTime) / 1000;
    this.previousTime = currentTime;
  }

  pause() {
    this.clock.removeEventListener(Clock_Clock.TICK, this.tick);
  }

  resume() {
    this.previousTime = this.clock.time;
    this.clock.addEventListener(Clock_Clock.TICK, this.tick);
  }

  stop() {
    if(this.clock) this.clock.removeEventListener(Clock_Clock.TICK, this.tick);
  }

  get time() {
    return this._time;
  }

  set time(value) {
    // value = Math.min(this.startTime + this.duration, value);
    // value = Math.max(0, value);
    this._time = value;
    let tweenTime = value - this.startTime;
    tweenTime = Math.max(tweenTime, 0);
    tweenTime = Math.min(tweenTime, this.duration);
    if (tweenTime !== this._tweenTime || this.forceUpdate) {
      this._tweenTime = tweenTime;
      this.properties.forEach((property) => {
        property.calculate(tweenTime / this.duration, this.debug);
      });
      const updateEvent = new Event(Tween_Tween.UPDATE);
      if (this.updateHandler) {
        this.updateHandler(updateEvent);
      }
      this.dispatchEvent(updateEvent);
    }
    if (tweenTime >= this.duration) {
      const completeEvent = new Event(Tween_Tween.COMPLETE);
      if (this.completeHandler) {
        this.completeHandler(completeEvent);
      }
      this.stop();
      this.dispatchEvent(completeEvent);
    }
  }

  set timeFraction(value) {
    this.time = value * this.duration;
  }

  get timeFraction() {
    return this.time / this.duration;
  }

  static get COMPLETE() {
    return 'complete';
  }

  static get UPDATE() {
    return 'update';
  }

  static get CHANGE() {
    return 'change';
  }
}

// CONCATENATED MODULE: ./js/tsunami/animation/TweenProperty.js
class TweenProperty {
  constructor(target, name, startValue, endValue, ease, roundingFunc, debug = false) {
    this.target = target;
    this.name = name;
    this.startValue = startValue;
    this.endValue = endValue;
    this.ease = ease;
    this.roundingFunc = roundingFunc || this.noRounding;
    this.debug = debug;
  }

  calculate(time) {
    let value = this.ease(time, this.startValue, this.endValue - this.startValue, 1);
    value = this.roundingFunc(value);
    this.target[this.name] = value;
  }

  noRounding(val) {
    return val;
  }
}

// CONCATENATED MODULE: ./js/tsunami/geom/CubicBezier.js


class CubicBezier_CubicBezier {
  constructor(p0, p1, p2, p3, samples = 100) {
    this.p0 = p0 || new Point_Point(0, 0);
    this.p1 = p1 || new Point_Point(0, 0);
    this.p2 = p2 || new Point_Point(1, 1);
    this.p3 = p3 || new Point_Point(1, 1);
    this.samples = samples;
    this.calculateLength();
  }

  clone() {
    return new CubicBezier_CubicBezier(this.p0.clone(), this.p1.clone(), this.p2.clone(), this.p3.clone(), this.samples);
  }

  calculateLength() {
    this.distances = [0];
    this.distancesX = [0];
    this.totalLength = 0;
    this.totalX = 0;
    let prev = this.p0;
    for (let i = 1; i < this.samples; i++) {
      const t = i / (this.samples - 1);
      // console.log("i", i, "t", t);
      const pt = this.getPoint(t);
      const diff = prev.subtract(pt); //( prev - pt );
      this.totalLength += diff.magnitude;
      this.distances[i] = this.totalLength;
      this.totalX -= diff.x;
      this.distancesX[i] = this.totalX;
      prev = pt;
    }
    // console.log("this.totalX", this.totalX);
    // console.log("this.distancesX", this.distancesX);
  }

  getPoint(t) {
    const a = Point_Point.lerp(this.p0, this.p1, t);
    const b = Point_Point.lerp(this.p1, this.p2, t);
    const c = Point_Point.lerp(this.p2, this.p3, t);
    const d = Point_Point.lerp(a, b, t);
    const e = Point_Point.lerp(b, c, t);
    const point = Point_Point.lerp(d, e, t);
    return point;
  }

  getPointOnCurve(t) {
    const time = this.sampleAt(t, this.distances);
    return this.getPoint(time);
  }

  getPointAtX(t) {
    const time = this.sampleAt(t, this.distancesX);
    const point = this.getPoint(time);
    point.x = t;
    return point;
  }

  sampleAt(u, array) {
    let i = 0;
    const lastIndex = array.length - 1;
    const targetArcLength = u * array[lastIndex];
    // binary search for the index with largest value smaller than target u distance
    let low = 0;
    let high = lastIndex;
    let comparison;
    while (low <= high) {
      i = Math.floor(low + (high - low) / 2); // less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats
      comparison = array[i] - targetArcLength;
      if (comparison < 0) {
        low = i + 1;
      } else if (comparison > 0) {
        high = i - 1;
      } else {
        high = i;
        break;
        // DONE
      }
    }
    i = high;
    if (array[i] === targetArcLength) {
      return i / lastIndex;
    }
    // we could get finer grain at lengths, or use simple interpolation between two points
    const lengthBefore = array[i];
    const lengthAfter = array[i + 1];
    const segmentLength = lengthAfter - lengthBefore;
    // determine where we are between the 'before' and 'after' points
    const segmentFraction = (targetArcLength - lengthBefore) / segmentLength;
    // add that fractional amount to t
    return (i + segmentFraction) / lastIndex;
  }
}

// CONCATENATED MODULE: ./js/tsunami/animation/CubicBezierEasing.js




class CubicBezierEasing_CubicBezierEasing extends CubicBezier_CubicBezier {
  constructor(x1 = 0, y1 = 0, x2 = 1, y2 = 1, samples = 100) {
    super(new Point_Point(0, 0), new Point_Point(x1, y1), new Point_Point(x2, y2), new Point_Point(1, 1), samples);
    this.ease = this.ease.bind(this);
  }

  ease(t, b, c, d) {
    const point = this.getPointAtX(t / d);
    return c * point.y + b;
  }

  clone() {
    return new CubicBezierEasing_CubicBezierEasing(this.p1.x, this.p1.y, this.p2.x, this.p1.y, this.samples);
  }
}

CubicBezierEasing_CubicBezierEasing.linear = {
  ease: new CubicBezierEasing_CubicBezierEasing(0, 0, 1, 1),
};

CubicBezierEasing_CubicBezierEasing.sine = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.37, 0, 0.63, 1),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.12, 0, 0.39, 0),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0.61, 1, 0.88, 1),
};

CubicBezierEasing_CubicBezierEasing.quad = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.45, 0, 0.55, 1),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.11, 0, 0.5, 0),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0.5, 1, 0.89, 1),
};

CubicBezierEasing_CubicBezierEasing.cubic = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.65, 0, 0.35, 1),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.32, 0, 0.67, 0),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0.33, 1, 0.68, 1),
};

CubicBezierEasing_CubicBezierEasing.quart = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.76, 0, 0.24, 1),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.5, 0, 0.75, 0),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0.25, 1, 0.5, 1),
};

CubicBezierEasing_CubicBezierEasing.quint = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.83, 0, 0.17, 1),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.64, 0, 0.78, 0),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0.22, 1, 0.36, 1),
};

CubicBezierEasing_CubicBezierEasing.expo = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.87, 0, 0.13, 1),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.7, 0, 0.84, 0),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0.16, 1, 0.3, 1),
};

CubicBezierEasing_CubicBezierEasing.back = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.68, -0.6, 0.32, 1.6),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.36, 0, 0.66, -0.56),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0.34, 1.56, 0.64, 1),
};

CubicBezierEasing_CubicBezierEasing.circ = {
  easeInOut: new CubicBezierEasing_CubicBezierEasing(0.85, 0, 0.15, 1),
  easeIn: new CubicBezierEasing_CubicBezierEasing(0.55, 0, 1, 0.45),
  easeOut: new CubicBezierEasing_CubicBezierEasing(0, 0.55, 0.45, 1),
};

// let cssVariables = "";
// for(let i in CubicBezierEasing) {
// 	let easingClass = CubicBezierEasing[i];
// 	for(let j in easingClass) {
// 		let cubicBezier = easingClass[j];
// 		let easeClassName = capitalize(i);
// 		let easeNameArray = j.split("ease");
// 		easeNameArray.shift();
// 		let easeName = capitalize(easeNameArray.join(""));
// 		let variable = `$ease${easeClassName}${easeName}: cubic-bezier(${cubicBezier.p1.x}, ${cubicBezier.p1.y}, ${cubicBezier.p2.x}, ${cubicBezier.p2.y});`;
// 		cssVariables = cssVariables + variable;
// 	}
// }
// console.log(cssVariables);

// CONCATENATED MODULE: ./js/tsunami/tsunami.js
const classes = {};

function getProperty(path, scope, debug = false) {
  if (debug) {
    console.log('getProperty path', path, 'scope', scope);
  }
  let value = null;
  try {
    value = new Function('return ' + path).bind(scope)();
  } catch (e) {
    // continue regardless of error
  }
  return value;
}

function define(name, classReference) {
  classes[name] = classReference;
}

// export function registerClass(classReference, name) {
// 	classes[name] = classReference;
// }

function createComponent(element, scope) {
  let className = element.nodeName.toLowerCase();
  let classReference = classes[className];
  if (!classReference) {
    className = element.getAttribute('is');
    if (className) {
      classReference = classes[className];
    }
  }
  if (classReference) {
    const component = new classReference(element);
    element.component = component;
  }
}

function setScope(element, scope) {
  if (element.component) {
    element.component.scope = scope;
  }
}

const directives = [createComponent, setScope];

function applyDirectives(element, scope) {
  const array = [element];
  const elements = getAllObjects(element, array);
  for (let j = 0; j < directives.length; j++) {
    const directive = directives[j];
    for (let i = elements.length - 1; i > -1; i--) {
      //for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      directive(el, scope);
    }
  }
}

const factories = [];
for (let i = 0; i < 5; i++) {
  factories.push(document.createElement('div'));
}
//
// export function importTemplate(template, scope) {
// 	if (window.renderTemplate) {
// 		template = window.renderTemplate(template, scope);
// 	}
// 	let factory = factories.shift();
// 	factories.push(factory);
// 	factory.innerHTML = template;
// 	let child = factory.children.item(0);
// 	// if (window.CustomElements) {
// 	// 	CustomElements.upgradeSubtree(child);
// 	// }
// 	applyDirectives(child, scope);
// 	return child;
// }

function importTemplate(template, scope = {}, debug = false) {
  let child;
  if (window.renderTemplate) {
    template = window.renderTemplate(template, scope);
  }
  const factory = factories.shift();
  factories.push(factory);
  factory.innerHTML = template;
  if (factory.children.length > 0) {
    child = factory.children.item(0);
  }
  // scope.scopeElement = child;
  applyDirectives(child, scope);
  return child;
}

function destroyElement(element) {
  if (element) {
    const elements = getAllObjects(element);
    for (let i = elements.length - 1; i > -1; i--) {
      const el = elements[i];
      if (el.component) {
        if (el.component.destroy) {
          try {
            el.component.destroy();
          } catch (e) {
            // continue regardless of error
          }
        }
        el.component = null;
      }
      // destroyElement(el);
    }
    element.innerHTML = null;
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
    if (element.component) {
      if (element.component.destroy) {
        try {
          element.component.destroy();
        } catch (e) {
          // continue regardless of error
        }
      }
      element.component = null;
    }
  }
}

function destroyElements(elements) {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    destroyElement(element);
  }
}

function getAllObjects(parent, array) {
  if (!array) {
    array = [];
  }
  if (parent.children) {
    for (let i = 0; i < parent.children.length; i++) {
      const child = parent.children.item(i);
      switch (child.nodeName) {
        case '#text':
        case '#comment':
        case 'BR':
        case 'TEMPLATE':
        case 'SCRIPT':
          break;
        default:
          array.push(child);
          getAllObjects(child, array);
          break;
      }
    }
  }
  return array;
}

// CONCATENATED MODULE: ./js/tsunami/data/DataModel.js



class DataModel_DataModel extends Data_Data {

	constructor(properties = {}) {
		super();
		this.changeHandler = this.changeHandler.bind(this);

		for(let i in properties) {
			this["_" + i] = properties[i];
			Object.defineProperty(this, i, {
				get : function(){
					return this["_" + i];
				},
                set : function(value) {
					if(this["_" + i] != value) {
						this["_" + i] = value;
						ChangeEvent_ChangeEvent.dispatch(this, i,  value);
						this.changeHandler();
					}
				},
				enumerable : true,
				configurable : true
			});
		}
	}

	get value() {
		return this;
	}

	changeHandler() {
		ChangeEvent_ChangeEvent.dispatch(this, "value", this);
	}

	destroy() {
		for(let i in this) {
			let data = this[i];
			if(data instanceof Data_Data) {
				data.destroy();
			}
			this[i] = null;
		}
		return super.destroy();
	}

}
// CONCATENATED MODULE: ./js/tsunami/data/Vector2Data.js






class Vector2Data_Vector2Data extends DataModel_DataModel {

	constructor(x = 0, y = 0) {
		super();

		this.x = new NumberData_NumberData(x);
		this.x.addEventListener(Data_Data.CHANGE, this.changeHandler);

		this.y = new NumberData_NumberData(y);
		this.y.addEventListener(Data_Data.CHANGE, this.changeHandler);
	}

	destroy() {
		this.x.removeEventListener(Data_Data.CHANGE, this.changeHandler);
		this.y.removeEventListener(Data_Data.CHANGE, this.changeHandler);
		return super.destroy();
	}

	copy(obj) {
		if (!obj) return;
		this.x.copy(obj.x);
		this.y.copy(obj.y);
	}

	clone() {
		let point = new Vector2Data_Vector2Data();
		point.copy(this);
		return point;
	}

	get point() {
		return new Point_Point(this.x.value, this.y.value);
	}

	serialize() {
		return {x:this.x.value, y:this.y.value};
	}
	
	deserialize(data) {
		if(!data) return 
		this.x.value = data.x;
		this.y.value = data.y;
	}

}
// CONCATENATED MODULE: ./js/tsunami/animation/Easing.js
class Easing {
  constructor() {
    this.easeIn = this.easeIn.bind(this);
    this.easeOut = this.easeOut.bind(this);
    this.easeInOut = this.easeInOut.bind(this);
  }

  easeIn(t, b = 0, c = 1, d = 1) {}

  easeOut(t, b = 0, c = 1, d = 1) {}

  easeInOut(t, b = 0, c = 1, d = 1) {}
}

class Quadratic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return -c * (t /= d) * (t - 2) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t + b;
    }
    return (-c / 2) * (--t * (t - 2) - 1) + b;
  }
}

class Cubic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t + b;
    }
    return (c / 2) * ((t -= 2) * t * t + 2) + b;
  }
}

class Quartic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t * t * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t * t + b;
    }
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  }
}

class Quintic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return c * (t /= d) * t * t * t * t + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (c / 2) * t * t * t * t * t + b;
    }
    return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
  }
}

class Sine extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * Math.sin((t / d) * (Math.PI / 2)) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
  }
}

class Exponential extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return t === 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return t === d ? b + c : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * Math.pow(2, 10 * (t - 1)) + b;
    }
    return (c / 2) * (-Math.pow(2, -10 * --t) + 2) + b;
  }
}

class Circular extends Easing {
  easeIn(t, b = 0, c = 1, d = 1) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d / 2) < 1) {
      return (-c / 2) * (Math.sqrt(1 - t * t) - 1) + b;
    }
    return (c / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  }
}

class Elastic extends Easing {
  easeIn(t, b = 0, c = 1, d = 1, a, p) {
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    let s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1, a, p) {
    if (t === 0) {
      return b;
    }
    if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    let s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) + c + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1, a, p) {
    if (t === 0) {
      return b;
    }
    if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    let s;
    if (!a || a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = (p / (2 * Math.PI)) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p)) + b;
    }
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin(((t * d - s) * (2 * Math.PI)) / p) * 0.5 + c + b;
  }
}

class Back extends Easing {
  constructor(s = 1.70158) {
    super();
    this.s = s;
  }

  easeIn(t, b = 0, c = 1, d = 1, s) {
    if (s === undefined) {
      s = this.s;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  }

  easeOut(t, b = 0, c = 1, d = 1, s) {
    if (s === undefined) {
      s = this.s;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1, s) {
    if (s === undefined) {
      s = this.s;
    }
    if ((t /= d / 2) < 1) {
      return (c / 2) * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    }
    return (c / 2) * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  }
}

class Bounce extends Easing {
  easeOut(t, b = 0, c = 1, d = 1) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  }

  easeIn(t, b = 0, c = 1, d = 1) {
    return c - this.easeOut(d - t, 0, c, d) + b;
  }

  easeInOut(t, b = 0, c = 1, d = 1) {
    if (t < d / 2) {
      return this.easeIn(t * 2, 0, c, d) * 0.5 + b;
    } else {
      return this.easeOut(t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b;
    }
  }
}

class Linear {
  constructor() {
    this.ease = this.ease.bind(this);
  }

  ease(t, b = 0, c = 1, d = 1) {
    return (c * t) / d + b;
  }
}

Easing.quad = new Quadratic();
Easing.cubic = new Cubic();
Easing.quart = new Quartic();
Easing.quint = new Quintic();
Easing.sine = new Sine();
Easing.expo = new Exponential();
Easing.circ = new Circular();
Easing.elastic = new Elastic();
Easing.back = new Back();
Easing.bounce = new Bounce();
Easing.linear = new Linear();

// CONCATENATED MODULE: ./js/model/CubicBezierPoints.js






class CubicBezierPoints_CubicBezierPoints extends DataModel_DataModel {

	constructor() {
		super();

		this._value = this;

		this.p0 = new Vector2Data_Vector2Data(0,0);
		this.p1 = new Vector2Data_Vector2Data(0, 0);
		this.p2 = new Vector2Data_Vector2Data(1, 1);
		this.p3 = new Vector2Data_Vector2Data(1, 1);
		this.p0.addEventListener("value", this.changeHandler);
		this.p1.addEventListener("value", this.changeHandler);
		this.p2.addEventListener("value", this.changeHandler);
		this.p3.addEventListener("value", this.changeHandler);
		for(let i = 0; i < 4; i++) {
			let vec = this["p" + i];
			vec.x.modifiers = [number["g" /* round2 */]];
			vec.y.modifiers = [number["g" /* round2 */]];
		}
		
		this.controlPoints = [this.p1, this.p2];
		this.controlPointsLines = [[this.p0, this.p1], [this.p3, this.p2]];

		this.easing = new CubicBezierEasing_CubicBezierEasing();
		this.debugEasing = Easing.quad.easeInOut;

		this.changeHandler();
	}

	copy(obj) {
		if (!obj) return;
		this.p0.copy(obj.p0);
		this.p1.copy(obj.p1);
		this.p2.copy(obj.p2);
		this.p3.copy(obj.p3);
	}

	changeHandler() {
		this.easing.p1.x = this.p1.x.value;
		this.easing.p1.y = this.p1.y.value;
		this.easing.p2.x = this.p2.x.value;
		this.easing.p2.y = this.p2.y.value;
		this.easing.calculateLength();
		super.changeHandler();
	}

}
// CONCATENATED MODULE: ./js/model/ActionTween.js












class ActionTween_ActionTween extends Action_Action {

	constructor(startX, startY, x = 0, y = 0, duration = 1, delay = 0) {
		super("ActionTween", "ActionTween");
		this.startX = new NumberData_NumberData(startX);
		this.startY = new NumberData_NumberData(startY);
		this.endX = new NumberData_NumberData(x);
		this.endY = new NumberData_NumberData(y);
		this.duration = new NumberData_NumberData(duration);
		this.cubicBezierPoints = new CubicBezierPoints_CubicBezierPoints();
		this.easingPresets = new ArrayData_ArrayData();
		this.easingPresets.selectedItem.addEventListener(Data_Data.CHANGE, this.easingPresetChange.bind(this));
		this.easingPresets.selectedItem.debug = true;
		// this.easingPresets.selectedItem.forceChangeEvent = true;
		let presets = ["Select a preset"];
		for(let i in CubicBezierEasing_CubicBezierEasing) {
			let cubicEasingClass = CubicBezierEasing_CubicBezierEasing[i];
			for(let j in cubicEasingClass) {
				let easingPreset = i + "." + j;
				presets.push(easingPreset);
			}
		}
		this.easingPresets.value = presets;
		this.easingPresets.selectedItem.value = "quad.easeInOut";
		this.tweenUpdateHandler = this.tweenUpdateHandler.bind(this);
		this.tweenCompleteHandler = this.tweenCompleteHandler.bind(this);

		this.pos = new Point_Point();
	}

	resetEasing() {
		this.easingPresets.selectedItem.value = this.easingPresets.value[0];
	}
	
	easingPresetChange() {
		let value = this.easingPresets.selectedItem.value;

		let debugEasingMethod = getProperty("this." + value, Easing);
		if(debugEasingMethod) {
			this.cubicBezierPoints.debugEasing = debugEasingMethod;
		}

		let cb = getProperty("this." + value, CubicBezierEasing_CubicBezierEasing);
		if(cb) {
			this.cubicBezierPoints.p1.x.value = cb.p1.x;
			this.cubicBezierPoints.p1.y.value = cb.p1.y;
			this.cubicBezierPoints.p2.x.value = cb.p2.x;
			this.cubicBezierPoints.p2.y.value = cb.p2.y;
		}
	}

	copy(action) {
		super.copy(action);
		this.startX.value = action.startX.value;
		this.startY.value = action.startY.value;
		this.endX.value = action.endX.value;
		this.endY.value = action.endY.value;
		this.duration.value = action.duration.value;
		this.cubicBezierPoints.copy(action.cubicBezierPoints);
	}

	trigger() {
		this.tween = new Tween_Tween(0, this.duration.value, [
			new TweenProperty(this.pos, "x", this.startX.value, this.endX.value, this.cubicBezierPoints.easing.ease),
			new TweenProperty(this.pos, "y", this.startY.value, this.endY.value, this.cubicBezierPoints.easing.ease),
		]);
		this.tween.addEventListener(Tween_Tween.UPDATE, this.tweenUpdateHandler);
		this.tween.addEventListener(Tween_Tween.COMPLETE, this.tweenCompleteHandler);
		return this.tween.start();
	}

	tweenUpdateHandler(e) {

	}

	tweenCompleteHandler(e) {

	}

	serialize() {
		let data = super.serialize();
		data.startX = this.startX.serialize();
		data.startY = this.startY.value;
		data.endX = this.endX.value;
		data.endY = this.endY.value;
		data.duration = this.duration.value;
		data.p1 = this.cubicBezierPoints.p1.serialize();
		data.p2 = this.cubicBezierPoints.p2.serialize();
		data.easing = this.easingPresets.selectedItem.value;
		return data;
	}

	deserialize(data) {
		if (!data) return;
		super.deserialize(data);
		this.startX.deserialize(data.startX);
		this.startY.deserialize(data.startY);
		this.endX.deserialize(data.endX);
		this.endY.deserialize(data.endY);
		this.duration.deserialize(data.duration);
		this.cubicBezierPoints.p1.deserialize(data.p1);
		this.cubicBezierPoints.p2.deserialize(data.p2);
		this.easingPresets.selectedItem.value = data.easing || "quad.easeInOut";
	}

}

// CONCATENATED MODULE: ./js/model/ActionScroll.js







class ActionScroll_ActionScroll extends ActionTween_ActionTween {

	constructor(target = "window", units = "px", x = 0, y = 0, duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionScroll";
		this.name.value = "Scroll";
		this.description.value = "Add a scroll animation";
		this.target = new StringData_StringData(target);
		this.unitX = new NumberData_NumberData(x);
		this.unitY = new NumberData_NumberData(y);
		this.units = new ArrayData_ArrayData("%", "px");
		this.units.selectedItem.value = units;
		this.isCaptureable.value = true;
		this.isTestable.value = true;
		this.icon.value = "fas fa-scroll";

		this.doScroll = this.doScroll.bind(this);
		this.unitX.addEventListener(Data_Data.CHANGE, this.doScroll);
		this.unitY.addEventListener(Data_Data.CHANGE, this.doScroll);
	}

	clone() {
		let action = new ActionScroll_ActionScroll();
		action.copy(this);
		return action;
	}

	copy(action) {
		this.unitX.removeEventListener(Data_Data.CHANGE, this.doScroll);
		this.unitY.removeEventListener(Data_Data.CHANGE, this.doScroll);
		super.copy(action);
		this.target.value = action.target.value;
		this.unitX.value = action.unitX.value;
		this.unitY.value = action.unitY.value;
		this.units.selectedItem.value = action.units.selectedItem.value;
		this.unitX.addEventListener(Data_Data.CHANGE, this.doScroll);
		this.unitY.addEventListener(Data_Data.CHANGE, this.doScroll);
	}

	trigger() {
		switch (this.target.value) {
			case "window":
				this.startX.value = window.scrollX;
				this.startY.value = window.scrollY;
				break;
			default:
				let element = document.querySelector(this.target.value);
				this.startX.value = element.scrollLeft;
				this.startY.value = element.scrollTop;
				break;
		}
		if(this.units.selectedItem.value == "px") {
			this.endX.copy(this.unitX);
			this.endY.copy(this.unitY);
		}
		if(this.units.selectedItem.value == "%") {
			let maxScroll = {x:0, y:0};
			switch (this.target.value) {
				case "window":
					maxScroll.x = document.body.offsetWidth - window.innerWidth;
					maxScroll.y = document.body.offsetHeight - window.innerHeight;
					break;
				default:
					let element = document.querySelector(this.target.value);
					maxScroll.x = element.scrollWidth - element.clientWidth;
					maxScroll.y = element.scrollHeight - element.clientHeight;
					break;
			}
			this.endX.value = Math.round(this.unitX.value / 100 * maxScroll.x);
			this.endY.value = Math.round(this.unitY.value / 100 * maxScroll.y);
		}
		return super.trigger();
	}

	doScroll() {
		this.pos.x = this.unitX.value;
		this.pos.y = this.unitY.value;
		this.tweenUpdateHandler();
	}

	tweenUpdateHandler() {
		switch (this.target.value) {
			case "window":
				window.scroll(this.pos.x, this.pos.y);
				break;
			default:
				let element = document.querySelector(this.target.value);
				element.scrollLeft = this.pos.x;
				element.scrollTop = this.pos.y;
				break;
		}
	}

	serialize() {
		let data = super.serialize();
		data.target = this.target.serialize();
		data.unitX = this.unitX.serialize();
		data.unitY = this.unitY.serialize();
		data.units = this.units.selectedItem.value;
		return data;
	}

	deserialize(data) {
		if (!data) return;
		this.unitX.removeEventListener(Data_Data.CHANGE, this.doScroll);
		this.unitY.removeEventListener(Data_Data.CHANGE, this.doScroll);
		super.deserialize(data);
		this.target.deserialize(data.target);
		this.unitX.deserialize(data.unitX);
		this.unitY.deserialize(data.unitY);
		this.units.selectedItem.value = data.units;
		this.unitX.addEventListener(Data_Data.CHANGE, this.doScroll);
		this.unitY.addEventListener(Data_Data.CHANGE, this.doScroll);
	}

	capture() {
		super.capture();

		this.unitX.removeEventListener(Data_Data.CHANGE, this.doScroll);
		this.unitY.removeEventListener(Data_Data.CHANGE, this.doScroll);
		
		let scroll = new Point_Point();
		let maxScroll = new Point_Point();
		switch (this.target.value) {
			case "window":
				scroll.x = window.scrollX;
				scroll.y = window.scrollY;
				maxScroll.x = document.body.offsetWidth - window.innerWidth;
				maxScroll.y = document.body.offsetHeight - window.innerHeight;
				break;
			default:
				let element = document.querySelector(this.target.value);
				scroll.x = element.scrollLeft;
				scroll.y = element.scrollTop;
				maxScroll.x = element.scrollWidth - element.clientWidth;
				maxScroll.y = element.scrollHeight - element.clientHeight;
				break;
		}
		let unit = new Point_Point();
		switch(this.units.selectedItem.value) {
			case "px":
				unit.x = scroll.x;
				unit.y = scroll.y;
				break;
			case "%":
				unit.x = Math.round(scroll.x / maxScroll.x * 100);
				unit.y = Math.round(scroll.y / maxScroll.y * 100);
				break;
		}

		if(isNaN(unit.x)) unit.x = 0;
		if(isNaN(unit.y)) unit.y = 0;

		this.unitX.value = unit.x;
		this.unitY.value = unit.y;

		setTimeout(()=> {
			this.unitX.addEventListener(Data_Data.CHANGE, this.doScroll);
			this.unitY.addEventListener(Data_Data.CHANGE, this.doScroll);
			this.captureComplete();
		}, 200);
	}

	captureAtInit() {
		super.captureAtInit();
		this.capture();
	}

}
// CONCATENATED MODULE: ./js/model/ActionMouseEvent.js







class ActionMouseEvent_ActionMouseEvent extends Action_Action {

	constructor(eventType = "click", x = 0, y = 0) {
		super("ActionMouseEvent", "MouseEvent", "Add a mouse event");
		this.x = new NumberData_NumberData(x);
		this.y = new NumberData_NumberData(y);
		this.eventTypes = new ArrayData_ArrayData("click", "mousedown", "mouseup", "mouseover", "mouseout", "dblclick", "mousemove", "mouseenter", "mouseleave", "contextmenu", "touchstart", "touchmove", "touchend");
		this.eventTypes.selectedItem.value = this.eventTypes.value[0];
		this.isTestable.value = true;
		this.isCaptureable.value = true;
		this.changeCursorOnCapture.value = true;
		this.captureMouseEventHandler = this.captureMouseEventHandler.bind(this);
		this.icon.value = "fas fa-hand-pointer";
	}

	clone() {
		let action = new ActionMouseEvent_ActionMouseEvent();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		this.eventTypes.selectedItem.value = action.eventTypes.selectedItem.value;
		this.x.value = action.x.value;
		this.y.value = action.y.value;
	}

	trigger() {
		let point = new Point_Point(this.x.value - window.scrollX, this.y.value  - window.scrollY);
		let el = document.elementFromPoint(point.x, point.y);
		let event = new MouseEvent(this.eventTypes.selectedItem.value, {
			bubbles: true,
			cancelable: true,
			view: window,
			clientX: point.x,
			clientY: point.y,
			pageX: point.x,
			pageY: point.y,
			x: point.x,
			y: point.y
		});
		if (el) {
			el.dispatchEvent(event);
		} else {
			console.log("MouseEvent action cannot find element at pageX " + this.x.value + " and pageY " + this.y.value);
		}
		return Promise.resolve();
	}

	serialize() {
		let data = super.serialize();
		data.eventType = this.eventTypes.selectedItem.value;
		data.x = this.x.value;
		data.y = this.y.value;
		return data;
	}

	deserialize(data) {
		if (!data) return;
		super.deserialize(data);
		this.eventTypes.selectedItem.value = data.eventType;
		this.x.deserialize(data.x);
		this.y.deserialize(data.y);
	}

	capture() {
		super.capture();
		setTimeout(() => {
			document.body.addEventListener("click", this.captureMouseEventHandler);
		}, 33);
	}

	captureMouseEventHandler(event) {
		// if (event.preventDefaut) {
		// 	event.preventDefaut();
		// }
		// if (event.stopImmediatePropagation) {
		// 	event.stopImmediatePropagation();
		// }
		// if (event.stopPropagation) {
		// 	event.stopPropagation();
		// }
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point_Point(touch.pageX, touch.pageY);
		this.x.value = point.x;
		this.y.value = point.y;
		document.body.removeEventListener("click", this.captureMouseEventHandler);
		this.captureComplete();
	}

	captureAtInit() {
		super.captureAtInit();
		this.capture();
	}
	
}

// CONCATENATED MODULE: ./js/model/ActionEval.js



let example = `/* Example */
let promise = new Promise(function(resolve, reject) {
    console.log("Wait for 1 second");
    setTimeout(function() {
        resolve();
    }, 1000);
});
return promise.then(function() {
    console.log("1 second has passed");
});
`;

class ActionEval_ActionEval extends Action_Action {

	constructor(code = '') {
		super("ActionEval", "Javascript", "Add javascript code");
		if(!code) code = example;
		this.code = new StringData_StringData(code);
		this.icon.value = "fab fa-js-square";
		this.isTestable.value = true;
	}

	clone() {
		let action = new ActionEval_ActionEval();
		action.copy(this);
		return action;
	}

	copy(action) {
		this.code.value = action.code.value;
	}

	trigger() {
		let expression = this.code.value;
		let promise = new Function(expression)();
		let isPromise = (promise instanceof Promise);
		if(!isPromise) {
			promise = Promise.resolve();
		}
		return promise;
	}

	serialize() {
		let data = super.serialize();
		data.code = encodeURIComponent(this.code.value);
		return data;
	}

	deserialize(data) {
		if (!data) return;
		super.deserialize(data);
		this.code.value = decodeURIComponent(data.code);
	}

}
// CONCATENATED MODULE: ../node_modules/three/src/math/MathUtils.js
/**
 * @author alteredq / http://alteredqualia.com/
 * @author mrdoob / http://mrdoob.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author thezwap
 */

var _lut = [];

for ( var MathUtils_i = 0; MathUtils_i < 256; MathUtils_i ++ ) {

	_lut[ MathUtils_i ] = ( MathUtils_i < 16 ? '0' : '' ) + ( MathUtils_i ).toString( 16 );

}

var MathUtils = {

	DEG2RAD: Math.PI / 180,
	RAD2DEG: 180 / Math.PI,

	generateUUID: function () {

		// http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136

		var d0 = Math.random() * 0xffffffff | 0;
		var d1 = Math.random() * 0xffffffff | 0;
		var d2 = Math.random() * 0xffffffff | 0;
		var d3 = Math.random() * 0xffffffff | 0;
		var uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
			_lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
			_lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
			_lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];

		// .toUpperCase() here flattens concatenated strings to save heap memory space.
		return uuid.toUpperCase();

	},

	clamp: function ( value, min, max ) {

		return Math.max( min, Math.min( max, value ) );

	},

	// compute euclidian modulo of m % n
	// https://en.wikipedia.org/wiki/Modulo_operation

	euclideanModulo: function ( n, m ) {

		return ( ( n % m ) + m ) % m;

	},

	// Linear mapping from range <a1, a2> to range <b1, b2>

	mapLinear: function ( x, a1, a2, b1, b2 ) {

		return b1 + ( x - a1 ) * ( b2 - b1 ) / ( a2 - a1 );

	},

	// https://en.wikipedia.org/wiki/Linear_interpolation

	lerp: function ( x, y, t ) {

		return ( 1 - t ) * x + t * y;

	},

	// http://en.wikipedia.org/wiki/Smoothstep

	smoothstep: function ( x, min, max ) {

		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min ) / ( max - min );

		return x * x * ( 3 - 2 * x );

	},

	smootherstep: function ( x, min, max ) {

		if ( x <= min ) return 0;
		if ( x >= max ) return 1;

		x = ( x - min ) / ( max - min );

		return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

	},

	// Random integer from <low, high> interval

	randInt: function ( low, high ) {

		return low + Math.floor( Math.random() * ( high - low + 1 ) );

	},

	// Random float from <low, high> interval

	randFloat: function ( low, high ) {

		return low + Math.random() * ( high - low );

	},

	// Random float from <-range/2, range/2> interval

	randFloatSpread: function ( range ) {

		return range * ( 0.5 - Math.random() );

	},

	degToRad: function ( degrees ) {

		return degrees * MathUtils.DEG2RAD;

	},

	radToDeg: function ( radians ) {

		return radians * MathUtils.RAD2DEG;

	},

	isPowerOfTwo: function ( value ) {

		return ( value & ( value - 1 ) ) === 0 && value !== 0;

	},

	ceilPowerOfTwo: function ( value ) {

		return Math.pow( 2, Math.ceil( Math.log( value ) / Math.LN2 ) );

	},

	floorPowerOfTwo: function ( value ) {

		return Math.pow( 2, Math.floor( Math.log( value ) / Math.LN2 ) );

	},

	setQuaternionFromProperEuler: function ( q, a, b, c, order ) {

		// Intrinsic Proper Euler Angles - see https://en.wikipedia.org/wiki/Euler_angles

		// rotations are applied to the axes in the order specified by 'order'
		// rotation by angle 'a' is applied first, then by angle 'b', then by angle 'c'
		// angles are in radians

		var cos = Math.cos;
		var sin = Math.sin;

		var c2 = cos( b / 2 );
		var s2 = sin( b / 2 );

		var c13 = cos( ( a + c ) / 2 );
		var s13 = sin( ( a + c ) / 2 );

		var c1_3 = cos( ( a - c ) / 2 );
		var s1_3 = sin( ( a - c ) / 2 );

		var c3_1 = cos( ( c - a ) / 2 );
		var s3_1 = sin( ( c - a ) / 2 );

		if ( order === 'XYX' ) {

			q.set( c2 * s13, s2 * c1_3, s2 * s1_3, c2 * c13 );

		} else if ( order === 'YZY' ) {

			q.set( s2 * s1_3, c2 * s13, s2 * c1_3, c2 * c13 );

		} else if ( order === 'ZXZ' ) {

			q.set( s2 * c1_3, s2 * s1_3, c2 * s13, c2 * c13 );

		} else if ( order === 'XZX' ) {

			q.set( c2 * s13, s2 * s3_1, s2 * c3_1, c2 * c13 );

		} else if ( order === 'YXY' ) {

			q.set( s2 * c3_1, c2 * s13, s2 * s3_1, c2 * c13 );

		} else if ( order === 'ZYZ' ) {

			q.set( s2 * s3_1, s2 * c3_1, c2 * s13, c2 * c13 );

		} else {

			console.warn( 'THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order.' );

		}

	}

};




// CONCATENATED MODULE: ../node_modules/three/src/math/Quaternion.js
/**
 * @author mikael emtinger / http://gomo.se/
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author bhouston / http://clara.io
 */



function Quaternion( x, y, z, w ) {

	this._x = x || 0;
	this._y = y || 0;
	this._z = z || 0;
	this._w = ( w !== undefined ) ? w : 1;

}

Object.assign( Quaternion, {

	slerp: function ( qa, qb, qm, t ) {

		return qm.copy( qa ).slerp( qb, t );

	},

	slerpFlat: function ( dst, dstOffset, src0, srcOffset0, src1, srcOffset1, t ) {

		// fuzz-free, array-based Quaternion SLERP operation

		var x0 = src0[ srcOffset0 + 0 ],
			y0 = src0[ srcOffset0 + 1 ],
			z0 = src0[ srcOffset0 + 2 ],
			w0 = src0[ srcOffset0 + 3 ],

			x1 = src1[ srcOffset1 + 0 ],
			y1 = src1[ srcOffset1 + 1 ],
			z1 = src1[ srcOffset1 + 2 ],
			w1 = src1[ srcOffset1 + 3 ];

		if ( w0 !== w1 || x0 !== x1 || y0 !== y1 || z0 !== z1 ) {

			var s = 1 - t,

				cos = x0 * x1 + y0 * y1 + z0 * z1 + w0 * w1,

				dir = ( cos >= 0 ? 1 : - 1 ),
				sqrSin = 1 - cos * cos;

			// Skip the Slerp for tiny steps to avoid numeric problems:
			if ( sqrSin > Number.EPSILON ) {

				var sin = Math.sqrt( sqrSin ),
					len = Math.atan2( sin, cos * dir );

				s = Math.sin( s * len ) / sin;
				t = Math.sin( t * len ) / sin;

			}

			var tDir = t * dir;

			x0 = x0 * s + x1 * tDir;
			y0 = y0 * s + y1 * tDir;
			z0 = z0 * s + z1 * tDir;
			w0 = w0 * s + w1 * tDir;

			// Normalize in case we just did a lerp:
			if ( s === 1 - t ) {

				var f = 1 / Math.sqrt( x0 * x0 + y0 * y0 + z0 * z0 + w0 * w0 );

				x0 *= f;
				y0 *= f;
				z0 *= f;
				w0 *= f;

			}

		}

		dst[ dstOffset ] = x0;
		dst[ dstOffset + 1 ] = y0;
		dst[ dstOffset + 2 ] = z0;
		dst[ dstOffset + 3 ] = w0;

	}

} );

Object.defineProperties( Quaternion.prototype, {

	x: {

		get: function () {

			return this._x;

		},

		set: function ( value ) {

			this._x = value;
			this._onChangeCallback();

		}

	},

	y: {

		get: function () {

			return this._y;

		},

		set: function ( value ) {

			this._y = value;
			this._onChangeCallback();

		}

	},

	z: {

		get: function () {

			return this._z;

		},

		set: function ( value ) {

			this._z = value;
			this._onChangeCallback();

		}

	},

	w: {

		get: function () {

			return this._w;

		},

		set: function ( value ) {

			this._w = value;
			this._onChangeCallback();

		}

	}

} );

Object.assign( Quaternion.prototype, {

	isQuaternion: true,

	set: function ( x, y, z, w ) {

		this._x = x;
		this._y = y;
		this._z = z;
		this._w = w;

		this._onChangeCallback();

		return this;

	},

	clone: function () {

		return new this.constructor( this._x, this._y, this._z, this._w );

	},

	copy: function ( quaternion ) {

		this._x = quaternion.x;
		this._y = quaternion.y;
		this._z = quaternion.z;
		this._w = quaternion.w;

		this._onChangeCallback();

		return this;

	},

	setFromEuler: function ( euler, update ) {

		if ( ! ( euler && euler.isEuler ) ) {

			throw new Error( 'THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.' );

		}

		var x = euler._x, y = euler._y, z = euler._z, order = euler.order;

		// http://www.mathworks.com/matlabcentral/fileexchange/
		// 	20696-function-to-convert-between-dcm-euler-angles-quaternions-and-euler-vectors/
		//	content/SpinCalc.m

		var cos = Math.cos;
		var sin = Math.sin;

		var c1 = cos( x / 2 );
		var c2 = cos( y / 2 );
		var c3 = cos( z / 2 );

		var s1 = sin( x / 2 );
		var s2 = sin( y / 2 );
		var s3 = sin( z / 2 );

		if ( order === 'XYZ' ) {

			this._x = s1 * c2 * c3 + c1 * s2 * s3;
			this._y = c1 * s2 * c3 - s1 * c2 * s3;
			this._z = c1 * c2 * s3 + s1 * s2 * c3;
			this._w = c1 * c2 * c3 - s1 * s2 * s3;

		} else if ( order === 'YXZ' ) {

			this._x = s1 * c2 * c3 + c1 * s2 * s3;
			this._y = c1 * s2 * c3 - s1 * c2 * s3;
			this._z = c1 * c2 * s3 - s1 * s2 * c3;
			this._w = c1 * c2 * c3 + s1 * s2 * s3;

		} else if ( order === 'ZXY' ) {

			this._x = s1 * c2 * c3 - c1 * s2 * s3;
			this._y = c1 * s2 * c3 + s1 * c2 * s3;
			this._z = c1 * c2 * s3 + s1 * s2 * c3;
			this._w = c1 * c2 * c3 - s1 * s2 * s3;

		} else if ( order === 'ZYX' ) {

			this._x = s1 * c2 * c3 - c1 * s2 * s3;
			this._y = c1 * s2 * c3 + s1 * c2 * s3;
			this._z = c1 * c2 * s3 - s1 * s2 * c3;
			this._w = c1 * c2 * c3 + s1 * s2 * s3;

		} else if ( order === 'YZX' ) {

			this._x = s1 * c2 * c3 + c1 * s2 * s3;
			this._y = c1 * s2 * c3 + s1 * c2 * s3;
			this._z = c1 * c2 * s3 - s1 * s2 * c3;
			this._w = c1 * c2 * c3 - s1 * s2 * s3;

		} else if ( order === 'XZY' ) {

			this._x = s1 * c2 * c3 - c1 * s2 * s3;
			this._y = c1 * s2 * c3 - s1 * c2 * s3;
			this._z = c1 * c2 * s3 + s1 * s2 * c3;
			this._w = c1 * c2 * c3 + s1 * s2 * s3;

		}

		if ( update !== false ) this._onChangeCallback();

		return this;

	},

	setFromAxisAngle: function ( axis, angle ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/angleToQuaternion/index.htm

		// assumes axis is normalized

		var halfAngle = angle / 2, s = Math.sin( halfAngle );

		this._x = axis.x * s;
		this._y = axis.y * s;
		this._z = axis.z * s;
		this._w = Math.cos( halfAngle );

		this._onChangeCallback();

		return this;

	},

	setFromRotationMatrix: function ( m ) {

		// http://www.euclideanspace.com/maths/geometry/rotations/conversions/matrixToQuaternion/index.htm

		// assumes the upper 3x3 of m is a pure rotation matrix (i.e, unscaled)

		var te = m.elements,

			m11 = te[ 0 ], m12 = te[ 4 ], m13 = te[ 8 ],
			m21 = te[ 1 ], m22 = te[ 5 ], m23 = te[ 9 ],
			m31 = te[ 2 ], m32 = te[ 6 ], m33 = te[ 10 ],

			trace = m11 + m22 + m33,
			s;

		if ( trace > 0 ) {

			s = 0.5 / Math.sqrt( trace + 1.0 );

			this._w = 0.25 / s;
			this._x = ( m32 - m23 ) * s;
			this._y = ( m13 - m31 ) * s;
			this._z = ( m21 - m12 ) * s;

		} else if ( m11 > m22 && m11 > m33 ) {

			s = 2.0 * Math.sqrt( 1.0 + m11 - m22 - m33 );

			this._w = ( m32 - m23 ) / s;
			this._x = 0.25 * s;
			this._y = ( m12 + m21 ) / s;
			this._z = ( m13 + m31 ) / s;

		} else if ( m22 > m33 ) {

			s = 2.0 * Math.sqrt( 1.0 + m22 - m11 - m33 );

			this._w = ( m13 - m31 ) / s;
			this._x = ( m12 + m21 ) / s;
			this._y = 0.25 * s;
			this._z = ( m23 + m32 ) / s;

		} else {

			s = 2.0 * Math.sqrt( 1.0 + m33 - m11 - m22 );

			this._w = ( m21 - m12 ) / s;
			this._x = ( m13 + m31 ) / s;
			this._y = ( m23 + m32 ) / s;
			this._z = 0.25 * s;

		}

		this._onChangeCallback();

		return this;

	},

	setFromUnitVectors: function ( vFrom, vTo ) {

		// assumes direction vectors vFrom and vTo are normalized

		var EPS = 0.000001;

		var r = vFrom.dot( vTo ) + 1;

		if ( r < EPS ) {

			r = 0;

			if ( Math.abs( vFrom.x ) > Math.abs( vFrom.z ) ) {

				this._x = - vFrom.y;
				this._y = vFrom.x;
				this._z = 0;
				this._w = r;

			} else {

				this._x = 0;
				this._y = - vFrom.z;
				this._z = vFrom.y;
				this._w = r;

			}

		} else {

			// crossVectors( vFrom, vTo ); // inlined to avoid cyclic dependency on Vector3

			this._x = vFrom.y * vTo.z - vFrom.z * vTo.y;
			this._y = vFrom.z * vTo.x - vFrom.x * vTo.z;
			this._z = vFrom.x * vTo.y - vFrom.y * vTo.x;
			this._w = r;

		}

		return this.normalize();

	},

	angleTo: function ( q ) {

		return 2 * Math.acos( Math.abs( MathUtils.clamp( this.dot( q ), - 1, 1 ) ) );

	},

	rotateTowards: function ( q, step ) {

		var angle = this.angleTo( q );

		if ( angle === 0 ) return this;

		var t = Math.min( 1, step / angle );

		this.slerp( q, t );

		return this;

	},

	inverse: function () {

		// quaternion is assumed to have unit length

		return this.conjugate();

	},

	conjugate: function () {

		this._x *= - 1;
		this._y *= - 1;
		this._z *= - 1;

		this._onChangeCallback();

		return this;

	},

	dot: function ( v ) {

		return this._x * v._x + this._y * v._y + this._z * v._z + this._w * v._w;

	},

	lengthSq: function () {

		return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;

	},

	length: function () {

		return Math.sqrt( this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w );

	},

	normalize: function () {

		var l = this.length();

		if ( l === 0 ) {

			this._x = 0;
			this._y = 0;
			this._z = 0;
			this._w = 1;

		} else {

			l = 1 / l;

			this._x = this._x * l;
			this._y = this._y * l;
			this._z = this._z * l;
			this._w = this._w * l;

		}

		this._onChangeCallback();

		return this;

	},

	multiply: function ( q, p ) {

		if ( p !== undefined ) {

			console.warn( 'THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.' );
			return this.multiplyQuaternions( q, p );

		}

		return this.multiplyQuaternions( this, q );

	},

	premultiply: function ( q ) {

		return this.multiplyQuaternions( q, this );

	},

	multiplyQuaternions: function ( a, b ) {

		// from http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/code/index.htm

		var qax = a._x, qay = a._y, qaz = a._z, qaw = a._w;
		var qbx = b._x, qby = b._y, qbz = b._z, qbw = b._w;

		this._x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
		this._y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
		this._z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
		this._w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

		this._onChangeCallback();

		return this;

	},

	slerp: function ( qb, t ) {

		if ( t === 0 ) return this;
		if ( t === 1 ) return this.copy( qb );

		var x = this._x, y = this._y, z = this._z, w = this._w;

		// http://www.euclideanspace.com/maths/algebra/realNormedAlgebra/quaternions/slerp/

		var cosHalfTheta = w * qb._w + x * qb._x + y * qb._y + z * qb._z;

		if ( cosHalfTheta < 0 ) {

			this._w = - qb._w;
			this._x = - qb._x;
			this._y = - qb._y;
			this._z = - qb._z;

			cosHalfTheta = - cosHalfTheta;

		} else {

			this.copy( qb );

		}

		if ( cosHalfTheta >= 1.0 ) {

			this._w = w;
			this._x = x;
			this._y = y;
			this._z = z;

			return this;

		}

		var sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;

		if ( sqrSinHalfTheta <= Number.EPSILON ) {

			var s = 1 - t;
			this._w = s * w + t * this._w;
			this._x = s * x + t * this._x;
			this._y = s * y + t * this._y;
			this._z = s * z + t * this._z;

			this.normalize();
			this._onChangeCallback();

			return this;

		}

		var sinHalfTheta = Math.sqrt( sqrSinHalfTheta );
		var halfTheta = Math.atan2( sinHalfTheta, cosHalfTheta );
		var ratioA = Math.sin( ( 1 - t ) * halfTheta ) / sinHalfTheta,
			ratioB = Math.sin( t * halfTheta ) / sinHalfTheta;

		this._w = ( w * ratioA + this._w * ratioB );
		this._x = ( x * ratioA + this._x * ratioB );
		this._y = ( y * ratioA + this._y * ratioB );
		this._z = ( z * ratioA + this._z * ratioB );

		this._onChangeCallback();

		return this;

	},

	equals: function ( quaternion ) {

		return ( quaternion._x === this._x ) && ( quaternion._y === this._y ) && ( quaternion._z === this._z ) && ( quaternion._w === this._w );

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		this._x = array[ offset ];
		this._y = array[ offset + 1 ];
		this._z = array[ offset + 2 ];
		this._w = array[ offset + 3 ];

		this._onChangeCallback();

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this._x;
		array[ offset + 1 ] = this._y;
		array[ offset + 2 ] = this._z;
		array[ offset + 3 ] = this._w;

		return array;

	},

	fromBufferAttribute: function ( attribute, index ) {

		this._x = attribute.getX( index );
		this._y = attribute.getY( index );
		this._z = attribute.getZ( index );
		this._w = attribute.getW( index );

		return this;

	},

	_onChange: function ( callback ) {

		this._onChangeCallback = callback;

		return this;

	},

	_onChangeCallback: function () {}

} );




// CONCATENATED MODULE: ../node_modules/three/src/math/Vector3.js



/**
 * @author mrdoob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 * @author WestLangley / http://github.com/WestLangley
 */

var _vector = new Vector3();
var _quaternion = new Quaternion();

function Vector3( x, y, z ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;

}

Object.assign( Vector3.prototype, {

	isVector3: true,

	set: function ( x, y, z ) {

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	},

	setScalar: function ( scalar ) {

		this.x = scalar;
		this.y = scalar;
		this.z = scalar;

		return this;

	},

	setX: function ( x ) {

		this.x = x;

		return this;

	},

	setY: function ( y ) {

		this.y = y;

		return this;

	},

	setZ: function ( z ) {

		this.z = z;

		return this;

	},

	setComponent: function ( index, value ) {

		switch ( index ) {

			case 0: this.x = value; break;
			case 1: this.y = value; break;
			case 2: this.z = value; break;
			default: throw new Error( 'index is out of range: ' + index );

		}

		return this;

	},

	getComponent: function ( index ) {

		switch ( index ) {

			case 0: return this.x;
			case 1: return this.y;
			case 2: return this.z;
			default: throw new Error( 'index is out of range: ' + index );

		}

	},

	clone: function () {

		return new this.constructor( this.x, this.y, this.z );

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	},

	add: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.' );
			return this.addVectors( v, w );

		}

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	},

	addVectors: function ( a, b ) {

		this.x = a.x + b.x;
		this.y = a.y + b.y;
		this.z = a.z + b.z;

		return this;

	},

	addScaledVector: function ( v, s ) {

		this.x += v.x * s;
		this.y += v.y * s;
		this.z += v.z * s;

		return this;

	},

	sub: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.' );
			return this.subVectors( v, w );

		}

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	},

	subScalar: function ( s ) {

		this.x -= s;
		this.y -= s;
		this.z -= s;

		return this;

	},

	subVectors: function ( a, b ) {

		this.x = a.x - b.x;
		this.y = a.y - b.y;
		this.z = a.z - b.z;

		return this;

	},

	multiply: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.' );
			return this.multiplyVectors( v, w );

		}

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	},

	multiplyScalar: function ( scalar ) {

		this.x *= scalar;
		this.y *= scalar;
		this.z *= scalar;

		return this;

	},

	multiplyVectors: function ( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	},

	applyEuler: function ( euler ) {

		if ( ! ( euler && euler.isEuler ) ) {

			console.error( 'THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.' );

		}

		return this.applyQuaternion( _quaternion.setFromEuler( euler ) );

	},

	applyAxisAngle: function ( axis, angle ) {

		return this.applyQuaternion( _quaternion.setFromAxisAngle( axis, angle ) );

	},

	applyMatrix3: function ( m ) {

		var x = this.x, y = this.y, z = this.z;
		var e = m.elements;

		this.x = e[ 0 ] * x + e[ 3 ] * y + e[ 6 ] * z;
		this.y = e[ 1 ] * x + e[ 4 ] * y + e[ 7 ] * z;
		this.z = e[ 2 ] * x + e[ 5 ] * y + e[ 8 ] * z;

		return this;

	},

	applyNormalMatrix: function ( m ) {

		return this.applyMatrix3( m ).normalize();

	},

	applyMatrix4: function ( m ) {

		var x = this.x, y = this.y, z = this.z;
		var e = m.elements;

		var w = 1 / ( e[ 3 ] * x + e[ 7 ] * y + e[ 11 ] * z + e[ 15 ] );

		this.x = ( e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z + e[ 12 ] ) * w;
		this.y = ( e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z + e[ 13 ] ) * w;
		this.z = ( e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z + e[ 14 ] ) * w;

		return this;

	},

	applyQuaternion: function ( q ) {

		var x = this.x, y = this.y, z = this.z;
		var qx = q.x, qy = q.y, qz = q.z, qw = q.w;

		// calculate quat * vector

		var ix = qw * x + qy * z - qz * y;
		var iy = qw * y + qz * x - qx * z;
		var iz = qw * z + qx * y - qy * x;
		var iw = - qx * x - qy * y - qz * z;

		// calculate result * inverse quat

		this.x = ix * qw + iw * - qx + iy * - qz - iz * - qy;
		this.y = iy * qw + iw * - qy + iz * - qx - ix * - qz;
		this.z = iz * qw + iw * - qz + ix * - qy - iy * - qx;

		return this;

	},

	project: function ( camera ) {

		return this.applyMatrix4( camera.matrixWorldInverse ).applyMatrix4( camera.projectionMatrix );

	},

	unproject: function ( camera ) {

		return this.applyMatrix4( camera.projectionMatrixInverse ).applyMatrix4( camera.matrixWorld );

	},

	transformDirection: function ( m ) {

		// input: THREE.Matrix4 affine matrix
		// vector interpreted as a direction

		var x = this.x, y = this.y, z = this.z;
		var e = m.elements;

		this.x = e[ 0 ] * x + e[ 4 ] * y + e[ 8 ] * z;
		this.y = e[ 1 ] * x + e[ 5 ] * y + e[ 9 ] * z;
		this.z = e[ 2 ] * x + e[ 6 ] * y + e[ 10 ] * z;

		return this.normalize();

	},

	divide: function ( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	},

	divideScalar: function ( scalar ) {

		return this.multiplyScalar( 1 / scalar );

	},

	min: function ( v ) {

		this.x = Math.min( this.x, v.x );
		this.y = Math.min( this.y, v.y );
		this.z = Math.min( this.z, v.z );

		return this;

	},

	max: function ( v ) {

		this.x = Math.max( this.x, v.x );
		this.y = Math.max( this.y, v.y );
		this.z = Math.max( this.z, v.z );

		return this;

	},

	clamp: function ( min, max ) {

		// assumes min < max, componentwise

		this.x = Math.max( min.x, Math.min( max.x, this.x ) );
		this.y = Math.max( min.y, Math.min( max.y, this.y ) );
		this.z = Math.max( min.z, Math.min( max.z, this.z ) );

		return this;

	},

	clampScalar: function ( minVal, maxVal ) {

		this.x = Math.max( minVal, Math.min( maxVal, this.x ) );
		this.y = Math.max( minVal, Math.min( maxVal, this.y ) );
		this.z = Math.max( minVal, Math.min( maxVal, this.z ) );

		return this;

	},

	clampLength: function ( min, max ) {

		var length = this.length();

		return this.divideScalar( length || 1 ).multiplyScalar( Math.max( min, Math.min( max, length ) ) );

	},

	floor: function () {

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
		this.z = Math.floor( this.z );

		return this;

	},

	ceil: function () {

		this.x = Math.ceil( this.x );
		this.y = Math.ceil( this.y );
		this.z = Math.ceil( this.z );

		return this;

	},

	round: function () {

		this.x = Math.round( this.x );
		this.y = Math.round( this.y );
		this.z = Math.round( this.z );

		return this;

	},

	roundToZero: function () {

		this.x = ( this.x < 0 ) ? Math.ceil( this.x ) : Math.floor( this.x );
		this.y = ( this.y < 0 ) ? Math.ceil( this.y ) : Math.floor( this.y );
		this.z = ( this.z < 0 ) ? Math.ceil( this.z ) : Math.floor( this.z );

		return this;

	},

	negate: function () {

		this.x = - this.x;
		this.y = - this.y;
		this.z = - this.z;

		return this;

	},

	dot: function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	},

	// TODO lengthSquared?

	lengthSq: function () {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	},

	length: function () {

		return Math.sqrt( this.x * this.x + this.y * this.y + this.z * this.z );

	},

	manhattanLength: function () {

		return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

	},

	normalize: function () {

		return this.divideScalar( this.length() || 1 );

	},

	setLength: function ( length ) {

		return this.normalize().multiplyScalar( length );

	},

	lerp: function ( v, alpha ) {

		this.x += ( v.x - this.x ) * alpha;
		this.y += ( v.y - this.y ) * alpha;
		this.z += ( v.z - this.z ) * alpha;

		return this;

	},

	lerpVectors: function ( v1, v2, alpha ) {

		return this.subVectors( v2, v1 ).multiplyScalar( alpha ).add( v1 );

	},

	cross: function ( v, w ) {

		if ( w !== undefined ) {

			console.warn( 'THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.' );
			return this.crossVectors( v, w );

		}

		return this.crossVectors( this, v );

	},

	crossVectors: function ( a, b ) {

		var ax = a.x, ay = a.y, az = a.z;
		var bx = b.x, by = b.y, bz = b.z;

		this.x = ay * bz - az * by;
		this.y = az * bx - ax * bz;
		this.z = ax * by - ay * bx;

		return this;

	},

	projectOnVector: function ( v ) {

		var denominator = v.lengthSq();

		if ( denominator === 0 ) return this.set( 0, 0, 0 );

		var scalar = v.dot( this ) / denominator;

		return this.copy( v ).multiplyScalar( scalar );

	},

	projectOnPlane: function ( planeNormal ) {

		_vector.copy( this ).projectOnVector( planeNormal );

		return this.sub( _vector );

	},

	reflect: function ( normal ) {

		// reflect incident vector off plane orthogonal to normal
		// normal is assumed to have unit length

		return this.sub( _vector.copy( normal ).multiplyScalar( 2 * this.dot( normal ) ) );

	},

	angleTo: function ( v ) {

		var denominator = Math.sqrt( this.lengthSq() * v.lengthSq() );

		if ( denominator === 0 ) return Math.PI / 2;

		var theta = this.dot( v ) / denominator;

		// clamp, to handle numerical problems

		return Math.acos( MathUtils.clamp( theta, - 1, 1 ) );

	},

	distanceTo: function ( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	},

	distanceToSquared: function ( v ) {

		var dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z;

		return dx * dx + dy * dy + dz * dz;

	},

	manhattanDistanceTo: function ( v ) {

		return Math.abs( this.x - v.x ) + Math.abs( this.y - v.y ) + Math.abs( this.z - v.z );

	},

	setFromSpherical: function ( s ) {

		return this.setFromSphericalCoords( s.radius, s.phi, s.theta );

	},

	setFromSphericalCoords: function ( radius, phi, theta ) {

		var sinPhiRadius = Math.sin( phi ) * radius;

		this.x = sinPhiRadius * Math.sin( theta );
		this.y = Math.cos( phi ) * radius;
		this.z = sinPhiRadius * Math.cos( theta );

		return this;

	},

	setFromCylindrical: function ( c ) {

		return this.setFromCylindricalCoords( c.radius, c.theta, c.y );

	},

	setFromCylindricalCoords: function ( radius, theta, y ) {

		this.x = radius * Math.sin( theta );
		this.y = y;
		this.z = radius * Math.cos( theta );

		return this;

	},

	setFromMatrixPosition: function ( m ) {

		var e = m.elements;

		this.x = e[ 12 ];
		this.y = e[ 13 ];
		this.z = e[ 14 ];

		return this;

	},

	setFromMatrixScale: function ( m ) {

		var sx = this.setFromMatrixColumn( m, 0 ).length();
		var sy = this.setFromMatrixColumn( m, 1 ).length();
		var sz = this.setFromMatrixColumn( m, 2 ).length();

		this.x = sx;
		this.y = sy;
		this.z = sz;

		return this;

	},

	setFromMatrixColumn: function ( m, index ) {

		return this.fromArray( m.elements, index * 4 );

	},

	setFromMatrix3Column: function ( m, index ) {

		return this.fromArray( m.elements, index * 3 );

	},

	equals: function ( v ) {

		return ( ( v.x === this.x ) && ( v.y === this.y ) && ( v.z === this.z ) );

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		this.x = array[ offset ];
		this.y = array[ offset + 1 ];
		this.z = array[ offset + 2 ];

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		array[ offset ] = this.x;
		array[ offset + 1 ] = this.y;
		array[ offset + 2 ] = this.z;

		return array;

	},

	fromBufferAttribute: function ( attribute, index, offset ) {

		if ( offset !== undefined ) {

			console.warn( 'THREE.Vector3: offset has been removed from .fromBufferAttribute().' );

		}

		this.x = attribute.getX( index );
		this.y = attribute.getY( index );
		this.z = attribute.getZ( index );

		return this;

	}

} );




// CONCATENATED MODULE: ../node_modules/three/src/math/Matrix4.js


var _v1 = new Vector3();
var _m1 = new Matrix4();
var _zero = new Vector3( 0, 0, 0 );
var _one = new Vector3( 1, 1, 1 );
var _x = new Vector3();
var _y = new Vector3();
var _z = new Vector3();

/**
 * @author mrdoob / http://mrdoob.com/
 * @author supereggbert / http://www.paulbrunt.co.uk/
 * @author philogb / http://blog.thejit.org/
 * @author jordi_ros / http://plattsoft.com
 * @author D1plo1d / http://github.com/D1plo1d
 * @author alteredq / http://alteredqualia.com/
 * @author mikael emtinger / http://gomo.se/
 * @author timknip / http://www.floorplanner.com/
 * @author bhouston / http://clara.io
 * @author WestLangley / http://github.com/WestLangley
 */

function Matrix4() {

	this.elements = [

		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1

	];

	if ( arguments.length > 0 ) {

		console.error( 'THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.' );

	}

}

Object.assign( Matrix4.prototype, {

	isMatrix4: true,

	set: function ( n11, n12, n13, n14, n21, n22, n23, n24, n31, n32, n33, n34, n41, n42, n43, n44 ) {

		var te = this.elements;

		te[ 0 ] = n11; te[ 4 ] = n12; te[ 8 ] = n13; te[ 12 ] = n14;
		te[ 1 ] = n21; te[ 5 ] = n22; te[ 9 ] = n23; te[ 13 ] = n24;
		te[ 2 ] = n31; te[ 6 ] = n32; te[ 10 ] = n33; te[ 14 ] = n34;
		te[ 3 ] = n41; te[ 7 ] = n42; te[ 11 ] = n43; te[ 15 ] = n44;

		return this;

	},

	identity: function () {

		this.set(

			1, 0, 0, 0,
			0, 1, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	},

	clone: function () {

		return new Matrix4().fromArray( this.elements );

	},

	copy: function ( m ) {

		var te = this.elements;
		var me = m.elements;

		te[ 0 ] = me[ 0 ]; te[ 1 ] = me[ 1 ]; te[ 2 ] = me[ 2 ]; te[ 3 ] = me[ 3 ];
		te[ 4 ] = me[ 4 ]; te[ 5 ] = me[ 5 ]; te[ 6 ] = me[ 6 ]; te[ 7 ] = me[ 7 ];
		te[ 8 ] = me[ 8 ]; te[ 9 ] = me[ 9 ]; te[ 10 ] = me[ 10 ]; te[ 11 ] = me[ 11 ];
		te[ 12 ] = me[ 12 ]; te[ 13 ] = me[ 13 ]; te[ 14 ] = me[ 14 ]; te[ 15 ] = me[ 15 ];

		return this;

	},

	copyPosition: function ( m ) {

		var te = this.elements, me = m.elements;

		te[ 12 ] = me[ 12 ];
		te[ 13 ] = me[ 13 ];
		te[ 14 ] = me[ 14 ];

		return this;

	},

	extractBasis: function ( xAxis, yAxis, zAxis ) {

		xAxis.setFromMatrixColumn( this, 0 );
		yAxis.setFromMatrixColumn( this, 1 );
		zAxis.setFromMatrixColumn( this, 2 );

		return this;

	},

	makeBasis: function ( xAxis, yAxis, zAxis ) {

		this.set(
			xAxis.x, yAxis.x, zAxis.x, 0,
			xAxis.y, yAxis.y, zAxis.y, 0,
			xAxis.z, yAxis.z, zAxis.z, 0,
			0, 0, 0, 1
		);

		return this;

	},

	extractRotation: function ( m ) {

		// this method does not support reflection matrices

		var te = this.elements;
		var me = m.elements;

		var scaleX = 1 / _v1.setFromMatrixColumn( m, 0 ).length();
		var scaleY = 1 / _v1.setFromMatrixColumn( m, 1 ).length();
		var scaleZ = 1 / _v1.setFromMatrixColumn( m, 2 ).length();

		te[ 0 ] = me[ 0 ] * scaleX;
		te[ 1 ] = me[ 1 ] * scaleX;
		te[ 2 ] = me[ 2 ] * scaleX;
		te[ 3 ] = 0;

		te[ 4 ] = me[ 4 ] * scaleY;
		te[ 5 ] = me[ 5 ] * scaleY;
		te[ 6 ] = me[ 6 ] * scaleY;
		te[ 7 ] = 0;

		te[ 8 ] = me[ 8 ] * scaleZ;
		te[ 9 ] = me[ 9 ] * scaleZ;
		te[ 10 ] = me[ 10 ] * scaleZ;
		te[ 11 ] = 0;

		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	},

	makeRotationFromEuler: function ( euler ) {

		if ( ! ( euler && euler.isEuler ) ) {

			console.error( 'THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.' );

		}

		var te = this.elements;

		var x = euler.x, y = euler.y, z = euler.z;
		var a = Math.cos( x ), b = Math.sin( x );
		var c = Math.cos( y ), d = Math.sin( y );
		var e = Math.cos( z ), f = Math.sin( z );

		if ( euler.order === 'XYZ' ) {

			var ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = - c * f;
			te[ 8 ] = d;

			te[ 1 ] = af + be * d;
			te[ 5 ] = ae - bf * d;
			te[ 9 ] = - b * c;

			te[ 2 ] = bf - ae * d;
			te[ 6 ] = be + af * d;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YXZ' ) {

			var ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce + df * b;
			te[ 4 ] = de * b - cf;
			te[ 8 ] = a * d;

			te[ 1 ] = a * f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b;

			te[ 2 ] = cf * b - de;
			te[ 6 ] = df + ce * b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZXY' ) {

			var ce = c * e, cf = c * f, de = d * e, df = d * f;

			te[ 0 ] = ce - df * b;
			te[ 4 ] = - a * f;
			te[ 8 ] = de + cf * b;

			te[ 1 ] = cf + de * b;
			te[ 5 ] = a * e;
			te[ 9 ] = df - ce * b;

			te[ 2 ] = - a * d;
			te[ 6 ] = b;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'ZYX' ) {

			var ae = a * e, af = a * f, be = b * e, bf = b * f;

			te[ 0 ] = c * e;
			te[ 4 ] = be * d - af;
			te[ 8 ] = ae * d + bf;

			te[ 1 ] = c * f;
			te[ 5 ] = bf * d + ae;
			te[ 9 ] = af * d - be;

			te[ 2 ] = - d;
			te[ 6 ] = b * c;
			te[ 10 ] = a * c;

		} else if ( euler.order === 'YZX' ) {

			var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = bd - ac * f;
			te[ 8 ] = bc * f + ad;

			te[ 1 ] = f;
			te[ 5 ] = a * e;
			te[ 9 ] = - b * e;

			te[ 2 ] = - d * e;
			te[ 6 ] = ad * f + bc;
			te[ 10 ] = ac - bd * f;

		} else if ( euler.order === 'XZY' ) {

			var ac = a * c, ad = a * d, bc = b * c, bd = b * d;

			te[ 0 ] = c * e;
			te[ 4 ] = - f;
			te[ 8 ] = d * e;

			te[ 1 ] = ac * f + bd;
			te[ 5 ] = a * e;
			te[ 9 ] = ad * f - bc;

			te[ 2 ] = bc * f - ad;
			te[ 6 ] = b * e;
			te[ 10 ] = bd * f + ac;

		}

		// bottom row
		te[ 3 ] = 0;
		te[ 7 ] = 0;
		te[ 11 ] = 0;

		// last column
		te[ 12 ] = 0;
		te[ 13 ] = 0;
		te[ 14 ] = 0;
		te[ 15 ] = 1;

		return this;

	},

	makeRotationFromQuaternion: function ( q ) {

		return this.compose( _zero, q, _one );

	},

	lookAt: function ( eye, target, up ) {

		var te = this.elements;

		_z.subVectors( eye, target );

		if ( _z.lengthSq() === 0 ) {

			// eye and target are in the same position

			_z.z = 1;

		}

		_z.normalize();
		_x.crossVectors( up, _z );

		if ( _x.lengthSq() === 0 ) {

			// up and z are parallel

			if ( Math.abs( up.z ) === 1 ) {

				_z.x += 0.0001;

			} else {

				_z.z += 0.0001;

			}

			_z.normalize();
			_x.crossVectors( up, _z );

		}

		_x.normalize();
		_y.crossVectors( _z, _x );

		te[ 0 ] = _x.x; te[ 4 ] = _y.x; te[ 8 ] = _z.x;
		te[ 1 ] = _x.y; te[ 5 ] = _y.y; te[ 9 ] = _z.y;
		te[ 2 ] = _x.z; te[ 6 ] = _y.z; te[ 10 ] = _z.z;

		return this;

	},

	multiply: function ( m, n ) {

		if ( n !== undefined ) {

			console.warn( 'THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.' );
			return this.multiplyMatrices( m, n );

		}

		return this.multiplyMatrices( this, m );

	},

	premultiply: function ( m ) {

		return this.multiplyMatrices( m, this );

	},

	multiplyMatrices: function ( a, b ) {

		var ae = a.elements;
		var be = b.elements;
		var te = this.elements;

		var a11 = ae[ 0 ], a12 = ae[ 4 ], a13 = ae[ 8 ], a14 = ae[ 12 ];
		var a21 = ae[ 1 ], a22 = ae[ 5 ], a23 = ae[ 9 ], a24 = ae[ 13 ];
		var a31 = ae[ 2 ], a32 = ae[ 6 ], a33 = ae[ 10 ], a34 = ae[ 14 ];
		var a41 = ae[ 3 ], a42 = ae[ 7 ], a43 = ae[ 11 ], a44 = ae[ 15 ];

		var b11 = be[ 0 ], b12 = be[ 4 ], b13 = be[ 8 ], b14 = be[ 12 ];
		var b21 = be[ 1 ], b22 = be[ 5 ], b23 = be[ 9 ], b24 = be[ 13 ];
		var b31 = be[ 2 ], b32 = be[ 6 ], b33 = be[ 10 ], b34 = be[ 14 ];
		var b41 = be[ 3 ], b42 = be[ 7 ], b43 = be[ 11 ], b44 = be[ 15 ];

		te[ 0 ] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
		te[ 4 ] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
		te[ 8 ] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
		te[ 12 ] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

		te[ 1 ] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
		te[ 5 ] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
		te[ 9 ] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
		te[ 13 ] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

		te[ 2 ] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
		te[ 6 ] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
		te[ 10 ] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
		te[ 14 ] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

		te[ 3 ] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
		te[ 7 ] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
		te[ 11 ] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
		te[ 15 ] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

		return this;

	},

	multiplyScalar: function ( s ) {

		var te = this.elements;

		te[ 0 ] *= s; te[ 4 ] *= s; te[ 8 ] *= s; te[ 12 ] *= s;
		te[ 1 ] *= s; te[ 5 ] *= s; te[ 9 ] *= s; te[ 13 ] *= s;
		te[ 2 ] *= s; te[ 6 ] *= s; te[ 10 ] *= s; te[ 14 ] *= s;
		te[ 3 ] *= s; te[ 7 ] *= s; te[ 11 ] *= s; te[ 15 ] *= s;

		return this;

	},

	determinant: function () {

		var te = this.elements;

		var n11 = te[ 0 ], n12 = te[ 4 ], n13 = te[ 8 ], n14 = te[ 12 ];
		var n21 = te[ 1 ], n22 = te[ 5 ], n23 = te[ 9 ], n24 = te[ 13 ];
		var n31 = te[ 2 ], n32 = te[ 6 ], n33 = te[ 10 ], n34 = te[ 14 ];
		var n41 = te[ 3 ], n42 = te[ 7 ], n43 = te[ 11 ], n44 = te[ 15 ];

		//TODO: make this more efficient
		//( based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm )

		return (
			n41 * (
				+ n14 * n23 * n32
				 - n13 * n24 * n32
				 - n14 * n22 * n33
				 + n12 * n24 * n33
				 + n13 * n22 * n34
				 - n12 * n23 * n34
			) +
			n42 * (
				+ n11 * n23 * n34
				 - n11 * n24 * n33
				 + n14 * n21 * n33
				 - n13 * n21 * n34
				 + n13 * n24 * n31
				 - n14 * n23 * n31
			) +
			n43 * (
				+ n11 * n24 * n32
				 - n11 * n22 * n34
				 - n14 * n21 * n32
				 + n12 * n21 * n34
				 + n14 * n22 * n31
				 - n12 * n24 * n31
			) +
			n44 * (
				- n13 * n22 * n31
				 - n11 * n23 * n32
				 + n11 * n22 * n33
				 + n13 * n21 * n32
				 - n12 * n21 * n33
				 + n12 * n23 * n31
			)

		);

	},

	transpose: function () {

		var te = this.elements;
		var tmp;

		tmp = te[ 1 ]; te[ 1 ] = te[ 4 ]; te[ 4 ] = tmp;
		tmp = te[ 2 ]; te[ 2 ] = te[ 8 ]; te[ 8 ] = tmp;
		tmp = te[ 6 ]; te[ 6 ] = te[ 9 ]; te[ 9 ] = tmp;

		tmp = te[ 3 ]; te[ 3 ] = te[ 12 ]; te[ 12 ] = tmp;
		tmp = te[ 7 ]; te[ 7 ] = te[ 13 ]; te[ 13 ] = tmp;
		tmp = te[ 11 ]; te[ 11 ] = te[ 14 ]; te[ 14 ] = tmp;

		return this;

	},

	setPosition: function ( x, y, z ) {

		var te = this.elements;

		if ( x.isVector3 ) {

			te[ 12 ] = x.x;
			te[ 13 ] = x.y;
			te[ 14 ] = x.z;

		} else {

			te[ 12 ] = x;
			te[ 13 ] = y;
			te[ 14 ] = z;

		}

		return this;

	},

	getInverse: function ( m, throwOnDegenerate ) {

		if ( throwOnDegenerate !== undefined ) {

			console.warn( "THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate." );

		}

		// based on http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
		var te = this.elements,
			me = m.elements,

			n11 = me[ 0 ], n21 = me[ 1 ], n31 = me[ 2 ], n41 = me[ 3 ],
			n12 = me[ 4 ], n22 = me[ 5 ], n32 = me[ 6 ], n42 = me[ 7 ],
			n13 = me[ 8 ], n23 = me[ 9 ], n33 = me[ 10 ], n43 = me[ 11 ],
			n14 = me[ 12 ], n24 = me[ 13 ], n34 = me[ 14 ], n44 = me[ 15 ],

			t11 = n23 * n34 * n42 - n24 * n33 * n42 + n24 * n32 * n43 - n22 * n34 * n43 - n23 * n32 * n44 + n22 * n33 * n44,
			t12 = n14 * n33 * n42 - n13 * n34 * n42 - n14 * n32 * n43 + n12 * n34 * n43 + n13 * n32 * n44 - n12 * n33 * n44,
			t13 = n13 * n24 * n42 - n14 * n23 * n42 + n14 * n22 * n43 - n12 * n24 * n43 - n13 * n22 * n44 + n12 * n23 * n44,
			t14 = n14 * n23 * n32 - n13 * n24 * n32 - n14 * n22 * n33 + n12 * n24 * n33 + n13 * n22 * n34 - n12 * n23 * n34;

		var det = n11 * t11 + n21 * t12 + n31 * t13 + n41 * t14;

		if ( det === 0 ) return this.set( 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 );

		var detInv = 1 / det;

		te[ 0 ] = t11 * detInv;
		te[ 1 ] = ( n24 * n33 * n41 - n23 * n34 * n41 - n24 * n31 * n43 + n21 * n34 * n43 + n23 * n31 * n44 - n21 * n33 * n44 ) * detInv;
		te[ 2 ] = ( n22 * n34 * n41 - n24 * n32 * n41 + n24 * n31 * n42 - n21 * n34 * n42 - n22 * n31 * n44 + n21 * n32 * n44 ) * detInv;
		te[ 3 ] = ( n23 * n32 * n41 - n22 * n33 * n41 - n23 * n31 * n42 + n21 * n33 * n42 + n22 * n31 * n43 - n21 * n32 * n43 ) * detInv;

		te[ 4 ] = t12 * detInv;
		te[ 5 ] = ( n13 * n34 * n41 - n14 * n33 * n41 + n14 * n31 * n43 - n11 * n34 * n43 - n13 * n31 * n44 + n11 * n33 * n44 ) * detInv;
		te[ 6 ] = ( n14 * n32 * n41 - n12 * n34 * n41 - n14 * n31 * n42 + n11 * n34 * n42 + n12 * n31 * n44 - n11 * n32 * n44 ) * detInv;
		te[ 7 ] = ( n12 * n33 * n41 - n13 * n32 * n41 + n13 * n31 * n42 - n11 * n33 * n42 - n12 * n31 * n43 + n11 * n32 * n43 ) * detInv;

		te[ 8 ] = t13 * detInv;
		te[ 9 ] = ( n14 * n23 * n41 - n13 * n24 * n41 - n14 * n21 * n43 + n11 * n24 * n43 + n13 * n21 * n44 - n11 * n23 * n44 ) * detInv;
		te[ 10 ] = ( n12 * n24 * n41 - n14 * n22 * n41 + n14 * n21 * n42 - n11 * n24 * n42 - n12 * n21 * n44 + n11 * n22 * n44 ) * detInv;
		te[ 11 ] = ( n13 * n22 * n41 - n12 * n23 * n41 - n13 * n21 * n42 + n11 * n23 * n42 + n12 * n21 * n43 - n11 * n22 * n43 ) * detInv;

		te[ 12 ] = t14 * detInv;
		te[ 13 ] = ( n13 * n24 * n31 - n14 * n23 * n31 + n14 * n21 * n33 - n11 * n24 * n33 - n13 * n21 * n34 + n11 * n23 * n34 ) * detInv;
		te[ 14 ] = ( n14 * n22 * n31 - n12 * n24 * n31 - n14 * n21 * n32 + n11 * n24 * n32 + n12 * n21 * n34 - n11 * n22 * n34 ) * detInv;
		te[ 15 ] = ( n12 * n23 * n31 - n13 * n22 * n31 + n13 * n21 * n32 - n11 * n23 * n32 - n12 * n21 * n33 + n11 * n22 * n33 ) * detInv;

		return this;

	},

	scale: function ( v ) {

		var te = this.elements;
		var x = v.x, y = v.y, z = v.z;

		te[ 0 ] *= x; te[ 4 ] *= y; te[ 8 ] *= z;
		te[ 1 ] *= x; te[ 5 ] *= y; te[ 9 ] *= z;
		te[ 2 ] *= x; te[ 6 ] *= y; te[ 10 ] *= z;
		te[ 3 ] *= x; te[ 7 ] *= y; te[ 11 ] *= z;

		return this;

	},

	getMaxScaleOnAxis: function () {

		var te = this.elements;

		var scaleXSq = te[ 0 ] * te[ 0 ] + te[ 1 ] * te[ 1 ] + te[ 2 ] * te[ 2 ];
		var scaleYSq = te[ 4 ] * te[ 4 ] + te[ 5 ] * te[ 5 ] + te[ 6 ] * te[ 6 ];
		var scaleZSq = te[ 8 ] * te[ 8 ] + te[ 9 ] * te[ 9 ] + te[ 10 ] * te[ 10 ];

		return Math.sqrt( Math.max( scaleXSq, scaleYSq, scaleZSq ) );

	},

	makeTranslation: function ( x, y, z ) {

		this.set(

			1, 0, 0, x,
			0, 1, 0, y,
			0, 0, 1, z,
			0, 0, 0, 1

		);

		return this;

	},

	makeRotationX: function ( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			1, 0, 0, 0,
			0, c, - s, 0,
			0, s, c, 0,
			0, 0, 0, 1

		);

		return this;

	},

	makeRotationY: function ( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			 c, 0, s, 0,
			 0, 1, 0, 0,
			- s, 0, c, 0,
			 0, 0, 0, 1

		);

		return this;

	},

	makeRotationZ: function ( theta ) {

		var c = Math.cos( theta ), s = Math.sin( theta );

		this.set(

			c, - s, 0, 0,
			s, c, 0, 0,
			0, 0, 1, 0,
			0, 0, 0, 1

		);

		return this;

	},

	makeRotationAxis: function ( axis, angle ) {

		// Based on http://www.gamedev.net/reference/articles/article1199.asp

		var c = Math.cos( angle );
		var s = Math.sin( angle );
		var t = 1 - c;
		var x = axis.x, y = axis.y, z = axis.z;
		var tx = t * x, ty = t * y;

		this.set(

			tx * x + c, tx * y - s * z, tx * z + s * y, 0,
			tx * y + s * z, ty * y + c, ty * z - s * x, 0,
			tx * z - s * y, ty * z + s * x, t * z * z + c, 0,
			0, 0, 0, 1

		);

		 return this;

	},

	makeScale: function ( x, y, z ) {

		this.set(

			x, 0, 0, 0,
			0, y, 0, 0,
			0, 0, z, 0,
			0, 0, 0, 1

		);

		return this;

	},

	makeShear: function ( x, y, z ) {

		this.set(

			1, y, z, 0,
			x, 1, z, 0,
			x, y, 1, 0,
			0, 0, 0, 1

		);

		return this;

	},

	compose: function ( position, quaternion, scale ) {

		var te = this.elements;

		var x = quaternion._x, y = quaternion._y, z = quaternion._z, w = quaternion._w;
		var x2 = x + x,	y2 = y + y, z2 = z + z;
		var xx = x * x2, xy = x * y2, xz = x * z2;
		var yy = y * y2, yz = y * z2, zz = z * z2;
		var wx = w * x2, wy = w * y2, wz = w * z2;

		var sx = scale.x, sy = scale.y, sz = scale.z;

		te[ 0 ] = ( 1 - ( yy + zz ) ) * sx;
		te[ 1 ] = ( xy + wz ) * sx;
		te[ 2 ] = ( xz - wy ) * sx;
		te[ 3 ] = 0;

		te[ 4 ] = ( xy - wz ) * sy;
		te[ 5 ] = ( 1 - ( xx + zz ) ) * sy;
		te[ 6 ] = ( yz + wx ) * sy;
		te[ 7 ] = 0;

		te[ 8 ] = ( xz + wy ) * sz;
		te[ 9 ] = ( yz - wx ) * sz;
		te[ 10 ] = ( 1 - ( xx + yy ) ) * sz;
		te[ 11 ] = 0;

		te[ 12 ] = position.x;
		te[ 13 ] = position.y;
		te[ 14 ] = position.z;
		te[ 15 ] = 1;

		return this;

	},

	decompose: function ( position, quaternion, scale ) {

		var te = this.elements;

		var sx = _v1.set( te[ 0 ], te[ 1 ], te[ 2 ] ).length();
		var sy = _v1.set( te[ 4 ], te[ 5 ], te[ 6 ] ).length();
		var sz = _v1.set( te[ 8 ], te[ 9 ], te[ 10 ] ).length();

		// if determine is negative, we need to invert one scale
		var det = this.determinant();
		if ( det < 0 ) sx = - sx;

		position.x = te[ 12 ];
		position.y = te[ 13 ];
		position.z = te[ 14 ];

		// scale the rotation part
		_m1.copy( this );

		var invSX = 1 / sx;
		var invSY = 1 / sy;
		var invSZ = 1 / sz;

		_m1.elements[ 0 ] *= invSX;
		_m1.elements[ 1 ] *= invSX;
		_m1.elements[ 2 ] *= invSX;

		_m1.elements[ 4 ] *= invSY;
		_m1.elements[ 5 ] *= invSY;
		_m1.elements[ 6 ] *= invSY;

		_m1.elements[ 8 ] *= invSZ;
		_m1.elements[ 9 ] *= invSZ;
		_m1.elements[ 10 ] *= invSZ;

		quaternion.setFromRotationMatrix( _m1 );

		scale.x = sx;
		scale.y = sy;
		scale.z = sz;

		return this;

	},

	makePerspective: function ( left, right, top, bottom, near, far ) {

		if ( far === undefined ) {

			console.warn( 'THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.' );

		}

		var te = this.elements;
		var x = 2 * near / ( right - left );
		var y = 2 * near / ( top - bottom );

		var a = ( right + left ) / ( right - left );
		var b = ( top + bottom ) / ( top - bottom );
		var c = - ( far + near ) / ( far - near );
		var d = - 2 * far * near / ( far - near );

		te[ 0 ] = x;	te[ 4 ] = 0;	te[ 8 ] = a;	te[ 12 ] = 0;
		te[ 1 ] = 0;	te[ 5 ] = y;	te[ 9 ] = b;	te[ 13 ] = 0;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = c;	te[ 14 ] = d;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = - 1;	te[ 15 ] = 0;

		return this;

	},

	makeOrthographic: function ( left, right, top, bottom, near, far ) {

		var te = this.elements;
		var w = 1.0 / ( right - left );
		var h = 1.0 / ( top - bottom );
		var p = 1.0 / ( far - near );

		var x = ( right + left ) * w;
		var y = ( top + bottom ) * h;
		var z = ( far + near ) * p;

		te[ 0 ] = 2 * w;	te[ 4 ] = 0;	te[ 8 ] = 0;	te[ 12 ] = - x;
		te[ 1 ] = 0;	te[ 5 ] = 2 * h;	te[ 9 ] = 0;	te[ 13 ] = - y;
		te[ 2 ] = 0;	te[ 6 ] = 0;	te[ 10 ] = - 2 * p;	te[ 14 ] = - z;
		te[ 3 ] = 0;	te[ 7 ] = 0;	te[ 11 ] = 0;	te[ 15 ] = 1;

		return this;

	},

	equals: function ( matrix ) {

		var te = this.elements;
		var me = matrix.elements;

		for ( var i = 0; i < 16; i ++ ) {

			if ( te[ i ] !== me[ i ] ) return false;

		}

		return true;

	},

	fromArray: function ( array, offset ) {

		if ( offset === undefined ) offset = 0;

		for ( var i = 0; i < 16; i ++ ) {

			this.elements[ i ] = array[ i + offset ];

		}

		return this;

	},

	toArray: function ( array, offset ) {

		if ( array === undefined ) array = [];
		if ( offset === undefined ) offset = 0;

		var te = this.elements;

		array[ offset ] = te[ 0 ];
		array[ offset + 1 ] = te[ 1 ];
		array[ offset + 2 ] = te[ 2 ];
		array[ offset + 3 ] = te[ 3 ];

		array[ offset + 4 ] = te[ 4 ];
		array[ offset + 5 ] = te[ 5 ];
		array[ offset + 6 ] = te[ 6 ];
		array[ offset + 7 ] = te[ 7 ];

		array[ offset + 8 ] = te[ 8 ];
		array[ offset + 9 ] = te[ 9 ];
		array[ offset + 10 ] = te[ 10 ];
		array[ offset + 11 ] = te[ 11 ];

		array[ offset + 12 ] = te[ 12 ];
		array[ offset + 13 ] = te[ 13 ];
		array[ offset + 14 ] = te[ 14 ];
		array[ offset + 15 ] = te[ 15 ];

		return array;

	}

} );




// CONCATENATED MODULE: ../node_modules/three/src/extras/core/Curve.js




/**
 * @author zz85 / http://www.lab4games.net/zz85/blog
 * Extensible curve object
 *
 * Some common of curve methods:
 * .getPoint( t, optionalTarget ), .getTangent( t )
 * .getPointAt( u, optionalTarget ), .getTangentAt( u )
 * .getPoints(), .getSpacedPoints()
 * .getLength()
 * .updateArcLengths()
 *
 * This following curves inherit from THREE.Curve:
 *
 * -- 2D curves --
 * THREE.ArcCurve
 * THREE.CubicBezierCurve
 * THREE.EllipseCurve
 * THREE.LineCurve
 * THREE.QuadraticBezierCurve
 * THREE.SplineCurve
 *
 * -- 3D curves --
 * THREE.CatmullRomCurve3
 * THREE.CubicBezierCurve3
 * THREE.LineCurve3
 * THREE.QuadraticBezierCurve3
 *
 * A series of curves can be represented as a THREE.CurvePath.
 *
 **/

/**************************************************************
 *	Abstract Curve base class
 **************************************************************/

function Curve() {

	this.type = 'Curve';

	this.arcLengthDivisions = 200;

}

Object.assign( Curve.prototype, {

	// Virtual base class method to overwrite and implement in subclasses
	//	- t [0 .. 1]

	getPoint: function ( /* t, optionalTarget */ ) {

		console.warn( 'THREE.Curve: .getPoint() not implemented.' );
		return null;

	},

	// Get point at relative position in curve according to arc length
	// - u [0 .. 1]

	getPointAt: function ( u, optionalTarget ) {

		var t = this.getUtoTmapping( u );
		return this.getPoint( t, optionalTarget );

	},

	// Get sequence of points using getPoint( t )

	getPoints: function ( divisions ) {

		if ( divisions === undefined ) divisions = 5;

		var points = [];

		for ( var d = 0; d <= divisions; d ++ ) {

			points.push( this.getPoint( d / divisions ) );

		}

		return points;

	},

	// Get sequence of points using getPointAt( u )

	getSpacedPoints: function ( divisions ) {

		if ( divisions === undefined ) divisions = 5;

		var points = [];

		for ( var d = 0; d <= divisions; d ++ ) {

			points.push( this.getPointAt( d / divisions ) );

		}

		return points;

	},

	// Get total curve arc length

	getLength: function () {

		var lengths = this.getLengths();
		return lengths[ lengths.length - 1 ];

	},

	// Get list of cumulative segment lengths

	getLengths: function ( divisions ) {

		if ( divisions === undefined ) divisions = this.arcLengthDivisions;

		if ( this.cacheArcLengths &&
			( this.cacheArcLengths.length === divisions + 1 ) &&
			! this.needsUpdate ) {

			return this.cacheArcLengths;

		}

		this.needsUpdate = false;

		var cache = [];
		var current, last = this.getPoint( 0 );
		var p, sum = 0;

		cache.push( 0 );

		for ( p = 1; p <= divisions; p ++ ) {

			current = this.getPoint( p / divisions );
			sum += current.distanceTo( last );
			cache.push( sum );
			last = current;

		}

		this.cacheArcLengths = cache;

		return cache; // { sums: cache, sum: sum }; Sum is in the last element.

	},

	updateArcLengths: function () {

		this.needsUpdate = true;
		this.getLengths();

	},

	// Given u ( 0 .. 1 ), get a t to find p. This gives you points which are equidistant

	getUtoTmapping: function ( u, distance ) {

		var arcLengths = this.getLengths();

		var i = 0, il = arcLengths.length;

		var targetArcLength; // The targeted u distance value to get

		if ( distance ) {

			targetArcLength = distance;

		} else {

			targetArcLength = u * arcLengths[ il - 1 ];

		}

		// binary search for the index with largest value smaller than target u distance

		var low = 0, high = il - 1, comparison;

		while ( low <= high ) {

			i = Math.floor( low + ( high - low ) / 2 ); // less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats

			comparison = arcLengths[ i ] - targetArcLength;

			if ( comparison < 0 ) {

				low = i + 1;

			} else if ( comparison > 0 ) {

				high = i - 1;

			} else {

				high = i;
				break;

				// DONE

			}

		}

		i = high;

		if ( arcLengths[ i ] === targetArcLength ) {

			return i / ( il - 1 );

		}

		// we could get finer grain at lengths, or use simple interpolation between two points

		var lengthBefore = arcLengths[ i ];
		var lengthAfter = arcLengths[ i + 1 ];

		var segmentLength = lengthAfter - lengthBefore;

		// determine where we are between the 'before' and 'after' points

		var segmentFraction = ( targetArcLength - lengthBefore ) / segmentLength;

		// add that fractional amount to t

		var t = ( i + segmentFraction ) / ( il - 1 );

		return t;

	},

	// Returns a unit vector tangent at t
	// In case any sub curve does not implement its tangent derivation,
	// 2 points a small delta apart will be used to find its gradient
	// which seems to give a reasonable approximation

	getTangent: function ( t ) {

		var delta = 0.0001;
		var t1 = t - delta;
		var t2 = t + delta;

		// Capping in case of danger

		if ( t1 < 0 ) t1 = 0;
		if ( t2 > 1 ) t2 = 1;

		var pt1 = this.getPoint( t1 );
		var pt2 = this.getPoint( t2 );

		var vec = pt2.clone().sub( pt1 );
		return vec.normalize();

	},

	getTangentAt: function ( u ) {

		var t = this.getUtoTmapping( u );
		return this.getTangent( t );

	},

	computeFrenetFrames: function ( segments, closed ) {

		// see http://www.cs.indiana.edu/pub/techreports/TR425.pdf

		var normal = new Vector3();

		var tangents = [];
		var normals = [];
		var binormals = [];

		var vec = new Vector3();
		var mat = new Matrix4();

		var i, u, theta;

		// compute the tangent vectors for each segment on the curve

		for ( i = 0; i <= segments; i ++ ) {

			u = i / segments;

			tangents[ i ] = this.getTangentAt( u );
			tangents[ i ].normalize();

		}

		// select an initial normal vector perpendicular to the first tangent vector,
		// and in the direction of the minimum tangent xyz component

		normals[ 0 ] = new Vector3();
		binormals[ 0 ] = new Vector3();
		var min = Number.MAX_VALUE;
		var tx = Math.abs( tangents[ 0 ].x );
		var ty = Math.abs( tangents[ 0 ].y );
		var tz = Math.abs( tangents[ 0 ].z );

		if ( tx <= min ) {

			min = tx;
			normal.set( 1, 0, 0 );

		}

		if ( ty <= min ) {

			min = ty;
			normal.set( 0, 1, 0 );

		}

		if ( tz <= min ) {

			normal.set( 0, 0, 1 );

		}

		vec.crossVectors( tangents[ 0 ], normal ).normalize();

		normals[ 0 ].crossVectors( tangents[ 0 ], vec );
		binormals[ 0 ].crossVectors( tangents[ 0 ], normals[ 0 ] );


		// compute the slowly-varying normal and binormal vectors for each segment on the curve

		for ( i = 1; i <= segments; i ++ ) {

			normals[ i ] = normals[ i - 1 ].clone();

			binormals[ i ] = binormals[ i - 1 ].clone();

			vec.crossVectors( tangents[ i - 1 ], tangents[ i ] );

			if ( vec.length() > Number.EPSILON ) {

				vec.normalize();

				theta = Math.acos( MathUtils.clamp( tangents[ i - 1 ].dot( tangents[ i ] ), - 1, 1 ) ); // clamp for floating pt errors

				normals[ i ].applyMatrix4( mat.makeRotationAxis( vec, theta ) );

			}

			binormals[ i ].crossVectors( tangents[ i ], normals[ i ] );

		}

		// if the curve is closed, postprocess the vectors so the first and last normal vectors are the same

		if ( closed === true ) {

			theta = Math.acos( MathUtils.clamp( normals[ 0 ].dot( normals[ segments ] ), - 1, 1 ) );
			theta /= segments;

			if ( tangents[ 0 ].dot( vec.crossVectors( normals[ 0 ], normals[ segments ] ) ) > 0 ) {

				theta = - theta;

			}

			for ( i = 1; i <= segments; i ++ ) {

				// twist a little...
				normals[ i ].applyMatrix4( mat.makeRotationAxis( tangents[ i ], theta * i ) );
				binormals[ i ].crossVectors( tangents[ i ], normals[ i ] );

			}

		}

		return {
			tangents: tangents,
			normals: normals,
			binormals: binormals
		};

	},

	clone: function () {

		return new this.constructor().copy( this );

	},

	copy: function ( source ) {

		this.arcLengthDivisions = source.arcLengthDivisions;

		return this;

	},

	toJSON: function () {

		var data = {
			metadata: {
				version: 4.5,
				type: 'Curve',
				generator: 'Curve.toJSON'
			}
		};

		data.arcLengthDivisions = this.arcLengthDivisions;
		data.type = this.type;

		return data;

	},

	fromJSON: function ( json ) {

		this.arcLengthDivisions = json.arcLengthDivisions;

		return this;

	}

} );




// CONCATENATED MODULE: ../node_modules/three/src/extras/curves/CatmullRomCurve3.js



/**
 * @author zz85 https://github.com/zz85
 *
 * Centripetal CatmullRom Curve - which is useful for avoiding
 * cusps and self-intersections in non-uniform catmull rom curves.
 * http://www.cemyuksel.com/research/catmullrom_param/catmullrom.pdf
 *
 * curve.type accepts centripetal(default), chordal and catmullrom
 * curve.tension is used for catmullrom which defaults to 0.5
 */


/*
Based on an optimized c++ solution in
 - http://stackoverflow.com/questions/9489736/catmull-rom-curve-with-no-cusps-and-no-self-intersections/
 - http://ideone.com/NoEbVM

This CubicPoly class could be used for reusing some variables and calculations,
but for three.js curve use, it could be possible inlined and flatten into a single function call
which can be placed in CurveUtils.
*/

function CubicPoly() {

	var c0 = 0, c1 = 0, c2 = 0, c3 = 0;

	/*
	 * Compute coefficients for a cubic polynomial
	 *   p(s) = c0 + c1*s + c2*s^2 + c3*s^3
	 * such that
	 *   p(0) = x0, p(1) = x1
	 *  and
	 *   p'(0) = t0, p'(1) = t1.
	 */
	function init( x0, x1, t0, t1 ) {

		c0 = x0;
		c1 = t0;
		c2 = - 3 * x0 + 3 * x1 - 2 * t0 - t1;
		c3 = 2 * x0 - 2 * x1 + t0 + t1;

	}

	return {

		initCatmullRom: function ( x0, x1, x2, x3, tension ) {

			init( x1, x2, tension * ( x2 - x0 ), tension * ( x3 - x1 ) );

		},

		initNonuniformCatmullRom: function ( x0, x1, x2, x3, dt0, dt1, dt2 ) {

			// compute tangents when parameterized in [t1,t2]
			var t1 = ( x1 - x0 ) / dt0 - ( x2 - x0 ) / ( dt0 + dt1 ) + ( x2 - x1 ) / dt1;
			var t2 = ( x2 - x1 ) / dt1 - ( x3 - x1 ) / ( dt1 + dt2 ) + ( x3 - x2 ) / dt2;

			// rescale tangents for parametrization in [0,1]
			t1 *= dt1;
			t2 *= dt1;

			init( x1, x2, t1, t2 );

		},

		calc: function ( t ) {

			var t2 = t * t;
			var t3 = t2 * t;
			return c0 + c1 * t + c2 * t2 + c3 * t3;

		}

	};

}

//

var tmp = new Vector3();
var px = new CubicPoly(), py = new CubicPoly(), pz = new CubicPoly();

function CatmullRomCurve3( points, closed, curveType, tension ) {

	Curve.call( this );

	this.type = 'CatmullRomCurve3';

	this.points = points || [];
	this.closed = closed || false;
	this.curveType = curveType || 'centripetal';
	this.tension = tension || 0.5;

}

CatmullRomCurve3.prototype = Object.create( Curve.prototype );
CatmullRomCurve3.prototype.constructor = CatmullRomCurve3;

CatmullRomCurve3.prototype.isCatmullRomCurve3 = true;

CatmullRomCurve3.prototype.getPoint = function ( t, optionalTarget ) {

	var point = optionalTarget || new Vector3();

	var points = this.points;
	var l = points.length;

	var p = ( l - ( this.closed ? 0 : 1 ) ) * t;
	var intPoint = Math.floor( p );
	var weight = p - intPoint;

	if ( this.closed ) {

		intPoint += intPoint > 0 ? 0 : ( Math.floor( Math.abs( intPoint ) / l ) + 1 ) * l;

	} else if ( weight === 0 && intPoint === l - 1 ) {

		intPoint = l - 2;
		weight = 1;

	}

	var p0, p1, p2, p3; // 4 points

	if ( this.closed || intPoint > 0 ) {

		p0 = points[ ( intPoint - 1 ) % l ];

	} else {

		// extrapolate first point
		tmp.subVectors( points[ 0 ], points[ 1 ] ).add( points[ 0 ] );
		p0 = tmp;

	}

	p1 = points[ intPoint % l ];
	p2 = points[ ( intPoint + 1 ) % l ];

	if ( this.closed || intPoint + 2 < l ) {

		p3 = points[ ( intPoint + 2 ) % l ];

	} else {

		// extrapolate last point
		tmp.subVectors( points[ l - 1 ], points[ l - 2 ] ).add( points[ l - 1 ] );
		p3 = tmp;

	}

	if ( this.curveType === 'centripetal' || this.curveType === 'chordal' ) {

		// init Centripetal / Chordal Catmull-Rom
		var pow = this.curveType === 'chordal' ? 0.5 : 0.25;
		var dt0 = Math.pow( p0.distanceToSquared( p1 ), pow );
		var dt1 = Math.pow( p1.distanceToSquared( p2 ), pow );
		var dt2 = Math.pow( p2.distanceToSquared( p3 ), pow );

		// safety check for repeated points
		if ( dt1 < 1e-4 ) dt1 = 1.0;
		if ( dt0 < 1e-4 ) dt0 = dt1;
		if ( dt2 < 1e-4 ) dt2 = dt1;

		px.initNonuniformCatmullRom( p0.x, p1.x, p2.x, p3.x, dt0, dt1, dt2 );
		py.initNonuniformCatmullRom( p0.y, p1.y, p2.y, p3.y, dt0, dt1, dt2 );
		pz.initNonuniformCatmullRom( p0.z, p1.z, p2.z, p3.z, dt0, dt1, dt2 );

	} else if ( this.curveType === 'catmullrom' ) {

		px.initCatmullRom( p0.x, p1.x, p2.x, p3.x, this.tension );
		py.initCatmullRom( p0.y, p1.y, p2.y, p3.y, this.tension );
		pz.initCatmullRom( p0.z, p1.z, p2.z, p3.z, this.tension );

	}

	point.set(
		px.calc( weight ),
		py.calc( weight ),
		pz.calc( weight )
	);

	return point;

};

CatmullRomCurve3.prototype.copy = function ( source ) {

	Curve.prototype.copy.call( this, source );

	this.points = [];

	for ( var i = 0, l = source.points.length; i < l; i ++ ) {

		var point = source.points[ i ];

		this.points.push( point.clone() );

	}

	this.closed = source.closed;
	this.curveType = source.curveType;
	this.tension = source.tension;

	return this;

};

CatmullRomCurve3.prototype.toJSON = function () {

	var data = Curve.prototype.toJSON.call( this );

	data.points = [];

	for ( var i = 0, l = this.points.length; i < l; i ++ ) {

		var point = this.points[ i ];
		data.points.push( point.toArray() );

	}

	data.closed = this.closed;
	data.curveType = this.curveType;
	data.tension = this.tension;

	return data;

};

CatmullRomCurve3.prototype.fromJSON = function ( json ) {

	Curve.prototype.fromJSON.call( this, json );

	this.points = [];

	for ( var i = 0, l = json.points.length; i < l; i ++ ) {

		var point = json.points[ i ];
		this.points.push( new Vector3().fromArray( point ) );

	}

	this.closed = json.closed;
	this.curveType = json.curveType;
	this.tension = json.tension;

	return this;

};




// CONCATENATED MODULE: ./js/model/ActionSwipe.js












class ActionSwipe_ActionSwipe extends ActionTween_ActionTween {

	constructor(points = [], duration = 1, delay = 0) {
		super(0, 0, 0, 0, duration, delay);
		this.type = "ActionSwipe";
		this.name.value = "Mouse gesture";
		this.description.value = "Add a mouse gesture";
		this.points = new ArrayData_ArrayData();
		this.points.dataClass = Vector2Data_Vector2Data;
		while(points.length < 2) {
			points.push(new Vector2Data_Vector2Data());
		}
		this.points.value = points;
		this.isCaptureable.value = true;
		this.isTestable.value = true;
		this.smoothness = new NumberData_NumberData(20);
		this.changeCursorOnCapture.value = true;
		this.icon.value = "fas fa-arrows-alt";
	
		this.captureDownHandler = this.captureDownHandler.bind(this);
		this.captureMoveHandler = this.captureMoveHandler.bind(this);
		this.captureUpHandler = this.captureUpHandler.bind(this);
	}

	clone() {
		let action = new ActionSwipe_ActionSwipe();
		action.copy(this);
		return action;
	}

	copy(action) {
		super.copy(action);
		let points = [];
		action.points.map((point) => {
			points.push(point.clone());
		});
		this.points.value = points;
	}

	serialize() {
		let data = super.serialize();
		data.points = this.points.serialize();
		return data;
	}

	deserialize(data) {
		if (!data) return;
		super.deserialize(data);
		this.points.deserialize(data.points);
	}

	trigger() {
		this.startX.value = 0;
		this.startY.value = 0;
		this.endX.value = 1;
		this.endY.value = 0;

		let points = [];
		this.points.map((pointData) => {
			points.push(new Vector3(pointData.x.value, pointData.y.value, 0));
		});
		this.curve = new CatmullRomCurve3(points, false, 'chordal', 0.75);
		
		this.dispatchMouseEvent("mousedown", 0);
		return super.trigger();
	}

	dispatchMouseEvent(eventType, offset) {
		offset = Math.min(offset, 1);
		offset = Math.max(offset, 0);
		let point = this.curve.getPoint(offset);
		point.x = point.x - window.scrollX;
		point.y = point.y - window.scrollY;
		let element = document.elementFromPoint(point.x, point.y);
		let event = new MouseEvent(eventType, {
			bubbles: true,
			cancelable: true,
			view: window,
			clientX: point.x,
			clientY: point.y,
			pageX: point.x,
			pageY: point.y,
			x: point.x,
			y: point.y
		});
		element.dispatchEvent(event);
	}

	// addPoint() {
	// 	this.points.push(new Vector2Data());
	// }
	
	// removePoint(point) {
	// 	this.points.remove(point);
	// }

	tweenUpdateHandler() {
		this.dispatchMouseEvent("mousemove", this.pos.x);
	}

	tweenCompleteHandler(e) {
		this.dispatchMouseEvent("mouseup", 1);
	}

	capture() {
		super.capture();
		document.body.addEventListener(events.mousedown, this.captureDownHandler);
	}

	captureDownHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point_Point(touch.pageX, touch.pageY);
		this.capturedPoints = [new Vector2Data_Vector2Data(point.x, point.y)];

		this.lastPoint = point;
		this.startDate = new Date();

		document.body.removeEventListener(events.mousedown, this.captureDownHandler);
		document.body.addEventListener(events.mousemove, this.captureMoveHandler);
		document.body.addEventListener(events.mouseup, this.captureUpHandler);
	}

	captureMoveHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point_Point(touch.pageX, touch.pageY);
		let distance = Point_Point.distance(this.lastPoint, point);
		if (distance > this.smoothness.value) {
			this.lastPoint = point;
			this.capturedPoints.push(new Vector2Data_Vector2Data(point.x, point.y));
		}
	}

	captureUpHandler(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		let point = new Point_Point(touch.pageX, touch.pageY);
		let distance = Point_Point.distance(this.lastPoint, point);
		if (distance > 0) {
			this.capturedPoints.push(new Vector2Data_Vector2Data(point.x, point.y));
		}
		this.points.value = this.capturedPoints;
		this.capturedPoints = [];

		let duration = Object(number["i" /* roundDecimalToPlace */])((new Date() - this.startDate) / 1000, 1);
		this.duration.value = duration;
		
		document.body.removeEventListener(events.mousemove, this.captureMoveHandler);
		document.body.removeEventListener(events.mouseup, this.captureUpHandler);
		this.captureComplete();
	}

	captureAtInit() {
		super.captureAtInit();
		this.capture();
	}
	
}
// CONCATENATED MODULE: ./js/model/ActionWait.js


class ActionWait_ActionWait extends Action_Action {

	constructor() {
		super("ActionWait", "Pause", "Add a pause");
		this.delay.value = 1;
		this.icon.value = "fas fa-pause-circle";
	}

	clone() {
		let action = new ActionWait_ActionWait();
		action.copy(this);
		return action;
	}
	
}
// CONCATENATED MODULE: ./js/model/Actions.js








class Actions_Actions extends ArrayData_ArrayData {

	constructor() {
		super();

		this.push.apply(this, arguments);

		// this.addSelectedType = this.addSelectedType.bind(this);

		this.types = new ArrayData_ArrayData();
		this.types.value = [
			new ActionScroll_ActionScroll(),
			new ActionMouseEvent_ActionMouseEvent(),
			new ActionSwipe_ActionSwipe(),
			new ActionEval_ActionEval(),
			new ActionWait_ActionWait()
		];
		// this.types.selectedItem.value = this.types.value[0];
	}

	cloneAction(action) {
		let clone = action.clone();
		this.addAction(clone);
	}

	// addSelectedType() {
	// 	if(!this.types.selectedItem.value) {
	// 		return;
	// 	}
	// 	let action = this.types.selectedItem.value.clone();
	// 	sendTrackEventMessage("Action", "add", action.type);
	// 	this.addAction(action);
	// 	// this.types.selectedItem.value = this.types.value[0];
	// }

	addAction(action) {
		if (!action) return;
		Object(GABridge["a" /* sendTrackEventMessage */])("Action", "add", action.type);
		action.captureAtInit();
		let index = this.selectedIndex.value + 1;
		if (isNaN(index)) index = this.value.length;
		this.splice(index, 0, action);
		this.selectedIndex.value = index;
	}

	removeAction(action) {
		Object(GABridge["a" /* sendTrackEventMessage */])("Action", "remove", action.type);
		let index = this.indexOf(action);
		this.remove(action);
		let newIndex = Math.max(index - 1, 0);
		this.selectedIndex.value = Math.min(newIndex, this.value.length - 1);
	}

	serialize() {
		let actions = [];
		this.map((action) => {
			actions.push(action.serialize());
		});
		return actions;
	}

	deserialize(json) {
		if (!json) return;
		let actions = [];
		for(let i = 0; i < json.length; i++) {
			let data = json[i];
			let action = this.types.find((type) => {
				return type.type == data.type;
			}).clone();
			action.deserialize(data);
			actions.push(action);
		}
		this.value = actions;
	}

}
// CONCATENATED MODULE: ./js/tsunami/utils/Throttle.js
class Throttle {

	constructor(callback, timeout = 500) {
		this.callback = callback;
		this.timeout = timeout;

		this.throttle = this.throttle.bind(this);
		this.timeoutComplete = this.timeoutComplete.bind(this);

		this.isWaiting = false;
		this.doCallback = false;
	}

	throttle(data) {
		this.data = data;
		this.doCallback = true;
		if (!this.isWaiting) {
			this.timeoutComplete();
		}
	}

	timeoutComplete() {
		if(this.doCallback) {
			this.isWaiting = true;
			this.callback(this.data);
			this.doCallback = false;
			setTimeout(this.timeoutComplete, this.timeout);
		} else {
			this.isWaiting = false;
		}
	}

}
// CONCATENATED MODULE: ./js/model/Settings.js










class Settings_Settings {

    constructor() {
        this.darkModeChangeHandler = this.darkModeChangeHandler.bind(this);

        this.position = new Vector2Data_Vector2Data(50, 50);

        this.windowSizeChangeHandler = this.windowSizeChangeHandler.bind(this);
        this.windowResizeHandler = this.windowResizeHandler.bind(this);

        this.windowSize = new Vector2Data_Vector2Data(window.innerWidth, window.innerHeight);
        this.windowSize.addEventListener(Data_Data.CHANGE, this.windowSizeChangeHandler);

        window.addEventListener("resize", this.windowResizeHandler);

        this.videoBitsPerSecondThrottle = new Throttle(() => {
            Object(GABridge["a" /* sendTrackEventMessage */])("settings", "videoBitsPerSecond", this.videoBitsPerSecond.value);
        }, 1000);
        this.videoBitsPerSecondMin = 1;
        this.videoBitsPerSecondMax = 8;
        this.videoBitsPerSecond = new NumberData_NumberData();
        this.videoBitsPerSecond.value = 8;
        this.videoBitsPerSecond.addEventListener(Data_Data.CHANGE, this.videoBitsPerSecondThrottle.throttle);
        this.videoCodecs = new ArrayData_ArrayData("vp8", "vp9", "h264");
        this.videoCodecs.selectedItem.value = this.videoCodecs.value[0];
        this.videoCodecs.selectedItem.addEventListener(Data_Data.CHANGE, () => {
            Object(GABridge["a" /* sendTrackEventMessage */])("settings", "videoCodec", this.videoCodecs.selectedItem.value);
       });

        this.audioBitsPerSecondThrottle = new Throttle(() => {
            Object(GABridge["a" /* sendTrackEventMessage */])("settings", "audioBitsPerSecond", this.audioBitsPerSecond.value);
        }, 1000);
        this.audioBitsPerSecond = new NumberData_NumberData(128);
        this.audioBitsPerSecond.addEventListener(Data_Data.CHANGE, this.audioBitsPerSecondThrottle.throttle);
        this.audioCodecs = new ArrayData_ArrayData("opus");
        this.audioCodecs.selectedItem.value = this.audioCodecs.value[0];
        this.audioCodecs.selectedItem.addEventListener(Data_Data.CHANGE, () => {
            Object(GABridge["a" /* sendTrackEventMessage */])("settings", "audioCodec", this.audioCodecs.selectedItem.value);
        });

        this.darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');

        this.isColorThemeLight = new BooleanData_BooleanData();
        this.isColorThemeLight.addEventListener(Data_Data.CHANGE, (event) => {
            let msg = { txt: "scrollCaptureColorTheme", isColorThemeLight: event.data };
            app.model.sendMessage(msg);
        });

        this.colorThemes = new ArrayData_ArrayData("Dark", "Light", "Auto");
        this.colorThemes.selectedItem.value = "Dark";
        this.switchColorTheme();
        this.colorThemes.selectedItem.addEventListener(Data_Data.CHANGE, ()=> {
            Object(GABridge["a" /* sendTrackEventMessage */])("settings", "colorTheme", this.colorThemes.selectedItem.value);
            this.switchColorTheme();
        });
    }

    windowResizeHandler() {
        this.windowSize.removeEventListener(Data_Data.CHANGE, this.windowSizeChangeHandler);
        this.windowSize.x.value = window.innerWidth;
        this.windowSize.y.value = window.innerHeight;
        this.windowSize.addEventListener(Data_Data.CHANGE, this.windowSizeChangeHandler);
    }

    windowSizeChangeHandler() {
        app.model.sendMessage({ txt: "scrollCaptureResizeWindow", width: this.windowSize.x.value, height: this.windowSize.y.value });
   }

    switchColorTheme() {
        let colorTheme = this.colorThemes.selectedItem.value;
        switch (colorTheme) {
            case "Dark":
            case "Light":
                this.darkModeMatchMedia.removeEventListener('change', this.darkModeChangeHandler);
                this.isColorThemeLight.value = (colorTheme == "Light");
                break;
            default:
                this.darkModeMatchMedia.addEventListener('change', this.darkModeChangeHandler);
                this.darkModeChangeHandler();
                break;
        }
    }

    darkModeChangeHandler() {
        let isDarkMode = this.darkModeMatchMedia.matches;
        this.isColorThemeLight.value = !isDarkMode;
    }

    serialize() {
        return {
            position: this.position.serialize(),
            videoBitsPerSecond: this.videoBitsPerSecond.serialize(),
            videoCodec: this.videoCodecs.selectedItem.serialize(),
            audioBitsPerSecond: this.audioBitsPerSecond.serialize(),
            audioCodec: this.audioCodecs.selectedItem.serialize(),
            colorThemes: this.colorThemes.selectedItem.value
        };
    }

    deserialize(data) {
        if (!data) return;
        this.position.deserialize(data.position);
        this.videoBitsPerSecond.deserialize(data.videoBitsPerSecond);
        this.videoCodecs.selectedItem.deserialize(data.videoCodec);
        this.audioBitsPerSecond.deserialize(data.audioBitsPerSecond);
        this.audioCodecs.selectedItem.deserialize(data.audioCodec);
        if (data.hasOwnProperty("colorThemes")) {
            this.colorThemes.selectedItem.value = data.colorThemes;
        }
    }

}
// CONCATENATED MODULE: ./js/model/AppModel.js







class AppModel_AppModel extends DataModel_DataModel {

    constructor() {
        super({
            selectedAction:"Pause"
        });
        this.save = this.save.bind(this);
        // this.playSelected = this.playSelected.bind(this);
		// this.captureSelected = this.captureSelected.bind(this);
		// this.deleteSelected = this.deleteSelected.bind(this);
		// this.clearActions = this.clearActions.bind(this);

        this.showCaptureIcon = new BooleanData_BooleanData();
        this.isSaving = new BooleanData_BooleanData();
        // this.isPlayingSelected = new BooleanData();
        // this.isCapturingSelected = new BooleanData();

        this.settings = new Settings_Settings();
        this.actions = new Actions_Actions();

        // this.addEventListener("selectedAction", (event) => {
        //     console.log("selectedAction change", this.selectedAction);
        // });

        // this.actions.value = [
        // 	new ActionSwipe([new Vector2Data(150, 250), new Vector2Data(400, 450)]),
        // 	new ActionScroll("window", "px", 0, 500),
        // 	new ActionMouseEvent("click", 0, 0),
        // 	new ActionEval(),
        // 	// new ActionScroll(".scrollpane", "%", 0, 100),
        // 	// new ActionMouseEvent("click", 0, 0),
        // ];

        this.actions.addEventListener("add", (event) => {
            this.save();
        });
        this.actions.addEventListener("remove", (event) => {
            this.save();
        });
    }

    get actions() {
        return this._actions;
    }

    set actions(value) {
        this._actions = value;
		this.dispatchEvent(new BaseEvent("change_actions", value));
    }

    sendMessage(message) {
        chrome.runtime.sendMessage(message);
    }

    save() {
        this.isSaving.value = true;
        let obj = {
            actions: this.actions.serialize(),
            settings: this.settings.serialize()
        };
        let json = JSON.stringify(obj);
        chrome.storage.local.set({ json: json }, () => {
            setTimeout(() => {
                this.isSaving.value = false;
            }, 100);
        });
    }

    // playSelected() {
    // 	this.isPlayingSelected.value = true;
    // 	let promise = this.actions.selectedItem.value.play();
    // 	promise.then(()=> {
    // 		this.isPlayingSelected.value = false;
    // 		this.save();
    // 	});
    // }

    // captureSelected() {

    // }

    // deleteSelected() {
    // 	this.actions.selectedItem.value.deleteAction();
    // }

    clearActions() {
        Object(GABridge["a" /* sendTrackEventMessage */])("clearActions", "click");
        this.actions.clear();
        this.save();
    }
}

// CONCATENATED MODULE: ./js/tsunami/Branch.js
class Branch extends EventTarget {
  constructor({ load, show, hide, branches, defaultChild, getBranch } = {}) {
    super();
    this.branches = branches || {};
    if (load) {
      this.load = load;
    }
    if (show) {
      this.show = show;
    }
    if (hide) {
      this.hide = hide;
    }
    if (getBranch) {
      this.getBranch = getBranch;
    }

    this.defaultChild = defaultChild;
    this._parent = null;
    this._path = null;
    this._router = null;
    this._slug = null;
  }

  getBranch(slug) {
    let branch;
    if (this.branches[slug]) {
      branch = this.branches[slug];
    } else if (this.branches['*']) {
      branch = this.branches['*'];
    } else {
      branch = new Branch();
      console.log('No branch named ' + slug + ', default branch was created');
    }
    return branch;
  }

  load(props, assetList) {
    return Promise.resolve();
  }

  show(props) {
    return Promise.resolve();
  }

  hide(props) {
    return Promise.resolve();
  }

  get defaultChild() {
    return this._defaultChild;
  }

  set defaultChild(value) {
    this._defaultChild = value;
  }

  get parent() {
    return this._parent;
  }

  set parent(value) {
    this._parent = value;
  }

  get path() {
    return this._path;
  }

  set path(value) {
    this._path = value;
  }

  get router() {
    return this._router;
  }

  set router(value) {
    this._router = value;
  }

  get slug() {
    return this._slug;
  }

  set slug(value) {
    this._slug = value;
  }
}

// CONCATENATED MODULE: ./js/tsunami/utils/array.js


function shuffleArray(o) {
  for (let j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
}

//return a randomly seleted item in an array
function sample(array) {
  return array[Object(number["e" /* randomInt */])(0, array.length - 1)];
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
  // let array = new Array();
  // for (let i = 0; i < nodeList.length; i++) {
  // 	array.push(nodeList.item(i));
  // }
  // return array;
}

// CONCATENATED MODULE: ./js/tsunami/components/EventHandler.js
class EventHandler {

    constructor(eventTarget, type, eventHandler, enabled = true) {
        this.eventTarget = eventTarget;
        this.type = type;
        this.eventHandler = eventHandler;
        this.enabled = enabled;
    }

    set enabled(value) {
        this._enabled = value;
        if(value) {
            this.eventTarget.addEventListener(this.type, this.eventHandler);
        } else {
            this.eventTarget.removeEventListener(this.type, this.eventHandler);
        }
    }

    destroy() {
        this.enabled = false;
        this.eventTarget = null;
        this.type = null;
        this.eventHandler = null;
    }

}
// CONCATENATED MODULE: ./js/tsunami/directives/onDirective.js


function onDirective(component) {
    const removedAttributes = [];
    for (let i = 0; i < component.element.attributes.length; i++) {
        const attribute = component.element.attributes[i];
        if (attribute.name.indexOf("on:") != -1) {
            const type = attribute.name.split("on:")[1];
            const callback = new Function("event", attribute.value).bind(component);
            component.attributes[attribute.name] = new EventHandler(component.element, type, callback);
            removedAttributes.push(attribute.name);
        }
    }
    removedAttributes.map((attributeName) => {
        component.element.removeAttribute(attributeName);
    });
}

// CONCATENATED MODULE: ./js/tsunami/utils/validation.js
// export function validateEmail(emailAddress) {
// 	var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
// 	var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
// 	var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
// 	var sQuotedPair = '\\x5c[\\x00-\\x7f]';
// 	var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
// 	var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
// 	var sDomain_ref = sAtom;
// 	var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
// 	var sWord = '(' + sAtom + '|' + sQuotedString + ')';
// 	var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
// 	var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
// 	var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
// 	var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
//
// 	var reValidEmail = new RegExp(sValidEmail);
//
// 	if (reValidEmail.test(emailAddress)) {
// 		return true;
// 	}
//
// 	return false;
// }

// export function validateEmail(email) {
// 	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(String(email).toLowerCase());
// }

function validateEmail(email) {
	let re = /\S+@\S+\.\S+/;
	return re.test(email);
}

function hasValue(val) {
	return (val != null && val != undefined && val != "");
}

// CONCATENATED MODULE: ./js/tsunami/data/Expression.js





class Expression_Expression extends EventTarget {

    constructor(expression, scope, callback = null) {
        super();

        this.changeHandler = this.changeHandler.bind(this);

        this._value = null;

        this.getValue = new Function("return " + expression).bind(scope);

        this.callback = callback;

        let expressionChunks = expression;
        let operators = "+/*-[](){}!?%$=:;`";
        for(let i = 0; i < operators.length; i++) {
            let char = operators.charAt(i);
            expressionChunks = expressionChunks.split(char).join(" ");
        }
        let chunks = expressionChunks.split(" ");
        let filteredChunks = chunks.filter((chunk) => {
            return hasValue(chunk) && chunk.indexOf("'") == -1 && chunk.indexOf('"') == -1;
        });

        this.eventHandlers = [];
        filteredChunks.map((chunk, i) => {
            let slugs = chunk.split(".");
            let target = scope;
            let type = slugs.pop();
            // if(slugs.length > 0) target = new Function("return " + slugs.join(".")).bind(scope)();
            if(slugs.length > 0) target = getProperty(slugs.join("."), scope);
            if(target instanceof EventTarget && target[type] != undefined) {
                let handler = new EventHandler(target, type, this.changeHandler);
                this.eventHandlers.push(handler);
            }
        });

        this.changeHandler();
    }

    get value() {
        return this._value;
    }

    changeHandler(event = null) {
        this._value = this.getValue();
        ChangeEvent_ChangeEvent.dispatch(this, "value", this.value);
        if(this.callback) this.callback(this.value);
    }

    destroy() {
        this.eventHandlers.map((handler) => {
            handler.destroy();
        });
        this.eventHandlers = [];
        this.callback = null;
        this._value = null;
    }

}

// CONCATENATED MODULE: ./js/tsunami/directives/setDirective.js


function setDirective(component, attr = "set:") {
    const removedAttributes = [];
    for (let i = 0; i < component.element.attributes.length; i++) {
        const attribute = component.element.attributes[i];
        if (attribute.name.indexOf(attr) != -1) {
            const propertyName = attribute.name.split(attr)[1];
            const callback = (value) => {
                component[propertyName] = value;
            }
            component.attributes[attribute.name] = new Expression_Expression(attribute.value, component, callback);
            removedAttributes.push(attribute.name);
        }
    }
    removedAttributes.map((attributeName) => {
        component.element.removeAttribute(attributeName);
    });
}

// EXTERNAL MODULE: ./js/tsunami/utils/transformLiterals.js
var transformLiterals = __webpack_require__(2);

// CONCATENATED MODULE: ./js/tsunami/directives/attributeDirective.js



function attributeDirective(component) {
    let element = component.element;
    for (let i = 0; i < element.attributes.length; i++) {
        let attribute = element.attributes[i];
        let attributeValue = attribute.value.split("{").join("${");
        if (attributeValue.indexOf("${") != -1) {
            const callback = (value) => {
                component.setAttribute(attribute.name, value);
            }
            component.attributes[attribute.name] = new Expression_Expression( Object(transformLiterals["a" /* transformLiterals */])("`" + attributeValue + "`"), component, callback);
        }
    }
}
// CONCATENATED MODULE: ./js/tsunami/data/Bind.js




class Bind_Bind {

    constructor(scope1, path1, scope2, path2) {
        this.changeHandler1 = this.changeHandler1.bind(this);
        this.changeHandler2 = this.changeHandler2.bind(this);
        this.eventHandler1 = this.createEventHandler(scope1, path1, this.changeHandler1);
        this.eventHandler2 = this.createEventHandler(scope2, path2, this.changeHandler2.bind(this));
        this.changeHandler2(new ChangeEvent_ChangeEvent(this.eventHandler2.type, this.eventHandler2.eventTarget[this.eventHandler2.type]));
    }

    changeHandler1(event) {
        this.eventHandler2.enabled = false;
        this.eventHandler2.eventTarget[this.eventHandler2.type] = event.data;
        this.eventHandler2.enabled = true;
    }

    changeHandler2(event) {
        this.eventHandler1.enabled = false;
        this.eventHandler1.eventTarget[this.eventHandler1.type] = event.data;
        this.eventHandler1.enabled = true;
    }

    createEventHandler(scope, path, callback) {
        let slugs = path.split(".");
        let target = scope;
        let type = slugs.pop();
        // if(slugs.length > 0) target = new Function().bind(scope)();
        if(slugs.length > 0) target = getProperty(slugs.join("."), scope);
        let handler;
        if(target instanceof EventTarget) {
            handler = new EventHandler(target, type, callback);
        } else {
            console.log("Object is not an instance of EventTarget, cannot add event listener type '" + type + "'");
        }
        return handler;
    }

    destroy() {
        this.eventHandler1.destroy();
        this.eventHandler2.destroy();
    }
}
// CONCATENATED MODULE: ./js/tsunami/directives/bindDirective.js


function bindDirective(component) {
    const removedAttributes = [];
    for (let i = 0; i < component.element.attributes.length; i++) {
        const attribute = component.element.attributes[i];
        if (attribute.name.indexOf("bind:") != -1) {
            const propertyName = attribute.name.split("bind:")[1];
            component.attributes[attribute.name] = new Bind_Bind(component, "this." + propertyName, component, attribute.value);
            removedAttributes.push(attribute.name);
        }
    }
    removedAttributes.map((attributeName) => {
        component.element.removeAttribute(attributeName);
    });
}
// CONCATENATED MODULE: ./js/tsunami/components/UIComponent.js












class UIComponent_UIComponent extends Branch {

	constructor(element) {
		super();

		if (element) {
			this.debug = (element.getAttribute("data-debug") == "true");
		}

		this.element = element;

		this.componentID = new Date().getTime();
		if (this.debug) this.element.setAttribute("data-componentId", this.componentID);

		// this.childrenSelector = ":scope > *";

		this._model = null;
		this.rectangle = new Rectangle_Rectangle();
		this.globalRectangle = new Rectangle_Rectangle();
		this.windowSize = new Rectangle_Rectangle();

		this.attributes = {};

		this.showDuration = 0;
		this.showDelay = 0;
		this.hideDuration = 0;
		this.hideDelay = 0;
		this.showChildrenDelay = 0;
		this.hideChildrenDelay = 0;

		this.doChildrenAnimationFrame = false;
		this.alsoShowChildren = false;
		this.calculateGlobalPosition = false;
	}

	get element() {
		return this._element;
	}

	set element(value) {
		this._element = value;
		if (value) value.component = this;
	}

	get containerElement() {
		return this.element;
	}

	removeChild(value) {
		if(this.debug) console.log("UIList.removeChild", value);
		if (value) {
			if (this.containerElement == value.parentNode) {
				value.parentNode.removeChild(value);
				let component = value.component;
				if (component) {
					if (this.isAdded) {
						component.elementRemoved();
					}
				}
			}
		}
	}

	appendChild(value) {
		if (value) {
			this.containerElement.appendChild(value);
			let component = value.component;
			if (component) {
				if (this.isAdded) {
					component.elementAdded();
				}
				if (component.windowResize) {
					component.windowResize(this.windowSize);
				}
				// if (component.windowScroll) {
				// 	component.windowScroll(this.windowScrollPoint);
				// }
				// if (component.animationFrame) {
				// 	component.animationFrame(this.animationFrameData);
				// }
			}
		}
	}

	prependChild(child) {
		this.appendChildAt(child, 0);
	}

	appendChildAt(child, index = 0) {
		// if(child.parentNode) {
		// 	child.parentNode.removeChild(child);
		// }
		let children = this.children;
		if (index >= children.length) {
			this.appendChild(child);
		} else {
			let beforeChild = children[index];
			this.insertBefore(child, beforeChild);
		}
	}

	insertBefore(value, ref) {
		if (value) {
			if (ref) {
				this.containerElement.insertBefore(value, ref);
				let component = value.component;
				if (component) {
					if (this.isAdded) {
						component.elementAdded();
					}
					if (component.windowResize) {
						component.windowResize(this.windowSize);
					}
					// if (component.windowScroll) {
					// 	component.windowScroll(this.windowScrollPoint);
					// }
					// if (component.animationFrame) {
					// 	component.animationFrame(this.animationFrameData);
					// }
				}
			}
		}
	}

	insertAfter(value, ref) {
		let children = this.children;
		let index = children.indexOf(ref);
		if (!isNaN(index)) {
			this.appendChildAt(value, index + 1);
		} else {
			console.log("Can't find depth index for", ref);
		}
	}

	setAttribute(name, value) {
		this.element.setAttribute(name, value);
	}

	get isAdded() {
		let parent;
		if (this.element) {
			parent = this.element.parentNode;
		}
		while (parent && parent != document.body) {
			parent = parent.parentNode;
		}
		let isAdded = (parent == document.body);
		return isAdded;
	}

	get children() {
		let array = [];
		if (this.element) {
			array = nodeListToArray(this.element.children);
		}
		return array;
	}

	get scope() {
		return this._scope;
	}

	set scope(value) {
		this._scope = value;
		if (this.debug) console.log("debug UIComponent.scope", value);
		attributeDirective(this);
		onDirective(this);
		setDirective(this);
		bindDirective(this);
	}

	get model() {
		return this._model;
	}

	set model(value) {
		if (value != this._model) {
			this._model = value;
		 	ChangeEvent_ChangeEvent.dispatch(this, "model", value);
		}
	}

	load() {
		let promises = [];
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component && component.load) {	
				promises.push(component.load());
			}
		}
		return Promise.all(promises);
	}

	show() {
		let promise1 = awaitTimeout(this.showDelay);
		let promise2 = promise1.then(() => {
			this.showPromises = [this.showDelayComplete()];
			if (this.alsoShowChildren) {
				this.showPromises.push(this.showChildren());
			}
			return Promise.all(this.showPromises);
		});
		return promise2.then(this.showComplete.bind(this));
	}

	showDelayComplete() {
		this.isVisible = true;
		if (this.element) {
			this.element.setAttribute("data-state", "show");
		}
		return awaitTimeout(this.showDuration);
	}

	showComplete() {
	}

	showChildren() {
		let promises = [];
		let delay = 0;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				if (this.showChildrenDelay > 0) {
					component.showDelay = delay;
					delay += this.showChildrenDelay;
				}
				promises.push(component.show());
			}
		}
		return Promise.all(promises);
	}

	hide() {
		let promise1 = awaitTimeout(this.hideDelay);
		let promise2 = promise1.then(() => {
			this.hidePromises = [this.hideDelayComplete()];
			if (this.alsoShowChildren) {
				this.hidePromises.push(this.hideChildren());
			}
			return Promise.all(this.hidePromises);
		});
		return promise2.then(this.hideComplete.bind(this));
	}

	hideDelayComplete() {
		if (this.element) {
			this.element.setAttribute("data-state", "hide");
		}
		return awaitTimeout(this.hideDuration);
	}

	hideComplete() {
		this.isVisible = false;
	}

	hideChildren() {
		let promises = [];
		let delay = 0;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				if (this.hideChildrenDelay > 0) {
					component.hideDelay = delay;
					delay += this.hideChildrenDelay;
				}
				promises.push(component.hide());
			}
		}
		return Promise.all(promises);
	}

	windowResize(windowSize) {
		this.windowSize = windowSize;
		this.rectangle.x = this.element.offsetLeft;
		this.rectangle.y = this.element.offsetTop;
		this.rectangle.width = this.element.offsetWidth;
		this.rectangle.height = this.element.offsetHeight;
		this.globalRectangle.width = this.rectangle.width;
		this.globalRectangle.height = this.rectangle.height;
		if (this.calculateGlobalPosition) {
			this.globalRectangle.position = localToGlobal(this.element, document.body);
		}
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let child = children[i];
			let component = child.component;
			if (component) {
				if (component.windowResize) {
					component.windowResize(windowSize);
				}
			}
		}
	}

	// windowScroll(point) {
	// 	this.windowScrollPoint = point;
	// 	let children = this.children;
	// 	for (let i = 0; i < children.length; i++) {
	// 		let component = children[i].component;
	// 		if (component) {
	// 			if (component.windowScroll) {
	// 				component.windowScroll(point);
	// 			}
	// 		}
	// 	}
	// }

	animationFrame(data) {
		this.animationFrameData = data;
		if (this.doChildrenAnimationFrame) {
			let children = this.children;
			for (let i = 0; i < children.length; i++) {
				let component = children[i].component;
				if (component) {
					component.animationFrame(data);
				}
			}
		}
	}

	orientationChange(orientation) {
		this.orientation = orientation;
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				if (component.orientationChange) {
					component.orientationChange(orientation);
				}
			}
		}
	}

	elementAdded() {
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				component.elementAdded();
			}
		}
	}

	elementRemoved() {
		let children = this.children;
		for (let i = 0; i < children.length; i++) {
			let component = children[i].component;
			if (component) {
				component.elementRemoved();
			}
		}
	}

	static getRect(element, parent, debug) {
		if (!parent) {
			parent = document.body;
		}
		let rectangle = new Rectangle_Rectangle(0, 0, element.offsetWidth, element.offsetHeight);
		if (element.parentNode) {
			rectangle.position = localToGlobal(element, parent, null, debug);
		}
		return rectangle;
	}

	getRect(parent, debug) {
		return UIComponent_UIComponent.getRect(this.element, parent);
	}

	querySelector(selector) {
		let element = this.element.querySelector(selector);
		if (!element) {
			console.log("No element with selector " + selector + " in " + this);
		}
		return element.component || element;
	}

	querySelectorAll(selector) {
		let array = [];
		let elements = this.element.querySelectorAll(selector);
		for (let i = 0; i < elements.length; i++) {
			let element = elements.item(i);
			array.push(element.component || element);
		}
		return array;
	}

	getTouchPoint(event) {
		let touch = event;
		if (isTouch) {
			touch = event.touches[0];
		}
		return new Point_Point(touch.pageX, touch.pageY);
	}

	dispatchResizeEvent() {
		this.element.dispatchEvent(new Event("ui-resize", { bubbles: true, cancelable: true }));
	}

	destroy() {
		if (this.debug) console.log("UIComponent.destroy", this.element);
		for (let i in this.attributes) {
			let attribute = this.attributes[i];
			attribute.destroy();
		}
		this.model = null;
		this.scope = null;
		if (this.element.parentNode) {
			this.element.parentNode.removeChild(this.element);
		}
		this.element = null;
		this.element.compopnent = null;
		for (let i in this) {
			this[i] = null;
		}
	}

}

// CONCATENATED MODULE: ./js/tsunami/components/UIButton.js



class UIButton_UIButton extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
		this.onRelease = () => {};
		this.clickHandler = this.clickHandler.bind(this);
		this.pressHandler = this.pressHandler.bind(this);
		this.clickDelayComplete = this.clickDelayComplete.bind(this)

		this.clickDelay = 0;

		this.element.addEventListener(events.click, this.clickHandler);
		this.element.addEventListener(events.mousedown, this.pressHandler);
	}

	pressHandler(event) {
		this.element.setAttribute("data-event", "press");
	}

	clickHandler(event) {
		this.element.setAttribute("data-event", "click");

		if (this.clickDelay > 0) {
			setTimeout(this.clickDelayComplete, this.clickDelay * 1000, event);
		} else {
			this.clickDelayComplete(event);
		}
	}

	clickDelayComplete(event) {
		if (this.onRelease) {
			this.onRelease(event);
		}
	}

	destroy() {
		this.element.removeEventListener(events.click, this.clickHandler);
		this.element.removeEventListener(events.mousedown, this.pressHandler);
		super.destroy();
	}

}

// CONCATENATED MODULE: ./js/tsunami/Scope.js
class Scope {

	constructor(data, parentScope = null, index = NaN, length = NaN) {
		this.data = data;
		this.parentScope = parentScope;
		this.index = index;
		if (!isNaN(this.index)) this.index1 = index + 1;
		this.length = length;
	}

	get rootScope() {
		let rootScope = this;
		let parentScope = this;
		let i = 0;
		while (parentScope) {
			rootScope = parentScope;
			parentScope = rootScope.parentScope;
			i++;
		}
		return rootScope;
	}

	toString() {
		return "Scope" + " " + this.parentScope;
	}

}
// CONCATENATED MODULE: ./js/tsunami/components/UIListBase.js












class UIListBase_UIListBase extends UIComponent_UIComponent {

    constructor(element) {
        super(element);

		this._providerAdd = this._providerAdd.bind(this);
		this._providerRemove = this._providerRemove.bind(this);
        this._providerSort = this._providerSort.bind(this);
        
        this.template = '<li is="ui-text">{this.scope.data}</li>';
		this.templates = {};
        this._provider = new ArrayData_ArrayData();
        
        let templates = [];
		if(this.element) {
			this.children.map((el)=> {
				if(el.nodeName.toUpperCase() == "TEMPLATE") {
					templates.push(el);
				}
			})
		}
		for(let i = 0; i < templates.length; i++) {
			let template = templates[i];
			let type = template.getAttribute("data-type") || "*";
			this.templates[type] = template.innerHTML;
			this.element.removeChild(template);
		}
    }

    get provider() {
		return this._provider;
	}

	set provider(value) {
		if (this.debug) console.log("UIList.provider", value);
		if (this._provider) {
			if (this._provider instanceof ArrayData_ArrayData) {
				this._provider.removeEventListener("add", this._providerAdd);
				this._provider.removeEventListener("remove", this._providerRemove);
				this._provider.removeEventListener("sort", this._providerSort);
			}
		}
		this._removeElements(this.children.slice());
		this._provider = value;
		if (this._provider) {
			if (this._provider instanceof ArrayData_ArrayData) {
				this._provider.addEventListener("add", this._providerAdd);
				this._provider.addEventListener("remove", this._providerRemove);
				this._provider.addEventListener("sort", this._providerSort);
				this._addElements(this._provider.value);
			} else {
				this._addElements(this._provider);
			}
		}
	}

    _removeElements(array) {
		if(this.debug) console.log("UIList._removeElements", array.length);
		for (let i = 0; i < array.length; i++) {
			let element = array[i];
			this.removeChild(element);
			destroyElement(element);
		}
		this.dispatchResizeEvent();
	}

    _addElements(array, index = 0) {
		if (this.debug) console.log("UIList._addElements", array.length);
		for (let i in array) {
			let data = array[i];
			let element = this._createElement(data, index, array.length);
			// element.model = model;
			// if(element.component instanceof UIComponent) {
			// 	element.component.model = model;
			// }
			this.appendChildAt(element, index);
			// if (this.isAdded) {
			// 	UIComponent.callElementAdded(element);
			// }
			index++;
		}
		// this.dispatchEvent(new BaseEvent("listChange", array));
		this.dispatchResizeEvent();
		return array;
	}
    
    _createElement(data, index, length) {
		let template = this._getTemplateForModel(data);
		let scope = new Scope(data, this.scope, index, length);
		return importTemplate(template, scope);
	}

	_getModelType(model) {
		let type = model.type;
		if(type instanceof Data_Data) {
			type = type.value;
		}
		return type;
	}

	_getTemplateForModel(model) {
		let selectedTemplate;
		if (model) {
			let type = this._getModelType(model);
			selectedTemplate = this.templates[type];
		}
		if(!selectedTemplate) {
			selectedTemplate =  this.templates["*"] || this.template;
		}
		if (!selectedTemplate) {
			throw new Error("UIList " + this.element.outerHTML + " has no template");
		}
		return selectedTemplate;
	}

	_providerAdd(event) {
		if (this.debug) console.log("UIList._providerAdd");
		this._saveChildrenPositions();
		let addedElements = [];
		let start = event.data.index;
		let end = event.data.index + event.data.total;
		for (let i = start; i < end; i++ ) {
			let model = this.provider.value[i];
			addedElements.push(model);
		}
		this._addElements(addedElements, start);
		this.windowResize(this.windowSize);
		this._setChildrenTransform();
		setTimeout(this._resetChildrenTransform.bind(this), 0);
		return addedElements;
	}

	_providerRemove(event) {
		if (this.debug) console.log("UIList._providerRemove", event);
		this._saveChildrenPositions();
		let children = this.children;
		if (this.debug) console.log("children=", children);
		let removedElements = [];
		let start = event.data.index;
		let end = event.data.index + event.data.total;
		if (this.debug) console.log("start=", start, "end=", end);
		for (let i = start; i < end; i++) {
			removedElements.push(children[i]);
		}
		// this.children.splice(event.data.index, event.data.total);
		this._removeElements(removedElements);
		this.windowResize(this.windowSize);
		this._setChildrenTransform();
		setTimeout(this._resetChildrenTransform.bind(this), 0);
		return removedElements;
	}

	_providerSort(event) {
		this._saveChildrenPositions();
		let array = this.provider.value;
		for (let i = 0; i < array.length; i++ ) {
			let model = array[i];
			let child = this.getElementByModel(model);
			if (child) {
				this.element.appendChild(child);
			}
		}
		this.windowResize(this.windowSize);
		this._setChildrenTransform();
		setTimeout(this._resetChildrenTransform.bind(this), 0);
	}

	getElementByModel(model) {
		let element = this.children.find((child) => {
			let match = false;
			if(child.component) {
				match = (child.component.model == model);
			}
			return match;
		});
		return element;
	}

	_saveChildrenPositions() {
		this.childrenPositions = [];
		this.children.map((child) => {
			this.childrenPositions.push({child:child, position:new Point_Point(child.offsetLeft, child.offsetTop)});
		});
	}

	_setChildrenTransform() {
		this.childrenPositions.map((obj, index) => {
			let newPosition = new Point_Point(obj.child.offsetLeft, obj.child.offsetTop);
			let offset = obj.position.subtract(newPosition);
			let magnitude = offset.magnitude;
			if(magnitude > 0) {
				obj.child.classList.remove("smooth-transform");
				obj.child.style.transform = "translate3d(" + offset.x + "px, " + offset.y  + "px, 0px)";
			}
		});
	}

	_resetChildrenTransform() {
		this.children.map((child, index) => {
			child.classList.add("smooth-transform");
			child.style.transform = "translate3d(0px, 0px, 0px)";
		});
	}

    scrollToElement(element, duration) {
		let pos = new Point_Point();

		let maxScroll = new Point_Point();
		maxScroll.x = this.element.scrollWidth - this.element.clientWidth;
		maxScroll.y = this.element.scrollHeight - this.element.clientHeight;

		let elementRect = new Rectangle_Rectangle(element.offsetLeft, element.offsetTop, element.offsetWidth, element.offsetHeight);

		pos.x = Math.min(elementRect.x, maxScroll.x);
		pos.y = Math.min(elementRect.y, maxScroll.y);

		return this.scrollTo(pos.x, pos.y, duration);
	}

	scrollTo(scrollLeft, scrollTop, duration = 1) {
		this.tween = new Tween_Tween(0, duration, [
			new TweenProperty(this.element, "scrollLeft", this.element.scrollLeft, scrollLeft, Easing.cubic.easeInOut, number["f" /* round1 */]),
			new TweenProperty(this.element, "scrollTop", this.element.scrollTop, scrollTop, Easing.cubic.easeInOut, number["f" /* round1 */])
		]);
		return this.tween.start();
	}

	destroy() {
		this.childrenPositions = null;
		this.provider = null;
		super.destroy();
	}

}
// CONCATENATED MODULE: ./js/tsunami/components/UIList.js




class UIList_UIList extends UIListBase_UIListBase {

	constructor(element) {
		super(element);
		
		this._mouseDownHandler = this._mouseDownHandler.bind(this);
		this._dragMove = this._dragMove.bind(this);
		this._dragElementMove = this._dragElementMove.bind(this);
		this._dragEnd = this._dragEnd.bind(this);

		this.selectItemOnMouseDown = false;
		this.isDragged = false;

		this.dragIndex = NaN;
		this.dragElementClass = "ui-list-drag-area";

		this.element.addEventListener(events.mousedown, this._mouseDownHandler);
	}

	_mouseDownHandler(event) {
		// if(this.debug) console.log("_mouseDownHandler", "target", event.target, "currentTarget", event.currentTarget);
		let selectedIndex = NaN;
		let selectedChild = this.children.find((child, index) => {
			let contains = child.contains(event.target);
			let isChild = (child == event.target);
			let isMatch = (contains || isChild);
			if(this.debug) console.log(index, "contains", contains, "isChild", isChild, "isMatch", isMatch);
			if(isMatch) selectedIndex = index;
			return isMatch;
		});
		// if(this.debug) console.log("selectedChild", selectedChild, "selectedIndex", selectedIndex);
		if(selectedChild) {
			if(this.selectItemOnMouseDown) {
				if (this.provider.selectedIndex) {
					this.provider.selectedIndex.value = selectedIndex;
				}
			}
			let isDragElement = event.target.classList.contains(this.dragElementClass);
			// if(this.debug) console.log("isDragElement", isDragElement);
			if(isDragElement) {
				event.preventDefault();
				this.dragStartPoint = this.getTouchPoint(event);
				this.dragIndex = NaN;
				// this.dragElement = this.children.find((child, index) => {
				// 	let match = (event.target == child.querySelector(".ui-list-drag-area"));
				// 	if (match) this.dragIndex = index;
				// 	return match;
				// });
				this.dragElement = selectedChild;
				this.dragIndex = selectedIndex;
				this.dragElementStartPos = new Point_Point(this.dragElement.offsetLeft, this.dragElement.offsetTop);
				this.dragElementsMinHeight = Number.MAX_VALUE;
				this.children.map((child) => {
					this.dragElementsMinHeight = Math.min(this.dragElementsMinHeight, child.component.rectangle.height);
				});
				document.body.addEventListener(events.mousemove, this._dragMove);
				document.body.addEventListener(events.mouseup, this._dragEnd);
			}
		}
	}

	_dragMove(event) {
		let point = this.getTouchPoint(event);
		let distance = Point_Point.distance(point, this.dragStartPoint);
		if(distance > 0) {
			document.body.removeEventListener(events.mousemove, this._dragMove);
			document.body.addEventListener(events.mousemove, this._dragElementMove);
			this._dragElementStart();
		}
	}
	
	_dragElementStart() {
		this.isDragged = true;
		this.dragElement.classList.add("is-dragged");
		this.dragElement.dispatchEvent(new Event('drag-start', {bubbles:false, cancelable:true}));
	}

	_dragElementMove(event) {
		event.preventDefault();
		let point = this.getTouchPoint(event);
		let dragDiff = point.subtract(this.dragStartPoint);
		let originOffset = dragDiff.add(this.dragElementStartPos);
		let children = this.children;
		let index = this.dragIndex;
		for(let i = children.length - 1; i > -1; i--) {
			let child = children[i];
			if(originOffset.y < child.component.rectangle.y + this.dragElementsMinHeight / 2) {
				index = i;
			}
		}
		if(index != this.dragIndex) {
			this.provider.swap(this.dragIndex, index);

			let oldPos = this.dragElementStartPos;
			this.dragElementStartPos = new Point_Point(this.dragElement.offsetLeft, this.dragElement.offsetTop);
			let posDiff = this.dragElementStartPos.subtract(oldPos);
			this.dragStartPoint = this.dragStartPoint.add(posDiff);

			dragDiff = point.subtract(this.dragStartPoint);

			this.dragIndex = index;
		}
		this.dragElement.style.transform = "translate3d(" + dragDiff.x + "px, " + dragDiff.y + "px, 0px)";
	}

	_dragEnd(event) {
		this.isDragged = false;
		this.dragElement.classList.remove("is-dragged");
		this.dragElement.style.transform = "";
		document.body.removeEventListener(events.mousemove, this._dragMove);
		document.body.removeEventListener(events.mousemove, this._dragElementMove);
		document.body.removeEventListener(events.mouseup, this._dragEnd);
		this.dragStartPoint = null;
		this.dragIndex = NaN;
		this.dragElement = null;
	}

}

// CONCATENATED MODULE: ./js/tsunami/components/UIInput.js


class UIInput_UIInput extends UIComponent_UIComponent {

    constructor(element) {
        super(element);
        
        this.inputHandler = this.inputHandler.bind(this);
        this.blurHandler = this.blurHandler.bind(this);
        
        switch (this.element.type) {
            case "radio":
            case "checkbox":
                this.inputtype = "change";
            break;
            default:
                this.inputtype = "input";
                break;
        }
        
        this.element.addEventListener("blur", this.blurHandler);
    }

    get inputtype() {
        return this._inputtype;
    }

    set inputtype(value = "input") {
        this.element.removeEventListener(this.inputtype, this.inputHandler);
        this._inputtype = value;
        this.element.addEventListener(this.inputtype, this.inputHandler);
    }

    get value() {
        return this.element.value;
    }
    
    set value(val) {
        this.element.value = val;
        if(this.debug) console.log("UIInput.value", value);
    }
    
    get model() {
        return super.model;
    }

    set model(value) {
        if(this.debug) console.log("UIInput.model", value, "value", this.element.value);
        switch (this.element.type) {
            case "checkbox":
                this.element.checked = value;
                break;
            case "radio":
                let checked = (value == this.element.value);
                if (checked != this.element.checked) {
                    this.element.checked = checked;
                }
                break;
            default:
                this.element.value = value;
                break;
        }
        super.model = value;
    }

    inputHandler(event) {
        let value;
        switch (this.element.type) {
            case "checkbox":
                value = this.element.checked;
                break;
            case "radio":
                value = this.element.value;
                console.log("this.element.checked", this.element.checked);
            default:
                value = this.element.value;
                break;
        }
        super.model = value;
    }

    blurHandler() {
        if (!this.element.value) {
            let placeholder = this.element.getAttribute("placeholder");
            if (placeholder) {
                this.model = placeholder;
            }
        }
    }

    destroy() {
        this.element.removeEventListener("blur", this.blurHandler);
        this.element.removeEventListener(this.inputtype, this.inputHandler);
        return super.destroy();
    }

}
// CONCATENATED MODULE: ./js/tsunami/components/UISelect.js



class UISelect_UISelect extends UIListBase_UIListBase {
	
	constructor(element) {
		super(element);
		this._value = this.element.value;
		this.template = '<option is="ui-text" value="{this.scope.data}">{this.scope.data}</option>';
		this.inputHandler = this.inputHandler.bind(this);
		this.element.addEventListener("input", this.inputHandler);
	}

	get provider() {
		return super.provider;
	}

	set provider(value) {
		let currentValue = this.value;
		super.provider = value;
		this.value = currentValue;
	}

	get value() {
		return this._value;
	}

	set value(value) {
		if(this._value != value) {
			this._value = value;
			ChangeEvent_ChangeEvent.dispatch(this, "value", value);
		}
		this.element.value = value;
	}

	_providerAdd(event) {
		let currentValue = this.value;
		let elements = super._providerAdd(event);
		this.value = currentValue;
		return elements;
	}

	_providerRemove(event) {
		let currentValue = this.value;
		let elements = super._providerRemove(event);
		this.value = currentValue;
		return elements;
	}

	inputHandler(event) {
		this._value = this.element.value;
		ChangeEvent_ChangeEvent.dispatch(this, "value", this._value);
	}

	destroy() {
		this.element.removeEventListener("input", this.inputHandler);
		super.destroy();
	}

}

// CONCATENATED MODULE: ./js/tsunami/components/UIText.js




class UIText_UIText extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
	}

    get scope() {
        return super.scope;
    }

    set scope(value) {
        super.scope = value;
        let expression = this.element.textContent;
        expression = expression.split("{").join("${");
        if (expression.indexOf("${") != -1) {
            let setModel = (value) => {
                this.model = value;
            }
            this.expression = new Expression_Expression("`" + expression + "`", this, setModel);
        }
    }

    get model() {
        return this.element.textContent;
    }

    set model(value) {
        if (value instanceof Data_Data) value = value.value;
        this.element.textContent = value;
    }

    destroy() {
        if (this.expression) this.expression.destroy();
        return super.destroy();
    }

}

// CONCATENATED MODULE: ./js/tsunami/components/UINumber.js






class UINumber_UINumber extends UIText_UIText {

	constructor(element) {
		super(element);
		this._currentValue = 0;

		this.isRank = false;

		this.roundDecimal = 1;

		this.applyFormat = false;

		this.easing = Easing.cubic.easeOut;

		this.updateDelay = 0;
		this.updateDuration = 0;
	}

	get model() {
		return super.model;
	}

	set model(value) {
		if (value instanceof Data) value = value.value;
		if (isNaN(value)) {
			value = 0;
		}
		if (this.updateDuration > 0) {
			if (this.updateTween) {
				this.updateTween.stop();
			}
			this.updateTween = new Tween_Tween(this.updateDelay, this.updateDuration, [new TweenProperty(this, "currentValue", this.currentValue, value, this.easing)]);
			this.updateTween.start();
		} else {
			super.model = value;
		}
	}

	get currentValue() {
		return this._currentValue;
	}

	set currentValue(value) {
		this._currentValue = value;
		// let newValue = Math.round(value * this.roundDecimal) / this.roundDecimal;
		let newValue = Object(number["i" /* roundDecimalToPlace */])(value, this.roundDecimal);
		this.updateCurrentValue(newValue);
	}

	updateCurrentValue(value) {
		if (this.applyFormat) {
			let split = value.toString().split(".");
			if (split.length > 0) {
				split[0] = Object(number["b" /* format */])(split[0], ",");
				if (split.length > 0) {
					value = split.join('.');
				} else {
					value = split[0];
				}
			}
		}
		if(this.isRank) {
			value = value + Object(number["c" /* getOrdinalSuffix */])(value);
		}
		super.model = value;
	}

}
// CONCATENATED MODULE: ./js/tsunami/components/UIScrollPane.js










class UIScrollPane_UIScrollPane extends UIComponent_UIComponent {

	constructor(element, listSelector = ".panel") {
		super(element);

		this.scrollingPanel = this.element.querySelector(listSelector);

		this.wheelDirection = 1;

		this._autoScrollFactor = 0;
		this.infiniteLoop = {x: false, y: false};
		this.loopPoint = new Point_Point(0, 0);
		this.autoScrollSpeed = 1;
		this.scrollTarget = new Point_Point();
		this.scroll = new Point_Point();
		this.speed = new Point_Point();
		this.momentum = new Point_Point();
		this.minScroll = new Point_Point();
		this.maxScroll = new Point_Point();
		this.size = new Rectangle_Rectangle();
		this.panelSize = new Rectangle_Rectangle();

		this.startTouchDiff = new Point_Point();

		this.springiness = 0;
		this.inertia = 1;

		this.elasticScrollInertia = 0.1;
		this.elasticScrollElasticity = new Point_Point(0.15, 0);

		this.momentumFriction = 0.965;
		this.momentumScaleLimit = 0.5;

		this.maxScrollReached = {
			x:new BooleanData_BooleanData(),
			y:new BooleanData_BooleanData()
		};

		this.wheelHandler = this.wheelHandler.bind(this);
		this.mousedownHandler = this.mousedownHandler.bind(this);
		this.mousemoveHandler = this.mousemoveHandler.bind(this);
		this.mouseupHandler = this.mouseupHandler.bind(this);

		this.element.addEventListener(events.mousedown, this.mousedownHandler);

		this.autoScrollTimeoutDuration = 4;
		this._startAutoScroll = this._startAutoScroll.bind(this);

		if(this.debug) {
			console.log("events", events);
		}
	}

	set autoScroll(value) {
		this._autoScroll = value;
		this._stopAutoScroll();
		if (value) {
			this._startAutoScroll();
		}
	}

	get autoScroll() {
		return this._autoScroll;
	}

	get wheelEnabled() {
		return this._wheelEnabled;
	}

	set wheelEnabled(value) {
		this._wheelEnabled = value;
		if(value) {
			this.addWheelHandler();
		} else {
			this.removeWheelHandler();
		}
	}

	addWheelHandler() {
		this.removeWheelHandler();
		this.element.addEventListener("wheel", this.wheelHandler);
	}

	removeWheelHandler() {
		this.element.removeEventListener("wheel", this.wheelHandler);
	}

	wheelHandler(event) {
		event.preventDefault();
		this.stopTween();
		if(this.maxScroll.y > 0) {
			this.scrollTarget.y += event.deltaY * this.wheelDirection;
		}
		this.dispatchEvent(new BaseEvent(UIScrollPane_UIScrollPane.WHEEL, event));
	}

	_startAutoScrollTimeout() {
		this._stopAutoScrollTimeout();
		if (this.autoScroll) {
			this._autoScrollTimeout = setTimeout(this._startAutoScroll, this.autoScrollTimeoutDuration * 1000);
		}
	}

	_stopAutoScrollTimeout() {
		clearTimeout(this._autoScrollTimeout);
	}

	_startAutoScroll() {
		if (this.autoScroll) {
			this.autoScrollTween = new Tween_Tween(0, 2, [new TweenProperty(this, "_autoScrollFactor", 0, 1, Easing.cubic.easeInOut)]);
			this.autoScrollTween.start();
		}
	}

	_stopAutoScroll() {
		this._stopAutoScrollTimeout();
		if(this.autoScrollTween) {
			this.autoScrollTween.stop();
		}
		this._autoScrollFactor = 0;
	}

	tweenTo(targetX = 0, targetY = 0) {
		this.stopTween();
		this.tweenPromise = Promise.resolve();

		let currentX = this.scroll.x;
		let currentY = this.scroll.y;

		if(this.infiniteLoop.x) {
			if (this.panelSize.width > 0) {
				while ((currentX - targetX) > this.panelSize.width / 2) {
					currentX -= this.panelSize.width;
				}

				while ((currentX - targetX) < this.panelSize.width / -2) {
					currentX += this.panelSize.width;
				}
			}
		}

		if(this.infiniteLoop.y) {
			if (this.panelSize.height > 0) {
				while ((currentY - targetY) > this.panelSize.height / 2) {
					currentY -= this.panelSize.height;
				}

				while ((currentY - targetY) < this.panelSize.height / -2) {
					currentY += this.panelSize.height;
				}
			}
		}

		let props = [];
		if (currentX != targetX) {
			props.push(new TweenProperty(this.scrollTarget, "x", currentX, targetX, Easing.cubic.easeOut, 100));
		}
		if (currentY != targetY) {
			props.push(new TweenProperty(this.scrollTarget, "y", currentY, targetY, Easing.cubic.easeOut, 100));
		}
		if (props.length > 0) {
			this.tween = new Tween_Tween(0, 0.75, props);
			this.tweenPromise = this.tween.start();
		}
		return this.tweenPromise;
	}

	stopTween() {
		if(this.tween) {
			this.tween.stop();
		}
	}

	animationFrame(data) {
		super.animationFrame(data);

		let scale = this.windowSize.remScale || 1;

		if (this.maxScroll.x > 0) {
			this.scrollTarget.x += Math.round(scale * this.autoScrollSpeed * this._autoScrollFactor * 10) / 10;
		}
		if (this.maxScroll.y > 0) {
			this.scrollTarget.y += Math.round(scale * this.autoScrollSpeed * this._autoScrollFactor * 10) / 10;
		}

		let previousScroll = this.scroll.clone();

		if (!this.isDragging && !this.ignoreElasticScroll) {

			this.scrollTarget.x = this.scrollTarget.x + this.momentum.x;
			this.scrollTarget.y = this.scrollTarget.y + this.momentum.y;

			let clamp = {x:NaN, y:NaN};
			if (this.scrollTarget.x < this.minScroll.x) {
				clamp.x = this.minScroll.x;
			}

			if (this.scrollTarget.x > this.maxScroll.x) {
				clamp.x = this.maxScroll.x;
			}

			if (!isNaN(clamp.x)) {
				this.scrollTarget.x += (clamp.x - this.scrollTarget.x) * this.elasticScrollInertia;
			}

			if (this.scrollTarget.y < this.minScroll.y) {
				clamp.y = this.minScroll.y;
			}
			if (this.scrollTarget.y > this.maxScroll.y) {
				clamp.y = this.maxScroll.y;
			}
			if (!isNaN(clamp.y)) {
				this.scrollTarget.y += (clamp.y - this.scrollTarget.y) * this.elasticScrollInertia;
			}

			this.momentum.x *= this.momentumFriction;
			this.momentum.y *= this.momentumFriction;

			let elasticityX = this.size.width * this.elasticScrollElasticity.x;
			let elasticityY = this.size.height * this.elasticScrollElasticity.y;

			if (this.scrollTarget.x < this.minScroll.x - elasticityX) {
				this.momentum.x = 0;
				this.scrollTarget.x = this.minScroll.x - elasticityX;
			}
			if (this.scrollTarget.x > this.maxScroll.x + elasticityX) {
				this.momentum.x = 0;
				this.scrollTarget.x = this.maxScroll.x + elasticityX;
			}

			if (this.scrollTarget.y < this.minScroll.y - elasticityY) {
				this.momentum.y = 0;
				this.scrollTarget.y = this.minScroll.y - elasticityY;
			}

			if (this.scrollTarget.y > this.maxScroll.y + elasticityY) {
				this.momentum.y = 0;
				this.scrollTarget.y = this.maxScroll.y + elasticityY;
			}
		}

		this.speed.x = this.speed.x * this.springiness + (this.scrollTarget.x - this.scroll.x) / this.inertia;
		this.scroll.x += this.speed.x;

		this.speed.y = this.speed.y * this.springiness + (this.scrollTarget.y - this.scroll.y) / this.inertia;
		this.scroll.y += this.speed.y;

		this.scrollDiff = this.scroll.subtract(previousScroll);

		this.maxScrollReached.x.value = (this.scroll.x >= this.maxScroll.x);
		this.maxScrollReached.y.value = (this.scroll.y >= this.maxScroll.y);

		let x = Math.round(this.scroll.x * 10) / 10;
		let y = Math.round(this.scroll.y * 10) / 10;

		if(this.infiniteLoop.y) {
			let minY = 0 - this.loopPoint.y;
			let maxY = this.panelSize.height - this.size.height + this.loopPoint.y;

			while (y < minY) {
				y += this.panelSize.height;
			}

			while (y > maxY) {
				y -= this.panelSize.height;
			}
		}

		this.updateTransform(x, y);
	}

	updateTransform(x, y) {
		this.scrollingPanel.style.transform = "translate3d(" + -x + "px, " + -y + "px, 0)";
		// this.scrollingPanel.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
	}

	windowResize(windowSize) {
		super.windowResize(windowSize);
		this.updatePanelSize();
		this.updateMaxScroll();
	}

	updatePanelSize() {
		this.size.width = this.rectangle.width;
		this.size.height = this.rectangle.height;
		this.panelSize.width = this.scrollingPanel.offsetWidth;
		this.panelSize.height = this.scrollingPanel.offsetHeight;
	}

	updateMaxScroll() {
		this.maxScroll.x = Math.max(this.panelSize.width - this.size.width, 0);
		this.maxScroll.y = Math.max(this.panelSize.height - this.size.height, 0);
		if(this.infiniteLoop.x) {
			this.minScroll.x = Number.MAX_VALUE * -1;
			this.maxScroll.x = Number.MAX_VALUE;
		}
		if(this.infiniteLoop.y) {
			this.minScroll.y = Number.MAX_VALUE * -1;
			this.maxScroll.y = Number.MAX_VALUE;
		}
		this.element.setAttribute("data-scroll-x", (this.maxScroll.x > 0));
		this.element.setAttribute("data-scroll-y", (this.maxScroll.y > 0));
	}

	mousedownHandler(event) {
		this.stopTween();
		this.removeWheelHandler();
		this.momentum.x = this.momentum.y = 0;
		this.scrollTarget.copyFrom(this.scroll);

		if(event.target.tagName.toLowerCase() === 'input') {
			return;
		}

		if (this.maxScroll.x <= 0 && this.maxScroll.y <= 0) {
			return;
		}

		if (!isTouch) {
			event.preventDefault();
		}

		if(this.autoScroll) {
			this._stopAutoScroll();
		}

		this.isDragging = false;

		this.scrollStart = this.scroll.clone();
		this.touchStart = this.getTouchPoint(event);
		this.touchPrevious = this.touchStart;

		window.addEventListener(events.mousemove, this.mousemoveHandler);
		window.addEventListener(events.mouseup, this.mouseupHandler);
	}

	get isDragging() {
		return this._isDragging;
	}

	set isDragging(value) {
		this._isDragging = value;
		if (value) {
			this.element.classList.add("drag");
		} else {
			this.element.classList.remove("drag");
		}
	}

	static get DRAG_START() {
		return "dragStart";
	}

	static get DRAG_END() {
		return "dragEnd";
	}

	static get WHEEL() {
		return "wheel";
	}

	mousemoveHandler(event) {
		// if (!isTouch) {
		event.preventDefault();
		// }

		let touchNew = this.getTouchPoint(event);

		let distance = Point_Point.distance(touchNew, this.touchStart);

		if (Math.abs(distance) > 2 && !this.isDragging) {
			this.isDragging = true;
			this.dispatchEvent(new Event(UIScrollPane_UIScrollPane.DRAG_START));
		}

		this.momentum = this.touchPrevious.subtract(touchNew);
		this.startTouchDiff = this.touchStart.subtract(touchNew);

		this.scrollTarget = new Point_Point(this.scrollStart.x + this.startTouchDiff.x, this.scrollStart.y + this.startTouchDiff.y);

		this.touchPrevious = touchNew;

		let clamp = {x:NaN, y:NaN};
		if (this.scrollTarget.x < this.minScroll.x) {
			clamp.x = this.minScroll.x;
		}
		if (this.scrollTarget.x > this.maxScroll.x) {
			clamp.x = this.maxScroll.x;
		}
		if (!isNaN(clamp.x)) {
			this.scrollTarget.x = clamp.x + (this.scrollTarget.x - clamp.x) * this.elasticScrollElasticity.x;
		}

		if (this.scrollTarget.y < this.minScroll.y) {
			clamp.y = this.minScroll.y;
		}
		if (this.scrollTarget.y > this.maxScroll.y) {
			clamp.y = this.maxScroll.y;
		}
		if (!isNaN(clamp.y)) {
			this.scrollTarget.y = clamp.y + (this.scrollTarget.y - clamp.y) * this.elasticScrollElasticity.y;
		}
	}

	getMinimumAbsoluteMomentum(value, max) {
		let valueScale = (value < 0)?-1:1;
		let valueAbs = Math.min(Math.abs(value), max);
		value = valueAbs * valueScale;
		return value;
	}

	mouseupHandler(event) {
		// if (this.isDragging) {
		// event.preventDefault();
		// }
		window.removeEventListener(events.mousemove, this.mousemoveHandler);
		window.removeEventListener(events.mouseup, this.mouseupHandler);
		if(this.wheelEnabled) {
			this.addWheelHandler();
		}

		if(this.autoScroll) {
			this._startAutoScrollTimeout();
		}

		this.isDragging = false;

		let momentumScaleX = this.size.width * this.momentumScaleLimit;
		this.momentum.x = this.getMinimumAbsoluteMomentum(this.momentum.x, momentumScaleX);

		let momentumScaleY = this.size.height * this.momentumScaleLimit;
		this.momentum.y = this.getMinimumAbsoluteMomentum(this.momentum.y, momentumScaleY);

		this.dispatchEvent(new Event(UIScrollPane_UIScrollPane.DRAG_END));
	}

}
// CONCATENATED MODULE: ./js/tsunami/components/UIMedia.js



class UIMedia_UIMedia extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
	}

	get model() {
		return this.element.src;
	}

	set model(value) {
		if (value instanceof Data) value = value.value;
		if (hasValue(value)) {
			this.element.src = value;
		} else {
			this.element.removeAttribute('src');
		}
	}
	
	reload() {
		let url = this.element.src;
		this.element.src = url;
	}

}

// CONCATENATED MODULE: ./js/tsunami/components/UIToggle.js


class UIToggle_UIToggle extends UIButton_UIButton {

	clickDelayComplete() {
		this.model.value = !this.model.value;
		return super.clickDelayComplete(event);
	}
	
}
// CONCATENATED MODULE: ./js/tsunami/components/UIHTML.js


class UIHTML_UIHTML extends UIText_UIText {

    get model() {
        return this.element.innerHTML;
    }

    set model(value) {
        this.element.innerHTML = value;
    }

}

// CONCATENATED MODULE: ./js/tsunami/App.js














class App_App extends UIComponent_UIComponent {

	constructor(element) {
		super(element);

		this.init();
	}

	init()  {
		getClock().addEventListener(Clock_Clock.TICK, this.clockTick.bind(this));

		window.addEventListener("resize", this.resizeHandler.bind(this));
		this.resizeHandler();
	}

	clockTick(event) {
		let animationData = {
			time: Math.round(getClock().time) / 1000
		};

		this.animationFrame(animationData);
	}

	resizeHandler(event) {
		let rectangle = this.getRect();

		rectangle.orientation = rectangle.width > rectangle.height ? "landscape" : "portrait";

		if (rectangle.orientation != this.windowSize.orientation) {
			this.orientationChange(rectangle.orientation);
		}

		this.windowResize(rectangle);
	}

}

define("ui-component", UIComponent_UIComponent);
define("ui-button", UIButton_UIButton);
define("ui-list", UIList_UIList);
define("ui-input", UIInput_UIInput);
define("ui-select", UISelect_UISelect);
define("ui-text", UIText_UIText);
define("ui-html", UIHTML_UIHTML);
define("ui-number", UINumber_UINumber);
define("ui-scroll-pane", UIScrollPane_UIScrollPane);
define("ui-media", UIMedia_UIMedia);
define("ui-toggle", UIToggle_UIToggle);

// CONCATENATED MODULE: ./templates/easing.html
/* harmony default export */ var easing = ("<div class=\"sc-fields-list\" is=\"ui-component\">\n    <div class=\"sc-field\">\n        <span class=\"sc-input\" title=\"Duration\">\n            <span class=\"sc-icon fas fa-clock\"></span>\n            <span class=\"sc-input-group\">\n                <span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"s\">{this.scope.data.duration.value}</span>\n                <input type=\"number\" step=\"0.25\" min=\"0\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.duration.value\" />\n            </span>\n        </span>\n        <span class=\"sc-input\" title=\"Delay\">\n            <span class=\"sc-icon fa fa-hourglass-half\"></span>\n            <span class=\"sc-input-group\">\n                <span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"s\">{this.scope.data.delay.value}</span>\n                <input type=\"number\" step=\"0.25\" min=\"0\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.delay.value\" />\n            </span>\n        </span>\n    </div>\n    <div class=\"sc-field-group\" is=\"ui-component\">\n        <div class=\"sc-field-column\">\n            <div class=\"sc-field\">\n                <div class=\"sc-input\" title=\"Easing\">\n                    <span class=\"sc-icon fa fa-bezier-curve\"></span>\n                    <select is=\"ui-select\" set:provider=\"this.scope.data.easingPresets\" bind:value=\"this.scope.data.easingPresets.selectedItem.value\"></select>\n                </div>\n            </div>\n            <div class=\"sc-field\">\n                <span class=\"sc-input\" title=\"Bezier point1.x\">\n                    <span class=\"sc-icon\">X</span>\n                    <input type=\"number\" step=\"0.01\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.cubicBezierPoints.p1.x.value\" />\n                </span>\n                <span class=\"sc-input\" title=\"Bezier point1.y\">\n                    <span class=\"sc-icon\">Y</span>\n                    <input type=\"number\" step=\"0.01\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.cubicBezierPoints.p1.y.value\" />\n                </span>\n            </div>\n            <div class=\"sc-field\" title=\"Point2.y\">\n                <span class=\"sc-input\" title=\"Bezier point2.x\">\n                    <span class=\"sc-icon\">X</span>\n                    <input type=\"number\" step=\"0.01\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.cubicBezierPoints.p2.x.value\" />\n                </span>\n                <span class=\"sc-input\" title=\"Bezier point2.y\">\n                    <span class=\"sc-icon\">Y</span>\n                    <input type=\"number\" step=\"0.01\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.cubicBezierPoints.p2.y.value\" />\n                </span>\n            </div>\n        </div>\n        <div class=\"sc-field\" is=\"ui-component\">\n            <div is=\"ui-component\" class=\"easing-graph-container\">\n                <div is=\"easing-graph\">\n                    <!-- <svg class=\"curve\" x=\"0px\" y=\"0px\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n                        <g>\n                            <polyline class=\"js\" is=\"easing-graph-curve\" set:model=\"this.scope.data.cubicBezierPoints.debugEasing\" points=\"\"></polyline>\n                        </g>\n                    </svg>\n                    <div class=\"points js\" is=\"easing-graph-points\" set:model=\"this.scope.data.cubicBezierPoints.debugEasing\"></div> -->\n                    <svg class=\"curve\" x=\"0px\" y=\"0px\" preserveAspectRatio=\"none\" viewBox=\"0 0 200 200\">\n                        <g>\n                            <polyline is=\"easing-graph-curve\" set:model=\"this.scope.data.cubicBezierPoints.value\" points=\"\"></polyline>\n                        </g>\n                    </svg>\n                    <div class=\"points\" is=\"easing-graph-points\" set:model=\"this.scope.data.cubicBezierPoints.value\"></div>\n                    <div is=\"control-point-lines\" is=\"ui-list\" set:provider=\"this.scope.data.cubicBezierPoints.controlPointsLines\">\n                        <template>\n                            <div is=\"control-point-line\" set:model=\"this.scope.data\"></div>\n                        </template>\n                    </div>\n                    <div class=\"control-points\" is=\"easing-graph-control-points\" set:provider=\"this.scope.data.cubicBezierPoints.controlPoints\">\n                        <template>\n                            <div class=\"control-point\" is=\"ui-component\" set:model=\"this.scope.data\" style=\"left:calc({this.scope.data.x.value} * 100%); top:calc(100% - {this.scope.data.y.value} * 100%)\">\n                                <span class=\"shape\">\n                                    <span class=\"shape-label\" is=\"ui-text\">{this.scope.index + 1}</span>\n                                </span>\n                            </div>\n                        </template>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
// CONCATENATED MODULE: ./js/view/EasingGraph.js









class EasingGraph_EasingGraph extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
	}

}

class EasingGraph_EasingGraphControlPoints extends UIList_UIList {

	constructor(element) {
		super(element);
		this.dragElementClass = "shape";
	}

	_dragElementStart() {
		super._dragElementStart();
		app.model.actions.selectedItem.value.resetEasing();
	}

	_dragElementMove(event) {
		event.preventDefault();
		let point = this.getTouchPoint(event);
		let dragDiff = point.subtract(this.dragStartPoint);
		let originOffset = dragDiff.add(this.dragElementStartPos);
		let factor = originOffset.clone();
		factor.x = (factor.x / this.rectangle.width);
		factor.y = 1 - (factor.y / this.rectangle.height);
		this.dragElement.component.model.x.value = factor.x;
		this.dragElement.component.model.y.value = factor.y;
	}

}

class EasingGraph_EasingGraphControlPointLines extends UIListBase_UIListBase {

	constructor(props) {
		super(props);
		this.updateLines = this.updateLines.bind(this);
	}


	get provider() {
		return super.provider;
	}

	set provider(value) {
		super.provider = value;
		for(let i in value) {
			let pair = value[i];
			for(let j in pair) {
				let vec = pair[j];
				vec.addEventListener(Data_Data.CHANGE, this.updateLines);
			}
		}
	}

	windowResize(windowSize) {
		super.windowResize(windowSize);
		this.updateLines();
	}

	updateLines() {
		this.children.map((child) => {
			child.component.updateLine();
		})
	}

}


class EasingGraph_EasingGraphControlPointLine extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
		this.updateLine = this.updateLine.bind(this);
	}

	updateLine() {
		if(!this.model) {
			return;
		}
		let parent = this.element.parentNode;
		let parentComponent = parent.component;
		let parentRectangle = parentComponent.rectangle;
		let point0 = this.model[0].point;
		point0.y = 1 - point0.y;
		let point1 = this.model[1].point;
		point1.y = 1 - point1.y;
		let scale = Point_Point.distance(point0, point1);
		let angle = Object(number["g" /* round2 */])(Point_Point.getAngle(point1, point0) * 180 / Math.PI);
		let position = new Point_Point(point0.x * parentRectangle.width, point0.y * parentRectangle.height);
		let transform = `translateX(${position.x}px) translateY(${position.y}px) rotate(${angle}deg) scaleX(${scale})`;
		this.element.style.transform = transform;
	}

}

class EasingGraph_EasingGraphCurve extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
	}

	get model() {
		return this._model;
	}

	set model(value) {
		this._model = value;
		let totalPoints = 15;
		let points = [];
		let pointsString = "";
		for(let i = 0; i < totalPoints; i++) {
			let x = i / (totalPoints - 1);
			let point = new Point_Point(x, value.easing.ease(x, 0, 1, 1));
			points.push(point);
			pointsString += Object(number["h" /* round3 */])(point.x * 200) + "," + Object(number["h" /* round3 */])(200 - (point.y * 200)) + " ";
		}
		this.element.setAttribute("points", pointsString);
	}

}

class EasingGraph_EasingGraphPoints extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
	}

	get model() {
		return super.model;
	}

	set model(value) {
		super.model = value;
		this.element.innerHTML = "";
		let totalPoints = 15;
		let points = [];
		for(let i = 0; i < totalPoints; i++) {
			let x = i / (totalPoints - 1);
			let point = new Point_Point(x, value.easing.ease(x, 0, 1, 1));
			points.push(point);
		}
		for(let i = 0; i < points.length; i++) {
			let position = points[i];
			let point = importTemplate("<point></point>");
			point.style.left = position.x * 100 + "%";
			point.style.top = 100 - (position.y * 100) + "%";
			this.element.appendChild(point);
		}
	}

}

define("easing-graph-control-points", EasingGraph_EasingGraphControlPoints);
define("control-point-lines", EasingGraph_EasingGraphControlPointLines);
define("control-point-line", EasingGraph_EasingGraphControlPointLine);
define("easing-graph-curve", EasingGraph_EasingGraphCurve);
define("easing-graph-points", EasingGraph_EasingGraphPoints);



// CONCATENATED MODULE: ./js/view/ActionTweenView.js





class ActionTweenView_ActionTweenView extends UIComponent_UIComponent {

    constructor(element) {
        super(element);
    }

    get scope() {
        return this._scope;
    }

    set scope(value) {
        super.scope = value;
        this.easing = importTemplate(easing, value);
        this.appendChild(this.easing);
   }

}

define("easing-graph", EasingGraph_EasingGraph);

// CONCATENATED MODULE: ./js/view/ActionView.js




class ActionView_ActionView extends UIComponent_UIComponent {

	constructor(element) {
		super(element);
	}

}

define("action-tween", ActionTweenView_ActionTweenView);

// CONCATENATED MODULE: ./js/view/ActionsView.js





class ActionsView_ActionsView extends UIList_UIList {

	constructor(element) {
		super(element);
		this.selectItemOnMouseDown = true;
	}

	_providerAdd(event) {
		let elements = super._providerAdd(event);
		let element = this.getElementByModel(elements[0]);
		this.scrollToElement(element, 0.5);
		return elements;
	}

	_dragEnd(event) {
		let wasDragged = this.isDragged;
		let result = super._dragEnd(event);
		if (wasDragged) app.model.save();
		return result;
	}

}

define("sc-action-view", ActionView_ActionView);

// CONCATENATED MODULE: ./templates/scroll-capture.html
/* harmony default export */ var scroll_capture = ("<div class=\"sc-default\" is=\"scroll-capture\" data-theme-light=\"{this.scope.settings.isColorThemeLight.value}\" set:position=\"this.scope.settings.position\" style=\"right:{this.scope.settings.position.x.value}px; top:{this.scope.settings.position.y.value}px;\">\n\t<!-- <ul is=\"ui-list\" set:provider=\"this.scope.actions\">\n\t\t<template>\n\t\t\t<label>\n\t\t\t\t<input class=\"test-radio\" type=\"radio\" is=\"ui-input\" value=\"{this.scope.data.name.value}\" name=\"options1\" bind:model=\"this.scope.rootScope.selectedAction\" />\n\t\t\t\t<span is=\"ui-text\">{this.scope.data.name.value}</span>\n\t\t\t</label>\n\t\t</template>\n\t</ul>\n\t<ul is=\"ui-list\" set:provider=\"this.scope.actions\">\n\t\t<template>\n\t\t\t<label>\n\t\t\t\t<input class=\"test-radio\" type=\"radio\" is=\"ui-component\" value=\"{this.scope.data.name.value}\" name=\"options2\" set:checked=\"(this.scope.rootScope.selectedAction == this.element.value);\" on:change=\"this.scope.rootScope.selectedAction = this.element.value\" />\n\t\t\t\t<span is=\"ui-text\">{this.scope.data.name.value}</span>\n\t\t\t</label>\n\t\t</template>\n\t</ul>\n\t<select is=\"ui-select\" set:provider=\"this.scope.actions\" bind:value=\"this.scope.selectedAction\">\n\t\t<template>\n\t\t\t<option is=\"ui-text\" value=\"{this.scope.data.name.value}\">{this.scope.data.name.value}</option>\n\t\t</template>\n\t</select> -->\n\t<div class=\"sc-window sc-window-main\" is=\"ui-component\">\n\t\t<div class=\"sc-title\">\n\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t<span class=\"sc-drag-area\"></span>\n\t\t\t\t<span class=\"sc-tab sc-title-tab\">\n\t\t\t\t\t<span class=\"sc-drag-area\"></span>\n\t\t\t\t\t<span class=\"sc-label\">Scroll Capture</span>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t<span class=\"sc-tab\">\n\t\t\t\t\t<span class=\"sc-drag-area\"></span>\n\t\t\t\t\t<button is=\"router-button\" data-path=\"closed\" title=\"Close\">\n\t\t\t\t\t\t<span class=\"sc-icon fas fa-times-circle\"></span>\n\t\t\t\t\t</button>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</div>\n\t\t<div class=\"sc-window-content\" is=\"ui-component\">\n\t\t\t<div class=\"sc-fields\" is=\"ui-component\">\n\t\t\t\t<div is=\"ui-component\">\n\t\t\t\t\t<div class=\"sc-window sc-window-sections\" is=\"ui-component\">\n\t\t\t\t\t\t<div class=\"sc-title\">\n\t\t\t\t\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t\t\t\t\t<span class=\"sc-tab\" data-id=\"scenario\">\n\t\t\t\t\t\t\t\t\t<button is=\"router-button\" data-path=\"scroll-capture/scenario\" title=\"Timeline\">\n\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"sc-icon fas fa-sliders-h\"></span> -->\n\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-stream\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"sc-label\">Timeline</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t<!-- <span class=\"sc-tab\" data-id=\"play\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t<button is=\"router-button\" data-path=\"play\" title=\"Play\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-play\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"sc-label\">Play</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</span> -->\n\t\t\t\t\t\t\t\t<span class=\"sc-tab\" data-id=\"video\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t<button is=\"router-button\" data-path=\"record\" title=\"Capture\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-video\"></span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"sc-label\">Capture</span>\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t<span class=\"sc-tabs\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t<span class=\"sc-tab\" data-id=\"settings\">\n\t\t\t\t\t\t\t\t\t<button is=\"router-button\" data-path=\"scroll-capture/settings\" title=\"Settings\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-cogs\"></span>\n\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"sc-label\">Settings</span> -->\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"sc-window-content\" is=\"sc-window-content-main\" is=\"ui-component\">\n\n\t\t\t\t\t\t\t<div class=\"sc-section sc-fields\" is=\"sc-scenario\">\n\t\t\t\t\t\t\t\t<div is=\"sc-actions-view\" data-actions-length=\"{this.scope.actions.length.value}\" set:provider=\"this.scope.actions\">\n\t\t\t\t\t\t\t\t\t<template>\n\t\t\t\t\t\t\t\t\t\t<div class=\"sc-window ui-list-element\" is=\"sc-action-view\" data-type=\"{this.scope.data.type}\" set:model=\"this.scope.data\" data-selected=\"{this.scope.data.isSelectedItem.value}\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-title\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-drag-area ui-list-drag-area\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab sc-title-tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ui-list-drag-area\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab-wrapper\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon {this.scope.data.icon.value}\" is=\"ui-component\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-label\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input size=\"{this.scope.data.name.length.value}\" is=\"ui-input\" bind:model=\"this.scope.data.name.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab\" data-visible=\"{this.scope.data.isCaptureable.value}\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ui-list-drag-area\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"sc-set-button\" is=\"ui-button\" data-is-capturing=\"{this.scope.data.isCapturing.value}\" set:model=\"this.scope.data\" on:click=\"this.model.reCapture()\" title=\"Set\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-bullseye\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab\" data-visible=\"{this.scope.data.isTestable.value}\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ui-list-drag-area\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"sc-test-button\" is=\"ui-button\" set:model=\"this.scope.data\" on:click=\"this.model.play()\" data-is-playing=\"{this.scope.data.isPlaying.value}\" title=\"Play\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-play-circle\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"ui-list-drag-area\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"sc-trash-button\" is=\"ui-button\" set:model=\"this.scope.data\" on:click=\"this.scope.rootScope.actions.removeAction(this.model);\" title=\"Delete\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-trash-alt\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-window-content\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-fields\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-action-fields\" is=\"ui-list\" set:provider=\"this.scope.data.array\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template data-type=\"ActionScroll\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-action sc-fields-list\" is=\"action-tween\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"ScrollLeft\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">X</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.data.unitX.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"0\" min=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.unitX.value\" on:focus=\"this.scope.data.doScroll()\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"ScrollTop\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">Y</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.data.unitY.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" placeholder=\"0\" min=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.unitY.value\" on:focus=\"this.scope.data.doScroll()\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"Target Selector\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon far fa-dot-circle\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"window\" is=\"ui-input\" bind:model=\"this.scope.data.target.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template data-type=\"ActionSwipe\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-action sc-fields-list\" is=\"action-tween\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-points-list sc-field-column\" is=\"ui-list\" set:provider=\"this.scope.data.points\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"PageX\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">X</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.data.x.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" min=\"0\" placeholder=\"0\" step=\"1\" is=\"ui-input\" bind:model=\"this.scope.data.x.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"PageY\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">Y</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.data.y.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" min=\"0\" placeholder=\"0\" step=\"1\" is=\"ui-input\" bind:model=\"this.scope.data.y.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template data-type=\"ActionMouseEvent\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-action sc-fields-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">X</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.data.x.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" step=\"1\" min=\"0\" placeholder=\"0\" title=\"PageX\" is=\"ui-input\" bind:model=\"this.scope.data.x.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">Y</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.data.y.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" step=\"1\" min=\"0\" placeholder=\"0\" title=\"PageY\" is=\"ui-input\" bind:model=\"this.scope.data.y.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input sc-select\" title=\"MouseEvent Type\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-mouse-pointer\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select is=\"ui-select\" set:provider=\"this.scope.data.eventTypes\" bind:value=\"this.scope.data.eventTypes.selectedItem.value\"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"Delay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-hourglass-half\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"s\">{this.scope.data.delay.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.25\" min=\"0\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.delay.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template data-type=\"ActionWait\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-action sc-fields-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"Duration\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-clock\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"s\">{this.scope.data.delay.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.25\" min=\"0\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.delay.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-space\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template data-type=\"ActionEval\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-action sc-fields-list\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<textarea rows=\"5\" is=\"ui-input\" set:model=\"this.scope.data.code\"></textarea>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\" title=\"Delay\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-hourglass-half\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"s\">{this.scope.data.delay.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" step=\"0.25\" min=\"0\" placeholder=\"0\" is=\"ui-input\" bind:model=\"this.scope.data.delay.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-space\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"sc-action-buttons\">\n\t\t\t\t\t\t\t\t\t<div class=\"sc-buttons\" is=\"ui-list\" set:provider=\"this.scope.actions.types\">\n\t\t\t\t\t\t\t\t\t\t<template>\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"sc-action-button\" data-type=\"{this.scope.data.type}\" set:model=\"this.scope.data\" is=\"ui-button\" title=\"{this.scope.data.description.value}\" on:click=\"this.scope.rootScope.actions.cloneAction(this.model);\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon {this.scope.data.icon.value}\" is=\"ui-component\"></span>\n\t\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"sc-buttons\">\n\t\t\t\t\t\t\t\t\t\t<button is=\"ui-button\" on:click=\"this.scope.clearActions()\" title=\"Delete all\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-trash-alt\"></span>\n\t\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"sc-section sc-fields\" is=\"sc-video\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<iframe></iframe>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"sc-section sc-fields\" is=\"sc-settings\">\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"sc-window\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"sc-title\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab sc-title-tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-adjust\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-label\">Color theme</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"sc-window-content\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-fields\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <span class=\"sc-label\">Theme:</span> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <div class=\"sc-color-themes\" is=\"ui-list\" set:provider=\"this.scope.settings.colorThemes\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label class=\"sc-radio\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"radio\" name=\"color-theme\" value=\"{this.scope.data}\" is=\"ui-input\" set:model=\"this.scope.parentScope.settings.colorThemes.selectedItem\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-check\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span is=\"ui-text\">{this.scope.data}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</template>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div> -->\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-input sc-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas\" data-theme=\"{this.scope.settings.colorThemes.selectedItem.value}\" is=\"ui-component\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select is=\"ui-select\" set:provider=\"this.scope.settings.colorThemes\" bind:value=\"this.scope.settings.colorThemes.selectedItem.value\"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-space\"></div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"sc-window\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"sc-title\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab sc-title-tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon far fa-window-maximize\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-label\">Window size</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"sc-window-content\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-fields\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">W</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.settings.windowSize.x.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" step=\"1\" min=\"375\" placeholder=\"375\" title=\"PageX\" is=\"ui-input\" bind:model=\"this.scope.settings.windowSize.x.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon\">H</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"px\">{this.scope.settings.windowSize.y.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"number\" step=\"1\" min=\"375\" placeholder=\"375\" title=\"PageY\" is=\"ui-input\" bind:model=\"this.scope.settings.windowSize.y.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"sc-window\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"sc-title\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\">\n\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tab sc-title-tab\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-film\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-label\">Codecs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-tabs\"></span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"sc-window-content\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-fields\" is=\"ui-component\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-input sc-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-video\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select is=\"ui-select\" set:provider=\"this.scope.settings.videoCodecs\" bind:value=\"this.scope.settings.videoCodecs.selectedItem.value\"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"range\" min=\"1\" max=\"8\" step=\"1\" title=\"Bitrate\" is=\"ui-input\" bind:model=\"this.scope.settings.videoBitsPerSecond.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-space\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"Mbps\">{this.scope.settings.videoBitsPerSecond.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span is=\"ui-text\">{this.scope.settings.videoBitsPerSecond.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-input sc-select\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-icon fas fa-volume-up\"></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<select is=\"ui-select\" set:provider=\"this.scope.settings.audioCodecs\" bind:value=\"this.scope.settings.audioCodecs.selectedItem.value\"></select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-field\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input type=\"range\" min=\"16\" max=\"128\" step=\"16\" is=\"ui-input\" bind:model=\"this.scope.settings.audioBitsPerSecond.value\" />\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"sc-space\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"sc-input-unit\" is=\"ui-text\" data-unit=\"kbps\">{this.scope.settings.audioBitsPerSecond.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<span is=\"ui-text\">{this.scope.settings.audioBitsPerSecond.value}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div>\n\t\t\t\t\t<sc-credits><a href=\"http://www.patrickmatte.com\" target=\"_blank\"></a></sc-credits>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>");
// CONCATENATED MODULE: ./js/view/Section.js



class Section_Section extends UIComponent_UIComponent {

    constructor(element) {
        super(element);
    }

    showDelayComplete() {
        // let tab = app.view.scrollCapture.element.querySelector(".sc-window.sc-window-sections .sc-tab[data-id='" + this.slug + "']");
        let tab = app.view.scrollCapture.element.querySelector(".sc-tab[data-id='" + this.slug + "']");
        if (tab) tab.classList.add("sc-title-tab");
        let promise = super.showDelayComplete();
        this.windowResize(this.windowSize);
        return promise;
    }

    hideComplete() {
        let tab = app.view.scrollCapture.element.querySelector(".sc-tab[data-id='" + this.slug + "']");
        if (tab) tab.classList.remove("sc-title-tab");
        return super.hideComplete();
    }
    
}
// CONCATENATED MODULE: ./js/view/SectionSettings.js



class SectionSettings_SectionSettings extends Section_Section {
    
    constructor(element) {
        super(element);
   }

    showDelayComplete() {
        let promise = super.showDelayComplete();

        this.router.redirect("default", () => { return this.path });

        app.model.save();

        return promise;
    }

}
// CONCATENATED MODULE: ./js/view/SectionVideo.js



class SectionVideo_SectionVideo extends Section_Section {

    constructor(element) {
        super(element);
        this.iframe = this.element.querySelector("iframe");
        this.iframe.src = chrome.extension.getURL('video-recording.html');

        chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
            switch (msg.txt) {
                case "scrollCaptureVideoHeight":
                    this.iframe.style.height = msg.height + "px";
                    break;
            }
        });
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
        app.model.sendMessage({ txt: "scrollCaptureShowVideo" });
        return promise;
    }

    hideComplete() {
        app.model.sendMessage({ txt:"scrollCaptureUnloadVideo"});
        return super.hideComplete();
    }

}
// CONCATENATED MODULE: ./js/view/SectionScenario.js



class SectionScenario_SectionScenario extends Section_Section {

    constructor(element) {
        super(element);
    }

    showDelayComplete() {
        let promise = super.showDelayComplete();
                
        this.router.redirect("default", () => { return this.path });
        
        if (!app.model.actions.selectedItem.value) {
            let lastIndex = app.model.actions.length.value - 1;
            app.model.actions.selectedIndex.value = lastIndex;
        }
 
        app.model.save();

        // let actionsViewElement = app.view.scrollCapture.windowContent.element.querySelector("[is='sc-actions-view']");
        // let actionsView = actionsViewElement.component;
        // let element = actionsView.getElementByModel(app.model.actions.selectedItem.value);
        // if (element) actionsView.scrollToElement(element, 0);
        return promise;
    }

    hideDelayComplete() {
        app.model.actions.selectedItem.value = null;
        return super.hideDelayComplete();
    }

}
// CONCATENATED MODULE: ./js/view/WindowContentMain.js






class WindowContentMain_WindowContentMain extends UIComponent_UIComponent {

    constructor(element) {
        super(element);
        
        this.scenario = this.element.querySelector("[is='sc-scenario']").component;
        this.video = this.element.querySelector("[is='sc-video']").component;
        this.settings = this.element.querySelector("[is='sc-settings']").component;
    }

}

define("sc-scenario", SectionScenario_SectionScenario);
define("sc-video", SectionVideo_SectionVideo);
define("sc-settings", SectionSettings_SectionSettings);

// CONCATENATED MODULE: ./js/view/ScrollCapture.js








class ScrollCapture_ScrollCapture extends UIComponent_UIComponent {

	constructor(element) {
		super(element);

		this.position = null;

		this.dragStart = this.dragStart.bind(this);
		this.dragMove = this.dragMove.bind(this);
		this.dragEnd = this.dragEnd.bind(this);

		let title = this.element.querySelector(".sc-window.sc-window-main > .sc-title");
		title.addEventListener(events.mousedown, this.dragStart);

		this.windowContent = this.element.querySelector(".sc-window-content[is='sc-window-content-main']").component;

		this.branches["scenario"] = this.windowContent.scenario;
		this.branches["video"] = this.windowContent.video;
		this.branches["settings"] = this.windowContent.settings;
	}

	dragStart(event) {
		event.preventDefault();
		if (event.target.classList.contains("sc-drag-area")) {
			this.startPosition = this.position.serialize();
			this.startPoint = this.getTouchPoint(event);
			document.body.addEventListener(events.mousemove, this.dragMove);
			document.body.addEventListener(events.mouseup, this.dragEnd);
		}
	}

	dragMove(event) {
		let point = this.getTouchPoint(event);
		let diff = this.startPoint.subtract(point);
		this.position.x.value = this.startPosition.x + diff.x;
		this.position.y.value = this.startPosition.y - diff.y;
	}

	dragEnd(event) {
		document.body.removeEventListener(events.mousemove, this.dragMove);
		document.body.removeEventListener(events.mouseup, this.dragEnd);
		app.model.save();
	}

}

ScrollCapture_ScrollCapture.template = scroll_capture;

define("sc-actions-view", ActionsView_ActionsView);
define("sc-window-content-main", WindowContentMain_WindowContentMain);

// CONCATENATED MODULE: ./js/tsunami/load/loadXHR.js
function loadXHR(
  url,
  method = 'GET',
  data = null,
  requestHeaders = null,
  responseType = null,
  noCache = false,
  timeout = 15000,
  maxTimeoutAttempt = 5
) {
  const promise = new Promise(function (resolve, reject) {
    let timeoutAttempt = 0;

    let xhr;

    const createXHR = () => {
      xhr = new XMLHttpRequest();
      if (responseType) {
        xhr.responseType = responseType;
      }

      xhr.onload = (event) => {
        promise.progress = 1;
        if (xhr.status === 200) {
          resolve(xhr);
        } else {
          reject(event);
        }
      };

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          promise.progress = event.loaded / event.total;
        }
      };

      xhr.onerror = (event) => {
        promise.progress = 1;
        reject(event);
      };

      xhr.onreadystatechange = (event) => {
        //console.log("xhr.status", this.xhr.status);
        //console.log("xhr.readyState", this.xhr.readyState);
      };

      let url2 = url;
      if (noCache) {
        const random = Math.round(Math.random() * 1000000000);
        if (url2.indexOf('?') === -1) {
          url2 += '?';
        } else {
          url2 += '&';
        }
        url2 += 'nocache=' + random.toString();
      }

      xhr.open(method, url2, true);
      xhr.ontimeout = (e) => {
        timeoutAttempt++;
        if (timeoutAttempt > maxTimeoutAttempt) {
          promise.progress = 1;
          reject(e);
        } else {
          createXHR();
        }
      };
      xhr.timeout = timeout;

      if (requestHeaders) {
        for (let i = 0; i < requestHeaders.length; i++) {
          const requestHeader = requestHeaders[i];
          xhr.setRequestHeader(requestHeader[0], requestHeader[1]);
        }
      }

      if (data) {
        xhr.send(data);
      } else {
        xhr.send();
      }
    };

    createXHR();
  });

  promise.progress = 0;

  return promise;
}

// CONCATENATED MODULE: ./js/tsunami/load/loadStyle.js


function loadStyle(url, id, noCache) {
  const promise = loadXHR(url, 'GET', null, null, null, noCache);
  const promise2 = promise.then(function (xhr) {
    const style = document.createElement('style');
    style.type = 'text/css';
    if (style.styleSheet) {
      style.styleSheet.cssText = xhr.response;
    } else {
      style.appendChild(document.createTextNode(xhr.response));
    }
    document.querySelector('head').appendChild(style);
    return style;
  });

  Object.defineProperty(promise2, 'progress', {
    get: function () {
      return promise.progress;
    },
  });

  return promise2;
}

// CONCATENATED MODULE: ./js/tsunami/components/UIRouterButton.js


class UIRouterButton_UIRouterButton extends UIButton_UIButton {

	constructor(element) {
		super(element);
		this.pushState = true;
	}

	clickHandler(event) {
		event.preventDefault();

		super.clickHandler(event);
	}

	clickDelayComplete(event) {
		super.clickDelayComplete(event);
		let href = this.element.href;
		if (href) {
			let path = href.substr(this.router.absoluteBasePath.length);
			if (this.pushState) {
				this.router.pushState(path);
			}
		} else {
			this.router.location = this.element.getAttribute("data-path");
		}
	}

}

// CONCATENATED MODULE: ./js/view/RouterButton.js



class RouterButton_RouterButton extends UIRouterButton_UIRouterButton {

    get router() {
        return app.controller.router;
    }

}

// CONCATENATED MODULE: ./js/view/AppView.js








class AppView_AppView extends App_App {

    constructor(scope) {
        super(document.body);
        
        this.scope = app.model;
        this.scrollCapture = importTemplate(ScrollCapture_ScrollCapture.template, app.model).component;
        this.appendChild(this.scrollCapture.element);

        app.model.showCaptureIcon.addEventListener(Data_Data.CHANGE, (event) => {
            this.element.setAttribute("is-capturing", event.data);
        });
    }

    load() {
        let contentCSS = chrome.extension.getURL("content.css");
        let contentCSSPromise = loadStyle(contentCSS);
        let fontawesomeCSS = chrome.extension.getURL("fontawesome.css");
        let fontawesomeCSSPromise = loadStyle(fontawesomeCSS);
        return Promise.all([contentCSSPromise, fontawesomeCSSPromise]);
    }

}

define("router-button", RouterButton_RouterButton);
define("scroll-capture", ScrollCapture_ScrollCapture);

// CONCATENATED MODULE: ./js/tsunami/AssetList.js
class AssetList {
  constructor(assets = []) {
    this.assets = assets;
  }

  get progress() {
    let progress = 0;
    let length = this.assets.length;
    for (let i = 0; i < this.assets.length; i++) {
      const promise = this.assets[i];
      if (promise.hasOwnProperty('progress')) {
        progress += promise.progress;
      } else {
        length--;
      }
    }
    if (length > 0) {
      progress = progress / length;
    } else {
      progress = 1;
    }
    return progress;
  }

  push(value) {
    this.assets.push(value);
    return value;
  }
}

// CONCATENATED MODULE: ./js/tsunami/Router.js




class Router_Router extends EventTarget {
  constructor(root) {
    super();

    this.root = root;
    this._location = null;
    this.goToAllLocations = false;
    this.interruptTransitions = true;
    this._inTransition = false;
    this._interruptingLocations = [];
    this.branches = new ArrayData_ArrayData();
    this.redirects = {};
    this.parameters = {};

    this.show = new RouterTransition(this, 'show', this._showComplete.bind(this));
    this.show.tasks = [new Router_RouterTask('load', true), new Router_RouterTask('show', false)];
    this.hide = new RouterTransition(this, 'hide', this._hideComplete.bind(this));
    this.hide.tasks = [new Router_RouterTask('hide', false)];
  }

  static get INTERRUPT() {
    return 'interrupt';
  }

  static get CHANGE() {
    return 'change';
  }

  static get COMPLETE() {
    return 'complete';
  }

  get root() {
    return this._root;
  }

  set root(value) {
    this._root = value;
  }

  get location() {
    return this._location;
  }

  set location(value) {
    if (this.debug) {
      console.log('Router set location', value);
    }

    if (value.indexOf('?') !== -1) {
      value = value.split('?')[0];
    }

    if (this._inTransition) {
      if (this.goToAllLocations) {
        const lastInterruptingLocation = this._interruptingLocations[this._interruptingLocations.length - 1];
        if (lastInterruptingLocation !== value) {
          this._interruptingLocations.push(value);
        }
      } else {
        this._interruptingLocations = [value];
      }
    } else {
      this.changeTheLocation(value);
    }
  }

  start() {
    this.location = '';
  }

  pushState(value) {
    this.location = value;
  }

  changeTheLocation(value) {
    const hashes = value.split('&');
    this.parameters = {};
    for (let i = 0; i < hashes.length; i++) {
      const string = hashes[i];
      const equalIndex = string.indexOf('=');
      if (equalIndex !== -1) {
        const hash = [];
        hash[0] = string.substr(0, equalIndex);
        hash[1] = string.substr(equalIndex + 1);
        this.parameters[hash[0]] = hash[1];
      }
    }

    let path = hashes[0];

    // remove slash if it is the last character, we don't need blank pages.
    let lastChar = path.charAt(path.length - 1);
    while (lastChar === '/') {
      path = path.substr(0, path.length - 1);
      lastChar = path.charAt(path.length - 1);
    }

    path = this._applyRedirect(path);

    if (path !== this._location) {
      this._inTransition = true;

      this._location = path;

      const event = new BaseEvent(Router_Router.CHANGE, { location: path });
      this.dispatchEvent(event);

      this._nextLocation = 'root';
      if (path !== '') {
        this._nextLocation += '/' + path;
      }
      // if (this.debug) {
      //   console.log('Router _nextLocation', this._nextLocation);
      // }

      setTimeout(() => {
        this._startTransitions();
      }, 0);
    } else {
      this._showComplete();
    }
  }

  _applyRedirect(path) {
    const redirect = this.redirects[path];
    let newPath;
    if (redirect) {
      newPath = redirect();
    }
    newPath = newPath || path;
    if (newPath !== path) {
      newPath = this._applyRedirect(newPath);
    }
    return newPath;
  }

  _startTransitions() {
    const currentLocationArray = this.branches.value.map((branch) => {
      return branch.slug;
    });
    const nextLocationArray = this._nextLocation.split('/');
    let breakIndex = -1;
    for (let i = 0; i < currentLocationArray.length; i++) {
      const branchId = currentLocationArray.slice(0, i + 1).join('/');
      const nextBranchId = nextLocationArray.slice(0, i + 1).join('/');
      if (branchId === nextBranchId) {
        breakIndex = i;
      }
    }
    this.hide.branches = this.branches.splice(breakIndex + 1).reverse();
    let parent = this;
    if (this.branches.length > 0) {
      parent = this.branches.item(this.branches.length - 1);
    }
    const newBranches = [];
    for (let i = breakIndex + 1; i < nextLocationArray.length; i++) {
      const slug = nextLocationArray[i];
      const branch = this.getBranchFromSlug(parent, slug);
      newBranches.push(branch);
      parent = branch;
    }

    this.checkForDefaultBranches(parent, newBranches);

    this.show.branches = newBranches;
    this.hide.start();
  }

  checkForDefaultBranches(parent, branches) {
    if (parent) {
      if (parent.defaultChild) {
        const slug = parent.defaultChild;
        const branch = this.getBranchFromSlug(parent, slug);
        if (branch) {
          branches.push(branch);
          this.checkForDefaultBranches(branch, branches);
        }
      }
    }
  }

  getBranchFromSlug(parent, slug) {
    let branch;
    if (slug) {
      if (!parent.getBranch) {
        throw new Error("The branch '" + parent.slug + "' doesn't implement the getBranch method for '" + slug + "'");
      }
      branch = parent.getBranch(slug);
      branch.router = this;
      branch.parent = parent;
      branch.root = parent.root;
      branch.slug = slug;
      let path = '';
      if (parent === this) {
        path = '';
      } else if (parent.slug === 'root') {
        path = slug;
      } else {
        path = parent.path + '/' + slug;
      }
      branch.path = path;
    }
    return branch;
  }

  _hideComplete(event) {
    let interruptTheTransition = false;
    if (this.interruptTransitions && this._interruptingLocations.lenth > 0) {
      const nextInterruptedLocation = this._interruptingLocations[0];
      if (nextInterruptedLocation !== null || nextInterruptedLocation !== undefined) {
        interruptTheTransition = true;
      }
    }
    if (interruptTheTransition) {
      this._inTransition = false;
      const event = new BaseEvent(Router_Router.INTERRUPT, {
        location: this.location,
      });
      this.dispatchEvent(event);
      // this.location = this._interruptingLocations.shift();
      this.changeTheLocation(this._interruptingLocations.shift());
    } else {
      this.branches.push.apply(this.branches, this.show.branches);
      this.show.start();
    }
  }

  _showComplete(event) {
    this._inTransition = false;
    const evt = new BaseEvent(Router_Router.COMPLETE, { location: this.location });
    this.dispatchEvent(evt);
    if (this._interruptingLocations.length > 0) {
      this.changeTheLocation(this._interruptingLocations.shift());
    }
  }

  getBranch(slug) {
    return this.root;
  }

  redirect(path, newPath) {
    if (newPath) {
      this.redirects[path] = newPath;
    } else {
      delete this.redirects[path];
    }
  }

  destroy() {
    this._interruptingLocations = null;
    this.branches = null;
    this.redirects = null;
    this.root = null;
    this.popStateBind = null;
  }

  toString() {
    return '[Router location=' + this.location + ']';
  }
}

class RouterTransition {
  constructor(router, name, onComplete) {
    this.router = router;
    this.name = name;
    this.onComplete = onComplete;
    this.branches = [];
    this.tasks = [];
  }

  start() {
    if (this.branches.length > 0) {
      let nextTask;
      for (let i = this.tasks.length - 1; i > -1; i--) {
        const task = this.tasks[i];
        task.router = this.router;
        task.branches = this.branches.slice();
        if (nextTask) {
          task.onComplete = nextTask.start.bind(nextTask);
        } else {
          task.onComplete = this.tasksComplete.bind(this);
        }
        nextTask = task;
      }
      const firstTask = this.tasks[0];
      firstTask.start();
    } else {
      this.tasksComplete();
    }
  }

  tasksComplete() {
    this.onComplete();
  }
}

class Router_RouterTask {
  constructor(name, preload) {
    this.name = name;
    this.preload = preload;
    this.branches = [];
    this.router = null;
    this.checkProgressBind = this.checkProgress.bind(this);
  }

  start() {
    this.preloader = null;
    this.assets = [];
    if (this.branches.length > 0) {
      if (this.preload) {
        for (let i = 0; i < this.branches.length; i++) {
          this.assets.push(new AssetList());
        }
        this.assetList = new AssetList(this.assets.slice());
        this.preloader = this.router.preloader;
        if (this.preloader) {
          this.isPreloading = true;
          this.checkProgress();
          const promise = this.preloader.show();
          if (promise) {
            promise.then((obj) => {
              this.startNextBranch();
            });
          } else {
            this.startNextBranch();
          }
        } else {
          this.startNextBranch();
        }
      } else {
        this.startNextBranch();
      }
    } else {
      this.allComplete();
    }
  }

  checkProgress() {
    if (this.assetList) {
      this.preloader.progress = this.assetList.progress;
    }
    if (this.isPreloading) {
      this.animationFrame = requestAnimationFrame(this.checkProgressBind);
    }
  }

  startNextBranch() {
    this.branch = this.branches.shift();
    // let method = this.branch.getMethod(this.name);
    let method = this.branch[this.name];
    if (method) {
      method = method.bind(this.branch);
      const assetList = this.assets.shift();
      const promise = method(this.branch, assetList);
      if (promise) {
        promise.then(this.branchComplete.bind(this));
      } else {
        this.branchComplete();
      }
    } else {
      this.branchComplete();
    }
  }

  branchComplete() {
    if (this.branches.length > 0) {
      this.startNextBranch();
    } else {
      if (this.preloader) {
        this.isPreloading = false;
        const promise = this.preloader.hide();
        if (promise) {
          promise.then(this.allComplete.bind(this));
        } else {
          this.allComplete();
        }
      } else {
        this.allComplete();
      }
    }
  }

  allComplete() {
    this.assets = null;
    this.assetList = null;
    this.branches = null;

    window.requestAnimationFrame(() => {
      this.onComplete();
    });
  }
}

// CONCATENATED MODULE: ./js/controller/PlayState.js




class PlayState_PlayState extends Branch {

    constructor() {
        super();
        this.isPlaying = false;
        this.startLocation = "scroll-capture/scenario";
    }

    show() {
        this.isPlaying = true;
        
        this.router.redirect("default", () => { return this.startLocation });

        app.model.save();
        app.model.actions.selectedIndex.value = 0;
        return awaitTimeout(0.25).then(() => this.triggerAction());
    }

    triggerAction() {
        if (!this.isPlaying) return;
        let action = app.model.actions.selectedItem.value;
        if (action) {
            let promise = action.triggerDelay();
            promise.then(() => this.actionComplete());
        } else {
            this.allComplete();
        }
    }

    actionComplete() {
        if (!this.isPlaying) return;
        if (app.model.actions.selectedIndex.value < (app.model.actions.value.length - 1)) {
            app.model.actions.selectedIndex.value = (app.model.actions.selectedIndex.value + 1);
            this.triggerAction();
        } else {
            this.allComplete();
        }
    }

    allComplete() {
        if (!this.isPlaying) return;
        this.isPlaying = false;
        this.router.location = this.startLocation;
    }

    hide() {
        this.isPlaying = false;
        return super.hide();
    }

}
// CONCATENATED MODULE: ./js/controller/PlayRecordState.js






class PlayRecordState_PlayRecordState extends PlayState_PlayState {

    constructor() {
        super();
        this.startLocation = "scroll-capture/video";
    }

    show() {
        Object(GABridge["a" /* sendTrackEventMessage */])("record-actions-length", app.model.actions.value.length.toString());
        if (app.model.actions.value.length < 1) {
            this.timeout = new ActionWait_ActionWait();
            this.timeout.delay.value = 60 * 5;
            app.model.actions.addAction(this.timeout);
        }
        let promise = awaitTimeout(0.25).then(() => {
            app.model.sendMessage({ txt: "scrollCaptureStartRecording"});
            return super.show();
        });
        // this.keepAliveTimeout = setInterval(() => {
        //     chrome.runtime.sendMessage({ txt: "scrollCaptureKeepAlive" });
        // }, 1000 * 10);
        return promise;
    }

    allComplete() {
        if (!this.isPlaying) return;
        this.stopTheRecording();
        super.allComplete();
    }

    stopTheRecording() {
        // clearInterval(this.keepAliveTimeout);
        app.model.sendMessage({ txt: "scrollCaptureStopRecording" });
        app.model.sendMessage({ txt: "scrollCaptureUpdateVideo" });
    }

    hide() {
        window.removeEventListener("onbeforeunload", this.onBeforeUnloadHandler);
        if (this.isPlaying) this.stopTheRecording();
        if (this.timeout) {
            app.model.actions.removeAction(this.timeout);
            this.timeout = null;
        }
        return super.hide();
    }

}

// CONCATENATED MODULE: ./js/controller/CloseState.js



class CloseState_CloseState extends Branch {

    constructor() {
        super();
    }

    show() {
        app.model.save();
        return super.show();
    }

}
// CONCATENATED MODULE: ./js/controller/AppController.js








class AppController_AppController extends Branch {

    constructor() {
        super();

        this.trackRouterLocation = this.trackRouterLocation.bind(this);
        this.beforeUnloadHandler = this.beforeUnloadHandler.bind(this);

        this.router = new Router_Router(this);
        this.router.redirect("default", () => { return "scroll-capture/scenario" });
        this.router.addEventListener(Router_Router.CHANGE, this.trackRouterLocation);
        
        this.branches = {
            "scroll-capture": app.view.scrollCapture,
            "play": new PlayState_PlayState(),
            "record": new PlayRecordState_PlayRecordState(),
            "closed": new CloseState_CloseState()
        }

        window.addEventListener("beforeunload", this.beforeUnloadHandler);
    }

    trackRouterLocation() {
        // console.log(e.type, this.router.location);
        Object(GABridge["b" /* sendTrackPageMessage */])("/" + this.router.location);
    }

    beforeUnloadHandler(event) {
        this.router.removeEventListener(Router_Router.CHANGE, this.trackRouterLocation);
        this.router.location = "";
    }

    load() {
        let viewPromise = app.view.load();

        let promise = new Promise((resolve, reject) => {
            chrome.storage.local.get(["json"], (result) => {
                resolve(result);
            });
        });

        return Promise.all([promise, viewPromise]).then((results) => {
            if (results[0]) {
                let json = results[0].json;
                if (json) {
                    let data = JSON.parse(json)
                    app.model.actions.deserialize(data.actions);
                    app.model.settings.deserialize(data.settings);
                }
            }
        });
    }

    show() {
        Object(GABridge["a" /* sendTrackEventMessage */])("ScrollCaptureStart", window.location.origin + window.location.pathname);
    }

    hide() {
    }

}
// CONCATENATED MODULE: ./js/main.js




let app;

class main_Main {

	constructor() {
		app = this;
		this.model = new AppModel_AppModel();
		this.view = new AppView_AppView();
		this.controller = new AppController_AppController();
	}

}

if(!window.scrollCaptureApp) {
	window.scrollCaptureApp = new main_Main();
}
app = window.scrollCaptureApp;
app.controller.router.location = "default";


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0FCcmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy90cmFuc2Zvcm1MaXRlcmFscy5qcyIsIndlYnBhY2s6Ly8vLi9jc3MvY29udGVudC5zY3NzP2UzMDkiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9nZW9tL1BvaW50LmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvZ2VvbS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS93aW5kb3cuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9DaGFuZ2VFdmVudC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2RhdGEvRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2RhdGEvRGF0YVByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL3V0aWxzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2RhdGEvQm9vbGVhbkRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9kYXRhL051bWJlckRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9kYXRhL09iamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9kYXRhL0FycmF5RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2F3YWl0LmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvZGF0YS9TdHJpbmdEYXRhLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2FuaW1hdGlvbi9DbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2FuaW1hdGlvbi9Ud2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2FuaW1hdGlvbi9Ud2VlblByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvZ2VvbS9DdWJpY0Jlemllci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2FuaW1hdGlvbi9DdWJpY0JlemllckVhc2luZy5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL3RzdW5hbWkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9kYXRhL0RhdGFNb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2RhdGEvVmVjdG9yMkRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9hbmltYXRpb24vRWFzaW5nLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0N1YmljQmV6aWVyUG9pbnRzLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0FjdGlvblR3ZWVuLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0FjdGlvblNjcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9BY3Rpb25Nb3VzZUV2ZW50LmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0FjdGlvbkV2YWwuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aHJlZS9zcmMvbWF0aC9NYXRoVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aHJlZS9zcmMvbWF0aC9RdWF0ZXJuaW9uLmpzIiwid2VicGFjazovLy8uLi9ub2RlX21vZHVsZXMvdGhyZWUvc3JjL21hdGgvVmVjdG9yMy5qcyIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL3RocmVlL3NyYy9tYXRoL01hdHJpeDQuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aHJlZS9zcmMvZXh0cmFzL2NvcmUvQ3VydmUuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy90aHJlZS9zcmMvZXh0cmFzL2N1cnZlcy9DYXRtdWxsUm9tQ3VydmUzLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0FjdGlvblN3aXBlLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0FjdGlvbldhaXQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL3V0aWxzL1Rocm90dGxlLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL1NldHRpbmdzLmpzIiwid2VicGFjazovLy8uL2pzL21vZGVsL0FwcE1vZGVsLmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvQnJhbmNoLmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvdXRpbHMvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9jb21wb25lbnRzL0V2ZW50SGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2RpcmVjdGl2ZXMvb25EaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS91dGlscy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvZGF0YS9FeHByZXNzaW9uLmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvZGlyZWN0aXZlcy9zZXREaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9kaXJlY3RpdmVzL2F0dHJpYnV0ZURpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2RhdGEvQmluZC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2RpcmVjdGl2ZXMvYmluZERpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2NvbXBvbmVudHMvVUlDb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9jb21wb25lbnRzL1VJQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvU2NvcGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9jb21wb25lbnRzL1VJTGlzdEJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9jb21wb25lbnRzL1VJTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2NvbXBvbmVudHMvVUlJbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2NvbXBvbmVudHMvVUlTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9jb21wb25lbnRzL1VJVGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2NvbXBvbmVudHMvVUlOdW1iZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9jb21wb25lbnRzL1VJU2Nyb2xsUGFuZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2NvbXBvbmVudHMvVUlNZWRpYS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2NvbXBvbmVudHMvVUlUb2dnbGUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9jb21wb25lbnRzL1VJSFRNTC5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvZWFzaW5nLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9FYXNpbmdHcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9qcy92aWV3L0FjdGlvblR3ZWVuVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9qcy92aWV3L0FjdGlvblZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9BY3Rpb25zVmlldy5qcyIsIndlYnBhY2s6Ly8vLi90ZW1wbGF0ZXMvc2Nyb2xsLWNhcHR1cmUuaHRtbCIsIndlYnBhY2s6Ly8vLi9qcy92aWV3L1NlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9TZWN0aW9uU2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9TZWN0aW9uVmlkZW8uanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9TZWN0aW9uU2NlbmFyaW8uanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9XaW5kb3dDb250ZW50TWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9qcy92aWV3L1Njcm9sbENhcHR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9sb2FkL2xvYWRYSFIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvdHN1bmFtaS9sb2FkL2xvYWRTdHlsZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy90c3VuYW1pL2NvbXBvbmVudHMvVUlSb3V0ZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9Sb3V0ZXJCdXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvdmlldy9BcHBWaWV3LmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvQXNzZXRMaXN0LmpzIiwid2VicGFjazovLy8uL2pzL3RzdW5hbWkvUm91dGVyLmpzIiwid2VicGFjazovLy8uL2pzL2NvbnRyb2xsZXIvUGxheVN0YXRlLmpzIiwid2VicGFjazovLy8uL2pzL2NvbnRyb2xsZXIvUGxheVJlY29yZFN0YXRlLmpzIiwid2VicGFjazovLy8uL2pzL2NvbnRyb2xsZXIvQ2xvc2VTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb250cm9sbGVyL0FwcENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNB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Q0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1AsOEJBQThCLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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OztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQSxHQUFHOztBQUVIOztBQUVBLEdBQUc7O0FBRUg7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQSxHQUFHOztBQUVIOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7O0FBRUE7OztBQUdxQjs7O0FDN01yQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTJDOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxDQUFDOztBQUVEOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRzs7QUFFSCxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUEsa0NBQWtDLFNBQVM7O0FBRTNDLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxHQUFHOztBQUVIOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBLENBQUM7OztBQUdxQjs7O0FDdG9CcUI7QUFDRTs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixVQUFVOztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQiwwQkFBMEI7QUFDMUI7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBLG9CQUFvQixTQUFTOztBQUU3QixFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7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RUEsZUFBZSxjQUFjO0FBQzdCLGVBQWUsY0FBYztBQUM3QixlQUFlLGNBQWM7QUFDN0IsZUFBZSxjQUFjOztBQUU3Qjs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFFOztBQUVGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBRTs7QUFFRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLEVBQUU7O0FBRUY7O0FBRUE7O0FB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b0I7QUFDNUI7O0FBRUE7QUFDQSx3Q0FBd0MsYUFBTTtBQUM5QztBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLEdBQUc7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsR0FBRztBQUN2QixvQkFBb0IsR0FBRztBQUN2QjtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsUUFBUSxpREFBcUI7QUFDN0I7O0FBRUE7QUFDQTs7QUFFQSxDOztBQ3BFd0M7QUFDSDtBQUNrQjs7QUFFaEQ7O0FBRVEsTUFBTSxTQUFJOztBQUV6QjtBQUNBO0FBQ0EsbUJBQW1CLGlCQUFRO0FBQzNCLGtCQUFrQixlQUFPO0FBQ3pCLHdCQUF3QiwyQkFBYTtBQUNyQzs7QUFFQTs7QUFFQTtBQUNBLCtCQUErQixTQUFJO0FBQ25DO0FBQ0E7QUFDQSIsImZpbGUiOiJjb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwiLy8gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChleGNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChpbmNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgbWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBldmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW47IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0V2ZW4oNykpOyAvLyBUcmFjZXMgZmFsc2VcbiBjb25zb2xlLmxvZyhpc0V2ZW4oMTIpKTsgLy8gVHJhY2VzIHRydWVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW4odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmIDEpID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAxID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgcHJpbWUuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBvbmx5IGRpdmlzaWJsZSBieSA8Y29kZT4xPC9jb2RlPiBhbmQgaXRzZWxmLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIHByaW1lOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNQcmltZSgxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzUHJpbWUoNCkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1lKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gMSB8fCB2YWx1ZSA9PT0gMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzRXZlbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzID0gTWF0aC5zcXJ0KHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDM7IGkgPD0gczsgaSsrKSB7XG4gICAgaWYgKHZhbHVlICUgaSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiBSb3VuZHMgYSBudW1iZXIncyBkZWNpbWFsIHZhbHVlIHRvIGEgc3BlY2lmaWMgcGxhY2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgdG8gcm91bmQuXG4gQHBhcmFtIHBsYWNlOiBUaGUgZGVjaW1hbCBwbGFjZSB0byByb3VuZC5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHZhbHVlIHJvdW5kZWQgdG8gdGhlIGRlZmluZWQgcGxhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMikpOyAvLyBUcmFjZXMgMy4xNFxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAzKSk7IC8vIFRyYWNlcyAzLjE0MlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIHBsYWNlID0gMSkge1xuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIHBsYWNlKTtcblxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHApIC8gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMSh2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDIodmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQzKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAzKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiBpbmRleCBpcyBpbmNsdWRlZCB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gbGVuZ3RoIG90aGVyd2lzZSB0aGUgaW5kZXggbG9vcHMgdG8gdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHJhbmdlIGFuZCBjb250aW51ZXMuXG5cbiBAcGFyYW0gaW5kZXg6IFNob3AgdG8gbG9vcCBpZiBuZWVkZWQuXG4gQHBhcmFtIGxlbmd0aDogVGhlIHRvdGFsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuIEByZXR1cm4gQSB2YWxpZCB6ZXJvLWJhc2VkIGluZGV4LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFyIGNvbG9yczpBcnJheSA9IG5ldyBBcnJheShcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiKTtcblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgyLCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgQmx1ZVxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCg0LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgR3JlZW5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoLTYsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBSZWRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29wSW5kZXgoaW5kZXgsIGxlbmd0aCkge1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgaW5kZXggPSBsZW5ndGggKyAoaW5kZXggJSBsZW5ndGgpO1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgIHJldHVybiBpbmRleCAlIGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgdmFsdWUgaXMgaW5jbHVkZWQgd2l0aGluIGEgcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQHVzYWdlTm90ZSBUaGUgcmFuZ2UgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDMsIDAsIDUpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiAhKFxuICAgIHZhbHVlIDwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHx8XG4gICAgdmFsdWUgPiBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSlcbiAgKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB2YWx1ZSBmYWxscyB3aXRoaW4gYSByYW5nZTsgaWYgbm90IGl0IGlzIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyBlaXRoZXIgdGhlIG51bWJlciBhcyBwYXNzZWQsIG9yIGl0cyB2YWx1ZSBvbmNlIHNuYXBwZWQgdG8gbmVhcmVzdCByYW5nZSB2YWx1ZS5cbiBAdXNhZ2VOb3RlIFRoZSBjb25zdHJhaW50IHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNvbnN0cmFpbigzLCAwLCA1KSk7IC8vIFRyYWNlcyAzXG4gY29uc29sZS5sb2coY29uc3RyYWluKDcsIDAsIDUpKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJhaW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1pbihcbiAgICBNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKSxcbiAgICBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSlcbiAgKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBldmVubHkgc3BhY2VkIG51bWVyaWNhbCBpbmNyZW1lbnRzIGJldHdlZW4gdHdvIG51bWJlcnMuXG5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBwYXJhbSBzdGVwczogVGhlIG51bWJlciBvZiBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyBhbiBBcnJheSBjb21wcmlzZWQgb2YgdGhlIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigwLCA1LCA0KSk7IC8vIFRyYWNlcyAxLDIsMyw0XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDEsIDMsIDMpKTsgLy8gVHJhY2VzIDEuNSwyLDIuNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBzQmV0d2VlbihiZWdpbiwgZW5kLCBzdGVwcykge1xuICBzdGVwcysrO1xuXG4gIGxldCBpID0gMDtcbiAgY29uc3Qgc3RlcHNCZXR3ZWVuID0gW107XG4gIGNvbnN0IGluY3JlbWVudCA9IChlbmQgLSBiZWdpbikgLyBzdGVwcztcblxuICB3aGlsZSAoKytpIDwgc3RlcHMpIHtcbiAgICBzdGVwc0JldHdlZW4ucHVzaChpICogaW5jcmVtZW50ICsgYmVnaW4pO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXBzQmV0d2Vlbjtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHZhbHVlIGJldHdlZW4gdHdvIHNwZWNpZmllZCB2YWx1ZXMuXG5cbiBAcGFyYW0gYW1vdW50OiBUaGUgbGV2ZWwgb2YgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLiBJZiA8Y29kZT4wPC9jb2RlPiwgPGNvZGU+YmVnaW48L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkOyBpZiA8Y29kZT4xPC9jb2RlPiwgPGNvZGU+ZW5kPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZC5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaW50ZXJwb2xhdGUoMC41LCAwLCAxMCkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlKGFtb3VudCwgYmVnaW4sIGVuZCkge1xuICByZXR1cm4gYmVnaW4gKyAoZW5kIC0gYmVnaW4pICogYW1vdW50O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgcGVyY2VudGFnZSBvZiBhIHZhbHVlIGluIGEgZ2l2ZW4gcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQuXG4gQHBhcmFtIG1pbmltdW06IFRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIG1heGltdW06IFRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhub3JtYWxpemUoOCwgNCwgMjApLmRlY2ltYWxQZXJjZW50YWdlKTsgLy8gVHJhY2VzIDAuMjVcbiA8L2NvZGU+XG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIG1pbmltdW0sIG1heGltdW0pIHtcbi8vICAgcmV0dXJuIG5ldyBQZXJjZW50KCh2YWx1ZSAtIG1pbmltdW0pIC8gKG1heGltdW0gLSBtaW5pbXVtKSk7XG4vLyB9XG5cbi8qKlxuIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSBjb29yZGluYXRlIHNwYWNlIHRvIGFub3RoZXIuXG5cbiBAcGFyYW0gdmFsdWU6IFZhbHVlIGZyb20gdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UgdG8gbWFwIHRvIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMTogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDE6IEVuZGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMjogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgyOiBFbmRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobWFwKDAuNzUsIDAsIDEsIDAsIDEwMCkpOyAvLyBUcmFjZXMgNzVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpO1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuLy8gXHRyZXR1cm4gbWluMiArIChtYXgyIC0gbWluMikgKiAoKHZhbHVlIC0gbWluMSkgLyAobWF4MSAtIG1pbjEpKTtcbi8vIH1cblxuLyoqXG4gTG93IHBhc3MgZmlsdGVyIGFsb2dyaXRobSBmb3IgZWFzaW5nIGEgdmFsdWUgdG93YXJkIGEgZGVzdGluYXRpb24gdmFsdWUuIFdvcmtzIGJlc3QgZm9yIHR3ZWVuaW5nIHZhbHVlcyB3aGVuIG5vIGRlZmluaXRlIHRpbWUgZHVyYXRpb24gZXhpc3RzIGFuZCB3aGVuIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZSBjaGFuZ2VzLlxuXG4gSWYgPGNvZGU+KDAuNSA8IG4gPCAxKTwvY29kZT4sIHRoZW4gdGhlIHJlc3VsdGluZyB2YWx1ZXMgd2lsbCBvdmVyc2hvb3QgKHBpbmctcG9uZykgdW50aWwgdGhleSByZWFjaCB0aGUgZGVzdGluYXRpb24gdmFsdWUuIFdoZW4gPGNvZGU+bjwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDEsIGFzIGl0cyB2YWx1ZSBpbmNyZWFzZXMsIHRoZSB0aW1lIGl0IHRha2VzIHRvIHJlYWNoIHRoZSBkZXN0aW5hdGlvbiBhbHNvIGluY3JlYXNlcy4gQSBwbGVhc2luZyB2YWx1ZSBmb3IgPGNvZGU+bjwvY29kZT4gaXMgNS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWUuXG4gQHBhcmFtIGRlc3Q6IFRoZSBkZXN0aW5hdGlvbiB2YWx1ZS5cbiBAcGFyYW0gbjogVGhlIHNsb3dkb3duIGZhY3Rvci5cbiBAcmV0dXJuIFRoZSB3ZWlnaHRlZCBhdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0ZWRBdmVyYWdlKHZhbHVlLCBkZXN0LCBuKSB7XG4gIHJldHVybiB2YWx1ZSArIChkZXN0IC0gdmFsdWUpIC8gbjtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCJcIjwvY29kZT4uXG4gQHBhcmFtIG1pbkxlbmd0aDogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBudW1iZXI7IGRlZmF1bHRzIHRvIDxjb2RlPjAgPC9jb2RlPi5cbiBAcGFyYW0gZmlsbENoYXI6IFRoZSBsZWFkaW5nIGNoYXJhY3RlciB1c2VkIHRvIG1ha2UgdGhlIG51bWJlciB0aGUgbWluaW11bSBsZW5ndGg7IGRlZmF1bHRzIHRvIDxjb2RlPlwiMFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXQoMTIzNDU2NywgXCIsXCIsIDgpKTsgLy8gVHJhY2VzIDAxLDIzNCw1NjdcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIGtEZWxpbSwgbWluTGVuZ3RoLCBmaWxsQ2hhcikge1xuICBpZiAoIWtEZWxpbSkge1xuICAgIGtEZWxpbSA9IFwiLFwiO1xuICB9XG4gIGlmIChpc05hTihtaW5MZW5ndGgpKSB7XG4gICAgbWluTGVuZ3RoID0gMDtcbiAgfVxuICBpZiAoIWZpbGxDaGFyKSB7XG4gICAgZmlsbENoYXIgPSBcIjBcIjtcbiAgfVxuICBjb25zdCByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG4gIGxldCBudW0gPSBNYXRoLmZsb29yKHZhbHVlKS50b1N0cmluZygpO1xuICBjb25zdCBsZW4gPSBudW0ubGVuZ3RoO1xuXG4gIGlmIChtaW5MZW5ndGggIT09IDAgJiYgbWluTGVuZ3RoID4gbGVuKSB7XG4gICAgbWluTGVuZ3RoIC09IGxlbjtcblxuICAgIGNvbnN0IGFkZENoYXIgPSBmaWxsQ2hhciB8fCBcIjBcIjtcblxuICAgIHdoaWxlIChtaW5MZW5ndGgtLSkge1xuICAgICAgbnVtID0gYWRkQ2hhciArIG51bTtcbiAgICB9XG4gIH1cblxuICBpZiAoa0RlbGltICE9PSBudWxsICYmIG51bS5sZW5ndGggPiAzKSB7XG4gICAgY29uc3QgdG90YWxEZWxpbSA9IE1hdGguZmxvb3IobnVtLmxlbmd0aCAvIDMpO1xuICAgIGNvbnN0IHRvdGFsUmVtYWluID0gbnVtLmxlbmd0aCAlIDM7XG4gICAgY29uc3QgbnVtU3BsaXQgPSBudW0uc3BsaXQoXCJcIik7XG4gICAgbGV0IGkgPSAtMTtcblxuICAgIHdoaWxlICgrK2kgPCB0b3RhbERlbGltKSB7XG4gICAgICBudW1TcGxpdC5zcGxpY2UodG90YWxSZW1haW4gKyA0ICogaSwgMCwga0RlbGltKTtcbiAgICB9XG5cbiAgICBpZiAodG90YWxSZW1haW4gPT09IDApIHtcbiAgICAgIG51bVNwbGl0LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgbnVtID0gbnVtU3BsaXQuam9pbihcIlwiKTtcbiAgfVxuXG4gIGlmIChyZW1haW5kZXIgIT09IDApIHtcbiAgICBudW0gKz0gcmVtYWluZGVyLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIG51bTtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIGN1cnJlbmN5IHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGZvcmNlRGVjaW1hbHM6IElmIHRoZSBudW1iZXIgc2hvdWxkIGFsd2F5cyBoYXZlIHR3byBkZWNpbWFsIHBsYWNlcyA8Y29kZT50cnVlPC9jb2RlPiwgb3Igb25seSBzaG93IGRlY2ltYWxzIGlzIHRoZXJlIGlzIGEgZGVjaW1hbHMgdmFsdWUgPGNvZGU+ZmFsc2U8L2NvZGU+OyBkZWZhdWx0cyB0byA8Y29kZT50cnVlPC9jb2RlPi5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIixcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0Q3VycmVuY3koMTIzNC41KSk7IC8vIFRyYWNlcyBcIjEsMjM0LjUwXCJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeSh2YWx1ZSwgZm9yY2VEZWNpbWFscywga0RlbGltKSB7XG4gIGlmIChmb3JjZURlY2ltYWxzID09PSBudWxsKSB7XG4gICAgZm9yY2VEZWNpbWFscyA9IHRydWU7XG4gIH1cbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSBcIixcIjtcbiAgfVxuICBjb25zdCByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG4gIGxldCBjdXJyZW5jeSA9IGZvcm1hdChNYXRoLmZsb29yKHZhbHVlKSwga0RlbGltKTtcblxuICBpZiAocmVtYWluZGVyICE9PSAwIHx8IGZvcmNlRGVjaW1hbHMpIHtcbiAgICBjdXJyZW5jeSArPSByZW1haW5kZXIudG9GaXhlZCgyKS5zdWJzdHIoMSk7XG4gIH1cblxuICByZXR1cm4gY3VycmVuY3k7XG59XG5cbi8qKlxuIEZpbmRzIHRoZSBlbmdsaXNoIG9yZGluYWwgc3VmZml4IGZvciB0aGUgbnVtYmVyIGdpdmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZmluZCB0aGUgb3JkaW5hbCBzdWZmaXggb2YuXG4gQHJldHVybiBSZXR1cm5zIHRoZSBzdWZmaXggZm9yIHRoZSBudW1iZXIsIDIgY2hhcmFjdGVycy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKDMyICsgZ2V0T3JkaW5hbFN1ZmZpeCgzMikpOyAvLyBUcmFjZXMgMzJuZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodmFsdWUpIHtcbiAgaWYgKHZhbHVlID49IDEwICYmIHZhbHVlIDw9IDIwKSB7XG4gICAgcmV0dXJuIFwidGhcIjtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgc3dpdGNoICh2YWx1ZSAlIDEwKSB7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gXCJuZFwiO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBcInN0XCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcInRoXCI7XG4gIH1cbn1cblxuLyoqXG4gQWRkcyBhIGxlYWRpbmcgemVybyBmb3IgbnVtYmVycyBsZXNzIHRoYW4gdGVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gYWRkIGxlYWRpbmcgemVyby5cbiBAcmV0dXJuIE51bWJlciBhcyBhIFN0cmluZzsgaWYgdGhlIG51bWJlciB3YXMgbGVzcyB0aGFuIHRlbiB0aGUgbnVtYmVyIHdpbGwgaGF2ZSBhIGxlYWRpbmcgemVyby5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDcpKTsgLy8gVHJhY2VzIDA3XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oMTEpKTsgLy8gVHJhY2VzIDExXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm8odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMTAgPyBcIjBcIiArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gU3BlbGxzIHRoZSBwcm92aWRlZCBudW1iZXIuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBzcGVsbC4gTmVlZHMgdG8gYmUgbGVzcyB0aGFuIDk5OTk5OTk5OS5cbiBAcmV0dXJuIFRoZSBudW1iZXIgc3BlbGxlZCBvdXQgYXMgYSBTdHJpbmcuXG4gQHRocm93cyA8Y29kZT5FcnJvcjwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiA5OTk5OTk5OTkuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhzcGVsbCgwKSk7IC8vIFRyYWNlcyBaZXJvXG4gY29uc29sZS5sb2coc3BlbGwoMjMpKTsgLy8gVHJhY2VzIFR3ZW50eS1UaHJlZVxuIGNvbnNvbGUubG9nKHNwZWxsKDIwMDU2NzgpKTsgLy8gVHJhY2VzIFR3byBNaWxsaW9uLCBGaXZlIFRob3VzYW5kLCBTaXggSHVuZHJlZCBTZXZlbnR5LUVpZ2h0XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlbGwodmFsdWUpIHtcbiAgaWYgKHZhbHVlID4gOTk5OTk5OTk5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgdG9vIGxhcmdlIGZvciB0aGlzIG1ldGhvZC5cIik7XG4gIH1cblxuICBjb25zdCBvbmVzU3BlbGxpbmdzID0gW1xuICAgIFwiXCIsXG4gICAgXCJPbmVcIixcbiAgICBcIlR3b1wiLFxuICAgIFwiVGhyZWVcIixcbiAgICBcIkZvdXJcIixcbiAgICBcIkZpdmVcIixcbiAgICBcIlNpeFwiLFxuICAgIFwiU2V2ZW5cIixcbiAgICBcIkVpZ2h0XCIsXG4gICAgXCJOaW5lXCIsXG4gICAgXCJUZW5cIixcbiAgICBcIkVsZXZlblwiLFxuICAgIFwiVHdlbHZlXCIsXG4gICAgXCJUaGlydGVlblwiLFxuICAgIFwiRm91cnRlZW5cIixcbiAgICBcIkZpZnRlZW5cIixcbiAgICBcIlNpeHRlZW5cIixcbiAgICBcIlNldmVudGVlblwiLFxuICAgIFwiRWlnaHRlZW5cIixcbiAgICBcIk5pbmV0ZWVuXCIsXG4gIF07XG4gIGNvbnN0IHRlbnNTcGVsbGluZ3MgPSBbXG4gICAgXCJcIixcbiAgICBcIlwiLFxuICAgIFwiVHdlbnR5XCIsXG4gICAgXCJUaGlydHlcIixcbiAgICBcIkZvcnR5XCIsXG4gICAgXCJGaWZ0eVwiLFxuICAgIFwiU2l4dHlcIixcbiAgICBcIlNldmVudHlcIixcbiAgICBcIkVpZ2h0eVwiLFxuICAgIFwiTmluZXR5XCIsXG4gIF07XG4gIGxldCBzcGVsbGluZyA9IFwiXCI7XG5cbiAgY29uc3QgbWlsbGlvbnMgPSB2YWx1ZSAvIDEwMDAwMDA7XG4gIHZhbHVlICU9IDEwMDAwMDA7XG5cbiAgY29uc3QgdGhvdXNhbmRzID0gdmFsdWUgLyAxMDAwO1xuICB2YWx1ZSAlPSAxMDAwO1xuXG4gIGNvbnN0IGh1bmRyZWRzID0gdmFsdWUgLyAxMDA7XG4gIHZhbHVlICU9IDEwMDtcblxuICBjb25zdCB0ZW5zID0gdmFsdWUgLyAxMDtcbiAgdmFsdWUgJT0gMTA7XG5cbiAgY29uc3Qgb25lcyA9IHZhbHVlICUgMTA7XG5cbiAgaWYgKG1pbGxpb25zICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbChtaWxsaW9ucykgKyBcIiBNaWxsaW9uXCI7XG4gIH1cblxuICBpZiAodGhvdXNhbmRzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbCh0aG91c2FuZHMpICsgXCIgVGhvdXNhbmRcIjtcbiAgfVxuXG4gIGlmIChodW5kcmVkcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwoaHVuZHJlZHMpICsgXCIgSHVuZHJlZFwiO1xuICB9XG5cbiAgaWYgKHRlbnMgIT09IDAgfHwgb25lcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiBcIjtcblxuICAgIGlmICh0ZW5zIDwgMikge1xuICAgICAgc3BlbGxpbmcgKz0gb25lc1NwZWxsaW5nc1t0ZW5zICogMTAgKyBvbmVzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlbGxpbmcgKz0gdGVuc1NwZWxsaW5nc1t0ZW5zXTtcblxuICAgICAgaWYgKG9uZXMgIT09IDApIHtcbiAgICAgICAgc3BlbGxpbmcgKz0gXCItXCIgKyBvbmVzU3BlbGxpbmdzW29uZXNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzcGVsbGluZy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCJaZXJvXCI7XG4gIH1cblxuICByZXR1cm4gc3BlbGxpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gIGNvbnN0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXgocmdiKSB7XG4gIHJldHVybiBjb21wb25lbnRUb0hleChyZ2IucikgKyBjb21wb25lbnRUb0hleChyZ2IuZykgKyBjb21wb25lbnRUb0hleChyZ2IuYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHRcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gXCJyOlwiICsgdGhpcy5yICsgXCIsZzpcIiArIHRoaXMuZyArIFwiLGI6XCIgKyB0aGlzLmI7XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcykge1xuICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZCkge1xuICByZXR1cm4gKHJhZCAqIDE4MCkgLyBNYXRoLlBJO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3Roc3RlcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgY29uc3QgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkpO1xuICByZXR1cm4geCAqIHggKiAoMyAtIDIgKiB4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xuICAvLyByZXR1cm4gYSgxLXQpICsgYnRcbiAgLy9yZXR1cm4gbWluICsgKG1heCAtIG1pbikgKiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peChhLCBiLCB0KSB7XG4gIHJldHVybiBsZXJwKGEsIGIsIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2QobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vYSBtb2R1bG8gZnVuY3Rpb24gdGhhdCBoYW5kbGVzIG5lZ2F0aXZlcyBudW1iZXJzICdjb3JyZWN0bHknXG5leHBvcnQgZnVuY3Rpb24gbW9kV3JhcChuLCBtKSB7XG4gIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9yYW5kb20gd2l0aCBzZWVkLCByZXR1cm5zIDAtMSByYW5nZVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbTFEKHNlZWQpIHtcbiAgcmV0dXJuIG1vZFdyYXAoTWF0aC5zaW4oc2VlZCkgKiA0Mzc1OC41NDUzLCAxKTtcbn1cblxuLy9yZXR1cm5zIDAtMSByYW5nZVxuZXhwb3J0IGZ1bmN0aW9uIG5vaXNlMUQoeCkge1xuICBjb25zdCBpID0gTWF0aC5mbG9vcih4KTtcbiAgY29uc3QgZiA9IG1vZFdyYXAoeCwgMSk7XG4gIGNvbnN0IHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgcmV0dXJuIGxlcnAodSwgcmFuZG9tMUQoaSksIHJhbmRvbTFEKGkgKyAxLjApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBDbGFtcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gY2xhbXAobGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4MiksIG1pbjIsIG1heDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZVdhdmUoXG4gIGFuZ2xlID0gMCxcbiAgZnJlcXVlbmN5ID0gTWF0aC5QSSxcbiAgdGltZSA9IDAsXG4gIHNwZWVkID0gMSxcbiAgYW1wbGl0dWRlID0gMVxuKSB7XG4gIHJldHVybiBNYXRoLnNpbihhbmdsZSAqIGZyZXF1ZW5jeSArIHRpbWUgKiBzcGVlZCkgKiBhbXBsaXR1ZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcFRpbWUodGltZSwgc3RhcnRUaW1lLCBkdXJhdGlvbikge1xuICByZXR1cm4gY2xhbXAodGltZSAtIHN0YXJ0VGltZSwgMC4wLCBkdXJhdGlvbikgLyBkdXJhdGlvbjtcbn1cblxuLyoqXG4gRWFzZSBhIHZhbHVlIHdpdGggc29tZSBlbGFzdGljaXR5XG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZVxuIEBwYXJhbSB0YXJnZXQ6IFRoZSB0YXJnZXQgdmFsdWVcbiBAcGFyYW0gZnJpY3Rpb246IFRoZSBmcmljdGlvbiBmcm9tIDAgdG8gMVxuIEByZXR1cm4gVGhlIGVhc2UgdmFsdWVcbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhbHVlICs9IGVhc2VPdXQodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24pO1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhc2VPdXQodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24gPSAwLjEpIHtcbiAgcmV0dXJuICh0YXJnZXQgLSB2YWx1ZSkgKiBmcmljdGlvbjtcbn1cblxuLyoqXG4gRWFzZSBhIHZhbHVlIHdpdGggc29tZSBlbGFzdGljaXR5XG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZVxuIEBwYXJhbSB0YXJnZXQ6IFRoZSB0YXJnZXQgdmFsdWVcbiBAcGFyYW0gZnJpY3Rpb246IFRoZSBmcmljdGlvbiBmcm9tIDAgdG8gMVxuIEBwYXJhbSBzcGVlZDogVGhlIGN1cnJlbnQgc3BlZWRcbiBAcGFyYW0gZWxhc3RpY2l0eTogVGhlIGVsYXN0aWNpdHkgZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBuZXcgc3BlZWQgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBzcGVlZCA9IHNwcmluZyh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbiwgc3BlZWQsIGVsYXN0aWNpdHkpO1xuIHZhbHVlICs9IHNwZWVkO1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwcmluZyhcbiAgdmFsdWUsXG4gIHRhcmdldCA9IDAsXG4gIGZyaWN0aW9uID0gMC4xLFxuICBzcGVlZCA9IDAsXG4gIGVsYXN0aWNpdHkgPSAwXG4pIHtcbiAgcmV0dXJuIHNwZWVkICogZWxhc3RpY2l0eSArICh0YXJnZXQgLSB2YWx1ZSkgKiBmcmljdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU11bHRpcGxlUm90YXRpb25zKGFuZ2xlKSB7XG4gIGNvbnN0IGNpcmNsZSA9IE1hdGguUEkgKiAyO1xuICB3aGlsZSAoYW5nbGUgPiBjaXJjbGUgLyAyKSB7XG4gICAgYW5nbGUgLT0gY2lyY2xlO1xuICB9XG4gIHdoaWxlIChhbmdsZSA8IC1jaXJjbGUgLyAyKSB7XG4gICAgYW5nbGUgKz0gY2lyY2xlO1xuICB9XG4gIHJldHVybiBhbmdsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleENvbG9yU3RyaW5nVG9OdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgPSBcIlwiKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZVRyYWNrRXZlbnRcIiwgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZVRyYWNrUGFnZVwiLCBwYXRoIH0pO1xufSIsImV4cG9ydCBsZXQgc3VwcG9ydHNUZW1wbGF0ZUxpdGVyYWxzID0gZmFsc2U7XG50cnkge1xuICAgIGV2YWwoXCJgZm9vYFwiKTtcbiAgICBzdXBwb3J0c1RlbXBsYXRlTGl0ZXJhbHMgPSB0cnVlO1xufSBjYXRjaCAoZSkgeyB9XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zZm9ybUxpdGVyYWxzKGV4cHJlc3Npb24pIHtcbiAgICBpZiAoIXN1cHBvcnRzVGVtcGxhdGVMaXRlcmFscykge1xuICAgICAgICBsZXQgZXZhbEV4cHJlc3Npb24gPSBleHByZXNzaW9uLnNwbGl0KFwiYFwiKS5qb2luKFwiXCIpO1xuICAgICAgICBsZXQgY2h1bmtzID0gZXZhbEV4cHJlc3Npb24uc3BsaXQoXCIke1wiKTtcbiAgICAgICAgbGV0IG5vZGVzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2h1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2h1bmsgPSBjaHVua3NbaV07XG4gICAgICAgICAgICBpZiAoY2h1bmsuaW5kZXhPZihcIn1cIikgPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2h1bmspIHtcbiAgICAgICAgICAgICAgICAgICAgY2h1bmsgPSBcIidcIiArIGNodW5rICsgXCInXCI7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goY2h1bmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IGNodW5rQml0cyA9IGNodW5rLnNwbGl0KFwifVwiKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNodW5rQml0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY2h1bmtCaXQgPSBjaHVua0JpdHNbal07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjaHVua0JpdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGogPiAwKSBjaHVua0JpdCA9IFwiJ1wiICsgY2h1bmtCaXQgKyBcIidcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGVzLnB1c2goY2h1bmtCaXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cHJlc3Npb24gPSBub2Rlcy5qb2luKFwiICsgXCIpO1xuICAgIH1cbiAgICByZXR1cm4gZXhwcmVzc2lvbjtcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAvLyAxNjMwODc5MDI2OTc2XG4gICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi9Vc2Vycy9wYXRyaWNrbWF0dGUvRG9jdW1lbnRzL2NvZGUvc2Nyb2xsLWNhcHR1cmUgcHJvamVjdC9zY3JvbGwtY2FwdHVyZS9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7XCJobXJcIjp0cnVlLFwicHVibGljUGF0aFwiOlwiLi9cIixcImxvY2Fsc1wiOmZhbHNlfSk7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoY3NzUmVsb2FkKTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KHVuZGVmaW5lZCwgY3NzUmVsb2FkKTtcbiAgICB9XG4gICIsImltcG9ydCB7IGxlcnAgfSBmcm9tICcuLi91dGlscy9udW1iZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb2ludCB7XG4gIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCkge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgfVxuXG4gIHN0YXRpYyBsZXJwKHAwLCBwMSwgdCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQobGVycChwMC54LCBwMS54LCB0KSwgbGVycChwMC55LCBwMS55LCB0KSk7XG4gIH1cblxuICBzdGF0aWMgZGlzdGFuY2UocDEsIHAyID0gbmV3IFBvaW50KCkpIHtcbiAgICByZXR1cm4gTWF0aC5zcXJ0KChwMS54IC0gcDIueCkgKiAocDEueCAtIHAyLngpICsgKHAxLnkgLSBwMi55KSAqIChwMS55IC0gcDIueSkpO1xuICB9XG5cbiAgc3RhdGljIHBvbGFyKGxlbiwgcmFkaWFucykge1xuICAgIHJldHVybiBuZXcgUG9pbnQobGVuICogTWF0aC5jb3MocmFkaWFucyksIGxlbiAqIE1hdGguc2luKHJhZGlhbnMpKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXRBbmdsZShwb2ludCwgY2VudGVyID0gbmV3IFBvaW50KCkpIHtcbiAgICByZXR1cm4gTWF0aC5hdGFuMihwb2ludC55IC0gY2VudGVyLnksIHBvaW50LnggLSBjZW50ZXIueCk7XG4gIH1cblxuICBzdGF0aWMgcmFuZG9tKCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQoTWF0aC5yYW5kb20oKSwgTWF0aC5yYW5kb20oKSk7XG4gIH1cblxuICBzdGF0aWMgcm90YXRlKHAsIGEpIHtcbiAgICBjb25zdCB4ID0gTWF0aC5jb3MoYSkgKiBwLnggLSBNYXRoLnNpbihhKSAqIHAueTtcbiAgICBjb25zdCB5ID0gTWF0aC5zaW4oYSkgKiBwLnggKyBNYXRoLmNvcyhhKSAqIHAueTtcbiAgICBwLnggPSB4O1xuICAgIHAueSA9IHk7XG4gIH1cblxuICBhZGQocCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcC54LCB0aGlzLnkgKyBwLnkpO1xuICB9XG5cbiAgZ2V0IG1hZ25pdHVkZSgpIHtcbiAgICByZXR1cm4gUG9pbnQuZGlzdGFuY2UodGhpcyk7XG4gIH1cblxuICBhYnMoKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludChNYXRoLmFicyh0aGlzLngpLCBNYXRoLmFicyh0aGlzLnkpKTtcbiAgfVxuXG4gIGNsYW1wKG1pblgsIG1heFgsIG1pblksIG1heFkpIHtcbiAgICB0aGlzLmNsYW1wWChtaW5YLCBtYXhYKTtcbiAgICB0aGlzLmNsYW1wWShtaW5ZLCBtYXhZKTtcbiAgfVxuXG4gIGNsYW1wWChtaW4sIG1heCkge1xuICAgIHRoaXMueCA9IE1hdGgubWF4KHRoaXMueCwgbWluKTtcbiAgICB0aGlzLnggPSBNYXRoLm1pbih0aGlzLngsIG1heCk7XG4gIH1cblxuICBjbGFtcFkobWluLCBtYXgpIHtcbiAgICB0aGlzLnkgPSBNYXRoLm1heCh0aGlzLnksIG1pbik7XG4gICAgdGhpcy55ID0gTWF0aC5taW4odGhpcy55LCBtYXgpO1xuICB9XG5cbiAgY29weUZyb20ocCkge1xuICAgIHRoaXMueCA9IHAueDtcbiAgICB0aGlzLnkgPSBwLnk7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcbiAgfVxuXG4gIGVxdWFscyhwb2ludCkge1xuICAgIHJldHVybiB0aGlzLnggPT09IHBvaW50LnggJiYgdGhpcy55ID09PSBwb2ludC55O1xuICB9XG5cbiAgZGl2aWRlKHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAvIHAueCwgdGhpcy55IC8gcC55KTtcbiAgfVxuXG4gIGRpdmlkZVNjYWxhcihzY2FsYXIpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAvIHNjYWxhciwgdGhpcy55IC8gc2NhbGFyKTtcbiAgfVxuXG4gIG11bHRpcGx5KHApIHtcbiAgICByZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIHAueCwgdGhpcy55ICogcC55KTtcbiAgfVxuXG4gIG11bHRpcGx5U2NhbGFyKHNjYWxhcikge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogc2NhbGFyLCB0aGlzLnkgKiBzY2FsYXIpO1xuICB9XG5cbiAgc2V0KHgsIHkpIHtcbiAgICB0aGlzLnggPSB4O1xuICAgIHRoaXMueSA9IHk7XG4gIH1cblxuICBzdWJ0cmFjdChwKSB7XG4gICAgcmV0dXJuIG5ldyBQb2ludCh0aGlzLnggLSBwLngsIHRoaXMueSAtIHAueSk7XG4gIH1cblxuICBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfTtcbiAgfVxuXG4gIGRlc2VyaWFsaXplKG9iaikge1xuICAgIHRoaXMuY29weUZyb20ob2JqKTtcbiAgfVxuXG4gIG1hdGgoY2FsbGJhY2spIHtcbiAgICB0aGlzLnggPSBjYWxsYmFjayh0aGlzLngpO1xuICAgIHRoaXMueSA9IGNhbGxiYWNrKHRoaXMueSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tQb2ludCB4PScgKyB0aGlzLnggKyAnIHk9JyArIHRoaXMueSArICddJztcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUge1xuICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDAsIHdpZHRoID0gMCwgaGVpZ2h0ID0gMCkge1xuICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3IFBvaW50KCk7XG4gICAgdGhpcy5fc2l6ZSA9IG5ldyBQb2ludCgpO1xuICAgIHRoaXMuY2VudGVyID0gbmV3IFBvaW50KCk7XG4gICAgdGhpcy5oYWxmU2l6ZSA9IG5ldyBQb2ludCgpO1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBnZXQgeCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54O1xuICB9XG5cbiAgc2V0IHgodmFsdWUpIHtcbiAgICB0aGlzLnBvc2l0aW9uLnggPSB2YWx1ZTtcbiAgICB0aGlzLmNlbnRlci54ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5oYWxmU2l6ZS54O1xuICB9XG5cbiAgZ2V0IHkoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueTtcbiAgfVxuXG4gIHNldCB5KHZhbHVlKSB7XG4gICAgdGhpcy5wb3NpdGlvbi55ID0gdmFsdWU7XG4gICAgdGhpcy5jZW50ZXIueSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGFsZlNpemUueTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLng7XG4gIH1cblxuICBzZXQgd2lkdGgodmFsdWUpIHtcbiAgICB0aGlzLnNpemUueCA9IHZhbHVlO1xuICAgIHRoaXMuaGFsZlNpemUueCA9IHZhbHVlIC8gMjtcbiAgICB0aGlzLmNlbnRlci54ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5oYWxmU2l6ZS54O1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5zaXplLnk7XG4gIH1cblxuICBzZXQgaGVpZ2h0KHZhbHVlKSB7XG4gICAgdGhpcy5zaXplLnkgPSB2YWx1ZTtcbiAgICB0aGlzLmhhbGZTaXplLnkgPSB2YWx1ZSAvIDI7XG4gICAgdGhpcy5jZW50ZXIueSA9IHRoaXMucG9zaXRpb24ueSArIHRoaXMuaGFsZlNpemUueTtcbiAgfVxuXG4gIGNvbnRhaW5zKHBvaW50KSB7XG4gICAgY29uc3QgaGl0ID1cbiAgICAgIHBvaW50LnggPj0gdGhpcy54ICYmIHBvaW50LnggPD0gdGhpcy54ICsgdGhpcy53aWR0aCAmJiBwb2ludC55ID49IHRoaXMueSAmJiBwb2ludC55IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0XG4gICAgICAgID8gdHJ1ZVxuICAgICAgICA6IGZhbHNlO1xuICAgIHJldHVybiBoaXQ7XG4gIH1cblxuICBpbnRlcnNlY3RzKHJlY3QpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcmVjdC54ICsgcmVjdC53aWR0aCA+IHRoaXMueCAmJlxuICAgICAgcmVjdC55ICsgcmVjdC5oZWlnaHQgPiB0aGlzLnkgJiZcbiAgICAgIHJlY3QueCA8IHRoaXMueCArIHRoaXMud2lkdGggJiZcbiAgICAgIHJlY3QueSA8IHRoaXMueSArIHRoaXMuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGludGVyc2VjdChiKSB7XG4gICAgY29uc3QgYSA9IHRoaXM7XG4gICAgY29uc3QgeCA9IE1hdGgubWF4KGEueCwgYi54KTtcbiAgICBjb25zdCBudW0xID0gTWF0aC5taW4oYS54ICsgYS53aWR0aCwgYi54ICsgYi53aWR0aCk7XG4gICAgY29uc3QgeSA9IE1hdGgubWF4KGEueSwgYi55KTtcbiAgICBjb25zdCBudW0yID0gTWF0aC5taW4oYS55ICsgYS5oZWlnaHQsIGIueSArIGIuaGVpZ2h0KTtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmIChudW0xID49IHggJiYgbnVtMiA+PSB5KSB7XG4gICAgICByZXN1bHQgPSBuZXcgUmVjdGFuZ2xlKHgsIHksIG51bTEgLSB4LCBudW0yIC0geSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBSZWN0YW5nbGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGVxdWFscyhyZWN0KSB7XG4gICAgcmV0dXJuIHRoaXMueCA9PT0gcmVjdC54ICYmIHRoaXMueSA9PT0gcmVjdC55ICYmIHRoaXMud2lkdGggPT09IHJlY3Qud2lkdGggJiYgdGhpcy5oZWlnaHQgPT09IHJlY3QuaGVpZ2h0O1xuICB9XG5cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcbiAgfVxuXG4gIGNvcHlGcm9tKHJlY3QpIHtcbiAgICB0aGlzLnggPSByZWN0Lng7XG4gICAgdGhpcy55ID0gcmVjdC55O1xuICAgIHRoaXMud2lkdGggPSByZWN0LndpZHRoO1xuICAgIHRoaXMuaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gIH1cblxuICBnZXQgcG9zaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Bvc2l0aW9uO1xuICB9XG5cbiAgc2V0IHBvc2l0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fcG9zaXRpb24gPSB2YWx1ZTtcbiAgICB0aGlzLmNlbnRlci54ID0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5oYWxmU2l6ZS54O1xuICAgIHRoaXMuY2VudGVyLnkgPSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLmhhbGZTaXplLnk7XG4gIH1cblxuICBnZXQgc2l6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIHNldCBzaXplKHZhbHVlKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IGFyZWEoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2l6ZS54ICogdGhpcy5zaXplLnk7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tSZWN0YW5nbGUgeD0nICsgdGhpcy54ICsgJyB5PScgKyB0aGlzLnkgKyAnIHdpZHRoPScgKyB0aGlzLndpZHRoICsgJyBoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ10nO1xuICB9XG5cbiAgZ2V0IHdpZHRoVG9IZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMud2lkdGggLyB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBoZWlnaHRUb1dpZHRoKCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodCAvIHRoaXMud2lkdGg7XG4gIH1cblxuICBzY2FsZVdpZHRoKGhlaWdodCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCBoZWlnaHQgKiB0aGlzLndpZHRoVG9IZWlnaHQsIGhlaWdodCk7XG4gIH1cblxuICBzY2FsZUhlaWdodCh3aWR0aCkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB3aWR0aCwgd2lkdGggKiB0aGlzLmhlaWdodFRvV2lkdGgpO1xuICB9XG5cbiAgc2NhbGVUb0ZpbGxSZWN0KHJlY3QpIHtcbiAgICAvLyBsZXQgc2NhbGVkID0gdGhpcy5zY2FsZUhlaWdodChyZWN0LndpZHRoKTtcbiAgICAvL1xuICAgIC8vIGlmIChzY2FsZWQuaGVpZ2h0IDwgcmVjdC5oZWlnaHQpIHtcbiAgICAvLyBcdHNjYWxlZCA9IHRoaXMuc2NhbGVXaWR0aChyZWN0LmhlaWdodCk7XG4gICAgLy8gfVxuICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuZ2V0U2NhbGVUb0ZpbGwocmVjdCk7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoYW1vdW50LCBhbW91bnQpO1xuICB9XG5cbiAgc2NhbGVUb0ZpdFJlY3QocmVjdCkge1xuICAgIC8vIGxldCBzY2FsZWQgPSB0aGlzLnNjYWxlSGVpZ2h0KHJlY3Qud2lkdGgpO1xuICAgIC8vXG4gICAgLy8gaWYgKHNjYWxlZC5oZWlnaHQgPiByZWN0LmhlaWdodCkge1xuICAgIC8vIFx0c2NhbGVkID0gdGhpcy5zY2FsZVdpZHRoKHJlY3QuaGVpZ2h0KTtcbiAgICAvLyB9XG4gICAgLy8gc2NhbGVkLnggPSAocmVjdC53aWR0aCAtIHNjYWxlZC53aWR0aCkgLyAyO1xuICAgIC8vIHNjYWxlZC55ID0gKHJlY3QuaGVpZ2h0IC0gc2NhbGVkLmhlaWdodCkgLyAyO1xuICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuZ2V0U2NhbGVUb0ZpdFJlY3QocmVjdCk7XG4gICAgcmV0dXJuIHRoaXMuc2NhbGUoYW1vdW50LCBhbW91bnQpO1xuICB9XG5cbiAgc2NhbGUoeCwgeSkge1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoICogeCwgdGhpcy5oZWlnaHQgKiB5KTtcbiAgfVxuXG4gIHNjYWxlVG9BcmVhKGFyZWEpIHtcbiAgICBjb25zdCBoZWlnaHQgPSBNYXRoLnNxcnQoYXJlYSAvIHRoaXMud2lkdGhUb0hlaWdodCk7XG4gICAgY29uc3Qgd2lkdGggPSBhcmVhIC8gaGVpZ2h0O1xuICAgIHJldHVybiBuZXcgUmVjdGFuZ2xlKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuICB9XG5cbiAgZ2V0U2NhbGVUb0ZpbGwocmVjdCkge1xuICAgIGxldCBzY2FsZTtcbiAgICBpZiAodGhpcy53aWR0aFRvSGVpZ2h0ID4gcmVjdC53aWR0aFRvSGVpZ2h0KSB7XG4gICAgICBzY2FsZSA9IHJlY3QuaGVpZ2h0IC8gdGhpcy5oZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjYWxlID0gcmVjdC53aWR0aCAvIHRoaXMud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBzY2FsZTtcbiAgfVxuXG4gIGdldFNjYWxlVG9GaXRSZWN0KHJlY3QpIHtcbiAgICBsZXQgc2NhbGU7XG4gICAgaWYgKHRoaXMud2lkdGhUb0hlaWdodCA+IHJlY3Qud2lkdGhUb0hlaWdodCkge1xuICAgICAgc2NhbGUgPSByZWN0LndpZHRoIC8gdGhpcy53aWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NhbGUgPSByZWN0LmhlaWdodCAvIHRoaXMuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gc2NhbGU7XG4gIH1cblxuICBnZXQgaXNQb3J0cmFpdCgpIHtcbiAgICByZXR1cm4gdGhpcy53aWR0aCA8PSB0aGlzLmhlaWdodDtcbiAgfVxuXG4gIGdldCBpc0xhbmRzY2FwZSgpIHtcbiAgICByZXR1cm4gdGhpcy5oZWlnaHQgPD0gdGhpcy53aWR0aDtcbiAgfVxuXG4gIGdldCB0b3BMZWZ0KCkge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uO1xuICB9XG5cbiAgZ2V0IHRvcFJpZ2h0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgdGhpcy53aWR0aCwgdGhpcy55KTtcbiAgfVxuXG4gIGdldCBib3R0b21SaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQodGhpcy5zaXplKTtcbiAgfVxuXG4gIGdldCBib3R0b21MZWZ0KCkge1xuICAgIHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkgKyB0aGlzLmhlaWdodCk7XG4gIH1cblxuICBnZXRSYW5kb21Qb2ludCgpIHtcbiAgICBjb25zdCByYW5kb21TaXplID0gUG9pbnQucmFuZG9tKCk7XG4gICAgcmFuZG9tU2l6ZS54ICo9IHRoaXMuc2l6ZS54O1xuICAgIHJhbmRvbVNpemUueSAqPSB0aGlzLnNpemUueTtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi5hZGQocmFuZG9tU2l6ZSk7XG4gIH1cbn1cbiIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9nZW9tL1JlY3RhbmdsZSc7XG5pbXBvcnQgUG9pbnQgZnJvbSAnLi9nZW9tL1BvaW50JztcblxuZXhwb3J0IGxldCBpc01vYmlsZTtcbmlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICBpc01vYmlsZSA9IHtcbiAgICBhbmRyb2lkOiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9BbmRyb2lkL2kpID8gdHJ1ZSA6IGZhbHNlLFxuICAgIGJsYWNrQmVycnk6IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0JsYWNrQmVycnkvaSkgPyB0cnVlIDogZmFsc2UsXG4gICAgaU9TOiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUGhvbmV8aVBhZHxpUG9kL2kpID8gdHJ1ZSA6IGZhbHNlLFxuICAgIHdpbmRvd3M6IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0lFTW9iaWxlL2kpID8gdHJ1ZSA6IGZhbHNlLFxuICB9O1xuICBpc01vYmlsZS5hbnkgPSBpc01vYmlsZS5hbmRyb2lkIHx8IGlzTW9iaWxlLmJsYWNrQmVycnkgfHwgaXNNb2JpbGUuaU9TIHx8IGlzTW9iaWxlLndpbmRvd3M7XG59XG5cbmV4cG9ydCBsZXQgaXNUb3VjaDtcblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlzVG91Y2ggPSAnb250b3VjaGVuZCcgaW4gd2luZG93O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llKGNuYW1lKSB7XG4gIGNvbnN0IG5hbWUgPSBjbmFtZSArICc9JztcbiAgY29uc3QgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjID0gY2FbaV07XG4gICAgd2hpbGUgKGMuY2hhckF0KDApID09PSAnICcpIHtcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKTtcbiAgICB9XG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWUubGVuZ3RoLCBjLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiAnJztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgY29uc3Qgc3RyID0gW107XG4gIGZvciAoY29uc3QgcCBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHIuam9pbignJicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VhcmNoUGFyYW1zKHVybCwgZG9udERlY29kZVVSSSwgb2JqID0ge30pIHtcbiAgaWYgKCF1cmwpIHtcbiAgICB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgfVxuXG4gIGlmICh1cmwuaW5kZXhPZignPycpICE9PSAtMSkge1xuICAgIGNvbnN0IGhhc2hlcyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNsaWNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJz8nKSArIDEpLnNwbGl0KCcmJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IGhhc2hlc1tpXTtcbiAgICAgIGNvbnN0IGVxdWFsSW5kZXggPSBzdHJpbmcuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGVxdWFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBbXTtcbiAgICAgICAgLy9sZXQgaGFzaCA9IGhhc2hlc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICBoYXNoWzBdID0gc3RyaW5nLnN1YnN0cigwLCBlcXVhbEluZGV4KTtcbiAgICAgICAgaGFzaFsxXSA9IHN0cmluZy5zdWJzdHIoZXF1YWxJbmRleCArIDEpO1xuICAgICAgICBpZiAoZG9udERlY29kZVVSSSkge1xuICAgICAgICAgIG9ialtoYXNoWzBdXSA9IGhhc2hbMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqW2hhc2hbMF1dID0gZGVjb2RlVVJJKGhhc2hbMV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmpbc3RyaW5nXSA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWN0KCkge1xuICBjb25zdCByZWN0YW5nbGUgPSBuZXcgUmVjdGFuZ2xlKCk7XG4gIHJlY3RhbmdsZS53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICByZWN0YW5nbGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICByZXR1cm4gcmVjdGFuZ2xlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxUb0dsb2JhbChlbGVtZW50LCByb290LCBwb2ludCwgZGVidWcgPSBmYWxzZSkge1xuICBpZiAoIXBvaW50KSB7XG4gICAgcG9pbnQgPSBuZXcgUG9pbnQoKTtcbiAgfVxuICB3aGlsZSAoZWxlbWVudCAmJiBlbGVtZW50ICE9PSByb290KSB7XG4gICAgLy9wb2ludC54ICs9IGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQucGFyZW50Tm9kZS5zY3JvbGxMZWZ0O1xuICAgIC8vcG9pbnQueSArPSBlbGVtZW50Lm9mZnNldFRvcCAtIGVsZW1lbnQucGFyZW50Tm9kZS5zY3JvbGxUb3A7XG4gICAgaWYgKGRlYnVnKSB7XG4gICAgICBjb25zb2xlLmxvZygnbG9jYWxUb0dsb2JhbCBlbGVtZW50JywgZWxlbWVudC5ub2RlTmFtZSwgZWxlbWVudC5jbGFzc05hbWUsIGVsZW1lbnQub2Zmc2V0VG9wKTtcbiAgICB9XG4gICAgcG9pbnQueCArPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgcG9pbnQueSArPSBlbGVtZW50Lm9mZnNldFRvcDtcbiAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiBwb2ludDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvY2FsVG9HbG9iYWxYKGVsZW1lbnQsIHJvb3QsIHggPSAwLCBkZWJ1ZyA9IGZhbHNlKSB7XG4gIHdoaWxlIChlbGVtZW50ICE9PSByb290KSB7XG4gICAgLy8gaWYgKGRlYnVnKSB7XG4gICAgLy8gXHRjb25zb2xlLmxvZyhcImVsZW1lbnRcIiwgZWxlbWVudC5jbGFzc05hbWUsIGVsZW1lbnQub2Zmc2V0TGVmdCk7XG4gICAgLy8gfVxuICAgIHggKz0gZWxlbWVudC5vZmZzZXRMZWZ0O1xuICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gIH1cbiAgcmV0dXJuIHg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2NhbFRvR2xvYmFsWShlbGVtZW50LCByb290LCB5ID0gMCwgZGVidWcgPSBmYWxzZSkge1xuICB3aGlsZSAoZWxlbWVudCAhPT0gcm9vdCkge1xuICAgIC8vIGlmIChkZWJ1Zykge1xuICAgIC8vIFx0Y29uc29sZS5sb2coXCJlbGVtZW50XCIsIGVsZW1lbnQubm9kZU5hbWUsIGVsZW1lbnQuY2xhc3NOYW1lLCBlbGVtZW50Lm9mZnNldFRvcCk7XG4gICAgLy8gfVxuICAgIHkgKz0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4geTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1dlYkdMKCkge1xuICB0cnkge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgIHJldHVybiAhISh3aW5kb3cuV2ViR0xSZW5kZXJpbmdDb250ZXh0ICYmIChjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKSB8fCBjYW52YXMuZ2V0Q29udGV4dCgnZXhwZXJpbWVudGFsLXdlYmdsJykpKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNIaWRkZW4oKSB7XG4gIHJldHVybiBkb2N1bWVudFt3aW5kb3cuaGlkZGVuXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcmNlUHJvdG9jb2wodXJsLCBwcm90b2NvbCkge1xuICBjb25zdCBpc0h0dHBzID0gcHJvdG9jb2wuaW5kZXhPZignaHR0cHMnKSAhPT0gLTE7XG4gIGNvbnN0IHVybElzSHR0cHMgPSB1cmwuaW5kZXhPZignaHR0cHMnKSAhPT0gLTE7XG4gIGlmIChpc0h0dHBzICYmICF1cmxJc0h0dHBzKSB7XG4gICAgdXJsID0gdXJsLnNwbGl0KCdodHRwJykuam9pbignaHR0cHMnKTtcbiAgfSBlbHNlIGlmICghaXNIdHRwcyAmJiB1cmxJc0h0dHBzKSB7XG4gICAgdXJsID0gdXJsLnNwbGl0KCdodHRwcycpLmpvaW4oJ2h0dHAnKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsZUV4aXN0cyh1cmwpIHtcbiAgY29uc3QgcmVxID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gIHJlcS5vcGVuKCdIRUFEJywgdXJsLCBmYWxzZSk7XG4gIHJlcS5zZW5kKCk7XG4gIHJldHVybiByZXEuc3RhdHVzICE9PSA0MDQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50U2VsZWN0b3IoZWxlbWVudCkge1xuICBsZXQgbmFtZXMgPSBbXTtcbiAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICBsZXQgZWxTZWxlY3RvciA9IGVsZW1lbnQubm9kZU5hbWU7XG4gICAgY29uc3QgY2xhc3NOYW1lID0gZWxlbWVudC5jbGFzc05hbWU7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgZWxTZWxlY3RvciA9IGVsU2VsZWN0b3IgKyAnLicgKyBjbGFzc05hbWUuc3BsaXQoJyAnKS5qb2luKCcuJyk7XG4gICAgfVxuICAgIG5hbWVzLnB1c2goZWxTZWxlY3Rvcik7XG4gICAgaWYgKGVsZW1lbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuICBuYW1lcyA9IG5hbWVzLnJldmVyc2UoKTtcbiAgY29uc3Qgc2VsZWN0b3IgPSBuYW1lcy5qb2luKCcgPiAnKTtcbiAgcmV0dXJuIHNlbGVjdG9yO1xufVxuIiwiaW1wb3J0IHsgaXNUb3VjaCB9IGZyb20gJy4vd2luZG93JztcblxuZXhwb3J0IGNvbnN0IGV2ZW50cyA9IHtcbiAgbW91c2VvdmVyOiAnbW91c2VvdmVyJyxcbiAgbW91c2VvdXQ6ICdtb3VzZW91dCcsXG4gIG1vdXNlZG93bjogJ21vdXNlZG93bicsXG4gIG1vdXNldXA6ICdtb3VzZXVwJyxcbiAgbW91c2Vtb3ZlOiAnbW91c2Vtb3ZlJyxcbiAgY2xpY2s6ICdjbGljaycsXG4gIHRyYW5zaXRpb25lbmQ6ICd0cmFuc2l0aW9uZW5kJyxcbiAgYW5pbWF0aW9uc3RhcnQ6ICdhbmltYXRpb25zdGFydCcsXG4gIGFuaW1hdGlvbml0ZXJhdGlvbjogJ2FuaW1hdGlvbml0ZXJhdGlvbicsXG4gIGFuaW1hdGlvbmVuZDogJ2FuaW1hdGlvbmVuZCcsXG59O1xuXG5pZiAoaXNUb3VjaCkge1xuICBldmVudHMubW91c2VvdmVyID0gJ3RvdWNoc3RhcnQnO1xuICBldmVudHMubW91c2VvdXQgPSAndG91Y2hlbmQnO1xuICBldmVudHMubW91c2Vkb3duID0gJ3RvdWNoc3RhcnQnO1xuICBldmVudHMubW91c2V1cCA9ICd0b3VjaGVuZCc7XG4gIGV2ZW50cy5tb3VzZW1vdmUgPSAndG91Y2htb3ZlJztcbiAgZXZlbnRzLmNsaWNrID0gJ2NsaWNrJztcbn1cblxuY29uc3QgcGxhdGZvcm1zID0ge1xuICBPVHJhbnNpdGlvbjoge1xuICAgIHRyYW5zaXRpb25lbmQ6ICdvdHJhbnNpdGlvbmVuZCcsXG4gICAgYW5pbWF0aW9uc3RhcnQ6ICdvYW5pbWF0aW9uc3RhcnQnLFxuICAgIGFuaW1hdGlvbml0ZXJhdGlvbjogJ29hbmltYXRpb25pdGVyYXRpb24nLFxuICAgIGFuaW1hdGlvbmVuZDogJ29hbmltYXRpb25lbmQnLFxuICB9LFxuICBNb3pUcmFuc2l0aW9uOiB7XG4gICAgdHJhbnNpdGlvbmVuZDogJ3RyYW5zaXRpb25lbmQnLFxuICAgIGFuaW1hdGlvbnN0YXJ0OiAnbW96bmltYXRpb25zdGFydCcsXG4gICAgYW5pbWF0aW9uaXRlcmF0aW9uOiAnbW96bmltYXRpb25pdGVyYXRpb24nLFxuICAgIGFuaW1hdGlvbmVuZDogJ21vem5pbWF0aW9uZW5kJyxcbiAgfSxcbiAgV2Via2l0VHJhbnNpdGlvbjoge1xuICAgIHRyYW5zaXRpb25lbmQ6ICd3ZWJraXRUcmFuc2l0aW9uRW5kJyxcbiAgICBhbmltYXRpb25zdGFydDogJ3dlYmtpdEFuaW1hdGlvblN0YXJ0JyxcbiAgICBhbmltYXRpb25pdGVyYXRpb246ICd3ZWJraXRBbmltYXRpb25JdGVyYXRpb24nLFxuICAgIGFuaW1hdGlvbmVuZDogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gIH0sXG59O1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yIChjb25zdCBpIGluIHBsYXRmb3Jtcykge1xuICAgICAgY29uc3QgZGF0YSA9IHBsYXRmb3Jtc1tpXTtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnRzLnRyYW5zaXRpb25lbmQgPSBkYXRhLnRyYW5zaXRpb25lbmQ7XG4gICAgICAgIGV2ZW50cy5hbmltYXRpb25zdGFydCA9IGRhdGEuYW5pbWF0aW9uc3RhcnQ7XG4gICAgICAgIGV2ZW50cy5hbmltYXRpb25pdGVyYXRpb24gPSBkYXRhLmFuaW1hdGlvbml0ZXJhdGlvbjtcbiAgICAgICAgZXZlbnRzLmFuaW1hdGlvbmVuZCA9IGRhdGEuYW5pbWF0aW9uZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudCh0eXBlLCBwYXJhbXMpIHtcbiAgbGV0IGV2ZW50O1xuICB0cnkge1xuICAgIGV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQodHlwZSwgcGFyYW1zLmJ1YmJsZXMsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuZGV0YWlsKTtcbiAgfVxuICByZXR1cm4gZXZlbnQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2VFdmVudCBleHRlbmRzIEV2ZW50IHtcbiAgY29uc3RydWN0b3IodHlwZSwgZGF0YSwgZXZlbnRJbml0KSB7XG4gICAgc3VwZXIodHlwZSwgZXZlbnRJbml0KTtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICB9XG59XG4iLCJpbXBvcnQgQmFzZUV2ZW50IGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlRXZlbnQgZXh0ZW5kcyBCYXNlRXZlbnQge1xuICBzdGF0aWMgZGlzcGF0Y2goZXZlbnRUYXJnZXQsIHR5cGUsIHZhbHVlKSB7XG4gICAgZXZlbnRUYXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ2hhbmdlRXZlbnQodHlwZSwgdmFsdWUpKTtcbiAgfVxufVxuIiwiaW1wb3J0IENoYW5nZUV2ZW50IGZyb20gJy4uL0NoYW5nZUV2ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YSBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUgfHwgdGhpcy5mb3JjZUNoYW5nZUV2ZW50KSB7XG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgICAgQ2hhbmdlRXZlbnQuZGlzcGF0Y2godGhpcywgJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQodmFsdWUpIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ0RhdGEudG9TdHJpbmcnLCB0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIGRlc2VyaWFsaXplKHZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgY29weShkYXRhKSB7XG4gICAgdGhpcy52YWx1ZSA9IGRhdGEudmFsdWU7XG4gICAgQ2hhbmdlRXZlbnQuZGlzcGF0Y2godGhpcywgJ3ZhbHVlJywgdGhpcy52YWx1ZSk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIHJldHVybiBzdXBlci5kZXN0cm95KCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IENIQU5HRSgpIHtcbiAgICByZXR1cm4gJ3ZhbHVlJztcbiAgfVxufVxuIiwiaW1wb3J0IERhdGEgZnJvbSAnLi9EYXRhJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0YVByaW1pdGl2ZSBleHRlbmRzIERhdGEge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSwgbW9kaWZpZXJzID0gW10pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubW9kaWZpZXJzID0gbW9kaWZpZXJzO1xuICAgIHRoaXMubGVuZ3RoID0gbmV3IERhdGEoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm1vZGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbW9kaWZpZXIgPSB0aGlzLm1vZGlmaWVyc1tpXTtcbiAgICAgIGlmIChtb2RpZmllcikge1xuICAgICAgICB2YWx1ZSA9IG1vZGlmaWVyKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3VwZXIudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmxlbmd0aC52YWx1ZSA9IE1hdGgubWF4KDEsIHRoaXMudmFsdWUudG9TdHJpbmcoKS5sZW5ndGgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLm1vZGlmaWVycyA9IFtdO1xuICAgIGlmICh0aGlzLnZhbGlkYXRpb24pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbi5kZXN0cm95KCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGNvbnRpbnVlIHJlZ2FyZGxlc3Mgb2YgZXJyb3JcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy52YWxpZGF0aW9uID0gbnVsbDtcbiAgICByZXR1cm4gc3VwZXIuZGVzdHJveSgpO1xuICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGUoc3RyaW5nLCBtYXhMZW5ndGgsIGFkZEFmdGVyID0gJycpIHtcbiAgaWYgKHN0cmluZy5sZW5ndGggPiBtYXhMZW5ndGgpIHtcbiAgICBzdHJpbmcgPSBzdHJpbmcuc3Vic3RyKDAsIG1heExlbmd0aCAtIGFkZEFmdGVyLmxlbmd0aCkgKyBhZGRBZnRlcjtcbiAgfVxuICByZXR1cm4gc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XG4gIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhcGl0YWxpemUoc3RyaW5nKSB7XG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0xlbmd0aE1pbmltdW0xKHN0cmluZykge1xuICByZXR1cm4gc3RyaW5nLmxlbmd0aCA+IDA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib29saWZ5KHZhbHVlID0gZmFsc2UpIHtcbiAgcmV0dXJuIFsndHJ1ZScsICcxJywgJ3llcycsICd5JywgJ29uJ10uaW5kZXhPZihTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCkpICE9PSAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNlcmlhbGl6ZShvYmopIHtcbiAgY29uc3Qgc3RyID0gW107XG4gIGZvciAoY29uc3QgcCBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICBzdHIucHVzaChlbmNvZGVVUklDb21wb25lbnQocCkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQob2JqW3BdKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBzdHIuam9pbignJicpO1xufVxuIiwiaW1wb3J0IERhdGFQcmltaXRpdmUgZnJvbSAnLi9EYXRhUHJpbWl0aXZlJztcbmltcG9ydCB7IGJvb2xpZnkgfSBmcm9tICcuLi91dGlscy9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29sZWFuRGF0YSBleHRlbmRzIERhdGFQcmltaXRpdmUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9IGZhbHNlLCBtb2RpZmllcnMgPSBbXSkge1xuICAgIHN1cGVyKHZhbHVlLCBtb2RpZmllcnMpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiBzdXBlci52YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZSA9IGZhbHNlKSB7XG4gICAgc3VwZXIudmFsdWUgPSBib29saWZ5KHZhbHVlKTtcbiAgfVxuXG4gIHJlc2V0KHZhbHVlID0gZmFsc2UpIHtcbiAgICBzdXBlci5yZXNldCh2YWx1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCBEYXRhUHJpbWl0aXZlIGZyb20gJy4vRGF0YVByaW1pdGl2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlckRhdGEgZXh0ZW5kcyBEYXRhUHJpbWl0aXZlIHtcbiAgY29uc3RydWN0b3IodmFsdWUgPSBOYU4sIG1vZGlmaWVycyA9IFtdKSB7XG4gICAgc3VwZXIodmFsdWUsIG1vZGlmaWVycyk7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHN1cGVyLnZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlID0gTmFOKSB7XG4gICAgc3VwZXIudmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgcmVzZXQodmFsdWUgPSAwKSB7XG4gICAgc3VwZXIucmVzZXQodmFsdWUpO1xuICB9XG5cbiAgYWRkKHZhbHVlID0gMSkge1xuICAgIHRoaXMudmFsdWUgKz0gdmFsdWU7XG4gIH1cblxuICBzdWJ0cmFjdCh2YWx1ZSA9IDEpIHtcbiAgICB0aGlzLnZhbHVlIC09IHZhbHVlO1xuICB9XG59XG4iLCJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuaW1wb3J0IEJvb2xlYW5EYXRhIGZyb20gJy4vQm9vbGVhbkRhdGEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYmplY3REYXRhIGV4dGVuZHMgRGF0YSB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5mb3JjZUNoYW5nZUV2ZW50ID0gZmFsc2U7XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xuICAgICAgdGhpcy5fZGVzZWxlY3RWYWx1ZSh0aGlzLl92YWx1ZSk7XG4gICAgICB0aGlzLl9zZWxlY3RWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICAgIHN1cGVyLnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgX2Rlc2VsZWN0VmFsdWUoZGF0YSkge1xuICAgIGlmIChkYXRhKSB7XG4gICAgICBpZiAoZGF0YS5pc1NlbGVjdGVkKSB7XG4gICAgICAgIGlmIChkYXRhLmlzU2VsZWN0ZWQgaW5zdGFuY2VvZiBCb29sZWFuRGF0YSkge1xuICAgICAgICAgIGRhdGEuaXNTZWxlY3RlZC52YWx1ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdFZhbHVlKGRhdGEpIHtcbiAgICBpZiAoZGF0YSkge1xuICAgICAgaWYgKGRhdGEuaXNTZWxlY3RlZCkge1xuICAgICAgICBpZiAoZGF0YS5pc1NlbGVjdGVkIGluc3RhbmNlb2YgQm9vbGVhbkRhdGEpIHtcbiAgICAgICAgICBkYXRhLmlzU2VsZWN0ZWQudmFsdWUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgRGF0YSBmcm9tICcuL0RhdGEnO1xuaW1wb3J0IE51bWJlckRhdGEgZnJvbSAnLi9OdW1iZXJEYXRhJztcbmltcG9ydCBPYmplY3REYXRhIGZyb20gJy4vT2JqZWN0RGF0YSc7XG5pbXBvcnQgQmFzZUV2ZW50IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQgQ2hhbmdlRXZlbnQgZnJvbSAnLi4vQ2hhbmdlRXZlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcnJheURhdGEgZXh0ZW5kcyBEYXRhIHtcbiAgc3RhdGljIGdldCBJVEVNX0NIQU5HRSgpIHtcbiAgICByZXR1cm4gJ2l0ZW0tY2hhbmdlJztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLmRhdGFJdGVtQ2hhbmdlSGFuZGxlciA9IHRoaXMuZGF0YUl0ZW1DaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2UgPSB0aGlzLnNlbGVjdGVkSXRlbUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZSA9IHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5sYXN0SW5kZXggPSBuZXcgTnVtYmVyRGF0YSgpO1xuICAgIHRoaXMubGVuZ3RoID0gbmV3IE51bWJlckRhdGEoKTtcbiAgICB0aGlzLmxlbmd0aC5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCAoKSA9PiB7XG4gICAgICB0aGlzLmxhc3RJbmRleC52YWx1ZSA9IHRoaXMubGVuZ3RoLnZhbHVlIC0gMTtcbiAgICB9KTtcbiAgICB0aGlzLmxlbmd0aC52YWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgdGhpcy5fdmFsdWUgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG5ldyBPYmplY3REYXRhKCk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5zZWxlY3RlZEl0ZW1DaGFuZ2UpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IG5ldyBOdW1iZXJEYXRhKCk7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4LmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZSk7XG4gICAgdGhpcy5uZXh0SW5kZXggPSBuZXcgTnVtYmVyRGF0YSgpO1xuICAgIHRoaXMucHJldkluZGV4ID0gbmV3IE51bWJlckRhdGEoKTtcbiAgICB0aGlzLmRhdGFDbGFzcyA9IE9iamVjdDtcbiAgICB0aGlzLnB1c2guYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNlbGVjdGVkSXRlbUNoYW5nZShldmVudCkge1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJbmRleCgpO1xuICAgIHRoaXMuc2V0U2VsZWN0ZWREYXRhKHRoaXMuc2VsZWN0ZWRJdGVtLnZhbHVlKTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkSW5kZXgoKSB7XG4gICAgdGhpcy5zZWxlY3RlZEluZGV4LnJlbW92ZUV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZSk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLnZhbHVlLmluZGV4T2YodGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUpO1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleC52YWx1ZSA9IGluZGV4O1xuICAgIHRoaXMuc2VsZWN0ZWRJbmRleC5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UpO1xuICB9XG5cbiAgc2V0U2VsZWN0ZWREYXRhKHZhbHVlKSB7XG4gICAgaWYgKHRoaXMucHJldmlvdXNTZWxlY3RlZEl0ZW0pIHtcbiAgICAgIGlmICh0aGlzLnByZXZpb3VzU2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWRJdGVtIGluc3RhbmNlb2YgRGF0YSkge1xuICAgICAgICB0aGlzLnByZXZpb3VzU2VsZWN0ZWRJdGVtLmlzU2VsZWN0ZWRJdGVtLnZhbHVlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLnNlbGVjdGVkRGF0YSkge1xuICAgICAgdGhpcy5zZWxlY3RlZERhdGEuY29weSh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNTZWxlY3RlZEl0ZW0gPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5wcmV2aW91c1NlbGVjdGVkSXRlbSkge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNTZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZEl0ZW0gaW5zdGFuY2VvZiBEYXRhKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNTZWxlY3RlZEl0ZW0uaXNTZWxlY3RlZEl0ZW0udmFsdWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWxlY3RlZEluZGV4LnZhbHVlO1xuXG4gICAgbGV0IG5leHRJbmRleCA9IGluZGV4ICsgMTtcbiAgICBpZiAobmV4dEluZGV4ID4gdGhpcy52YWx1ZS5sZW5ndGggLSAxKSB7XG4gICAgICBuZXh0SW5kZXggPSAwO1xuICAgIH1cbiAgICB0aGlzLm5leHRJbmRleC52YWx1ZSA9IG5leHRJbmRleDtcbiAgICBpZiAodGhpcy5uZXh0RGF0YSkge1xuICAgICAgdGhpcy5uZXh0RGF0YS5jb3B5KHRoaXMudmFsdWVbdGhpcy5uZXh0SW5kZXgudmFsdWVdKTtcbiAgICB9XG5cbiAgICBsZXQgcHJldkluZGV4ID0gaW5kZXggLSAxO1xuICAgIGlmIChwcmV2SW5kZXggPCAwKSB7XG4gICAgICBwcmV2SW5kZXggPSB0aGlzLnZhbHVlLmxlbmd0aCAtIDE7XG4gICAgfVxuICAgIHRoaXMucHJldkluZGV4LnZhbHVlID0gcHJldkluZGV4O1xuICAgIGlmICh0aGlzLnByZXZEYXRhKSB7XG4gICAgICB0aGlzLnByZXZEYXRhLmNvcHkodGhpcy52YWx1ZVt0aGlzLnByZXZJbmRleC52YWx1ZV0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdGVkSW5kZXhDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleC52YWx1ZTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLnNlbGVjdGVkSXRlbUNoYW5nZSk7XG4gICAgdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSB0aGlzLnZhbHVlW2luZGV4XTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbS5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLnNlbGVjdGVkSXRlbUNoYW5nZSk7XG4gICAgdGhpcy5zZXRTZWxlY3RlZERhdGEodGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3BsaWNlKDAsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIGRhdGFJdGVtQ2hhbmdlSGFuZGxlcihlKSB7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQmFzZUV2ZW50KEFycmF5RGF0YS5JVEVNX0NIQU5HRSwgdGhpcy52YWx1ZSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgfVxuXG4gIGl0ZW0oaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWVbaW5kZXhdO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZSkge1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHZhbHVlID0gW107XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qgb2xkSXRlbSA9IHRoaXMuX3ZhbHVlW2ldO1xuICAgICAgaWYgKG9sZEl0ZW0gaW5zdGFuY2VvZiBEYXRhKSB7XG4gICAgICAgIG9sZEl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5kYXRhSXRlbUNoYW5nZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBhcmdzID0gWzAsIHRoaXMudmFsdWUubGVuZ3RoXS5jb25jYXQodmFsdWUpO1xuICAgIHRoaXMuc3BsaWNlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIC8vIHRoaXMuc3BsaWNlKDAsIHRoaXMudmFsdWUubGVuZ3RoKTtcbiAgICAvLyB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX3ZhbHVlW2ldO1xuICAgICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBEYXRhKSB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5kYXRhSXRlbUNoYW5nZUhhbmRsZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxlbmd0aC52YWx1ZSA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcblxuICAgIENoYW5nZUV2ZW50LmRpc3BhdGNoKHRoaXMsICd2YWx1ZScsIHRoaXMudmFsdWUpO1xuICAgIHRoaXMuZGF0YUl0ZW1DaGFuZ2VIYW5kbGVyKG51bGwpO1xuXG4gICAgaWYgKHRoaXMuaW5jbHVkZXModGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSW5kZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGluZGV4T2Yoc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLmluZGV4T2Yoc2VhcmNoRWxlbWVudCwgZnJvbUluZGV4KTtcbiAgfVxuXG4gIG1hcChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5tYXAoY2FsbGJhY2spO1xuICB9XG5cbiAgZmluZChjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5maW5kKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZpbmRCeUtleShrZXksIHZhbHVlKSB7XG4gICAgY29uc3Qgc2VsZWN0ZWQgPSB0aGlzLmZpbmQoKGVsZW1lbnQpID0+IHtcbiAgICAgIHJldHVybiBlbGVtZW50W2tleV0udG9TdHJpbmcoKSA9PT0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gIH1cblxuICBmaWx0ZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWUuZmlsdGVyKGNhbGxiYWNrKTtcbiAgfVxuXG4gIHBvcCgpIHtcbiAgICBjb25zdCBpdGVtID0gdGhpcy5fdmFsdWUucG9wKCk7XG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBEYXRhKSB7XG4gICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZGF0YUl0ZW1DaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5sZW5ndGgudmFsdWUgPSB0aGlzLl92YWx1ZS5sZW5ndGg7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQmFzZUV2ZW50KCdyZW1vdmUnLCB7XG4gICAgICB2YWx1ZTogW2l0ZW1dLFxuICAgICAgaW5kZXg6IHRoaXMudmFsdWUubGVuZ3RoLFxuICAgICAgdG90YWw6IDEsXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBpZiAoaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEluZGV4KCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgcHVzaCgpIHtcbiAgICBjb25zdCBwcmV2aW91c0xlbmd0aCA9IHRoaXMudmFsdWUubGVuZ3RoO1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuX3ZhbHVlLnB1c2guYXBwbHkodGhpcy5fdmFsdWUsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5sZW5ndGgudmFsdWUgPSBsZW5ndGg7XG4gICAgY29uc3QgYWRkZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYWRkZWQucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gYWRkZWRbaV07XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIERhdGEpIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRhdGFJdGVtQ2hhbmdlSGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBCYXNlRXZlbnQoJ2FkZCcsIHtcbiAgICAgICAgdmFsdWU6IGFkZGVkLFxuICAgICAgICBpbmRleDogcHJldmlvdXNMZW5ndGgsXG4gICAgICAgIHRvdGFsOiBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gbGVuZ3RoO1xuICB9XG5cbiAgcmV2ZXJzZSgpIHtcbiAgICB0aGlzLl92YWx1ZS5yZXZlcnNlKCk7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQmFzZUV2ZW50KCdyZXZlcnNlJywgeyB2YWx1ZTogdGhpcy5fdmFsdWUgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSW5kZXgoKTtcbiAgfVxuXG4gIHNoaWZ0KCkge1xuICAgIGNvbnN0IGl0ZW0gPSB0aGlzLl92YWx1ZS5zaGlmdCgpO1xuICAgIGlmIChpdGVtIGluc3RhbmNlb2YgRGF0YSkge1xuICAgICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRhdGFJdGVtQ2hhbmdlSGFuZGxlcik7XG4gICAgfVxuICAgIHRoaXMubGVuZ3RoLnZhbHVlID0gdGhpcy5fdmFsdWUubGVuZ3RoO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEJhc2VFdmVudCgncmVtb3ZlJywge1xuICAgICAgdmFsdWU6IFtpdGVtXSxcbiAgICAgIGluZGV4OiAwLFxuICAgICAgdG90YWw6IDEsXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICBpZiAoaXRlbSA9PT0gdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtLnZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZEluZGV4KCk7XG4gICAgfVxuICAgIHJldHVybiBpdGVtO1xuICB9XG5cbiAgc3dhcChpbmRleF9BLCBpbmRleF9CKSB7XG4gICAgY29uc3QgdGVtcCA9IHRoaXMuX3ZhbHVlW2luZGV4X0FdO1xuICAgIHRoaXMuX3ZhbHVlW2luZGV4X0FdID0gdGhpcy5fdmFsdWVbaW5kZXhfQl07XG4gICAgdGhpcy5fdmFsdWVbaW5kZXhfQl0gPSB0ZW1wO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEJhc2VFdmVudCgnc29ydCcsIHsgdmFsdWU6IHRoaXMuX3ZhbHVlIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZEluZGV4KCk7XG4gIH1cblxuICBzb3J0KGNvbXBhcmVGdW5jdGlvbikge1xuICAgIHRoaXMuX3ZhbHVlLnNvcnQoY29tcGFyZUZ1bmN0aW9uKTtcbiAgICBjb25zdCBldmVudCA9IG5ldyBCYXNlRXZlbnQoJ3NvcnQnLCB7IHZhbHVlOiB0aGlzLl92YWx1ZSB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJbmRleCgpO1xuICB9XG5cbiAgc3BsaWNlKCkge1xuICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5fdmFsdWUuc3BsaWNlLmFwcGx5KHRoaXMuX3ZhbHVlLCBhcmd1bWVudHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGl0ZW0gPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgRGF0YSkge1xuICAgICAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZGF0YUl0ZW1DaGFuZ2VIYW5kbGVyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgYWRkZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYWRkZWQucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICB0aGlzLmxlbmd0aC52YWx1ZSA9IHRoaXMuX3ZhbHVlLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gYWRkZWRbaV07XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIERhdGEpIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRhdGFJdGVtQ2hhbmdlSGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGluZGV4ID0gYXJndW1lbnRzWzBdO1xuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBCYXNlRXZlbnQoJ3JlbW92ZScsIHtcbiAgICAgICAgdmFsdWU6IGVsZW1lbnRzLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHRvdGFsOiBlbGVtZW50cy5sZW5ndGgsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuICAgIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBCYXNlRXZlbnQoJ2FkZCcsIHtcbiAgICAgICAgdmFsdWU6IGFkZGVkLFxuICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgIHRvdGFsOiBhZGRlZC5sZW5ndGgsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuICAgIC8vIGlmIChlbGVtZW50cy5sZW5ndGggPiAwIHx8IGFkZGVkLmxlbmd0aCA+IDApIHtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMuaW5jbHVkZXModGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkSW5kZXgoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cblxuICByZW1vdmUoZWxlbWVudCkge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5pbmRleE9mKGVsZW1lbnQpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICB1bnNoaWZ0KCkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuX3ZhbHVlLnVuc2hpZnQuYXBwbHkodGhpcy5fdmFsdWUsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5sZW5ndGgudmFsdWUgPSBsZW5ndGg7XG4gICAgY29uc3QgYWRkZWQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgYWRkZWQucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFkZGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBpdGVtID0gYWRkZWRbaV07XG4gICAgICBpZiAoaXRlbSBpbnN0YW5jZW9mIERhdGEpIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRhdGFJdGVtQ2hhbmdlSGFuZGxlcik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhZGRlZC5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBCYXNlRXZlbnQoJ2FkZCcsIHtcbiAgICAgICAgdmFsdWU6IGFkZGVkLFxuICAgICAgICBpbmRleDogMCxcbiAgICAgICAgdG90YWw6IGFyZ3VtZW50cy5sZW5ndGgsXG4gICAgICB9KTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRJbmRleCgpO1xuICAgIHJldHVybiBsZW5ndGg7XG4gIH1cblxuICBpbmNsdWRlcyhlbGVtZW50KSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmluZGV4T2YoZWxlbWVudCk7XG4gICAgcmV0dXJuIGluZGV4ICE9PSAtMTtcbiAgfVxuXG4gIGpvaW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLmpvaW4uYXBwbHkodGhpcy5fdmFsdWUsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBjb25jYXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlLmNvbmNhdC5hcHBseSh0aGlzLl92YWx1ZSwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNsaWNlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZS5zbGljZS5hcHBseSh0aGlzLl92YWx1ZSwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHNlcmlhbGl6ZSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaCgob2JqKSA9PiB7XG4gICAgICBhcnJheS5wdXNoKG9iai5zZXJpYWxpemUoKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9XG5cbiAgZGVzZXJpYWxpemUoZGF0YSkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgZGF0YS5mb3JFYWNoKChvYmopID0+IHtcbiAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IHRoaXMuZGF0YUNsYXNzKCk7XG4gICAgICBpbnN0YW5jZS5kZXNlcmlhbGl6ZShvYmopO1xuICAgICAgYXJyYXkucHVzaChpbnN0YW5jZSk7XG4gICAgfSk7XG4gICAgdGhpcy52YWx1ZSA9IGFycmF5O1xuICB9XG5cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUudG9TdHJpbmcoKTtcbiAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGF3YWl0RXZlbnQoZGlzcGF0Y2hlciwgZXZlbnROYW1lLCBzdG9wUHJvcGFnYXRpb24sIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiwgcHJldmVudERlZmF1bHQpIHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKHN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgICBpZiAoc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikge1xuICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cbiAgICAgIGlmIChwcmV2ZW50RGVmYXVsdCAmJiBldmVudC5wcmV2ZW50RGVmYXVsdCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgICAgZGlzcGF0Y2hlci5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcbiAgICAgIHJlc29sdmUoZXZlbnQpO1xuICAgIH07XG5cbiAgICBkaXNwYXRjaGVyLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBldmVudEhhbmRsZXIpO1xuICB9KTtcblxuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF3YWl0VHJhbnNpdGlvbihkaXNwYXRjaGVyLCBjc3NQcm9wZXJ0aWVzKSB7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IGV2ZW50TmFtZSA9ICd0cmFuc2l0aW9uZW5kJztcbiAgICBjb25zdCBldmVudE5hbWVzID0ge1xuICAgICAgT1RyYW5zaXRpb246ICdvdHJhbnNpdGlvbmVuZCcsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IGkgaW4gZXZlbnROYW1lcykge1xuICAgICAgaWYgKGRvY3VtZW50LmJvZHkuc3R5bGVbaV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudE5hbWUgPSBldmVudE5hbWVzW2ldO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgbGV0IGlzUHJvcGVydHk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNzc1Byb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvcCA9IGNzc1Byb3BlcnRpZXNbaV07XG4gICAgICAgIGlmIChwcm9wID09PSBldmVudC5wcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICBpc1Byb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCFpc1Byb3BlcnR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgLy9ldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIC8vZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpc3BhdGNoZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG4gICAgICByZXNvbHZlKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhd2FpdEFuaW1hdGlvbihkaXNwYXRjaGVyLCBhbmltYXRpb25OYW1lKSB7XG4gIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgbGV0IGV2ZW50TmFtZSA9ICdhbmltYXRpb25lbmQnO1xuICAgIGNvbnN0IGV2ZW50TmFtZXMgPSB7XG4gICAgICBPVHJhbnNpdGlvbjogJ29hbmltYXRpb25lbmQnLFxuICAgICAgTW96VHJhbnNpdGlvbjogJ21vem5pbWF0aW9uZW5kJyxcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICd3ZWJraXRBbmltYXRpb25FbmQnLFxuICAgIH07XG4gICAgZm9yIChjb25zdCBpIGluIGV2ZW50TmFtZXMpIHtcbiAgICAgIGlmIChkb2N1bWVudC5ib2R5LnN0eWxlW2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnROYW1lID0gZXZlbnROYW1lc1tpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBldmVudEhhbmRsZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIGlmIChhbmltYXRpb25OYW1lICE9PSBldmVudC5hbmltYXRpb25OYW1lIHx8IGRpc3BhdGNoZXIgIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGRpc3BhdGNoZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50SGFuZGxlcik7XG4gICAgICByZXNvbHZlKGV2ZW50KTtcbiAgICB9O1xuXG4gICAgZGlzcGF0Y2hlci5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRIYW5kbGVyKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhd2FpdFRpbWVvdXQoc2Vjb25kcyA9IDApIHtcbiAgaWYgKGlzTmFOKHNlY29uZHMpIHx8IHNlY29uZHMgPD0gMCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0sIHNlY29uZHMgKiAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXdhaXRDYWxsYmFjayh0YXJnZXQsIG1ldGhvZCkge1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHRhcmdldFttZXRob2RdID0gKCkgPT4ge1xuICAgICAgZGVsZXRlIHRhcmdldFttZXRob2RdO1xuICAgICAgcmVzb2x2ZShhcmd1bWVudHMpO1xuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF3YWl0QW5pbWF0aW9uRnJhbWUodG90YWwgPSAxKSB7XG4gIHRvdGFsID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCh0b3RhbCkpO1xuICBsZXQgY291bnQgPSAwO1xuICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGFuaW1hdGlvbkZyYW1lKCkge1xuICAgICAgY291bnQrKztcbiAgICAgIGlmIChjb3VudCA+PSB0b3RhbCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZSk7XG4gIH0pO1xuICByZXR1cm4gcHJvbWlzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGF3YWl0VmlkZW9GaXJzdEZyYW1lKHZpZGVvLCB0aW1lb3V0ID0gNTAwMCwgZGVidWcpIHtcbiAgY29uc3QgbG9hZGVkbWV0YWRhdGEgPSBhd2FpdEV2ZW50KHZpZGVvLCAnbG9hZGVkbWV0YWRhdGEnKTtcbiAgLy8gY29uc3QgbG9hZGVkbWV0YWRhdGFUaW1lb3V0ID0gYXdhaXRUaW1lb3V0KHRpbWVvdXQpO1xuICBjb25zdCBwcm9taXNlID0gUHJvbWlzZS5yYWNlKFtsb2FkZWRtZXRhZGF0YV0pO1xuICByZXR1cm4gcHJvbWlzZS50aGVuKChldmVudCkgPT4ge1xuICAgIGlmIChkZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ2xvYWRlZG1ldGFkYXRhJyk7XG4gICAgfVxuICAgIGNvbnN0IGxvYWRlZGRhdGFQcm9taXNlID0gYXdhaXRFdmVudCh2aWRlbywgJ2xvYWRlZGRhdGEnKTtcbiAgICBsZXQgcGxheVByb21pc2UgPSB2aWRlby5wbGF5KCk7XG4gICAgaWYgKCFwbGF5UHJvbWlzZSkge1xuICAgICAgcGxheVByb21pc2UgPSBsb2FkZWRkYXRhUHJvbWlzZTtcbiAgICB9XG4gICAgLy8gY29uc3QgcGxheVByb21pc2VUaW1lb3V0ID0gYXdhaXRUaW1lb3V0KHRpbWVvdXQpO1xuICAgIGNvbnN0IHByb21pc2UgPSBQcm9taXNlLnJhY2UoW3BsYXlQcm9taXNlXSk7XG4gICAgcmV0dXJuIHByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICBpZiAoZGVidWcpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BsYXlQcm9taXNlIG9yIGxvYWRlZGRhdGEnKTtcbiAgICAgIH1cbiAgICAgIHZpZGVvLnBhdXNlKCk7XG4gICAgICByZXR1cm4gdmlkZW87XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IERhdGFQcmltaXRpdmUgZnJvbSAnLi9EYXRhUHJpbWl0aXZlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nRGF0YSBleHRlbmRzIERhdGFQcmltaXRpdmUge1xuICBjb25zdHJ1Y3Rvcih2YWx1ZSA9ICcnLCBtb2RpZmllcnMgPSBbXSkge1xuICAgIHN1cGVyKHZhbHVlLCBtb2RpZmllcnMpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCkge1xuICAgIHJldHVybiBzdXBlci52YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZSA9ICcnKSB7XG4gICAgc3VwZXIudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICB9XG5cbiAgcmVzZXQodmFsdWUgPSAnJykge1xuICAgIHN1cGVyLnJlc2V0KHZhbHVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IEJvb2xlYW5EYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvQm9vbGVhbkRhdGFcIjtcbmltcG9ydCBOdW1iZXJEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvTnVtYmVyRGF0YVwiO1xuaW1wb3J0IHthd2FpdFRpbWVvdXR9IGZyb20gXCIuLi90c3VuYW1pL2F3YWl0XCI7XG5pbXBvcnQgU3RyaW5nRGF0YSBmcm9tIFwiLi4vdHN1bmFtaS9kYXRhL1N0cmluZ0RhdGFcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvRGF0YVwiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuL0dBQnJpZGdlXCI7XG5pbXBvcnQgQmFzZUV2ZW50IGZyb20gXCIuLi90c3VuYW1pL2V2ZW50c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBFdmVudFRhcmdldCB7XG5cblx0Y29uc3RydWN0b3IodHlwZSA9IFwiQWN0aW9uXCIsIG5hbWUgPSBcIkFjdGlvblwiLCBkZXNjcmlwdGlvbiA9IFwiQWRkIGFuIEFjdGlvblwiKSB7XG5cdFx0c3VwZXIoKTtcblx0XHR0aGlzLmNhcHR1cmUgPSB0aGlzLmNhcHR1cmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBsYXkgPSB0aGlzLnBsYXkuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlQ2FwdHVyZSA9IHRoaXMucmVDYXB0dXJlLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnR5cGUgPSB0eXBlO1xuXHRcdHRoaXMubmFtZSA9IG5ldyBTdHJpbmdEYXRhKCk7XG5cdFx0dGhpcy5uYW1lLmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsICgpID0+IHtcblx0XHRcdHRoaXMubmFtZS5sZW5ndGgudmFsdWUgPSBNYXRoLm1heCh0aGlzLm5hbWUudmFsdWUubGVuZ3RoLCA0KTtcblx0XHR9KTtcblx0XHR0aGlzLm5hbWUudmFsdWUgPSBuYW1lO1xuXHRcdHRoaXMuaWNvbiA9IG5ldyBTdHJpbmdEYXRhKCk7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbiA9IG5ldyBTdHJpbmdEYXRhKGRlc2NyaXB0aW9uKTtcblx0XHR0aGlzLmNhcHR1cmVEZXNjcmlwdGlvbiA9IG5ldyBTdHJpbmdEYXRhKCk7XG5cdFx0dGhpcy5pc1Rlc3RhYmxlID0gbmV3IEJvb2xlYW5EYXRhKCk7XG5cdFx0dGhpcy5pc0NhcHR1cmVhYmxlID0gbmV3IEJvb2xlYW5EYXRhKCk7XG5cdFx0dGhpcy5pc0NhcHR1cmluZyA9IG5ldyBCb29sZWFuRGF0YSgpO1xuXHRcdHRoaXMuY2hhbmdlQ3Vyc29yT25DYXB0dXJlID0gbmV3IEJvb2xlYW5EYXRhKCk7XG5cdFx0dGhpcy5pc0NhcHR1cmluZy5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCAoZXZlbnQpID0+IHtcblx0XHRcdGlmICh0aGlzLmNoYW5nZUN1cnNvck9uQ2FwdHVyZS52YWx1ZSkgYXBwLm1vZGVsLnNob3dDYXB0dXJlSWNvbi52YWx1ZSA9IGV2ZW50LmRhdGE7XG5cdFx0fSk7XG5cdFx0dGhpcy5pc1BsYXlpbmcgPSBuZXcgQm9vbGVhbkRhdGEoKTtcblx0XHR0aGlzLmRlbGF5ID0gbmV3IE51bWJlckRhdGEoMCk7XG5cdFx0dGhpcy5pc1NlbGVjdGVkSXRlbSA9IG5ldyBCb29sZWFuRGF0YSgpO1xuXG5cblx0XHR0aGlzLl9hcnJheSA9IFt0aGlzXTtcblx0fVxuXG5cdGdldCBhcnJheSgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYXJyYXk7XG5cdH1cblxuXHRzZXQgYXJyYXkodmFsdWUpIHtcblx0XHR0aGlzLl9hcnJheSA9IHZhbHVlO1xuXHRcdHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQmFzZUV2ZW50KFwiY2hhbmdlX2FycmF5XCIsIHZhbHVlKSk7XG5cdH1cblxuXHRjbG9uZSgpIHtcblxuXHR9XG5cblx0Y29weShhY3Rpb24pIHtcblx0XHRpZighYWN0aW9uKSByZXR1cm47XG5cdFx0dGhpcy5kZWxheS52YWx1ZSA9IGFjdGlvbi5kZWxheS52YWx1ZTtcblx0XHR0aGlzLmlzQ2FwdHVyZWFibGUudmFsdWUgPSBhY3Rpb24uaXNDYXB0dXJlYWJsZS52YWx1ZTtcblx0XHR0aGlzLmlzVGVzdGFibGUudmFsdWUgPSBhY3Rpb24uaXNUZXN0YWJsZS52YWx1ZTtcblx0fVxuXG5cdHRyaWdnZXJEZWxheSgpIHtcblx0XHRsZXQgcHJvbWlzZTEgPSBhd2FpdFRpbWVvdXQodGhpcy5kZWxheS52YWx1ZSk7XG5cdFx0bGV0IHByb21pc2UyID0gcHJvbWlzZTEudGhlbigoKSA9PiB7XG5cdFx0XHRyZXR1cm4gdGhpcy50cmlnZ2VyKCk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHByb21pc2UyO1xuXHR9XG5cblx0dHJpZ2dlcigpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHRzZXJpYWxpemUoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHR5cGU6dGhpcy50eXBlLFxuXHRcdFx0ZGVsYXk6dGhpcy5kZWxheS5zZXJpYWxpemUoKSxcblx0XHRcdG5hbWU6dGhpcy5uYW1lLnNlcmlhbGl6ZSgpXG5cdFx0fVxuXHR9XG5cblx0ZGVzZXJpYWxpemUoZGF0YSkge1xuXHRcdGlmKCFkYXRhKSByZXR1cm47XG5cdFx0dGhpcy50eXBlID0gZGF0YS50eXBlO1xuXHRcdHRoaXMuZGVsYXkuZGVzZXJpYWxpemUoZGF0YS5kZWxheSk7XG5cdFx0dGhpcy5uYW1lLmRlc2VyaWFsaXplKGRhdGEubmFtZSk7XG5cdH1cblxuXHRjYXB0dXJlKCkge1xuXHRcdHRoaXMuaXNDYXB0dXJpbmcudmFsdWUgPSB0cnVlO1xuXHR9XG5cblx0cmVDYXB0dXJlKCkge1xuXHRcdHNlbmRUcmFja0V2ZW50TWVzc2FnZShcIkFjdGlvblwiLCBcInJlQ2FwdHVyZVwiLCB0aGlzLnR5cGUpO1xuXHRcdHRoaXMuY2FwdHVyZSgpO1xuXHR9XG5cblx0Y2FwdHVyZUNvbXBsZXRlKCkge1xuXHRcdHRoaXMuaXNDYXB0dXJpbmcudmFsdWUgPSBmYWxzZTtcblx0XHRhcHAubW9kZWwuc2F2ZSgpO1xuXHR9XG5cblx0Y2FwdHVyZUF0SW5pdCgpIHtcblx0fVxuXG5cdHBsYXkoKSB7XG5cdFx0c2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwiQWN0aW9uXCIsIFwicGxheVwiLCB0aGlzLnR5cGUpO1xuXHRcdHRoaXMuaXNQbGF5aW5nLnZhbHVlID0gdHJ1ZTtcblx0XHRsZXQgcHJvbWlzZTEgPSB0aGlzLnRyaWdnZXIoKTtcblx0XHRsZXQgcHJvbWlzZTIgPSBwcm9taXNlMS50aGVuKCgpID0+IHtcblx0XHRcdHRoaXMuaXNQbGF5aW5nLnZhbHVlID0gZmFsc2U7XG5cdFx0XHRhcHAubW9kZWwuc2F2ZSgpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBwcm9taXNlMjtcblx0fVxufSIsImltcG9ydCBCYXNlRXZlbnQgZnJvbSAnLi4vZXZlbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xvY2sgZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50aW1lID0gTmFOO1xuICAgIHRoaXMuaW5kZXggPSAwO1xuICAgIHRoaXMuc2Vjb25kcyA9IDA7XG4gICAgdGhpcy5hbGxGcmFtZXMgPSAwO1xuICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSB0aGlzLmFuaW1hdGlvbkZyYW1lLmJpbmQodGhpcyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IFRJQ0soKSB7XG4gICAgcmV0dXJuICd0aWNrJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgRlBTKCkge1xuICAgIHJldHVybiAnZnBzJztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmlzUnVubmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzUnVubmluZyA9IHRydWU7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcbiAgICB0aGlzLmZwc1RpbWVvdXQgPSBzZXRUaW1lb3V0KHRoaXMuZGlzcGF0Y2hGcmFtZVNlY29uZHMuYmluZCh0aGlzKSwgMTAwMCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmlzUnVubmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmZwc1RpbWVvdXQpO1xuICB9XG5cbiAgYW5pbWF0aW9uRnJhbWUodGltZSkge1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5pbmRleCsrO1xuICAgIGNvbnN0IGV2ZW50ID0gbmV3IEJhc2VFdmVudChDbG9jay5USUNLLCB0aGlzLnRpbWUpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgaWYgKHRoaXMuaXNSdW5uaW5nKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BhdGNoRnJhbWVTZWNvbmRzKCkge1xuICAgIHRoaXMuYWxsRnJhbWVzICs9IHRoaXMuaW5kZXg7XG4gICAgdGhpcy5zZWNvbmRzKys7XG4gICAgY29uc3QgZXZlbnQgPSBuZXcgQmFzZUV2ZW50KENsb2NrLkZQUywge1xuICAgICAgZnJhbWVzOiB0aGlzLmluZGV4LFxuICAgICAgYXZlcmFnZUZyYW1lczogTWF0aC5yb3VuZCgodGhpcy5hbGxGcmFtZXMgLyB0aGlzLnNlY29uZHMpICogMTApIC8gMTAsXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICB0aGlzLmluZGV4ID0gMDtcbiAgICBzZXRUaW1lb3V0KHRoaXMuZGlzcGF0Y2hGcmFtZVNlY29uZHMuYmluZCh0aGlzKSwgMTAwMCk7XG4gIH1cbn1cblxubGV0IGNsb2NrO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2xvY2soKSB7XG4gIGlmICghY2xvY2spIGNsb2NrID0gbmV3IENsb2NrKCkuc3RhcnQoKTtcbiAgcmV0dXJuIGNsb2NrO1xufVxuIiwiaW1wb3J0IENsb2NrLCB7IGdldENsb2NrIH0gZnJvbSAnLi9DbG9jayc7XG5pbXBvcnQgeyByb3VuZERlY2ltYWxUb1BsYWNlIH0gZnJvbSAnLi4vdXRpbHMvbnVtYmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHdlZW4gZXh0ZW5kcyBFdmVudFRhcmdldCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0YXJ0VGltZSA9IDAsXG4gICAgZHVyYXRpb24gPSAxLFxuICAgIHByb3BlcnRpZXMgPSBbXSxcbiAgICB1cGRhdGVIYW5kbGVyID0gbnVsbCxcbiAgICBjb21wbGV0ZUhhbmRsZXIgPSBudWxsLFxuICAgIG5hbWUgPSAnJyxcbiAgICBkZWJ1ZyA9IGZhbHNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKHN0YXJ0VGltZSA8IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHdlZW4gc3RhcnRUaW1lIG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDAnKTtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uIDw9IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVHdlZW4gZHVyYXRpb24gbXVzdCBiZSBncmVhdGVyIHRoYW4gMCcpO1xuICAgIH1cbiAgICB0aGlzLnRpY2sgPSB0aGlzLnRpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLl9zdGFydFRpbWUgPSBzdGFydFRpbWU7XG4gICAgdGhpcy5fZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlciA9IHVwZGF0ZUhhbmRsZXI7XG4gICAgdGhpcy5jb21wbGV0ZUhhbmRsZXIgPSBjb21wbGV0ZUhhbmRsZXI7XG4gICAgdGhpcy5fdHdlZW5UaW1lID0gTmFOO1xuICAgIHRoaXMuX3RpbWUgPSBOYU47XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IHN0YXJ0VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhcnRUaW1lO1xuICB9XG5cbiAgc2V0IHN0YXJ0VGltZSh2YWx1ZSkge1xuICAgIHRoaXMuX3N0YXJ0VGltZSA9IHZhbHVlO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoVHdlZW4uQ0hBTkdFKSk7XG4gIH1cblxuICBnZXQgZW5kVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGFydFRpbWUgKyB0aGlzLmR1cmF0aW9uO1xuICB9XG5cbiAgZ2V0IGR1cmF0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9kdXJhdGlvbjtcbiAgfVxuXG4gIHNldCBkdXJhdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuX2R1cmF0aW9uID0gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudChUd2Vlbi5DSEFOR0UpKTtcbiAgfVxuXG4gIHN0YXJ0KHRpbWUgPSAwLCB1cGRhdGVIYW5kbGVyID0gbnVsbCkge1xuICAgIHRoaXMuY2xvY2sgPSBnZXRDbG9jaygpO1xuICAgIHRoaXMuc3RvcCgpO1xuICAgIGlmICh1cGRhdGVIYW5kbGVyKSB7XG4gICAgICB0aGlzLnVwZGF0ZUhhbmRsZXIgPSB1cGRhdGVIYW5kbGVyO1xuICAgIH1cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY29tcGxldGVDYWxsYmFjayA9IChldmVudCkgPT4ge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoVHdlZW4uQ09NUExFVEUsIGNvbXBsZXRlQ2FsbGJhY2spO1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihUd2Vlbi5DT01QTEVURSwgY29tcGxldGVDYWxsYmFjayk7XG4gICAgfSk7XG4gICAgdGhpcy5fdHdlZW5UaW1lID0gTmFOO1xuICAgIHRoaXMudGltZSA9IHRpbWU7XG4gICAgdGhpcy5wcmV2aW91c1RpbWUgPSB0aGlzLmNsb2NrLnRpbWU7XG4gICAgdGhpcy5jbG9jay5hZGRFdmVudExpc3RlbmVyKENsb2NrLlRJQ0ssIHRoaXMudGljayk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICB0aWNrKGV2ZW50KSB7XG4gICAgY29uc3QgY3VycmVudFRpbWUgPSB0aGlzLmNsb2NrLnRpbWU7XG4gICAgdGhpcy50aW1lICs9IChjdXJyZW50VGltZSAtIHRoaXMucHJldmlvdXNUaW1lKSAvIDEwMDA7XG4gICAgdGhpcy5wcmV2aW91c1RpbWUgPSBjdXJyZW50VGltZTtcbiAgfVxuXG4gIHBhdXNlKCkge1xuICAgIHRoaXMuY2xvY2sucmVtb3ZlRXZlbnRMaXN0ZW5lcihDbG9jay5USUNLLCB0aGlzLnRpY2spO1xuICB9XG5cbiAgcmVzdW1lKCkge1xuICAgIHRoaXMucHJldmlvdXNUaW1lID0gdGhpcy5jbG9jay50aW1lO1xuICAgIHRoaXMuY2xvY2suYWRkRXZlbnRMaXN0ZW5lcihDbG9jay5USUNLLCB0aGlzLnRpY2spO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICBpZih0aGlzLmNsb2NrKSB0aGlzLmNsb2NrLnJlbW92ZUV2ZW50TGlzdGVuZXIoQ2xvY2suVElDSywgdGhpcy50aWNrKTtcbiAgfVxuXG4gIGdldCB0aW1lKCkge1xuICAgIHJldHVybiB0aGlzLl90aW1lO1xuICB9XG5cbiAgc2V0IHRpbWUodmFsdWUpIHtcbiAgICAvLyB2YWx1ZSA9IE1hdGgubWluKHRoaXMuc3RhcnRUaW1lICsgdGhpcy5kdXJhdGlvbiwgdmFsdWUpO1xuICAgIC8vIHZhbHVlID0gTWF0aC5tYXgoMCwgdmFsdWUpO1xuICAgIHRoaXMuX3RpbWUgPSB2YWx1ZTtcbiAgICBsZXQgdHdlZW5UaW1lID0gdmFsdWUgLSB0aGlzLnN0YXJ0VGltZTtcbiAgICB0d2VlblRpbWUgPSBNYXRoLm1heCh0d2VlblRpbWUsIDApO1xuICAgIHR3ZWVuVGltZSA9IE1hdGgubWluKHR3ZWVuVGltZSwgdGhpcy5kdXJhdGlvbik7XG4gICAgaWYgKHR3ZWVuVGltZSAhPT0gdGhpcy5fdHdlZW5UaW1lIHx8IHRoaXMuZm9yY2VVcGRhdGUpIHtcbiAgICAgIHRoaXMuX3R3ZWVuVGltZSA9IHR3ZWVuVGltZTtcbiAgICAgIHRoaXMucHJvcGVydGllcy5mb3JFYWNoKChwcm9wZXJ0eSkgPT4ge1xuICAgICAgICBwcm9wZXJ0eS5jYWxjdWxhdGUodHdlZW5UaW1lIC8gdGhpcy5kdXJhdGlvbiwgdGhpcy5kZWJ1Zyk7XG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHVwZGF0ZUV2ZW50ID0gbmV3IEV2ZW50KFR3ZWVuLlVQREFURSk7XG4gICAgICBpZiAodGhpcy51cGRhdGVIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcih1cGRhdGVFdmVudCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQodXBkYXRlRXZlbnQpO1xuICAgIH1cbiAgICBpZiAodHdlZW5UaW1lID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbXBsZXRlRXZlbnQgPSBuZXcgRXZlbnQoVHdlZW4uQ09NUExFVEUpO1xuICAgICAgaWYgKHRoaXMuY29tcGxldGVIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuY29tcGxldGVIYW5kbGVyKGNvbXBsZXRlRXZlbnQpO1xuICAgICAgfVxuICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoY29tcGxldGVFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgc2V0IHRpbWVGcmFjdGlvbih2YWx1ZSkge1xuICAgIHRoaXMudGltZSA9IHZhbHVlICogdGhpcy5kdXJhdGlvbjtcbiAgfVxuXG4gIGdldCB0aW1lRnJhY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudGltZSAvIHRoaXMuZHVyYXRpb247XG4gIH1cblxuICBzdGF0aWMgZ2V0IENPTVBMRVRFKCkge1xuICAgIHJldHVybiAnY29tcGxldGUnO1xuICB9XG5cbiAgc3RhdGljIGdldCBVUERBVEUoKSB7XG4gICAgcmV0dXJuICd1cGRhdGUnO1xuICB9XG5cbiAgc3RhdGljIGdldCBDSEFOR0UoKSB7XG4gICAgcmV0dXJuICdjaGFuZ2UnO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlblByb3BlcnR5IHtcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBuYW1lLCBzdGFydFZhbHVlLCBlbmRWYWx1ZSwgZWFzZSwgcm91bmRpbmdGdW5jLCBkZWJ1ZyA9IGZhbHNlKSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnN0YXJ0VmFsdWUgPSBzdGFydFZhbHVlO1xuICAgIHRoaXMuZW5kVmFsdWUgPSBlbmRWYWx1ZTtcbiAgICB0aGlzLmVhc2UgPSBlYXNlO1xuICAgIHRoaXMucm91bmRpbmdGdW5jID0gcm91bmRpbmdGdW5jIHx8IHRoaXMubm9Sb3VuZGluZztcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG4gIH1cblxuICBjYWxjdWxhdGUodGltZSkge1xuICAgIGxldCB2YWx1ZSA9IHRoaXMuZWFzZSh0aW1lLCB0aGlzLnN0YXJ0VmFsdWUsIHRoaXMuZW5kVmFsdWUgLSB0aGlzLnN0YXJ0VmFsdWUsIDEpO1xuICAgIHZhbHVlID0gdGhpcy5yb3VuZGluZ0Z1bmModmFsdWUpO1xuICAgIHRoaXMudGFyZ2V0W3RoaXMubmFtZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIG5vUm91bmRpbmcodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxufVxuIiwiaW1wb3J0IFBvaW50IGZyb20gJy4vUG9pbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJpY0JlemllciB7XG4gIGNvbnN0cnVjdG9yKHAwLCBwMSwgcDIsIHAzLCBzYW1wbGVzID0gMTAwKSB7XG4gICAgdGhpcy5wMCA9IHAwIHx8IG5ldyBQb2ludCgwLCAwKTtcbiAgICB0aGlzLnAxID0gcDEgfHwgbmV3IFBvaW50KDAsIDApO1xuICAgIHRoaXMucDIgPSBwMiB8fCBuZXcgUG9pbnQoMSwgMSk7XG4gICAgdGhpcy5wMyA9IHAzIHx8IG5ldyBQb2ludCgxLCAxKTtcbiAgICB0aGlzLnNhbXBsZXMgPSBzYW1wbGVzO1xuICAgIHRoaXMuY2FsY3VsYXRlTGVuZ3RoKCk7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IEN1YmljQmV6aWVyKHRoaXMucDAuY2xvbmUoKSwgdGhpcy5wMS5jbG9uZSgpLCB0aGlzLnAyLmNsb25lKCksIHRoaXMucDMuY2xvbmUoKSwgdGhpcy5zYW1wbGVzKTtcbiAgfVxuXG4gIGNhbGN1bGF0ZUxlbmd0aCgpIHtcbiAgICB0aGlzLmRpc3RhbmNlcyA9IFswXTtcbiAgICB0aGlzLmRpc3RhbmNlc1ggPSBbMF07XG4gICAgdGhpcy50b3RhbExlbmd0aCA9IDA7XG4gICAgdGhpcy50b3RhbFggPSAwO1xuICAgIGxldCBwcmV2ID0gdGhpcy5wMDtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuc2FtcGxlczsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gaSAvICh0aGlzLnNhbXBsZXMgLSAxKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaVwiLCBpLCBcInRcIiwgdCk7XG4gICAgICBjb25zdCBwdCA9IHRoaXMuZ2V0UG9pbnQodCk7XG4gICAgICBjb25zdCBkaWZmID0gcHJldi5zdWJ0cmFjdChwdCk7IC8vKCBwcmV2IC0gcHQgKTtcbiAgICAgIHRoaXMudG90YWxMZW5ndGggKz0gZGlmZi5tYWduaXR1ZGU7XG4gICAgICB0aGlzLmRpc3RhbmNlc1tpXSA9IHRoaXMudG90YWxMZW5ndGg7XG4gICAgICB0aGlzLnRvdGFsWCAtPSBkaWZmLng7XG4gICAgICB0aGlzLmRpc3RhbmNlc1hbaV0gPSB0aGlzLnRvdGFsWDtcbiAgICAgIHByZXYgPSBwdDtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnRvdGFsWFwiLCB0aGlzLnRvdGFsWCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmRpc3RhbmNlc1hcIiwgdGhpcy5kaXN0YW5jZXNYKTtcbiAgfVxuXG4gIGdldFBvaW50KHQpIHtcbiAgICBjb25zdCBhID0gUG9pbnQubGVycCh0aGlzLnAwLCB0aGlzLnAxLCB0KTtcbiAgICBjb25zdCBiID0gUG9pbnQubGVycCh0aGlzLnAxLCB0aGlzLnAyLCB0KTtcbiAgICBjb25zdCBjID0gUG9pbnQubGVycCh0aGlzLnAyLCB0aGlzLnAzLCB0KTtcbiAgICBjb25zdCBkID0gUG9pbnQubGVycChhLCBiLCB0KTtcbiAgICBjb25zdCBlID0gUG9pbnQubGVycChiLCBjLCB0KTtcbiAgICBjb25zdCBwb2ludCA9IFBvaW50LmxlcnAoZCwgZSwgdCk7XG4gICAgcmV0dXJuIHBvaW50O1xuICB9XG5cbiAgZ2V0UG9pbnRPbkN1cnZlKHQpIHtcbiAgICBjb25zdCB0aW1lID0gdGhpcy5zYW1wbGVBdCh0LCB0aGlzLmRpc3RhbmNlcyk7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UG9pbnQodGltZSk7XG4gIH1cblxuICBnZXRQb2ludEF0WCh0KSB7XG4gICAgY29uc3QgdGltZSA9IHRoaXMuc2FtcGxlQXQodCwgdGhpcy5kaXN0YW5jZXNYKTtcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UG9pbnQodGltZSk7XG4gICAgcG9pbnQueCA9IHQ7XG4gICAgcmV0dXJuIHBvaW50O1xuICB9XG5cbiAgc2FtcGxlQXQodSwgYXJyYXkpIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgY29uc3QgbGFzdEluZGV4ID0gYXJyYXkubGVuZ3RoIC0gMTtcbiAgICBjb25zdCB0YXJnZXRBcmNMZW5ndGggPSB1ICogYXJyYXlbbGFzdEluZGV4XTtcbiAgICAvLyBiaW5hcnkgc2VhcmNoIGZvciB0aGUgaW5kZXggd2l0aCBsYXJnZXN0IHZhbHVlIHNtYWxsZXIgdGhhbiB0YXJnZXQgdSBkaXN0YW5jZVxuICAgIGxldCBsb3cgPSAwO1xuICAgIGxldCBoaWdoID0gbGFzdEluZGV4O1xuICAgIGxldCBjb21wYXJpc29uO1xuICAgIHdoaWxlIChsb3cgPD0gaGlnaCkge1xuICAgICAgaSA9IE1hdGguZmxvb3IobG93ICsgKGhpZ2ggLSBsb3cpIC8gMik7IC8vIGxlc3MgbGlrZWx5IHRvIG92ZXJmbG93LCB0aG91Z2ggcHJvYmFibHkgbm90IGlzc3VlIGhlcmUsIEpTIGRvZXNuJ3QgcmVhbGx5IGhhdmUgaW50ZWdlcnMsIGFsbCBudW1iZXJzIGFyZSBmbG9hdHNcbiAgICAgIGNvbXBhcmlzb24gPSBhcnJheVtpXSAtIHRhcmdldEFyY0xlbmd0aDtcbiAgICAgIGlmIChjb21wYXJpc29uIDwgMCkge1xuICAgICAgICBsb3cgPSBpICsgMTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICAgICAgaGlnaCA9IGkgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGlnaCA9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgICAvLyBET05FXG4gICAgICB9XG4gICAgfVxuICAgIGkgPSBoaWdoO1xuICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0QXJjTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaSAvIGxhc3RJbmRleDtcbiAgICB9XG4gICAgLy8gd2UgY291bGQgZ2V0IGZpbmVyIGdyYWluIGF0IGxlbmd0aHMsIG9yIHVzZSBzaW1wbGUgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHR3byBwb2ludHNcbiAgICBjb25zdCBsZW5ndGhCZWZvcmUgPSBhcnJheVtpXTtcbiAgICBjb25zdCBsZW5ndGhBZnRlciA9IGFycmF5W2kgKyAxXTtcbiAgICBjb25zdCBzZWdtZW50TGVuZ3RoID0gbGVuZ3RoQWZ0ZXIgLSBsZW5ndGhCZWZvcmU7XG4gICAgLy8gZGV0ZXJtaW5lIHdoZXJlIHdlIGFyZSBiZXR3ZWVuIHRoZSAnYmVmb3JlJyBhbmQgJ2FmdGVyJyBwb2ludHNcbiAgICBjb25zdCBzZWdtZW50RnJhY3Rpb24gPSAodGFyZ2V0QXJjTGVuZ3RoIC0gbGVuZ3RoQmVmb3JlKSAvIHNlZ21lbnRMZW5ndGg7XG4gICAgLy8gYWRkIHRoYXQgZnJhY3Rpb25hbCBhbW91bnQgdG8gdFxuICAgIHJldHVybiAoaSArIHNlZ21lbnRGcmFjdGlvbikgLyBsYXN0SW5kZXg7XG4gIH1cbn1cbiIsImltcG9ydCBQb2ludCBmcm9tICcuLi9nZW9tL1BvaW50JztcbmltcG9ydCBDdWJpY0JlemllciBmcm9tICcuLi9nZW9tL0N1YmljQmV6aWVyJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi91dGlscy9zdHJpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdWJpY0JlemllckVhc2luZyBleHRlbmRzIEN1YmljQmV6aWVyIHtcbiAgY29uc3RydWN0b3IoeDEgPSAwLCB5MSA9IDAsIHgyID0gMSwgeTIgPSAxLCBzYW1wbGVzID0gMTAwKSB7XG4gICAgc3VwZXIobmV3IFBvaW50KDAsIDApLCBuZXcgUG9pbnQoeDEsIHkxKSwgbmV3IFBvaW50KHgyLCB5MiksIG5ldyBQb2ludCgxLCAxKSwgc2FtcGxlcyk7XG4gICAgdGhpcy5lYXNlID0gdGhpcy5lYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBlYXNlKHQsIGIsIGMsIGQpIHtcbiAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UG9pbnRBdFgodCAvIGQpO1xuICAgIHJldHVybiBjICogcG9pbnQueSArIGI7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICByZXR1cm4gbmV3IEN1YmljQmV6aWVyRWFzaW5nKHRoaXMucDEueCwgdGhpcy5wMS55LCB0aGlzLnAyLngsIHRoaXMucDEueSwgdGhpcy5zYW1wbGVzKTtcbiAgfVxufVxuXG5DdWJpY0JlemllckVhc2luZy5saW5lYXIgPSB7XG4gIGVhc2U6IG5ldyBDdWJpY0JlemllckVhc2luZygwLCAwLCAxLCAxKSxcbn07XG5cbkN1YmljQmV6aWVyRWFzaW5nLnNpbmUgPSB7XG4gIGVhc2VJbk91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuMzcsIDAsIDAuNjMsIDEpLFxuICBlYXNlSW46IG5ldyBDdWJpY0JlemllckVhc2luZygwLjEyLCAwLCAwLjM5LCAwKSxcbiAgZWFzZU91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuNjEsIDEsIDAuODgsIDEpLFxufTtcblxuQ3ViaWNCZXppZXJFYXNpbmcucXVhZCA9IHtcbiAgZWFzZUluT3V0OiBuZXcgQ3ViaWNCZXppZXJFYXNpbmcoMC40NSwgMCwgMC41NSwgMSksXG4gIGVhc2VJbjogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuMTEsIDAsIDAuNSwgMCksXG4gIGVhc2VPdXQ6IG5ldyBDdWJpY0JlemllckVhc2luZygwLjUsIDEsIDAuODksIDEpLFxufTtcblxuQ3ViaWNCZXppZXJFYXNpbmcuY3ViaWMgPSB7XG4gIGVhc2VJbk91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuNjUsIDAsIDAuMzUsIDEpLFxuICBlYXNlSW46IG5ldyBDdWJpY0JlemllckVhc2luZygwLjMyLCAwLCAwLjY3LCAwKSxcbiAgZWFzZU91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuMzMsIDEsIDAuNjgsIDEpLFxufTtcblxuQ3ViaWNCZXppZXJFYXNpbmcucXVhcnQgPSB7XG4gIGVhc2VJbk91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuNzYsIDAsIDAuMjQsIDEpLFxuICBlYXNlSW46IG5ldyBDdWJpY0JlemllckVhc2luZygwLjUsIDAsIDAuNzUsIDApLFxuICBlYXNlT3V0OiBuZXcgQ3ViaWNCZXppZXJFYXNpbmcoMC4yNSwgMSwgMC41LCAxKSxcbn07XG5cbkN1YmljQmV6aWVyRWFzaW5nLnF1aW50ID0ge1xuICBlYXNlSW5PdXQ6IG5ldyBDdWJpY0JlemllckVhc2luZygwLjgzLCAwLCAwLjE3LCAxKSxcbiAgZWFzZUluOiBuZXcgQ3ViaWNCZXppZXJFYXNpbmcoMC42NCwgMCwgMC43OCwgMCksXG4gIGVhc2VPdXQ6IG5ldyBDdWJpY0JlemllckVhc2luZygwLjIyLCAxLCAwLjM2LCAxKSxcbn07XG5cbkN1YmljQmV6aWVyRWFzaW5nLmV4cG8gPSB7XG4gIGVhc2VJbk91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuODcsIDAsIDAuMTMsIDEpLFxuICBlYXNlSW46IG5ldyBDdWJpY0JlemllckVhc2luZygwLjcsIDAsIDAuODQsIDApLFxuICBlYXNlT3V0OiBuZXcgQ3ViaWNCZXppZXJFYXNpbmcoMC4xNiwgMSwgMC4zLCAxKSxcbn07XG5cbkN1YmljQmV6aWVyRWFzaW5nLmJhY2sgPSB7XG4gIGVhc2VJbk91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuNjgsIC0wLjYsIDAuMzIsIDEuNiksXG4gIGVhc2VJbjogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuMzYsIDAsIDAuNjYsIC0wLjU2KSxcbiAgZWFzZU91dDogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuMzQsIDEuNTYsIDAuNjQsIDEpLFxufTtcblxuQ3ViaWNCZXppZXJFYXNpbmcuY2lyYyA9IHtcbiAgZWFzZUluT3V0OiBuZXcgQ3ViaWNCZXppZXJFYXNpbmcoMC44NSwgMCwgMC4xNSwgMSksXG4gIGVhc2VJbjogbmV3IEN1YmljQmV6aWVyRWFzaW5nKDAuNTUsIDAsIDEsIDAuNDUpLFxuICBlYXNlT3V0OiBuZXcgQ3ViaWNCZXppZXJFYXNpbmcoMCwgMC41NSwgMC40NSwgMSksXG59O1xuXG4vLyBsZXQgY3NzVmFyaWFibGVzID0gXCJcIjtcbi8vIGZvcihsZXQgaSBpbiBDdWJpY0JlemllckVhc2luZykge1xuLy8gXHRsZXQgZWFzaW5nQ2xhc3MgPSBDdWJpY0JlemllckVhc2luZ1tpXTtcbi8vIFx0Zm9yKGxldCBqIGluIGVhc2luZ0NsYXNzKSB7XG4vLyBcdFx0bGV0IGN1YmljQmV6aWVyID0gZWFzaW5nQ2xhc3Nbal07XG4vLyBcdFx0bGV0IGVhc2VDbGFzc05hbWUgPSBjYXBpdGFsaXplKGkpO1xuLy8gXHRcdGxldCBlYXNlTmFtZUFycmF5ID0gai5zcGxpdChcImVhc2VcIik7XG4vLyBcdFx0ZWFzZU5hbWVBcnJheS5zaGlmdCgpO1xuLy8gXHRcdGxldCBlYXNlTmFtZSA9IGNhcGl0YWxpemUoZWFzZU5hbWVBcnJheS5qb2luKFwiXCIpKTtcbi8vIFx0XHRsZXQgdmFyaWFibGUgPSBgJGVhc2Uke2Vhc2VDbGFzc05hbWV9JHtlYXNlTmFtZX06IGN1YmljLWJlemllcigke2N1YmljQmV6aWVyLnAxLnh9LCAke2N1YmljQmV6aWVyLnAxLnl9LCAke2N1YmljQmV6aWVyLnAyLnh9LCAke2N1YmljQmV6aWVyLnAyLnl9KTtgO1xuLy8gXHRcdGNzc1ZhcmlhYmxlcyA9IGNzc1ZhcmlhYmxlcyArIHZhcmlhYmxlO1xuLy8gXHR9XG4vLyB9XG4vLyBjb25zb2xlLmxvZyhjc3NWYXJpYWJsZXMpO1xuIiwiY29uc3QgY2xhc3NlcyA9IHt9O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHkocGF0aCwgc2NvcGUsIGRlYnVnID0gZmFsc2UpIHtcbiAgaWYgKGRlYnVnKSB7XG4gICAgY29uc29sZS5sb2coJ2dldFByb3BlcnR5IHBhdGgnLCBwYXRoLCAnc2NvcGUnLCBzY29wZSk7XG4gIH1cbiAgbGV0IHZhbHVlID0gbnVsbDtcbiAgdHJ5IHtcbiAgICB2YWx1ZSA9IG5ldyBGdW5jdGlvbigncmV0dXJuICcgKyBwYXRoKS5iaW5kKHNjb3BlKSgpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZShuYW1lLCBjbGFzc1JlZmVyZW5jZSkge1xuICBjbGFzc2VzW25hbWVdID0gY2xhc3NSZWZlcmVuY2U7XG59XG5cbi8vIGV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckNsYXNzKGNsYXNzUmVmZXJlbmNlLCBuYW1lKSB7XG4vLyBcdGNsYXNzZXNbbmFtZV0gPSBjbGFzc1JlZmVyZW5jZTtcbi8vIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbXBvbmVudChlbGVtZW50LCBzY29wZSkge1xuICBsZXQgY2xhc3NOYW1lID0gZWxlbWVudC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuICBsZXQgY2xhc3NSZWZlcmVuY2UgPSBjbGFzc2VzW2NsYXNzTmFtZV07XG4gIGlmICghY2xhc3NSZWZlcmVuY2UpIHtcbiAgICBjbGFzc05hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnaXMnKTtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBjbGFzc1JlZmVyZW5jZSA9IGNsYXNzZXNbY2xhc3NOYW1lXTtcbiAgICB9XG4gIH1cbiAgaWYgKGNsYXNzUmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IGNsYXNzUmVmZXJlbmNlKGVsZW1lbnQpO1xuICAgIGVsZW1lbnQuY29tcG9uZW50ID0gY29tcG9uZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRTY29wZShlbGVtZW50LCBzY29wZSkge1xuICBpZiAoZWxlbWVudC5jb21wb25lbnQpIHtcbiAgICBlbGVtZW50LmNvbXBvbmVudC5zY29wZSA9IHNjb3BlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkaXJlY3RpdmVzID0gW2NyZWF0ZUNvbXBvbmVudCwgc2V0U2NvcGVdO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwbHlEaXJlY3RpdmVzKGVsZW1lbnQsIHNjb3BlKSB7XG4gIGNvbnN0IGFycmF5ID0gW2VsZW1lbnRdO1xuICBjb25zdCBlbGVtZW50cyA9IGdldEFsbE9iamVjdHMoZWxlbWVudCwgYXJyYXkpO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IGRpcmVjdGl2ZXMubGVuZ3RoOyBqKyspIHtcbiAgICBjb25zdCBkaXJlY3RpdmUgPSBkaXJlY3RpdmVzW2pdO1xuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgLy9mb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBlbCA9IGVsZW1lbnRzW2ldO1xuICAgICAgZGlyZWN0aXZlKGVsLCBzY29wZSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGZhY3RvcmllcyA9IFtdO1xuZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgZmFjdG9yaWVzLnB1c2goZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xufVxuLy9cbi8vIGV4cG9ydCBmdW5jdGlvbiBpbXBvcnRUZW1wbGF0ZSh0ZW1wbGF0ZSwgc2NvcGUpIHtcbi8vIFx0aWYgKHdpbmRvdy5yZW5kZXJUZW1wbGF0ZSkge1xuLy8gXHRcdHRlbXBsYXRlID0gd2luZG93LnJlbmRlclRlbXBsYXRlKHRlbXBsYXRlLCBzY29wZSk7XG4vLyBcdH1cbi8vIFx0bGV0IGZhY3RvcnkgPSBmYWN0b3JpZXMuc2hpZnQoKTtcbi8vIFx0ZmFjdG9yaWVzLnB1c2goZmFjdG9yeSk7XG4vLyBcdGZhY3RvcnkuaW5uZXJIVE1MID0gdGVtcGxhdGU7XG4vLyBcdGxldCBjaGlsZCA9IGZhY3RvcnkuY2hpbGRyZW4uaXRlbSgwKTtcbi8vIFx0Ly8gaWYgKHdpbmRvdy5DdXN0b21FbGVtZW50cykge1xuLy8gXHQvLyBcdEN1c3RvbUVsZW1lbnRzLnVwZ3JhZGVTdWJ0cmVlKGNoaWxkKTtcbi8vIFx0Ly8gfVxuLy8gXHRhcHBseURpcmVjdGl2ZXMoY2hpbGQsIHNjb3BlKTtcbi8vIFx0cmV0dXJuIGNoaWxkO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gaW1wb3J0VGVtcGxhdGUodGVtcGxhdGUsIHNjb3BlID0ge30sIGRlYnVnID0gZmFsc2UpIHtcbiAgbGV0IGNoaWxkO1xuICBpZiAod2luZG93LnJlbmRlclRlbXBsYXRlKSB7XG4gICAgdGVtcGxhdGUgPSB3aW5kb3cucmVuZGVyVGVtcGxhdGUodGVtcGxhdGUsIHNjb3BlKTtcbiAgfVxuICBjb25zdCBmYWN0b3J5ID0gZmFjdG9yaWVzLnNoaWZ0KCk7XG4gIGZhY3Rvcmllcy5wdXNoKGZhY3RvcnkpO1xuICBmYWN0b3J5LmlubmVySFRNTCA9IHRlbXBsYXRlO1xuICBpZiAoZmFjdG9yeS5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgY2hpbGQgPSBmYWN0b3J5LmNoaWxkcmVuLml0ZW0oMCk7XG4gIH1cbiAgLy8gc2NvcGUuc2NvcGVFbGVtZW50ID0gY2hpbGQ7XG4gIGFwcGx5RGlyZWN0aXZlcyhjaGlsZCwgc2NvcGUpO1xuICByZXR1cm4gY2hpbGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95RWxlbWVudChlbGVtZW50KSB7XG4gIGlmIChlbGVtZW50KSB7XG4gICAgY29uc3QgZWxlbWVudHMgPSBnZXRBbGxPYmplY3RzKGVsZW1lbnQpO1xuICAgIGZvciAobGV0IGkgPSBlbGVtZW50cy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgY29uc3QgZWwgPSBlbGVtZW50c1tpXTtcbiAgICAgIGlmIChlbC5jb21wb25lbnQpIHtcbiAgICAgICAgaWYgKGVsLmNvbXBvbmVudC5kZXN0cm95KSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGVsLmNvbXBvbmVudC5kZXN0cm95KCk7XG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgLy8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbC5jb21wb25lbnQgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gZGVzdHJveUVsZW1lbnQoZWwpO1xuICAgIH1cbiAgICBlbGVtZW50LmlubmVySFRNTCA9IG51bGw7XG4gICAgaWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH1cbiAgICBpZiAoZWxlbWVudC5jb21wb25lbnQpIHtcbiAgICAgIGlmIChlbGVtZW50LmNvbXBvbmVudC5kZXN0cm95KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZWxlbWVudC5jb21wb25lbnQuZGVzdHJveSgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gY29udGludWUgcmVnYXJkbGVzcyBvZiBlcnJvclxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbGVtZW50LmNvbXBvbmVudCA9IG51bGw7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZXN0cm95RWxlbWVudHMoZWxlbWVudHMpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBlbGVtZW50c1tpXTtcbiAgICBkZXN0cm95RWxlbWVudChlbGVtZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsT2JqZWN0cyhwYXJlbnQsIGFycmF5KSB7XG4gIGlmICghYXJyYXkpIHtcbiAgICBhcnJheSA9IFtdO1xuICB9XG4gIGlmIChwYXJlbnQuY2hpbGRyZW4pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcmVudC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgY2hpbGQgPSBwYXJlbnQuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgIHN3aXRjaCAoY2hpbGQubm9kZU5hbWUpIHtcbiAgICAgICAgY2FzZSAnI3RleHQnOlxuICAgICAgICBjYXNlICcjY29tbWVudCc6XG4gICAgICAgIGNhc2UgJ0JSJzpcbiAgICAgICAgY2FzZSAnVEVNUExBVEUnOlxuICAgICAgICBjYXNlICdTQ1JJUFQnOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGFycmF5LnB1c2goY2hpbGQpO1xuICAgICAgICAgIGdldEFsbE9iamVjdHMoY2hpbGQsIGFycmF5KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5O1xufVxuIiwiaW1wb3J0IENoYW5nZUV2ZW50IGZyb20gXCIuLi9DaGFuZ2VFdmVudFwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4vRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRhTW9kZWwgZXh0ZW5kcyBEYXRhIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzID0ge30pIHtcblx0XHRzdXBlcigpO1xuXHRcdHRoaXMuY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG5cdFx0Zm9yKGxldCBpIGluIHByb3BlcnRpZXMpIHtcblx0XHRcdHRoaXNbXCJfXCIgKyBpXSA9IHByb3BlcnRpZXNbaV07XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcywgaSwge1xuXHRcdFx0XHRnZXQgOiBmdW5jdGlvbigpe1xuXHRcdFx0XHRcdHJldHVybiB0aGlzW1wiX1wiICsgaV07XG5cdFx0XHRcdH0sXG4gICAgICAgICAgICAgICAgc2V0IDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRpZih0aGlzW1wiX1wiICsgaV0gIT0gdmFsdWUpIHtcblx0XHRcdFx0XHRcdHRoaXNbXCJfXCIgKyBpXSA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0Q2hhbmdlRXZlbnQuZGlzcGF0Y2godGhpcywgaSwgIHZhbHVlKTtcblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdFx0ZW51bWVyYWJsZSA6IHRydWUsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZSA6IHRydWVcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNoYW5nZUhhbmRsZXIoKSB7XG5cdFx0Q2hhbmdlRXZlbnQuZGlzcGF0Y2godGhpcywgXCJ2YWx1ZVwiLCB0aGlzKTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0Zm9yKGxldCBpIGluIHRoaXMpIHtcblx0XHRcdGxldCBkYXRhID0gdGhpc1tpXTtcblx0XHRcdGlmKGRhdGEgaW5zdGFuY2VvZiBEYXRhKSB7XG5cdFx0XHRcdGRhdGEuZGVzdHJveSgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpc1tpXSA9IG51bGw7XG5cdFx0fVxuXHRcdHJldHVybiBzdXBlci5kZXN0cm95KCk7XG5cdH1cblxufSIsImltcG9ydCBOdW1iZXJEYXRhIGZyb20gXCIuL051bWJlckRhdGFcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuL0RhdGFcIjtcbmltcG9ydCBEYXRhTW9kZWwgZnJvbSBcIi4vRGF0YU1vZGVsXCI7XG5pbXBvcnQgQmFzZUV2ZW50IGZyb20gXCIuLi9ldmVudHNcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbS9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZWN0b3IyRGF0YSBleHRlbmRzIERhdGFNb2RlbCB7XG5cblx0Y29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdHRoaXMueCA9IG5ldyBOdW1iZXJEYXRhKHgpO1xuXHRcdHRoaXMueC5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuXG5cdFx0dGhpcy55ID0gbmV3IE51bWJlckRhdGEoeSk7XG5cdFx0dGhpcy55LmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuY2hhbmdlSGFuZGxlcik7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMueC5yZW1vdmVFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuXHRcdHRoaXMueS5yZW1vdmVFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuXHRcdHJldHVybiBzdXBlci5kZXN0cm95KCk7XG5cdH1cblxuXHRjb3B5KG9iaikge1xuXHRcdGlmICghb2JqKSByZXR1cm47XG5cdFx0dGhpcy54LmNvcHkob2JqLngpO1xuXHRcdHRoaXMueS5jb3B5KG9iai55KTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdGxldCBwb2ludCA9IG5ldyBWZWN0b3IyRGF0YSgpO1xuXHRcdHBvaW50LmNvcHkodGhpcyk7XG5cdFx0cmV0dXJuIHBvaW50O1xuXHR9XG5cblx0Z2V0IHBvaW50KCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LnZhbHVlLCB0aGlzLnkudmFsdWUpO1xuXHR9XG5cblx0c2VyaWFsaXplKCkge1xuXHRcdHJldHVybiB7eDp0aGlzLngudmFsdWUsIHk6dGhpcy55LnZhbHVlfTtcblx0fVxuXHRcblx0ZGVzZXJpYWxpemUoZGF0YSkge1xuXHRcdGlmKCFkYXRhKSByZXR1cm4gXG5cdFx0dGhpcy54LnZhbHVlID0gZGF0YS54O1xuXHRcdHRoaXMueS52YWx1ZSA9IGRhdGEueTtcblx0fVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWFzaW5nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lYXNlSW4gPSB0aGlzLmVhc2VJbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWFzZU91dCA9IHRoaXMuZWFzZU91dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZWFzZUluT3V0ID0gdGhpcy5lYXNlSW5PdXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGVhc2VJbih0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7fVxuXG4gIGVhc2VPdXQodCwgYiA9IDAsIGMgPSAxLCBkID0gMSkge31cblxuICBlYXNlSW5PdXQodCwgYiA9IDAsIGMgPSAxLCBkID0gMSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFF1YWRyYXRpYyBleHRlbmRzIEVhc2luZyB7XG4gIGVhc2VJbih0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKyBiO1xuICB9XG5cbiAgZWFzZU91dCh0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgcmV0dXJuIC1jICogKHQgLz0gZCkgKiAodCAtIDIpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dCh0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgIHJldHVybiAoYyAvIDIpICogdCAqIHQgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gKC1jIC8gMikgKiAoLS10ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3ViaWMgZXh0ZW5kcyBFYXNpbmcge1xuICBlYXNlSW4odCwgYiA9IDAsIGMgPSAxLCBkID0gMSkge1xuICAgIHJldHVybiBjICogKHQgLz0gZCkgKiB0ICogdCArIGI7XG4gIH1cblxuICBlYXNlT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCArIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dCh0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgIHJldHVybiAoYyAvIDIpICogdCAqIHQgKiB0ICsgYjtcbiAgICB9XG4gICAgcmV0dXJuIChjIC8gMikgKiAoKHQgLT0gMikgKiB0ICogdCArIDIpICsgYjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVhcnRpYyBleHRlbmRzIEVhc2luZyB7XG4gIGVhc2VJbih0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgcmV0dXJuIGMgKiAodCAvPSBkKSAqIHQgKiB0ICogdCArIGI7XG4gIH1cblxuICBlYXNlT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gLWMgKiAoKHQgPSB0IC8gZCAtIDEpICogdCAqIHQgKiB0IC0gMSkgKyBiO1xuICB9XG5cbiAgZWFzZUluT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgcmV0dXJuIChjIC8gMikgKiB0ICogdCAqIHQgKiB0ICsgYjtcbiAgICB9XG4gICAgcmV0dXJuICgtYyAvIDIpICogKCh0IC09IDIpICogdCAqIHQgKiB0IC0gMikgKyBiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWludGljIGV4dGVuZHMgRWFzaW5nIHtcbiAgZWFzZUluKHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqIHQgKiB0ICogdCArIGI7XG4gIH1cblxuICBlYXNlT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gYyAqICgodCA9IHQgLyBkIC0gMSkgKiB0ICogdCAqIHQgKiB0ICsgMSkgKyBiO1xuICB9XG5cbiAgZWFzZUluT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgcmV0dXJuIChjIC8gMikgKiB0ICogdCAqIHQgKiB0ICogdCArIGI7XG4gICAgfVxuICAgIHJldHVybiAoYyAvIDIpICogKCh0IC09IDIpICogdCAqIHQgKiB0ICogdCArIDIpICsgYjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2luZSBleHRlbmRzIEVhc2luZyB7XG4gIGVhc2VJbih0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgcmV0dXJuIC1jICogTWF0aC5jb3MoKHQgLyBkKSAqIChNYXRoLlBJIC8gMikpICsgYyArIGI7XG4gIH1cblxuICBlYXNlT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gYyAqIE1hdGguc2luKCh0IC8gZCkgKiAoTWF0aC5QSSAvIDIpKSArIGI7XG4gIH1cblxuICBlYXNlSW5PdXQodCwgYiA9IDAsIGMgPSAxLCBkID0gMSkge1xuICAgIHJldHVybiAoLWMgLyAyKSAqIChNYXRoLmNvcygoTWF0aC5QSSAqIHQpIC8gZCkgLSAxKSArIGI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV4cG9uZW50aWFsIGV4dGVuZHMgRWFzaW5nIHtcbiAgZWFzZUluKHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gdCA9PT0gMCA/IGIgOiBjICogTWF0aC5wb3coMiwgMTAgKiAodCAvIGQgLSAxKSkgKyBiO1xuICB9XG5cbiAgZWFzZU91dCh0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgcmV0dXJuIHQgPT09IGQgPyBiICsgYyA6IGMgKiAoLU1hdGgucG93KDIsICgtMTAgKiB0KSAvIGQpICsgMSkgKyBiO1xuICB9XG5cbiAgZWFzZUluT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICBpZiAodCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGI7XG4gICAgfVxuICAgIGlmICh0ID09PSBkKSB7XG4gICAgICByZXR1cm4gYiArIGM7XG4gICAgfVxuICAgIGlmICgodCAvPSBkIC8gMikgPCAxKSB7XG4gICAgICByZXR1cm4gKGMgLyAyKSAqIE1hdGgucG93KDIsIDEwICogKHQgLSAxKSkgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gKGMgLyAyKSAqICgtTWF0aC5wb3coMiwgLTEwICogLS10KSArIDIpICsgYjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2lyY3VsYXIgZXh0ZW5kcyBFYXNpbmcge1xuICBlYXNlSW4odCwgYiA9IDAsIGMgPSAxLCBkID0gMSkge1xuICAgIHJldHVybiAtYyAqIChNYXRoLnNxcnQoMSAtICh0IC89IGQpICogdCkgLSAxKSArIGI7XG4gIH1cblxuICBlYXNlT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gYyAqIE1hdGguc3FydCgxIC0gKHQgPSB0IC8gZCAtIDEpICogdCkgKyBiO1xuICB9XG5cbiAgZWFzZUluT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICBpZiAoKHQgLz0gZCAvIDIpIDwgMSkge1xuICAgICAgcmV0dXJuICgtYyAvIDIpICogKE1hdGguc3FydCgxIC0gdCAqIHQpIC0gMSkgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gKGMgLyAyKSAqIChNYXRoLnNxcnQoMSAtICh0IC09IDIpICogdCkgKyAxKSArIGI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEVsYXN0aWMgZXh0ZW5kcyBFYXNpbmcge1xuICBlYXNlSW4odCwgYiA9IDAsIGMgPSAxLCBkID0gMSwgYSwgcCkge1xuICAgIGlmICh0ID09PSAwKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG4gICAgICByZXR1cm4gYiArIGM7XG4gICAgfVxuICAgIGlmICghcCkge1xuICAgICAgcCA9IGQgKiAwLjM7XG4gICAgfVxuICAgIGxldCBzO1xuICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgIGEgPSBjO1xuICAgICAgcyA9IHAgLyA0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzID0gKHAgLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgfVxuICAgIHJldHVybiAtKGEgKiBNYXRoLnBvdygyLCAxMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCgodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkpICsgYjtcbiAgfVxuXG4gIGVhc2VPdXQodCwgYiA9IDAsIGMgPSAxLCBkID0gMSwgYSwgcCkge1xuICAgIGlmICh0ID09PSAwKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgaWYgKCh0IC89IGQpID09PSAxKSB7XG4gICAgICByZXR1cm4gYiArIGM7XG4gICAgfVxuICAgIGlmICghcCkge1xuICAgICAgcCA9IGQgKiAwLjM7XG4gICAgfVxuICAgIGxldCBzO1xuICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgIGEgPSBjO1xuICAgICAgcyA9IHAgLyA0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzID0gKHAgLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgfVxuICAgIHJldHVybiBhICogTWF0aC5wb3coMiwgLTEwICogdCkgKiBNYXRoLnNpbigoKHQgKiBkIC0gcykgKiAoMiAqIE1hdGguUEkpKSAvIHApICsgYyArIGI7XG4gIH1cblxuICBlYXNlSW5PdXQodCwgYiA9IDAsIGMgPSAxLCBkID0gMSwgYSwgcCkge1xuICAgIGlmICh0ID09PSAwKSB7XG4gICAgICByZXR1cm4gYjtcbiAgICB9XG4gICAgaWYgKCh0IC89IGQgLyAyKSA9PT0gMikge1xuICAgICAgcmV0dXJuIGIgKyBjO1xuICAgIH1cbiAgICBpZiAoIXApIHtcbiAgICAgIHAgPSBkICogKDAuMyAqIDEuNSk7XG4gICAgfVxuICAgIGxldCBzO1xuICAgIGlmICghYSB8fCBhIDwgTWF0aC5hYnMoYykpIHtcbiAgICAgIGEgPSBjO1xuICAgICAgcyA9IHAgLyA0O1xuICAgIH0gZWxzZSB7XG4gICAgICBzID0gKHAgLyAoMiAqIE1hdGguUEkpKSAqIE1hdGguYXNpbihjIC8gYSk7XG4gICAgfVxuICAgIGlmICh0IDwgMSkge1xuICAgICAgcmV0dXJuIC0wLjUgKiAoYSAqIE1hdGgucG93KDIsIDEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKCh0ICogZCAtIHMpICogKDIgKiBNYXRoLlBJKSkgLyBwKSkgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gYSAqIE1hdGgucG93KDIsIC0xMCAqICh0IC09IDEpKSAqIE1hdGguc2luKCgodCAqIGQgLSBzKSAqICgyICogTWF0aC5QSSkpIC8gcCkgKiAwLjUgKyBjICsgYjtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQmFjayBleHRlbmRzIEVhc2luZyB7XG4gIGNvbnN0cnVjdG9yKHMgPSAxLjcwMTU4KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnMgPSBzO1xuICB9XG5cbiAgZWFzZUluKHQsIGIgPSAwLCBjID0gMSwgZCA9IDEsIHMpIHtcbiAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBzID0gdGhpcy5zO1xuICAgIH1cbiAgICByZXR1cm4gYyAqICh0IC89IGQpICogdCAqICgocyArIDEpICogdCAtIHMpICsgYjtcbiAgfVxuXG4gIGVhc2VPdXQodCwgYiA9IDAsIGMgPSAxLCBkID0gMSwgcykge1xuICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHMgPSB0aGlzLnM7XG4gICAgfVxuICAgIHJldHVybiBjICogKCh0ID0gdCAvIGQgLSAxKSAqIHQgKiAoKHMgKyAxKSAqIHQgKyBzKSArIDEpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dCh0LCBiID0gMCwgYyA9IDEsIGQgPSAxLCBzKSB7XG4gICAgaWYgKHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcyA9IHRoaXMucztcbiAgICB9XG4gICAgaWYgKCh0IC89IGQgLyAyKSA8IDEpIHtcbiAgICAgIHJldHVybiAoYyAvIDIpICogKHQgKiB0ICogKCgocyAqPSAxLjUyNSkgKyAxKSAqIHQgLSBzKSkgKyBiO1xuICAgIH1cbiAgICByZXR1cm4gKGMgLyAyKSAqICgodCAtPSAyKSAqIHQgKiAoKChzICo9IDEuNTI1KSArIDEpICogdCArIHMpICsgMikgKyBiO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBCb3VuY2UgZXh0ZW5kcyBFYXNpbmcge1xuICBlYXNlT3V0KHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICBpZiAoKHQgLz0gZCkgPCAxIC8gMi43NSkge1xuICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogdCAqIHQpICsgYjtcbiAgICB9IGVsc2UgaWYgKHQgPCAyIC8gMi43NSkge1xuICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMS41IC8gMi43NSkgKiB0ICsgMC43NSkgKyBiO1xuICAgIH0gZWxzZSBpZiAodCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgIHJldHVybiBjICogKDcuNTYyNSAqICh0IC09IDIuMjUgLyAyLjc1KSAqIHQgKyAwLjkzNzUpICsgYjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGMgKiAoNy41NjI1ICogKHQgLT0gMi42MjUgLyAyLjc1KSAqIHQgKyAwLjk4NDM3NSkgKyBiO1xuICAgIH1cbiAgfVxuXG4gIGVhc2VJbih0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgcmV0dXJuIGMgLSB0aGlzLmVhc2VPdXQoZCAtIHQsIDAsIGMsIGQpICsgYjtcbiAgfVxuXG4gIGVhc2VJbk91dCh0LCBiID0gMCwgYyA9IDEsIGQgPSAxKSB7XG4gICAgaWYgKHQgPCBkIC8gMikge1xuICAgICAgcmV0dXJuIHRoaXMuZWFzZUluKHQgKiAyLCAwLCBjLCBkKSAqIDAuNSArIGI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmVhc2VPdXQodCAqIDIgLSBkLCAwLCBjLCBkKSAqIDAuNSArIGMgKiAwLjUgKyBiO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTGluZWFyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5lYXNlID0gdGhpcy5lYXNlLmJpbmQodGhpcyk7XG4gIH1cblxuICBlYXNlKHQsIGIgPSAwLCBjID0gMSwgZCA9IDEpIHtcbiAgICByZXR1cm4gKGMgKiB0KSAvIGQgKyBiO1xuICB9XG59XG5cbkVhc2luZy5xdWFkID0gbmV3IFF1YWRyYXRpYygpO1xuRWFzaW5nLmN1YmljID0gbmV3IEN1YmljKCk7XG5FYXNpbmcucXVhcnQgPSBuZXcgUXVhcnRpYygpO1xuRWFzaW5nLnF1aW50ID0gbmV3IFF1aW50aWMoKTtcbkVhc2luZy5zaW5lID0gbmV3IFNpbmUoKTtcbkVhc2luZy5leHBvID0gbmV3IEV4cG9uZW50aWFsKCk7XG5FYXNpbmcuY2lyYyA9IG5ldyBDaXJjdWxhcigpO1xuRWFzaW5nLmVsYXN0aWMgPSBuZXcgRWxhc3RpYygpO1xuRWFzaW5nLmJhY2sgPSBuZXcgQmFjaygpO1xuRWFzaW5nLmJvdW5jZSA9IG5ldyBCb3VuY2UoKTtcbkVhc2luZy5saW5lYXIgPSBuZXcgTGluZWFyKCk7XG4iLCJpbXBvcnQgVmVjdG9yMkRhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9WZWN0b3IyRGF0YVwiO1xuaW1wb3J0IEN1YmljQmV6aWVyRWFzaW5nIGZyb20gXCIuLi90c3VuYW1pL2FuaW1hdGlvbi9DdWJpY0JlemllckVhc2luZ1wiO1xuaW1wb3J0IHsgcm91bmQyIH0gZnJvbSBcIi4uL3RzdW5hbWkvdXRpbHMvbnVtYmVyXCI7XG5pbXBvcnQgRWFzaW5nIGZyb20gXCIuLi90c3VuYW1pL2FuaW1hdGlvbi9FYXNpbmdcIjtcbmltcG9ydCBEYXRhTW9kZWwgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9EYXRhTW9kZWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3ViaWNCZXppZXJQb2ludHMgZXh0ZW5kcyBEYXRhTW9kZWwge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cblx0XHR0aGlzLl92YWx1ZSA9IHRoaXM7XG5cblx0XHR0aGlzLnAwID0gbmV3IFZlY3RvcjJEYXRhKDAsMCk7XG5cdFx0dGhpcy5wMSA9IG5ldyBWZWN0b3IyRGF0YSgwLCAwKTtcblx0XHR0aGlzLnAyID0gbmV3IFZlY3RvcjJEYXRhKDEsIDEpO1xuXHRcdHRoaXMucDMgPSBuZXcgVmVjdG9yMkRhdGEoMSwgMSk7XG5cdFx0dGhpcy5wMC5hZGRFdmVudExpc3RlbmVyKFwidmFsdWVcIiwgdGhpcy5jaGFuZ2VIYW5kbGVyKTtcblx0XHR0aGlzLnAxLmFkZEV2ZW50TGlzdGVuZXIoXCJ2YWx1ZVwiLCB0aGlzLmNoYW5nZUhhbmRsZXIpO1xuXHRcdHRoaXMucDIuYWRkRXZlbnRMaXN0ZW5lcihcInZhbHVlXCIsIHRoaXMuY2hhbmdlSGFuZGxlcik7XG5cdFx0dGhpcy5wMy5hZGRFdmVudExpc3RlbmVyKFwidmFsdWVcIiwgdGhpcy5jaGFuZ2VIYW5kbGVyKTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdFx0XHRsZXQgdmVjID0gdGhpc1tcInBcIiArIGldO1xuXHRcdFx0dmVjLngubW9kaWZpZXJzID0gW3JvdW5kMl07XG5cdFx0XHR2ZWMueS5tb2RpZmllcnMgPSBbcm91bmQyXTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5jb250cm9sUG9pbnRzID0gW3RoaXMucDEsIHRoaXMucDJdO1xuXHRcdHRoaXMuY29udHJvbFBvaW50c0xpbmVzID0gW1t0aGlzLnAwLCB0aGlzLnAxXSwgW3RoaXMucDMsIHRoaXMucDJdXTtcblxuXHRcdHRoaXMuZWFzaW5nID0gbmV3IEN1YmljQmV6aWVyRWFzaW5nKCk7XG5cdFx0dGhpcy5kZWJ1Z0Vhc2luZyA9IEVhc2luZy5xdWFkLmVhc2VJbk91dDtcblxuXHRcdHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuXHR9XG5cblx0Y29weShvYmopIHtcblx0XHRpZiAoIW9iaikgcmV0dXJuO1xuXHRcdHRoaXMucDAuY29weShvYmoucDApO1xuXHRcdHRoaXMucDEuY29weShvYmoucDEpO1xuXHRcdHRoaXMucDIuY29weShvYmoucDIpO1xuXHRcdHRoaXMucDMuY29weShvYmoucDMpO1xuXHR9XG5cblx0Y2hhbmdlSGFuZGxlcigpIHtcblx0XHR0aGlzLmVhc2luZy5wMS54ID0gdGhpcy5wMS54LnZhbHVlO1xuXHRcdHRoaXMuZWFzaW5nLnAxLnkgPSB0aGlzLnAxLnkudmFsdWU7XG5cdFx0dGhpcy5lYXNpbmcucDIueCA9IHRoaXMucDIueC52YWx1ZTtcblx0XHR0aGlzLmVhc2luZy5wMi55ID0gdGhpcy5wMi55LnZhbHVlO1xuXHRcdHRoaXMuZWFzaW5nLmNhbGN1bGF0ZUxlbmd0aCgpO1xuXHRcdHN1cGVyLmNoYW5nZUhhbmRsZXIoKTtcblx0fVxuXG59IiwiaW1wb3J0IEFjdGlvbiBmcm9tIFwiLi9BY3Rpb25cIjtcbmltcG9ydCBOdW1iZXJEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvTnVtYmVyRGF0YVwiO1xuaW1wb3J0IEFycmF5RGF0YSBmcm9tIFwiLi4vdHN1bmFtaS9kYXRhL0FycmF5RGF0YVwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9EYXRhXCI7XG5pbXBvcnQgVHdlZW4gZnJvbSBcIi4uL3RzdW5hbWkvYW5pbWF0aW9uL1R3ZWVuXCI7XG5pbXBvcnQgVHdlZW5Qcm9wZXJ0eSBmcm9tIFwiLi4vdHN1bmFtaS9hbmltYXRpb24vVHdlZW5Qcm9wZXJ0eVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi90c3VuYW1pL2dlb20vUG9pbnRcIjtcbmltcG9ydCBDdWJpY0JlemllckVhc2luZyBmcm9tIFwiLi4vdHN1bmFtaS9hbmltYXRpb24vQ3ViaWNCZXppZXJFYXNpbmdcIjtcbmltcG9ydCB7Z2V0UHJvcGVydHl9IGZyb20gXCIuLi90c3VuYW1pL3RzdW5hbWlcIjtcbmltcG9ydCBDdWJpY0JlemllclBvaW50cyBmcm9tIFwiLi9DdWJpY0JlemllclBvaW50c1wiO1xuaW1wb3J0IEVhc2luZyBmcm9tIFwiLi4vdHN1bmFtaS9hbmltYXRpb24vRWFzaW5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvblR3ZWVuIGV4dGVuZHMgQWN0aW9uIHtcblxuXHRjb25zdHJ1Y3RvcihzdGFydFgsIHN0YXJ0WSwgeCA9IDAsIHkgPSAwLCBkdXJhdGlvbiA9IDEsIGRlbGF5ID0gMCkge1xuXHRcdHN1cGVyKFwiQWN0aW9uVHdlZW5cIiwgXCJBY3Rpb25Ud2VlblwiKTtcblx0XHR0aGlzLnN0YXJ0WCA9IG5ldyBOdW1iZXJEYXRhKHN0YXJ0WCk7XG5cdFx0dGhpcy5zdGFydFkgPSBuZXcgTnVtYmVyRGF0YShzdGFydFkpO1xuXHRcdHRoaXMuZW5kWCA9IG5ldyBOdW1iZXJEYXRhKHgpO1xuXHRcdHRoaXMuZW5kWSA9IG5ldyBOdW1iZXJEYXRhKHkpO1xuXHRcdHRoaXMuZHVyYXRpb24gPSBuZXcgTnVtYmVyRGF0YShkdXJhdGlvbik7XG5cdFx0dGhpcy5jdWJpY0JlemllclBvaW50cyA9IG5ldyBDdWJpY0JlemllclBvaW50cygpO1xuXHRcdHRoaXMuZWFzaW5nUHJlc2V0cyA9IG5ldyBBcnJheURhdGEoKTtcblx0XHR0aGlzLmVhc2luZ1ByZXNldHMuc2VsZWN0ZWRJdGVtLmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZWFzaW5nUHJlc2V0Q2hhbmdlLmJpbmQodGhpcykpO1xuXHRcdHRoaXMuZWFzaW5nUHJlc2V0cy5zZWxlY3RlZEl0ZW0uZGVidWcgPSB0cnVlO1xuXHRcdC8vIHRoaXMuZWFzaW5nUHJlc2V0cy5zZWxlY3RlZEl0ZW0uZm9yY2VDaGFuZ2VFdmVudCA9IHRydWU7XG5cdFx0bGV0IHByZXNldHMgPSBbXCJTZWxlY3QgYSBwcmVzZXRcIl07XG5cdFx0Zm9yKGxldCBpIGluIEN1YmljQmV6aWVyRWFzaW5nKSB7XG5cdFx0XHRsZXQgY3ViaWNFYXNpbmdDbGFzcyA9IEN1YmljQmV6aWVyRWFzaW5nW2ldO1xuXHRcdFx0Zm9yKGxldCBqIGluIGN1YmljRWFzaW5nQ2xhc3MpIHtcblx0XHRcdFx0bGV0IGVhc2luZ1ByZXNldCA9IGkgKyBcIi5cIiArIGo7XG5cdFx0XHRcdHByZXNldHMucHVzaChlYXNpbmdQcmVzZXQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLmVhc2luZ1ByZXNldHMudmFsdWUgPSBwcmVzZXRzO1xuXHRcdHRoaXMuZWFzaW5nUHJlc2V0cy5zZWxlY3RlZEl0ZW0udmFsdWUgPSBcInF1YWQuZWFzZUluT3V0XCI7XG5cdFx0dGhpcy50d2VlblVwZGF0ZUhhbmRsZXIgPSB0aGlzLnR3ZWVuVXBkYXRlSGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudHdlZW5Db21wbGV0ZUhhbmRsZXIgPSB0aGlzLnR3ZWVuQ29tcGxldGVIYW5kbGVyLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnBvcyA9IG5ldyBQb2ludCgpO1xuXHR9XG5cblx0cmVzZXRFYXNpbmcoKSB7XG5cdFx0dGhpcy5lYXNpbmdQcmVzZXRzLnNlbGVjdGVkSXRlbS52YWx1ZSA9IHRoaXMuZWFzaW5nUHJlc2V0cy52YWx1ZVswXTtcblx0fVxuXHRcblx0ZWFzaW5nUHJlc2V0Q2hhbmdlKCkge1xuXHRcdGxldCB2YWx1ZSA9IHRoaXMuZWFzaW5nUHJlc2V0cy5zZWxlY3RlZEl0ZW0udmFsdWU7XG5cblx0XHRsZXQgZGVidWdFYXNpbmdNZXRob2QgPSBnZXRQcm9wZXJ0eShcInRoaXMuXCIgKyB2YWx1ZSwgRWFzaW5nKTtcblx0XHRpZihkZWJ1Z0Vhc2luZ01ldGhvZCkge1xuXHRcdFx0dGhpcy5jdWJpY0JlemllclBvaW50cy5kZWJ1Z0Vhc2luZyA9IGRlYnVnRWFzaW5nTWV0aG9kO1xuXHRcdH1cblxuXHRcdGxldCBjYiA9IGdldFByb3BlcnR5KFwidGhpcy5cIiArIHZhbHVlLCBDdWJpY0JlemllckVhc2luZyk7XG5cdFx0aWYoY2IpIHtcblx0XHRcdHRoaXMuY3ViaWNCZXppZXJQb2ludHMucDEueC52YWx1ZSA9IGNiLnAxLng7XG5cdFx0XHR0aGlzLmN1YmljQmV6aWVyUG9pbnRzLnAxLnkudmFsdWUgPSBjYi5wMS55O1xuXHRcdFx0dGhpcy5jdWJpY0JlemllclBvaW50cy5wMi54LnZhbHVlID0gY2IucDIueDtcblx0XHRcdHRoaXMuY3ViaWNCZXppZXJQb2ludHMucDIueS52YWx1ZSA9IGNiLnAyLnk7XG5cdFx0fVxuXHR9XG5cblx0Y29weShhY3Rpb24pIHtcblx0XHRzdXBlci5jb3B5KGFjdGlvbik7XG5cdFx0dGhpcy5zdGFydFgudmFsdWUgPSBhY3Rpb24uc3RhcnRYLnZhbHVlO1xuXHRcdHRoaXMuc3RhcnRZLnZhbHVlID0gYWN0aW9uLnN0YXJ0WS52YWx1ZTtcblx0XHR0aGlzLmVuZFgudmFsdWUgPSBhY3Rpb24uZW5kWC52YWx1ZTtcblx0XHR0aGlzLmVuZFkudmFsdWUgPSBhY3Rpb24uZW5kWS52YWx1ZTtcblx0XHR0aGlzLmR1cmF0aW9uLnZhbHVlID0gYWN0aW9uLmR1cmF0aW9uLnZhbHVlO1xuXHRcdHRoaXMuY3ViaWNCZXppZXJQb2ludHMuY29weShhY3Rpb24uY3ViaWNCZXppZXJQb2ludHMpO1xuXHR9XG5cblx0dHJpZ2dlcigpIHtcblx0XHR0aGlzLnR3ZWVuID0gbmV3IFR3ZWVuKDAsIHRoaXMuZHVyYXRpb24udmFsdWUsIFtcblx0XHRcdG5ldyBUd2VlblByb3BlcnR5KHRoaXMucG9zLCBcInhcIiwgdGhpcy5zdGFydFgudmFsdWUsIHRoaXMuZW5kWC52YWx1ZSwgdGhpcy5jdWJpY0JlemllclBvaW50cy5lYXNpbmcuZWFzZSksXG5cdFx0XHRuZXcgVHdlZW5Qcm9wZXJ0eSh0aGlzLnBvcywgXCJ5XCIsIHRoaXMuc3RhcnRZLnZhbHVlLCB0aGlzLmVuZFkudmFsdWUsIHRoaXMuY3ViaWNCZXppZXJQb2ludHMuZWFzaW5nLmVhc2UpLFxuXHRcdF0pO1xuXHRcdHRoaXMudHdlZW4uYWRkRXZlbnRMaXN0ZW5lcihUd2Vlbi5VUERBVEUsIHRoaXMudHdlZW5VcGRhdGVIYW5kbGVyKTtcblx0XHR0aGlzLnR3ZWVuLmFkZEV2ZW50TGlzdGVuZXIoVHdlZW4uQ09NUExFVEUsIHRoaXMudHdlZW5Db21wbGV0ZUhhbmRsZXIpO1xuXHRcdHJldHVybiB0aGlzLnR3ZWVuLnN0YXJ0KCk7XG5cdH1cblxuXHR0d2VlblVwZGF0ZUhhbmRsZXIoZSkge1xuXG5cdH1cblxuXHR0d2VlbkNvbXBsZXRlSGFuZGxlcihlKSB7XG5cblx0fVxuXG5cdHNlcmlhbGl6ZSgpIHtcblx0XHRsZXQgZGF0YSA9IHN1cGVyLnNlcmlhbGl6ZSgpO1xuXHRcdGRhdGEuc3RhcnRYID0gdGhpcy5zdGFydFguc2VyaWFsaXplKCk7XG5cdFx0ZGF0YS5zdGFydFkgPSB0aGlzLnN0YXJ0WS52YWx1ZTtcblx0XHRkYXRhLmVuZFggPSB0aGlzLmVuZFgudmFsdWU7XG5cdFx0ZGF0YS5lbmRZID0gdGhpcy5lbmRZLnZhbHVlO1xuXHRcdGRhdGEuZHVyYXRpb24gPSB0aGlzLmR1cmF0aW9uLnZhbHVlO1xuXHRcdGRhdGEucDEgPSB0aGlzLmN1YmljQmV6aWVyUG9pbnRzLnAxLnNlcmlhbGl6ZSgpO1xuXHRcdGRhdGEucDIgPSB0aGlzLmN1YmljQmV6aWVyUG9pbnRzLnAyLnNlcmlhbGl6ZSgpO1xuXHRcdGRhdGEuZWFzaW5nID0gdGhpcy5lYXNpbmdQcmVzZXRzLnNlbGVjdGVkSXRlbS52YWx1ZTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdGRlc2VyaWFsaXplKGRhdGEpIHtcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcblx0XHRzdXBlci5kZXNlcmlhbGl6ZShkYXRhKTtcblx0XHR0aGlzLnN0YXJ0WC5kZXNlcmlhbGl6ZShkYXRhLnN0YXJ0WCk7XG5cdFx0dGhpcy5zdGFydFkuZGVzZXJpYWxpemUoZGF0YS5zdGFydFkpO1xuXHRcdHRoaXMuZW5kWC5kZXNlcmlhbGl6ZShkYXRhLmVuZFgpO1xuXHRcdHRoaXMuZW5kWS5kZXNlcmlhbGl6ZShkYXRhLmVuZFkpO1xuXHRcdHRoaXMuZHVyYXRpb24uZGVzZXJpYWxpemUoZGF0YS5kdXJhdGlvbik7XG5cdFx0dGhpcy5jdWJpY0JlemllclBvaW50cy5wMS5kZXNlcmlhbGl6ZShkYXRhLnAxKTtcblx0XHR0aGlzLmN1YmljQmV6aWVyUG9pbnRzLnAyLmRlc2VyaWFsaXplKGRhdGEucDIpO1xuXHRcdHRoaXMuZWFzaW5nUHJlc2V0cy5zZWxlY3RlZEl0ZW0udmFsdWUgPSBkYXRhLmVhc2luZyB8fCBcInF1YWQuZWFzZUluT3V0XCI7XG5cdH1cblxufVxuIiwiaW1wb3J0IE51bWJlckRhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9OdW1iZXJEYXRhXCI7XG5pbXBvcnQgQXJyYXlEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvQXJyYXlEYXRhXCI7XG5pbXBvcnQgQWN0aW9uVHdlZW4gZnJvbSBcIi4vQWN0aW9uVHdlZW5cIjtcbmltcG9ydCBTdHJpbmdEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvU3RyaW5nRGF0YVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuLi90c3VuYW1pL2dlb20vUG9pbnRcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvRGF0YVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25TY3JvbGwgZXh0ZW5kcyBBY3Rpb25Ud2VlbiB7XG5cblx0Y29uc3RydWN0b3IodGFyZ2V0ID0gXCJ3aW5kb3dcIiwgdW5pdHMgPSBcInB4XCIsIHggPSAwLCB5ID0gMCwgZHVyYXRpb24gPSAxLCBkZWxheSA9IDApIHtcblx0XHRzdXBlcigwLCAwLCAwLCAwLCBkdXJhdGlvbiwgZGVsYXkpO1xuXHRcdHRoaXMudHlwZSA9IFwiQWN0aW9uU2Nyb2xsXCI7XG5cdFx0dGhpcy5uYW1lLnZhbHVlID0gXCJTY3JvbGxcIjtcblx0XHR0aGlzLmRlc2NyaXB0aW9uLnZhbHVlID0gXCJBZGQgYSBzY3JvbGwgYW5pbWF0aW9uXCI7XG5cdFx0dGhpcy50YXJnZXQgPSBuZXcgU3RyaW5nRGF0YSh0YXJnZXQpO1xuXHRcdHRoaXMudW5pdFggPSBuZXcgTnVtYmVyRGF0YSh4KTtcblx0XHR0aGlzLnVuaXRZID0gbmV3IE51bWJlckRhdGEoeSk7XG5cdFx0dGhpcy51bml0cyA9IG5ldyBBcnJheURhdGEoXCIlXCIsIFwicHhcIik7XG5cdFx0dGhpcy51bml0cy5zZWxlY3RlZEl0ZW0udmFsdWUgPSB1bml0cztcblx0XHR0aGlzLmlzQ2FwdHVyZWFibGUudmFsdWUgPSB0cnVlO1xuXHRcdHRoaXMuaXNUZXN0YWJsZS52YWx1ZSA9IHRydWU7XG5cdFx0dGhpcy5pY29uLnZhbHVlID0gXCJmYXMgZmEtc2Nyb2xsXCI7XG5cblx0XHR0aGlzLmRvU2Nyb2xsID0gdGhpcy5kb1Njcm9sbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudW5pdFguYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5kb1Njcm9sbCk7XG5cdFx0dGhpcy51bml0WS5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRvU2Nyb2xsKTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdGxldCBhY3Rpb24gPSBuZXcgQWN0aW9uU2Nyb2xsKCk7XG5cdFx0YWN0aW9uLmNvcHkodGhpcyk7XG5cdFx0cmV0dXJuIGFjdGlvbjtcblx0fVxuXG5cdGNvcHkoYWN0aW9uKSB7XG5cdFx0dGhpcy51bml0WC5yZW1vdmVFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRvU2Nyb2xsKTtcblx0XHR0aGlzLnVuaXRZLnJlbW92ZUV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZG9TY3JvbGwpO1xuXHRcdHN1cGVyLmNvcHkoYWN0aW9uKTtcblx0XHR0aGlzLnRhcmdldC52YWx1ZSA9IGFjdGlvbi50YXJnZXQudmFsdWU7XG5cdFx0dGhpcy51bml0WC52YWx1ZSA9IGFjdGlvbi51bml0WC52YWx1ZTtcblx0XHR0aGlzLnVuaXRZLnZhbHVlID0gYWN0aW9uLnVuaXRZLnZhbHVlO1xuXHRcdHRoaXMudW5pdHMuc2VsZWN0ZWRJdGVtLnZhbHVlID0gYWN0aW9uLnVuaXRzLnNlbGVjdGVkSXRlbS52YWx1ZTtcblx0XHR0aGlzLnVuaXRYLmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZG9TY3JvbGwpO1xuXHRcdHRoaXMudW5pdFkuYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5kb1Njcm9sbCk7XG5cdH1cblxuXHR0cmlnZ2VyKCkge1xuXHRcdHN3aXRjaCAodGhpcy50YXJnZXQudmFsdWUpIHtcblx0XHRcdGNhc2UgXCJ3aW5kb3dcIjpcblx0XHRcdFx0dGhpcy5zdGFydFgudmFsdWUgPSB3aW5kb3cuc2Nyb2xsWDtcblx0XHRcdFx0dGhpcy5zdGFydFkudmFsdWUgPSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0WC52YWx1ZSA9IGVsZW1lbnQuc2Nyb2xsTGVmdDtcblx0XHRcdFx0dGhpcy5zdGFydFkudmFsdWUgPSBlbGVtZW50LnNjcm9sbFRvcDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGlmKHRoaXMudW5pdHMuc2VsZWN0ZWRJdGVtLnZhbHVlID09IFwicHhcIikge1xuXHRcdFx0dGhpcy5lbmRYLmNvcHkodGhpcy51bml0WCk7XG5cdFx0XHR0aGlzLmVuZFkuY29weSh0aGlzLnVuaXRZKTtcblx0XHR9XG5cdFx0aWYodGhpcy51bml0cy5zZWxlY3RlZEl0ZW0udmFsdWUgPT0gXCIlXCIpIHtcblx0XHRcdGxldCBtYXhTY3JvbGwgPSB7eDowLCB5OjB9O1xuXHRcdFx0c3dpdGNoICh0aGlzLnRhcmdldC52YWx1ZSkge1xuXHRcdFx0XHRjYXNlIFwid2luZG93XCI6XG5cdFx0XHRcdFx0bWF4U2Nyb2xsLnggPSBkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0XHRcdFx0bWF4U2Nyb2xsLnkgPSBkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCAtIHdpbmRvdy5pbm5lckhlaWdodDtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy50YXJnZXQudmFsdWUpO1xuXHRcdFx0XHRcdG1heFNjcm9sbC54ID0gZWxlbWVudC5zY3JvbGxXaWR0aCAtIGVsZW1lbnQuY2xpZW50V2lkdGg7XG5cdFx0XHRcdFx0bWF4U2Nyb2xsLnkgPSBlbGVtZW50LnNjcm9sbEhlaWdodCAtIGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5lbmRYLnZhbHVlID0gTWF0aC5yb3VuZCh0aGlzLnVuaXRYLnZhbHVlIC8gMTAwICogbWF4U2Nyb2xsLngpO1xuXHRcdFx0dGhpcy5lbmRZLnZhbHVlID0gTWF0aC5yb3VuZCh0aGlzLnVuaXRZLnZhbHVlIC8gMTAwICogbWF4U2Nyb2xsLnkpO1xuXHRcdH1cblx0XHRyZXR1cm4gc3VwZXIudHJpZ2dlcigpO1xuXHR9XG5cblx0ZG9TY3JvbGwoKSB7XG5cdFx0dGhpcy5wb3MueCA9IHRoaXMudW5pdFgudmFsdWU7XG5cdFx0dGhpcy5wb3MueSA9IHRoaXMudW5pdFkudmFsdWU7XG5cdFx0dGhpcy50d2VlblVwZGF0ZUhhbmRsZXIoKTtcblx0fVxuXG5cdHR3ZWVuVXBkYXRlSGFuZGxlcigpIHtcblx0XHRzd2l0Y2ggKHRoaXMudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRjYXNlIFwid2luZG93XCI6XG5cdFx0XHRcdHdpbmRvdy5zY3JvbGwodGhpcy5wb3MueCwgdGhpcy5wb3MueSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0bGV0IGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRoaXMudGFyZ2V0LnZhbHVlKTtcblx0XHRcdFx0ZWxlbWVudC5zY3JvbGxMZWZ0ID0gdGhpcy5wb3MueDtcblx0XHRcdFx0ZWxlbWVudC5zY3JvbGxUb3AgPSB0aGlzLnBvcy55O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRzZXJpYWxpemUoKSB7XG5cdFx0bGV0IGRhdGEgPSBzdXBlci5zZXJpYWxpemUoKTtcblx0XHRkYXRhLnRhcmdldCA9IHRoaXMudGFyZ2V0LnNlcmlhbGl6ZSgpO1xuXHRcdGRhdGEudW5pdFggPSB0aGlzLnVuaXRYLnNlcmlhbGl6ZSgpO1xuXHRcdGRhdGEudW5pdFkgPSB0aGlzLnVuaXRZLnNlcmlhbGl6ZSgpO1xuXHRcdGRhdGEudW5pdHMgPSB0aGlzLnVuaXRzLnNlbGVjdGVkSXRlbS52YWx1ZTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdGRlc2VyaWFsaXplKGRhdGEpIHtcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcblx0XHR0aGlzLnVuaXRYLnJlbW92ZUV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZG9TY3JvbGwpO1xuXHRcdHRoaXMudW5pdFkucmVtb3ZlRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5kb1Njcm9sbCk7XG5cdFx0c3VwZXIuZGVzZXJpYWxpemUoZGF0YSk7XG5cdFx0dGhpcy50YXJnZXQuZGVzZXJpYWxpemUoZGF0YS50YXJnZXQpO1xuXHRcdHRoaXMudW5pdFguZGVzZXJpYWxpemUoZGF0YS51bml0WCk7XG5cdFx0dGhpcy51bml0WS5kZXNlcmlhbGl6ZShkYXRhLnVuaXRZKTtcblx0XHR0aGlzLnVuaXRzLnNlbGVjdGVkSXRlbS52YWx1ZSA9IGRhdGEudW5pdHM7XG5cdFx0dGhpcy51bml0WC5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRvU2Nyb2xsKTtcblx0XHR0aGlzLnVuaXRZLmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZG9TY3JvbGwpO1xuXHR9XG5cblx0Y2FwdHVyZSgpIHtcblx0XHRzdXBlci5jYXB0dXJlKCk7XG5cblx0XHR0aGlzLnVuaXRYLnJlbW92ZUV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMuZG9TY3JvbGwpO1xuXHRcdHRoaXMudW5pdFkucmVtb3ZlRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5kb1Njcm9sbCk7XG5cdFx0XG5cdFx0bGV0IHNjcm9sbCA9IG5ldyBQb2ludCgpO1xuXHRcdGxldCBtYXhTY3JvbGwgPSBuZXcgUG9pbnQoKTtcblx0XHRzd2l0Y2ggKHRoaXMudGFyZ2V0LnZhbHVlKSB7XG5cdFx0XHRjYXNlIFwid2luZG93XCI6XG5cdFx0XHRcdHNjcm9sbC54ID0gd2luZG93LnNjcm9sbFg7XG5cdFx0XHRcdHNjcm9sbC55ID0gd2luZG93LnNjcm9sbFk7XG5cdFx0XHRcdG1heFNjcm9sbC54ID0gZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtIHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdFx0XHRtYXhTY3JvbGwueSA9IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnRhcmdldC52YWx1ZSk7XG5cdFx0XHRcdHNjcm9sbC54ID0gZWxlbWVudC5zY3JvbGxMZWZ0O1xuXHRcdFx0XHRzY3JvbGwueSA9IGVsZW1lbnQuc2Nyb2xsVG9wO1xuXHRcdFx0XHRtYXhTY3JvbGwueCA9IGVsZW1lbnQuc2Nyb2xsV2lkdGggLSBlbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdFx0XHRtYXhTY3JvbGwueSA9IGVsZW1lbnQuc2Nyb2xsSGVpZ2h0IC0gZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsZXQgdW5pdCA9IG5ldyBQb2ludCgpO1xuXHRcdHN3aXRjaCh0aGlzLnVuaXRzLnNlbGVjdGVkSXRlbS52YWx1ZSkge1xuXHRcdFx0Y2FzZSBcInB4XCI6XG5cdFx0XHRcdHVuaXQueCA9IHNjcm9sbC54O1xuXHRcdFx0XHR1bml0LnkgPSBzY3JvbGwueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiJVwiOlxuXHRcdFx0XHR1bml0LnggPSBNYXRoLnJvdW5kKHNjcm9sbC54IC8gbWF4U2Nyb2xsLnggKiAxMDApO1xuXHRcdFx0XHR1bml0LnkgPSBNYXRoLnJvdW5kKHNjcm9sbC55IC8gbWF4U2Nyb2xsLnkgKiAxMDApO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cblx0XHRpZihpc05hTih1bml0LngpKSB1bml0LnggPSAwO1xuXHRcdGlmKGlzTmFOKHVuaXQueSkpIHVuaXQueSA9IDA7XG5cblx0XHR0aGlzLnVuaXRYLnZhbHVlID0gdW5pdC54O1xuXHRcdHRoaXMudW5pdFkudmFsdWUgPSB1bml0Lnk7XG5cblx0XHRzZXRUaW1lb3V0KCgpPT4ge1xuXHRcdFx0dGhpcy51bml0WC5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLmRvU2Nyb2xsKTtcblx0XHRcdHRoaXMudW5pdFkuYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5kb1Njcm9sbCk7XG5cdFx0XHR0aGlzLmNhcHR1cmVDb21wbGV0ZSgpO1xuXHRcdH0sIDIwMCk7XG5cdH1cblxuXHRjYXB0dXJlQXRJbml0KCkge1xuXHRcdHN1cGVyLmNhcHR1cmVBdEluaXQoKTtcblx0XHR0aGlzLmNhcHR1cmUoKTtcblx0fVxuXG59IiwiaW1wb3J0IEFjdGlvbiBmcm9tIFwiLi9BY3Rpb25cIjtcbmltcG9ydCBOdW1iZXJEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvTnVtYmVyRGF0YVwiO1xuaW1wb3J0IHtpc1RvdWNofSBmcm9tIFwiLi4vdHN1bmFtaS93aW5kb3dcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vdHN1bmFtaS9nZW9tL1BvaW50XCI7XG5pbXBvcnQgQXJyYXlEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvQXJyYXlEYXRhXCI7XG5pbXBvcnQgU3RyaW5nRGF0YSBmcm9tIFwiLi4vdHN1bmFtaS9kYXRhL1N0cmluZ0RhdGFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uTW91c2VFdmVudCBleHRlbmRzIEFjdGlvbiB7XG5cblx0Y29uc3RydWN0b3IoZXZlbnRUeXBlID0gXCJjbGlja1wiLCB4ID0gMCwgeSA9IDApIHtcblx0XHRzdXBlcihcIkFjdGlvbk1vdXNlRXZlbnRcIiwgXCJNb3VzZUV2ZW50XCIsIFwiQWRkIGEgbW91c2UgZXZlbnRcIik7XG5cdFx0dGhpcy54ID0gbmV3IE51bWJlckRhdGEoeCk7XG5cdFx0dGhpcy55ID0gbmV3IE51bWJlckRhdGEoeSk7XG5cdFx0dGhpcy5ldmVudFR5cGVzID0gbmV3IEFycmF5RGF0YShcImNsaWNrXCIsIFwibW91c2Vkb3duXCIsIFwibW91c2V1cFwiLCBcIm1vdXNlb3ZlclwiLCBcIm1vdXNlb3V0XCIsIFwiZGJsY2xpY2tcIiwgXCJtb3VzZW1vdmVcIiwgXCJtb3VzZWVudGVyXCIsIFwibW91c2VsZWF2ZVwiLCBcImNvbnRleHRtZW51XCIsIFwidG91Y2hzdGFydFwiLCBcInRvdWNobW92ZVwiLCBcInRvdWNoZW5kXCIpO1xuXHRcdHRoaXMuZXZlbnRUeXBlcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSB0aGlzLmV2ZW50VHlwZXMudmFsdWVbMF07XG5cdFx0dGhpcy5pc1Rlc3RhYmxlLnZhbHVlID0gdHJ1ZTtcblx0XHR0aGlzLmlzQ2FwdHVyZWFibGUudmFsdWUgPSB0cnVlO1xuXHRcdHRoaXMuY2hhbmdlQ3Vyc29yT25DYXB0dXJlLnZhbHVlID0gdHJ1ZTtcblx0XHR0aGlzLmNhcHR1cmVNb3VzZUV2ZW50SGFuZGxlciA9IHRoaXMuY2FwdHVyZU1vdXNlRXZlbnRIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5pY29uLnZhbHVlID0gXCJmYXMgZmEtaGFuZC1wb2ludGVyXCI7XG5cdH1cblxuXHRjbG9uZSgpIHtcblx0XHRsZXQgYWN0aW9uID0gbmV3IEFjdGlvbk1vdXNlRXZlbnQoKTtcblx0XHRhY3Rpb24uY29weSh0aGlzKTtcblx0XHRyZXR1cm4gYWN0aW9uO1xuXHR9XG5cblx0Y29weShhY3Rpb24pIHtcblx0XHRzdXBlci5jb3B5KGFjdGlvbik7XG5cdFx0dGhpcy5ldmVudFR5cGVzLnNlbGVjdGVkSXRlbS52YWx1ZSA9IGFjdGlvbi5ldmVudFR5cGVzLnNlbGVjdGVkSXRlbS52YWx1ZTtcblx0XHR0aGlzLngudmFsdWUgPSBhY3Rpb24ueC52YWx1ZTtcblx0XHR0aGlzLnkudmFsdWUgPSBhY3Rpb24ueS52YWx1ZTtcblx0fVxuXG5cdHRyaWdnZXIoKSB7XG5cdFx0bGV0IHBvaW50ID0gbmV3IFBvaW50KHRoaXMueC52YWx1ZSAtIHdpbmRvdy5zY3JvbGxYLCB0aGlzLnkudmFsdWUgIC0gd2luZG93LnNjcm9sbFkpO1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG5cdFx0bGV0IGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQodGhpcy5ldmVudFR5cGVzLnNlbGVjdGVkSXRlbS52YWx1ZSwge1xuXHRcdFx0YnViYmxlczogdHJ1ZSxcblx0XHRcdGNhbmNlbGFibGU6IHRydWUsXG5cdFx0XHR2aWV3OiB3aW5kb3csXG5cdFx0XHRjbGllbnRYOiBwb2ludC54LFxuXHRcdFx0Y2xpZW50WTogcG9pbnQueSxcblx0XHRcdHBhZ2VYOiBwb2ludC54LFxuXHRcdFx0cGFnZVk6IHBvaW50LnksXG5cdFx0XHR4OiBwb2ludC54LFxuXHRcdFx0eTogcG9pbnQueVxuXHRcdH0pO1xuXHRcdGlmIChlbCkge1xuXHRcdFx0ZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTW91c2VFdmVudCBhY3Rpb24gY2Fubm90IGZpbmQgZWxlbWVudCBhdCBwYWdlWCBcIiArIHRoaXMueC52YWx1ZSArIFwiIGFuZCBwYWdlWSBcIiArIHRoaXMueS52YWx1ZSk7XG5cdFx0fVxuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fVxuXG5cdHNlcmlhbGl6ZSgpIHtcblx0XHRsZXQgZGF0YSA9IHN1cGVyLnNlcmlhbGl6ZSgpO1xuXHRcdGRhdGEuZXZlbnRUeXBlID0gdGhpcy5ldmVudFR5cGVzLnNlbGVjdGVkSXRlbS52YWx1ZTtcblx0XHRkYXRhLnggPSB0aGlzLngudmFsdWU7XG5cdFx0ZGF0YS55ID0gdGhpcy55LnZhbHVlO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0ZGVzZXJpYWxpemUoZGF0YSkge1xuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xuXHRcdHN1cGVyLmRlc2VyaWFsaXplKGRhdGEpO1xuXHRcdHRoaXMuZXZlbnRUeXBlcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSBkYXRhLmV2ZW50VHlwZTtcblx0XHR0aGlzLnguZGVzZXJpYWxpemUoZGF0YS54KTtcblx0XHR0aGlzLnkuZGVzZXJpYWxpemUoZGF0YS55KTtcblx0fVxuXG5cdGNhcHR1cmUoKSB7XG5cdFx0c3VwZXIuY2FwdHVyZSgpO1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5jYXB0dXJlTW91c2VFdmVudEhhbmRsZXIpO1xuXHRcdH0sIDMzKTtcblx0fVxuXG5cdGNhcHR1cmVNb3VzZUV2ZW50SGFuZGxlcihldmVudCkge1xuXHRcdC8vIGlmIChldmVudC5wcmV2ZW50RGVmYXV0KSB7XG5cdFx0Ly8gXHRldmVudC5wcmV2ZW50RGVmYXV0KCk7XG5cdFx0Ly8gfVxuXHRcdC8vIGlmIChldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHtcblx0XHQvLyBcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdC8vIH1cblx0XHQvLyBpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB7XG5cdFx0Ly8gXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHQvLyB9XG5cdFx0bGV0IHRvdWNoID0gZXZlbnQ7XG5cdFx0aWYgKGlzVG91Y2gpIHtcblx0XHRcdHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcblx0XHR9XG5cdFx0bGV0IHBvaW50ID0gbmV3IFBvaW50KHRvdWNoLnBhZ2VYLCB0b3VjaC5wYWdlWSk7XG5cdFx0dGhpcy54LnZhbHVlID0gcG9pbnQueDtcblx0XHR0aGlzLnkudmFsdWUgPSBwb2ludC55O1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2FwdHVyZU1vdXNlRXZlbnRIYW5kbGVyKTtcblx0XHR0aGlzLmNhcHR1cmVDb21wbGV0ZSgpO1xuXHR9XG5cblx0Y2FwdHVyZUF0SW5pdCgpIHtcblx0XHRzdXBlci5jYXB0dXJlQXRJbml0KCk7XG5cdFx0dGhpcy5jYXB0dXJlKCk7XG5cdH1cblx0XG59XG4iLCJpbXBvcnQgQWN0aW9uIGZyb20gXCIuL0FjdGlvblwiO1xuaW1wb3J0IFN0cmluZ0RhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9TdHJpbmdEYXRhXCI7XG5cbmxldCBleGFtcGxlID0gYC8qIEV4YW1wbGUgKi9cbmxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgY29uc29sZS5sb2coXCJXYWl0IGZvciAxIHNlY29uZFwiKTtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgfSwgMTAwMCk7XG59KTtcbnJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCIxIHNlY29uZCBoYXMgcGFzc2VkXCIpO1xufSk7XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25FdmFsIGV4dGVuZHMgQWN0aW9uIHtcblxuXHRjb25zdHJ1Y3Rvcihjb2RlID0gJycpIHtcblx0XHRzdXBlcihcIkFjdGlvbkV2YWxcIiwgXCJKYXZhc2NyaXB0XCIsIFwiQWRkIGphdmFzY3JpcHQgY29kZVwiKTtcblx0XHRpZighY29kZSkgY29kZSA9IGV4YW1wbGU7XG5cdFx0dGhpcy5jb2RlID0gbmV3IFN0cmluZ0RhdGEoY29kZSk7XG5cdFx0dGhpcy5pY29uLnZhbHVlID0gXCJmYWIgZmEtanMtc3F1YXJlXCI7XG5cdFx0dGhpcy5pc1Rlc3RhYmxlLnZhbHVlID0gdHJ1ZTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdGxldCBhY3Rpb24gPSBuZXcgQWN0aW9uRXZhbCgpO1xuXHRcdGFjdGlvbi5jb3B5KHRoaXMpO1xuXHRcdHJldHVybiBhY3Rpb247XG5cdH1cblxuXHRjb3B5KGFjdGlvbikge1xuXHRcdHRoaXMuY29kZS52YWx1ZSA9IGFjdGlvbi5jb2RlLnZhbHVlO1xuXHR9XG5cblx0dHJpZ2dlcigpIHtcblx0XHRsZXQgZXhwcmVzc2lvbiA9IHRoaXMuY29kZS52YWx1ZTtcblx0XHRsZXQgcHJvbWlzZSA9IG5ldyBGdW5jdGlvbihleHByZXNzaW9uKSgpO1xuXHRcdGxldCBpc1Byb21pc2UgPSAocHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpO1xuXHRcdGlmKCFpc1Byb21pc2UpIHtcblx0XHRcdHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cblxuXHRzZXJpYWxpemUoKSB7XG5cdFx0bGV0IGRhdGEgPSBzdXBlci5zZXJpYWxpemUoKTtcblx0XHRkYXRhLmNvZGUgPSBlbmNvZGVVUklDb21wb25lbnQodGhpcy5jb2RlLnZhbHVlKTtcblx0XHRyZXR1cm4gZGF0YTtcblx0fVxuXG5cdGRlc2VyaWFsaXplKGRhdGEpIHtcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcblx0XHRzdXBlci5kZXNlcmlhbGl6ZShkYXRhKTtcblx0XHR0aGlzLmNvZGUudmFsdWUgPSBkZWNvZGVVUklDb21wb25lbnQoZGF0YS5jb2RlKTtcblx0fVxuXG59IiwiLyoqXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciB0aGV6d2FwXG4gKi9cblxudmFyIF9sdXQgPSBbXTtcblxuZm9yICggdmFyIGkgPSAwOyBpIDwgMjU2OyBpICsrICkge1xuXG5cdF9sdXRbIGkgXSA9ICggaSA8IDE2ID8gJzAnIDogJycgKSArICggaSApLnRvU3RyaW5nKCAxNiApO1xuXG59XG5cbnZhciBNYXRoVXRpbHMgPSB7XG5cblx0REVHMlJBRDogTWF0aC5QSSAvIDE4MCxcblx0UkFEMkRFRzogMTgwIC8gTWF0aC5QSSxcblxuXHRnZW5lcmF0ZVVVSUQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA1MDM0L2hvdy10by1jcmVhdGUtYS1ndWlkLXV1aWQtaW4tamF2YXNjcmlwdC8yMTk2MzEzNiMyMTk2MzEzNlxuXG5cdFx0dmFyIGQwID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRcdHZhciBkMSA9IE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZmZmIHwgMDtcblx0XHR2YXIgZDIgPSBNYXRoLnJhbmRvbSgpICogMHhmZmZmZmZmZiB8IDA7XG5cdFx0dmFyIGQzID0gTWF0aC5yYW5kb20oKSAqIDB4ZmZmZmZmZmYgfCAwO1xuXHRcdHZhciB1dWlkID0gX2x1dFsgZDAgJiAweGZmIF0gKyBfbHV0WyBkMCA+PiA4ICYgMHhmZiBdICsgX2x1dFsgZDAgPj4gMTYgJiAweGZmIF0gKyBfbHV0WyBkMCA+PiAyNCAmIDB4ZmYgXSArICctJyArXG5cdFx0XHRfbHV0WyBkMSAmIDB4ZmYgXSArIF9sdXRbIGQxID4+IDggJiAweGZmIF0gKyAnLScgKyBfbHV0WyBkMSA+PiAxNiAmIDB4MGYgfCAweDQwIF0gKyBfbHV0WyBkMSA+PiAyNCAmIDB4ZmYgXSArICctJyArXG5cdFx0XHRfbHV0WyBkMiAmIDB4M2YgfCAweDgwIF0gKyBfbHV0WyBkMiA+PiA4ICYgMHhmZiBdICsgJy0nICsgX2x1dFsgZDIgPj4gMTYgJiAweGZmIF0gKyBfbHV0WyBkMiA+PiAyNCAmIDB4ZmYgXSArXG5cdFx0XHRfbHV0WyBkMyAmIDB4ZmYgXSArIF9sdXRbIGQzID4+IDggJiAweGZmIF0gKyBfbHV0WyBkMyA+PiAxNiAmIDB4ZmYgXSArIF9sdXRbIGQzID4+IDI0ICYgMHhmZiBdO1xuXG5cdFx0Ly8gLnRvVXBwZXJDYXNlKCkgaGVyZSBmbGF0dGVucyBjb25jYXRlbmF0ZWQgc3RyaW5ncyB0byBzYXZlIGhlYXAgbWVtb3J5IHNwYWNlLlxuXHRcdHJldHVybiB1dWlkLnRvVXBwZXJDYXNlKCk7XG5cblx0fSxcblxuXHRjbGFtcDogZnVuY3Rpb24gKCB2YWx1ZSwgbWluLCBtYXggKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5tYXgoIG1pbiwgTWF0aC5taW4oIG1heCwgdmFsdWUgKSApO1xuXG5cdH0sXG5cblx0Ly8gY29tcHV0ZSBldWNsaWRpYW4gbW9kdWxvIG9mIG0gJSBuXG5cdC8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01vZHVsb19vcGVyYXRpb25cblxuXHRldWNsaWRlYW5Nb2R1bG86IGZ1bmN0aW9uICggbiwgbSApIHtcblxuXHRcdHJldHVybiAoICggbiAlIG0gKSArIG0gKSAlIG07XG5cblx0fSxcblxuXHQvLyBMaW5lYXIgbWFwcGluZyBmcm9tIHJhbmdlIDxhMSwgYTI+IHRvIHJhbmdlIDxiMSwgYjI+XG5cblx0bWFwTGluZWFyOiBmdW5jdGlvbiAoIHgsIGExLCBhMiwgYjEsIGIyICkge1xuXG5cdFx0cmV0dXJuIGIxICsgKCB4IC0gYTEgKSAqICggYjIgLSBiMSApIC8gKCBhMiAtIGExICk7XG5cblx0fSxcblxuXHQvLyBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaW5lYXJfaW50ZXJwb2xhdGlvblxuXG5cdGxlcnA6IGZ1bmN0aW9uICggeCwgeSwgdCApIHtcblxuXHRcdHJldHVybiAoIDEgLSB0ICkgKiB4ICsgdCAqIHk7XG5cblx0fSxcblxuXHQvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1Ntb290aHN0ZXBcblxuXHRzbW9vdGhzdGVwOiBmdW5jdGlvbiAoIHgsIG1pbiwgbWF4ICkge1xuXG5cdFx0aWYgKCB4IDw9IG1pbiApIHJldHVybiAwO1xuXHRcdGlmICggeCA+PSBtYXggKSByZXR1cm4gMTtcblxuXHRcdHggPSAoIHggLSBtaW4gKSAvICggbWF4IC0gbWluICk7XG5cblx0XHRyZXR1cm4geCAqIHggKiAoIDMgLSAyICogeCApO1xuXG5cdH0sXG5cblx0c21vb3RoZXJzdGVwOiBmdW5jdGlvbiAoIHgsIG1pbiwgbWF4ICkge1xuXG5cdFx0aWYgKCB4IDw9IG1pbiApIHJldHVybiAwO1xuXHRcdGlmICggeCA+PSBtYXggKSByZXR1cm4gMTtcblxuXHRcdHggPSAoIHggLSBtaW4gKSAvICggbWF4IC0gbWluICk7XG5cblx0XHRyZXR1cm4geCAqIHggKiB4ICogKCB4ICogKCB4ICogNiAtIDE1ICkgKyAxMCApO1xuXG5cdH0sXG5cblx0Ly8gUmFuZG9tIGludGVnZXIgZnJvbSA8bG93LCBoaWdoPiBpbnRlcnZhbFxuXG5cdHJhbmRJbnQ6IGZ1bmN0aW9uICggbG93LCBoaWdoICkge1xuXG5cdFx0cmV0dXJuIGxvdyArIE1hdGguZmxvb3IoIE1hdGgucmFuZG9tKCkgKiAoIGhpZ2ggLSBsb3cgKyAxICkgKTtcblxuXHR9LFxuXG5cdC8vIFJhbmRvbSBmbG9hdCBmcm9tIDxsb3csIGhpZ2g+IGludGVydmFsXG5cblx0cmFuZEZsb2F0OiBmdW5jdGlvbiAoIGxvdywgaGlnaCApIHtcblxuXHRcdHJldHVybiBsb3cgKyBNYXRoLnJhbmRvbSgpICogKCBoaWdoIC0gbG93ICk7XG5cblx0fSxcblxuXHQvLyBSYW5kb20gZmxvYXQgZnJvbSA8LXJhbmdlLzIsIHJhbmdlLzI+IGludGVydmFsXG5cblx0cmFuZEZsb2F0U3ByZWFkOiBmdW5jdGlvbiAoIHJhbmdlICkge1xuXG5cdFx0cmV0dXJuIHJhbmdlICogKCAwLjUgLSBNYXRoLnJhbmRvbSgpICk7XG5cblx0fSxcblxuXHRkZWdUb1JhZDogZnVuY3Rpb24gKCBkZWdyZWVzICkge1xuXG5cdFx0cmV0dXJuIGRlZ3JlZXMgKiBNYXRoVXRpbHMuREVHMlJBRDtcblxuXHR9LFxuXG5cdHJhZFRvRGVnOiBmdW5jdGlvbiAoIHJhZGlhbnMgKSB7XG5cblx0XHRyZXR1cm4gcmFkaWFucyAqIE1hdGhVdGlscy5SQUQyREVHO1xuXG5cdH0sXG5cblx0aXNQb3dlck9mVHdvOiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0cmV0dXJuICggdmFsdWUgJiAoIHZhbHVlIC0gMSApICkgPT09IDAgJiYgdmFsdWUgIT09IDA7XG5cblx0fSxcblxuXHRjZWlsUG93ZXJPZlR3bzogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMiwgTWF0aC5jZWlsKCBNYXRoLmxvZyggdmFsdWUgKSAvIE1hdGguTE4yICkgKTtcblxuXHR9LFxuXG5cdGZsb29yUG93ZXJPZlR3bzogZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHRcdHJldHVybiBNYXRoLnBvdyggMiwgTWF0aC5mbG9vciggTWF0aC5sb2coIHZhbHVlICkgLyBNYXRoLkxOMiApICk7XG5cblx0fSxcblxuXHRzZXRRdWF0ZXJuaW9uRnJvbVByb3BlckV1bGVyOiBmdW5jdGlvbiAoIHEsIGEsIGIsIGMsIG9yZGVyICkge1xuXG5cdFx0Ly8gSW50cmluc2ljIFByb3BlciBFdWxlciBBbmdsZXMgLSBzZWUgaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRXVsZXJfYW5nbGVzXG5cblx0XHQvLyByb3RhdGlvbnMgYXJlIGFwcGxpZWQgdG8gdGhlIGF4ZXMgaW4gdGhlIG9yZGVyIHNwZWNpZmllZCBieSAnb3JkZXInXG5cdFx0Ly8gcm90YXRpb24gYnkgYW5nbGUgJ2EnIGlzIGFwcGxpZWQgZmlyc3QsIHRoZW4gYnkgYW5nbGUgJ2InLCB0aGVuIGJ5IGFuZ2xlICdjJ1xuXHRcdC8vIGFuZ2xlcyBhcmUgaW4gcmFkaWFuc1xuXG5cdFx0dmFyIGNvcyA9IE1hdGguY29zO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbjtcblxuXHRcdHZhciBjMiA9IGNvcyggYiAvIDIgKTtcblx0XHR2YXIgczIgPSBzaW4oIGIgLyAyICk7XG5cblx0XHR2YXIgYzEzID0gY29zKCAoIGEgKyBjICkgLyAyICk7XG5cdFx0dmFyIHMxMyA9IHNpbiggKCBhICsgYyApIC8gMiApO1xuXG5cdFx0dmFyIGMxXzMgPSBjb3MoICggYSAtIGMgKSAvIDIgKTtcblx0XHR2YXIgczFfMyA9IHNpbiggKCBhIC0gYyApIC8gMiApO1xuXG5cdFx0dmFyIGMzXzEgPSBjb3MoICggYyAtIGEgKSAvIDIgKTtcblx0XHR2YXIgczNfMSA9IHNpbiggKCBjIC0gYSApIC8gMiApO1xuXG5cdFx0aWYgKCBvcmRlciA9PT0gJ1hZWCcgKSB7XG5cblx0XHRcdHEuc2V0KCBjMiAqIHMxMywgczIgKiBjMV8zLCBzMiAqIHMxXzMsIGMyICogYzEzICk7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1laWScgKSB7XG5cblx0XHRcdHEuc2V0KCBzMiAqIHMxXzMsIGMyICogczEzLCBzMiAqIGMxXzMsIGMyICogYzEzICk7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1pYWicgKSB7XG5cblx0XHRcdHEuc2V0KCBzMiAqIGMxXzMsIHMyICogczFfMywgYzIgKiBzMTMsIGMyICogYzEzICk7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1haWCcgKSB7XG5cblx0XHRcdHEuc2V0KCBjMiAqIHMxMywgczIgKiBzM18xLCBzMiAqIGMzXzEsIGMyICogYzEzICk7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1lYWScgKSB7XG5cblx0XHRcdHEuc2V0KCBzMiAqIGMzXzEsIGMyICogczEzLCBzMiAqIHMzXzEsIGMyICogYzEzICk7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1pZWicgKSB7XG5cblx0XHRcdHEuc2V0KCBzMiAqIHMzXzEsIHMyICogYzNfMSwgYzIgKiBzMTMsIGMyICogYzEzICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5NYXRoVXRpbHM6IC5zZXRRdWF0ZXJuaW9uRnJvbVByb3BlckV1bGVyKCkgZW5jb3VudGVyZWQgYW4gdW5rbm93biBvcmRlci4nICk7XG5cblx0XHR9XG5cblx0fVxuXG59O1xuXG5cbmV4cG9ydCB7IE1hdGhVdGlscyB9O1xuIiwiLyoqXG4gKiBAYXV0aG9yIG1pa2FlbCBlbXRpbmdlciAvIGh0dHA6Ly9nb21vLnNlL1xuICogQGF1dGhvciBhbHRlcmVkcSAvIGh0dHA6Ly9hbHRlcmVkcXVhbGlhLmNvbS9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICogQGF1dGhvciBiaG91c3RvbiAvIGh0dHA6Ly9jbGFyYS5pb1xuICovXG5cbmltcG9ydCB7IE1hdGhVdGlscyB9IGZyb20gJy4vTWF0aFV0aWxzLmpzJztcblxuZnVuY3Rpb24gUXVhdGVybmlvbiggeCwgeSwgeiwgdyApIHtcblxuXHR0aGlzLl94ID0geCB8fCAwO1xuXHR0aGlzLl95ID0geSB8fCAwO1xuXHR0aGlzLl96ID0geiB8fCAwO1xuXHR0aGlzLl93ID0gKCB3ICE9PSB1bmRlZmluZWQgKSA/IHcgOiAxO1xuXG59XG5cbk9iamVjdC5hc3NpZ24oIFF1YXRlcm5pb24sIHtcblxuXHRzbGVycDogZnVuY3Rpb24gKCBxYSwgcWIsIHFtLCB0ICkge1xuXG5cdFx0cmV0dXJuIHFtLmNvcHkoIHFhICkuc2xlcnAoIHFiLCB0ICk7XG5cblx0fSxcblxuXHRzbGVycEZsYXQ6IGZ1bmN0aW9uICggZHN0LCBkc3RPZmZzZXQsIHNyYzAsIHNyY09mZnNldDAsIHNyYzEsIHNyY09mZnNldDEsIHQgKSB7XG5cblx0XHQvLyBmdXp6LWZyZWUsIGFycmF5LWJhc2VkIFF1YXRlcm5pb24gU0xFUlAgb3BlcmF0aW9uXG5cblx0XHR2YXIgeDAgPSBzcmMwWyBzcmNPZmZzZXQwICsgMCBdLFxuXHRcdFx0eTAgPSBzcmMwWyBzcmNPZmZzZXQwICsgMSBdLFxuXHRcdFx0ejAgPSBzcmMwWyBzcmNPZmZzZXQwICsgMiBdLFxuXHRcdFx0dzAgPSBzcmMwWyBzcmNPZmZzZXQwICsgMyBdLFxuXG5cdFx0XHR4MSA9IHNyYzFbIHNyY09mZnNldDEgKyAwIF0sXG5cdFx0XHR5MSA9IHNyYzFbIHNyY09mZnNldDEgKyAxIF0sXG5cdFx0XHR6MSA9IHNyYzFbIHNyY09mZnNldDEgKyAyIF0sXG5cdFx0XHR3MSA9IHNyYzFbIHNyY09mZnNldDEgKyAzIF07XG5cblx0XHRpZiAoIHcwICE9PSB3MSB8fCB4MCAhPT0geDEgfHwgeTAgIT09IHkxIHx8IHowICE9PSB6MSApIHtcblxuXHRcdFx0dmFyIHMgPSAxIC0gdCxcblxuXHRcdFx0XHRjb3MgPSB4MCAqIHgxICsgeTAgKiB5MSArIHowICogejEgKyB3MCAqIHcxLFxuXG5cdFx0XHRcdGRpciA9ICggY29zID49IDAgPyAxIDogLSAxICksXG5cdFx0XHRcdHNxclNpbiA9IDEgLSBjb3MgKiBjb3M7XG5cblx0XHRcdC8vIFNraXAgdGhlIFNsZXJwIGZvciB0aW55IHN0ZXBzIHRvIGF2b2lkIG51bWVyaWMgcHJvYmxlbXM6XG5cdFx0XHRpZiAoIHNxclNpbiA+IE51bWJlci5FUFNJTE9OICkge1xuXG5cdFx0XHRcdHZhciBzaW4gPSBNYXRoLnNxcnQoIHNxclNpbiApLFxuXHRcdFx0XHRcdGxlbiA9IE1hdGguYXRhbjIoIHNpbiwgY29zICogZGlyICk7XG5cblx0XHRcdFx0cyA9IE1hdGguc2luKCBzICogbGVuICkgLyBzaW47XG5cdFx0XHRcdHQgPSBNYXRoLnNpbiggdCAqIGxlbiApIC8gc2luO1xuXG5cdFx0XHR9XG5cblx0XHRcdHZhciB0RGlyID0gdCAqIGRpcjtcblxuXHRcdFx0eDAgPSB4MCAqIHMgKyB4MSAqIHREaXI7XG5cdFx0XHR5MCA9IHkwICogcyArIHkxICogdERpcjtcblx0XHRcdHowID0gejAgKiBzICsgejEgKiB0RGlyO1xuXHRcdFx0dzAgPSB3MCAqIHMgKyB3MSAqIHREaXI7XG5cblx0XHRcdC8vIE5vcm1hbGl6ZSBpbiBjYXNlIHdlIGp1c3QgZGlkIGEgbGVycDpcblx0XHRcdGlmICggcyA9PT0gMSAtIHQgKSB7XG5cblx0XHRcdFx0dmFyIGYgPSAxIC8gTWF0aC5zcXJ0KCB4MCAqIHgwICsgeTAgKiB5MCArIHowICogejAgKyB3MCAqIHcwICk7XG5cblx0XHRcdFx0eDAgKj0gZjtcblx0XHRcdFx0eTAgKj0gZjtcblx0XHRcdFx0ejAgKj0gZjtcblx0XHRcdFx0dzAgKj0gZjtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0ZHN0WyBkc3RPZmZzZXQgXSA9IHgwO1xuXHRcdGRzdFsgZHN0T2Zmc2V0ICsgMSBdID0geTA7XG5cdFx0ZHN0WyBkc3RPZmZzZXQgKyAyIF0gPSB6MDtcblx0XHRkc3RbIGRzdE9mZnNldCArIDMgXSA9IHcwO1xuXG5cdH1cblxufSApO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggUXVhdGVybmlvbi5wcm90b3R5cGUsIHtcblxuXHR4OiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuX3g7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHR0aGlzLl94ID0gdmFsdWU7XG5cdFx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHR9XG5cblx0fSxcblxuXHR5OiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuX3k7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHR0aGlzLl95ID0gdmFsdWU7XG5cdFx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHR9XG5cblx0fSxcblxuXHR6OiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuX3o7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHR0aGlzLl96ID0gdmFsdWU7XG5cdFx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHR9XG5cblx0fSxcblxuXHR3OiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuX3c7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAoIHZhbHVlICkge1xuXG5cdFx0XHR0aGlzLl93ID0gdmFsdWU7XG5cdFx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHR9XG5cblx0fVxuXG59ICk7XG5cbk9iamVjdC5hc3NpZ24oIFF1YXRlcm5pb24ucHJvdG90eXBlLCB7XG5cblx0aXNRdWF0ZXJuaW9uOiB0cnVlLFxuXG5cdHNldDogZnVuY3Rpb24gKCB4LCB5LCB6LCB3ICkge1xuXG5cdFx0dGhpcy5feCA9IHg7XG5cdFx0dGhpcy5feSA9IHk7XG5cdFx0dGhpcy5feiA9IHo7XG5cdFx0dGhpcy5fdyA9IHc7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoIHRoaXMuX3gsIHRoaXMuX3ksIHRoaXMuX3osIHRoaXMuX3cgKTtcblxuXHR9LFxuXG5cdGNvcHk6IGZ1bmN0aW9uICggcXVhdGVybmlvbiApIHtcblxuXHRcdHRoaXMuX3ggPSBxdWF0ZXJuaW9uLng7XG5cdFx0dGhpcy5feSA9IHF1YXRlcm5pb24ueTtcblx0XHR0aGlzLl96ID0gcXVhdGVybmlvbi56O1xuXHRcdHRoaXMuX3cgPSBxdWF0ZXJuaW9uLnc7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldEZyb21FdWxlcjogZnVuY3Rpb24gKCBldWxlciwgdXBkYXRlICkge1xuXG5cdFx0aWYgKCAhICggZXVsZXIgJiYgZXVsZXIuaXNFdWxlciApICkge1xuXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoICdUSFJFRS5RdWF0ZXJuaW9uOiAuc2V0RnJvbUV1bGVyKCkgbm93IGV4cGVjdHMgYW4gRXVsZXIgcm90YXRpb24gcmF0aGVyIHRoYW4gYSBWZWN0b3IzIGFuZCBvcmRlci4nICk7XG5cblx0XHR9XG5cblx0XHR2YXIgeCA9IGV1bGVyLl94LCB5ID0gZXVsZXIuX3ksIHogPSBldWxlci5feiwgb3JkZXIgPSBldWxlci5vcmRlcjtcblxuXHRcdC8vIGh0dHA6Ly93d3cubWF0aHdvcmtzLmNvbS9tYXRsYWJjZW50cmFsL2ZpbGVleGNoYW5nZS9cblx0XHQvLyBcdDIwNjk2LWZ1bmN0aW9uLXRvLWNvbnZlcnQtYmV0d2Vlbi1kY20tZXVsZXItYW5nbGVzLXF1YXRlcm5pb25zLWFuZC1ldWxlci12ZWN0b3JzL1xuXHRcdC8vXHRjb250ZW50L1NwaW5DYWxjLm1cblxuXHRcdHZhciBjb3MgPSBNYXRoLmNvcztcblx0XHR2YXIgc2luID0gTWF0aC5zaW47XG5cblx0XHR2YXIgYzEgPSBjb3MoIHggLyAyICk7XG5cdFx0dmFyIGMyID0gY29zKCB5IC8gMiApO1xuXHRcdHZhciBjMyA9IGNvcyggeiAvIDIgKTtcblxuXHRcdHZhciBzMSA9IHNpbiggeCAvIDIgKTtcblx0XHR2YXIgczIgPSBzaW4oIHkgLyAyICk7XG5cdFx0dmFyIHMzID0gc2luKCB6IC8gMiApO1xuXG5cdFx0aWYgKCBvcmRlciA9PT0gJ1hZWicgKSB7XG5cblx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG5cdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuXHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcblx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1lYWicgKSB7XG5cblx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG5cdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuXHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyAtIHMxICogczIgKiBjMztcblx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1pYWScgKSB7XG5cblx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgLSBjMSAqIHMyICogczM7XG5cdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzICsgczEgKiBjMiAqIHMzO1xuXHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcblx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1pZWCcgKSB7XG5cblx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgLSBjMSAqIHMyICogczM7XG5cdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzICsgczEgKiBjMiAqIHMzO1xuXHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyAtIHMxICogczIgKiBjMztcblx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1laWCcgKSB7XG5cblx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgKyBjMSAqIHMyICogczM7XG5cdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzICsgczEgKiBjMiAqIHMzO1xuXHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyAtIHMxICogczIgKiBjMztcblx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgLSBzMSAqIHMyICogczM7XG5cblx0XHR9IGVsc2UgaWYgKCBvcmRlciA9PT0gJ1haWScgKSB7XG5cblx0XHRcdHRoaXMuX3ggPSBzMSAqIGMyICogYzMgLSBjMSAqIHMyICogczM7XG5cdFx0XHR0aGlzLl95ID0gYzEgKiBzMiAqIGMzIC0gczEgKiBjMiAqIHMzO1xuXHRcdFx0dGhpcy5feiA9IGMxICogYzIgKiBzMyArIHMxICogczIgKiBjMztcblx0XHRcdHRoaXMuX3cgPSBjMSAqIGMyICogYzMgKyBzMSAqIHMyICogczM7XG5cblx0XHR9XG5cblx0XHRpZiAoIHVwZGF0ZSAhPT0gZmFsc2UgKSB0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldEZyb21BeGlzQW5nbGU6IGZ1bmN0aW9uICggYXhpcywgYW5nbGUgKSB7XG5cblx0XHQvLyBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9nZW9tZXRyeS9yb3RhdGlvbnMvY29udmVyc2lvbnMvYW5nbGVUb1F1YXRlcm5pb24vaW5kZXguaHRtXG5cblx0XHQvLyBhc3N1bWVzIGF4aXMgaXMgbm9ybWFsaXplZFxuXG5cdFx0dmFyIGhhbGZBbmdsZSA9IGFuZ2xlIC8gMiwgcyA9IE1hdGguc2luKCBoYWxmQW5nbGUgKTtcblxuXHRcdHRoaXMuX3ggPSBheGlzLnggKiBzO1xuXHRcdHRoaXMuX3kgPSBheGlzLnkgKiBzO1xuXHRcdHRoaXMuX3ogPSBheGlzLnogKiBzO1xuXHRcdHRoaXMuX3cgPSBNYXRoLmNvcyggaGFsZkFuZ2xlICk7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldEZyb21Sb3RhdGlvbk1hdHJpeDogZnVuY3Rpb24gKCBtICkge1xuXG5cdFx0Ly8gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvZ2VvbWV0cnkvcm90YXRpb25zL2NvbnZlcnNpb25zL21hdHJpeFRvUXVhdGVybmlvbi9pbmRleC5odG1cblxuXHRcdC8vIGFzc3VtZXMgdGhlIHVwcGVyIDN4MyBvZiBtIGlzIGEgcHVyZSByb3RhdGlvbiBtYXRyaXggKGkuZSwgdW5zY2FsZWQpXG5cblx0XHR2YXIgdGUgPSBtLmVsZW1lbnRzLFxuXG5cdFx0XHRtMTEgPSB0ZVsgMCBdLCBtMTIgPSB0ZVsgNCBdLCBtMTMgPSB0ZVsgOCBdLFxuXHRcdFx0bTIxID0gdGVbIDEgXSwgbTIyID0gdGVbIDUgXSwgbTIzID0gdGVbIDkgXSxcblx0XHRcdG0zMSA9IHRlWyAyIF0sIG0zMiA9IHRlWyA2IF0sIG0zMyA9IHRlWyAxMCBdLFxuXG5cdFx0XHR0cmFjZSA9IG0xMSArIG0yMiArIG0zMyxcblx0XHRcdHM7XG5cblx0XHRpZiAoIHRyYWNlID4gMCApIHtcblxuXHRcdFx0cyA9IDAuNSAvIE1hdGguc3FydCggdHJhY2UgKyAxLjAgKTtcblxuXHRcdFx0dGhpcy5fdyA9IDAuMjUgLyBzO1xuXHRcdFx0dGhpcy5feCA9ICggbTMyIC0gbTIzICkgKiBzO1xuXHRcdFx0dGhpcy5feSA9ICggbTEzIC0gbTMxICkgKiBzO1xuXHRcdFx0dGhpcy5feiA9ICggbTIxIC0gbTEyICkgKiBzO1xuXG5cdFx0fSBlbHNlIGlmICggbTExID4gbTIyICYmIG0xMSA+IG0zMyApIHtcblxuXHRcdFx0cyA9IDIuMCAqIE1hdGguc3FydCggMS4wICsgbTExIC0gbTIyIC0gbTMzICk7XG5cblx0XHRcdHRoaXMuX3cgPSAoIG0zMiAtIG0yMyApIC8gcztcblx0XHRcdHRoaXMuX3ggPSAwLjI1ICogcztcblx0XHRcdHRoaXMuX3kgPSAoIG0xMiArIG0yMSApIC8gcztcblx0XHRcdHRoaXMuX3ogPSAoIG0xMyArIG0zMSApIC8gcztcblxuXHRcdH0gZWxzZSBpZiAoIG0yMiA+IG0zMyApIHtcblxuXHRcdFx0cyA9IDIuMCAqIE1hdGguc3FydCggMS4wICsgbTIyIC0gbTExIC0gbTMzICk7XG5cblx0XHRcdHRoaXMuX3cgPSAoIG0xMyAtIG0zMSApIC8gcztcblx0XHRcdHRoaXMuX3ggPSAoIG0xMiArIG0yMSApIC8gcztcblx0XHRcdHRoaXMuX3kgPSAwLjI1ICogcztcblx0XHRcdHRoaXMuX3ogPSAoIG0yMyArIG0zMiApIC8gcztcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHMgPSAyLjAgKiBNYXRoLnNxcnQoIDEuMCArIG0zMyAtIG0xMSAtIG0yMiApO1xuXG5cdFx0XHR0aGlzLl93ID0gKCBtMjEgLSBtMTIgKSAvIHM7XG5cdFx0XHR0aGlzLl94ID0gKCBtMTMgKyBtMzEgKSAvIHM7XG5cdFx0XHR0aGlzLl95ID0gKCBtMjMgKyBtMzIgKSAvIHM7XG5cdFx0XHR0aGlzLl96ID0gMC4yNSAqIHM7XG5cblx0XHR9XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldEZyb21Vbml0VmVjdG9yczogZnVuY3Rpb24gKCB2RnJvbSwgdlRvICkge1xuXG5cdFx0Ly8gYXNzdW1lcyBkaXJlY3Rpb24gdmVjdG9ycyB2RnJvbSBhbmQgdlRvIGFyZSBub3JtYWxpemVkXG5cblx0XHR2YXIgRVBTID0gMC4wMDAwMDE7XG5cblx0XHR2YXIgciA9IHZGcm9tLmRvdCggdlRvICkgKyAxO1xuXG5cdFx0aWYgKCByIDwgRVBTICkge1xuXG5cdFx0XHRyID0gMDtcblxuXHRcdFx0aWYgKCBNYXRoLmFicyggdkZyb20ueCApID4gTWF0aC5hYnMoIHZGcm9tLnogKSApIHtcblxuXHRcdFx0XHR0aGlzLl94ID0gLSB2RnJvbS55O1xuXHRcdFx0XHR0aGlzLl95ID0gdkZyb20ueDtcblx0XHRcdFx0dGhpcy5feiA9IDA7XG5cdFx0XHRcdHRoaXMuX3cgPSByO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHRoaXMuX3ggPSAwO1xuXHRcdFx0XHR0aGlzLl95ID0gLSB2RnJvbS56O1xuXHRcdFx0XHR0aGlzLl96ID0gdkZyb20ueTtcblx0XHRcdFx0dGhpcy5fdyA9IHI7XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIGNyb3NzVmVjdG9ycyggdkZyb20sIHZUbyApOyAvLyBpbmxpbmVkIHRvIGF2b2lkIGN5Y2xpYyBkZXBlbmRlbmN5IG9uIFZlY3RvcjNcblxuXHRcdFx0dGhpcy5feCA9IHZGcm9tLnkgKiB2VG8ueiAtIHZGcm9tLnogKiB2VG8ueTtcblx0XHRcdHRoaXMuX3kgPSB2RnJvbS56ICogdlRvLnggLSB2RnJvbS54ICogdlRvLno7XG5cdFx0XHR0aGlzLl96ID0gdkZyb20ueCAqIHZUby55IC0gdkZyb20ueSAqIHZUby54O1xuXHRcdFx0dGhpcy5fdyA9IHI7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcblxuXHR9LFxuXG5cdGFuZ2xlVG86IGZ1bmN0aW9uICggcSApIHtcblxuXHRcdHJldHVybiAyICogTWF0aC5hY29zKCBNYXRoLmFicyggTWF0aFV0aWxzLmNsYW1wKCB0aGlzLmRvdCggcSApLCAtIDEsIDEgKSApICk7XG5cblx0fSxcblxuXHRyb3RhdGVUb3dhcmRzOiBmdW5jdGlvbiAoIHEsIHN0ZXAgKSB7XG5cblx0XHR2YXIgYW5nbGUgPSB0aGlzLmFuZ2xlVG8oIHEgKTtcblxuXHRcdGlmICggYW5nbGUgPT09IDAgKSByZXR1cm4gdGhpcztcblxuXHRcdHZhciB0ID0gTWF0aC5taW4oIDEsIHN0ZXAgLyBhbmdsZSApO1xuXG5cdFx0dGhpcy5zbGVycCggcSwgdCApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRpbnZlcnNlOiBmdW5jdGlvbiAoKSB7XG5cblx0XHQvLyBxdWF0ZXJuaW9uIGlzIGFzc3VtZWQgdG8gaGF2ZSB1bml0IGxlbmd0aFxuXG5cdFx0cmV0dXJuIHRoaXMuY29uanVnYXRlKCk7XG5cblx0fSxcblxuXHRjb25qdWdhdGU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuX3ggKj0gLSAxO1xuXHRcdHRoaXMuX3kgKj0gLSAxO1xuXHRcdHRoaXMuX3ogKj0gLSAxO1xuXG5cdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRkb3Q6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdHJldHVybiB0aGlzLl94ICogdi5feCArIHRoaXMuX3kgKiB2Ll95ICsgdGhpcy5feiAqIHYuX3ogKyB0aGlzLl93ICogdi5fdztcblxuXHR9LFxuXG5cdGxlbmd0aFNxOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5feCAqIHRoaXMuX3ggKyB0aGlzLl95ICogdGhpcy5feSArIHRoaXMuX3ogKiB0aGlzLl96ICsgdGhpcy5fdyAqIHRoaXMuX3c7XG5cblx0fSxcblxuXHRsZW5ndGg6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBNYXRoLnNxcnQoIHRoaXMuX3ggKiB0aGlzLl94ICsgdGhpcy5feSAqIHRoaXMuX3kgKyB0aGlzLl96ICogdGhpcy5feiArIHRoaXMuX3cgKiB0aGlzLl93ICk7XG5cblx0fSxcblxuXHRub3JtYWxpemU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciBsID0gdGhpcy5sZW5ndGgoKTtcblxuXHRcdGlmICggbCA9PT0gMCApIHtcblxuXHRcdFx0dGhpcy5feCA9IDA7XG5cdFx0XHR0aGlzLl95ID0gMDtcblx0XHRcdHRoaXMuX3ogPSAwO1xuXHRcdFx0dGhpcy5fdyA9IDE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRsID0gMSAvIGw7XG5cblx0XHRcdHRoaXMuX3ggPSB0aGlzLl94ICogbDtcblx0XHRcdHRoaXMuX3kgPSB0aGlzLl95ICogbDtcblx0XHRcdHRoaXMuX3ogPSB0aGlzLl96ICogbDtcblx0XHRcdHRoaXMuX3cgPSB0aGlzLl93ICogbDtcblxuXHRcdH1cblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0bXVsdGlwbHk6IGZ1bmN0aW9uICggcSwgcCApIHtcblxuXHRcdGlmICggcCAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5RdWF0ZXJuaW9uOiAubXVsdGlwbHkoKSBub3cgb25seSBhY2NlcHRzIG9uZSBhcmd1bWVudC4gVXNlIC5tdWx0aXBseVF1YXRlcm5pb25zKCBhLCBiICkgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKCBxLCBwICk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVF1YXRlcm5pb25zKCB0aGlzLCBxICk7XG5cblx0fSxcblxuXHRwcmVtdWx0aXBseTogZnVuY3Rpb24gKCBxICkge1xuXG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlRdWF0ZXJuaW9ucyggcSwgdGhpcyApO1xuXG5cdH0sXG5cblx0bXVsdGlwbHlRdWF0ZXJuaW9uczogZnVuY3Rpb24gKCBhLCBiICkge1xuXG5cdFx0Ly8gZnJvbSBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL3JlYWxOb3JtZWRBbGdlYnJhL3F1YXRlcm5pb25zL2NvZGUvaW5kZXguaHRtXG5cblx0XHR2YXIgcWF4ID0gYS5feCwgcWF5ID0gYS5feSwgcWF6ID0gYS5feiwgcWF3ID0gYS5fdztcblx0XHR2YXIgcWJ4ID0gYi5feCwgcWJ5ID0gYi5feSwgcWJ6ID0gYi5feiwgcWJ3ID0gYi5fdztcblxuXHRcdHRoaXMuX3ggPSBxYXggKiBxYncgKyBxYXcgKiBxYnggKyBxYXkgKiBxYnogLSBxYXogKiBxYnk7XG5cdFx0dGhpcy5feSA9IHFheSAqIHFidyArIHFhdyAqIHFieSArIHFheiAqIHFieCAtIHFheCAqIHFiejtcblx0XHR0aGlzLl96ID0gcWF6ICogcWJ3ICsgcWF3ICogcWJ6ICsgcWF4ICogcWJ5IC0gcWF5ICogcWJ4O1xuXHRcdHRoaXMuX3cgPSBxYXcgKiBxYncgLSBxYXggKiBxYnggLSBxYXkgKiBxYnkgLSBxYXogKiBxYno7XG5cblx0XHR0aGlzLl9vbkNoYW5nZUNhbGxiYWNrKCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNsZXJwOiBmdW5jdGlvbiAoIHFiLCB0ICkge1xuXG5cdFx0aWYgKCB0ID09PSAwICkgcmV0dXJuIHRoaXM7XG5cdFx0aWYgKCB0ID09PSAxICkgcmV0dXJuIHRoaXMuY29weSggcWIgKTtcblxuXHRcdHZhciB4ID0gdGhpcy5feCwgeSA9IHRoaXMuX3ksIHogPSB0aGlzLl96LCB3ID0gdGhpcy5fdztcblxuXHRcdC8vIGh0dHA6Ly93d3cuZXVjbGlkZWFuc3BhY2UuY29tL21hdGhzL2FsZ2VicmEvcmVhbE5vcm1lZEFsZ2VicmEvcXVhdGVybmlvbnMvc2xlcnAvXG5cblx0XHR2YXIgY29zSGFsZlRoZXRhID0gdyAqIHFiLl93ICsgeCAqIHFiLl94ICsgeSAqIHFiLl95ICsgeiAqIHFiLl96O1xuXG5cdFx0aWYgKCBjb3NIYWxmVGhldGEgPCAwICkge1xuXG5cdFx0XHR0aGlzLl93ID0gLSBxYi5fdztcblx0XHRcdHRoaXMuX3ggPSAtIHFiLl94O1xuXHRcdFx0dGhpcy5feSA9IC0gcWIuX3k7XG5cdFx0XHR0aGlzLl96ID0gLSBxYi5fejtcblxuXHRcdFx0Y29zSGFsZlRoZXRhID0gLSBjb3NIYWxmVGhldGE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLmNvcHkoIHFiICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIGNvc0hhbGZUaGV0YSA+PSAxLjAgKSB7XG5cblx0XHRcdHRoaXMuX3cgPSB3O1xuXHRcdFx0dGhpcy5feCA9IHg7XG5cdFx0XHR0aGlzLl95ID0geTtcblx0XHRcdHRoaXMuX3ogPSB6O1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1cblxuXHRcdHZhciBzcXJTaW5IYWxmVGhldGEgPSAxLjAgLSBjb3NIYWxmVGhldGEgKiBjb3NIYWxmVGhldGE7XG5cblx0XHRpZiAoIHNxclNpbkhhbGZUaGV0YSA8PSBOdW1iZXIuRVBTSUxPTiApIHtcblxuXHRcdFx0dmFyIHMgPSAxIC0gdDtcblx0XHRcdHRoaXMuX3cgPSBzICogdyArIHQgKiB0aGlzLl93O1xuXHRcdFx0dGhpcy5feCA9IHMgKiB4ICsgdCAqIHRoaXMuX3g7XG5cdFx0XHR0aGlzLl95ID0gcyAqIHkgKyB0ICogdGhpcy5feTtcblx0XHRcdHRoaXMuX3ogPSBzICogeiArIHQgKiB0aGlzLl96O1xuXG5cdFx0XHR0aGlzLm5vcm1hbGl6ZSgpO1xuXHRcdFx0dGhpcy5fb25DaGFuZ2VDYWxsYmFjaygpO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdH1cblxuXHRcdHZhciBzaW5IYWxmVGhldGEgPSBNYXRoLnNxcnQoIHNxclNpbkhhbGZUaGV0YSApO1xuXHRcdHZhciBoYWxmVGhldGEgPSBNYXRoLmF0YW4yKCBzaW5IYWxmVGhldGEsIGNvc0hhbGZUaGV0YSApO1xuXHRcdHZhciByYXRpb0EgPSBNYXRoLnNpbiggKCAxIC0gdCApICogaGFsZlRoZXRhICkgLyBzaW5IYWxmVGhldGEsXG5cdFx0XHRyYXRpb0IgPSBNYXRoLnNpbiggdCAqIGhhbGZUaGV0YSApIC8gc2luSGFsZlRoZXRhO1xuXG5cdFx0dGhpcy5fdyA9ICggdyAqIHJhdGlvQSArIHRoaXMuX3cgKiByYXRpb0IgKTtcblx0XHR0aGlzLl94ID0gKCB4ICogcmF0aW9BICsgdGhpcy5feCAqIHJhdGlvQiApO1xuXHRcdHRoaXMuX3kgPSAoIHkgKiByYXRpb0EgKyB0aGlzLl95ICogcmF0aW9CICk7XG5cdFx0dGhpcy5feiA9ICggeiAqIHJhdGlvQSArIHRoaXMuX3ogKiByYXRpb0IgKTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZXF1YWxzOiBmdW5jdGlvbiAoIHF1YXRlcm5pb24gKSB7XG5cblx0XHRyZXR1cm4gKCBxdWF0ZXJuaW9uLl94ID09PSB0aGlzLl94ICkgJiYgKCBxdWF0ZXJuaW9uLl95ID09PSB0aGlzLl95ICkgJiYgKCBxdWF0ZXJuaW9uLl96ID09PSB0aGlzLl96ICkgJiYgKCBxdWF0ZXJuaW9uLl93ID09PSB0aGlzLl93ICk7XG5cblx0fSxcblxuXHRmcm9tQXJyYXk6IGZ1bmN0aW9uICggYXJyYXksIG9mZnNldCApIHtcblxuXHRcdGlmICggb2Zmc2V0ID09PSB1bmRlZmluZWQgKSBvZmZzZXQgPSAwO1xuXG5cdFx0dGhpcy5feCA9IGFycmF5WyBvZmZzZXQgXTtcblx0XHR0aGlzLl95ID0gYXJyYXlbIG9mZnNldCArIDEgXTtcblx0XHR0aGlzLl96ID0gYXJyYXlbIG9mZnNldCArIDIgXTtcblx0XHR0aGlzLl93ID0gYXJyYXlbIG9mZnNldCArIDMgXTtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2soKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0dG9BcnJheTogZnVuY3Rpb24gKCBhcnJheSwgb2Zmc2V0ICkge1xuXG5cdFx0aWYgKCBhcnJheSA9PT0gdW5kZWZpbmVkICkgYXJyYXkgPSBbXTtcblx0XHRpZiAoIG9mZnNldCA9PT0gdW5kZWZpbmVkICkgb2Zmc2V0ID0gMDtcblxuXHRcdGFycmF5WyBvZmZzZXQgXSA9IHRoaXMuX3g7XG5cdFx0YXJyYXlbIG9mZnNldCArIDEgXSA9IHRoaXMuX3k7XG5cdFx0YXJyYXlbIG9mZnNldCArIDIgXSA9IHRoaXMuX3o7XG5cdFx0YXJyYXlbIG9mZnNldCArIDMgXSA9IHRoaXMuX3c7XG5cblx0XHRyZXR1cm4gYXJyYXk7XG5cblx0fSxcblxuXHRmcm9tQnVmZmVyQXR0cmlidXRlOiBmdW5jdGlvbiAoIGF0dHJpYnV0ZSwgaW5kZXggKSB7XG5cblx0XHR0aGlzLl94ID0gYXR0cmlidXRlLmdldFgoIGluZGV4ICk7XG5cdFx0dGhpcy5feSA9IGF0dHJpYnV0ZS5nZXRZKCBpbmRleCApO1xuXHRcdHRoaXMuX3ogPSBhdHRyaWJ1dGUuZ2V0WiggaW5kZXggKTtcblx0XHR0aGlzLl93ID0gYXR0cmlidXRlLmdldFcoIGluZGV4ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdF9vbkNoYW5nZTogZnVuY3Rpb24gKCBjYWxsYmFjayApIHtcblxuXHRcdHRoaXMuX29uQ2hhbmdlQ2FsbGJhY2sgPSBjYWxsYmFjaztcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0X29uQ2hhbmdlQ2FsbGJhY2s6IGZ1bmN0aW9uICgpIHt9XG5cbn0gKTtcblxuXG5leHBvcnQgeyBRdWF0ZXJuaW9uIH07XG4iLCJpbXBvcnQgeyBNYXRoVXRpbHMgfSBmcm9tICcuL01hdGhVdGlscy5qcyc7XG5pbXBvcnQgeyBRdWF0ZXJuaW9uIH0gZnJvbSAnLi9RdWF0ZXJuaW9uLmpzJztcblxuLyoqXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICogQGF1dGhvciBraWxlIC8gaHR0cDovL2tpbGUuc3RyYXZhZ2FuemEub3JnL1xuICogQGF1dGhvciBwaGlsb2diIC8gaHR0cDovL2Jsb2cudGhlaml0Lm9yZy9cbiAqIEBhdXRob3IgbWlrYWVsIGVtdGluZ2VyIC8gaHR0cDovL2dvbW8uc2UvXG4gKiBAYXV0aG9yIGVncmFldGhlciAvIGh0dHA6Ly9lZ3JhZXRoZXIuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKi9cblxudmFyIF92ZWN0b3IgPSBuZXcgVmVjdG9yMygpO1xudmFyIF9xdWF0ZXJuaW9uID0gbmV3IFF1YXRlcm5pb24oKTtcblxuZnVuY3Rpb24gVmVjdG9yMyggeCwgeSwgeiApIHtcblxuXHR0aGlzLnggPSB4IHx8IDA7XG5cdHRoaXMueSA9IHkgfHwgMDtcblx0dGhpcy56ID0geiB8fCAwO1xuXG59XG5cbk9iamVjdC5hc3NpZ24oIFZlY3RvcjMucHJvdG90eXBlLCB7XG5cblx0aXNWZWN0b3IzOiB0cnVlLFxuXG5cdHNldDogZnVuY3Rpb24gKCB4LCB5LCB6ICkge1xuXG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMueiA9IHo7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldFNjYWxhcjogZnVuY3Rpb24gKCBzY2FsYXIgKSB7XG5cblx0XHR0aGlzLnggPSBzY2FsYXI7XG5cdFx0dGhpcy55ID0gc2NhbGFyO1xuXHRcdHRoaXMueiA9IHNjYWxhcjtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c2V0WDogZnVuY3Rpb24gKCB4ICkge1xuXG5cdFx0dGhpcy54ID0geDtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c2V0WTogZnVuY3Rpb24gKCB5ICkge1xuXG5cdFx0dGhpcy55ID0geTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c2V0WjogZnVuY3Rpb24gKCB6ICkge1xuXG5cdFx0dGhpcy56ID0gejtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c2V0Q29tcG9uZW50OiBmdW5jdGlvbiAoIGluZGV4LCB2YWx1ZSApIHtcblxuXHRcdHN3aXRjaCAoIGluZGV4ICkge1xuXG5cdFx0XHRjYXNlIDA6IHRoaXMueCA9IHZhbHVlOyBicmVhaztcblx0XHRcdGNhc2UgMTogdGhpcy55ID0gdmFsdWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSAyOiB0aGlzLnogPSB2YWx1ZTsgYnJlYWs7XG5cdFx0XHRkZWZhdWx0OiB0aHJvdyBuZXcgRXJyb3IoICdpbmRleCBpcyBvdXQgb2YgcmFuZ2U6ICcgKyBpbmRleCApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRnZXRDb21wb25lbnQ6IGZ1bmN0aW9uICggaW5kZXggKSB7XG5cblx0XHRzd2l0Y2ggKCBpbmRleCApIHtcblxuXHRcdFx0Y2FzZSAwOiByZXR1cm4gdGhpcy54O1xuXHRcdFx0Y2FzZSAxOiByZXR1cm4gdGhpcy55O1xuXHRcdFx0Y2FzZSAyOiByZXR1cm4gdGhpcy56O1xuXHRcdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCAnaW5kZXggaXMgb3V0IG9mIHJhbmdlOiAnICsgaW5kZXggKTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gbmV3IHRoaXMuY29uc3RydWN0b3IoIHRoaXMueCwgdGhpcy55LCB0aGlzLnogKTtcblxuXHR9LFxuXG5cdGNvcHk6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdHRoaXMueCA9IHYueDtcblx0XHR0aGlzLnkgPSB2Lnk7XG5cdFx0dGhpcy56ID0gdi56O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uICggdiwgdyApIHtcblxuXHRcdGlmICggdyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5WZWN0b3IzOiAuYWRkKCkgbm93IG9ubHkgYWNjZXB0cyBvbmUgYXJndW1lbnQuIFVzZSAuYWRkVmVjdG9ycyggYSwgYiApIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuYWRkVmVjdG9ycyggdiwgdyApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy54ICs9IHYueDtcblx0XHR0aGlzLnkgKz0gdi55O1xuXHRcdHRoaXMueiArPSB2Lno7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGFkZFNjYWxhcjogZnVuY3Rpb24gKCBzICkge1xuXG5cdFx0dGhpcy54ICs9IHM7XG5cdFx0dGhpcy55ICs9IHM7XG5cdFx0dGhpcy56ICs9IHM7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGFkZFZlY3RvcnM6IGZ1bmN0aW9uICggYSwgYiApIHtcblxuXHRcdHRoaXMueCA9IGEueCArIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgKyBiLnk7XG5cdFx0dGhpcy56ID0gYS56ICsgYi56O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRhZGRTY2FsZWRWZWN0b3I6IGZ1bmN0aW9uICggdiwgcyApIHtcblxuXHRcdHRoaXMueCArPSB2LnggKiBzO1xuXHRcdHRoaXMueSArPSB2LnkgKiBzO1xuXHRcdHRoaXMueiArPSB2LnogKiBzO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRzdWI6IGZ1bmN0aW9uICggdiwgdyApIHtcblxuXHRcdGlmICggdyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5WZWN0b3IzOiAuc3ViKCkgbm93IG9ubHkgYWNjZXB0cyBvbmUgYXJndW1lbnQuIFVzZSAuc3ViVmVjdG9ycyggYSwgYiApIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMuc3ViVmVjdG9ycyggdiwgdyApO1xuXG5cdFx0fVxuXG5cdFx0dGhpcy54IC09IHYueDtcblx0XHR0aGlzLnkgLT0gdi55O1xuXHRcdHRoaXMueiAtPSB2Lno7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN1YlNjYWxhcjogZnVuY3Rpb24gKCBzICkge1xuXG5cdFx0dGhpcy54IC09IHM7XG5cdFx0dGhpcy55IC09IHM7XG5cdFx0dGhpcy56IC09IHM7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHN1YlZlY3RvcnM6IGZ1bmN0aW9uICggYSwgYiApIHtcblxuXHRcdHRoaXMueCA9IGEueCAtIGIueDtcblx0XHR0aGlzLnkgPSBhLnkgLSBiLnk7XG5cdFx0dGhpcy56ID0gYS56IC0gYi56O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRtdWx0aXBseTogZnVuY3Rpb24gKCB2LCB3ICkge1xuXG5cdFx0aWYgKCB3ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLlZlY3RvcjM6IC5tdWx0aXBseSgpIG5vdyBvbmx5IGFjY2VwdHMgb25lIGFyZ3VtZW50LiBVc2UgLm11bHRpcGx5VmVjdG9ycyggYSwgYiApIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlWZWN0b3JzKCB2LCB3ICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnggKj0gdi54O1xuXHRcdHRoaXMueSAqPSB2Lnk7XG5cdFx0dGhpcy56ICo9IHYuejtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0bXVsdGlwbHlTY2FsYXI6IGZ1bmN0aW9uICggc2NhbGFyICkge1xuXG5cdFx0dGhpcy54ICo9IHNjYWxhcjtcblx0XHR0aGlzLnkgKj0gc2NhbGFyO1xuXHRcdHRoaXMueiAqPSBzY2FsYXI7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG11bHRpcGx5VmVjdG9yczogZnVuY3Rpb24gKCBhLCBiICkge1xuXG5cdFx0dGhpcy54ID0gYS54ICogYi54O1xuXHRcdHRoaXMueSA9IGEueSAqIGIueTtcblx0XHR0aGlzLnogPSBhLnogKiBiLno7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGFwcGx5RXVsZXI6IGZ1bmN0aW9uICggZXVsZXIgKSB7XG5cblx0XHRpZiAoICEgKCBldWxlciAmJiBldWxlci5pc0V1bGVyICkgKSB7XG5cblx0XHRcdGNvbnNvbGUuZXJyb3IoICdUSFJFRS5WZWN0b3IzOiAuYXBwbHlFdWxlcigpIG5vdyBleHBlY3RzIGFuIEV1bGVyIHJvdGF0aW9uIHJhdGhlciB0aGFuIGEgVmVjdG9yMyBhbmQgb3JkZXIuJyApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuYXBwbHlRdWF0ZXJuaW9uKCBfcXVhdGVybmlvbi5zZXRGcm9tRXVsZXIoIGV1bGVyICkgKTtcblxuXHR9LFxuXG5cdGFwcGx5QXhpc0FuZ2xlOiBmdW5jdGlvbiAoIGF4aXMsIGFuZ2xlICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuYXBwbHlRdWF0ZXJuaW9uKCBfcXVhdGVybmlvbi5zZXRGcm9tQXhpc0FuZ2xlKCBheGlzLCBhbmdsZSApICk7XG5cblx0fSxcblxuXHRhcHBseU1hdHJpeDM6IGZ1bmN0aW9uICggbSApIHtcblxuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55LCB6ID0gdGhpcy56O1xuXHRcdHZhciBlID0gbS5lbGVtZW50cztcblxuXHRcdHRoaXMueCA9IGVbIDAgXSAqIHggKyBlWyAzIF0gKiB5ICsgZVsgNiBdICogejtcblx0XHR0aGlzLnkgPSBlWyAxIF0gKiB4ICsgZVsgNCBdICogeSArIGVbIDcgXSAqIHo7XG5cdFx0dGhpcy56ID0gZVsgMiBdICogeCArIGVbIDUgXSAqIHkgKyBlWyA4IF0gKiB6O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRhcHBseU5vcm1hbE1hdHJpeDogZnVuY3Rpb24gKCBtICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuYXBwbHlNYXRyaXgzKCBtICkubm9ybWFsaXplKCk7XG5cblx0fSxcblxuXHRhcHBseU1hdHJpeDQ6IGZ1bmN0aW9uICggbSApIHtcblxuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55LCB6ID0gdGhpcy56O1xuXHRcdHZhciBlID0gbS5lbGVtZW50cztcblxuXHRcdHZhciB3ID0gMSAvICggZVsgMyBdICogeCArIGVbIDcgXSAqIHkgKyBlWyAxMSBdICogeiArIGVbIDE1IF0gKTtcblxuXHRcdHRoaXMueCA9ICggZVsgMCBdICogeCArIGVbIDQgXSAqIHkgKyBlWyA4IF0gKiB6ICsgZVsgMTIgXSApICogdztcblx0XHR0aGlzLnkgPSAoIGVbIDEgXSAqIHggKyBlWyA1IF0gKiB5ICsgZVsgOSBdICogeiArIGVbIDEzIF0gKSAqIHc7XG5cdFx0dGhpcy56ID0gKCBlWyAyIF0gKiB4ICsgZVsgNiBdICogeSArIGVbIDEwIF0gKiB6ICsgZVsgMTQgXSApICogdztcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0YXBwbHlRdWF0ZXJuaW9uOiBmdW5jdGlvbiAoIHEgKSB7XG5cblx0XHR2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueSwgeiA9IHRoaXMuejtcblx0XHR2YXIgcXggPSBxLngsIHF5ID0gcS55LCBxeiA9IHEueiwgcXcgPSBxLnc7XG5cblx0XHQvLyBjYWxjdWxhdGUgcXVhdCAqIHZlY3RvclxuXG5cdFx0dmFyIGl4ID0gcXcgKiB4ICsgcXkgKiB6IC0gcXogKiB5O1xuXHRcdHZhciBpeSA9IHF3ICogeSArIHF6ICogeCAtIHF4ICogejtcblx0XHR2YXIgaXogPSBxdyAqIHogKyBxeCAqIHkgLSBxeSAqIHg7XG5cdFx0dmFyIGl3ID0gLSBxeCAqIHggLSBxeSAqIHkgLSBxeiAqIHo7XG5cblx0XHQvLyBjYWxjdWxhdGUgcmVzdWx0ICogaW52ZXJzZSBxdWF0XG5cblx0XHR0aGlzLnggPSBpeCAqIHF3ICsgaXcgKiAtIHF4ICsgaXkgKiAtIHF6IC0gaXogKiAtIHF5O1xuXHRcdHRoaXMueSA9IGl5ICogcXcgKyBpdyAqIC0gcXkgKyBpeiAqIC0gcXggLSBpeCAqIC0gcXo7XG5cdFx0dGhpcy56ID0gaXogKiBxdyArIGl3ICogLSBxeiArIGl4ICogLSBxeSAtIGl5ICogLSBxeDtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cHJvamVjdDogZnVuY3Rpb24gKCBjYW1lcmEgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5hcHBseU1hdHJpeDQoIGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UgKS5hcHBseU1hdHJpeDQoIGNhbWVyYS5wcm9qZWN0aW9uTWF0cml4ICk7XG5cblx0fSxcblxuXHR1bnByb2plY3Q6IGZ1bmN0aW9uICggY2FtZXJhICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuYXBwbHlNYXRyaXg0KCBjYW1lcmEucHJvamVjdGlvbk1hdHJpeEludmVyc2UgKS5hcHBseU1hdHJpeDQoIGNhbWVyYS5tYXRyaXhXb3JsZCApO1xuXG5cdH0sXG5cblx0dHJhbnNmb3JtRGlyZWN0aW9uOiBmdW5jdGlvbiAoIG0gKSB7XG5cblx0XHQvLyBpbnB1dDogVEhSRUUuTWF0cml4NCBhZmZpbmUgbWF0cml4XG5cdFx0Ly8gdmVjdG9yIGludGVycHJldGVkIGFzIGEgZGlyZWN0aW9uXG5cblx0XHR2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueSwgeiA9IHRoaXMuejtcblx0XHR2YXIgZSA9IG0uZWxlbWVudHM7XG5cblx0XHR0aGlzLnggPSBlWyAwIF0gKiB4ICsgZVsgNCBdICogeSArIGVbIDggXSAqIHo7XG5cdFx0dGhpcy55ID0gZVsgMSBdICogeCArIGVbIDUgXSAqIHkgKyBlWyA5IF0gKiB6O1xuXHRcdHRoaXMueiA9IGVbIDIgXSAqIHggKyBlWyA2IF0gKiB5ICsgZVsgMTAgXSAqIHo7XG5cblx0XHRyZXR1cm4gdGhpcy5ub3JtYWxpemUoKTtcblxuXHR9LFxuXG5cdGRpdmlkZTogZnVuY3Rpb24gKCB2ICkge1xuXG5cdFx0dGhpcy54IC89IHYueDtcblx0XHR0aGlzLnkgLz0gdi55O1xuXHRcdHRoaXMueiAvPSB2Lno7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGRpdmlkZVNjYWxhcjogZnVuY3Rpb24gKCBzY2FsYXIgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5tdWx0aXBseVNjYWxhciggMSAvIHNjYWxhciApO1xuXG5cdH0sXG5cblx0bWluOiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHR0aGlzLnggPSBNYXRoLm1pbiggdGhpcy54LCB2LnggKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1pbiggdGhpcy55LCB2LnkgKTtcblx0XHR0aGlzLnogPSBNYXRoLm1pbiggdGhpcy56LCB2LnogKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0bWF4OiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHR0aGlzLnggPSBNYXRoLm1heCggdGhpcy54LCB2LnggKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heCggdGhpcy55LCB2LnkgKTtcblx0XHR0aGlzLnogPSBNYXRoLm1heCggdGhpcy56LCB2LnogKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0Y2xhbXA6IGZ1bmN0aW9uICggbWluLCBtYXggKSB7XG5cblx0XHQvLyBhc3N1bWVzIG1pbiA8IG1heCwgY29tcG9uZW50d2lzZVxuXG5cdFx0dGhpcy54ID0gTWF0aC5tYXgoIG1pbi54LCBNYXRoLm1pbiggbWF4LngsIHRoaXMueCApICk7XG5cdFx0dGhpcy55ID0gTWF0aC5tYXgoIG1pbi55LCBNYXRoLm1pbiggbWF4LnksIHRoaXMueSApICk7XG5cdFx0dGhpcy56ID0gTWF0aC5tYXgoIG1pbi56LCBNYXRoLm1pbiggbWF4LnosIHRoaXMueiApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGNsYW1wU2NhbGFyOiBmdW5jdGlvbiAoIG1pblZhbCwgbWF4VmFsICkge1xuXG5cdFx0dGhpcy54ID0gTWF0aC5tYXgoIG1pblZhbCwgTWF0aC5taW4oIG1heFZhbCwgdGhpcy54ICkgKTtcblx0XHR0aGlzLnkgPSBNYXRoLm1heCggbWluVmFsLCBNYXRoLm1pbiggbWF4VmFsLCB0aGlzLnkgKSApO1xuXHRcdHRoaXMueiA9IE1hdGgubWF4KCBtaW5WYWwsIE1hdGgubWluKCBtYXhWYWwsIHRoaXMueiApICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGNsYW1wTGVuZ3RoOiBmdW5jdGlvbiAoIG1pbiwgbWF4ICkge1xuXG5cdFx0dmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoKCk7XG5cblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIoIGxlbmd0aCB8fCAxICkubXVsdGlwbHlTY2FsYXIoIE1hdGgubWF4KCBtaW4sIE1hdGgubWluKCBtYXgsIGxlbmd0aCApICkgKTtcblxuXHR9LFxuXG5cdGZsb29yOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLnggPSBNYXRoLmZsb29yKCB0aGlzLnggKTtcblx0XHR0aGlzLnkgPSBNYXRoLmZsb29yKCB0aGlzLnkgKTtcblx0XHR0aGlzLnogPSBNYXRoLmZsb29yKCB0aGlzLnogKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0Y2VpbDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy54ID0gTWF0aC5jZWlsKCB0aGlzLnggKTtcblx0XHR0aGlzLnkgPSBNYXRoLmNlaWwoIHRoaXMueSApO1xuXHRcdHRoaXMueiA9IE1hdGguY2VpbCggdGhpcy56ICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHJvdW5kOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR0aGlzLnggPSBNYXRoLnJvdW5kKCB0aGlzLnggKTtcblx0XHR0aGlzLnkgPSBNYXRoLnJvdW5kKCB0aGlzLnkgKTtcblx0XHR0aGlzLnogPSBNYXRoLnJvdW5kKCB0aGlzLnogKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0cm91bmRUb1plcm86IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMueCA9ICggdGhpcy54IDwgMCApID8gTWF0aC5jZWlsKCB0aGlzLnggKSA6IE1hdGguZmxvb3IoIHRoaXMueCApO1xuXHRcdHRoaXMueSA9ICggdGhpcy55IDwgMCApID8gTWF0aC5jZWlsKCB0aGlzLnkgKSA6IE1hdGguZmxvb3IoIHRoaXMueSApO1xuXHRcdHRoaXMueiA9ICggdGhpcy56IDwgMCApID8gTWF0aC5jZWlsKCB0aGlzLnogKSA6IE1hdGguZmxvb3IoIHRoaXMueiApO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRuZWdhdGU6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMueCA9IC0gdGhpcy54O1xuXHRcdHRoaXMueSA9IC0gdGhpcy55O1xuXHRcdHRoaXMueiA9IC0gdGhpcy56O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRkb3Q6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdHJldHVybiB0aGlzLnggKiB2LnggKyB0aGlzLnkgKiB2LnkgKyB0aGlzLnogKiB2Lno7XG5cblx0fSxcblxuXHQvLyBUT0RPIGxlbmd0aFNxdWFyZWQ/XG5cblx0bGVuZ3RoU3E6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiB0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkgKyB0aGlzLnogKiB0aGlzLno7XG5cblx0fSxcblxuXHRsZW5ndGg6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBNYXRoLnNxcnQoIHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSArIHRoaXMueiAqIHRoaXMueiApO1xuXG5cdH0sXG5cblx0bWFuaGF0dGFuTGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5hYnMoIHRoaXMueCApICsgTWF0aC5hYnMoIHRoaXMueSApICsgTWF0aC5hYnMoIHRoaXMueiApO1xuXG5cdH0sXG5cblx0bm9ybWFsaXplOiBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5kaXZpZGVTY2FsYXIoIHRoaXMubGVuZ3RoKCkgfHwgMSApO1xuXG5cdH0sXG5cblx0c2V0TGVuZ3RoOiBmdW5jdGlvbiAoIGxlbmd0aCApIHtcblxuXHRcdHJldHVybiB0aGlzLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKCBsZW5ndGggKTtcblxuXHR9LFxuXG5cdGxlcnA6IGZ1bmN0aW9uICggdiwgYWxwaGEgKSB7XG5cblx0XHR0aGlzLnggKz0gKCB2LnggLSB0aGlzLnggKSAqIGFscGhhO1xuXHRcdHRoaXMueSArPSAoIHYueSAtIHRoaXMueSApICogYWxwaGE7XG5cdFx0dGhpcy56ICs9ICggdi56IC0gdGhpcy56ICkgKiBhbHBoYTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0bGVycFZlY3RvcnM6IGZ1bmN0aW9uICggdjEsIHYyLCBhbHBoYSApIHtcblxuXHRcdHJldHVybiB0aGlzLnN1YlZlY3RvcnMoIHYyLCB2MSApLm11bHRpcGx5U2NhbGFyKCBhbHBoYSApLmFkZCggdjEgKTtcblxuXHR9LFxuXG5cdGNyb3NzOiBmdW5jdGlvbiAoIHYsIHcgKSB7XG5cblx0XHRpZiAoIHcgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuVmVjdG9yMzogLmNyb3NzKCkgbm93IG9ubHkgYWNjZXB0cyBvbmUgYXJndW1lbnQuIFVzZSAuY3Jvc3NWZWN0b3JzKCBhLCBiICkgaW5zdGVhZC4nICk7XG5cdFx0XHRyZXR1cm4gdGhpcy5jcm9zc1ZlY3RvcnMoIHYsIHcgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmNyb3NzVmVjdG9ycyggdGhpcywgdiApO1xuXG5cdH0sXG5cblx0Y3Jvc3NWZWN0b3JzOiBmdW5jdGlvbiAoIGEsIGIgKSB7XG5cblx0XHR2YXIgYXggPSBhLngsIGF5ID0gYS55LCBheiA9IGEuejtcblx0XHR2YXIgYnggPSBiLngsIGJ5ID0gYi55LCBieiA9IGIuejtcblxuXHRcdHRoaXMueCA9IGF5ICogYnogLSBheiAqIGJ5O1xuXHRcdHRoaXMueSA9IGF6ICogYnggLSBheCAqIGJ6O1xuXHRcdHRoaXMueiA9IGF4ICogYnkgLSBheSAqIGJ4O1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRwcm9qZWN0T25WZWN0b3I6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdHZhciBkZW5vbWluYXRvciA9IHYubGVuZ3RoU3EoKTtcblxuXHRcdGlmICggZGVub21pbmF0b3IgPT09IDAgKSByZXR1cm4gdGhpcy5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdHZhciBzY2FsYXIgPSB2LmRvdCggdGhpcyApIC8gZGVub21pbmF0b3I7XG5cblx0XHRyZXR1cm4gdGhpcy5jb3B5KCB2ICkubXVsdGlwbHlTY2FsYXIoIHNjYWxhciApO1xuXG5cdH0sXG5cblx0cHJvamVjdE9uUGxhbmU6IGZ1bmN0aW9uICggcGxhbmVOb3JtYWwgKSB7XG5cblx0XHRfdmVjdG9yLmNvcHkoIHRoaXMgKS5wcm9qZWN0T25WZWN0b3IoIHBsYW5lTm9ybWFsICk7XG5cblx0XHRyZXR1cm4gdGhpcy5zdWIoIF92ZWN0b3IgKTtcblxuXHR9LFxuXG5cdHJlZmxlY3Q6IGZ1bmN0aW9uICggbm9ybWFsICkge1xuXG5cdFx0Ly8gcmVmbGVjdCBpbmNpZGVudCB2ZWN0b3Igb2ZmIHBsYW5lIG9ydGhvZ29uYWwgdG8gbm9ybWFsXG5cdFx0Ly8gbm9ybWFsIGlzIGFzc3VtZWQgdG8gaGF2ZSB1bml0IGxlbmd0aFxuXG5cdFx0cmV0dXJuIHRoaXMuc3ViKCBfdmVjdG9yLmNvcHkoIG5vcm1hbCApLm11bHRpcGx5U2NhbGFyKCAyICogdGhpcy5kb3QoIG5vcm1hbCApICkgKTtcblxuXHR9LFxuXG5cdGFuZ2xlVG86IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdHZhciBkZW5vbWluYXRvciA9IE1hdGguc3FydCggdGhpcy5sZW5ndGhTcSgpICogdi5sZW5ndGhTcSgpICk7XG5cblx0XHRpZiAoIGRlbm9taW5hdG9yID09PSAwICkgcmV0dXJuIE1hdGguUEkgLyAyO1xuXG5cdFx0dmFyIHRoZXRhID0gdGhpcy5kb3QoIHYgKSAvIGRlbm9taW5hdG9yO1xuXG5cdFx0Ly8gY2xhbXAsIHRvIGhhbmRsZSBudW1lcmljYWwgcHJvYmxlbXNcblxuXHRcdHJldHVybiBNYXRoLmFjb3MoIE1hdGhVdGlscy5jbGFtcCggdGhldGEsIC0gMSwgMSApICk7XG5cblx0fSxcblxuXHRkaXN0YW5jZVRvOiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCB0aGlzLmRpc3RhbmNlVG9TcXVhcmVkKCB2ICkgKTtcblxuXHR9LFxuXG5cdGRpc3RhbmNlVG9TcXVhcmVkOiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHR2YXIgZHggPSB0aGlzLnggLSB2LngsIGR5ID0gdGhpcy55IC0gdi55LCBkeiA9IHRoaXMueiAtIHYuejtcblxuXHRcdHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeSArIGR6ICogZHo7XG5cblx0fSxcblxuXHRtYW5oYXR0YW5EaXN0YW5jZVRvOiBmdW5jdGlvbiAoIHYgKSB7XG5cblx0XHRyZXR1cm4gTWF0aC5hYnMoIHRoaXMueCAtIHYueCApICsgTWF0aC5hYnMoIHRoaXMueSAtIHYueSApICsgTWF0aC5hYnMoIHRoaXMueiAtIHYueiApO1xuXG5cdH0sXG5cblx0c2V0RnJvbVNwaGVyaWNhbDogZnVuY3Rpb24gKCBzICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbVNwaGVyaWNhbENvb3Jkcyggcy5yYWRpdXMsIHMucGhpLCBzLnRoZXRhICk7XG5cblx0fSxcblxuXHRzZXRGcm9tU3BoZXJpY2FsQ29vcmRzOiBmdW5jdGlvbiAoIHJhZGl1cywgcGhpLCB0aGV0YSApIHtcblxuXHRcdHZhciBzaW5QaGlSYWRpdXMgPSBNYXRoLnNpbiggcGhpICkgKiByYWRpdXM7XG5cblx0XHR0aGlzLnggPSBzaW5QaGlSYWRpdXMgKiBNYXRoLnNpbiggdGhldGEgKTtcblx0XHR0aGlzLnkgPSBNYXRoLmNvcyggcGhpICkgKiByYWRpdXM7XG5cdFx0dGhpcy56ID0gc2luUGhpUmFkaXVzICogTWF0aC5jb3MoIHRoZXRhICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldEZyb21DeWxpbmRyaWNhbDogZnVuY3Rpb24gKCBjICkge1xuXG5cdFx0cmV0dXJuIHRoaXMuc2V0RnJvbUN5bGluZHJpY2FsQ29vcmRzKCBjLnJhZGl1cywgYy50aGV0YSwgYy55ICk7XG5cblx0fSxcblxuXHRzZXRGcm9tQ3lsaW5kcmljYWxDb29yZHM6IGZ1bmN0aW9uICggcmFkaXVzLCB0aGV0YSwgeSApIHtcblxuXHRcdHRoaXMueCA9IHJhZGl1cyAqIE1hdGguc2luKCB0aGV0YSApO1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy56ID0gcmFkaXVzICogTWF0aC5jb3MoIHRoZXRhICk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldEZyb21NYXRyaXhQb3NpdGlvbjogZnVuY3Rpb24gKCBtICkge1xuXG5cdFx0dmFyIGUgPSBtLmVsZW1lbnRzO1xuXG5cdFx0dGhpcy54ID0gZVsgMTIgXTtcblx0XHR0aGlzLnkgPSBlWyAxMyBdO1xuXHRcdHRoaXMueiA9IGVbIDE0IF07XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHNldEZyb21NYXRyaXhTY2FsZTogZnVuY3Rpb24gKCBtICkge1xuXG5cdFx0dmFyIHN4ID0gdGhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKCBtLCAwICkubGVuZ3RoKCk7XG5cdFx0dmFyIHN5ID0gdGhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKCBtLCAxICkubGVuZ3RoKCk7XG5cdFx0dmFyIHN6ID0gdGhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKCBtLCAyICkubGVuZ3RoKCk7XG5cblx0XHR0aGlzLnggPSBzeDtcblx0XHR0aGlzLnkgPSBzeTtcblx0XHR0aGlzLnogPSBzejtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c2V0RnJvbU1hdHJpeENvbHVtbjogZnVuY3Rpb24gKCBtLCBpbmRleCApIHtcblxuXHRcdHJldHVybiB0aGlzLmZyb21BcnJheSggbS5lbGVtZW50cywgaW5kZXggKiA0ICk7XG5cblx0fSxcblxuXHRzZXRGcm9tTWF0cml4M0NvbHVtbjogZnVuY3Rpb24gKCBtLCBpbmRleCApIHtcblxuXHRcdHJldHVybiB0aGlzLmZyb21BcnJheSggbS5lbGVtZW50cywgaW5kZXggKiAzICk7XG5cblx0fSxcblxuXHRlcXVhbHM6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdHJldHVybiAoICggdi54ID09PSB0aGlzLnggKSAmJiAoIHYueSA9PT0gdGhpcy55ICkgJiYgKCB2LnogPT09IHRoaXMueiApICk7XG5cblx0fSxcblxuXHRmcm9tQXJyYXk6IGZ1bmN0aW9uICggYXJyYXksIG9mZnNldCApIHtcblxuXHRcdGlmICggb2Zmc2V0ID09PSB1bmRlZmluZWQgKSBvZmZzZXQgPSAwO1xuXG5cdFx0dGhpcy54ID0gYXJyYXlbIG9mZnNldCBdO1xuXHRcdHRoaXMueSA9IGFycmF5WyBvZmZzZXQgKyAxIF07XG5cdFx0dGhpcy56ID0gYXJyYXlbIG9mZnNldCArIDIgXTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0dG9BcnJheTogZnVuY3Rpb24gKCBhcnJheSwgb2Zmc2V0ICkge1xuXG5cdFx0aWYgKCBhcnJheSA9PT0gdW5kZWZpbmVkICkgYXJyYXkgPSBbXTtcblx0XHRpZiAoIG9mZnNldCA9PT0gdW5kZWZpbmVkICkgb2Zmc2V0ID0gMDtcblxuXHRcdGFycmF5WyBvZmZzZXQgXSA9IHRoaXMueDtcblx0XHRhcnJheVsgb2Zmc2V0ICsgMSBdID0gdGhpcy55O1xuXHRcdGFycmF5WyBvZmZzZXQgKyAyIF0gPSB0aGlzLno7XG5cblx0XHRyZXR1cm4gYXJyYXk7XG5cblx0fSxcblxuXHRmcm9tQnVmZmVyQXR0cmlidXRlOiBmdW5jdGlvbiAoIGF0dHJpYnV0ZSwgaW5kZXgsIG9mZnNldCApIHtcblxuXHRcdGlmICggb2Zmc2V0ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLlZlY3RvcjM6IG9mZnNldCBoYXMgYmVlbiByZW1vdmVkIGZyb20gLmZyb21CdWZmZXJBdHRyaWJ1dGUoKS4nICk7XG5cblx0XHR9XG5cblx0XHR0aGlzLnggPSBhdHRyaWJ1dGUuZ2V0WCggaW5kZXggKTtcblx0XHR0aGlzLnkgPSBhdHRyaWJ1dGUuZ2V0WSggaW5kZXggKTtcblx0XHR0aGlzLnogPSBhdHRyaWJ1dGUuZ2V0WiggaW5kZXggKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH1cblxufSApO1xuXG5cbmV4cG9ydCB7IFZlY3RvcjMgfTtcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuL1ZlY3RvcjMuanMnO1xuXG52YXIgX3YxID0gbmV3IFZlY3RvcjMoKTtcbnZhciBfbTEgPSBuZXcgTWF0cml4NCgpO1xudmFyIF96ZXJvID0gbmV3IFZlY3RvcjMoIDAsIDAsIDAgKTtcbnZhciBfb25lID0gbmV3IFZlY3RvcjMoIDEsIDEsIDEgKTtcbnZhciBfeCA9IG5ldyBWZWN0b3IzKCk7XG52YXIgX3kgPSBuZXcgVmVjdG9yMygpO1xudmFyIF96ID0gbmV3IFZlY3RvcjMoKTtcblxuLyoqXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tL1xuICogQGF1dGhvciBzdXBlcmVnZ2JlcnQgLyBodHRwOi8vd3d3LnBhdWxicnVudC5jby51ay9cbiAqIEBhdXRob3IgcGhpbG9nYiAvIGh0dHA6Ly9ibG9nLnRoZWppdC5vcmcvXG4gKiBAYXV0aG9yIGpvcmRpX3JvcyAvIGh0dHA6Ly9wbGF0dHNvZnQuY29tXG4gKiBAYXV0aG9yIEQxcGxvMWQgLyBodHRwOi8vZ2l0aHViLmNvbS9EMXBsbzFkXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBtaWthZWwgZW10aW5nZXIgLyBodHRwOi8vZ29tby5zZS9cbiAqIEBhdXRob3IgdGlta25pcCAvIGh0dHA6Ly93d3cuZmxvb3JwbGFubmVyLmNvbS9cbiAqIEBhdXRob3IgYmhvdXN0b24gLyBodHRwOi8vY2xhcmEuaW9cbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxuICovXG5cbmZ1bmN0aW9uIE1hdHJpeDQoKSB7XG5cblx0dGhpcy5lbGVtZW50cyA9IFtcblxuXHRcdDEsIDAsIDAsIDAsXG5cdFx0MCwgMSwgMCwgMCxcblx0XHQwLCAwLCAxLCAwLFxuXHRcdDAsIDAsIDAsIDFcblxuXHRdO1xuXG5cdGlmICggYXJndW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cblx0XHRjb25zb2xlLmVycm9yKCAnVEhSRUUuTWF0cml4NDogdGhlIGNvbnN0cnVjdG9yIG5vIGxvbmdlciByZWFkcyBhcmd1bWVudHMuIHVzZSAuc2V0KCkgaW5zdGVhZC4nICk7XG5cblx0fVxuXG59XG5cbk9iamVjdC5hc3NpZ24oIE1hdHJpeDQucHJvdG90eXBlLCB7XG5cblx0aXNNYXRyaXg0OiB0cnVlLFxuXG5cdHNldDogZnVuY3Rpb24gKCBuMTEsIG4xMiwgbjEzLCBuMTQsIG4yMSwgbjIyLCBuMjMsIG4yNCwgbjMxLCBuMzIsIG4zMywgbjM0LCBuNDEsIG40MiwgbjQzLCBuNDQgKSB7XG5cblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0dGVbIDAgXSA9IG4xMTsgdGVbIDQgXSA9IG4xMjsgdGVbIDggXSA9IG4xMzsgdGVbIDEyIF0gPSBuMTQ7XG5cdFx0dGVbIDEgXSA9IG4yMTsgdGVbIDUgXSA9IG4yMjsgdGVbIDkgXSA9IG4yMzsgdGVbIDEzIF0gPSBuMjQ7XG5cdFx0dGVbIDIgXSA9IG4zMTsgdGVbIDYgXSA9IG4zMjsgdGVbIDEwIF0gPSBuMzM7IHRlWyAxNCBdID0gbjM0O1xuXHRcdHRlWyAzIF0gPSBuNDE7IHRlWyA3IF0gPSBuNDI7IHRlWyAxMSBdID0gbjQzOyB0ZVsgMTUgXSA9IG40NDtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0aWRlbnRpdHk6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMuc2V0KFxuXG5cdFx0XHQxLCAwLCAwLCAwLFxuXHRcdFx0MCwgMSwgMCwgMCxcblx0XHRcdDAsIDAsIDEsIDAsXG5cdFx0XHQwLCAwLCAwLCAxXG5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIG5ldyBNYXRyaXg0KCkuZnJvbUFycmF5KCB0aGlzLmVsZW1lbnRzICk7XG5cblx0fSxcblxuXHRjb3B5OiBmdW5jdGlvbiAoIG0gKSB7XG5cblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXHRcdHZhciBtZSA9IG0uZWxlbWVudHM7XG5cblx0XHR0ZVsgMCBdID0gbWVbIDAgXTsgdGVbIDEgXSA9IG1lWyAxIF07IHRlWyAyIF0gPSBtZVsgMiBdOyB0ZVsgMyBdID0gbWVbIDMgXTtcblx0XHR0ZVsgNCBdID0gbWVbIDQgXTsgdGVbIDUgXSA9IG1lWyA1IF07IHRlWyA2IF0gPSBtZVsgNiBdOyB0ZVsgNyBdID0gbWVbIDcgXTtcblx0XHR0ZVsgOCBdID0gbWVbIDggXTsgdGVbIDkgXSA9IG1lWyA5IF07IHRlWyAxMCBdID0gbWVbIDEwIF07IHRlWyAxMSBdID0gbWVbIDExIF07XG5cdFx0dGVbIDEyIF0gPSBtZVsgMTIgXTsgdGVbIDEzIF0gPSBtZVsgMTMgXTsgdGVbIDE0IF0gPSBtZVsgMTQgXTsgdGVbIDE1IF0gPSBtZVsgMTUgXTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0Y29weVBvc2l0aW9uOiBmdW5jdGlvbiAoIG0gKSB7XG5cblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzLCBtZSA9IG0uZWxlbWVudHM7XG5cblx0XHR0ZVsgMTIgXSA9IG1lWyAxMiBdO1xuXHRcdHRlWyAxMyBdID0gbWVbIDEzIF07XG5cdFx0dGVbIDE0IF0gPSBtZVsgMTQgXTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZXh0cmFjdEJhc2lzOiBmdW5jdGlvbiAoIHhBeGlzLCB5QXhpcywgekF4aXMgKSB7XG5cblx0XHR4QXhpcy5zZXRGcm9tTWF0cml4Q29sdW1uKCB0aGlzLCAwICk7XG5cdFx0eUF4aXMuc2V0RnJvbU1hdHJpeENvbHVtbiggdGhpcywgMSApO1xuXHRcdHpBeGlzLnNldEZyb21NYXRyaXhDb2x1bW4oIHRoaXMsIDIgKTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0bWFrZUJhc2lzOiBmdW5jdGlvbiAoIHhBeGlzLCB5QXhpcywgekF4aXMgKSB7XG5cblx0XHR0aGlzLnNldChcblx0XHRcdHhBeGlzLngsIHlBeGlzLngsIHpBeGlzLngsIDAsXG5cdFx0XHR4QXhpcy55LCB5QXhpcy55LCB6QXhpcy55LCAwLFxuXHRcdFx0eEF4aXMueiwgeUF4aXMueiwgekF4aXMueiwgMCxcblx0XHRcdDAsIDAsIDAsIDFcblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRleHRyYWN0Um90YXRpb246IGZ1bmN0aW9uICggbSApIHtcblxuXHRcdC8vIHRoaXMgbWV0aG9kIGRvZXMgbm90IHN1cHBvcnQgcmVmbGVjdGlvbiBtYXRyaWNlc1xuXG5cdFx0dmFyIHRlID0gdGhpcy5lbGVtZW50cztcblx0XHR2YXIgbWUgPSBtLmVsZW1lbnRzO1xuXG5cdFx0dmFyIHNjYWxlWCA9IDEgLyBfdjEuc2V0RnJvbU1hdHJpeENvbHVtbiggbSwgMCApLmxlbmd0aCgpO1xuXHRcdHZhciBzY2FsZVkgPSAxIC8gX3YxLnNldEZyb21NYXRyaXhDb2x1bW4oIG0sIDEgKS5sZW5ndGgoKTtcblx0XHR2YXIgc2NhbGVaID0gMSAvIF92MS5zZXRGcm9tTWF0cml4Q29sdW1uKCBtLCAyICkubGVuZ3RoKCk7XG5cblx0XHR0ZVsgMCBdID0gbWVbIDAgXSAqIHNjYWxlWDtcblx0XHR0ZVsgMSBdID0gbWVbIDEgXSAqIHNjYWxlWDtcblx0XHR0ZVsgMiBdID0gbWVbIDIgXSAqIHNjYWxlWDtcblx0XHR0ZVsgMyBdID0gMDtcblxuXHRcdHRlWyA0IF0gPSBtZVsgNCBdICogc2NhbGVZO1xuXHRcdHRlWyA1IF0gPSBtZVsgNSBdICogc2NhbGVZO1xuXHRcdHRlWyA2IF0gPSBtZVsgNiBdICogc2NhbGVZO1xuXHRcdHRlWyA3IF0gPSAwO1xuXG5cdFx0dGVbIDggXSA9IG1lWyA4IF0gKiBzY2FsZVo7XG5cdFx0dGVbIDkgXSA9IG1lWyA5IF0gKiBzY2FsZVo7XG5cdFx0dGVbIDEwIF0gPSBtZVsgMTAgXSAqIHNjYWxlWjtcblx0XHR0ZVsgMTEgXSA9IDA7XG5cblx0XHR0ZVsgMTIgXSA9IDA7XG5cdFx0dGVbIDEzIF0gPSAwO1xuXHRcdHRlWyAxNCBdID0gMDtcblx0XHR0ZVsgMTUgXSA9IDE7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG1ha2VSb3RhdGlvbkZyb21FdWxlcjogZnVuY3Rpb24gKCBldWxlciApIHtcblxuXHRcdGlmICggISAoIGV1bGVyICYmIGV1bGVyLmlzRXVsZXIgKSApIHtcblxuXHRcdFx0Y29uc29sZS5lcnJvciggJ1RIUkVFLk1hdHJpeDQ6IC5tYWtlUm90YXRpb25Gcm9tRXVsZXIoKSBub3cgZXhwZWN0cyBhIEV1bGVyIHJvdGF0aW9uIHJhdGhlciB0aGFuIGEgVmVjdG9yMyBhbmQgb3JkZXIuJyApO1xuXG5cdFx0fVxuXG5cdFx0dmFyIHRlID0gdGhpcy5lbGVtZW50cztcblxuXHRcdHZhciB4ID0gZXVsZXIueCwgeSA9IGV1bGVyLnksIHogPSBldWxlci56O1xuXHRcdHZhciBhID0gTWF0aC5jb3MoIHggKSwgYiA9IE1hdGguc2luKCB4ICk7XG5cdFx0dmFyIGMgPSBNYXRoLmNvcyggeSApLCBkID0gTWF0aC5zaW4oIHkgKTtcblx0XHR2YXIgZSA9IE1hdGguY29zKCB6ICksIGYgPSBNYXRoLnNpbiggeiApO1xuXG5cdFx0aWYgKCBldWxlci5vcmRlciA9PT0gJ1hZWicgKSB7XG5cblx0XHRcdHZhciBhZSA9IGEgKiBlLCBhZiA9IGEgKiBmLCBiZSA9IGIgKiBlLCBiZiA9IGIgKiBmO1xuXG5cdFx0XHR0ZVsgMCBdID0gYyAqIGU7XG5cdFx0XHR0ZVsgNCBdID0gLSBjICogZjtcblx0XHRcdHRlWyA4IF0gPSBkO1xuXG5cdFx0XHR0ZVsgMSBdID0gYWYgKyBiZSAqIGQ7XG5cdFx0XHR0ZVsgNSBdID0gYWUgLSBiZiAqIGQ7XG5cdFx0XHR0ZVsgOSBdID0gLSBiICogYztcblxuXHRcdFx0dGVbIDIgXSA9IGJmIC0gYWUgKiBkO1xuXHRcdFx0dGVbIDYgXSA9IGJlICsgYWYgKiBkO1xuXHRcdFx0dGVbIDEwIF0gPSBhICogYztcblxuXHRcdH0gZWxzZSBpZiAoIGV1bGVyLm9yZGVyID09PSAnWVhaJyApIHtcblxuXHRcdFx0dmFyIGNlID0gYyAqIGUsIGNmID0gYyAqIGYsIGRlID0gZCAqIGUsIGRmID0gZCAqIGY7XG5cblx0XHRcdHRlWyAwIF0gPSBjZSArIGRmICogYjtcblx0XHRcdHRlWyA0IF0gPSBkZSAqIGIgLSBjZjtcblx0XHRcdHRlWyA4IF0gPSBhICogZDtcblxuXHRcdFx0dGVbIDEgXSA9IGEgKiBmO1xuXHRcdFx0dGVbIDUgXSA9IGEgKiBlO1xuXHRcdFx0dGVbIDkgXSA9IC0gYjtcblxuXHRcdFx0dGVbIDIgXSA9IGNmICogYiAtIGRlO1xuXHRcdFx0dGVbIDYgXSA9IGRmICsgY2UgKiBiO1xuXHRcdFx0dGVbIDEwIF0gPSBhICogYztcblxuXHRcdH0gZWxzZSBpZiAoIGV1bGVyLm9yZGVyID09PSAnWlhZJyApIHtcblxuXHRcdFx0dmFyIGNlID0gYyAqIGUsIGNmID0gYyAqIGYsIGRlID0gZCAqIGUsIGRmID0gZCAqIGY7XG5cblx0XHRcdHRlWyAwIF0gPSBjZSAtIGRmICogYjtcblx0XHRcdHRlWyA0IF0gPSAtIGEgKiBmO1xuXHRcdFx0dGVbIDggXSA9IGRlICsgY2YgKiBiO1xuXG5cdFx0XHR0ZVsgMSBdID0gY2YgKyBkZSAqIGI7XG5cdFx0XHR0ZVsgNSBdID0gYSAqIGU7XG5cdFx0XHR0ZVsgOSBdID0gZGYgLSBjZSAqIGI7XG5cblx0XHRcdHRlWyAyIF0gPSAtIGEgKiBkO1xuXHRcdFx0dGVbIDYgXSA9IGI7XG5cdFx0XHR0ZVsgMTAgXSA9IGEgKiBjO1xuXG5cdFx0fSBlbHNlIGlmICggZXVsZXIub3JkZXIgPT09ICdaWVgnICkge1xuXG5cdFx0XHR2YXIgYWUgPSBhICogZSwgYWYgPSBhICogZiwgYmUgPSBiICogZSwgYmYgPSBiICogZjtcblxuXHRcdFx0dGVbIDAgXSA9IGMgKiBlO1xuXHRcdFx0dGVbIDQgXSA9IGJlICogZCAtIGFmO1xuXHRcdFx0dGVbIDggXSA9IGFlICogZCArIGJmO1xuXG5cdFx0XHR0ZVsgMSBdID0gYyAqIGY7XG5cdFx0XHR0ZVsgNSBdID0gYmYgKiBkICsgYWU7XG5cdFx0XHR0ZVsgOSBdID0gYWYgKiBkIC0gYmU7XG5cblx0XHRcdHRlWyAyIF0gPSAtIGQ7XG5cdFx0XHR0ZVsgNiBdID0gYiAqIGM7XG5cdFx0XHR0ZVsgMTAgXSA9IGEgKiBjO1xuXG5cdFx0fSBlbHNlIGlmICggZXVsZXIub3JkZXIgPT09ICdZWlgnICkge1xuXG5cdFx0XHR2YXIgYWMgPSBhICogYywgYWQgPSBhICogZCwgYmMgPSBiICogYywgYmQgPSBiICogZDtcblxuXHRcdFx0dGVbIDAgXSA9IGMgKiBlO1xuXHRcdFx0dGVbIDQgXSA9IGJkIC0gYWMgKiBmO1xuXHRcdFx0dGVbIDggXSA9IGJjICogZiArIGFkO1xuXG5cdFx0XHR0ZVsgMSBdID0gZjtcblx0XHRcdHRlWyA1IF0gPSBhICogZTtcblx0XHRcdHRlWyA5IF0gPSAtIGIgKiBlO1xuXG5cdFx0XHR0ZVsgMiBdID0gLSBkICogZTtcblx0XHRcdHRlWyA2IF0gPSBhZCAqIGYgKyBiYztcblx0XHRcdHRlWyAxMCBdID0gYWMgLSBiZCAqIGY7XG5cblx0XHR9IGVsc2UgaWYgKCBldWxlci5vcmRlciA9PT0gJ1haWScgKSB7XG5cblx0XHRcdHZhciBhYyA9IGEgKiBjLCBhZCA9IGEgKiBkLCBiYyA9IGIgKiBjLCBiZCA9IGIgKiBkO1xuXG5cdFx0XHR0ZVsgMCBdID0gYyAqIGU7XG5cdFx0XHR0ZVsgNCBdID0gLSBmO1xuXHRcdFx0dGVbIDggXSA9IGQgKiBlO1xuXG5cdFx0XHR0ZVsgMSBdID0gYWMgKiBmICsgYmQ7XG5cdFx0XHR0ZVsgNSBdID0gYSAqIGU7XG5cdFx0XHR0ZVsgOSBdID0gYWQgKiBmIC0gYmM7XG5cblx0XHRcdHRlWyAyIF0gPSBiYyAqIGYgLSBhZDtcblx0XHRcdHRlWyA2IF0gPSBiICogZTtcblx0XHRcdHRlWyAxMCBdID0gYmQgKiBmICsgYWM7XG5cblx0XHR9XG5cblx0XHQvLyBib3R0b20gcm93XG5cdFx0dGVbIDMgXSA9IDA7XG5cdFx0dGVbIDcgXSA9IDA7XG5cdFx0dGVbIDExIF0gPSAwO1xuXG5cdFx0Ly8gbGFzdCBjb2x1bW5cblx0XHR0ZVsgMTIgXSA9IDA7XG5cdFx0dGVbIDEzIF0gPSAwO1xuXHRcdHRlWyAxNCBdID0gMDtcblx0XHR0ZVsgMTUgXSA9IDE7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG1ha2VSb3RhdGlvbkZyb21RdWF0ZXJuaW9uOiBmdW5jdGlvbiAoIHEgKSB7XG5cblx0XHRyZXR1cm4gdGhpcy5jb21wb3NlKCBfemVybywgcSwgX29uZSApO1xuXG5cdH0sXG5cblx0bG9va0F0OiBmdW5jdGlvbiAoIGV5ZSwgdGFyZ2V0LCB1cCApIHtcblxuXHRcdHZhciB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cblx0XHRfei5zdWJWZWN0b3JzKCBleWUsIHRhcmdldCApO1xuXG5cdFx0aWYgKCBfei5sZW5ndGhTcSgpID09PSAwICkge1xuXG5cdFx0XHQvLyBleWUgYW5kIHRhcmdldCBhcmUgaW4gdGhlIHNhbWUgcG9zaXRpb25cblxuXHRcdFx0X3oueiA9IDE7XG5cblx0XHR9XG5cblx0XHRfei5ub3JtYWxpemUoKTtcblx0XHRfeC5jcm9zc1ZlY3RvcnMoIHVwLCBfeiApO1xuXG5cdFx0aWYgKCBfeC5sZW5ndGhTcSgpID09PSAwICkge1xuXG5cdFx0XHQvLyB1cCBhbmQgeiBhcmUgcGFyYWxsZWxcblxuXHRcdFx0aWYgKCBNYXRoLmFicyggdXAueiApID09PSAxICkge1xuXG5cdFx0XHRcdF96LnggKz0gMC4wMDAxO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdF96LnogKz0gMC4wMDAxO1xuXG5cdFx0XHR9XG5cblx0XHRcdF96Lm5vcm1hbGl6ZSgpO1xuXHRcdFx0X3guY3Jvc3NWZWN0b3JzKCB1cCwgX3ogKTtcblxuXHRcdH1cblxuXHRcdF94Lm5vcm1hbGl6ZSgpO1xuXHRcdF95LmNyb3NzVmVjdG9ycyggX3osIF94ICk7XG5cblx0XHR0ZVsgMCBdID0gX3gueDsgdGVbIDQgXSA9IF95Lng7IHRlWyA4IF0gPSBfei54O1xuXHRcdHRlWyAxIF0gPSBfeC55OyB0ZVsgNSBdID0gX3kueTsgdGVbIDkgXSA9IF96Lnk7XG5cdFx0dGVbIDIgXSA9IF94Lno7IHRlWyA2IF0gPSBfeS56OyB0ZVsgMTAgXSA9IF96Lno7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG11bHRpcGx5OiBmdW5jdGlvbiAoIG0sIG4gKSB7XG5cblx0XHRpZiAoIG4gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuTWF0cml4NDogLm11bHRpcGx5KCkgbm93IG9ubHkgYWNjZXB0cyBvbmUgYXJndW1lbnQuIFVzZSAubXVsdGlwbHlNYXRyaWNlcyggYSwgYiApIGluc3RlYWQuJyApO1xuXHRcdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyggbSwgbiApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMubXVsdGlwbHlNYXRyaWNlcyggdGhpcywgbSApO1xuXG5cdH0sXG5cblx0cHJlbXVsdGlwbHk6IGZ1bmN0aW9uICggbSApIHtcblxuXHRcdHJldHVybiB0aGlzLm11bHRpcGx5TWF0cmljZXMoIG0sIHRoaXMgKTtcblxuXHR9LFxuXG5cdG11bHRpcGx5TWF0cmljZXM6IGZ1bmN0aW9uICggYSwgYiApIHtcblxuXHRcdHZhciBhZSA9IGEuZWxlbWVudHM7XG5cdFx0dmFyIGJlID0gYi5lbGVtZW50cztcblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0dmFyIGExMSA9IGFlWyAwIF0sIGExMiA9IGFlWyA0IF0sIGExMyA9IGFlWyA4IF0sIGExNCA9IGFlWyAxMiBdO1xuXHRcdHZhciBhMjEgPSBhZVsgMSBdLCBhMjIgPSBhZVsgNSBdLCBhMjMgPSBhZVsgOSBdLCBhMjQgPSBhZVsgMTMgXTtcblx0XHR2YXIgYTMxID0gYWVbIDIgXSwgYTMyID0gYWVbIDYgXSwgYTMzID0gYWVbIDEwIF0sIGEzNCA9IGFlWyAxNCBdO1xuXHRcdHZhciBhNDEgPSBhZVsgMyBdLCBhNDIgPSBhZVsgNyBdLCBhNDMgPSBhZVsgMTEgXSwgYTQ0ID0gYWVbIDE1IF07XG5cblx0XHR2YXIgYjExID0gYmVbIDAgXSwgYjEyID0gYmVbIDQgXSwgYjEzID0gYmVbIDggXSwgYjE0ID0gYmVbIDEyIF07XG5cdFx0dmFyIGIyMSA9IGJlWyAxIF0sIGIyMiA9IGJlWyA1IF0sIGIyMyA9IGJlWyA5IF0sIGIyNCA9IGJlWyAxMyBdO1xuXHRcdHZhciBiMzEgPSBiZVsgMiBdLCBiMzIgPSBiZVsgNiBdLCBiMzMgPSBiZVsgMTAgXSwgYjM0ID0gYmVbIDE0IF07XG5cdFx0dmFyIGI0MSA9IGJlWyAzIF0sIGI0MiA9IGJlWyA3IF0sIGI0MyA9IGJlWyAxMSBdLCBiNDQgPSBiZVsgMTUgXTtcblxuXHRcdHRlWyAwIF0gPSBhMTEgKiBiMTEgKyBhMTIgKiBiMjEgKyBhMTMgKiBiMzEgKyBhMTQgKiBiNDE7XG5cdFx0dGVbIDQgXSA9IGExMSAqIGIxMiArIGExMiAqIGIyMiArIGExMyAqIGIzMiArIGExNCAqIGI0Mjtcblx0XHR0ZVsgOCBdID0gYTExICogYjEzICsgYTEyICogYjIzICsgYTEzICogYjMzICsgYTE0ICogYjQzO1xuXHRcdHRlWyAxMiBdID0gYTExICogYjE0ICsgYTEyICogYjI0ICsgYTEzICogYjM0ICsgYTE0ICogYjQ0O1xuXG5cdFx0dGVbIDEgXSA9IGEyMSAqIGIxMSArIGEyMiAqIGIyMSArIGEyMyAqIGIzMSArIGEyNCAqIGI0MTtcblx0XHR0ZVsgNSBdID0gYTIxICogYjEyICsgYTIyICogYjIyICsgYTIzICogYjMyICsgYTI0ICogYjQyO1xuXHRcdHRlWyA5IF0gPSBhMjEgKiBiMTMgKyBhMjIgKiBiMjMgKyBhMjMgKiBiMzMgKyBhMjQgKiBiNDM7XG5cdFx0dGVbIDEzIF0gPSBhMjEgKiBiMTQgKyBhMjIgKiBiMjQgKyBhMjMgKiBiMzQgKyBhMjQgKiBiNDQ7XG5cblx0XHR0ZVsgMiBdID0gYTMxICogYjExICsgYTMyICogYjIxICsgYTMzICogYjMxICsgYTM0ICogYjQxO1xuXHRcdHRlWyA2IF0gPSBhMzEgKiBiMTIgKyBhMzIgKiBiMjIgKyBhMzMgKiBiMzIgKyBhMzQgKiBiNDI7XG5cdFx0dGVbIDEwIF0gPSBhMzEgKiBiMTMgKyBhMzIgKiBiMjMgKyBhMzMgKiBiMzMgKyBhMzQgKiBiNDM7XG5cdFx0dGVbIDE0IF0gPSBhMzEgKiBiMTQgKyBhMzIgKiBiMjQgKyBhMzMgKiBiMzQgKyBhMzQgKiBiNDQ7XG5cblx0XHR0ZVsgMyBdID0gYTQxICogYjExICsgYTQyICogYjIxICsgYTQzICogYjMxICsgYTQ0ICogYjQxO1xuXHRcdHRlWyA3IF0gPSBhNDEgKiBiMTIgKyBhNDIgKiBiMjIgKyBhNDMgKiBiMzIgKyBhNDQgKiBiNDI7XG5cdFx0dGVbIDExIF0gPSBhNDEgKiBiMTMgKyBhNDIgKiBiMjMgKyBhNDMgKiBiMzMgKyBhNDQgKiBiNDM7XG5cdFx0dGVbIDE1IF0gPSBhNDEgKiBiMTQgKyBhNDIgKiBiMjQgKyBhNDMgKiBiMzQgKyBhNDQgKiBiNDQ7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG11bHRpcGx5U2NhbGFyOiBmdW5jdGlvbiAoIHMgKSB7XG5cblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0dGVbIDAgXSAqPSBzOyB0ZVsgNCBdICo9IHM7IHRlWyA4IF0gKj0gczsgdGVbIDEyIF0gKj0gcztcblx0XHR0ZVsgMSBdICo9IHM7IHRlWyA1IF0gKj0gczsgdGVbIDkgXSAqPSBzOyB0ZVsgMTMgXSAqPSBzO1xuXHRcdHRlWyAyIF0gKj0gczsgdGVbIDYgXSAqPSBzOyB0ZVsgMTAgXSAqPSBzOyB0ZVsgMTQgXSAqPSBzO1xuXHRcdHRlWyAzIF0gKj0gczsgdGVbIDcgXSAqPSBzOyB0ZVsgMTEgXSAqPSBzOyB0ZVsgMTUgXSAqPSBzO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRkZXRlcm1pbmFudDogZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIHRlID0gdGhpcy5lbGVtZW50cztcblxuXHRcdHZhciBuMTEgPSB0ZVsgMCBdLCBuMTIgPSB0ZVsgNCBdLCBuMTMgPSB0ZVsgOCBdLCBuMTQgPSB0ZVsgMTIgXTtcblx0XHR2YXIgbjIxID0gdGVbIDEgXSwgbjIyID0gdGVbIDUgXSwgbjIzID0gdGVbIDkgXSwgbjI0ID0gdGVbIDEzIF07XG5cdFx0dmFyIG4zMSA9IHRlWyAyIF0sIG4zMiA9IHRlWyA2IF0sIG4zMyA9IHRlWyAxMCBdLCBuMzQgPSB0ZVsgMTQgXTtcblx0XHR2YXIgbjQxID0gdGVbIDMgXSwgbjQyID0gdGVbIDcgXSwgbjQzID0gdGVbIDExIF0sIG40NCA9IHRlWyAxNSBdO1xuXG5cdFx0Ly9UT0RPOiBtYWtlIHRoaXMgbW9yZSBlZmZpY2llbnRcblx0XHQvLyggYmFzZWQgb24gaHR0cDovL3d3dy5ldWNsaWRlYW5zcGFjZS5jb20vbWF0aHMvYWxnZWJyYS9tYXRyaXgvZnVuY3Rpb25zL2ludmVyc2UvZm91ckQvaW5kZXguaHRtIClcblxuXHRcdHJldHVybiAoXG5cdFx0XHRuNDEgKiAoXG5cdFx0XHRcdCsgbjE0ICogbjIzICogbjMyXG5cdFx0XHRcdCAtIG4xMyAqIG4yNCAqIG4zMlxuXHRcdFx0XHQgLSBuMTQgKiBuMjIgKiBuMzNcblx0XHRcdFx0ICsgbjEyICogbjI0ICogbjMzXG5cdFx0XHRcdCArIG4xMyAqIG4yMiAqIG4zNFxuXHRcdFx0XHQgLSBuMTIgKiBuMjMgKiBuMzRcblx0XHRcdCkgK1xuXHRcdFx0bjQyICogKFxuXHRcdFx0XHQrIG4xMSAqIG4yMyAqIG4zNFxuXHRcdFx0XHQgLSBuMTEgKiBuMjQgKiBuMzNcblx0XHRcdFx0ICsgbjE0ICogbjIxICogbjMzXG5cdFx0XHRcdCAtIG4xMyAqIG4yMSAqIG4zNFxuXHRcdFx0XHQgKyBuMTMgKiBuMjQgKiBuMzFcblx0XHRcdFx0IC0gbjE0ICogbjIzICogbjMxXG5cdFx0XHQpICtcblx0XHRcdG40MyAqIChcblx0XHRcdFx0KyBuMTEgKiBuMjQgKiBuMzJcblx0XHRcdFx0IC0gbjExICogbjIyICogbjM0XG5cdFx0XHRcdCAtIG4xNCAqIG4yMSAqIG4zMlxuXHRcdFx0XHQgKyBuMTIgKiBuMjEgKiBuMzRcblx0XHRcdFx0ICsgbjE0ICogbjIyICogbjMxXG5cdFx0XHRcdCAtIG4xMiAqIG4yNCAqIG4zMVxuXHRcdFx0KSArXG5cdFx0XHRuNDQgKiAoXG5cdFx0XHRcdC0gbjEzICogbjIyICogbjMxXG5cdFx0XHRcdCAtIG4xMSAqIG4yMyAqIG4zMlxuXHRcdFx0XHQgKyBuMTEgKiBuMjIgKiBuMzNcblx0XHRcdFx0ICsgbjEzICogbjIxICogbjMyXG5cdFx0XHRcdCAtIG4xMiAqIG4yMSAqIG4zM1xuXHRcdFx0XHQgKyBuMTIgKiBuMjMgKiBuMzFcblx0XHRcdClcblxuXHRcdCk7XG5cblx0fSxcblxuXHR0cmFuc3Bvc2U6IGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dmFyIHRtcDtcblxuXHRcdHRtcCA9IHRlWyAxIF07IHRlWyAxIF0gPSB0ZVsgNCBdOyB0ZVsgNCBdID0gdG1wO1xuXHRcdHRtcCA9IHRlWyAyIF07IHRlWyAyIF0gPSB0ZVsgOCBdOyB0ZVsgOCBdID0gdG1wO1xuXHRcdHRtcCA9IHRlWyA2IF07IHRlWyA2IF0gPSB0ZVsgOSBdOyB0ZVsgOSBdID0gdG1wO1xuXG5cdFx0dG1wID0gdGVbIDMgXTsgdGVbIDMgXSA9IHRlWyAxMiBdOyB0ZVsgMTIgXSA9IHRtcDtcblx0XHR0bXAgPSB0ZVsgNyBdOyB0ZVsgNyBdID0gdGVbIDEzIF07IHRlWyAxMyBdID0gdG1wO1xuXHRcdHRtcCA9IHRlWyAxMSBdOyB0ZVsgMTEgXSA9IHRlWyAxNCBdOyB0ZVsgMTQgXSA9IHRtcDtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c2V0UG9zaXRpb246IGZ1bmN0aW9uICggeCwgeSwgeiApIHtcblxuXHRcdHZhciB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cblx0XHRpZiAoIHguaXNWZWN0b3IzICkge1xuXG5cdFx0XHR0ZVsgMTIgXSA9IHgueDtcblx0XHRcdHRlWyAxMyBdID0geC55O1xuXHRcdFx0dGVbIDE0IF0gPSB4Lno7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0ZVsgMTIgXSA9IHg7XG5cdFx0XHR0ZVsgMTMgXSA9IHk7XG5cdFx0XHR0ZVsgMTQgXSA9IHo7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGdldEludmVyc2U6IGZ1bmN0aW9uICggbSwgdGhyb3dPbkRlZ2VuZXJhdGUgKSB7XG5cblx0XHRpZiAoIHRocm93T25EZWdlbmVyYXRlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybiggXCJUSFJFRS5NYXRyaXg0OiAuZ2V0SW52ZXJzZSgpIGNhbiBubyBsb25nZXIgYmUgY29uZmlndXJlZCB0byB0aHJvdyBvbiBkZWdlbmVyYXRlLlwiICk7XG5cblx0XHR9XG5cblx0XHQvLyBiYXNlZCBvbiBodHRwOi8vd3d3LmV1Y2xpZGVhbnNwYWNlLmNvbS9tYXRocy9hbGdlYnJhL21hdHJpeC9mdW5jdGlvbnMvaW52ZXJzZS9mb3VyRC9pbmRleC5odG1cblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzLFxuXHRcdFx0bWUgPSBtLmVsZW1lbnRzLFxuXG5cdFx0XHRuMTEgPSBtZVsgMCBdLCBuMjEgPSBtZVsgMSBdLCBuMzEgPSBtZVsgMiBdLCBuNDEgPSBtZVsgMyBdLFxuXHRcdFx0bjEyID0gbWVbIDQgXSwgbjIyID0gbWVbIDUgXSwgbjMyID0gbWVbIDYgXSwgbjQyID0gbWVbIDcgXSxcblx0XHRcdG4xMyA9IG1lWyA4IF0sIG4yMyA9IG1lWyA5IF0sIG4zMyA9IG1lWyAxMCBdLCBuNDMgPSBtZVsgMTEgXSxcblx0XHRcdG4xNCA9IG1lWyAxMiBdLCBuMjQgPSBtZVsgMTMgXSwgbjM0ID0gbWVbIDE0IF0sIG40NCA9IG1lWyAxNSBdLFxuXG5cdFx0XHR0MTEgPSBuMjMgKiBuMzQgKiBuNDIgLSBuMjQgKiBuMzMgKiBuNDIgKyBuMjQgKiBuMzIgKiBuNDMgLSBuMjIgKiBuMzQgKiBuNDMgLSBuMjMgKiBuMzIgKiBuNDQgKyBuMjIgKiBuMzMgKiBuNDQsXG5cdFx0XHR0MTIgPSBuMTQgKiBuMzMgKiBuNDIgLSBuMTMgKiBuMzQgKiBuNDIgLSBuMTQgKiBuMzIgKiBuNDMgKyBuMTIgKiBuMzQgKiBuNDMgKyBuMTMgKiBuMzIgKiBuNDQgLSBuMTIgKiBuMzMgKiBuNDQsXG5cdFx0XHR0MTMgPSBuMTMgKiBuMjQgKiBuNDIgLSBuMTQgKiBuMjMgKiBuNDIgKyBuMTQgKiBuMjIgKiBuNDMgLSBuMTIgKiBuMjQgKiBuNDMgLSBuMTMgKiBuMjIgKiBuNDQgKyBuMTIgKiBuMjMgKiBuNDQsXG5cdFx0XHR0MTQgPSBuMTQgKiBuMjMgKiBuMzIgLSBuMTMgKiBuMjQgKiBuMzIgLSBuMTQgKiBuMjIgKiBuMzMgKyBuMTIgKiBuMjQgKiBuMzMgKyBuMTMgKiBuMjIgKiBuMzQgLSBuMTIgKiBuMjMgKiBuMzQ7XG5cblx0XHR2YXIgZGV0ID0gbjExICogdDExICsgbjIxICogdDEyICsgbjMxICogdDEzICsgbjQxICogdDE0O1xuXG5cdFx0aWYgKCBkZXQgPT09IDAgKSByZXR1cm4gdGhpcy5zZXQoIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAgKTtcblxuXHRcdHZhciBkZXRJbnYgPSAxIC8gZGV0O1xuXG5cdFx0dGVbIDAgXSA9IHQxMSAqIGRldEludjtcblx0XHR0ZVsgMSBdID0gKCBuMjQgKiBuMzMgKiBuNDEgLSBuMjMgKiBuMzQgKiBuNDEgLSBuMjQgKiBuMzEgKiBuNDMgKyBuMjEgKiBuMzQgKiBuNDMgKyBuMjMgKiBuMzEgKiBuNDQgLSBuMjEgKiBuMzMgKiBuNDQgKSAqIGRldEludjtcblx0XHR0ZVsgMiBdID0gKCBuMjIgKiBuMzQgKiBuNDEgLSBuMjQgKiBuMzIgKiBuNDEgKyBuMjQgKiBuMzEgKiBuNDIgLSBuMjEgKiBuMzQgKiBuNDIgLSBuMjIgKiBuMzEgKiBuNDQgKyBuMjEgKiBuMzIgKiBuNDQgKSAqIGRldEludjtcblx0XHR0ZVsgMyBdID0gKCBuMjMgKiBuMzIgKiBuNDEgLSBuMjIgKiBuMzMgKiBuNDEgLSBuMjMgKiBuMzEgKiBuNDIgKyBuMjEgKiBuMzMgKiBuNDIgKyBuMjIgKiBuMzEgKiBuNDMgLSBuMjEgKiBuMzIgKiBuNDMgKSAqIGRldEludjtcblxuXHRcdHRlWyA0IF0gPSB0MTIgKiBkZXRJbnY7XG5cdFx0dGVbIDUgXSA9ICggbjEzICogbjM0ICogbjQxIC0gbjE0ICogbjMzICogbjQxICsgbjE0ICogbjMxICogbjQzIC0gbjExICogbjM0ICogbjQzIC0gbjEzICogbjMxICogbjQ0ICsgbjExICogbjMzICogbjQ0ICkgKiBkZXRJbnY7XG5cdFx0dGVbIDYgXSA9ICggbjE0ICogbjMyICogbjQxIC0gbjEyICogbjM0ICogbjQxIC0gbjE0ICogbjMxICogbjQyICsgbjExICogbjM0ICogbjQyICsgbjEyICogbjMxICogbjQ0IC0gbjExICogbjMyICogbjQ0ICkgKiBkZXRJbnY7XG5cdFx0dGVbIDcgXSA9ICggbjEyICogbjMzICogbjQxIC0gbjEzICogbjMyICogbjQxICsgbjEzICogbjMxICogbjQyIC0gbjExICogbjMzICogbjQyIC0gbjEyICogbjMxICogbjQzICsgbjExICogbjMyICogbjQzICkgKiBkZXRJbnY7XG5cblx0XHR0ZVsgOCBdID0gdDEzICogZGV0SW52O1xuXHRcdHRlWyA5IF0gPSAoIG4xNCAqIG4yMyAqIG40MSAtIG4xMyAqIG4yNCAqIG40MSAtIG4xNCAqIG4yMSAqIG40MyArIG4xMSAqIG4yNCAqIG40MyArIG4xMyAqIG4yMSAqIG40NCAtIG4xMSAqIG4yMyAqIG40NCApICogZGV0SW52O1xuXHRcdHRlWyAxMCBdID0gKCBuMTIgKiBuMjQgKiBuNDEgLSBuMTQgKiBuMjIgKiBuNDEgKyBuMTQgKiBuMjEgKiBuNDIgLSBuMTEgKiBuMjQgKiBuNDIgLSBuMTIgKiBuMjEgKiBuNDQgKyBuMTEgKiBuMjIgKiBuNDQgKSAqIGRldEludjtcblx0XHR0ZVsgMTEgXSA9ICggbjEzICogbjIyICogbjQxIC0gbjEyICogbjIzICogbjQxIC0gbjEzICogbjIxICogbjQyICsgbjExICogbjIzICogbjQyICsgbjEyICogbjIxICogbjQzIC0gbjExICogbjIyICogbjQzICkgKiBkZXRJbnY7XG5cblx0XHR0ZVsgMTIgXSA9IHQxNCAqIGRldEludjtcblx0XHR0ZVsgMTMgXSA9ICggbjEzICogbjI0ICogbjMxIC0gbjE0ICogbjIzICogbjMxICsgbjE0ICogbjIxICogbjMzIC0gbjExICogbjI0ICogbjMzIC0gbjEzICogbjIxICogbjM0ICsgbjExICogbjIzICogbjM0ICkgKiBkZXRJbnY7XG5cdFx0dGVbIDE0IF0gPSAoIG4xNCAqIG4yMiAqIG4zMSAtIG4xMiAqIG4yNCAqIG4zMSAtIG4xNCAqIG4yMSAqIG4zMiArIG4xMSAqIG4yNCAqIG4zMiArIG4xMiAqIG4yMSAqIG4zNCAtIG4xMSAqIG4yMiAqIG4zNCApICogZGV0SW52O1xuXHRcdHRlWyAxNSBdID0gKCBuMTIgKiBuMjMgKiBuMzEgLSBuMTMgKiBuMjIgKiBuMzEgKyBuMTMgKiBuMjEgKiBuMzIgLSBuMTEgKiBuMjMgKiBuMzIgLSBuMTIgKiBuMjEgKiBuMzMgKyBuMTEgKiBuMjIgKiBuMzMgKSAqIGRldEludjtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0c2NhbGU6IGZ1bmN0aW9uICggdiApIHtcblxuXHRcdHZhciB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dmFyIHggPSB2LngsIHkgPSB2LnksIHogPSB2Lno7XG5cblx0XHR0ZVsgMCBdICo9IHg7IHRlWyA0IF0gKj0geTsgdGVbIDggXSAqPSB6O1xuXHRcdHRlWyAxIF0gKj0geDsgdGVbIDUgXSAqPSB5OyB0ZVsgOSBdICo9IHo7XG5cdFx0dGVbIDIgXSAqPSB4OyB0ZVsgNiBdICo9IHk7IHRlWyAxMCBdICo9IHo7XG5cdFx0dGVbIDMgXSAqPSB4OyB0ZVsgNyBdICo9IHk7IHRlWyAxMSBdICo9IHo7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdGdldE1heFNjYWxlT25BeGlzOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0dmFyIHNjYWxlWFNxID0gdGVbIDAgXSAqIHRlWyAwIF0gKyB0ZVsgMSBdICogdGVbIDEgXSArIHRlWyAyIF0gKiB0ZVsgMiBdO1xuXHRcdHZhciBzY2FsZVlTcSA9IHRlWyA0IF0gKiB0ZVsgNCBdICsgdGVbIDUgXSAqIHRlWyA1IF0gKyB0ZVsgNiBdICogdGVbIDYgXTtcblx0XHR2YXIgc2NhbGVaU3EgPSB0ZVsgOCBdICogdGVbIDggXSArIHRlWyA5IF0gKiB0ZVsgOSBdICsgdGVbIDEwIF0gKiB0ZVsgMTAgXTtcblxuXHRcdHJldHVybiBNYXRoLnNxcnQoIE1hdGgubWF4KCBzY2FsZVhTcSwgc2NhbGVZU3EsIHNjYWxlWlNxICkgKTtcblxuXHR9LFxuXG5cdG1ha2VUcmFuc2xhdGlvbjogZnVuY3Rpb24gKCB4LCB5LCB6ICkge1xuXG5cdFx0dGhpcy5zZXQoXG5cblx0XHRcdDEsIDAsIDAsIHgsXG5cdFx0XHQwLCAxLCAwLCB5LFxuXHRcdFx0MCwgMCwgMSwgeixcblx0XHRcdDAsIDAsIDAsIDFcblxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG1ha2VSb3RhdGlvblg6IGZ1bmN0aW9uICggdGhldGEgKSB7XG5cblx0XHR2YXIgYyA9IE1hdGguY29zKCB0aGV0YSApLCBzID0gTWF0aC5zaW4oIHRoZXRhICk7XG5cblx0XHR0aGlzLnNldChcblxuXHRcdFx0MSwgMCwgMCwgMCxcblx0XHRcdDAsIGMsIC0gcywgMCxcblx0XHRcdDAsIHMsIGMsIDAsXG5cdFx0XHQwLCAwLCAwLCAxXG5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRtYWtlUm90YXRpb25ZOiBmdW5jdGlvbiAoIHRoZXRhICkge1xuXG5cdFx0dmFyIGMgPSBNYXRoLmNvcyggdGhldGEgKSwgcyA9IE1hdGguc2luKCB0aGV0YSApO1xuXG5cdFx0dGhpcy5zZXQoXG5cblx0XHRcdCBjLCAwLCBzLCAwLFxuXHRcdFx0IDAsIDEsIDAsIDAsXG5cdFx0XHQtIHMsIDAsIGMsIDAsXG5cdFx0XHQgMCwgMCwgMCwgMVxuXG5cdFx0KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0bWFrZVJvdGF0aW9uWjogZnVuY3Rpb24gKCB0aGV0YSApIHtcblxuXHRcdHZhciBjID0gTWF0aC5jb3MoIHRoZXRhICksIHMgPSBNYXRoLnNpbiggdGhldGEgKTtcblxuXHRcdHRoaXMuc2V0KFxuXG5cdFx0XHRjLCAtIHMsIDAsIDAsXG5cdFx0XHRzLCBjLCAwLCAwLFxuXHRcdFx0MCwgMCwgMSwgMCxcblx0XHRcdDAsIDAsIDAsIDFcblxuXHRcdCk7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdG1ha2VSb3RhdGlvbkF4aXM6IGZ1bmN0aW9uICggYXhpcywgYW5nbGUgKSB7XG5cblx0XHQvLyBCYXNlZCBvbiBodHRwOi8vd3d3LmdhbWVkZXYubmV0L3JlZmVyZW5jZS9hcnRpY2xlcy9hcnRpY2xlMTE5OS5hc3BcblxuXHRcdHZhciBjID0gTWF0aC5jb3MoIGFuZ2xlICk7XG5cdFx0dmFyIHMgPSBNYXRoLnNpbiggYW5nbGUgKTtcblx0XHR2YXIgdCA9IDEgLSBjO1xuXHRcdHZhciB4ID0gYXhpcy54LCB5ID0gYXhpcy55LCB6ID0gYXhpcy56O1xuXHRcdHZhciB0eCA9IHQgKiB4LCB0eSA9IHQgKiB5O1xuXG5cdFx0dGhpcy5zZXQoXG5cblx0XHRcdHR4ICogeCArIGMsIHR4ICogeSAtIHMgKiB6LCB0eCAqIHogKyBzICogeSwgMCxcblx0XHRcdHR4ICogeSArIHMgKiB6LCB0eSAqIHkgKyBjLCB0eSAqIHogLSBzICogeCwgMCxcblx0XHRcdHR4ICogeiAtIHMgKiB5LCB0eSAqIHogKyBzICogeCwgdCAqIHogKiB6ICsgYywgMCxcblx0XHRcdDAsIDAsIDAsIDFcblxuXHRcdCk7XG5cblx0XHQgcmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRtYWtlU2NhbGU6IGZ1bmN0aW9uICggeCwgeSwgeiApIHtcblxuXHRcdHRoaXMuc2V0KFxuXG5cdFx0XHR4LCAwLCAwLCAwLFxuXHRcdFx0MCwgeSwgMCwgMCxcblx0XHRcdDAsIDAsIHosIDAsXG5cdFx0XHQwLCAwLCAwLCAxXG5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRtYWtlU2hlYXI6IGZ1bmN0aW9uICggeCwgeSwgeiApIHtcblxuXHRcdHRoaXMuc2V0KFxuXG5cdFx0XHQxLCB5LCB6LCAwLFxuXHRcdFx0eCwgMSwgeiwgMCxcblx0XHRcdHgsIHksIDEsIDAsXG5cdFx0XHQwLCAwLCAwLCAxXG5cblx0XHQpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRjb21wb3NlOiBmdW5jdGlvbiAoIHBvc2l0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZSApIHtcblxuXHRcdHZhciB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cblx0XHR2YXIgeCA9IHF1YXRlcm5pb24uX3gsIHkgPSBxdWF0ZXJuaW9uLl95LCB6ID0gcXVhdGVybmlvbi5feiwgdyA9IHF1YXRlcm5pb24uX3c7XG5cdFx0dmFyIHgyID0geCArIHgsXHR5MiA9IHkgKyB5LCB6MiA9IHogKyB6O1xuXHRcdHZhciB4eCA9IHggKiB4MiwgeHkgPSB4ICogeTIsIHh6ID0geCAqIHoyO1xuXHRcdHZhciB5eSA9IHkgKiB5MiwgeXogPSB5ICogejIsIHp6ID0geiAqIHoyO1xuXHRcdHZhciB3eCA9IHcgKiB4Miwgd3kgPSB3ICogeTIsIHd6ID0gdyAqIHoyO1xuXG5cdFx0dmFyIHN4ID0gc2NhbGUueCwgc3kgPSBzY2FsZS55LCBzeiA9IHNjYWxlLno7XG5cblx0XHR0ZVsgMCBdID0gKCAxIC0gKCB5eSArIHp6ICkgKSAqIHN4O1xuXHRcdHRlWyAxIF0gPSAoIHh5ICsgd3ogKSAqIHN4O1xuXHRcdHRlWyAyIF0gPSAoIHh6IC0gd3kgKSAqIHN4O1xuXHRcdHRlWyAzIF0gPSAwO1xuXG5cdFx0dGVbIDQgXSA9ICggeHkgLSB3eiApICogc3k7XG5cdFx0dGVbIDUgXSA9ICggMSAtICggeHggKyB6eiApICkgKiBzeTtcblx0XHR0ZVsgNiBdID0gKCB5eiArIHd4ICkgKiBzeTtcblx0XHR0ZVsgNyBdID0gMDtcblxuXHRcdHRlWyA4IF0gPSAoIHh6ICsgd3kgKSAqIHN6O1xuXHRcdHRlWyA5IF0gPSAoIHl6IC0gd3ggKSAqIHN6O1xuXHRcdHRlWyAxMCBdID0gKCAxIC0gKCB4eCArIHl5ICkgKSAqIHN6O1xuXHRcdHRlWyAxMSBdID0gMDtcblxuXHRcdHRlWyAxMiBdID0gcG9zaXRpb24ueDtcblx0XHR0ZVsgMTMgXSA9IHBvc2l0aW9uLnk7XG5cdFx0dGVbIDE0IF0gPSBwb3NpdGlvbi56O1xuXHRcdHRlWyAxNSBdID0gMTtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0ZGVjb21wb3NlOiBmdW5jdGlvbiAoIHBvc2l0aW9uLCBxdWF0ZXJuaW9uLCBzY2FsZSApIHtcblxuXHRcdHZhciB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cblx0XHR2YXIgc3ggPSBfdjEuc2V0KCB0ZVsgMCBdLCB0ZVsgMSBdLCB0ZVsgMiBdICkubGVuZ3RoKCk7XG5cdFx0dmFyIHN5ID0gX3YxLnNldCggdGVbIDQgXSwgdGVbIDUgXSwgdGVbIDYgXSApLmxlbmd0aCgpO1xuXHRcdHZhciBzeiA9IF92MS5zZXQoIHRlWyA4IF0sIHRlWyA5IF0sIHRlWyAxMCBdICkubGVuZ3RoKCk7XG5cblx0XHQvLyBpZiBkZXRlcm1pbmUgaXMgbmVnYXRpdmUsIHdlIG5lZWQgdG8gaW52ZXJ0IG9uZSBzY2FsZVxuXHRcdHZhciBkZXQgPSB0aGlzLmRldGVybWluYW50KCk7XG5cdFx0aWYgKCBkZXQgPCAwICkgc3ggPSAtIHN4O1xuXG5cdFx0cG9zaXRpb24ueCA9IHRlWyAxMiBdO1xuXHRcdHBvc2l0aW9uLnkgPSB0ZVsgMTMgXTtcblx0XHRwb3NpdGlvbi56ID0gdGVbIDE0IF07XG5cblx0XHQvLyBzY2FsZSB0aGUgcm90YXRpb24gcGFydFxuXHRcdF9tMS5jb3B5KCB0aGlzICk7XG5cblx0XHR2YXIgaW52U1ggPSAxIC8gc3g7XG5cdFx0dmFyIGludlNZID0gMSAvIHN5O1xuXHRcdHZhciBpbnZTWiA9IDEgLyBzejtcblxuXHRcdF9tMS5lbGVtZW50c1sgMCBdICo9IGludlNYO1xuXHRcdF9tMS5lbGVtZW50c1sgMSBdICo9IGludlNYO1xuXHRcdF9tMS5lbGVtZW50c1sgMiBdICo9IGludlNYO1xuXG5cdFx0X20xLmVsZW1lbnRzWyA0IF0gKj0gaW52U1k7XG5cdFx0X20xLmVsZW1lbnRzWyA1IF0gKj0gaW52U1k7XG5cdFx0X20xLmVsZW1lbnRzWyA2IF0gKj0gaW52U1k7XG5cblx0XHRfbTEuZWxlbWVudHNbIDggXSAqPSBpbnZTWjtcblx0XHRfbTEuZWxlbWVudHNbIDkgXSAqPSBpbnZTWjtcblx0XHRfbTEuZWxlbWVudHNbIDEwIF0gKj0gaW52U1o7XG5cblx0XHRxdWF0ZXJuaW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCggX20xICk7XG5cblx0XHRzY2FsZS54ID0gc3g7XG5cdFx0c2NhbGUueSA9IHN5O1xuXHRcdHNjYWxlLnogPSBzejtcblxuXHRcdHJldHVybiB0aGlzO1xuXG5cdH0sXG5cblx0bWFrZVBlcnNwZWN0aXZlOiBmdW5jdGlvbiAoIGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgbmVhciwgZmFyICkge1xuXG5cdFx0aWYgKCBmYXIgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCAnVEhSRUUuTWF0cml4NDogLm1ha2VQZXJzcGVjdGl2ZSgpIGhhcyBiZWVuIHJlZGVmaW5lZCBhbmQgaGFzIGEgbmV3IHNpZ25hdHVyZS4gUGxlYXNlIGNoZWNrIHRoZSBkb2NzLicgKTtcblxuXHRcdH1cblxuXHRcdHZhciB0ZSA9IHRoaXMuZWxlbWVudHM7XG5cdFx0dmFyIHggPSAyICogbmVhciAvICggcmlnaHQgLSBsZWZ0ICk7XG5cdFx0dmFyIHkgPSAyICogbmVhciAvICggdG9wIC0gYm90dG9tICk7XG5cblx0XHR2YXIgYSA9ICggcmlnaHQgKyBsZWZ0ICkgLyAoIHJpZ2h0IC0gbGVmdCApO1xuXHRcdHZhciBiID0gKCB0b3AgKyBib3R0b20gKSAvICggdG9wIC0gYm90dG9tICk7XG5cdFx0dmFyIGMgPSAtICggZmFyICsgbmVhciApIC8gKCBmYXIgLSBuZWFyICk7XG5cdFx0dmFyIGQgPSAtIDIgKiBmYXIgKiBuZWFyIC8gKCBmYXIgLSBuZWFyICk7XG5cblx0XHR0ZVsgMCBdID0geDtcdHRlWyA0IF0gPSAwO1x0dGVbIDggXSA9IGE7XHR0ZVsgMTIgXSA9IDA7XG5cdFx0dGVbIDEgXSA9IDA7XHR0ZVsgNSBdID0geTtcdHRlWyA5IF0gPSBiO1x0dGVbIDEzIF0gPSAwO1xuXHRcdHRlWyAyIF0gPSAwO1x0dGVbIDYgXSA9IDA7XHR0ZVsgMTAgXSA9IGM7XHR0ZVsgMTQgXSA9IGQ7XG5cdFx0dGVbIDMgXSA9IDA7XHR0ZVsgNyBdID0gMDtcdHRlWyAxMSBdID0gLSAxO1x0dGVbIDE1IF0gPSAwO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRtYWtlT3J0aG9ncmFwaGljOiBmdW5jdGlvbiAoIGxlZnQsIHJpZ2h0LCB0b3AsIGJvdHRvbSwgbmVhciwgZmFyICkge1xuXG5cdFx0dmFyIHRlID0gdGhpcy5lbGVtZW50cztcblx0XHR2YXIgdyA9IDEuMCAvICggcmlnaHQgLSBsZWZ0ICk7XG5cdFx0dmFyIGggPSAxLjAgLyAoIHRvcCAtIGJvdHRvbSApO1xuXHRcdHZhciBwID0gMS4wIC8gKCBmYXIgLSBuZWFyICk7XG5cblx0XHR2YXIgeCA9ICggcmlnaHQgKyBsZWZ0ICkgKiB3O1xuXHRcdHZhciB5ID0gKCB0b3AgKyBib3R0b20gKSAqIGg7XG5cdFx0dmFyIHogPSAoIGZhciArIG5lYXIgKSAqIHA7XG5cblx0XHR0ZVsgMCBdID0gMiAqIHc7XHR0ZVsgNCBdID0gMDtcdHRlWyA4IF0gPSAwO1x0dGVbIDEyIF0gPSAtIHg7XG5cdFx0dGVbIDEgXSA9IDA7XHR0ZVsgNSBdID0gMiAqIGg7XHR0ZVsgOSBdID0gMDtcdHRlWyAxMyBdID0gLSB5O1xuXHRcdHRlWyAyIF0gPSAwO1x0dGVbIDYgXSA9IDA7XHR0ZVsgMTAgXSA9IC0gMiAqIHA7XHR0ZVsgMTQgXSA9IC0gejtcblx0XHR0ZVsgMyBdID0gMDtcdHRlWyA3IF0gPSAwO1x0dGVbIDExIF0gPSAwO1x0dGVbIDE1IF0gPSAxO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fSxcblxuXHRlcXVhbHM6IGZ1bmN0aW9uICggbWF0cml4ICkge1xuXG5cdFx0dmFyIHRlID0gdGhpcy5lbGVtZW50cztcblx0XHR2YXIgbWUgPSBtYXRyaXguZWxlbWVudHM7XG5cblx0XHRmb3IgKCB2YXIgaSA9IDA7IGkgPCAxNjsgaSArKyApIHtcblxuXHRcdFx0aWYgKCB0ZVsgaSBdICE9PSBtZVsgaSBdICkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cblx0fSxcblxuXHRmcm9tQXJyYXk6IGZ1bmN0aW9uICggYXJyYXksIG9mZnNldCApIHtcblxuXHRcdGlmICggb2Zmc2V0ID09PSB1bmRlZmluZWQgKSBvZmZzZXQgPSAwO1xuXG5cdFx0Zm9yICggdmFyIGkgPSAwOyBpIDwgMTY7IGkgKysgKSB7XG5cblx0XHRcdHRoaXMuZWxlbWVudHNbIGkgXSA9IGFycmF5WyBpICsgb2Zmc2V0IF07XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uICggYXJyYXksIG9mZnNldCApIHtcblxuXHRcdGlmICggYXJyYXkgPT09IHVuZGVmaW5lZCApIGFycmF5ID0gW107XG5cdFx0aWYgKCBvZmZzZXQgPT09IHVuZGVmaW5lZCApIG9mZnNldCA9IDA7XG5cblx0XHR2YXIgdGUgPSB0aGlzLmVsZW1lbnRzO1xuXG5cdFx0YXJyYXlbIG9mZnNldCBdID0gdGVbIDAgXTtcblx0XHRhcnJheVsgb2Zmc2V0ICsgMSBdID0gdGVbIDEgXTtcblx0XHRhcnJheVsgb2Zmc2V0ICsgMiBdID0gdGVbIDIgXTtcblx0XHRhcnJheVsgb2Zmc2V0ICsgMyBdID0gdGVbIDMgXTtcblxuXHRcdGFycmF5WyBvZmZzZXQgKyA0IF0gPSB0ZVsgNCBdO1xuXHRcdGFycmF5WyBvZmZzZXQgKyA1IF0gPSB0ZVsgNSBdO1xuXHRcdGFycmF5WyBvZmZzZXQgKyA2IF0gPSB0ZVsgNiBdO1xuXHRcdGFycmF5WyBvZmZzZXQgKyA3IF0gPSB0ZVsgNyBdO1xuXG5cdFx0YXJyYXlbIG9mZnNldCArIDggXSA9IHRlWyA4IF07XG5cdFx0YXJyYXlbIG9mZnNldCArIDkgXSA9IHRlWyA5IF07XG5cdFx0YXJyYXlbIG9mZnNldCArIDEwIF0gPSB0ZVsgMTAgXTtcblx0XHRhcnJheVsgb2Zmc2V0ICsgMTEgXSA9IHRlWyAxMSBdO1xuXG5cdFx0YXJyYXlbIG9mZnNldCArIDEyIF0gPSB0ZVsgMTIgXTtcblx0XHRhcnJheVsgb2Zmc2V0ICsgMTMgXSA9IHRlWyAxMyBdO1xuXHRcdGFycmF5WyBvZmZzZXQgKyAxNCBdID0gdGVbIDE0IF07XG5cdFx0YXJyYXlbIG9mZnNldCArIDE1IF0gPSB0ZVsgMTUgXTtcblxuXHRcdHJldHVybiBhcnJheTtcblxuXHR9XG5cbn0gKTtcblxuXG5leHBvcnQgeyBNYXRyaXg0IH07XG4iLCJpbXBvcnQgeyBNYXRoVXRpbHMgfSBmcm9tICcuLi8uLi9tYXRoL01hdGhVdGlscy5qcyc7XG5pbXBvcnQgeyBWZWN0b3IzIH0gZnJvbSAnLi4vLi4vbWF0aC9WZWN0b3IzLmpzJztcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tICcuLi8uLi9tYXRoL01hdHJpeDQuanMnO1xuXG4vKipcbiAqIEBhdXRob3Igeno4NSAvIGh0dHA6Ly93d3cubGFiNGdhbWVzLm5ldC96ejg1L2Jsb2dcbiAqIEV4dGVuc2libGUgY3VydmUgb2JqZWN0XG4gKlxuICogU29tZSBjb21tb24gb2YgY3VydmUgbWV0aG9kczpcbiAqIC5nZXRQb2ludCggdCwgb3B0aW9uYWxUYXJnZXQgKSwgLmdldFRhbmdlbnQoIHQgKVxuICogLmdldFBvaW50QXQoIHUsIG9wdGlvbmFsVGFyZ2V0ICksIC5nZXRUYW5nZW50QXQoIHUgKVxuICogLmdldFBvaW50cygpLCAuZ2V0U3BhY2VkUG9pbnRzKClcbiAqIC5nZXRMZW5ndGgoKVxuICogLnVwZGF0ZUFyY0xlbmd0aHMoKVxuICpcbiAqIFRoaXMgZm9sbG93aW5nIGN1cnZlcyBpbmhlcml0IGZyb20gVEhSRUUuQ3VydmU6XG4gKlxuICogLS0gMkQgY3VydmVzIC0tXG4gKiBUSFJFRS5BcmNDdXJ2ZVxuICogVEhSRUUuQ3ViaWNCZXppZXJDdXJ2ZVxuICogVEhSRUUuRWxsaXBzZUN1cnZlXG4gKiBUSFJFRS5MaW5lQ3VydmVcbiAqIFRIUkVFLlF1YWRyYXRpY0JlemllckN1cnZlXG4gKiBUSFJFRS5TcGxpbmVDdXJ2ZVxuICpcbiAqIC0tIDNEIGN1cnZlcyAtLVxuICogVEhSRUUuQ2F0bXVsbFJvbUN1cnZlM1xuICogVEhSRUUuQ3ViaWNCZXppZXJDdXJ2ZTNcbiAqIFRIUkVFLkxpbmVDdXJ2ZTNcbiAqIFRIUkVFLlF1YWRyYXRpY0JlemllckN1cnZlM1xuICpcbiAqIEEgc2VyaWVzIG9mIGN1cnZlcyBjYW4gYmUgcmVwcmVzZW50ZWQgYXMgYSBUSFJFRS5DdXJ2ZVBhdGguXG4gKlxuICoqL1xuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqXHRBYnN0cmFjdCBDdXJ2ZSBiYXNlIGNsYXNzXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbmZ1bmN0aW9uIEN1cnZlKCkge1xuXG5cdHRoaXMudHlwZSA9ICdDdXJ2ZSc7XG5cblx0dGhpcy5hcmNMZW5ndGhEaXZpc2lvbnMgPSAyMDA7XG5cbn1cblxuT2JqZWN0LmFzc2lnbiggQ3VydmUucHJvdG90eXBlLCB7XG5cblx0Ly8gVmlydHVhbCBiYXNlIGNsYXNzIG1ldGhvZCB0byBvdmVyd3JpdGUgYW5kIGltcGxlbWVudCBpbiBzdWJjbGFzc2VzXG5cdC8vXHQtIHQgWzAgLi4gMV1cblxuXHRnZXRQb2ludDogZnVuY3Rpb24gKCAvKiB0LCBvcHRpb25hbFRhcmdldCAqLyApIHtcblxuXHRcdGNvbnNvbGUud2FybiggJ1RIUkVFLkN1cnZlOiAuZ2V0UG9pbnQoKSBub3QgaW1wbGVtZW50ZWQuJyApO1xuXHRcdHJldHVybiBudWxsO1xuXG5cdH0sXG5cblx0Ly8gR2V0IHBvaW50IGF0IHJlbGF0aXZlIHBvc2l0aW9uIGluIGN1cnZlIGFjY29yZGluZyB0byBhcmMgbGVuZ3RoXG5cdC8vIC0gdSBbMCAuLiAxXVxuXG5cdGdldFBvaW50QXQ6IGZ1bmN0aW9uICggdSwgb3B0aW9uYWxUYXJnZXQgKSB7XG5cblx0XHR2YXIgdCA9IHRoaXMuZ2V0VXRvVG1hcHBpbmcoIHUgKTtcblx0XHRyZXR1cm4gdGhpcy5nZXRQb2ludCggdCwgb3B0aW9uYWxUYXJnZXQgKTtcblxuXHR9LFxuXG5cdC8vIEdldCBzZXF1ZW5jZSBvZiBwb2ludHMgdXNpbmcgZ2V0UG9pbnQoIHQgKVxuXG5cdGdldFBvaW50czogZnVuY3Rpb24gKCBkaXZpc2lvbnMgKSB7XG5cblx0XHRpZiAoIGRpdmlzaW9ucyA9PT0gdW5kZWZpbmVkICkgZGl2aXNpb25zID0gNTtcblxuXHRcdHZhciBwb2ludHMgPSBbXTtcblxuXHRcdGZvciAoIHZhciBkID0gMDsgZCA8PSBkaXZpc2lvbnM7IGQgKysgKSB7XG5cblx0XHRcdHBvaW50cy5wdXNoKCB0aGlzLmdldFBvaW50KCBkIC8gZGl2aXNpb25zICkgKTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBwb2ludHM7XG5cblx0fSxcblxuXHQvLyBHZXQgc2VxdWVuY2Ugb2YgcG9pbnRzIHVzaW5nIGdldFBvaW50QXQoIHUgKVxuXG5cdGdldFNwYWNlZFBvaW50czogZnVuY3Rpb24gKCBkaXZpc2lvbnMgKSB7XG5cblx0XHRpZiAoIGRpdmlzaW9ucyA9PT0gdW5kZWZpbmVkICkgZGl2aXNpb25zID0gNTtcblxuXHRcdHZhciBwb2ludHMgPSBbXTtcblxuXHRcdGZvciAoIHZhciBkID0gMDsgZCA8PSBkaXZpc2lvbnM7IGQgKysgKSB7XG5cblx0XHRcdHBvaW50cy5wdXNoKCB0aGlzLmdldFBvaW50QXQoIGQgLyBkaXZpc2lvbnMgKSApO1xuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHBvaW50cztcblxuXHR9LFxuXG5cdC8vIEdldCB0b3RhbCBjdXJ2ZSBhcmMgbGVuZ3RoXG5cblx0Z2V0TGVuZ3RoOiBmdW5jdGlvbiAoKSB7XG5cblx0XHR2YXIgbGVuZ3RocyA9IHRoaXMuZ2V0TGVuZ3RocygpO1xuXHRcdHJldHVybiBsZW5ndGhzWyBsZW5ndGhzLmxlbmd0aCAtIDEgXTtcblxuXHR9LFxuXG5cdC8vIEdldCBsaXN0IG9mIGN1bXVsYXRpdmUgc2VnbWVudCBsZW5ndGhzXG5cblx0Z2V0TGVuZ3RoczogZnVuY3Rpb24gKCBkaXZpc2lvbnMgKSB7XG5cblx0XHRpZiAoIGRpdmlzaW9ucyA9PT0gdW5kZWZpbmVkICkgZGl2aXNpb25zID0gdGhpcy5hcmNMZW5ndGhEaXZpc2lvbnM7XG5cblx0XHRpZiAoIHRoaXMuY2FjaGVBcmNMZW5ndGhzICYmXG5cdFx0XHQoIHRoaXMuY2FjaGVBcmNMZW5ndGhzLmxlbmd0aCA9PT0gZGl2aXNpb25zICsgMSApICYmXG5cdFx0XHQhIHRoaXMubmVlZHNVcGRhdGUgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmNhY2hlQXJjTGVuZ3RocztcblxuXHRcdH1cblxuXHRcdHRoaXMubmVlZHNVcGRhdGUgPSBmYWxzZTtcblxuXHRcdHZhciBjYWNoZSA9IFtdO1xuXHRcdHZhciBjdXJyZW50LCBsYXN0ID0gdGhpcy5nZXRQb2ludCggMCApO1xuXHRcdHZhciBwLCBzdW0gPSAwO1xuXG5cdFx0Y2FjaGUucHVzaCggMCApO1xuXG5cdFx0Zm9yICggcCA9IDE7IHAgPD0gZGl2aXNpb25zOyBwICsrICkge1xuXG5cdFx0XHRjdXJyZW50ID0gdGhpcy5nZXRQb2ludCggcCAvIGRpdmlzaW9ucyApO1xuXHRcdFx0c3VtICs9IGN1cnJlbnQuZGlzdGFuY2VUbyggbGFzdCApO1xuXHRcdFx0Y2FjaGUucHVzaCggc3VtICk7XG5cdFx0XHRsYXN0ID0gY3VycmVudDtcblxuXHRcdH1cblxuXHRcdHRoaXMuY2FjaGVBcmNMZW5ndGhzID0gY2FjaGU7XG5cblx0XHRyZXR1cm4gY2FjaGU7IC8vIHsgc3VtczogY2FjaGUsIHN1bTogc3VtIH07IFN1bSBpcyBpbiB0aGUgbGFzdCBlbGVtZW50LlxuXG5cdH0sXG5cblx0dXBkYXRlQXJjTGVuZ3RoczogZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0dGhpcy5nZXRMZW5ndGhzKCk7XG5cblx0fSxcblxuXHQvLyBHaXZlbiB1ICggMCAuLiAxICksIGdldCBhIHQgdG8gZmluZCBwLiBUaGlzIGdpdmVzIHlvdSBwb2ludHMgd2hpY2ggYXJlIGVxdWlkaXN0YW50XG5cblx0Z2V0VXRvVG1hcHBpbmc6IGZ1bmN0aW9uICggdSwgZGlzdGFuY2UgKSB7XG5cblx0XHR2YXIgYXJjTGVuZ3RocyA9IHRoaXMuZ2V0TGVuZ3RocygpO1xuXG5cdFx0dmFyIGkgPSAwLCBpbCA9IGFyY0xlbmd0aHMubGVuZ3RoO1xuXG5cdFx0dmFyIHRhcmdldEFyY0xlbmd0aDsgLy8gVGhlIHRhcmdldGVkIHUgZGlzdGFuY2UgdmFsdWUgdG8gZ2V0XG5cblx0XHRpZiAoIGRpc3RhbmNlICkge1xuXG5cdFx0XHR0YXJnZXRBcmNMZW5ndGggPSBkaXN0YW5jZTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRhcmdldEFyY0xlbmd0aCA9IHUgKiBhcmNMZW5ndGhzWyBpbCAtIDEgXTtcblxuXHRcdH1cblxuXHRcdC8vIGJpbmFyeSBzZWFyY2ggZm9yIHRoZSBpbmRleCB3aXRoIGxhcmdlc3QgdmFsdWUgc21hbGxlciB0aGFuIHRhcmdldCB1IGRpc3RhbmNlXG5cblx0XHR2YXIgbG93ID0gMCwgaGlnaCA9IGlsIC0gMSwgY29tcGFyaXNvbjtcblxuXHRcdHdoaWxlICggbG93IDw9IGhpZ2ggKSB7XG5cblx0XHRcdGkgPSBNYXRoLmZsb29yKCBsb3cgKyAoIGhpZ2ggLSBsb3cgKSAvIDIgKTsgLy8gbGVzcyBsaWtlbHkgdG8gb3ZlcmZsb3csIHRob3VnaCBwcm9iYWJseSBub3QgaXNzdWUgaGVyZSwgSlMgZG9lc24ndCByZWFsbHkgaGF2ZSBpbnRlZ2VycywgYWxsIG51bWJlcnMgYXJlIGZsb2F0c1xuXG5cdFx0XHRjb21wYXJpc29uID0gYXJjTGVuZ3Roc1sgaSBdIC0gdGFyZ2V0QXJjTGVuZ3RoO1xuXG5cdFx0XHRpZiAoIGNvbXBhcmlzb24gPCAwICkge1xuXG5cdFx0XHRcdGxvdyA9IGkgKyAxO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBjb21wYXJpc29uID4gMCApIHtcblxuXHRcdFx0XHRoaWdoID0gaSAtIDE7XG5cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0aGlnaCA9IGk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRcdC8vIERPTkVcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0aSA9IGhpZ2g7XG5cblx0XHRpZiAoIGFyY0xlbmd0aHNbIGkgXSA9PT0gdGFyZ2V0QXJjTGVuZ3RoICkge1xuXG5cdFx0XHRyZXR1cm4gaSAvICggaWwgLSAxICk7XG5cblx0XHR9XG5cblx0XHQvLyB3ZSBjb3VsZCBnZXQgZmluZXIgZ3JhaW4gYXQgbGVuZ3Rocywgb3IgdXNlIHNpbXBsZSBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdHdvIHBvaW50c1xuXG5cdFx0dmFyIGxlbmd0aEJlZm9yZSA9IGFyY0xlbmd0aHNbIGkgXTtcblx0XHR2YXIgbGVuZ3RoQWZ0ZXIgPSBhcmNMZW5ndGhzWyBpICsgMSBdO1xuXG5cdFx0dmFyIHNlZ21lbnRMZW5ndGggPSBsZW5ndGhBZnRlciAtIGxlbmd0aEJlZm9yZTtcblxuXHRcdC8vIGRldGVybWluZSB3aGVyZSB3ZSBhcmUgYmV0d2VlbiB0aGUgJ2JlZm9yZScgYW5kICdhZnRlcicgcG9pbnRzXG5cblx0XHR2YXIgc2VnbWVudEZyYWN0aW9uID0gKCB0YXJnZXRBcmNMZW5ndGggLSBsZW5ndGhCZWZvcmUgKSAvIHNlZ21lbnRMZW5ndGg7XG5cblx0XHQvLyBhZGQgdGhhdCBmcmFjdGlvbmFsIGFtb3VudCB0byB0XG5cblx0XHR2YXIgdCA9ICggaSArIHNlZ21lbnRGcmFjdGlvbiApIC8gKCBpbCAtIDEgKTtcblxuXHRcdHJldHVybiB0O1xuXG5cdH0sXG5cblx0Ly8gUmV0dXJucyBhIHVuaXQgdmVjdG9yIHRhbmdlbnQgYXQgdFxuXHQvLyBJbiBjYXNlIGFueSBzdWIgY3VydmUgZG9lcyBub3QgaW1wbGVtZW50IGl0cyB0YW5nZW50IGRlcml2YXRpb24sXG5cdC8vIDIgcG9pbnRzIGEgc21hbGwgZGVsdGEgYXBhcnQgd2lsbCBiZSB1c2VkIHRvIGZpbmQgaXRzIGdyYWRpZW50XG5cdC8vIHdoaWNoIHNlZW1zIHRvIGdpdmUgYSByZWFzb25hYmxlIGFwcHJveGltYXRpb25cblxuXHRnZXRUYW5nZW50OiBmdW5jdGlvbiAoIHQgKSB7XG5cblx0XHR2YXIgZGVsdGEgPSAwLjAwMDE7XG5cdFx0dmFyIHQxID0gdCAtIGRlbHRhO1xuXHRcdHZhciB0MiA9IHQgKyBkZWx0YTtcblxuXHRcdC8vIENhcHBpbmcgaW4gY2FzZSBvZiBkYW5nZXJcblxuXHRcdGlmICggdDEgPCAwICkgdDEgPSAwO1xuXHRcdGlmICggdDIgPiAxICkgdDIgPSAxO1xuXG5cdFx0dmFyIHB0MSA9IHRoaXMuZ2V0UG9pbnQoIHQxICk7XG5cdFx0dmFyIHB0MiA9IHRoaXMuZ2V0UG9pbnQoIHQyICk7XG5cblx0XHR2YXIgdmVjID0gcHQyLmNsb25lKCkuc3ViKCBwdDEgKTtcblx0XHRyZXR1cm4gdmVjLm5vcm1hbGl6ZSgpO1xuXG5cdH0sXG5cblx0Z2V0VGFuZ2VudEF0OiBmdW5jdGlvbiAoIHUgKSB7XG5cblx0XHR2YXIgdCA9IHRoaXMuZ2V0VXRvVG1hcHBpbmcoIHUgKTtcblx0XHRyZXR1cm4gdGhpcy5nZXRUYW5nZW50KCB0ICk7XG5cblx0fSxcblxuXHRjb21wdXRlRnJlbmV0RnJhbWVzOiBmdW5jdGlvbiAoIHNlZ21lbnRzLCBjbG9zZWQgKSB7XG5cblx0XHQvLyBzZWUgaHR0cDovL3d3dy5jcy5pbmRpYW5hLmVkdS9wdWIvdGVjaHJlcG9ydHMvVFI0MjUucGRmXG5cblx0XHR2YXIgbm9ybWFsID0gbmV3IFZlY3RvcjMoKTtcblxuXHRcdHZhciB0YW5nZW50cyA9IFtdO1xuXHRcdHZhciBub3JtYWxzID0gW107XG5cdFx0dmFyIGJpbm9ybWFscyA9IFtdO1xuXG5cdFx0dmFyIHZlYyA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0dmFyIG1hdCA9IG5ldyBNYXRyaXg0KCk7XG5cblx0XHR2YXIgaSwgdSwgdGhldGE7XG5cblx0XHQvLyBjb21wdXRlIHRoZSB0YW5nZW50IHZlY3RvcnMgZm9yIGVhY2ggc2VnbWVudCBvbiB0aGUgY3VydmVcblxuXHRcdGZvciAoIGkgPSAwOyBpIDw9IHNlZ21lbnRzOyBpICsrICkge1xuXG5cdFx0XHR1ID0gaSAvIHNlZ21lbnRzO1xuXG5cdFx0XHR0YW5nZW50c1sgaSBdID0gdGhpcy5nZXRUYW5nZW50QXQoIHUgKTtcblx0XHRcdHRhbmdlbnRzWyBpIF0ubm9ybWFsaXplKCk7XG5cblx0XHR9XG5cblx0XHQvLyBzZWxlY3QgYW4gaW5pdGlhbCBub3JtYWwgdmVjdG9yIHBlcnBlbmRpY3VsYXIgdG8gdGhlIGZpcnN0IHRhbmdlbnQgdmVjdG9yLFxuXHRcdC8vIGFuZCBpbiB0aGUgZGlyZWN0aW9uIG9mIHRoZSBtaW5pbXVtIHRhbmdlbnQgeHl6IGNvbXBvbmVudFxuXG5cdFx0bm9ybWFsc1sgMCBdID0gbmV3IFZlY3RvcjMoKTtcblx0XHRiaW5vcm1hbHNbIDAgXSA9IG5ldyBWZWN0b3IzKCk7XG5cdFx0dmFyIG1pbiA9IE51bWJlci5NQVhfVkFMVUU7XG5cdFx0dmFyIHR4ID0gTWF0aC5hYnMoIHRhbmdlbnRzWyAwIF0ueCApO1xuXHRcdHZhciB0eSA9IE1hdGguYWJzKCB0YW5nZW50c1sgMCBdLnkgKTtcblx0XHR2YXIgdHogPSBNYXRoLmFicyggdGFuZ2VudHNbIDAgXS56ICk7XG5cblx0XHRpZiAoIHR4IDw9IG1pbiApIHtcblxuXHRcdFx0bWluID0gdHg7XG5cdFx0XHRub3JtYWwuc2V0KCAxLCAwLCAwICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHR5IDw9IG1pbiApIHtcblxuXHRcdFx0bWluID0gdHk7XG5cdFx0XHRub3JtYWwuc2V0KCAwLCAxLCAwICk7XG5cblx0XHR9XG5cblx0XHRpZiAoIHR6IDw9IG1pbiApIHtcblxuXHRcdFx0bm9ybWFsLnNldCggMCwgMCwgMSApO1xuXG5cdFx0fVxuXG5cdFx0dmVjLmNyb3NzVmVjdG9ycyggdGFuZ2VudHNbIDAgXSwgbm9ybWFsICkubm9ybWFsaXplKCk7XG5cblx0XHRub3JtYWxzWyAwIF0uY3Jvc3NWZWN0b3JzKCB0YW5nZW50c1sgMCBdLCB2ZWMgKTtcblx0XHRiaW5vcm1hbHNbIDAgXS5jcm9zc1ZlY3RvcnMoIHRhbmdlbnRzWyAwIF0sIG5vcm1hbHNbIDAgXSApO1xuXG5cblx0XHQvLyBjb21wdXRlIHRoZSBzbG93bHktdmFyeWluZyBub3JtYWwgYW5kIGJpbm9ybWFsIHZlY3RvcnMgZm9yIGVhY2ggc2VnbWVudCBvbiB0aGUgY3VydmVcblxuXHRcdGZvciAoIGkgPSAxOyBpIDw9IHNlZ21lbnRzOyBpICsrICkge1xuXG5cdFx0XHRub3JtYWxzWyBpIF0gPSBub3JtYWxzWyBpIC0gMSBdLmNsb25lKCk7XG5cblx0XHRcdGJpbm9ybWFsc1sgaSBdID0gYmlub3JtYWxzWyBpIC0gMSBdLmNsb25lKCk7XG5cblx0XHRcdHZlYy5jcm9zc1ZlY3RvcnMoIHRhbmdlbnRzWyBpIC0gMSBdLCB0YW5nZW50c1sgaSBdICk7XG5cblx0XHRcdGlmICggdmVjLmxlbmd0aCgpID4gTnVtYmVyLkVQU0lMT04gKSB7XG5cblx0XHRcdFx0dmVjLm5vcm1hbGl6ZSgpO1xuXG5cdFx0XHRcdHRoZXRhID0gTWF0aC5hY29zKCBNYXRoVXRpbHMuY2xhbXAoIHRhbmdlbnRzWyBpIC0gMSBdLmRvdCggdGFuZ2VudHNbIGkgXSApLCAtIDEsIDEgKSApOyAvLyBjbGFtcCBmb3IgZmxvYXRpbmcgcHQgZXJyb3JzXG5cblx0XHRcdFx0bm9ybWFsc1sgaSBdLmFwcGx5TWF0cml4NCggbWF0Lm1ha2VSb3RhdGlvbkF4aXMoIHZlYywgdGhldGEgKSApO1xuXG5cdFx0XHR9XG5cblx0XHRcdGJpbm9ybWFsc1sgaSBdLmNyb3NzVmVjdG9ycyggdGFuZ2VudHNbIGkgXSwgbm9ybWFsc1sgaSBdICk7XG5cblx0XHR9XG5cblx0XHQvLyBpZiB0aGUgY3VydmUgaXMgY2xvc2VkLCBwb3N0cHJvY2VzcyB0aGUgdmVjdG9ycyBzbyB0aGUgZmlyc3QgYW5kIGxhc3Qgbm9ybWFsIHZlY3RvcnMgYXJlIHRoZSBzYW1lXG5cblx0XHRpZiAoIGNsb3NlZCA9PT0gdHJ1ZSApIHtcblxuXHRcdFx0dGhldGEgPSBNYXRoLmFjb3MoIE1hdGhVdGlscy5jbGFtcCggbm9ybWFsc1sgMCBdLmRvdCggbm9ybWFsc1sgc2VnbWVudHMgXSApLCAtIDEsIDEgKSApO1xuXHRcdFx0dGhldGEgLz0gc2VnbWVudHM7XG5cblx0XHRcdGlmICggdGFuZ2VudHNbIDAgXS5kb3QoIHZlYy5jcm9zc1ZlY3RvcnMoIG5vcm1hbHNbIDAgXSwgbm9ybWFsc1sgc2VnbWVudHMgXSApICkgPiAwICkge1xuXG5cdFx0XHRcdHRoZXRhID0gLSB0aGV0YTtcblxuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCBpID0gMTsgaSA8PSBzZWdtZW50czsgaSArKyApIHtcblxuXHRcdFx0XHQvLyB0d2lzdCBhIGxpdHRsZS4uLlxuXHRcdFx0XHRub3JtYWxzWyBpIF0uYXBwbHlNYXRyaXg0KCBtYXQubWFrZVJvdGF0aW9uQXhpcyggdGFuZ2VudHNbIGkgXSwgdGhldGEgKiBpICkgKTtcblx0XHRcdFx0Ymlub3JtYWxzWyBpIF0uY3Jvc3NWZWN0b3JzKCB0YW5nZW50c1sgaSBdLCBub3JtYWxzWyBpIF0gKTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRhbmdlbnRzOiB0YW5nZW50cyxcblx0XHRcdG5vcm1hbHM6IG5vcm1hbHMsXG5cdFx0XHRiaW5vcm1hbHM6IGJpbm9ybWFsc1xuXHRcdH07XG5cblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIG5ldyB0aGlzLmNvbnN0cnVjdG9yKCkuY29weSggdGhpcyApO1xuXG5cdH0sXG5cblx0Y29weTogZnVuY3Rpb24gKCBzb3VyY2UgKSB7XG5cblx0XHR0aGlzLmFyY0xlbmd0aERpdmlzaW9ucyA9IHNvdXJjZS5hcmNMZW5ndGhEaXZpc2lvbnM7XG5cblx0XHRyZXR1cm4gdGhpcztcblxuXHR9LFxuXG5cdHRvSlNPTjogZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIGRhdGEgPSB7XG5cdFx0XHRtZXRhZGF0YToge1xuXHRcdFx0XHR2ZXJzaW9uOiA0LjUsXG5cdFx0XHRcdHR5cGU6ICdDdXJ2ZScsXG5cdFx0XHRcdGdlbmVyYXRvcjogJ0N1cnZlLnRvSlNPTidcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0ZGF0YS5hcmNMZW5ndGhEaXZpc2lvbnMgPSB0aGlzLmFyY0xlbmd0aERpdmlzaW9ucztcblx0XHRkYXRhLnR5cGUgPSB0aGlzLnR5cGU7XG5cblx0XHRyZXR1cm4gZGF0YTtcblxuXHR9LFxuXG5cdGZyb21KU09OOiBmdW5jdGlvbiAoIGpzb24gKSB7XG5cblx0XHR0aGlzLmFyY0xlbmd0aERpdmlzaW9ucyA9IGpzb24uYXJjTGVuZ3RoRGl2aXNpb25zO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cblx0fVxuXG59ICk7XG5cblxuZXhwb3J0IHsgQ3VydmUgfTtcbiIsImltcG9ydCB7IFZlY3RvcjMgfSBmcm9tICcuLi8uLi9tYXRoL1ZlY3RvcjMuanMnO1xuaW1wb3J0IHsgQ3VydmUgfSBmcm9tICcuLi9jb3JlL0N1cnZlLmpzJztcblxuLyoqXG4gKiBAYXV0aG9yIHp6ODUgaHR0cHM6Ly9naXRodWIuY29tL3p6ODVcbiAqXG4gKiBDZW50cmlwZXRhbCBDYXRtdWxsUm9tIEN1cnZlIC0gd2hpY2ggaXMgdXNlZnVsIGZvciBhdm9pZGluZ1xuICogY3VzcHMgYW5kIHNlbGYtaW50ZXJzZWN0aW9ucyBpbiBub24tdW5pZm9ybSBjYXRtdWxsIHJvbSBjdXJ2ZXMuXG4gKiBodHRwOi8vd3d3LmNlbXl1a3NlbC5jb20vcmVzZWFyY2gvY2F0bXVsbHJvbV9wYXJhbS9jYXRtdWxscm9tLnBkZlxuICpcbiAqIGN1cnZlLnR5cGUgYWNjZXB0cyBjZW50cmlwZXRhbChkZWZhdWx0KSwgY2hvcmRhbCBhbmQgY2F0bXVsbHJvbVxuICogY3VydmUudGVuc2lvbiBpcyB1c2VkIGZvciBjYXRtdWxscm9tIHdoaWNoIGRlZmF1bHRzIHRvIDAuNVxuICovXG5cblxuLypcbkJhc2VkIG9uIGFuIG9wdGltaXplZCBjKysgc29sdXRpb24gaW5cbiAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvOTQ4OTczNi9jYXRtdWxsLXJvbS1jdXJ2ZS13aXRoLW5vLWN1c3BzLWFuZC1uby1zZWxmLWludGVyc2VjdGlvbnMvXG4gLSBodHRwOi8vaWRlb25lLmNvbS9Ob0ViVk1cblxuVGhpcyBDdWJpY1BvbHkgY2xhc3MgY291bGQgYmUgdXNlZCBmb3IgcmV1c2luZyBzb21lIHZhcmlhYmxlcyBhbmQgY2FsY3VsYXRpb25zLFxuYnV0IGZvciB0aHJlZS5qcyBjdXJ2ZSB1c2UsIGl0IGNvdWxkIGJlIHBvc3NpYmxlIGlubGluZWQgYW5kIGZsYXR0ZW4gaW50byBhIHNpbmdsZSBmdW5jdGlvbiBjYWxsXG53aGljaCBjYW4gYmUgcGxhY2VkIGluIEN1cnZlVXRpbHMuXG4qL1xuXG5mdW5jdGlvbiBDdWJpY1BvbHkoKSB7XG5cblx0dmFyIGMwID0gMCwgYzEgPSAwLCBjMiA9IDAsIGMzID0gMDtcblxuXHQvKlxuXHQgKiBDb21wdXRlIGNvZWZmaWNpZW50cyBmb3IgYSBjdWJpYyBwb2x5bm9taWFsXG5cdCAqICAgcChzKSA9IGMwICsgYzEqcyArIGMyKnNeMiArIGMzKnNeM1xuXHQgKiBzdWNoIHRoYXRcblx0ICogICBwKDApID0geDAsIHAoMSkgPSB4MVxuXHQgKiAgYW5kXG5cdCAqICAgcCcoMCkgPSB0MCwgcCcoMSkgPSB0MS5cblx0ICovXG5cdGZ1bmN0aW9uIGluaXQoIHgwLCB4MSwgdDAsIHQxICkge1xuXG5cdFx0YzAgPSB4MDtcblx0XHRjMSA9IHQwO1xuXHRcdGMyID0gLSAzICogeDAgKyAzICogeDEgLSAyICogdDAgLSB0MTtcblx0XHRjMyA9IDIgKiB4MCAtIDIgKiB4MSArIHQwICsgdDE7XG5cblx0fVxuXG5cdHJldHVybiB7XG5cblx0XHRpbml0Q2F0bXVsbFJvbTogZnVuY3Rpb24gKCB4MCwgeDEsIHgyLCB4MywgdGVuc2lvbiApIHtcblxuXHRcdFx0aW5pdCggeDEsIHgyLCB0ZW5zaW9uICogKCB4MiAtIHgwICksIHRlbnNpb24gKiAoIHgzIC0geDEgKSApO1xuXG5cdFx0fSxcblxuXHRcdGluaXROb251bmlmb3JtQ2F0bXVsbFJvbTogZnVuY3Rpb24gKCB4MCwgeDEsIHgyLCB4MywgZHQwLCBkdDEsIGR0MiApIHtcblxuXHRcdFx0Ly8gY29tcHV0ZSB0YW5nZW50cyB3aGVuIHBhcmFtZXRlcml6ZWQgaW4gW3QxLHQyXVxuXHRcdFx0dmFyIHQxID0gKCB4MSAtIHgwICkgLyBkdDAgLSAoIHgyIC0geDAgKSAvICggZHQwICsgZHQxICkgKyAoIHgyIC0geDEgKSAvIGR0MTtcblx0XHRcdHZhciB0MiA9ICggeDIgLSB4MSApIC8gZHQxIC0gKCB4MyAtIHgxICkgLyAoIGR0MSArIGR0MiApICsgKCB4MyAtIHgyICkgLyBkdDI7XG5cblx0XHRcdC8vIHJlc2NhbGUgdGFuZ2VudHMgZm9yIHBhcmFtZXRyaXphdGlvbiBpbiBbMCwxXVxuXHRcdFx0dDEgKj0gZHQxO1xuXHRcdFx0dDIgKj0gZHQxO1xuXG5cdFx0XHRpbml0KCB4MSwgeDIsIHQxLCB0MiApO1xuXG5cdFx0fSxcblxuXHRcdGNhbGM6IGZ1bmN0aW9uICggdCApIHtcblxuXHRcdFx0dmFyIHQyID0gdCAqIHQ7XG5cdFx0XHR2YXIgdDMgPSB0MiAqIHQ7XG5cdFx0XHRyZXR1cm4gYzAgKyBjMSAqIHQgKyBjMiAqIHQyICsgYzMgKiB0MztcblxuXHRcdH1cblxuXHR9O1xuXG59XG5cbi8vXG5cbnZhciB0bXAgPSBuZXcgVmVjdG9yMygpO1xudmFyIHB4ID0gbmV3IEN1YmljUG9seSgpLCBweSA9IG5ldyBDdWJpY1BvbHkoKSwgcHogPSBuZXcgQ3ViaWNQb2x5KCk7XG5cbmZ1bmN0aW9uIENhdG11bGxSb21DdXJ2ZTMoIHBvaW50cywgY2xvc2VkLCBjdXJ2ZVR5cGUsIHRlbnNpb24gKSB7XG5cblx0Q3VydmUuY2FsbCggdGhpcyApO1xuXG5cdHRoaXMudHlwZSA9ICdDYXRtdWxsUm9tQ3VydmUzJztcblxuXHR0aGlzLnBvaW50cyA9IHBvaW50cyB8fCBbXTtcblx0dGhpcy5jbG9zZWQgPSBjbG9zZWQgfHwgZmFsc2U7XG5cdHRoaXMuY3VydmVUeXBlID0gY3VydmVUeXBlIHx8ICdjZW50cmlwZXRhbCc7XG5cdHRoaXMudGVuc2lvbiA9IHRlbnNpb24gfHwgMC41O1xuXG59XG5cbkNhdG11bGxSb21DdXJ2ZTMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSggQ3VydmUucHJvdG90eXBlICk7XG5DYXRtdWxsUm9tQ3VydmUzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENhdG11bGxSb21DdXJ2ZTM7XG5cbkNhdG11bGxSb21DdXJ2ZTMucHJvdG90eXBlLmlzQ2F0bXVsbFJvbUN1cnZlMyA9IHRydWU7XG5cbkNhdG11bGxSb21DdXJ2ZTMucHJvdG90eXBlLmdldFBvaW50ID0gZnVuY3Rpb24gKCB0LCBvcHRpb25hbFRhcmdldCApIHtcblxuXHR2YXIgcG9pbnQgPSBvcHRpb25hbFRhcmdldCB8fCBuZXcgVmVjdG9yMygpO1xuXG5cdHZhciBwb2ludHMgPSB0aGlzLnBvaW50cztcblx0dmFyIGwgPSBwb2ludHMubGVuZ3RoO1xuXG5cdHZhciBwID0gKCBsIC0gKCB0aGlzLmNsb3NlZCA/IDAgOiAxICkgKSAqIHQ7XG5cdHZhciBpbnRQb2ludCA9IE1hdGguZmxvb3IoIHAgKTtcblx0dmFyIHdlaWdodCA9IHAgLSBpbnRQb2ludDtcblxuXHRpZiAoIHRoaXMuY2xvc2VkICkge1xuXG5cdFx0aW50UG9pbnQgKz0gaW50UG9pbnQgPiAwID8gMCA6ICggTWF0aC5mbG9vciggTWF0aC5hYnMoIGludFBvaW50ICkgLyBsICkgKyAxICkgKiBsO1xuXG5cdH0gZWxzZSBpZiAoIHdlaWdodCA9PT0gMCAmJiBpbnRQb2ludCA9PT0gbCAtIDEgKSB7XG5cblx0XHRpbnRQb2ludCA9IGwgLSAyO1xuXHRcdHdlaWdodCA9IDE7XG5cblx0fVxuXG5cdHZhciBwMCwgcDEsIHAyLCBwMzsgLy8gNCBwb2ludHNcblxuXHRpZiAoIHRoaXMuY2xvc2VkIHx8IGludFBvaW50ID4gMCApIHtcblxuXHRcdHAwID0gcG9pbnRzWyAoIGludFBvaW50IC0gMSApICUgbCBdO1xuXG5cdH0gZWxzZSB7XG5cblx0XHQvLyBleHRyYXBvbGF0ZSBmaXJzdCBwb2ludFxuXHRcdHRtcC5zdWJWZWN0b3JzKCBwb2ludHNbIDAgXSwgcG9pbnRzWyAxIF0gKS5hZGQoIHBvaW50c1sgMCBdICk7XG5cdFx0cDAgPSB0bXA7XG5cblx0fVxuXG5cdHAxID0gcG9pbnRzWyBpbnRQb2ludCAlIGwgXTtcblx0cDIgPSBwb2ludHNbICggaW50UG9pbnQgKyAxICkgJSBsIF07XG5cblx0aWYgKCB0aGlzLmNsb3NlZCB8fCBpbnRQb2ludCArIDIgPCBsICkge1xuXG5cdFx0cDMgPSBwb2ludHNbICggaW50UG9pbnQgKyAyICkgJSBsIF07XG5cblx0fSBlbHNlIHtcblxuXHRcdC8vIGV4dHJhcG9sYXRlIGxhc3QgcG9pbnRcblx0XHR0bXAuc3ViVmVjdG9ycyggcG9pbnRzWyBsIC0gMSBdLCBwb2ludHNbIGwgLSAyIF0gKS5hZGQoIHBvaW50c1sgbCAtIDEgXSApO1xuXHRcdHAzID0gdG1wO1xuXG5cdH1cblxuXHRpZiAoIHRoaXMuY3VydmVUeXBlID09PSAnY2VudHJpcGV0YWwnIHx8IHRoaXMuY3VydmVUeXBlID09PSAnY2hvcmRhbCcgKSB7XG5cblx0XHQvLyBpbml0IENlbnRyaXBldGFsIC8gQ2hvcmRhbCBDYXRtdWxsLVJvbVxuXHRcdHZhciBwb3cgPSB0aGlzLmN1cnZlVHlwZSA9PT0gJ2Nob3JkYWwnID8gMC41IDogMC4yNTtcblx0XHR2YXIgZHQwID0gTWF0aC5wb3coIHAwLmRpc3RhbmNlVG9TcXVhcmVkKCBwMSApLCBwb3cgKTtcblx0XHR2YXIgZHQxID0gTWF0aC5wb3coIHAxLmRpc3RhbmNlVG9TcXVhcmVkKCBwMiApLCBwb3cgKTtcblx0XHR2YXIgZHQyID0gTWF0aC5wb3coIHAyLmRpc3RhbmNlVG9TcXVhcmVkKCBwMyApLCBwb3cgKTtcblxuXHRcdC8vIHNhZmV0eSBjaGVjayBmb3IgcmVwZWF0ZWQgcG9pbnRzXG5cdFx0aWYgKCBkdDEgPCAxZS00ICkgZHQxID0gMS4wO1xuXHRcdGlmICggZHQwIDwgMWUtNCApIGR0MCA9IGR0MTtcblx0XHRpZiAoIGR0MiA8IDFlLTQgKSBkdDIgPSBkdDE7XG5cblx0XHRweC5pbml0Tm9udW5pZm9ybUNhdG11bGxSb20oIHAwLngsIHAxLngsIHAyLngsIHAzLngsIGR0MCwgZHQxLCBkdDIgKTtcblx0XHRweS5pbml0Tm9udW5pZm9ybUNhdG11bGxSb20oIHAwLnksIHAxLnksIHAyLnksIHAzLnksIGR0MCwgZHQxLCBkdDIgKTtcblx0XHRwei5pbml0Tm9udW5pZm9ybUNhdG11bGxSb20oIHAwLnosIHAxLnosIHAyLnosIHAzLnosIGR0MCwgZHQxLCBkdDIgKTtcblxuXHR9IGVsc2UgaWYgKCB0aGlzLmN1cnZlVHlwZSA9PT0gJ2NhdG11bGxyb20nICkge1xuXG5cdFx0cHguaW5pdENhdG11bGxSb20oIHAwLngsIHAxLngsIHAyLngsIHAzLngsIHRoaXMudGVuc2lvbiApO1xuXHRcdHB5LmluaXRDYXRtdWxsUm9tKCBwMC55LCBwMS55LCBwMi55LCBwMy55LCB0aGlzLnRlbnNpb24gKTtcblx0XHRwei5pbml0Q2F0bXVsbFJvbSggcDAueiwgcDEueiwgcDIueiwgcDMueiwgdGhpcy50ZW5zaW9uICk7XG5cblx0fVxuXG5cdHBvaW50LnNldChcblx0XHRweC5jYWxjKCB3ZWlnaHQgKSxcblx0XHRweS5jYWxjKCB3ZWlnaHQgKSxcblx0XHRwei5jYWxjKCB3ZWlnaHQgKVxuXHQpO1xuXG5cdHJldHVybiBwb2ludDtcblxufTtcblxuQ2F0bXVsbFJvbUN1cnZlMy5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICggc291cmNlICkge1xuXG5cdEN1cnZlLnByb3RvdHlwZS5jb3B5LmNhbGwoIHRoaXMsIHNvdXJjZSApO1xuXG5cdHRoaXMucG9pbnRzID0gW107XG5cblx0Zm9yICggdmFyIGkgPSAwLCBsID0gc291cmNlLnBvaW50cy5sZW5ndGg7IGkgPCBsOyBpICsrICkge1xuXG5cdFx0dmFyIHBvaW50ID0gc291cmNlLnBvaW50c1sgaSBdO1xuXG5cdFx0dGhpcy5wb2ludHMucHVzaCggcG9pbnQuY2xvbmUoKSApO1xuXG5cdH1cblxuXHR0aGlzLmNsb3NlZCA9IHNvdXJjZS5jbG9zZWQ7XG5cdHRoaXMuY3VydmVUeXBlID0gc291cmNlLmN1cnZlVHlwZTtcblx0dGhpcy50ZW5zaW9uID0gc291cmNlLnRlbnNpb247XG5cblx0cmV0dXJuIHRoaXM7XG5cbn07XG5cbkNhdG11bGxSb21DdXJ2ZTMucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcblxuXHR2YXIgZGF0YSA9IEN1cnZlLnByb3RvdHlwZS50b0pTT04uY2FsbCggdGhpcyApO1xuXG5cdGRhdGEucG9pbnRzID0gW107XG5cblx0Zm9yICggdmFyIGkgPSAwLCBsID0gdGhpcy5wb2ludHMubGVuZ3RoOyBpIDwgbDsgaSArKyApIHtcblxuXHRcdHZhciBwb2ludCA9IHRoaXMucG9pbnRzWyBpIF07XG5cdFx0ZGF0YS5wb2ludHMucHVzaCggcG9pbnQudG9BcnJheSgpICk7XG5cblx0fVxuXG5cdGRhdGEuY2xvc2VkID0gdGhpcy5jbG9zZWQ7XG5cdGRhdGEuY3VydmVUeXBlID0gdGhpcy5jdXJ2ZVR5cGU7XG5cdGRhdGEudGVuc2lvbiA9IHRoaXMudGVuc2lvbjtcblxuXHRyZXR1cm4gZGF0YTtcblxufTtcblxuQ2F0bXVsbFJvbUN1cnZlMy5wcm90b3R5cGUuZnJvbUpTT04gPSBmdW5jdGlvbiAoIGpzb24gKSB7XG5cblx0Q3VydmUucHJvdG90eXBlLmZyb21KU09OLmNhbGwoIHRoaXMsIGpzb24gKTtcblxuXHR0aGlzLnBvaW50cyA9IFtdO1xuXG5cdGZvciAoIHZhciBpID0gMCwgbCA9IGpzb24ucG9pbnRzLmxlbmd0aDsgaSA8IGw7IGkgKysgKSB7XG5cblx0XHR2YXIgcG9pbnQgPSBqc29uLnBvaW50c1sgaSBdO1xuXHRcdHRoaXMucG9pbnRzLnB1c2goIG5ldyBWZWN0b3IzKCkuZnJvbUFycmF5KCBwb2ludCApICk7XG5cblx0fVxuXG5cdHRoaXMuY2xvc2VkID0ganNvbi5jbG9zZWQ7XG5cdHRoaXMuY3VydmVUeXBlID0ganNvbi5jdXJ2ZVR5cGU7XG5cdHRoaXMudGVuc2lvbiA9IGpzb24udGVuc2lvbjtcblxuXHRyZXR1cm4gdGhpcztcblxufTtcblxuXG5leHBvcnQgeyBDYXRtdWxsUm9tQ3VydmUzIH07XG4iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL3RzdW5hbWkvZ2VvbS9Qb2ludFwiO1xuaW1wb3J0IEFjdGlvblR3ZWVuIGZyb20gXCIuL0FjdGlvblR3ZWVuXCI7XG5pbXBvcnQgQXJyYXlEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvQXJyYXlEYXRhXCI7XG5pbXBvcnQgVmVjdG9yMkRhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9WZWN0b3IyRGF0YVwiO1xuaW1wb3J0IHtpc1RvdWNofSBmcm9tIFwiLi4vdHN1bmFtaS93aW5kb3dcIjtcblxuaW1wb3J0IE51bWJlckRhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9OdW1iZXJEYXRhXCI7XG5pbXBvcnQgeyBldmVudHMgfSBmcm9tIFwiLi4vdHN1bmFtaS9ldmVudHNcIjtcbmltcG9ydCB7IHJvdW5kRGVjaW1hbFRvUGxhY2UgfSBmcm9tIFwiLi4vdHN1bmFtaS91dGlscy9udW1iZXJcIjtcbmltcG9ydCB7IFZlY3RvcjMgfSBmcm9tIFwidGhyZWUvc3JjL21hdGgvVmVjdG9yM1wiO1xuaW1wb3J0IHsgQ2F0bXVsbFJvbUN1cnZlM30gZnJvbSBcInRocmVlL3NyYy9leHRyYXMvY3VydmVzL0NhdG11bGxSb21DdXJ2ZTNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uU3dpcGUgZXh0ZW5kcyBBY3Rpb25Ud2VlbiB7XG5cblx0Y29uc3RydWN0b3IocG9pbnRzID0gW10sIGR1cmF0aW9uID0gMSwgZGVsYXkgPSAwKSB7XG5cdFx0c3VwZXIoMCwgMCwgMCwgMCwgZHVyYXRpb24sIGRlbGF5KTtcblx0XHR0aGlzLnR5cGUgPSBcIkFjdGlvblN3aXBlXCI7XG5cdFx0dGhpcy5uYW1lLnZhbHVlID0gXCJNb3VzZSBnZXN0dXJlXCI7XG5cdFx0dGhpcy5kZXNjcmlwdGlvbi52YWx1ZSA9IFwiQWRkIGEgbW91c2UgZ2VzdHVyZVwiO1xuXHRcdHRoaXMucG9pbnRzID0gbmV3IEFycmF5RGF0YSgpO1xuXHRcdHRoaXMucG9pbnRzLmRhdGFDbGFzcyA9IFZlY3RvcjJEYXRhO1xuXHRcdHdoaWxlKHBvaW50cy5sZW5ndGggPCAyKSB7XG5cdFx0XHRwb2ludHMucHVzaChuZXcgVmVjdG9yMkRhdGEoKSk7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzLnZhbHVlID0gcG9pbnRzO1xuXHRcdHRoaXMuaXNDYXB0dXJlYWJsZS52YWx1ZSA9IHRydWU7XG5cdFx0dGhpcy5pc1Rlc3RhYmxlLnZhbHVlID0gdHJ1ZTtcblx0XHR0aGlzLnNtb290aG5lc3MgPSBuZXcgTnVtYmVyRGF0YSgyMCk7XG5cdFx0dGhpcy5jaGFuZ2VDdXJzb3JPbkNhcHR1cmUudmFsdWUgPSB0cnVlO1xuXHRcdHRoaXMuaWNvbi52YWx1ZSA9IFwiZmFzIGZhLWFycm93cy1hbHRcIjtcblx0XG5cdFx0dGhpcy5jYXB0dXJlRG93bkhhbmRsZXIgPSB0aGlzLmNhcHR1cmVEb3duSGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2FwdHVyZU1vdmVIYW5kbGVyID0gdGhpcy5jYXB0dXJlTW92ZUhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmNhcHR1cmVVcEhhbmRsZXIgPSB0aGlzLmNhcHR1cmVVcEhhbmRsZXIuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNsb25lKCkge1xuXHRcdGxldCBhY3Rpb24gPSBuZXcgQWN0aW9uU3dpcGUoKTtcblx0XHRhY3Rpb24uY29weSh0aGlzKTtcblx0XHRyZXR1cm4gYWN0aW9uO1xuXHR9XG5cblx0Y29weShhY3Rpb24pIHtcblx0XHRzdXBlci5jb3B5KGFjdGlvbik7XG5cdFx0bGV0IHBvaW50cyA9IFtdO1xuXHRcdGFjdGlvbi5wb2ludHMubWFwKChwb2ludCkgPT4ge1xuXHRcdFx0cG9pbnRzLnB1c2gocG9pbnQuY2xvbmUoKSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5wb2ludHMudmFsdWUgPSBwb2ludHM7XG5cdH1cblxuXHRzZXJpYWxpemUoKSB7XG5cdFx0bGV0IGRhdGEgPSBzdXBlci5zZXJpYWxpemUoKTtcblx0XHRkYXRhLnBvaW50cyA9IHRoaXMucG9pbnRzLnNlcmlhbGl6ZSgpO1xuXHRcdHJldHVybiBkYXRhO1xuXHR9XG5cblx0ZGVzZXJpYWxpemUoZGF0YSkge1xuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xuXHRcdHN1cGVyLmRlc2VyaWFsaXplKGRhdGEpO1xuXHRcdHRoaXMucG9pbnRzLmRlc2VyaWFsaXplKGRhdGEucG9pbnRzKTtcblx0fVxuXG5cdHRyaWdnZXIoKSB7XG5cdFx0dGhpcy5zdGFydFgudmFsdWUgPSAwO1xuXHRcdHRoaXMuc3RhcnRZLnZhbHVlID0gMDtcblx0XHR0aGlzLmVuZFgudmFsdWUgPSAxO1xuXHRcdHRoaXMuZW5kWS52YWx1ZSA9IDA7XG5cblx0XHRsZXQgcG9pbnRzID0gW107XG5cdFx0dGhpcy5wb2ludHMubWFwKChwb2ludERhdGEpID0+IHtcblx0XHRcdHBvaW50cy5wdXNoKG5ldyBWZWN0b3IzKHBvaW50RGF0YS54LnZhbHVlLCBwb2ludERhdGEueS52YWx1ZSwgMCkpO1xuXHRcdH0pO1xuXHRcdHRoaXMuY3VydmUgPSBuZXcgQ2F0bXVsbFJvbUN1cnZlMyhwb2ludHMsIGZhbHNlLCAnY2hvcmRhbCcsIDAuNzUpO1xuXHRcdFxuXHRcdHRoaXMuZGlzcGF0Y2hNb3VzZUV2ZW50KFwibW91c2Vkb3duXCIsIDApO1xuXHRcdHJldHVybiBzdXBlci50cmlnZ2VyKCk7XG5cdH1cblxuXHRkaXNwYXRjaE1vdXNlRXZlbnQoZXZlbnRUeXBlLCBvZmZzZXQpIHtcblx0XHRvZmZzZXQgPSBNYXRoLm1pbihvZmZzZXQsIDEpO1xuXHRcdG9mZnNldCA9IE1hdGgubWF4KG9mZnNldCwgMCk7XG5cdFx0bGV0IHBvaW50ID0gdGhpcy5jdXJ2ZS5nZXRQb2ludChvZmZzZXQpO1xuXHRcdHBvaW50LnggPSBwb2ludC54IC0gd2luZG93LnNjcm9sbFg7XG5cdFx0cG9pbnQueSA9IHBvaW50LnkgLSB3aW5kb3cuc2Nyb2xsWTtcblx0XHRsZXQgZWxlbWVudCA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQocG9pbnQueCwgcG9pbnQueSk7XG5cdFx0bGV0IGV2ZW50ID0gbmV3IE1vdXNlRXZlbnQoZXZlbnRUeXBlLCB7XG5cdFx0XHRidWJibGVzOiB0cnVlLFxuXHRcdFx0Y2FuY2VsYWJsZTogdHJ1ZSxcblx0XHRcdHZpZXc6IHdpbmRvdyxcblx0XHRcdGNsaWVudFg6IHBvaW50LngsXG5cdFx0XHRjbGllbnRZOiBwb2ludC55LFxuXHRcdFx0cGFnZVg6IHBvaW50LngsXG5cdFx0XHRwYWdlWTogcG9pbnQueSxcblx0XHRcdHg6IHBvaW50LngsXG5cdFx0XHR5OiBwb2ludC55XG5cdFx0fSk7XG5cdFx0ZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcblx0fVxuXG5cdC8vIGFkZFBvaW50KCkge1xuXHQvLyBcdHRoaXMucG9pbnRzLnB1c2gobmV3IFZlY3RvcjJEYXRhKCkpO1xuXHQvLyB9XG5cdFxuXHQvLyByZW1vdmVQb2ludChwb2ludCkge1xuXHQvLyBcdHRoaXMucG9pbnRzLnJlbW92ZShwb2ludCk7XG5cdC8vIH1cblxuXHR0d2VlblVwZGF0ZUhhbmRsZXIoKSB7XG5cdFx0dGhpcy5kaXNwYXRjaE1vdXNlRXZlbnQoXCJtb3VzZW1vdmVcIiwgdGhpcy5wb3MueCk7XG5cdH1cblxuXHR0d2VlbkNvbXBsZXRlSGFuZGxlcihlKSB7XG5cdFx0dGhpcy5kaXNwYXRjaE1vdXNlRXZlbnQoXCJtb3VzZXVwXCIsIDEpO1xuXHR9XG5cblx0Y2FwdHVyZSgpIHtcblx0XHRzdXBlci5jYXB0dXJlKCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZWRvd24sIHRoaXMuY2FwdHVyZURvd25IYW5kbGVyKTtcblx0fVxuXG5cdGNhcHR1cmVEb3duSGFuZGxlcihldmVudCkge1xuXHRcdGxldCB0b3VjaCA9IGV2ZW50O1xuXHRcdGlmIChpc1RvdWNoKSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG5cdFx0fVxuXHRcdGxldCBwb2ludCA9IG5ldyBQb2ludCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHRcdHRoaXMuY2FwdHVyZWRQb2ludHMgPSBbbmV3IFZlY3RvcjJEYXRhKHBvaW50LngsIHBvaW50LnkpXTtcblxuXHRcdHRoaXMubGFzdFBvaW50ID0gcG9pbnQ7XG5cdFx0dGhpcy5zdGFydERhdGUgPSBuZXcgRGF0ZSgpO1xuXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZWRvd24sIHRoaXMuY2FwdHVyZURvd25IYW5kbGVyKTtcblx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNlbW92ZSwgdGhpcy5jYXB0dXJlTW92ZUhhbmRsZXIpO1xuXHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2V1cCwgdGhpcy5jYXB0dXJlVXBIYW5kbGVyKTtcblx0fVxuXG5cdGNhcHR1cmVNb3ZlSGFuZGxlcihldmVudCkge1xuXHRcdGxldCB0b3VjaCA9IGV2ZW50O1xuXHRcdGlmIChpc1RvdWNoKSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG5cdFx0fVxuXHRcdGxldCBwb2ludCA9IG5ldyBQb2ludCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHRcdGxldCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHRoaXMubGFzdFBvaW50LCBwb2ludCk7XG5cdFx0aWYgKGRpc3RhbmNlID4gdGhpcy5zbW9vdGhuZXNzLnZhbHVlKSB7XG5cdFx0XHR0aGlzLmxhc3RQb2ludCA9IHBvaW50O1xuXHRcdFx0dGhpcy5jYXB0dXJlZFBvaW50cy5wdXNoKG5ldyBWZWN0b3IyRGF0YShwb2ludC54LCBwb2ludC55KSk7XG5cdFx0fVxuXHR9XG5cblx0Y2FwdHVyZVVwSGFuZGxlcihldmVudCkge1xuXHRcdGxldCB0b3VjaCA9IGV2ZW50O1xuXHRcdGlmIChpc1RvdWNoKSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG5cdFx0fVxuXHRcdGxldCBwb2ludCA9IG5ldyBQb2ludCh0b3VjaC5wYWdlWCwgdG91Y2gucGFnZVkpO1xuXHRcdGxldCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHRoaXMubGFzdFBvaW50LCBwb2ludCk7XG5cdFx0aWYgKGRpc3RhbmNlID4gMCkge1xuXHRcdFx0dGhpcy5jYXB0dXJlZFBvaW50cy5wdXNoKG5ldyBWZWN0b3IyRGF0YShwb2ludC54LCBwb2ludC55KSk7XG5cdFx0fVxuXHRcdHRoaXMucG9pbnRzLnZhbHVlID0gdGhpcy5jYXB0dXJlZFBvaW50cztcblx0XHR0aGlzLmNhcHR1cmVkUG9pbnRzID0gW107XG5cblx0XHRsZXQgZHVyYXRpb24gPSByb3VuZERlY2ltYWxUb1BsYWNlKChuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydERhdGUpIC8gMTAwMCwgMSk7XG5cdFx0dGhpcy5kdXJhdGlvbi52YWx1ZSA9IGR1cmF0aW9uO1xuXHRcdFxuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2Vtb3ZlLCB0aGlzLmNhcHR1cmVNb3ZlSGFuZGxlcik7XG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZXVwLCB0aGlzLmNhcHR1cmVVcEhhbmRsZXIpO1xuXHRcdHRoaXMuY2FwdHVyZUNvbXBsZXRlKCk7XG5cdH1cblxuXHRjYXB0dXJlQXRJbml0KCkge1xuXHRcdHN1cGVyLmNhcHR1cmVBdEluaXQoKTtcblx0XHR0aGlzLmNhcHR1cmUoKTtcblx0fVxuXHRcbn0iLCJpbXBvcnQgQWN0aW9uIGZyb20gXCIuL0FjdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25XYWl0IGV4dGVuZHMgQWN0aW9uIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcihcIkFjdGlvbldhaXRcIiwgXCJQYXVzZVwiLCBcIkFkZCBhIHBhdXNlXCIpO1xuXHRcdHRoaXMuZGVsYXkudmFsdWUgPSAxO1xuXHRcdHRoaXMuaWNvbi52YWx1ZSA9IFwiZmFzIGZhLXBhdXNlLWNpcmNsZVwiO1xuXHR9XG5cblx0Y2xvbmUoKSB7XG5cdFx0bGV0IGFjdGlvbiA9IG5ldyBBY3Rpb25XYWl0KCk7XG5cdFx0YWN0aW9uLmNvcHkodGhpcyk7XG5cdFx0cmV0dXJuIGFjdGlvbjtcblx0fVxuXHRcbn0iLCJpbXBvcnQgQXJyYXlEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvQXJyYXlEYXRhXCI7XG5pbXBvcnQgQWN0aW9uU2Nyb2xsIGZyb20gXCIuL0FjdGlvblNjcm9sbFwiO1xuaW1wb3J0IEFjdGlvbk1vdXNlRXZlbnQgZnJvbSBcIi4vQWN0aW9uTW91c2VFdmVudFwiO1xuaW1wb3J0IEFjdGlvbkV2YWwgZnJvbSBcIi4vQWN0aW9uRXZhbFwiO1xuaW1wb3J0IEFjdGlvblN3aXBlIGZyb20gXCIuL0FjdGlvblN3aXBlXCI7XG5pbXBvcnQgQWN0aW9uV2FpdCBmcm9tIFwiLi9BY3Rpb25XYWl0XCI7XG5pbXBvcnQgeyBzZW5kVHJhY2tFdmVudE1lc3NhZ2UgfSBmcm9tIFwiLi9HQUJyaWRnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb25zIGV4dGVuZHMgQXJyYXlEYXRhIHtcblxuXHRjb25zdHJ1Y3RvcigpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy5wdXNoLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cblx0XHQvLyB0aGlzLmFkZFNlbGVjdGVkVHlwZSA9IHRoaXMuYWRkU2VsZWN0ZWRUeXBlLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnR5cGVzID0gbmV3IEFycmF5RGF0YSgpO1xuXHRcdHRoaXMudHlwZXMudmFsdWUgPSBbXG5cdFx0XHRuZXcgQWN0aW9uU2Nyb2xsKCksXG5cdFx0XHRuZXcgQWN0aW9uTW91c2VFdmVudCgpLFxuXHRcdFx0bmV3IEFjdGlvblN3aXBlKCksXG5cdFx0XHRuZXcgQWN0aW9uRXZhbCgpLFxuXHRcdFx0bmV3IEFjdGlvbldhaXQoKVxuXHRcdF07XG5cdFx0Ly8gdGhpcy50eXBlcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSB0aGlzLnR5cGVzLnZhbHVlWzBdO1xuXHR9XG5cblx0Y2xvbmVBY3Rpb24oYWN0aW9uKSB7XG5cdFx0bGV0IGNsb25lID0gYWN0aW9uLmNsb25lKCk7XG5cdFx0dGhpcy5hZGRBY3Rpb24oY2xvbmUpO1xuXHR9XG5cblx0Ly8gYWRkU2VsZWN0ZWRUeXBlKCkge1xuXHQvLyBcdGlmKCF0aGlzLnR5cGVzLnNlbGVjdGVkSXRlbS52YWx1ZSkge1xuXHQvLyBcdFx0cmV0dXJuO1xuXHQvLyBcdH1cblx0Ly8gXHRsZXQgYWN0aW9uID0gdGhpcy50eXBlcy5zZWxlY3RlZEl0ZW0udmFsdWUuY2xvbmUoKTtcblx0Ly8gXHRzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJBY3Rpb25cIiwgXCJhZGRcIiwgYWN0aW9uLnR5cGUpO1xuXHQvLyBcdHRoaXMuYWRkQWN0aW9uKGFjdGlvbik7XG5cdC8vIFx0Ly8gdGhpcy50eXBlcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSB0aGlzLnR5cGVzLnZhbHVlWzBdO1xuXHQvLyB9XG5cblx0YWRkQWN0aW9uKGFjdGlvbikge1xuXHRcdGlmICghYWN0aW9uKSByZXR1cm47XG5cdFx0c2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwiQWN0aW9uXCIsIFwiYWRkXCIsIGFjdGlvbi50eXBlKTtcblx0XHRhY3Rpb24uY2FwdHVyZUF0SW5pdCgpO1xuXHRcdGxldCBpbmRleCA9IHRoaXMuc2VsZWN0ZWRJbmRleC52YWx1ZSArIDE7XG5cdFx0aWYgKGlzTmFOKGluZGV4KSkgaW5kZXggPSB0aGlzLnZhbHVlLmxlbmd0aDtcblx0XHR0aGlzLnNwbGljZShpbmRleCwgMCwgYWN0aW9uKTtcblx0XHR0aGlzLnNlbGVjdGVkSW5kZXgudmFsdWUgPSBpbmRleDtcblx0fVxuXG5cdHJlbW92ZUFjdGlvbihhY3Rpb24pIHtcblx0XHRzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJBY3Rpb25cIiwgXCJyZW1vdmVcIiwgYWN0aW9uLnR5cGUpO1xuXHRcdGxldCBpbmRleCA9IHRoaXMuaW5kZXhPZihhY3Rpb24pO1xuXHRcdHRoaXMucmVtb3ZlKGFjdGlvbik7XG5cdFx0bGV0IG5ld0luZGV4ID0gTWF0aC5tYXgoaW5kZXggLSAxLCAwKTtcblx0XHR0aGlzLnNlbGVjdGVkSW5kZXgudmFsdWUgPSBNYXRoLm1pbihuZXdJbmRleCwgdGhpcy52YWx1ZS5sZW5ndGggLSAxKTtcblx0fVxuXG5cdHNlcmlhbGl6ZSgpIHtcblx0XHRsZXQgYWN0aW9ucyA9IFtdO1xuXHRcdHRoaXMubWFwKChhY3Rpb24pID0+IHtcblx0XHRcdGFjdGlvbnMucHVzaChhY3Rpb24uc2VyaWFsaXplKCkpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBhY3Rpb25zO1xuXHR9XG5cblx0ZGVzZXJpYWxpemUoanNvbikge1xuXHRcdGlmICghanNvbikgcmV0dXJuO1xuXHRcdGxldCBhY3Rpb25zID0gW107XG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBkYXRhID0ganNvbltpXTtcblx0XHRcdGxldCBhY3Rpb24gPSB0aGlzLnR5cGVzLmZpbmQoKHR5cGUpID0+IHtcblx0XHRcdFx0cmV0dXJuIHR5cGUudHlwZSA9PSBkYXRhLnR5cGU7XG5cdFx0XHR9KS5jbG9uZSgpO1xuXHRcdFx0YWN0aW9uLmRlc2VyaWFsaXplKGRhdGEpO1xuXHRcdFx0YWN0aW9ucy5wdXNoKGFjdGlvbik7XG5cdFx0fVxuXHRcdHRoaXMudmFsdWUgPSBhY3Rpb25zO1xuXHR9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJvdHRsZSB7XG5cblx0Y29uc3RydWN0b3IoY2FsbGJhY2ssIHRpbWVvdXQgPSA1MDApIHtcblx0XHR0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG5cdFx0dGhpcy50aW1lb3V0ID0gdGltZW91dDtcblxuXHRcdHRoaXMudGhyb3R0bGUgPSB0aGlzLnRocm90dGxlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50aW1lb3V0Q29tcGxldGUgPSB0aGlzLnRpbWVvdXRDb21wbGV0ZS5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5pc1dhaXRpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmRvQ2FsbGJhY2sgPSBmYWxzZTtcblx0fVxuXG5cdHRocm90dGxlKGRhdGEpIHtcblx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXHRcdHRoaXMuZG9DYWxsYmFjayA9IHRydWU7XG5cdFx0aWYgKCF0aGlzLmlzV2FpdGluZykge1xuXHRcdFx0dGhpcy50aW1lb3V0Q29tcGxldGUoKTtcblx0XHR9XG5cdH1cblxuXHR0aW1lb3V0Q29tcGxldGUoKSB7XG5cdFx0aWYodGhpcy5kb0NhbGxiYWNrKSB7XG5cdFx0XHR0aGlzLmlzV2FpdGluZyA9IHRydWU7XG5cdFx0XHR0aGlzLmNhbGxiYWNrKHRoaXMuZGF0YSk7XG5cdFx0XHR0aGlzLmRvQ2FsbGJhY2sgPSBmYWxzZTtcblx0XHRcdHNldFRpbWVvdXQodGhpcy50aW1lb3V0Q29tcGxldGUsIHRoaXMudGltZW91dCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuaXNXYWl0aW5nID0gZmFsc2U7XG5cdFx0fVxuXHR9XG5cbn0iLCJpbXBvcnQgVmVjdG9yMkRhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9WZWN0b3IyRGF0YVwiO1xuaW1wb3J0IFN0cmluZ0RhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9TdHJpbmdEYXRhXCI7XG5pbXBvcnQgQXJyYXlEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvQXJyYXlEYXRhXCI7XG5pbXBvcnQgQm9vbGVhbkRhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9Cb29sZWFuRGF0YVwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9EYXRhXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgc2VuZFRyYWNrRXZlbnRNZXNzYWdlIH0gZnJvbSBcIi4vR0FCcmlkZ2VcIjtcbmltcG9ydCBUaHJvdHRsZSBmcm9tIFwiLi4vdHN1bmFtaS91dGlscy9UaHJvdHRsZVwiO1xuaW1wb3J0IE51bWJlckRhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9OdW1iZXJEYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhcmtNb2RlQ2hhbmdlSGFuZGxlciA9IHRoaXMuZGFya01vZGVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyRGF0YSg1MCwgNTApO1xuXG4gICAgICAgIHRoaXMud2luZG93U2l6ZUNoYW5nZUhhbmRsZXIgPSB0aGlzLndpbmRvd1NpemVDaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMud2luZG93UmVzaXplSGFuZGxlciA9IHRoaXMud2luZG93UmVzaXplSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMud2luZG93U2l6ZSA9IG5ldyBWZWN0b3IyRGF0YSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbiAgICAgICAgdGhpcy53aW5kb3dTaXplLmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMud2luZG93U2l6ZUNoYW5nZUhhbmRsZXIpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMud2luZG93UmVzaXplSGFuZGxlcik7XG5cbiAgICAgICAgdGhpcy52aWRlb0JpdHNQZXJTZWNvbmRUaHJvdHRsZSA9IG5ldyBUaHJvdHRsZSgoKSA9PiB7XG4gICAgICAgICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJzZXR0aW5nc1wiLCBcInZpZGVvQml0c1BlclNlY29uZFwiLCB0aGlzLnZpZGVvQml0c1BlclNlY29uZC52YWx1ZSk7XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgICB0aGlzLnZpZGVvQml0c1BlclNlY29uZE1pbiA9IDE7XG4gICAgICAgIHRoaXMudmlkZW9CaXRzUGVyU2Vjb25kTWF4ID0gODtcbiAgICAgICAgdGhpcy52aWRlb0JpdHNQZXJTZWNvbmQgPSBuZXcgTnVtYmVyRGF0YSgpO1xuICAgICAgICB0aGlzLnZpZGVvQml0c1BlclNlY29uZC52YWx1ZSA9IDg7XG4gICAgICAgIHRoaXMudmlkZW9CaXRzUGVyU2Vjb25kLmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIHRoaXMudmlkZW9CaXRzUGVyU2Vjb25kVGhyb3R0bGUudGhyb3R0bGUpO1xuICAgICAgICB0aGlzLnZpZGVvQ29kZWNzID0gbmV3IEFycmF5RGF0YShcInZwOFwiLCBcInZwOVwiLCBcImgyNjRcIik7XG4gICAgICAgIHRoaXMudmlkZW9Db2RlY3Muc2VsZWN0ZWRJdGVtLnZhbHVlID0gdGhpcy52aWRlb0NvZGVjcy52YWx1ZVswXTtcbiAgICAgICAgdGhpcy52aWRlb0NvZGVjcy5zZWxlY3RlZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgKCkgPT4ge1xuICAgICAgICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKFwic2V0dGluZ3NcIiwgXCJ2aWRlb0NvZGVjXCIsIHRoaXMudmlkZW9Db2RlY3Muc2VsZWN0ZWRJdGVtLnZhbHVlKTtcbiAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmF1ZGlvQml0c1BlclNlY29uZFRocm90dGxlID0gbmV3IFRocm90dGxlKCgpID0+IHtcbiAgICAgICAgICAgIHNlbmRUcmFja0V2ZW50TWVzc2FnZShcInNldHRpbmdzXCIsIFwiYXVkaW9CaXRzUGVyU2Vjb25kXCIsIHRoaXMuYXVkaW9CaXRzUGVyU2Vjb25kLnZhbHVlKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgIHRoaXMuYXVkaW9CaXRzUGVyU2Vjb25kID0gbmV3IE51bWJlckRhdGEoMTI4KTtcbiAgICAgICAgdGhpcy5hdWRpb0JpdHNQZXJTZWNvbmQuYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy5hdWRpb0JpdHNQZXJTZWNvbmRUaHJvdHRsZS50aHJvdHRsZSk7XG4gICAgICAgIHRoaXMuYXVkaW9Db2RlY3MgPSBuZXcgQXJyYXlEYXRhKFwib3B1c1wiKTtcbiAgICAgICAgdGhpcy5hdWRpb0NvZGVjcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSB0aGlzLmF1ZGlvQ29kZWNzLnZhbHVlWzBdO1xuICAgICAgICB0aGlzLmF1ZGlvQ29kZWNzLnNlbGVjdGVkSXRlbS5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCAoKSA9PiB7XG4gICAgICAgICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJzZXR0aW5nc1wiLCBcImF1ZGlvQ29kZWNcIiwgdGhpcy5hdWRpb0NvZGVjcy5zZWxlY3RlZEl0ZW0udmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRhcmtNb2RlTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG5cbiAgICAgICAgdGhpcy5pc0NvbG9yVGhlbWVMaWdodCA9IG5ldyBCb29sZWFuRGF0YSgpO1xuICAgICAgICB0aGlzLmlzQ29sb3JUaGVtZUxpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoRGF0YS5DSEFOR0UsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1zZyA9IHsgdHh0OiBcInNjcm9sbENhcHR1cmVDb2xvclRoZW1lXCIsIGlzQ29sb3JUaGVtZUxpZ2h0OiBldmVudC5kYXRhIH07XG4gICAgICAgICAgICBhcHAubW9kZWwuc2VuZE1lc3NhZ2UobXNnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5jb2xvclRoZW1lcyA9IG5ldyBBcnJheURhdGEoXCJEYXJrXCIsIFwiTGlnaHRcIiwgXCJBdXRvXCIpO1xuICAgICAgICB0aGlzLmNvbG9yVGhlbWVzLnNlbGVjdGVkSXRlbS52YWx1ZSA9IFwiRGFya1wiO1xuICAgICAgICB0aGlzLnN3aXRjaENvbG9yVGhlbWUoKTtcbiAgICAgICAgdGhpcy5jb2xvclRoZW1lcy5zZWxlY3RlZEl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgKCk9PiB7XG4gICAgICAgICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJzZXR0aW5nc1wiLCBcImNvbG9yVGhlbWVcIiwgdGhpcy5jb2xvclRoZW1lcy5zZWxlY3RlZEl0ZW0udmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zd2l0Y2hDb2xvclRoZW1lKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHdpbmRvd1Jlc2l6ZUhhbmRsZXIoKSB7XG4gICAgICAgIHRoaXMud2luZG93U2l6ZS5yZW1vdmVFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLndpbmRvd1NpemVDaGFuZ2VIYW5kbGVyKTtcbiAgICAgICAgdGhpcy53aW5kb3dTaXplLngudmFsdWUgPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgdGhpcy53aW5kb3dTaXplLnkudmFsdWUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgIHRoaXMud2luZG93U2l6ZS5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCB0aGlzLndpbmRvd1NpemVDaGFuZ2VIYW5kbGVyKTtcbiAgICB9XG5cbiAgICB3aW5kb3dTaXplQ2hhbmdlSGFuZGxlcigpIHtcbiAgICAgICAgYXBwLm1vZGVsLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVSZXNpemVXaW5kb3dcIiwgd2lkdGg6IHRoaXMud2luZG93U2l6ZS54LnZhbHVlLCBoZWlnaHQ6IHRoaXMud2luZG93U2l6ZS55LnZhbHVlIH0pO1xuICAgfVxuXG4gICAgc3dpdGNoQ29sb3JUaGVtZSgpIHtcbiAgICAgICAgbGV0IGNvbG9yVGhlbWUgPSB0aGlzLmNvbG9yVGhlbWVzLnNlbGVjdGVkSXRlbS52YWx1ZTtcbiAgICAgICAgc3dpdGNoIChjb2xvclRoZW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiRGFya1wiOlxuICAgICAgICAgICAgY2FzZSBcIkxpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5kYXJrTW9kZU1hdGNoTWVkaWEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5kYXJrTW9kZUNoYW5nZUhhbmRsZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNDb2xvclRoZW1lTGlnaHQudmFsdWUgPSAoY29sb3JUaGVtZSA9PSBcIkxpZ2h0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmRhcmtNb2RlTWF0Y2hNZWRpYS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmRhcmtNb2RlQ2hhbmdlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXJrTW9kZUNoYW5nZUhhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRhcmtNb2RlQ2hhbmdlSGFuZGxlcigpIHtcbiAgICAgICAgbGV0IGlzRGFya01vZGUgPSB0aGlzLmRhcmtNb2RlTWF0Y2hNZWRpYS5tYXRjaGVzO1xuICAgICAgICB0aGlzLmlzQ29sb3JUaGVtZUxpZ2h0LnZhbHVlID0gIWlzRGFya01vZGU7XG4gICAgfVxuXG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24uc2VyaWFsaXplKCksXG4gICAgICAgICAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IHRoaXMudmlkZW9CaXRzUGVyU2Vjb25kLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgdmlkZW9Db2RlYzogdGhpcy52aWRlb0NvZGVjcy5zZWxlY3RlZEl0ZW0uc2VyaWFsaXplKCksXG4gICAgICAgICAgICBhdWRpb0JpdHNQZXJTZWNvbmQ6IHRoaXMuYXVkaW9CaXRzUGVyU2Vjb25kLnNlcmlhbGl6ZSgpLFxuICAgICAgICAgICAgYXVkaW9Db2RlYzogdGhpcy5hdWRpb0NvZGVjcy5zZWxlY3RlZEl0ZW0uc2VyaWFsaXplKCksXG4gICAgICAgICAgICBjb2xvclRoZW1lczogdGhpcy5jb2xvclRoZW1lcy5zZWxlY3RlZEl0ZW0udmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXNlcmlhbGl6ZShkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YSkgcmV0dXJuO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmRlc2VyaWFsaXplKGRhdGEucG9zaXRpb24pO1xuICAgICAgICB0aGlzLnZpZGVvQml0c1BlclNlY29uZC5kZXNlcmlhbGl6ZShkYXRhLnZpZGVvQml0c1BlclNlY29uZCk7XG4gICAgICAgIHRoaXMudmlkZW9Db2RlY3Muc2VsZWN0ZWRJdGVtLmRlc2VyaWFsaXplKGRhdGEudmlkZW9Db2RlYyk7XG4gICAgICAgIHRoaXMuYXVkaW9CaXRzUGVyU2Vjb25kLmRlc2VyaWFsaXplKGRhdGEuYXVkaW9CaXRzUGVyU2Vjb25kKTtcbiAgICAgICAgdGhpcy5hdWRpb0NvZGVjcy5zZWxlY3RlZEl0ZW0uZGVzZXJpYWxpemUoZGF0YS5hdWRpb0NvZGVjKTtcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoXCJjb2xvclRoZW1lc1wiKSkge1xuICAgICAgICAgICAgdGhpcy5jb2xvclRoZW1lcy5zZWxlY3RlZEl0ZW0udmFsdWUgPSBkYXRhLmNvbG9yVGhlbWVzO1xuICAgICAgICB9XG4gICAgfVxuXG59IiwiaW1wb3J0IHsgc2VuZFRyYWNrRXZlbnRNZXNzYWdlIH0gZnJvbSBcIi4vR0FCcmlkZ2VcIjtcbmltcG9ydCBCb29sZWFuRGF0YSBmcm9tIFwiLi4vdHN1bmFtaS9kYXRhL0Jvb2xlYW5EYXRhXCI7XG5pbXBvcnQgQWN0aW9ucyBmcm9tIFwiLi9BY3Rpb25zXCI7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSBcIi4vU2V0dGluZ3NcIjtcbmltcG9ydCBCYXNlRXZlbnQgZnJvbSBcIi4uL3RzdW5hbWkvZXZlbnRzXCI7XG5pbXBvcnQgRGF0YU1vZGVsIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvRGF0YU1vZGVsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcE1vZGVsIGV4dGVuZHMgRGF0YU1vZGVsIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBzZWxlY3RlZEFjdGlvbjpcIlBhdXNlXCJcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuICAgICAgICAvLyB0aGlzLnBsYXlTZWxlY3RlZCA9IHRoaXMucGxheVNlbGVjdGVkLmJpbmQodGhpcyk7XG5cdFx0Ly8gdGhpcy5jYXB0dXJlU2VsZWN0ZWQgPSB0aGlzLmNhcHR1cmVTZWxlY3RlZC5iaW5kKHRoaXMpO1xuXHRcdC8vIHRoaXMuZGVsZXRlU2VsZWN0ZWQgPSB0aGlzLmRlbGV0ZVNlbGVjdGVkLmJpbmQodGhpcyk7XG5cdFx0Ly8gdGhpcy5jbGVhckFjdGlvbnMgPSB0aGlzLmNsZWFyQWN0aW9ucy5iaW5kKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuc2hvd0NhcHR1cmVJY29uID0gbmV3IEJvb2xlYW5EYXRhKCk7XG4gICAgICAgIHRoaXMuaXNTYXZpbmcgPSBuZXcgQm9vbGVhbkRhdGEoKTtcbiAgICAgICAgLy8gdGhpcy5pc1BsYXlpbmdTZWxlY3RlZCA9IG5ldyBCb29sZWFuRGF0YSgpO1xuICAgICAgICAvLyB0aGlzLmlzQ2FwdHVyaW5nU2VsZWN0ZWQgPSBuZXcgQm9vbGVhbkRhdGEoKTtcblxuICAgICAgICB0aGlzLnNldHRpbmdzID0gbmV3IFNldHRpbmdzKCk7XG4gICAgICAgIHRoaXMuYWN0aW9ucyA9IG5ldyBBY3Rpb25zKCk7XG5cbiAgICAgICAgLy8gdGhpcy5hZGRFdmVudExpc3RlbmVyKFwic2VsZWN0ZWRBY3Rpb25cIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkQWN0aW9uIGNoYW5nZVwiLCB0aGlzLnNlbGVjdGVkQWN0aW9uKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gdGhpcy5hY3Rpb25zLnZhbHVlID0gW1xuICAgICAgICAvLyBcdG5ldyBBY3Rpb25Td2lwZShbbmV3IFZlY3RvcjJEYXRhKDE1MCwgMjUwKSwgbmV3IFZlY3RvcjJEYXRhKDQwMCwgNDUwKV0pLFxuICAgICAgICAvLyBcdG5ldyBBY3Rpb25TY3JvbGwoXCJ3aW5kb3dcIiwgXCJweFwiLCAwLCA1MDApLFxuICAgICAgICAvLyBcdG5ldyBBY3Rpb25Nb3VzZUV2ZW50KFwiY2xpY2tcIiwgMCwgMCksXG4gICAgICAgIC8vIFx0bmV3IEFjdGlvbkV2YWwoKSxcbiAgICAgICAgLy8gXHQvLyBuZXcgQWN0aW9uU2Nyb2xsKFwiLnNjcm9sbHBhbmVcIiwgXCIlXCIsIDAsIDEwMCksXG4gICAgICAgIC8vIFx0Ly8gbmV3IEFjdGlvbk1vdXNlRXZlbnQoXCJjbGlja1wiLCAwLCAwKSxcbiAgICAgICAgLy8gXTtcblxuICAgICAgICB0aGlzLmFjdGlvbnMuYWRkRXZlbnRMaXN0ZW5lcihcImFkZFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmFkZEV2ZW50TGlzdGVuZXIoXCJyZW1vdmVcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNhdmUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGFjdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3Rpb25zO1xuICAgIH1cblxuICAgIHNldCBhY3Rpb25zKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2FjdGlvbnMgPSB2YWx1ZTtcblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEJhc2VFdmVudChcImNoYW5nZV9hY3Rpb25zXCIsIHZhbHVlKSk7XG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBzYXZlKCkge1xuICAgICAgICB0aGlzLmlzU2F2aW5nLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMuYWN0aW9ucy5zZXJpYWxpemUoKSxcbiAgICAgICAgICAgIHNldHRpbmdzOiB0aGlzLnNldHRpbmdzLnNlcmlhbGl6ZSgpXG4gICAgICAgIH07XG4gICAgICAgIGxldCBqc29uID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuc2V0KHsganNvbjoganNvbiB9LCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzU2F2aW5nLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBwbGF5U2VsZWN0ZWQoKSB7XG4gICAgLy8gXHR0aGlzLmlzUGxheWluZ1NlbGVjdGVkLnZhbHVlID0gdHJ1ZTtcbiAgICAvLyBcdGxldCBwcm9taXNlID0gdGhpcy5hY3Rpb25zLnNlbGVjdGVkSXRlbS52YWx1ZS5wbGF5KCk7XG4gICAgLy8gXHRwcm9taXNlLnRoZW4oKCk9PiB7XG4gICAgLy8gXHRcdHRoaXMuaXNQbGF5aW5nU2VsZWN0ZWQudmFsdWUgPSBmYWxzZTtcbiAgICAvLyBcdFx0dGhpcy5zYXZlKCk7XG4gICAgLy8gXHR9KTtcbiAgICAvLyB9XG5cbiAgICAvLyBjYXB0dXJlU2VsZWN0ZWQoKSB7XG5cbiAgICAvLyB9XG5cbiAgICAvLyBkZWxldGVTZWxlY3RlZCgpIHtcbiAgICAvLyBcdHRoaXMuYWN0aW9ucy5zZWxlY3RlZEl0ZW0udmFsdWUuZGVsZXRlQWN0aW9uKCk7XG4gICAgLy8gfVxuXG4gICAgY2xlYXJBY3Rpb25zKCkge1xuICAgICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJjbGVhckFjdGlvbnNcIiwgXCJjbGlja1wiKTtcbiAgICAgICAgdGhpcy5hY3Rpb25zLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuc2F2ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5jaCBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3IoeyBsb2FkLCBzaG93LCBoaWRlLCBicmFuY2hlcywgZGVmYXVsdENoaWxkLCBnZXRCcmFuY2ggfSA9IHt9KSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmJyYW5jaGVzID0gYnJhbmNoZXMgfHwge307XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgIHRoaXMubG9hZCA9IGxvYWQ7XG4gICAgfVxuICAgIGlmIChzaG93KSB7XG4gICAgICB0aGlzLnNob3cgPSBzaG93O1xuICAgIH1cbiAgICBpZiAoaGlkZSkge1xuICAgICAgdGhpcy5oaWRlID0gaGlkZTtcbiAgICB9XG4gICAgaWYgKGdldEJyYW5jaCkge1xuICAgICAgdGhpcy5nZXRCcmFuY2ggPSBnZXRCcmFuY2g7XG4gICAgfVxuXG4gICAgdGhpcy5kZWZhdWx0Q2hpbGQgPSBkZWZhdWx0Q2hpbGQ7XG4gICAgdGhpcy5fcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLl9wYXRoID0gbnVsbDtcbiAgICB0aGlzLl9yb3V0ZXIgPSBudWxsO1xuICAgIHRoaXMuX3NsdWcgPSBudWxsO1xuICB9XG5cbiAgZ2V0QnJhbmNoKHNsdWcpIHtcbiAgICBsZXQgYnJhbmNoO1xuICAgIGlmICh0aGlzLmJyYW5jaGVzW3NsdWddKSB7XG4gICAgICBicmFuY2ggPSB0aGlzLmJyYW5jaGVzW3NsdWddO1xuICAgIH0gZWxzZSBpZiAodGhpcy5icmFuY2hlc1snKiddKSB7XG4gICAgICBicmFuY2ggPSB0aGlzLmJyYW5jaGVzWycqJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyYW5jaCA9IG5ldyBCcmFuY2goKTtcbiAgICAgIGNvbnNvbGUubG9nKCdObyBicmFuY2ggbmFtZWQgJyArIHNsdWcgKyAnLCBkZWZhdWx0IGJyYW5jaCB3YXMgY3JlYXRlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gYnJhbmNoO1xuICB9XG5cbiAgbG9hZChwcm9wcywgYXNzZXRMaXN0KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG5cbiAgc2hvdyhwcm9wcykge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGhpZGUocHJvcHMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gIH1cblxuICBnZXQgZGVmYXVsdENoaWxkKCkge1xuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0Q2hpbGQ7XG4gIH1cblxuICBzZXQgZGVmYXVsdENoaWxkKHZhbHVlKSB7XG4gICAgdGhpcy5fZGVmYXVsdENoaWxkID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGFyZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9wYXJlbnQ7XG4gIH1cblxuICBzZXQgcGFyZW50KHZhbHVlKSB7XG4gICAgdGhpcy5fcGFyZW50ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgcGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgfVxuXG4gIHNldCBwYXRoKHZhbHVlKSB7XG4gICAgdGhpcy5fcGF0aCA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHJvdXRlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fcm91dGVyO1xuICB9XG5cbiAgc2V0IHJvdXRlcih2YWx1ZSkge1xuICAgIHRoaXMuX3JvdXRlciA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHNsdWcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NsdWc7XG4gIH1cblxuICBzZXQgc2x1Zyh2YWx1ZSkge1xuICAgIHRoaXMuX3NsdWcgPSB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgcmFuZG9tSW50IH0gZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaHVmZmxlQXJyYXkobykge1xuICBmb3IgKGxldCBqLCB4LCBpID0gby5sZW5ndGg7IGk7IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBpKSwgeCA9IG9bLS1pXSwgb1tpXSA9IG9bal0sIG9bal0gPSB4KTtcbiAgcmV0dXJuIG87XG59XG5cbi8vcmV0dXJuIGEgcmFuZG9tbHkgc2VsZXRlZCBpdGVtIGluIGFuIGFycmF5XG5leHBvcnQgZnVuY3Rpb24gc2FtcGxlKGFycmF5KSB7XG4gIHJldHVybiBhcnJheVtyYW5kb21JbnQoMCwgYXJyYXkubGVuZ3RoIC0gMSldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9kZUxpc3RUb0FycmF5KG5vZGVMaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG4gIC8vIGxldCBhcnJheSA9IG5ldyBBcnJheSgpO1xuICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IG5vZGVMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gIC8vIFx0YXJyYXkucHVzaChub2RlTGlzdC5pdGVtKGkpKTtcbiAgLy8gfVxuICAvLyByZXR1cm4gYXJyYXk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudEhhbmRsZXIge1xuXG4gICAgY29uc3RydWN0b3IoZXZlbnRUYXJnZXQsIHR5cGUsIGV2ZW50SGFuZGxlciwgZW5hYmxlZCA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldCA9IGV2ZW50VGFyZ2V0O1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlciA9IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgdGhpcy5lbmFibGVkID0gZW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gICAgICAgIGlmKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50VGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldmVudFRhcmdldCA9IG51bGw7XG4gICAgICAgIHRoaXMudHlwZSA9IG51bGw7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyID0gbnVsbDtcbiAgICB9XG5cbn0iLCJpbXBvcnQgRXZlbnRIYW5kbGVyIGZyb20gXCIuLi9jb21wb25lbnRzL0V2ZW50SGFuZGxlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gb25EaXJlY3RpdmUoY29tcG9uZW50KSB7XG4gICAgY29uc3QgcmVtb3ZlZEF0dHJpYnV0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudC5lbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gY29tcG9uZW50LmVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5uYW1lLmluZGV4T2YoXCJvbjpcIikgIT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBhdHRyaWJ1dGUubmFtZS5zcGxpdChcIm9uOlwiKVsxXTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKFwiZXZlbnRcIiwgYXR0cmlidXRlLnZhbHVlKS5iaW5kKGNvbXBvbmVudCk7XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0gPSBuZXcgRXZlbnRIYW5kbGVyKGNvbXBvbmVudC5lbGVtZW50LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZW1vdmVkQXR0cmlidXRlcy5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVkQXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgIH0pO1xufVxuIiwiLy8gZXhwb3J0IGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWxBZGRyZXNzKSB7XG4vLyBcdHZhciBzUXRleHQgPSAnW15cXFxceDBkXFxcXHgyMlxcXFx4NWNcXFxceDgwLVxcXFx4ZmZdJztcbi8vIFx0dmFyIHNEdGV4dCA9ICdbXlxcXFx4MGRcXFxceDViLVxcXFx4NWRcXFxceDgwLVxcXFx4ZmZdJztcbi8vIFx0dmFyIHNBdG9tID0gJ1teXFxcXHgwMC1cXFxceDIwXFxcXHgyMlxcXFx4MjhcXFxceDI5XFxcXHgyY1xcXFx4MmVcXFxceDNhLVxcXFx4M2NcXFxceDNlXFxcXHg0MFxcXFx4NWItXFxcXHg1ZFxcXFx4N2YtXFxcXHhmZl0rJztcbi8vIFx0dmFyIHNRdW90ZWRQYWlyID0gJ1xcXFx4NWNbXFxcXHgwMC1cXFxceDdmXSc7XG4vLyBcdHZhciBzRG9tYWluTGl0ZXJhbCA9ICdcXFxceDViKCcgKyBzRHRleHQgKyAnfCcgKyBzUXVvdGVkUGFpciArICcpKlxcXFx4NWQnO1xuLy8gXHR2YXIgc1F1b3RlZFN0cmluZyA9ICdcXFxceDIyKCcgKyBzUXRleHQgKyAnfCcgKyBzUXVvdGVkUGFpciArICcpKlxcXFx4MjInO1xuLy8gXHR2YXIgc0RvbWFpbl9yZWYgPSBzQXRvbTtcbi8vIFx0dmFyIHNTdWJEb21haW4gPSAnKCcgKyBzRG9tYWluX3JlZiArICd8JyArIHNEb21haW5MaXRlcmFsICsgJyknO1xuLy8gXHR2YXIgc1dvcmQgPSAnKCcgKyBzQXRvbSArICd8JyArIHNRdW90ZWRTdHJpbmcgKyAnKSc7XG4vLyBcdHZhciBzRG9tYWluID0gc1N1YkRvbWFpbiArICcoXFxcXHgyZScgKyBzU3ViRG9tYWluICsgJykqJztcbi8vIFx0dmFyIHNMb2NhbFBhcnQgPSBzV29yZCArICcoXFxcXHgyZScgKyBzV29yZCArICcpKic7XG4vLyBcdHZhciBzQWRkclNwZWMgPSBzTG9jYWxQYXJ0ICsgJ1xcXFx4NDAnICsgc0RvbWFpbjsgLy8gY29tcGxldGUgUkZDODIyIGVtYWlsIGFkZHJlc3Mgc3BlY1xuLy8gXHR2YXIgc1ZhbGlkRW1haWwgPSAnXicgKyBzQWRkclNwZWMgKyAnJCc7IC8vIGFzIHdob2xlIHN0cmluZ1xuLy9cbi8vIFx0dmFyIHJlVmFsaWRFbWFpbCA9IG5ldyBSZWdFeHAoc1ZhbGlkRW1haWwpO1xuLy9cbi8vIFx0aWYgKHJlVmFsaWRFbWFpbC50ZXN0KGVtYWlsQWRkcmVzcykpIHtcbi8vIFx0XHRyZXR1cm4gdHJ1ZTtcbi8vIFx0fVxuLy9cbi8vIFx0cmV0dXJuIGZhbHNlO1xuLy8gfVxuXG4vLyBleHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuLy8gXHRsZXQgcmUgPSAvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXF0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuLy8gXHRyZXR1cm4gcmUudGVzdChTdHJpbmcoZW1haWwpLnRvTG93ZXJDYXNlKCkpO1xuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuXHRsZXQgcmUgPSAvXFxTK0BcXFMrXFwuXFxTKy87XG5cdHJldHVybiByZS50ZXN0KGVtYWlsKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc1ZhbHVlKHZhbCkge1xuXHRyZXR1cm4gKHZhbCAhPSBudWxsICYmIHZhbCAhPSB1bmRlZmluZWQgJiYgdmFsICE9IFwiXCIpO1xufVxuIiwiaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi4vY29tcG9uZW50cy9FdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IGhhc1ZhbHVlIH0gZnJvbSBcIi4uL3V0aWxzL3ZhbGlkYXRpb25cIjtcbmltcG9ydCBDaGFuZ2VFdmVudCBmcm9tIFwiLi4vQ2hhbmdlRXZlbnRcIjtcbmltcG9ydCB7IGdldFByb3BlcnR5IH0gZnJvbSBcIi4uL3RzdW5hbWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXhwcmVzc2lvbiBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcblxuICAgIGNvbnN0cnVjdG9yKGV4cHJlc3Npb24sIHNjb3BlLCBjYWxsYmFjayA9IG51bGwpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5nZXRWYWx1ZSA9IG5ldyBGdW5jdGlvbihcInJldHVybiBcIiArIGV4cHJlc3Npb24pLmJpbmQoc2NvcGUpO1xuXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcblxuICAgICAgICBsZXQgZXhwcmVzc2lvbkNodW5rcyA9IGV4cHJlc3Npb247XG4gICAgICAgIGxldCBvcGVyYXRvcnMgPSBcIisvKi1bXSgpe30hPyUkPTo7YFwiO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgb3BlcmF0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2hhciA9IG9wZXJhdG9ycy5jaGFyQXQoaSk7XG4gICAgICAgICAgICBleHByZXNzaW9uQ2h1bmtzID0gZXhwcmVzc2lvbkNodW5rcy5zcGxpdChjaGFyKS5qb2luKFwiIFwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2h1bmtzID0gZXhwcmVzc2lvbkNodW5rcy5zcGxpdChcIiBcIik7XG4gICAgICAgIGxldCBmaWx0ZXJlZENodW5rcyA9IGNodW5rcy5maWx0ZXIoKGNodW5rKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaGFzVmFsdWUoY2h1bmspICYmIGNodW5rLmluZGV4T2YoXCInXCIpID09IC0xICYmIGNodW5rLmluZGV4T2YoJ1wiJykgPT0gLTE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IFtdO1xuICAgICAgICBmaWx0ZXJlZENodW5rcy5tYXAoKGNodW5rLCBpKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2x1Z3MgPSBjaHVuay5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gc2NvcGU7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IHNsdWdzLnBvcCgpO1xuICAgICAgICAgICAgLy8gaWYoc2x1Z3MubGVuZ3RoID4gMCkgdGFyZ2V0ID0gbmV3IEZ1bmN0aW9uKFwicmV0dXJuIFwiICsgc2x1Z3Muam9pbihcIi5cIikpLmJpbmQoc2NvcGUpKCk7XG4gICAgICAgICAgICBpZihzbHVncy5sZW5ndGggPiAwKSB0YXJnZXQgPSBnZXRQcm9wZXJ0eShzbHVncy5qb2luKFwiLlwiKSwgc2NvcGUpO1xuICAgICAgICAgICAgaWYodGFyZ2V0IGluc3RhbmNlb2YgRXZlbnRUYXJnZXQgJiYgdGFyZ2V0W3R5cGVdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGxldCBoYW5kbGVyID0gbmV3IEV2ZW50SGFuZGxlcih0YXJnZXQsIHR5cGUsIHRoaXMuY2hhbmdlSGFuZGxlcik7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICAgIH1cblxuICAgIGNoYW5nZUhhbmRsZXIoZXZlbnQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgICBDaGFuZ2VFdmVudC5kaXNwYXRjaCh0aGlzLCBcInZhbHVlXCIsIHRoaXMudmFsdWUpO1xuICAgICAgICBpZih0aGlzLmNhbGxiYWNrKSB0aGlzLmNhbGxiYWNrKHRoaXMudmFsdWUpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycy5tYXAoKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0gW107XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBudWxsO1xuICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XG4gICAgfVxuXG59XG4iLCJpbXBvcnQgRXhwcmVzc2lvbiBmcm9tIFwiLi4vZGF0YS9FeHByZXNzaW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXREaXJlY3RpdmUoY29tcG9uZW50LCBhdHRyID0gXCJzZXQ6XCIpIHtcbiAgICBjb25zdCByZW1vdmVkQXR0cmlidXRlcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29tcG9uZW50LmVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBhdHRyaWJ1dGUgPSBjb21wb25lbnQuZWxlbWVudC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICBpZiAoYXR0cmlidXRlLm5hbWUuaW5kZXhPZihhdHRyKSAhPSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlLm5hbWUuc3BsaXQoYXR0cilbMV07XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9ICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudFtwcm9wZXJ0eU5hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0gPSBuZXcgRXhwcmVzc2lvbihhdHRyaWJ1dGUudmFsdWUsIGNvbXBvbmVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMucHVzaChhdHRyaWJ1dGUubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlZEF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGVOYW1lKSA9PiB7XG4gICAgICAgIGNvbXBvbmVudC5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCBFeHByZXNzaW9uIGZyb20gXCIuLi9kYXRhL0V4cHJlc3Npb25cIjtcbmltcG9ydCB7IHRyYW5zZm9ybUxpdGVyYWxzIH0gZnJvbSBcIi4uL3V0aWxzL3RyYW5zZm9ybUxpdGVyYWxzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdHRyaWJ1dGVEaXJlY3RpdmUoY29tcG9uZW50KSB7XG4gICAgbGV0IGVsZW1lbnQgPSBjb21wb25lbnQuZWxlbWVudDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYXR0cmlidXRlID0gZWxlbWVudC5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICBsZXQgYXR0cmlidXRlVmFsdWUgPSBhdHRyaWJ1dGUudmFsdWUuc3BsaXQoXCJ7XCIpLmpvaW4oXCIke1wiKTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZVZhbHVlLmluZGV4T2YoXCIke1wiKSAhPSAtMSkge1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuYXR0cmlidXRlc1thdHRyaWJ1dGUubmFtZV0gPSBuZXcgRXhwcmVzc2lvbiggdHJhbnNmb3JtTGl0ZXJhbHMoXCJgXCIgKyBhdHRyaWJ1dGVWYWx1ZSArIFwiYFwiKSwgY29tcG9uZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IENoYW5nZUV2ZW50IGZyb20gXCIuLi9DaGFuZ2VFdmVudFwiO1xuaW1wb3J0IEV2ZW50SGFuZGxlciBmcm9tIFwiLi4vY29tcG9uZW50cy9FdmVudEhhbmRsZXJcIjtcbmltcG9ydCB7IGdldFByb3BlcnR5IH0gZnJvbSBcIi4uL3RzdW5hbWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTEsIHBhdGgxLCBzY29wZTIsIHBhdGgyKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlSGFuZGxlcjEgPSB0aGlzLmNoYW5nZUhhbmRsZXIxLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2hhbmdlSGFuZGxlcjIgPSB0aGlzLmNoYW5nZUhhbmRsZXIyLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyMSA9IHRoaXMuY3JlYXRlRXZlbnRIYW5kbGVyKHNjb3BlMSwgcGF0aDEsIHRoaXMuY2hhbmdlSGFuZGxlcjEpO1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcjIgPSB0aGlzLmNyZWF0ZUV2ZW50SGFuZGxlcihzY29wZTIsIHBhdGgyLCB0aGlzLmNoYW5nZUhhbmRsZXIyLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmNoYW5nZUhhbmRsZXIyKG5ldyBDaGFuZ2VFdmVudCh0aGlzLmV2ZW50SGFuZGxlcjIudHlwZSwgdGhpcy5ldmVudEhhbmRsZXIyLmV2ZW50VGFyZ2V0W3RoaXMuZXZlbnRIYW5kbGVyMi50eXBlXSkpO1xuICAgIH1cblxuICAgIGNoYW5nZUhhbmRsZXIxKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyMi5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyMi5ldmVudFRhcmdldFt0aGlzLmV2ZW50SGFuZGxlcjIudHlwZV0gPSBldmVudC5kYXRhO1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcjIuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgY2hhbmdlSGFuZGxlcjIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIxLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXIxLmV2ZW50VGFyZ2V0W3RoaXMuZXZlbnRIYW5kbGVyMS50eXBlXSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyMS5lbmFibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBjcmVhdGVFdmVudEhhbmRsZXIoc2NvcGUsIHBhdGgsIGNhbGxiYWNrKSB7XG4gICAgICAgIGxldCBzbHVncyA9IHBhdGguc3BsaXQoXCIuXCIpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gc2NvcGU7XG4gICAgICAgIGxldCB0eXBlID0gc2x1Z3MucG9wKCk7XG4gICAgICAgIC8vIGlmKHNsdWdzLmxlbmd0aCA+IDApIHRhcmdldCA9IG5ldyBGdW5jdGlvbigpLmJpbmQoc2NvcGUpKCk7XG4gICAgICAgIGlmKHNsdWdzLmxlbmd0aCA+IDApIHRhcmdldCA9IGdldFByb3BlcnR5KHNsdWdzLmpvaW4oXCIuXCIpLCBzY29wZSk7XG4gICAgICAgIGxldCBoYW5kbGVyO1xuICAgICAgICBpZih0YXJnZXQgaW5zdGFuY2VvZiBFdmVudFRhcmdldCkge1xuICAgICAgICAgICAgaGFuZGxlciA9IG5ldyBFdmVudEhhbmRsZXIodGFyZ2V0LCB0eXBlLCBjYWxsYmFjayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9iamVjdCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRXZlbnRUYXJnZXQsIGNhbm5vdCBhZGQgZXZlbnQgbGlzdGVuZXIgdHlwZSAnXCIgKyB0eXBlICsgXCInXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyMS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyMi5kZXN0cm95KCk7XG4gICAgfVxufSIsImltcG9ydCBCaW5kIGZyb20gXCIuLi9kYXRhL0JpbmRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGJpbmREaXJlY3RpdmUoY29tcG9uZW50KSB7XG4gICAgY29uc3QgcmVtb3ZlZEF0dHJpYnV0ZXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXBvbmVudC5lbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgYXR0cmlidXRlID0gY29tcG9uZW50LmVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5uYW1lLmluZGV4T2YoXCJiaW5kOlwiKSAhPSAtMSkge1xuICAgICAgICAgICAgY29uc3QgcHJvcGVydHlOYW1lID0gYXR0cmlidXRlLm5hbWUuc3BsaXQoXCJiaW5kOlwiKVsxXTtcbiAgICAgICAgICAgIGNvbXBvbmVudC5hdHRyaWJ1dGVzW2F0dHJpYnV0ZS5uYW1lXSA9IG5ldyBCaW5kKGNvbXBvbmVudCwgXCJ0aGlzLlwiICsgcHJvcGVydHlOYW1lLCBjb21wb25lbnQsIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICByZW1vdmVkQXR0cmlidXRlcy5wdXNoKGF0dHJpYnV0ZS5uYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVkQXR0cmlidXRlcy5tYXAoKGF0dHJpYnV0ZU5hbWUpID0+IHtcbiAgICAgICAgY29tcG9uZW50LmVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xuICAgIH0pO1xufSIsImltcG9ydCB7IGF3YWl0VGltZW91dCB9IGZyb20gXCIuLi9hd2FpdFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbS9SZWN0YW5nbGVcIjtcbmltcG9ydCB7IGlzVG91Y2gsIGxvY2FsVG9HbG9iYWwgfSBmcm9tIFwiLi4vd2luZG93XCI7XG5pbXBvcnQgQnJhbmNoIGZyb20gXCIuLi9CcmFuY2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbS9Qb2ludFwiO1xuaW1wb3J0IHsgbm9kZUxpc3RUb0FycmF5IH0gZnJvbSBcIi4uL3V0aWxzL2FycmF5XCI7XG5pbXBvcnQgQ2hhbmdlRXZlbnQgZnJvbSBcIi4uL0NoYW5nZUV2ZW50XCI7XG5pbXBvcnQgeyBvbkRpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL29uRGlyZWN0aXZlXCI7XG5pbXBvcnQgeyBzZXREaXJlY3RpdmUgfSBmcm9tIFwiLi4vZGlyZWN0aXZlcy9zZXREaXJlY3RpdmVcIjtcbmltcG9ydCB7IGF0dHJpYnV0ZURpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2F0dHJpYnV0ZURpcmVjdGl2ZVwiO1xuaW1wb3J0IHsgYmluZERpcmVjdGl2ZSB9IGZyb20gXCIuLi9kaXJlY3RpdmVzL2JpbmREaXJlY3RpdmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlDb21wb25lbnQgZXh0ZW5kcyBCcmFuY2gge1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZGVidWcgPSAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlYnVnXCIpID09IFwidHJ1ZVwiKTtcblx0XHR9XG5cblx0XHR0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG5cdFx0dGhpcy5jb21wb25lbnRJRCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXHRcdGlmICh0aGlzLmRlYnVnKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1jb21wb25lbnRJZFwiLCB0aGlzLmNvbXBvbmVudElEKTtcblxuXHRcdC8vIHRoaXMuY2hpbGRyZW5TZWxlY3RvciA9IFwiOnNjb3BlID4gKlwiO1xuXG5cdFx0dGhpcy5fbW9kZWwgPSBudWxsO1xuXHRcdHRoaXMucmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgpO1xuXHRcdHRoaXMuZ2xvYmFsUmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgpO1xuXHRcdHRoaXMud2luZG93U2l6ZSA9IG5ldyBSZWN0YW5nbGUoKTtcblxuXHRcdHRoaXMuYXR0cmlidXRlcyA9IHt9O1xuXG5cdFx0dGhpcy5zaG93RHVyYXRpb24gPSAwO1xuXHRcdHRoaXMuc2hvd0RlbGF5ID0gMDtcblx0XHR0aGlzLmhpZGVEdXJhdGlvbiA9IDA7XG5cdFx0dGhpcy5oaWRlRGVsYXkgPSAwO1xuXHRcdHRoaXMuc2hvd0NoaWxkcmVuRGVsYXkgPSAwO1xuXHRcdHRoaXMuaGlkZUNoaWxkcmVuRGVsYXkgPSAwO1xuXG5cdFx0dGhpcy5kb0NoaWxkcmVuQW5pbWF0aW9uRnJhbWUgPSBmYWxzZTtcblx0XHR0aGlzLmFsc29TaG93Q2hpbGRyZW4gPSBmYWxzZTtcblx0XHR0aGlzLmNhbGN1bGF0ZUdsb2JhbFBvc2l0aW9uID0gZmFsc2U7XG5cdH1cblxuXHRnZXQgZWxlbWVudCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZWxlbWVudDtcblx0fVxuXG5cdHNldCBlbGVtZW50KHZhbHVlKSB7XG5cdFx0dGhpcy5fZWxlbWVudCA9IHZhbHVlO1xuXHRcdGlmICh2YWx1ZSkgdmFsdWUuY29tcG9uZW50ID0gdGhpcztcblx0fVxuXG5cdGdldCBjb250YWluZXJFbGVtZW50KCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQ7XG5cdH1cblxuXHRyZW1vdmVDaGlsZCh2YWx1ZSkge1xuXHRcdGlmKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiVUlMaXN0LnJlbW92ZUNoaWxkXCIsIHZhbHVlKTtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmICh0aGlzLmNvbnRhaW5lckVsZW1lbnQgPT0gdmFsdWUucGFyZW50Tm9kZSkge1xuXHRcdFx0XHR2YWx1ZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHZhbHVlKTtcblx0XHRcdFx0bGV0IGNvbXBvbmVudCA9IHZhbHVlLmNvbXBvbmVudDtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmlzQWRkZWQpIHtcblx0XHRcdFx0XHRcdGNvbXBvbmVudC5lbGVtZW50UmVtb3ZlZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGFwcGVuZENoaWxkKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHR0aGlzLmNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQodmFsdWUpO1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IHZhbHVlLmNvbXBvbmVudDtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNBZGRlZCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5lbGVtZW50QWRkZWQoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoY29tcG9uZW50LndpbmRvd1Jlc2l6ZSkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC53aW5kb3dSZXNpemUodGhpcy53aW5kb3dTaXplKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBpZiAoY29tcG9uZW50LndpbmRvd1Njcm9sbCkge1xuXHRcdFx0XHQvLyBcdGNvbXBvbmVudC53aW5kb3dTY3JvbGwodGhpcy53aW5kb3dTY3JvbGxQb2ludCk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdFx0Ly8gaWYgKGNvbXBvbmVudC5hbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHQvLyBcdGNvbXBvbmVudC5hbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lRGF0YSk7XG5cdFx0XHRcdC8vIH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcmVwZW5kQ2hpbGQoY2hpbGQpIHtcblx0XHR0aGlzLmFwcGVuZENoaWxkQXQoY2hpbGQsIDApO1xuXHR9XG5cblx0YXBwZW5kQ2hpbGRBdChjaGlsZCwgaW5kZXggPSAwKSB7XG5cdFx0Ly8gaWYoY2hpbGQucGFyZW50Tm9kZSkge1xuXHRcdC8vIFx0Y2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG5cdFx0Ly8gfVxuXHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0aWYgKGluZGV4ID49IGNoaWxkcmVuLmxlbmd0aCkge1xuXHRcdFx0dGhpcy5hcHBlbmRDaGlsZChjaGlsZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBiZWZvcmVDaGlsZCA9IGNoaWxkcmVuW2luZGV4XTtcblx0XHRcdHRoaXMuaW5zZXJ0QmVmb3JlKGNoaWxkLCBiZWZvcmVDaGlsZCk7XG5cdFx0fVxuXHR9XG5cblx0aW5zZXJ0QmVmb3JlKHZhbHVlLCByZWYpIHtcblx0XHRpZiAodmFsdWUpIHtcblx0XHRcdGlmIChyZWYpIHtcblx0XHRcdFx0dGhpcy5jb250YWluZXJFbGVtZW50Lmluc2VydEJlZm9yZSh2YWx1ZSwgcmVmKTtcblx0XHRcdFx0bGV0IGNvbXBvbmVudCA9IHZhbHVlLmNvbXBvbmVudDtcblx0XHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmlzQWRkZWQpIHtcblx0XHRcdFx0XHRcdGNvbXBvbmVudC5lbGVtZW50QWRkZWQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGNvbXBvbmVudC53aW5kb3dSZXNpemUpIHtcblx0XHRcdFx0XHRcdGNvbXBvbmVudC53aW5kb3dSZXNpemUodGhpcy53aW5kb3dTaXplKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Ly8gaWYgKGNvbXBvbmVudC53aW5kb3dTY3JvbGwpIHtcblx0XHRcdFx0XHQvLyBcdGNvbXBvbmVudC53aW5kb3dTY3JvbGwodGhpcy53aW5kb3dTY3JvbGxQb2ludCk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHRcdC8vIGlmIChjb21wb25lbnQuYW5pbWF0aW9uRnJhbWUpIHtcblx0XHRcdFx0XHQvLyBcdGNvbXBvbmVudC5hbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lRGF0YSk7XG5cdFx0XHRcdFx0Ly8gfVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aW5zZXJ0QWZ0ZXIodmFsdWUsIHJlZikge1xuXHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0bGV0IGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZihyZWYpO1xuXHRcdGlmICghaXNOYU4oaW5kZXgpKSB7XG5cdFx0XHR0aGlzLmFwcGVuZENoaWxkQXQodmFsdWUsIGluZGV4ICsgMSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiQ2FuJ3QgZmluZCBkZXB0aCBpbmRleCBmb3JcIiwgcmVmKTtcblx0XHR9XG5cdH1cblxuXHRzZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpIHtcblx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKG5hbWUsIHZhbHVlKTtcblx0fVxuXG5cdGdldCBpc0FkZGVkKCkge1xuXHRcdGxldCBwYXJlbnQ7XG5cdFx0aWYgKHRoaXMuZWxlbWVudCkge1xuXHRcdFx0cGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXHRcdHdoaWxlIChwYXJlbnQgJiYgcGFyZW50ICE9IGRvY3VtZW50LmJvZHkpIHtcblx0XHRcdHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRsZXQgaXNBZGRlZCA9IChwYXJlbnQgPT0gZG9jdW1lbnQuYm9keSk7XG5cdFx0cmV0dXJuIGlzQWRkZWQ7XG5cdH1cblxuXHRnZXQgY2hpbGRyZW4oKSB7XG5cdFx0bGV0IGFycmF5ID0gW107XG5cdFx0aWYgKHRoaXMuZWxlbWVudCkge1xuXHRcdFx0YXJyYXkgPSBub2RlTGlzdFRvQXJyYXkodGhpcy5lbGVtZW50LmNoaWxkcmVuKTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0Z2V0IHNjb3BlKCkge1xuXHRcdHJldHVybiB0aGlzLl9zY29wZTtcblx0fVxuXG5cdHNldCBzY29wZSh2YWx1ZSkge1xuXHRcdHRoaXMuX3Njb3BlID0gdmFsdWU7XG5cdFx0aWYgKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiZGVidWcgVUlDb21wb25lbnQuc2NvcGVcIiwgdmFsdWUpO1xuXHRcdGF0dHJpYnV0ZURpcmVjdGl2ZSh0aGlzKTtcblx0XHRvbkRpcmVjdGl2ZSh0aGlzKTtcblx0XHRzZXREaXJlY3RpdmUodGhpcyk7XG5cdFx0YmluZERpcmVjdGl2ZSh0aGlzKTtcblx0fVxuXG5cdGdldCBtb2RlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XG5cdH1cblxuXHRzZXQgbW9kZWwodmFsdWUpIHtcblx0XHRpZiAodmFsdWUgIT0gdGhpcy5fbW9kZWwpIHtcblx0XHRcdHRoaXMuX21vZGVsID0gdmFsdWU7XG5cdFx0IFx0Q2hhbmdlRXZlbnQuZGlzcGF0Y2godGhpcywgXCJtb2RlbFwiLCB2YWx1ZSk7XG5cdFx0fVxuXHR9XG5cblx0bG9hZCgpIHtcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcblx0XHRsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSBjaGlsZHJlbltpXS5jb21wb25lbnQ7XG5cdFx0XHRpZiAoY29tcG9uZW50ICYmIGNvbXBvbmVudC5sb2FkKSB7XHRcblx0XHRcdFx0cHJvbWlzZXMucHVzaChjb21wb25lbnQubG9hZCgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcblx0fVxuXG5cdHNob3coKSB7XG5cdFx0bGV0IHByb21pc2UxID0gYXdhaXRUaW1lb3V0KHRoaXMuc2hvd0RlbGF5KTtcblx0XHRsZXQgcHJvbWlzZTIgPSBwcm9taXNlMS50aGVuKCgpID0+IHtcblx0XHRcdHRoaXMuc2hvd1Byb21pc2VzID0gW3RoaXMuc2hvd0RlbGF5Q29tcGxldGUoKV07XG5cdFx0XHRpZiAodGhpcy5hbHNvU2hvd0NoaWxkcmVuKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1Byb21pc2VzLnB1c2godGhpcy5zaG93Q2hpbGRyZW4oKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5zaG93UHJvbWlzZXMpO1xuXHRcdH0pO1xuXHRcdHJldHVybiBwcm9taXNlMi50aGVuKHRoaXMuc2hvd0NvbXBsZXRlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0c2hvd0RlbGF5Q29tcGxldGUoKSB7XG5cdFx0dGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuXHRcdGlmICh0aGlzLmVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwic2hvd1wiKTtcblx0XHR9XG5cdFx0cmV0dXJuIGF3YWl0VGltZW91dCh0aGlzLnNob3dEdXJhdGlvbik7XG5cdH1cblxuXHRzaG93Q29tcGxldGUoKSB7XG5cdH1cblxuXHRzaG93Q2hpbGRyZW4oKSB7XG5cdFx0bGV0IHByb21pc2VzID0gW107XG5cdFx0bGV0IGRlbGF5ID0gMDtcblx0XHRsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSBjaGlsZHJlbltpXS5jb21wb25lbnQ7XG5cdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdGlmICh0aGlzLnNob3dDaGlsZHJlbkRlbGF5ID4gMCkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC5zaG93RGVsYXkgPSBkZWxheTtcblx0XHRcdFx0XHRkZWxheSArPSB0aGlzLnNob3dDaGlsZHJlbkRlbGF5O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHByb21pc2VzLnB1c2goY29tcG9uZW50LnNob3coKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG5cdH1cblxuXHRoaWRlKCkge1xuXHRcdGxldCBwcm9taXNlMSA9IGF3YWl0VGltZW91dCh0aGlzLmhpZGVEZWxheSk7XG5cdFx0bGV0IHByb21pc2UyID0gcHJvbWlzZTEudGhlbigoKSA9PiB7XG5cdFx0XHR0aGlzLmhpZGVQcm9taXNlcyA9IFt0aGlzLmhpZGVEZWxheUNvbXBsZXRlKCldO1xuXHRcdFx0aWYgKHRoaXMuYWxzb1Nob3dDaGlsZHJlbikge1xuXHRcdFx0XHR0aGlzLmhpZGVQcm9taXNlcy5wdXNoKHRoaXMuaGlkZUNoaWxkcmVuKCkpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIFByb21pc2UuYWxsKHRoaXMuaGlkZVByb21pc2VzKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gcHJvbWlzZTIudGhlbih0aGlzLmhpZGVDb21wbGV0ZS5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdGhpZGVEZWxheUNvbXBsZXRlKCkge1xuXHRcdGlmICh0aGlzLmVsZW1lbnQpIHtcblx0XHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN0YXRlXCIsIFwiaGlkZVwiKTtcblx0XHR9XG5cdFx0cmV0dXJuIGF3YWl0VGltZW91dCh0aGlzLmhpZGVEdXJhdGlvbik7XG5cdH1cblxuXHRoaWRlQ29tcGxldGUoKSB7XG5cdFx0dGhpcy5pc1Zpc2libGUgPSBmYWxzZTtcblx0fVxuXG5cdGhpZGVDaGlsZHJlbigpIHtcblx0XHRsZXQgcHJvbWlzZXMgPSBbXTtcblx0XHRsZXQgZGVsYXkgPSAwO1xuXHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldLmNvbXBvbmVudDtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0aWYgKHRoaXMuaGlkZUNoaWxkcmVuRGVsYXkgPiAwKSB7XG5cdFx0XHRcdFx0Y29tcG9uZW50LmhpZGVEZWxheSA9IGRlbGF5O1xuXHRcdFx0XHRcdGRlbGF5ICs9IHRoaXMuaGlkZUNoaWxkcmVuRGVsYXk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cHJvbWlzZXMucHVzaChjb21wb25lbnQuaGlkZSgpKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcblx0fVxuXG5cdHdpbmRvd1Jlc2l6ZSh3aW5kb3dTaXplKSB7XG5cdFx0dGhpcy53aW5kb3dTaXplID0gd2luZG93U2l6ZTtcblx0XHR0aGlzLnJlY3RhbmdsZS54ID0gdGhpcy5lbGVtZW50Lm9mZnNldExlZnQ7XG5cdFx0dGhpcy5yZWN0YW5nbGUueSA9IHRoaXMuZWxlbWVudC5vZmZzZXRUb3A7XG5cdFx0dGhpcy5yZWN0YW5nbGUud2lkdGggPSB0aGlzLmVsZW1lbnQub2Zmc2V0V2lkdGg7XG5cdFx0dGhpcy5yZWN0YW5nbGUuaGVpZ2h0ID0gdGhpcy5lbGVtZW50Lm9mZnNldEhlaWdodDtcblx0XHR0aGlzLmdsb2JhbFJlY3RhbmdsZS53aWR0aCA9IHRoaXMucmVjdGFuZ2xlLndpZHRoO1xuXHRcdHRoaXMuZ2xvYmFsUmVjdGFuZ2xlLmhlaWdodCA9IHRoaXMucmVjdGFuZ2xlLmhlaWdodDtcblx0XHRpZiAodGhpcy5jYWxjdWxhdGVHbG9iYWxQb3NpdGlvbikge1xuXHRcdFx0dGhpcy5nbG9iYWxSZWN0YW5nbGUucG9zaXRpb24gPSBsb2NhbFRvR2xvYmFsKHRoaXMuZWxlbWVudCwgZG9jdW1lbnQuYm9keSk7XG5cdFx0fVxuXHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cdFx0XHRsZXQgY29tcG9uZW50ID0gY2hpbGQuY29tcG9uZW50O1xuXHRcdFx0aWYgKGNvbXBvbmVudCkge1xuXHRcdFx0XHRpZiAoY29tcG9uZW50LndpbmRvd1Jlc2l6ZSkge1xuXHRcdFx0XHRcdGNvbXBvbmVudC53aW5kb3dSZXNpemUod2luZG93U2l6ZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyB3aW5kb3dTY3JvbGwocG9pbnQpIHtcblx0Ly8gXHR0aGlzLndpbmRvd1Njcm9sbFBvaW50ID0gcG9pbnQ7XG5cdC8vIFx0bGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcblx0Ly8gXHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdC8vIFx0XHRsZXQgY29tcG9uZW50ID0gY2hpbGRyZW5baV0uY29tcG9uZW50O1xuXHQvLyBcdFx0aWYgKGNvbXBvbmVudCkge1xuXHQvLyBcdFx0XHRpZiAoY29tcG9uZW50LndpbmRvd1Njcm9sbCkge1xuXHQvLyBcdFx0XHRcdGNvbXBvbmVudC53aW5kb3dTY3JvbGwocG9pbnQpO1xuXHQvLyBcdFx0XHR9XG5cdC8vIFx0XHR9XG5cdC8vIFx0fVxuXHQvLyB9XG5cblx0YW5pbWF0aW9uRnJhbWUoZGF0YSkge1xuXHRcdHRoaXMuYW5pbWF0aW9uRnJhbWVEYXRhID0gZGF0YTtcblx0XHRpZiAodGhpcy5kb0NoaWxkcmVuQW5pbWF0aW9uRnJhbWUpIHtcblx0XHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGxldCBjb21wb25lbnQgPSBjaGlsZHJlbltpXS5jb21wb25lbnQ7XG5cdFx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0XHRjb21wb25lbnQuYW5pbWF0aW9uRnJhbWUoZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRvcmllbnRhdGlvbkNoYW5nZShvcmllbnRhdGlvbikge1xuXHRcdHRoaXMub3JpZW50YXRpb24gPSBvcmllbnRhdGlvbjtcblx0XHRsZXQgY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBjb21wb25lbnQgPSBjaGlsZHJlbltpXS5jb21wb25lbnQ7XG5cdFx0XHRpZiAoY29tcG9uZW50KSB7XG5cdFx0XHRcdGlmIChjb21wb25lbnQub3JpZW50YXRpb25DaGFuZ2UpIHtcblx0XHRcdFx0XHRjb21wb25lbnQub3JpZW50YXRpb25DaGFuZ2Uob3JpZW50YXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZWxlbWVudEFkZGVkKCkge1xuXHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldLmNvbXBvbmVudDtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0Y29tcG9uZW50LmVsZW1lbnRBZGRlZCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGVsZW1lbnRSZW1vdmVkKCkge1xuXHRcdGxldCBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGNvbXBvbmVudCA9IGNoaWxkcmVuW2ldLmNvbXBvbmVudDtcblx0XHRcdGlmIChjb21wb25lbnQpIHtcblx0XHRcdFx0Y29tcG9uZW50LmVsZW1lbnRSZW1vdmVkKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIGdldFJlY3QoZWxlbWVudCwgcGFyZW50LCBkZWJ1Zykge1xuXHRcdGlmICghcGFyZW50KSB7XG5cdFx0XHRwYXJlbnQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdH1cblx0XHRsZXQgcmVjdGFuZ2xlID0gbmV3IFJlY3RhbmdsZSgwLCAwLCBlbGVtZW50Lm9mZnNldFdpZHRoLCBlbGVtZW50Lm9mZnNldEhlaWdodCk7XG5cdFx0aWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0cmVjdGFuZ2xlLnBvc2l0aW9uID0gbG9jYWxUb0dsb2JhbChlbGVtZW50LCBwYXJlbnQsIG51bGwsIGRlYnVnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlY3RhbmdsZTtcblx0fVxuXG5cdGdldFJlY3QocGFyZW50LCBkZWJ1Zykge1xuXHRcdHJldHVybiBVSUNvbXBvbmVudC5nZXRSZWN0KHRoaXMuZWxlbWVudCwgcGFyZW50KTtcblx0fVxuXG5cdHF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHtcblx0XHRsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdGNvbnNvbGUubG9nKFwiTm8gZWxlbWVudCB3aXRoIHNlbGVjdG9yIFwiICsgc2VsZWN0b3IgKyBcIiBpbiBcIiArIHRoaXMpO1xuXHRcdH1cblx0XHRyZXR1cm4gZWxlbWVudC5jb21wb25lbnQgfHwgZWxlbWVudDtcblx0fVxuXG5cdHF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpIHtcblx0XHRsZXQgYXJyYXkgPSBbXTtcblx0XHRsZXQgZWxlbWVudHMgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IGVsZW1lbnQgPSBlbGVtZW50cy5pdGVtKGkpO1xuXHRcdFx0YXJyYXkucHVzaChlbGVtZW50LmNvbXBvbmVudCB8fCBlbGVtZW50KTtcblx0XHR9XG5cdFx0cmV0dXJuIGFycmF5O1xuXHR9XG5cblx0Z2V0VG91Y2hQb2ludChldmVudCkge1xuXHRcdGxldCB0b3VjaCA9IGV2ZW50O1xuXHRcdGlmIChpc1RvdWNoKSB7XG5cdFx0XHR0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgUG9pbnQodG91Y2gucGFnZVgsIHRvdWNoLnBhZ2VZKTtcblx0fVxuXG5cdGRpc3BhdGNoUmVzaXplRXZlbnQoKSB7XG5cdFx0dGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwidWktcmVzaXplXCIsIHsgYnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSB9KSk7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdGlmICh0aGlzLmRlYnVnKSBjb25zb2xlLmxvZyhcIlVJQ29tcG9uZW50LmRlc3Ryb3lcIiwgdGhpcy5lbGVtZW50KTtcblx0XHRmb3IgKGxldCBpIGluIHRoaXMuYXR0cmlidXRlcykge1xuXHRcdFx0bGV0IGF0dHJpYnV0ZSA9IHRoaXMuYXR0cmlidXRlc1tpXTtcblx0XHRcdGF0dHJpYnV0ZS5kZXN0cm95KCk7XG5cdFx0fVxuXHRcdHRoaXMubW9kZWwgPSBudWxsO1xuXHRcdHRoaXMuc2NvcGUgPSBudWxsO1xuXHRcdGlmICh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0dGhpcy5lbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50ID0gbnVsbDtcblx0XHR0aGlzLmVsZW1lbnQuY29tcG9wbmVudCA9IG51bGw7XG5cdFx0Zm9yIChsZXQgaSBpbiB0aGlzKSB7XG5cdFx0XHR0aGlzW2ldID0gbnVsbDtcblx0XHR9XG5cdH1cblxufVxuIiwiaW1wb3J0IHtldmVudHN9IGZyb20gXCIuLi9ldmVudHNcIjtcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwiLi9VSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUJ1dHRvbiBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cdFx0dGhpcy5vblJlbGVhc2UgPSAoKSA9PiB7fTtcblx0XHR0aGlzLmNsaWNrSGFuZGxlciA9IHRoaXMuY2xpY2tIYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmVzc0hhbmRsZXIgPSB0aGlzLnByZXNzSGFuZGxlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuY2xpY2tEZWxheUNvbXBsZXRlID0gdGhpcy5jbGlja0RlbGF5Q29tcGxldGUuYmluZCh0aGlzKVxuXG5cdFx0dGhpcy5jbGlja0RlbGF5ID0gMDtcblxuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5jbGljaywgdGhpcy5jbGlja0hhbmRsZXIpO1xuXHRcdHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZWRvd24sIHRoaXMucHJlc3NIYW5kbGVyKTtcblx0fVxuXG5cdHByZXNzSGFuZGxlcihldmVudCkge1xuXHRcdHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWV2ZW50XCIsIFwicHJlc3NcIik7XG5cdH1cblxuXHRjbGlja0hhbmRsZXIoZXZlbnQpIHtcblx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1ldmVudFwiLCBcImNsaWNrXCIpO1xuXG5cdFx0aWYgKHRoaXMuY2xpY2tEZWxheSA+IDApIHtcblx0XHRcdHNldFRpbWVvdXQodGhpcy5jbGlja0RlbGF5Q29tcGxldGUsIHRoaXMuY2xpY2tEZWxheSAqIDEwMDAsIGV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5jbGlja0RlbGF5Q29tcGxldGUoZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGNsaWNrRGVsYXlDb21wbGV0ZShldmVudCkge1xuXHRcdGlmICh0aGlzLm9uUmVsZWFzZSkge1xuXHRcdFx0dGhpcy5vblJlbGVhc2UoZXZlbnQpO1xuXHRcdH1cblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLmNsaWNrLCB0aGlzLmNsaWNrSGFuZGxlcik7XG5cdFx0dGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNlZG93biwgdGhpcy5wcmVzc0hhbmRsZXIpO1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblx0fVxuXG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29wZSB7XG5cblx0Y29uc3RydWN0b3IoZGF0YSwgcGFyZW50U2NvcGUgPSBudWxsLCBpbmRleCA9IE5hTiwgbGVuZ3RoID0gTmFOKSB7XG5cdFx0dGhpcy5kYXRhID0gZGF0YTtcblx0XHR0aGlzLnBhcmVudFNjb3BlID0gcGFyZW50U2NvcGU7XG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXHRcdGlmICghaXNOYU4odGhpcy5pbmRleCkpIHRoaXMuaW5kZXgxID0gaW5kZXggKyAxO1xuXHRcdHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuXHR9XG5cblx0Z2V0IHJvb3RTY29wZSgpIHtcblx0XHRsZXQgcm9vdFNjb3BlID0gdGhpcztcblx0XHRsZXQgcGFyZW50U2NvcGUgPSB0aGlzO1xuXHRcdGxldCBpID0gMDtcblx0XHR3aGlsZSAocGFyZW50U2NvcGUpIHtcblx0XHRcdHJvb3RTY29wZSA9IHBhcmVudFNjb3BlO1xuXHRcdFx0cGFyZW50U2NvcGUgPSByb290U2NvcGUucGFyZW50U2NvcGU7XG5cdFx0XHRpKys7XG5cdFx0fVxuXHRcdHJldHVybiByb290U2NvcGU7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gXCJTY29wZVwiICsgXCIgXCIgKyB0aGlzLnBhcmVudFNjb3BlO1xuXHR9XG5cbn0iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4vVUlDb21wb25lbnRcIjtcbmltcG9ydCB7ZGVzdHJveUVsZW1lbnQsIGltcG9ydFRlbXBsYXRlfSBmcm9tIFwiLi4vdHN1bmFtaVwiO1xuaW1wb3J0IEFycmF5RGF0YSBmcm9tIFwiLi4vZGF0YS9BcnJheURhdGFcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuLi9kYXRhL0RhdGFcIjtcbmltcG9ydCBTY29wZSBmcm9tIFwiLi4vU2NvcGVcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vYW5pbWF0aW9uL1R3ZWVuXCI7XG5pbXBvcnQgVHdlZW5Qcm9wZXJ0eSBmcm9tIFwiLi4vYW5pbWF0aW9uL1R3ZWVuUHJvcGVydHlcIjtcbmltcG9ydCBFYXNpbmcgZnJvbSBcIi4uL2FuaW1hdGlvbi9FYXNpbmdcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbS9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbS9SZWN0YW5nbGVcIjtcbmltcG9ydCB7IHJvdW5kMSB9IGZyb20gXCIuLi91dGlscy9udW1iZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlMaXN0QmFzZSBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG5cblx0XHR0aGlzLl9wcm92aWRlckFkZCA9IHRoaXMuX3Byb3ZpZGVyQWRkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5fcHJvdmlkZXJSZW1vdmUgPSB0aGlzLl9wcm92aWRlclJlbW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLl9wcm92aWRlclNvcnQgPSB0aGlzLl9wcm92aWRlclNvcnQuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSAnPGxpIGlzPVwidWktdGV4dFwiPnt0aGlzLnNjb3BlLmRhdGF9PC9saT4nO1xuXHRcdHRoaXMudGVtcGxhdGVzID0ge307XG4gICAgICAgIHRoaXMuX3Byb3ZpZGVyID0gbmV3IEFycmF5RGF0YSgpO1xuICAgICAgICBcbiAgICAgICAgbGV0IHRlbXBsYXRlcyA9IFtdO1xuXHRcdGlmKHRoaXMuZWxlbWVudCkge1xuXHRcdFx0dGhpcy5jaGlsZHJlbi5tYXAoKGVsKT0+IHtcblx0XHRcdFx0aWYoZWwubm9kZU5hbWUudG9VcHBlckNhc2UoKSA9PSBcIlRFTVBMQVRFXCIpIHtcblx0XHRcdFx0XHR0ZW1wbGF0ZXMucHVzaChlbCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fVxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0ZW1wbGF0ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCB0ZW1wbGF0ZSA9IHRlbXBsYXRlc1tpXTtcblx0XHRcdGxldCB0eXBlID0gdGVtcGxhdGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpIHx8IFwiKlwiO1xuXHRcdFx0dGhpcy50ZW1wbGF0ZXNbdHlwZV0gPSB0ZW1wbGF0ZS5pbm5lckhUTUw7XG5cdFx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlQ2hpbGQodGVtcGxhdGUpO1xuXHRcdH1cbiAgICB9XG5cbiAgICBnZXQgcHJvdmlkZXIoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3Byb3ZpZGVyO1xuXHR9XG5cblx0c2V0IHByb3ZpZGVyKHZhbHVlKSB7XG5cdFx0aWYgKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiVUlMaXN0LnByb3ZpZGVyXCIsIHZhbHVlKTtcblx0XHRpZiAodGhpcy5fcHJvdmlkZXIpIHtcblx0XHRcdGlmICh0aGlzLl9wcm92aWRlciBpbnN0YW5jZW9mIEFycmF5RGF0YSkge1xuXHRcdFx0XHR0aGlzLl9wcm92aWRlci5yZW1vdmVFdmVudExpc3RlbmVyKFwiYWRkXCIsIHRoaXMuX3Byb3ZpZGVyQWRkKTtcblx0XHRcdFx0dGhpcy5fcHJvdmlkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlbW92ZVwiLCB0aGlzLl9wcm92aWRlclJlbW92ZSk7XG5cdFx0XHRcdHRoaXMuX3Byb3ZpZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzb3J0XCIsIHRoaXMuX3Byb3ZpZGVyU29ydCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMuX3JlbW92ZUVsZW1lbnRzKHRoaXMuY2hpbGRyZW4uc2xpY2UoKSk7XG5cdFx0dGhpcy5fcHJvdmlkZXIgPSB2YWx1ZTtcblx0XHRpZiAodGhpcy5fcHJvdmlkZXIpIHtcblx0XHRcdGlmICh0aGlzLl9wcm92aWRlciBpbnN0YW5jZW9mIEFycmF5RGF0YSkge1xuXHRcdFx0XHR0aGlzLl9wcm92aWRlci5hZGRFdmVudExpc3RlbmVyKFwiYWRkXCIsIHRoaXMuX3Byb3ZpZGVyQWRkKTtcblx0XHRcdFx0dGhpcy5fcHJvdmlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlbW92ZVwiLCB0aGlzLl9wcm92aWRlclJlbW92ZSk7XG5cdFx0XHRcdHRoaXMuX3Byb3ZpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzb3J0XCIsIHRoaXMuX3Byb3ZpZGVyU29ydCk7XG5cdFx0XHRcdHRoaXMuX2FkZEVsZW1lbnRzKHRoaXMuX3Byb3ZpZGVyLnZhbHVlKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuX2FkZEVsZW1lbnRzKHRoaXMuX3Byb3ZpZGVyKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuICAgIF9yZW1vdmVFbGVtZW50cyhhcnJheSkge1xuXHRcdGlmKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiVUlMaXN0Ll9yZW1vdmVFbGVtZW50c1wiLCBhcnJheS5sZW5ndGgpO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxldCBlbGVtZW50ID0gYXJyYXlbaV07XG5cdFx0XHR0aGlzLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXHRcdFx0ZGVzdHJveUVsZW1lbnQoZWxlbWVudCk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hSZXNpemVFdmVudCgpO1xuXHR9XG5cbiAgICBfYWRkRWxlbWVudHMoYXJyYXksIGluZGV4ID0gMCkge1xuXHRcdGlmICh0aGlzLmRlYnVnKSBjb25zb2xlLmxvZyhcIlVJTGlzdC5fYWRkRWxlbWVudHNcIiwgYXJyYXkubGVuZ3RoKTtcblx0XHRmb3IgKGxldCBpIGluIGFycmF5KSB7XG5cdFx0XHRsZXQgZGF0YSA9IGFycmF5W2ldO1xuXHRcdFx0bGV0IGVsZW1lbnQgPSB0aGlzLl9jcmVhdGVFbGVtZW50KGRhdGEsIGluZGV4LCBhcnJheS5sZW5ndGgpO1xuXHRcdFx0Ly8gZWxlbWVudC5tb2RlbCA9IG1vZGVsO1xuXHRcdFx0Ly8gaWYoZWxlbWVudC5jb21wb25lbnQgaW5zdGFuY2VvZiBVSUNvbXBvbmVudCkge1xuXHRcdFx0Ly8gXHRlbGVtZW50LmNvbXBvbmVudC5tb2RlbCA9IG1vZGVsO1xuXHRcdFx0Ly8gfVxuXHRcdFx0dGhpcy5hcHBlbmRDaGlsZEF0KGVsZW1lbnQsIGluZGV4KTtcblx0XHRcdC8vIGlmICh0aGlzLmlzQWRkZWQpIHtcblx0XHRcdC8vIFx0VUlDb21wb25lbnQuY2FsbEVsZW1lbnRBZGRlZChlbGVtZW50KTtcblx0XHRcdC8vIH1cblx0XHRcdGluZGV4Kys7XG5cdFx0fVxuXHRcdC8vIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQmFzZUV2ZW50KFwibGlzdENoYW5nZVwiLCBhcnJheSkpO1xuXHRcdHRoaXMuZGlzcGF0Y2hSZXNpemVFdmVudCgpO1xuXHRcdHJldHVybiBhcnJheTtcblx0fVxuICAgIFxuICAgIF9jcmVhdGVFbGVtZW50KGRhdGEsIGluZGV4LCBsZW5ndGgpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLl9nZXRUZW1wbGF0ZUZvck1vZGVsKGRhdGEpO1xuXHRcdGxldCBzY29wZSA9IG5ldyBTY29wZShkYXRhLCB0aGlzLnNjb3BlLCBpbmRleCwgbGVuZ3RoKTtcblx0XHRyZXR1cm4gaW1wb3J0VGVtcGxhdGUodGVtcGxhdGUsIHNjb3BlKTtcblx0fVxuXG5cdF9nZXRNb2RlbFR5cGUobW9kZWwpIHtcblx0XHRsZXQgdHlwZSA9IG1vZGVsLnR5cGU7XG5cdFx0aWYodHlwZSBpbnN0YW5jZW9mIERhdGEpIHtcblx0XHRcdHR5cGUgPSB0eXBlLnZhbHVlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fVxuXG5cdF9nZXRUZW1wbGF0ZUZvck1vZGVsKG1vZGVsKSB7XG5cdFx0bGV0IHNlbGVjdGVkVGVtcGxhdGU7XG5cdFx0aWYgKG1vZGVsKSB7XG5cdFx0XHRsZXQgdHlwZSA9IHRoaXMuX2dldE1vZGVsVHlwZShtb2RlbCk7XG5cdFx0XHRzZWxlY3RlZFRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZXNbdHlwZV07XG5cdFx0fVxuXHRcdGlmKCFzZWxlY3RlZFRlbXBsYXRlKSB7XG5cdFx0XHRzZWxlY3RlZFRlbXBsYXRlID0gIHRoaXMudGVtcGxhdGVzW1wiKlwiXSB8fCB0aGlzLnRlbXBsYXRlO1xuXHRcdH1cblx0XHRpZiAoIXNlbGVjdGVkVGVtcGxhdGUpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVJTGlzdCBcIiArIHRoaXMuZWxlbWVudC5vdXRlckhUTUwgKyBcIiBoYXMgbm8gdGVtcGxhdGVcIik7XG5cdFx0fVxuXHRcdHJldHVybiBzZWxlY3RlZFRlbXBsYXRlO1xuXHR9XG5cblx0X3Byb3ZpZGVyQWRkKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiVUlMaXN0Ll9wcm92aWRlckFkZFwiKTtcblx0XHR0aGlzLl9zYXZlQ2hpbGRyZW5Qb3NpdGlvbnMoKTtcblx0XHRsZXQgYWRkZWRFbGVtZW50cyA9IFtdO1xuXHRcdGxldCBzdGFydCA9IGV2ZW50LmRhdGEuaW5kZXg7XG5cdFx0bGV0IGVuZCA9IGV2ZW50LmRhdGEuaW5kZXggKyBldmVudC5kYXRhLnRvdGFsO1xuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrICkge1xuXHRcdFx0bGV0IG1vZGVsID0gdGhpcy5wcm92aWRlci52YWx1ZVtpXTtcblx0XHRcdGFkZGVkRWxlbWVudHMucHVzaChtb2RlbCk7XG5cdFx0fVxuXHRcdHRoaXMuX2FkZEVsZW1lbnRzKGFkZGVkRWxlbWVudHMsIHN0YXJ0KTtcblx0XHR0aGlzLndpbmRvd1Jlc2l6ZSh0aGlzLndpbmRvd1NpemUpO1xuXHRcdHRoaXMuX3NldENoaWxkcmVuVHJhbnNmb3JtKCk7XG5cdFx0c2V0VGltZW91dCh0aGlzLl9yZXNldENoaWxkcmVuVHJhbnNmb3JtLmJpbmQodGhpcyksIDApO1xuXHRcdHJldHVybiBhZGRlZEVsZW1lbnRzO1xuXHR9XG5cblx0X3Byb3ZpZGVyUmVtb3ZlKGV2ZW50KSB7XG5cdFx0aWYgKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiVUlMaXN0Ll9wcm92aWRlclJlbW92ZVwiLCBldmVudCk7XG5cdFx0dGhpcy5fc2F2ZUNoaWxkcmVuUG9zaXRpb25zKCk7XG5cdFx0bGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcblx0XHRpZiAodGhpcy5kZWJ1ZykgY29uc29sZS5sb2coXCJjaGlsZHJlbj1cIiwgY2hpbGRyZW4pO1xuXHRcdGxldCByZW1vdmVkRWxlbWVudHMgPSBbXTtcblx0XHRsZXQgc3RhcnQgPSBldmVudC5kYXRhLmluZGV4O1xuXHRcdGxldCBlbmQgPSBldmVudC5kYXRhLmluZGV4ICsgZXZlbnQuZGF0YS50b3RhbDtcblx0XHRpZiAodGhpcy5kZWJ1ZykgY29uc29sZS5sb2coXCJzdGFydD1cIiwgc3RhcnQsIFwiZW5kPVwiLCBlbmQpO1xuXHRcdGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XG5cdFx0XHRyZW1vdmVkRWxlbWVudHMucHVzaChjaGlsZHJlbltpXSk7XG5cdFx0fVxuXHRcdC8vIHRoaXMuY2hpbGRyZW4uc3BsaWNlKGV2ZW50LmRhdGEuaW5kZXgsIGV2ZW50LmRhdGEudG90YWwpO1xuXHRcdHRoaXMuX3JlbW92ZUVsZW1lbnRzKHJlbW92ZWRFbGVtZW50cyk7XG5cdFx0dGhpcy53aW5kb3dSZXNpemUodGhpcy53aW5kb3dTaXplKTtcblx0XHR0aGlzLl9zZXRDaGlsZHJlblRyYW5zZm9ybSgpO1xuXHRcdHNldFRpbWVvdXQodGhpcy5fcmVzZXRDaGlsZHJlblRyYW5zZm9ybS5iaW5kKHRoaXMpLCAwKTtcblx0XHRyZXR1cm4gcmVtb3ZlZEVsZW1lbnRzO1xuXHR9XG5cblx0X3Byb3ZpZGVyU29ydChldmVudCkge1xuXHRcdHRoaXMuX3NhdmVDaGlsZHJlblBvc2l0aW9ucygpO1xuXHRcdGxldCBhcnJheSA9IHRoaXMucHJvdmlkZXIudmFsdWU7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGxldCBtb2RlbCA9IGFycmF5W2ldO1xuXHRcdFx0bGV0IGNoaWxkID0gdGhpcy5nZXRFbGVtZW50QnlNb2RlbChtb2RlbCk7XG5cdFx0XHRpZiAoY2hpbGQpIHtcblx0XHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGNoaWxkKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0dGhpcy53aW5kb3dSZXNpemUodGhpcy53aW5kb3dTaXplKTtcblx0XHR0aGlzLl9zZXRDaGlsZHJlblRyYW5zZm9ybSgpO1xuXHRcdHNldFRpbWVvdXQodGhpcy5fcmVzZXRDaGlsZHJlblRyYW5zZm9ybS5iaW5kKHRoaXMpLCAwKTtcblx0fVxuXG5cdGdldEVsZW1lbnRCeU1vZGVsKG1vZGVsKSB7XG5cdFx0bGV0IGVsZW1lbnQgPSB0aGlzLmNoaWxkcmVuLmZpbmQoKGNoaWxkKSA9PiB7XG5cdFx0XHRsZXQgbWF0Y2ggPSBmYWxzZTtcblx0XHRcdGlmKGNoaWxkLmNvbXBvbmVudCkge1xuXHRcdFx0XHRtYXRjaCA9IChjaGlsZC5jb21wb25lbnQubW9kZWwgPT0gbW9kZWwpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdH0pO1xuXHRcdHJldHVybiBlbGVtZW50O1xuXHR9XG5cblx0X3NhdmVDaGlsZHJlblBvc2l0aW9ucygpIHtcblx0XHR0aGlzLmNoaWxkcmVuUG9zaXRpb25zID0gW107XG5cdFx0dGhpcy5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XG5cdFx0XHR0aGlzLmNoaWxkcmVuUG9zaXRpb25zLnB1c2goe2NoaWxkOmNoaWxkLCBwb3NpdGlvbjpuZXcgUG9pbnQoY2hpbGQub2Zmc2V0TGVmdCwgY2hpbGQub2Zmc2V0VG9wKX0pO1xuXHRcdH0pO1xuXHR9XG5cblx0X3NldENoaWxkcmVuVHJhbnNmb3JtKCkge1xuXHRcdHRoaXMuY2hpbGRyZW5Qb3NpdGlvbnMubWFwKChvYmosIGluZGV4KSA9PiB7XG5cdFx0XHRsZXQgbmV3UG9zaXRpb24gPSBuZXcgUG9pbnQob2JqLmNoaWxkLm9mZnNldExlZnQsIG9iai5jaGlsZC5vZmZzZXRUb3ApO1xuXHRcdFx0bGV0IG9mZnNldCA9IG9iai5wb3NpdGlvbi5zdWJ0cmFjdChuZXdQb3NpdGlvbik7XG5cdFx0XHRsZXQgbWFnbml0dWRlID0gb2Zmc2V0Lm1hZ25pdHVkZTtcblx0XHRcdGlmKG1hZ25pdHVkZSA+IDApIHtcblx0XHRcdFx0b2JqLmNoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbW9vdGgtdHJhbnNmb3JtXCIpO1xuXHRcdFx0XHRvYmouY2hpbGQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIG9mZnNldC54ICsgXCJweCwgXCIgKyBvZmZzZXQueSAgKyBcInB4LCAwcHgpXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRfcmVzZXRDaGlsZHJlblRyYW5zZm9ybSgpIHtcblx0XHR0aGlzLmNoaWxkcmVuLm1hcCgoY2hpbGQsIGluZGV4KSA9PiB7XG5cdFx0XHRjaGlsZC5jbGFzc0xpc3QuYWRkKFwic21vb3RoLXRyYW5zZm9ybVwiKTtcblx0XHRcdGNoaWxkLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIjtcblx0XHR9KTtcblx0fVxuXG4gICAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIGR1cmF0aW9uKSB7XG5cdFx0bGV0IHBvcyA9IG5ldyBQb2ludCgpO1xuXG5cdFx0bGV0IG1heFNjcm9sbCA9IG5ldyBQb2ludCgpO1xuXHRcdG1heFNjcm9sbC54ID0gdGhpcy5lbGVtZW50LnNjcm9sbFdpZHRoIC0gdGhpcy5lbGVtZW50LmNsaWVudFdpZHRoO1xuXHRcdG1heFNjcm9sbC55ID0gdGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodCAtIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG5cblx0XHRsZXQgZWxlbWVudFJlY3QgPSBuZXcgUmVjdGFuZ2xlKGVsZW1lbnQub2Zmc2V0TGVmdCwgZWxlbWVudC5vZmZzZXRUb3AsIGVsZW1lbnQub2Zmc2V0V2lkdGgsIGVsZW1lbnQub2Zmc2V0SGVpZ2h0KTtcblxuXHRcdHBvcy54ID0gTWF0aC5taW4oZWxlbWVudFJlY3QueCwgbWF4U2Nyb2xsLngpO1xuXHRcdHBvcy55ID0gTWF0aC5taW4oZWxlbWVudFJlY3QueSwgbWF4U2Nyb2xsLnkpO1xuXG5cdFx0cmV0dXJuIHRoaXMuc2Nyb2xsVG8ocG9zLngsIHBvcy55LCBkdXJhdGlvbik7XG5cdH1cblxuXHRzY3JvbGxUbyhzY3JvbGxMZWZ0LCBzY3JvbGxUb3AsIGR1cmF0aW9uID0gMSkge1xuXHRcdHRoaXMudHdlZW4gPSBuZXcgVHdlZW4oMCwgZHVyYXRpb24sIFtcblx0XHRcdG5ldyBUd2VlblByb3BlcnR5KHRoaXMuZWxlbWVudCwgXCJzY3JvbGxMZWZ0XCIsIHRoaXMuZWxlbWVudC5zY3JvbGxMZWZ0LCBzY3JvbGxMZWZ0LCBFYXNpbmcuY3ViaWMuZWFzZUluT3V0LCByb3VuZDEpLFxuXHRcdFx0bmV3IFR3ZWVuUHJvcGVydHkodGhpcy5lbGVtZW50LCBcInNjcm9sbFRvcFwiLCB0aGlzLmVsZW1lbnQuc2Nyb2xsVG9wLCBzY3JvbGxUb3AsIEVhc2luZy5jdWJpYy5lYXNlSW5PdXQsIHJvdW5kMSlcblx0XHRdKTtcblx0XHRyZXR1cm4gdGhpcy50d2Vlbi5zdGFydCgpO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLmNoaWxkcmVuUG9zaXRpb25zID0gbnVsbDtcblx0XHR0aGlzLnByb3ZpZGVyID0gbnVsbDtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdH1cblxufSIsImltcG9ydCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb20vUG9pbnRcIjtcbmltcG9ydCBVSUxpc3RCYXNlIGZyb20gXCIuL1VJTGlzdEJhc2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlMaXN0IGV4dGVuZHMgVUlMaXN0QmFzZSB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudCkge1xuXHRcdHN1cGVyKGVsZW1lbnQpO1xuXHRcdFxuXHRcdHRoaXMuX21vdXNlRG93bkhhbmRsZXIgPSB0aGlzLl9tb3VzZURvd25IYW5kbGVyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5fZHJhZ01vdmUgPSB0aGlzLl9kcmFnTW92ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuX2RyYWdFbGVtZW50TW92ZSA9IHRoaXMuX2RyYWdFbGVtZW50TW92ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuX2RyYWdFbmQgPSB0aGlzLl9kcmFnRW5kLmJpbmQodGhpcyk7XG5cblx0XHR0aGlzLnNlbGVjdEl0ZW1Pbk1vdXNlRG93biA9IGZhbHNlO1xuXHRcdHRoaXMuaXNEcmFnZ2VkID0gZmFsc2U7XG5cblx0XHR0aGlzLmRyYWdJbmRleCA9IE5hTjtcblx0XHR0aGlzLmRyYWdFbGVtZW50Q2xhc3MgPSBcInVpLWxpc3QtZHJhZy1hcmVhXCI7XG5cblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2Vkb3duLCB0aGlzLl9tb3VzZURvd25IYW5kbGVyKTtcblx0fVxuXG5cdF9tb3VzZURvd25IYW5kbGVyKGV2ZW50KSB7XG5cdFx0Ly8gaWYodGhpcy5kZWJ1ZykgY29uc29sZS5sb2coXCJfbW91c2VEb3duSGFuZGxlclwiLCBcInRhcmdldFwiLCBldmVudC50YXJnZXQsIFwiY3VycmVudFRhcmdldFwiLCBldmVudC5jdXJyZW50VGFyZ2V0KTtcblx0XHRsZXQgc2VsZWN0ZWRJbmRleCA9IE5hTjtcblx0XHRsZXQgc2VsZWN0ZWRDaGlsZCA9IHRoaXMuY2hpbGRyZW4uZmluZCgoY2hpbGQsIGluZGV4KSA9PiB7XG5cdFx0XHRsZXQgY29udGFpbnMgPSBjaGlsZC5jb250YWlucyhldmVudC50YXJnZXQpO1xuXHRcdFx0bGV0IGlzQ2hpbGQgPSAoY2hpbGQgPT0gZXZlbnQudGFyZ2V0KTtcblx0XHRcdGxldCBpc01hdGNoID0gKGNvbnRhaW5zIHx8IGlzQ2hpbGQpO1xuXHRcdFx0aWYodGhpcy5kZWJ1ZykgY29uc29sZS5sb2coaW5kZXgsIFwiY29udGFpbnNcIiwgY29udGFpbnMsIFwiaXNDaGlsZFwiLCBpc0NoaWxkLCBcImlzTWF0Y2hcIiwgaXNNYXRjaCk7XG5cdFx0XHRpZihpc01hdGNoKSBzZWxlY3RlZEluZGV4ID0gaW5kZXg7XG5cdFx0XHRyZXR1cm4gaXNNYXRjaDtcblx0XHR9KTtcblx0XHQvLyBpZih0aGlzLmRlYnVnKSBjb25zb2xlLmxvZyhcInNlbGVjdGVkQ2hpbGRcIiwgc2VsZWN0ZWRDaGlsZCwgXCJzZWxlY3RlZEluZGV4XCIsIHNlbGVjdGVkSW5kZXgpO1xuXHRcdGlmKHNlbGVjdGVkQ2hpbGQpIHtcblx0XHRcdGlmKHRoaXMuc2VsZWN0SXRlbU9uTW91c2VEb3duKSB7XG5cdFx0XHRcdGlmICh0aGlzLnByb3ZpZGVyLnNlbGVjdGVkSW5kZXgpIHtcblx0XHRcdFx0XHR0aGlzLnByb3ZpZGVyLnNlbGVjdGVkSW5kZXgudmFsdWUgPSBzZWxlY3RlZEluZGV4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRsZXQgaXNEcmFnRWxlbWVudCA9IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnModGhpcy5kcmFnRWxlbWVudENsYXNzKTtcblx0XHRcdC8vIGlmKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiaXNEcmFnRWxlbWVudFwiLCBpc0RyYWdFbGVtZW50KTtcblx0XHRcdGlmKGlzRHJhZ0VsZW1lbnQpIHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0dGhpcy5kcmFnU3RhcnRQb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldmVudCk7XG5cdFx0XHRcdHRoaXMuZHJhZ0luZGV4ID0gTmFOO1xuXHRcdFx0XHQvLyB0aGlzLmRyYWdFbGVtZW50ID0gdGhpcy5jaGlsZHJlbi5maW5kKChjaGlsZCwgaW5kZXgpID0+IHtcblx0XHRcdFx0Ly8gXHRsZXQgbWF0Y2ggPSAoZXZlbnQudGFyZ2V0ID09IGNoaWxkLnF1ZXJ5U2VsZWN0b3IoXCIudWktbGlzdC1kcmFnLWFyZWFcIikpO1xuXHRcdFx0XHQvLyBcdGlmIChtYXRjaCkgdGhpcy5kcmFnSW5kZXggPSBpbmRleDtcblx0XHRcdFx0Ly8gXHRyZXR1cm4gbWF0Y2g7XG5cdFx0XHRcdC8vIH0pO1xuXHRcdFx0XHR0aGlzLmRyYWdFbGVtZW50ID0gc2VsZWN0ZWRDaGlsZDtcblx0XHRcdFx0dGhpcy5kcmFnSW5kZXggPSBzZWxlY3RlZEluZGV4O1xuXHRcdFx0XHR0aGlzLmRyYWdFbGVtZW50U3RhcnRQb3MgPSBuZXcgUG9pbnQodGhpcy5kcmFnRWxlbWVudC5vZmZzZXRMZWZ0LCB0aGlzLmRyYWdFbGVtZW50Lm9mZnNldFRvcCk7XG5cdFx0XHRcdHRoaXMuZHJhZ0VsZW1lbnRzTWluSGVpZ2h0ID0gTnVtYmVyLk1BWF9WQUxVRTtcblx0XHRcdFx0dGhpcy5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5kcmFnRWxlbWVudHNNaW5IZWlnaHQgPSBNYXRoLm1pbih0aGlzLmRyYWdFbGVtZW50c01pbkhlaWdodCwgY2hpbGQuY29tcG9uZW50LnJlY3RhbmdsZS5oZWlnaHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZW1vdmUsIHRoaXMuX2RyYWdNb3ZlKTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZXVwLCB0aGlzLl9kcmFnRW5kKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRfZHJhZ01vdmUoZXZlbnQpIHtcblx0XHRsZXQgcG9pbnQgPSB0aGlzLmdldFRvdWNoUG9pbnQoZXZlbnQpO1xuXHRcdGxldCBkaXN0YW5jZSA9IFBvaW50LmRpc3RhbmNlKHBvaW50LCB0aGlzLmRyYWdTdGFydFBvaW50KTtcblx0XHRpZihkaXN0YW5jZSA+IDApIHtcblx0XHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2Vtb3ZlLCB0aGlzLl9kcmFnTW92ZSk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNlbW92ZSwgdGhpcy5fZHJhZ0VsZW1lbnRNb3ZlKTtcblx0XHRcdHRoaXMuX2RyYWdFbGVtZW50U3RhcnQoKTtcblx0XHR9XG5cdH1cblx0XG5cdF9kcmFnRWxlbWVudFN0YXJ0KCkge1xuXHRcdHRoaXMuaXNEcmFnZ2VkID0gdHJ1ZTtcblx0XHR0aGlzLmRyYWdFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpcy1kcmFnZ2VkXCIpO1xuXHRcdHRoaXMuZHJhZ0VsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2RyYWctc3RhcnQnLCB7YnViYmxlczpmYWxzZSwgY2FuY2VsYWJsZTp0cnVlfSkpO1xuXHR9XG5cblx0X2RyYWdFbGVtZW50TW92ZShldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0bGV0IHBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2ZW50KTtcblx0XHRsZXQgZHJhZ0RpZmYgPSBwb2ludC5zdWJ0cmFjdCh0aGlzLmRyYWdTdGFydFBvaW50KTtcblx0XHRsZXQgb3JpZ2luT2Zmc2V0ID0gZHJhZ0RpZmYuYWRkKHRoaXMuZHJhZ0VsZW1lbnRTdGFydFBvcyk7XG5cdFx0bGV0IGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcblx0XHRsZXQgaW5kZXggPSB0aGlzLmRyYWdJbmRleDtcblx0XHRmb3IobGV0IGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuXHRcdFx0bGV0IGNoaWxkID0gY2hpbGRyZW5baV07XG5cdFx0XHRpZihvcmlnaW5PZmZzZXQueSA8IGNoaWxkLmNvbXBvbmVudC5yZWN0YW5nbGUueSArIHRoaXMuZHJhZ0VsZW1lbnRzTWluSGVpZ2h0IC8gMikge1xuXHRcdFx0XHRpbmRleCA9IGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGluZGV4ICE9IHRoaXMuZHJhZ0luZGV4KSB7XG5cdFx0XHR0aGlzLnByb3ZpZGVyLnN3YXAodGhpcy5kcmFnSW5kZXgsIGluZGV4KTtcblxuXHRcdFx0bGV0IG9sZFBvcyA9IHRoaXMuZHJhZ0VsZW1lbnRTdGFydFBvcztcblx0XHRcdHRoaXMuZHJhZ0VsZW1lbnRTdGFydFBvcyA9IG5ldyBQb2ludCh0aGlzLmRyYWdFbGVtZW50Lm9mZnNldExlZnQsIHRoaXMuZHJhZ0VsZW1lbnQub2Zmc2V0VG9wKTtcblx0XHRcdGxldCBwb3NEaWZmID0gdGhpcy5kcmFnRWxlbWVudFN0YXJ0UG9zLnN1YnRyYWN0KG9sZFBvcyk7XG5cdFx0XHR0aGlzLmRyYWdTdGFydFBvaW50ID0gdGhpcy5kcmFnU3RhcnRQb2ludC5hZGQocG9zRGlmZik7XG5cblx0XHRcdGRyYWdEaWZmID0gcG9pbnQuc3VidHJhY3QodGhpcy5kcmFnU3RhcnRQb2ludCk7XG5cblx0XHRcdHRoaXMuZHJhZ0luZGV4ID0gaW5kZXg7XG5cdFx0fVxuXHRcdHRoaXMuZHJhZ0VsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIGRyYWdEaWZmLnggKyBcInB4LCBcIiArIGRyYWdEaWZmLnkgKyBcInB4LCAwcHgpXCI7XG5cdH1cblxuXHRfZHJhZ0VuZChldmVudCkge1xuXHRcdHRoaXMuaXNEcmFnZ2VkID0gZmFsc2U7XG5cdFx0dGhpcy5kcmFnRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtZHJhZ2dlZFwiKTtcblx0XHR0aGlzLmRyYWdFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwiXCI7XG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZW1vdmUsIHRoaXMuX2RyYWdNb3ZlKTtcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNlbW92ZSwgdGhpcy5fZHJhZ0VsZW1lbnRNb3ZlKTtcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNldXAsIHRoaXMuX2RyYWdFbmQpO1xuXHRcdHRoaXMuZHJhZ1N0YXJ0UG9pbnQgPSBudWxsO1xuXHRcdHRoaXMuZHJhZ0luZGV4ID0gTmFOO1xuXHRcdHRoaXMuZHJhZ0VsZW1lbnQgPSBudWxsO1xuXHR9XG5cbn1cbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwiLi9VSUNvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSUlucHV0IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcihlbGVtZW50KTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuaW5wdXRIYW5kbGVyID0gdGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5ibHVySGFuZGxlciA9IHRoaXMuYmx1ckhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIHN3aXRjaCAodGhpcy5lbGVtZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpb1wiOlxuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dHR5cGUgPSBcImNoYW5nZVwiO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXR0eXBlID0gXCJpbnB1dFwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5ibHVySGFuZGxlcik7XG4gICAgfVxuXG4gICAgZ2V0IGlucHV0dHlwZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0dHlwZTtcbiAgICB9XG5cbiAgICBzZXQgaW5wdXR0eXBlKHZhbHVlID0gXCJpbnB1dFwiKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuaW5wdXR0eXBlLCB0aGlzLmlucHV0SGFuZGxlcik7XG4gICAgICAgIHRoaXMuX2lucHV0dHlwZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmlucHV0dHlwZSwgdGhpcy5pbnB1dEhhbmRsZXIpO1xuICAgIH1cblxuICAgIGdldCB2YWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC52YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IHZhbHVlKHZhbCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQudmFsdWUgPSB2YWw7XG4gICAgICAgIGlmKHRoaXMuZGVidWcpIGNvbnNvbGUubG9nKFwiVUlJbnB1dC52YWx1ZVwiLCB2YWx1ZSk7XG4gICAgfVxuICAgIFxuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLm1vZGVsO1xuICAgIH1cblxuICAgIHNldCBtb2RlbCh2YWx1ZSkge1xuICAgICAgICBpZih0aGlzLmRlYnVnKSBjb25zb2xlLmxvZyhcIlVJSW5wdXQubW9kZWxcIiwgdmFsdWUsIFwidmFsdWVcIiwgdGhpcy5lbGVtZW50LnZhbHVlKTtcbiAgICAgICAgc3dpdGNoICh0aGlzLmVsZW1lbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpb1wiOlxuICAgICAgICAgICAgICAgIGxldCBjaGVja2VkID0gKHZhbHVlID09IHRoaXMuZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrZWQgIT0gdGhpcy5lbGVtZW50LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIubW9kZWwgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBpbnB1dEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuZWxlbWVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZWxlbWVudC5jaGVja2VkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmVsZW1lbnQuY2hlY2tlZFwiLCB0aGlzLmVsZW1lbnQuY2hlY2tlZCk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHN1cGVyLm1vZGVsID0gdmFsdWU7XG4gICAgfVxuXG4gICAgYmx1ckhhbmRsZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgcGxhY2Vob2xkZXIgPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIik7XG4gICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gcGxhY2Vob2xkZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgdGhpcy5ibHVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuaW5wdXR0eXBlLCB0aGlzLmlucHV0SGFuZGxlcik7XG4gICAgICAgIHJldHVybiBzdXBlci5kZXN0cm95KCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IENoYW5nZUV2ZW50IGZyb20gXCIuLi9DaGFuZ2VFdmVudFwiO1xuaW1wb3J0IFVJTGlzdEJhc2UgZnJvbSBcIi4vVUlMaXN0QmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVNlbGVjdCBleHRlbmRzIFVJTGlzdEJhc2Uge1xuXHRcblx0Y29uc3RydWN0b3IoZWxlbWVudCkge1xuXHRcdHN1cGVyKGVsZW1lbnQpO1xuXHRcdHRoaXMuX3ZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuXHRcdHRoaXMudGVtcGxhdGUgPSAnPG9wdGlvbiBpcz1cInVpLXRleHRcIiB2YWx1ZT1cInt0aGlzLnNjb3BlLmRhdGF9XCI+e3RoaXMuc2NvcGUuZGF0YX08L29wdGlvbj4nO1xuXHRcdHRoaXMuaW5wdXRIYW5kbGVyID0gdGhpcy5pbnB1dEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuaW5wdXRIYW5kbGVyKTtcblx0fVxuXG5cdGdldCBwcm92aWRlcigpIHtcblx0XHRyZXR1cm4gc3VwZXIucHJvdmlkZXI7XG5cdH1cblxuXHRzZXQgcHJvdmlkZXIodmFsdWUpIHtcblx0XHRsZXQgY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRzdXBlci5wcm92aWRlciA9IHZhbHVlO1xuXHRcdHRoaXMudmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3ZhbHVlO1xuXHR9XG5cblx0c2V0IHZhbHVlKHZhbHVlKSB7XG5cdFx0aWYodGhpcy5fdmFsdWUgIT0gdmFsdWUpIHtcblx0XHRcdHRoaXMuX3ZhbHVlID0gdmFsdWU7XG5cdFx0XHRDaGFuZ2VFdmVudC5kaXNwYXRjaCh0aGlzLCBcInZhbHVlXCIsIHZhbHVlKTtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnZhbHVlID0gdmFsdWU7XG5cdH1cblxuXHRfcHJvdmlkZXJBZGQoZXZlbnQpIHtcblx0XHRsZXQgY3VycmVudFZhbHVlID0gdGhpcy52YWx1ZTtcblx0XHRsZXQgZWxlbWVudHMgPSBzdXBlci5fcHJvdmlkZXJBZGQoZXZlbnQpO1xuXHRcdHRoaXMudmFsdWUgPSBjdXJyZW50VmFsdWU7XG5cdFx0cmV0dXJuIGVsZW1lbnRzO1xuXHR9XG5cblx0X3Byb3ZpZGVyUmVtb3ZlKGV2ZW50KSB7XG5cdFx0bGV0IGN1cnJlbnRWYWx1ZSA9IHRoaXMudmFsdWU7XG5cdFx0bGV0IGVsZW1lbnRzID0gc3VwZXIuX3Byb3ZpZGVyUmVtb3ZlKGV2ZW50KTtcblx0XHR0aGlzLnZhbHVlID0gY3VycmVudFZhbHVlO1xuXHRcdHJldHVybiBlbGVtZW50cztcblx0fVxuXG5cdGlucHV0SGFuZGxlcihldmVudCkge1xuXHRcdHRoaXMuX3ZhbHVlID0gdGhpcy5lbGVtZW50LnZhbHVlO1xuXHRcdENoYW5nZUV2ZW50LmRpc3BhdGNoKHRoaXMsIFwidmFsdWVcIiwgdGhpcy5fdmFsdWUpO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIHRoaXMuaW5wdXRIYW5kbGVyKTtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdH1cblxufVxuIiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gXCIuL1VJQ29tcG9uZW50XCI7XG5pbXBvcnQgRXhwcmVzc2lvbiBmcm9tIFwiLi4vZGF0YS9FeHByZXNzaW9uXCI7XG5pbXBvcnQgRGF0YSBmcm9tIFwiLi4vZGF0YS9EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVGV4dCBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cdH1cblxuICAgIGdldCBzY29wZSgpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNjb3BlO1xuICAgIH1cblxuICAgIHNldCBzY29wZSh2YWx1ZSkge1xuICAgICAgICBzdXBlci5zY29wZSA9IHZhbHVlO1xuICAgICAgICBsZXQgZXhwcmVzc2lvbiA9IHRoaXMuZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgZXhwcmVzc2lvbiA9IGV4cHJlc3Npb24uc3BsaXQoXCJ7XCIpLmpvaW4oXCIke1wiKTtcbiAgICAgICAgaWYgKGV4cHJlc3Npb24uaW5kZXhPZihcIiR7XCIpICE9IC0xKSB7XG4gICAgICAgICAgICBsZXQgc2V0TW9kZWwgPSAodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGVsID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb24gPSBuZXcgRXhwcmVzc2lvbihcImBcIiArIGV4cHJlc3Npb24gKyBcImBcIiwgdGhpcywgc2V0TW9kZWwpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG1vZGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50LnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIHNldCBtb2RlbCh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRhKSB2YWx1ZSA9IHZhbHVlLnZhbHVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5leHByZXNzaW9uKSB0aGlzLmV4cHJlc3Npb24uZGVzdHJveSgpO1xuICAgICAgICByZXR1cm4gc3VwZXIuZGVzdHJveSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IFVJVGV4dCBmcm9tIFwiLi9VSVRleHRcIjtcbmltcG9ydCBUd2VlbiBmcm9tIFwiLi4vYW5pbWF0aW9uL1R3ZWVuXCI7XG5pbXBvcnQgVHdlZW5Qcm9wZXJ0eSBmcm9tIFwiLi4vYW5pbWF0aW9uL1R3ZWVuUHJvcGVydHlcIjtcbmltcG9ydCBFYXNpbmcgZnJvbSBcIi4uL2FuaW1hdGlvbi9FYXNpbmdcIjtcbmltcG9ydCB7Z2V0T3JkaW5hbFN1ZmZpeCwgZm9ybWF0LCByb3VuZERlY2ltYWxUb1BsYWNlfSBmcm9tIFwiLi4vdXRpbHMvbnVtYmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTnVtYmVyIGV4dGVuZHMgVUlUZXh0IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cdFx0dGhpcy5fY3VycmVudFZhbHVlID0gMDtcblxuXHRcdHRoaXMuaXNSYW5rID0gZmFsc2U7XG5cblx0XHR0aGlzLnJvdW5kRGVjaW1hbCA9IDE7XG5cblx0XHR0aGlzLmFwcGx5Rm9ybWF0ID0gZmFsc2U7XG5cblx0XHR0aGlzLmVhc2luZyA9IEVhc2luZy5jdWJpYy5lYXNlT3V0O1xuXG5cdFx0dGhpcy51cGRhdGVEZWxheSA9IDA7XG5cdFx0dGhpcy51cGRhdGVEdXJhdGlvbiA9IDA7XG5cdH1cblxuXHRnZXQgbW9kZWwoKSB7XG5cdFx0cmV0dXJuIHN1cGVyLm1vZGVsO1xuXHR9XG5cblx0c2V0IG1vZGVsKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0YSkgdmFsdWUgPSB2YWx1ZS52YWx1ZTtcblx0XHRpZiAoaXNOYU4odmFsdWUpKSB7XG5cdFx0XHR2YWx1ZSA9IDA7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnVwZGF0ZUR1cmF0aW9uID4gMCkge1xuXHRcdFx0aWYgKHRoaXMudXBkYXRlVHdlZW4pIHtcblx0XHRcdFx0dGhpcy51cGRhdGVUd2Vlbi5zdG9wKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnVwZGF0ZVR3ZWVuID0gbmV3IFR3ZWVuKHRoaXMudXBkYXRlRGVsYXksIHRoaXMudXBkYXRlRHVyYXRpb24sIFtuZXcgVHdlZW5Qcm9wZXJ0eSh0aGlzLCBcImN1cnJlbnRWYWx1ZVwiLCB0aGlzLmN1cnJlbnRWYWx1ZSwgdmFsdWUsIHRoaXMuZWFzaW5nKV0pO1xuXHRcdFx0dGhpcy51cGRhdGVUd2Vlbi5zdGFydCgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdXBlci5tb2RlbCA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjdXJyZW50VmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2N1cnJlbnRWYWx1ZTtcblx0fVxuXG5cdHNldCBjdXJyZW50VmFsdWUodmFsdWUpIHtcblx0XHR0aGlzLl9jdXJyZW50VmFsdWUgPSB2YWx1ZTtcblx0XHQvLyBsZXQgbmV3VmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlICogdGhpcy5yb3VuZERlY2ltYWwpIC8gdGhpcy5yb3VuZERlY2ltYWw7XG5cdFx0bGV0IG5ld1ZhbHVlID0gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgdGhpcy5yb3VuZERlY2ltYWwpO1xuXHRcdHRoaXMudXBkYXRlQ3VycmVudFZhbHVlKG5ld1ZhbHVlKTtcblx0fVxuXG5cdHVwZGF0ZUN1cnJlbnRWYWx1ZSh2YWx1ZSkge1xuXHRcdGlmICh0aGlzLmFwcGx5Rm9ybWF0KSB7XG5cdFx0XHRsZXQgc3BsaXQgPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcblx0XHRcdGlmIChzcGxpdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHNwbGl0WzBdID0gZm9ybWF0KHNwbGl0WzBdLCBcIixcIik7XG5cdFx0XHRcdGlmIChzcGxpdC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBzcGxpdC5qb2luKCcuJyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBzcGxpdFswXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZih0aGlzLmlzUmFuaykge1xuXHRcdFx0dmFsdWUgPSB2YWx1ZSArIGdldE9yZGluYWxTdWZmaXgodmFsdWUpO1xuXHRcdH1cblx0XHRzdXBlci5tb2RlbCA9IHZhbHVlO1xuXHR9XG5cbn0iLCJpbXBvcnQgQmFzZUV2ZW50LCB7ZXZlbnRzfSBmcm9tIFwiLi4vZXZlbnRzXCI7XG5pbXBvcnQge2lzVG91Y2h9IGZyb20gXCIuLi93aW5kb3dcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbS9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbS9SZWN0YW5nbGVcIjtcbmltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwiLi9VSUNvbXBvbmVudFwiO1xuaW1wb3J0IFR3ZWVuIGZyb20gXCIuLi9hbmltYXRpb24vVHdlZW5cIjtcbmltcG9ydCBUd2VlblByb3BlcnR5IGZyb20gXCIuLi9hbmltYXRpb24vVHdlZW5Qcm9wZXJ0eVwiO1xuaW1wb3J0IEVhc2luZyBmcm9tIFwiLi4vYW5pbWF0aW9uL0Vhc2luZ1wiO1xuaW1wb3J0IEJvb2xlYW5EYXRhIGZyb20gXCIuLi9kYXRhL0Jvb2xlYW5EYXRhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJU2Nyb2xsUGFuZSBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50LCBsaXN0U2VsZWN0b3IgPSBcIi5wYW5lbFwiKSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cblx0XHR0aGlzLnNjcm9sbGluZ1BhbmVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IobGlzdFNlbGVjdG9yKTtcblxuXHRcdHRoaXMud2hlZWxEaXJlY3Rpb24gPSAxO1xuXG5cdFx0dGhpcy5fYXV0b1Njcm9sbEZhY3RvciA9IDA7XG5cdFx0dGhpcy5pbmZpbml0ZUxvb3AgPSB7eDogZmFsc2UsIHk6IGZhbHNlfTtcblx0XHR0aGlzLmxvb3BQb2ludCA9IG5ldyBQb2ludCgwLCAwKTtcblx0XHR0aGlzLmF1dG9TY3JvbGxTcGVlZCA9IDE7XG5cdFx0dGhpcy5zY3JvbGxUYXJnZXQgPSBuZXcgUG9pbnQoKTtcblx0XHR0aGlzLnNjcm9sbCA9IG5ldyBQb2ludCgpO1xuXHRcdHRoaXMuc3BlZWQgPSBuZXcgUG9pbnQoKTtcblx0XHR0aGlzLm1vbWVudHVtID0gbmV3IFBvaW50KCk7XG5cdFx0dGhpcy5taW5TY3JvbGwgPSBuZXcgUG9pbnQoKTtcblx0XHR0aGlzLm1heFNjcm9sbCA9IG5ldyBQb2ludCgpO1xuXHRcdHRoaXMuc2l6ZSA9IG5ldyBSZWN0YW5nbGUoKTtcblx0XHR0aGlzLnBhbmVsU2l6ZSA9IG5ldyBSZWN0YW5nbGUoKTtcblxuXHRcdHRoaXMuc3RhcnRUb3VjaERpZmYgPSBuZXcgUG9pbnQoKTtcblxuXHRcdHRoaXMuc3ByaW5naW5lc3MgPSAwO1xuXHRcdHRoaXMuaW5lcnRpYSA9IDE7XG5cblx0XHR0aGlzLmVsYXN0aWNTY3JvbGxJbmVydGlhID0gMC4xO1xuXHRcdHRoaXMuZWxhc3RpY1Njcm9sbEVsYXN0aWNpdHkgPSBuZXcgUG9pbnQoMC4xNSwgMCk7XG5cblx0XHR0aGlzLm1vbWVudHVtRnJpY3Rpb24gPSAwLjk2NTtcblx0XHR0aGlzLm1vbWVudHVtU2NhbGVMaW1pdCA9IDAuNTtcblxuXHRcdHRoaXMubWF4U2Nyb2xsUmVhY2hlZCA9IHtcblx0XHRcdHg6bmV3IEJvb2xlYW5EYXRhKCksXG5cdFx0XHR5Om5ldyBCb29sZWFuRGF0YSgpXG5cdFx0fTtcblxuXHRcdHRoaXMud2hlZWxIYW5kbGVyID0gdGhpcy53aGVlbEhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm1vdXNlZG93bkhhbmRsZXIgPSB0aGlzLm1vdXNlZG93bkhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm1vdXNlbW92ZUhhbmRsZXIgPSB0aGlzLm1vdXNlbW92ZUhhbmRsZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLm1vdXNldXBIYW5kbGVyID0gdGhpcy5tb3VzZXVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG5cdFx0dGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNlZG93biwgdGhpcy5tb3VzZWRvd25IYW5kbGVyKTtcblxuXHRcdHRoaXMuYXV0b1Njcm9sbFRpbWVvdXREdXJhdGlvbiA9IDQ7XG5cdFx0dGhpcy5fc3RhcnRBdXRvU2Nyb2xsID0gdGhpcy5fc3RhcnRBdXRvU2Nyb2xsLmJpbmQodGhpcyk7XG5cblx0XHRpZih0aGlzLmRlYnVnKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImV2ZW50c1wiLCBldmVudHMpO1xuXHRcdH1cblx0fVxuXG5cdHNldCBhdXRvU2Nyb2xsKHZhbHVlKSB7XG5cdFx0dGhpcy5fYXV0b1Njcm9sbCA9IHZhbHVlO1xuXHRcdHRoaXMuX3N0b3BBdXRvU2Nyb2xsKCk7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHR0aGlzLl9zdGFydEF1dG9TY3JvbGwoKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgYXV0b1Njcm9sbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fYXV0b1Njcm9sbDtcblx0fVxuXG5cdGdldCB3aGVlbEVuYWJsZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX3doZWVsRW5hYmxlZDtcblx0fVxuXG5cdHNldCB3aGVlbEVuYWJsZWQodmFsdWUpIHtcblx0XHR0aGlzLl93aGVlbEVuYWJsZWQgPSB2YWx1ZTtcblx0XHRpZih2YWx1ZSkge1xuXHRcdFx0dGhpcy5hZGRXaGVlbEhhbmRsZXIoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yZW1vdmVXaGVlbEhhbmRsZXIoKTtcblx0XHR9XG5cdH1cblxuXHRhZGRXaGVlbEhhbmRsZXIoKSB7XG5cdFx0dGhpcy5yZW1vdmVXaGVlbEhhbmRsZXIoKTtcblx0XHR0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMud2hlZWxIYW5kbGVyKTtcblx0fVxuXG5cdHJlbW92ZVdoZWVsSGFuZGxlcigpIHtcblx0XHR0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIHRoaXMud2hlZWxIYW5kbGVyKTtcblx0fVxuXG5cdHdoZWVsSGFuZGxlcihldmVudCkge1xuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5zdG9wVHdlZW4oKTtcblx0XHRpZih0aGlzLm1heFNjcm9sbC55ID4gMCkge1xuXHRcdFx0dGhpcy5zY3JvbGxUYXJnZXQueSArPSBldmVudC5kZWx0YVkgKiB0aGlzLndoZWVsRGlyZWN0aW9uO1xuXHRcdH1cblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEJhc2VFdmVudChVSVNjcm9sbFBhbmUuV0hFRUwsIGV2ZW50KSk7XG5cdH1cblxuXHRfc3RhcnRBdXRvU2Nyb2xsVGltZW91dCgpIHtcblx0XHR0aGlzLl9zdG9wQXV0b1Njcm9sbFRpbWVvdXQoKTtcblx0XHRpZiAodGhpcy5hdXRvU2Nyb2xsKSB7XG5cdFx0XHR0aGlzLl9hdXRvU2Nyb2xsVGltZW91dCA9IHNldFRpbWVvdXQodGhpcy5fc3RhcnRBdXRvU2Nyb2xsLCB0aGlzLmF1dG9TY3JvbGxUaW1lb3V0RHVyYXRpb24gKiAxMDAwKTtcblx0XHR9XG5cdH1cblxuXHRfc3RvcEF1dG9TY3JvbGxUaW1lb3V0KCkge1xuXHRcdGNsZWFyVGltZW91dCh0aGlzLl9hdXRvU2Nyb2xsVGltZW91dCk7XG5cdH1cblxuXHRfc3RhcnRBdXRvU2Nyb2xsKCkge1xuXHRcdGlmICh0aGlzLmF1dG9TY3JvbGwpIHtcblx0XHRcdHRoaXMuYXV0b1Njcm9sbFR3ZWVuID0gbmV3IFR3ZWVuKDAsIDIsIFtuZXcgVHdlZW5Qcm9wZXJ0eSh0aGlzLCBcIl9hdXRvU2Nyb2xsRmFjdG9yXCIsIDAsIDEsIEVhc2luZy5jdWJpYy5lYXNlSW5PdXQpXSk7XG5cdFx0XHR0aGlzLmF1dG9TY3JvbGxUd2Vlbi5zdGFydCgpO1xuXHRcdH1cblx0fVxuXG5cdF9zdG9wQXV0b1Njcm9sbCgpIHtcblx0XHR0aGlzLl9zdG9wQXV0b1Njcm9sbFRpbWVvdXQoKTtcblx0XHRpZih0aGlzLmF1dG9TY3JvbGxUd2Vlbikge1xuXHRcdFx0dGhpcy5hdXRvU2Nyb2xsVHdlZW4uc3RvcCgpO1xuXHRcdH1cblx0XHR0aGlzLl9hdXRvU2Nyb2xsRmFjdG9yID0gMDtcblx0fVxuXG5cdHR3ZWVuVG8odGFyZ2V0WCA9IDAsIHRhcmdldFkgPSAwKSB7XG5cdFx0dGhpcy5zdG9wVHdlZW4oKTtcblx0XHR0aGlzLnR3ZWVuUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG5cdFx0bGV0IGN1cnJlbnRYID0gdGhpcy5zY3JvbGwueDtcblx0XHRsZXQgY3VycmVudFkgPSB0aGlzLnNjcm9sbC55O1xuXG5cdFx0aWYodGhpcy5pbmZpbml0ZUxvb3AueCkge1xuXHRcdFx0aWYgKHRoaXMucGFuZWxTaXplLndpZHRoID4gMCkge1xuXHRcdFx0XHR3aGlsZSAoKGN1cnJlbnRYIC0gdGFyZ2V0WCkgPiB0aGlzLnBhbmVsU2l6ZS53aWR0aCAvIDIpIHtcblx0XHRcdFx0XHRjdXJyZW50WCAtPSB0aGlzLnBhbmVsU2l6ZS53aWR0aDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHdoaWxlICgoY3VycmVudFggLSB0YXJnZXRYKSA8IHRoaXMucGFuZWxTaXplLndpZHRoIC8gLTIpIHtcblx0XHRcdFx0XHRjdXJyZW50WCArPSB0aGlzLnBhbmVsU2l6ZS53aWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmKHRoaXMuaW5maW5pdGVMb29wLnkpIHtcblx0XHRcdGlmICh0aGlzLnBhbmVsU2l6ZS5oZWlnaHQgPiAwKSB7XG5cdFx0XHRcdHdoaWxlICgoY3VycmVudFkgLSB0YXJnZXRZKSA+IHRoaXMucGFuZWxTaXplLmhlaWdodCAvIDIpIHtcblx0XHRcdFx0XHRjdXJyZW50WSAtPSB0aGlzLnBhbmVsU2l6ZS5oZWlnaHQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR3aGlsZSAoKGN1cnJlbnRZIC0gdGFyZ2V0WSkgPCB0aGlzLnBhbmVsU2l6ZS5oZWlnaHQgLyAtMikge1xuXHRcdFx0XHRcdGN1cnJlbnRZICs9IHRoaXMucGFuZWxTaXplLmhlaWdodDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwcm9wcyA9IFtdO1xuXHRcdGlmIChjdXJyZW50WCAhPSB0YXJnZXRYKSB7XG5cdFx0XHRwcm9wcy5wdXNoKG5ldyBUd2VlblByb3BlcnR5KHRoaXMuc2Nyb2xsVGFyZ2V0LCBcInhcIiwgY3VycmVudFgsIHRhcmdldFgsIEVhc2luZy5jdWJpYy5lYXNlT3V0LCAxMDApKTtcblx0XHR9XG5cdFx0aWYgKGN1cnJlbnRZICE9IHRhcmdldFkpIHtcblx0XHRcdHByb3BzLnB1c2gobmV3IFR3ZWVuUHJvcGVydHkodGhpcy5zY3JvbGxUYXJnZXQsIFwieVwiLCBjdXJyZW50WSwgdGFyZ2V0WSwgRWFzaW5nLmN1YmljLmVhc2VPdXQsIDEwMCkpO1xuXHRcdH1cblx0XHRpZiAocHJvcHMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy50d2VlbiA9IG5ldyBUd2VlbigwLCAwLjc1LCBwcm9wcyk7XG5cdFx0XHR0aGlzLnR3ZWVuUHJvbWlzZSA9IHRoaXMudHdlZW4uc3RhcnQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMudHdlZW5Qcm9taXNlO1xuXHR9XG5cblx0c3RvcFR3ZWVuKCkge1xuXHRcdGlmKHRoaXMudHdlZW4pIHtcblx0XHRcdHRoaXMudHdlZW4uc3RvcCgpO1xuXHRcdH1cblx0fVxuXG5cdGFuaW1hdGlvbkZyYW1lKGRhdGEpIHtcblx0XHRzdXBlci5hbmltYXRpb25GcmFtZShkYXRhKTtcblxuXHRcdGxldCBzY2FsZSA9IHRoaXMud2luZG93U2l6ZS5yZW1TY2FsZSB8fCAxO1xuXG5cdFx0aWYgKHRoaXMubWF4U2Nyb2xsLnggPiAwKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRhcmdldC54ICs9IE1hdGgucm91bmQoc2NhbGUgKiB0aGlzLmF1dG9TY3JvbGxTcGVlZCAqIHRoaXMuX2F1dG9TY3JvbGxGYWN0b3IgKiAxMCkgLyAxMDtcblx0XHR9XG5cdFx0aWYgKHRoaXMubWF4U2Nyb2xsLnkgPiAwKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRhcmdldC55ICs9IE1hdGgucm91bmQoc2NhbGUgKiB0aGlzLmF1dG9TY3JvbGxTcGVlZCAqIHRoaXMuX2F1dG9TY3JvbGxGYWN0b3IgKiAxMCkgLyAxMDtcblx0XHR9XG5cblx0XHRsZXQgcHJldmlvdXNTY3JvbGwgPSB0aGlzLnNjcm9sbC5jbG9uZSgpO1xuXG5cdFx0aWYgKCF0aGlzLmlzRHJhZ2dpbmcgJiYgIXRoaXMuaWdub3JlRWxhc3RpY1Njcm9sbCkge1xuXG5cdFx0XHR0aGlzLnNjcm9sbFRhcmdldC54ID0gdGhpcy5zY3JvbGxUYXJnZXQueCArIHRoaXMubW9tZW50dW0ueDtcblx0XHRcdHRoaXMuc2Nyb2xsVGFyZ2V0LnkgPSB0aGlzLnNjcm9sbFRhcmdldC55ICsgdGhpcy5tb21lbnR1bS55O1xuXG5cdFx0XHRsZXQgY2xhbXAgPSB7eDpOYU4sIHk6TmFOfTtcblx0XHRcdGlmICh0aGlzLnNjcm9sbFRhcmdldC54IDwgdGhpcy5taW5TY3JvbGwueCkge1xuXHRcdFx0XHRjbGFtcC54ID0gdGhpcy5taW5TY3JvbGwueDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHRoaXMuc2Nyb2xsVGFyZ2V0LnggPiB0aGlzLm1heFNjcm9sbC54KSB7XG5cdFx0XHRcdGNsYW1wLnggPSB0aGlzLm1heFNjcm9sbC54O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIWlzTmFOKGNsYW1wLngpKSB7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsVGFyZ2V0LnggKz0gKGNsYW1wLnggLSB0aGlzLnNjcm9sbFRhcmdldC54KSAqIHRoaXMuZWxhc3RpY1Njcm9sbEluZXJ0aWE7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0aGlzLnNjcm9sbFRhcmdldC55IDwgdGhpcy5taW5TY3JvbGwueSkge1xuXHRcdFx0XHRjbGFtcC55ID0gdGhpcy5taW5TY3JvbGwueTtcblx0XHRcdH1cblx0XHRcdGlmICh0aGlzLnNjcm9sbFRhcmdldC55ID4gdGhpcy5tYXhTY3JvbGwueSkge1xuXHRcdFx0XHRjbGFtcC55ID0gdGhpcy5tYXhTY3JvbGwueTtcblx0XHRcdH1cblx0XHRcdGlmICghaXNOYU4oY2xhbXAueSkpIHtcblx0XHRcdFx0dGhpcy5zY3JvbGxUYXJnZXQueSArPSAoY2xhbXAueSAtIHRoaXMuc2Nyb2xsVGFyZ2V0LnkpICogdGhpcy5lbGFzdGljU2Nyb2xsSW5lcnRpYTtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5tb21lbnR1bS54ICo9IHRoaXMubW9tZW50dW1GcmljdGlvbjtcblx0XHRcdHRoaXMubW9tZW50dW0ueSAqPSB0aGlzLm1vbWVudHVtRnJpY3Rpb247XG5cblx0XHRcdGxldCBlbGFzdGljaXR5WCA9IHRoaXMuc2l6ZS53aWR0aCAqIHRoaXMuZWxhc3RpY1Njcm9sbEVsYXN0aWNpdHkueDtcblx0XHRcdGxldCBlbGFzdGljaXR5WSA9IHRoaXMuc2l6ZS5oZWlnaHQgKiB0aGlzLmVsYXN0aWNTY3JvbGxFbGFzdGljaXR5Lnk7XG5cblx0XHRcdGlmICh0aGlzLnNjcm9sbFRhcmdldC54IDwgdGhpcy5taW5TY3JvbGwueCAtIGVsYXN0aWNpdHlYKSB7XG5cdFx0XHRcdHRoaXMubW9tZW50dW0ueCA9IDA7XG5cdFx0XHRcdHRoaXMuc2Nyb2xsVGFyZ2V0LnggPSB0aGlzLm1pblNjcm9sbC54IC0gZWxhc3RpY2l0eVg7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5zY3JvbGxUYXJnZXQueCA+IHRoaXMubWF4U2Nyb2xsLnggKyBlbGFzdGljaXR5WCkge1xuXHRcdFx0XHR0aGlzLm1vbWVudHVtLnggPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRhcmdldC54ID0gdGhpcy5tYXhTY3JvbGwueCArIGVsYXN0aWNpdHlYO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zY3JvbGxUYXJnZXQueSA8IHRoaXMubWluU2Nyb2xsLnkgLSBlbGFzdGljaXR5WSkge1xuXHRcdFx0XHR0aGlzLm1vbWVudHVtLnkgPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRhcmdldC55ID0gdGhpcy5taW5TY3JvbGwueSAtIGVsYXN0aWNpdHlZO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5zY3JvbGxUYXJnZXQueSA+IHRoaXMubWF4U2Nyb2xsLnkgKyBlbGFzdGljaXR5WSkge1xuXHRcdFx0XHR0aGlzLm1vbWVudHVtLnkgPSAwO1xuXHRcdFx0XHR0aGlzLnNjcm9sbFRhcmdldC55ID0gdGhpcy5tYXhTY3JvbGwueSArIGVsYXN0aWNpdHlZO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuc3BlZWQueCA9IHRoaXMuc3BlZWQueCAqIHRoaXMuc3ByaW5naW5lc3MgKyAodGhpcy5zY3JvbGxUYXJnZXQueCAtIHRoaXMuc2Nyb2xsLngpIC8gdGhpcy5pbmVydGlhO1xuXHRcdHRoaXMuc2Nyb2xsLnggKz0gdGhpcy5zcGVlZC54O1xuXG5cdFx0dGhpcy5zcGVlZC55ID0gdGhpcy5zcGVlZC55ICogdGhpcy5zcHJpbmdpbmVzcyArICh0aGlzLnNjcm9sbFRhcmdldC55IC0gdGhpcy5zY3JvbGwueSkgLyB0aGlzLmluZXJ0aWE7XG5cdFx0dGhpcy5zY3JvbGwueSArPSB0aGlzLnNwZWVkLnk7XG5cblx0XHR0aGlzLnNjcm9sbERpZmYgPSB0aGlzLnNjcm9sbC5zdWJ0cmFjdChwcmV2aW91c1Njcm9sbCk7XG5cblx0XHR0aGlzLm1heFNjcm9sbFJlYWNoZWQueC52YWx1ZSA9ICh0aGlzLnNjcm9sbC54ID49IHRoaXMubWF4U2Nyb2xsLngpO1xuXHRcdHRoaXMubWF4U2Nyb2xsUmVhY2hlZC55LnZhbHVlID0gKHRoaXMuc2Nyb2xsLnkgPj0gdGhpcy5tYXhTY3JvbGwueSk7XG5cblx0XHRsZXQgeCA9IE1hdGgucm91bmQodGhpcy5zY3JvbGwueCAqIDEwKSAvIDEwO1xuXHRcdGxldCB5ID0gTWF0aC5yb3VuZCh0aGlzLnNjcm9sbC55ICogMTApIC8gMTA7XG5cblx0XHRpZih0aGlzLmluZmluaXRlTG9vcC55KSB7XG5cdFx0XHRsZXQgbWluWSA9IDAgLSB0aGlzLmxvb3BQb2ludC55O1xuXHRcdFx0bGV0IG1heFkgPSB0aGlzLnBhbmVsU2l6ZS5oZWlnaHQgLSB0aGlzLnNpemUuaGVpZ2h0ICsgdGhpcy5sb29wUG9pbnQueTtcblxuXHRcdFx0d2hpbGUgKHkgPCBtaW5ZKSB7XG5cdFx0XHRcdHkgKz0gdGhpcy5wYW5lbFNpemUuaGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHR3aGlsZSAoeSA+IG1heFkpIHtcblx0XHRcdFx0eSAtPSB0aGlzLnBhbmVsU2l6ZS5oZWlnaHQ7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dGhpcy51cGRhdGVUcmFuc2Zvcm0oeCwgeSk7XG5cdH1cblxuXHR1cGRhdGVUcmFuc2Zvcm0oeCwgeSkge1xuXHRcdHRoaXMuc2Nyb2xsaW5nUGFuZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIC14ICsgXCJweCwgXCIgKyAteSArIFwicHgsIDApXCI7XG5cdFx0Ly8gdGhpcy5zY3JvbGxpbmdQYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoXCIgKyB4ICsgXCJweCkgdHJhbnNsYXRlWShcIiArIHkgKyBcInB4KVwiO1xuXHR9XG5cblx0d2luZG93UmVzaXplKHdpbmRvd1NpemUpIHtcblx0XHRzdXBlci53aW5kb3dSZXNpemUod2luZG93U2l6ZSk7XG5cdFx0dGhpcy51cGRhdGVQYW5lbFNpemUoKTtcblx0XHR0aGlzLnVwZGF0ZU1heFNjcm9sbCgpO1xuXHR9XG5cblx0dXBkYXRlUGFuZWxTaXplKCkge1xuXHRcdHRoaXMuc2l6ZS53aWR0aCA9IHRoaXMucmVjdGFuZ2xlLndpZHRoO1xuXHRcdHRoaXMuc2l6ZS5oZWlnaHQgPSB0aGlzLnJlY3RhbmdsZS5oZWlnaHQ7XG5cdFx0dGhpcy5wYW5lbFNpemUud2lkdGggPSB0aGlzLnNjcm9sbGluZ1BhbmVsLm9mZnNldFdpZHRoO1xuXHRcdHRoaXMucGFuZWxTaXplLmhlaWdodCA9IHRoaXMuc2Nyb2xsaW5nUGFuZWwub2Zmc2V0SGVpZ2h0O1xuXHR9XG5cblx0dXBkYXRlTWF4U2Nyb2xsKCkge1xuXHRcdHRoaXMubWF4U2Nyb2xsLnggPSBNYXRoLm1heCh0aGlzLnBhbmVsU2l6ZS53aWR0aCAtIHRoaXMuc2l6ZS53aWR0aCwgMCk7XG5cdFx0dGhpcy5tYXhTY3JvbGwueSA9IE1hdGgubWF4KHRoaXMucGFuZWxTaXplLmhlaWdodCAtIHRoaXMuc2l6ZS5oZWlnaHQsIDApO1xuXHRcdGlmKHRoaXMuaW5maW5pdGVMb29wLngpIHtcblx0XHRcdHRoaXMubWluU2Nyb2xsLnggPSBOdW1iZXIuTUFYX1ZBTFVFICogLTE7XG5cdFx0XHR0aGlzLm1heFNjcm9sbC54ID0gTnVtYmVyLk1BWF9WQUxVRTtcblx0XHR9XG5cdFx0aWYodGhpcy5pbmZpbml0ZUxvb3AueSkge1xuXHRcdFx0dGhpcy5taW5TY3JvbGwueSA9IE51bWJlci5NQVhfVkFMVUUgKiAtMTtcblx0XHRcdHRoaXMubWF4U2Nyb2xsLnkgPSBOdW1iZXIuTUFYX1ZBTFVFO1xuXHRcdH1cblx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwteFwiLCAodGhpcy5tYXhTY3JvbGwueCA+IDApKTtcblx0XHR0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1zY3JvbGwteVwiLCAodGhpcy5tYXhTY3JvbGwueSA+IDApKTtcblx0fVxuXG5cdG1vdXNlZG93bkhhbmRsZXIoZXZlbnQpIHtcblx0XHR0aGlzLnN0b3BUd2VlbigpO1xuXHRcdHRoaXMucmVtb3ZlV2hlZWxIYW5kbGVyKCk7XG5cdFx0dGhpcy5tb21lbnR1bS54ID0gdGhpcy5tb21lbnR1bS55ID0gMDtcblx0XHR0aGlzLnNjcm9sbFRhcmdldC5jb3B5RnJvbSh0aGlzLnNjcm9sbCk7XG5cblx0XHRpZihldmVudC50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMubWF4U2Nyb2xsLnggPD0gMCAmJiB0aGlzLm1heFNjcm9sbC55IDw9IDApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIWlzVG91Y2gpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5hdXRvU2Nyb2xsKSB7XG5cdFx0XHR0aGlzLl9zdG9wQXV0b1Njcm9sbCgpO1xuXHRcdH1cblxuXHRcdHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuXG5cdFx0dGhpcy5zY3JvbGxTdGFydCA9IHRoaXMuc2Nyb2xsLmNsb25lKCk7XG5cdFx0dGhpcy50b3VjaFN0YXJ0ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2ZW50KTtcblx0XHR0aGlzLnRvdWNoUHJldmlvdXMgPSB0aGlzLnRvdWNoU3RhcnQ7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2Vtb3ZlLCB0aGlzLm1vdXNlbW92ZUhhbmRsZXIpO1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZXVwLCB0aGlzLm1vdXNldXBIYW5kbGVyKTtcblx0fVxuXG5cdGdldCBpc0RyYWdnaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLl9pc0RyYWdnaW5nO1xuXHR9XG5cblx0c2V0IGlzRHJhZ2dpbmcodmFsdWUpIHtcblx0XHR0aGlzLl9pc0RyYWdnaW5nID0gdmFsdWU7XG5cdFx0aWYgKHZhbHVlKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRyYWdcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZHJhZ1wiKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgZ2V0IERSQUdfU1RBUlQoKSB7XG5cdFx0cmV0dXJuIFwiZHJhZ1N0YXJ0XCI7XG5cdH1cblxuXHRzdGF0aWMgZ2V0IERSQUdfRU5EKCkge1xuXHRcdHJldHVybiBcImRyYWdFbmRcIjtcblx0fVxuXG5cdHN0YXRpYyBnZXQgV0hFRUwoKSB7XG5cdFx0cmV0dXJuIFwid2hlZWxcIjtcblx0fVxuXG5cdG1vdXNlbW92ZUhhbmRsZXIoZXZlbnQpIHtcblx0XHQvLyBpZiAoIWlzVG91Y2gpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdC8vIH1cblxuXHRcdGxldCB0b3VjaE5ldyA9IHRoaXMuZ2V0VG91Y2hQb2ludChldmVudCk7XG5cblx0XHRsZXQgZGlzdGFuY2UgPSBQb2ludC5kaXN0YW5jZSh0b3VjaE5ldywgdGhpcy50b3VjaFN0YXJ0KTtcblxuXHRcdGlmIChNYXRoLmFicyhkaXN0YW5jZSkgPiAyICYmICF0aGlzLmlzRHJhZ2dpbmcpIHtcblx0XHRcdHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG5cdFx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFVJU2Nyb2xsUGFuZS5EUkFHX1NUQVJUKSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5tb21lbnR1bSA9IHRoaXMudG91Y2hQcmV2aW91cy5zdWJ0cmFjdCh0b3VjaE5ldyk7XG5cdFx0dGhpcy5zdGFydFRvdWNoRGlmZiA9IHRoaXMudG91Y2hTdGFydC5zdWJ0cmFjdCh0b3VjaE5ldyk7XG5cblx0XHR0aGlzLnNjcm9sbFRhcmdldCA9IG5ldyBQb2ludCh0aGlzLnNjcm9sbFN0YXJ0LnggKyB0aGlzLnN0YXJ0VG91Y2hEaWZmLngsIHRoaXMuc2Nyb2xsU3RhcnQueSArIHRoaXMuc3RhcnRUb3VjaERpZmYueSk7XG5cblx0XHR0aGlzLnRvdWNoUHJldmlvdXMgPSB0b3VjaE5ldztcblxuXHRcdGxldCBjbGFtcCA9IHt4Ok5hTiwgeTpOYU59O1xuXHRcdGlmICh0aGlzLnNjcm9sbFRhcmdldC54IDwgdGhpcy5taW5TY3JvbGwueCkge1xuXHRcdFx0Y2xhbXAueCA9IHRoaXMubWluU2Nyb2xsLng7XG5cdFx0fVxuXHRcdGlmICh0aGlzLnNjcm9sbFRhcmdldC54ID4gdGhpcy5tYXhTY3JvbGwueCkge1xuXHRcdFx0Y2xhbXAueCA9IHRoaXMubWF4U2Nyb2xsLng7XG5cdFx0fVxuXHRcdGlmICghaXNOYU4oY2xhbXAueCkpIHtcblx0XHRcdHRoaXMuc2Nyb2xsVGFyZ2V0LnggPSBjbGFtcC54ICsgKHRoaXMuc2Nyb2xsVGFyZ2V0LnggLSBjbGFtcC54KSAqIHRoaXMuZWxhc3RpY1Njcm9sbEVsYXN0aWNpdHkueDtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zY3JvbGxUYXJnZXQueSA8IHRoaXMubWluU2Nyb2xsLnkpIHtcblx0XHRcdGNsYW1wLnkgPSB0aGlzLm1pblNjcm9sbC55O1xuXHRcdH1cblx0XHRpZiAodGhpcy5zY3JvbGxUYXJnZXQueSA+IHRoaXMubWF4U2Nyb2xsLnkpIHtcblx0XHRcdGNsYW1wLnkgPSB0aGlzLm1heFNjcm9sbC55O1xuXHRcdH1cblx0XHRpZiAoIWlzTmFOKGNsYW1wLnkpKSB7XG5cdFx0XHR0aGlzLnNjcm9sbFRhcmdldC55ID0gY2xhbXAueSArICh0aGlzLnNjcm9sbFRhcmdldC55IC0gY2xhbXAueSkgKiB0aGlzLmVsYXN0aWNTY3JvbGxFbGFzdGljaXR5Lnk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TWluaW11bUFic29sdXRlTW9tZW50dW0odmFsdWUsIG1heCkge1xuXHRcdGxldCB2YWx1ZVNjYWxlID0gKHZhbHVlIDwgMCk/LTE6MTtcblx0XHRsZXQgdmFsdWVBYnMgPSBNYXRoLm1pbihNYXRoLmFicyh2YWx1ZSksIG1heCk7XG5cdFx0dmFsdWUgPSB2YWx1ZUFicyAqIHZhbHVlU2NhbGU7XG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG5cblx0bW91c2V1cEhhbmRsZXIoZXZlbnQpIHtcblx0XHQvLyBpZiAodGhpcy5pc0RyYWdnaW5nKSB7XG5cdFx0Ly8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHQvLyB9XG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNlbW92ZSwgdGhpcy5tb3VzZW1vdmVIYW5kbGVyKTtcblx0XHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2V1cCwgdGhpcy5tb3VzZXVwSGFuZGxlcik7XG5cdFx0aWYodGhpcy53aGVlbEVuYWJsZWQpIHtcblx0XHRcdHRoaXMuYWRkV2hlZWxIYW5kbGVyKCk7XG5cdFx0fVxuXG5cdFx0aWYodGhpcy5hdXRvU2Nyb2xsKSB7XG5cdFx0XHR0aGlzLl9zdGFydEF1dG9TY3JvbGxUaW1lb3V0KCk7XG5cdFx0fVxuXG5cdFx0dGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XG5cblx0XHRsZXQgbW9tZW50dW1TY2FsZVggPSB0aGlzLnNpemUud2lkdGggKiB0aGlzLm1vbWVudHVtU2NhbGVMaW1pdDtcblx0XHR0aGlzLm1vbWVudHVtLnggPSB0aGlzLmdldE1pbmltdW1BYnNvbHV0ZU1vbWVudHVtKHRoaXMubW9tZW50dW0ueCwgbW9tZW50dW1TY2FsZVgpO1xuXG5cdFx0bGV0IG1vbWVudHVtU2NhbGVZID0gdGhpcy5zaXplLmhlaWdodCAqIHRoaXMubW9tZW50dW1TY2FsZUxpbWl0O1xuXHRcdHRoaXMubW9tZW50dW0ueSA9IHRoaXMuZ2V0TWluaW11bUFic29sdXRlTW9tZW50dW0odGhpcy5tb21lbnR1bS55LCBtb21lbnR1bVNjYWxlWSk7XG5cblx0XHR0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFVJU2Nyb2xsUGFuZS5EUkFHX0VORCkpO1xuXHR9XG5cbn0iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4vVUlDb21wb25lbnRcIjtcbmltcG9ydCB7aGFzVmFsdWV9IGZyb20gXCIuLi91dGlscy92YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJTWVkaWEgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudCkge1xuXHRcdHN1cGVyKGVsZW1lbnQpO1xuXHR9XG5cblx0Z2V0IG1vZGVsKCkge1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnQuc3JjO1xuXHR9XG5cblx0c2V0IG1vZGVsKHZhbHVlKSB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0YSkgdmFsdWUgPSB2YWx1ZS52YWx1ZTtcblx0XHRpZiAoaGFzVmFsdWUodmFsdWUpKSB7XG5cdFx0XHR0aGlzLmVsZW1lbnQuc3JjID0gdmFsdWU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3NyYycpO1xuXHRcdH1cblx0fVxuXHRcblx0cmVsb2FkKCkge1xuXHRcdGxldCB1cmwgPSB0aGlzLmVsZW1lbnQuc3JjO1xuXHRcdHRoaXMuZWxlbWVudC5zcmMgPSB1cmw7XG5cdH1cblxufVxuIiwiaW1wb3J0IFVJQnV0dG9uIGZyb20gXCIuL1VJQnV0dG9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFVJVG9nZ2xlIGV4dGVuZHMgVUlCdXR0b24ge1xuXG5cdGNsaWNrRGVsYXlDb21wbGV0ZSgpIHtcblx0XHR0aGlzLm1vZGVsLnZhbHVlID0gIXRoaXMubW9kZWwudmFsdWU7XG5cdFx0cmV0dXJuIHN1cGVyLmNsaWNrRGVsYXlDb21wbGV0ZShldmVudCk7XG5cdH1cblx0XG59IiwiaW1wb3J0IFVJVGV4dCBmcm9tIFwiLi9VSVRleHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlIVE1MIGV4dGVuZHMgVUlUZXh0IHtcblxuICAgIGdldCBtb2RlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudC5pbm5lckhUTUw7XG4gICAgfVxuXG4gICAgc2V0IG1vZGVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICB9XG5cbn1cbiIsImltcG9ydCAqIGFzIHRzdW5hbWkgZnJvbSBcIi4vdHN1bmFtaVwiO1xuaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gXCIuL2NvbXBvbmVudHMvVUlDb21wb25lbnRcIjtcbmltcG9ydCBVSUJ1dHRvbiBmcm9tIFwiLi9jb21wb25lbnRzL1VJQnV0dG9uXCI7XG5pbXBvcnQgVUlMaXN0IGZyb20gXCIuL2NvbXBvbmVudHMvVUlMaXN0XCI7XG5pbXBvcnQgVUlJbnB1dCBmcm9tIFwiLi9jb21wb25lbnRzL1VJSW5wdXRcIjtcbmltcG9ydCBVSVNlbGVjdCBmcm9tIFwiLi9jb21wb25lbnRzL1VJU2VsZWN0XCI7XG5pbXBvcnQgVUlUZXh0IGZyb20gXCIuL2NvbXBvbmVudHMvVUlUZXh0XCI7XG5pbXBvcnQgVUlOdW1iZXIgZnJvbSBcIi4vY29tcG9uZW50cy9VSU51bWJlclwiO1xuaW1wb3J0IFVJU2Nyb2xsUGFuZSBmcm9tIFwiLi9jb21wb25lbnRzL1VJU2Nyb2xsUGFuZVwiO1xuaW1wb3J0IFVJTWVkaWEgZnJvbSBcIi4vY29tcG9uZW50cy9VSU1lZGlhXCI7XG5pbXBvcnQgVUlUb2dnbGUgZnJvbSBcIi4vY29tcG9uZW50cy9VSVRvZ2dsZVwiO1xuaW1wb3J0IENsb2NrLCB7Z2V0Q2xvY2t9IGZyb20gXCIuL2FuaW1hdGlvbi9DbG9ja1wiO1xuaW1wb3J0IFVJSFRNTCBmcm9tIFwiLi9jb21wb25lbnRzL1VJSFRNTFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudCkge1xuXHRcdHN1cGVyKGVsZW1lbnQpO1xuXG5cdFx0dGhpcy5pbml0KCk7XG5cdH1cblxuXHRpbml0KCkgIHtcblx0XHRnZXRDbG9jaygpLmFkZEV2ZW50TGlzdGVuZXIoQ2xvY2suVElDSywgdGhpcy5jbG9ja1RpY2suYmluZCh0aGlzKSk7XG5cblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLnJlc2l6ZUhhbmRsZXIuYmluZCh0aGlzKSk7XG5cdFx0dGhpcy5yZXNpemVIYW5kbGVyKCk7XG5cdH1cblxuXHRjbG9ja1RpY2soZXZlbnQpIHtcblx0XHRsZXQgYW5pbWF0aW9uRGF0YSA9IHtcblx0XHRcdHRpbWU6IE1hdGgucm91bmQoZ2V0Q2xvY2soKS50aW1lKSAvIDEwMDBcblx0XHR9O1xuXG5cdFx0dGhpcy5hbmltYXRpb25GcmFtZShhbmltYXRpb25EYXRhKTtcblx0fVxuXG5cdHJlc2l6ZUhhbmRsZXIoZXZlbnQpIHtcblx0XHRsZXQgcmVjdGFuZ2xlID0gdGhpcy5nZXRSZWN0KCk7XG5cblx0XHRyZWN0YW5nbGUub3JpZW50YXRpb24gPSByZWN0YW5nbGUud2lkdGggPiByZWN0YW5nbGUuaGVpZ2h0ID8gXCJsYW5kc2NhcGVcIiA6IFwicG9ydHJhaXRcIjtcblxuXHRcdGlmIChyZWN0YW5nbGUub3JpZW50YXRpb24gIT0gdGhpcy53aW5kb3dTaXplLm9yaWVudGF0aW9uKSB7XG5cdFx0XHR0aGlzLm9yaWVudGF0aW9uQ2hhbmdlKHJlY3RhbmdsZS5vcmllbnRhdGlvbik7XG5cdFx0fVxuXG5cdFx0dGhpcy53aW5kb3dSZXNpemUocmVjdGFuZ2xlKTtcblx0fVxuXG59XG5cbnRzdW5hbWkuZGVmaW5lKFwidWktY29tcG9uZW50XCIsIFVJQ29tcG9uZW50KTtcbnRzdW5hbWkuZGVmaW5lKFwidWktYnV0dG9uXCIsIFVJQnV0dG9uKTtcbnRzdW5hbWkuZGVmaW5lKFwidWktbGlzdFwiLCBVSUxpc3QpO1xudHN1bmFtaS5kZWZpbmUoXCJ1aS1pbnB1dFwiLCBVSUlucHV0KTtcbnRzdW5hbWkuZGVmaW5lKFwidWktc2VsZWN0XCIsIFVJU2VsZWN0KTtcbnRzdW5hbWkuZGVmaW5lKFwidWktdGV4dFwiLCBVSVRleHQpO1xudHN1bmFtaS5kZWZpbmUoXCJ1aS1odG1sXCIsIFVJSFRNTCk7XG50c3VuYW1pLmRlZmluZShcInVpLW51bWJlclwiLCBVSU51bWJlcik7XG50c3VuYW1pLmRlZmluZShcInVpLXNjcm9sbC1wYW5lXCIsIFVJU2Nyb2xsUGFuZSk7XG50c3VuYW1pLmRlZmluZShcInVpLW1lZGlhXCIsIFVJTWVkaWEpO1xudHN1bmFtaS5kZWZpbmUoXCJ1aS10b2dnbGVcIiwgVUlUb2dnbGUpO1xuIiwiZXhwb3J0IGRlZmF1bHQgXCI8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZHMtbGlzdFxcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuICAgIDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIkR1cmF0aW9uXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiBmYXMgZmEtY2xvY2tcXFwiPjwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtZ3JvdXBcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtdW5pdFxcXCIgaXM9XFxcInVpLXRleHRcXFwiIGRhdGEtdW5pdD1cXFwic1xcXCI+e3RoaXMuc2NvcGUuZGF0YS5kdXJhdGlvbi52YWx1ZX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMjVcXFwiIG1pbj1cXFwiMFxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIGlzPVxcXCJ1aS1pbnB1dFxcXCIgYmluZDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLmR1cmF0aW9uLnZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIkRlbGF5XFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiBmYSBmYS1ob3VyZ2xhc3MtaGFsZlxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC1ncm91cFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC11bml0XFxcIiBpcz1cXFwidWktdGV4dFxcXCIgZGF0YS11bml0PVxcXCJzXFxcIj57dGhpcy5zY29wZS5kYXRhLmRlbGF5LnZhbHVlfTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgc3RlcD1cXFwiMC4yNVxcXCIgbWluPVxcXCIwXFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBiaW5kOm1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGEuZGVsYXkudmFsdWVcXFwiIC8+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2MtZmllbGQtZ3JvdXBcXFwiIGlzPVxcXCJ1aS1jb21wb25lbnRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2MtZmllbGQtY29sdW1uXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNjLWlucHV0XFxcIiB0aXRsZT1cXFwiRWFzaW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhIGZhLWJlemllci1jdXJ2ZVxcXCI+PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpcz1cXFwidWktc2VsZWN0XFxcIiBzZXQ6cHJvdmlkZXI9XFxcInRoaXMuc2NvcGUuZGF0YS5lYXNpbmdQcmVzZXRzXFxcIiBiaW5kOnZhbHVlPVxcXCJ0aGlzLnNjb3BlLmRhdGEuZWFzaW5nUHJlc2V0cy5zZWxlY3RlZEl0ZW0udmFsdWVcXFwiPjwvc2VsZWN0PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIkJlemllciBwb2ludDEueFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+WDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMDFcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS5jdWJpY0JlemllclBvaW50cy5wMS54LnZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIkJlemllciBwb2ludDEueVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+WTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMDFcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS5jdWJpY0JlemllclBvaW50cy5wMS55LnZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2MtZmllbGRcXFwiIHRpdGxlPVxcXCJQb2ludDIueVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIkJlemllciBwb2ludDIueFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+WDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMDFcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS5jdWJpY0JlemllclBvaW50cy5wMi54LnZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIkJlemllciBwb2ludDIueVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+WTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMDFcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS5jdWJpY0JlemllclBvaW50cy5wMi55LnZhbHVlXFxcIiAvPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGlzPVxcXCJ1aS1jb21wb25lbnRcXFwiIGNsYXNzPVxcXCJlYXNpbmctZ3JhcGgtY29udGFpbmVyXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBpcz1cXFwiZWFzaW5nLWdyYXBoXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPHN2ZyBjbGFzcz1cXFwiY3VydmVcXFwiIHg9XFxcIjBweFxcXCIgeT1cXFwiMHB4XFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAwIDIwMFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwb2x5bGluZSBjbGFzcz1cXFwianNcXFwiIGlzPVxcXCJlYXNpbmctZ3JhcGgtY3VydmVcXFwiIHNldDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLmN1YmljQmV6aWVyUG9pbnRzLmRlYnVnRWFzaW5nXFxcIiBwb2ludHM9XFxcIlxcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBvaW50cyBqc1xcXCIgaXM9XFxcImVhc2luZy1ncmFwaC1wb2ludHNcXFwiIHNldDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLmN1YmljQmV6aWVyUG9pbnRzLmRlYnVnRWFzaW5nXFxcIj48L2Rpdj4gLS0+XFxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVxcXCJjdXJ2ZVxcXCIgeD1cXFwiMHB4XFxcIiB5PVxcXCIwcHhcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMDAgMjAwXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvbHlsaW5lIGlzPVxcXCJlYXNpbmctZ3JhcGgtY3VydmVcXFwiIHNldDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLmN1YmljQmV6aWVyUG9pbnRzLnZhbHVlXFxcIiBwb2ludHM9XFxcIlxcXCI+PC9wb2x5bGluZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInBvaW50c1xcXCIgaXM9XFxcImVhc2luZy1ncmFwaC1wb2ludHNcXFwiIHNldDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLmN1YmljQmV6aWVyUG9pbnRzLnZhbHVlXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaXM9XFxcImNvbnRyb2wtcG9pbnQtbGluZXNcXFwiIGlzPVxcXCJ1aS1saXN0XFxcIiBzZXQ6cHJvdmlkZXI9XFxcInRoaXMuc2NvcGUuZGF0YS5jdWJpY0JlemllclBvaW50cy5jb250cm9sUG9pbnRzTGluZXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpcz1cXFwiY29udHJvbC1wb2ludC1saW5lXFxcIiBzZXQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YVxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbC1wb2ludHNcXFwiIGlzPVxcXCJlYXNpbmctZ3JhcGgtY29udHJvbC1wb2ludHNcXFwiIHNldDpwcm92aWRlcj1cXFwidGhpcy5zY29wZS5kYXRhLmN1YmljQmV6aWVyUG9pbnRzLmNvbnRyb2xQb2ludHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbC1wb2ludFxcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCIgc2V0Om1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGFcXFwiIHN0eWxlPVxcXCJsZWZ0OmNhbGMoe3RoaXMuc2NvcGUuZGF0YS54LnZhbHVlfSAqIDEwMCUpOyB0b3A6Y2FsYygxMDAlIC0ge3RoaXMuc2NvcGUuZGF0YS55LnZhbHVlfSAqIDEwMCUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzaGFwZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInNoYXBlLWxhYmVsXFxcIiBpcz1cXFwidWktdGV4dFxcXCI+e3RoaXMuc2NvcGUuaW5kZXggKyAxfTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG48L2Rpdj5cXG5cIjsiLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4uL3RzdW5hbWkvY29tcG9uZW50cy9VSUNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgdHN1bmFtaSBmcm9tIFwiLi4vdHN1bmFtaS90c3VuYW1pXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4uL3RzdW5hbWkvZ2VvbS9Qb2ludFwiO1xuaW1wb3J0IFVJTGlzdCBmcm9tIFwiLi4vdHN1bmFtaS9jb21wb25lbnRzL1VJTGlzdFwiO1xuaW1wb3J0IERhdGEgZnJvbSBcIi4uL3RzdW5hbWkvZGF0YS9EYXRhXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgcm91bmQyLCByb3VuZDMgfSBmcm9tIFwiLi4vdHN1bmFtaS91dGlscy9udW1iZXJcIjtcbmltcG9ydCBVSUxpc3RCYXNlIGZyb20gXCIuLi90c3VuYW1pL2NvbXBvbmVudHMvVUlMaXN0QmFzZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFYXNpbmdHcmFwaCBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgRWFzaW5nR3JhcGhDb250cm9sUG9pbnRzIGV4dGVuZHMgVUlMaXN0IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cdFx0dGhpcy5kcmFnRWxlbWVudENsYXNzID0gXCJzaGFwZVwiO1xuXHR9XG5cblx0X2RyYWdFbGVtZW50U3RhcnQoKSB7XG5cdFx0c3VwZXIuX2RyYWdFbGVtZW50U3RhcnQoKTtcblx0XHRhcHAubW9kZWwuYWN0aW9ucy5zZWxlY3RlZEl0ZW0udmFsdWUucmVzZXRFYXNpbmcoKTtcblx0fVxuXG5cdF9kcmFnRWxlbWVudE1vdmUoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGxldCBwb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldmVudCk7XG5cdFx0bGV0IGRyYWdEaWZmID0gcG9pbnQuc3VidHJhY3QodGhpcy5kcmFnU3RhcnRQb2ludCk7XG5cdFx0bGV0IG9yaWdpbk9mZnNldCA9IGRyYWdEaWZmLmFkZCh0aGlzLmRyYWdFbGVtZW50U3RhcnRQb3MpO1xuXHRcdGxldCBmYWN0b3IgPSBvcmlnaW5PZmZzZXQuY2xvbmUoKTtcblx0XHRmYWN0b3IueCA9IChmYWN0b3IueCAvIHRoaXMucmVjdGFuZ2xlLndpZHRoKTtcblx0XHRmYWN0b3IueSA9IDEgLSAoZmFjdG9yLnkgLyB0aGlzLnJlY3RhbmdsZS5oZWlnaHQpO1xuXHRcdHRoaXMuZHJhZ0VsZW1lbnQuY29tcG9uZW50Lm1vZGVsLngudmFsdWUgPSBmYWN0b3IueDtcblx0XHR0aGlzLmRyYWdFbGVtZW50LmNvbXBvbmVudC5tb2RlbC55LnZhbHVlID0gZmFjdG9yLnk7XG5cdH1cblxufVxuXG5leHBvcnQgY2xhc3MgRWFzaW5nR3JhcGhDb250cm9sUG9pbnRMaW5lcyBleHRlbmRzIFVJTGlzdEJhc2Uge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMudXBkYXRlTGluZXMgPSB0aGlzLnVwZGF0ZUxpbmVzLmJpbmQodGhpcyk7XG5cdH1cblxuXG5cdGdldCBwcm92aWRlcigpIHtcblx0XHRyZXR1cm4gc3VwZXIucHJvdmlkZXI7XG5cdH1cblxuXHRzZXQgcHJvdmlkZXIodmFsdWUpIHtcblx0XHRzdXBlci5wcm92aWRlciA9IHZhbHVlO1xuXHRcdGZvcihsZXQgaSBpbiB2YWx1ZSkge1xuXHRcdFx0bGV0IHBhaXIgPSB2YWx1ZVtpXTtcblx0XHRcdGZvcihsZXQgaiBpbiBwYWlyKSB7XG5cdFx0XHRcdGxldCB2ZWMgPSBwYWlyW2pdO1xuXHRcdFx0XHR2ZWMuYWRkRXZlbnRMaXN0ZW5lcihEYXRhLkNIQU5HRSwgdGhpcy51cGRhdGVMaW5lcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0d2luZG93UmVzaXplKHdpbmRvd1NpemUpIHtcblx0XHRzdXBlci53aW5kb3dSZXNpemUod2luZG93U2l6ZSk7XG5cdFx0dGhpcy51cGRhdGVMaW5lcygpO1xuXHR9XG5cblx0dXBkYXRlTGluZXMoKSB7XG5cdFx0dGhpcy5jaGlsZHJlbi5tYXAoKGNoaWxkKSA9PiB7XG5cdFx0XHRjaGlsZC5jb21wb25lbnQudXBkYXRlTGluZSgpO1xuXHRcdH0pXG5cdH1cblxufVxuXG5cbmV4cG9ydCBjbGFzcyBFYXNpbmdHcmFwaENvbnRyb2xQb2ludExpbmUgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudCkge1xuXHRcdHN1cGVyKGVsZW1lbnQpO1xuXHRcdHRoaXMudXBkYXRlTGluZSA9IHRoaXMudXBkYXRlTGluZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0dXBkYXRlTGluZSgpIHtcblx0XHRpZighdGhpcy5tb2RlbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRsZXQgcGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG5cdFx0bGV0IHBhcmVudENvbXBvbmVudCA9IHBhcmVudC5jb21wb25lbnQ7XG5cdFx0bGV0IHBhcmVudFJlY3RhbmdsZSA9IHBhcmVudENvbXBvbmVudC5yZWN0YW5nbGU7XG5cdFx0bGV0IHBvaW50MCA9IHRoaXMubW9kZWxbMF0ucG9pbnQ7XG5cdFx0cG9pbnQwLnkgPSAxIC0gcG9pbnQwLnk7XG5cdFx0bGV0IHBvaW50MSA9IHRoaXMubW9kZWxbMV0ucG9pbnQ7XG5cdFx0cG9pbnQxLnkgPSAxIC0gcG9pbnQxLnk7XG5cdFx0bGV0IHNjYWxlID0gUG9pbnQuZGlzdGFuY2UocG9pbnQwLCBwb2ludDEpO1xuXHRcdGxldCBhbmdsZSA9IHJvdW5kMihQb2ludC5nZXRBbmdsZShwb2ludDEsIHBvaW50MCkgKiAxODAgLyBNYXRoLlBJKTtcblx0XHRsZXQgcG9zaXRpb24gPSBuZXcgUG9pbnQocG9pbnQwLnggKiBwYXJlbnRSZWN0YW5nbGUud2lkdGgsIHBvaW50MC55ICogcGFyZW50UmVjdGFuZ2xlLmhlaWdodCk7XG5cdFx0bGV0IHRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7cG9zaXRpb24ueH1weCkgdHJhbnNsYXRlWSgke3Bvc2l0aW9uLnl9cHgpIHJvdGF0ZSgke2FuZ2xlfWRlZykgc2NhbGVYKCR7c2NhbGV9KWA7XG5cdFx0dGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zZm9ybTtcblx0fVxuXG59XG5cbmV4cG9ydCBjbGFzcyBFYXNpbmdHcmFwaEN1cnZlIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcblx0XHRzdXBlcihlbGVtZW50KTtcblx0fVxuXG5cdGdldCBtb2RlbCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fbW9kZWw7XG5cdH1cblxuXHRzZXQgbW9kZWwodmFsdWUpIHtcblx0XHR0aGlzLl9tb2RlbCA9IHZhbHVlO1xuXHRcdGxldCB0b3RhbFBvaW50cyA9IDE1O1xuXHRcdGxldCBwb2ludHMgPSBbXTtcblx0XHRsZXQgcG9pbnRzU3RyaW5nID0gXCJcIjtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdG90YWxQb2ludHM7IGkrKykge1xuXHRcdFx0bGV0IHggPSBpIC8gKHRvdGFsUG9pbnRzIC0gMSk7XG5cdFx0XHRsZXQgcG9pbnQgPSBuZXcgUG9pbnQoeCwgdmFsdWUuZWFzaW5nLmVhc2UoeCwgMCwgMSwgMSkpO1xuXHRcdFx0cG9pbnRzLnB1c2gocG9pbnQpO1xuXHRcdFx0cG9pbnRzU3RyaW5nICs9IHJvdW5kMyhwb2ludC54ICogMjAwKSArIFwiLFwiICsgcm91bmQzKDIwMCAtIChwb2ludC55ICogMjAwKSkgKyBcIiBcIjtcblx0XHR9XG5cdFx0dGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcInBvaW50c1wiLCBwb2ludHNTdHJpbmcpO1xuXHR9XG5cbn1cblxuZXhwb3J0IGNsYXNzIEVhc2luZ0dyYXBoUG9pbnRzIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcblx0XHRzdXBlcihlbGVtZW50KTtcblx0fVxuXG5cdGdldCBtb2RlbCgpIHtcblx0XHRyZXR1cm4gc3VwZXIubW9kZWw7XG5cdH1cblxuXHRzZXQgbW9kZWwodmFsdWUpIHtcblx0XHRzdXBlci5tb2RlbCA9IHZhbHVlO1xuXHRcdHRoaXMuZWxlbWVudC5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGxldCB0b3RhbFBvaW50cyA9IDE1O1xuXHRcdGxldCBwb2ludHMgPSBbXTtcblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgdG90YWxQb2ludHM7IGkrKykge1xuXHRcdFx0bGV0IHggPSBpIC8gKHRvdGFsUG9pbnRzIC0gMSk7XG5cdFx0XHRsZXQgcG9pbnQgPSBuZXcgUG9pbnQoeCwgdmFsdWUuZWFzaW5nLmVhc2UoeCwgMCwgMSwgMSkpO1xuXHRcdFx0cG9pbnRzLnB1c2gocG9pbnQpO1xuXHRcdH1cblx0XHRmb3IobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsZXQgcG9zaXRpb24gPSBwb2ludHNbaV07XG5cdFx0XHRsZXQgcG9pbnQgPSB0c3VuYW1pLmltcG9ydFRlbXBsYXRlKFwiPHBvaW50PjwvcG9pbnQ+XCIpO1xuXHRcdFx0cG9pbnQuc3R5bGUubGVmdCA9IHBvc2l0aW9uLnggKiAxMDAgKyBcIiVcIjtcblx0XHRcdHBvaW50LnN0eWxlLnRvcCA9IDEwMCAtIChwb3NpdGlvbi55ICogMTAwKSArIFwiJVwiO1xuXHRcdFx0dGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHBvaW50KTtcblx0XHR9XG5cdH1cblxufVxuXG50c3VuYW1pLmRlZmluZShcImVhc2luZy1ncmFwaC1jb250cm9sLXBvaW50c1wiLCBFYXNpbmdHcmFwaENvbnRyb2xQb2ludHMpO1xudHN1bmFtaS5kZWZpbmUoXCJjb250cm9sLXBvaW50LWxpbmVzXCIsIEVhc2luZ0dyYXBoQ29udHJvbFBvaW50TGluZXMpO1xudHN1bmFtaS5kZWZpbmUoXCJjb250cm9sLXBvaW50LWxpbmVcIiwgRWFzaW5nR3JhcGhDb250cm9sUG9pbnRMaW5lKTtcbnRzdW5hbWkuZGVmaW5lKFwiZWFzaW5nLWdyYXBoLWN1cnZlXCIsIEVhc2luZ0dyYXBoQ3VydmUpO1xudHN1bmFtaS5kZWZpbmUoXCJlYXNpbmctZ3JhcGgtcG9pbnRzXCIsIEVhc2luZ0dyYXBoUG9pbnRzKTtcblxuXG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4uL3RzdW5hbWkvY29tcG9uZW50cy9VSUNvbXBvbmVudFwiO1xuaW1wb3J0IGVhc2luZ1RlbXBsYXRlIGZyb20gXCIuLi8uLi90ZW1wbGF0ZXMvZWFzaW5nLmh0bWxcIlxuaW1wb3J0ICogYXMgdHN1bmFtaSBmcm9tIFwiLi4vdHN1bmFtaS90c3VuYW1pXCI7XG5pbXBvcnQgRWFzaW5nR3JhcGggZnJvbSBcIi4vRWFzaW5nR3JhcGhcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uVHdlZW5WaWV3IGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcihlbGVtZW50KTtcbiAgICB9XG5cbiAgICBnZXQgc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zY29wZTtcbiAgICB9XG5cbiAgICBzZXQgc2NvcGUodmFsdWUpIHtcbiAgICAgICAgc3VwZXIuc2NvcGUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5lYXNpbmcgPSB0c3VuYW1pLmltcG9ydFRlbXBsYXRlKGVhc2luZ1RlbXBsYXRlLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGhpcy5lYXNpbmcpO1xuICAgfVxuXG59XG5cbnRzdW5hbWkuZGVmaW5lKFwiZWFzaW5nLWdyYXBoXCIsIEVhc2luZ0dyYXBoKTtcbiIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwiLi4vdHN1bmFtaS9jb21wb25lbnRzL1VJQ29tcG9uZW50XCI7XG5pbXBvcnQgKiBhcyB0c3VuYW1pIGZyb20gXCIuLi90c3VuYW1pL3RzdW5hbWlcIjtcbmltcG9ydCBBY3Rpb25Ud2VlblZpZXcgZnJvbSBcIi4vQWN0aW9uVHdlZW5WaWV3XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvblZpZXcgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudCkge1xuXHRcdHN1cGVyKGVsZW1lbnQpO1xuXHR9XG5cbn1cblxudHN1bmFtaS5kZWZpbmUoXCJhY3Rpb24tdHdlZW5cIiwgQWN0aW9uVHdlZW5WaWV3KTtcbiIsImltcG9ydCBVSUxpc3QgZnJvbSBcIi4uL3RzdW5hbWkvY29tcG9uZW50cy9VSUxpc3RcIjtcbmltcG9ydCAqIGFzIHRzdW5hbWkgZnJvbSBcIi4uL3RzdW5hbWkvdHN1bmFtaVwiO1xuaW1wb3J0IEFjdGlvblZpZXcgZnJvbSBcIi4vQWN0aW9uVmlld1wiO1xuaW1wb3J0IHthcHB9IGZyb20gXCIuLi9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbnNWaWV3IGV4dGVuZHMgVUlMaXN0IHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cdFx0dGhpcy5zZWxlY3RJdGVtT25Nb3VzZURvd24gPSB0cnVlO1xuXHR9XG5cblx0X3Byb3ZpZGVyQWRkKGV2ZW50KSB7XG5cdFx0bGV0IGVsZW1lbnRzID0gc3VwZXIuX3Byb3ZpZGVyQWRkKGV2ZW50KTtcblx0XHRsZXQgZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudEJ5TW9kZWwoZWxlbWVudHNbMF0pO1xuXHRcdHRoaXMuc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIDAuNSk7XG5cdFx0cmV0dXJuIGVsZW1lbnRzO1xuXHR9XG5cblx0X2RyYWdFbmQoZXZlbnQpIHtcblx0XHRsZXQgd2FzRHJhZ2dlZCA9IHRoaXMuaXNEcmFnZ2VkO1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5fZHJhZ0VuZChldmVudCk7XG5cdFx0aWYgKHdhc0RyYWdnZWQpIGFwcC5tb2RlbC5zYXZlKCk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG59XG5cbnRzdW5hbWkuZGVmaW5lKFwic2MtYWN0aW9uLXZpZXdcIiwgQWN0aW9uVmlldyk7XG4iLCJleHBvcnQgZGVmYXVsdCBcIjxkaXYgY2xhc3M9XFxcInNjLWRlZmF1bHRcXFwiIGlzPVxcXCJzY3JvbGwtY2FwdHVyZVxcXCIgZGF0YS10aGVtZS1saWdodD1cXFwie3RoaXMuc2NvcGUuc2V0dGluZ3MuaXNDb2xvclRoZW1lTGlnaHQudmFsdWV9XFxcIiBzZXQ6cG9zaXRpb249XFxcInRoaXMuc2NvcGUuc2V0dGluZ3MucG9zaXRpb25cXFwiIHN0eWxlPVxcXCJyaWdodDp7dGhpcy5zY29wZS5zZXR0aW5ncy5wb3NpdGlvbi54LnZhbHVlfXB4OyB0b3A6e3RoaXMuc2NvcGUuc2V0dGluZ3MucG9zaXRpb24ueS52YWx1ZX1weDtcXFwiPlxcblxcdDwhLS0gPHVsIGlzPVxcXCJ1aS1saXN0XFxcIiBzZXQ6cHJvdmlkZXI9XFxcInRoaXMuc2NvcGUuYWN0aW9uc1xcXCI+XFxuXFx0XFx0PHRlbXBsYXRlPlxcblxcdFxcdFxcdDxsYWJlbD5cXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcInRlc3QtcmFkaW9cXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIHZhbHVlPVxcXCJ7dGhpcy5zY29wZS5kYXRhLm5hbWUudmFsdWV9XFxcIiBuYW1lPVxcXCJvcHRpb25zMVxcXCIgYmluZDptb2RlbD1cXFwidGhpcy5zY29wZS5yb290U2NvcGUuc2VsZWN0ZWRBY3Rpb25cXFwiIC8+XFxuXFx0XFx0XFx0XFx0PHNwYW4gaXM9XFxcInVpLXRleHRcXFwiPnt0aGlzLnNjb3BlLmRhdGEubmFtZS52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0PC9sYWJlbD5cXG5cXHRcXHQ8L3RlbXBsYXRlPlxcblxcdDwvdWw+XFxuXFx0PHVsIGlzPVxcXCJ1aS1saXN0XFxcIiBzZXQ6cHJvdmlkZXI9XFxcInRoaXMuc2NvcGUuYWN0aW9uc1xcXCI+XFxuXFx0XFx0PHRlbXBsYXRlPlxcblxcdFxcdFxcdDxsYWJlbD5cXG5cXHRcXHRcXHRcXHQ8aW5wdXQgY2xhc3M9XFxcInRlc3QtcmFkaW9cXFwiIHR5cGU9XFxcInJhZGlvXFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIiB2YWx1ZT1cXFwie3RoaXMuc2NvcGUuZGF0YS5uYW1lLnZhbHVlfVxcXCIgbmFtZT1cXFwib3B0aW9uczJcXFwiIHNldDpjaGVja2VkPVxcXCIodGhpcy5zY29wZS5yb290U2NvcGUuc2VsZWN0ZWRBY3Rpb24gPT0gdGhpcy5lbGVtZW50LnZhbHVlKTtcXFwiIG9uOmNoYW5nZT1cXFwidGhpcy5zY29wZS5yb290U2NvcGUuc2VsZWN0ZWRBY3Rpb24gPSB0aGlzLmVsZW1lbnQudmFsdWVcXFwiIC8+XFxuXFx0XFx0XFx0XFx0PHNwYW4gaXM9XFxcInVpLXRleHRcXFwiPnt0aGlzLnNjb3BlLmRhdGEubmFtZS52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0PC9sYWJlbD5cXG5cXHRcXHQ8L3RlbXBsYXRlPlxcblxcdDwvdWw+XFxuXFx0PHNlbGVjdCBpcz1cXFwidWktc2VsZWN0XFxcIiBzZXQ6cHJvdmlkZXI9XFxcInRoaXMuc2NvcGUuYWN0aW9uc1xcXCIgYmluZDp2YWx1ZT1cXFwidGhpcy5zY29wZS5zZWxlY3RlZEFjdGlvblxcXCI+XFxuXFx0XFx0PHRlbXBsYXRlPlxcblxcdFxcdFxcdDxvcHRpb24gaXM9XFxcInVpLXRleHRcXFwiIHZhbHVlPVxcXCJ7dGhpcy5zY29wZS5kYXRhLm5hbWUudmFsdWV9XFxcIj57dGhpcy5zY29wZS5kYXRhLm5hbWUudmFsdWV9PC9vcHRpb24+XFxuXFx0XFx0PC90ZW1wbGF0ZT5cXG5cXHQ8L3NlbGVjdD4gLS0+XFxuXFx0PGRpdiBjbGFzcz1cXFwic2Mtd2luZG93IHNjLXdpbmRvdy1tYWluXFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy10aXRsZVxcXCI+XFxuXFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYnNcXFwiPlxcblxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1kcmFnLWFyZWFcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFiIHNjLXRpdGxlLXRhYlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWRyYWctYXJlYVxcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1sYWJlbFxcXCI+U2Nyb2xsIENhcHR1cmU8L3NwYW4+XFxuXFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFic1xcXCI+XFxuXFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWRyYWctYXJlYVxcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdDxidXR0b24gaXM9XFxcInJvdXRlci1idXR0b25cXFwiIGRhdGEtcGF0aD1cXFwiY2xvc2VkXFxcIiB0aXRsZT1cXFwiQ2xvc2VcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhcyBmYS10aW1lcy1jaXJjbGVcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXG5cXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdDwvZGl2PlxcblxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXdpbmRvdy1jb250ZW50XFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZHNcXFwiIGlzPVxcXCJ1aS1jb21wb25lbnRcXFwiPlxcblxcdFxcdFxcdFxcdDxkaXYgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2Mtd2luZG93IHNjLXdpbmRvdy1zZWN0aW9uc1xcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtdGl0bGVcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy10YWJzXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFiXFxcIiBkYXRhLWlkPVxcXCJzY2VuYXJpb1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBpcz1cXFwicm91dGVyLWJ1dHRvblxcXCIgZGF0YS1wYXRoPVxcXCJzY3JvbGwtY2FwdHVyZS9zY2VuYXJpb1xcXCIgdGl0bGU9XFxcIlRpbWVsaW5lXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8IS0tIDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhcyBmYS1zbGlkZXJzLWhcXFwiPjwvc3Bhbj4gLS0+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLXN0cmVhbVxcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1sYWJlbFxcXCI+VGltZWxpbmU8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwhLS0gPHNwYW4gY2xhc3M9XFxcInNjLXRhYlxcXCIgZGF0YS1pZD1cXFwicGxheVxcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBpcz1cXFwicm91dGVyLWJ1dHRvblxcXCIgZGF0YS1wYXRoPVxcXCJwbGF5XFxcIiB0aXRsZT1cXFwiUGxheVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLXBsYXlcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtbGFiZWxcXFwiPlBsYXk8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPiAtLT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFiXFxcIiBkYXRhLWlkPVxcXCJ2aWRlb1xcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBpcz1cXFwicm91dGVyLWJ1dHRvblxcXCIgZGF0YS1wYXRoPVxcXCJyZWNvcmRcXFwiIHRpdGxlPVxcXCJDYXB0dXJlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiBmYXMgZmEtdmlkZW9cXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtbGFiZWxcXFwiPkNhcHR1cmU8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFic1xcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYlxcXCIgZGF0YS1pZD1cXFwic2V0dGluZ3NcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gaXM9XFxcInJvdXRlci1idXR0b25cXFwiIGRhdGEtcGF0aD1cXFwic2Nyb2xsLWNhcHR1cmUvc2V0dGluZ3NcXFwiIHRpdGxlPVxcXCJTZXR0aW5nc1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLWNvZ3NcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8IS0tIDxzcGFuIGNsYXNzPVxcXCJzYy1sYWJlbFxcXCI+U2V0dGluZ3M8L3NwYW4+IC0tPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2Mtd2luZG93LWNvbnRlbnRcXFwiIGlzPVxcXCJzYy13aW5kb3ctY29udGVudC1tYWluXFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1zZWN0aW9uIHNjLWZpZWxkc1xcXCIgaXM9XFxcInNjLXNjZW5hcmlvXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGlzPVxcXCJzYy1hY3Rpb25zLXZpZXdcXFwiIGRhdGEtYWN0aW9ucy1sZW5ndGg9XFxcInt0aGlzLnNjb3BlLmFjdGlvbnMubGVuZ3RoLnZhbHVlfVxcXCIgc2V0OnByb3ZpZGVyPVxcXCJ0aGlzLnNjb3BlLmFjdGlvbnNcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZW1wbGF0ZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy13aW5kb3cgdWktbGlzdC1lbGVtZW50XFxcIiBpcz1cXFwic2MtYWN0aW9uLXZpZXdcXFwiIGRhdGEtdHlwZT1cXFwie3RoaXMuc2NvcGUuZGF0YS50eXBlfVxcXCIgc2V0Om1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGFcXFwiIGRhdGEtc2VsZWN0ZWQ9XFxcInt0aGlzLnNjb3BlLmRhdGEuaXNTZWxlY3RlZEl0ZW0udmFsdWV9XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy10aXRsZVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYnNcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWRyYWctYXJlYSB1aS1saXN0LWRyYWctYXJlYVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYiBzYy10aXRsZS10YWJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInVpLWxpc3QtZHJhZy1hcmVhXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFiLXdyYXBwZXJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIHt0aGlzLnNjb3BlLmRhdGEuaWNvbi52YWx1ZX1cXFwiIGlzPVxcXCJ1aS1jb21wb25lbnRcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtbGFiZWxcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCBzaXplPVxcXCJ7dGhpcy5zY29wZS5kYXRhLm5hbWUubGVuZ3RoLnZhbHVlfVxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBiaW5kOm1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGEubmFtZS52YWx1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYnNcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy10YWJcXFwiIGRhdGEtdmlzaWJsZT1cXFwie3RoaXMuc2NvcGUuZGF0YS5pc0NhcHR1cmVhYmxlLnZhbHVlfVxcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwidWktbGlzdC1kcmFnLWFyZWFcXFwiPjwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcInNjLXNldC1idXR0b25cXFwiIGlzPVxcXCJ1aS1idXR0b25cXFwiIGRhdGEtaXMtY2FwdHVyaW5nPVxcXCJ7dGhpcy5zY29wZS5kYXRhLmlzQ2FwdHVyaW5nLnZhbHVlfVxcXCIgc2V0Om1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGFcXFwiIG9uOmNsaWNrPVxcXCJ0aGlzLm1vZGVsLnJlQ2FwdHVyZSgpXFxcIiB0aXRsZT1cXFwiU2V0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiBmYXMgZmEtYnVsbHNleWVcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2J1dHRvbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYlxcXCIgZGF0YS12aXNpYmxlPVxcXCJ7dGhpcy5zY29wZS5kYXRhLmlzVGVzdGFibGUudmFsdWV9XFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJ1aS1saXN0LWRyYWctYXJlYVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGJ1dHRvbiBjbGFzcz1cXFwic2MtdGVzdC1idXR0b25cXFwiIGlzPVxcXCJ1aS1idXR0b25cXFwiIHNldDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhXFxcIiBvbjpjbGljaz1cXFwidGhpcy5tb2RlbC5wbGF5KClcXFwiIGRhdGEtaXMtcGxheWluZz1cXFwie3RoaXMuc2NvcGUuZGF0YS5pc1BsYXlpbmcudmFsdWV9XFxcIiB0aXRsZT1cXFwiUGxheVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLXBsYXktY2lyY2xlXFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy10YWJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInVpLWxpc3QtZHJhZy1hcmVhXFxcIj48L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGNsYXNzPVxcXCJzYy10cmFzaC1idXR0b25cXFwiIGlzPVxcXCJ1aS1idXR0b25cXFwiIHNldDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhXFxcIiBvbjpjbGljaz1cXFwidGhpcy5zY29wZS5yb290U2NvcGUuYWN0aW9ucy5yZW1vdmVBY3Rpb24odGhpcy5tb2RlbCk7XFxcIiB0aXRsZT1cXFwiRGVsZXRlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiBmYXMgZmEtdHJhc2gtYWx0XFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy13aW5kb3ctY29udGVudFxcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtZmllbGRzXFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1hY3Rpb24tZmllbGRzXFxcIiBpcz1cXFwidWktbGlzdFxcXCIgc2V0OnByb3ZpZGVyPVxcXCJ0aGlzLnNjb3BlLmRhdGEuYXJyYXlcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZW1wbGF0ZSBkYXRhLXR5cGU9XFxcIkFjdGlvblNjcm9sbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtYWN0aW9uIHNjLWZpZWxkcy1saXN0XFxcIiBpcz1cXFwiYWN0aW9uLXR3ZWVuXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0XFxcIiB0aXRsZT1cXFwiU2Nyb2xsTGVmdFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb25cXFwiPlg8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LWdyb3VwXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtdW5pdFxcXCIgaXM9XFxcInVpLXRleHRcXFwiIGRhdGEtdW5pdD1cXFwicHhcXFwiPnt0aGlzLnNjb3BlLmRhdGEudW5pdFgudmFsdWV9PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBtaW49XFxcIjBcXFwiIGlzPVxcXCJ1aS1pbnB1dFxcXCIgYmluZDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLnVuaXRYLnZhbHVlXFxcIiBvbjpmb2N1cz1cXFwidGhpcy5zY29wZS5kYXRhLmRvU2Nyb2xsKClcXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXRcXFwiIHRpdGxlPVxcXCJTY3JvbGxUb3BcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uXFxcIj5ZPC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC1ncm91cFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LXVuaXRcXFwiIGlzPVxcXCJ1aS10ZXh0XFxcIiBkYXRhLXVuaXQ9XFxcInB4XFxcIj57dGhpcy5zY29wZS5kYXRhLnVuaXRZLnZhbHVlfTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgbWluPVxcXCIwXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS51bml0WS52YWx1ZVxcXCIgb246Zm9jdXM9XFxcInRoaXMuc2NvcGUuZGF0YS5kb1Njcm9sbCgpXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtZmllbGRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIlRhcmdldCBTZWxlY3RvclxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFyIGZhLWRvdC1jaXJjbGVcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgcGxhY2Vob2xkZXI9XFxcIndpbmRvd1xcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBiaW5kOm1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGEudGFyZ2V0LnZhbHVlXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3RlbXBsYXRlPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZW1wbGF0ZSBkYXRhLXR5cGU9XFxcIkFjdGlvblN3aXBlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1hY3Rpb24gc2MtZmllbGRzLWxpc3RcXFwiIGlzPVxcXCJhY3Rpb24tdHdlZW5cXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXBvaW50cy1saXN0IHNjLWZpZWxkLWNvbHVtblxcXCIgaXM9XFxcInVpLWxpc3RcXFwiIHNldDpwcm92aWRlcj1cXFwidGhpcy5zY29wZS5kYXRhLnBvaW50c1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRlbXBsYXRlPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXRcXFwiIHRpdGxlPVxcXCJQYWdlWFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb25cXFwiPlg8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LWdyb3VwXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtdW5pdFxcXCIgaXM9XFxcInVpLXRleHRcXFwiIGRhdGEtdW5pdD1cXFwicHhcXFwiPnt0aGlzLnNjb3BlLmRhdGEueC52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgbWluPVxcXCIwXFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgc3RlcD1cXFwiMVxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBiaW5kOm1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGEueC52YWx1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIlBhZ2VZXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+WTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC11bml0XFxcIiBpcz1cXFwidWktdGV4dFxcXCIgZGF0YS11bml0PVxcXCJweFxcXCI+e3RoaXMuc2NvcGUuZGF0YS55LnZhbHVlfTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBtaW49XFxcIjBcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBzdGVwPVxcXCIxXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS55LnZhbHVlXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC90ZW1wbGF0ZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3RlbXBsYXRlPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDx0ZW1wbGF0ZSBkYXRhLXR5cGU9XFxcIkFjdGlvbk1vdXNlRXZlbnRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWFjdGlvbiBzYy1maWVsZHMtbGlzdFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtZmllbGRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb25cXFwiPlg8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LWdyb3VwXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtdW5pdFxcXCIgaXM9XFxcInVpLXRleHRcXFwiIGRhdGEtdW5pdD1cXFwicHhcXFwiPnt0aGlzLnNjb3BlLmRhdGEueC52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgc3RlcD1cXFwiMVxcXCIgbWluPVxcXCIwXFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgdGl0bGU9XFxcIlBhZ2VYXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS54LnZhbHVlXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+WTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC11bml0XFxcIiBpcz1cXFwidWktdGV4dFxcXCIgZGF0YS11bml0PVxcXCJweFxcXCI+e3RoaXMuc2NvcGUuZGF0YS55LnZhbHVlfTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBzdGVwPVxcXCIxXFxcIiBtaW49XFxcIjBcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiB0aXRsZT1cXFwiUGFnZVlcXFwiIGlzPVxcXCJ1aS1pbnB1dFxcXCIgYmluZDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLnkudmFsdWVcXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0IHNjLXNlbGVjdFxcXCIgdGl0bGU9XFxcIk1vdXNlRXZlbnQgVHlwZVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLW1vdXNlLXBvaW50ZXJcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c2VsZWN0IGlzPVxcXCJ1aS1zZWxlY3RcXFwiIHNldDpwcm92aWRlcj1cXFwidGhpcy5zY29wZS5kYXRhLmV2ZW50VHlwZXNcXFwiIGJpbmQ6dmFsdWU9XFxcInRoaXMuc2NvcGUuZGF0YS5ldmVudFR5cGVzLnNlbGVjdGVkSXRlbS52YWx1ZVxcXCI+PC9zZWxlY3Q+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dFxcXCIgdGl0bGU9XFxcIkRlbGF5XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiBmYXMgZmEtaG91cmdsYXNzLWhhbGZcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC11bml0XFxcIiBpcz1cXFwidWktdGV4dFxcXCIgZGF0YS11bml0PVxcXCJzXFxcIj57dGhpcy5zY29wZS5kYXRhLmRlbGF5LnZhbHVlfTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBzdGVwPVxcXCIwLjI1XFxcIiBtaW49XFxcIjBcXFwiIHBsYWNlaG9sZGVyPVxcXCIwXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS5kZWxheS52YWx1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvdGVtcGxhdGU+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRlbXBsYXRlIGRhdGEtdHlwZT1cXFwiQWN0aW9uV2FpdFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtYWN0aW9uIHNjLWZpZWxkcy1saXN0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0XFxcIiB0aXRsZT1cXFwiRHVyYXRpb25cXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhcyBmYS1jbG9ja1xcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC1ncm91cFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LXVuaXRcXFwiIGlzPVxcXCJ1aS10ZXh0XFxcIiBkYXRhLXVuaXQ9XFxcInNcXFwiPnt0aGlzLnNjb3BlLmRhdGEuZGVsYXkudmFsdWV9PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJudW1iZXJcXFwiIHN0ZXA9XFxcIjAuMjVcXFwiIG1pbj1cXFwiMFxcXCIgcGxhY2Vob2xkZXI9XFxcIjBcXFwiIGlzPVxcXCJ1aS1pbnB1dFxcXCIgYmluZDptb2RlbD1cXFwidGhpcy5zY29wZS5kYXRhLmRlbGF5LnZhbHVlXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXNwYWNlXFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC90ZW1wbGF0ZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8dGVtcGxhdGUgZGF0YS10eXBlPVxcXCJBY3Rpb25FdmFsXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1hY3Rpb24gc2MtZmllbGRzLWxpc3RcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8dGV4dGFyZWEgcm93cz1cXFwiNVxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBzZXQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuZGF0YS5jb2RlXFxcIj48L3RleHRhcmVhPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXRcXFwiIHRpdGxlPVxcXCJEZWxheVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLWhvdXJnbGFzcy1oYWxmXFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LWdyb3VwXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtdW5pdFxcXCIgaXM9XFxcInVpLXRleHRcXFwiIGRhdGEtdW5pdD1cXFwic1xcXCI+e3RoaXMuc2NvcGUuZGF0YS5kZWxheS52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlucHV0IHR5cGU9XFxcIm51bWJlclxcXCIgc3RlcD1cXFwiMC4yNVxcXCIgbWluPVxcXCIwXFxcIiBwbGFjZWhvbGRlcj1cXFwiMFxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBiaW5kOm1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGEuZGVsYXkudmFsdWVcXFwiIC8+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2Mtc3BhY2VcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3RlbXBsYXRlPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvdGVtcGxhdGU+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtYWN0aW9uLWJ1dHRvbnNcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWJ1dHRvbnNcXFwiIGlzPVxcXCJ1aS1saXN0XFxcIiBzZXQ6cHJvdmlkZXI9XFxcInRoaXMuc2NvcGUuYWN0aW9ucy50eXBlc1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRlbXBsYXRlPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxidXR0b24gY2xhc3M9XFxcInNjLWFjdGlvbi1idXR0b25cXFwiIGRhdGEtdHlwZT1cXFwie3RoaXMuc2NvcGUuZGF0YS50eXBlfVxcXCIgc2V0Om1vZGVsPVxcXCJ0aGlzLnNjb3BlLmRhdGFcXFwiIGlzPVxcXCJ1aS1idXR0b25cXFwiIHRpdGxlPVxcXCJ7dGhpcy5zY29wZS5kYXRhLmRlc2NyaXB0aW9uLnZhbHVlfVxcXCIgb246Y2xpY2s9XFxcInRoaXMuc2NvcGUucm9vdFNjb3BlLmFjdGlvbnMuY2xvbmVBY3Rpb24odGhpcy5tb2RlbCk7XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiB7dGhpcy5zY29wZS5kYXRhLmljb24udmFsdWV9XFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9idXR0b24+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC90ZW1wbGF0ZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1idXR0b25zXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8YnV0dG9uIGlzPVxcXCJ1aS1idXR0b25cXFwiIG9uOmNsaWNrPVxcXCJ0aGlzLnNjb3BlLmNsZWFyQWN0aW9ucygpXFxcIiB0aXRsZT1cXFwiRGVsZXRlIGFsbFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLXRyYXNoLWFsdFxcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvYnV0dG9uPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXNlY3Rpb24gc2MtZmllbGRzXFxcIiBpcz1cXFwic2MtdmlkZW9cXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGlmcmFtZT48L2lmcmFtZT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1zZWN0aW9uIHNjLWZpZWxkc1xcXCIgaXM9XFxcInNjLXNldHRpbmdzXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXdpbmRvd1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtdGl0bGVcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy10YWJzXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFiIHNjLXRpdGxlLXRhYlxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzIGZhLWFkanVzdFxcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1sYWJlbFxcXCI+Q29sb3IgdGhlbWU8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFic1xcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXdpbmRvdy1jb250ZW50XFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZHNcXFwiIGlzPVxcXCJ1aS1jb21wb25lbnRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8IS0tIDxzcGFuIGNsYXNzPVxcXCJzYy1sYWJlbFxcXCI+VGhlbWU6PC9zcGFuPiAtLT5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8IS0tIDxkaXYgY2xhc3M9XFxcInNjLWNvbG9yLXRoZW1lc1xcXCIgaXM9XFxcInVpLWxpc3RcXFwiIHNldDpwcm92aWRlcj1cXFwidGhpcy5zY29wZS5zZXR0aW5ncy5jb2xvclRoZW1lc1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHRlbXBsYXRlPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxsYWJlbCBjbGFzcz1cXFwic2MtcmFkaW9cXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxpbnB1dCB0eXBlPVxcXCJyYWRpb1xcXCIgbmFtZT1cXFwiY29sb3ItdGhlbWVcXFwiIHZhbHVlPVxcXCJ7dGhpcy5zY29wZS5kYXRhfVxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBzZXQ6bW9kZWw9XFxcInRoaXMuc2NvcGUucGFyZW50U2NvcGUuc2V0dGluZ3MuY29sb3JUaGVtZXMuc2VsZWN0ZWRJdGVtXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhcyBmYS1jaGVja1xcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGlzPVxcXCJ1aS10ZXh0XFxcIj57dGhpcy5zY29wZS5kYXRhfTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2xhYmVsPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvdGVtcGxhdGU+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+IC0tPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWlucHV0IHNjLXNlbGVjdFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWljb24gZmFzXFxcIiBkYXRhLXRoZW1lPVxcXCJ7dGhpcy5zY29wZS5zZXR0aW5ncy5jb2xvclRoZW1lcy5zZWxlY3RlZEl0ZW0udmFsdWV9XFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNlbGVjdCBpcz1cXFwidWktc2VsZWN0XFxcIiBzZXQ6cHJvdmlkZXI9XFxcInRoaXMuc2NvcGUuc2V0dGluZ3MuY29sb3JUaGVtZXNcXFwiIGJpbmQ6dmFsdWU9XFxcInRoaXMuc2NvcGUuc2V0dGluZ3MuY29sb3JUaGVtZXMuc2VsZWN0ZWRJdGVtLnZhbHVlXFxcIj48L3NlbGVjdD5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1zcGFjZVxcXCI+PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy13aW5kb3dcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXRpdGxlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFic1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYiBzYy10aXRsZS10YWJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhciBmYS13aW5kb3ctbWF4aW1pemVcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtbGFiZWxcXFwiPldpbmRvdyBzaXplPC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYnNcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L2Rpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy13aW5kb3ctY29udGVudFxcXCIgaXM9XFxcInVpLWNvbXBvbmVudFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtZmllbGRzXFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+Vzwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC11bml0XFxcIiBpcz1cXFwidWktdGV4dFxcXCIgZGF0YS11bml0PVxcXCJweFxcXCI+e3RoaXMuc2NvcGUuc2V0dGluZ3Mud2luZG93U2l6ZS54LnZhbHVlfTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBzdGVwPVxcXCIxXFxcIiBtaW49XFxcIjM3NVxcXCIgcGxhY2Vob2xkZXI9XFxcIjM3NVxcXCIgdGl0bGU9XFxcIlBhZ2VYXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuc2V0dGluZ3Mud2luZG93U2l6ZS54LnZhbHVlXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvblxcXCI+SDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaW5wdXQtZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pbnB1dC11bml0XFxcIiBpcz1cXFwidWktdGV4dFxcXCIgZGF0YS11bml0PVxcXCJweFxcXCI+e3RoaXMuc2NvcGUuc2V0dGluZ3Mud2luZG93U2l6ZS55LnZhbHVlfTwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwibnVtYmVyXFxcIiBzdGVwPVxcXCIxXFxcIiBtaW49XFxcIjM3NVxcXCIgcGxhY2Vob2xkZXI9XFxcIjM3NVxcXCIgdGl0bGU9XFxcIlBhZ2VZXFxcIiBpcz1cXFwidWktaW5wdXRcXFwiIGJpbmQ6bW9kZWw9XFxcInRoaXMuc2NvcGUuc2V0dGluZ3Mud2luZG93U2l6ZS55LnZhbHVlXFxcIiAvPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy13aW5kb3dcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXRpdGxlXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFic1xcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLXRhYiBzYy10aXRsZS10YWJcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhcyBmYS1maWxtXFxcIj48L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWxhYmVsXFxcIj5Db2RlY3M8L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtdGFic1xcXCI+PC9zcGFuPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLXdpbmRvdy1jb250ZW50XFxcIiBpcz1cXFwidWktY29tcG9uZW50XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZHNcXFwiIGlzPVxcXCJ1aS1jb21wb25lbnRcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkLWdyb3VwXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1maWVsZFxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtaW5wdXQgc2Mtc2VsZWN0XFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c3BhbiBjbGFzcz1cXFwic2MtaWNvbiBmYXMgZmEtdmlkZW9cXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c2VsZWN0IGlzPVxcXCJ1aS1zZWxlY3RcXFwiIHNldDpwcm92aWRlcj1cXFwidGhpcy5zY29wZS5zZXR0aW5ncy52aWRlb0NvZGVjc1xcXCIgYmluZDp2YWx1ZT1cXFwidGhpcy5zY29wZS5zZXR0aW5ncy52aWRlb0NvZGVjcy5zZWxlY3RlZEl0ZW0udmFsdWVcXFwiPjwvc2VsZWN0PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIG1pbj1cXFwiMVxcXCIgbWF4PVxcXCI4XFxcIiBzdGVwPVxcXCIxXFxcIiB0aXRsZT1cXFwiQml0cmF0ZVxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBiaW5kOm1vZGVsPVxcXCJ0aGlzLnNjb3BlLnNldHRpbmdzLnZpZGVvQml0c1BlclNlY29uZC52YWx1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1zcGFjZVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LXVuaXRcXFwiIGlzPVxcXCJ1aS10ZXh0XFxcIiBkYXRhLXVuaXQ9XFxcIk1icHNcXFwiPnt0aGlzLnNjb3BlLnNldHRpbmdzLnZpZGVvQml0c1BlclNlY29uZC52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gaXM9XFxcInVpLXRleHRcXFwiPnt0aGlzLnNjb3BlLnNldHRpbmdzLnZpZGVvQml0c1BlclNlY29uZC52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwic2MtZmllbGQtZ3JvdXBcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1pbnB1dCBzYy1zZWxlY3RcXFwiPlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxzcGFuIGNsYXNzPVxcXCJzYy1pY29uIGZhcyBmYS12b2x1bWUtdXBcXFwiPjwvc3Bhbj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8c2VsZWN0IGlzPVxcXCJ1aS1zZWxlY3RcXFwiIHNldDpwcm92aWRlcj1cXFwidGhpcy5zY29wZS5zZXR0aW5ncy5hdWRpb0NvZGVjc1xcXCIgYmluZDp2YWx1ZT1cXFwidGhpcy5zY29wZS5zZXR0aW5ncy5hdWRpb0NvZGVjcy5zZWxlY3RlZEl0ZW0udmFsdWVcXFwiPjwvc2VsZWN0PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdDxkaXYgY2xhc3M9XFxcInNjLWZpZWxkXFxcIj5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8aW5wdXQgdHlwZT1cXFwicmFuZ2VcXFwiIG1pbj1cXFwiMTZcXFwiIG1heD1cXFwiMTI4XFxcIiBzdGVwPVxcXCIxNlxcXCIgaXM9XFxcInVpLWlucHV0XFxcIiBiaW5kOm1vZGVsPVxcXCJ0aGlzLnNjb3BlLnNldHRpbmdzLmF1ZGlvQml0c1BlclNlY29uZC52YWx1ZVxcXCIgLz5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJzYy1zcGFjZVxcXCI+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gY2xhc3M9XFxcInNjLWlucHV0LXVuaXRcXFwiIGlzPVxcXCJ1aS10ZXh0XFxcIiBkYXRhLXVuaXQ9XFxcImticHNcXFwiPnt0aGlzLnNjb3BlLnNldHRpbmdzLmF1ZGlvQml0c1BlclNlY29uZC52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PHNwYW4gaXM9XFxcInVpLXRleHRcXFwiPnt0aGlzLnNjb3BlLnNldHRpbmdzLmF1ZGlvQml0c1BlclNlY29uZC52YWx1ZX08L3NwYW4+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFxuXFx0XFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0PC9kaXY+XFxuXFx0XFx0XFx0XFx0PGRpdj5cXG5cXHRcXHRcXHRcXHRcXHQ8c2MtY3JlZGl0cz48YSBocmVmPVxcXCJodHRwOi8vd3d3LnBhdHJpY2ttYXR0ZS5jb21cXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIj48L2E+PC9zYy1jcmVkaXRzPlxcblxcdFxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdFxcdDwvZGl2PlxcblxcdFxcdDwvZGl2PlxcblxcdDwvZGl2PlxcbjwvZGl2PlwiOyIsImltcG9ydCBVSUNvbXBvbmVudCBmcm9tIFwiLi4vdHN1bmFtaS9jb21wb25lbnRzL1VJQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vbWFpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIGV4dGVuZHMgVUlDb21wb25lbnQge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcihlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzaG93RGVsYXlDb21wbGV0ZSgpIHtcbiAgICAgICAgLy8gbGV0IHRhYiA9IGFwcC52aWV3LnNjcm9sbENhcHR1cmUuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjLXdpbmRvdy5zYy13aW5kb3ctc2VjdGlvbnMgLnNjLXRhYltkYXRhLWlkPSdcIiArIHRoaXMuc2x1ZyArIFwiJ11cIik7XG4gICAgICAgIGxldCB0YWIgPSBhcHAudmlldy5zY3JvbGxDYXB0dXJlLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYy10YWJbZGF0YS1pZD0nXCIgKyB0aGlzLnNsdWcgKyBcIiddXCIpO1xuICAgICAgICBpZiAodGFiKSB0YWIuY2xhc3NMaXN0LmFkZChcInNjLXRpdGxlLXRhYlwiKTtcbiAgICAgICAgbGV0IHByb21pc2UgPSBzdXBlci5zaG93RGVsYXlDb21wbGV0ZSgpO1xuICAgICAgICB0aGlzLndpbmRvd1Jlc2l6ZSh0aGlzLndpbmRvd1NpemUpO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBoaWRlQ29tcGxldGUoKSB7XG4gICAgICAgIGxldCB0YWIgPSBhcHAudmlldy5zY3JvbGxDYXB0dXJlLmVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5zYy10YWJbZGF0YS1pZD0nXCIgKyB0aGlzLnNsdWcgKyBcIiddXCIpO1xuICAgICAgICBpZiAodGFiKSB0YWIuY2xhc3NMaXN0LnJlbW92ZShcInNjLXRpdGxlLXRhYlwiKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGVDb21wbGV0ZSgpO1xuICAgIH1cbiAgICBcbn0iLCJpbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi9TZWN0aW9uXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vbWFpblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uU2V0dGluZ3MgZXh0ZW5kcyBTZWN0aW9uIHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgfVxuXG4gICAgc2hvd0RlbGF5Q29tcGxldGUoKSB7XG4gICAgICAgIGxldCBwcm9taXNlID0gc3VwZXIuc2hvd0RlbGF5Q29tcGxldGUoKTtcblxuICAgICAgICB0aGlzLnJvdXRlci5yZWRpcmVjdChcImRlZmF1bHRcIiwgKCkgPT4geyByZXR1cm4gdGhpcy5wYXRoIH0pO1xuXG4gICAgICAgIGFwcC5tb2RlbC5zYXZlKCk7XG5cbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuXG59IiwiaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4vU2VjdGlvblwiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uL21haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvblZpZGVvIGV4dGVuZHMgU2VjdGlvbiB7XG5cbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmlmcmFtZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaWZyYW1lXCIpO1xuICAgICAgICB0aGlzLmlmcmFtZS5zcmMgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgndmlkZW8tcmVjb3JkaW5nLmh0bWwnKTtcblxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAobXNnLnR4dCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJzY3JvbGxDYXB0dXJlVmlkZW9IZWlnaHRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pZnJhbWUuc3R5bGUuaGVpZ2h0ID0gbXNnLmhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3dEZWxheUNvbXBsZXRlKCkge1xuICAgICAgICBsZXQgcHJvbWlzZSA9IHN1cGVyLnNob3dEZWxheUNvbXBsZXRlKCk7XG4gICAgICAgIGFwcC5tb2RlbC5zZW5kTWVzc2FnZSh7IHR4dDogXCJzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvXCIgfSk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH1cblxuICAgIGhpZGVDb21wbGV0ZSgpIHtcbiAgICAgICAgYXBwLm1vZGVsLnNlbmRNZXNzYWdlKHsgdHh0Olwic2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvXCJ9KTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGVDb21wbGV0ZSgpO1xuICAgIH1cblxufSIsImltcG9ydCBTZWN0aW9uIGZyb20gXCIuL1NlY3Rpb25cIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlY3Rpb25TY2VuYXJpbyBleHRlbmRzIFNlY3Rpb24ge1xuXG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcihlbGVtZW50KTtcbiAgICB9XG5cbiAgICBzaG93RGVsYXlDb21wbGV0ZSgpIHtcbiAgICAgICAgbGV0IHByb21pc2UgPSBzdXBlci5zaG93RGVsYXlDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICB0aGlzLnJvdXRlci5yZWRpcmVjdChcImRlZmF1bHRcIiwgKCkgPT4geyByZXR1cm4gdGhpcy5wYXRoIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKCFhcHAubW9kZWwuYWN0aW9ucy5zZWxlY3RlZEl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgIGxldCBsYXN0SW5kZXggPSBhcHAubW9kZWwuYWN0aW9ucy5sZW5ndGgudmFsdWUgLSAxO1xuICAgICAgICAgICAgYXBwLm1vZGVsLmFjdGlvbnMuc2VsZWN0ZWRJbmRleC52YWx1ZSA9IGxhc3RJbmRleDtcbiAgICAgICAgfVxuIFxuICAgICAgICBhcHAubW9kZWwuc2F2ZSgpO1xuXG4gICAgICAgIC8vIGxldCBhY3Rpb25zVmlld0VsZW1lbnQgPSBhcHAudmlldy5zY3JvbGxDYXB0dXJlLndpbmRvd0NvbnRlbnQuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2lzPSdzYy1hY3Rpb25zLXZpZXcnXVwiKTtcbiAgICAgICAgLy8gbGV0IGFjdGlvbnNWaWV3ID0gYWN0aW9uc1ZpZXdFbGVtZW50LmNvbXBvbmVudDtcbiAgICAgICAgLy8gbGV0IGVsZW1lbnQgPSBhY3Rpb25zVmlldy5nZXRFbGVtZW50QnlNb2RlbChhcHAubW9kZWwuYWN0aW9ucy5zZWxlY3RlZEl0ZW0udmFsdWUpO1xuICAgICAgICAvLyBpZiAoZWxlbWVudCkgYWN0aW9uc1ZpZXcuc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQsIDApO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBoaWRlRGVsYXlDb21wbGV0ZSgpIHtcbiAgICAgICAgYXBwLm1vZGVsLmFjdGlvbnMuc2VsZWN0ZWRJdGVtLnZhbHVlID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmhpZGVEZWxheUNvbXBsZXRlKCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFVJQ29tcG9uZW50IGZyb20gXCIuLi90c3VuYW1pL2NvbXBvbmVudHMvVUlDb21wb25lbnRcIjtcbmltcG9ydCAqIGFzIHRzdW5hbWkgZnJvbSBcIi4uL3RzdW5hbWkvdHN1bmFtaVwiO1xuaW1wb3J0IFNlY3Rpb25TZXR0aW5ncyBmcm9tIFwiLi9TZWN0aW9uU2V0dGluZ3NcIjtcbmltcG9ydCBTZWN0aW9uVmlkZW8gZnJvbSBcIi4vU2VjdGlvblZpZGVvXCI7XG5pbXBvcnQgU2VjdGlvblNjZW5hcmlvIGZyb20gXCIuL1NlY3Rpb25TY2VuYXJpb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kb3dDb250ZW50TWFpbiBleHRlbmRzIFVJQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoZWxlbWVudCk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjZW5hcmlvID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaXM9J3NjLXNjZW5hcmlvJ11cIikuY29tcG9uZW50O1xuICAgICAgICB0aGlzLnZpZGVvID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaXM9J3NjLXZpZGVvJ11cIikuY29tcG9uZW50O1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbaXM9J3NjLXNldHRpbmdzJ11cIikuY29tcG9uZW50O1xuICAgIH1cblxufVxuXG50c3VuYW1pLmRlZmluZShcInNjLXNjZW5hcmlvXCIsIFNlY3Rpb25TY2VuYXJpbyk7XG50c3VuYW1pLmRlZmluZShcInNjLXZpZGVvXCIsIFNlY3Rpb25WaWRlbyk7XG50c3VuYW1pLmRlZmluZShcInNjLXNldHRpbmdzXCIsIFNlY3Rpb25TZXR0aW5ncyk7XG4iLCJpbXBvcnQgVUlDb21wb25lbnQgZnJvbSBcIi4uL3RzdW5hbWkvY29tcG9uZW50cy9VSUNvbXBvbmVudFwiO1xuaW1wb3J0ICogYXMgdHN1bmFtaSBmcm9tIFwiLi4vdHN1bmFtaS90c3VuYW1pXCI7XG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4uL3RzdW5hbWkvZXZlbnRzXCI7XG5pbXBvcnQge2FwcH0gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCBBY3Rpb25zVmlldyBmcm9tIFwiLi9BY3Rpb25zVmlld1wiO1xuaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuLi8uLi90ZW1wbGF0ZXMvc2Nyb2xsLWNhcHR1cmUuaHRtbFwiO1xuaW1wb3J0IFdpbmRvd0NvbnRlbnRNYWluIGZyb20gXCIuL1dpbmRvd0NvbnRlbnRNYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbENhcHR1cmUgZXh0ZW5kcyBVSUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IoZWxlbWVudCkge1xuXHRcdHN1cGVyKGVsZW1lbnQpO1xuXG5cdFx0dGhpcy5wb3NpdGlvbiA9IG51bGw7XG5cblx0XHR0aGlzLmRyYWdTdGFydCA9IHRoaXMuZHJhZ1N0YXJ0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kcmFnTW92ZSA9IHRoaXMuZHJhZ01vdmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyYWdFbmQgPSB0aGlzLmRyYWdFbmQuYmluZCh0aGlzKTtcblxuXHRcdGxldCB0aXRsZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjLXdpbmRvdy5zYy13aW5kb3ctbWFpbiA+IC5zYy10aXRsZVwiKTtcblx0XHR0aXRsZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50cy5tb3VzZWRvd24sIHRoaXMuZHJhZ1N0YXJ0KTtcblxuXHRcdHRoaXMud2luZG93Q29udGVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjLXdpbmRvdy1jb250ZW50W2lzPSdzYy13aW5kb3ctY29udGVudC1tYWluJ11cIikuY29tcG9uZW50O1xuXG5cdFx0dGhpcy5icmFuY2hlc1tcInNjZW5hcmlvXCJdID0gdGhpcy53aW5kb3dDb250ZW50LnNjZW5hcmlvO1xuXHRcdHRoaXMuYnJhbmNoZXNbXCJ2aWRlb1wiXSA9IHRoaXMud2luZG93Q29udGVudC52aWRlbztcblx0XHR0aGlzLmJyYW5jaGVzW1wic2V0dGluZ3NcIl0gPSB0aGlzLndpbmRvd0NvbnRlbnQuc2V0dGluZ3M7XG5cdH1cblxuXHRkcmFnU3RhcnQoZXZlbnQpIHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2MtZHJhZy1hcmVhXCIpKSB7XG5cdFx0XHR0aGlzLnN0YXJ0UG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uLnNlcmlhbGl6ZSgpO1xuXHRcdFx0dGhpcy5zdGFydFBvaW50ID0gdGhpcy5nZXRUb3VjaFBvaW50KGV2ZW50KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2Vtb3ZlLCB0aGlzLmRyYWdNb3ZlKTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2V1cCwgdGhpcy5kcmFnRW5kKTtcblx0XHR9XG5cdH1cblxuXHRkcmFnTW92ZShldmVudCkge1xuXHRcdGxldCBwb2ludCA9IHRoaXMuZ2V0VG91Y2hQb2ludChldmVudCk7XG5cdFx0bGV0IGRpZmYgPSB0aGlzLnN0YXJ0UG9pbnQuc3VidHJhY3QocG9pbnQpO1xuXHRcdHRoaXMucG9zaXRpb24ueC52YWx1ZSA9IHRoaXMuc3RhcnRQb3NpdGlvbi54ICsgZGlmZi54O1xuXHRcdHRoaXMucG9zaXRpb24ueS52YWx1ZSA9IHRoaXMuc3RhcnRQb3NpdGlvbi55IC0gZGlmZi55O1xuXHR9XG5cblx0ZHJhZ0VuZChldmVudCkge1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHMubW91c2Vtb3ZlLCB0aGlzLmRyYWdNb3ZlKTtcblx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzLm1vdXNldXAsIHRoaXMuZHJhZ0VuZCk7XG5cdFx0YXBwLm1vZGVsLnNhdmUoKTtcblx0fVxuXG59XG5cblNjcm9sbENhcHR1cmUudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcblxudHN1bmFtaS5kZWZpbmUoXCJzYy1hY3Rpb25zLXZpZXdcIiwgQWN0aW9uc1ZpZXcpO1xudHN1bmFtaS5kZWZpbmUoXCJzYy13aW5kb3ctY29udGVudC1tYWluXCIsIFdpbmRvd0NvbnRlbnRNYWluKTtcbiIsImV4cG9ydCBmdW5jdGlvbiBsb2FkWEhSKFxuICB1cmwsXG4gIG1ldGhvZCA9ICdHRVQnLFxuICBkYXRhID0gbnVsbCxcbiAgcmVxdWVzdEhlYWRlcnMgPSBudWxsLFxuICByZXNwb25zZVR5cGUgPSBudWxsLFxuICBub0NhY2hlID0gZmFsc2UsXG4gIHRpbWVvdXQgPSAxNTAwMCxcbiAgbWF4VGltZW91dEF0dGVtcHQgPSA1XG4pIHtcbiAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBsZXQgdGltZW91dEF0dGVtcHQgPSAwO1xuXG4gICAgbGV0IHhocjtcblxuICAgIGNvbnN0IGNyZWF0ZVhIUiA9ICgpID0+IHtcbiAgICAgIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgaWYgKHJlc3BvbnNlVHlwZSkge1xuICAgICAgICB4aHIucmVzcG9uc2VUeXBlID0gcmVzcG9uc2VUeXBlO1xuICAgICAgfVxuXG4gICAgICB4aHIub25sb2FkID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHByb21pc2UucHJvZ3Jlc3MgPSAxO1xuICAgICAgICBpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmVzb2x2ZSh4aHIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlamVjdChldmVudCk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnByb2dyZXNzID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC5sZW5ndGhDb21wdXRhYmxlKSB7XG4gICAgICAgICAgcHJvbWlzZS5wcm9ncmVzcyA9IGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB4aHIub25lcnJvciA9IChldmVudCkgPT4ge1xuICAgICAgICBwcm9taXNlLnByb2dyZXNzID0gMTtcbiAgICAgICAgcmVqZWN0KGV2ZW50KTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInhoci5zdGF0dXNcIiwgdGhpcy54aHIuc3RhdHVzKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInhoci5yZWFkeVN0YXRlXCIsIHRoaXMueGhyLnJlYWR5U3RhdGUpO1xuICAgICAgfTtcblxuICAgICAgbGV0IHVybDIgPSB1cmw7XG4gICAgICBpZiAobm9DYWNoZSkge1xuICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcbiAgICAgICAgaWYgKHVybDIuaW5kZXhPZignPycpID09PSAtMSkge1xuICAgICAgICAgIHVybDIgKz0gJz8nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHVybDIgKz0gJyYnO1xuICAgICAgICB9XG4gICAgICAgIHVybDIgKz0gJ25vY2FjaGU9JyArIHJhbmRvbS50b1N0cmluZygpO1xuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihtZXRob2QsIHVybDIsIHRydWUpO1xuICAgICAgeGhyLm9udGltZW91dCA9IChlKSA9PiB7XG4gICAgICAgIHRpbWVvdXRBdHRlbXB0Kys7XG4gICAgICAgIGlmICh0aW1lb3V0QXR0ZW1wdCA+IG1heFRpbWVvdXRBdHRlbXB0KSB7XG4gICAgICAgICAgcHJvbWlzZS5wcm9ncmVzcyA9IDE7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNyZWF0ZVhIUigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgeGhyLnRpbWVvdXQgPSB0aW1lb3V0O1xuXG4gICAgICBpZiAocmVxdWVzdEhlYWRlcnMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXF1ZXN0SGVhZGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3RIZWFkZXIgPSByZXF1ZXN0SGVhZGVyc1tpXTtcbiAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihyZXF1ZXN0SGVhZGVyWzBdLCByZXF1ZXN0SGVhZGVyWzFdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICB4aHIuc2VuZChkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHhoci5zZW5kKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNyZWF0ZVhIUigpO1xuICB9KTtcblxuICBwcm9taXNlLnByb2dyZXNzID0gMDtcblxuICByZXR1cm4gcHJvbWlzZTtcbn1cbiIsImltcG9ydCB7IGxvYWRYSFIgfSBmcm9tICcuL2xvYWRYSFInO1xuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFN0eWxlKHVybCwgaWQsIG5vQ2FjaGUpIHtcbiAgY29uc3QgcHJvbWlzZSA9IGxvYWRYSFIodXJsLCAnR0VUJywgbnVsbCwgbnVsbCwgbnVsbCwgbm9DYWNoZSk7XG4gIGNvbnN0IHByb21pc2UyID0gcHJvbWlzZS50aGVuKGZ1bmN0aW9uICh4aHIpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHhoci5yZXNwb25zZTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoeGhyLnJlc3BvbnNlKSk7XG4gICAgfVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9KTtcblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvbWlzZTIsICdwcm9ncmVzcycsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlLnByb2dyZXNzO1xuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBwcm9taXNlMjtcbn1cbiIsImltcG9ydCBVSUJ1dHRvbiBmcm9tIFwiLi9VSUJ1dHRvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSVJvdXRlckJ1dHRvbiBleHRlbmRzIFVJQnV0dG9uIHtcblxuXHRjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG5cdFx0c3VwZXIoZWxlbWVudCk7XG5cdFx0dGhpcy5wdXNoU3RhdGUgPSB0cnVlO1xuXHR9XG5cblx0Y2xpY2tIYW5kbGVyKGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHN1cGVyLmNsaWNrSGFuZGxlcihldmVudCk7XG5cdH1cblxuXHRjbGlja0RlbGF5Q29tcGxldGUoZXZlbnQpIHtcblx0XHRzdXBlci5jbGlja0RlbGF5Q29tcGxldGUoZXZlbnQpO1xuXHRcdGxldCBocmVmID0gdGhpcy5lbGVtZW50LmhyZWY7XG5cdFx0aWYgKGhyZWYpIHtcblx0XHRcdGxldCBwYXRoID0gaHJlZi5zdWJzdHIodGhpcy5yb3V0ZXIuYWJzb2x1dGVCYXNlUGF0aC5sZW5ndGgpO1xuXHRcdFx0aWYgKHRoaXMucHVzaFN0YXRlKSB7XG5cdFx0XHRcdHRoaXMucm91dGVyLnB1c2hTdGF0ZShwYXRoKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5yb3V0ZXIubG9jYXRpb24gPSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1wYXRoXCIpO1xuXHRcdH1cblx0fVxuXG59XG4iLCJpbXBvcnQgVUlSb3V0ZXJCdXR0b24gZnJvbSBcIi4uL3RzdW5hbWkvY29tcG9uZW50cy9VSVJvdXRlckJ1dHRvblwiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uL21haW5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyQnV0dG9uIGV4dGVuZHMgVUlSb3V0ZXJCdXR0b24ge1xuXG4gICAgZ2V0IHJvdXRlcigpIHtcbiAgICAgICAgcmV0dXJuIGFwcC5jb250cm9sbGVyLnJvdXRlcjtcbiAgICB9XG5cbn1cbiIsImltcG9ydCB7IGltcG9ydFRlbXBsYXRlLCBkZWZpbmUgfSBmcm9tIFwiLi4vdHN1bmFtaS90c3VuYW1pXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuLi90c3VuYW1pL0FwcFwiO1xuaW1wb3J0IFNjcm9sbENhcHR1cmUgZnJvbSBcIi4vU2Nyb2xsQ2FwdHVyZVwiO1xuaW1wb3J0IHsgbG9hZFN0eWxlIH0gZnJvbSBcIi4uL3RzdW5hbWkvbG9hZC9sb2FkU3R5bGVcIjtcbmltcG9ydCBEYXRhIGZyb20gXCIuLi90c3VuYW1pL2RhdGEvRGF0YVwiO1xuaW1wb3J0IFJvdXRlckJ1dHRvbiBmcm9tIFwiLi9Sb3V0ZXJCdXR0b25cIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcFZpZXcgZXh0ZW5kcyBBcHAge1xuXG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcbiAgICAgICAgc3VwZXIoZG9jdW1lbnQuYm9keSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLnNjb3BlID0gYXBwLm1vZGVsO1xuICAgICAgICB0aGlzLnNjcm9sbENhcHR1cmUgPSBpbXBvcnRUZW1wbGF0ZShTY3JvbGxDYXB0dXJlLnRlbXBsYXRlLCBhcHAubW9kZWwpLmNvbXBvbmVudDtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLnNjcm9sbENhcHR1cmUuZWxlbWVudCk7XG5cbiAgICAgICAgYXBwLm1vZGVsLnNob3dDYXB0dXJlSWNvbi5hZGRFdmVudExpc3RlbmVyKERhdGEuQ0hBTkdFLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJpcy1jYXB0dXJpbmdcIiwgZXZlbnQuZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWQoKSB7XG4gICAgICAgIGxldCBjb250ZW50Q1NTID0gY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoXCJjb250ZW50LmNzc1wiKTtcbiAgICAgICAgbGV0IGNvbnRlbnRDU1NQcm9taXNlID0gbG9hZFN0eWxlKGNvbnRlbnRDU1MpO1xuICAgICAgICBsZXQgZm9udGF3ZXNvbWVDU1MgPSBjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTChcImZvbnRhd2Vzb21lLmNzc1wiKTtcbiAgICAgICAgbGV0IGZvbnRhd2Vzb21lQ1NTUHJvbWlzZSA9IGxvYWRTdHlsZShmb250YXdlc29tZUNTUyk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbY29udGVudENTU1Byb21pc2UsIGZvbnRhd2Vzb21lQ1NTUHJvbWlzZV0pO1xuICAgIH1cblxufVxuXG5kZWZpbmUoXCJyb3V0ZXItYnV0dG9uXCIsIFJvdXRlckJ1dHRvbik7XG5kZWZpbmUoXCJzY3JvbGwtY2FwdHVyZVwiLCBTY3JvbGxDYXB0dXJlKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFzc2V0TGlzdCB7XG4gIGNvbnN0cnVjdG9yKGFzc2V0cyA9IFtdKSB7XG4gICAgdGhpcy5hc3NldHMgPSBhc3NldHM7XG4gIH1cblxuICBnZXQgcHJvZ3Jlc3MoKSB7XG4gICAgbGV0IHByb2dyZXNzID0gMDtcbiAgICBsZXQgbGVuZ3RoID0gdGhpcy5hc3NldHMubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hc3NldHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLmFzc2V0c1tpXTtcbiAgICAgIGlmIChwcm9taXNlLmhhc093blByb3BlcnR5KCdwcm9ncmVzcycpKSB7XG4gICAgICAgIHByb2dyZXNzICs9IHByb21pc2UucHJvZ3Jlc3M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZW5ndGgtLTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgIHByb2dyZXNzID0gcHJvZ3Jlc3MgLyBsZW5ndGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2dyZXNzID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHByb2dyZXNzO1xuICB9XG5cbiAgcHVzaCh2YWx1ZSkge1xuICAgIHRoaXMuYXNzZXRzLnB1c2godmFsdWUpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuIiwiaW1wb3J0IEFzc2V0TGlzdCBmcm9tICcuL0Fzc2V0TGlzdCc7XG5pbXBvcnQgQXJyYXlEYXRhIGZyb20gJy4vZGF0YS9BcnJheURhdGEnO1xuaW1wb3J0IEJhc2VFdmVudCBmcm9tICcuL2V2ZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBleHRlbmRzIEV2ZW50VGFyZ2V0IHtcbiAgY29uc3RydWN0b3Iocm9vdCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnJvb3QgPSByb290O1xuICAgIHRoaXMuX2xvY2F0aW9uID0gbnVsbDtcbiAgICB0aGlzLmdvVG9BbGxMb2NhdGlvbnMgPSBmYWxzZTtcbiAgICB0aGlzLmludGVycnVwdFRyYW5zaXRpb25zID0gdHJ1ZTtcbiAgICB0aGlzLl9pblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICB0aGlzLl9pbnRlcnJ1cHRpbmdMb2NhdGlvbnMgPSBbXTtcbiAgICB0aGlzLmJyYW5jaGVzID0gbmV3IEFycmF5RGF0YSgpO1xuICAgIHRoaXMucmVkaXJlY3RzID0ge307XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XG5cbiAgICB0aGlzLnNob3cgPSBuZXcgUm91dGVyVHJhbnNpdGlvbih0aGlzLCAnc2hvdycsIHRoaXMuX3Nob3dDb21wbGV0ZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLnNob3cudGFza3MgPSBbbmV3IFJvdXRlclRhc2soJ2xvYWQnLCB0cnVlKSwgbmV3IFJvdXRlclRhc2soJ3Nob3cnLCBmYWxzZSldO1xuICAgIHRoaXMuaGlkZSA9IG5ldyBSb3V0ZXJUcmFuc2l0aW9uKHRoaXMsICdoaWRlJywgdGhpcy5faGlkZUNvbXBsZXRlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuaGlkZS50YXNrcyA9IFtuZXcgUm91dGVyVGFzaygnaGlkZScsIGZhbHNlKV07XG4gIH1cblxuICBzdGF0aWMgZ2V0IElOVEVSUlVQVCgpIHtcbiAgICByZXR1cm4gJ2ludGVycnVwdCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IENIQU5HRSgpIHtcbiAgICByZXR1cm4gJ2NoYW5nZSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IENPTVBMRVRFKCkge1xuICAgIHJldHVybiAnY29tcGxldGUnO1xuICB9XG5cbiAgZ2V0IHJvb3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gIH1cblxuICBzZXQgcm9vdCh2YWx1ZSkge1xuICAgIHRoaXMuX3Jvb3QgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBsb2NhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb247XG4gIH1cblxuICBzZXQgbG9jYXRpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgY29uc29sZS5sb2coJ1JvdXRlciBzZXQgbG9jYXRpb24nLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlLmluZGV4T2YoJz8nKSAhPT0gLTEpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJz8nKVswXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5UcmFuc2l0aW9uKSB7XG4gICAgICBpZiAodGhpcy5nb1RvQWxsTG9jYXRpb25zKSB7XG4gICAgICAgIGNvbnN0IGxhc3RJbnRlcnJ1cHRpbmdMb2NhdGlvbiA9IHRoaXMuX2ludGVycnVwdGluZ0xvY2F0aW9uc1t0aGlzLl9pbnRlcnJ1cHRpbmdMb2NhdGlvbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChsYXN0SW50ZXJydXB0aW5nTG9jYXRpb24gIT09IHZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5faW50ZXJydXB0aW5nTG9jYXRpb25zLnB1c2godmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pbnRlcnJ1cHRpbmdMb2NhdGlvbnMgPSBbdmFsdWVdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYW5nZVRoZUxvY2F0aW9uKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gJyc7XG4gIH1cblxuICBwdXNoU3RhdGUodmFsdWUpIHtcbiAgICB0aGlzLmxvY2F0aW9uID0gdmFsdWU7XG4gIH1cblxuICBjaGFuZ2VUaGVMb2NhdGlvbih2YWx1ZSkge1xuICAgIGNvbnN0IGhhc2hlcyA9IHZhbHVlLnNwbGl0KCcmJyk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0ge307XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBoYXNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0cmluZyA9IGhhc2hlc1tpXTtcbiAgICAgIGNvbnN0IGVxdWFsSW5kZXggPSBzdHJpbmcuaW5kZXhPZignPScpO1xuICAgICAgaWYgKGVxdWFsSW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSBbXTtcbiAgICAgICAgaGFzaFswXSA9IHN0cmluZy5zdWJzdHIoMCwgZXF1YWxJbmRleCk7XG4gICAgICAgIGhhc2hbMV0gPSBzdHJpbmcuc3Vic3RyKGVxdWFsSW5kZXggKyAxKTtcbiAgICAgICAgdGhpcy5wYXJhbWV0ZXJzW2hhc2hbMF1dID0gaGFzaFsxXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgcGF0aCA9IGhhc2hlc1swXTtcblxuICAgIC8vIHJlbW92ZSBzbGFzaCBpZiBpdCBpcyB0aGUgbGFzdCBjaGFyYWN0ZXIsIHdlIGRvbid0IG5lZWQgYmxhbmsgcGFnZXMuXG4gICAgbGV0IGxhc3RDaGFyID0gcGF0aC5jaGFyQXQocGF0aC5sZW5ndGggLSAxKTtcbiAgICB3aGlsZSAobGFzdENoYXIgPT09ICcvJykge1xuICAgICAgcGF0aCA9IHBhdGguc3Vic3RyKDAsIHBhdGgubGVuZ3RoIC0gMSk7XG4gICAgICBsYXN0Q2hhciA9IHBhdGguY2hhckF0KHBhdGgubGVuZ3RoIC0gMSk7XG4gICAgfVxuXG4gICAgcGF0aCA9IHRoaXMuX2FwcGx5UmVkaXJlY3QocGF0aCk7XG5cbiAgICBpZiAocGF0aCAhPT0gdGhpcy5fbG9jYXRpb24pIHtcbiAgICAgIHRoaXMuX2luVHJhbnNpdGlvbiA9IHRydWU7XG5cbiAgICAgIHRoaXMuX2xvY2F0aW9uID0gcGF0aDtcblxuICAgICAgY29uc3QgZXZlbnQgPSBuZXcgQmFzZUV2ZW50KFJvdXRlci5DSEFOR0UsIHsgbG9jYXRpb246IHBhdGggfSk7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuXG4gICAgICB0aGlzLl9uZXh0TG9jYXRpb24gPSAncm9vdCc7XG4gICAgICBpZiAocGF0aCAhPT0gJycpIHtcbiAgICAgICAgdGhpcy5fbmV4dExvY2F0aW9uICs9ICcvJyArIHBhdGg7XG4gICAgICB9XG4gICAgICAvLyBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnUm91dGVyIF9uZXh0TG9jYXRpb24nLCB0aGlzLl9uZXh0TG9jYXRpb24pO1xuICAgICAgLy8gfVxuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhcnRUcmFuc2l0aW9ucygpO1xuICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Nob3dDb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9hcHBseVJlZGlyZWN0KHBhdGgpIHtcbiAgICBjb25zdCByZWRpcmVjdCA9IHRoaXMucmVkaXJlY3RzW3BhdGhdO1xuICAgIGxldCBuZXdQYXRoO1xuICAgIGlmIChyZWRpcmVjdCkge1xuICAgICAgbmV3UGF0aCA9IHJlZGlyZWN0KCk7XG4gICAgfVxuICAgIG5ld1BhdGggPSBuZXdQYXRoIHx8IHBhdGg7XG4gICAgaWYgKG5ld1BhdGggIT09IHBhdGgpIHtcbiAgICAgIG5ld1BhdGggPSB0aGlzLl9hcHBseVJlZGlyZWN0KG5ld1BhdGgpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3UGF0aDtcbiAgfVxuXG4gIF9zdGFydFRyYW5zaXRpb25zKCkge1xuICAgIGNvbnN0IGN1cnJlbnRMb2NhdGlvbkFycmF5ID0gdGhpcy5icmFuY2hlcy52YWx1ZS5tYXAoKGJyYW5jaCkgPT4ge1xuICAgICAgcmV0dXJuIGJyYW5jaC5zbHVnO1xuICAgIH0pO1xuICAgIGNvbnN0IG5leHRMb2NhdGlvbkFycmF5ID0gdGhpcy5fbmV4dExvY2F0aW9uLnNwbGl0KCcvJyk7XG4gICAgbGV0IGJyZWFrSW5kZXggPSAtMTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRMb2NhdGlvbkFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBicmFuY2hJZCA9IGN1cnJlbnRMb2NhdGlvbkFycmF5LnNsaWNlKDAsIGkgKyAxKS5qb2luKCcvJyk7XG4gICAgICBjb25zdCBuZXh0QnJhbmNoSWQgPSBuZXh0TG9jYXRpb25BcnJheS5zbGljZSgwLCBpICsgMSkuam9pbignLycpO1xuICAgICAgaWYgKGJyYW5jaElkID09PSBuZXh0QnJhbmNoSWQpIHtcbiAgICAgICAgYnJlYWtJbmRleCA9IGk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaGlkZS5icmFuY2hlcyA9IHRoaXMuYnJhbmNoZXMuc3BsaWNlKGJyZWFrSW5kZXggKyAxKS5yZXZlcnNlKCk7XG4gICAgbGV0IHBhcmVudCA9IHRoaXM7XG4gICAgaWYgKHRoaXMuYnJhbmNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgcGFyZW50ID0gdGhpcy5icmFuY2hlcy5pdGVtKHRoaXMuYnJhbmNoZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIGNvbnN0IG5ld0JyYW5jaGVzID0gW107XG4gICAgZm9yIChsZXQgaSA9IGJyZWFrSW5kZXggKyAxOyBpIDwgbmV4dExvY2F0aW9uQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHNsdWcgPSBuZXh0TG9jYXRpb25BcnJheVtpXTtcbiAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuZ2V0QnJhbmNoRnJvbVNsdWcocGFyZW50LCBzbHVnKTtcbiAgICAgIG5ld0JyYW5jaGVzLnB1c2goYnJhbmNoKTtcbiAgICAgIHBhcmVudCA9IGJyYW5jaDtcbiAgICB9XG5cbiAgICB0aGlzLmNoZWNrRm9yRGVmYXVsdEJyYW5jaGVzKHBhcmVudCwgbmV3QnJhbmNoZXMpO1xuXG4gICAgdGhpcy5zaG93LmJyYW5jaGVzID0gbmV3QnJhbmNoZXM7XG4gICAgdGhpcy5oaWRlLnN0YXJ0KCk7XG4gIH1cblxuICBjaGVja0ZvckRlZmF1bHRCcmFuY2hlcyhwYXJlbnQsIGJyYW5jaGVzKSB7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC5kZWZhdWx0Q2hpbGQpIHtcbiAgICAgICAgY29uc3Qgc2x1ZyA9IHBhcmVudC5kZWZhdWx0Q2hpbGQ7XG4gICAgICAgIGNvbnN0IGJyYW5jaCA9IHRoaXMuZ2V0QnJhbmNoRnJvbVNsdWcocGFyZW50LCBzbHVnKTtcbiAgICAgICAgaWYgKGJyYW5jaCkge1xuICAgICAgICAgIGJyYW5jaGVzLnB1c2goYnJhbmNoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrRm9yRGVmYXVsdEJyYW5jaGVzKGJyYW5jaCwgYnJhbmNoZXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0QnJhbmNoRnJvbVNsdWcocGFyZW50LCBzbHVnKSB7XG4gICAgbGV0IGJyYW5jaDtcbiAgICBpZiAoc2x1Zykge1xuICAgICAgaWYgKCFwYXJlbnQuZ2V0QnJhbmNoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBicmFuY2ggJ1wiICsgcGFyZW50LnNsdWcgKyBcIicgZG9lc24ndCBpbXBsZW1lbnQgdGhlIGdldEJyYW5jaCBtZXRob2QgZm9yICdcIiArIHNsdWcgKyBcIidcIik7XG4gICAgICB9XG4gICAgICBicmFuY2ggPSBwYXJlbnQuZ2V0QnJhbmNoKHNsdWcpO1xuICAgICAgYnJhbmNoLnJvdXRlciA9IHRoaXM7XG4gICAgICBicmFuY2gucGFyZW50ID0gcGFyZW50O1xuICAgICAgYnJhbmNoLnJvb3QgPSBwYXJlbnQucm9vdDtcbiAgICAgIGJyYW5jaC5zbHVnID0gc2x1ZztcbiAgICAgIGxldCBwYXRoID0gJyc7XG4gICAgICBpZiAocGFyZW50ID09PSB0aGlzKSB7XG4gICAgICAgIHBhdGggPSAnJztcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50LnNsdWcgPT09ICdyb290Jykge1xuICAgICAgICBwYXRoID0gc2x1ZztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhdGggPSBwYXJlbnQucGF0aCArICcvJyArIHNsdWc7XG4gICAgICB9XG4gICAgICBicmFuY2gucGF0aCA9IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBicmFuY2g7XG4gIH1cblxuICBfaGlkZUNvbXBsZXRlKGV2ZW50KSB7XG4gICAgbGV0IGludGVycnVwdFRoZVRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbnRlcnJ1cHRUcmFuc2l0aW9ucyAmJiB0aGlzLl9pbnRlcnJ1cHRpbmdMb2NhdGlvbnMubGVudGggPiAwKSB7XG4gICAgICBjb25zdCBuZXh0SW50ZXJydXB0ZWRMb2NhdGlvbiA9IHRoaXMuX2ludGVycnVwdGluZ0xvY2F0aW9uc1swXTtcbiAgICAgIGlmIChuZXh0SW50ZXJydXB0ZWRMb2NhdGlvbiAhPT0gbnVsbCB8fCBuZXh0SW50ZXJydXB0ZWRMb2NhdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGludGVycnVwdFRoZVRyYW5zaXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaW50ZXJydXB0VGhlVHJhbnNpdGlvbikge1xuICAgICAgdGhpcy5faW5UcmFuc2l0aW9uID0gZmFsc2U7XG4gICAgICBjb25zdCBldmVudCA9IG5ldyBCYXNlRXZlbnQoUm91dGVyLklOVEVSUlVQVCwge1xuICAgICAgICBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbixcbiAgICAgIH0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgIC8vIHRoaXMubG9jYXRpb24gPSB0aGlzLl9pbnRlcnJ1cHRpbmdMb2NhdGlvbnMuc2hpZnQoKTtcbiAgICAgIHRoaXMuY2hhbmdlVGhlTG9jYXRpb24odGhpcy5faW50ZXJydXB0aW5nTG9jYXRpb25zLnNoaWZ0KCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJyYW5jaGVzLnB1c2guYXBwbHkodGhpcy5icmFuY2hlcywgdGhpcy5zaG93LmJyYW5jaGVzKTtcbiAgICAgIHRoaXMuc2hvdy5zdGFydCgpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93Q29tcGxldGUoZXZlbnQpIHtcbiAgICB0aGlzLl9pblRyYW5zaXRpb24gPSBmYWxzZTtcbiAgICBjb25zdCBldnQgPSBuZXcgQmFzZUV2ZW50KFJvdXRlci5DT01QTEVURSwgeyBsb2NhdGlvbjogdGhpcy5sb2NhdGlvbiB9KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgICBpZiAodGhpcy5faW50ZXJydXB0aW5nTG9jYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuY2hhbmdlVGhlTG9jYXRpb24odGhpcy5faW50ZXJydXB0aW5nTG9jYXRpb25zLnNoaWZ0KCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldEJyYW5jaChzbHVnKSB7XG4gICAgcmV0dXJuIHRoaXMucm9vdDtcbiAgfVxuXG4gIHJlZGlyZWN0KHBhdGgsIG5ld1BhdGgpIHtcbiAgICBpZiAobmV3UGF0aCkge1xuICAgICAgdGhpcy5yZWRpcmVjdHNbcGF0aF0gPSBuZXdQYXRoO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWxldGUgdGhpcy5yZWRpcmVjdHNbcGF0aF07XG4gICAgfVxuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLl9pbnRlcnJ1cHRpbmdMb2NhdGlvbnMgPSBudWxsO1xuICAgIHRoaXMuYnJhbmNoZXMgPSBudWxsO1xuICAgIHRoaXMucmVkaXJlY3RzID0gbnVsbDtcbiAgICB0aGlzLnJvb3QgPSBudWxsO1xuICAgIHRoaXMucG9wU3RhdGVCaW5kID0gbnVsbDtcbiAgfVxuXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW1JvdXRlciBsb2NhdGlvbj0nICsgdGhpcy5sb2NhdGlvbiArICddJztcbiAgfVxufVxuXG5jbGFzcyBSb3V0ZXJUcmFuc2l0aW9uIHtcbiAgY29uc3RydWN0b3Iocm91dGVyLCBuYW1lLCBvbkNvbXBsZXRlKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xuICAgIHRoaXMuYnJhbmNoZXMgPSBbXTtcbiAgICB0aGlzLnRhc2tzID0gW107XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBpZiAodGhpcy5icmFuY2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgbmV4dFRhc2s7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy50YXNrcy5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgICAgICBjb25zdCB0YXNrID0gdGhpcy50YXNrc1tpXTtcbiAgICAgICAgdGFzay5yb3V0ZXIgPSB0aGlzLnJvdXRlcjtcbiAgICAgICAgdGFzay5icmFuY2hlcyA9IHRoaXMuYnJhbmNoZXMuc2xpY2UoKTtcbiAgICAgICAgaWYgKG5leHRUYXNrKSB7XG4gICAgICAgICAgdGFzay5vbkNvbXBsZXRlID0gbmV4dFRhc2suc3RhcnQuYmluZChuZXh0VGFzayk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGFzay5vbkNvbXBsZXRlID0gdGhpcy50YXNrc0NvbXBsZXRlLmJpbmQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dFRhc2sgPSB0YXNrO1xuICAgICAgfVxuICAgICAgY29uc3QgZmlyc3RUYXNrID0gdGhpcy50YXNrc1swXTtcbiAgICAgIGZpcnN0VGFzay5zdGFydCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRhc2tzQ29tcGxldGUoKTtcbiAgICB9XG4gIH1cblxuICB0YXNrc0NvbXBsZXRlKCkge1xuICAgIHRoaXMub25Db21wbGV0ZSgpO1xuICB9XG59XG5cbmNsYXNzIFJvdXRlclRhc2sge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBwcmVsb2FkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnByZWxvYWQgPSBwcmVsb2FkO1xuICAgIHRoaXMuYnJhbmNoZXMgPSBbXTtcbiAgICB0aGlzLnJvdXRlciA9IG51bGw7XG4gICAgdGhpcy5jaGVja1Byb2dyZXNzQmluZCA9IHRoaXMuY2hlY2tQcm9ncmVzcy5iaW5kKHRoaXMpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5wcmVsb2FkZXIgPSBudWxsO1xuICAgIHRoaXMuYXNzZXRzID0gW107XG4gICAgaWYgKHRoaXMuYnJhbmNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgaWYgKHRoaXMucHJlbG9hZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYnJhbmNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB0aGlzLmFzc2V0cy5wdXNoKG5ldyBBc3NldExpc3QoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hc3NldExpc3QgPSBuZXcgQXNzZXRMaXN0KHRoaXMuYXNzZXRzLnNsaWNlKCkpO1xuICAgICAgICB0aGlzLnByZWxvYWRlciA9IHRoaXMucm91dGVyLnByZWxvYWRlcjtcbiAgICAgICAgaWYgKHRoaXMucHJlbG9hZGVyKSB7XG4gICAgICAgICAgdGhpcy5pc1ByZWxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuY2hlY2tQcm9ncmVzcygpO1xuICAgICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnByZWxvYWRlci5zaG93KCk7XG4gICAgICAgICAgaWYgKHByb21pc2UpIHtcbiAgICAgICAgICAgIHByb21pc2UudGhlbigob2JqKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc3RhcnROZXh0QnJhbmNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGFydE5leHRCcmFuY2goKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5zdGFydE5leHRCcmFuY2goKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdGFydE5leHRCcmFuY2goKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hbGxDb21wbGV0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrUHJvZ3Jlc3MoKSB7XG4gICAgaWYgKHRoaXMuYXNzZXRMaXN0KSB7XG4gICAgICB0aGlzLnByZWxvYWRlci5wcm9ncmVzcyA9IHRoaXMuYXNzZXRMaXN0LnByb2dyZXNzO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc1ByZWxvYWRpbmcpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5jaGVja1Byb2dyZXNzQmluZCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnROZXh0QnJhbmNoKCkge1xuICAgIHRoaXMuYnJhbmNoID0gdGhpcy5icmFuY2hlcy5zaGlmdCgpO1xuICAgIC8vIGxldCBtZXRob2QgPSB0aGlzLmJyYW5jaC5nZXRNZXRob2QodGhpcy5uYW1lKTtcbiAgICBsZXQgbWV0aG9kID0gdGhpcy5icmFuY2hbdGhpcy5uYW1lXTtcbiAgICBpZiAobWV0aG9kKSB7XG4gICAgICBtZXRob2QgPSBtZXRob2QuYmluZCh0aGlzLmJyYW5jaCk7XG4gICAgICBjb25zdCBhc3NldExpc3QgPSB0aGlzLmFzc2V0cy5zaGlmdCgpO1xuICAgICAgY29uc3QgcHJvbWlzZSA9IG1ldGhvZCh0aGlzLmJyYW5jaCwgYXNzZXRMaXN0KTtcbiAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UudGhlbih0aGlzLmJyYW5jaENvbXBsZXRlLmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5icmFuY2hDb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJyYW5jaENvbXBsZXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYnJhbmNoQ29tcGxldGUoKSB7XG4gICAgaWYgKHRoaXMuYnJhbmNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zdGFydE5leHRCcmFuY2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMucHJlbG9hZGVyKSB7XG4gICAgICAgIHRoaXMuaXNQcmVsb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSB0aGlzLnByZWxvYWRlci5oaWRlKCk7XG4gICAgICAgIGlmIChwcm9taXNlKSB7XG4gICAgICAgICAgcHJvbWlzZS50aGVuKHRoaXMuYWxsQ29tcGxldGUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5hbGxDb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFsbENvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYWxsQ29tcGxldGUoKSB7XG4gICAgdGhpcy5hc3NldHMgPSBudWxsO1xuICAgIHRoaXMuYXNzZXRMaXN0ID0gbnVsbDtcbiAgICB0aGlzLmJyYW5jaGVzID0gbnVsbDtcblxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCBCcmFuY2ggZnJvbSBcIi4uL3RzdW5hbWkvQnJhbmNoXCI7XG5pbXBvcnQgeyBhcHAgfSBmcm9tIFwiLi4vbWFpblwiO1xuaW1wb3J0IHsgYXdhaXRUaW1lb3V0IH0gZnJvbSBcIi4uL3RzdW5hbWkvYXdhaXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxheVN0YXRlIGV4dGVuZHMgQnJhbmNoIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmlzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN0YXJ0TG9jYXRpb24gPSBcInNjcm9sbC1jYXB0dXJlL3NjZW5hcmlvXCI7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgdGhpcy5pc1BsYXlpbmcgPSB0cnVlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yb3V0ZXIucmVkaXJlY3QoXCJkZWZhdWx0XCIsICgpID0+IHsgcmV0dXJuIHRoaXMuc3RhcnRMb2NhdGlvbiB9KTtcblxuICAgICAgICBhcHAubW9kZWwuc2F2ZSgpO1xuICAgICAgICBhcHAubW9kZWwuYWN0aW9ucy5zZWxlY3RlZEluZGV4LnZhbHVlID0gMDtcbiAgICAgICAgcmV0dXJuIGF3YWl0VGltZW91dCgwLjI1KS50aGVuKCgpID0+IHRoaXMudHJpZ2dlckFjdGlvbigpKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyQWN0aW9uKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSByZXR1cm47XG4gICAgICAgIGxldCBhY3Rpb24gPSBhcHAubW9kZWwuYWN0aW9ucy5zZWxlY3RlZEl0ZW0udmFsdWU7XG4gICAgICAgIGlmIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBwcm9taXNlID0gYWN0aW9uLnRyaWdnZXJEZWxheSgpO1xuICAgICAgICAgICAgcHJvbWlzZS50aGVuKCgpID0+IHRoaXMuYWN0aW9uQ29tcGxldGUoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFsbENvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhY3Rpb25Db21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykgcmV0dXJuO1xuICAgICAgICBpZiAoYXBwLm1vZGVsLmFjdGlvbnMuc2VsZWN0ZWRJbmRleC52YWx1ZSA8IChhcHAubW9kZWwuYWN0aW9ucy52YWx1ZS5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgYXBwLm1vZGVsLmFjdGlvbnMuc2VsZWN0ZWRJbmRleC52YWx1ZSA9IChhcHAubW9kZWwuYWN0aW9ucy5zZWxlY3RlZEluZGV4LnZhbHVlICsgMSk7XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJBY3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWxsQ29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbENvbXBsZXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSByZXR1cm47XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMucm91dGVyLmxvY2F0aW9uID0gdGhpcy5zdGFydExvY2F0aW9uO1xuICAgIH1cblxuICAgIGhpZGUoKSB7XG4gICAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHJldHVybiBzdXBlci5oaWRlKCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IFBsYXlTdGF0ZSBmcm9tIFwiLi9QbGF5U3RhdGVcIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi9tYWluXCI7XG5pbXBvcnQgQWN0aW9uV2FpdCBmcm9tIFwiLi4vbW9kZWwvQWN0aW9uV2FpdFwiO1xuaW1wb3J0IHsgYXdhaXRUaW1lb3V0IH0gZnJvbSBcIi4uL3RzdW5hbWkvYXdhaXRcIjtcbmltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gXCIuLi9tb2RlbC9HQUJyaWRnZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5UmVjb3JkU3RhdGUgZXh0ZW5kcyBQbGF5U3RhdGUge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3RhcnRMb2NhdGlvbiA9IFwic2Nyb2xsLWNhcHR1cmUvdmlkZW9cIjtcbiAgICB9XG5cbiAgICBzaG93KCkge1xuICAgICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoXCJyZWNvcmQtYWN0aW9ucy1sZW5ndGhcIiwgYXBwLm1vZGVsLmFjdGlvbnMudmFsdWUubGVuZ3RoLnRvU3RyaW5nKCkpO1xuICAgICAgICBpZiAoYXBwLm1vZGVsLmFjdGlvbnMudmFsdWUubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbmV3IEFjdGlvbldhaXQoKTtcbiAgICAgICAgICAgIHRoaXMudGltZW91dC5kZWxheS52YWx1ZSA9IDYwICogNTtcbiAgICAgICAgICAgIGFwcC5tb2RlbC5hY3Rpb25zLmFkZEFjdGlvbih0aGlzLnRpbWVvdXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwcm9taXNlID0gYXdhaXRUaW1lb3V0KDAuMjUpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgYXBwLm1vZGVsLnNlbmRNZXNzYWdlKHsgdHh0OiBcInNjcm9sbENhcHR1cmVTdGFydFJlY29yZGluZ1wifSk7XG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuc2hvdygpO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gdGhpcy5rZWVwQWxpdmVUaW1lb3V0ID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAvLyAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UoeyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZUtlZXBBbGl2ZVwiIH0pO1xuICAgICAgICAvLyB9LCAxMDAwICogMTApO1xuICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9XG5cbiAgICBhbGxDb21wbGV0ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzUGxheWluZykgcmV0dXJuO1xuICAgICAgICB0aGlzLnN0b3BUaGVSZWNvcmRpbmcoKTtcbiAgICAgICAgc3VwZXIuYWxsQ29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBzdG9wVGhlUmVjb3JkaW5nKCkge1xuICAgICAgICAvLyBjbGVhckludGVydmFsKHRoaXMua2VlcEFsaXZlVGltZW91dCk7XG4gICAgICAgIGFwcC5tb2RlbC5zZW5kTWVzc2FnZSh7IHR4dDogXCJzY3JvbGxDYXB0dXJlU3RvcFJlY29yZGluZ1wiIH0pO1xuICAgICAgICBhcHAubW9kZWwuc2VuZE1lc3NhZ2UoeyB0eHQ6IFwic2Nyb2xsQ2FwdHVyZVVwZGF0ZVZpZGVvXCIgfSk7XG4gICAgfVxuXG4gICAgaGlkZSgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmJlZm9yZXVubG9hZFwiLCB0aGlzLm9uQmVmb3JlVW5sb2FkSGFuZGxlcik7XG4gICAgICAgIGlmICh0aGlzLmlzUGxheWluZykgdGhpcy5zdG9wVGhlUmVjb3JkaW5nKCk7XG4gICAgICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgICAgICAgIGFwcC5tb2RlbC5hY3Rpb25zLnJlbW92ZUFjdGlvbih0aGlzLnRpbWVvdXQpO1xuICAgICAgICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3VwZXIuaGlkZSgpO1xuICAgIH1cblxufVxuIiwiaW1wb3J0IEJyYW5jaCBmcm9tIFwiLi4vdHN1bmFtaS9CcmFuY2hcIjtcbmltcG9ydCB7IGFwcCB9IGZyb20gXCIuLi9tYWluXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsb3NlU3RhdGUgZXh0ZW5kcyBCcmFuY2gge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgc2hvdygpIHtcbiAgICAgICAgYXBwLm1vZGVsLnNhdmUoKTtcbiAgICAgICAgcmV0dXJuIHN1cGVyLnNob3coKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgQnJhbmNoIGZyb20gXCIuLi90c3VuYW1pL0JyYW5jaFwiO1xuaW1wb3J0IHsgYXBwIH0gZnJvbSBcIi4uL21haW5cIjtcbmltcG9ydCB7IHNlbmRUcmFja1BhZ2VNZXNzYWdlLCBzZW5kVHJhY2tFdmVudE1lc3NhZ2UgfSBmcm9tIFwiLi4vbW9kZWwvR0FCcmlkZ2VcIjtcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIi4uL3RzdW5hbWkvUm91dGVyXCI7XG5pbXBvcnQgUGxheVN0YXRlIGZyb20gXCIuL1BsYXlTdGF0ZVwiO1xuaW1wb3J0IFBsYXlSZWNvcmRTdGF0ZSBmcm9tIFwiLi9QbGF5UmVjb3JkU3RhdGVcIjtcbmltcG9ydCBDbG9zZVN0YXRlIGZyb20gXCIuL0Nsb3NlU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwQ29udHJvbGxlciBleHRlbmRzIEJyYW5jaCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnRyYWNrUm91dGVyTG9jYXRpb24gPSB0aGlzLnRyYWNrUm91dGVyTG9jYXRpb24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5iZWZvcmVVbmxvYWRIYW5kbGVyID0gdGhpcy5iZWZvcmVVbmxvYWRIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIgPSBuZXcgUm91dGVyKHRoaXMpO1xuICAgICAgICB0aGlzLnJvdXRlci5yZWRpcmVjdChcImRlZmF1bHRcIiwgKCkgPT4geyByZXR1cm4gXCJzY3JvbGwtY2FwdHVyZS9zY2VuYXJpb1wiIH0pO1xuICAgICAgICB0aGlzLnJvdXRlci5hZGRFdmVudExpc3RlbmVyKFJvdXRlci5DSEFOR0UsIHRoaXMudHJhY2tSb3V0ZXJMb2NhdGlvbik7XG4gICAgICAgIFxuICAgICAgICB0aGlzLmJyYW5jaGVzID0ge1xuICAgICAgICAgICAgXCJzY3JvbGwtY2FwdHVyZVwiOiBhcHAudmlldy5zY3JvbGxDYXB0dXJlLFxuICAgICAgICAgICAgXCJwbGF5XCI6IG5ldyBQbGF5U3RhdGUoKSxcbiAgICAgICAgICAgIFwicmVjb3JkXCI6IG5ldyBQbGF5UmVjb3JkU3RhdGUoKSxcbiAgICAgICAgICAgIFwiY2xvc2VkXCI6IG5ldyBDbG9zZVN0YXRlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JldW5sb2FkXCIsIHRoaXMuYmVmb3JlVW5sb2FkSGFuZGxlcik7XG4gICAgfVxuXG4gICAgdHJhY2tSb3V0ZXJMb2NhdGlvbigpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZS50eXBlLCB0aGlzLnJvdXRlci5sb2NhdGlvbik7XG4gICAgICAgIHNlbmRUcmFja1BhZ2VNZXNzYWdlKFwiL1wiICsgdGhpcy5yb3V0ZXIubG9jYXRpb24pO1xuICAgIH1cblxuICAgIGJlZm9yZVVubG9hZEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihSb3V0ZXIuQ0hBTkdFLCB0aGlzLnRyYWNrUm91dGVyTG9jYXRpb24pO1xuICAgICAgICB0aGlzLnJvdXRlci5sb2NhdGlvbiA9IFwiXCI7XG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgbGV0IHZpZXdQcm9taXNlID0gYXBwLnZpZXcubG9hZCgpO1xuXG4gICAgICAgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFtcImpzb25cIl0sIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtwcm9taXNlLCB2aWV3UHJvbWlzZV0pLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXN1bHRzWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSByZXN1bHRzWzBdLmpzb247XG4gICAgICAgICAgICAgICAgaWYgKGpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pXG4gICAgICAgICAgICAgICAgICAgIGFwcC5tb2RlbC5hY3Rpb25zLmRlc2VyaWFsaXplKGRhdGEuYWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGFwcC5tb2RlbC5zZXR0aW5ncy5kZXNlcmlhbGl6ZShkYXRhLnNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNob3coKSB7XG4gICAgICAgIHNlbmRUcmFja0V2ZW50TWVzc2FnZShcIlNjcm9sbENhcHR1cmVTdGFydFwiLCB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICB9XG5cbiAgICBoaWRlKCkge1xuICAgIH1cblxufSIsImltcG9ydCBBcHBNb2RlbCBmcm9tIFwiLi9tb2RlbC9BcHBNb2RlbFwiO1xuaW1wb3J0IEFwcFZpZXcgZnJvbSBcIi4vdmlldy9BcHBWaWV3XCI7XG5pbXBvcnQgQXBwQ29udHJvbGxlciBmcm9tIFwiLi9jb250cm9sbGVyL0FwcENvbnRyb2xsZXJcIjtcblxuZXhwb3J0IGxldCBhcHA7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4ge1xuXG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdGFwcCA9IHRoaXM7XG5cdFx0dGhpcy5tb2RlbCA9IG5ldyBBcHBNb2RlbCgpO1xuXHRcdHRoaXMudmlldyA9IG5ldyBBcHBWaWV3KCk7XG5cdFx0dGhpcy5jb250cm9sbGVyID0gbmV3IEFwcENvbnRyb2xsZXIoKTtcblx0fVxuXG59XG5cbmlmKCF3aW5kb3cuc2Nyb2xsQ2FwdHVyZUFwcCkge1xuXHR3aW5kb3cuc2Nyb2xsQ2FwdHVyZUFwcCA9IG5ldyBNYWluKCk7XG59XG5hcHAgPSB3aW5kb3cuc2Nyb2xsQ2FwdHVyZUFwcDtcbmFwcC5jb250cm9sbGVyLnJvdXRlci5sb2NhdGlvbiA9IFwiZGVmYXVsdFwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==