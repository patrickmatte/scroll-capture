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

/***/ "./js/model/utils.js":
/*!***************************!*\
  !*** ./js/model/utils.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFilename: () => (/* binding */ createFilename)
/* harmony export */ });
/* harmony import */ var _lib_tsunami_utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/tsunami/utils/date */ "./lib/tsunami/utils/date.js");
/* harmony import */ var _lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/tsunami/utils/number */ "./lib/tsunami/utils/number.js");


function createFilename(extension) {
  let date = new Date();
  let ampmTime = (0,_lib_tsunami_utils_date__WEBPACK_IMPORTED_MODULE_0__.timeAMPM)(date);
  let dateData = {
    year: date.getFullYear(),
    month: (0,_lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__.addLeadingZero)(date.getMonth() + 1),
    date: (0,_lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__.addLeadingZero)(date.getDate())
  };
  ampmTime.ampm = ampmTime.ampm.toUpperCase();
  return `Scroll Capture ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}.${extension}`;
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
/* harmony import */ var _model_GABridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/GABridge */ "./js/model/GABridge.js");
/* harmony import */ var _model_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/utils */ "./js/model/utils.js");


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
  player.src = videoURL;
  let videoFileName = (0,_model_utils__WEBPACK_IMPORTED_MODULE_1__.createFilename)(message.extension);
  let buttons = document.querySelectorAll('a.sc-download-button');
  for (let i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.href = videoURL;
    button.download = videoFileName;
    button.addEventListener('click', () => {
      (0,_model_GABridge__WEBPACK_IMPORTED_MODULE_0__.sendTrackEventMessage)('download', 'click');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7SUFDRHZQLE1BQU0sQ0FBQ3dQLElBQUksQ0FBQ3RQLFdBQVcsQ0FBQ21QLEtBQUssQ0FBQ0EsS0FBSyxFQUFFUCxHQUFHLENBQUM7RUFDM0MsQ0FBQyxDQUFDO0FBQ0o7QUFFQSxTQUFTSSxXQUFXQSxDQUFDTyxPQUFPLEVBQUU7RUFDNUIsTUFBTUMsUUFBUSxHQUFHRCxPQUFPLENBQUNDLFFBQVE7RUFDakNQLE1BQU0sQ0FBQ1EsR0FBRyxHQUFHRCxRQUFRO0VBQ3JCLElBQUlFLGFBQWEsR0FBR3BQLDREQUFjLENBQUNpUCxPQUFPLENBQUNoUCxTQUFTLENBQUM7RUFDckQsSUFBSW9QLE9BQU8sR0FBR3ZCLFFBQVEsQ0FBQ3dCLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDO0VBQy9ELEtBQUssSUFBSTlKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBRzZKLE9BQU8sQ0FBQy9QLE1BQU0sRUFBRWtHLENBQUMsRUFBRSxFQUFFO0lBQ3ZDLElBQUkrSixNQUFNLEdBQUdGLE9BQU8sQ0FBQzdKLENBQUMsQ0FBQztJQUN2QitKLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHTixRQUFRO0lBQ3RCSyxNQUFNLENBQUNFLFFBQVEsR0FBR0wsYUFBYTtJQUMvQkcsTUFBTSxDQUFDckIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU07TUFDckNqUCxzRUFBcUIsQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDO0lBQzVDLENBQUMsQ0FBQztFQUNKO0VBQ0EsSUFBSXlRLGNBQWMsR0FBRzVCLFFBQVEsQ0FBQ0UsYUFBYSxDQUFDLHlDQUF5QyxDQUFDO0VBQ3RGMEIsY0FBYyxDQUFDQyxXQUFXLEdBQUdQLGFBQWE7QUFDNUM7QUFFQSxTQUFTWCxXQUFXQSxDQUFBLEVBQUc7RUFDckJFLE1BQU0sQ0FBQ2lCLEtBQUssQ0FBQyxDQUFDO0VBQ2Q7RUFDQTtBQUNGLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC9HQUJyaWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy92aWRlby1yZWNvcmRpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHNlbmRUcmFja0V2ZW50TWVzc2FnZShjYXRlZ29yeSwgYWN0aW9uLCBsYWJlbCA9ICcnKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja0V2ZW50JywgY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tQYWdlTWVzc2FnZShwYXRoKSB7XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHsgdHlwZTogJ3Njcm9sbENhcHR1cmVUcmFja1BhZ2UnLCBwYXRoIH0pO1xufVxuIiwiaW1wb3J0IHsgdGltZUFNUE0gfSBmcm9tICcuLi8uLi9saWIvdHN1bmFtaS91dGlscy9kYXRlJztcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvIH0gZnJvbSAnLi4vLi4vbGliL3RzdW5hbWkvdXRpbHMvbnVtYmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGVuYW1lKGV4dGVuc2lvbikge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBhbXBtVGltZSA9IHRpbWVBTVBNKGRhdGUpO1xuICBsZXQgZGF0ZURhdGEgPSB7XG4gICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBkYXRlOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSksXG4gIH07XG4gIGFtcG1UaW1lLmFtcG0gPSBhbXBtVGltZS5hbXBtLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiBgU2Nyb2xsIENhcHR1cmUgJHtkYXRlRGF0YS55ZWFyfS0ke2RhdGVEYXRhLm1vbnRofS0ke2RhdGVEYXRhLmRhdGV9IGF0ICR7YW1wbVRpbWUuaG91cnN9LiR7YW1wbVRpbWUubWludXRlc30uJHthbXBtVGltZS5zZWNvbmRzfSAke2FtcG1UaW1lLmFtcG19LiR7ZXh0ZW5zaW9ufWA7XG59XG4iLCJpbXBvcnQge2FkZExlYWRpbmdaZXJvfSBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBTVBNKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGxldCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRsZXQgc2Vjb25kcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbXBtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUsIHNwYWNlQmV0d2VlbiA9IFwiXCIpIHtcblx0bGV0IGRhdGVEYXRhID0gdGltZUFNUE0oZGF0ZSk7XG5cdGxldCBzdHJUaW1lID0gZGF0ZURhdGEuaG91cnMgKyAnOicgKyBkYXRlRGF0YS5taW51dGVzICsgc3BhY2VCZXR3ZWVuICsgYW1wbTtcblx0cmV0dXJuIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFVUQ1N0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0RhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDSG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG91cnMoZGF0ZSwgaG91cnMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgbGV0IG1vbnRocyA9IHtcblx0ZW46W1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdGZyOltcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIiwgXCJKdWlsbGV0XCIsIFwiQW/Du3RcIiwgXCJTZXB0ZW1icmVcIiwgXCJPY3RvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEw6ljZW1icmVcIl1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlLCBsYW5ndWFnZSkge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0bGFuZ3VhZ2UgPSBcImVuXCI7XG5cdH1cblx0bGV0IG1vbnRoO1xuXHRzd2l0Y2gobGFuZ3VhZ2UpIHtcblx0XHRjYXNlIFwiZW5cIjpcblx0XHRcdG1vbnRoID0gbW9udGhzW2xhbmd1YWdlXVtkYXRlLmdldE1vbnRoKCldO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIG1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGJpcnRoRGF0ZSkge1xuXHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0aWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0YWdlLS07XG5cdH1cblx0cmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWF0QXNVVEMoZGF0ZSkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG5cdHJlc3VsdC5zZXRNaW51dGVzKHJlc3VsdC5nZXRNaW51dGVzKCkgLSByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1pbnV0ZSA9IDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckhvdXIgPSA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckhvdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1vbnRoID0gMzY1IC8gMTIgICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyWWVhciA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJZZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IHRleHQgPSBcIlwiO1xuXHRsZXQgeWVhcnNCZXR3ZWVuID0geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdGlmICh5ZWFyc0JldHdlZW4gPj0gMSkge1xuXHRcdGxldCB5ZWFyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoeWVhcnNCZXR3ZWVuKTtcblx0XHRpZiAoeWVhcnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXJzIGFnb1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXIgYWdvXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGxldCBtb250aHNCZXR3ZWVuID0gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdGlmIChtb250aHNCZXR3ZWVuID49IDEpIHtcblx0XHRcdGxldCBtb250aHNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1vbnRoc0JldHdlZW4pO1xuXHRcdFx0aWYgKG1vbnRoc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGhzIGFnb1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGggYWdvXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB3ZWVrc0JldHdlZW4gPSB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdGlmICh3ZWVrc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRsZXQgd2Vla3NCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHdlZWtzQmV0d2Vlbik7XG5cdFx0XHRcdGlmICh3ZWVrc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWtzIGFnb1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2VlayBhZ29cIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuID0gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRsZXQgZGF5c0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoZGF5c0JldHdlZW4pO1xuXHRcdFx0XHRcdGlmIChkYXlzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheXMgYWdvXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXkgYWdvXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW4gPSBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoaG91cnNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VycyBhZ29cIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91ciBhZ29cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuID0gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1pbnV0ZXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZSBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IFwiSnVzdCBub3dcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59IiwiLy8gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChleGNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChpbmNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgbWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBldmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW47IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0V2ZW4oNykpOyAvLyBUcmFjZXMgZmFsc2VcbiBjb25zb2xlLmxvZyhpc0V2ZW4oMTIpKTsgLy8gVHJhY2VzIHRydWVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW4odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmIDEpID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAxID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgcHJpbWUuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBvbmx5IGRpdmlzaWJsZSBieSA8Y29kZT4xPC9jb2RlPiBhbmQgaXRzZWxmLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIHByaW1lOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNQcmltZSgxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzUHJpbWUoNCkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1lKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gMSB8fCB2YWx1ZSA9PT0gMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzRXZlbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzID0gTWF0aC5zcXJ0KHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDM7IGkgPD0gczsgaSsrKSB7XG4gICAgaWYgKHZhbHVlICUgaSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiBSb3VuZHMgYSBudW1iZXIncyBkZWNpbWFsIHZhbHVlIHRvIGEgc3BlY2lmaWMgcGxhY2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgdG8gcm91bmQuXG4gQHBhcmFtIHBsYWNlOiBUaGUgZGVjaW1hbCBwbGFjZSB0byByb3VuZC5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHZhbHVlIHJvdW5kZWQgdG8gdGhlIGRlZmluZWQgcGxhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMikpOyAvLyBUcmFjZXMgMy4xNFxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAzKSk7IC8vIFRyYWNlcyAzLjE0MlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIHBsYWNlID0gMSkge1xuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIHBsYWNlKTtcblxuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHApIC8gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMSh2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDIodmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQzKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAzKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiBpbmRleCBpcyBpbmNsdWRlZCB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gbGVuZ3RoIG90aGVyd2lzZSB0aGUgaW5kZXggbG9vcHMgdG8gdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHJhbmdlIGFuZCBjb250aW51ZXMuXG5cbiBAcGFyYW0gaW5kZXg6IFNob3AgdG8gbG9vcCBpZiBuZWVkZWQuXG4gQHBhcmFtIGxlbmd0aDogVGhlIHRvdGFsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuIEByZXR1cm4gQSB2YWxpZCB6ZXJvLWJhc2VkIGluZGV4LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFyIGNvbG9yczpBcnJheSA9IG5ldyBBcnJheShcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiKTtcblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgyLCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgQmx1ZVxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCg0LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgR3JlZW5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoLTYsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBSZWRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29wSW5kZXgoaW5kZXgsIGxlbmd0aCkge1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgaW5kZXggPSBsZW5ndGggKyAoaW5kZXggJSBsZW5ndGgpO1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgIHJldHVybiBpbmRleCAlIGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgdmFsdWUgaXMgaW5jbHVkZWQgd2l0aGluIGEgcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQHVzYWdlTm90ZSBUaGUgcmFuZ2UgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDMsIDAsIDUpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiAhKFxuICAgIHZhbHVlIDwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHx8XG4gICAgdmFsdWUgPiBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSlcbiAgKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB2YWx1ZSBmYWxscyB3aXRoaW4gYSByYW5nZTsgaWYgbm90IGl0IGlzIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyBlaXRoZXIgdGhlIG51bWJlciBhcyBwYXNzZWQsIG9yIGl0cyB2YWx1ZSBvbmNlIHNuYXBwZWQgdG8gbmVhcmVzdCByYW5nZSB2YWx1ZS5cbiBAdXNhZ2VOb3RlIFRoZSBjb25zdHJhaW50IHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNvbnN0cmFpbigzLCAwLCA1KSk7IC8vIFRyYWNlcyAzXG4gY29uc29sZS5sb2coY29uc3RyYWluKDcsIDAsIDUpKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJhaW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1pbihcbiAgICBNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKSxcbiAgICBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSlcbiAgKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBldmVubHkgc3BhY2VkIG51bWVyaWNhbCBpbmNyZW1lbnRzIGJldHdlZW4gdHdvIG51bWJlcnMuXG5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBwYXJhbSBzdGVwczogVGhlIG51bWJlciBvZiBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyBhbiBBcnJheSBjb21wcmlzZWQgb2YgdGhlIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigwLCA1LCA0KSk7IC8vIFRyYWNlcyAxLDIsMyw0XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDEsIDMsIDMpKTsgLy8gVHJhY2VzIDEuNSwyLDIuNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBzQmV0d2VlbihiZWdpbiwgZW5kLCBzdGVwcykge1xuICBzdGVwcysrO1xuXG4gIGxldCBpID0gMDtcbiAgY29uc3Qgc3RlcHNCZXR3ZWVuID0gW107XG4gIGNvbnN0IGluY3JlbWVudCA9IChlbmQgLSBiZWdpbikgLyBzdGVwcztcblxuICB3aGlsZSAoKytpIDwgc3RlcHMpIHtcbiAgICBzdGVwc0JldHdlZW4ucHVzaChpICogaW5jcmVtZW50ICsgYmVnaW4pO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXBzQmV0d2Vlbjtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHZhbHVlIGJldHdlZW4gdHdvIHNwZWNpZmllZCB2YWx1ZXMuXG5cbiBAcGFyYW0gYW1vdW50OiBUaGUgbGV2ZWwgb2YgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLiBJZiA8Y29kZT4wPC9jb2RlPiwgPGNvZGU+YmVnaW48L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkOyBpZiA8Y29kZT4xPC9jb2RlPiwgPGNvZGU+ZW5kPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZC5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaW50ZXJwb2xhdGUoMC41LCAwLCAxMCkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlKGFtb3VudCwgYmVnaW4sIGVuZCkge1xuICByZXR1cm4gYmVnaW4gKyAoZW5kIC0gYmVnaW4pICogYW1vdW50O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgcGVyY2VudGFnZSBvZiBhIHZhbHVlIGluIGEgZ2l2ZW4gcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQuXG4gQHBhcmFtIG1pbmltdW06IFRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIG1heGltdW06IFRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhub3JtYWxpemUoOCwgNCwgMjApLmRlY2ltYWxQZXJjZW50YWdlKTsgLy8gVHJhY2VzIDAuMjVcbiA8L2NvZGU+XG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIG1pbmltdW0sIG1heGltdW0pIHtcbi8vICAgcmV0dXJuIG5ldyBQZXJjZW50KCh2YWx1ZSAtIG1pbmltdW0pIC8gKG1heGltdW0gLSBtaW5pbXVtKSk7XG4vLyB9XG5cbi8qKlxuIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSBjb29yZGluYXRlIHNwYWNlIHRvIGFub3RoZXIuXG5cbiBAcGFyYW0gdmFsdWU6IFZhbHVlIGZyb20gdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UgdG8gbWFwIHRvIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMTogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDE6IEVuZGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMjogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgyOiBFbmRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobWFwKDAuNzUsIDAsIDEsIDAsIDEwMCkpOyAvLyBUcmFjZXMgNzVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpO1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuLy8gXHRyZXR1cm4gbWluMiArIChtYXgyIC0gbWluMikgKiAoKHZhbHVlIC0gbWluMSkgLyAobWF4MSAtIG1pbjEpKTtcbi8vIH1cblxuLyoqXG4gTG93IHBhc3MgZmlsdGVyIGFsb2dyaXRobSBmb3IgZWFzaW5nIGEgdmFsdWUgdG93YXJkIGEgZGVzdGluYXRpb24gdmFsdWUuIFdvcmtzIGJlc3QgZm9yIHR3ZWVuaW5nIHZhbHVlcyB3aGVuIG5vIGRlZmluaXRlIHRpbWUgZHVyYXRpb24gZXhpc3RzIGFuZCB3aGVuIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZSBjaGFuZ2VzLlxuXG4gSWYgPGNvZGU+KDAuNSA8IG4gPCAxKTwvY29kZT4sIHRoZW4gdGhlIHJlc3VsdGluZyB2YWx1ZXMgd2lsbCBvdmVyc2hvb3QgKHBpbmctcG9uZykgdW50aWwgdGhleSByZWFjaCB0aGUgZGVzdGluYXRpb24gdmFsdWUuIFdoZW4gPGNvZGU+bjwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDEsIGFzIGl0cyB2YWx1ZSBpbmNyZWFzZXMsIHRoZSB0aW1lIGl0IHRha2VzIHRvIHJlYWNoIHRoZSBkZXN0aW5hdGlvbiBhbHNvIGluY3JlYXNlcy4gQSBwbGVhc2luZyB2YWx1ZSBmb3IgPGNvZGU+bjwvY29kZT4gaXMgNS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWUuXG4gQHBhcmFtIGRlc3Q6IFRoZSBkZXN0aW5hdGlvbiB2YWx1ZS5cbiBAcGFyYW0gbjogVGhlIHNsb3dkb3duIGZhY3Rvci5cbiBAcmV0dXJuIFRoZSB3ZWlnaHRlZCBhdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0ZWRBdmVyYWdlKHZhbHVlLCBkZXN0LCBuKSB7XG4gIHJldHVybiB2YWx1ZSArIChkZXN0IC0gdmFsdWUpIC8gbjtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCJcIjwvY29kZT4uXG4gQHBhcmFtIG1pbkxlbmd0aDogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBudW1iZXI7IGRlZmF1bHRzIHRvIDxjb2RlPjAgPC9jb2RlPi5cbiBAcGFyYW0gZmlsbENoYXI6IFRoZSBsZWFkaW5nIGNoYXJhY3RlciB1c2VkIHRvIG1ha2UgdGhlIG51bWJlciB0aGUgbWluaW11bSBsZW5ndGg7IGRlZmF1bHRzIHRvIDxjb2RlPlwiMFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXQoMTIzNDU2NywgXCIsXCIsIDgpKTsgLy8gVHJhY2VzIDAxLDIzNCw1NjdcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIGtEZWxpbSwgbWluTGVuZ3RoLCBmaWxsQ2hhcikge1xuICBpZiAoIWtEZWxpbSkge1xuICAgIGtEZWxpbSA9IFwiLFwiO1xuICB9XG4gIGlmIChpc05hTihtaW5MZW5ndGgpKSB7XG4gICAgbWluTGVuZ3RoID0gMDtcbiAgfVxuICBpZiAoIWZpbGxDaGFyKSB7XG4gICAgZmlsbENoYXIgPSBcIjBcIjtcbiAgfVxuICBjb25zdCByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG4gIGxldCBudW0gPSBNYXRoLmZsb29yKHZhbHVlKS50b1N0cmluZygpO1xuICBjb25zdCBsZW4gPSBudW0ubGVuZ3RoO1xuXG4gIGlmIChtaW5MZW5ndGggIT09IDAgJiYgbWluTGVuZ3RoID4gbGVuKSB7XG4gICAgbWluTGVuZ3RoIC09IGxlbjtcblxuICAgIGNvbnN0IGFkZENoYXIgPSBmaWxsQ2hhciB8fCBcIjBcIjtcblxuICAgIHdoaWxlIChtaW5MZW5ndGgtLSkge1xuICAgICAgbnVtID0gYWRkQ2hhciArIG51bTtcbiAgICB9XG4gIH1cblxuICBpZiAoa0RlbGltICE9PSBudWxsICYmIG51bS5sZW5ndGggPiAzKSB7XG4gICAgY29uc3QgdG90YWxEZWxpbSA9IE1hdGguZmxvb3IobnVtLmxlbmd0aCAvIDMpO1xuICAgIGNvbnN0IHRvdGFsUmVtYWluID0gbnVtLmxlbmd0aCAlIDM7XG4gICAgY29uc3QgbnVtU3BsaXQgPSBudW0uc3BsaXQoXCJcIik7XG4gICAgbGV0IGkgPSAtMTtcblxuICAgIHdoaWxlICgrK2kgPCB0b3RhbERlbGltKSB7XG4gICAgICBudW1TcGxpdC5zcGxpY2UodG90YWxSZW1haW4gKyA0ICogaSwgMCwga0RlbGltKTtcbiAgICB9XG5cbiAgICBpZiAodG90YWxSZW1haW4gPT09IDApIHtcbiAgICAgIG51bVNwbGl0LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgbnVtID0gbnVtU3BsaXQuam9pbihcIlwiKTtcbiAgfVxuXG4gIGlmIChyZW1haW5kZXIgIT09IDApIHtcbiAgICBudW0gKz0gcmVtYWluZGVyLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIG51bTtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIGN1cnJlbmN5IHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGZvcmNlRGVjaW1hbHM6IElmIHRoZSBudW1iZXIgc2hvdWxkIGFsd2F5cyBoYXZlIHR3byBkZWNpbWFsIHBsYWNlcyA8Y29kZT50cnVlPC9jb2RlPiwgb3Igb25seSBzaG93IGRlY2ltYWxzIGlzIHRoZXJlIGlzIGEgZGVjaW1hbHMgdmFsdWUgPGNvZGU+ZmFsc2U8L2NvZGU+OyBkZWZhdWx0cyB0byA8Y29kZT50cnVlPC9jb2RlPi5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIixcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0Q3VycmVuY3koMTIzNC41KSk7IC8vIFRyYWNlcyBcIjEsMjM0LjUwXCJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeSh2YWx1ZSwgZm9yY2VEZWNpbWFscywga0RlbGltKSB7XG4gIGlmIChmb3JjZURlY2ltYWxzID09PSBudWxsKSB7XG4gICAgZm9yY2VEZWNpbWFscyA9IHRydWU7XG4gIH1cbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSBcIixcIjtcbiAgfVxuICBjb25zdCByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG4gIGxldCBjdXJyZW5jeSA9IGZvcm1hdChNYXRoLmZsb29yKHZhbHVlKSwga0RlbGltKTtcblxuICBpZiAocmVtYWluZGVyICE9PSAwIHx8IGZvcmNlRGVjaW1hbHMpIHtcbiAgICBjdXJyZW5jeSArPSByZW1haW5kZXIudG9GaXhlZCgyKS5zdWJzdHIoMSk7XG4gIH1cblxuICByZXR1cm4gY3VycmVuY3k7XG59XG5cbi8qKlxuIEZpbmRzIHRoZSBlbmdsaXNoIG9yZGluYWwgc3VmZml4IGZvciB0aGUgbnVtYmVyIGdpdmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZmluZCB0aGUgb3JkaW5hbCBzdWZmaXggb2YuXG4gQHJldHVybiBSZXR1cm5zIHRoZSBzdWZmaXggZm9yIHRoZSBudW1iZXIsIDIgY2hhcmFjdGVycy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKDMyICsgZ2V0T3JkaW5hbFN1ZmZpeCgzMikpOyAvLyBUcmFjZXMgMzJuZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodmFsdWUpIHtcbiAgaWYgKHZhbHVlID49IDEwICYmIHZhbHVlIDw9IDIwKSB7XG4gICAgcmV0dXJuIFwidGhcIjtcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgc3dpdGNoICh2YWx1ZSAlIDEwKSB7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuIFwicmRcIjtcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gXCJuZFwiO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBcInN0XCI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBcInRoXCI7XG4gIH1cbn1cblxuLyoqXG4gQWRkcyBhIGxlYWRpbmcgemVybyBmb3IgbnVtYmVycyBsZXNzIHRoYW4gdGVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gYWRkIGxlYWRpbmcgemVyby5cbiBAcmV0dXJuIE51bWJlciBhcyBhIFN0cmluZzsgaWYgdGhlIG51bWJlciB3YXMgbGVzcyB0aGFuIHRlbiB0aGUgbnVtYmVyIHdpbGwgaGF2ZSBhIGxlYWRpbmcgemVyby5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDcpKTsgLy8gVHJhY2VzIDA3XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oMTEpKTsgLy8gVHJhY2VzIDExXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm8odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMTAgPyBcIjBcIiArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gU3BlbGxzIHRoZSBwcm92aWRlZCBudW1iZXIuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBzcGVsbC4gTmVlZHMgdG8gYmUgbGVzcyB0aGFuIDk5OTk5OTk5OS5cbiBAcmV0dXJuIFRoZSBudW1iZXIgc3BlbGxlZCBvdXQgYXMgYSBTdHJpbmcuXG4gQHRocm93cyA8Y29kZT5FcnJvcjwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiA5OTk5OTk5OTkuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhzcGVsbCgwKSk7IC8vIFRyYWNlcyBaZXJvXG4gY29uc29sZS5sb2coc3BlbGwoMjMpKTsgLy8gVHJhY2VzIFR3ZW50eS1UaHJlZVxuIGNvbnNvbGUubG9nKHNwZWxsKDIwMDU2NzgpKTsgLy8gVHJhY2VzIFR3byBNaWxsaW9uLCBGaXZlIFRob3VzYW5kLCBTaXggSHVuZHJlZCBTZXZlbnR5LUVpZ2h0XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlbGwodmFsdWUpIHtcbiAgaWYgKHZhbHVlID4gOTk5OTk5OTk5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVmFsdWUgdG9vIGxhcmdlIGZvciB0aGlzIG1ldGhvZC5cIik7XG4gIH1cblxuICBjb25zdCBvbmVzU3BlbGxpbmdzID0gW1xuICAgIFwiXCIsXG4gICAgXCJPbmVcIixcbiAgICBcIlR3b1wiLFxuICAgIFwiVGhyZWVcIixcbiAgICBcIkZvdXJcIixcbiAgICBcIkZpdmVcIixcbiAgICBcIlNpeFwiLFxuICAgIFwiU2V2ZW5cIixcbiAgICBcIkVpZ2h0XCIsXG4gICAgXCJOaW5lXCIsXG4gICAgXCJUZW5cIixcbiAgICBcIkVsZXZlblwiLFxuICAgIFwiVHdlbHZlXCIsXG4gICAgXCJUaGlydGVlblwiLFxuICAgIFwiRm91cnRlZW5cIixcbiAgICBcIkZpZnRlZW5cIixcbiAgICBcIlNpeHRlZW5cIixcbiAgICBcIlNldmVudGVlblwiLFxuICAgIFwiRWlnaHRlZW5cIixcbiAgICBcIk5pbmV0ZWVuXCIsXG4gIF07XG4gIGNvbnN0IHRlbnNTcGVsbGluZ3MgPSBbXG4gICAgXCJcIixcbiAgICBcIlwiLFxuICAgIFwiVHdlbnR5XCIsXG4gICAgXCJUaGlydHlcIixcbiAgICBcIkZvcnR5XCIsXG4gICAgXCJGaWZ0eVwiLFxuICAgIFwiU2l4dHlcIixcbiAgICBcIlNldmVudHlcIixcbiAgICBcIkVpZ2h0eVwiLFxuICAgIFwiTmluZXR5XCIsXG4gIF07XG4gIGxldCBzcGVsbGluZyA9IFwiXCI7XG5cbiAgY29uc3QgbWlsbGlvbnMgPSB2YWx1ZSAvIDEwMDAwMDA7XG4gIHZhbHVlICU9IDEwMDAwMDA7XG5cbiAgY29uc3QgdGhvdXNhbmRzID0gdmFsdWUgLyAxMDAwO1xuICB2YWx1ZSAlPSAxMDAwO1xuXG4gIGNvbnN0IGh1bmRyZWRzID0gdmFsdWUgLyAxMDA7XG4gIHZhbHVlICU9IDEwMDtcblxuICBjb25zdCB0ZW5zID0gdmFsdWUgLyAxMDtcbiAgdmFsdWUgJT0gMTA7XG5cbiAgY29uc3Qgb25lcyA9IHZhbHVlICUgMTA7XG5cbiAgaWYgKG1pbGxpb25zICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbChtaWxsaW9ucykgKyBcIiBNaWxsaW9uXCI7XG4gIH1cblxuICBpZiAodGhvdXNhbmRzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbCh0aG91c2FuZHMpICsgXCIgVGhvdXNhbmRcIjtcbiAgfVxuXG4gIGlmIChodW5kcmVkcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwoaHVuZHJlZHMpICsgXCIgSHVuZHJlZFwiO1xuICB9XG5cbiAgaWYgKHRlbnMgIT09IDAgfHwgb25lcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiBcIjtcblxuICAgIGlmICh0ZW5zIDwgMikge1xuICAgICAgc3BlbGxpbmcgKz0gb25lc1NwZWxsaW5nc1t0ZW5zICogMTAgKyBvbmVzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlbGxpbmcgKz0gdGVuc1NwZWxsaW5nc1t0ZW5zXTtcblxuICAgICAgaWYgKG9uZXMgIT09IDApIHtcbiAgICAgICAgc3BlbGxpbmcgKz0gXCItXCIgKyBvbmVzU3BlbGxpbmdzW29uZXNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzcGVsbGluZy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gXCJaZXJvXCI7XG4gIH1cblxuICByZXR1cm4gc3BlbGxpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gIGNvbnN0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/IFwiMFwiICsgaGV4IDogaGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXgocmdiKSB7XG4gIHJldHVybiBjb21wb25lbnRUb0hleChyZ2IucikgKyBjb21wb25lbnRUb0hleChyZ2IuZykgKyBjb21wb25lbnRUb0hleChyZ2IuYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHRcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gXCJyOlwiICsgdGhpcy5yICsgXCIsZzpcIiArIHRoaXMuZyArIFwiLGI6XCIgKyB0aGlzLmI7XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcykge1xuICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZCkge1xuICByZXR1cm4gKHJhZCAqIDE4MCkgLyBNYXRoLlBJO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3Roc3RlcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgY29uc3QgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkpO1xuICByZXR1cm4geCAqIHggKiAoMyAtIDIgKiB4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xuICAvLyByZXR1cm4gYSgxLXQpICsgYnRcbiAgLy9yZXR1cm4gbWluICsgKG1heCAtIG1pbikgKiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peChhLCBiLCB0KSB7XG4gIHJldHVybiBsZXJwKGEsIGIsIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2QobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vYSBtb2R1bG8gZnVuY3Rpb24gdGhhdCBoYW5kbGVzIG5lZ2F0aXZlcyBudW1iZXJzICdjb3JyZWN0bHknXG5leHBvcnQgZnVuY3Rpb24gbW9kV3JhcChuLCBtKSB7XG4gIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9yYW5kb20gd2l0aCBzZWVkLCByZXR1cm5zIDAtMSByYW5nZVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbTFEKHNlZWQpIHtcbiAgcmV0dXJuIG1vZFdyYXAoTWF0aC5zaW4oc2VlZCkgKiA0Mzc1OC41NDUzLCAxKTtcbn1cblxuLy9yZXR1cm5zIDAtMSByYW5nZVxuZXhwb3J0IGZ1bmN0aW9uIG5vaXNlMUQoeCkge1xuICBjb25zdCBpID0gTWF0aC5mbG9vcih4KTtcbiAgY29uc3QgZiA9IG1vZFdyYXAoeCwgMSk7XG4gIGNvbnN0IHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgcmV0dXJuIGxlcnAodSwgcmFuZG9tMUQoaSksIHJhbmRvbTFEKGkgKyAxLjApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBDbGFtcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gY2xhbXAobGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4MiksIG1pbjIsIG1heDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZVdhdmUoXG4gIGFuZ2xlID0gMCxcbiAgZnJlcXVlbmN5ID0gTWF0aC5QSSxcbiAgdGltZSA9IDAsXG4gIHNwZWVkID0gMSxcbiAgYW1wbGl0dWRlID0gMVxuKSB7XG4gIHJldHVybiBNYXRoLnNpbihhbmdsZSAqIGZyZXF1ZW5jeSArIHRpbWUgKiBzcGVlZCkgKiBhbXBsaXR1ZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcFRpbWUodGltZSwgc3RhcnRUaW1lLCBkdXJhdGlvbikge1xuICByZXR1cm4gY2xhbXAodGltZSAtIHN0YXJ0VGltZSwgMC4wLCBkdXJhdGlvbikgLyBkdXJhdGlvbjtcbn1cblxuLyoqXG4gRWFzZSBhIHZhbHVlIHdpdGggc29tZSBlbGFzdGljaXR5XG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZVxuIEBwYXJhbSB0YXJnZXQ6IFRoZSB0YXJnZXQgdmFsdWVcbiBAcGFyYW0gZnJpY3Rpb246IFRoZSBmcmljdGlvbiBmcm9tIDAgdG8gMVxuIEByZXR1cm4gVGhlIGVhc2UgdmFsdWVcbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhbHVlICs9IGVhc2VPdXQodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24pO1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhc2VPdXQodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24gPSAwLjEpIHtcbiAgcmV0dXJuICh0YXJnZXQgLSB2YWx1ZSkgKiBmcmljdGlvbjtcbn1cblxuLyoqXG4gRWFzZSBhIHZhbHVlIHdpdGggc29tZSBlbGFzdGljaXR5XG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZVxuIEBwYXJhbSB0YXJnZXQ6IFRoZSB0YXJnZXQgdmFsdWVcbiBAcGFyYW0gZnJpY3Rpb246IFRoZSBmcmljdGlvbiBmcm9tIDAgdG8gMVxuIEBwYXJhbSBzcGVlZDogVGhlIGN1cnJlbnQgc3BlZWRcbiBAcGFyYW0gZWxhc3RpY2l0eTogVGhlIGVsYXN0aWNpdHkgZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBuZXcgc3BlZWQgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBzcGVlZCA9IHNwcmluZyh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbiwgc3BlZWQsIGVsYXN0aWNpdHkpO1xuIHZhbHVlICs9IHNwZWVkO1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwcmluZyhcbiAgdmFsdWUsXG4gIHRhcmdldCA9IDAsXG4gIGZyaWN0aW9uID0gMC4xLFxuICBzcGVlZCA9IDAsXG4gIGVsYXN0aWNpdHkgPSAwXG4pIHtcbiAgcmV0dXJuIHNwZWVkICogZWxhc3RpY2l0eSArICh0YXJnZXQgLSB2YWx1ZSkgKiBmcmljdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU11bHRpcGxlUm90YXRpb25zKGFuZ2xlKSB7XG4gIGNvbnN0IGNpcmNsZSA9IE1hdGguUEkgKiAyO1xuICB3aGlsZSAoYW5nbGUgPiBjaXJjbGUgLyAyKSB7XG4gICAgYW5nbGUgLT0gY2lyY2xlO1xuICB9XG4gIHdoaWxlIChhbmdsZSA8IC1jaXJjbGUgLyAyKSB7XG4gICAgYW5nbGUgKz0gY2lyY2xlO1xuICB9XG4gIHJldHVybiBhbmdsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleENvbG9yU3RyaW5nVG9OdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZS5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgc2VuZFRyYWNrRXZlbnRNZXNzYWdlIH0gZnJvbSAnLi9tb2RlbC9HQUJyaWRnZSc7XG5pbXBvcnQgeyBjcmVhdGVGaWxlbmFtZSB9IGZyb20gJy4vbW9kZWwvdXRpbHMnO1xuXG5jaHJvbWUuc3RvcmFnZS5sb2NhbC5nZXQoWydqc29uJ10sIChyZXN1bHQpID0+IHtcbiAgbGV0IGNvbG9yVGhlbWUgPSAnRGFyayc7XG4gIGlmIChyZXN1bHQpIHtcbiAgICBpZiAocmVzdWx0Lmpzb24pIHtcbiAgICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShyZXN1bHQuanNvbik7XG4gICAgICBpZiAoZGF0YS5zZXR0aW5ncykge1xuICAgICAgICBjb2xvclRoZW1lID0gZGF0YS5zZXR0aW5ncy5jb2xvclRoZW1lcztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgbGV0IGlzQ29sb3JUaGVtZUxpZ2h0O1xuICBzd2l0Y2ggKGNvbG9yVGhlbWUpIHtcbiAgICBjYXNlICdEYXJrJzpcbiAgICBjYXNlICdMaWdodCc6XG4gICAgICBpc0NvbG9yVGhlbWVMaWdodCA9IGNvbG9yVGhlbWUgPT0gJ0xpZ2h0JztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBsZXQgZGFya01vZGVNYXRjaE1lZGlhID0gd2luZG93Lm1hdGNoTWVkaWEoJyhwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyayknKTtcbiAgICAgIGxldCBpc0RhcmtNb2RlID0gZGFya01vZGVNYXRjaE1lZGlhLm1hdGNoZXM7XG4gICAgICBpc0NvbG9yVGhlbWVMaWdodCA9ICFpc0RhcmtNb2RlO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuc2MtZGVmYXVsdCcpLnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZS1saWdodCcsIGlzQ29sb3JUaGVtZUxpZ2h0KTtcbn0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICBkaXNwYXRjaFZpZGVvSGVpZ2h0KCk7XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtc2csIHNlbmRlciwgc2VuZFJlc3BvbnNlKSA9PiB7XG4gIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlQ29sb3JUaGVtZSc6XG4gICAgICBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJy5zYy1kZWZhdWx0Jykuc2V0QXR0cmlidXRlKCdkYXRhLXRoZW1lLWxpZ2h0JywgbXNnLmlzQ29sb3JUaGVtZUxpZ2h0KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVVbmxvYWRWaWRlbyc6XG4gICAgICB1bmxvYWRWaWRlbygpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVNob3dWaWRlbyc6XG4gICAgICBkaXNwYXRjaFZpZGVvSGVpZ2h0KCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVmlkZW9VUkwnOlxuICAgICAgdXBkYXRlVmlkZW8obXNnKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxubGV0IHBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1wbGF5ZXInKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ211dGVkJywgJ3RydWUnKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ3BsYXlzaW5saW5lJywgJ3RydWUnKTtcbnBsYXllci5zZXRBdHRyaWJ1dGUoJ2NvbnRyb2xzJywgJzEnKTtcbnBsYXllci5hZGRFdmVudExpc3RlbmVyKCdjYW5wbGF5JywgKCkgPT4ge1xuICBkaXNwYXRjaFZpZGVvSGVpZ2h0KCk7XG59KTtcblxuZnVuY3Rpb24gZGlzcGF0Y2hWaWRlb0hlaWdodCgpIHtcbiAgY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsndGFiSWQnXSkudGhlbigodGFiSWQpID0+IHtcbiAgICBsZXQgbXNnID0ge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVWaWRlb0hlaWdodCcsXG4gICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0LFxuICAgIH07XG4gICAgY2hyb21lLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQudGFiSWQsIG1zZyk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVWaWRlbyhtZXNzYWdlKSB7XG4gIGNvbnN0IHZpZGVvVVJMID0gbWVzc2FnZS52aWRlb1VSTDtcbiAgcGxheWVyLnNyYyA9IHZpZGVvVVJMO1xuICBsZXQgdmlkZW9GaWxlTmFtZSA9IGNyZWF0ZUZpbGVuYW1lKG1lc3NhZ2UuZXh0ZW5zaW9uKTtcbiAgbGV0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhLnNjLWRvd25sb2FkLWJ1dHRvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgYnV0dG9uID0gYnV0dG9uc1tpXTtcbiAgICBidXR0b24uaHJlZiA9IHZpZGVvVVJMO1xuICAgIGJ1dHRvbi5kb3dubG9hZCA9IHZpZGVvRmlsZU5hbWU7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2VuZFRyYWNrRXZlbnRNZXNzYWdlKCdkb3dubG9hZCcsICdjbGljaycpO1xuICAgIH0pO1xuICB9XG4gIGxldCBmaWxlTmFtZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zYy12aWRlby1maWxlbmFtZSBhLnNjLWRvd25sb2FkLWJ1dHRvbicpO1xuICBmaWxlTmFtZUJ1dHRvbi50ZXh0Q29udGVudCA9IHZpZGVvRmlsZU5hbWU7XG59XG5cbmZ1bmN0aW9uIHVubG9hZFZpZGVvKCkge1xuICBwbGF5ZXIucGF1c2UoKTtcbiAgLy8gcGxheWVyLnJlbW92ZUF0dHJpYnV0ZSgnc3JjJyk7XG4gIC8vIHBsYXllci5sb2FkKCk7XG59XG4iXSwibmFtZXMiOlsic2VuZFRyYWNrRXZlbnRNZXNzYWdlIiwiY2F0ZWdvcnkiLCJhY3Rpb24iLCJsYWJlbCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNocm9tZSIsInJ1bnRpbWUiLCJzZW5kTWVzc2FnZSIsInR5cGUiLCJzZW5kVHJhY2tQYWdlTWVzc2FnZSIsInBhdGgiLCJ0aW1lQU1QTSIsImFkZExlYWRpbmdaZXJvIiwiY3JlYXRlRmlsZW5hbWUiLCJleHRlbnNpb24iLCJkYXRlIiwiRGF0ZSIsImFtcG1UaW1lIiwiZGF0ZURhdGEiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImFtcG0iLCJ0b1VwcGVyQ2FzZSIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZm9ybWF0QU1QTSIsInNwYWNlQmV0d2VlbiIsInN0clRpbWUiLCJ0b1VuaXhTdHJpbmciLCJ0b1VuaXhVVENTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsImdldFVUQ1NlY29uZHMiLCJhZGRIb3VycyIsInNldFRpbWUiLCJnZXRUaW1lIiwiYWRkRGF5cyIsImRheXMiLCJtb250aHMiLCJlbiIsImZyIiwibGFuZ3VhZ2UiLCJnZXRBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsImFnZSIsIm0iLCJ0cmVhdEFzVVRDIiwicmVzdWx0Iiwic2V0TWludXRlcyIsImdldFRpbWV6b25lT2Zmc2V0IiwibWludXRlc0JldHdlZW4iLCJzdGFydERhdGUiLCJlbmREYXRlIiwibWlsbGlzZWNvbmRzUGVyTWludXRlIiwiaG91cnNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVySG91ciIsImRheXNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyRGF5Iiwid2Vla3NCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyV2VlayIsIm1vbnRoc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJNb250aCIsInllYXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlclllYXIiLCJnZXRGYW1pbGlhclRpbWVCZXR3ZWVuIiwidGV4dCIsInllYXJzQmV0d2VlbkZsb29yIiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJtb250aHNCZXR3ZWVuRmxvb3IiLCJ3ZWVrc0JldHdlZW5GbG9vciIsImRheXNCZXR3ZWVuRmxvb3IiLCJob3Vyc0JldHdlZW5GbG9vciIsIm1pbnV0ZXNCZXR3ZWVuRmxvb3IiLCJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJnZXRSYW5kb21JbnQiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwicm91bmREZWNpbWFsVG9QbGFjZSIsInBsYWNlIiwicCIsInBvdyIsInJvdW5kIiwicm91bmQxIiwicm91bmQyIiwicm91bmQzIiwibG9vcEluZGV4IiwiaW5kZXgiLCJpc0JldHdlZW4iLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJjb25zdHJhaW4iLCJjcmVhdGVTdGVwc0JldHdlZW4iLCJiZWdpbiIsImVuZCIsInN0ZXBzIiwic3RlcHNCZXR3ZWVuIiwiaW5jcmVtZW50IiwicHVzaCIsImludGVycG9sYXRlIiwiYW1vdW50IiwibWFwIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImxlcnAiLCJub3JtIiwiZ2V0V2VpZ2h0ZWRBdmVyYWdlIiwiZGVzdCIsIm4iLCJmb3JtYXQiLCJrRGVsaW0iLCJtaW5MZW5ndGgiLCJmaWxsQ2hhciIsImlzTmFOIiwicmVtYWluZGVyIiwibnVtIiwibGVuIiwiYWRkQ2hhciIsInRvdGFsRGVsaW0iLCJ0b3RhbFJlbWFpbiIsIm51bVNwbGl0Iiwic3BsaXQiLCJzcGxpY2UiLCJzaGlmdCIsImpvaW4iLCJzdWJzdHIiLCJmb3JtYXRDdXJyZW5jeSIsImZvcmNlRGVjaW1hbHMiLCJjdXJyZW5jeSIsInRvRml4ZWQiLCJnZXRPcmRpbmFsU3VmZml4Iiwic3BlbGwiLCJFcnJvciIsIm9uZXNTcGVsbGluZ3MiLCJ0ZW5zU3BlbGxpbmdzIiwic3BlbGxpbmciLCJtaWxsaW9ucyIsInRob3VzYW5kcyIsImh1bmRyZWRzIiwidGVucyIsIm9uZXMiLCJjb21wb25lbnRUb0hleCIsImMiLCJoZXgiLCJyZ2JUb0hleCIsInJnYiIsInIiLCJnIiwiYiIsImhleFRvUmdiIiwiZXhlYyIsInBhcnNlSW50IiwiZGVnVG9SYWQiLCJkZWdyZWVzIiwiUEkiLCJyYWRUb0RlZyIsInJhZCIsInNtb290aHN0ZXAiLCJ4IiwiYSIsInQiLCJtaXgiLCJjbGFtcCIsIm1vZCIsIm1vZFdyYXAiLCJyYW5kb20xRCIsInNlZWQiLCJzaW4iLCJub2lzZTFEIiwiZiIsInUiLCJyYW5kb21SYW5nZSIsInJhbmRvbUludCIsIm1hcENsYW1wIiwic2luZVdhdmUiLCJhbmdsZSIsImZyZXF1ZW5jeSIsInRpbWUiLCJzcGVlZCIsImFtcGxpdHVkZSIsImNsYW1wVGltZSIsInN0YXJ0VGltZSIsImR1cmF0aW9uIiwiZWFzZU91dCIsInRhcmdldCIsImZyaWN0aW9uIiwic3ByaW5nIiwiZWxhc3RpY2l0eSIsInJlbW92ZU11bHRpcGxlUm90YXRpb25zIiwiY2lyY2xlIiwiaGV4Q29sb3JTdHJpbmdUb051bWJlciIsIk51bWJlciIsInJlcGxhY2UiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJjb2xvclRoZW1lIiwianNvbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzZXR0aW5ncyIsImNvbG9yVGhlbWVzIiwiaXNDb2xvclRoZW1lTGlnaHQiLCJkYXJrTW9kZU1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaXNEYXJrTW9kZSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoVmlkZW9IZWlnaHQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInVubG9hZFZpZGVvIiwidXBkYXRlVmlkZW8iLCJwbGF5ZXIiLCJ0aGVuIiwidGFiSWQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwibWVzc2FnZSIsInZpZGVvVVJMIiwic3JjIiwidmlkZW9GaWxlTmFtZSIsImJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwiaHJlZiIsImRvd25sb2FkIiwiZmlsZU5hbWVCdXR0b24iLCJ0ZXh0Q29udGVudCIsInBhdXNlIl0sInNvdXJjZVJvb3QiOiIifQ==