/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/model/GABridge.js":
/*!******************************!*\
  !*** ./js/model/GABridge.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendTrackEventMessage: () => (/* binding */ sendTrackEventMessage),
/* harmony export */   sendTrackPageMessage: () => (/* binding */ sendTrackPageMessage)
/* harmony export */ });
function sendTrackEventMessage(category, action) {
  let label = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  chrome.runtime.sendMessage({
    type: 'scrollCaptureTrackEvent',
    category,
    action,
    label
  });
}
function sendTrackPageMessage(path) {
  chrome.runtime.sendMessage({
    type: 'scrollCaptureTrackPage',
    path
  });
}

/***/ }),

/***/ "./lib/tsunami/utils/date.js":
/*!***********************************!*\
  !*** ./lib/tsunami/utils/date.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addDays: () => (/* binding */ addDays),
/* harmony export */   addHours: () => (/* binding */ addHours),
/* harmony export */   daysBetween: () => (/* binding */ daysBetween),
/* harmony export */   formatAMPM: () => (/* binding */ formatAMPM),
/* harmony export */   getAge: () => (/* binding */ getAge),
/* harmony export */   getFamiliarTimeBetween: () => (/* binding */ getFamiliarTimeBetween),
/* harmony export */   getMonth: () => (/* binding */ getMonth),
/* harmony export */   hoursBetween: () => (/* binding */ hoursBetween),
/* harmony export */   minutesBetween: () => (/* binding */ minutesBetween),
/* harmony export */   months: () => (/* binding */ months),
/* harmony export */   monthsBetween: () => (/* binding */ monthsBetween),
/* harmony export */   timeAMPM: () => (/* binding */ timeAMPM),
/* harmony export */   toUnixString: () => (/* binding */ toUnixString),
/* harmony export */   toUnixUTCString: () => (/* binding */ toUnixUTCString),
/* harmony export */   treatAsUTC: () => (/* binding */ treatAsUTC),
/* harmony export */   weeksBetween: () => (/* binding */ weeksBetween),
/* harmony export */   yearsBetween: () => (/* binding */ yearsBetween)
/* harmony export */ });
/* harmony import */ var _number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number */ "./lib/tsunami/utils/number.js");

function timeAMPM(date) {
  let hours = date.getHours();
  let ampm = hours >= 12 ? 'pm' : 'am';
  let minutes = (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getMinutes());
  let seconds = (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getSeconds());
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  return {
    hours,
    minutes,
    seconds,
    ampm
  };
}
function formatAMPM(date) {
  let spaceBetween = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  let dateData = timeAMPM(date);
  let strTime = dateData.hours + ':' + dateData.minutes + spaceBetween + ampm;
  return strTime;
}
function toUnixString(date) {
  return date.getFullYear() + "-" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getMonth() + 1) + "-" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getDate()) + " " + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getHours()) + ":" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getMinutes()) + ":" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getSeconds());
}
function toUnixUTCString(date) {
  return date.getUTCFullYear() + "-" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getUTCMonth() + 1) + "-" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getUTCDate()) + " " + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getUTCHours()) + ":" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getUTCMinutes()) + ":" + (0,_number__WEBPACK_IMPORTED_MODULE_0__.addLeadingZero)(date.getUTCSeconds());
}
function addHours(date, hours) {
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  return date;
}
function addDays(date, days) {
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  return date;
}
let months = {
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
};
function getMonth(date, language) {
  if (!language) {
    language = "en";
  }
  let month;
  switch (language) {
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
  if (m < 0 || m === 0 && today.getDate() < birthDate.getDate()) {
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
  let millisecondsPerMonth = 365 / 12 * 24 * 60 * 60 * 1000;
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

/***/ }),

/***/ "./lib/tsunami/utils/number.js":
/*!*************************************!*\
  !*** ./lib/tsunami/utils/number.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZero: () => (/* binding */ addLeadingZero),
/* harmony export */   clamp: () => (/* binding */ clamp),
/* harmony export */   clampTime: () => (/* binding */ clampTime),
/* harmony export */   componentToHex: () => (/* binding */ componentToHex),
/* harmony export */   constrain: () => (/* binding */ constrain),
/* harmony export */   createStepsBetween: () => (/* binding */ createStepsBetween),
/* harmony export */   degToRad: () => (/* binding */ degToRad),
/* harmony export */   easeOut: () => (/* binding */ easeOut),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatCurrency: () => (/* binding */ formatCurrency),
/* harmony export */   getOrdinalSuffix: () => (/* binding */ getOrdinalSuffix),
/* harmony export */   getRandomArbitrary: () => (/* binding */ getRandomArbitrary),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
/* harmony export */   getRandomIntInclusive: () => (/* binding */ getRandomIntInclusive),
/* harmony export */   getWeightedAverage: () => (/* binding */ getWeightedAverage),
/* harmony export */   hexColorStringToNumber: () => (/* binding */ hexColorStringToNumber),
/* harmony export */   hexToRgb: () => (/* binding */ hexToRgb),
/* harmony export */   interpolate: () => (/* binding */ interpolate),
/* harmony export */   isBetween: () => (/* binding */ isBetween),
/* harmony export */   isEven: () => (/* binding */ isEven),
/* harmony export */   isInteger: () => (/* binding */ isInteger),
/* harmony export */   isOdd: () => (/* binding */ isOdd),
/* harmony export */   isPrime: () => (/* binding */ isPrime),
/* harmony export */   lerp: () => (/* binding */ lerp),
/* harmony export */   loopIndex: () => (/* binding */ loopIndex),
/* harmony export */   map: () => (/* binding */ map),
/* harmony export */   mapClamp: () => (/* binding */ mapClamp),
/* harmony export */   mix: () => (/* binding */ mix),
/* harmony export */   mod: () => (/* binding */ mod),
/* harmony export */   modWrap: () => (/* binding */ modWrap),
/* harmony export */   noise1D: () => (/* binding */ noise1D),
/* harmony export */   norm: () => (/* binding */ norm),
/* harmony export */   radToDeg: () => (/* binding */ radToDeg),
/* harmony export */   random1D: () => (/* binding */ random1D),
/* harmony export */   randomInt: () => (/* binding */ randomInt),
/* harmony export */   randomIntegerWithinRange: () => (/* binding */ randomIntegerWithinRange),
/* harmony export */   randomRange: () => (/* binding */ randomRange),
/* harmony export */   randomWithinRange: () => (/* binding */ randomWithinRange),
/* harmony export */   removeMultipleRotations: () => (/* binding */ removeMultipleRotations),
/* harmony export */   rgbToHex: () => (/* binding */ rgbToHex),
/* harmony export */   round1: () => (/* binding */ round1),
/* harmony export */   round2: () => (/* binding */ round2),
/* harmony export */   round3: () => (/* binding */ round3),
/* harmony export */   roundDecimalToPlace: () => (/* binding */ roundDecimalToPlace),
/* harmony export */   sineWave: () => (/* binding */ sineWave),
/* harmony export */   smoothstep: () => (/* binding */ smoothstep),
/* harmony export */   spell: () => (/* binding */ spell),
/* harmony export */   spring: () => (/* binding */ spring)
/* harmony export */ });
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
function roundDecimalToPlace(value) {
  let place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
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
    index = length + index % length;
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
  const onesSpellings = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const tensSpellings = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
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
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    toString: function () {
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
  return (n % m + m) % m;
}

//a modulo function that handles negatives numbers 'correctly'
function modWrap(n, m) {
  return (n % m + m) % m;
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
function sineWave() {
  let angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let frequency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.PI;
  let time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  let speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  let amplitude = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
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
  let friction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
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
  let target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let friction = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
  let speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  let elasticity = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./js/video-recording.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_tsunami_utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/tsunami/utils/date */ "./lib/tsunami/utils/date.js");
/* harmony import */ var _lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/tsunami/utils/number */ "./lib/tsunami/utils/number.js");
/* harmony import */ var _model_GABridge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/GABridge */ "./js/model/GABridge.js");



