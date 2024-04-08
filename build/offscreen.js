/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
  let text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'ScrollCapture';
  const name = createFilenameOnly(text);
  return `${name}.${extension}`;
}
function createFilenameOnly() {
  let text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'ScrollCapture';
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
/* harmony export */   decimalToPlace: () => (/* binding */ decimalToPlace),
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
function decimalToPlace(value) {
  let place = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  let method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const p = Math.pow(10, place);
  if (!method) method = Math.round;
  return method(value * p) / p;
}
function round1(value) {
  return decimalToPlace(value, 1);
}
function round2(value) {
  return decimalToPlace(value, 2);
}
function round3(value) {
  return decimalToPlace(value, 3);
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
    kDelim = ',';
  }
  if (isNaN(minLength)) {
    minLength = 0;
  }
  if (!fillChar) {
    fillChar = '0';
  }
  const remainder = value % 1;
  let num = Math.floor(value).toString();
  const len = num.length;
  if (minLength !== 0 && minLength > len) {
    minLength -= len;
    const addChar = fillChar || '0';
    while (minLength--) {
      num = addChar + num;
    }
  }
  if (kDelim !== null && num.length > 3) {
    const totalDelim = Math.floor(num.length / 3);
    const totalRemain = num.length % 3;
    const numSplit = num.split('');
    let i = -1;
    while (++i < totalDelim) {
      numSplit.splice(totalRemain + 4 * i, 0, kDelim);
    }
    if (totalRemain === 0) {
      numSplit.shift();
    }
    num = numSplit.join('');
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
    kDelim = ',';
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
    return 'th';
  }
  if (value === 0) {
    return '';
  }
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
    throw new Error('Value too large for this method.');
  }
  const onesSpellings = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  const tensSpellings = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  let spelling = '';
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
    spelling += spelling.length === 0 ? '' : ', ';
    spelling += spell(millions) + ' Million';
  }
  if (thousands !== 0) {
    spelling += spelling.length === 0 ? '' : ', ';
    spelling += spell(thousands) + ' Thousand';
  }
  if (hundreds !== 0) {
    spelling += spelling.length === 0 ? '' : ', ';
    spelling += spell(hundreds) + ' Hundred';
  }
  if (tens !== 0 || ones !== 0) {
    spelling += spelling.length === 0 ? '' : ' ';
    if (tens < 2) {
      spelling += onesSpellings[tens * 10 + ones];
    } else {
      spelling += tensSpellings[tens];
      if (ones !== 0) {
        spelling += '-' + onesSpellings[ones];
      }
    }
  }
  if (spelling.length === 0) {
    return 'Zero';
  }
  return spelling;
}
function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
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
      return 'r:' + this.r + ',g:' + this.g + ',b:' + this.b;
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
  return Number(value.replace('#', '0x'));
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
/*!*************************!*\
  !*** ./js/offscreen.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/utils */ "./js/model/utils.js");

let recorder;
let data = [];
let blob;
let currentTabId;
const ffmpeg = FFmpeg.createFFmpeg({
  corePath: chrome.runtime.getURL('ffmpeg-core.js'),
  log: false,
  mainName: 'main'
});
// console.log('ffmpeg', ffmpeg);

ffmpeg.setProgress(params => {
  console.log('progress:', params);
});
ffmpeg.setLogger(params => {
  switch (params.type) {
    case 'fferr':
    // case 'info':
    case 'ffout':
      const msg = {
        type: 'scrollCaptureFFmpegLogToSW',
        logType: params.type,
        message: params.message,
        tabId: currentTabId
      };
      // console.log('offscreen msg', msg);
      chrome.runtime.sendMessage(msg);
      break;
  }
});
chrome.runtime.onMessage.addListener(message => {
  if (message.target === 'offscreen') {
    switch (message.type) {
      case 'scrollCaptureStartOffscreenRecording':
        startRecording(message);
        break;
      case 'scrollCaptureStopOffscreenRecording':
        stopRecording(message);
        break;
      default:
        throw new Error('Unrecognized message:', message.type);
    }
  }
});
async function startRecording(message) {
  currentTabId = message.tabId;
  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }
  console.log('startRecording', JSON.stringify(message));
  const size = {
    x: message.tabWidth,
    y: message.tabHeight
  };
  const pixelRatio = message.pixelRatio;
  let constraints = {};
  let media;
  switch (message.mediaSource) {
    case 'tab':
      const constraintSizes = [{
        width: Math.floor(size.x),
        height: Math.floor(size.y)
      }, {
        width: Math.floor(size.x * message.zoomLevel),
        height: Math.floor(size.y * message.zoomLevel)
      }, {
        width: Math.floor(size.x * pixelRatio),
        height: Math.floor(size.y * pixelRatio)
      }];
      constraintSizes.sort((a, b) => {
        return a.width * a.height - b.width * b.height;
      });
      console.log('constraintSizes', constraintSizes);
      if (message.exportVideo) {
        constraints.video = {
          mandatory: {
            chromeMediaSource: message.mediaSource,
            chromeMediaSourceId: message.streamId,
            // minWidth: constraintSizes[0].width,
            // minHeight: constraintSizes[0].height,
            maxWidth: constraintSizes[2].width,
            maxHeight: constraintSizes[2].height,
            minFrameRate: 30,
            maxFrameRate: 60
          }
        };
      }
      if (message.exportAudio) {
        constraints.audio = {
          mandatory: {
            chromeMediaSource: message.mediaSource,
            chromeMediaSourceId: message.streamId
          }
        };
      }
      console.log('navigator.mediaDevices.getUserMedia', JSON.stringify(constraints));
      try {
        media = await navigator.mediaDevices.getUserMedia(constraints);
      } catch (error) {
        console.log('navigator.mediaDevices.getUserMedia error', error);
      }
      break;
    case 'desktop':
    default:
      // message.exportAudio = false;
      constraints = {
        video: {
          displaySurface: 'monitor'
        },
        audio: {
          suppressLocalAudioPlayback: true,
          autoGainControl: false,
          echoCancellation: false,
          gooAutoGainControl: false,
          noiseSuppression: false
        },
        preferCurrentTab: false,
        selfBrowserSurface: 'exclude',
        systemAudio: 'include',
        surfaceSwitching: 'include',
        monitorTypeSurfaces: 'include'
      };
      console.log('navigator.mediaDevices.getDisplayMedia', JSON.stringify(constraints));
      try {
        media = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (error) {
        console.log('navigator.mediaDevices.getDisplayMedia error', error);
      }
      break;
  }
  console.log('media=', media);
  if (!media) {
    console.log('!!!!No media');
    recordingError(message.tabId);
    return;
  }
  const tracks = media.getAudioTracks();
  if (message.exportAudio && tracks.length > 0) {
    const output = new AudioContext();
    const source = output.createMediaStreamSource(media);
    source.connect(output.destination);
  }
  if (!message.exportVideo && message.exportAudio && tracks.length < 1) {
    console.log('!!!!No audio track');
    media.getTracks().forEach(track => track.stop());
    recordingError(message.tabId);
    return;
  }
  let format = message.format;
  let audioCodec = message.audioCodec;
  if (message.needsFFMPEG) {
    format = 'webm';
    audioCodec = 'pcm';
  }
  let mimeType;
  if (message.exportVideo) {
    mimeType = `video/${format};codecs=${message.videoCodec}`;
    if (message.exportAudio) {
      mimeType += `,${audioCodec}`;
    }
  } else {
    mimeType = `audio/${format};codecs=${audioCodec}`;
  }
  let videoBitsPerSecond = message.videoBitsPerSecond || 16;
  let audioBitsPerSecond = message.audioBitsPerSecond || 128;
  const options = {
    mimeType,
    audioBitsPerSecond: audioBitsPerSecond * 1000,
    videoBitsPerSecond: videoBitsPerSecond * 1000000
  };
  console.log('MediaRecorder', JSON.stringify(options));
  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = event => data.push(event.data);
  recorder.onstop = () => {
    // console.log('data=', data);
    const blobFormat = mimeType.split(';')[0];
    // console.log('blobFormat=', blobFormat);
    blob = new Blob(data, {
      type: blobFormat
    });
    // console.log('blob=', blob);

    if (message.needsFFMPEG) {
      convertStreams(blob, message);
    } else {
      sendBlob(blob, message);
    }
    data = [];
  };
  recorder.start();
  window.location.hash = 'recording';
}
function recordingError(tabId) {
  const errorMsg = {
    type: 'scrollCaptureShowMainPanel',
    tabId
  };
  chrome.runtime.sendMessage(errorMsg, errorResponse => {
    console.log('errorResponse', errorResponse);
  });
}
function stopRecording(message) {
  recorder.stop();
  recorder.stream.getTracks().forEach(t => t.stop());
  recorder = undefined;
  window.location.hash = '';
}
function convertStreams(videoBlob, message) {
  var fileReader = new FileReader();
  fileReader.onload = async function () {
    let inputFileName = `sample_video.webm`;
    let outputFileName = `sample_video.${message.extension}`;
    let commandStr = `ffmpeg -i ${inputFileName}`;
    if (message.exportVideo) commandStr += ` -c:v copy`;
    if (message.exportAudio) commandStr += ` -c:a ${message.audioCodec} -b:a ${message.audioBitsPerSecond}k`;
    commandStr += ` ${outputFileName}`;
    const blob = await runFFmpeg(inputFileName, outputFileName, commandStr, new Uint8Array(this.result));
    sendBlob(blob, message);

    // const videoURLMessage = {
    //   type: 'scrollCaptureVideoURLBackground',
    //   videoURL: URL.createObjectURL(blob),
    //   fileName: downloadFileName,
    //   tabId: message.tabId,
    //   mimeType: `video/${downloadExtension}`,
    // };
    // chrome.runtime.sendMessage(videoURLMessage);
  };

  fileReader.readAsArrayBuffer(videoBlob);
}
async function runFFmpeg(inputFileName, outputFileName, commandStr, file) {
  if (ffmpeg.isLoaded()) {
    await ffmpeg.exit();
  }
  await ffmpeg.load();
  const commandList = commandStr.split(' ');
  if (commandList.shift() !== 'ffmpeg') {
    alert('Please start with ffmpeg');
    return;
  }
  ffmpeg.FS('writeFile', inputFileName, await FFmpeg.fetchFile(file));
  await ffmpeg.run(...commandList);
  const data = ffmpeg.FS('readFile', outputFileName);
  // console.log('ffmpeg data', data);

  const blob = new Blob([data.buffer]);
  // console.log('ffmpeg blob', blob);
  return blob;
  // downloadFile(blob, outputFileName);
}

