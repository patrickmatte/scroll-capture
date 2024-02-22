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


// const { createFFmpeg, fetchFile } = FFmpeg;
// console.log('FFmpeg', FFmpeg);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVM4RyxZQUFZQSxDQUFDOUcsSUFBSSxFQUFFMkYsUUFBUSxFQUFFO0VBQ3BDLE1BQU0vSCxDQUFDLEdBQUdtSixRQUFRLENBQUNDLGFBQWEsQ0FBQyxHQUFHLENBQUM7RUFDckNwSixDQUFDLENBQUNxSixJQUFJLEdBQUdoQixHQUFHLENBQUNDLGVBQWUsQ0FBQ2xHLElBQUksQ0FBQztFQUNsQ3BDLENBQUMsQ0FBQ3NKLFFBQVEsR0FBR3ZCLFFBQVE7RUFDckIvSCxDQUFDLENBQUN1SixLQUFLLENBQUMsQ0FBQztBQUNYLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9tb2RlbC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9kYXRlLmpzIiwid2VicGFjazovLy8uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlci5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9qcy9vZmZzY3JlZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGltZUFNUE0gfSBmcm9tICcuLi8uLi9saWIvdHN1bmFtaS91dGlscy9kYXRlJztcbmltcG9ydCB7IGFkZExlYWRpbmdaZXJvIH0gZnJvbSAnLi4vLi4vbGliL3RzdW5hbWkvdXRpbHMvbnVtYmVyJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGVuYW1lKGV4dGVuc2lvbiwgdGV4dCA9ICdTY3JvbGwgQ2FwdHVyZScpIHtcbiAgY29uc3QgbmFtZSA9IGNyZWF0ZUZpbGVuYW1lT25seSh0ZXh0KTtcbiAgcmV0dXJuIGAke25hbWV9LiR7ZXh0ZW5zaW9ufWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWxlbmFtZU9ubHkodGV4dCA9ICdTY3JvbGwgQ2FwdHVyZScpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICBsZXQgYW1wbVRpbWUgPSB0aW1lQU1QTShkYXRlKTtcbiAgbGV0IGRhdGVEYXRhID0ge1xuICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKSxcbiAgICBtb250aDogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSksXG4gICAgZGF0ZTogYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpLFxuICB9O1xuICBhbXBtVGltZS5hbXBtID0gYW1wbVRpbWUuYW1wbS50b1VwcGVyQ2FzZSgpO1xuICByZXR1cm4gYCR7dGV4dH0gJHtkYXRlRGF0YS55ZWFyfS0ke2RhdGVEYXRhLm1vbnRofS0ke2RhdGVEYXRhLmRhdGV9IGF0ICR7YW1wbVRpbWUuaG91cnN9LiR7YW1wbVRpbWUubWludXRlc30uJHthbXBtVGltZS5zZWNvbmRzfSAke2FtcG1UaW1lLmFtcG19YDtcbn0iLCJpbXBvcnQge2FkZExlYWRpbmdaZXJvfSBmcm9tIFwiLi9udW1iZXJcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVBTVBNKGRhdGUpIHtcblx0bGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpO1xuXHRsZXQgYW1wbSA9IGhvdXJzID49IDEyID8gJ3BtJyA6ICdhbSc7XG5cdGxldCBtaW51dGVzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpO1xuXHRsZXQgc2Vjb25kcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcblx0aG91cnMgPSBob3VycyAlIDEyO1xuXHRob3VycyA9IGhvdXJzID8gaG91cnMgOiAxMjsgLy8gdGhlIGhvdXIgJzAnIHNob3VsZCBiZSAnMTInXG5cdHJldHVybiB7IGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbXBtIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRBTVBNKGRhdGUsIHNwYWNlQmV0d2VlbiA9IFwiXCIpIHtcblx0bGV0IGRhdGVEYXRhID0gdGltZUFNUE0oZGF0ZSk7XG5cdGxldCBzdHJUaW1lID0gZGF0ZURhdGEuaG91cnMgKyAnOicgKyBkYXRlRGF0YS5taW51dGVzICsgc3BhY2VCZXR3ZWVuICsgYW1wbTtcblx0cmV0dXJuIHN0clRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldEhvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0U2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFVUQ1N0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0RhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDSG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDTWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkSG91cnMoZGF0ZSwgaG91cnMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGhvdXJzICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGREYXlzKGRhdGUsIGRheXMpIHtcblx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgKGRheXMgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgbGV0IG1vbnRocyA9IHtcblx0ZW46W1wiSmFudWFyeVwiLCBcIkZlYnJ1YXJ5XCIsIFwiTWFyY2hcIiwgXCJBcHJpbFwiLCBcIk1heVwiLCBcIkp1bmVcIiwgXCJKdWx5XCIsIFwiQXVndXN0XCIsIFwiU2VwdGVtYmVyXCIsIFwiT2N0b2JlclwiLCBcIk5vdmVtYmVyXCIsIFwiRGVjZW1iZXJcIl0sXG5cdGZyOltcIkphbnZpZXJcIiwgXCJGw6l2cmllclwiLCBcIk1hcnNcIiwgXCJBdnJpbFwiLCBcIk1haVwiLCBcIkp1aW5cIiwgXCJKdWlsbGV0XCIsIFwiQW/Du3RcIiwgXCJTZXB0ZW1icmVcIiwgXCJPY3RvYnJlXCIsIFwiTm92ZW1icmVcIiwgXCJEw6ljZW1icmVcIl1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb250aChkYXRlLCBsYW5ndWFnZSkge1xuXHRpZiAoIWxhbmd1YWdlKSB7XG5cdFx0bGFuZ3VhZ2UgPSBcImVuXCI7XG5cdH1cblx0bGV0IG1vbnRoO1xuXHRzd2l0Y2gobGFuZ3VhZ2UpIHtcblx0XHRjYXNlIFwiZW5cIjpcblx0XHRcdG1vbnRoID0gbW9udGhzW2xhbmd1YWdlXVtkYXRlLmdldE1vbnRoKCldO1xuXHRcdFx0YnJlYWs7XG5cdH1cblx0cmV0dXJuIG1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWdlKGJpcnRoRGF0ZSkge1xuXHRsZXQgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXHRsZXQgYWdlID0gdG9kYXkuZ2V0RnVsbFllYXIoKSAtIGJpcnRoRGF0ZS5nZXRGdWxsWWVhcigpO1xuXHRsZXQgbSA9IHRvZGF5LmdldE1vbnRoKCkgLSBiaXJ0aERhdGUuZ2V0TW9udGgoKTtcblx0aWYgKG0gPCAwIHx8IChtID09PSAwICYmIHRvZGF5LmdldERhdGUoKSA8IGJpcnRoRGF0ZS5nZXREYXRlKCkpKSB7XG5cdFx0YWdlLS07XG5cdH1cblx0cmV0dXJuIGFnZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyZWF0QXNVVEMoZGF0ZSkge1xuXHRsZXQgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZSk7XG5cdHJlc3VsdC5zZXRNaW51dGVzKHJlc3VsdC5nZXRNaW51dGVzKCkgLSByZXN1bHQuZ2V0VGltZXpvbmVPZmZzZXQoKSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1pbnV0ZSA9IDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1pbnV0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckhvdXIgPSA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckhvdXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlckRheSA9IDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJEYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJXZWVrID0gNyAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJXZWVrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1Blck1vbnRoID0gMzY1IC8gMTIgICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1Blck1vbnRoO1xufVxuXG5leHBvcnQgZnVuY3Rpb24geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyWWVhciA9IDM2NSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJZZWFyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IHRleHQgPSBcIlwiO1xuXHRsZXQgeWVhcnNCZXR3ZWVuID0geWVhcnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdGlmICh5ZWFyc0JldHdlZW4gPj0gMSkge1xuXHRcdGxldCB5ZWFyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoeWVhcnNCZXR3ZWVuKTtcblx0XHRpZiAoeWVhcnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXJzIGFnb1wiO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0ZXh0ID0geWVhcnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHllYXIgYWdvXCI7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGxldCBtb250aHNCZXR3ZWVuID0gbW9udGhzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdGlmIChtb250aHNCZXR3ZWVuID49IDEpIHtcblx0XHRcdGxldCBtb250aHNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1vbnRoc0JldHdlZW4pO1xuXHRcdFx0aWYgKG1vbnRoc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGhzIGFnb1wiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGV4dCA9IG1vbnRoc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbW9udGggYWdvXCI7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCB3ZWVrc0JldHdlZW4gPSB3ZWVrc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdGlmICh3ZWVrc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRsZXQgd2Vla3NCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHdlZWtzQmV0d2Vlbik7XG5cdFx0XHRcdGlmICh3ZWVrc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWtzIGFnb1wiO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2VlayBhZ29cIjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuID0gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRsZXQgZGF5c0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoZGF5c0JldHdlZW4pO1xuXHRcdFx0XHRcdGlmIChkYXlzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheXMgYWdvXCI7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXkgYWdvXCI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW4gPSBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0XHRcdGxldCBob3Vyc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IoaG91cnNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VycyBhZ29cIjtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91ciBhZ29cIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuID0gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbiA+IDEpIHtcblx0XHRcdFx0XHRcdFx0bGV0IG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKG1pbnV0ZXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZXMgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGV4dCA9IG1pbnV0ZXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1pbnV0ZSBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IFwiSnVzdCBub3dcIjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblx0cmV0dXJuIHRleHQ7XG59IiwiLy8gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgYmV0d2VlbiBtaW4gKGluY2x1c2l2ZSkgYW5kIG1heCAoZXhjbHVzaXZlKVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUFyYml0cmFyeShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChleGNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufVxuXG4vLyBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgYmV0d2VlbiBtaW4gKGluY2x1ZGVkKSBhbmQgbWF4IChpbmNsdWRlZClcbi8vIFVzaW5nIE1hdGgucm91bmQoKSB3aWxsIGdpdmUgeW91IGEgbm9uLXVuaWZvcm0gZGlzdHJpYnV0aW9uIVxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEluY2x1c2l2ZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21XaXRoaW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSBkZWZpbmVkIHJhbmdlLlxuXG4gQHBhcmFtIG1pbjogVGhlIG1pbmltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxICsgbWF4IC0gbWluKSArIG1pbik7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBldmVuLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW47IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0V2ZW4oNykpOyAvLyBUcmFjZXMgZmFsc2VcbiBjb25zb2xlLmxvZyhpc0V2ZW4oMTIpKTsgLy8gVHJhY2VzIHRydWVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0V2ZW4odmFsdWUpIHtcbiAgcmV0dXJuICh2YWx1ZSAmIDEpID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgb2RkLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgbm90IGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBvZGQ7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc09kZCg3KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNPZGQoMTIpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNPZGQodmFsdWUpIHtcbiAgcmV0dXJuICFpc0V2ZW4odmFsdWUpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlci5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGNvbnRhaW5zIG5vIGRlY2ltYWwgdmFsdWVzLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXI7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc0ludGVnZXIoMS4yMzQ1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW50ZWdlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJSAxID09PSAwO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgcHJpbWUuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBvbmx5IGRpdmlzaWJsZSBieSA8Y29kZT4xPC9jb2RlPiBhbmQgaXRzZWxmLlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIHByaW1lOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNQcmltZSgxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzUHJpbWUoNCkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc1ByaW1lKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gMSB8fCB2YWx1ZSA9PT0gMikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKGlzRXZlbih2YWx1ZSkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBjb25zdCBzID0gTWF0aC5zcXJ0KHZhbHVlKTtcbiAgZm9yIChsZXQgaSA9IDM7IGkgPD0gczsgaSsrKSB7XG4gICAgaWYgKHZhbHVlICUgaSA9PT0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG4vKipcbiBSb3VuZHMgYSBudW1iZXIncyBkZWNpbWFsIHZhbHVlIHRvIGEgc3BlY2lmaWMgcGxhY2UuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgdG8gcm91bmQuXG4gQHBhcmFtIHBsYWNlOiBUaGUgZGVjaW1hbCBwbGFjZSB0byByb3VuZC5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHZhbHVlIHJvdW5kZWQgdG8gdGhlIGRlZmluZWQgcGxhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMikpOyAvLyBUcmFjZXMgMy4xNFxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAzKSk7IC8vIFRyYWNlcyAzLjE0MlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEsIG1ldGhvZCA9IG51bGwpIHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG4gIGlmICghbWV0aG9kKSBtZXRob2QgPSBNYXRoLnJvdW5kO1xuICByZXR1cm4gbWV0aG9kKHZhbHVlICogcCkgLyBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQxKHZhbHVlKSB7XG4gIHJldHVybiBkZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDIodmFsdWUpIHtcbiAgcmV0dXJuIGRlY2ltYWxUb1BsYWNlKHZhbHVlLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMyh2YWx1ZSkge1xuICByZXR1cm4gZGVjaW1hbFRvUGxhY2UodmFsdWUsIDMpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIGluZGV4IGlzIGluY2x1ZGVkIHdpdGhpbiB0aGUgY29sbGVjdGlvbiBsZW5ndGggb3RoZXJ3aXNlIHRoZSBpbmRleCBsb29wcyB0byB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgcmFuZ2UgYW5kIGNvbnRpbnVlcy5cblxuIEBwYXJhbSBpbmRleDogU2hvcCB0byBsb29wIGlmIG5lZWRlZC5cbiBAcGFyYW0gbGVuZ3RoOiBUaGUgdG90YWwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gQHJldHVybiBBIHZhbGlkIHplcm8tYmFzZWQgaW5kZXguXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YXIgY29sb3JzOkFycmF5ID0gbmV3IEFycmF5KFwiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIpO1xuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDIsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBCbHVlXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDQsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBHcmVlblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgtNiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIFJlZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3BJbmRleChpbmRleCwgbGVuZ3RoKSB7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IGxlbmd0aCArIChpbmRleCAlIGxlbmd0aCk7XG4gIH1cblxuICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSB2YWx1ZSBpcyBpbmNsdWRlZCB3aXRoaW4gYSByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgZmFsbHMgd2l0aGluIHRoZSByYW5nZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAdXNhZ2VOb3RlIFRoZSByYW5nZSB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzQmV0d2Vlbig3LCAwLCA1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2Vlbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuICEodmFsdWUgPCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkgfHwgdmFsdWUgPiBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHZhbHVlIGZhbGxzIHdpdGhpbiBhIHJhbmdlOyBpZiBub3QgaXQgaXMgc25hcHBlZCB0byB0aGUgbmVhcmVzdCByYW5nZSB2YWx1ZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIGVpdGhlciB0aGUgbnVtYmVyIGFzIHBhc3NlZCwgb3IgaXRzIHZhbHVlIG9uY2Ugc25hcHBlZCB0byBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuIEB1c2FnZU5vdGUgVGhlIGNvbnN0cmFpbnQgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY29uc3RyYWluKDMsIDAsIDUpKTsgLy8gVHJhY2VzIDNcbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cmFpbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpLCBNYXRoLm1heChmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpO1xufVxuXG4vKipcbiBDcmVhdGVzIGV2ZW5seSBzcGFjZWQgbnVtZXJpY2FsIGluY3JlbWVudHMgYmV0d2VlbiB0d28gbnVtYmVycy5cblxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQHBhcmFtIHN0ZXBzOiBUaGUgbnVtYmVyIG9mIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIGFuIEFycmF5IGNvbXByaXNlZCBvZiB0aGUgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDAsIDUsIDQpKTsgLy8gVHJhY2VzIDEsMiwzLDRcbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMSwgMywgMykpOyAvLyBUcmFjZXMgMS41LDIsMi41XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RlcHNCZXR3ZWVuKGJlZ2luLCBlbmQsIHN0ZXBzKSB7XG4gIHN0ZXBzKys7XG5cbiAgbGV0IGkgPSAwO1xuICBjb25zdCBzdGVwc0JldHdlZW4gPSBbXTtcbiAgY29uc3QgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG4gIHdoaWxlICgrK2kgPCBzdGVwcykge1xuICAgIHN0ZXBzQmV0d2Vlbi5wdXNoKGkgKiBpbmNyZW1lbnQgKyBiZWdpbik7XG4gIH1cblxuICByZXR1cm4gc3RlcHNCZXR3ZWVuO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgdmFsdWUgYmV0d2VlbiB0d28gc3BlY2lmaWVkIHZhbHVlcy5cblxuIEBwYXJhbSBhbW91bnQ6IFRoZSBsZXZlbCBvZiBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuIElmIDxjb2RlPjA8L2NvZGU+LCA8Y29kZT5iZWdpbjwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQ7IGlmIDxjb2RlPjE8L2NvZGU+LCA8Y29kZT5lbmQ8L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkLlxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpbnRlcnBvbGF0ZSgwLjUsIDAsIDEwKSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYW1vdW50LCBiZWdpbiwgZW5kKSB7XG4gIHJldHVybiBiZWdpbiArIChlbmQgLSBiZWdpbikgKiBhbW91bnQ7XG59XG5cbi8qKlxuIERldGVybWluZXMgYSBwZXJjZW50YWdlIG9mIGEgdmFsdWUgaW4gYSBnaXZlbiByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZC5cbiBAcGFyYW0gbWluaW11bTogVGhlIGxvd2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gbWF4aW11bTogVGhlIHVwcGVyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG5vcm1hbGl6ZSg4LCA0LCAyMCkuZGVjaW1hbFBlcmNlbnRhZ2UpOyAvLyBUcmFjZXMgMC4yNVxuIDwvY29kZT5cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgbWluaW11bSwgbWF4aW11bSkge1xuLy8gICByZXR1cm4gbmV3IFBlcmNlbnQoKHZhbHVlIC0gbWluaW11bSkgLyAobWF4aW11bSAtIG1pbmltdW0pKTtcbi8vIH1cblxuLyoqXG4gTWFwcyBhIHZhbHVlIGZyb20gb25lIGNvb3JkaW5hdGUgc3BhY2UgdG8gYW5vdGhlci5cblxuIEBwYXJhbSB2YWx1ZTogVmFsdWUgZnJvbSB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZSB0byBtYXAgdG8gdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4xOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MTogRW5kaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4yOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDI6IEVuZGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhtYXAoMC43NSwgMCwgMSwgMCwgMTAwKSk7IC8vIFRyYWNlcyA3NVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gbGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4Mik7XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4vLyBcdHJldHVybiBtaW4yICsgKG1heDIgLSBtaW4yKSAqICgodmFsdWUgLSBtaW4xKSAvIChtYXgxIC0gbWluMSkpO1xuLy8gfVxuXG4vKipcbiBMb3cgcGFzcyBmaWx0ZXIgYWxvZ3JpdGhtIGZvciBlYXNpbmcgYSB2YWx1ZSB0b3dhcmQgYSBkZXN0aW5hdGlvbiB2YWx1ZS4gV29ya3MgYmVzdCBmb3IgdHdlZW5pbmcgdmFsdWVzIHdoZW4gbm8gZGVmaW5pdGUgdGltZSBkdXJhdGlvbiBleGlzdHMgYW5kIHdoZW4gdGhlIGRlc3RpbmF0aW9uIHZhbHVlIGNoYW5nZXMuXG5cbiBJZiA8Y29kZT4oMC41IDwgbiA8IDEpPC9jb2RlPiwgdGhlbiB0aGUgcmVzdWx0aW5nIHZhbHVlcyB3aWxsIG92ZXJzaG9vdCAocGluZy1wb25nKSB1bnRpbCB0aGV5IHJlYWNoIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZS4gV2hlbiA8Y29kZT5uPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gMSwgYXMgaXRzIHZhbHVlIGluY3JlYXNlcywgdGhlIHRpbWUgaXQgdGFrZXMgdG8gcmVhY2ggdGhlIGRlc3RpbmF0aW9uIGFsc28gaW5jcmVhc2VzLiBBIHBsZWFzaW5nIHZhbHVlIGZvciA8Y29kZT5uPC9jb2RlPiBpcyA1LlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZS5cbiBAcGFyYW0gZGVzdDogVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuIEBwYXJhbSBuOiBUaGUgc2xvd2Rvd24gZmFjdG9yLlxuIEByZXR1cm4gVGhlIHdlaWdodGVkIGF2ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRlZEF2ZXJhZ2UodmFsdWUsIGRlc3QsIG4pIHtcbiAgcmV0dXJuIHZhbHVlICsgKGRlc3QgLSB2YWx1ZSkgLyBuO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIlwiPC9jb2RlPi5cbiBAcGFyYW0gbWluTGVuZ3RoOiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIG51bWJlcjsgZGVmYXVsdHMgdG8gPGNvZGU+MCA8L2NvZGU+LlxuIEBwYXJhbSBmaWxsQ2hhcjogVGhlIGxlYWRpbmcgY2hhcmFjdGVyIHVzZWQgdG8gbWFrZSB0aGUgbnVtYmVyIHRoZSBtaW5pbXVtIGxlbmd0aDsgZGVmYXVsdHMgdG8gPGNvZGU+XCIwXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdCgxMjM0NTY3LCBcIixcIiwgOCkpOyAvLyBUcmFjZXMgMDEsMjM0LDU2N1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwga0RlbGltLCBtaW5MZW5ndGgsIGZpbGxDaGFyKSB7XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gJywnO1xuICB9XG4gIGlmIChpc05hTihtaW5MZW5ndGgpKSB7XG4gICAgbWluTGVuZ3RoID0gMDtcbiAgfVxuICBpZiAoIWZpbGxDaGFyKSB7XG4gICAgZmlsbENoYXIgPSAnMCc7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcbiAgY29uc3QgbGVuID0gbnVtLmxlbmd0aDtcblxuICBpZiAobWluTGVuZ3RoICE9PSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuICAgIG1pbkxlbmd0aCAtPSBsZW47XG5cbiAgICBjb25zdCBhZGRDaGFyID0gZmlsbENoYXIgfHwgJzAnO1xuXG4gICAgd2hpbGUgKG1pbkxlbmd0aC0tKSB7XG4gICAgICBudW0gPSBhZGRDaGFyICsgbnVtO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrRGVsaW0gIT09IG51bGwgJiYgbnVtLmxlbmd0aCA+IDMpIHtcbiAgICBjb25zdCB0b3RhbERlbGltID0gTWF0aC5mbG9vcihudW0ubGVuZ3RoIC8gMyk7XG4gICAgY29uc3QgdG90YWxSZW1haW4gPSBudW0ubGVuZ3RoICUgMztcbiAgICBjb25zdCBudW1TcGxpdCA9IG51bS5zcGxpdCgnJyk7XG4gICAgbGV0IGkgPSAtMTtcblxuICAgIHdoaWxlICgrK2kgPCB0b3RhbERlbGltKSB7XG4gICAgICBudW1TcGxpdC5zcGxpY2UodG90YWxSZW1haW4gKyA0ICogaSwgMCwga0RlbGltKTtcbiAgICB9XG5cbiAgICBpZiAodG90YWxSZW1haW4gPT09IDApIHtcbiAgICAgIG51bVNwbGl0LnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgbnVtID0gbnVtU3BsaXQuam9pbignJyk7XG4gIH1cblxuICBpZiAocmVtYWluZGVyICE9PSAwKSB7XG4gICAgbnVtICs9IHJlbWFpbmRlci50b1N0cmluZygpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuICBpZiAoZm9yY2VEZWNpbWFscyA9PT0gbnVsbCkge1xuICAgIGZvcmNlRGVjaW1hbHMgPSB0cnVlO1xuICB9XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gJywnO1xuICB9XG4gIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMTtcbiAgbGV0IGN1cnJlbmN5ID0gZm9ybWF0KE1hdGguZmxvb3IodmFsdWUpLCBrRGVsaW0pO1xuXG4gIGlmIChyZW1haW5kZXIgIT09IDAgfHwgZm9yY2VEZWNpbWFscykge1xuICAgIGN1cnJlbmN5ICs9IHJlbWFpbmRlci50b0ZpeGVkKDIpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeTtcbn1cblxuLyoqXG4gRmluZHMgdGhlIGVuZ2xpc2ggb3JkaW5hbCBzdWZmaXggZm9yIHRoZSBudW1iZXIgZ2l2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBmaW5kIHRoZSBvcmRpbmFsIHN1ZmZpeCBvZi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHN1ZmZpeCBmb3IgdGhlIG51bWJlciwgMiBjaGFyYWN0ZXJzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coMzIgKyBnZXRPcmRpbmFsU3VmZml4KDMyKSk7IC8vIFRyYWNlcyAzMm5kXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPj0gMTAgJiYgdmFsdWUgPD0gMjApIHtcbiAgICByZXR1cm4gJ3RoJztcbiAgfVxuXG4gIGlmICh2YWx1ZSA9PT0gMCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUgJSAxMCkge1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiAncmQnO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiAnbmQnO1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiAnc3QnO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gJ3RoJztcbiAgfVxufVxuXG4vKipcbiBBZGRzIGEgbGVhZGluZyB6ZXJvIGZvciBudW1iZXJzIGxlc3MgdGhhbiB0ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBhZGQgbGVhZGluZyB6ZXJvLlxuIEByZXR1cm4gTnVtYmVyIGFzIGEgU3RyaW5nOyBpZiB0aGUgbnVtYmVyIHdhcyBsZXNzIHRoYW4gdGVuIHRoZSBudW1iZXIgd2lsbCBoYXZlIGEgbGVhZGluZyB6ZXJvLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oNykpOyAvLyBUcmFjZXMgMDdcbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybygxMSkpOyAvLyBUcmFjZXMgMTFcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVybyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAxMCA/ICcwJyArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcbn1cblxuLyoqXG4gU3BlbGxzIHRoZSBwcm92aWRlZCBudW1iZXIuXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBzcGVsbC4gTmVlZHMgdG8gYmUgbGVzcyB0aGFuIDk5OTk5OTk5OS5cbiBAcmV0dXJuIFRoZSBudW1iZXIgc3BlbGxlZCBvdXQgYXMgYSBTdHJpbmcuXG4gQHRocm93cyA8Y29kZT5FcnJvcjwvY29kZT4gaWYgPGNvZGU+dmFsdWU8L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiA5OTk5OTk5OTkuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhzcGVsbCgwKSk7IC8vIFRyYWNlcyBaZXJvXG4gY29uc29sZS5sb2coc3BlbGwoMjMpKTsgLy8gVHJhY2VzIFR3ZW50eS1UaHJlZVxuIGNvbnNvbGUubG9nKHNwZWxsKDIwMDU2NzgpKTsgLy8gVHJhY2VzIFR3byBNaWxsaW9uLCBGaXZlIFRob3VzYW5kLCBTaXggSHVuZHJlZCBTZXZlbnR5LUVpZ2h0XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3BlbGwodmFsdWUpIHtcbiAgaWYgKHZhbHVlID4gOTk5OTk5OTk5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdWYWx1ZSB0b28gbGFyZ2UgZm9yIHRoaXMgbWV0aG9kLicpO1xuICB9XG5cbiAgY29uc3Qgb25lc1NwZWxsaW5ncyA9IFtcbiAgICAnJyxcbiAgICAnT25lJyxcbiAgICAnVHdvJyxcbiAgICAnVGhyZWUnLFxuICAgICdGb3VyJyxcbiAgICAnRml2ZScsXG4gICAgJ1NpeCcsXG4gICAgJ1NldmVuJyxcbiAgICAnRWlnaHQnLFxuICAgICdOaW5lJyxcbiAgICAnVGVuJyxcbiAgICAnRWxldmVuJyxcbiAgICAnVHdlbHZlJyxcbiAgICAnVGhpcnRlZW4nLFxuICAgICdGb3VydGVlbicsXG4gICAgJ0ZpZnRlZW4nLFxuICAgICdTaXh0ZWVuJyxcbiAgICAnU2V2ZW50ZWVuJyxcbiAgICAnRWlnaHRlZW4nLFxuICAgICdOaW5ldGVlbicsXG4gIF07XG4gIGNvbnN0IHRlbnNTcGVsbGluZ3MgPSBbJycsICcnLCAnVHdlbnR5JywgJ1RoaXJ0eScsICdGb3J0eScsICdGaWZ0eScsICdTaXh0eScsICdTZXZlbnR5JywgJ0VpZ2h0eScsICdOaW5ldHknXTtcbiAgbGV0IHNwZWxsaW5nID0gJyc7XG5cbiAgY29uc3QgbWlsbGlvbnMgPSB2YWx1ZSAvIDEwMDAwMDA7XG4gIHZhbHVlICU9IDEwMDAwMDA7XG5cbiAgY29uc3QgdGhvdXNhbmRzID0gdmFsdWUgLyAxMDAwO1xuICB2YWx1ZSAlPSAxMDAwO1xuXG4gIGNvbnN0IGh1bmRyZWRzID0gdmFsdWUgLyAxMDA7XG4gIHZhbHVlICU9IDEwMDtcblxuICBjb25zdCB0ZW5zID0gdmFsdWUgLyAxMDtcbiAgdmFsdWUgJT0gMTA7XG5cbiAgY29uc3Qgb25lcyA9IHZhbHVlICUgMTA7XG5cbiAgaWYgKG1pbGxpb25zICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gJycgOiAnLCAnO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKG1pbGxpb25zKSArICcgTWlsbGlvbic7XG4gIH1cblxuICBpZiAodGhvdXNhbmRzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gJycgOiAnLCAnO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKHRob3VzYW5kcykgKyAnIFRob3VzYW5kJztcbiAgfVxuXG4gIGlmIChodW5kcmVkcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/ICcnIDogJywgJztcbiAgICBzcGVsbGluZyArPSBzcGVsbChodW5kcmVkcykgKyAnIEh1bmRyZWQnO1xuICB9XG5cbiAgaWYgKHRlbnMgIT09IDAgfHwgb25lcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/ICcnIDogJyAnO1xuXG4gICAgaWYgKHRlbnMgPCAyKSB7XG4gICAgICBzcGVsbGluZyArPSBvbmVzU3BlbGxpbmdzW3RlbnMgKiAxMCArIG9uZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVsbGluZyArPSB0ZW5zU3BlbGxpbmdzW3RlbnNdO1xuXG4gICAgICBpZiAob25lcyAhPT0gMCkge1xuICAgICAgICBzcGVsbGluZyArPSAnLScgKyBvbmVzU3BlbGxpbmdzW29uZXNdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzcGVsbGluZy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1plcm8nO1xuICB9XG5cbiAgcmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyAnMCcgKyBoZXggOiBoZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFRvSGV4KHJnYi5yKSArIGNvbXBvbmVudFRvSGV4KHJnYi5nKSArIGNvbXBvbmVudFRvSGV4KHJnYi5iKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdFxuICAgID8ge1xuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiAncjonICsgdGhpcy5yICsgJyxnOicgKyB0aGlzLmcgKyAnLGI6JyArIHRoaXMuYjtcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKSB7XG4gIHJldHVybiAoZGVncmVlcyAqIE1hdGguUEkpIC8gMTgwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFkVG9EZWcocmFkKSB7XG4gIHJldHVybiAocmFkICogMTgwKSAvIE1hdGguUEk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhzdGVwKHZhbHVlLCBtaW4sIG1heCkge1xuICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSk7XG4gIHJldHVybiB4ICogeCAqICgzIC0gMiAqIHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gIHJldHVybiBhICsgdCAqIChiIC0gYSk7XG4gIC8vIHJldHVybiBhKDEtdCkgKyBidFxuICAvL3JldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4KGEsIGIsIHQpIHtcbiAgcmV0dXJuIGxlcnAoYSwgYiwgdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZChuLCBtKSB7XG4gIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9hIG1vZHVsbyBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgbmVnYXRpdmVzIG51bWJlcnMgJ2NvcnJlY3RseSdcbmV4cG9ydCBmdW5jdGlvbiBtb2RXcmFwKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL3JhbmRvbSB3aXRoIHNlZWQsIHJldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tMUQoc2VlZCkge1xuICByZXR1cm4gbW9kV3JhcChNYXRoLnNpbihzZWVkKSAqIDQzNzU4LjU0NTMsIDEpO1xufVxuXG4vL3JldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gbm9pc2UxRCh4KSB7XG4gIGNvbnN0IGkgPSBNYXRoLmZsb29yKHgpO1xuICBjb25zdCBmID0gbW9kV3JhcCh4LCAxKTtcbiAgY29uc3QgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbGVycCh1LCByYW5kb20xRChpKSwgcmFuZG9tMUQoaSArIDEuMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcENsYW1wKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBjbGFtcChsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKSwgbWluMiwgbWF4Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5lV2F2ZShhbmdsZSA9IDAsIGZyZXF1ZW5jeSA9IE1hdGguUEksIHRpbWUgPSAwLCBzcGVlZCA9IDEsIGFtcGxpdHVkZSA9IDEpIHtcbiAgcmV0dXJuIE1hdGguc2luKGFuZ2xlICogZnJlcXVlbmN5ICsgdGltZSAqIHNwZWVkKSAqIGFtcGxpdHVkZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wVGltZSh0aW1lLCBzdGFydFRpbWUsIGR1cmF0aW9uKSB7XG4gIHJldHVybiBjbGFtcCh0aW1lIC0gc3RhcnRUaW1lLCAwLjAsIGR1cmF0aW9uKSAvIGR1cmF0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgZWFzZSB2YWx1ZVxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFsdWUgKz0gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbik7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbiA9IDAuMSkge1xuICByZXR1cm4gKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHBhcmFtIHNwZWVkOiBUaGUgY3VycmVudCBzcGVlZFxuIEBwYXJhbSBlbGFzdGljaXR5OiBUaGUgZWxhc3RpY2l0eSBmcm9tIDAgdG8gMVxuIEByZXR1cm4gVGhlIG5ldyBzcGVlZCB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHNwZWVkID0gc3ByaW5nKHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uLCBzcGVlZCwgZWxhc3RpY2l0eSk7XG4gdmFsdWUgKz0gc3BlZWQ7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByaW5nKHZhbHVlLCB0YXJnZXQgPSAwLCBmcmljdGlvbiA9IDAuMSwgc3BlZWQgPSAwLCBlbGFzdGljaXR5ID0gMCkge1xuICByZXR1cm4gc3BlZWQgKiBlbGFzdGljaXR5ICsgKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTXVsdGlwbGVSb3RhdGlvbnMoYW5nbGUpIHtcbiAgY29uc3QgY2lyY2xlID0gTWF0aC5QSSAqIDI7XG4gIHdoaWxlIChhbmdsZSA+IGNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSAtPSBjaXJjbGU7XG4gIH1cbiAgd2hpbGUgKGFuZ2xlIDwgLWNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSArPSBjaXJjbGU7XG4gIH1cbiAgcmV0dXJuIGFuZ2xlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4Q29sb3JTdHJpbmdUb051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlLnJlcGxhY2UoJyMnLCAnMHgnKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUZpbGVuYW1lLCBjcmVhdGVGaWxlbmFtZU9ubHkgfSBmcm9tICcuL21vZGVsL3V0aWxzJztcblxuLy8gY29uc3QgeyBjcmVhdGVGRm1wZWcsIGZldGNoRmlsZSB9ID0gRkZtcGVnO1xuLy8gY29uc29sZS5sb2coJ0ZGbXBlZycsIEZGbXBlZyk7XG5cbmxldCByZWNvcmRlcjtcbmxldCBkYXRhID0gW107XG5sZXQgYmxvYjtcbmxldCBjdXJyZW50VGFiSWQ7XG5cbmNvbnN0IGZmbXBlZyA9IEZGbXBlZy5jcmVhdGVGRm1wZWcoe1xuICBjb3JlUGF0aDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdmZm1wZWctY29yZS5qcycpLFxuICBsb2c6IHRydWUsXG4gIG1haW5OYW1lOiAnbWFpbicsXG59KTtcbi8vIGNvbnNvbGUubG9nKCdmZm1wZWcnLCBmZm1wZWcpO1xuXG5mZm1wZWcuc2V0UHJvZ3Jlc3MoKHBhcmFtcykgPT4ge1xuICBjb25zb2xlLmxvZygncHJvZ3Jlc3M6JywgcGFyYW1zKTtcbn0pO1xuXG5mZm1wZWcuc2V0TG9nZ2VyKChwYXJhbXMpID0+IHtcbiAgc3dpdGNoIChwYXJhbXMudHlwZSkge1xuICAgIGNhc2UgJ2ZmZXJyJzpcbiAgICAvLyBjYXNlICdpbmZvJzpcbiAgICBjYXNlICdmZm91dCc6XG4gICAgICBjb25zdCBtc2cgPSB7XG4gICAgICAgIHR5cGU6ICdzY3JvbGxDYXB0dXJlRkZtcGVnTG9nVG9TVycsXG4gICAgICAgIGxvZ1R5cGU6IHBhcmFtcy50eXBlLFxuICAgICAgICBtZXNzYWdlOiBwYXJhbXMubWVzc2FnZSxcbiAgICAgICAgdGFiSWQ6IGN1cnJlbnRUYWJJZCxcbiAgICAgIH07XG4gICAgICAvLyBjb25zb2xlLmxvZygnb2Zmc2NyZWVuIG1zZycsIG1zZyk7XG4gICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZShtc2cpO1xuICAgICAgYnJlYWs7XG4gIH1cbn0pO1xuXG5jaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2UpID0+IHtcbiAgaWYgKG1lc3NhZ2UudGFyZ2V0ID09PSAnb2Zmc2NyZWVuJykge1xuICAgIHN3aXRjaCAobWVzc2FnZS50eXBlKSB7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RhcnRPZmZzY3JlZW5SZWNvcmRpbmcnOlxuICAgICAgICBzdGFydFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzY3JvbGxDYXB0dXJlU3RvcE9mZnNjcmVlblJlY29yZGluZyc6XG4gICAgICAgIHN0b3BSZWNvcmRpbmcobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbnJlY29nbml6ZWQgbWVzc2FnZTonLCBtZXNzYWdlLnR5cGUpO1xuICAgIH1cbiAgfVxufSk7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgaWYgKHJlY29yZGVyPy5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBzdGFydFJlY29yZGluZyB3aGlsZSByZWNvcmRpbmcgaXMgaW4gcHJvZ3Jlc3MuJyk7XG4gIH1cbiAgY29uc29sZS5sb2coJ3N0YXJ0UmVjb3JkaW5nJywgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICBjb25zdCBzaXplID0geyB4OiBtZXNzYWdlLnRhYldpZHRoLCB5OiBtZXNzYWdlLnRhYkhlaWdodCB9O1xuICBjb25zdCBwaXhlbFJhdGlvID0gbWVzc2FnZS5waXhlbFJhdGlvO1xuICBjb25zdCBjb25zdHJhaW50cyA9IHt9O1xuICBjb25zdCBjb25zdHJhaW50U2l6ZXMgPSBbXG4gICAgeyB3aWR0aDogc2l6ZS54LCBoZWlnaHQ6IHNpemUueSB9LFxuICAgIHsgd2lkdGg6IHNpemUueCAqIG1lc3NhZ2Uuem9vbUxldmVsLCBoZWlnaHQ6IHNpemUueSAqIG1lc3NhZ2Uuem9vbUxldmVsIH0sXG4gICAgeyB3aWR0aDogc2l6ZS54ICogcGl4ZWxSYXRpbywgaGVpZ2h0OiBzaXplLnkgKiBwaXhlbFJhdGlvIH0sXG4gIF07XG4gIGNvbnN0cmFpbnRTaXplcy5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGEud2lkdGggKiBhLmhlaWdodCAtIGIud2lkdGggKiBiLmhlaWdodDtcbiAgfSk7XG4gIGNvbnNvbGUubG9nKCdjb25zdHJhaW50U2l6ZXMnLCBjb25zdHJhaW50U2l6ZXMpO1xuICBpZiAobWVzc2FnZS5leHBvcnRWaWRlbykge1xuICAgIGNvbnN0cmFpbnRzLnZpZGVvID0ge1xuICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgICAgbWluV2lkdGg6IGNvbnN0cmFpbnRTaXplc1swXS53aWR0aCxcbiAgICAgICAgbWluSGVpZ2h0OiBjb25zdHJhaW50U2l6ZXNbMF0uaGVpZ2h0LFxuICAgICAgICBtYXhXaWR0aDogY29uc3RyYWludFNpemVzWzJdLndpZHRoLFxuICAgICAgICBtYXhIZWlnaHQ6IGNvbnN0cmFpbnRTaXplc1syXS5oZWlnaHQsXG4gICAgICAgIG1pbkZyYW1lUmF0ZTogMzAsXG4gICAgICAgIG1heEZyYW1lUmF0ZTogNjAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICBjb25zdHJhaW50cy5hdWRpbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgY29uc29sZS5sb2coJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhJywgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgbGV0IG1lZGlhO1xuICB0cnkge1xuICAgIG1lZGlhID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKCduYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSBlcnJvcicsIGVycm9yKTtcbiAgfVxuICBjb25zb2xlLmxvZygnbWVkaWE9JywgbWVkaWEpO1xuXG4gIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG91dHB1dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShtZWRpYSk7XG4gICAgc291cmNlLmNvbm5lY3Qob3V0cHV0LmRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIGxldCBtaW1lVHlwZTtcbiAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICBtaW1lVHlwZSA9ICd2aWRlby93ZWJtO2NvZGVjcz1oMjY0JztcbiAgICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgICAgbWltZVR5cGUgKz0gJyxvcHVzJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWltZVR5cGUgPSAnYXVkaW8vd2VibTtjb2RlY3M9b3B1cyc7XG4gIH1cblxuICBsZXQgdmlkZW9CaXRzUGVyU2Vjb25kID0gbWVzc2FnZS52aWRlb0JpdHNQZXJTZWNvbmQgfHwgMTY7XG4gIGxldCBhdWRpb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLmF1ZGlvQml0c1BlclNlY29uZCB8fCAxMjg7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBtaW1lVHlwZSxcbiAgICBhdWRpb0JpdHNQZXJTZWNvbmQ6IGF1ZGlvQml0c1BlclNlY29uZCAqIDEwMDAsXG4gICAgdmlkZW9CaXRzUGVyU2Vjb25kOiB2aWRlb0JpdHNQZXJTZWNvbmQgKiAxMDAwMDAwLFxuICB9O1xuXG4gIGNvbnNvbGUubG9nKCdNZWRpYVJlY29yZGVyJywgSlNPTi5zdHJpbmdpZnkob3B0aW9ucykpO1xuXG4gIHJlY29yZGVyID0gbmV3IE1lZGlhUmVjb3JkZXIobWVkaWEsIG9wdGlvbnMpO1xuICByZWNvcmRlci5vbmRhdGFhdmFpbGFibGUgPSAoZXZlbnQpID0+IGRhdGEucHVzaChldmVudC5kYXRhKTtcbiAgcmVjb3JkZXIub25zdG9wID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdkYXRhPScsIGRhdGEpO1xuICAgIGNvbnN0IGJsb2JGb3JtYXQgPSBtaW1lVHlwZS5zcGxpdCgnOycpWzBdO1xuICAgIGNvbnNvbGUubG9nKCdibG9iRm9ybWF0PScsIGJsb2JGb3JtYXQpO1xuICAgIGJsb2IgPSBuZXcgQmxvYihkYXRhLCB7IHR5cGU6IGJsb2JGb3JtYXQgfSk7XG4gICAgY29uc29sZS5sb2coJ2Jsb2I9JywgYmxvYik7XG5cbiAgICBjb252ZXJ0U3RyZWFtcyhibG9iLCBtZXNzYWdlKTtcblxuICAgIGRhdGEgPSBbXTtcbiAgfTtcbiAgcmVjb3JkZXIuc3RhcnQoKTtcblxuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICdyZWNvcmRpbmcnO1xufVxuXG5mdW5jdGlvbiBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgcmVjb3JkZXIuc3RvcCgpO1xuICByZWNvcmRlci5zdHJlYW0uZ2V0VHJhY2tzKCkuZm9yRWFjaCgodCkgPT4gdC5zdG9wKCkpO1xuICByZWNvcmRlciA9IHVuZGVmaW5lZDtcbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcbn1cblxuZnVuY3Rpb24gY29udmVydFN0cmVhbXModmlkZW9CbG9iLCBtZXNzYWdlKSB7XG4gIGN1cnJlbnRUYWJJZCA9IG1lc3NhZ2UudGFiSWQ7XG4gIHZhciBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgZmlsZVJlYWRlci5vbmxvYWQgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgLy8gdmFyIGJsb2IgPSBuZXcgRmlsZShbcmVzdWx0LmRhdGFdLCAndGVzdC5tcDQnLCB7XG4gICAgLy8gICB0eXBlOiAndmlkZW8vbXA0JyxcbiAgICAvLyB9KTtcblxuICAgIGxldCBpbnB1dEZpbGVOYW1lID0gJ3NhbXBsZV92aWRlby53ZWJtJztcbiAgICBsZXQgb3V0cHV0RmlsZU5hbWUgPSAnc2FtcGxlX3ZpZGVvLm1wNCc7XG4gICAgbGV0IGRvd25sb2FkRXh0ZW5zaW9uID0gJ21wNCc7XG4gICAgbGV0IGNvbW1hbmRTdHI7XG5cbiAgICBpZiAobWVzc2FnZS5leHBvcnRWaWRlbykge1xuICAgICAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICAgICAgY29tbWFuZFN0ciA9IGBmZm1wZWcgLWkgJHtpbnB1dEZpbGVOYW1lfSAtYzp2IGNvcHkgLWM6YSBhYWMgJHtvdXRwdXRGaWxlTmFtZX1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29tbWFuZFN0ciA9IGBmZm1wZWcgLWkgJHtpbnB1dEZpbGVOYW1lfSAtYzp2IGNvcHkgJHtvdXRwdXRGaWxlTmFtZX1gO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkb3dubG9hZEV4dGVuc2lvbiA9ICdtNGEnO1xuICAgICAgb3V0cHV0RmlsZU5hbWUgPSBgc2FtcGxlX3ZpZGVvLm00YWA7XG4gICAgICBjb21tYW5kU3RyID0gYGZmbXBlZyAtaSAke2lucHV0RmlsZU5hbWV9IC1jOmEgYWFjICR7b3V0cHV0RmlsZU5hbWV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlTmFtZSA9IGNyZWF0ZUZpbGVuYW1lT25seSgpO1xuICAgIGNvbnN0IGRvd25sb2FkRmlsZU5hbWUgPSBgJHtmaWxlTmFtZX0uJHtkb3dubG9hZEV4dGVuc2lvbn1gO1xuXG4gICAgY29uc3QgYmxvYiA9IGF3YWl0IHJ1bkZGbXBlZyhpbnB1dEZpbGVOYW1lLCBvdXRwdXRGaWxlTmFtZSwgY29tbWFuZFN0ciwgbmV3IFVpbnQ4QXJyYXkodGhpcy5yZXN1bHQpKTtcbiAgICAvLyBjb25zb2xlLmxvZygncnVuRkZtcGVnIGJsb2InLCBibG9iKTtcbiAgICAvLyB2YXIgZmlsZSA9IG5ldyBGaWxlKFtibG9iXSwgZG93bmxvYWRGaWxlTmFtZSwge1xuICAgIC8vICAgdHlwZTogYHZpZGVvLyR7ZG93bmxvYWRFeHRlbnNpb259YCxcbiAgICAvLyB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygncnVuRkZtcGVnIGZpbGUnLCBmaWxlKTtcbiAgICBjb25zdCB2aWRlb1VSTE1lc3NhZ2UgPSB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMQmFja2dyb3VuZCcsXG4gICAgICB2aWRlb1VSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSxcbiAgICAgIGZpbGVOYW1lOiBkb3dubG9hZEZpbGVOYW1lLFxuICAgICAgdGFiSWQ6IG1lc3NhZ2UudGFiSWQsXG4gICAgICBtaW1lVHlwZTogYHZpZGVvLyR7ZG93bmxvYWRFeHRlbnNpb259YCxcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWRlb1VSTE1lc3NhZ2UnLCB2aWRlb1VSTE1lc3NhZ2UpO1xuICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKHZpZGVvVVJMTWVzc2FnZSk7XG4gIH07XG4gIGZpbGVSZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIodmlkZW9CbG9iKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcnVuRkZtcGVnKGlucHV0RmlsZU5hbWUsIG91dHB1dEZpbGVOYW1lLCBjb21tYW5kU3RyLCBmaWxlKSB7XG4gIC8vIGNvbnNvbGUubG9nKCdydW5GRm1wZWcgY29tbWFuZFN0cicsIGNvbW1hbmRTdHIpO1xuXG4gIGlmIChmZm1wZWcuaXNMb2FkZWQoKSkge1xuICAgIGF3YWl0IGZmbXBlZy5leGl0KCk7XG4gIH1cblxuICBhd2FpdCBmZm1wZWcubG9hZCgpO1xuXG4gIGNvbnN0IGNvbW1hbmRMaXN0ID0gY29tbWFuZFN0ci5zcGxpdCgnICcpO1xuICBpZiAoY29tbWFuZExpc3Quc2hpZnQoKSAhPT0gJ2ZmbXBlZycpIHtcbiAgICBhbGVydCgnUGxlYXNlIHN0YXJ0IHdpdGggZmZtcGVnJyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZmZtcGVnLkZTKCd3cml0ZUZpbGUnLCBpbnB1dEZpbGVOYW1lLCBhd2FpdCBGRm1wZWcuZmV0Y2hGaWxlKGZpbGUpKTtcbiAgYXdhaXQgZmZtcGVnLnJ1biguLi5jb21tYW5kTGlzdCk7XG4gIGNvbnN0IGRhdGEgPSBmZm1wZWcuRlMoJ3JlYWRGaWxlJywgb3V0cHV0RmlsZU5hbWUpO1xuICAvLyBjb25zb2xlLmxvZygnZmZtcGVnIGRhdGEnLCBkYXRhKTtcblxuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGEuYnVmZmVyXSk7XG4gIC8vIGNvbnNvbGUubG9nKCdmZm1wZWcgYmxvYicsIGJsb2IpO1xuICByZXR1cm4gYmxvYjtcbiAgLy8gZG93bmxvYWRGaWxlKGJsb2IsIG91dHB1dEZpbGVOYW1lKTtcbn1cblxuZnVuY3Rpb24gZG93bmxvYWRGaWxlKGJsb2IsIGZpbGVOYW1lKSB7XG4gIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gIGEuZG93bmxvYWQgPSBmaWxlTmFtZTtcbiAgYS5jbGljaygpO1xufVxuIl0sIm5hbWVzIjpbInRpbWVBTVBNIiwiYWRkTGVhZGluZ1plcm8iLCJjcmVhdGVGaWxlbmFtZSIsImV4dGVuc2lvbiIsInRleHQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJuYW1lIiwiY3JlYXRlRmlsZW5hbWVPbmx5IiwiZGF0ZSIsIkRhdGUiLCJhbXBtVGltZSIsImRhdGVEYXRhIiwieWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJnZXRNb250aCIsImdldERhdGUiLCJhbXBtIiwidG9VcHBlckNhc2UiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdEFNUE0iLCJzcGFjZUJldHdlZW4iLCJzdHJUaW1lIiwidG9Vbml4U3RyaW5nIiwidG9Vbml4VVRDU3RyaW5nIiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXRVVENIb3VycyIsImdldFVUQ01pbnV0ZXMiLCJnZXRVVENTZWNvbmRzIiwiYWRkSG91cnMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsImFkZERheXMiLCJkYXlzIiwibW9udGhzIiwiZW4iLCJmciIsImxhbmd1YWdlIiwiZ2V0QWdlIiwiYmlydGhEYXRlIiwidG9kYXkiLCJhZ2UiLCJtIiwidHJlYXRBc1VUQyIsInJlc3VsdCIsInNldE1pbnV0ZXMiLCJnZXRUaW1lem9uZU9mZnNldCIsIm1pbnV0ZXNCZXR3ZWVuIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIm1pbGxpc2Vjb25kc1Blck1pbnV0ZSIsImhvdXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckhvdXIiLCJkYXlzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlckRheSIsIndlZWtzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlcldlZWsiLCJtb250aHNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyTW9udGgiLCJ5ZWFyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJZZWFyIiwiZ2V0RmFtaWxpYXJUaW1lQmV0d2VlbiIsInllYXJzQmV0d2VlbkZsb29yIiwiTWF0aCIsImZsb29yIiwidG9TdHJpbmciLCJtb250aHNCZXR3ZWVuRmxvb3IiLCJ3ZWVrc0JldHdlZW5GbG9vciIsImRheXNCZXR3ZWVuRmxvb3IiLCJob3Vyc0JldHdlZW5GbG9vciIsIm1pbnV0ZXNCZXR3ZWVuRmxvb3IiLCJnZXRSYW5kb21BcmJpdHJhcnkiLCJtaW4iLCJtYXgiLCJyYW5kb20iLCJnZXRSYW5kb21JbnQiLCJnZXRSYW5kb21JbnRJbmNsdXNpdmUiLCJyYW5kb21XaXRoaW5SYW5nZSIsInJhbmRvbUludGVnZXJXaXRoaW5SYW5nZSIsImlzRXZlbiIsInZhbHVlIiwiaXNPZGQiLCJpc0ludGVnZXIiLCJpc1ByaW1lIiwicyIsInNxcnQiLCJpIiwiZGVjaW1hbFRvUGxhY2UiLCJwbGFjZSIsIm1ldGhvZCIsInAiLCJwb3ciLCJyb3VuZCIsInJvdW5kMSIsInJvdW5kMiIsInJvdW5kMyIsImxvb3BJbmRleCIsImluZGV4IiwiaXNCZXR3ZWVuIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwiY29uc3RyYWluIiwiY3JlYXRlU3RlcHNCZXR3ZWVuIiwiYmVnaW4iLCJlbmQiLCJzdGVwcyIsInN0ZXBzQmV0d2VlbiIsImluY3JlbWVudCIsInB1c2giLCJpbnRlcnBvbGF0ZSIsImFtb3VudCIsIm1hcCIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJsZXJwIiwibm9ybSIsImdldFdlaWdodGVkQXZlcmFnZSIsImRlc3QiLCJuIiwiZm9ybWF0Iiwia0RlbGltIiwibWluTGVuZ3RoIiwiZmlsbENoYXIiLCJpc05hTiIsInJlbWFpbmRlciIsIm51bSIsImxlbiIsImFkZENoYXIiLCJ0b3RhbERlbGltIiwidG90YWxSZW1haW4iLCJudW1TcGxpdCIsInNwbGl0Iiwic3BsaWNlIiwic2hpZnQiLCJqb2luIiwic3Vic3RyIiwiZm9ybWF0Q3VycmVuY3kiLCJmb3JjZURlY2ltYWxzIiwiY3VycmVuY3kiLCJ0b0ZpeGVkIiwiZ2V0T3JkaW5hbFN1ZmZpeCIsInNwZWxsIiwiRXJyb3IiLCJvbmVzU3BlbGxpbmdzIiwidGVuc1NwZWxsaW5ncyIsInNwZWxsaW5nIiwibWlsbGlvbnMiLCJ0aG91c2FuZHMiLCJodW5kcmVkcyIsInRlbnMiLCJvbmVzIiwiY29tcG9uZW50VG9IZXgiLCJjIiwiaGV4IiwicmdiVG9IZXgiLCJyZ2IiLCJyIiwiZyIsImIiLCJoZXhUb1JnYiIsImV4ZWMiLCJwYXJzZUludCIsImRlZ1RvUmFkIiwiZGVncmVlcyIsIlBJIiwicmFkVG9EZWciLCJyYWQiLCJzbW9vdGhzdGVwIiwieCIsImEiLCJ0IiwibWl4IiwiY2xhbXAiLCJtb2QiLCJtb2RXcmFwIiwicmFuZG9tMUQiLCJzZWVkIiwic2luIiwibm9pc2UxRCIsImYiLCJ1IiwicmFuZG9tUmFuZ2UiLCJyYW5kb21JbnQiLCJtYXBDbGFtcCIsInNpbmVXYXZlIiwiYW5nbGUiLCJmcmVxdWVuY3kiLCJ0aW1lIiwic3BlZWQiLCJhbXBsaXR1ZGUiLCJjbGFtcFRpbWUiLCJzdGFydFRpbWUiLCJkdXJhdGlvbiIsImVhc2VPdXQiLCJ0YXJnZXQiLCJmcmljdGlvbiIsInNwcmluZyIsImVsYXN0aWNpdHkiLCJyZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyIsImNpcmNsZSIsImhleENvbG9yU3RyaW5nVG9OdW1iZXIiLCJOdW1iZXIiLCJyZXBsYWNlIiwicmVjb3JkZXIiLCJkYXRhIiwiYmxvYiIsImN1cnJlbnRUYWJJZCIsImZmbXBlZyIsIkZGbXBlZyIsImNyZWF0ZUZGbXBlZyIsImNvcmVQYXRoIiwiY2hyb21lIiwicnVudGltZSIsImdldFVSTCIsImxvZyIsIm1haW5OYW1lIiwic2V0UHJvZ3Jlc3MiLCJwYXJhbXMiLCJjb25zb2xlIiwic2V0TG9nZ2VyIiwidHlwZSIsIm1zZyIsImxvZ1R5cGUiLCJtZXNzYWdlIiwidGFiSWQiLCJzZW5kTWVzc2FnZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwic3RhdGUiLCJKU09OIiwic3RyaW5naWZ5Iiwic2l6ZSIsInRhYldpZHRoIiwieSIsInRhYkhlaWdodCIsInBpeGVsUmF0aW8iLCJjb25zdHJhaW50cyIsImNvbnN0cmFpbnRTaXplcyIsIndpZHRoIiwiaGVpZ2h0Iiwiem9vbUxldmVsIiwic29ydCIsImV4cG9ydFZpZGVvIiwidmlkZW8iLCJtYW5kYXRvcnkiLCJjaHJvbWVNZWRpYVNvdXJjZSIsImNocm9tZU1lZGlhU291cmNlSWQiLCJzdHJlYW1JZCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5GcmFtZVJhdGUiLCJtYXhGcmFtZVJhdGUiLCJleHBvcnRBdWRpbyIsImF1ZGlvIiwibWVkaWEiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJlcnJvciIsIm91dHB1dCIsIkF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwibWltZVR5cGUiLCJ2aWRlb0JpdHNQZXJTZWNvbmQiLCJhdWRpb0JpdHNQZXJTZWNvbmQiLCJvcHRpb25zIiwiTWVkaWFSZWNvcmRlciIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50Iiwib25zdG9wIiwiYmxvYkZvcm1hdCIsIkJsb2IiLCJjb252ZXJ0U3RyZWFtcyIsInN0YXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3RvcCIsInN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ2aWRlb0Jsb2IiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImlucHV0RmlsZU5hbWUiLCJvdXRwdXRGaWxlTmFtZSIsImRvd25sb2FkRXh0ZW5zaW9uIiwiY29tbWFuZFN0ciIsImZpbGVOYW1lIiwiZG93bmxvYWRGaWxlTmFtZSIsInJ1bkZGbXBlZyIsIlVpbnQ4QXJyYXkiLCJ2aWRlb1VSTE1lc3NhZ2UiLCJ2aWRlb1VSTCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsInJlYWRBc0FycmF5QnVmZmVyIiwiZmlsZSIsImlzTG9hZGVkIiwiZXhpdCIsImxvYWQiLCJjb21tYW5kTGlzdCIsImFsZXJ0IiwiRlMiLCJmZXRjaEZpbGUiLCJydW4iLCJidWZmZXIiLCJkb3dubG9hZEZpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=