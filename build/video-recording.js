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
/* harmony export */   createFilename: () => (/* binding */ createFilename),
/* harmony export */   createFilenameOnly: () => (/* binding */ createFilenameOnly)
/* harmony export */ });
/* harmony import */ var _lib_tsunami_utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/tsunami/utils/date */ "./lib/tsunami/utils/date.js");
/* harmony import */ var _lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/tsunami/utils/number */ "./lib/tsunami/utils/number.js");


function createFilename(extension) {
  let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Scroll Capture';
  const name = createFilenameOnly(text);
  return `${name}.${extension}`;
}
function createFilenameOnly() {
  let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Scroll Capture';
  let date = new Date();
  let ampmTime = (0,_lib_tsunami_utils_date__WEBPACK_IMPORTED_MODULE_0__.timeAMPM)(date);
  let dateData = {
    year: date.getFullYear(),
    month: (0,_lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__.addLeadingZero)(date.getMonth() + 1),
    date: (0,_lib_tsunami_utils_number__WEBPACK_IMPORTED_MODULE_1__.addLeadingZero)(date.getDate())
  };
  ampmTime.ampm = ampmTime.ampm.toUpperCase();
  return `${text} ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}`;
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
  let videoFileName = message.fileName;
  const videoURL = message.videoURL;
  player.src = videoURL;
  player.download = videoFileName;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxNQUFNO01BQ3JDblAsc0VBQXFCLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQztJQUM1QyxDQUFDLENBQUM7RUFDSjtFQUNBLElBQUk0USxjQUFjLEdBQUc3QixRQUFRLENBQUNFLGFBQWEsQ0FBQyx5Q0FBeUMsQ0FBQztFQUN0RjJCLGNBQWMsQ0FBQ0MsV0FBVyxHQUFHVixhQUFhO0FBQzVDO0FBRUEsU0FBU1QsV0FBV0EsQ0FBQSxFQUFHO0VBQ3JCRSxNQUFNLENBQUNrQixLQUFLLENBQUMsQ0FBQztFQUNkO0VBQ0E7QUFDRixDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvR0FCcmlkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvdmlkZW8tcmVjb3JkaW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoY2F0ZWdvcnksIGFjdGlvbiwgbGFiZWwgPSAnJykge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6ICdzY3JvbGxDYXB0dXJlVHJhY2tFdmVudCcsIGNhdGVnb3J5LCBhY3Rpb24sIGxhYmVsIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VuZFRyYWNrUGFnZU1lc3NhZ2UocGF0aCkge1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IHR5cGU6ICdzY3JvbGxDYXB0dXJlVHJhY2tQYWdlJywgcGF0aCB9KTtcbn1cbiIsImltcG9ydCB7IHRpbWVBTVBNIH0gZnJvbSAnLi4vLi4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVybyB9IGZyb20gJy4uLy4uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWxlbmFtZShleHRlbnNpb24sIHRleHQgPSAnU2Nyb2xsIENhcHR1cmUnKSB7XG4gIGNvbnN0IG5hbWUgPSBjcmVhdGVGaWxlbmFtZU9ubHkodGV4dCk7XG4gIHJldHVybiBgJHtuYW1lfS4ke2V4dGVuc2lvbn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsZW5hbWVPbmx5KHRleHQgPSAnU2Nyb2xsIENhcHR1cmUnKSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IGFtcG1UaW1lID0gdGltZUFNUE0oZGF0ZSk7XG4gIGxldCBkYXRlRGF0YSA9IHtcbiAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGg6IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgIGRhdGU6IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgfTtcbiAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIGAke3RleHR9ICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfWA7XG59IiwiaW1wb3J0IHthZGRMZWFkaW5nWmVyb30gZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lQU1QTShkYXRlKSB7XG5cdGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0bGV0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRsZXQgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcblx0bGV0IHNlY29uZHMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG5cdGhvdXJzID0gaG91cnMgJSAxMjtcblx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuXHRyZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcywgYW1wbSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QU1QTShkYXRlLCBzcGFjZUJldHdlZW4gPSBcIlwiKSB7XG5cdGxldCBkYXRlRGF0YSA9IHRpbWVBTVBNKGRhdGUpO1xuXHRsZXQgc3RyVGltZSA9IGRhdGVEYXRhLmhvdXJzICsgJzonICsgZGF0ZURhdGEubWludXRlcyArIHNwYWNlQmV0d2VlbiArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4U3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhVVENTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENEYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0hvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdXJzKGRhdGUsIGhvdXJzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChob3VycyAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGxldCBtb250aHMgPSB7XG5cdGVuOltcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRmcjpbXCJKYW52aWVyXCIsIFwiRsOpdnJpZXJcIiwgXCJNYXJzXCIsIFwiQXZyaWxcIiwgXCJNYWlcIiwgXCJKdWluXCIsIFwiSnVpbGxldFwiLCBcIkFvw7t0XCIsIFwiU2VwdGVtYnJlXCIsIFwiT2N0b2JyZVwiLCBcIk5vdmVtYnJlXCIsIFwiRMOpY2VtYnJlXCJdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSwgbGFuZ3VhZ2UpIHtcblx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdGxhbmd1YWdlID0gXCJlblwiO1xuXHR9XG5cdGxldCBtb250aDtcblx0c3dpdGNoKGxhbmd1YWdlKSB7XG5cdFx0Y2FzZSBcImVuXCI6XG5cdFx0XHRtb250aCA9IG1vbnRoc1tsYW5ndWFnZV1bZGF0ZS5nZXRNb250aCgpXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShiaXJ0aERhdGUpIHtcblx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0bGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0bGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdGFnZS0tO1xuXHR9XG5cdHJldHVybiBhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVhdEFzVVRDKGRhdGUpIHtcblx0bGV0IHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xuXHRyZXN1bHQuc2V0TWludXRlcyhyZXN1bHQuZ2V0TWludXRlcygpIC0gcmVzdWx0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNaW51dGUgPSA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJIb3VyID0gNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJIb3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyV2VlayA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyV2Vlaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNb250aCA9IDM2NSAvIDEyICAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlclllYXIgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyWWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhbWlsaWFyVGltZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCB0ZXh0ID0gXCJcIjtcblx0bGV0IHllYXJzQmV0d2VlbiA9IHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRpZiAoeWVhcnNCZXR3ZWVuID49IDEpIHtcblx0XHRsZXQgeWVhcnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHllYXJzQmV0d2Vlbik7XG5cdFx0aWYgKHllYXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFycyBhZ29cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFyIGFnb1wiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRsZXQgbW9udGhzQmV0d2VlbiA9IG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRpZiAobW9udGhzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRsZXQgbW9udGhzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtb250aHNCZXR3ZWVuKTtcblx0XHRcdGlmIChtb250aHNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRocyBhZ29cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRoIGFnb1wiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgd2Vla3NCZXR3ZWVuID0gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRpZiAod2Vla3NCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0bGV0IHdlZWtzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih3ZWVrc0JldHdlZW4pO1xuXHRcdFx0XHRpZiAod2Vla3NCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrcyBhZ29cIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWsgYWdvXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXlzQmV0d2VlbiA9IGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdGlmIChkYXlzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGRheXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRpZiAoZGF5c0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXlzIGFnb1wiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5IGFnb1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuID0gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGhvdXJzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91cnMgYWdvXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXIgYWdvXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbiA9IG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW4gPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtaW51dGVzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGUgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBcIkp1c3Qgbm93XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0O1xufSIsIi8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiAxKSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIG9kZC5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG5vdCBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgb2RkOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNPZGQoNykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzT2RkKDEyKSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKHZhbHVlKSB7XG4gIHJldHVybiAhaXNFdmVuKHZhbHVlKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXIuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBjb250YWlucyBubyBkZWNpbWFsIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEuMjM0NSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICUgMSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IDEgfHwgdmFsdWUgPT09IDIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0V2ZW4odmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG4gIGZvciAobGV0IGkgPSAzOyBpIDw9IHM7IGkrKykge1xuICAgIGlmICh2YWx1ZSAlIGkgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEpIHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwKSAvIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDEodmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQyKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMyh2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMyk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbGVuZ3RoICsgKGluZGV4ICUgbGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5kZXggJSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGluY2x1ZGVkIHdpdGhpbiBhIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBmYWxscyB3aXRoaW4gdGhlIHJhbmdlOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEB1c2FnZU5vdGUgVGhlIHJhbmdlIHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzQmV0d2VlbigzLCAwLCA1KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDcsIDAsIDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gIShcbiAgICB2YWx1ZSA8IE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB8fFxuICAgIHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdmFsdWUgZmFsbHMgd2l0aGluIGEgcmFuZ2U7IGlmIG5vdCBpdCBpcyBzbmFwcGVkIHRvIHRoZSBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgZWl0aGVyIHRoZSBudW1iZXIgYXMgcGFzc2VkLCBvciBpdHMgdmFsdWUgb25jZSBzbmFwcGVkIHRvIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG4gQHVzYWdlTm90ZSBUaGUgY29uc3RyYWludCB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgM1xuIGNvbnNvbGUubG9nKGNvbnN0cmFpbig3LCAwLCA1KSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RyYWluKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gTWF0aC5taW4oXG4gICAgTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSksXG4gICAgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIENyZWF0ZXMgZXZlbmx5IHNwYWNlZCBudW1lcmljYWwgaW5jcmVtZW50cyBiZXR3ZWVuIHR3byBudW1iZXJzLlxuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAcGFyYW0gc3RlcHM6IFRoZSBudW1iZXIgb2YgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgYW4gQXJyYXkgY29tcHJpc2VkIG9mIHRoZSBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMCwgNSwgNCkpOyAvLyBUcmFjZXMgMSwyLDMsNFxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigxLCAzLCAzKSk7IC8vIFRyYWNlcyAxLjUsMiwyLjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGVwc0JldHdlZW4oYmVnaW4sIGVuZCwgc3RlcHMpIHtcbiAgc3RlcHMrKztcblxuICBsZXQgaSA9IDA7XG4gIGNvbnN0IHN0ZXBzQmV0d2VlbiA9IFtdO1xuICBjb25zdCBpbmNyZW1lbnQgPSAoZW5kIC0gYmVnaW4pIC8gc3RlcHM7XG5cbiAgd2hpbGUgKCsraSA8IHN0ZXBzKSB7XG4gICAgc3RlcHNCZXR3ZWVuLnB1c2goaSAqIGluY3JlbWVudCArIGJlZ2luKTtcbiAgfVxuXG4gIHJldHVybiBzdGVwc0JldHdlZW47XG59XG5cbi8qKlxuIERldGVybWluZXMgYSB2YWx1ZSBiZXR3ZWVuIHR3byBzcGVjaWZpZWQgdmFsdWVzLlxuXG4gQHBhcmFtIGFtb3VudDogVGhlIGxldmVsIG9mIGludGVycG9sYXRpb24gYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy4gSWYgPGNvZGU+MDwvY29kZT4sIDxjb2RlPmJlZ2luPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZDsgaWYgPGNvZGU+MTwvY29kZT4sIDxjb2RlPmVuZDwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGludGVycG9sYXRlKDAuNSwgMCwgMTApKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZShhbW91bnQsIGJlZ2luLCBlbmQpIHtcbiAgcmV0dXJuIGJlZ2luICsgKGVuZCAtIGJlZ2luKSAqIGFtb3VudDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHBlcmNlbnRhZ2Ugb2YgYSB2YWx1ZSBpbiBhIGdpdmVuIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgdmFsdWUgdG8gYmUgY29udmVydGVkLlxuIEBwYXJhbSBtaW5pbXVtOiBUaGUgbG93ZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBtYXhpbXVtOiBUaGUgdXBwZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobm9ybWFsaXplKDgsIDQsIDIwKS5kZWNpbWFsUGVyY2VudGFnZSk7IC8vIFRyYWNlcyAwLjI1XG4gPC9jb2RlPlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG4vLyAgIHJldHVybiBuZXcgUGVyY2VudCgodmFsdWUgLSBtaW5pbXVtKSAvIChtYXhpbXVtIC0gbWluaW11bSkpO1xuLy8gfVxuXG4vKipcbiBNYXBzIGEgdmFsdWUgZnJvbSBvbmUgY29vcmRpbmF0ZSBzcGFjZSB0byBhbm90aGVyLlxuXG4gQHBhcmFtIHZhbHVlOiBWYWx1ZSBmcm9tIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlIHRvIG1hcCB0byB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjE6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgxOiBFbmRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjI6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MjogRW5kaW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG1hcCgwLjc1LCAwLCAxLCAwLCAxMDApKTsgLy8gVHJhY2VzIDc1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbi8vIFx0cmV0dXJuIG1pbjIgKyAobWF4MiAtIG1pbjIpICogKCh2YWx1ZSAtIG1pbjEpIC8gKG1heDEgLSBtaW4xKSk7XG4vLyB9XG5cbi8qKlxuIExvdyBwYXNzIGZpbHRlciBhbG9ncml0aG0gZm9yIGVhc2luZyBhIHZhbHVlIHRvd2FyZCBhIGRlc3RpbmF0aW9uIHZhbHVlLiBXb3JrcyBiZXN0IGZvciB0d2VlbmluZyB2YWx1ZXMgd2hlbiBubyBkZWZpbml0ZSB0aW1lIGR1cmF0aW9uIGV4aXN0cyBhbmQgd2hlbiB0aGUgZGVzdGluYXRpb24gdmFsdWUgY2hhbmdlcy5cblxuIElmIDxjb2RlPigwLjUgPCBuIDwgMSk8L2NvZGU+LCB0aGVuIHRoZSByZXN1bHRpbmcgdmFsdWVzIHdpbGwgb3ZlcnNob290IChwaW5nLXBvbmcpIHVudGlsIHRoZXkgcmVhY2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlLiBXaGVuIDxjb2RlPm48L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiAxLCBhcyBpdHMgdmFsdWUgaW5jcmVhc2VzLCB0aGUgdGltZSBpdCB0YWtlcyB0byByZWFjaCB0aGUgZGVzdGluYXRpb24gYWxzbyBpbmNyZWFzZXMuIEEgcGxlYXNpbmcgdmFsdWUgZm9yIDxjb2RlPm48L2NvZGU+IGlzIDUuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlLlxuIEBwYXJhbSBkZXN0OiBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gQHBhcmFtIG46IFRoZSBzbG93ZG93biBmYWN0b3IuXG4gQHJldHVybiBUaGUgd2VpZ2h0ZWQgYXZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodGVkQXZlcmFnZSh2YWx1ZSwgZGVzdCwgbikge1xuICByZXR1cm4gdmFsdWUgKyAoZGVzdCAtIHZhbHVlKSAvIG47XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiXCI8L2NvZGU+LlxuIEBwYXJhbSBtaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgbnVtYmVyOyBkZWZhdWx0cyB0byA8Y29kZT4wIDwvY29kZT4uXG4gQHBhcmFtIGZpbGxDaGFyOiBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdXNlZCB0byBtYWtlIHRoZSBudW1iZXIgdGhlIG1pbmltdW0gbGVuZ3RoOyBkZWZhdWx0cyB0byA8Y29kZT5cIjBcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0KDEyMzQ1NjcsIFwiLFwiLCA4KSk7IC8vIFRyYWNlcyAwMSwyMzQsNTY3XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBrRGVsaW0sIG1pbkxlbmd0aCwgZmlsbENoYXIpIHtcbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSBcIixcIjtcbiAgfVxuICBpZiAoaXNOYU4obWluTGVuZ3RoKSkge1xuICAgIG1pbkxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKCFmaWxsQ2hhcikge1xuICAgIGZpbGxDaGFyID0gXCIwXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcbiAgY29uc3QgbGVuID0gbnVtLmxlbmd0aDtcblxuICBpZiAobWluTGVuZ3RoICE9PSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuICAgIG1pbkxlbmd0aCAtPSBsZW47XG5cbiAgICBjb25zdCBhZGRDaGFyID0gZmlsbENoYXIgfHwgXCIwXCI7XG5cbiAgICB3aGlsZSAobWluTGVuZ3RoLS0pIHtcbiAgICAgIG51bSA9IGFkZENoYXIgKyBudW07XG4gICAgfVxuICB9XG5cbiAgaWYgKGtEZWxpbSAhPT0gbnVsbCAmJiBudW0ubGVuZ3RoID4gMykge1xuICAgIGNvbnN0IHRvdGFsRGVsaW0gPSBNYXRoLmZsb29yKG51bS5sZW5ndGggLyAzKTtcbiAgICBjb25zdCB0b3RhbFJlbWFpbiA9IG51bS5sZW5ndGggJSAzO1xuICAgIGNvbnN0IG51bVNwbGl0ID0gbnVtLnNwbGl0KFwiXCIpO1xuICAgIGxldCBpID0gLTE7XG5cbiAgICB3aGlsZSAoKytpIDwgdG90YWxEZWxpbSkge1xuICAgICAgbnVtU3BsaXQuc3BsaWNlKHRvdGFsUmVtYWluICsgNCAqIGksIDAsIGtEZWxpbSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdGFsUmVtYWluID09PSAwKSB7XG4gICAgICBudW1TcGxpdC5zaGlmdCgpO1xuICAgIH1cblxuICAgIG51bSA9IG51bVNwbGl0LmpvaW4oXCJcIik7XG4gIH1cblxuICBpZiAocmVtYWluZGVyICE9PSAwKSB7XG4gICAgbnVtICs9IHJlbWFpbmRlci50b1N0cmluZygpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuICBpZiAoZm9yY2VEZWNpbWFscyA9PT0gbnVsbCkge1xuICAgIGZvcmNlRGVjaW1hbHMgPSB0cnVlO1xuICB9XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gXCIsXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCB8fCBmb3JjZURlY2ltYWxzKSB7XG4gICAgY3VycmVuY3kgKz0gcmVtYWluZGVyLnRvRml4ZWQoMikuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbmN5O1xufVxuXG4vKipcbiBGaW5kcyB0aGUgZW5nbGlzaCBvcmRpbmFsIHN1ZmZpeCBmb3IgdGhlIG51bWJlciBnaXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGZpbmQgdGhlIG9yZGluYWwgc3VmZml4IG9mLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgc3VmZml4IGZvciB0aGUgbnVtYmVyLCAyIGNoYXJhY3RlcnMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZygzMiArIGdldE9yZGluYWxTdWZmaXgoMzIpKTsgLy8gVHJhY2VzIDMybmRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsU3VmZml4KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSAyMCkge1xuICAgIHJldHVybiBcInRoXCI7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUgJSAxMCkge1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBcInJkXCI7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gXCJzdFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJ0aFwiO1xuICB9XG59XG5cbi8qKlxuIEFkZHMgYSBsZWFkaW5nIHplcm8gZm9yIG51bWJlcnMgbGVzcyB0aGFuIHRlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGFkZCBsZWFkaW5nIHplcm8uXG4gQHJldHVybiBOdW1iZXIgYXMgYSBTdHJpbmc7IGlmIHRoZSBudW1iZXIgd2FzIGxlc3MgdGhhbiB0ZW4gdGhlIG51bWJlciB3aWxsIGhhdmUgYSBsZWFkaW5nIHplcm8uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybyg3KSk7IC8vIFRyYWNlcyAwN1xuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDExKSk7IC8vIFRyYWNlcyAxMVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDEwID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuIFNwZWxscyB0aGUgcHJvdmlkZWQgbnVtYmVyLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gc3BlbGwuIE5lZWRzIHRvIGJlIGxlc3MgdGhhbiA5OTk5OTk5OTkuXG4gQHJldHVybiBUaGUgbnVtYmVyIHNwZWxsZWQgb3V0IGFzIGEgU3RyaW5nLlxuIEB0aHJvd3MgPGNvZGU+RXJyb3I8L2NvZGU+IGlmIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gOTk5OTk5OTk5LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coc3BlbGwoMCkpOyAvLyBUcmFjZXMgWmVyb1xuIGNvbnNvbGUubG9nKHNwZWxsKDIzKSk7IC8vIFRyYWNlcyBUd2VudHktVGhyZWVcbiBjb25zb2xlLmxvZyhzcGVsbCgyMDA1Njc4KSk7IC8vIFRyYWNlcyBUd28gTWlsbGlvbiwgRml2ZSBUaG91c2FuZCwgU2l4IEh1bmRyZWQgU2V2ZW50eS1FaWdodFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwZWxsKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDk5OTk5OTk5OSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIHRvbyBsYXJnZSBmb3IgdGhpcyBtZXRob2QuXCIpO1xuICB9XG5cbiAgY29uc3Qgb25lc1NwZWxsaW5ncyA9IFtcbiAgICBcIlwiLFxuICAgIFwiT25lXCIsXG4gICAgXCJUd29cIixcbiAgICBcIlRocmVlXCIsXG4gICAgXCJGb3VyXCIsXG4gICAgXCJGaXZlXCIsXG4gICAgXCJTaXhcIixcbiAgICBcIlNldmVuXCIsXG4gICAgXCJFaWdodFwiLFxuICAgIFwiTmluZVwiLFxuICAgIFwiVGVuXCIsXG4gICAgXCJFbGV2ZW5cIixcbiAgICBcIlR3ZWx2ZVwiLFxuICAgIFwiVGhpcnRlZW5cIixcbiAgICBcIkZvdXJ0ZWVuXCIsXG4gICAgXCJGaWZ0ZWVuXCIsXG4gICAgXCJTaXh0ZWVuXCIsXG4gICAgXCJTZXZlbnRlZW5cIixcbiAgICBcIkVpZ2h0ZWVuXCIsXG4gICAgXCJOaW5ldGVlblwiLFxuICBdO1xuICBjb25zdCB0ZW5zU3BlbGxpbmdzID0gW1xuICAgIFwiXCIsXG4gICAgXCJcIixcbiAgICBcIlR3ZW50eVwiLFxuICAgIFwiVGhpcnR5XCIsXG4gICAgXCJGb3J0eVwiLFxuICAgIFwiRmlmdHlcIixcbiAgICBcIlNpeHR5XCIsXG4gICAgXCJTZXZlbnR5XCIsXG4gICAgXCJFaWdodHlcIixcbiAgICBcIk5pbmV0eVwiLFxuICBdO1xuICBsZXQgc3BlbGxpbmcgPSBcIlwiO1xuXG4gIGNvbnN0IG1pbGxpb25zID0gdmFsdWUgLyAxMDAwMDAwO1xuICB2YWx1ZSAlPSAxMDAwMDAwO1xuXG4gIGNvbnN0IHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcbiAgdmFsdWUgJT0gMTAwMDtcblxuICBjb25zdCBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuICB2YWx1ZSAlPSAxMDA7XG5cbiAgY29uc3QgdGVucyA9IHZhbHVlIC8gMTA7XG4gIHZhbHVlICU9IDEwO1xuXG4gIGNvbnN0IG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG4gIGlmIChtaWxsaW9ucyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwobWlsbGlvbnMpICsgXCIgTWlsbGlvblwiO1xuICB9XG5cbiAgaWYgKHRob3VzYW5kcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwodGhvdXNhbmRzKSArIFwiIFRob3VzYW5kXCI7XG4gIH1cblxuICBpZiAoaHVuZHJlZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKGh1bmRyZWRzKSArIFwiIEh1bmRyZWRcIjtcbiAgfVxuXG4gIGlmICh0ZW5zICE9PSAwIHx8IG9uZXMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIgXCI7XG5cbiAgICBpZiAodGVucyA8IDIpIHtcbiAgICAgIHNwZWxsaW5nICs9IG9uZXNTcGVsbGluZ3NbdGVucyAqIDEwICsgb25lc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cbiAgICAgIGlmIChvbmVzICE9PSAwKSB7XG4gICAgICAgIHNwZWxsaW5nICs9IFwiLVwiICsgb25lc1NwZWxsaW5nc1tvbmVzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3BlbGxpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiWmVyb1wiO1xuICB9XG5cbiAgcmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuICByZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0XG4gICAgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFwicjpcIiArIHRoaXMuciArIFwiLGc6XCIgKyB0aGlzLmcgKyBcIixiOlwiICsgdGhpcy5iO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWQpIHtcbiAgcmV0dXJuIChyYWQgKiAxODApIC8gTWF0aC5QSTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aHN0ZXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpKTtcbiAgcmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgcmV0dXJuIGEgKyB0ICogKGIgLSBhKTtcbiAgLy8gcmV0dXJuIGEoMS10KSArIGJ0XG4gIC8vcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXgoYSwgYiwgdCkge1xuICByZXR1cm4gbGVycChhLCBiLCB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm0odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL2EgbW9kdWxvIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBuZWdhdGl2ZXMgbnVtYmVycyAnY29ycmVjdGx5J1xuZXhwb3J0IGZ1bmN0aW9uIG1vZFdyYXAobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vcmFuZG9tIHdpdGggc2VlZCwgcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20xRChzZWVkKSB7XG4gIHJldHVybiBtb2RXcmFwKE1hdGguc2luKHNlZWQpICogNDM3NTguNTQ1MywgMSk7XG59XG5cbi8vcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiBub2lzZTFEKHgpIHtcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoeCk7XG4gIGNvbnN0IGYgPSBtb2RXcmFwKHgsIDEpO1xuICBjb25zdCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBsZXJwKHUsIHJhbmRvbTFEKGkpLCByYW5kb20xRChpICsgMS4wKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQ2xhbXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGNsYW1wKGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpLCBtaW4yLCBtYXgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmVXYXZlKFxuICBhbmdsZSA9IDAsXG4gIGZyZXF1ZW5jeSA9IE1hdGguUEksXG4gIHRpbWUgPSAwLFxuICBzcGVlZCA9IDEsXG4gIGFtcGxpdHVkZSA9IDFcbikge1xuICByZXR1cm4gTWF0aC5zaW4oYW5nbGUgKiBmcmVxdWVuY3kgKyB0aW1lICogc3BlZWQpICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBUaW1lKHRpbWUsIHN0YXJ0VGltZSwgZHVyYXRpb24pIHtcbiAgcmV0dXJuIGNsYW1wKHRpbWUgLSBzdGFydFRpbWUsIDAuMCwgZHVyYXRpb24pIC8gZHVyYXRpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBlYXNlIHZhbHVlXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YWx1ZSArPSBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uKTtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uID0gMC4xKSB7XG4gIHJldHVybiAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcGFyYW0gc3BlZWQ6IFRoZSBjdXJyZW50IHNwZWVkXG4gQHBhcmFtIGVsYXN0aWNpdHk6IFRoZSBlbGFzdGljaXR5IGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgbmV3IHNwZWVkIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gc3BlZWQgPSBzcHJpbmcodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24sIHNwZWVkLCBlbGFzdGljaXR5KTtcbiB2YWx1ZSArPSBzcGVlZDtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJpbmcoXG4gIHZhbHVlLFxuICB0YXJnZXQgPSAwLFxuICBmcmljdGlvbiA9IDAuMSxcbiAgc3BlZWQgPSAwLFxuICBlbGFzdGljaXR5ID0gMFxuKSB7XG4gIHJldHVybiBzcGVlZCAqIGVsYXN0aWNpdHkgKyAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyhhbmdsZSkge1xuICBjb25zdCBjaXJjbGUgPSBNYXRoLlBJICogMjtcbiAgd2hpbGUgKGFuZ2xlID4gY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlIC09IGNpcmNsZTtcbiAgfVxuICB3aGlsZSAoYW5nbGUgPCAtY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlICs9IGNpcmNsZTtcbiAgfVxuICByZXR1cm4gYW5nbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhDb2xvclN0cmluZ1RvTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHNlbmRUcmFja0V2ZW50TWVzc2FnZSB9IGZyb20gJy4vbW9kZWwvR0FCcmlkZ2UnO1xuaW1wb3J0IHsgY3JlYXRlRmlsZW5hbWUgfSBmcm9tICcuL21vZGVsL3V0aWxzJztcblxuY2hyb21lLnN0b3JhZ2UubG9jYWwuZ2V0KFsnanNvbiddLCAocmVzdWx0KSA9PiB7XG4gIGxldCBjb2xvclRoZW1lID0gJ0RhcmsnO1xuICBpZiAocmVzdWx0KSB7XG4gICAgaWYgKHJlc3VsdC5qc29uKSB7XG4gICAgICBsZXQgZGF0YSA9IEpTT04ucGFyc2UocmVzdWx0Lmpzb24pO1xuICAgICAgaWYgKGRhdGEuc2V0dGluZ3MpIHtcbiAgICAgICAgY29sb3JUaGVtZSA9IGRhdGEuc2V0dGluZ3MuY29sb3JUaGVtZXM7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGxldCBpc0NvbG9yVGhlbWVMaWdodDtcbiAgc3dpdGNoIChjb2xvclRoZW1lKSB7XG4gICAgY2FzZSAnRGFyayc6XG4gICAgY2FzZSAnTGlnaHQnOlxuICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSBjb2xvclRoZW1lID09ICdMaWdodCc7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgbGV0IGRhcmtNb2RlTWF0Y2hNZWRpYSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJyk7XG4gICAgICBsZXQgaXNEYXJrTW9kZSA9IGRhcmtNb2RlTWF0Y2hNZWRpYS5tYXRjaGVzO1xuICAgICAgaXNDb2xvclRoZW1lTGlnaHQgPSAhaXNEYXJrTW9kZTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLnNjLWRlZmF1bHQnKS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGhlbWUtbGlnaHQnLCBpc0NvbG9yVGhlbWVMaWdodCk7XG59KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgZGlzcGF0Y2hWaWRlb0hlaWdodCgpO1xufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobXNnLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZUNvbG9yVGhlbWUnOlxuICAgICAgZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuc2MtZGVmYXVsdCcpLnNldEF0dHJpYnV0ZSgnZGF0YS10aGVtZS1saWdodCcsIG1zZy5pc0NvbG9yVGhlbWVMaWdodCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzY3JvbGxDYXB0dXJlVW5sb2FkVmlkZW8nOlxuICAgICAgdW5sb2FkVmlkZW8oKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTaG93VmlkZW8nOlxuICAgICAgZGlzcGF0Y2hWaWRlb0hlaWdodCgpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMJzpcbiAgICAgIHVwZGF0ZVZpZGVvKG1zZyk7XG4gICAgICBicmVhaztcbiAgfVxufSk7XG5cbmxldCBwbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2MtdmlkZW8tcGxheWVyJyk7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKCdtdXRlZCcsICd0cnVlJyk7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKCdhdXRvcGxheScsICd0cnVlJyk7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKCdwbGF5c2lubGluZScsICd0cnVlJyk7XG5wbGF5ZXIuc2V0QXR0cmlidXRlKCdjb250cm9scycsICcxJyk7XG5wbGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2FucGxheScsICgpID0+IHtcbiAgZGlzcGF0Y2hWaWRlb0hlaWdodCgpO1xufSk7XG5cbmZ1bmN0aW9uIGRpc3BhdGNoVmlkZW9IZWlnaHQoKSB7XG4gIGNocm9tZS5zdG9yYWdlLmxvY2FsLmdldChbJ3RhYklkJ10pLnRoZW4oKHRhYklkKSA9PiB7XG4gICAgbGV0IG1zZyA9IHtcbiAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlVmlkZW9IZWlnaHQnLFxuICAgICAgaGVpZ2h0OiBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCxcbiAgICB9O1xuICAgIGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYklkLnRhYklkLCBtc2cpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlVmlkZW8obWVzc2FnZSkge1xuICBsZXQgdmlkZW9GaWxlTmFtZSA9IG1lc3NhZ2UuZmlsZU5hbWU7XG4gIGNvbnN0IHZpZGVvVVJMID0gbWVzc2FnZS52aWRlb1VSTDtcbiAgcGxheWVyLnNyYyA9IHZpZGVvVVJMO1xuICBwbGF5ZXIuZG93bmxvYWQgPSB2aWRlb0ZpbGVOYW1lO1xuICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Euc2MtZG93bmxvYWQtYnV0dG9uJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBidXR0b24gPSBidXR0b25zW2ldO1xuICAgIGJ1dHRvbi5ocmVmID0gdmlkZW9VUkw7XG4gICAgYnV0dG9uLmRvd25sb2FkID0gdmlkZW9GaWxlTmFtZTtcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzZW5kVHJhY2tFdmVudE1lc3NhZ2UoJ2Rvd25sb2FkJywgJ2NsaWNrJyk7XG4gICAgfSk7XG4gIH1cbiAgbGV0IGZpbGVOYW1lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjLXZpZGVvLWZpbGVuYW1lIGEuc2MtZG93bmxvYWQtYnV0dG9uJyk7XG4gIGZpbGVOYW1lQnV0dG9uLnRleHRDb250ZW50ID0gdmlkZW9GaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gdW5sb2FkVmlkZW8oKSB7XG4gIHBsYXllci5wYXVzZSgpO1xuICAvLyBwbGF5ZXIucmVtb3ZlQXR0cmlidXRlKCdzcmMnKTtcbiAgLy8gcGxheWVyLmxvYWQoKTtcbn1cbiJdLCJuYW1lcyI6WyJzZW5kVHJhY2tFdmVudE1lc3NhZ2UiLCJjYXRlZ29yeSIsImFjdGlvbiIsImxhYmVsIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY2hyb21lIiwicnVudGltZSIsInNlbmRNZXNzYWdlIiwidHlwZSIsInNlbmRUcmFja1BhZ2VNZXNzYWdlIiwicGF0aCIsInRpbWVBTVBNIiwiYWRkTGVhZGluZ1plcm8iLCJjcmVhdGVGaWxlbmFtZSIsImV4dGVuc2lvbiIsInRleHQiLCJuYW1lIiwiY3JlYXRlRmlsZW5hbWVPbmx5IiwiZGF0ZSIsIkRhdGUiLCJhbXBtVGltZSIsImRhdGVEYXRhIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImdldERhdGUiLCJhbXBtIiwidG9VcHBlckNhc2UiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdEFNUE0iLCJzcGFjZUJldHdlZW4iLCJzdHJUaW1lIiwidG9Vbml4U3RyaW5nIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwiZ2V0QWdlIiwiYmlydGhEYXRlIiwidG9kYXkiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInJlc3VsdCIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInllYXJzQmV0d2VlbkZsb29yIiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJtb250aHNCZXR3ZWVuRmxvb3IiLCJ3ZWVrc0JldHdlZW5GbG9vciIsImRheXNCZXR3ZWVuRmxvb3IiLCJob3Vyc0JldHdlZW5GbG9vciIsIm1pbnV0ZXNCZXR3ZWVuRmxvb3IiLCJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJnZXRSYW5kb21JbnQiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwicm91bmREZWNpbWFsVG9QbGFjZSIsInBsYWNlIiwicCIsInBvdyIsInJvdW5kIiwicm91bmQxIiwicm91bmQyIiwicm91bmQzIiwibG9vcEluZGV4IiwiaW5kZXgiLCJpc0JldHdlZW4iLCJmaXJzdFZhbHVlIiwic2Vjb25kVmFsdWUiLCJjb25zdHJhaW4iLCJjcmVhdGVTdGVwc0JldHdlZW4iLCJiZWdpbiIsImVuZCIsInN0ZXBzIiwic3RlcHNCZXR3ZWVuIiwiaW5jcmVtZW50IiwicHVzaCIsImludGVycG9sYXRlIiwiYW1vdW50IiwibWFwIiwibWluMSIsIm1heDEiLCJtaW4yIiwibWF4MiIsImxlcnAiLCJub3JtIiwiZ2V0V2VpZ2h0ZWRBdmVyYWdlIiwiZGVzdCIsIm4iLCJmb3JtYXQiLCJrRGVsaW0iLCJtaW5MZW5ndGgiLCJmaWxsQ2hhciIsImlzTmFOIiwicmVtYWluZGVyIiwibnVtIiwibGVuIiwiYWRkQ2hhciIsInRvdGFsRGVsaW0iLCJ0b3RhbFJlbWFpbiIsIm51bVNwbGl0Iiwic3BsaXQiLCJzcGxpY2UiLCJzaGlmdCIsImpvaW4iLCJzdWJzdHIiLCJmb3JtYXRDdXJyZW5jeSIsImZvcmNlRGVjaW1hbHMiLCJjdXJyZW5jeSIsInRvRml4ZWQiLCJnZXRPcmRpbmFsU3VmZml4Iiwic3BlbGwiLCJFcnJvciIsIm9uZXNTcGVsbGluZ3MiLCJ0ZW5zU3BlbGxpbmdzIiwic3BlbGxpbmciLCJtaWxsaW9ucyIsInRob3VzYW5kcyIsImh1bmRyZWRzIiwidGVucyIsIm9uZXMiLCJjb21wb25lbnRUb0hleCIsImMiLCJoZXgiLCJyZ2JUb0hleCIsInJnYiIsInIiLCJnIiwiYiIsImhleFRvUmdiIiwiZXhlYyIsInBhcnNlSW50IiwiZGVnVG9SYWQiLCJkZWdyZWVzIiwiUEkiLCJyYWRUb0RlZyIsInJhZCIsInNtb290aHN0ZXAiLCJ4IiwiYSIsInQiLCJtaXgiLCJjbGFtcCIsIm1vZCIsIm1vZFdyYXAiLCJyYW5kb20xRCIsInNlZWQiLCJzaW4iLCJub2lzZTFEIiwiZiIsInUiLCJyYW5kb21SYW5nZSIsInJhbmRvbUludCIsIm1hcENsYW1wIiwic2luZVdhdmUiLCJhbmdsZSIsImZyZXF1ZW5jeSIsInRpbWUiLCJzcGVlZCIsImFtcGxpdHVkZSIsImNsYW1wVGltZSIsInN0YXJ0VGltZSIsImR1cmF0aW9uIiwiZWFzZU91dCIsInRhcmdldCIsImZyaWN0aW9uIiwic3ByaW5nIiwiZWxhc3RpY2l0eSIsInJlbW92ZU11bHRpcGxlUm90YXRpb25zIiwiY2lyY2xlIiwiaGV4Q29sb3JTdHJpbmdUb051bWJlciIsIk51bWJlciIsInJlcGxhY2UiLCJzdG9yYWdlIiwibG9jYWwiLCJnZXQiLCJjb2xvclRoZW1lIiwianNvbiIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJzZXR0aW5ncyIsImNvbG9yVGhlbWVzIiwiaXNDb2xvclRoZW1lTGlnaHQiLCJkYXJrTW9kZU1hdGNoTWVkaWEiLCJ3aW5kb3ciLCJtYXRjaE1lZGlhIiwiaXNEYXJrTW9kZSIsIm1hdGNoZXMiLCJkb2N1bWVudCIsImJvZHkiLCJxdWVyeVNlbGVjdG9yIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc3BhdGNoVmlkZW9IZWlnaHQiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1zZyIsInNlbmRlciIsInNlbmRSZXNwb25zZSIsInVubG9hZFZpZGVvIiwidXBkYXRlVmlkZW8iLCJwbGF5ZXIiLCJ0aGVuIiwidGFiSWQiLCJoZWlnaHQiLCJzY3JvbGxIZWlnaHQiLCJ0YWJzIiwibWVzc2FnZSIsInZpZGVvRmlsZU5hbWUiLCJmaWxlTmFtZSIsInZpZGVvVVJMIiwic3JjIiwiZG93bmxvYWQiLCJidXR0b25zIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsImhyZWYiLCJmaWxlTmFtZUJ1dHRvbiIsInRleHRDb250ZW50IiwicGF1c2UiXSwic291cmNlUm9vdCI6IiJ9