function sendBlob(blob, message) {
  const videoURLMessage = {
    type: 'scrollCaptureVideoURLBackground',
    videoURL: URL.createObjectURL(blob),
    fileName: (0,_model_utils__WEBPACK_IMPORTED_MODULE_0__.createFilename)(message.extension),
    tabId: message.tabId,
    mimeType: (message.exportVideo ? 'video' : 'audio') + '/' + message.extension
  };
  console.log('!!!!!!! sendBlob', videoURLMessage);
  chrome.runtime.sendMessage(videoURLMessage);
}
function downloadFile(blob, fileName) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxHQUFHLENBQUM7RUFDckN2SyxDQUFDLENBQUN3SyxJQUFJLEdBQUdOLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDL0gsSUFBSSxDQUFDO0VBQ2xDcEMsQ0FBQyxDQUFDeUssUUFBUSxHQUFHTCxRQUFRO0VBQ3JCcEssQ0FBQyxDQUFDMEssS0FBSyxDQUFDLENBQUM7QUFDWCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvb2Zmc2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpbWVBTVBNIH0gZnJvbSAnLi4vLi4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVybyB9IGZyb20gJy4uLy4uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWxlbmFtZShleHRlbnNpb24sIHRleHQgPSAnU2Nyb2xsQ2FwdHVyZScpIHtcbiAgY29uc3QgbmFtZSA9IGNyZWF0ZUZpbGVuYW1lT25seSh0ZXh0KTtcbiAgcmV0dXJuIGAke25hbWV9LiR7ZXh0ZW5zaW9ufWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWxlbmFtZU9ubHkodGV4dCA9ICdTY3JvbGxDYXB0dXJlJykge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBhbXBtVGltZSA9IHRpbWVBTVBNKGRhdGUpO1xuICBsZXQgZGF0ZURhdGEgPSB7XG4gICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBkYXRlOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSksXG4gIH07XG4gIGFtcG1UaW1lLmFtcG0gPSBhbXBtVGltZS5hbXBtLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiBgJHt0ZXh0fSAke2RhdGVEYXRhLnllYXJ9LSR7ZGF0ZURhdGEubW9udGh9LSR7ZGF0ZURhdGEuZGF0ZX0gYXQgJHthbXBtVGltZS5ob3Vyc30uJHthbXBtVGltZS5taW51dGVzfS4ke2FtcG1UaW1lLnNlY29uZHN9ICR7YW1wbVRpbWUuYW1wbX1gO1xufVxuIiwiaW1wb3J0IHthZGRMZWFkaW5nWmVyb30gZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lQU1QTShkYXRlKSB7XG5cdGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0bGV0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRsZXQgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcblx0bGV0IHNlY29uZHMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG5cdGhvdXJzID0gaG91cnMgJSAxMjtcblx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuXHRyZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcywgYW1wbSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QU1QTShkYXRlLCBzcGFjZUJldHdlZW4gPSBcIlwiKSB7XG5cdGxldCBkYXRlRGF0YSA9IHRpbWVBTVBNKGRhdGUpO1xuXHRsZXQgc3RyVGltZSA9IGRhdGVEYXRhLmhvdXJzICsgJzonICsgZGF0ZURhdGEubWludXRlcyArIHNwYWNlQmV0d2VlbiArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4U3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhVVENTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENEYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0hvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdXJzKGRhdGUsIGhvdXJzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChob3VycyAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGxldCBtb250aHMgPSB7XG5cdGVuOltcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRmcjpbXCJKYW52aWVyXCIsIFwiRsOpdnJpZXJcIiwgXCJNYXJzXCIsIFwiQXZyaWxcIiwgXCJNYWlcIiwgXCJKdWluXCIsIFwiSnVpbGxldFwiLCBcIkFvw7t0XCIsIFwiU2VwdGVtYnJlXCIsIFwiT2N0b2JyZVwiLCBcIk5vdmVtYnJlXCIsIFwiRMOpY2VtYnJlXCJdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSwgbGFuZ3VhZ2UpIHtcblx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdGxhbmd1YWdlID0gXCJlblwiO1xuXHR9XG5cdGxldCBtb250aDtcblx0c3dpdGNoKGxhbmd1YWdlKSB7XG5cdFx0Y2FzZSBcImVuXCI6XG5cdFx0XHRtb250aCA9IG1vbnRoc1tsYW5ndWFnZV1bZGF0ZS5nZXRNb250aCgpXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShiaXJ0aERhdGUpIHtcblx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0bGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0bGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdGFnZS0tO1xuXHR9XG5cdHJldHVybiBhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVhdEFzVVRDKGRhdGUpIHtcblx0bGV0IHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xuXHRyZXN1bHQuc2V0TWludXRlcyhyZXN1bHQuZ2V0TWludXRlcygpIC0gcmVzdWx0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNaW51dGUgPSA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJIb3VyID0gNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJIb3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyV2VlayA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyV2Vlaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNb250aCA9IDM2NSAvIDEyICAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlclllYXIgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyWWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhbWlsaWFyVGltZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCB0ZXh0ID0gXCJcIjtcblx0bGV0IHllYXJzQmV0d2VlbiA9IHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRpZiAoeWVhcnNCZXR3ZWVuID49IDEpIHtcblx0XHRsZXQgeWVhcnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHllYXJzQmV0d2Vlbik7XG5cdFx0aWYgKHllYXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFycyBhZ29cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFyIGFnb1wiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRsZXQgbW9udGhzQmV0d2VlbiA9IG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRpZiAobW9udGhzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRsZXQgbW9udGhzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtb250aHNCZXR3ZWVuKTtcblx0XHRcdGlmIChtb250aHNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRocyBhZ29cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRoIGFnb1wiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgd2Vla3NCZXR3ZWVuID0gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRpZiAod2Vla3NCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0bGV0IHdlZWtzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih3ZWVrc0JldHdlZW4pO1xuXHRcdFx0XHRpZiAod2Vla3NCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrcyBhZ29cIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWsgYWdvXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXlzQmV0d2VlbiA9IGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdGlmIChkYXlzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGRheXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRpZiAoZGF5c0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXlzIGFnb1wiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5IGFnb1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuID0gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGhvdXJzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91cnMgYWdvXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXIgYWdvXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbiA9IG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW4gPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtaW51dGVzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGUgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBcIkp1c3Qgbm93XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0O1xufSIsIi8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiAxKSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIG9kZC5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG5vdCBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgb2RkOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNPZGQoNykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzT2RkKDEyKSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKHZhbHVlKSB7XG4gIHJldHVybiAhaXNFdmVuKHZhbHVlKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXIuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBjb250YWlucyBubyBkZWNpbWFsIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEuMjM0NSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICUgMSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IDEgfHwgdmFsdWUgPT09IDIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0V2ZW4odmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG4gIGZvciAobGV0IGkgPSAzOyBpIDw9IHM7IGkrKykge1xuICAgIGlmICh2YWx1ZSAlIGkgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZWNpbWFsVG9QbGFjZSh2YWx1ZSwgcGxhY2UgPSAxLCBtZXRob2QgPSBudWxsKSB7XG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgcGxhY2UpO1xuICBpZiAoIW1ldGhvZCkgbWV0aG9kID0gTWF0aC5yb3VuZDtcbiAgcmV0dXJuIG1ldGhvZCh2YWx1ZSAqIHApIC8gcDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMSh2YWx1ZSkge1xuICByZXR1cm4gZGVjaW1hbFRvUGxhY2UodmFsdWUsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQyKHZhbHVlKSB7XG4gIHJldHVybiBkZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDModmFsdWUpIHtcbiAgcmV0dXJuIGRlY2ltYWxUb1BsYWNlKHZhbHVlLCAzKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiBpbmRleCBpcyBpbmNsdWRlZCB3aXRoaW4gdGhlIGNvbGxlY3Rpb24gbGVuZ3RoIG90aGVyd2lzZSB0aGUgaW5kZXggbG9vcHMgdG8gdGhlIGJlZ2lubmluZyBvciBlbmQgb2YgdGhlIHJhbmdlIGFuZCBjb250aW51ZXMuXG5cbiBAcGFyYW0gaW5kZXg6IFNob3AgdG8gbG9vcCBpZiBuZWVkZWQuXG4gQHBhcmFtIGxlbmd0aDogVGhlIHRvdGFsIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuIEByZXR1cm4gQSB2YWxpZCB6ZXJvLWJhc2VkIGluZGV4LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFyIGNvbG9yczpBcnJheSA9IG5ldyBBcnJheShcIlJlZFwiLCBcIkdyZWVuXCIsIFwiQmx1ZVwiKTtcblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgyLCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgQmx1ZVxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCg0LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgR3JlZW5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoLTYsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBSZWRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb29wSW5kZXgoaW5kZXgsIGxlbmd0aCkge1xuICBpZiAoaW5kZXggPCAwKSB7XG4gICAgaW5kZXggPSBsZW5ndGggKyAoaW5kZXggJSBsZW5ndGgpO1xuICB9XG5cbiAgaWYgKGluZGV4ID49IGxlbmd0aCkge1xuICAgIHJldHVybiBpbmRleCAlIGxlbmd0aDtcbiAgfVxuXG4gIHJldHVybiBpbmRleDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgdmFsdWUgaXMgaW5jbHVkZWQgd2l0aGluIGEgcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGZhbGxzIHdpdGhpbiB0aGUgcmFuZ2U7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQHVzYWdlTm90ZSBUaGUgcmFuZ2UgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDMsIDAsIDUpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0JldHdlZW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiAhKHZhbHVlIDwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHx8IHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB2YWx1ZSBmYWxscyB3aXRoaW4gYSByYW5nZTsgaWYgbm90IGl0IGlzIHNuYXBwZWQgdG8gdGhlIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgaW5jbHVkZWQgaW4gdGhlIHJhbmdlLlxuIEBwYXJhbSBmaXJzdFZhbHVlOiBGaXJzdCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIHNlY29uZFZhbHVlOiBTZWNvbmQgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEByZXR1cm4gUmV0dXJucyBlaXRoZXIgdGhlIG51bWJlciBhcyBwYXNzZWQsIG9yIGl0cyB2YWx1ZSBvbmNlIHNuYXBwZWQgdG8gbmVhcmVzdCByYW5nZSB2YWx1ZS5cbiBAdXNhZ2VOb3RlIFRoZSBjb25zdHJhaW50IHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNvbnN0cmFpbigzLCAwLCA1KSk7IC8vIFRyYWNlcyAzXG4gY29uc29sZS5sb2coY29uc3RyYWluKDcsIDAsIDUpKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25zdHJhaW4odmFsdWUsIGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB7XG4gIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgTWF0aC5taW4oZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKSwgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBldmVubHkgc3BhY2VkIG51bWVyaWNhbCBpbmNyZW1lbnRzIGJldHdlZW4gdHdvIG51bWJlcnMuXG5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBwYXJhbSBzdGVwczogVGhlIG51bWJlciBvZiBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyBhbiBBcnJheSBjb21wcmlzZWQgb2YgdGhlIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigwLCA1LCA0KSk7IC8vIFRyYWNlcyAxLDIsMyw0XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDEsIDMsIDMpKTsgLy8gVHJhY2VzIDEuNSwyLDIuNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0ZXBzQmV0d2VlbihiZWdpbiwgZW5kLCBzdGVwcykge1xuICBzdGVwcysrO1xuXG4gIGxldCBpID0gMDtcbiAgY29uc3Qgc3RlcHNCZXR3ZWVuID0gW107XG4gIGNvbnN0IGluY3JlbWVudCA9IChlbmQgLSBiZWdpbikgLyBzdGVwcztcblxuICB3aGlsZSAoKytpIDwgc3RlcHMpIHtcbiAgICBzdGVwc0JldHdlZW4ucHVzaChpICogaW5jcmVtZW50ICsgYmVnaW4pO1xuICB9XG5cbiAgcmV0dXJuIHN0ZXBzQmV0d2Vlbjtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHZhbHVlIGJldHdlZW4gdHdvIHNwZWNpZmllZCB2YWx1ZXMuXG5cbiBAcGFyYW0gYW1vdW50OiBUaGUgbGV2ZWwgb2YgaW50ZXJwb2xhdGlvbiBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLiBJZiA8Y29kZT4wPC9jb2RlPiwgPGNvZGU+YmVnaW48L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkOyBpZiA8Y29kZT4xPC9jb2RlPiwgPGNvZGU+ZW5kPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZC5cbiBAcGFyYW0gYmVnaW46IFRoZSBzdGFydGluZyB2YWx1ZS5cbiBAcGFyYW0gZW5kOiBUaGUgZW5kaW5nIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaW50ZXJwb2xhdGUoMC41LCAwLCAxMCkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlKGFtb3VudCwgYmVnaW4sIGVuZCkge1xuICByZXR1cm4gYmVnaW4gKyAoZW5kIC0gYmVnaW4pICogYW1vdW50O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgcGVyY2VudGFnZSBvZiBhIHZhbHVlIGluIGEgZ2l2ZW4gcmFuZ2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSB2YWx1ZSB0byBiZSBjb252ZXJ0ZWQuXG4gQHBhcmFtIG1pbmltdW06IFRoZSBsb3dlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHBhcmFtIG1heGltdW06IFRoZSB1cHBlciB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhub3JtYWxpemUoOCwgNCwgMjApLmRlY2ltYWxQZXJjZW50YWdlKTsgLy8gVHJhY2VzIDAuMjVcbiA8L2NvZGU+XG4gKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodmFsdWUsIG1pbmltdW0sIG1heGltdW0pIHtcbi8vICAgcmV0dXJuIG5ldyBQZXJjZW50KCh2YWx1ZSAtIG1pbmltdW0pIC8gKG1heGltdW0gLSBtaW5pbXVtKSk7XG4vLyB9XG5cbi8qKlxuIE1hcHMgYSB2YWx1ZSBmcm9tIG9uZSBjb29yZGluYXRlIHNwYWNlIHRvIGFub3RoZXIuXG5cbiBAcGFyYW0gdmFsdWU6IFZhbHVlIGZyb20gdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UgdG8gbWFwIHRvIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMTogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDE6IEVuZGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWluMjogU3RhcnRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgyOiBFbmRpbmcgdmFsdWUgb2YgdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobWFwKDAuNzUsIDAsIDEsIDAsIDEwMCkpOyAvLyBUcmFjZXMgNzVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpO1xufVxuLy8gZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuLy8gXHRyZXR1cm4gbWluMiArIChtYXgyIC0gbWluMikgKiAoKHZhbHVlIC0gbWluMSkgLyAobWF4MSAtIG1pbjEpKTtcbi8vIH1cblxuLyoqXG4gTG93IHBhc3MgZmlsdGVyIGFsb2dyaXRobSBmb3IgZWFzaW5nIGEgdmFsdWUgdG93YXJkIGEgZGVzdGluYXRpb24gdmFsdWUuIFdvcmtzIGJlc3QgZm9yIHR3ZWVuaW5nIHZhbHVlcyB3aGVuIG5vIGRlZmluaXRlIHRpbWUgZHVyYXRpb24gZXhpc3RzIGFuZCB3aGVuIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZSBjaGFuZ2VzLlxuXG4gSWYgPGNvZGU+KDAuNSA8IG4gPCAxKTwvY29kZT4sIHRoZW4gdGhlIHJlc3VsdGluZyB2YWx1ZXMgd2lsbCBvdmVyc2hvb3QgKHBpbmctcG9uZykgdW50aWwgdGhleSByZWFjaCB0aGUgZGVzdGluYXRpb24gdmFsdWUuIFdoZW4gPGNvZGU+bjwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDEsIGFzIGl0cyB2YWx1ZSBpbmNyZWFzZXMsIHRoZSB0aW1lIGl0IHRha2VzIHRvIHJlYWNoIHRoZSBkZXN0aW5hdGlvbiBhbHNvIGluY3JlYXNlcy4gQSBwbGVhc2luZyB2YWx1ZSBmb3IgPGNvZGU+bjwvY29kZT4gaXMgNS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWUuXG4gQHBhcmFtIGRlc3Q6IFRoZSBkZXN0aW5hdGlvbiB2YWx1ZS5cbiBAcGFyYW0gbjogVGhlIHNsb3dkb3duIGZhY3Rvci5cbiBAcmV0dXJuIFRoZSB3ZWlnaHRlZCBhdmVyYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2VpZ2h0ZWRBdmVyYWdlKHZhbHVlLCBkZXN0LCBuKSB7XG4gIHJldHVybiB2YWx1ZSArIChkZXN0IC0gdmFsdWUpIC8gbjtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCJcIjwvY29kZT4uXG4gQHBhcmFtIG1pbkxlbmd0aDogVGhlIG1pbmltdW0gbGVuZ3RoIG9mIHRoZSBudW1iZXI7IGRlZmF1bHRzIHRvIDxjb2RlPjAgPC9jb2RlPi5cbiBAcGFyYW0gZmlsbENoYXI6IFRoZSBsZWFkaW5nIGNoYXJhY3RlciB1c2VkIHRvIG1ha2UgdGhlIG51bWJlciB0aGUgbWluaW11bSBsZW5ndGg7IGRlZmF1bHRzIHRvIDxjb2RlPlwiMFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXQoMTIzNDU2NywgXCIsXCIsIDgpKTsgLy8gVHJhY2VzIDAxLDIzNCw1NjdcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIGtEZWxpbSwgbWluTGVuZ3RoLCBmaWxsQ2hhcikge1xuICBpZiAoIWtEZWxpbSkge1xuICAgIGtEZWxpbSA9ICcsJztcbiAgfVxuICBpZiAoaXNOYU4obWluTGVuZ3RoKSkge1xuICAgIG1pbkxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKCFmaWxsQ2hhcikge1xuICAgIGZpbGxDaGFyID0gJzAnO1xuICB9XG4gIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMTtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IodmFsdWUpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGxlbiA9IG51bS5sZW5ndGg7XG5cbiAgaWYgKG1pbkxlbmd0aCAhPT0gMCAmJiBtaW5MZW5ndGggPiBsZW4pIHtcbiAgICBtaW5MZW5ndGggLT0gbGVuO1xuXG4gICAgY29uc3QgYWRkQ2hhciA9IGZpbGxDaGFyIHx8ICcwJztcblxuICAgIHdoaWxlIChtaW5MZW5ndGgtLSkge1xuICAgICAgbnVtID0gYWRkQ2hhciArIG51bTtcbiAgICB9XG4gIH1cblxuICBpZiAoa0RlbGltICE9PSBudWxsICYmIG51bS5sZW5ndGggPiAzKSB7XG4gICAgY29uc3QgdG90YWxEZWxpbSA9IE1hdGguZmxvb3IobnVtLmxlbmd0aCAvIDMpO1xuICAgIGNvbnN0IHRvdGFsUmVtYWluID0gbnVtLmxlbmd0aCAlIDM7XG4gICAgY29uc3QgbnVtU3BsaXQgPSBudW0uc3BsaXQoJycpO1xuICAgIGxldCBpID0gLTE7XG5cbiAgICB3aGlsZSAoKytpIDwgdG90YWxEZWxpbSkge1xuICAgICAgbnVtU3BsaXQuc3BsaWNlKHRvdGFsUmVtYWluICsgNCAqIGksIDAsIGtEZWxpbSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdGFsUmVtYWluID09PSAwKSB7XG4gICAgICBudW1TcGxpdC5zaGlmdCgpO1xuICAgIH1cblxuICAgIG51bSA9IG51bVNwbGl0LmpvaW4oJycpO1xuICB9XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCkge1xuICAgIG51bSArPSByZW1haW5kZXIudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG4gIH1cblxuICByZXR1cm4gbnVtO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgY3VycmVuY3kgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0gZm9yY2VEZWNpbWFsczogSWYgdGhlIG51bWJlciBzaG91bGQgYWx3YXlzIGhhdmUgdHdvIGRlY2ltYWwgcGxhY2VzIDxjb2RlPnRydWU8L2NvZGU+LCBvciBvbmx5IHNob3cgZGVjaW1hbHMgaXMgdGhlcmUgaXMgYSBkZWNpbWFscyB2YWx1ZSA8Y29kZT5mYWxzZTwvY29kZT47IGRlZmF1bHRzIHRvIDxjb2RlPnRydWU8L2NvZGU+LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiLFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXRDdXJyZW5jeSgxMjM0LjUpKTsgLy8gVHJhY2VzIFwiMSwyMzQuNTBcIlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlLCBmb3JjZURlY2ltYWxzLCBrRGVsaW0pIHtcbiAgaWYgKGZvcmNlRGVjaW1hbHMgPT09IG51bGwpIHtcbiAgICBmb3JjZURlY2ltYWxzID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWtEZWxpbSkge1xuICAgIGtEZWxpbSA9ICcsJztcbiAgfVxuICBjb25zdCByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG4gIGxldCBjdXJyZW5jeSA9IGZvcm1hdChNYXRoLmZsb29yKHZhbHVlKSwga0RlbGltKTtcblxuICBpZiAocmVtYWluZGVyICE9PSAwIHx8IGZvcmNlRGVjaW1hbHMpIHtcbiAgICBjdXJyZW5jeSArPSByZW1haW5kZXIudG9GaXhlZCgyKS5zdWJzdHIoMSk7XG4gIH1cblxuICByZXR1cm4gY3VycmVuY3k7XG59XG5cbi8qKlxuIEZpbmRzIHRoZSBlbmdsaXNoIG9yZGluYWwgc3VmZml4IGZvciB0aGUgbnVtYmVyIGdpdmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZmluZCB0aGUgb3JkaW5hbCBzdWZmaXggb2YuXG4gQHJldHVybiBSZXR1cm5zIHRoZSBzdWZmaXggZm9yIHRoZSBudW1iZXIsIDIgY2hhcmFjdGVycy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKDMyICsgZ2V0T3JkaW5hbFN1ZmZpeCgzMikpOyAvLyBUcmFjZXMgMzJuZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE9yZGluYWxTdWZmaXgodmFsdWUpIHtcbiAgaWYgKHZhbHVlID49IDEwICYmIHZhbHVlIDw9IDIwKSB7XG4gICAgcmV0dXJuICd0aCc7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBzd2l0Y2ggKHZhbHVlICUgMTApIHtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gJ3JkJztcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gJ25kJztcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gJ3N0JztcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICd0aCc7XG4gIH1cbn1cblxuLyoqXG4gQWRkcyBhIGxlYWRpbmcgemVybyBmb3IgbnVtYmVycyBsZXNzIHRoYW4gdGVuLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gYWRkIGxlYWRpbmcgemVyby5cbiBAcmV0dXJuIE51bWJlciBhcyBhIFN0cmluZzsgaWYgdGhlIG51bWJlciB3YXMgbGVzcyB0aGFuIHRlbiB0aGUgbnVtYmVyIHdpbGwgaGF2ZSBhIGxlYWRpbmcgemVyby5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDcpKTsgLy8gVHJhY2VzIDA3XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oMTEpKTsgLy8gVHJhY2VzIDExXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm8odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIDwgMTAgPyAnMCcgKyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuIFNwZWxscyB0aGUgcHJvdmlkZWQgbnVtYmVyLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gc3BlbGwuIE5lZWRzIHRvIGJlIGxlc3MgdGhhbiA5OTk5OTk5OTkuXG4gQHJldHVybiBUaGUgbnVtYmVyIHNwZWxsZWQgb3V0IGFzIGEgU3RyaW5nLlxuIEB0aHJvd3MgPGNvZGU+RXJyb3I8L2NvZGU+IGlmIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gOTk5OTk5OTk5LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coc3BlbGwoMCkpOyAvLyBUcmFjZXMgWmVyb1xuIGNvbnNvbGUubG9nKHNwZWxsKDIzKSk7IC8vIFRyYWNlcyBUd2VudHktVGhyZWVcbiBjb25zb2xlLmxvZyhzcGVsbCgyMDA1Njc4KSk7IC8vIFRyYWNlcyBUd28gTWlsbGlvbiwgRml2ZSBUaG91c2FuZCwgU2l4IEh1bmRyZWQgU2V2ZW50eS1FaWdodFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwZWxsKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDk5OTk5OTk5OSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVmFsdWUgdG9vIGxhcmdlIGZvciB0aGlzIG1ldGhvZC4nKTtcbiAgfVxuXG4gIGNvbnN0IG9uZXNTcGVsbGluZ3MgPSBbXG4gICAgJycsXG4gICAgJ09uZScsXG4gICAgJ1R3bycsXG4gICAgJ1RocmVlJyxcbiAgICAnRm91cicsXG4gICAgJ0ZpdmUnLFxuICAgICdTaXgnLFxuICAgICdTZXZlbicsXG4gICAgJ0VpZ2h0JyxcbiAgICAnTmluZScsXG4gICAgJ1RlbicsXG4gICAgJ0VsZXZlbicsXG4gICAgJ1R3ZWx2ZScsXG4gICAgJ1RoaXJ0ZWVuJyxcbiAgICAnRm91cnRlZW4nLFxuICAgICdGaWZ0ZWVuJyxcbiAgICAnU2l4dGVlbicsXG4gICAgJ1NldmVudGVlbicsXG4gICAgJ0VpZ2h0ZWVuJyxcbiAgICAnTmluZXRlZW4nLFxuICBdO1xuICBjb25zdCB0ZW5zU3BlbGxpbmdzID0gWycnLCAnJywgJ1R3ZW50eScsICdUaGlydHknLCAnRm9ydHknLCAnRmlmdHknLCAnU2l4dHknLCAnU2V2ZW50eScsICdFaWdodHknLCAnTmluZXR5J107XG4gIGxldCBzcGVsbGluZyA9ICcnO1xuXG4gIGNvbnN0IG1pbGxpb25zID0gdmFsdWUgLyAxMDAwMDAwO1xuICB2YWx1ZSAlPSAxMDAwMDAwO1xuXG4gIGNvbnN0IHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcbiAgdmFsdWUgJT0gMTAwMDtcblxuICBjb25zdCBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuICB2YWx1ZSAlPSAxMDA7XG5cbiAgY29uc3QgdGVucyA9IHZhbHVlIC8gMTA7XG4gIHZhbHVlICU9IDEwO1xuXG4gIGNvbnN0IG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG4gIGlmIChtaWxsaW9ucyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/ICcnIDogJywgJztcbiAgICBzcGVsbGluZyArPSBzcGVsbChtaWxsaW9ucykgKyAnIE1pbGxpb24nO1xuICB9XG5cbiAgaWYgKHRob3VzYW5kcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/ICcnIDogJywgJztcbiAgICBzcGVsbGluZyArPSBzcGVsbCh0aG91c2FuZHMpICsgJyBUaG91c2FuZCc7XG4gIH1cblxuICBpZiAoaHVuZHJlZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyAnJyA6ICcsICc7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwoaHVuZHJlZHMpICsgJyBIdW5kcmVkJztcbiAgfVxuXG4gIGlmICh0ZW5zICE9PSAwIHx8IG9uZXMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyAnJyA6ICcgJztcblxuICAgIGlmICh0ZW5zIDwgMikge1xuICAgICAgc3BlbGxpbmcgKz0gb25lc1NwZWxsaW5nc1t0ZW5zICogMTAgKyBvbmVzXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3BlbGxpbmcgKz0gdGVuc1NwZWxsaW5nc1t0ZW5zXTtcblxuICAgICAgaWYgKG9uZXMgIT09IDApIHtcbiAgICAgICAgc3BlbGxpbmcgKz0gJy0nICsgb25lc1NwZWxsaW5nc1tvbmVzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3BlbGxpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICdaZXJvJztcbiAgfVxuXG4gIHJldHVybiBzcGVsbGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgY29uc3QgaGV4ID0gYy50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gJzAnICsgaGV4IDogaGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmdiVG9IZXgocmdiKSB7XG4gIHJldHVybiBjb21wb25lbnRUb0hleChyZ2IucikgKyBjb21wb25lbnRUb0hleChyZ2IuZykgKyBjb21wb25lbnRUb0hleChyZ2IuYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgY29uc3QgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XG4gIHJldHVybiByZXN1bHRcbiAgICA/IHtcbiAgICAgICAgcjogcGFyc2VJbnQocmVzdWx0WzFdLCAxNiksXG4gICAgICAgIGc6IHBhcnNlSW50KHJlc3VsdFsyXSwgMTYpLFxuICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KSxcbiAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gJ3I6JyArIHRoaXMuciArICcsZzonICsgdGhpcy5nICsgJyxiOicgKyB0aGlzLmI7XG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgOiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcykge1xuICByZXR1cm4gKGRlZ3JlZXMgKiBNYXRoLlBJKSAvIDE4MDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhZFRvRGVnKHJhZCkge1xuICByZXR1cm4gKHJhZCAqIDE4MCkgLyBNYXRoLlBJO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3Roc3RlcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgY29uc3QgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKSkpO1xuICByZXR1cm4geCAqIHggKiAoMyAtIDIgKiB4KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYSwgYiwgdCkge1xuICByZXR1cm4gYSArIHQgKiAoYiAtIGEpO1xuICAvLyByZXR1cm4gYSgxLXQpICsgYnRcbiAgLy9yZXR1cm4gbWluICsgKG1heCAtIG1pbikgKiB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1peChhLCBiLCB0KSB7XG4gIHJldHVybiBsZXJwKGEsIGIsIHQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9ybSh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuICh2YWx1ZSAtIG1pbikgLyAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb2QobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vYSBtb2R1bG8gZnVuY3Rpb24gdGhhdCBoYW5kbGVzIG5lZ2F0aXZlcyBudW1iZXJzICdjb3JyZWN0bHknXG5leHBvcnQgZnVuY3Rpb24gbW9kV3JhcChuLCBtKSB7XG4gIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9yYW5kb20gd2l0aCBzZWVkLCByZXR1cm5zIDAtMSByYW5nZVxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbTFEKHNlZWQpIHtcbiAgcmV0dXJuIG1vZFdyYXAoTWF0aC5zaW4oc2VlZCkgKiA0Mzc1OC41NDUzLCAxKTtcbn1cblxuLy9yZXR1cm5zIDAtMSByYW5nZVxuZXhwb3J0IGZ1bmN0aW9uIG5vaXNlMUQoeCkge1xuICBjb25zdCBpID0gTWF0aC5mbG9vcih4KTtcbiAgY29uc3QgZiA9IG1vZFdyYXAoeCwgMSk7XG4gIGNvbnN0IHUgPSBmICogZiAqICgzLjAgLSAyLjAgKiBmKTtcbiAgcmV0dXJuIGxlcnAodSwgcmFuZG9tMUQoaSksIHJhbmRvbTFEKGkgKyAxLjApKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IobWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBDbGFtcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gY2xhbXAobGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4MiksIG1pbjIsIG1heDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2luZVdhdmUoYW5nbGUgPSAwLCBmcmVxdWVuY3kgPSBNYXRoLlBJLCB0aW1lID0gMCwgc3BlZWQgPSAxLCBhbXBsaXR1ZGUgPSAxKSB7XG4gIHJldHVybiBNYXRoLnNpbihhbmdsZSAqIGZyZXF1ZW5jeSArIHRpbWUgKiBzcGVlZCkgKiBhbXBsaXR1ZGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcFRpbWUodGltZSwgc3RhcnRUaW1lLCBkdXJhdGlvbikge1xuICByZXR1cm4gY2xhbXAodGltZSAtIHN0YXJ0VGltZSwgMC4wLCBkdXJhdGlvbikgLyBkdXJhdGlvbjtcbn1cblxuLyoqXG4gRWFzZSBhIHZhbHVlIHdpdGggc29tZSBlbGFzdGljaXR5XG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZVxuIEBwYXJhbSB0YXJnZXQ6IFRoZSB0YXJnZXQgdmFsdWVcbiBAcGFyYW0gZnJpY3Rpb246IFRoZSBmcmljdGlvbiBmcm9tIDAgdG8gMVxuIEByZXR1cm4gVGhlIGVhc2UgdmFsdWVcbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhbHVlICs9IGVhc2VPdXQodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24pO1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVhc2VPdXQodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24gPSAwLjEpIHtcbiAgcmV0dXJuICh0YXJnZXQgLSB2YWx1ZSkgKiBmcmljdGlvbjtcbn1cblxuLyoqXG4gRWFzZSBhIHZhbHVlIHdpdGggc29tZSBlbGFzdGljaXR5XG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZVxuIEBwYXJhbSB0YXJnZXQ6IFRoZSB0YXJnZXQgdmFsdWVcbiBAcGFyYW0gZnJpY3Rpb246IFRoZSBmcmljdGlvbiBmcm9tIDAgdG8gMVxuIEBwYXJhbSBzcGVlZDogVGhlIGN1cnJlbnQgc3BlZWRcbiBAcGFyYW0gZWxhc3RpY2l0eTogVGhlIGVsYXN0aWNpdHkgZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBuZXcgc3BlZWQgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBzcGVlZCA9IHNwcmluZyh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbiwgc3BlZWQsIGVsYXN0aWNpdHkpO1xuIHZhbHVlICs9IHNwZWVkO1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwcmluZyh2YWx1ZSwgdGFyZ2V0ID0gMCwgZnJpY3Rpb24gPSAwLjEsIHNwZWVkID0gMCwgZWxhc3RpY2l0eSA9IDApIHtcbiAgcmV0dXJuIHNwZWVkICogZWxhc3RpY2l0eSArICh0YXJnZXQgLSB2YWx1ZSkgKiBmcmljdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU11bHRpcGxlUm90YXRpb25zKGFuZ2xlKSB7XG4gIGNvbnN0IGNpcmNsZSA9IE1hdGguUEkgKiAyO1xuICB3aGlsZSAoYW5nbGUgPiBjaXJjbGUgLyAyKSB7XG4gICAgYW5nbGUgLT0gY2lyY2xlO1xuICB9XG4gIHdoaWxlIChhbmdsZSA8IC1jaXJjbGUgLyAyKSB7XG4gICAgYW5nbGUgKz0gY2lyY2xlO1xuICB9XG4gIHJldHVybiBhbmdsZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleENvbG9yU3RyaW5nVG9OdW1iZXIodmFsdWUpIHtcbiAgcmV0dXJuIE51bWJlcih2YWx1ZS5yZXBsYWNlKCcjJywgJzB4JykpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVGaWxlbmFtZSwgY3JlYXRlRmlsZW5hbWVPbmx5IH0gZnJvbSAnLi9tb2RlbC91dGlscyc7XG5cbmxldCByZWNvcmRlcjtcbmxldCBkYXRhID0gW107XG5sZXQgYmxvYjtcbmxldCBjdXJyZW50VGFiSWQ7XG5cbmNvbnN0IGZmbXBlZyA9IEZGbXBlZy5jcmVhdGVGRm1wZWcoe1xuICBjb3JlUGF0aDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdmZm1wZWctY29yZS5qcycpLFxuICBsb2c6IGZhbHNlLFxuICBtYWluTmFtZTogJ21haW4nLFxufSk7XG4vLyBjb25zb2xlLmxvZygnZmZtcGVnJywgZmZtcGVnKTtcblxuZmZtcGVnLnNldFByb2dyZXNzKChwYXJhbXMpID0+IHtcbiAgY29uc29sZS5sb2coJ3Byb2dyZXNzOicsIHBhcmFtcyk7XG59KTtcblxuZmZtcGVnLnNldExvZ2dlcigocGFyYW1zKSA9PiB7XG4gIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcbiAgICBjYXNlICdmZmVycic6XG4gICAgLy8gY2FzZSAnaW5mbyc6XG4gICAgY2FzZSAnZmZvdXQnOlxuICAgICAgY29uc3QgbXNnID0ge1xuICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUZGbXBlZ0xvZ1RvU1cnLFxuICAgICAgICBsb2dUeXBlOiBwYXJhbXMudHlwZSxcbiAgICAgICAgbWVzc2FnZTogcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgIHRhYklkOiBjdXJyZW50VGFiSWQsXG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ29mZnNjcmVlbiBtc2cnLCBtc2cpO1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gIGlmIChtZXNzYWdlLnRhcmdldCA9PT0gJ29mZnNjcmVlbicpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJzpcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnOlxuICAgICAgICBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIG1lc3NhZ2U6JywgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIGN1cnJlbnRUYWJJZCA9IG1lc3NhZ2UudGFiSWQ7XG5cbiAgaWYgKHJlY29yZGVyPy5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBzdGFydFJlY29yZGluZyB3aGlsZSByZWNvcmRpbmcgaXMgaW4gcHJvZ3Jlc3MuJyk7XG4gIH1cbiAgY29uc29sZS5sb2coJ3N0YXJ0UmVjb3JkaW5nJywgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICBjb25zdCBzaXplID0geyB4OiBtZXNzYWdlLnRhYldpZHRoLCB5OiBtZXNzYWdlLnRhYkhlaWdodCB9O1xuICBjb25zdCBwaXhlbFJhdGlvID0gbWVzc2FnZS5waXhlbFJhdGlvO1xuICBsZXQgY29uc3RyYWludHMgPSB7fTtcbiAgbGV0IG1lZGlhO1xuXG4gIHN3aXRjaCAobWVzc2FnZS5tZWRpYVNvdXJjZSkge1xuICAgIGNhc2UgJ3RhYic6XG4gICAgICBjb25zdCBjb25zdHJhaW50U2l6ZXMgPSBbXG4gICAgICAgIHsgd2lkdGg6IE1hdGguZmxvb3Ioc2l6ZS54KSwgaGVpZ2h0OiBNYXRoLmZsb29yKHNpemUueSkgfSxcbiAgICAgICAgeyB3aWR0aDogTWF0aC5mbG9vcihzaXplLnggKiBtZXNzYWdlLnpvb21MZXZlbCksIGhlaWdodDogTWF0aC5mbG9vcihzaXplLnkgKiBtZXNzYWdlLnpvb21MZXZlbCkgfSxcbiAgICAgICAgeyB3aWR0aDogTWF0aC5mbG9vcihzaXplLnggKiBwaXhlbFJhdGlvKSwgaGVpZ2h0OiBNYXRoLmZsb29yKHNpemUueSAqIHBpeGVsUmF0aW8pIH0sXG4gICAgICBdO1xuICAgICAgY29uc3RyYWludFNpemVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgcmV0dXJuIGEud2lkdGggKiBhLmhlaWdodCAtIGIud2lkdGggKiBiLmhlaWdodDtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ2NvbnN0cmFpbnRTaXplcycsIGNvbnN0cmFpbnRTaXplcyk7XG5cbiAgICAgIGlmIChtZXNzYWdlLmV4cG9ydFZpZGVvKSB7XG4gICAgICAgIGNvbnN0cmFpbnRzLnZpZGVvID0ge1xuICAgICAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6IG1lc3NhZ2UubWVkaWFTb3VyY2UsXG4gICAgICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZUlkOiBtZXNzYWdlLnN0cmVhbUlkLFxuICAgICAgICAgICAgLy8gbWluV2lkdGg6IGNvbnN0cmFpbnRTaXplc1swXS53aWR0aCxcbiAgICAgICAgICAgIC8vIG1pbkhlaWdodDogY29uc3RyYWludFNpemVzWzBdLmhlaWdodCxcbiAgICAgICAgICAgIG1heFdpZHRoOiBjb25zdHJhaW50U2l6ZXNbMl0ud2lkdGgsXG4gICAgICAgICAgICBtYXhIZWlnaHQ6IGNvbnN0cmFpbnRTaXplc1syXS5oZWlnaHQsXG4gICAgICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgICAgICAgICAgbWF4RnJhbWVSYXRlOiA2MCxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICAgICAgY29uc3RyYWludHMuYXVkaW8gPSB7XG4gICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogbWVzc2FnZS5tZWRpYVNvdXJjZSxcbiAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYScsIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICB0cnkge1xuICAgICAgICBtZWRpYSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSBlcnJvcicsIGVycm9yKTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnZGVza3RvcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIC8vIG1lc3NhZ2UuZXhwb3J0QXVkaW8gPSBmYWxzZTtcbiAgICAgIGNvbnN0cmFpbnRzID0ge1xuICAgICAgICB2aWRlbzoge1xuICAgICAgICAgIGRpc3BsYXlTdXJmYWNlOiAnbW9uaXRvcicsXG4gICAgICAgIH0sXG4gICAgICAgIGF1ZGlvOiB7XG4gICAgICAgICAgc3VwcHJlc3NMb2NhbEF1ZGlvUGxheWJhY2s6IHRydWUsXG4gICAgICAgICAgYXV0b0dhaW5Db250cm9sOiBmYWxzZSxcbiAgICAgICAgICBlY2hvQ2FuY2VsbGF0aW9uOiBmYWxzZSxcbiAgICAgICAgICBnb29BdXRvR2FpbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgIG5vaXNlU3VwcHJlc3Npb246IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwcmVmZXJDdXJyZW50VGFiOiBmYWxzZSxcbiAgICAgICAgc2VsZkJyb3dzZXJTdXJmYWNlOiAnZXhjbHVkZScsXG4gICAgICAgIHN5c3RlbUF1ZGlvOiAnaW5jbHVkZScsXG4gICAgICAgIHN1cmZhY2VTd2l0Y2hpbmc6ICdpbmNsdWRlJyxcbiAgICAgICAgbW9uaXRvclR5cGVTdXJmYWNlczogJ2luY2x1ZGUnLFxuICAgICAgfTtcbiAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYScsIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gICAgICB0cnkge1xuICAgICAgICBtZWRpYSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldERpc3BsYXlNZWRpYSBlcnJvcicsIGVycm9yKTtcbiAgICAgIH1cbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgY29uc29sZS5sb2coJ21lZGlhPScsIG1lZGlhKTtcbiAgaWYgKCFtZWRpYSkge1xuICAgIGNvbnNvbGUubG9nKCchISEhTm8gbWVkaWEnKTtcbiAgICByZWNvcmRpbmdFcnJvcihtZXNzYWdlLnRhYklkKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCB0cmFja3MgPSBtZWRpYS5nZXRBdWRpb1RyYWNrcygpO1xuXG4gIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvICYmIHRyYWNrcy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG91dHB1dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShtZWRpYSk7XG4gICAgc291cmNlLmNvbm5lY3Qob3V0cHV0LmRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIGlmICghbWVzc2FnZS5leHBvcnRWaWRlbyAmJiBtZXNzYWdlLmV4cG9ydEF1ZGlvICYmIHRyYWNrcy5sZW5ndGggPCAxKSB7XG4gICAgY29uc29sZS5sb2coJyEhISFObyBhdWRpbyB0cmFjaycpO1xuICAgIG1lZGlhLmdldFRyYWNrcygpLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuICAgIHJlY29yZGluZ0Vycm9yKG1lc3NhZ2UudGFiSWQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGxldCBmb3JtYXQgPSBtZXNzYWdlLmZvcm1hdDtcbiAgbGV0IGF1ZGlvQ29kZWMgPSBtZXNzYWdlLmF1ZGlvQ29kZWM7XG4gIGlmIChtZXNzYWdlLm5lZWRzRkZNUEVHKSB7XG4gICAgZm9ybWF0ID0gJ3dlYm0nO1xuICAgIGF1ZGlvQ29kZWMgPSAncGNtJztcbiAgfVxuXG4gIGxldCBtaW1lVHlwZTtcbiAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICBtaW1lVHlwZSA9IGB2aWRlby8ke2Zvcm1hdH07Y29kZWNzPSR7bWVzc2FnZS52aWRlb0NvZGVjfWA7XG4gICAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICAgIG1pbWVUeXBlICs9IGAsJHthdWRpb0NvZGVjfWA7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1pbWVUeXBlID0gYGF1ZGlvLyR7Zm9ybWF0fTtjb2RlY3M9JHthdWRpb0NvZGVjfWA7XG4gIH1cblxuICBsZXQgdmlkZW9CaXRzUGVyU2Vjb25kID0gbWVzc2FnZS52aWRlb0JpdHNQZXJTZWNvbmQgfHwgMTY7XG4gIGxldCBhdWRpb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLmF1ZGlvQml0c1BlclNlY29uZCB8fCAxMjg7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtaW1lVHlwZSxcbiAgICBhdWRpb0JpdHNQZXJTZWNvbmQ6IGF1ZGlvQml0c1BlclNlY29uZCAqIDEwMDAsXG4gICAgdmlkZW9CaXRzUGVyU2Vjb25kOiB2aWRlb0JpdHNQZXJTZWNvbmQgKiAxMDAwMDAwLFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKCdNZWRpYVJlY29yZGVyJywgSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpO1xuXG4gIHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIobWVkaWEsIG9wdGlvbnMpO1xuICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQpID0+IGRhdGEucHVzaChldmVudC5kYXRhKTtcbiAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhPScsIGRhdGEpO1xuICAgIGNvbnN0IGJsb2JGb3JtYXQgPSBtaW1lVHlwZS5zcGxpdCgnOycpWzBdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdibG9iRm9ybWF0PScsIGJsb2JGb3JtYXQpO1xuICAgIGJsb2IgPSBuZXcgQmxvYihkYXRhLCB7IHR5cGU6IGJsb2JGb3JtYXQgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2Jsb2I9JywgYmxvYik7XG5cbiAgICBpZiAobWVzc2FnZS5uZWVkc0ZGTVBFRykge1xuICAgICAgY29udmVydFN0cmVhbXMoYmxvYiwgbWVzc2FnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlbmRCbG9iKGJsb2IsIG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGRhdGEgPSBbXTtcbiAgfTtcbiAgcmVjb3JkZXIuc3RhcnQoKTtcblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICdyZWNvcmRpbmcnO1xufVxuXG5mdW5jdGlvbiByZWNvcmRpbmdFcnJvcih0YWJJZCkge1xuICBjb25zdCBlcnJvck1zZyA9IHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVNob3dNYWluUGFuZWwnLFxuICAgIHRhYklkLFxuICB9O1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShlcnJvck1zZywgKGVycm9yUmVzcG9uc2UpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3JSZXNwb25zZScsIGVycm9yUmVzcG9uc2UpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIHJlY29yZGVyLnN0b3AoKTtcbiAgcmVjb3JkZXIuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHQpID0+IHQuc3RvcCgpKTtcbiAgcmVjb3JkZXIgPSB1bmRlZmluZWQ7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTdHJlYW1zKHZpZGVvQmxvYiwgbWVzc2FnZSkge1xuICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZpbGVSZWFkZXIub25sb2FkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCBpbnB1dEZpbGVOYW1lID0gYHNhbXBsZV92aWRlby53ZWJtYDtcbiAgICBsZXQgb3V0cHV0RmlsZU5hbWUgPSBgc2FtcGxlX3ZpZGVvLiR7bWVzc2FnZS5leHRlbnNpb259YDtcbiAgICBsZXQgY29tbWFuZFN0ciA9IGBmZm1wZWcgLWkgJHtpbnB1dEZpbGVOYW1lfWA7XG4gICAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIGNvbW1hbmRTdHIgKz0gYCAtYzp2IGNvcHlgO1xuICAgIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSBjb21tYW5kU3RyICs9IGAgLWM6YSAke21lc3NhZ2UuYXVkaW9Db2RlY30gLWI6YSAke21lc3NhZ2UuYXVkaW9CaXRzUGVyU2Vjb25kfWtgO1xuICAgIGNvbW1hbmRTdHIgKz0gYCAke291dHB1dEZpbGVOYW1lfWA7XG5cbiAgICBjb25zdCBibG9iID0gYXdhaXQgcnVuRkZtcGVnKGlucHV0RmlsZU5hbWUsIG91dHB1dEZpbGVOYW1lLCBjb21tYW5kU3RyLCBuZXcgVWludDhBcnJheSh0aGlzLnJlc3VsdCkpO1xuXG4gICAgc2VuZEJsb2IoYmxvYiwgbWVzc2FnZSk7XG5cbiAgICAvLyBjb25zdCB2aWRlb1VSTE1lc3NhZ2UgPSB7XG4gICAgLy8gICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMQmFja2dyb3VuZCcsXG4gICAgLy8gICB2aWRlb1VSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSxcbiAgICAvLyAgIGZpbGVOYW1lOiBkb3dubG9hZEZpbGVOYW1lLFxuICAgIC8vICAgdGFiSWQ6IG1lc3NhZ2UudGFiSWQsXG4gICAgLy8gICBtaW1lVHlwZTogYHZpZGVvLyR7ZG93bmxvYWRFeHRlbnNpb259YCxcbiAgICAvLyB9O1xuICAgIC8vIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHZpZGVvVVJMTWVzc2FnZSk7XG4gIH07XG4gIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodmlkZW9CbG9iKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcnVuRkZtcGVnKGlucHV0RmlsZU5hbWUsIG91dHB1dEZpbGVOYW1lLCBjb21tYW5kU3RyLCBmaWxlKSB7XG4gIGlmIChmZm1wZWcuaXNMb2FkZWQoKSkge1xuICAgIGF3YWl0IGZmbXBlZy5leGl0KCk7XG4gIH1cblxuICBhd2FpdCBmZm1wZWcubG9hZCgpO1xuXG4gIGNvbnN0IGNvbW1hbmRMaXN0ID0gY29tbWFuZFN0ci5zcGxpdCgnICcpO1xuICBpZiAoY29tbWFuZExpc3Quc2hpZnQoKSAhPT0gJ2ZmbXBlZycpIHtcbiAgICBhbGVydCgnUGxlYXNlIHN0YXJ0IHdpdGggZmZtcGVnJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZmZtcGVnLkZTKCd3cml0ZUZpbGUnLCBpbnB1dEZpbGVOYW1lLCBhd2FpdCBGRm1wZWcuZmV0Y2hGaWxlKGZpbGUpKTtcbiAgYXdhaXQgZmZtcGVnLnJ1biguLi5jb21tYW5kTGlzdCk7XG4gIGNvbnN0IGRhdGEgPSBmZm1wZWcuRlMoJ3JlYWRGaWxlJywgb3V0cHV0RmlsZU5hbWUpO1xuICAvLyBjb25zb2xlLmxvZygnZmZtcGVnIGRhdGEnLCBkYXRhKTtcblxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGEuYnVmZmVyXSk7XG4gIC8vIGNvbnNvbGUubG9nKCdmZm1wZWcgYmxvYicsIGJsb2IpO1xuICByZXR1cm4gYmxvYjtcbiAgLy8gZG93bmxvYWRGaWxlKGJsb2IsIG91dHB1dEZpbGVOYW1lKTtcbn1cblxuZnVuY3Rpb24gc2VuZEJsb2IoYmxvYiwgbWVzc2FnZSkge1xuICBjb25zdCB2aWRlb1VSTE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogJ3Njcm9sbENhcHR1cmVWaWRlb1VSTEJhY2tncm91bmQnLFxuICAgIHZpZGVvVVJMOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLFxuICAgIGZpbGVOYW1lOiBjcmVhdGVGaWxlbmFtZShtZXNzYWdlLmV4dGVuc2lvbiksXG4gICAgdGFiSWQ6IG1lc3NhZ2UudGFiSWQsXG4gICAgbWltZVR5cGU6IChtZXNzYWdlLmV4cG9ydFZpZGVvID8gJ3ZpZGVvJyA6ICdhdWRpbycpICsgJy8nICsgbWVzc2FnZS5leHRlbnNpb24sXG4gIH07XG4gIGNvbnNvbGUubG9nKCchISEhISEhIHNlbmRCbG9iJywgdmlkZW9VUkxNZXNzYWdlKTtcbiAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UodmlkZW9VUkxNZXNzYWdlKTtcbn1cbmZ1bmN0aW9uIGRvd25sb2FkRmlsZShibG9iLCBmaWxlTmFtZSkge1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBhLmRvd25sb2FkID0gZmlsZU5hbWU7XG4gIGEuY2xpY2soKTtcbn1cbiJdLCJuYW1lcyI6WyJ0aW1lQU1QTSIsImFkZExlYWRpbmdaZXJvIiwiY3JlYXRlRmlsZW5hbWUiLCJleHRlbnNpb24iLCJ0ZXh0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibmFtZSIsImNyZWF0ZUZpbGVuYW1lT25seSIsImRhdGUiLCJEYXRlIiwiYW1wbVRpbWUiLCJkYXRlRGF0YSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYW1wbSIsInRvVXBwZXJDYXNlIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JtYXRBTVBNIiwic3BhY2VCZXR3ZWVuIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsInRvVW5peFVUQ1N0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsImFkZEhvdXJzIiwic2V0VGltZSIsImdldFRpbWUiLCJhZGREYXlzIiwiZGF5cyIsIm1vbnRocyIsImVuIiwiZnIiLCJsYW5ndWFnZSIsImdldEFnZSIsImJpcnRoRGF0ZSIsInRvZGF5IiwiYWdlIiwibSIsInRyZWF0QXNVVEMiLCJyZXN1bHQiLCJzZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJtaW51dGVzQmV0d2VlbiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJtaWxsaXNlY29uZHNQZXJNaW51dGUiLCJob3Vyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJIb3VyIiwiZGF5c0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJEYXkiLCJ3ZWVrc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJXZWVrIiwibW9udGhzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1Blck1vbnRoIiwieWVhcnNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyWWVhciIsImdldEZhbWlsaWFyVGltZUJldHdlZW4iLCJ5ZWFyc0JldHdlZW5GbG9vciIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwibW9udGhzQmV0d2VlbkZsb29yIiwid2Vla3NCZXR3ZWVuRmxvb3IiLCJkYXlzQmV0d2VlbkZsb29yIiwiaG91cnNCZXR3ZWVuRmxvb3IiLCJtaW51dGVzQmV0d2VlbkZsb29yIiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwibWluIiwibWF4IiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZ2V0UmFuZG9tSW50SW5jbHVzaXZlIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJyYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UiLCJpc0V2ZW4iLCJ2YWx1ZSIsImlzT2RkIiwiaXNJbnRlZ2VyIiwiaXNQcmltZSIsInMiLCJzcXJ0IiwiaSIsImRlY2ltYWxUb1BsYWNlIiwicGxhY2UiLCJtZXRob2QiLCJwIiwicG93Iiwicm91bmQiLCJyb3VuZDEiLCJyb3VuZDIiLCJyb3VuZDMiLCJsb29wSW5kZXgiLCJpbmRleCIsImlzQmV0d2VlbiIsImZpcnN0VmFsdWUiLCJzZWNvbmRWYWx1ZSIsImNvbnN0cmFpbiIsImNyZWF0ZVN0ZXBzQmV0d2VlbiIsImJlZ2luIiwiZW5kIiwic3RlcHMiLCJzdGVwc0JldHdlZW4iLCJpbmNyZW1lbnQiLCJwdXNoIiwiaW50ZXJwb2xhdGUiLCJhbW91bnQiLCJtYXAiLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwibGVycCIsIm5vcm0iLCJnZXRXZWlnaHRlZEF2ZXJhZ2UiLCJkZXN0IiwibiIsImZvcm1hdCIsImtEZWxpbSIsIm1pbkxlbmd0aCIsImZpbGxDaGFyIiwiaXNOYU4iLCJyZW1haW5kZXIiLCJudW0iLCJsZW4iLCJhZGRDaGFyIiwidG90YWxEZWxpbSIsInRvdGFsUmVtYWluIiwibnVtU3BsaXQiLCJzcGxpdCIsInNwbGljZSIsInNoaWZ0Iiwiam9pbiIsInN1YnN0ciIsImZvcm1hdEN1cnJlbmN5IiwiZm9yY2VEZWNpbWFscyIsImN1cnJlbmN5IiwidG9GaXhlZCIsImdldE9yZGluYWxTdWZmaXgiLCJzcGVsbCIsIkVycm9yIiwib25lc1NwZWxsaW5ncyIsInRlbnNTcGVsbGluZ3MiLCJzcGVsbGluZyIsIm1pbGxpb25zIiwidGhvdXNhbmRzIiwiaHVuZHJlZHMiLCJ0ZW5zIiwib25lcyIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsInJnYlRvSGV4IiwicmdiIiwiciIsImciLCJiIiwiaGV4VG9SZ2IiLCJleGVjIiwicGFyc2VJbnQiLCJkZWdUb1JhZCIsImRlZ3JlZXMiLCJQSSIsInJhZFRvRGVnIiwicmFkIiwic21vb3Roc3RlcCIsIngiLCJhIiwidCIsIm1peCIsImNsYW1wIiwibW9kIiwibW9kV3JhcCIsInJhbmRvbTFEIiwic2VlZCIsInNpbiIsIm5vaXNlMUQiLCJmIiwidSIsInJhbmRvbVJhbmdlIiwicmFuZG9tSW50IiwibWFwQ2xhbXAiLCJzaW5lV2F2ZSIsImFuZ2xlIiwiZnJlcXVlbmN5IiwidGltZSIsInNwZWVkIiwiYW1wbGl0dWRlIiwiY2xhbXBUaW1lIiwic3RhcnRUaW1lIiwiZHVyYXRpb24iLCJlYXNlT3V0IiwidGFyZ2V0IiwiZnJpY3Rpb24iLCJzcHJpbmciLCJlbGFzdGljaXR5IiwicmVtb3ZlTXVsdGlwbGVSb3RhdGlvbnMiLCJjaXJjbGUiLCJoZXhDb2xvclN0cmluZ1RvTnVtYmVyIiwiTnVtYmVyIiwicmVwbGFjZSIsInJlY29yZGVyIiwiZGF0YSIsImJsb2IiLCJjdXJyZW50VGFiSWQiLCJmZm1wZWciLCJGRm1wZWciLCJjcmVhdGVGRm1wZWciLCJjb3JlUGF0aCIsImNocm9tZSIsInJ1bnRpbWUiLCJnZXRVUkwiLCJsb2ciLCJtYWluTmFtZSIsInNldFByb2dyZXNzIiwicGFyYW1zIiwiY29uc29sZSIsInNldExvZ2dlciIsInR5cGUiLCJtc2ciLCJsb2dUeXBlIiwibWVzc2FnZSIsInRhYklkIiwic2VuZE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNpemUiLCJ0YWJXaWR0aCIsInkiLCJ0YWJIZWlnaHQiLCJwaXhlbFJhdGlvIiwiY29uc3RyYWludHMiLCJtZWRpYSIsIm1lZGlhU291cmNlIiwiY29uc3RyYWludFNpemVzIiwid2lkdGgiLCJoZWlnaHQiLCJ6b29tTGV2ZWwiLCJzb3J0IiwiZXhwb3J0VmlkZW8iLCJ2aWRlbyIsIm1hbmRhdG9yeSIsImNocm9tZU1lZGlhU291cmNlIiwiY2hyb21lTWVkaWFTb3VyY2VJZCIsInN0cmVhbUlkIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5GcmFtZVJhdGUiLCJtYXhGcmFtZVJhdGUiLCJleHBvcnRBdWRpbyIsImF1ZGlvIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZXJyb3IiLCJkaXNwbGF5U3VyZmFjZSIsInN1cHByZXNzTG9jYWxBdWRpb1BsYXliYWNrIiwiYXV0b0dhaW5Db250cm9sIiwiZWNob0NhbmNlbGxhdGlvbiIsImdvb0F1dG9HYWluQ29udHJvbCIsIm5vaXNlU3VwcHJlc3Npb24iLCJwcmVmZXJDdXJyZW50VGFiIiwic2VsZkJyb3dzZXJTdXJmYWNlIiwic3lzdGVtQXVkaW8iLCJzdXJmYWNlU3dpdGNoaW5nIiwibW9uaXRvclR5cGVTdXJmYWNlcyIsImdldERpc3BsYXlNZWRpYSIsInJlY29yZGluZ0Vycm9yIiwidHJhY2tzIiwiZ2V0QXVkaW9UcmFja3MiLCJvdXRwdXQiLCJBdWRpb0NvbnRleHQiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJhdWRpb0NvZGVjIiwibmVlZHNGRk1QRUciLCJtaW1lVHlwZSIsInZpZGVvQ29kZWMiLCJ2aWRlb0JpdHNQZXJTZWNvbmQiLCJhdWRpb0JpdHNQZXJTZWNvbmQiLCJvcHRpb25zIiwiTWVkaWFSZWNvcmRlciIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50Iiwib25zdG9wIiwiYmxvYkZvcm1hdCIsIkJsb2IiLCJjb252ZXJ0U3RyZWFtcyIsInNlbmRCbG9iIiwic3RhcnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJlcnJvck1zZyIsImVycm9yUmVzcG9uc2UiLCJzdHJlYW0iLCJ2aWRlb0Jsb2IiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImlucHV0RmlsZU5hbWUiLCJvdXRwdXRGaWxlTmFtZSIsImNvbW1hbmRTdHIiLCJydW5GRm1wZWciLCJVaW50OEFycmF5IiwicmVhZEFzQXJyYXlCdWZmZXIiLCJmaWxlIiwiaXNMb2FkZWQiLCJleGl0IiwibG9hZCIsImNvbW1hbmRMaXN0IiwiYWxlcnQiLCJGUyIsImZldGNoRmlsZSIsInJ1biIsImJ1ZmZlciIsInZpZGVvVVJMTWVzc2FnZSIsInZpZGVvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiZmlsZU5hbWUiLCJkb3dubG9hZEZpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=