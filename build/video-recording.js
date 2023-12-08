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



console.log('video-recording javascript started');
chrome.storage.local.get(['json'], result => {
  console.log('video-recording json loaded');
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
  console.log('video-recording onMessage', msg.type);
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
      console.log('video-recording message scrollCaptureVideoURL');
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
  console.log('video-recording.updateVideo');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxDQUFDLHlDQUF5QyxDQUFDO0VBQ3RGOEIsY0FBYyxDQUFDQyxXQUFXLEdBQUdQLGFBQWE7QUFDNUM7QUFFQSxTQUFTZixXQUFXQSxDQUFBLEVBQUc7RUFDckJFLE1BQU0sQ0FBQ3FCLEtBQUssQ0FBQyxDQUFDO0VBQ2Q7RUFDQTtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy92aWRlby1yZWNvcmRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9ICcnKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja1BhZ2UnLCBwYXRoIH0pO1xufVxuIiwiaW1wb3J0IHthZGRMZWFkaW5nWmVyb30gZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lQU1QTShkYXRlKSB7XG5cdGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0bGV0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRsZXQgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcblx0bGV0IHNlY29uZHMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG5cdGhvdXJzID0gaG91cnMgJSAxMjtcblx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuXHRyZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcywgYW1wbSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QU1QTShkYXRlLCBzcGFjZUJldHdlZW4gPSBcIlwiKSB7XG5cdGxldCBkYXRlRGF0YSA9IHRpbWVBTVBNKGRhdGUpO1xuXHRsZXQgc3RyVGltZSA9IGRhdGVEYXRhLmhvdXJzICsgJzonICsgZGF0ZURhdGEubWludXRlcyArIHNwYWNlQmV0d2VlbiArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4U3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhVVENTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENEYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0hvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdXJzKGRhdGUsIGhvdXJzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChob3VycyAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGxldCBtb250aHMgPSB7XG5cdGVuOltcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRmcjpbXCJKYW52aWVyXCIsIFwiRsOpdnJpZXJcIiwgXCJNYXJzXCIsIFwiQXZyaWxcIiwgXCJNYWlcIiwgXCJKdWluXCIsIFwiSnVpbGxldFwiLCBcIkFvw7t0XCIsIFwiU2VwdGVtYnJlXCIsIFwiT2N0b2JyZVwiLCBcIk5vdmVtYnJlXCIsIFwiRMOpY2VtYnJlXCJdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSwgbGFuZ3VhZ2UpIHtcblx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdGxhbmd1YWdlID0gXCJlblwiO1xuXHR9XG5cdGxldCBtb250aDtcblx0c3dpdGNoKGxhbmd1YWdlKSB7XG5cdFx0Y2FzZSBcImVuXCI6XG5cdFx0XHRtb250aCA9IG1vbnRoc1tsYW5ndWFnZV1bZGF0ZS5nZXRNb250aCgpXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShiaXJ0aERhdGUpIHtcblx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0bGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0bGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdGFnZS0tO1xuXHR9XG5cdHJldHVybiBhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVhdEFzVVRDKGRhdGUpIHtcblx0bGV0IHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xuXHRyZXN1bHQuc2V0TWludXRlcyhyZXN1bHQuZ2V0TWludXRlcygpIC0gcmVzdWx0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNaW51dGUgPSA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJIb3VyID0gNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJIb3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyV2VlayA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyV2Vlaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNb250aCA9IDM2NSAvIDEyICAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlclllYXIgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyWWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhbWlsaWFyVGltZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCB0ZXh0ID0gXCJcIjtcblx0bGV0IHllYXJzQmV0d2VlbiA9IHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRpZiAoeWVhcnNCZXR3ZWVuID49IDEpIHtcblx0XHRsZXQgeWVhcnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHllYXJzQmV0d2Vlbik7XG5cdFx0aWYgKHllYXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFycyBhZ29cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFyIGFnb1wiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRsZXQgbW9udGhzQmV0d2VlbiA9IG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRpZiAobW9udGhzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRsZXQgbW9udGhzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtb250aHNCZXR3ZWVuKTtcblx0XHRcdGlmIChtb250aHNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRocyBhZ29cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRoIGFnb1wiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgd2Vla3NCZXR3ZWVuID0gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRpZiAod2Vla3NCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0bGV0IHdlZWtzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih3ZWVrc0JldHdlZW4pO1xuXHRcdFx0XHRpZiAod2Vla3NCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrcyBhZ29cIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWsgYWdvXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXlzQmV0d2VlbiA9IGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdGlmIChkYXlzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGRheXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRpZiAoZGF5c0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXlzIGFnb1wiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5IGFnb1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuID0gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGhvdXJzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91cnMgYWdvXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXIgYWdvXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbiA9IG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW4gPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtaW51dGVzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGUgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBcIkp1c3Qgbm93XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0O1xufSIsIi8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiAxKSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIG9kZC5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG5vdCBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgb2RkOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNPZGQoNykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzT2RkKDEyKSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKHZhbHVlKSB7XG4gIHJldHVybiAhaXNFdmVuKHZhbHVlKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXIuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBjb250YWlucyBubyBkZWNpbWFsIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEuMjM0NSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICUgMSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IDEgfHwgdmFsdWUgPT09IDIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0V2ZW4odmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG4gIGZvciAobGV0IGkgPSAzOyBpIDw9IHM7IGkrKykge1xuICAgIGlmICh2YWx1ZSAlIGkgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEpIHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwKSAvIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDEodmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQyKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMyh2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMyk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbGVuZ3RoICsgKGluZGV4ICUgbGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5kZXggJSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGluY2x1ZGVkIHdpdGhpbiBhIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBmYWxscyB3aXRoaW4gdGhlIHJhbmdlOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEB1c2FnZU5vdGUgVGhlIHJhbmdlIHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzQmV0d2VlbigzLCAwLCA1KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDcsIDAsIDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gIShcbiAgICB2YWx1ZSA8IE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB8fFxuICAgIHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdmFsdWUgZmFsbHMgd2l0aGluIGEgcmFuZ2U7IGlmIG5vdCBpdCBpcyBzbmFwcGVkIHRvIHRoZSBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgZWl0aGVyIHRoZSBudW1iZXIgYXMgcGFzc2VkLCBvciBpdHMgdmFsdWUgb25jZSBzbmFwcGVkIHRvIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG4gQHVzYWdlTm90ZSBUaGUgY29uc3RyYWludCB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgM1xuIGNvbnNvbGUubG9nKGNvbnN0cmFpbig3LCAwLCA1KSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RyYWluKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gTWF0aC5taW4oXG4gICAgTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSksXG4gICAgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIENyZWF0ZXMgZXZlbmx5IHNwYWNlZCBudW1lcmljYWwgaW5jcmVtZW50cyBiZXR3ZWVuIHR3byBudW1iZXJzLlxuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAcGFyYW0gc3RlcHM6IFRoZSBudW1iZXIgb2YgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgYW4gQXJyYXkgY29tcHJpc2VkIG9mIHRoZSBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMCwgNSwgNCkpOyAvLyBUcmFjZXMgMSwyLDMsNFxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigxLCAzLCAzKSk7IC8vIFRyYWNlcyAxLjUsMiwyLjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGVwc0JldHdlZW4oYmVnaW4sIGVuZCwgc3RlcHMpIHtcbiAgc3RlcHMrKztcblxuICBsZXQgaSA9IDA7XG4gIGNvbnN0IHN0ZXBzQmV0d2VlbiA9IFtdO1xuICBjb25zdCBpbmNyZW1lbnQgPSAoZW5kIC0gYmVnaW4pIC8gc3RlcHM7XG5cbiAgd2hpbGUgKCsraSA8IHN0ZXBzKSB7XG4gICAgc3RlcHNCZXR3ZWVuLnB1c2goaSAqIGluY3JlbWVudCArIGJlZ2luKTtcbiAgfVxuXG4gIHJldHVybiBzdGVwc0JldHdlZW47XG59XG5cbi8qKlxuIERldGVybWluZXMgYSB2YWx1ZSBiZXR3ZWVuIHR3byBzcGVjaWZpZWQgdmFsdWVzLlxuXG4gQHBhcmFtIGFtb3VudDogVGhlIGxldmVsIG9mIGludGVycG9sYXRpb24gYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy4gSWYgPGNvZGU+MDwvY29kZT4sIDxjb2RlPmJlZ2luPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZDsgaWYgPGNvZGU+MTwvY29kZT4sIDxjb2RlPmVuZDwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGludGVycG9sYXRlKDAuNSwgMCwgMTApKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZShhbW91bnQsIGJlZ2luLCBlbmQpIHtcbiAgcmV0dXJuIGJlZ2luICsgKGVuZCAtIGJlZ2luKSAqIGFtb3VudDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHBlcmNlbnRhZ2Ugb2YgYSB2YWx1ZSBpbiBhIGdpdmVuIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgdmFsdWUgdG8gYmUgY29udmVydGVkLlxuIEBwYXJhbSBtaW5pbXVtOiBUaGUgbG93ZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBtYXhpbXVtOiBUaGUgdXBwZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobm9ybWFsaXplKDgsIDQsIDIwKS5kZWNpbWFsUGVyY2VudGFnZSk7IC8vIFRyYWNlcyAwLjI1XG4gPC9jb2RlPlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG4vLyAgIHJldHVybiBuZXcgUGVyY2VudCgodmFsdWUgLSBtaW5pbXVtKSAvIChtYXhpbXVtIC0gbWluaW11bSkpO1xuLy8gfVxuXG4vKipcbiBNYXBzIGEgdmFsdWUgZnJvbSBvbmUgY29vcmRpbmF0ZSBzcGFjZSB0byBhbm90aGVyLlxuXG4gQHBhcmFtIHZhbHVlOiBWYWx1ZSBmcm9tIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlIHRvIG1hcCB0byB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjE6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgxOiBFbmRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjI6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MjogRW5kaW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG1hcCgwLjc1LCAwLCAxLCAwLCAxMDApKTsgLy8gVHJhY2VzIDc1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbi8vIFx0cmV0dXJuIG1pbjIgKyAobWF4MiAtIG1pbjIpICogKCh2YWx1ZSAtIG1pbjEpIC8gKG1heDEgLSBtaW4xKSk7XG4vLyB9XG5cbi8qKlxuIExvdyBwYXNzIGZpbHRlciBhbG9ncml0aG0gZm9yIGVhc2luZyBhIHZhbHVlIHRvd2FyZCBhIGRlc3RpbmF0aW9uIHZhbHVlLiBXb3JrcyBiZXN0IGZvciB0d2VlbmluZyB2YWx1ZXMgd2hlbiBubyBkZWZpbml0ZSB0aW1lIGR1cmF0aW9uIGV4aXN0cyBhbmQgd2hlbiB0aGUgZGVzdGluYXRpb24gdmFsdWUgY2hhbmdlcy5cblxuIElmIDxjb2RlPigwLjUgPCBuIDwgMSk8L2NvZGU+LCB0aGVuIHRoZSByZXN1bHRpbmcgdmFsdWVzIHdpbGwgb3ZlcnNob290IChwaW5nLXBvbmcpIHVudGlsIHRoZXkgcmVhY2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlLiBXaGVuIDxjb2RlPm48L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiAxLCBhcyBpdHMgdmFsdWUgaW5jcmVhc2VzLCB0aGUgdGltZSBpdCB0YWtlcyB0byByZWFjaCB0aGUgZGVzdGluYXRpb24gYWxzbyBpbmNyZWFzZXMuIEEgcGxlYXNpbmcgdmFsdWUgZm9yIDxjb2RlPm48L2NvZGU+IGlzIDUuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlLlxuIEBwYXJhbSBkZXN0OiBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gQHBhcmFtIG46IFRoZSBzbG93ZG93biBmYWN0b3IuXG4gQHJldHVybiBUaGUgd2VpZ2h0ZWQgYXZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodGVkQXZlcmFnZSh2YWx1ZSwgZGVzdCwgbikge1xuICByZXR1cm4gdmFsdWUgKyAoZGVzdCAtIHZhbHVlKSAvIG47XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiXCI8L2NvZGU+LlxuIEBwYXJhbSBtaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgbnVtYmVyOyBkZWZhdWx0cyB0byA8Y29kZT4wIDwvY29kZT4uXG4gQHBhcmFtIGZpbGxDaGFyOiBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdXNlZCB0byBtYWtlIHRoZSBudW1iZXIgdGhlIG1pbmltdW0gbGVuZ3RoOyBkZWZhdWx0cyB0byA8Y29kZT5cIjBcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0KDEyMzQ1NjcsIFwiLFwiLCA4KSk7IC8vIFRyYWNlcyAwMSwyMzQsNTY3XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBrRGVsaW0sIG1pbkxlbmd0aCwgZmlsbENoYXIpIHtcbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSBcIixcIjtcbiAgfVxuICBpZiAoaXNOYU4obWluTGVuZ3RoKSkge1xuICAgIG1pbkxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKCFmaWxsQ2hhcikge1xuICAgIGZpbGxDaGFyID0gXCIwXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcbiAgY29uc3QgbGVuID0gbnVtLmxlbmd0aDtcblxuICBpZiAobWluTGVuZ3RoICE9PSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuICAgIG1pbkxlbmd0aCAtPSBsZW47XG5cbiAgICBjb25zdCBhZGRDaGFyID0gZmlsbENoYXIgfHwgXCIwXCI7XG5cbiAgICB3aGlsZSAobWluTGVuZ3RoLS0pIHtcbiAgICAgIG51bSA9IGFkZENoYXIgKyBudW07XG4gICAgfVxuICB9XG5cbiAgaWYgKGtEZWxpbSAhPT0gbnVsbCAmJiBudW0ubGVuZ3RoID4gMykge1xuICAgIGNvbnN0IHRvdGFsRGVsaW0gPSBNYXRoLmZsb29yKG51bS5sZW5ndGggLyAzKTtcbiAgICBjb25zdCB0b3RhbFJlbWFpbiA9IG51bS5sZW5ndGggJSAzO1xuICAgIGNvbnN0IG51bVNwbGl0ID0gbnVtLnNwbGl0KFwiXCIpO1xuICAgIGxldCBpID0gLTE7XG5cbiAgICB3aGlsZSAoKytpIDwgdG90YWxEZWxpbSkge1xuICAgICAgbnVtU3BsaXQuc3BsaWNlKHRvdGFsUmVtYWluICsgNCAqIGksIDAsIGtEZWxpbSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdGFsUmVtYWluID09PSAwKSB7XG4gICAgICBudW1TcGxpdC5zaGlmdCgpO1xuICAgIH1cblxuICAgIG51bSA9IG51bVNwbGl0LmpvaW4oXCJcIik7XG4gIH1cblxuICBpZiAocmVtYWluZGVyICE9PSAwKSB7XG4gICAgbnVtICs9IHJlbWFpbmRlci50b1N0cmluZygpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuICBpZiAoZm9yY2VEZWNpbWFscyA9PT0gbnVsbCkge1xuICAgIGZvcmNlRGVjaW1hbHMgPSB0cnVlO1xuICB9XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gXCIsXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCB8fCBmb3JjZURlY2ltYWxzKSB7XG4gICAgY3VycmVuY3kgKz0gcmVtYWluZGVyLnRvRml4ZWQoMikuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbmN5O1xufVxuXG4vKipcbiBGaW5kcyB0aGUgZW5nbGlzaCBvcmRpbmFsIHN1ZmZpeCBmb3IgdGhlIG51bWJlciBnaXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGZpbmQgdGhlIG9yZGluYWwgc3VmZml4IG9mLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgc3VmZml4IGZvciB0aGUgbnVtYmVyLCAyIGNoYXJhY3RlcnMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZygzMiArIGdldE9yZGluYWxTdWZmaXgoMzIpKTsgLy8gVHJhY2VzIDMybmRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsU3VmZml4KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSAyMCkge1xuICAgIHJldHVybiBcInRoXCI7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUgJSAxMCkge1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBcInJkXCI7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gXCJzdFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJ0aFwiO1xuICB9XG59XG5cbi8qKlxuIEFkZHMgYSBsZWFkaW5nIHplcm8gZm9yIG51bWJlcnMgbGVzcyB0aGFuIHRlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGFkZCBsZWFkaW5nIHplcm8uXG4gQHJldHVybiBOdW1iZXIgYXMgYSBTdHJpbmc7IGlmIHRoZSBudW1iZXIgd2FzIGxlc3MgdGhhbiB0ZW4gdGhlIG51bWJlciB3aWxsIGhhdmUgYSBsZWFkaW5nIHplcm8uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybyg3KSk7IC8vIFRyYWNlcyAwN1xuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDExKSk7IC8vIFRyYWNlcyAxMVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDEwID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuIFNwZWxscyB0aGUgcHJvdmlkZWQgbnVtYmVyLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gc3BlbGwuIE5lZWRzIHRvIGJlIGxlc3MgdGhhbiA5OTk5OTk5OTkuXG4gQHJldHVybiBUaGUgbnVtYmVyIHNwZWxsZWQgb3V0IGFzIGEgU3RyaW5nLlxuIEB0aHJvd3MgPGNvZGU+RXJyb3I8L2NvZGU+IGlmIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gOTk5OTk5OTk5LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coc3BlbGwoMCkpOyAvLyBUcmFjZXMgWmVyb1xuIGNvbnNvbGUubG9nKHNwZWxsKDIzKSk7IC8vIFRyYWNlcyBUd2VudHktVGhyZWVcbiBjb25zb2xlLmxvZyhzcGVsbCgyMDA1Njc4KSk7IC8vIFRyYWNlcyBUd28gTWlsbGlvbiwgRml2ZSBUaG91c2FuZCwgU2l4IEh1bmRyZWQgU2V2ZW50eS1FaWdodFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwZWxsKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDk5OTk5OTk5OSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIHRvbyBsYXJnZSBmb3IgdGhpcyBtZXRob2QuXCIpO1xuICB9XG5cbiAgY29uc3Qgb25lc1NwZWxsaW5ncyA9IFtcbiAgICBcIlwiLFxuICAgIFwiT25lXCIsXG4gICAgXCJUd29cIixcbiAgICBcIlRocmVlXCIsXG4gICAgXCJGb3VyXCIsXG4gICAgXCJGaXZlXCIsXG4gICAgXCJTaXhcIixcbiAgICBcIlNldmVuXCIsXG4gICAgXCJFaWdodFwiLFxuICAgIFwiTmluZVwiLFxuICAgIFwiVGVuXCIsXG4gICAgXCJFbGV2ZW5cIixcbiAgICBcIlR3ZWx2ZVwiLFxuICAgIFwiVGhpcnRlZW5cIixcbiAgICBcIkZvdXJ0ZWVuXCIsXG4gICAgXCJGaWZ0ZWVuXCIsXG4gICAgXCJTaXh0ZWVuXCIsXG4gICAgXCJTZXZlbnRlZW5cIixcbiAgICBcIkVpZ2h0ZWVuXCIsXG4gICAgXCJOaW5ldGVlblwiLFxuICBdO1xuICBjb25zdCB0ZW5zU3BlbGxpbmdzID0gW1xuICAgIFwiXCIsXG4gICAgXCJcIixcbiAgICBcIlR3ZW50eVwiLFxuICAgIFwiVGhpcnR5XCIsXG4gICAgXCJGb3J0eVwiLFxuICAgIFwiRmlmdHlcIixcbiAgICBcIlNpeHR5XCIsXG4gICAgXCJTZXZlbnR5XCIsXG4gICAgXCJFaWdodHlcIixcbiAgICBcIk5pbmV0eVwiLFxuICBdO1xuICBsZXQgc3BlbGxpbmcgPSBcIlwiO1xuXG4gIGNvbnN0IG1pbGxpb25zID0gdmFsdWUgLyAxMDAwMDAwO1xuICB2YWx1ZSAlPSAxMDAwMDAwO1xuXG4gIGNvbnN0IHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcbiAgdmFsdWUgJT0gMTAwMDtcblxuICBjb25zdCBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuICB2YWx1ZSAlPSAxMDA7XG5cbiAgY29uc3QgdGVucyA9IHZhbHVlIC8gMTA7XG4gIHZhbHVlICU9IDEwO1xuXG4gIGNvbnN0IG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG4gIGlmIChtaWxsaW9ucyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwobWlsbGlvbnMpICsgXCIgTWlsbGlvblwiO1xuICB9XG5cbiAgaWYgKHRob3VzYW5kcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwodGhvdXNhbmRzKSArIFwiIFRob3VzYW5kXCI7XG4gIH1cblxuICBpZiAoaHVuZHJlZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKGh1bmRyZWRzKSArIFwiIEh1bmRyZWRcIjtcbiAgfVxuXG4gIGlmICh0ZW5zICE9PSAwIHx8IG9uZXMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIgXCI7XG5cbiAgICBpZiAodGVucyA8IDIpIHtcbiAgICAgIHNwZWxsaW5nICs9IG9uZXNTcGVsbGluZ3NbdGVucyAqIDEwICsgb25lc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cbiAgICAgIGlmIChvbmVzICE9PSAwKSB7XG4gICAgICAgIHNwZWxsaW5nICs9IFwiLVwiICsgb25lc1NwZWxsaW5nc1tvbmVzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3BlbGxpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiWmVyb1wiO1xuICB9XG5cbiAgcmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuICByZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0XG4gICAgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFwicjpcIiArIHRoaXMuciArIFwiLGc6XCIgKyB0aGlzLmcgKyBcIixiOlwiICsgdGhpcy5iO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWQpIHtcbiAgcmV0dXJuIChyYWQgKiAxODApIC8gTWF0aC5QSTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aHN0ZXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpKTtcbiAgcmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgcmV0dXJuIGEgKyB0ICogKGIgLSBhKTtcbiAgLy8gcmV0dXJuIGEoMS10KSArIGJ0XG4gIC8vcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXgoYSwgYiwgdCkge1xuICByZXR1cm4gbGVycChhLCBiLCB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm0odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL2EgbW9kdWxvIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBuZWdhdGl2ZXMgbnVtYmVycyAnY29ycmVjdGx5J1xuZXhwb3J0IGZ1bmN0aW9uIG1vZFdyYXAobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vcmFuZG9tIHdpdGggc2VlZCwgcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20xRChzZWVkKSB7XG4gIHJldHVybiBtb2RXcmFwKE1hdGguc2luKHNlZWQpICogNDM3NTguNTQ1MywgMSk7XG59XG5cbi8vcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiBub2lzZTFEKHgpIHtcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoeCk7XG4gIGNvbnN0IGYgPSBtb2RXcmFwKHgsIDEpO1xuICBjb25zdCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBsZXJwKHUsIHJhbmRvbTFEKGkpLCByYW5kb20xRChpICsgMS4wKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQ2xhbXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGNsYW1wKGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpLCBtaW4yLCBtYXgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmVXYXZlKFxuICBhbmdsZSA9IDAsXG4gIGZyZXF1ZW5jeSA9IE1hdGguUEksXG4gIHRpbWUgPSAwLFxuICBzcGVlZCA9IDEsXG4gIGFtcGxpdHVkZSA9IDFcbikge1xuICByZXR1cm4gTWF0aC5zaW4oYW5nbGUgKiBmcmVxdWVuY3kgKyB0aW1lICogc3BlZWQpICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBUaW1lKHRpbWUsIHN0YXJ0VGltZSwgZHVyYXRpb24pIHtcbiAgcmV0dXJuIGNsYW1wKHRpbWUgLSBzdGFydFRpbWUsIDAuMCwgZHVyYXRpb24pIC8gZHVyYXRpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBlYXNlIHZhbHVlXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YWx1ZSArPSBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uKTtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uID0gMC4xKSB7XG4gIHJldHVybiAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcGFyYW0gc3BlZWQ6IFRoZSBjdXJyZW50IHNwZWVkXG4gQHBhcmFtIGVsYXN0aWNpdHk6IFRoZSBlbGFzdGljaXR5IGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgbmV3IHNwZWVkIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gc3BlZWQgPSBzcHJpbmcodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24sIHNwZWVkLCBlbGFzdGljaXR5KTtcbiB2YWx1ZSArPSBzcGVlZDtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJpbmcoXG4gIHZhbHVlLFxuICB0YXJnZXQgPSAwLFxuICBmcmljdGlvbiA9IDAuMSxcbiAgc3BlZWQgPSAwLFxuICBlbGFzdGljaXR5ID0gMFxuKSB7XG4gIHJldHVybiBzcGVlZCAqIGVsYXN0aWNpdHkgKyAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyhhbmdsZSkge1xuICBjb25zdCBjaXJjbGUgPSBNYXRoLlBJICogMjtcbiAgd2hpbGUgKGFuZ2xlID4gY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlIC09IGNpcmNsZTtcbiAgfVxuICB3aGlsZSAoYW5nbGUgPCAtY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlICs9IGNpcmNsZTtcbiAgfVxuICByZXR1cm4gYW5nbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhDb2xvclN0cmluZ1RvTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRpbWVBTVBNIH0gZnJvbSAnLi4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVybyB9IGZyb20gJy4uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlcic7XG5pbXBvcnQgeyBzZW5kVHJhY2tFdmVudE1lc3NhZ2UgfSBmcm9tICcuL21vZGVsL0dBQnJpZGdlJztcblxuY29uc29sZS5sb2coJ3ZpZGVvLXJlY29yZGluZyBqYXZhc2NyaXB0IHN0YXJ0ZWQnKTtcblxuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnanNvbiddLCAocmVzdWx0KSA9PiB7XG4gIGNvbnNvbGUubG9nKCd2aWRlby1yZWNvcmRpbmcganNvbiBsb2FkZWQnKTtcblxuICBsZXQgY29sb3JUaGVtZSA9ICdEYXJrJztcbiAgaWYgKHJlc3VsdCkge1xuICAgIGlmIChyZXN1bHQuanNvbikge1xuICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKHJlc3VsdC5qc29uKTtcbiAgICAgIGlmIChkYXRhLnNldHRpbmdzKSB7XG4gICAgICAgIGNvbG9yVGhlbWUgPSBkYXRhLnNldHRpbmdzLmNvbG9yVGhlbWVzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBsZXQgaXNDb2xvclRoZW1lTGlnaHQ7XG4gIHN3aXRjaCAoY29sb3JUaGVtZSkge1xuICAgIGNhc2UgJ0RhcmsnOlxuICAgIGNhc2UgJ0xpZ2h0JzpcbiAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gY29sb3JUaGVtZSA9PSAnTGlnaHQnO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGxldCBkYXJrTW9kZU1hdGNoTWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpO1xuICAgICAgbGV0IGlzRGFya01vZGUgPSBkYXJrTW9kZU1hdGNoTWVkaWEubWF0Y2hlcztcbiAgICAgIGlzQ29sb3JUaGVtZUxpZ2h0ID0gIWlzRGFya01vZGU7XG4gICAgICBicmVhaztcbiAgfVxuICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zYy1kZWZhdWx0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lLWxpZ2h0JywgaXNDb2xvclRoZW1lTGlnaHQpO1xufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIGRpc3BhdGNoVmlkZW9IZWlnaHQoKTtcbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1zZywgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHtcbiAgY29uc29sZS5sb2coJ3ZpZGVvLXJlY29yZGluZyBvbk1lc3NhZ2UnLCBtc2cudHlwZSk7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlQ29sb3JUaGVtZSc6XG4gICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zYy1kZWZhdWx0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lLWxpZ2h0JywgbXNnLmlzQ29sb3JUaGVtZUxpZ2h0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVVbmxvYWRWaWRlbyc6XG4gICAgICB1bmxvYWRWaWRlbygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVNob3dWaWRlbyc6XG4gICAgICBkaXNwYXRjaFZpZGVvSGVpZ2h0KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVmlkZW9VUkwnOlxuICAgICAgY29uc29sZS5sb2coJ3ZpZGVvLXJlY29yZGluZyBtZXNzYWdlIHNjcm9sbENhcHR1cmVWaWRlb1VSTCcpO1xuICAgICAgdXBkYXRlVmlkZW8obXNnKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxubGV0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1wbGF5ZXInKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJ3RydWUnKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJ3RydWUnKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJzEnKTtcbnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICBkaXNwYXRjaFZpZGVvSGVpZ2h0KCk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hWaWRlb0hlaWdodCgpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsndGFiSWQnXSkudGhlbigodGFiSWQpID0+IHtcbiAgICBsZXQgbXNnID0ge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVWaWRlb0hlaWdodCcsXG4gICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgIH07XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQudGFiSWQsIG1zZyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWRlbyhtZXNzYWdlKSB7XG4gIGNvbnNvbGUubG9nKCd2aWRlby1yZWNvcmRpbmcudXBkYXRlVmlkZW8nKTtcbiAgY29uc3QgdmlkZW9VUkwgPSBtZXNzYWdlLnZpZGVvVVJMO1xuICBsZXQgZXh0ZW5zaW9uID0gbWVzc2FnZS5leHRlbnNpb247XG4gIC8vIGxldCBleHRlbnNpb24gPSBcIndlYm1cIjtcbiAgLy8gc3dpdGNoKG1lc3NhZ2UuZm9ybWF0KSB7XG4gIC8vICAgICBjYXNlIFwieC1tYXRyb3NrYVwiOlxuICAvLyAgICAgICAgIGV4dGVuc2lvbiA9IFwibWt2XCI7XG4gIC8vICAgICBicmVhaztcbiAgLy8gICAgIGNhc2UgXCJ3ZWJtXCI6XG4gIC8vICAgICBkZWZhdWx0OlxuICAvLyAgICAgICAgIGV4dGVuc2lvbiA9IFwid2VibVwiO1xuICAvLyAgICAgYnJlYWs7XG4gIC8vIH1cbiAgcGxheWVyLnNyYyA9IHZpZGVvVVJMO1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBhbXBtVGltZSA9IHRpbWVBTVBNKGRhdGUpO1xuICAvLyBTY3JlZW4gU2hvdCAyMDIwLTAzLTIwIGF0IDQuMzUuMTQgUE1cbiAgbGV0IGRhdGVEYXRhID0ge1xuICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpLFxuICB9O1xuICBhbXBtVGltZS5hbXBtID0gYW1wbVRpbWUuYW1wbS50b1VwcGVyQ2FzZSgpO1xuICBsZXQgdmlkZW9GaWxlTmFtZSA9IGBTY3JvbGwgQ2FwdHVyZSAke2RhdGVEYXRhLnllYXJ9LSR7ZGF0ZURhdGEubW9udGh9LSR7ZGF0ZURhdGEuZGF0ZX0gYXQgJHthbXBtVGltZS5ob3Vyc30uJHthbXBtVGltZS5taW51dGVzfS4ke2FtcG1UaW1lLnNlY29uZHN9ICR7YW1wbVRpbWUuYW1wbX0uJHtleHRlbnNpb259YDtcblxuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Euc2MtZG93bmxvYWQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBidXR0b24gPSBidXR0b25zW2ldO1xuICAgIGJ1dHRvbi5ocmVmID0gdmlkZW9VUkw7XG4gICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoJ2Rvd25sb2FkJywgJ2NsaWNrJyk7XG4gICAgfSk7XG4gIH1cbiAgbGV0IGZpbGVOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLWZpbGVuYW1lIGEuc2MtZG93bmxvYWQtYnV0dG9uJyk7XG4gIGZpbGVOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gdmlkZW9GaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gIHBsYXllci5wYXVzZSgpO1xuICAvLyBwbGF5ZXIucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgLy8gcGxheWVyLmxvYWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHlwZSIsInNlbmRUcmFja1BhZ2VNZXNzYWdlIiwicGF0aCIsImFkZExlYWRpbmdaZXJvIiwidGltZUFNUE0iLCJkYXRlIiwiaG91cnMiLCJnZXRIb3VycyIsImFtcG0iLCJtaW51dGVzIiwiZ2V0TWludXRlcyIsInNlY29uZHMiLCJnZXRTZWNvbmRzIiwiZm9ybWF0QU1QTSIsInNwYWNlQmV0d2VlbiIsImRhdGVEYXRhIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwibW9udGgiLCJnZXRBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsIkRhdGUiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInJlc3VsdCIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInRleHQiLCJ5ZWFyc0JldHdlZW5GbG9vciIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwibW9udGhzQmV0d2VlbkZsb29yIiwid2Vla3NCZXR3ZWVuRmxvb3IiLCJkYXlzQmV0d2VlbkZsb29yIiwiaG91cnNCZXR3ZWVuRmxvb3IiLCJtaW51dGVzQmV0d2VlbkZsb29yIiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwibWluIiwibWF4IiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZ2V0UmFuZG9tSW50SW5jbHVzaXZlIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJyYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UiLCJpc0V2ZW4iLCJ2YWx1ZSIsImlzT2RkIiwiaXNJbnRlZ2VyIiwiaXNQcmltZSIsInMiLCJzcXJ0IiwiaSIsInJvdW5kRGVjaW1hbFRvUGxhY2UiLCJwbGFjZSIsInAiLCJwb3ciLCJyb3VuZCIsInJvdW5kMSIsInJvdW5kMiIsInJvdW5kMyIsImxvb3BJbmRleCIsImluZGV4IiwiaXNCZXR3ZWVuIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwiY29uc3RyYWluIiwiY3JlYXRlU3RlcHNCZXR3ZWVuIiwiYmVnaW4iLCJlbmQiLCJzdGVwcyIsInN0ZXBzQmV0d2VlbiIsImluY3JlbWVudCIsInB1c2giLCJpbnRlcnBvbGF0ZSIsImFtb3VudCIsIm1hcCIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJsZXJwIiwibm9ybSIsImdldFdlaWdodGVkQXZlcmFnZSIsImRlc3QiLCJuIiwiZm9ybWF0Iiwia0RlbGltIiwibWluTGVuZ3RoIiwiZmlsbENoYXIiLCJpc05hTiIsInJlbWFpbmRlciIsIm51bSIsImxlbiIsImFkZENoYXIiLCJ0b3RhbERlbGltIiwidG90YWxSZW1haW4iLCJudW1TcGxpdCIsInNwbGl0Iiwic3BsaWNlIiwic2hpZnQiLCJqb2luIiwic3Vic3RyIiwiZm9ybWF0Q3VycmVuY3kiLCJmb3JjZURlY2ltYWxzIiwiY3VycmVuY3kiLCJ0b0ZpeGVkIiwiZ2V0T3JkaW5hbFN1ZmZpeCIsInNwZWxsIiwiRXJyb3IiLCJvbmVzU3BlbGxpbmdzIiwidGVuc1NwZWxsaW5ncyIsInNwZWxsaW5nIiwibWlsbGlvbnMiLCJ0aG91c2FuZHMiLCJodW5kcmVkcyIsInRlbnMiLCJvbmVzIiwiY29tcG9uZW50VG9IZXgiLCJjIiwiaGV4IiwicmdiVG9IZXgiLCJyZ2IiLCJyIiwiZyIsImIiLCJoZXhUb1JnYiIsImV4ZWMiLCJwYXJzZUludCIsImRlZ1RvUmFkIiwiZGVncmVlcyIsIlBJIiwicmFkVG9EZWciLCJyYWQiLCJzbW9vdGhzdGVwIiwieCIsImEiLCJ0IiwibWl4IiwiY2xhbXAiLCJtb2QiLCJtb2RXcmFwIiwicmFuZG9tMUQiLCJzZWVkIiwic2luIiwibm9pc2UxRCIsImYiLCJ1IiwicmFuZG9tUmFuZ2UiLCJyYW5kb21JbnQiLCJtYXBDbGFtcCIsInNpbmVXYXZlIiwiYW5nbGUiLCJmcmVxdWVuY3kiLCJ0aW1lIiwic3BlZWQiLCJhbXBsaXR1ZGUiLCJjbGFtcFRpbWUiLCJzdGFydFRpbWUiLCJkdXJhdGlvbiIsImVhc2VPdXQiLCJ0YXJnZXQiLCJmcmljdGlvbiIsInNwcmluZyIsImVsYXN0aWNpdHkiLCJyZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyIsImNpcmNsZSIsImhleENvbG9yU3RyaW5nVG9OdW1iZXIiLCJOdW1iZXIiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsInN0b3JhZ2UiLCJsb2NhbCIsImdldCIsImNvbG9yVGhlbWUiLCJqc29uIiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsInNldHRpbmdzIiwiY29sb3JUaGVtZXMiLCJpc0NvbG9yVGhlbWVMaWdodCIsImRhcmtNb2RlTWF0Y2hNZWRpYSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJpc0RhcmtNb2RlIiwibWF0Y2hlcyIsImRvY3VtZW50IiwiYm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZGlzcGF0Y2hWaWRlb0hlaWdodCIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwibXNnIiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIiwidW5sb2FkVmlkZW8iLCJ1cGRhdGVWaWRlbyIsInBsYXllciIsInRoZW4iLCJ0YWJJZCIsImhlaWdodCIsInNjcm9sbEhlaWdodCIsInRhYnMiLCJtZXNzYWdlIiwidmlkZW9VUkwiLCJleHRlbnNpb24iLCJzcmMiLCJhbXBtVGltZSIsInllYXIiLCJ0b1VwcGVyQ2FzZSIsInZpZGVvRmlsZU5hbWUiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsImhyZWYiLCJkb3dubG9hZCIsImZpbGVOYW1lQnV0dG9uIiwidGV4dENvbnRlbnQiLCJwYXVzZSJdLCJzb3VyY2VSb290IjoiIn0=