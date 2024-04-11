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
            minWidth: constraintSizes[0].width,
            minHeight: constraintSizes[0].height,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBLFNBQVNLLFlBQVlBLENBQUNuSSxJQUFJLEVBQUVrSSxRQUFRLEVBQUU7RUFDcEMsTUFBTXRLLENBQUMsR0FBR3dLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNyQ3pLLENBQUMsQ0FBQzBLLElBQUksR0FBR04sR0FBRyxDQUFDQyxlQUFlLENBQUNqSSxJQUFJLENBQUM7RUFDbENwQyxDQUFDLENBQUMySyxRQUFRLEdBQUdMLFFBQVE7RUFDckJ0SyxDQUFDLENBQUM0SyxLQUFLLENBQUMsQ0FBQztBQUNYLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9vZmZzY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGltZUFNUE0gfSBmcm9tICcuLi8uLi9saWIvdHN1bmFtaS91dGlscy9kYXRlJztcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvIH0gZnJvbSAnLi4vLi4vbGliL3RzdW5hbWkvdXRpbHMvbnVtYmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGVuYW1lKGV4dGVuc2lvbiwgdGV4dCA9ICdTY3JvbGxDYXB0dXJlJykge1xuICBjb25zdCBuYW1lID0gY3JlYXRlRmlsZW5hbWVPbmx5KHRleHQpO1xuICByZXR1cm4gYCR7bmFtZX0uJHtleHRlbnNpb259YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGVuYW1lT25seSh0ZXh0ID0gJ1Njcm9sbENhcHR1cmUnKSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IGFtcG1UaW1lID0gdGltZUFNUE0oZGF0ZSk7XG4gIGxldCBkYXRlRGF0YSA9IHtcbiAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGg6IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgIGRhdGU6IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgfTtcbiAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIGAke3RleHR9ICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfWA7XG59XG4iLCJpbXBvcnQge2FkZExlYWRpbmdaZXJvfSBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBTVBNKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGxldCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRsZXQgc2Vjb25kcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbXBtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUsIHNwYWNlQmV0d2VlbiA9IFwiXCIpIHtcblx0bGV0IGRhdGVEYXRhID0gdGltZUFNUE0oZGF0ZSk7XG5cdGxldCBzdHJUaW1lID0gZGF0ZURhdGEuaG91cnMgKyAnOicgKyBkYXRlRGF0YS5taW51dGVzICsgc3BhY2VCZXR3ZWVuICsgYW1wbTtcblx0cmV0dXJuIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFVUQ1N0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0RhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDSG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG91cnMoZGF0ZSwgaG91cnMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgbGV0IG1vbnRocyA9IHtcblx0ZW46W1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdGZyOltcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIiwgXCJKdWlsbGV0XCIsIFwiQW/Du3RcIiwgXCJTZXB0ZW1icmVcIiwgXCJPY3RvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEw6ljZW1icmVcIl1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlLCBsYW5ndWFnZSkge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0bGFuZ3VhZ2UgPSBcImVuXCI7XG5cdH1cblx0bGV0IG1vbnRoO1xuXHRzd2l0Y2gobGFuZ3VhZ2UpIHtcblx0XHRjYXNlIFwiZW5cIjpcblx0XHRcdG1vbnRoID0gbW9udGhzW2xhbmd1YWdlXVtkYXRlLmdldE1vbnRoKCldO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIG1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGJpcnRoRGF0ZSkge1xuXHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0aWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0YWdlLS07XG5cdH1cblx0cmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWF0QXNVVEMoZGF0ZSkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG5cdHJlc3VsdC5zZXRNaW51dGVzKHJlc3VsdC5nZXRNaW51dGVzKCkgLSByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1pbnV0ZSA9IDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckhvdXIgPSA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckhvdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1vbnRoID0gMzY1IC8gMTIgICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyWWVhciA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJZZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IHRleHQgPSBcIlwiO1xuXHRsZXQgeWVhcnNCZXR3ZWVuID0geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdGlmICh5ZWFyc0JldHdlZW4gPj0gMSkge1xuXHRcdGxldCB5ZWFyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoeWVhcnNCZXR3ZWVuKTtcblx0XHRpZiAoeWVhcnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXJzIGFnb1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXIgYWdvXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGxldCBtb250aHNCZXR3ZWVuID0gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdGlmIChtb250aHNCZXR3ZWVuID49IDEpIHtcblx0XHRcdGxldCBtb250aHNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1vbnRoc0JldHdlZW4pO1xuXHRcdFx0aWYgKG1vbnRoc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGhzIGFnb1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGggYWdvXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB3ZWVrc0JldHdlZW4gPSB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdGlmICh3ZWVrc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRsZXQgd2Vla3NCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHdlZWtzQmV0d2Vlbik7XG5cdFx0XHRcdGlmICh3ZWVrc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWtzIGFnb1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2VlayBhZ29cIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuID0gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRsZXQgZGF5c0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoZGF5c0JldHdlZW4pO1xuXHRcdFx0XHRcdGlmIChkYXlzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheXMgYWdvXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXkgYWdvXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW4gPSBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoaG91cnNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VycyBhZ29cIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91ciBhZ29cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuID0gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1pbnV0ZXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZSBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IFwiSnVzdCBub3dcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59IiwiLy8gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChleGNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChpbmNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgbWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBldmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW47IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0V2ZW4oNykpOyAvLyBUcmFjZXMgZmFsc2VcbiBjb25zb2xlLmxvZyhpc0V2ZW4oMTIpKTsgLy8gVHJhY2VzIHRydWVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW4odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmIDEpID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAxID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgcHJpbWUuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBvbmx5IGRpdmlzaWJsZSBieSA8Y29kZT4xPC9jb2RlPiBhbmQgaXRzZWxmLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIHByaW1lOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNQcmltZSgxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzUHJpbWUoNCkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1lKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gMSB8fCB2YWx1ZSA9PT0gMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzRXZlbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzID0gTWF0aC5zcXJ0KHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDM7IGkgPD0gczsgaSsrKSB7XG4gICAgaWYgKHZhbHVlICUgaSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiBSb3VuZHMgYSBudW1iZXIncyBkZWNpbWFsIHZhbHVlIHRvIGEgc3BlY2lmaWMgcGxhY2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgdG8gcm91bmQuXG4gQHBhcmFtIHBsYWNlOiBUaGUgZGVjaW1hbCBwbGFjZSB0byByb3VuZC5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHZhbHVlIHJvdW5kZWQgdG8gdGhlIGRlZmluZWQgcGxhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMikpOyAvLyBUcmFjZXMgMy4xNFxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAzKSk7IC8vIFRyYWNlcyAzLjE0MlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEsIG1ldGhvZCA9IG51bGwpIHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG4gIGlmICghbWV0aG9kKSBtZXRob2QgPSBNYXRoLnJvdW5kO1xuICByZXR1cm4gbWV0aG9kKHZhbHVlICogcCkgLyBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQxKHZhbHVlKSB7XG4gIHJldHVybiBkZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDIodmFsdWUpIHtcbiAgcmV0dXJuIGRlY2ltYWxUb1BsYWNlKHZhbHVlLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMyh2YWx1ZSkge1xuICByZXR1cm4gZGVjaW1hbFRvUGxhY2UodmFsdWUsIDMpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIGluZGV4IGlzIGluY2x1ZGVkIHdpdGhpbiB0aGUgY29sbGVjdGlvbiBsZW5ndGggb3RoZXJ3aXNlIHRoZSBpbmRleCBsb29wcyB0byB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgcmFuZ2UgYW5kIGNvbnRpbnVlcy5cblxuIEBwYXJhbSBpbmRleDogU2hvcCB0byBsb29wIGlmIG5lZWRlZC5cbiBAcGFyYW0gbGVuZ3RoOiBUaGUgdG90YWwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gQHJldHVybiBBIHZhbGlkIHplcm8tYmFzZWQgaW5kZXguXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YXIgY29sb3JzOkFycmF5ID0gbmV3IEFycmF5KFwiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIpO1xuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDIsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBCbHVlXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDQsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBHcmVlblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgtNiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIFJlZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3BJbmRleChpbmRleCwgbGVuZ3RoKSB7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IGxlbmd0aCArIChpbmRleCAlIGxlbmd0aCk7XG4gIH1cblxuICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSB2YWx1ZSBpcyBpbmNsdWRlZCB3aXRoaW4gYSByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgZmFsbHMgd2l0aGluIHRoZSByYW5nZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAdXNhZ2VOb3RlIFRoZSByYW5nZSB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzQmV0d2Vlbig3LCAwLCA1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2Vlbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuICEodmFsdWUgPCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkgfHwgdmFsdWUgPiBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHZhbHVlIGZhbGxzIHdpdGhpbiBhIHJhbmdlOyBpZiBub3QgaXQgaXMgc25hcHBlZCB0byB0aGUgbmVhcmVzdCByYW5nZSB2YWx1ZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIGVpdGhlciB0aGUgbnVtYmVyIGFzIHBhc3NlZCwgb3IgaXRzIHZhbHVlIG9uY2Ugc25hcHBlZCB0byBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuIEB1c2FnZU5vdGUgVGhlIGNvbnN0cmFpbnQgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY29uc3RyYWluKDMsIDAsIDUpKTsgLy8gVHJhY2VzIDNcbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cmFpbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpLCBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpO1xufVxuXG4vKipcbiBDcmVhdGVzIGV2ZW5seSBzcGFjZWQgbnVtZXJpY2FsIGluY3JlbWVudHMgYmV0d2VlbiB0d28gbnVtYmVycy5cblxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQHBhcmFtIHN0ZXBzOiBUaGUgbnVtYmVyIG9mIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIGFuIEFycmF5IGNvbXByaXNlZCBvZiB0aGUgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDAsIDUsIDQpKTsgLy8gVHJhY2VzIDEsMiwzLDRcbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMSwgMywgMykpOyAvLyBUcmFjZXMgMS41LDIsMi41XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RlcHNCZXR3ZWVuKGJlZ2luLCBlbmQsIHN0ZXBzKSB7XG4gIHN0ZXBzKys7XG5cbiAgbGV0IGkgPSAwO1xuICBjb25zdCBzdGVwc0JldHdlZW4gPSBbXTtcbiAgY29uc3QgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG4gIHdoaWxlICgrK2kgPCBzdGVwcykge1xuICAgIHN0ZXBzQmV0d2Vlbi5wdXNoKGkgKiBpbmNyZW1lbnQgKyBiZWdpbik7XG4gIH1cblxuICByZXR1cm4gc3RlcHNCZXR3ZWVuO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgdmFsdWUgYmV0d2VlbiB0d28gc3BlY2lmaWVkIHZhbHVlcy5cblxuIEBwYXJhbSBhbW91bnQ6IFRoZSBsZXZlbCBvZiBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuIElmIDxjb2RlPjA8L2NvZGU+LCA8Y29kZT5iZWdpbjwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQ7IGlmIDxjb2RlPjE8L2NvZGU+LCA8Y29kZT5lbmQ8L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkLlxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpbnRlcnBvbGF0ZSgwLjUsIDAsIDEwKSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYW1vdW50LCBiZWdpbiwgZW5kKSB7XG4gIHJldHVybiBiZWdpbiArIChlbmQgLSBiZWdpbikgKiBhbW91bnQ7XG59XG5cbi8qKlxuIERldGVybWluZXMgYSBwZXJjZW50YWdlIG9mIGEgdmFsdWUgaW4gYSBnaXZlbiByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZC5cbiBAcGFyYW0gbWluaW11bTogVGhlIGxvd2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gbWF4aW11bTogVGhlIHVwcGVyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG5vcm1hbGl6ZSg4LCA0LCAyMCkuZGVjaW1hbFBlcmNlbnRhZ2UpOyAvLyBUcmFjZXMgMC4yNVxuIDwvY29kZT5cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgbWluaW11bSwgbWF4aW11bSkge1xuLy8gICByZXR1cm4gbmV3IFBlcmNlbnQoKHZhbHVlIC0gbWluaW11bSkgLyAobWF4aW11bSAtIG1pbmltdW0pKTtcbi8vIH1cblxuLyoqXG4gTWFwcyBhIHZhbHVlIGZyb20gb25lIGNvb3JkaW5hdGUgc3BhY2UgdG8gYW5vdGhlci5cblxuIEBwYXJhbSB2YWx1ZTogVmFsdWUgZnJvbSB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZSB0byBtYXAgdG8gdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4xOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MTogRW5kaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4yOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDI6IEVuZGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhtYXAoMC43NSwgMCwgMSwgMCwgMTAwKSk7IC8vIFRyYWNlcyA3NVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gbGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4Mik7XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4vLyBcdHJldHVybiBtaW4yICsgKG1heDIgLSBtaW4yKSAqICgodmFsdWUgLSBtaW4xKSAvIChtYXgxIC0gbWluMSkpO1xuLy8gfVxuXG4vKipcbiBMb3cgcGFzcyBmaWx0ZXIgYWxvZ3JpdGhtIGZvciBlYXNpbmcgYSB2YWx1ZSB0b3dhcmQgYSBkZXN0aW5hdGlvbiB2YWx1ZS4gV29ya3MgYmVzdCBmb3IgdHdlZW5pbmcgdmFsdWVzIHdoZW4gbm8gZGVmaW5pdGUgdGltZSBkdXJhdGlvbiBleGlzdHMgYW5kIHdoZW4gdGhlIGRlc3RpbmF0aW9uIHZhbHVlIGNoYW5nZXMuXG5cbiBJZiA8Y29kZT4oMC41IDwgbiA8IDEpPC9jb2RlPiwgdGhlbiB0aGUgcmVzdWx0aW5nIHZhbHVlcyB3aWxsIG92ZXJzaG9vdCAocGluZy1wb25nKSB1bnRpbCB0aGV5IHJlYWNoIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZS4gV2hlbiA8Y29kZT5uPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gMSwgYXMgaXRzIHZhbHVlIGluY3JlYXNlcywgdGhlIHRpbWUgaXQgdGFrZXMgdG8gcmVhY2ggdGhlIGRlc3RpbmF0aW9uIGFsc28gaW5jcmVhc2VzLiBBIHBsZWFzaW5nIHZhbHVlIGZvciA8Y29kZT5uPC9jb2RlPiBpcyA1LlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZS5cbiBAcGFyYW0gZGVzdDogVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuIEBwYXJhbSBuOiBUaGUgc2xvd2Rvd24gZmFjdG9yLlxuIEByZXR1cm4gVGhlIHdlaWdodGVkIGF2ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRlZEF2ZXJhZ2UodmFsdWUsIGRlc3QsIG4pIHtcbiAgcmV0dXJuIHZhbHVlICsgKGRlc3QgLSB2YWx1ZSkgLyBuO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIlwiPC9jb2RlPi5cbiBAcGFyYW0gbWluTGVuZ3RoOiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIG51bWJlcjsgZGVmYXVsdHMgdG8gPGNvZGU+MCA8L2NvZGU+LlxuIEBwYXJhbSBmaWxsQ2hhcjogVGhlIGxlYWRpbmcgY2hhcmFjdGVyIHVzZWQgdG8gbWFrZSB0aGUgbnVtYmVyIHRoZSBtaW5pbXVtIGxlbmd0aDsgZGVmYXVsdHMgdG8gPGNvZGU+XCIwXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdCgxMjM0NTY3LCBcIixcIiwgOCkpOyAvLyBUcmFjZXMgMDEsMjM0LDU2N1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwga0RlbGltLCBtaW5MZW5ndGgsIGZpbGxDaGFyKSB7XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gJywnO1xuICB9XG4gIGlmIChpc05hTihtaW5MZW5ndGgpKSB7XG4gICAgbWluTGVuZ3RoID0gMDtcbiAgfVxuICBpZiAoIWZpbGxDaGFyKSB7XG4gICAgZmlsbENoYXIgPSAnMCc7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcbiAgY29uc3QgbGVuID0gbnVtLmxlbmd0aDtcblxuICBpZiAobWluTGVuZ3RoICE9PSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuICAgIG1pbkxlbmd0aCAtPSBsZW47XG5cbiAgICBjb25zdCBhZGRDaGFyID0gZmlsbENoYXIgfHwgJzAnO1xuXG4gICAgd2hpbGUgKG1pbkxlbmd0aC0tKSB7XG4gICAgICBudW0gPSBhZGRDaGFyICsgbnVtO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrRGVsaW0gIT09IG51bGwgJiYgbnVtLmxlbmd0aCA+IDMpIHtcbiAgICBjb25zdCB0b3RhbERlbGltID0gTWF0aC5mbG9vcihudW0ubGVuZ3RoIC8gMyk7XG4gICAgY29uc3QgdG90YWxSZW1haW4gPSBudW0ubGVuZ3RoICUgMztcbiAgICBjb25zdCBudW1TcGxpdCA9IG51bS5zcGxpdCgnJyk7XG4gICAgbGV0IGkgPSAtMTtcblxuICAgIHdoaWxlICgrK2kgPCB0b3RhbERlbGltKSB7XG4gICAgICBudW1TcGxpdC5zcGxpY2UodG90YWxSZW1haW4gKyA0ICogaSwgMCwga0RlbGltKTtcbiAgICB9XG5cbiAgICBpZiAodG90YWxSZW1haW4gPT09IDApIHtcbiAgICAgIG51bVNwbGl0LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgbnVtID0gbnVtU3BsaXQuam9pbignJyk7XG4gIH1cblxuICBpZiAocmVtYWluZGVyICE9PSAwKSB7XG4gICAgbnVtICs9IHJlbWFpbmRlci50b1N0cmluZygpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuICBpZiAoZm9yY2VEZWNpbWFscyA9PT0gbnVsbCkge1xuICAgIGZvcmNlRGVjaW1hbHMgPSB0cnVlO1xuICB9XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gJywnO1xuICB9XG4gIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMTtcbiAgbGV0IGN1cnJlbmN5ID0gZm9ybWF0KE1hdGguZmxvb3IodmFsdWUpLCBrRGVsaW0pO1xuXG4gIGlmIChyZW1haW5kZXIgIT09IDAgfHwgZm9yY2VEZWNpbWFscykge1xuICAgIGN1cnJlbmN5ICs9IHJlbWFpbmRlci50b0ZpeGVkKDIpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeTtcbn1cblxuLyoqXG4gRmluZHMgdGhlIGVuZ2xpc2ggb3JkaW5hbCBzdWZmaXggZm9yIHRoZSBudW1iZXIgZ2l2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBmaW5kIHRoZSBvcmRpbmFsIHN1ZmZpeCBvZi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHN1ZmZpeCBmb3IgdGhlIG51bWJlciwgMiBjaGFyYWN0ZXJzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coMzIgKyBnZXRPcmRpbmFsU3VmZml4KDMyKSk7IC8vIFRyYWNlcyAzMm5kXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPj0gMTAgJiYgdmFsdWUgPD0gMjApIHtcbiAgICByZXR1cm4gJ3RoJztcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUgJSAxMCkge1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAncmQnO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAnbmQnO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnc3QnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3RoJztcbiAgfVxufVxuXG4vKipcbiBBZGRzIGEgbGVhZGluZyB6ZXJvIGZvciBudW1iZXJzIGxlc3MgdGhhbiB0ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBhZGQgbGVhZGluZyB6ZXJvLlxuIEByZXR1cm4gTnVtYmVyIGFzIGEgU3RyaW5nOyBpZiB0aGUgbnVtYmVyIHdhcyBsZXNzIHRoYW4gdGVuIHRoZSBudW1iZXIgd2lsbCBoYXZlIGEgbGVhZGluZyB6ZXJvLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oNykpOyAvLyBUcmFjZXMgMDdcbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybygxMSkpOyAvLyBUcmFjZXMgMTFcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVybyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAxMCA/ICcwJyArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gU3BlbGxzIHRoZSBwcm92aWRlZCBudW1iZXIuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBzcGVsbC4gTmVlZHMgdG8gYmUgbGVzcyB0aGFuIDk5OTk5OTk5OS5cbiBAcmV0dXJuIFRoZSBudW1iZXIgc3BlbGxlZCBvdXQgYXMgYSBTdHJpbmcuXG4gQHRocm93cyA8Y29kZT5FcnJvcjwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiA5OTk5OTk5OTkuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhzcGVsbCgwKSk7IC8vIFRyYWNlcyBaZXJvXG4gY29uc29sZS5sb2coc3BlbGwoMjMpKTsgLy8gVHJhY2VzIFR3ZW50eS1UaHJlZVxuIGNvbnNvbGUubG9nKHNwZWxsKDIwMDU2NzgpKTsgLy8gVHJhY2VzIFR3byBNaWxsaW9uLCBGaXZlIFRob3VzYW5kLCBTaXggSHVuZHJlZCBTZXZlbnR5LUVpZ2h0XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlbGwodmFsdWUpIHtcbiAgaWYgKHZhbHVlID4gOTk5OTk5OTk5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSB0b28gbGFyZ2UgZm9yIHRoaXMgbWV0aG9kLicpO1xuICB9XG5cbiAgY29uc3Qgb25lc1NwZWxsaW5ncyA9IFtcbiAgICAnJyxcbiAgICAnT25lJyxcbiAgICAnVHdvJyxcbiAgICAnVGhyZWUnLFxuICAgICdGb3VyJyxcbiAgICAnRml2ZScsXG4gICAgJ1NpeCcsXG4gICAgJ1NldmVuJyxcbiAgICAnRWlnaHQnLFxuICAgICdOaW5lJyxcbiAgICAnVGVuJyxcbiAgICAnRWxldmVuJyxcbiAgICAnVHdlbHZlJyxcbiAgICAnVGhpcnRlZW4nLFxuICAgICdGb3VydGVlbicsXG4gICAgJ0ZpZnRlZW4nLFxuICAgICdTaXh0ZWVuJyxcbiAgICAnU2V2ZW50ZWVuJyxcbiAgICAnRWlnaHRlZW4nLFxuICAgICdOaW5ldGVlbicsXG4gIF07XG4gIGNvbnN0IHRlbnNTcGVsbGluZ3MgPSBbJycsICcnLCAnVHdlbnR5JywgJ1RoaXJ0eScsICdGb3J0eScsICdGaWZ0eScsICdTaXh0eScsICdTZXZlbnR5JywgJ0VpZ2h0eScsICdOaW5ldHknXTtcbiAgbGV0IHNwZWxsaW5nID0gJyc7XG5cbiAgY29uc3QgbWlsbGlvbnMgPSB2YWx1ZSAvIDEwMDAwMDA7XG4gIHZhbHVlICU9IDEwMDAwMDA7XG5cbiAgY29uc3QgdGhvdXNhbmRzID0gdmFsdWUgLyAxMDAwO1xuICB2YWx1ZSAlPSAxMDAwO1xuXG4gIGNvbnN0IGh1bmRyZWRzID0gdmFsdWUgLyAxMDA7XG4gIHZhbHVlICU9IDEwMDtcblxuICBjb25zdCB0ZW5zID0gdmFsdWUgLyAxMDtcbiAgdmFsdWUgJT0gMTA7XG5cbiAgY29uc3Qgb25lcyA9IHZhbHVlICUgMTA7XG5cbiAgaWYgKG1pbGxpb25zICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gJycgOiAnLCAnO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKG1pbGxpb25zKSArICcgTWlsbGlvbic7XG4gIH1cblxuICBpZiAodGhvdXNhbmRzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gJycgOiAnLCAnO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKHRob3VzYW5kcykgKyAnIFRob3VzYW5kJztcbiAgfVxuXG4gIGlmIChodW5kcmVkcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/ICcnIDogJywgJztcbiAgICBzcGVsbGluZyArPSBzcGVsbChodW5kcmVkcykgKyAnIEh1bmRyZWQnO1xuICB9XG5cbiAgaWYgKHRlbnMgIT09IDAgfHwgb25lcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/ICcnIDogJyAnO1xuXG4gICAgaWYgKHRlbnMgPCAyKSB7XG4gICAgICBzcGVsbGluZyArPSBvbmVzU3BlbGxpbmdzW3RlbnMgKiAxMCArIG9uZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVsbGluZyArPSB0ZW5zU3BlbGxpbmdzW3RlbnNdO1xuXG4gICAgICBpZiAob25lcyAhPT0gMCkge1xuICAgICAgICBzcGVsbGluZyArPSAnLScgKyBvbmVzU3BlbGxpbmdzW29uZXNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzcGVsbGluZy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1plcm8nO1xuICB9XG5cbiAgcmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFRvSGV4KHJnYi5yKSArIGNvbXBvbmVudFRvSGV4KHJnYi5nKSArIGNvbXBvbmVudFRvSGV4KHJnYi5iKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdFxuICAgID8ge1xuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAncjonICsgdGhpcy5yICsgJyxnOicgKyB0aGlzLmcgKyAnLGI6JyArIHRoaXMuYjtcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKSB7XG4gIHJldHVybiAoZGVncmVlcyAqIE1hdGguUEkpIC8gMTgwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFkVG9EZWcocmFkKSB7XG4gIHJldHVybiAocmFkICogMTgwKSAvIE1hdGguUEk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhzdGVwKHZhbHVlLCBtaW4sIG1heCkge1xuICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSk7XG4gIHJldHVybiB4ICogeCAqICgzIC0gMiAqIHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gIHJldHVybiBhICsgdCAqIChiIC0gYSk7XG4gIC8vIHJldHVybiBhKDEtdCkgKyBidFxuICAvL3JldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4KGEsIGIsIHQpIHtcbiAgcmV0dXJuIGxlcnAoYSwgYiwgdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZChuLCBtKSB7XG4gIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9hIG1vZHVsbyBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgbmVnYXRpdmVzIG51bWJlcnMgJ2NvcnJlY3RseSdcbmV4cG9ydCBmdW5jdGlvbiBtb2RXcmFwKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL3JhbmRvbSB3aXRoIHNlZWQsIHJldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tMUQoc2VlZCkge1xuICByZXR1cm4gbW9kV3JhcChNYXRoLnNpbihzZWVkKSAqIDQzNzU4LjU0NTMsIDEpO1xufVxuXG4vL3JldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gbm9pc2UxRCh4KSB7XG4gIGNvbnN0IGkgPSBNYXRoLmZsb29yKHgpO1xuICBjb25zdCBmID0gbW9kV3JhcCh4LCAxKTtcbiAgY29uc3QgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbGVycCh1LCByYW5kb20xRChpKSwgcmFuZG9tMUQoaSArIDEuMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcENsYW1wKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBjbGFtcChsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKSwgbWluMiwgbWF4Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5lV2F2ZShhbmdsZSA9IDAsIGZyZXF1ZW5jeSA9IE1hdGguUEksIHRpbWUgPSAwLCBzcGVlZCA9IDEsIGFtcGxpdHVkZSA9IDEpIHtcbiAgcmV0dXJuIE1hdGguc2luKGFuZ2xlICogZnJlcXVlbmN5ICsgdGltZSAqIHNwZWVkKSAqIGFtcGxpdHVkZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wVGltZSh0aW1lLCBzdGFydFRpbWUsIGR1cmF0aW9uKSB7XG4gIHJldHVybiBjbGFtcCh0aW1lIC0gc3RhcnRUaW1lLCAwLjAsIGR1cmF0aW9uKSAvIGR1cmF0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgZWFzZSB2YWx1ZVxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFsdWUgKz0gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbik7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbiA9IDAuMSkge1xuICByZXR1cm4gKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHBhcmFtIHNwZWVkOiBUaGUgY3VycmVudCBzcGVlZFxuIEBwYXJhbSBlbGFzdGljaXR5OiBUaGUgZWxhc3RpY2l0eSBmcm9tIDAgdG8gMVxuIEByZXR1cm4gVGhlIG5ldyBzcGVlZCB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHNwZWVkID0gc3ByaW5nKHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uLCBzcGVlZCwgZWxhc3RpY2l0eSk7XG4gdmFsdWUgKz0gc3BlZWQ7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByaW5nKHZhbHVlLCB0YXJnZXQgPSAwLCBmcmljdGlvbiA9IDAuMSwgc3BlZWQgPSAwLCBlbGFzdGljaXR5ID0gMCkge1xuICByZXR1cm4gc3BlZWQgKiBlbGFzdGljaXR5ICsgKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTXVsdGlwbGVSb3RhdGlvbnMoYW5nbGUpIHtcbiAgY29uc3QgY2lyY2xlID0gTWF0aC5QSSAqIDI7XG4gIHdoaWxlIChhbmdsZSA+IGNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSAtPSBjaXJjbGU7XG4gIH1cbiAgd2hpbGUgKGFuZ2xlIDwgLWNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSArPSBjaXJjbGU7XG4gIH1cbiAgcmV0dXJuIGFuZ2xlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4Q29sb3JTdHJpbmdUb051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlLnJlcGxhY2UoJyMnLCAnMHgnKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUZpbGVuYW1lLCBjcmVhdGVGaWxlbmFtZU9ubHkgfSBmcm9tICcuL21vZGVsL3V0aWxzJztcblxubGV0IHJlY29yZGVyO1xubGV0IGRhdGEgPSBbXTtcbmxldCBibG9iO1xubGV0IGN1cnJlbnRUYWJJZDtcblxuY29uc3QgZmZtcGVnID0gRkZtcGVnLmNyZWF0ZUZGbXBlZyh7XG4gIGNvcmVQYXRoOiBjaHJvbWUucnVudGltZS5nZXRVUkwoJ2ZmbXBlZy1jb3JlLmpzJyksXG4gIGxvZzogZmFsc2UsXG4gIG1haW5OYW1lOiAnbWFpbicsXG59KTtcbi8vIGNvbnNvbGUubG9nKCdmZm1wZWcnLCBmZm1wZWcpO1xuXG5mZm1wZWcuc2V0UHJvZ3Jlc3MoKHBhcmFtcykgPT4ge1xuICBjb25zb2xlLmxvZygncHJvZ3Jlc3M6JywgcGFyYW1zKTtcbn0pO1xuXG5mZm1wZWcuc2V0TG9nZ2VyKChwYXJhbXMpID0+IHtcbiAgc3dpdGNoIChwYXJhbXMudHlwZSkge1xuICAgIGNhc2UgJ2ZmZXJyJzpcbiAgICAvLyBjYXNlICdpbmZvJzpcbiAgICBjYXNlICdmZm91dCc6XG4gICAgICBjb25zdCBtc2cgPSB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9TVycsXG4gICAgICAgIGxvZ1R5cGU6IHBhcmFtcy50eXBlLFxuICAgICAgICBtZXNzYWdlOiBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgdGFiSWQ6IGN1cnJlbnRUYWJJZCxcbiAgICAgIH07XG4gICAgICAvLyBjb25zb2xlLmxvZygnb2Zmc2NyZWVuIG1zZycsIG1zZyk7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtc2cpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHtcbiAgaWYgKG1lc3NhZ2UudGFyZ2V0ID09PSAnb2Zmc2NyZWVuJykge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnOlxuICAgICAgICBzdGFydFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcE9mZnNjcmVlblJlY29yZGluZyc6XG4gICAgICAgIHN0b3BSZWNvcmRpbmcobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgbWVzc2FnZTonLCBtZXNzYWdlLnR5cGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgY3VycmVudFRhYklkID0gbWVzc2FnZS50YWJJZDtcblxuICBpZiAocmVjb3JkZXI/LnN0YXRlID09PSAncmVjb3JkaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignQ2FsbGVkIHN0YXJ0UmVjb3JkaW5nIHdoaWxlIHJlY29yZGluZyBpcyBpbiBwcm9ncmVzcy4nKTtcbiAgfVxuICBjb25zb2xlLmxvZygnc3RhcnRSZWNvcmRpbmcnLCBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gIGNvbnN0IHNpemUgPSB7IHg6IG1lc3NhZ2UudGFiV2lkdGgsIHk6IG1lc3NhZ2UudGFiSGVpZ2h0IH07XG4gIGNvbnN0IHBpeGVsUmF0aW8gPSBtZXNzYWdlLnBpeGVsUmF0aW87XG4gIGxldCBjb25zdHJhaW50cyA9IHt9O1xuICBsZXQgbWVkaWE7XG5cbiAgc3dpdGNoIChtZXNzYWdlLm1lZGlhU291cmNlKSB7XG4gICAgY2FzZSAndGFiJzpcbiAgICAgIGNvbnN0IGNvbnN0cmFpbnRTaXplcyA9IFtcbiAgICAgICAgeyB3aWR0aDogTWF0aC5mbG9vcihzaXplLngpLCBoZWlnaHQ6IE1hdGguZmxvb3Ioc2l6ZS55KSB9LFxuICAgICAgICB7IHdpZHRoOiBNYXRoLmZsb29yKHNpemUueCAqIG1lc3NhZ2Uuem9vbUxldmVsKSwgaGVpZ2h0OiBNYXRoLmZsb29yKHNpemUueSAqIG1lc3NhZ2Uuem9vbUxldmVsKSB9LFxuICAgICAgICB7IHdpZHRoOiBNYXRoLmZsb29yKHNpemUueCAqIHBpeGVsUmF0aW8pLCBoZWlnaHQ6IE1hdGguZmxvb3Ioc2l6ZS55ICogcGl4ZWxSYXRpbykgfSxcbiAgICAgIF07XG4gICAgICBjb25zdHJhaW50U2l6ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICByZXR1cm4gYS53aWR0aCAqIGEuaGVpZ2h0IC0gYi53aWR0aCAqIGIuaGVpZ2h0O1xuICAgICAgfSk7XG4gICAgICBjb25zb2xlLmxvZygnY29uc3RyYWludFNpemVzJywgY29uc3RyYWludFNpemVzKTtcblxuICAgICAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICAgICAgY29uc3RyYWludHMudmlkZW8gPSB7XG4gICAgICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogbWVzc2FnZS5tZWRpYVNvdXJjZSxcbiAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICAgICAgICBtaW5XaWR0aDogY29uc3RyYWludFNpemVzWzBdLndpZHRoLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiBjb25zdHJhaW50U2l6ZXNbMF0uaGVpZ2h0LFxuICAgICAgICAgICAgbWF4V2lkdGg6IGNvbnN0cmFpbnRTaXplc1syXS53aWR0aCxcbiAgICAgICAgICAgIG1heEhlaWdodDogY29uc3RyYWludFNpemVzWzJdLmhlaWdodCxcbiAgICAgICAgICAgIG1pbkZyYW1lUmF0ZTogMzAsXG4gICAgICAgICAgICBtYXhGcmFtZVJhdGU6IDYwLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgICAgICBjb25zdHJhaW50cy5hdWRpbyA9IHtcbiAgICAgICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgICAgIGNocm9tZU1lZGlhU291cmNlOiBtZXNzYWdlLm1lZGlhU291cmNlLFxuICAgICAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhJywgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1lZGlhID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhIGVycm9yJywgZXJyb3IpO1xuICAgICAgfVxuXG4gICAgICBicmVhaztcbiAgICBjYXNlICdkZXNrdG9wJzpcbiAgICBkZWZhdWx0OlxuICAgICAgLy8gbWVzc2FnZS5leHBvcnRBdWRpbyA9IGZhbHNlO1xuICAgICAgY29uc3RyYWludHMgPSB7XG4gICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgZGlzcGxheVN1cmZhY2U6ICdtb25pdG9yJyxcbiAgICAgICAgfSxcbiAgICAgICAgYXVkaW86IHtcbiAgICAgICAgICBzdXBwcmVzc0xvY2FsQXVkaW9QbGF5YmFjazogdHJ1ZSxcbiAgICAgICAgICBhdXRvR2FpbkNvbnRyb2w6IGZhbHNlLFxuICAgICAgICAgIGVjaG9DYW5jZWxsYXRpb246IGZhbHNlLFxuICAgICAgICAgIGdvb0F1dG9HYWluQ29udHJvbDogZmFsc2UsXG4gICAgICAgICAgbm9pc2VTdXBwcmVzc2lvbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZlckN1cnJlbnRUYWI6IGZhbHNlLFxuICAgICAgICBzZWxmQnJvd3NlclN1cmZhY2U6ICdleGNsdWRlJyxcbiAgICAgICAgc3lzdGVtQXVkaW86ICdpbmNsdWRlJyxcbiAgICAgICAgc3VyZmFjZVN3aXRjaGluZzogJ2luY2x1ZGUnLFxuICAgICAgICBtb25pdG9yVHlwZVN1cmZhY2VzOiAnaW5jbHVkZScsXG4gICAgICB9O1xuICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhJywgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1lZGlhID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXREaXNwbGF5TWVkaWEoY29uc3RyYWludHMpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0RGlzcGxheU1lZGlhIGVycm9yJywgZXJyb3IpO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gIH1cblxuICBjb25zb2xlLmxvZygnbWVkaWE9JywgbWVkaWEpO1xuICBpZiAoIW1lZGlhKSB7XG4gICAgY29uc29sZS5sb2coJyEhISFObyBtZWRpYScpO1xuICAgIHJlY29yZGluZ0Vycm9yKG1lc3NhZ2UudGFiSWQpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHRyYWNrcyA9IG1lZGlhLmdldEF1ZGlvVHJhY2tzKCk7XG5cbiAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8gJiYgdHJhY2tzLmxlbmd0aCA+IDApIHtcbiAgICBjb25zdCBvdXRwdXQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgY29uc3Qgc291cmNlID0gb3V0cHV0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhKTtcbiAgICBzb3VyY2UuY29ubmVjdChvdXRwdXQuZGVzdGluYXRpb24pO1xuICB9XG5cbiAgaWYgKCFtZXNzYWdlLmV4cG9ydFZpZGVvICYmIG1lc3NhZ2UuZXhwb3J0QXVkaW8gJiYgdHJhY2tzLmxlbmd0aCA8IDEpIHtcbiAgICBjb25zb2xlLmxvZygnISEhIU5vIGF1ZGlvIHRyYWNrJyk7XG4gICAgbWVkaWEuZ2V0VHJhY2tzKCkuZm9yRWFjaCgodHJhY2spID0+IHRyYWNrLnN0b3AoKSk7XG4gICAgcmVjb3JkaW5nRXJyb3IobWVzc2FnZS50YWJJZCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbGV0IGZvcm1hdCA9IG1lc3NhZ2UuZm9ybWF0O1xuICBsZXQgYXVkaW9Db2RlYyA9IG1lc3NhZ2UuYXVkaW9Db2RlYztcbiAgaWYgKG1lc3NhZ2UubmVlZHNGRk1QRUcpIHtcbiAgICBmb3JtYXQgPSAnd2VibSc7XG4gICAgYXVkaW9Db2RlYyA9ICdwY20nO1xuICB9XG5cbiAgbGV0IG1pbWVUeXBlO1xuICBpZiAobWVzc2FnZS5leHBvcnRWaWRlbykge1xuICAgIG1pbWVUeXBlID0gYHZpZGVvLyR7Zm9ybWF0fTtjb2RlY3M9JHttZXNzYWdlLnZpZGVvQ29kZWN9YDtcbiAgICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgICAgbWltZVR5cGUgKz0gYCwke2F1ZGlvQ29kZWN9YDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWltZVR5cGUgPSBgYXVkaW8vJHtmb3JtYXR9O2NvZGVjcz0ke2F1ZGlvQ29kZWN9YDtcbiAgfVxuXG4gIGxldCB2aWRlb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLnZpZGVvQml0c1BlclNlY29uZCB8fCAxNjtcbiAgbGV0IGF1ZGlvQml0c1BlclNlY29uZCA9IG1lc3NhZ2UuYXVkaW9CaXRzUGVyU2Vjb25kIHx8IDEyODtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1pbWVUeXBlLFxuICAgIGF1ZGlvQml0c1BlclNlY29uZDogYXVkaW9CaXRzUGVyU2Vjb25kICogMTAwMCxcbiAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IHZpZGVvQml0c1BlclNlY29uZCAqIDEwMDAwMDAsXG4gIH07XG5cbiAgY29uc29sZS5sb2coJ01lZGlhUmVjb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XG5cbiAgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYSwgb3B0aW9ucyk7XG4gIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldmVudCkgPT4gZGF0YS5wdXNoKGV2ZW50LmRhdGEpO1xuICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGE9JywgZGF0YSk7XG4gICAgY29uc3QgYmxvYkZvcm1hdCA9IG1pbWVUeXBlLnNwbGl0KCc7JylbMF07XG4gICAgLy8gY29uc29sZS5sb2coJ2Jsb2JGb3JtYXQ9JywgYmxvYkZvcm1hdCk7XG4gICAgYmxvYiA9IG5ldyBCbG9iKGRhdGEsIHsgdHlwZTogYmxvYkZvcm1hdCB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnYmxvYj0nLCBibG9iKTtcblxuICAgIGlmIChtZXNzYWdlLm5lZWRzRkZNUEVHKSB7XG4gICAgICBjb252ZXJ0U3RyZWFtcyhibG9iLCBtZXNzYWdlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VuZEJsb2IoYmxvYiwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgZGF0YSA9IFtdO1xuICB9O1xuICByZWNvcmRlci5zdGFydCgpO1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3JlY29yZGluZyc7XG59XG5cbmZ1bmN0aW9uIHJlY29yZGluZ0Vycm9yKHRhYklkKSB7XG4gIGNvbnN0IGVycm9yTXNnID0ge1xuICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlU2hvd01haW5QYW5lbCcsXG4gICAgdGFiSWQsXG4gIH07XG4gIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKGVycm9yTXNnLCAoZXJyb3JSZXNwb25zZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdlcnJvclJlc3BvbnNlJywgZXJyb3JSZXNwb25zZSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgcmVjb3JkZXIuc3RvcCgpO1xuICByZWNvcmRlci5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCgodCkgPT4gdC5zdG9wKCkpO1xuICByZWNvcmRlciA9IHVuZGVmaW5lZDtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcbn1cblxuZnVuY3Rpb24gY29udmVydFN0cmVhbXModmlkZW9CbG9iLCBtZXNzYWdlKSB7XG4gIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGlucHV0RmlsZU5hbWUgPSBgc2FtcGxlX3ZpZGVvLndlYm1gO1xuICAgIGxldCBvdXRwdXRGaWxlTmFtZSA9IGBzYW1wbGVfdmlkZW8uJHttZXNzYWdlLmV4dGVuc2lvbn1gO1xuICAgIGxldCBjb21tYW5kU3RyID0gYGZmbXBlZyAtaSAke2lucHV0RmlsZU5hbWV9YDtcbiAgICBpZiAobWVzc2FnZS5leHBvcnRWaWRlbykgY29tbWFuZFN0ciArPSBgIC1jOnYgY29weWA7XG4gICAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIGNvbW1hbmRTdHIgKz0gYCAtYzphICR7bWVzc2FnZS5hdWRpb0NvZGVjfSAtYjphICR7bWVzc2FnZS5hdWRpb0JpdHNQZXJTZWNvbmR9a2A7XG4gICAgY29tbWFuZFN0ciArPSBgICR7b3V0cHV0RmlsZU5hbWV9YDtcblxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBydW5GRm1wZWcoaW5wdXRGaWxlTmFtZSwgb3V0cHV0RmlsZU5hbWUsIGNvbW1hbmRTdHIsIG5ldyBVaW50OEFycmF5KHRoaXMucmVzdWx0KSk7XG5cbiAgICBzZW5kQmxvYihibG9iLCBtZXNzYWdlKTtcblxuICAgIC8vIGNvbnN0IHZpZGVvVVJMTWVzc2FnZSA9IHtcbiAgICAvLyAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlVmlkZW9VUkxCYWNrZ3JvdW5kJyxcbiAgICAvLyAgIHZpZGVvVVJMOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLFxuICAgIC8vICAgZmlsZU5hbWU6IGRvd25sb2FkRmlsZU5hbWUsXG4gICAgLy8gICB0YWJJZDogbWVzc2FnZS50YWJJZCxcbiAgICAvLyAgIG1pbWVUeXBlOiBgdmlkZW8vJHtkb3dubG9hZEV4dGVuc2lvbn1gLFxuICAgIC8vIH07XG4gICAgLy8gY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UodmlkZW9VUkxNZXNzYWdlKTtcbiAgfTtcbiAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih2aWRlb0Jsb2IpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5GRm1wZWcoaW5wdXRGaWxlTmFtZSwgb3V0cHV0RmlsZU5hbWUsIGNvbW1hbmRTdHIsIGZpbGUpIHtcbiAgaWYgKGZmbXBlZy5pc0xvYWRlZCgpKSB7XG4gICAgYXdhaXQgZmZtcGVnLmV4aXQoKTtcbiAgfVxuXG4gIGF3YWl0IGZmbXBlZy5sb2FkKCk7XG5cbiAgY29uc3QgY29tbWFuZExpc3QgPSBjb21tYW5kU3RyLnNwbGl0KCcgJyk7XG4gIGlmIChjb21tYW5kTGlzdC5zaGlmdCgpICE9PSAnZmZtcGVnJykge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc3RhcnQgd2l0aCBmZm1wZWcnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmZm1wZWcuRlMoJ3dyaXRlRmlsZScsIGlucHV0RmlsZU5hbWUsIGF3YWl0IEZGbXBlZy5mZXRjaEZpbGUoZmlsZSkpO1xuICBhd2FpdCBmZm1wZWcucnVuKC4uLmNvbW1hbmRMaXN0KTtcbiAgY29uc3QgZGF0YSA9IGZmbXBlZy5GUygncmVhZEZpbGUnLCBvdXRwdXRGaWxlTmFtZSk7XG4gIC8vIGNvbnNvbGUubG9nKCdmZm1wZWcgZGF0YScsIGRhdGEpO1xuXG4gIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZGF0YS5idWZmZXJdKTtcbiAgLy8gY29uc29sZS5sb2coJ2ZmbXBlZyBibG9iJywgYmxvYik7XG4gIHJldHVybiBibG9iO1xuICAvLyBkb3dubG9hZEZpbGUoYmxvYiwgb3V0cHV0RmlsZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZW5kQmxvYihibG9iLCBtZXNzYWdlKSB7XG4gIGNvbnN0IHZpZGVvVVJMTWVzc2FnZSA9IHtcbiAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMQmFja2dyb3VuZCcsXG4gICAgdmlkZW9VUkw6IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksXG4gICAgZmlsZU5hbWU6IGNyZWF0ZUZpbGVuYW1lKG1lc3NhZ2UuZXh0ZW5zaW9uKSxcbiAgICB0YWJJZDogbWVzc2FnZS50YWJJZCxcbiAgICBtaW1lVHlwZTogKG1lc3NhZ2UuZXhwb3J0VmlkZW8gPyAndmlkZW8nIDogJ2F1ZGlvJykgKyAnLycgKyBtZXNzYWdlLmV4dGVuc2lvbixcbiAgfTtcbiAgY29uc29sZS5sb2coJyEhISEhISEgc2VuZEJsb2InLCB2aWRlb1VSTE1lc3NhZ2UpO1xuICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh2aWRlb1VSTE1lc3NhZ2UpO1xufVxuZnVuY3Rpb24gZG93bmxvYWRGaWxlKGJsb2IsIGZpbGVOYW1lKSB7XG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIGEuZG93bmxvYWQgPSBmaWxlTmFtZTtcbiAgYS5jbGljaygpO1xufVxuIl0sIm5hbWVzIjpbInRpbWVBTVBNIiwiYWRkTGVhZGluZ1plcm8iLCJjcmVhdGVGaWxlbmFtZSIsImV4dGVuc2lvbiIsInRleHQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJuYW1lIiwiY3JlYXRlRmlsZW5hbWVPbmx5IiwiZGF0ZSIsIkRhdGUiLCJhbXBtVGltZSIsImRhdGVEYXRhIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImdldERhdGUiLCJhbXBtIiwidG9VcHBlckNhc2UiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdEFNUE0iLCJzcGFjZUJldHdlZW4iLCJzdHJUaW1lIiwidG9Vbml4U3RyaW5nIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwiZ2V0QWdlIiwiYmlydGhEYXRlIiwidG9kYXkiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInJlc3VsdCIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInllYXJzQmV0d2VlbkZsb29yIiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJtb250aHNCZXR3ZWVuRmxvb3IiLCJ3ZWVrc0JldHdlZW5GbG9vciIsImRheXNCZXR3ZWVuRmxvb3IiLCJob3Vyc0JldHdlZW5GbG9vciIsIm1pbnV0ZXNCZXR3ZWVuRmxvb3IiLCJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJnZXRSYW5kb21JbnQiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwiZGVjaW1hbFRvUGxhY2UiLCJwbGFjZSIsIm1ldGhvZCIsInAiLCJwb3ciLCJyb3VuZCIsInJvdW5kMSIsInJvdW5kMiIsInJvdW5kMyIsImxvb3BJbmRleCIsImluZGV4IiwiaXNCZXR3ZWVuIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwiY29uc3RyYWluIiwiY3JlYXRlU3RlcHNCZXR3ZWVuIiwiYmVnaW4iLCJlbmQiLCJzdGVwcyIsInN0ZXBzQmV0d2VlbiIsImluY3JlbWVudCIsInB1c2giLCJpbnRlcnBvbGF0ZSIsImFtb3VudCIsIm1hcCIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJsZXJwIiwibm9ybSIsImdldFdlaWdodGVkQXZlcmFnZSIsImRlc3QiLCJuIiwiZm9ybWF0Iiwia0RlbGltIiwibWluTGVuZ3RoIiwiZmlsbENoYXIiLCJpc05hTiIsInJlbWFpbmRlciIsIm51bSIsImxlbiIsImFkZENoYXIiLCJ0b3RhbERlbGltIiwidG90YWxSZW1haW4iLCJudW1TcGxpdCIsInNwbGl0Iiwic3BsaWNlIiwic2hpZnQiLCJqb2luIiwic3Vic3RyIiwiZm9ybWF0Q3VycmVuY3kiLCJmb3JjZURlY2ltYWxzIiwiY3VycmVuY3kiLCJ0b0ZpeGVkIiwiZ2V0T3JkaW5hbFN1ZmZpeCIsInNwZWxsIiwiRXJyb3IiLCJvbmVzU3BlbGxpbmdzIiwidGVuc1NwZWxsaW5ncyIsInNwZWxsaW5nIiwibWlsbGlvbnMiLCJ0aG91c2FuZHMiLCJodW5kcmVkcyIsInRlbnMiLCJvbmVzIiwiY29tcG9uZW50VG9IZXgiLCJjIiwiaGV4IiwicmdiVG9IZXgiLCJyZ2IiLCJyIiwiZyIsImIiLCJoZXhUb1JnYiIsImV4ZWMiLCJwYXJzZUludCIsImRlZ1RvUmFkIiwiZGVncmVlcyIsIlBJIiwicmFkVG9EZWciLCJyYWQiLCJzbW9vdGhzdGVwIiwieCIsImEiLCJ0IiwibWl4IiwiY2xhbXAiLCJtb2QiLCJtb2RXcmFwIiwicmFuZG9tMUQiLCJzZWVkIiwic2luIiwibm9pc2UxRCIsImYiLCJ1IiwicmFuZG9tUmFuZ2UiLCJyYW5kb21JbnQiLCJtYXBDbGFtcCIsInNpbmVXYXZlIiwiYW5nbGUiLCJmcmVxdWVuY3kiLCJ0aW1lIiwic3BlZWQiLCJhbXBsaXR1ZGUiLCJjbGFtcFRpbWUiLCJzdGFydFRpbWUiLCJkdXJhdGlvbiIsImVhc2VPdXQiLCJ0YXJnZXQiLCJmcmljdGlvbiIsInNwcmluZyIsImVsYXN0aWNpdHkiLCJyZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyIsImNpcmNsZSIsImhleENvbG9yU3RyaW5nVG9OdW1iZXIiLCJOdW1iZXIiLCJyZXBsYWNlIiwicmVjb3JkZXIiLCJkYXRhIiwiYmxvYiIsImN1cnJlbnRUYWJJZCIsImZmbXBlZyIsIkZGbXBlZyIsImNyZWF0ZUZGbXBlZyIsImNvcmVQYXRoIiwiY2hyb21lIiwicnVudGltZSIsImdldFVSTCIsImxvZyIsIm1haW5OYW1lIiwic2V0UHJvZ3Jlc3MiLCJwYXJhbXMiLCJjb25zb2xlIiwic2V0TG9nZ2VyIiwidHlwZSIsIm1zZyIsImxvZ1R5cGUiLCJtZXNzYWdlIiwidGFiSWQiLCJzZW5kTWVzc2FnZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwic3RhdGUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2l6ZSIsInRhYldpZHRoIiwieSIsInRhYkhlaWdodCIsInBpeGVsUmF0aW8iLCJjb25zdHJhaW50cyIsIm1lZGlhIiwibWVkaWFTb3VyY2UiLCJjb25zdHJhaW50U2l6ZXMiLCJ3aWR0aCIsImhlaWdodCIsInpvb21MZXZlbCIsInNvcnQiLCJleHBvcnRWaWRlbyIsInZpZGVvIiwibWFuZGF0b3J5IiwiY2hyb21lTWVkaWFTb3VyY2UiLCJjaHJvbWVNZWRpYVNvdXJjZUlkIiwic3RyZWFtSWQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibWluRnJhbWVSYXRlIiwibWF4RnJhbWVSYXRlIiwiZXhwb3J0QXVkaW8iLCJhdWRpbyIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImVycm9yIiwiZGlzcGxheVN1cmZhY2UiLCJzdXBwcmVzc0xvY2FsQXVkaW9QbGF5YmFjayIsImF1dG9HYWluQ29udHJvbCIsImVjaG9DYW5jZWxsYXRpb24iLCJnb29BdXRvR2FpbkNvbnRyb2wiLCJub2lzZVN1cHByZXNzaW9uIiwicHJlZmVyQ3VycmVudFRhYiIsInNlbGZCcm93c2VyU3VyZmFjZSIsInN5c3RlbUF1ZGlvIiwic3VyZmFjZVN3aXRjaGluZyIsIm1vbml0b3JUeXBlU3VyZmFjZXMiLCJnZXREaXNwbGF5TWVkaWEiLCJyZWNvcmRpbmdFcnJvciIsInRyYWNrcyIsImdldEF1ZGlvVHJhY2tzIiwib3V0cHV0IiwiQXVkaW9Db250ZXh0Iiwic291cmNlIiwiY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwiYXVkaW9Db2RlYyIsIm5lZWRzRkZNUEVHIiwibWltZVR5cGUiLCJ2aWRlb0NvZGVjIiwidmlkZW9CaXRzUGVyU2Vjb25kIiwiYXVkaW9CaXRzUGVyU2Vjb25kIiwib3B0aW9ucyIsIk1lZGlhUmVjb3JkZXIiLCJvbmRhdGFhdmFpbGFibGUiLCJldmVudCIsIm9uc3RvcCIsImJsb2JGb3JtYXQiLCJCbG9iIiwiY29udmVydFN0cmVhbXMiLCJzZW5kQmxvYiIsInN0YXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwiZXJyb3JNc2ciLCJlcnJvclJlc3BvbnNlIiwic3RyZWFtIiwidmlkZW9CbG9iIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbnB1dEZpbGVOYW1lIiwib3V0cHV0RmlsZU5hbWUiLCJjb21tYW5kU3RyIiwicnVuRkZtcGVnIiwiVWludDhBcnJheSIsInJlYWRBc0FycmF5QnVmZmVyIiwiZmlsZSIsImlzTG9hZGVkIiwiZXhpdCIsImxvYWQiLCJjb21tYW5kTGlzdCIsImFsZXJ0IiwiRlMiLCJmZXRjaEZpbGUiLCJydW4iLCJidWZmZXIiLCJ2aWRlb1VSTE1lc3NhZ2UiLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImZpbGVOYW1lIiwiZG93bmxvYWRGaWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9