chrome.storage.local.get(['json'], result => {
  let colorTheme = 'Dark';
  if (result) {
    if (result.json) {
      let data = JSON.parse(result.json);
      if (data.settings) {
        colorTheme = data.settings.colorThemes;
      }
    }
  }
  let isColorThemeLight;
  switch (colorTheme) {
    case 'Dark':
    case 'Light':
      isColorThemeLight = colorTheme == 'Light';
      break;
    default:
      let darkModeMatchMedia = window.matchMedia('(prefers-color-scheme: dark)');
      let isDarkMode = darkModeMatchMedia.matches;
      isColorThemeLight = !isDarkMode;
      break;
  }
  document.body.querySelector('.sc-default').setAttribute('data-theme-light', isColorThemeLight);
});
window.addEventListener('resize', () => {
  dispatchVideoHeight();
});
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  switch (msg.type) {
    case 'scrollCaptureColorTheme':
      document.body.querySelector('.sc-default').setAttribute('data-theme-light', msg.isColorThemeLight);
      break;
    case 'scrollCaptureUnloadVideo':
      unloadVideo();
      break;
    case 'scrollCaptureShowVideo':
      dispatchVideoHeight();
      break;
    case 'scrollCaptureVideoURL':
      updateVideo(msg);
      break;
  }
});
let player = document.querySelector('.sc-video-player');
player.setAttribute('muted', 'true');
player.setAttribute('autoplay', 'true');
player.setAttribute('playsinline', 'true');
player.setAttribute('controls', '1');
player.addEventListener('canplay', () => {
  dispatchVideoHeight();
});
function dispatchVideoHeight() {
  chrome.storage.local.get(['tabId']).then(tabId => {
    let msg = {
      type: 'scrollCaptureVideoHeight',
      height: document.body.scrollHeight
    };
    chrome.tabs.sendMessage(tabId.tabId, msg);
  });
}
function updateVideo(message) {
  const videoURL = message.videoURL;
  let extension = message.extension;
  // let extension = "webm";
  // switch(message.format) {
  //     case "x-matroska":
  //         extension = "mkv";
  //     break;
  //     case "webm":
  //     default:
  //         extension = "webm";
  //     break;
  // }
  player.src = videoURL;
  let date = new Date();
  let ampmTime = (0,_lib_tsunami_utils_date__WEBPACK_IMPORTED_MODULE_0__.timeAMPM)(date);
  // Screen Shot 2020-03-20 at 4.35.14 PM
  let dateData = {
    year: date.getFullYear(),
    month: (0,_lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__.addLeadingZero)(date.getMonth() + 1),
    date: (0,_lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__.addLeadingZero)(date.getDate())
  };
  ampmTime.ampm = ampmTime.ampm.toUpperCase();
  let videoFileName = `Scroll Capture ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}.${extension}`;
  let buttons = document.querySelectorAll('a.sc-download-button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.href = videoURL;
    button.download = videoFileName;
    button.addEventListener('click', () => {
      (0,_model_GABridge__WEBPACK_IMPORTED_MODULE_2__.sendTrackEventMessage)('download', 'click');
    });
  }
  let fileNameButton = document.querySelector('.sc-video-filename a.sc-download-button');
  fileNameButton.textContent = videoFileName;
}
function unloadVideo() {
  player.pause();
  // player.removeAttribute('src');
  // player.load();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8tcmVjb3JkaW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPLFNBQVNBLHFCQUFxQkEsQ0FBQ0MsUUFBUSxFQUFFQyxNQUFNLEVBQWM7RUFBQSxJQUFaQyxLQUFLLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEVBQUU7RUFDaEVHLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxXQUFXLENBQUM7SUFBRUMsSUFBSSxFQUFFLHlCQUF5QjtJQUFFVCxRQUFRO0lBQUVDLE1BQU07SUFBRUM7RUFBTSxDQUFDLENBQUM7QUFDMUY7QUFFTyxTQUFTUSxvQkFBb0JBLENBQUNDLElBQUksRUFBRTtFQUN6Q0wsTUFBTSxDQUFDQyxPQUFPLENBQUNDLFdBQVcsQ0FBQztJQUFFQyxJQUFJLEVBQUUsd0JBQXdCO0lBQUVFO0VBQUssQ0FBQyxDQUFDO0FBQ3RFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTndDO0FBRWpDLFNBQVNFLFFBQVFBLENBQUNDLElBQUksRUFBRTtFQUM5QixJQUFJQyxLQUFLLEdBQUdELElBQUksQ0FBQ0UsUUFBUSxDQUFDLENBQUM7RUFDM0IsSUFBSUMsSUFBSSxHQUFHRixLQUFLLElBQUksRUFBRSxHQUFHLElBQUksR0FBRyxJQUFJO0VBQ3BDLElBQUlHLE9BQU8sR0FBR04sdURBQWMsQ0FBQ0UsSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQy9DLElBQUlDLE9BQU8sR0FBR1IsdURBQWMsQ0FBQ0UsSUFBSSxDQUFDTyxVQUFVLENBQUMsQ0FBQyxDQUFDO0VBQy9DTixLQUFLLEdBQUdBLEtBQUssR0FBRyxFQUFFO0VBQ2xCQSxLQUFLLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0VBQzVCLE9BQU87SUFBRUEsS0FBSztJQUFFRyxPQUFPO0lBQUVFLE9BQU87SUFBRUg7RUFBSyxDQUFDO0FBQ3pDO0FBRU8sU0FBU0ssVUFBVUEsQ0FBQ1IsSUFBSSxFQUFxQjtFQUFBLElBQW5CUyxZQUFZLEdBQUFwQixTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxFQUFFO0VBQ2pELElBQUlxQixRQUFRLEdBQUdYLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO0VBQzdCLElBQUlXLE9BQU8sR0FBR0QsUUFBUSxDQUFDVCxLQUFLLEdBQUcsR0FBRyxHQUFHUyxRQUFRLENBQUNOLE9BQU8sR0FBR0ssWUFBWSxHQUFHTixJQUFJO0VBQzNFLE9BQU9RLE9BQU87QUFDZjtBQUVPLFNBQVNDLFlBQVlBLENBQUNaLElBQUksRUFBRTtFQUNsQyxPQUFPQSxJQUFJLENBQUNhLFdBQVcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHZix1REFBYyxDQUFDRSxJQUFJLENBQUNjLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHaEIsdURBQWMsQ0FBQ0UsSUFBSSxDQUFDZSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHakIsdURBQWMsQ0FBQ0UsSUFBSSxDQUFDRSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHSix1REFBYyxDQUFDRSxJQUFJLENBQUNLLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdQLHVEQUFjLENBQUNFLElBQUksQ0FBQ08sVUFBVSxDQUFDLENBQUMsQ0FBQztBQUN6TztBQUVPLFNBQVNTLGVBQWVBLENBQUNoQixJQUFJLEVBQUU7RUFDckMsT0FBT0EsSUFBSSxDQUFDaUIsY0FBYyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUduQix1REFBYyxDQUFDRSxJQUFJLENBQUNrQixXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR3BCLHVEQUFjLENBQUNFLElBQUksQ0FBQ21CLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUdyQix1REFBYyxDQUFDRSxJQUFJLENBQUNvQixXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHdEIsdURBQWMsQ0FBQ0UsSUFBSSxDQUFDcUIsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBR3ZCLHVEQUFjLENBQUNFLElBQUksQ0FBQ3NCLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFDM1A7QUFFTyxTQUFTQyxRQUFRQSxDQUFDdkIsSUFBSSxFQUFFQyxLQUFLLEVBQUU7RUFDckNELElBQUksQ0FBQ3dCLE9BQU8sQ0FBQ3hCLElBQUksQ0FBQ3lCLE9BQU8sQ0FBQyxDQUFDLEdBQUl4QixLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFLLENBQUM7RUFDdkQsT0FBT0QsSUFBSTtBQUNaO0FBRU8sU0FBUzBCLE9BQU9BLENBQUMxQixJQUFJLEVBQUUyQixJQUFJLEVBQUU7RUFDbkMzQixJQUFJLENBQUN3QixPQUFPLENBQUN4QixJQUFJLENBQUN5QixPQUFPLENBQUMsQ0FBQyxHQUFJRSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSyxDQUFDO0VBQzNELE9BQU8zQixJQUFJO0FBQ1o7QUFFTyxJQUFJNEIsTUFBTSxHQUFHO0VBQ25CQyxFQUFFLEVBQUMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztFQUM3SEMsRUFBRSxFQUFDLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxVQUFVO0FBQzVILENBQUM7QUFFTSxTQUFTaEIsUUFBUUEsQ0FBQ2QsSUFBSSxFQUFFK0IsUUFBUSxFQUFFO0VBQ3hDLElBQUksQ0FBQ0EsUUFBUSxFQUFFO0lBQ2RBLFFBQVEsR0FBRyxJQUFJO0VBQ2hCO0VBQ0EsSUFBSUMsS0FBSztFQUNULFFBQU9ELFFBQVE7SUFDZCxLQUFLLElBQUk7TUFDUkMsS0FBSyxHQUFHSixNQUFNLENBQUNHLFFBQVEsQ0FBQyxDQUFDL0IsSUFBSSxDQUFDYyxRQUFRLENBQUMsQ0FBQyxDQUFDO01BQ3pDO0VBQ0Y7RUFDQSxPQUFPa0IsS0FBSztBQUNiO0FBRU8sU0FBU0MsTUFBTUEsQ0FBQ0MsU0FBUyxFQUFFO0VBQ2pDLElBQUlDLEtBQUssR0FBRyxJQUFJQyxJQUFJLENBQUMsQ0FBQztFQUN0QixJQUFJQyxHQUFHLEdBQUdGLEtBQUssQ0FBQ3RCLFdBQVcsQ0FBQyxDQUFDLEdBQUdxQixTQUFTLENBQUNyQixXQUFXLENBQUMsQ0FBQztFQUN2RCxJQUFJeUIsQ0FBQyxHQUFHSCxLQUFLLENBQUNyQixRQUFRLENBQUMsQ0FBQyxHQUFHb0IsU0FBUyxDQUFDcEIsUUFBUSxDQUFDLENBQUM7RUFDL0MsSUFBSXdCLENBQUMsR0FBRyxDQUFDLElBQUtBLENBQUMsS0FBSyxDQUFDLElBQUlILEtBQUssQ0FBQ3BCLE9BQU8sQ0FBQyxDQUFDLEdBQUdtQixTQUFTLENBQUNuQixPQUFPLENBQUMsQ0FBRSxFQUFFO0lBQ2hFc0IsR0FBRyxFQUFFO0VBQ047RUFDQSxPQUFPQSxHQUFHO0FBQ1g7QUFFTyxTQUFTRSxVQUFVQSxDQUFDdkMsSUFBSSxFQUFFO0VBQ2hDLElBQUl3QyxNQUFNLEdBQUcsSUFBSUosSUFBSSxDQUFDcEMsSUFBSSxDQUFDO0VBQzNCd0MsTUFBTSxDQUFDQyxVQUFVLENBQUNELE1BQU0sQ0FBQ25DLFVBQVUsQ0FBQyxDQUFDLEdBQUdtQyxNQUFNLENBQUNFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztFQUNuRSxPQUFPRixNQUFNO0FBQ2Q7QUFFTyxTQUFTRyxjQUFjQSxDQUFDQyxTQUFTLEVBQUVDLE9BQU8sRUFBRTtFQUNsRCxJQUFJQyxxQkFBcUIsR0FBRyxFQUFFLEdBQUcsSUFBSTtFQUNyQyxPQUFPLENBQUNQLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLEdBQUdOLFVBQVUsQ0FBQ0ssU0FBUyxDQUFDLElBQUlFLHFCQUFxQjtBQUM3RTtBQUVPLFNBQVNDLFlBQVlBLENBQUNILFNBQVMsRUFBRUMsT0FBTyxFQUFFO0VBQ2hELElBQUlHLG1CQUFtQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtFQUN4QyxPQUFPLENBQUNULFVBQVUsQ0FBQ00sT0FBTyxDQUFDLEdBQUdOLFVBQVUsQ0FBQ0ssU0FBUyxDQUFDLElBQUlJLG1CQUFtQjtBQUMzRTtBQUVPLFNBQVNDLFdBQVdBLENBQUNMLFNBQVMsRUFBRUMsT0FBTyxFQUFFO0VBQy9DLElBQUlLLGtCQUFrQixHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUk7RUFDNUMsT0FBTyxDQUFDWCxVQUFVLENBQUNNLE9BQU8sQ0FBQyxHQUFHTixVQUFVLENBQUNLLFNBQVMsQ0FBQyxJQUFJTSxrQkFBa0I7QUFDMUU7QUFFTyxTQUFTQyxZQUFZQSxDQUFDUCxTQUFTLEVBQUVDLE9BQU8sRUFBRTtFQUNoRCxJQUFJTyxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtFQUNqRCxPQUFPLENBQUNiLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLEdBQUdOLFVBQVUsQ0FBQ0ssU0FBUyxDQUFDLElBQUlRLG1CQUFtQjtBQUMzRTtBQUVPLFNBQVNDLGFBQWFBLENBQUNULFNBQVMsRUFBRUMsT0FBTyxFQUFFO0VBQ2pELElBQUlTLG9CQUFvQixHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSTtFQUMxRCxPQUFPLENBQUNmLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLEdBQUdOLFVBQVUsQ0FBQ0ssU0FBUyxDQUFDLElBQUlVLG9CQUFvQjtBQUM1RTtBQUVPLFNBQVNDLFlBQVlBLENBQUNYLFNBQVMsRUFBRUMsT0FBTyxFQUFFO0VBQ2hELElBQUlXLG1CQUFtQixHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0VBQ25ELE9BQU8sQ0FBQ2pCLFVBQVUsQ0FBQ00sT0FBTyxDQUFDLEdBQUdOLFVBQVUsQ0FBQ0ssU0FBUyxDQUFDLElBQUlZLG1CQUFtQjtBQUMzRTtBQUVPLFNBQVNDLHNCQUFzQkEsQ0FBQ2IsU0FBUyxFQUFFQyxPQUFPLEVBQUU7RUFDMUQsSUFBSWEsSUFBSSxHQUFHLEVBQUU7RUFDYixJQUFJSCxZQUFZLEdBQUdBLFlBQVksQ0FBQ1gsU0FBUyxFQUFFQyxPQUFPLENBQUM7RUFDbkQsSUFBSVUsWUFBWSxJQUFJLENBQUMsRUFBRTtJQUN0QixJQUFJSSxpQkFBaUIsR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNOLFlBQVksQ0FBQztJQUNoRCxJQUFJSSxpQkFBaUIsR0FBRyxDQUFDLEVBQUU7TUFDMUJELElBQUksR0FBR0MsaUJBQWlCLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEdBQUcsWUFBWTtJQUNuRCxDQUFDLE1BQU07TUFDTkosSUFBSSxHQUFHQyxpQkFBaUIsQ0FBQ0csUUFBUSxDQUFDLENBQUMsR0FBRyxXQUFXO0lBQ2xEO0VBQ0QsQ0FBQyxNQUFNO0lBQ04sSUFBSVQsYUFBYSxHQUFHQSxhQUFhLENBQUNULFNBQVMsRUFBRUMsT0FBTyxDQUFDO0lBQ3JELElBQUlRLGFBQWEsSUFBSSxDQUFDLEVBQUU7TUFDdkIsSUFBSVUsa0JBQWtCLEdBQUdILElBQUksQ0FBQ0MsS0FBSyxDQUFDUixhQUFhLENBQUM7TUFDbEQsSUFBSVUsa0JBQWtCLEdBQUcsQ0FBQyxFQUFFO1FBQzNCTCxJQUFJLEdBQUdLLGtCQUFrQixDQUFDRCxRQUFRLENBQUMsQ0FBQyxHQUFHLGFBQWE7TUFDckQsQ0FBQyxNQUFNO1FBQ05KLElBQUksR0FBR0ssa0JBQWtCLENBQUNELFFBQVEsQ0FBQyxDQUFDLEdBQUcsWUFBWTtNQUNwRDtJQUNELENBQUMsTUFBTTtNQUNOLElBQUlYLFlBQVksR0FBR0EsWUFBWSxDQUFDUCxTQUFTLEVBQUVDLE9BQU8sQ0FBQztNQUNuRCxJQUFJTSxZQUFZLElBQUksQ0FBQyxFQUFFO1FBQ3RCLElBQUlhLGlCQUFpQixHQUFHSixJQUFJLENBQUNDLEtBQUssQ0FBQ1YsWUFBWSxDQUFDO1FBQ2hELElBQUlhLGlCQUFpQixHQUFHLENBQUMsRUFBRTtVQUMxQk4sSUFBSSxHQUFHTSxpQkFBaUIsQ0FBQ0YsUUFBUSxDQUFDLENBQUMsR0FBRyxZQUFZO1FBQ25ELENBQUMsTUFBTTtVQUNOSixJQUFJLEdBQUdNLGlCQUFpQixDQUFDRixRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVc7UUFDbEQ7TUFDRCxDQUFDLE1BQU07UUFDTixJQUFJYixXQUFXLEdBQUdBLFdBQVcsQ0FBQ0wsU0FBUyxFQUFFQyxPQUFPLENBQUM7UUFDakQsSUFBSUksV0FBVyxJQUFJLENBQUMsRUFBRTtVQUNyQixJQUFJZ0IsZ0JBQWdCLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDWixXQUFXLENBQUM7VUFDOUMsSUFBSWdCLGdCQUFnQixHQUFHLENBQUMsRUFBRTtZQUN6QlAsSUFBSSxHQUFHTyxnQkFBZ0IsQ0FBQ0gsUUFBUSxDQUFDLENBQUMsR0FBRyxXQUFXO1VBQ2pELENBQUMsTUFBTTtZQUNOSixJQUFJLEdBQUdPLGdCQUFnQixDQUFDSCxRQUFRLENBQUMsQ0FBQyxHQUFHLFVBQVU7VUFDaEQ7UUFDRCxDQUFDLE1BQU07VUFDTixJQUFJZixZQUFZLEdBQUdBLFlBQVksQ0FBQ0gsU0FBUyxFQUFFQyxPQUFPLENBQUM7VUFDbkQsSUFBSUUsWUFBWSxJQUFJLENBQUMsRUFBRTtZQUN0QixJQUFJbUIsaUJBQWlCLEdBQUdOLElBQUksQ0FBQ0MsS0FBSyxDQUFDZCxZQUFZLENBQUM7WUFDaEQsSUFBSW1CLGlCQUFpQixHQUFHLENBQUMsRUFBRTtjQUMxQlIsSUFBSSxHQUFHUSxpQkFBaUIsQ0FBQ0osUUFBUSxDQUFDLENBQUMsR0FBRyxZQUFZO1lBQ25ELENBQUMsTUFBTTtjQUNOSixJQUFJLEdBQUdRLGlCQUFpQixDQUFDSixRQUFRLENBQUMsQ0FBQyxHQUFHLFdBQVc7WUFDbEQ7VUFDRCxDQUFDLE1BQU07WUFDTixJQUFJbkIsY0FBYyxHQUFHQSxjQUFjLENBQUNDLFNBQVMsRUFBRUMsT0FBTyxDQUFDO1lBQ3ZELElBQUlGLGNBQWMsR0FBRyxDQUFDLEVBQUU7Y0FDdkIsSUFBSXdCLG1CQUFtQixHQUFHUCxJQUFJLENBQUNDLEtBQUssQ0FBQ2xCLGNBQWMsQ0FBQztjQUNwRCxJQUFJd0IsbUJBQW1CLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QlQsSUFBSSxHQUFHUyxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjO2NBQ3ZELENBQUMsTUFBTTtnQkFDTkosSUFBSSxHQUFHUyxtQkFBbUIsQ0FBQ0wsUUFBUSxDQUFDLENBQUMsR0FBRyxhQUFhO2NBQ3REO1lBQ0QsQ0FBQyxNQUFNO2NBQ05KLElBQUksR0FBRyxVQUFVO1lBQ2xCO1VBQ0Q7UUFDRDtNQUNEO0lBQ0Q7RUFDRDtFQUNBLE9BQU9BLElBQUk7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLQTtBQUNPLFNBQVNVLGtCQUFrQkEsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDM0MsT0FBT1YsSUFBSSxDQUFDVyxNQUFNLENBQUMsQ0FBQyxJQUFJRCxHQUFHLEdBQUdELEdBQUcsQ0FBQyxHQUFHQSxHQUFHO0FBQzFDOztBQUVBO0FBQ0E7QUFDTyxTQUFTRyxZQUFZQSxDQUFDSCxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUNyQyxPQUFPVixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDVyxNQUFNLENBQUMsQ0FBQyxJQUFJRCxHQUFHLEdBQUdELEdBQUcsQ0FBQyxDQUFDLEdBQUdBLEdBQUc7QUFDdEQ7O0FBRUE7QUFDQTtBQUNPLFNBQVNJLHFCQUFxQkEsQ0FBQ0osR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDOUMsT0FBT1YsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ1csTUFBTSxDQUFDLENBQUMsSUFBSUQsR0FBRyxHQUFHRCxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBR0EsR0FBRztBQUMxRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNLLGlCQUFpQkEsQ0FBQ0wsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDMUMsT0FBT0QsR0FBRyxHQUFHVCxJQUFJLENBQUNXLE1BQU0sQ0FBQyxDQUFDLElBQUlELEdBQUcsR0FBR0QsR0FBRyxDQUFDO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU00sd0JBQXdCQSxDQUFDTixHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUNqRCxPQUFPVixJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDVyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBR0QsR0FBRyxHQUFHRCxHQUFHLENBQUMsR0FBR0EsR0FBRyxDQUFDO0FBQzFEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTTyxNQUFNQSxDQUFDQyxLQUFLLEVBQUU7RUFDNUIsT0FBTyxDQUFDQSxLQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUM7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLEtBQUtBLENBQUNELEtBQUssRUFBRTtFQUMzQixPQUFPLENBQUNELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDO0FBQ3ZCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRSxTQUFTQSxDQUFDRixLQUFLLEVBQUU7RUFDL0IsT0FBT0EsS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRyxPQUFPQSxDQUFDSCxLQUFLLEVBQUU7RUFDN0IsSUFBSUEsS0FBSyxLQUFLLENBQUMsSUFBSUEsS0FBSyxLQUFLLENBQUMsRUFBRTtJQUM5QixPQUFPLElBQUk7RUFDYjtFQUVBLElBQUlELE1BQU0sQ0FBQ0MsS0FBSyxDQUFDLEVBQUU7SUFDakIsT0FBTyxLQUFLO0VBQ2Q7RUFFQSxNQUFNSSxDQUFDLEdBQUdyQixJQUFJLENBQUNzQixJQUFJLENBQUNMLEtBQUssQ0FBQztFQUMxQixLQUFLLElBQUlNLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSUYsQ0FBQyxFQUFFRSxDQUFDLEVBQUUsRUFBRTtJQUMzQixJQUFJTixLQUFLLEdBQUdNLENBQUMsS0FBSyxDQUFDLEVBQUU7TUFDbkIsT0FBTyxLQUFLO0lBQ2Q7RUFDRjtFQUVBLE9BQU8sSUFBSTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLG1CQUFtQkEsQ0FBQ1AsS0FBSyxFQUFhO0VBQUEsSUFBWFEsS0FBSyxHQUFBaEcsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUNsRCxNQUFNaUcsQ0FBQyxHQUFHMUIsSUFBSSxDQUFDMkIsR0FBRyxDQUFDLEVBQUUsRUFBRUYsS0FBSyxDQUFDO0VBRTdCLE9BQU96QixJQUFJLENBQUM0QixLQUFLLENBQUNYLEtBQUssR0FBR1MsQ0FBQyxDQUFDLEdBQUdBLENBQUM7QUFDbEM7QUFFTyxTQUFTRyxNQUFNQSxDQUFDWixLQUFLLEVBQUU7RUFDNUIsT0FBT08sbUJBQW1CLENBQUNQLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdEM7QUFFTyxTQUFTYSxNQUFNQSxDQUFDYixLQUFLLEVBQUU7RUFDNUIsT0FBT08sbUJBQW1CLENBQUNQLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdEM7QUFFTyxTQUFTYyxNQUFNQSxDQUFDZCxLQUFLLEVBQUU7RUFDNUIsT0FBT08sbUJBQW1CLENBQUNQLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU2UsU0FBU0EsQ0FBQ0MsS0FBSyxFQUFFdkcsTUFBTSxFQUFFO0VBQ3ZDLElBQUl1RyxLQUFLLEdBQUcsQ0FBQyxFQUFFO0lBQ2JBLEtBQUssR0FBR3ZHLE1BQU0sR0FBSXVHLEtBQUssR0FBR3ZHLE1BQU87RUFDbkM7RUFFQSxJQUFJdUcsS0FBSyxJQUFJdkcsTUFBTSxFQUFFO0lBQ25CLE9BQU91RyxLQUFLLEdBQUd2RyxNQUFNO0VBQ3ZCO0VBRUEsT0FBT3VHLEtBQUs7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0MsU0FBU0EsQ0FBQ2pCLEtBQUssRUFBRWtCLFVBQVUsRUFBRUMsV0FBVyxFQUFFO0VBQ3hELE9BQU8sRUFDTG5CLEtBQUssR0FBR2pCLElBQUksQ0FBQ1MsR0FBRyxDQUFDMEIsVUFBVSxFQUFFQyxXQUFXLENBQUMsSUFDekNuQixLQUFLLEdBQUdqQixJQUFJLENBQUNVLEdBQUcsQ0FBQ3lCLFVBQVUsRUFBRUMsV0FBVyxDQUFDLENBQzFDO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLFNBQVNBLENBQUNwQixLQUFLLEVBQUVrQixVQUFVLEVBQUVDLFdBQVcsRUFBRTtFQUN4RCxPQUFPcEMsSUFBSSxDQUFDUyxHQUFHLENBQ2JULElBQUksQ0FBQ1UsR0FBRyxDQUFDTyxLQUFLLEVBQUVqQixJQUFJLENBQUNTLEdBQUcsQ0FBQzBCLFVBQVUsRUFBRUMsV0FBVyxDQUFDLENBQUMsRUFDbERwQyxJQUFJLENBQUNVLEdBQUcsQ0FBQ3lCLFVBQVUsRUFBRUMsV0FBVyxDQUNsQyxDQUFDO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRSxrQkFBa0JBLENBQUNDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxLQUFLLEVBQUU7RUFDcERBLEtBQUssRUFBRTtFQUVQLElBQUlsQixDQUFDLEdBQUcsQ0FBQztFQUNULE1BQU1tQixZQUFZLEdBQUcsRUFBRTtFQUN2QixNQUFNQyxTQUFTLEdBQUcsQ0FBQ0gsR0FBRyxHQUFHRCxLQUFLLElBQUlFLEtBQUs7RUFFdkMsT0FBTyxFQUFFbEIsQ0FBQyxHQUFHa0IsS0FBSyxFQUFFO0lBQ2xCQyxZQUFZLENBQUNFLElBQUksQ0FBQ3JCLENBQUMsR0FBR29CLFNBQVMsR0FBR0osS0FBSyxDQUFDO0VBQzFDO0VBRUEsT0FBT0csWUFBWTtBQUNyQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0csV0FBV0EsQ0FBQ0MsTUFBTSxFQUFFUCxLQUFLLEVBQUVDLEdBQUcsRUFBRTtFQUM5QyxPQUFPRCxLQUFLLEdBQUcsQ0FBQ0MsR0FBRyxHQUFHRCxLQUFLLElBQUlPLE1BQU07QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLEdBQUdBLENBQUM5QixLQUFLLEVBQUUrQixJQUFJLEVBQUVDLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUU7RUFDakQsT0FBT0MsSUFBSSxDQUFDQyxJQUFJLENBQUNwQyxLQUFLLEVBQUUrQixJQUFJLEVBQUVDLElBQUksQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNHLGtCQUFrQkEsQ0FBQ3JDLEtBQUssRUFBRXNDLElBQUksRUFBRUMsQ0FBQyxFQUFFO0VBQ2pELE9BQU92QyxLQUFLLEdBQUcsQ0FBQ3NDLElBQUksR0FBR3RDLEtBQUssSUFBSXVDLENBQUM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQyxNQUFNQSxDQUFDeEMsS0FBSyxFQUFFeUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFFBQVEsRUFBRTtFQUN6RCxJQUFJLENBQUNGLE1BQU0sRUFBRTtJQUNYQSxNQUFNLEdBQUcsR0FBRztFQUNkO0VBQ0EsSUFBSUcsS0FBSyxDQUFDRixTQUFTLENBQUMsRUFBRTtJQUNwQkEsU0FBUyxHQUFHLENBQUM7RUFDZjtFQUNBLElBQUksQ0FBQ0MsUUFBUSxFQUFFO0lBQ2JBLFFBQVEsR0FBRyxHQUFHO0VBQ2hCO0VBQ0EsTUFBTUUsU0FBUyxHQUFHN0MsS0FBSyxHQUFHLENBQUM7RUFDM0IsSUFBSThDLEdBQUcsR0FBRy9ELElBQUksQ0FBQ0MsS0FBSyxDQUFDZ0IsS0FBSyxDQUFDLENBQUNmLFFBQVEsQ0FBQyxDQUFDO0VBQ3RDLE1BQU04RCxHQUFHLEdBQUdELEdBQUcsQ0FBQ3JJLE1BQU07RUFFdEIsSUFBSWlJLFNBQVMsS0FBSyxDQUFDLElBQUlBLFNBQVMsR0FBR0ssR0FBRyxFQUFFO0lBQ3RDTCxTQUFTLElBQUlLLEdBQUc7SUFFaEIsTUFBTUMsT0FBTyxHQUFHTCxRQUFRLElBQUksR0FBRztJQUUvQixPQUFPRCxTQUFTLEVBQUUsRUFBRTtNQUNsQkksR0FBRyxHQUFHRSxPQUFPLEdBQUdGLEdBQUc7SUFDckI7RUFDRjtFQUVBLElBQUlMLE1BQU0sS0FBSyxJQUFJLElBQUlLLEdBQUcsQ0FBQ3JJLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDckMsTUFBTXdJLFVBQVUsR0FBR2xFLElBQUksQ0FBQ0MsS0FBSyxDQUFDOEQsR0FBRyxDQUFDckksTUFBTSxHQUFHLENBQUMsQ0FBQztJQUM3QyxNQUFNeUksV0FBVyxHQUFHSixHQUFHLENBQUNySSxNQUFNLEdBQUcsQ0FBQztJQUNsQyxNQUFNMEksUUFBUSxHQUFHTCxHQUFHLENBQUNNLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDOUIsSUFBSTlDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFFVixPQUFPLEVBQUVBLENBQUMsR0FBRzJDLFVBQVUsRUFBRTtNQUN2QkUsUUFBUSxDQUFDRSxNQUFNLENBQUNILFdBQVcsR0FBRyxDQUFDLEdBQUc1QyxDQUFDLEVBQUUsQ0FBQyxFQUFFbUMsTUFBTSxDQUFDO0lBQ2pEO0lBRUEsSUFBSVMsV0FBVyxLQUFLLENBQUMsRUFBRTtNQUNyQkMsUUFBUSxDQUFDRyxLQUFLLENBQUMsQ0FBQztJQUNsQjtJQUVBUixHQUFHLEdBQUdLLFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLEVBQUUsQ0FBQztFQUN6QjtFQUVBLElBQUlWLFNBQVMsS0FBSyxDQUFDLEVBQUU7SUFDbkJDLEdBQUcsSUFBSUQsU0FBUyxDQUFDNUQsUUFBUSxDQUFDLENBQUMsQ0FBQ3VFLE1BQU0sQ0FBQyxDQUFDLENBQUM7RUFDdkM7RUFFQSxPQUFPVixHQUFHO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU1csY0FBY0EsQ0FBQ3pELEtBQUssRUFBRTBELGFBQWEsRUFBRWpCLE1BQU0sRUFBRTtFQUMzRCxJQUFJaUIsYUFBYSxLQUFLLElBQUksRUFBRTtJQUMxQkEsYUFBYSxHQUFHLElBQUk7RUFDdEI7RUFDQSxJQUFJLENBQUNqQixNQUFNLEVBQUU7SUFDWEEsTUFBTSxHQUFHLEdBQUc7RUFDZDtFQUNBLE1BQU1JLFNBQVMsR0FBRzdDLEtBQUssR0FBRyxDQUFDO0VBQzNCLElBQUkyRCxRQUFRLEdBQUduQixNQUFNLENBQUN6RCxJQUFJLENBQUNDLEtBQUssQ0FBQ2dCLEtBQUssQ0FBQyxFQUFFeUMsTUFBTSxDQUFDO0VBRWhELElBQUlJLFNBQVMsS0FBSyxDQUFDLElBQUlhLGFBQWEsRUFBRTtJQUNwQ0MsUUFBUSxJQUFJZCxTQUFTLENBQUNlLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0osTUFBTSxDQUFDLENBQUMsQ0FBQztFQUM1QztFQUVBLE9BQU9HLFFBQVE7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRSxnQkFBZ0JBLENBQUM3RCxLQUFLLEVBQUU7RUFDdEMsSUFBSUEsS0FBSyxJQUFJLEVBQUUsSUFBSUEsS0FBSyxJQUFJLEVBQUUsRUFBRTtJQUM5QixPQUFPLElBQUk7RUFDYjtFQUVBLElBQUlBLEtBQUssS0FBSyxDQUFDLEVBQUU7SUFDZixPQUFPLEVBQUU7RUFDWDtFQUVBLFFBQVFBLEtBQUssR0FBRyxFQUFFO0lBQ2hCLEtBQUssQ0FBQztNQUNKLE9BQU8sSUFBSTtJQUNiLEtBQUssQ0FBQztNQUNKLE9BQU8sSUFBSTtJQUNiLEtBQUssQ0FBQztNQUNKLE9BQU8sSUFBSTtJQUNiO01BQ0UsT0FBTyxJQUFJO0VBQ2Y7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBUy9FLGNBQWNBLENBQUMrRSxLQUFLLEVBQUU7RUFDcEMsT0FBT0EsS0FBSyxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUdBLEtBQUssR0FBR0EsS0FBSyxDQUFDZixRQUFRLENBQUMsQ0FBQztBQUNwRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVM2RSxLQUFLQSxDQUFDOUQsS0FBSyxFQUFFO0VBQzNCLElBQUlBLEtBQUssR0FBRyxTQUFTLEVBQUU7SUFDckIsTUFBTSxJQUFJK0QsS0FBSyxDQUFDLGtDQUFrQyxDQUFDO0VBQ3JEO0VBRUEsTUFBTUMsYUFBYSxHQUFHLENBQ3BCLEVBQUUsRUFDRixLQUFLLEVBQ0wsS0FBSyxFQUNMLE9BQU8sRUFDUCxNQUFNLEVBQ04sTUFBTSxFQUNOLEtBQUssRUFDTCxPQUFPLEVBQ1AsT0FBTyxFQUNQLE1BQU0sRUFDTixLQUFLLEVBQ0wsUUFBUSxFQUNSLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixVQUFVLENBQ1g7RUFDRCxNQUFNQyxhQUFhLEdBQUcsQ0FDcEIsRUFBRSxFQUNGLEVBQUUsRUFDRixRQUFRLEVBQ1IsUUFBUSxFQUNSLE9BQU8sRUFDUCxPQUFPLEVBQ1AsT0FBTyxFQUNQLFNBQVMsRUFDVCxRQUFRLEVBQ1IsUUFBUSxDQUNUO0VBQ0QsSUFBSUMsUUFBUSxHQUFHLEVBQUU7RUFFakIsTUFBTUMsUUFBUSxHQUFHbkUsS0FBSyxHQUFHLE9BQU87RUFDaENBLEtBQUssSUFBSSxPQUFPO0VBRWhCLE1BQU1vRSxTQUFTLEdBQUdwRSxLQUFLLEdBQUcsSUFBSTtFQUM5QkEsS0FBSyxJQUFJLElBQUk7RUFFYixNQUFNcUUsUUFBUSxHQUFHckUsS0FBSyxHQUFHLEdBQUc7RUFDNUJBLEtBQUssSUFBSSxHQUFHO0VBRVosTUFBTXNFLElBQUksR0FBR3RFLEtBQUssR0FBRyxFQUFFO0VBQ3ZCQSxLQUFLLElBQUksRUFBRTtFQUVYLE1BQU11RSxJQUFJLEdBQUd2RSxLQUFLLEdBQUcsRUFBRTtFQUV2QixJQUFJbUUsUUFBUSxLQUFLLENBQUMsRUFBRTtJQUNsQkQsUUFBUSxJQUFJQSxRQUFRLENBQUN6SixNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJO0lBQzdDeUosUUFBUSxJQUFJSixLQUFLLENBQUNLLFFBQVEsQ0FBQyxHQUFHLFVBQVU7RUFDMUM7RUFFQSxJQUFJQyxTQUFTLEtBQUssQ0FBQyxFQUFFO0lBQ25CRixRQUFRLElBQUlBLFFBQVEsQ0FBQ3pKLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUk7SUFDN0N5SixRQUFRLElBQUlKLEtBQUssQ0FBQ00sU0FBUyxDQUFDLEdBQUcsV0FBVztFQUM1QztFQUVBLElBQUlDLFFBQVEsS0FBSyxDQUFDLEVBQUU7SUFDbEJILFFBQVEsSUFBSUEsUUFBUSxDQUFDekosTUFBTSxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSTtJQUM3Q3lKLFFBQVEsSUFBSUosS0FBSyxDQUFDTyxRQUFRLENBQUMsR0FBRyxVQUFVO0VBQzFDO0VBRUEsSUFBSUMsSUFBSSxLQUFLLENBQUMsSUFBSUMsSUFBSSxLQUFLLENBQUMsRUFBRTtJQUM1QkwsUUFBUSxJQUFJQSxRQUFRLENBQUN6SixNQUFNLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxHQUFHO0lBRTVDLElBQUk2SixJQUFJLEdBQUcsQ0FBQyxFQUFFO01BQ1pKLFFBQVEsSUFBSUYsYUFBYSxDQUFDTSxJQUFJLEdBQUcsRUFBRSxHQUFHQyxJQUFJLENBQUM7SUFDN0MsQ0FBQyxNQUFNO01BQ0xMLFFBQVEsSUFBSUQsYUFBYSxDQUFDSyxJQUFJLENBQUM7TUFFL0IsSUFBSUMsSUFBSSxLQUFLLENBQUMsRUFBRTtRQUNkTCxRQUFRLElBQUksR0FBRyxHQUFHRixhQUFhLENBQUNPLElBQUksQ0FBQztNQUN2QztJQUNGO0VBQ0Y7RUFFQSxJQUFJTCxRQUFRLENBQUN6SixNQUFNLEtBQUssQ0FBQyxFQUFFO0lBQ3pCLE9BQU8sTUFBTTtFQUNmO0VBRUEsT0FBT3lKLFFBQVE7QUFDakI7QUFFTyxTQUFTTSxjQUFjQSxDQUFDQyxDQUFDLEVBQUU7RUFDaEMsTUFBTUMsR0FBRyxHQUFHRCxDQUFDLENBQUN4RixRQUFRLENBQUMsRUFBRSxDQUFDO0VBQzFCLE9BQU95RixHQUFHLENBQUNqSyxNQUFNLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBR2lLLEdBQUcsR0FBR0EsR0FBRztBQUMzQztBQUVPLFNBQVNDLFFBQVFBLENBQUNDLEdBQUcsRUFBRTtFQUM1QixPQUFPSixjQUFjLENBQUNJLEdBQUcsQ0FBQ0MsQ0FBQyxDQUFDLEdBQUdMLGNBQWMsQ0FBQ0ksR0FBRyxDQUFDRSxDQUFDLENBQUMsR0FBR04sY0FBYyxDQUFDSSxHQUFHLENBQUNHLENBQUMsQ0FBQztBQUM5RTtBQUVPLFNBQVNDLFFBQVFBLENBQUNOLEdBQUcsRUFBRTtFQUM1QixNQUFNL0csTUFBTSxHQUFHLDJDQUEyQyxDQUFDc0gsSUFBSSxDQUFDUCxHQUFHLENBQUM7RUFDcEUsT0FBTy9HLE1BQU0sR0FDVDtJQUNFa0gsQ0FBQyxFQUFFSyxRQUFRLENBQUN2SCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzFCbUgsQ0FBQyxFQUFFSSxRQUFRLENBQUN2SCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzFCb0gsQ0FBQyxFQUFFRyxRQUFRLENBQUN2SCxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQzFCc0IsUUFBUSxFQUFFLFNBQUFBLENBQUEsRUFBWTtNQUNwQixPQUFPLElBQUksR0FBRyxJQUFJLENBQUM0RixDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQ0MsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUNDLENBQUM7SUFDeEQ7RUFDRixDQUFDLEdBQ0QsSUFBSTtBQUNWO0FBRU8sU0FBU0ksUUFBUUEsQ0FBQ0MsT0FBTyxFQUFFO0VBQ2hDLE9BQVFBLE9BQU8sR0FBR3JHLElBQUksQ0FBQ3NHLEVBQUUsR0FBSSxHQUFHO0FBQ2xDO0FBRU8sU0FBU0MsUUFBUUEsQ0FBQ0MsR0FBRyxFQUFFO0VBQzVCLE9BQVFBLEdBQUcsR0FBRyxHQUFHLEdBQUl4RyxJQUFJLENBQUNzRyxFQUFFO0FBQzlCO0FBRU8sU0FBU0csVUFBVUEsQ0FBQ3hGLEtBQUssRUFBRVIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDMUMsTUFBTWdHLENBQUMsR0FBRzFHLElBQUksQ0FBQ1UsR0FBRyxDQUFDLENBQUMsRUFBRVYsSUFBSSxDQUFDUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUNRLEtBQUssR0FBR1IsR0FBRyxLQUFLQyxHQUFHLEdBQUdELEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDL0QsT0FBT2lHLENBQUMsR0FBR0EsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUdBLENBQUMsQ0FBQztBQUM1QjtBQUVPLFNBQVN0RCxJQUFJQSxDQUFDdUQsQ0FBQyxFQUFFWCxDQUFDLEVBQUVZLENBQUMsRUFBRTtFQUM1QixPQUFPRCxDQUFDLEdBQUdDLENBQUMsSUFBSVosQ0FBQyxHQUFHVyxDQUFDLENBQUM7RUFDdEI7RUFDQTtBQUNGOztBQUVPLFNBQVNFLEdBQUdBLENBQUNGLENBQUMsRUFBRVgsQ0FBQyxFQUFFWSxDQUFDLEVBQUU7RUFDM0IsT0FBT3hELElBQUksQ0FBQ3VELENBQUMsRUFBRVgsQ0FBQyxFQUFFWSxDQUFDLENBQUM7QUFDdEI7QUFFTyxTQUFTdkQsSUFBSUEsQ0FBQ3BDLEtBQUssRUFBRVIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDcEMsT0FBTyxDQUFDTyxLQUFLLEdBQUdSLEdBQUcsS0FBS0MsR0FBRyxHQUFHRCxHQUFHLENBQUM7QUFDcEM7QUFFTyxTQUFTcUcsS0FBS0EsQ0FBQzdGLEtBQUssRUFBRVIsR0FBRyxFQUFFQyxHQUFHLEVBQUU7RUFDckMsT0FBT1YsSUFBSSxDQUFDVSxHQUFHLENBQUNWLElBQUksQ0FBQ1MsR0FBRyxDQUFDUSxLQUFLLEVBQUVQLEdBQUcsQ0FBQyxFQUFFRCxHQUFHLENBQUM7QUFDNUM7QUFFTyxTQUFTc0csR0FBR0EsQ0FBQ3ZELENBQUMsRUFBRTlFLENBQUMsRUFBRTtFQUN4QixPQUFPLENBQUU4RSxDQUFDLEdBQUc5RSxDQUFDLEdBQUlBLENBQUMsSUFBSUEsQ0FBQztBQUMxQjs7QUFFQTtBQUNPLFNBQVNzSSxPQUFPQSxDQUFDeEQsQ0FBQyxFQUFFOUUsQ0FBQyxFQUFFO0VBQzVCLE9BQU8sQ0FBRThFLENBQUMsR0FBRzlFLENBQUMsR0FBSUEsQ0FBQyxJQUFJQSxDQUFDO0FBQzFCOztBQUVBO0FBQ08sU0FBU3VJLFFBQVFBLENBQUNDLElBQUksRUFBRTtFQUM3QixPQUFPRixPQUFPLENBQUNoSCxJQUFJLENBQUNtSCxHQUFHLENBQUNELElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFDaEQ7O0FBRUE7QUFDTyxTQUFTRSxPQUFPQSxDQUFDVixDQUFDLEVBQUU7RUFDekIsTUFBTW5GLENBQUMsR0FBR3ZCLElBQUksQ0FBQ0MsS0FBSyxDQUFDeUcsQ0FBQyxDQUFDO0VBQ3ZCLE1BQU1XLENBQUMsR0FBR0wsT0FBTyxDQUFDTixDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ3ZCLE1BQU1ZLENBQUMsR0FBR0QsQ0FBQyxHQUFHQSxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBR0EsQ0FBQyxDQUFDO0VBQ2pDLE9BQU9qRSxJQUFJLENBQUNrRSxDQUFDLEVBQUVMLFFBQVEsQ0FBQzFGLENBQUMsQ0FBQyxFQUFFMEYsUUFBUSxDQUFDMUYsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQ2hEO0FBRU8sU0FBU2dHLFdBQVdBLENBQUM5RyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtFQUNwQyxPQUFPRCxHQUFHLEdBQUdULElBQUksQ0FBQ1csTUFBTSxDQUFDLENBQUMsSUFBSUQsR0FBRyxHQUFHRCxHQUFHLENBQUM7QUFDMUM7QUFFTyxTQUFTK0csU0FBU0EsQ0FBQy9HLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0VBQ2xDLE9BQU9WLElBQUksQ0FBQ0MsS0FBSyxDQUFDUSxHQUFHLEdBQUdULElBQUksQ0FBQ1csTUFBTSxDQUFDLENBQUMsSUFBSUQsR0FBRyxHQUFHRCxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDMUQ7QUFFTyxTQUFTZ0gsUUFBUUEsQ0FBQ3hHLEtBQUssRUFBRStCLElBQUksRUFBRUMsSUFBSSxFQUFFQyxJQUFJLEVBQUVDLElBQUksRUFBRTtFQUN0RCxPQUFPMkQsS0FBSyxDQUFDMUQsSUFBSSxDQUFDQyxJQUFJLENBQUNwQyxLQUFLLEVBQUUrQixJQUFJLEVBQUVDLElBQUksQ0FBQyxFQUFFQyxJQUFJLEVBQUVDLElBQUksQ0FBQyxFQUFFRCxJQUFJLEVBQUVDLElBQUksQ0FBQztBQUNyRTtBQUVPLFNBQVN1RSxRQUFRQSxDQUFBLEVBTXRCO0VBQUEsSUFMQUMsS0FBSyxHQUFBbE0sU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUFBLElBQ1RtTSxTQUFTLEdBQUFuTSxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBR3VFLElBQUksQ0FBQ3NHLEVBQUU7RUFBQSxJQUNuQnVCLElBQUksR0FBQXBNLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7RUFBQSxJQUNScU0sS0FBSyxHQUFBck0sU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUFBLElBQ1RzTSxTQUFTLEdBQUF0TSxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDO0VBRWIsT0FBT3VFLElBQUksQ0FBQ21ILEdBQUcsQ0FBQ1EsS0FBSyxHQUFHQyxTQUFTLEdBQUdDLElBQUksR0FBR0MsS0FBSyxDQUFDLEdBQUdDLFNBQVM7QUFDL0Q7QUFFTyxTQUFTQyxTQUFTQSxDQUFDSCxJQUFJLEVBQUVJLFNBQVMsRUFBRUMsUUFBUSxFQUFFO0VBQ25ELE9BQU9wQixLQUFLLENBQUNlLElBQUksR0FBR0ksU0FBUyxFQUFFLEdBQUcsRUFBRUMsUUFBUSxDQUFDLEdBQUdBLFFBQVE7QUFDMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLE9BQU9BLENBQUNsSCxLQUFLLEVBQUVtSCxNQUFNLEVBQWtCO0VBQUEsSUFBaEJDLFFBQVEsR0FBQTVNLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLEdBQUc7RUFDbkQsT0FBTyxDQUFDMk0sTUFBTSxHQUFHbkgsS0FBSyxJQUFJb0gsUUFBUTtBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0MsTUFBTUEsQ0FDcEJySCxLQUFLLEVBS0w7RUFBQSxJQUpBbUgsTUFBTSxHQUFBM00sU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUFBLElBQ1Y0TSxRQUFRLEdBQUE1TSxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxHQUFHO0VBQUEsSUFDZHFNLEtBQUssR0FBQXJNLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUM7RUFBQSxJQUNUOE0sVUFBVSxHQUFBOU0sU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQztFQUVkLE9BQU9xTSxLQUFLLEdBQUdTLFVBQVUsR0FBRyxDQUFDSCxNQUFNLEdBQUduSCxLQUFLLElBQUlvSCxRQUFRO0FBQ3pEO0FBRU8sU0FBU0csdUJBQXVCQSxDQUFDYixLQUFLLEVBQUU7RUFDN0MsTUFBTWMsTUFBTSxHQUFHekksSUFBSSxDQUFDc0csRUFBRSxHQUFHLENBQUM7RUFDMUIsT0FBT3FCLEtBQUssR0FBR2MsTUFBTSxHQUFHLENBQUMsRUFBRTtJQUN6QmQsS0FBSyxJQUFJYyxNQUFNO0VBQ2pCO0VBQ0EsT0FBT2QsS0FBSyxHQUFHLENBQUNjLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDMUJkLEtBQUssSUFBSWMsTUFBTTtFQUNqQjtFQUNBLE9BQU9kLEtBQUs7QUFDZDtBQUVPLFNBQVNlLHNCQUFzQkEsQ0FBQ3pILEtBQUssRUFBRTtFQUM1QyxPQUFPMEgsTUFBTSxDQUFDMUgsS0FBSyxDQUFDMkgsT0FBTyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6Qzs7Ozs7O1VDMXJCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDUTtBQUNKO0FBRXpEaE4sTUFBTSxDQUFDaU4sT0FBTyxDQUFDQyxLQUFLLENBQUNDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFHbkssTUFBTSxJQUFLO0VBQzdDLElBQUlvSyxVQUFVLEdBQUcsTUFBTTtFQUN2QixJQUFJcEssTUFBTSxFQUFFO0lBQ1YsSUFBSUEsTUFBTSxDQUFDcUssSUFBSSxFQUFFO01BQ2YsSUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ3hLLE1BQU0sQ0FBQ3FLLElBQUksQ0FBQztNQUNsQyxJQUFJQyxJQUFJLENBQUNHLFFBQVEsRUFBRTtRQUNqQkwsVUFBVSxHQUFHRSxJQUFJLENBQUNHLFFBQVEsQ0FBQ0MsV0FBVztNQUN4QztJQUNGO0VBQ0Y7RUFDQSxJQUFJQyxpQkFBaUI7RUFDckIsUUFBUVAsVUFBVTtJQUNoQixLQUFLLE1BQU07SUFDWCxLQUFLLE9BQU87TUFDVk8saUJBQWlCLEdBQUdQLFVBQVUsSUFBSSxPQUFPO01BQ3pDO0lBQ0Y7TUFDRSxJQUFJUSxrQkFBa0IsR0FBR0MsTUFBTSxDQUFDQyxVQUFVLENBQUMsOEJBQThCLENBQUM7TUFDMUUsSUFBSUMsVUFBVSxHQUFHSCxrQkFBa0IsQ0FBQ0ksT0FBTztNQUMzQ0wsaUJBQWlCLEdBQUcsQ0FBQ0ksVUFBVTtNQUMvQjtFQUNKO0VBQ0FFLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUNDLFlBQVksQ0FBQyxrQkFBa0IsRUFBRVQsaUJBQWlCLENBQUM7QUFDaEcsQ0FBQyxDQUFDO0FBRUZFLE1BQU0sQ0FBQ1EsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLE1BQU07RUFDdENDLG1CQUFtQixDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUZ0TyxNQUFNLENBQUNDLE9BQU8sQ0FBQ3NPLFNBQVMsQ0FBQ0MsV0FBVyxDQUFDLENBQUNDLEdBQUcsRUFBRUMsTUFBTSxFQUFFQyxZQUFZLEtBQUs7RUFDbEUsUUFBUUYsR0FBRyxDQUFDdE8sSUFBSTtJQUNkLEtBQUsseUJBQXlCO01BQzVCOE4sUUFBUSxDQUFDQyxJQUFJLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQ0MsWUFBWSxDQUFDLGtCQUFrQixFQUFFSyxHQUFHLENBQUNkLGlCQUFpQixDQUFDO01BQ2xHO0lBQ0YsS0FBSywwQkFBMEI7TUFDN0JpQixXQUFXLENBQUMsQ0FBQztNQUNiO0lBQ0YsS0FBSyx3QkFBd0I7TUFDM0JOLG1CQUFtQixDQUFDLENBQUM7TUFDckI7SUFDRixLQUFLLHVCQUF1QjtNQUMxQk8sV0FBVyxDQUFDSixHQUFHLENBQUM7TUFDaEI7RUFDSjtBQUNGLENBQUMsQ0FBQztBQUVGLElBQUlLLE1BQU0sR0FBR2IsUUFBUSxDQUFDRSxhQUFhLENBQUMsa0JBQWtCLENBQUM7QUFDdkRXLE1BQU0sQ0FBQ1YsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7QUFDcENVLE1BQU0sQ0FBQ1YsWUFBWSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUM7QUFDdkNVLE1BQU0sQ0FBQ1YsWUFBWSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUM7QUFDMUNVLE1BQU0sQ0FBQ1YsWUFBWSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUM7QUFDcENVLE1BQU0sQ0FBQ1QsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU07RUFDdkNDLG1CQUFtQixDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBRUYsU0FBU0EsbUJBQW1CQSxDQUFBLEVBQUc7RUFDN0J0TyxNQUFNLENBQUNpTixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzRCLElBQUksQ0FBRUMsS0FBSyxJQUFLO0lBQ2xELElBQUlQLEdBQUcsR0FBRztNQUNSdE8sSUFBSSxFQUFFLDBCQUEwQjtNQUNoQzhPLE1BQU0sRUFBRWhCLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDZ0I7SUFDeEIsQ0FBQztJQUNEbFAsTUFBTSxDQUFDbVAsSUFBSSxDQUFDalAsV0FBVyxDQUFDOE8sS0FBSyxDQUFDQSxLQUFLLEVBQUVQLEdBQUcsQ0FBQztFQUMzQyxDQUFDLENBQUM7QUFDSjtBQUVBLFNBQVNJLFdBQVdBLENBQUNPLE9BQU8sRUFBRTtFQUM1QixNQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0MsUUFBUTtFQUNqQyxJQUFJQyxTQUFTLEdBQUdGLE9BQU8sQ0FBQ0UsU0FBUztFQUNqQztFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBUixNQUFNLENBQUNTLEdBQUcsR0FBR0YsUUFBUTtFQUNyQixJQUFJN08sSUFBSSxHQUFHLElBQUlvQyxJQUFJLENBQUMsQ0FBQztFQUNyQixJQUFJNE0sUUFBUSxHQUFHalAsaUVBQVEsQ0FBQ0MsSUFBSSxDQUFDO0VBQzdCO0VBQ0EsSUFBSVUsUUFBUSxHQUFHO0lBQ2J1TyxJQUFJLEVBQUVqUCxJQUFJLENBQUNhLFdBQVcsQ0FBQyxDQUFDO0lBQ3hCbUIsS0FBSyxFQUFFbEMseUVBQWMsQ0FBQ0UsSUFBSSxDQUFDYyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMxQ2QsSUFBSSxFQUFFRix5RUFBYyxDQUFDRSxJQUFJLENBQUNlLE9BQU8sQ0FBQyxDQUFDO0VBQ3JDLENBQUM7RUFDRGlPLFFBQVEsQ0FBQzdPLElBQUksR0FBRzZPLFFBQVEsQ0FBQzdPLElBQUksQ0FBQytPLFdBQVcsQ0FBQyxDQUFDO0VBQzNDLElBQUlDLGFBQWEsR0FBSSxrQkFBaUJ6TyxRQUFRLENBQUN1TyxJQUFLLElBQUd2TyxRQUFRLENBQUNzQixLQUFNLElBQUd0QixRQUFRLENBQUNWLElBQUssT0FBTWdQLFFBQVEsQ0FBQy9PLEtBQU0sSUFBRytPLFFBQVEsQ0FBQzVPLE9BQVEsSUFBRzRPLFFBQVEsQ0FBQzFPLE9BQVEsSUFBRzBPLFFBQVEsQ0FBQzdPLElBQUssSUFBRzJPLFNBQVUsRUFBQztFQUVuTCxJQUFJTSxPQUFPLEdBQUczQixRQUFRLENBQUM0QixnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQztFQUMvRCxLQUFLLElBQUlsSyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdpSyxPQUFPLENBQUM5UCxNQUFNLEVBQUU2RixDQUFDLEVBQUUsRUFBRTtJQUN2QyxJQUFJbUssTUFBTSxHQUFHRixPQUFPLENBQUNqSyxDQUFDLENBQUM7SUFDdkJtSyxNQUFNLENBQUNDLElBQUksR0FBR1YsUUFBUTtJQUN0QlMsTUFBTSxDQUFDRSxRQUFRLEdBQUdMLGFBQWE7SUFDL0JHLE1BQU0sQ0FBQ3pCLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO01BQ3JDNU8sc0VBQXFCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztJQUM1QyxDQUFDLENBQUM7RUFDSjtFQUNBLElBQUl3USxjQUFjLEdBQUdoQyxRQUFRLENBQUNFLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQztFQUN0RjhCLGNBQWMsQ0FBQ0MsV0FBVyxHQUFHUCxhQUFhO0FBQzVDO0FBRUEsU0FBU2YsV0FBV0EsQ0FBQSxFQUFHO0VBQ3JCRSxNQUFNLENBQUNxQixLQUFLLENBQUMsQ0FBQztFQUNkO0VBQ0E7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0FCcmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvdmlkZW8tcmVjb3JkaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgPSAnJykge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6ICdzY3JvbGxDYXB0dXJlVHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrUGFnZU1lc3NhZ2UocGF0aCkge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6ICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJywgcGF0aCB9KTtcbn1cbiIsImltcG9ydCB7YWRkTGVhZGluZ1plcm99IGZyb20gXCIuL251bWJlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZUFNUE0oZGF0ZSkge1xuXHRsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG5cdGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0bGV0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSk7XG5cdGxldCBzZWNvbmRzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xuXHRob3VycyA9IGhvdXJzICUgMTI7XG5cdGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcblx0cmV0dXJuIHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGFtcG0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFNUE0oZGF0ZSwgc3BhY2VCZXR3ZWVuID0gXCJcIikge1xuXHRsZXQgZGF0ZURhdGEgPSB0aW1lQU1QTShkYXRlKTtcblx0bGV0IHN0clRpbWUgPSBkYXRlRGF0YS5ob3VycyArICc6JyArIGRhdGVEYXRhLm1pbnV0ZXMgKyBzcGFjZUJldHdlZW4gKyBhbXBtO1xuXHRyZXR1cm4gc3RyVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFN0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4VVRDU3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDRGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ1NlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb3VycyhkYXRlLCBob3Vycykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoaG91cnMgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBsZXQgbW9udGhzID0ge1xuXHRlbjpbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcblx0ZnI6W1wiSmFudmllclwiLCBcIkbDqXZyaWVyXCIsIFwiTWFyc1wiLCBcIkF2cmlsXCIsIFwiTWFpXCIsIFwiSnVpblwiLCBcIkp1aWxsZXRcIiwgXCJBb8O7dFwiLCBcIlNlcHRlbWJyZVwiLCBcIk9jdG9icmVcIiwgXCJOb3ZlbWJyZVwiLCBcIkTDqWNlbWJyZVwiXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGUsIGxhbmd1YWdlKSB7XG5cdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRsYW5ndWFnZSA9IFwiZW5cIjtcblx0fVxuXHRsZXQgbW9udGg7XG5cdHN3aXRjaChsYW5ndWFnZSkge1xuXHRcdGNhc2UgXCJlblwiOlxuXHRcdFx0bW9udGggPSBtb250aHNbbGFuZ3VhZ2VdW2RhdGUuZ2V0TW9udGgoKV07XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gbW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZ2UoYmlydGhEYXRlKSB7XG5cdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdGxldCBhZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdGxldCBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuXHRpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcblx0XHRhZ2UtLTtcblx0fVxuXHRyZXR1cm4gYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJlYXRBc1VUQyhkYXRlKSB7XG5cdGxldCByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcblx0cmVzdWx0LnNldE1pbnV0ZXMocmVzdWx0LmdldE1pbnV0ZXMoKSAtIHJlc3VsdC5nZXRUaW1lem9uZU9mZnNldCgpKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTWludXRlID0gNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTWludXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVySG91ciA9IDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVySG91cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckRheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlcldlZWsgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlcldlZWs7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTW9udGggPSAzNjUgLyAxMiAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJZZWFyID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlclllYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYW1pbGlhclRpbWVCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgdGV4dCA9IFwiXCI7XG5cdGxldCB5ZWFyc0JldHdlZW4gPSB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0aWYgKHllYXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0bGV0IHllYXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih5ZWFyc0JldHdlZW4pO1xuXHRcdGlmICh5ZWFyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhcnMgYWdvXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhciBhZ29cIjtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0bGV0IG1vbnRoc0JldHdlZW4gPSBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0aWYgKG1vbnRoc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0bGV0IG1vbnRoc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobW9udGhzQmV0d2Vlbik7XG5cdFx0XHRpZiAobW9udGhzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aHMgYWdvXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aCBhZ29cIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHdlZWtzQmV0d2VlbiA9IHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0aWYgKHdlZWtzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdGxldCB3ZWVrc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3Iod2Vla3NCZXR3ZWVuKTtcblx0XHRcdFx0aWYgKHdlZWtzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2Vla3MgYWdvXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrIGFnb1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZGF5c0JldHdlZW4gPSBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRpZiAoZGF5c0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdGxldCBkYXlzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihkYXlzQmV0d2Vlbik7XG5cdFx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5cyBhZ29cIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheSBhZ29cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbiA9IGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihob3Vyc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXJzIGFnb1wiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VyIGFnb1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW4gPSBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuID4gMSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobWludXRlc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlcyBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gXCJKdXN0IG5vd1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dDtcbn0iLCIvLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXJXaXRoaW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEgKyBtYXggLSBtaW4pICsgbWluKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgZXZlbjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzRXZlbig3KSk7IC8vIFRyYWNlcyBmYWxzZVxuIGNvbnNvbGUubG9nKGlzRXZlbigxMikpOyAvLyBUcmFjZXMgdHJ1ZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXZlbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYgMSkgPT09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBvZGQuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBub3QgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIG9kZDsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzT2RkKDcpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc09kZCgxMikpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09kZCh2YWx1ZSkge1xuICByZXR1cm4gIWlzRXZlbih2YWx1ZSk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgY29udGFpbnMgbm8gZGVjaW1hbCB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlcjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxLjIzNDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAlIDEgPT09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBwcmltZS5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG9ubHkgZGl2aXNpYmxlIGJ5IDxjb2RlPjE8L2NvZGU+IGFuZCBpdHNlbGYuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgcHJpbWU7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc1ByaW1lKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNQcmltZSg0KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSAxIHx8IHZhbHVlID09PSAyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNFdmVuKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHMgPSBNYXRoLnNxcnQodmFsdWUpO1xuICBmb3IgKGxldCBpID0gMzsgaSA8PSBzOyBpKyspIHtcbiAgICBpZiAodmFsdWUgJSBpID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuIFJvdW5kcyBhIG51bWJlcidzIGRlY2ltYWwgdmFsdWUgdG8gYSBzcGVjaWZpYyBwbGFjZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB0byByb3VuZC5cbiBAcGFyYW0gcGxhY2U6IFRoZSBkZWNpbWFsIHBsYWNlIHRvIHJvdW5kLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgdmFsdWUgcm91bmRlZCB0byB0aGUgZGVmaW5lZCBwbGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAyKSk7IC8vIFRyYWNlcyAzLjE0XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDMpKTsgLy8gVHJhY2VzIDMuMTQyXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgcGxhY2UgPSAxKSB7XG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgcGxhY2UpO1xuXG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogcCkgLyBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQxKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMih2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDModmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDMpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIGluZGV4IGlzIGluY2x1ZGVkIHdpdGhpbiB0aGUgY29sbGVjdGlvbiBsZW5ndGggb3RoZXJ3aXNlIHRoZSBpbmRleCBsb29wcyB0byB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgcmFuZ2UgYW5kIGNvbnRpbnVlcy5cblxuIEBwYXJhbSBpbmRleDogU2hvcCB0byBsb29wIGlmIG5lZWRlZC5cbiBAcGFyYW0gbGVuZ3RoOiBUaGUgdG90YWwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gQHJldHVybiBBIHZhbGlkIHplcm8tYmFzZWQgaW5kZXguXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YXIgY29sb3JzOkFycmF5ID0gbmV3IEFycmF5KFwiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIpO1xuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDIsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBCbHVlXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDQsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBHcmVlblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgtNiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIFJlZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3BJbmRleChpbmRleCwgbGVuZ3RoKSB7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IGxlbmd0aCArIChpbmRleCAlIGxlbmd0aCk7XG4gIH1cblxuICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSB2YWx1ZSBpcyBpbmNsdWRlZCB3aXRoaW4gYSByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgZmFsbHMgd2l0aGluIHRoZSByYW5nZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAdXNhZ2VOb3RlIFRoZSByYW5nZSB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzQmV0d2Vlbig3LCAwLCA1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2Vlbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuICEoXG4gICAgdmFsdWUgPCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkgfHxcbiAgICB2YWx1ZSA+IE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKVxuICApO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHZhbHVlIGZhbGxzIHdpdGhpbiBhIHJhbmdlOyBpZiBub3QgaXQgaXMgc25hcHBlZCB0byB0aGUgbmVhcmVzdCByYW5nZSB2YWx1ZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIGVpdGhlciB0aGUgbnVtYmVyIGFzIHBhc3NlZCwgb3IgaXRzIHZhbHVlIG9uY2Ugc25hcHBlZCB0byBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuIEB1c2FnZU5vdGUgVGhlIGNvbnN0cmFpbnQgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY29uc3RyYWluKDMsIDAsIDUpKTsgLy8gVHJhY2VzIDNcbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cmFpbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWluKFxuICAgIE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpLFxuICAgIE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKVxuICApO1xufVxuXG4vKipcbiBDcmVhdGVzIGV2ZW5seSBzcGFjZWQgbnVtZXJpY2FsIGluY3JlbWVudHMgYmV0d2VlbiB0d28gbnVtYmVycy5cblxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQHBhcmFtIHN0ZXBzOiBUaGUgbnVtYmVyIG9mIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIGFuIEFycmF5IGNvbXByaXNlZCBvZiB0aGUgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDAsIDUsIDQpKTsgLy8gVHJhY2VzIDEsMiwzLDRcbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMSwgMywgMykpOyAvLyBUcmFjZXMgMS41LDIsMi41XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RlcHNCZXR3ZWVuKGJlZ2luLCBlbmQsIHN0ZXBzKSB7XG4gIHN0ZXBzKys7XG5cbiAgbGV0IGkgPSAwO1xuICBjb25zdCBzdGVwc0JldHdlZW4gPSBbXTtcbiAgY29uc3QgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG4gIHdoaWxlICgrK2kgPCBzdGVwcykge1xuICAgIHN0ZXBzQmV0d2Vlbi5wdXNoKGkgKiBpbmNyZW1lbnQgKyBiZWdpbik7XG4gIH1cblxuICByZXR1cm4gc3RlcHNCZXR3ZWVuO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgdmFsdWUgYmV0d2VlbiB0d28gc3BlY2lmaWVkIHZhbHVlcy5cblxuIEBwYXJhbSBhbW91bnQ6IFRoZSBsZXZlbCBvZiBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuIElmIDxjb2RlPjA8L2NvZGU+LCA8Y29kZT5iZWdpbjwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQ7IGlmIDxjb2RlPjE8L2NvZGU+LCA8Y29kZT5lbmQ8L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkLlxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpbnRlcnBvbGF0ZSgwLjUsIDAsIDEwKSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYW1vdW50LCBiZWdpbiwgZW5kKSB7XG4gIHJldHVybiBiZWdpbiArIChlbmQgLSBiZWdpbikgKiBhbW91bnQ7XG59XG5cbi8qKlxuIERldGVybWluZXMgYSBwZXJjZW50YWdlIG9mIGEgdmFsdWUgaW4gYSBnaXZlbiByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZC5cbiBAcGFyYW0gbWluaW11bTogVGhlIGxvd2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gbWF4aW11bTogVGhlIHVwcGVyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG5vcm1hbGl6ZSg4LCA0LCAyMCkuZGVjaW1hbFBlcmNlbnRhZ2UpOyAvLyBUcmFjZXMgMC4yNVxuIDwvY29kZT5cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgbWluaW11bSwgbWF4aW11bSkge1xuLy8gICByZXR1cm4gbmV3IFBlcmNlbnQoKHZhbHVlIC0gbWluaW11bSkgLyAobWF4aW11bSAtIG1pbmltdW0pKTtcbi8vIH1cblxuLyoqXG4gTWFwcyBhIHZhbHVlIGZyb20gb25lIGNvb3JkaW5hdGUgc3BhY2UgdG8gYW5vdGhlci5cblxuIEBwYXJhbSB2YWx1ZTogVmFsdWUgZnJvbSB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZSB0byBtYXAgdG8gdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4xOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MTogRW5kaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4yOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDI6IEVuZGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhtYXAoMC43NSwgMCwgMSwgMCwgMTAwKSk7IC8vIFRyYWNlcyA3NVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gbGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4Mik7XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4vLyBcdHJldHVybiBtaW4yICsgKG1heDIgLSBtaW4yKSAqICgodmFsdWUgLSBtaW4xKSAvIChtYXgxIC0gbWluMSkpO1xuLy8gfVxuXG4vKipcbiBMb3cgcGFzcyBmaWx0ZXIgYWxvZ3JpdGhtIGZvciBlYXNpbmcgYSB2YWx1ZSB0b3dhcmQgYSBkZXN0aW5hdGlvbiB2YWx1ZS4gV29ya3MgYmVzdCBmb3IgdHdlZW5pbmcgdmFsdWVzIHdoZW4gbm8gZGVmaW5pdGUgdGltZSBkdXJhdGlvbiBleGlzdHMgYW5kIHdoZW4gdGhlIGRlc3RpbmF0aW9uIHZhbHVlIGNoYW5nZXMuXG5cbiBJZiA8Y29kZT4oMC41IDwgbiA8IDEpPC9jb2RlPiwgdGhlbiB0aGUgcmVzdWx0aW5nIHZhbHVlcyB3aWxsIG92ZXJzaG9vdCAocGluZy1wb25nKSB1bnRpbCB0aGV5IHJlYWNoIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZS4gV2hlbiA8Y29kZT5uPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gMSwgYXMgaXRzIHZhbHVlIGluY3JlYXNlcywgdGhlIHRpbWUgaXQgdGFrZXMgdG8gcmVhY2ggdGhlIGRlc3RpbmF0aW9uIGFsc28gaW5jcmVhc2VzLiBBIHBsZWFzaW5nIHZhbHVlIGZvciA8Y29kZT5uPC9jb2RlPiBpcyA1LlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZS5cbiBAcGFyYW0gZGVzdDogVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuIEBwYXJhbSBuOiBUaGUgc2xvd2Rvd24gZmFjdG9yLlxuIEByZXR1cm4gVGhlIHdlaWdodGVkIGF2ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRlZEF2ZXJhZ2UodmFsdWUsIGRlc3QsIG4pIHtcbiAgcmV0dXJuIHZhbHVlICsgKGRlc3QgLSB2YWx1ZSkgLyBuO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIlwiPC9jb2RlPi5cbiBAcGFyYW0gbWluTGVuZ3RoOiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIG51bWJlcjsgZGVmYXVsdHMgdG8gPGNvZGU+MCA8L2NvZGU+LlxuIEBwYXJhbSBmaWxsQ2hhcjogVGhlIGxlYWRpbmcgY2hhcmFjdGVyIHVzZWQgdG8gbWFrZSB0aGUgbnVtYmVyIHRoZSBtaW5pbXVtIGxlbmd0aDsgZGVmYXVsdHMgdG8gPGNvZGU+XCIwXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdCgxMjM0NTY3LCBcIixcIiwgOCkpOyAvLyBUcmFjZXMgMDEsMjM0LDU2N1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwga0RlbGltLCBtaW5MZW5ndGgsIGZpbGxDaGFyKSB7XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gXCIsXCI7XG4gIH1cbiAgaWYgKGlzTmFOKG1pbkxlbmd0aCkpIHtcbiAgICBtaW5MZW5ndGggPSAwO1xuICB9XG4gIGlmICghZmlsbENoYXIpIHtcbiAgICBmaWxsQ2hhciA9IFwiMFwiO1xuICB9XG4gIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMTtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IodmFsdWUpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGxlbiA9IG51bS5sZW5ndGg7XG5cbiAgaWYgKG1pbkxlbmd0aCAhPT0gMCAmJiBtaW5MZW5ndGggPiBsZW4pIHtcbiAgICBtaW5MZW5ndGggLT0gbGVuO1xuXG4gICAgY29uc3QgYWRkQ2hhciA9IGZpbGxDaGFyIHx8IFwiMFwiO1xuXG4gICAgd2hpbGUgKG1pbkxlbmd0aC0tKSB7XG4gICAgICBudW0gPSBhZGRDaGFyICsgbnVtO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrRGVsaW0gIT09IG51bGwgJiYgbnVtLmxlbmd0aCA+IDMpIHtcbiAgICBjb25zdCB0b3RhbERlbGltID0gTWF0aC5mbG9vcihudW0ubGVuZ3RoIC8gMyk7XG4gICAgY29uc3QgdG90YWxSZW1haW4gPSBudW0ubGVuZ3RoICUgMztcbiAgICBjb25zdCBudW1TcGxpdCA9IG51bS5zcGxpdChcIlwiKTtcbiAgICBsZXQgaSA9IC0xO1xuXG4gICAgd2hpbGUgKCsraSA8IHRvdGFsRGVsaW0pIHtcbiAgICAgIG51bVNwbGl0LnNwbGljZSh0b3RhbFJlbWFpbiArIDQgKiBpLCAwLCBrRGVsaW0pO1xuICAgIH1cblxuICAgIGlmICh0b3RhbFJlbWFpbiA9PT0gMCkge1xuICAgICAgbnVtU3BsaXQuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBudW0gPSBudW1TcGxpdC5qb2luKFwiXCIpO1xuICB9XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCkge1xuICAgIG51bSArPSByZW1haW5kZXIudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG4gIH1cblxuICByZXR1cm4gbnVtO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgY3VycmVuY3kgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0gZm9yY2VEZWNpbWFsczogSWYgdGhlIG51bWJlciBzaG91bGQgYWx3YXlzIGhhdmUgdHdvIGRlY2ltYWwgcGxhY2VzIDxjb2RlPnRydWU8L2NvZGU+LCBvciBvbmx5IHNob3cgZGVjaW1hbHMgaXMgdGhlcmUgaXMgYSBkZWNpbWFscyB2YWx1ZSA8Y29kZT5mYWxzZTwvY29kZT47IGRlZmF1bHRzIHRvIDxjb2RlPnRydWU8L2NvZGU+LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiLFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXRDdXJyZW5jeSgxMjM0LjUpKTsgLy8gVHJhY2VzIFwiMSwyMzQuNTBcIlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlLCBmb3JjZURlY2ltYWxzLCBrRGVsaW0pIHtcbiAgaWYgKGZvcmNlRGVjaW1hbHMgPT09IG51bGwpIHtcbiAgICBmb3JjZURlY2ltYWxzID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWtEZWxpbSkge1xuICAgIGtEZWxpbSA9IFwiLFwiO1xuICB9XG4gIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMTtcbiAgbGV0IGN1cnJlbmN5ID0gZm9ybWF0KE1hdGguZmxvb3IodmFsdWUpLCBrRGVsaW0pO1xuXG4gIGlmIChyZW1haW5kZXIgIT09IDAgfHwgZm9yY2VEZWNpbWFscykge1xuICAgIGN1cnJlbmN5ICs9IHJlbWFpbmRlci50b0ZpeGVkKDIpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeTtcbn1cblxuLyoqXG4gRmluZHMgdGhlIGVuZ2xpc2ggb3JkaW5hbCBzdWZmaXggZm9yIHRoZSBudW1iZXIgZ2l2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBmaW5kIHRoZSBvcmRpbmFsIHN1ZmZpeCBvZi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHN1ZmZpeCBmb3IgdGhlIG51bWJlciwgMiBjaGFyYWN0ZXJzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coMzIgKyBnZXRPcmRpbmFsU3VmZml4KDMyKSk7IC8vIFRyYWNlcyAzMm5kXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPj0gMTAgJiYgdmFsdWUgPD0gMjApIHtcbiAgICByZXR1cm4gXCJ0aFwiO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBzd2l0Y2ggKHZhbHVlICUgMTApIHtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gXCJyZFwiO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBcIm5kXCI7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFwic3RcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwidGhcIjtcbiAgfVxufVxuXG4vKipcbiBBZGRzIGEgbGVhZGluZyB6ZXJvIGZvciBudW1iZXJzIGxlc3MgdGhhbiB0ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBhZGQgbGVhZGluZyB6ZXJvLlxuIEByZXR1cm4gTnVtYmVyIGFzIGEgU3RyaW5nOyBpZiB0aGUgbnVtYmVyIHdhcyBsZXNzIHRoYW4gdGVuIHRoZSBudW1iZXIgd2lsbCBoYXZlIGEgbGVhZGluZyB6ZXJvLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oNykpOyAvLyBUcmFjZXMgMDdcbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybygxMSkpOyAvLyBUcmFjZXMgMTFcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVybyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAxMCA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpO1xufVxuXG4vKipcbiBTcGVsbHMgdGhlIHByb3ZpZGVkIG51bWJlci5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIHNwZWxsLiBOZWVkcyB0byBiZSBsZXNzIHRoYW4gOTk5OTk5OTk5LlxuIEByZXR1cm4gVGhlIG51bWJlciBzcGVsbGVkIG91dCBhcyBhIFN0cmluZy5cbiBAdGhyb3dzIDxjb2RlPkVycm9yPC9jb2RlPiBpZiA8Y29kZT52YWx1ZTwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDk5OTk5OTk5OS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHNwZWxsKDApKTsgLy8gVHJhY2VzIFplcm9cbiBjb25zb2xlLmxvZyhzcGVsbCgyMykpOyAvLyBUcmFjZXMgVHdlbnR5LVRocmVlXG4gY29uc29sZS5sb2coc3BlbGwoMjAwNTY3OCkpOyAvLyBUcmFjZXMgVHdvIE1pbGxpb24sIEZpdmUgVGhvdXNhbmQsIFNpeCBIdW5kcmVkIFNldmVudHktRWlnaHRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGVsbCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiA5OTk5OTk5OTkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSB0b28gbGFyZ2UgZm9yIHRoaXMgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9uZXNTcGVsbGluZ3MgPSBbXG4gICAgXCJcIixcbiAgICBcIk9uZVwiLFxuICAgIFwiVHdvXCIsXG4gICAgXCJUaHJlZVwiLFxuICAgIFwiRm91clwiLFxuICAgIFwiRml2ZVwiLFxuICAgIFwiU2l4XCIsXG4gICAgXCJTZXZlblwiLFxuICAgIFwiRWlnaHRcIixcbiAgICBcIk5pbmVcIixcbiAgICBcIlRlblwiLFxuICAgIFwiRWxldmVuXCIsXG4gICAgXCJUd2VsdmVcIixcbiAgICBcIlRoaXJ0ZWVuXCIsXG4gICAgXCJGb3VydGVlblwiLFxuICAgIFwiRmlmdGVlblwiLFxuICAgIFwiU2l4dGVlblwiLFxuICAgIFwiU2V2ZW50ZWVuXCIsXG4gICAgXCJFaWdodGVlblwiLFxuICAgIFwiTmluZXRlZW5cIixcbiAgXTtcbiAgY29uc3QgdGVuc1NwZWxsaW5ncyA9IFtcbiAgICBcIlwiLFxuICAgIFwiXCIsXG4gICAgXCJUd2VudHlcIixcbiAgICBcIlRoaXJ0eVwiLFxuICAgIFwiRm9ydHlcIixcbiAgICBcIkZpZnR5XCIsXG4gICAgXCJTaXh0eVwiLFxuICAgIFwiU2V2ZW50eVwiLFxuICAgIFwiRWlnaHR5XCIsXG4gICAgXCJOaW5ldHlcIixcbiAgXTtcbiAgbGV0IHNwZWxsaW5nID0gXCJcIjtcblxuICBjb25zdCBtaWxsaW9ucyA9IHZhbHVlIC8gMTAwMDAwMDtcbiAgdmFsdWUgJT0gMTAwMDAwMDtcblxuICBjb25zdCB0aG91c2FuZHMgPSB2YWx1ZSAvIDEwMDA7XG4gIHZhbHVlICU9IDEwMDA7XG5cbiAgY29uc3QgaHVuZHJlZHMgPSB2YWx1ZSAvIDEwMDtcbiAgdmFsdWUgJT0gMTAwO1xuXG4gIGNvbnN0IHRlbnMgPSB2YWx1ZSAvIDEwO1xuICB2YWx1ZSAlPSAxMDtcblxuICBjb25zdCBvbmVzID0gdmFsdWUgJSAxMDtcblxuICBpZiAobWlsbGlvbnMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKG1pbGxpb25zKSArIFwiIE1pbGxpb25cIjtcbiAgfVxuXG4gIGlmICh0aG91c2FuZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKHRob3VzYW5kcykgKyBcIiBUaG91c2FuZFwiO1xuICB9XG5cbiAgaWYgKGh1bmRyZWRzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbChodW5kcmVkcykgKyBcIiBIdW5kcmVkXCI7XG4gIH1cblxuICBpZiAodGVucyAhPT0gMCB8fCBvbmVzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiIFwiO1xuXG4gICAgaWYgKHRlbnMgPCAyKSB7XG4gICAgICBzcGVsbGluZyArPSBvbmVzU3BlbGxpbmdzW3RlbnMgKiAxMCArIG9uZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVsbGluZyArPSB0ZW5zU3BlbGxpbmdzW3RlbnNdO1xuXG4gICAgICBpZiAob25lcyAhPT0gMCkge1xuICAgICAgICBzcGVsbGluZyArPSBcIi1cIiArIG9uZXNTcGVsbGluZ3Nbb25lc107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNwZWxsaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBcIlplcm9cIjtcbiAgfVxuXG4gIHJldHVybiBzcGVsbGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgY29uc3QgaGV4ID0gYy50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFRvSGV4KHJnYi5yKSArIGNvbXBvbmVudFRvSGV4KHJnYi5nKSArIGNvbXBvbmVudFRvSGV4KHJnYi5iKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdFxuICAgID8ge1xuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBcInI6XCIgKyB0aGlzLnIgKyBcIixnOlwiICsgdGhpcy5nICsgXCIsYjpcIiArIHRoaXMuYjtcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKSB7XG4gIHJldHVybiAoZGVncmVlcyAqIE1hdGguUEkpIC8gMTgwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFkVG9EZWcocmFkKSB7XG4gIHJldHVybiAocmFkICogMTgwKSAvIE1hdGguUEk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhzdGVwKHZhbHVlLCBtaW4sIG1heCkge1xuICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSk7XG4gIHJldHVybiB4ICogeCAqICgzIC0gMiAqIHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gIHJldHVybiBhICsgdCAqIChiIC0gYSk7XG4gIC8vIHJldHVybiBhKDEtdCkgKyBidFxuICAvL3JldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4KGEsIGIsIHQpIHtcbiAgcmV0dXJuIGxlcnAoYSwgYiwgdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZChuLCBtKSB7XG4gIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9hIG1vZHVsbyBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgbmVnYXRpdmVzIG51bWJlcnMgJ2NvcnJlY3RseSdcbmV4cG9ydCBmdW5jdGlvbiBtb2RXcmFwKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL3JhbmRvbSB3aXRoIHNlZWQsIHJldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tMUQoc2VlZCkge1xuICByZXR1cm4gbW9kV3JhcChNYXRoLnNpbihzZWVkKSAqIDQzNzU4LjU0NTMsIDEpO1xufVxuXG4vL3JldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gbm9pc2UxRCh4KSB7XG4gIGNvbnN0IGkgPSBNYXRoLmZsb29yKHgpO1xuICBjb25zdCBmID0gbW9kV3JhcCh4LCAxKTtcbiAgY29uc3QgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbGVycCh1LCByYW5kb20xRChpKSwgcmFuZG9tMUQoaSArIDEuMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcENsYW1wKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBjbGFtcChsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKSwgbWluMiwgbWF4Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5lV2F2ZShcbiAgYW5nbGUgPSAwLFxuICBmcmVxdWVuY3kgPSBNYXRoLlBJLFxuICB0aW1lID0gMCxcbiAgc3BlZWQgPSAxLFxuICBhbXBsaXR1ZGUgPSAxXG4pIHtcbiAgcmV0dXJuIE1hdGguc2luKGFuZ2xlICogZnJlcXVlbmN5ICsgdGltZSAqIHNwZWVkKSAqIGFtcGxpdHVkZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wVGltZSh0aW1lLCBzdGFydFRpbWUsIGR1cmF0aW9uKSB7XG4gIHJldHVybiBjbGFtcCh0aW1lIC0gc3RhcnRUaW1lLCAwLjAsIGR1cmF0aW9uKSAvIGR1cmF0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgZWFzZSB2YWx1ZVxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFsdWUgKz0gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbik7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbiA9IDAuMSkge1xuICByZXR1cm4gKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHBhcmFtIHNwZWVkOiBUaGUgY3VycmVudCBzcGVlZFxuIEBwYXJhbSBlbGFzdGljaXR5OiBUaGUgZWxhc3RpY2l0eSBmcm9tIDAgdG8gMVxuIEByZXR1cm4gVGhlIG5ldyBzcGVlZCB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHNwZWVkID0gc3ByaW5nKHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uLCBzcGVlZCwgZWxhc3RpY2l0eSk7XG4gdmFsdWUgKz0gc3BlZWQ7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByaW5nKFxuICB2YWx1ZSxcbiAgdGFyZ2V0ID0gMCxcbiAgZnJpY3Rpb24gPSAwLjEsXG4gIHNwZWVkID0gMCxcbiAgZWxhc3RpY2l0eSA9IDBcbikge1xuICByZXR1cm4gc3BlZWQgKiBlbGFzdGljaXR5ICsgKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTXVsdGlwbGVSb3RhdGlvbnMoYW5nbGUpIHtcbiAgY29uc3QgY2lyY2xlID0gTWF0aC5QSSAqIDI7XG4gIHdoaWxlIChhbmdsZSA+IGNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSAtPSBjaXJjbGU7XG4gIH1cbiAgd2hpbGUgKGFuZ2xlIDwgLWNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSArPSBjaXJjbGU7XG4gIH1cbiAgcmV0dXJuIGFuZ2xlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4Q29sb3JTdHJpbmdUb051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0aW1lQU1QTSB9IGZyb20gJy4uL2xpYi90c3VuYW1pL3V0aWxzL2RhdGUnO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm8gfSBmcm9tICcuLi9saWIvdHN1bmFtaS91dGlscy9udW1iZXInO1xuaW1wb3J0IHsgc2VuZFRyYWNrRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9tb2RlbC9HQUJyaWRnZSc7XG5cbmNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ2pzb24nXSwgKHJlc3VsdCkgPT4ge1xuICBsZXQgY29sb3JUaGVtZSA9ICdEYXJrJztcbiAgaWYgKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQuanNvbikge1xuICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5qc29uKTtcbiAgICAgIGlmIChkYXRhLnNldHRpbmdzKSB7XG4gICAgICAgIGNvbG9yVGhlbWUgPSBkYXRhLnNldHRpbmdzLmNvbG9yVGhlbWVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgaXNDb2xvclRoZW1lTGlnaHQ7XG4gIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgIGNhc2UgJ0RhcmsnOlxuICAgIGNhc2UgJ0xpZ2h0JzpcbiAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gY29sb3JUaGVtZSA9PSAnTGlnaHQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxldCBkYXJrTW9kZU1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpO1xuICAgICAgbGV0IGlzRGFya01vZGUgPSBkYXJrTW9kZU1hdGNoTWVkaWEubWF0Y2hlcztcbiAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gIWlzRGFya01vZGU7XG4gICAgICBicmVhaztcbiAgfVxuICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zYy1kZWZhdWx0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lLWxpZ2h0JywgaXNDb2xvclRoZW1lTGlnaHQpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGRpc3BhdGNoVmlkZW9IZWlnaHQoKTtcbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgc3dpdGNoIChtc2cudHlwZSkge1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVDb2xvclRoZW1lJzpcbiAgICAgIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLnNjLWRlZmF1bHQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUtbGlnaHQnLCBtc2cuaXNDb2xvclRoZW1lTGlnaHQpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVVubG9hZFZpZGVvJzpcbiAgICAgIHVubG9hZFZpZGVvKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlU2hvd1ZpZGVvJzpcbiAgICAgIGRpc3BhdGNoVmlkZW9IZWlnaHQoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVWaWRlb1VSTCc6XG4gICAgICB1cGRhdGVWaWRlbyhtc2cpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5sZXQgcGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLXBsYXllcicpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnbXV0ZWQnLCAndHJ1ZScpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnYXV0b3BsYXknLCAndHJ1ZScpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgncGxheXNpbmxpbmUnLCAndHJ1ZScpO1xucGxheWVyLnNldEF0dHJpYnV0ZSgnY29udHJvbHMnLCAnMScpO1xucGxheWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NhbnBsYXknLCAoKSA9PiB7XG4gIGRpc3BhdGNoVmlkZW9IZWlnaHQoKTtcbn0pO1xuXG5mdW5jdGlvbiBkaXNwYXRjaFZpZGVvSGVpZ2h0KCkge1xuICBjaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWyd0YWJJZCddKS50aGVuKCh0YWJJZCkgPT4ge1xuICAgIGxldCBtc2cgPSB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvSGVpZ2h0JyxcbiAgICAgIGhlaWdodDogZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4gICAgfTtcbiAgICBjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0YWJJZC50YWJJZCwgbXNnKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVZpZGVvKG1lc3NhZ2UpIHtcbiAgY29uc3QgdmlkZW9VUkwgPSBtZXNzYWdlLnZpZGVvVVJMO1xuICBsZXQgZXh0ZW5zaW9uID0gbWVzc2FnZS5leHRlbnNpb247XG4gIC8vIGxldCBleHRlbnNpb24gPSBcIndlYm1cIjtcbiAgLy8gc3dpdGNoKG1lc3NhZ2UuZm9ybWF0KSB7XG4gIC8vICAgICBjYXNlIFwieC1tYXRyb3NrYVwiOlxuICAvLyAgICAgICAgIGV4dGVuc2lvbiA9IFwibWt2XCI7XG4gIC8vICAgICBicmVhaztcbiAgLy8gICAgIGNhc2UgXCJ3ZWJtXCI6XG4gIC8vICAgICBkZWZhdWx0OlxuICAvLyAgICAgICAgIGV4dGVuc2lvbiA9IFwid2VibVwiO1xuICAvLyAgICAgYnJlYWs7XG4gIC8vIH1cbiAgcGxheWVyLnNyYyA9IHZpZGVvVVJMO1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBhbXBtVGltZSA9IHRpbWVBTVBNKGRhdGUpO1xuICAvLyBTY3JlZW4gU2hvdCAyMDIwLTAzLTIwIGF0IDQuMzUuMTQgUE1cbiAgbGV0IGRhdGVEYXRhID0ge1xuICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpLFxuICB9O1xuICBhbXBtVGltZS5hbXBtID0gYW1wbVRpbWUuYW1wbS50b1VwcGVyQ2FzZSgpO1xuICBsZXQgdmlkZW9GaWxlTmFtZSA9IGBTY3JvbGwgQ2FwdHVyZSAke2RhdGVEYXRhLnllYXJ9LSR7ZGF0ZURhdGEubW9udGh9LSR7ZGF0ZURhdGEuZGF0ZX0gYXQgJHthbXBtVGltZS5ob3Vyc30uJHthbXBtVGltZS5taW51dGVzfS4ke2FtcG1UaW1lLnNlY29uZHN9ICR7YW1wbVRpbWUuYW1wbX0uJHtleHRlbnNpb259YDtcblxuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Euc2MtZG93bmxvYWQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBidXR0b24gPSBidXR0b25zW2ldO1xuICAgIGJ1dHRvbi5ocmVmID0gdmlkZW9VUkw7XG4gICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoJ2Rvd25sb2FkJywgJ2NsaWNrJyk7XG4gICAgfSk7XG4gIH1cbiAgbGV0IGZpbGVOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLWZpbGVuYW1lIGEuc2MtZG93bmxvYWQtYnV0dG9uJyk7XG4gIGZpbGVOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gdmlkZW9GaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gIHBsYXllci5wYXVzZSgpO1xuICAvLyBwbGF5ZXIucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgLy8gcGxheWVyLmxvYWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHlwZSIsInNlbmRUcmFja1BhZ2VNZXNzYWdlIiwicGF0aCIsImFkZExlYWRpbmdaZXJvIiwidGltZUFNUE0iLCJkYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsImFtcG0iLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwiZm9ybWF0QU1QTSIsInNwYWNlQmV0d2VlbiIsImRhdGVEYXRhIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwibW9udGgiLCJnZXRBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsIkRhdGUiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInJlc3VsdCIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInRleHQiLCJ5ZWFyc0JldHdlZW5GbG9vciIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwibW9udGhzQmV0d2VlbkZsb29yIiwid2Vla3NCZXR3ZWVuRmxvb3IiLCJkYXlzQmV0d2VlbkZsb29yIiwiaG91cnNCZXR3ZWVuRmxvb3IiLCJtaW51dGVzQmV0d2VlbkZsb29yIiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwibWluIiwibWF4IiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZ2V0UmFuZG9tSW50SW5jbHVzaXZlIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJyYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UiLCJpc0V2ZW4iLCJ2YWx1ZSIsImlzT2RkIiwiaXNJbnRlZ2VyIiwiaXNQcmltZSIsInMiLCJzcXJ0IiwiaSIsInJvdW5kRGVjaW1hbFRvUGxhY2UiLCJwbGFjZSIsInAiLCJwb3ciLCJyb3VuZCIsInJvdW5kMSIsInJvdW5kMiIsInJvdW5kMyIsImxvb3BJbmRleCIsImluZGV4IiwiaXNCZXR3ZWVuIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwiY29uc3RyYWluIiwiY3JlYXRlU3RlcHNCZXR3ZWVuIiwiYmVnaW4iLCJlbmQiLCJzdGVwcyIsInN0ZXBzQmV0d2VlbiIsImluY3JlbWVudCIsInB1c2giLCJpbnRlcnBvbGF0ZSIsImFtb3VudCIsIm1hcCIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJsZXJwIiwibm9ybSIsImdldFdlaWdodGVkQXZlcmFnZSIsImRlc3QiLCJuIiwiZm9ybWF0Iiwia0RlbGltIiwibWluTGVuZ3RoIiwiZmlsbENoYXIiLCJpc05hTiIsInJlbWFpbmRlciIsIm51bSIsImxlbiIsImFkZENoYXIiLCJ0b3RhbERlbGltIiwidG90YWxSZW1haW4iLCJudW1TcGxpdCIsInNwbGl0Iiwic3BsaWNlIiwic2hpZnQiLCJqb2luIiwic3Vic3RyIiwiZm9ybWF0Q3VycmVuY3kiLCJmb3JjZURlY2ltYWxzIiwiY3VycmVuY3kiLCJ0b0ZpeGVkIiwiZ2V0T3JkaW5hbFN1ZmZpeCIsInNwZWxsIiwiRXJyb3IiLCJvbmVzU3BlbGxpbmdzIiwidGVuc1NwZWxsaW5ncyIsInNwZWxsaW5nIiwibWlsbGlvbnMiLCJ0aG91c2FuZHMiLCJodW5kcmVkcyIsInRlbnMiLCJvbmVzIiwiY29tcG9uZW50VG9IZXgiLCJjIiwiaGV4IiwicmdiVG9IZXgiLCJyZ2IiLCJyIiwiZyIsImIiLCJoZXhUb1JnYiIsImV4ZWMiLCJwYXJzZUludCIsImRlZ1RvUmFkIiwiZGVncmVlcyIsIlBJIiwicmFkVG9EZWciLCJyYWQiLCJzbW9vdGhzdGVwIiwieCIsImEiLCJ0IiwibWl4IiwiY2xhbXAiLCJtb2QiLCJtb2RXcmFwIiwicmFuZG9tMUQiLCJzZWVkIiwic2luIiwibm9pc2UxRCIsImYiLCJ1IiwicmFuZG9tUmFuZ2UiLCJyYW5kb21JbnQiLCJtYXBDbGFtcCIsInNpbmVXYXZlIiwiYW5nbGUiLCJmcmVxdWVuY3kiLCJ0aW1lIiwic3BlZWQiLCJhbXBsaXR1ZGUiLCJjbGFtcFRpbWUiLCJzdGFydFRpbWUiLCJkdXJhdGlvbiIsImVhc2VPdXQiLCJ0YXJnZXQiLCJmcmljdGlvbiIsInNwcmluZyIsImVsYXN0aWNpdHkiLCJyZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyIsImNpcmNsZSIsImhleENvbG9yU3RyaW5nVG9OdW1iZXIiLCJOdW1iZXIiLCJyZXBsYWNlIiwic3RvcmFnZSIsImxvY2FsIiwiZ2V0IiwiY29sb3JUaGVtZSIsImpzb24iLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwic2V0dGluZ3MiLCJjb2xvclRoZW1lcyIsImlzQ29sb3JUaGVtZUxpZ2h0IiwiZGFya01vZGVNYXRjaE1lZGlhIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImlzRGFya01vZGUiLCJtYXRjaGVzIiwiZG9jdW1lbnQiLCJib2R5IiwicXVlcnlTZWxlY3RvciIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNwYXRjaFZpZGVvSGVpZ2h0Iiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtc2ciLCJzZW5kZXIiLCJzZW5kUmVzcG9uc2UiLCJ1bmxvYWRWaWRlbyIsInVwZGF0ZVZpZGVvIiwicGxheWVyIiwidGhlbiIsInRhYklkIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwidGFicyIsIm1lc3NhZ2UiLCJ2aWRlb1VSTCIsImV4dGVuc2lvbiIsInNyYyIsImFtcG1UaW1lIiwieWVhciIsInRvVXBwZXJDYXNlIiwidmlkZW9GaWxlTmFtZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwiaHJlZiIsImRvd25sb2FkIiwiZmlsZU5hbWVCdXR0b24iLCJ0ZXh0Q29udGVudCIsInBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==