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
  log: true,
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
  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }
  console.log('startRecording', JSON.stringify(message));
  const size = {
    x: message.tabWidth,
    y: message.tabHeight
  };
  const pixelRatio = message.pixelRatio;
  const constraints = {};
  const constraintSizes = [{
    width: size.x,
    height: size.y
  }, {
    width: size.x * message.zoomLevel,
    height: size.y * message.zoomLevel
  }, {
    width: size.x * pixelRatio,
    height: size.y * pixelRatio
  }];
  constraintSizes.sort((a, b) => {
    return a.width * a.height - b.width * b.height;
  });
  console.log('constraintSizes', constraintSizes);
  if (message.exportVideo) {
    constraints.video = {
      mandatory: {
        chromeMediaSource: 'tab',
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
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId
      }
    };
  }
  console.log('navigator.mediaDevices.getUserMedia', JSON.stringify(constraints));
  let media;
  try {
    media = await navigator.mediaDevices.getUserMedia(constraints);
  } catch (error) {
    console.log('navigator.mediaDevices.getUserMedia error', error);
  }
  console.log('media=', media);
  if (message.exportAudio) {
    const output = new AudioContext();
    const source = output.createMediaStreamSource(media);
    source.connect(output.destination);
  }
  let mimeType;
  if (message.exportVideo) {
    mimeType = 'video/webm;codecs=h264';
    if (message.exportAudio) {
      mimeType += ',opus';
    }
  } else {
    mimeType = 'audio/webm;codecs=opus';
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
    console.log('data=', data);
    const blobFormat = mimeType.split(';')[0];
    console.log('blobFormat=', blobFormat);
    blob = new Blob(data, {
      type: blobFormat
    });
    console.log('blob=', blob);
    convertStreams(blob, message);
    data = [];
  };
  recorder.start();
  window.location.hash = 'recording';
}
function stopRecording(message) {
  recorder.stop();
  recorder.stream.getTracks().forEach(t => t.stop());
  recorder = undefined;
  window.location.hash = '';
}
function convertStreams(videoBlob, message) {
  currentTabId = message.tabId;
  var fileReader = new FileReader();
  fileReader.onload = async function () {
    // var blob = new File([result.data], 'test.mp4', {
    //   type: 'video/mp4',
    // });

    let inputFileName = 'sample_video.webm';
    let outputFileName = 'sample_video.mp4';
    let downloadExtension = 'mp4';
    let commandStr;
    if (message.exportVideo) {
      if (message.exportAudio) {
        commandStr = `ffmpeg -i ${inputFileName} -c:v copy -c:a aac ${outputFileName}`;
      } else {
        commandStr = `ffmpeg -i ${inputFileName} -c:v copy ${outputFileName}`;
      }
    } else {
      downloadExtension = 'm4a';
      outputFileName = `sample_video.m4a`;
      commandStr = `ffmpeg -i ${inputFileName} -c:a aac ${outputFileName}`;
    }
    const fileName = (0,_model_utils__WEBPACK_IMPORTED_MODULE_0__.createFilenameOnly)();
    const downloadFileName = `${fileName}.${downloadExtension}`;
    const blob = await runFFmpeg(inputFileName, outputFileName, commandStr, new Uint8Array(this.result));
    // console.log('runFFmpeg blob', blob);
    // var file = new File([blob], downloadFileName, {
    //   type: `video/${downloadExtension}`,
    // });
    // console.log('runFFmpeg file', file);
    const videoURLMessage = {
      type: 'scrollCaptureVideoURLBackground',
      videoURL: URL.createObjectURL(blob),
      fileName: downloadFileName,
      tabId: message.tabId,
      mimeType: `video/${downloadExtension}`
    };
    // console.log('videoURLMessage', videoURLMessage);
    chrome.runtime.sendMessage(videoURLMessage);
  };
  fileReader.readAsArrayBuffer(videoBlob);
}
async function runFFmpeg(inputFileName, outputFileName, commandStr, file) {
  // console.log('runFFmpeg commandStr', commandStr);

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

function downloadFile(blob, fileName) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = fileName;
  a.click();
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM5RyxJQUFJLEVBQUUyRixRQUFRLEVBQUU7RUFDcEMsTUFBTS9ILENBQUMsR0FBR21KLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNyQ3BKLENBQUMsQ0FBQ3FKLElBQUksR0FBR2hCLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDbEcsSUFBSSxDQUFDO0VBQ2xDcEMsQ0FBQyxDQUFDc0osUUFBUSxHQUFHdkIsUUFBUTtFQUNyQi9ILENBQUMsQ0FBQ3VKLEtBQUssQ0FBQyxDQUFDO0FBQ1gsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZGVsL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2xpYi90c3VuYW1pL3V0aWxzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3RzdW5hbWkvdXRpbHMvbnVtYmVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL29mZnNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lQU1QTSB9IGZyb20gJy4uLy4uL2xpYi90c3VuYW1pL3V0aWxzL2RhdGUnO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm8gfSBmcm9tICcuLi8uLi9saWIvdHN1bmFtaS91dGlscy9udW1iZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsZW5hbWUoZXh0ZW5zaW9uLCB0ZXh0ID0gJ1Njcm9sbENhcHR1cmUnKSB7XG4gIGNvbnN0IG5hbWUgPSBjcmVhdGVGaWxlbmFtZU9ubHkodGV4dCk7XG4gIHJldHVybiBgJHtuYW1lfS4ke2V4dGVuc2lvbn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsZW5hbWVPbmx5KHRleHQgPSAnU2Nyb2xsQ2FwdHVyZScpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBsZXQgYW1wbVRpbWUgPSB0aW1lQU1QTShkYXRlKTtcbiAgbGV0IGRhdGVEYXRhID0ge1xuICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpLFxuICB9O1xuICBhbXBtVGltZS5hbXBtID0gYW1wbVRpbWUuYW1wbS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gYCR7dGV4dH0gJHtkYXRlRGF0YS55ZWFyfS0ke2RhdGVEYXRhLm1vbnRofS0ke2RhdGVEYXRhLmRhdGV9IGF0ICR7YW1wbVRpbWUuaG91cnN9LiR7YW1wbVRpbWUubWludXRlc30uJHthbXBtVGltZS5zZWNvbmRzfSAke2FtcG1UaW1lLmFtcG19YDtcbn1cbiIsImltcG9ydCB7YWRkTGVhZGluZ1plcm99IGZyb20gXCIuL251bWJlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZUFNUE0oZGF0ZSkge1xuXHRsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG5cdGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0bGV0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSk7XG5cdGxldCBzZWNvbmRzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xuXHRob3VycyA9IGhvdXJzICUgMTI7XG5cdGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcblx0cmV0dXJuIHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGFtcG0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFNUE0oZGF0ZSwgc3BhY2VCZXR3ZWVuID0gXCJcIikge1xuXHRsZXQgZGF0ZURhdGEgPSB0aW1lQU1QTShkYXRlKTtcblx0bGV0IHN0clRpbWUgPSBkYXRlRGF0YS5ob3VycyArICc6JyArIGRhdGVEYXRhLm1pbnV0ZXMgKyBzcGFjZUJldHdlZW4gKyBhbXBtO1xuXHRyZXR1cm4gc3RyVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFN0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4VVRDU3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDRGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ1NlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb3VycyhkYXRlLCBob3Vycykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoaG91cnMgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBsZXQgbW9udGhzID0ge1xuXHRlbjpbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcblx0ZnI6W1wiSmFudmllclwiLCBcIkbDqXZyaWVyXCIsIFwiTWFyc1wiLCBcIkF2cmlsXCIsIFwiTWFpXCIsIFwiSnVpblwiLCBcIkp1aWxsZXRcIiwgXCJBb8O7dFwiLCBcIlNlcHRlbWJyZVwiLCBcIk9jdG9icmVcIiwgXCJOb3ZlbWJyZVwiLCBcIkTDqWNlbWJyZVwiXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGUsIGxhbmd1YWdlKSB7XG5cdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRsYW5ndWFnZSA9IFwiZW5cIjtcblx0fVxuXHRsZXQgbW9udGg7XG5cdHN3aXRjaChsYW5ndWFnZSkge1xuXHRcdGNhc2UgXCJlblwiOlxuXHRcdFx0bW9udGggPSBtb250aHNbbGFuZ3VhZ2VdW2RhdGUuZ2V0TW9udGgoKV07XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gbW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZ2UoYmlydGhEYXRlKSB7XG5cdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdGxldCBhZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdGxldCBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuXHRpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcblx0XHRhZ2UtLTtcblx0fVxuXHRyZXR1cm4gYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJlYXRBc1VUQyhkYXRlKSB7XG5cdGxldCByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcblx0cmVzdWx0LnNldE1pbnV0ZXMocmVzdWx0LmdldE1pbnV0ZXMoKSAtIHJlc3VsdC5nZXRUaW1lem9uZU9mZnNldCgpKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTWludXRlID0gNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTWludXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVySG91ciA9IDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVySG91cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckRheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlcldlZWsgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlcldlZWs7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTW9udGggPSAzNjUgLyAxMiAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJZZWFyID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlclllYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYW1pbGlhclRpbWVCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgdGV4dCA9IFwiXCI7XG5cdGxldCB5ZWFyc0JldHdlZW4gPSB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0aWYgKHllYXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0bGV0IHllYXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih5ZWFyc0JldHdlZW4pO1xuXHRcdGlmICh5ZWFyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhcnMgYWdvXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhciBhZ29cIjtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0bGV0IG1vbnRoc0JldHdlZW4gPSBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0aWYgKG1vbnRoc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0bGV0IG1vbnRoc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobW9udGhzQmV0d2Vlbik7XG5cdFx0XHRpZiAobW9udGhzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aHMgYWdvXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aCBhZ29cIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHdlZWtzQmV0d2VlbiA9IHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0aWYgKHdlZWtzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdGxldCB3ZWVrc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3Iod2Vla3NCZXR3ZWVuKTtcblx0XHRcdFx0aWYgKHdlZWtzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2Vla3MgYWdvXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrIGFnb1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZGF5c0JldHdlZW4gPSBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRpZiAoZGF5c0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdGxldCBkYXlzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihkYXlzQmV0d2Vlbik7XG5cdFx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5cyBhZ29cIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheSBhZ29cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbiA9IGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihob3Vyc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXJzIGFnb1wiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VyIGFnb1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW4gPSBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuID4gMSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobWludXRlc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlcyBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gXCJKdXN0IG5vd1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dDtcbn0iLCIvLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXJXaXRoaW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEgKyBtYXggLSBtaW4pICsgbWluKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgZXZlbjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzRXZlbig3KSk7IC8vIFRyYWNlcyBmYWxzZVxuIGNvbnNvbGUubG9nKGlzRXZlbigxMikpOyAvLyBUcmFjZXMgdHJ1ZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXZlbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYgMSkgPT09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBvZGQuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBub3QgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIG9kZDsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzT2RkKDcpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc09kZCgxMikpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09kZCh2YWx1ZSkge1xuICByZXR1cm4gIWlzRXZlbih2YWx1ZSk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgY29udGFpbnMgbm8gZGVjaW1hbCB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlcjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxLjIzNDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAlIDEgPT09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBwcmltZS5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG9ubHkgZGl2aXNpYmxlIGJ5IDxjb2RlPjE8L2NvZGU+IGFuZCBpdHNlbGYuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgcHJpbWU7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc1ByaW1lKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNQcmltZSg0KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSAxIHx8IHZhbHVlID09PSAyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNFdmVuKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHMgPSBNYXRoLnNxcnQodmFsdWUpO1xuICBmb3IgKGxldCBpID0gMzsgaSA8PSBzOyBpKyspIHtcbiAgICBpZiAodmFsdWUgJSBpID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuIFJvdW5kcyBhIG51bWJlcidzIGRlY2ltYWwgdmFsdWUgdG8gYSBzcGVjaWZpYyBwbGFjZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB0byByb3VuZC5cbiBAcGFyYW0gcGxhY2U6IFRoZSBkZWNpbWFsIHBsYWNlIHRvIHJvdW5kLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgdmFsdWUgcm91bmRlZCB0byB0aGUgZGVmaW5lZCBwbGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAyKSk7IC8vIFRyYWNlcyAzLjE0XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDMpKTsgLy8gVHJhY2VzIDMuMTQyXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVjaW1hbFRvUGxhY2UodmFsdWUsIHBsYWNlID0gMSwgbWV0aG9kID0gbnVsbCkge1xuICBjb25zdCBwID0gTWF0aC5wb3coMTAsIHBsYWNlKTtcbiAgaWYgKCFtZXRob2QpIG1ldGhvZCA9IE1hdGgucm91bmQ7XG4gIHJldHVybiBtZXRob2QodmFsdWUgKiBwKSAvIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDEodmFsdWUpIHtcbiAgcmV0dXJuIGRlY2ltYWxUb1BsYWNlKHZhbHVlLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMih2YWx1ZSkge1xuICByZXR1cm4gZGVjaW1hbFRvUGxhY2UodmFsdWUsIDIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQzKHZhbHVlKSB7XG4gIHJldHVybiBkZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMyk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbGVuZ3RoICsgKGluZGV4ICUgbGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5kZXggJSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGluY2x1ZGVkIHdpdGhpbiBhIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBmYWxscyB3aXRoaW4gdGhlIHJhbmdlOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEB1c2FnZU5vdGUgVGhlIHJhbmdlIHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzQmV0d2VlbigzLCAwLCA1KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDcsIDAsIDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gISh2YWx1ZSA8IE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB8fCB2YWx1ZSA+IE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdmFsdWUgZmFsbHMgd2l0aGluIGEgcmFuZ2U7IGlmIG5vdCBpdCBpcyBzbmFwcGVkIHRvIHRoZSBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgZWl0aGVyIHRoZSBudW1iZXIgYXMgcGFzc2VkLCBvciBpdHMgdmFsdWUgb25jZSBzbmFwcGVkIHRvIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG4gQHVzYWdlTm90ZSBUaGUgY29uc3RyYWludCB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgM1xuIGNvbnNvbGUubG9nKGNvbnN0cmFpbig3LCAwLCA1KSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RyYWluKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gTWF0aC5taW4oTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSksIE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSk7XG59XG5cbi8qKlxuIENyZWF0ZXMgZXZlbmx5IHNwYWNlZCBudW1lcmljYWwgaW5jcmVtZW50cyBiZXR3ZWVuIHR3byBudW1iZXJzLlxuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAcGFyYW0gc3RlcHM6IFRoZSBudW1iZXIgb2YgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgYW4gQXJyYXkgY29tcHJpc2VkIG9mIHRoZSBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMCwgNSwgNCkpOyAvLyBUcmFjZXMgMSwyLDMsNFxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigxLCAzLCAzKSk7IC8vIFRyYWNlcyAxLjUsMiwyLjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGVwc0JldHdlZW4oYmVnaW4sIGVuZCwgc3RlcHMpIHtcbiAgc3RlcHMrKztcblxuICBsZXQgaSA9IDA7XG4gIGNvbnN0IHN0ZXBzQmV0d2VlbiA9IFtdO1xuICBjb25zdCBpbmNyZW1lbnQgPSAoZW5kIC0gYmVnaW4pIC8gc3RlcHM7XG5cbiAgd2hpbGUgKCsraSA8IHN0ZXBzKSB7XG4gICAgc3RlcHNCZXR3ZWVuLnB1c2goaSAqIGluY3JlbWVudCArIGJlZ2luKTtcbiAgfVxuXG4gIHJldHVybiBzdGVwc0JldHdlZW47XG59XG5cbi8qKlxuIERldGVybWluZXMgYSB2YWx1ZSBiZXR3ZWVuIHR3byBzcGVjaWZpZWQgdmFsdWVzLlxuXG4gQHBhcmFtIGFtb3VudDogVGhlIGxldmVsIG9mIGludGVycG9sYXRpb24gYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy4gSWYgPGNvZGU+MDwvY29kZT4sIDxjb2RlPmJlZ2luPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZDsgaWYgPGNvZGU+MTwvY29kZT4sIDxjb2RlPmVuZDwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGludGVycG9sYXRlKDAuNSwgMCwgMTApKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZShhbW91bnQsIGJlZ2luLCBlbmQpIHtcbiAgcmV0dXJuIGJlZ2luICsgKGVuZCAtIGJlZ2luKSAqIGFtb3VudDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHBlcmNlbnRhZ2Ugb2YgYSB2YWx1ZSBpbiBhIGdpdmVuIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgdmFsdWUgdG8gYmUgY29udmVydGVkLlxuIEBwYXJhbSBtaW5pbXVtOiBUaGUgbG93ZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBtYXhpbXVtOiBUaGUgdXBwZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobm9ybWFsaXplKDgsIDQsIDIwKS5kZWNpbWFsUGVyY2VudGFnZSk7IC8vIFRyYWNlcyAwLjI1XG4gPC9jb2RlPlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG4vLyAgIHJldHVybiBuZXcgUGVyY2VudCgodmFsdWUgLSBtaW5pbXVtKSAvIChtYXhpbXVtIC0gbWluaW11bSkpO1xuLy8gfVxuXG4vKipcbiBNYXBzIGEgdmFsdWUgZnJvbSBvbmUgY29vcmRpbmF0ZSBzcGFjZSB0byBhbm90aGVyLlxuXG4gQHBhcmFtIHZhbHVlOiBWYWx1ZSBmcm9tIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlIHRvIG1hcCB0byB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjE6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgxOiBFbmRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjI6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MjogRW5kaW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG1hcCgwLjc1LCAwLCAxLCAwLCAxMDApKTsgLy8gVHJhY2VzIDc1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbi8vIFx0cmV0dXJuIG1pbjIgKyAobWF4MiAtIG1pbjIpICogKCh2YWx1ZSAtIG1pbjEpIC8gKG1heDEgLSBtaW4xKSk7XG4vLyB9XG5cbi8qKlxuIExvdyBwYXNzIGZpbHRlciBhbG9ncml0aG0gZm9yIGVhc2luZyBhIHZhbHVlIHRvd2FyZCBhIGRlc3RpbmF0aW9uIHZhbHVlLiBXb3JrcyBiZXN0IGZvciB0d2VlbmluZyB2YWx1ZXMgd2hlbiBubyBkZWZpbml0ZSB0aW1lIGR1cmF0aW9uIGV4aXN0cyBhbmQgd2hlbiB0aGUgZGVzdGluYXRpb24gdmFsdWUgY2hhbmdlcy5cblxuIElmIDxjb2RlPigwLjUgPCBuIDwgMSk8L2NvZGU+LCB0aGVuIHRoZSByZXN1bHRpbmcgdmFsdWVzIHdpbGwgb3ZlcnNob290IChwaW5nLXBvbmcpIHVudGlsIHRoZXkgcmVhY2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlLiBXaGVuIDxjb2RlPm48L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiAxLCBhcyBpdHMgdmFsdWUgaW5jcmVhc2VzLCB0aGUgdGltZSBpdCB0YWtlcyB0byByZWFjaCB0aGUgZGVzdGluYXRpb24gYWxzbyBpbmNyZWFzZXMuIEEgcGxlYXNpbmcgdmFsdWUgZm9yIDxjb2RlPm48L2NvZGU+IGlzIDUuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlLlxuIEBwYXJhbSBkZXN0OiBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gQHBhcmFtIG46IFRoZSBzbG93ZG93biBmYWN0b3IuXG4gQHJldHVybiBUaGUgd2VpZ2h0ZWQgYXZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodGVkQXZlcmFnZSh2YWx1ZSwgZGVzdCwgbikge1xuICByZXR1cm4gdmFsdWUgKyAoZGVzdCAtIHZhbHVlKSAvIG47XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiXCI8L2NvZGU+LlxuIEBwYXJhbSBtaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgbnVtYmVyOyBkZWZhdWx0cyB0byA8Y29kZT4wIDwvY29kZT4uXG4gQHBhcmFtIGZpbGxDaGFyOiBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdXNlZCB0byBtYWtlIHRoZSBudW1iZXIgdGhlIG1pbmltdW0gbGVuZ3RoOyBkZWZhdWx0cyB0byA8Y29kZT5cIjBcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0KDEyMzQ1NjcsIFwiLFwiLCA4KSk7IC8vIFRyYWNlcyAwMSwyMzQsNTY3XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBrRGVsaW0sIG1pbkxlbmd0aCwgZmlsbENoYXIpIHtcbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSAnLCc7XG4gIH1cbiAgaWYgKGlzTmFOKG1pbkxlbmd0aCkpIHtcbiAgICBtaW5MZW5ndGggPSAwO1xuICB9XG4gIGlmICghZmlsbENoYXIpIHtcbiAgICBmaWxsQ2hhciA9ICcwJztcbiAgfVxuICBjb25zdCByZW1haW5kZXIgPSB2YWx1ZSAlIDE7XG4gIGxldCBudW0gPSBNYXRoLmZsb29yKHZhbHVlKS50b1N0cmluZygpO1xuICBjb25zdCBsZW4gPSBudW0ubGVuZ3RoO1xuXG4gIGlmIChtaW5MZW5ndGggIT09IDAgJiYgbWluTGVuZ3RoID4gbGVuKSB7XG4gICAgbWluTGVuZ3RoIC09IGxlbjtcblxuICAgIGNvbnN0IGFkZENoYXIgPSBmaWxsQ2hhciB8fCAnMCc7XG5cbiAgICB3aGlsZSAobWluTGVuZ3RoLS0pIHtcbiAgICAgIG51bSA9IGFkZENoYXIgKyBudW07XG4gICAgfVxuICB9XG5cbiAgaWYgKGtEZWxpbSAhPT0gbnVsbCAmJiBudW0ubGVuZ3RoID4gMykge1xuICAgIGNvbnN0IHRvdGFsRGVsaW0gPSBNYXRoLmZsb29yKG51bS5sZW5ndGggLyAzKTtcbiAgICBjb25zdCB0b3RhbFJlbWFpbiA9IG51bS5sZW5ndGggJSAzO1xuICAgIGNvbnN0IG51bVNwbGl0ID0gbnVtLnNwbGl0KCcnKTtcbiAgICBsZXQgaSA9IC0xO1xuXG4gICAgd2hpbGUgKCsraSA8IHRvdGFsRGVsaW0pIHtcbiAgICAgIG51bVNwbGl0LnNwbGljZSh0b3RhbFJlbWFpbiArIDQgKiBpLCAwLCBrRGVsaW0pO1xuICAgIH1cblxuICAgIGlmICh0b3RhbFJlbWFpbiA9PT0gMCkge1xuICAgICAgbnVtU3BsaXQuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBudW0gPSBudW1TcGxpdC5qb2luKCcnKTtcbiAgfVxuXG4gIGlmIChyZW1haW5kZXIgIT09IDApIHtcbiAgICBudW0gKz0gcmVtYWluZGVyLnRvU3RyaW5nKCkuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIG51bTtcbn1cblxuLyoqXG4gRm9ybWF0cyBhIG51bWJlciBhcyBhIGN1cnJlbmN5IHN0cmluZy5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB5b3Ugd2lzaCB0byBmb3JtYXQuXG4gQHBhcmFtIGZvcmNlRGVjaW1hbHM6IElmIHRoZSBudW1iZXIgc2hvdWxkIGFsd2F5cyBoYXZlIHR3byBkZWNpbWFsIHBsYWNlcyA8Y29kZT50cnVlPC9jb2RlPiwgb3Igb25seSBzaG93IGRlY2ltYWxzIGlzIHRoZXJlIGlzIGEgZGVjaW1hbHMgdmFsdWUgPGNvZGU+ZmFsc2U8L2NvZGU+OyBkZWZhdWx0cyB0byA8Y29kZT50cnVlPC9jb2RlPi5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIixcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0Q3VycmVuY3koMTIzNC41KSk7IC8vIFRyYWNlcyBcIjEsMjM0LjUwXCJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRDdXJyZW5jeSh2YWx1ZSwgZm9yY2VEZWNpbWFscywga0RlbGltKSB7XG4gIGlmIChmb3JjZURlY2ltYWxzID09PSBudWxsKSB7XG4gICAgZm9yY2VEZWNpbWFscyA9IHRydWU7XG4gIH1cbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSAnLCc7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCB8fCBmb3JjZURlY2ltYWxzKSB7XG4gICAgY3VycmVuY3kgKz0gcmVtYWluZGVyLnRvRml4ZWQoMikuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbmN5O1xufVxuXG4vKipcbiBGaW5kcyB0aGUgZW5nbGlzaCBvcmRpbmFsIHN1ZmZpeCBmb3IgdGhlIG51bWJlciBnaXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGZpbmQgdGhlIG9yZGluYWwgc3VmZml4IG9mLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgc3VmZml4IGZvciB0aGUgbnVtYmVyLCAyIGNoYXJhY3RlcnMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZygzMiArIGdldE9yZGluYWxTdWZmaXgoMzIpKTsgLy8gVHJhY2VzIDMybmRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsU3VmZml4KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSAyMCkge1xuICAgIHJldHVybiAndGgnO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgc3dpdGNoICh2YWx1ZSAlIDEwKSB7XG4gICAgY2FzZSAzOlxuICAgICAgcmV0dXJuICdyZCc7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuICduZCc7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuICdzdCc7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAndGgnO1xuICB9XG59XG5cbi8qKlxuIEFkZHMgYSBsZWFkaW5nIHplcm8gZm9yIG51bWJlcnMgbGVzcyB0aGFuIHRlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGFkZCBsZWFkaW5nIHplcm8uXG4gQHJldHVybiBOdW1iZXIgYXMgYSBTdHJpbmc7IGlmIHRoZSBudW1iZXIgd2FzIGxlc3MgdGhhbiB0ZW4gdGhlIG51bWJlciB3aWxsIGhhdmUgYSBsZWFkaW5nIHplcm8uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybyg3KSk7IC8vIFRyYWNlcyAwN1xuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDExKSk7IC8vIFRyYWNlcyAxMVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDEwID8gJzAnICsgdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpO1xufVxuXG4vKipcbiBTcGVsbHMgdGhlIHByb3ZpZGVkIG51bWJlci5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIHNwZWxsLiBOZWVkcyB0byBiZSBsZXNzIHRoYW4gOTk5OTk5OTk5LlxuIEByZXR1cm4gVGhlIG51bWJlciBzcGVsbGVkIG91dCBhcyBhIFN0cmluZy5cbiBAdGhyb3dzIDxjb2RlPkVycm9yPC9jb2RlPiBpZiA8Y29kZT52YWx1ZTwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDk5OTk5OTk5OS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHNwZWxsKDApKTsgLy8gVHJhY2VzIFplcm9cbiBjb25zb2xlLmxvZyhzcGVsbCgyMykpOyAvLyBUcmFjZXMgVHdlbnR5LVRocmVlXG4gY29uc29sZS5sb2coc3BlbGwoMjAwNTY3OCkpOyAvLyBUcmFjZXMgVHdvIE1pbGxpb24sIEZpdmUgVGhvdXNhbmQsIFNpeCBIdW5kcmVkIFNldmVudHktRWlnaHRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGVsbCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiA5OTk5OTk5OTkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1ZhbHVlIHRvbyBsYXJnZSBmb3IgdGhpcyBtZXRob2QuJyk7XG4gIH1cblxuICBjb25zdCBvbmVzU3BlbGxpbmdzID0gW1xuICAgICcnLFxuICAgICdPbmUnLFxuICAgICdUd28nLFxuICAgICdUaHJlZScsXG4gICAgJ0ZvdXInLFxuICAgICdGaXZlJyxcbiAgICAnU2l4JyxcbiAgICAnU2V2ZW4nLFxuICAgICdFaWdodCcsXG4gICAgJ05pbmUnLFxuICAgICdUZW4nLFxuICAgICdFbGV2ZW4nLFxuICAgICdUd2VsdmUnLFxuICAgICdUaGlydGVlbicsXG4gICAgJ0ZvdXJ0ZWVuJyxcbiAgICAnRmlmdGVlbicsXG4gICAgJ1NpeHRlZW4nLFxuICAgICdTZXZlbnRlZW4nLFxuICAgICdFaWdodGVlbicsXG4gICAgJ05pbmV0ZWVuJyxcbiAgXTtcbiAgY29uc3QgdGVuc1NwZWxsaW5ncyA9IFsnJywgJycsICdUd2VudHknLCAnVGhpcnR5JywgJ0ZvcnR5JywgJ0ZpZnR5JywgJ1NpeHR5JywgJ1NldmVudHknLCAnRWlnaHR5JywgJ05pbmV0eSddO1xuICBsZXQgc3BlbGxpbmcgPSAnJztcblxuICBjb25zdCBtaWxsaW9ucyA9IHZhbHVlIC8gMTAwMDAwMDtcbiAgdmFsdWUgJT0gMTAwMDAwMDtcblxuICBjb25zdCB0aG91c2FuZHMgPSB2YWx1ZSAvIDEwMDA7XG4gIHZhbHVlICU9IDEwMDA7XG5cbiAgY29uc3QgaHVuZHJlZHMgPSB2YWx1ZSAvIDEwMDtcbiAgdmFsdWUgJT0gMTAwO1xuXG4gIGNvbnN0IHRlbnMgPSB2YWx1ZSAvIDEwO1xuICB2YWx1ZSAlPSAxMDtcblxuICBjb25zdCBvbmVzID0gdmFsdWUgJSAxMDtcblxuICBpZiAobWlsbGlvbnMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyAnJyA6ICcsICc7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwobWlsbGlvbnMpICsgJyBNaWxsaW9uJztcbiAgfVxuXG4gIGlmICh0aG91c2FuZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyAnJyA6ICcsICc7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwodGhvdXNhbmRzKSArICcgVGhvdXNhbmQnO1xuICB9XG5cbiAgaWYgKGh1bmRyZWRzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gJycgOiAnLCAnO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKGh1bmRyZWRzKSArICcgSHVuZHJlZCc7XG4gIH1cblxuICBpZiAodGVucyAhPT0gMCB8fCBvbmVzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gJycgOiAnICc7XG5cbiAgICBpZiAodGVucyA8IDIpIHtcbiAgICAgIHNwZWxsaW5nICs9IG9uZXNTcGVsbGluZ3NbdGVucyAqIDEwICsgb25lc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cbiAgICAgIGlmIChvbmVzICE9PSAwKSB7XG4gICAgICAgIHNwZWxsaW5nICs9ICctJyArIG9uZXNTcGVsbGluZ3Nbb25lc107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNwZWxsaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnWmVybyc7XG4gIH1cblxuICByZXR1cm4gc3BlbGxpbmc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRUb0hleChjKSB7XG4gIGNvbnN0IGhleCA9IGMudG9TdHJpbmcoMTYpO1xuICByZXR1cm4gaGV4Lmxlbmd0aCA9PT0gMSA/ICcwJyArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuICByZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0XG4gICAgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuICdyOicgKyB0aGlzLnIgKyAnLGc6JyArIHRoaXMuZyArICcsYjonICsgdGhpcy5iO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWQpIHtcbiAgcmV0dXJuIChyYWQgKiAxODApIC8gTWF0aC5QSTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aHN0ZXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpKTtcbiAgcmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgcmV0dXJuIGEgKyB0ICogKGIgLSBhKTtcbiAgLy8gcmV0dXJuIGEoMS10KSArIGJ0XG4gIC8vcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXgoYSwgYiwgdCkge1xuICByZXR1cm4gbGVycChhLCBiLCB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm0odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL2EgbW9kdWxvIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBuZWdhdGl2ZXMgbnVtYmVycyAnY29ycmVjdGx5J1xuZXhwb3J0IGZ1bmN0aW9uIG1vZFdyYXAobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vcmFuZG9tIHdpdGggc2VlZCwgcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20xRChzZWVkKSB7XG4gIHJldHVybiBtb2RXcmFwKE1hdGguc2luKHNlZWQpICogNDM3NTguNTQ1MywgMSk7XG59XG5cbi8vcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiBub2lzZTFEKHgpIHtcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoeCk7XG4gIGNvbnN0IGYgPSBtb2RXcmFwKHgsIDEpO1xuICBjb25zdCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBsZXJwKHUsIHJhbmRvbTFEKGkpLCByYW5kb20xRChpICsgMS4wKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQ2xhbXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGNsYW1wKGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpLCBtaW4yLCBtYXgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmVXYXZlKGFuZ2xlID0gMCwgZnJlcXVlbmN5ID0gTWF0aC5QSSwgdGltZSA9IDAsIHNwZWVkID0gMSwgYW1wbGl0dWRlID0gMSkge1xuICByZXR1cm4gTWF0aC5zaW4oYW5nbGUgKiBmcmVxdWVuY3kgKyB0aW1lICogc3BlZWQpICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBUaW1lKHRpbWUsIHN0YXJ0VGltZSwgZHVyYXRpb24pIHtcbiAgcmV0dXJuIGNsYW1wKHRpbWUgLSBzdGFydFRpbWUsIDAuMCwgZHVyYXRpb24pIC8gZHVyYXRpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBlYXNlIHZhbHVlXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YWx1ZSArPSBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uKTtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uID0gMC4xKSB7XG4gIHJldHVybiAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcGFyYW0gc3BlZWQ6IFRoZSBjdXJyZW50IHNwZWVkXG4gQHBhcmFtIGVsYXN0aWNpdHk6IFRoZSBlbGFzdGljaXR5IGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgbmV3IHNwZWVkIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gc3BlZWQgPSBzcHJpbmcodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24sIHNwZWVkLCBlbGFzdGljaXR5KTtcbiB2YWx1ZSArPSBzcGVlZDtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJpbmcodmFsdWUsIHRhcmdldCA9IDAsIGZyaWN0aW9uID0gMC4xLCBzcGVlZCA9IDAsIGVsYXN0aWNpdHkgPSAwKSB7XG4gIHJldHVybiBzcGVlZCAqIGVsYXN0aWNpdHkgKyAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyhhbmdsZSkge1xuICBjb25zdCBjaXJjbGUgPSBNYXRoLlBJICogMjtcbiAgd2hpbGUgKGFuZ2xlID4gY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlIC09IGNpcmNsZTtcbiAgfVxuICB3aGlsZSAoYW5nbGUgPCAtY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlICs9IGNpcmNsZTtcbiAgfVxuICByZXR1cm4gYW5nbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhDb2xvclN0cmluZ1RvTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUucmVwbGFjZSgnIycsICcweCcpKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRmlsZW5hbWUsIGNyZWF0ZUZpbGVuYW1lT25seSB9IGZyb20gJy4vbW9kZWwvdXRpbHMnO1xuXG5sZXQgcmVjb3JkZXI7XG5sZXQgZGF0YSA9IFtdO1xubGV0IGJsb2I7XG5sZXQgY3VycmVudFRhYklkO1xuXG5jb25zdCBmZm1wZWcgPSBGRm1wZWcuY3JlYXRlRkZtcGVnKHtcbiAgY29yZVBhdGg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnZmZtcGVnLWNvcmUuanMnKSxcbiAgbG9nOiB0cnVlLFxuICBtYWluTmFtZTogJ21haW4nLFxufSk7XG4vLyBjb25zb2xlLmxvZygnZmZtcGVnJywgZmZtcGVnKTtcblxuZmZtcGVnLnNldFByb2dyZXNzKChwYXJhbXMpID0+IHtcbiAgY29uc29sZS5sb2coJ3Byb2dyZXNzOicsIHBhcmFtcyk7XG59KTtcblxuZmZtcGVnLnNldExvZ2dlcigocGFyYW1zKSA9PiB7XG4gIHN3aXRjaCAocGFyYW1zLnR5cGUpIHtcbiAgICBjYXNlICdmZmVycic6XG4gICAgLy8gY2FzZSAnaW5mbyc6XG4gICAgY2FzZSAnZmZvdXQnOlxuICAgICAgY29uc3QgbXNnID0ge1xuICAgICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZUZGbXBlZ0xvZ1RvU1cnLFxuICAgICAgICBsb2dUeXBlOiBwYXJhbXMudHlwZSxcbiAgICAgICAgbWVzc2FnZTogcGFyYW1zLm1lc3NhZ2UsXG4gICAgICAgIHRhYklkOiBjdXJyZW50VGFiSWQsXG4gICAgICB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ29mZnNjcmVlbiBtc2cnLCBtc2cpO1xuICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UobXNnKTtcbiAgICAgIGJyZWFrO1xuICB9XG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gIGlmIChtZXNzYWdlLnRhcmdldCA9PT0gJ29mZnNjcmVlbicpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJzpcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnOlxuICAgICAgICBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIG1lc3NhZ2U6JywgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIGlmIChyZWNvcmRlcj8uc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc3RhcnRSZWNvcmRpbmcgd2hpbGUgcmVjb3JkaW5nIGlzIGluIHByb2dyZXNzLicpO1xuICB9XG4gIGNvbnNvbGUubG9nKCdzdGFydFJlY29yZGluZycsIEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpKTtcbiAgY29uc3Qgc2l6ZSA9IHsgeDogbWVzc2FnZS50YWJXaWR0aCwgeTogbWVzc2FnZS50YWJIZWlnaHQgfTtcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IG1lc3NhZ2UucGl4ZWxSYXRpbztcbiAgY29uc3QgY29uc3RyYWludHMgPSB7fTtcbiAgY29uc3QgY29uc3RyYWludFNpemVzID0gW1xuICAgIHsgd2lkdGg6IHNpemUueCwgaGVpZ2h0OiBzaXplLnkgfSxcbiAgICB7IHdpZHRoOiBzaXplLnggKiBtZXNzYWdlLnpvb21MZXZlbCwgaGVpZ2h0OiBzaXplLnkgKiBtZXNzYWdlLnpvb21MZXZlbCB9LFxuICAgIHsgd2lkdGg6IHNpemUueCAqIHBpeGVsUmF0aW8sIGhlaWdodDogc2l6ZS55ICogcGl4ZWxSYXRpbyB9LFxuICBdO1xuICBjb25zdHJhaW50U2l6ZXMuc29ydCgoYSwgYikgPT4ge1xuICAgIHJldHVybiBhLndpZHRoICogYS5oZWlnaHQgLSBiLndpZHRoICogYi5oZWlnaHQ7XG4gIH0pO1xuICBjb25zb2xlLmxvZygnY29uc3RyYWludFNpemVzJywgY29uc3RyYWludFNpemVzKTtcbiAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICBjb25zdHJhaW50cy52aWRlbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICAgIG1pbldpZHRoOiBjb25zdHJhaW50U2l6ZXNbMF0ud2lkdGgsXG4gICAgICAgIG1pbkhlaWdodDogY29uc3RyYWludFNpemVzWzBdLmhlaWdodCxcbiAgICAgICAgbWF4V2lkdGg6IGNvbnN0cmFpbnRTaXplc1syXS53aWR0aCxcbiAgICAgICAgbWF4SGVpZ2h0OiBjb25zdHJhaW50U2l6ZXNbMl0uaGVpZ2h0LFxuICAgICAgICBtaW5GcmFtZVJhdGU6IDMwLFxuICAgICAgICBtYXhGcmFtZVJhdGU6IDYwLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgY29uc3RyYWludHMuYXVkaW8gPSB7XG4gICAgICBtYW5kYXRvcnk6IHtcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2U6ICd0YWInLFxuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZUlkOiBtZXNzYWdlLnN0cmVhbUlkLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG4gIGNvbnNvbGUubG9nKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYScsIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gIGxldCBtZWRpYTtcbiAgdHJ5IHtcbiAgICBtZWRpYSA9IGF3YWl0IG5hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhKGNvbnN0cmFpbnRzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEgZXJyb3InLCBlcnJvcik7XG4gIH1cbiAgY29uc29sZS5sb2coJ21lZGlhPScsIG1lZGlhKTtcblxuICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgIGNvbnN0IG91dHB1dCA9IG5ldyBBdWRpb0NvbnRleHQoKTtcbiAgICBjb25zdCBzb3VyY2UgPSBvdXRwdXQuY3JlYXRlTWVkaWFTdHJlYW1Tb3VyY2UobWVkaWEpO1xuICAgIHNvdXJjZS5jb25uZWN0KG91dHB1dC5kZXN0aW5hdGlvbik7XG4gIH1cblxuICBsZXQgbWltZVR5cGU7XG4gIGlmIChtZXNzYWdlLmV4cG9ydFZpZGVvKSB7XG4gICAgbWltZVR5cGUgPSAndmlkZW8vd2VibTtjb2RlY3M9aDI2NCc7XG4gICAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICAgIG1pbWVUeXBlICs9ICcsb3B1cyc7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIG1pbWVUeXBlID0gJ2F1ZGlvL3dlYm07Y29kZWNzPW9wdXMnO1xuICB9XG5cbiAgbGV0IHZpZGVvQml0c1BlclNlY29uZCA9IG1lc3NhZ2UudmlkZW9CaXRzUGVyU2Vjb25kIHx8IDE2O1xuICBsZXQgYXVkaW9CaXRzUGVyU2Vjb25kID0gbWVzc2FnZS5hdWRpb0JpdHNQZXJTZWNvbmQgfHwgMTI4O1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgbWltZVR5cGUsXG4gICAgYXVkaW9CaXRzUGVyU2Vjb25kOiBhdWRpb0JpdHNQZXJTZWNvbmQgKiAxMDAwLFxuICAgIHZpZGVvQml0c1BlclNlY29uZDogdmlkZW9CaXRzUGVyU2Vjb25kICogMTAwMDAwMCxcbiAgfTtcblxuICBjb25zb2xlLmxvZygnTWVkaWFSZWNvcmRlcicsIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcblxuICByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhLCBvcHRpb25zKTtcbiAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiBkYXRhLnB1c2goZXZlbnQuZGF0YSk7XG4gIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnZGF0YT0nLCBkYXRhKTtcbiAgICBjb25zdCBibG9iRm9ybWF0ID0gbWltZVR5cGUuc3BsaXQoJzsnKVswXTtcbiAgICBjb25zb2xlLmxvZygnYmxvYkZvcm1hdD0nLCBibG9iRm9ybWF0KTtcbiAgICBibG9iID0gbmV3IEJsb2IoZGF0YSwgeyB0eXBlOiBibG9iRm9ybWF0IH0pO1xuICAgIGNvbnNvbGUubG9nKCdibG9iPScsIGJsb2IpO1xuXG4gICAgY29udmVydFN0cmVhbXMoYmxvYiwgbWVzc2FnZSk7XG5cbiAgICBkYXRhID0gW107XG4gIH07XG4gIHJlY29yZGVyLnN0YXJ0KCk7XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAncmVjb3JkaW5nJztcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIHJlY29yZGVyLnN0b3AoKTtcbiAgcmVjb3JkZXIuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHQpID0+IHQuc3RvcCgpKTtcbiAgcmVjb3JkZXIgPSB1bmRlZmluZWQ7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTdHJlYW1zKHZpZGVvQmxvYiwgbWVzc2FnZSkge1xuICBjdXJyZW50VGFiSWQgPSBtZXNzYWdlLnRhYklkO1xuICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZpbGVSZWFkZXIub25sb2FkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIHZhciBibG9iID0gbmV3IEZpbGUoW3Jlc3VsdC5kYXRhXSwgJ3Rlc3QubXA0Jywge1xuICAgIC8vICAgdHlwZTogJ3ZpZGVvL21wNCcsXG4gICAgLy8gfSk7XG5cbiAgICBsZXQgaW5wdXRGaWxlTmFtZSA9ICdzYW1wbGVfdmlkZW8ud2VibSc7XG4gICAgbGV0IG91dHB1dEZpbGVOYW1lID0gJ3NhbXBsZV92aWRlby5tcDQnO1xuICAgIGxldCBkb3dubG9hZEV4dGVuc2lvbiA9ICdtcDQnO1xuICAgIGxldCBjb21tYW5kU3RyO1xuXG4gICAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICAgIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgICAgIGNvbW1hbmRTdHIgPSBgZmZtcGVnIC1pICR7aW5wdXRGaWxlTmFtZX0gLWM6diBjb3B5IC1jOmEgYWFjICR7b3V0cHV0RmlsZU5hbWV9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1hbmRTdHIgPSBgZmZtcGVnIC1pICR7aW5wdXRGaWxlTmFtZX0gLWM6diBjb3B5ICR7b3V0cHV0RmlsZU5hbWV9YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG93bmxvYWRFeHRlbnNpb24gPSAnbTRhJztcbiAgICAgIG91dHB1dEZpbGVOYW1lID0gYHNhbXBsZV92aWRlby5tNGFgO1xuICAgICAgY29tbWFuZFN0ciA9IGBmZm1wZWcgLWkgJHtpbnB1dEZpbGVOYW1lfSAtYzphIGFhYyAke291dHB1dEZpbGVOYW1lfWA7XG4gICAgfVxuXG4gICAgY29uc3QgZmlsZU5hbWUgPSBjcmVhdGVGaWxlbmFtZU9ubHkoKTtcbiAgICBjb25zdCBkb3dubG9hZEZpbGVOYW1lID0gYCR7ZmlsZU5hbWV9LiR7ZG93bmxvYWRFeHRlbnNpb259YDtcblxuICAgIGNvbnN0IGJsb2IgPSBhd2FpdCBydW5GRm1wZWcoaW5wdXRGaWxlTmFtZSwgb3V0cHV0RmlsZU5hbWUsIGNvbW1hbmRTdHIsIG5ldyBVaW50OEFycmF5KHRoaXMucmVzdWx0KSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3J1bkZGbXBlZyBibG9iJywgYmxvYik7XG4gICAgLy8gdmFyIGZpbGUgPSBuZXcgRmlsZShbYmxvYl0sIGRvd25sb2FkRmlsZU5hbWUsIHtcbiAgICAvLyAgIHR5cGU6IGB2aWRlby8ke2Rvd25sb2FkRXh0ZW5zaW9ufWAsXG4gICAgLy8gfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3J1bkZGbXBlZyBmaWxlJywgZmlsZSk7XG4gICAgY29uc3QgdmlkZW9VUkxNZXNzYWdlID0ge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVWaWRlb1VSTEJhY2tncm91bmQnLFxuICAgICAgdmlkZW9VUkw6IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYiksXG4gICAgICBmaWxlTmFtZTogZG93bmxvYWRGaWxlTmFtZSxcbiAgICAgIHRhYklkOiBtZXNzYWdlLnRhYklkLFxuICAgICAgbWltZVR5cGU6IGB2aWRlby8ke2Rvd25sb2FkRXh0ZW5zaW9ufWAsXG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlkZW9VUkxNZXNzYWdlJywgdmlkZW9VUkxNZXNzYWdlKTtcbiAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh2aWRlb1VSTE1lc3NhZ2UpO1xuICB9O1xuICBmaWxlUmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKHZpZGVvQmxvYik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bkZGbXBlZyhpbnB1dEZpbGVOYW1lLCBvdXRwdXRGaWxlTmFtZSwgY29tbWFuZFN0ciwgZmlsZSkge1xuICAvLyBjb25zb2xlLmxvZygncnVuRkZtcGVnIGNvbW1hbmRTdHInLCBjb21tYW5kU3RyKTtcblxuICBpZiAoZmZtcGVnLmlzTG9hZGVkKCkpIHtcbiAgICBhd2FpdCBmZm1wZWcuZXhpdCgpO1xuICB9XG5cbiAgYXdhaXQgZmZtcGVnLmxvYWQoKTtcblxuICBjb25zdCBjb21tYW5kTGlzdCA9IGNvbW1hbmRTdHIuc3BsaXQoJyAnKTtcbiAgaWYgKGNvbW1hbmRMaXN0LnNoaWZ0KCkgIT09ICdmZm1wZWcnKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBzdGFydCB3aXRoIGZmbXBlZycpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGZmbXBlZy5GUygnd3JpdGVGaWxlJywgaW5wdXRGaWxlTmFtZSwgYXdhaXQgRkZtcGVnLmZldGNoRmlsZShmaWxlKSk7XG4gIGF3YWl0IGZmbXBlZy5ydW4oLi4uY29tbWFuZExpc3QpO1xuICBjb25zdCBkYXRhID0gZmZtcGVnLkZTKCdyZWFkRmlsZScsIG91dHB1dEZpbGVOYW1lKTtcbiAgLy8gY29uc29sZS5sb2coJ2ZmbXBlZyBkYXRhJywgZGF0YSk7XG5cbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhLmJ1ZmZlcl0pO1xuICAvLyBjb25zb2xlLmxvZygnZmZtcGVnIGJsb2InLCBibG9iKTtcbiAgcmV0dXJuIGJsb2I7XG4gIC8vIGRvd25sb2FkRmlsZShibG9iLCBvdXRwdXRGaWxlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkRmlsZShibG9iLCBmaWxlTmFtZSkge1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBhLmRvd25sb2FkID0gZmlsZU5hbWU7XG4gIGEuY2xpY2soKTtcbn1cbiJdLCJuYW1lcyI6WyJ0aW1lQU1QTSIsImFkZExlYWRpbmdaZXJvIiwiY3JlYXRlRmlsZW5hbWUiLCJleHRlbnNpb24iLCJ0ZXh0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibmFtZSIsImNyZWF0ZUZpbGVuYW1lT25seSIsImRhdGUiLCJEYXRlIiwiYW1wbVRpbWUiLCJkYXRlRGF0YSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYW1wbSIsInRvVXBwZXJDYXNlIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JtYXRBTVBNIiwic3BhY2VCZXR3ZWVuIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsInRvVW5peFVUQ1N0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsImFkZEhvdXJzIiwic2V0VGltZSIsImdldFRpbWUiLCJhZGREYXlzIiwiZGF5cyIsIm1vbnRocyIsImVuIiwiZnIiLCJsYW5ndWFnZSIsImdldEFnZSIsImJpcnRoRGF0ZSIsInRvZGF5IiwiYWdlIiwibSIsInRyZWF0QXNVVEMiLCJyZXN1bHQiLCJzZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJtaW51dGVzQmV0d2VlbiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJtaWxsaXNlY29uZHNQZXJNaW51dGUiLCJob3Vyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJIb3VyIiwiZGF5c0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJEYXkiLCJ3ZWVrc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJXZWVrIiwibW9udGhzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1Blck1vbnRoIiwieWVhcnNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyWWVhciIsImdldEZhbWlsaWFyVGltZUJldHdlZW4iLCJ5ZWFyc0JldHdlZW5GbG9vciIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwibW9udGhzQmV0d2VlbkZsb29yIiwid2Vla3NCZXR3ZWVuRmxvb3IiLCJkYXlzQmV0d2VlbkZsb29yIiwiaG91cnNCZXR3ZWVuRmxvb3IiLCJtaW51dGVzQmV0d2VlbkZsb29yIiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwibWluIiwibWF4IiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZ2V0UmFuZG9tSW50SW5jbHVzaXZlIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJyYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UiLCJpc0V2ZW4iLCJ2YWx1ZSIsImlzT2RkIiwiaXNJbnRlZ2VyIiwiaXNQcmltZSIsInMiLCJzcXJ0IiwiaSIsImRlY2ltYWxUb1BsYWNlIiwicGxhY2UiLCJtZXRob2QiLCJwIiwicG93Iiwicm91bmQiLCJyb3VuZDEiLCJyb3VuZDIiLCJyb3VuZDMiLCJsb29wSW5kZXgiLCJpbmRleCIsImlzQmV0d2VlbiIsImZpcnN0VmFsdWUiLCJzZWNvbmRWYWx1ZSIsImNvbnN0cmFpbiIsImNyZWF0ZVN0ZXBzQmV0d2VlbiIsImJlZ2luIiwiZW5kIiwic3RlcHMiLCJzdGVwc0JldHdlZW4iLCJpbmNyZW1lbnQiLCJwdXNoIiwiaW50ZXJwb2xhdGUiLCJhbW91bnQiLCJtYXAiLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwibGVycCIsIm5vcm0iLCJnZXRXZWlnaHRlZEF2ZXJhZ2UiLCJkZXN0IiwibiIsImZvcm1hdCIsImtEZWxpbSIsIm1pbkxlbmd0aCIsImZpbGxDaGFyIiwiaXNOYU4iLCJyZW1haW5kZXIiLCJudW0iLCJsZW4iLCJhZGRDaGFyIiwidG90YWxEZWxpbSIsInRvdGFsUmVtYWluIiwibnVtU3BsaXQiLCJzcGxpdCIsInNwbGljZSIsInNoaWZ0Iiwiam9pbiIsInN1YnN0ciIsImZvcm1hdEN1cnJlbmN5IiwiZm9yY2VEZWNpbWFscyIsImN1cnJlbmN5IiwidG9GaXhlZCIsImdldE9yZGluYWxTdWZmaXgiLCJzcGVsbCIsIkVycm9yIiwib25lc1NwZWxsaW5ncyIsInRlbnNTcGVsbGluZ3MiLCJzcGVsbGluZyIsIm1pbGxpb25zIiwidGhvdXNhbmRzIiwiaHVuZHJlZHMiLCJ0ZW5zIiwib25lcyIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsInJnYlRvSGV4IiwicmdiIiwiciIsImciLCJiIiwiaGV4VG9SZ2IiLCJleGVjIiwicGFyc2VJbnQiLCJkZWdUb1JhZCIsImRlZ3JlZXMiLCJQSSIsInJhZFRvRGVnIiwicmFkIiwic21vb3Roc3RlcCIsIngiLCJhIiwidCIsIm1peCIsImNsYW1wIiwibW9kIiwibW9kV3JhcCIsInJhbmRvbTFEIiwic2VlZCIsInNpbiIsIm5vaXNlMUQiLCJmIiwidSIsInJhbmRvbVJhbmdlIiwicmFuZG9tSW50IiwibWFwQ2xhbXAiLCJzaW5lV2F2ZSIsImFuZ2xlIiwiZnJlcXVlbmN5IiwidGltZSIsInNwZWVkIiwiYW1wbGl0dWRlIiwiY2xhbXBUaW1lIiwic3RhcnRUaW1lIiwiZHVyYXRpb24iLCJlYXNlT3V0IiwidGFyZ2V0IiwiZnJpY3Rpb24iLCJzcHJpbmciLCJlbGFzdGljaXR5IiwicmVtb3ZlTXVsdGlwbGVSb3RhdGlvbnMiLCJjaXJjbGUiLCJoZXhDb2xvclN0cmluZ1RvTnVtYmVyIiwiTnVtYmVyIiwicmVwbGFjZSIsInJlY29yZGVyIiwiZGF0YSIsImJsb2IiLCJjdXJyZW50VGFiSWQiLCJmZm1wZWciLCJGRm1wZWciLCJjcmVhdGVGRm1wZWciLCJjb3JlUGF0aCIsImNocm9tZSIsInJ1bnRpbWUiLCJnZXRVUkwiLCJsb2ciLCJtYWluTmFtZSIsInNldFByb2dyZXNzIiwicGFyYW1zIiwiY29uc29sZSIsInNldExvZ2dlciIsInR5cGUiLCJtc2ciLCJsb2dUeXBlIiwibWVzc2FnZSIsInRhYklkIiwic2VuZE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInN0YXRlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNpemUiLCJ0YWJXaWR0aCIsInkiLCJ0YWJIZWlnaHQiLCJwaXhlbFJhdGlvIiwiY29uc3RyYWludHMiLCJjb25zdHJhaW50U2l6ZXMiLCJ3aWR0aCIsImhlaWdodCIsInpvb21MZXZlbCIsInNvcnQiLCJleHBvcnRWaWRlbyIsInZpZGVvIiwibWFuZGF0b3J5IiwiY2hyb21lTWVkaWFTb3VyY2UiLCJjaHJvbWVNZWRpYVNvdXJjZUlkIiwic3RyZWFtSWQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsIm1heFdpZHRoIiwibWF4SGVpZ2h0IiwibWluRnJhbWVSYXRlIiwibWF4RnJhbWVSYXRlIiwiZXhwb3J0QXVkaW8iLCJhdWRpbyIsIm1lZGlhIiwibmF2aWdhdG9yIiwibWVkaWFEZXZpY2VzIiwiZ2V0VXNlck1lZGlhIiwiZXJyb3IiLCJvdXRwdXQiLCJBdWRpb0NvbnRleHQiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsIm1pbWVUeXBlIiwidmlkZW9CaXRzUGVyU2Vjb25kIiwiYXVkaW9CaXRzUGVyU2Vjb25kIiwib3B0aW9ucyIsIk1lZGlhUmVjb3JkZXIiLCJvbmRhdGFhdmFpbGFibGUiLCJldmVudCIsIm9uc3RvcCIsImJsb2JGb3JtYXQiLCJCbG9iIiwiY29udmVydFN0cmVhbXMiLCJzdGFydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN0b3AiLCJzdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidmlkZW9CbG9iIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbnB1dEZpbGVOYW1lIiwib3V0cHV0RmlsZU5hbWUiLCJkb3dubG9hZEV4dGVuc2lvbiIsImNvbW1hbmRTdHIiLCJmaWxlTmFtZSIsImRvd25sb2FkRmlsZU5hbWUiLCJydW5GRm1wZWciLCJVaW50OEFycmF5IiwidmlkZW9VUkxNZXNzYWdlIiwidmlkZW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImZpbGUiLCJpc0xvYWRlZCIsImV4aXQiLCJsb2FkIiwiY29tbWFuZExpc3QiLCJhbGVydCIsIkZTIiwiZmV0Y2hGaWxlIiwicnVuIiwiYnVmZmVyIiwiZG93bmxvYWRGaWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9