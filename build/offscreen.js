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
/*!*************************!*\
  !*** ./js/offscreen.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model/utils */ "./js/model/utils.js");

const {
  createFFmpeg,
  fetchFile
} = FFmpeg;
const ffmpeg = createFFmpeg({
  corePath: chrome.runtime.getURL('ffmpeg-core.js'),
  log: true,
  mainName: 'main'
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
let recorder;
let data = [];
let blob;
async function startRecording(message) {
  if (recorder?.state === 'recording') {
    throw new Error('Called startRecording while recording is in progress.');
  }
  console.log(startRecording, message);
  const size = {
    x: message.tabWidth,
    y: message.tabHeight
  };
  const pixelRatio = message.pixelRatio;
  const constraints = {};
  if (message.exportVideo) {
    constraints.video = {
      mandatory: {
        chromeMediaSource: 'tab',
        chromeMediaSourceId: message.streamId,
        minWidth: size.x * pixelRatio,
        maxWidth: size.x * pixelRatio,
        minHeight: size.y * pixelRatio,
        maxHeight: size.y * pixelRatio,
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
  console.log('getUserMedia constraints', JSON.stringify(constraints));
  const media = await navigator.mediaDevices.getUserMedia(constraints);
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
  console.log();
  let videoBitsPerSecond = message.videoBitsPerSecond || 16;
  let audioBitsPerSecond = message.audioBitsPerSecond || 128;
  const options = {
    mimeType,
    audioBitsPerSecond: audioBitsPerSecond * 1000,
    videoBitsPerSecond: videoBitsPerSecond * 1000000
  };
  console.log('MediaRecorder options', JSON.stringify(options));
  recorder = new MediaRecorder(media, options);
  recorder.ondataavailable = event => data.push(event.data);
  recorder.onstop = () => {
    // const blob = new Blob(data, { type: `video/${format}` });
    const blobFormat = mimeType.split(';')[0];
    blob = new Blob(data, {
      type: blobFormat
    });
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
  var fileReader = new FileReader();
  fileReader.onload = async function () {
    // var blob = new File([result.data], 'test.mp4', {
    //   type: 'video/mp4',
    // });

    let inputFileName = "sample_video.webm";
    let outputFileName = "sample_video.mp4";
    let downloadExtension = "mp4";
    let commandStr;
    if (message.exportVideo) {
      if (message.exportAudio) {
        commandStr = `ffmpeg -i ${inputFileName} -c:v copy -c:a aac ${outputFileName}`;
      } else {
        commandStr = `ffmpeg -i ${inputFileName} -c:v copy ${outputFileName}`;
      }
    } else {
      downloadExtension = "m4a";
      outputFileName = `sample_video.m4a`;
      commandStr = `ffmpeg -i ${inputFileName} -c:a aac ${outputFileName}`;
    }
    const fileName = (0,_model_utils__WEBPACK_IMPORTED_MODULE_0__.createFilenameOnly)();
    const downloadFileName = `${fileName}.${downloadExtension}`;
    const result = await runFFmpeg(inputFileName, outputFileName, commandStr, new Uint8Array(this.result));
    var blob = new File([result], downloadFileName, {
      type: `video/${downloadExtension}`
    });
    const videoURLMessage = Object.assign({}, message);
    Object.assign(videoURLMessage, {
      type: 'scrollCaptureVideoURL',
      videoURL: URL.createObjectURL(blob),
      fileName: downloadFileName
    });
    console.log('videoURLMessage.videoURL', videoURLMessage.videoURL);
    chrome.runtime.sendMessage(videoURLMessage);
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
  ffmpeg.FS('writeFile', inputFileName, await fetchFile(file));
  console.log(commandList);
  await ffmpeg.run(...commandList);
  const data = ffmpeg.FS('readFile', outputFileName);
  const blob = new Blob([data.buffer]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixJQUFJLENBQUMsQ0FBQztFQUVuQixNQUFNQyxXQUFXLEdBQUdsQixVQUFVLENBQUN2SixLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ3pDLElBQUl5SyxXQUFXLENBQUN2SyxLQUFLLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBRTtJQUNwQ3dLLEtBQUssQ0FBQywwQkFBMEIsQ0FBQztJQUNqQztFQUNGO0VBRUEvRixNQUFNLENBQUNnRyxFQUFFLENBQUMsV0FBVyxFQUFFdkIsYUFBYSxFQUFFLE1BQU0zRSxTQUFTLENBQUM0RixJQUFJLENBQUMsQ0FBQztFQUM1RHpFLE9BQU8sQ0FBQ1osR0FBRyxDQUFDeUYsV0FBVyxDQUFDO0VBQ3hCLE1BQU05RixNQUFNLENBQUNpRyxHQUFHLENBQUMsR0FBR0gsV0FBVyxDQUFDO0VBQ2hDLE1BQU1oRixJQUFJLEdBQUdkLE1BQU0sQ0FBQ2dHLEVBQUUsQ0FBQyxVQUFVLEVBQUV0QixjQUFjLENBQUM7RUFDbEQsTUFBTTNELElBQUksR0FBRyxJQUFJNEMsSUFBSSxDQUFDLENBQUM3QyxJQUFJLENBQUNvRixNQUFNLENBQUMsQ0FBQztFQUNwQyxPQUFPbkYsSUFBSTtFQUNYO0FBQ0Y7O0FBRUEsU0FBU29GLFlBQVlBLENBQUNwRixJQUFJLEVBQUU4RCxRQUFRLEVBQUU7RUFDcEMsTUFBTWxILENBQUMsR0FBR3lJLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLEdBQUcsQ0FBQztFQUNyQzFJLENBQUMsQ0FBQzJJLElBQUksR0FBR2hCLEdBQUcsQ0FBQ0MsZUFBZSxDQUFDeEUsSUFBSSxDQUFDO0VBQ2xDcEQsQ0FBQyxDQUFDNEksUUFBUSxHQUFHMUIsUUFBUTtFQUNyQmxILENBQUMsQ0FBQzZJLEtBQUssQ0FBQyxDQUFDO0FBQ1gsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2pzL21vZGVsL3V0aWxzLmpzIiwid2VicGFjazovLy8uL2xpYi90c3VuYW1pL3V0aWxzL2RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3RzdW5hbWkvdXRpbHMvbnVtYmVyLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy8uL2pzL29mZnNjcmVlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0aW1lQU1QTSB9IGZyb20gJy4uLy4uL2xpYi90c3VuYW1pL3V0aWxzL2RhdGUnO1xuaW1wb3J0IHsgYWRkTGVhZGluZ1plcm8gfSBmcm9tICcuLi8uLi9saWIvdHN1bmFtaS91dGlscy9udW1iZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsZW5hbWUoZXh0ZW5zaW9uLCB0ZXh0ID0gJ1Njcm9sbCBDYXB0dXJlJykge1xuICBjb25zdCBuYW1lID0gY3JlYXRlRmlsZW5hbWVPbmx5KHRleHQpO1xuICByZXR1cm4gYCR7bmFtZX0uJHtleHRlbnNpb259YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZpbGVuYW1lT25seSh0ZXh0ID0gJ1Njcm9sbCBDYXB0dXJlJykge1xuICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBhbXBtVGltZSA9IHRpbWVBTVBNKGRhdGUpO1xuICBsZXQgZGF0ZURhdGEgPSB7XG4gICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgIG1vbnRoOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKSxcbiAgICBkYXRlOiBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSksXG4gIH07XG4gIGFtcG1UaW1lLmFtcG0gPSBhbXBtVGltZS5hbXBtLnRvVXBwZXJDYXNlKCk7XG4gIHJldHVybiBgJHt0ZXh0fSAke2RhdGVEYXRhLnllYXJ9LSR7ZGF0ZURhdGEubW9udGh9LSR7ZGF0ZURhdGEuZGF0ZX0gYXQgJHthbXBtVGltZS5ob3Vyc30uJHthbXBtVGltZS5taW51dGVzfS4ke2FtcG1UaW1lLnNlY29uZHN9ICR7YW1wbVRpbWUuYW1wbX1gO1xufSIsImltcG9ydCB7YWRkTGVhZGluZ1plcm99IGZyb20gXCIuL251bWJlclwiO1xuXG5leHBvcnQgZnVuY3Rpb24gdGltZUFNUE0oZGF0ZSkge1xuXHRsZXQgaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XG5cdGxldCBhbXBtID0gaG91cnMgPj0gMTIgPyAncG0nIDogJ2FtJztcblx0bGV0IG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldE1pbnV0ZXMoKSk7XG5cdGxldCBzZWNvbmRzID0gYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xuXHRob3VycyA9IGhvdXJzICUgMTI7XG5cdGhvdXJzID0gaG91cnMgPyBob3VycyA6IDEyOyAvLyB0aGUgaG91ciAnMCcgc2hvdWxkIGJlICcxMidcblx0cmV0dXJuIHsgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGFtcG0gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEFNUE0oZGF0ZSwgc3BhY2VCZXR3ZWVuID0gXCJcIikge1xuXHRsZXQgZGF0ZURhdGEgPSB0aW1lQU1QTShkYXRlKTtcblx0bGV0IHN0clRpbWUgPSBkYXRlRGF0YS5ob3VycyArICc6JyArIGRhdGVEYXRhLm1pbnV0ZXMgKyBzcGFjZUJldHdlZW4gKyBhbXBtO1xuXHRyZXR1cm4gc3RyVGltZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvVW5peFN0cmluZyhkYXRlKSB7XG5cdHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSkgKyBcIiBcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0SG91cnMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRTZWNvbmRzKCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4VVRDU3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0VVRDRnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDRGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ1NlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRIb3VycyhkYXRlLCBob3Vycykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoaG91cnMgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZERheXMoZGF0ZSwgZGF5cykge1xuXHRkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkgKyAoZGF5cyAqIDI0ICogNjAgKiA2MCAqIDEwMDApKTtcblx0cmV0dXJuIGRhdGU7XG59XG5cbmV4cG9ydCBsZXQgbW9udGhzID0ge1xuXHRlbjpbXCJKYW51YXJ5XCIsIFwiRmVicnVhcnlcIiwgXCJNYXJjaFwiLCBcIkFwcmlsXCIsIFwiTWF5XCIsIFwiSnVuZVwiLCBcIkp1bHlcIiwgXCJBdWd1c3RcIiwgXCJTZXB0ZW1iZXJcIiwgXCJPY3RvYmVyXCIsIFwiTm92ZW1iZXJcIiwgXCJEZWNlbWJlclwiXSxcblx0ZnI6W1wiSmFudmllclwiLCBcIkbDqXZyaWVyXCIsIFwiTWFyc1wiLCBcIkF2cmlsXCIsIFwiTWFpXCIsIFwiSnVpblwiLCBcIkp1aWxsZXRcIiwgXCJBb8O7dFwiLCBcIlNlcHRlbWJyZVwiLCBcIk9jdG9icmVcIiwgXCJOb3ZlbWJyZVwiLCBcIkTDqWNlbWJyZVwiXVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbnRoKGRhdGUsIGxhbmd1YWdlKSB7XG5cdGlmICghbGFuZ3VhZ2UpIHtcblx0XHRsYW5ndWFnZSA9IFwiZW5cIjtcblx0fVxuXHRsZXQgbW9udGg7XG5cdHN3aXRjaChsYW5ndWFnZSkge1xuXHRcdGNhc2UgXCJlblwiOlxuXHRcdFx0bW9udGggPSBtb250aHNbbGFuZ3VhZ2VdW2RhdGUuZ2V0TW9udGgoKV07XG5cdFx0XHRicmVhaztcblx0fVxuXHRyZXR1cm4gbW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBZ2UoYmlydGhEYXRlKSB7XG5cdGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cdGxldCBhZ2UgPSB0b2RheS5nZXRGdWxsWWVhcigpIC0gYmlydGhEYXRlLmdldEZ1bGxZZWFyKCk7XG5cdGxldCBtID0gdG9kYXkuZ2V0TW9udGgoKSAtIGJpcnRoRGF0ZS5nZXRNb250aCgpO1xuXHRpZiAobSA8IDAgfHwgKG0gPT09IDAgJiYgdG9kYXkuZ2V0RGF0ZSgpIDwgYmlydGhEYXRlLmdldERhdGUoKSkpIHtcblx0XHRhZ2UtLTtcblx0fVxuXHRyZXR1cm4gYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJlYXRBc1VUQyhkYXRlKSB7XG5cdGxldCByZXN1bHQgPSBuZXcgRGF0ZShkYXRlKTtcblx0cmVzdWx0LnNldE1pbnV0ZXMocmVzdWx0LmdldE1pbnV0ZXMoKSAtIHJlc3VsdC5nZXRUaW1lem9uZU9mZnNldCgpKTtcblx0cmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTWludXRlID0gNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTWludXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVySG91ciA9IDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVySG91cjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyRGF5ID0gMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlckRheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlcldlZWsgPSA3ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlcldlZWs7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyTW9udGggPSAzNjUgLyAxMiAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyTW9udGg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJZZWFyID0gMzY1ICogMjQgKiA2MCAqIDYwICogMTAwMDtcblx0cmV0dXJuICh0cmVhdEFzVVRDKGVuZERhdGUpIC0gdHJlYXRBc1VUQyhzdGFydERhdGUpKSAvIG1pbGxpc2Vjb25kc1BlclllYXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGYW1pbGlhclRpbWVCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgdGV4dCA9IFwiXCI7XG5cdGxldCB5ZWFyc0JldHdlZW4gPSB5ZWFyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0aWYgKHllYXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0bGV0IHllYXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih5ZWFyc0JldHdlZW4pO1xuXHRcdGlmICh5ZWFyc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhcnMgYWdvXCI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRleHQgPSB5ZWFyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgeWVhciBhZ29cIjtcblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0bGV0IG1vbnRoc0JldHdlZW4gPSBtb250aHNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0aWYgKG1vbnRoc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0bGV0IG1vbnRoc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobW9udGhzQmV0d2Vlbik7XG5cdFx0XHRpZiAobW9udGhzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aHMgYWdvXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0ZXh0ID0gbW9udGhzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtb250aCBhZ29cIjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IHdlZWtzQmV0d2VlbiA9IHdlZWtzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0aWYgKHdlZWtzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdGxldCB3ZWVrc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3Iod2Vla3NCZXR3ZWVuKTtcblx0XHRcdFx0aWYgKHdlZWtzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdHRleHQgPSB3ZWVrc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgd2Vla3MgYWdvXCI7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrIGFnb1wiO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgZGF5c0JldHdlZW4gPSBkYXlzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRpZiAoZGF5c0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdGxldCBkYXlzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihkYXlzQmV0d2Vlbik7XG5cdFx0XHRcdFx0aWYgKGRheXNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5cyBhZ29cIjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGV4dCA9IGRheXNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGRheSBhZ29cIjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbiA9IGhvdXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdGlmIChob3Vyc0JldHdlZW4gPj0gMSkge1xuXHRcdFx0XHRcdFx0bGV0IGhvdXJzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihob3Vyc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXJzIGFnb1wiO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dGV4dCA9IGhvdXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBob3VyIGFnb1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW4gPSBtaW51dGVzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRcdFx0XHRcdFx0aWYgKG1pbnV0ZXNCZXR3ZWVuID4gMSkge1xuXHRcdFx0XHRcdFx0XHRsZXQgbWludXRlc0JldHdlZW5GbG9vciA9IE1hdGguZmxvb3IobWludXRlc0JldHdlZW4pO1xuXHRcdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlcyBhZ29cIjtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0ZXh0ID0gbWludXRlc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgbWludXRlIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gXCJKdXN0IG5vd1wiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRyZXR1cm4gdGV4dDtcbn0iLCIvLyBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciBiZXR3ZWVuIG1pbiAoaW5jbHVzaXZlKSBhbmQgbWF4IChleGNsdXNpdmUpXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQXJiaXRyYXJ5KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGV4Y2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG59XG5cbi8vIFJldHVybnMgYSByYW5kb20gaW50ZWdlciBiZXR3ZWVuIG1pbiAoaW5jbHVkZWQpIGFuZCBtYXggKGluY2x1ZGVkKVxuLy8gVXNpbmcgTWF0aC5yb3VuZCgpIHdpbGwgZ2l2ZSB5b3UgYSBub24tdW5pZm9ybSBkaXN0cmlidXRpb24hXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuXG4vKipcbiBDcmVhdGVzIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBudW1iZXIgY2FuIGJlLlxuIEByZXR1cm4gUmV0dXJucyBhIHJhbmRvbSBudW1iZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVdpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbik7XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIGRlZmluZWQgcmFuZ2UuXG5cbiBAcGFyYW0gbWluOiBUaGUgbWluaW11bSB2YWx1ZSB0aGUgcmFuZG9tIGludGVnZXIgY2FuIGJlLlxuIEBwYXJhbSBtaW46IFRoZSBtYXhpbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIGludGVnZXIgd2l0aGluIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludGVnZXJXaXRoaW5SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEgKyBtYXggLSBtaW4pICsgbWluKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgZXZlbjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzRXZlbig3KSk7IC8vIFRyYWNlcyBmYWxzZVxuIGNvbnNvbGUubG9nKGlzRXZlbigxMikpOyAvLyBUcmFjZXMgdHJ1ZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRXZlbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYgMSkgPT09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBvZGQuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBub3QgZGl2aXNpYmxlIGJ5IDxjb2RlPjI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyA8Y29kZT50cnVlPC9jb2RlPiBpZiB0aGUgbnVtYmVyIGlzIG9kZDsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzT2RkKDcpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc09kZCgxMikpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc09kZCh2YWx1ZSkge1xuICByZXR1cm4gIWlzRXZlbih2YWx1ZSk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgY29udGFpbnMgbm8gZGVjaW1hbCB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgYW4gaW50ZWdlcjsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxMykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzSW50ZWdlcigxLjIzNDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlZ2VyKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAlIDEgPT09IDA7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIG51bWJlciBpcyBwcmltZS5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG9ubHkgZGl2aXNpYmxlIGJ5IDxjb2RlPjE8L2NvZGU+IGFuZCBpdHNlbGYuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgcHJpbWU7IG90aGVyd2lzZSA8Y29kZT5mYWxzZTwvY29kZT4uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc1ByaW1lKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNQcmltZSg0KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJpbWUodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSAxIHx8IHZhbHVlID09PSAyKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoaXNFdmVuKHZhbHVlKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHMgPSBNYXRoLnNxcnQodmFsdWUpO1xuICBmb3IgKGxldCBpID0gMzsgaSA8PSBzOyBpKyspIHtcbiAgICBpZiAodmFsdWUgJSBpID09PSAwKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbi8qKlxuIFJvdW5kcyBhIG51bWJlcidzIGRlY2ltYWwgdmFsdWUgdG8gYSBzcGVjaWZpYyBwbGFjZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIG51bWJlciB0byByb3VuZC5cbiBAcGFyYW0gcGxhY2U6IFRoZSBkZWNpbWFsIHBsYWNlIHRvIHJvdW5kLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgdmFsdWUgcm91bmRlZCB0byB0aGUgZGVmaW5lZCBwbGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHJvdW5kVG9QbGFjZSgzLjE0MTU5LCAyKSk7IC8vIFRyYWNlcyAzLjE0XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDMpKTsgLy8gVHJhY2VzIDMuMTQyXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgcGxhY2UgPSAxKSB7XG4gIGNvbnN0IHAgPSBNYXRoLnBvdygxMCwgcGxhY2UpO1xuXG4gIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlICogcCkgLyBwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQxKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMih2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDModmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDMpO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIGluZGV4IGlzIGluY2x1ZGVkIHdpdGhpbiB0aGUgY29sbGVjdGlvbiBsZW5ndGggb3RoZXJ3aXNlIHRoZSBpbmRleCBsb29wcyB0byB0aGUgYmVnaW5uaW5nIG9yIGVuZCBvZiB0aGUgcmFuZ2UgYW5kIGNvbnRpbnVlcy5cblxuIEBwYXJhbSBpbmRleDogU2hvcCB0byBsb29wIGlmIG5lZWRlZC5cbiBAcGFyYW0gbGVuZ3RoOiBUaGUgdG90YWwgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24uXG4gQHJldHVybiBBIHZhbGlkIHplcm8tYmFzZWQgaW5kZXguXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YXIgY29sb3JzOkFycmF5ID0gbmV3IEFycmF5KFwiUmVkXCIsIFwiR3JlZW5cIiwgXCJCbHVlXCIpO1xuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDIsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBCbHVlXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KDQsIGNvbG9ycy5sZW5ndGgpXSk7IC8vIFRyYWNlcyBHcmVlblxuIGNvbnNvbGUubG9nY29sb3JzW2xvb3BJbmRleCgtNiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIFJlZFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvb3BJbmRleChpbmRleCwgbGVuZ3RoKSB7XG4gIGlmIChpbmRleCA8IDApIHtcbiAgICBpbmRleCA9IGxlbmd0aCArIChpbmRleCAlIGxlbmd0aCk7XG4gIH1cblxuICBpZiAoaW5kZXggPj0gbGVuZ3RoKSB7XG4gICAgcmV0dXJuIGluZGV4ICUgbGVuZ3RoO1xuICB9XG5cbiAgcmV0dXJuIGluZGV4O1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSB2YWx1ZSBpcyBpbmNsdWRlZCB3aXRoaW4gYSByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgZmFsbHMgd2l0aGluIHRoZSByYW5nZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAdXNhZ2VOb3RlIFRoZSByYW5nZSB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpc0JldHdlZW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzQmV0d2Vlbig3LCAwLCA1KSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzQmV0d2Vlbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuICEoXG4gICAgdmFsdWUgPCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkgfHxcbiAgICB2YWx1ZSA+IE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKVxuICApO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHZhbHVlIGZhbGxzIHdpdGhpbiBhIHJhbmdlOyBpZiBub3QgaXQgaXMgc25hcHBlZCB0byB0aGUgbmVhcmVzdCByYW5nZSB2YWx1ZS5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBpcyBpbmNsdWRlZCBpbiB0aGUgcmFuZ2UuXG4gQHBhcmFtIGZpcnN0VmFsdWU6IEZpcnN0IHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gc2Vjb25kVmFsdWU6IFNlY29uZCB2YWx1ZSBvZiB0aGUgcmFuZ2UuXG4gQHJldHVybiBSZXR1cm5zIGVpdGhlciB0aGUgbnVtYmVyIGFzIHBhc3NlZCwgb3IgaXRzIHZhbHVlIG9uY2Ugc25hcHBlZCB0byBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuIEB1c2FnZU5vdGUgVGhlIGNvbnN0cmFpbnQgdmFsdWVzIGRvIG5vdCBuZWVkIHRvIGJlIGluIG9yZGVyLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY29uc3RyYWluKDMsIDAsIDUpKTsgLy8gVHJhY2VzIDNcbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oNywgMCwgNSkpOyAvLyBUcmFjZXMgNVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnN0cmFpbih2YWx1ZSwgZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpIHtcbiAgcmV0dXJuIE1hdGgubWluKFxuICAgIE1hdGgubWF4KHZhbHVlLCBNYXRoLm1pbihmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkpLFxuICAgIE1hdGgubWF4KGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKVxuICApO1xufVxuXG4vKipcbiBDcmVhdGVzIGV2ZW5seSBzcGFjZWQgbnVtZXJpY2FsIGluY3JlbWVudHMgYmV0d2VlbiB0d28gbnVtYmVycy5cblxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQHBhcmFtIHN0ZXBzOiBUaGUgbnVtYmVyIG9mIGluY3JlbWVudHMgYmV0d2VlbiB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyB2YWx1ZXMuXG4gQHJldHVybiBSZXR1cm5zIGFuIEFycmF5IGNvbXByaXNlZCBvZiB0aGUgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSB0d28gdmFsdWVzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coY3JlYXRlU3RlcHNCZXR3ZWVuKDAsIDUsIDQpKTsgLy8gVHJhY2VzIDEsMiwzLDRcbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMSwgMywgMykpOyAvLyBUcmFjZXMgMS41LDIsMi41XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3RlcHNCZXR3ZWVuKGJlZ2luLCBlbmQsIHN0ZXBzKSB7XG4gIHN0ZXBzKys7XG5cbiAgbGV0IGkgPSAwO1xuICBjb25zdCBzdGVwc0JldHdlZW4gPSBbXTtcbiAgY29uc3QgaW5jcmVtZW50ID0gKGVuZCAtIGJlZ2luKSAvIHN0ZXBzO1xuXG4gIHdoaWxlICgrK2kgPCBzdGVwcykge1xuICAgIHN0ZXBzQmV0d2Vlbi5wdXNoKGkgKiBpbmNyZW1lbnQgKyBiZWdpbik7XG4gIH1cblxuICByZXR1cm4gc3RlcHNCZXR3ZWVuO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGEgdmFsdWUgYmV0d2VlbiB0d28gc3BlY2lmaWVkIHZhbHVlcy5cblxuIEBwYXJhbSBhbW91bnQ6IFRoZSBsZXZlbCBvZiBpbnRlcnBvbGF0aW9uIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuIElmIDxjb2RlPjA8L2NvZGU+LCA8Y29kZT5iZWdpbjwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQ7IGlmIDxjb2RlPjE8L2NvZGU+LCA8Y29kZT5lbmQ8L2NvZGU+IHZhbHVlIGlzIHJldHVybmVkLlxuIEBwYXJhbSBiZWdpbjogVGhlIHN0YXJ0aW5nIHZhbHVlLlxuIEBwYXJhbSBlbmQ6IFRoZSBlbmRpbmcgdmFsdWUuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhpbnRlcnBvbGF0ZSgwLjUsIDAsIDEwKSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGUoYW1vdW50LCBiZWdpbiwgZW5kKSB7XG4gIHJldHVybiBiZWdpbiArIChlbmQgLSBiZWdpbikgKiBhbW91bnQ7XG59XG5cbi8qKlxuIERldGVybWluZXMgYSBwZXJjZW50YWdlIG9mIGEgdmFsdWUgaW4gYSBnaXZlbiByYW5nZS5cblxuIEBwYXJhbSB2YWx1ZTogVGhlIHZhbHVlIHRvIGJlIGNvbnZlcnRlZC5cbiBAcGFyYW0gbWluaW11bTogVGhlIGxvd2VyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcGFyYW0gbWF4aW11bTogVGhlIHVwcGVyIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG5vcm1hbGl6ZSg4LCA0LCAyMCkuZGVjaW1hbFBlcmNlbnRhZ2UpOyAvLyBUcmFjZXMgMC4yNVxuIDwvY29kZT5cbiAqL1xuLy8gZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSwgbWluaW11bSwgbWF4aW11bSkge1xuLy8gICByZXR1cm4gbmV3IFBlcmNlbnQoKHZhbHVlIC0gbWluaW11bSkgLyAobWF4aW11bSAtIG1pbmltdW0pKTtcbi8vIH1cblxuLyoqXG4gTWFwcyBhIHZhbHVlIGZyb20gb25lIGNvb3JkaW5hdGUgc3BhY2UgdG8gYW5vdGhlci5cblxuIEBwYXJhbSB2YWx1ZTogVmFsdWUgZnJvbSB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZSB0byBtYXAgdG8gdGhlIG91dHB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4xOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgaW5wdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MTogRW5kaW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtaW4yOiBTdGFydGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1heDI6IEVuZGluZyB2YWx1ZSBvZiB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhtYXAoMC43NSwgMCwgMSwgMCwgMTAwKSk7IC8vIFRyYWNlcyA3NVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1hcCh2YWx1ZSwgbWluMSwgbWF4MSwgbWluMiwgbWF4Mikge1xuICByZXR1cm4gbGVycChub3JtKHZhbHVlLCBtaW4xLCBtYXgxKSwgbWluMiwgbWF4Mik7XG59XG4vLyBleHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4vLyBcdHJldHVybiBtaW4yICsgKG1heDIgLSBtaW4yKSAqICgodmFsdWUgLSBtaW4xKSAvIChtYXgxIC0gbWluMSkpO1xuLy8gfVxuXG4vKipcbiBMb3cgcGFzcyBmaWx0ZXIgYWxvZ3JpdGhtIGZvciBlYXNpbmcgYSB2YWx1ZSB0b3dhcmQgYSBkZXN0aW5hdGlvbiB2YWx1ZS4gV29ya3MgYmVzdCBmb3IgdHdlZW5pbmcgdmFsdWVzIHdoZW4gbm8gZGVmaW5pdGUgdGltZSBkdXJhdGlvbiBleGlzdHMgYW5kIHdoZW4gdGhlIGRlc3RpbmF0aW9uIHZhbHVlIGNoYW5nZXMuXG5cbiBJZiA8Y29kZT4oMC41IDwgbiA8IDEpPC9jb2RlPiwgdGhlbiB0aGUgcmVzdWx0aW5nIHZhbHVlcyB3aWxsIG92ZXJzaG9vdCAocGluZy1wb25nKSB1bnRpbCB0aGV5IHJlYWNoIHRoZSBkZXN0aW5hdGlvbiB2YWx1ZS4gV2hlbiA8Y29kZT5uPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gMSwgYXMgaXRzIHZhbHVlIGluY3JlYXNlcywgdGhlIHRpbWUgaXQgdGFrZXMgdG8gcmVhY2ggdGhlIGRlc3RpbmF0aW9uIGFsc28gaW5jcmVhc2VzLiBBIHBsZWFzaW5nIHZhbHVlIGZvciA8Y29kZT5uPC9jb2RlPiBpcyA1LlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgY3VycmVudCB2YWx1ZS5cbiBAcGFyYW0gZGVzdDogVGhlIGRlc3RpbmF0aW9uIHZhbHVlLlxuIEBwYXJhbSBuOiBUaGUgc2xvd2Rvd24gZmFjdG9yLlxuIEByZXR1cm4gVGhlIHdlaWdodGVkIGF2ZXJhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXZWlnaHRlZEF2ZXJhZ2UodmFsdWUsIGRlc3QsIG4pIHtcbiAgcmV0dXJuIHZhbHVlICsgKGRlc3QgLSB2YWx1ZSkgLyBuO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0ga0RlbGltOiBUaGUgY2hhcmFjdGVyIHVzZWQgdG8gc2VwZXJhdGUgdGhvdXNhbmRzOyBkZWZhdWx0cyB0byA8Y29kZT5cIlwiPC9jb2RlPi5cbiBAcGFyYW0gbWluTGVuZ3RoOiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIG51bWJlcjsgZGVmYXVsdHMgdG8gPGNvZGU+MCA8L2NvZGU+LlxuIEBwYXJhbSBmaWxsQ2hhcjogVGhlIGxlYWRpbmcgY2hhcmFjdGVyIHVzZWQgdG8gbWFrZSB0aGUgbnVtYmVyIHRoZSBtaW5pbXVtIGxlbmd0aDsgZGVmYXVsdHMgdG8gPGNvZGU+XCIwXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdCgxMjM0NTY3LCBcIixcIiwgOCkpOyAvLyBUcmFjZXMgMDEsMjM0LDU2N1xuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh2YWx1ZSwga0RlbGltLCBtaW5MZW5ndGgsIGZpbGxDaGFyKSB7XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gXCIsXCI7XG4gIH1cbiAgaWYgKGlzTmFOKG1pbkxlbmd0aCkpIHtcbiAgICBtaW5MZW5ndGggPSAwO1xuICB9XG4gIGlmICghZmlsbENoYXIpIHtcbiAgICBmaWxsQ2hhciA9IFwiMFwiO1xuICB9XG4gIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMTtcbiAgbGV0IG51bSA9IE1hdGguZmxvb3IodmFsdWUpLnRvU3RyaW5nKCk7XG4gIGNvbnN0IGxlbiA9IG51bS5sZW5ndGg7XG5cbiAgaWYgKG1pbkxlbmd0aCAhPT0gMCAmJiBtaW5MZW5ndGggPiBsZW4pIHtcbiAgICBtaW5MZW5ndGggLT0gbGVuO1xuXG4gICAgY29uc3QgYWRkQ2hhciA9IGZpbGxDaGFyIHx8IFwiMFwiO1xuXG4gICAgd2hpbGUgKG1pbkxlbmd0aC0tKSB7XG4gICAgICBudW0gPSBhZGRDaGFyICsgbnVtO1xuICAgIH1cbiAgfVxuXG4gIGlmIChrRGVsaW0gIT09IG51bGwgJiYgbnVtLmxlbmd0aCA+IDMpIHtcbiAgICBjb25zdCB0b3RhbERlbGltID0gTWF0aC5mbG9vcihudW0ubGVuZ3RoIC8gMyk7XG4gICAgY29uc3QgdG90YWxSZW1haW4gPSBudW0ubGVuZ3RoICUgMztcbiAgICBjb25zdCBudW1TcGxpdCA9IG51bS5zcGxpdChcIlwiKTtcbiAgICBsZXQgaSA9IC0xO1xuXG4gICAgd2hpbGUgKCsraSA8IHRvdGFsRGVsaW0pIHtcbiAgICAgIG51bVNwbGl0LnNwbGljZSh0b3RhbFJlbWFpbiArIDQgKiBpLCAwLCBrRGVsaW0pO1xuICAgIH1cblxuICAgIGlmICh0b3RhbFJlbWFpbiA9PT0gMCkge1xuICAgICAgbnVtU3BsaXQuc2hpZnQoKTtcbiAgICB9XG5cbiAgICBudW0gPSBudW1TcGxpdC5qb2luKFwiXCIpO1xuICB9XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCkge1xuICAgIG51bSArPSByZW1haW5kZXIudG9TdHJpbmcoKS5zdWJzdHIoMSk7XG4gIH1cblxuICByZXR1cm4gbnVtO1xufVxuXG4vKipcbiBGb3JtYXRzIGEgbnVtYmVyIGFzIGEgY3VycmVuY3kgc3RyaW5nLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHlvdSB3aXNoIHRvIGZvcm1hdC5cbiBAcGFyYW0gZm9yY2VEZWNpbWFsczogSWYgdGhlIG51bWJlciBzaG91bGQgYWx3YXlzIGhhdmUgdHdvIGRlY2ltYWwgcGxhY2VzIDxjb2RlPnRydWU8L2NvZGU+LCBvciBvbmx5IHNob3cgZGVjaW1hbHMgaXMgdGhlcmUgaXMgYSBkZWNpbWFscyB2YWx1ZSA8Y29kZT5mYWxzZTwvY29kZT47IGRlZmF1bHRzIHRvIDxjb2RlPnRydWU8L2NvZGU+LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiLFwiPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIGZvcm1hdHRlZCBudW1iZXIgYXMgYSBTdHJpbmcuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhmb3JtYXRDdXJyZW5jeSgxMjM0LjUpKTsgLy8gVHJhY2VzIFwiMSwyMzQuNTBcIlxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEN1cnJlbmN5KHZhbHVlLCBmb3JjZURlY2ltYWxzLCBrRGVsaW0pIHtcbiAgaWYgKGZvcmNlRGVjaW1hbHMgPT09IG51bGwpIHtcbiAgICBmb3JjZURlY2ltYWxzID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWtEZWxpbSkge1xuICAgIGtEZWxpbSA9IFwiLFwiO1xuICB9XG4gIGNvbnN0IHJlbWFpbmRlciA9IHZhbHVlICUgMTtcbiAgbGV0IGN1cnJlbmN5ID0gZm9ybWF0KE1hdGguZmxvb3IodmFsdWUpLCBrRGVsaW0pO1xuXG4gIGlmIChyZW1haW5kZXIgIT09IDAgfHwgZm9yY2VEZWNpbWFscykge1xuICAgIGN1cnJlbmN5ICs9IHJlbWFpbmRlci50b0ZpeGVkKDIpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBjdXJyZW5jeTtcbn1cblxuLyoqXG4gRmluZHMgdGhlIGVuZ2xpc2ggb3JkaW5hbCBzdWZmaXggZm9yIHRoZSBudW1iZXIgZ2l2ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBmaW5kIHRoZSBvcmRpbmFsIHN1ZmZpeCBvZi5cbiBAcmV0dXJuIFJldHVybnMgdGhlIHN1ZmZpeCBmb3IgdGhlIG51bWJlciwgMiBjaGFyYWN0ZXJzLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coMzIgKyBnZXRPcmRpbmFsU3VmZml4KDMyKSk7IC8vIFRyYWNlcyAzMm5kXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JkaW5hbFN1ZmZpeCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPj0gMTAgJiYgdmFsdWUgPD0gMjApIHtcbiAgICByZXR1cm4gXCJ0aFwiO1xuICB9XG5cbiAgaWYgKHZhbHVlID09PSAwKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBzd2l0Y2ggKHZhbHVlICUgMTApIHtcbiAgICBjYXNlIDM6XG4gICAgICByZXR1cm4gXCJyZFwiO1xuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBcIm5kXCI7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIFwic3RcIjtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIFwidGhcIjtcbiAgfVxufVxuXG4vKipcbiBBZGRzIGEgbGVhZGluZyB6ZXJvIGZvciBudW1iZXJzIGxlc3MgdGhhbiB0ZW4uXG5cbiBAcGFyYW0gdmFsdWU6IE51bWJlciB0byBhZGQgbGVhZGluZyB6ZXJvLlxuIEByZXR1cm4gTnVtYmVyIGFzIGEgU3RyaW5nOyBpZiB0aGUgbnVtYmVyIHdhcyBsZXNzIHRoYW4gdGVuIHRoZSBudW1iZXIgd2lsbCBoYXZlIGEgbGVhZGluZyB6ZXJvLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coYWRkTGVhZGluZ1plcm8oNykpOyAvLyBUcmFjZXMgMDdcbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybygxMSkpOyAvLyBUcmFjZXMgMTFcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVybyh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPCAxMCA/IFwiMFwiICsgdmFsdWUgOiB2YWx1ZS50b1N0cmluZygpO1xufVxuXG4vKipcbiBTcGVsbHMgdGhlIHByb3ZpZGVkIG51bWJlci5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIHNwZWxsLiBOZWVkcyB0byBiZSBsZXNzIHRoYW4gOTk5OTk5OTk5LlxuIEByZXR1cm4gVGhlIG51bWJlciBzcGVsbGVkIG91dCBhcyBhIFN0cmluZy5cbiBAdGhyb3dzIDxjb2RlPkVycm9yPC9jb2RlPiBpZiA8Y29kZT52YWx1ZTwvY29kZT4gaXMgZ3JlYXRlciB0aGFuIDk5OTk5OTk5OS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKHNwZWxsKDApKTsgLy8gVHJhY2VzIFplcm9cbiBjb25zb2xlLmxvZyhzcGVsbCgyMykpOyAvLyBUcmFjZXMgVHdlbnR5LVRocmVlXG4gY29uc29sZS5sb2coc3BlbGwoMjAwNTY3OCkpOyAvLyBUcmFjZXMgVHdvIE1pbGxpb24sIEZpdmUgVGhvdXNhbmQsIFNpeCBIdW5kcmVkIFNldmVudHktRWlnaHRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcGVsbCh2YWx1ZSkge1xuICBpZiAodmFsdWUgPiA5OTk5OTk5OTkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJWYWx1ZSB0b28gbGFyZ2UgZm9yIHRoaXMgbWV0aG9kLlwiKTtcbiAgfVxuXG4gIGNvbnN0IG9uZXNTcGVsbGluZ3MgPSBbXG4gICAgXCJcIixcbiAgICBcIk9uZVwiLFxuICAgIFwiVHdvXCIsXG4gICAgXCJUaHJlZVwiLFxuICAgIFwiRm91clwiLFxuICAgIFwiRml2ZVwiLFxuICAgIFwiU2l4XCIsXG4gICAgXCJTZXZlblwiLFxuICAgIFwiRWlnaHRcIixcbiAgICBcIk5pbmVcIixcbiAgICBcIlRlblwiLFxuICAgIFwiRWxldmVuXCIsXG4gICAgXCJUd2VsdmVcIixcbiAgICBcIlRoaXJ0ZWVuXCIsXG4gICAgXCJGb3VydGVlblwiLFxuICAgIFwiRmlmdGVlblwiLFxuICAgIFwiU2l4dGVlblwiLFxuICAgIFwiU2V2ZW50ZWVuXCIsXG4gICAgXCJFaWdodGVlblwiLFxuICAgIFwiTmluZXRlZW5cIixcbiAgXTtcbiAgY29uc3QgdGVuc1NwZWxsaW5ncyA9IFtcbiAgICBcIlwiLFxuICAgIFwiXCIsXG4gICAgXCJUd2VudHlcIixcbiAgICBcIlRoaXJ0eVwiLFxuICAgIFwiRm9ydHlcIixcbiAgICBcIkZpZnR5XCIsXG4gICAgXCJTaXh0eVwiLFxuICAgIFwiU2V2ZW50eVwiLFxuICAgIFwiRWlnaHR5XCIsXG4gICAgXCJOaW5ldHlcIixcbiAgXTtcbiAgbGV0IHNwZWxsaW5nID0gXCJcIjtcblxuICBjb25zdCBtaWxsaW9ucyA9IHZhbHVlIC8gMTAwMDAwMDtcbiAgdmFsdWUgJT0gMTAwMDAwMDtcblxuICBjb25zdCB0aG91c2FuZHMgPSB2YWx1ZSAvIDEwMDA7XG4gIHZhbHVlICU9IDEwMDA7XG5cbiAgY29uc3QgaHVuZHJlZHMgPSB2YWx1ZSAvIDEwMDtcbiAgdmFsdWUgJT0gMTAwO1xuXG4gIGNvbnN0IHRlbnMgPSB2YWx1ZSAvIDEwO1xuICB2YWx1ZSAlPSAxMDtcblxuICBjb25zdCBvbmVzID0gdmFsdWUgJSAxMDtcblxuICBpZiAobWlsbGlvbnMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKG1pbGxpb25zKSArIFwiIE1pbGxpb25cIjtcbiAgfVxuXG4gIGlmICh0aG91c2FuZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKHRob3VzYW5kcykgKyBcIiBUaG91c2FuZFwiO1xuICB9XG5cbiAgaWYgKGh1bmRyZWRzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiLCBcIjtcbiAgICBzcGVsbGluZyArPSBzcGVsbChodW5kcmVkcykgKyBcIiBIdW5kcmVkXCI7XG4gIH1cblxuICBpZiAodGVucyAhPT0gMCB8fCBvbmVzICE9PSAwKSB7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGxpbmcubGVuZ3RoID09PSAwID8gXCJcIiA6IFwiIFwiO1xuXG4gICAgaWYgKHRlbnMgPCAyKSB7XG4gICAgICBzcGVsbGluZyArPSBvbmVzU3BlbGxpbmdzW3RlbnMgKiAxMCArIG9uZXNdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzcGVsbGluZyArPSB0ZW5zU3BlbGxpbmdzW3RlbnNdO1xuXG4gICAgICBpZiAob25lcyAhPT0gMCkge1xuICAgICAgICBzcGVsbGluZyArPSBcIi1cIiArIG9uZXNTcGVsbGluZ3Nbb25lc107XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNwZWxsaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBcIlplcm9cIjtcbiAgfVxuXG4gIHJldHVybiBzcGVsbGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudFRvSGV4KGMpIHtcbiAgY29uc3QgaGV4ID0gYy50b1N0cmluZygxNik7XG4gIHJldHVybiBoZXgubGVuZ3RoID09PSAxID8gXCIwXCIgKyBoZXggOiBoZXg7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZ2JUb0hleChyZ2IpIHtcbiAgcmV0dXJuIGNvbXBvbmVudFRvSGV4KHJnYi5yKSArIGNvbXBvbmVudFRvSGV4KHJnYi5nKSArIGNvbXBvbmVudFRvSGV4KHJnYi5iKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhleFRvUmdiKGhleCkge1xuICBjb25zdCByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgcmV0dXJuIHJlc3VsdFxuICAgID8ge1xuICAgICAgICByOiBwYXJzZUludChyZXN1bHRbMV0sIDE2KSxcbiAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgIGI6IHBhcnNlSW50KHJlc3VsdFszXSwgMTYpLFxuICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBcInI6XCIgKyB0aGlzLnIgKyBcIixnOlwiICsgdGhpcy5nICsgXCIsYjpcIiArIHRoaXMuYjtcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICA6IG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWdUb1JhZChkZWdyZWVzKSB7XG4gIHJldHVybiAoZGVncmVlcyAqIE1hdGguUEkpIC8gMTgwO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFkVG9EZWcocmFkKSB7XG4gIHJldHVybiAocmFkICogMTgwKSAvIE1hdGguUEk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhzdGVwKHZhbHVlLCBtaW4sIG1heCkge1xuICBjb25zdCB4ID0gTWF0aC5tYXgoMCwgTWF0aC5taW4oMSwgKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pKSk7XG4gIHJldHVybiB4ICogeCAqICgzIC0gMiAqIHgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVycChhLCBiLCB0KSB7XG4gIHJldHVybiBhICsgdCAqIChiIC0gYSk7XG4gIC8vIHJldHVybiBhKDEtdCkgKyBidFxuICAvL3JldHVybiBtaW4gKyAobWF4IC0gbWluKSAqIHZhbHVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWl4KGEsIGIsIHQpIHtcbiAgcmV0dXJuIGxlcnAoYSwgYiwgdCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtKHZhbHVlLCBtaW4sIG1heCkge1xuICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih2YWx1ZSwgbWF4KSwgbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vZChuLCBtKSB7XG4gIHJldHVybiAoKG4gJSBtKSArIG0pICUgbTtcbn1cblxuLy9hIG1vZHVsbyBmdW5jdGlvbiB0aGF0IGhhbmRsZXMgbmVnYXRpdmVzIG51bWJlcnMgJ2NvcnJlY3RseSdcbmV4cG9ydCBmdW5jdGlvbiBtb2RXcmFwKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL3JhbmRvbSB3aXRoIHNlZWQsIHJldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tMUQoc2VlZCkge1xuICByZXR1cm4gbW9kV3JhcChNYXRoLnNpbihzZWVkKSAqIDQzNzU4LjU0NTMsIDEpO1xufVxuXG4vL3JldHVybnMgMC0xIHJhbmdlXG5leHBvcnQgZnVuY3Rpb24gbm9pc2UxRCh4KSB7XG4gIGNvbnN0IGkgPSBNYXRoLmZsb29yKHgpO1xuICBjb25zdCBmID0gbW9kV3JhcCh4LCAxKTtcbiAgY29uc3QgdSA9IGYgKiBmICogKDMuMCAtIDIuMCAqIGYpO1xuICByZXR1cm4gbGVycCh1LCByYW5kb20xRChpKSwgcmFuZG9tMUQoaSArIDEuMCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcENsYW1wKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBjbGFtcChsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKSwgbWluMiwgbWF4Mik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5lV2F2ZShcbiAgYW5nbGUgPSAwLFxuICBmcmVxdWVuY3kgPSBNYXRoLlBJLFxuICB0aW1lID0gMCxcbiAgc3BlZWQgPSAxLFxuICBhbXBsaXR1ZGUgPSAxXG4pIHtcbiAgcmV0dXJuIE1hdGguc2luKGFuZ2xlICogZnJlcXVlbmN5ICsgdGltZSAqIHNwZWVkKSAqIGFtcGxpdHVkZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wVGltZSh0aW1lLCBzdGFydFRpbWUsIGR1cmF0aW9uKSB7XG4gIHJldHVybiBjbGFtcCh0aW1lIC0gc3RhcnRUaW1lLCAwLjAsIGR1cmF0aW9uKSAvIGR1cmF0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgZWFzZSB2YWx1ZVxuIEBleGFtcGxlXG4gPGNvZGU+XG4gdmFsdWUgKz0gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbik7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZWFzZU91dCh2YWx1ZSwgdGFyZ2V0LCBmcmljdGlvbiA9IDAuMSkge1xuICByZXR1cm4gKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG4vKipcbiBFYXNlIGEgdmFsdWUgd2l0aCBzb21lIGVsYXN0aWNpdHlcbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlXG4gQHBhcmFtIHRhcmdldDogVGhlIHRhcmdldCB2YWx1ZVxuIEBwYXJhbSBmcmljdGlvbjogVGhlIGZyaWN0aW9uIGZyb20gMCB0byAxXG4gQHBhcmFtIHNwZWVkOiBUaGUgY3VycmVudCBzcGVlZFxuIEBwYXJhbSBlbGFzdGljaXR5OiBUaGUgZWxhc3RpY2l0eSBmcm9tIDAgdG8gMVxuIEByZXR1cm4gVGhlIG5ldyBzcGVlZCB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHNwZWVkID0gc3ByaW5nKHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uLCBzcGVlZCwgZWxhc3RpY2l0eSk7XG4gdmFsdWUgKz0gc3BlZWQ7XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3ByaW5nKFxuICB2YWx1ZSxcbiAgdGFyZ2V0ID0gMCxcbiAgZnJpY3Rpb24gPSAwLjEsXG4gIHNwZWVkID0gMCxcbiAgZWxhc3RpY2l0eSA9IDBcbikge1xuICByZXR1cm4gc3BlZWQgKiBlbGFzdGljaXR5ICsgKHRhcmdldCAtIHZhbHVlKSAqIGZyaWN0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTXVsdGlwbGVSb3RhdGlvbnMoYW5nbGUpIHtcbiAgY29uc3QgY2lyY2xlID0gTWF0aC5QSSAqIDI7XG4gIHdoaWxlIChhbmdsZSA+IGNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSAtPSBjaXJjbGU7XG4gIH1cbiAgd2hpbGUgKGFuZ2xlIDwgLWNpcmNsZSAvIDIpIHtcbiAgICBhbmdsZSArPSBjaXJjbGU7XG4gIH1cbiAgcmV0dXJuIGFuZ2xlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4Q29sb3JTdHJpbmdUb051bWJlcih2YWx1ZSkge1xuICByZXR1cm4gTnVtYmVyKHZhbHVlLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBjcmVhdGVGaWxlbmFtZSwgY3JlYXRlRmlsZW5hbWVPbmx5IH0gZnJvbSAnLi9tb2RlbC91dGlscyc7XG5cbmNvbnN0IHsgY3JlYXRlRkZtcGVnLCBmZXRjaEZpbGUgfSA9IEZGbXBlZztcblxuY29uc3QgZmZtcGVnID0gY3JlYXRlRkZtcGVnKHtcbiAgY29yZVBhdGg6IGNocm9tZS5ydW50aW1lLmdldFVSTCgnZmZtcGVnLWNvcmUuanMnKSxcbiAgbG9nOiB0cnVlLFxuICBtYWluTmFtZTogJ21haW4nLFxufSk7XG5cbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSkgPT4ge1xuICBpZiAobWVzc2FnZS50YXJnZXQgPT09ICdvZmZzY3JlZW4nKSB7XG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdGFydE9mZnNjcmVlblJlY29yZGluZyc6XG4gICAgICAgIHN0YXJ0UmVjb3JkaW5nKG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Njcm9sbENhcHR1cmVTdG9wT2Zmc2NyZWVuUmVjb3JkaW5nJzpcbiAgICAgICAgc3RvcFJlY29yZGluZyhtZXNzYWdlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucmVjb2duaXplZCBtZXNzYWdlOicsIG1lc3NhZ2UudHlwZSk7XG4gICAgfVxuICB9XG59KTtcblxubGV0IHJlY29yZGVyO1xubGV0IGRhdGEgPSBbXTtcbmxldCBibG9iO1xuXG5hc3luYyBmdW5jdGlvbiBzdGFydFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIGlmIChyZWNvcmRlcj8uc3RhdGUgPT09ICdyZWNvcmRpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYWxsZWQgc3RhcnRSZWNvcmRpbmcgd2hpbGUgcmVjb3JkaW5nIGlzIGluIHByb2dyZXNzLicpO1xuICB9XG4gIGNvbnNvbGUubG9nKHN0YXJ0UmVjb3JkaW5nLCBtZXNzYWdlKTtcbiAgY29uc3Qgc2l6ZSA9IHsgeDogbWVzc2FnZS50YWJXaWR0aCwgeTogbWVzc2FnZS50YWJIZWlnaHQgfTtcbiAgY29uc3QgcGl4ZWxSYXRpbyA9IG1lc3NhZ2UucGl4ZWxSYXRpbztcbiAgY29uc3QgY29uc3RyYWludHMgPSB7fTtcbiAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICBjb25zdHJhaW50cy52aWRlbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICAgIG1pbldpZHRoOiBzaXplLnggKiBwaXhlbFJhdGlvLFxuICAgICAgICBtYXhXaWR0aDogc2l6ZS54ICogcGl4ZWxSYXRpbyxcbiAgICAgICAgbWluSGVpZ2h0OiBzaXplLnkgKiBwaXhlbFJhdGlvLFxuICAgICAgICBtYXhIZWlnaHQ6IHNpemUueSAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1pbkZyYW1lUmF0ZTogMzAsXG4gICAgICAgIG1heEZyYW1lUmF0ZTogNjAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICBjb25zdHJhaW50cy5hdWRpbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgY29uc29sZS5sb2coJ2dldFVzZXJNZWRpYSBjb25zdHJhaW50cycsIEpTT04uc3RyaW5naWZ5KGNvbnN0cmFpbnRzKSk7XG4gIGNvbnN0IG1lZGlhID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoY29uc3RyYWludHMpO1xuXG4gIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgY29uc3Qgb3V0cHV0ID0gbmV3IEF1ZGlvQ29udGV4dCgpO1xuICAgIGNvbnN0IHNvdXJjZSA9IG91dHB1dC5jcmVhdGVNZWRpYVN0cmVhbVNvdXJjZShtZWRpYSk7XG4gICAgc291cmNlLmNvbm5lY3Qob3V0cHV0LmRlc3RpbmF0aW9uKTtcbiAgfVxuXG4gIGxldCBtaW1lVHlwZTtcbiAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICBtaW1lVHlwZSA9ICd2aWRlby93ZWJtO2NvZGVjcz1oMjY0JztcbiAgICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgICAgbWltZVR5cGUgKz0gJyxvcHVzJztcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgbWltZVR5cGUgPSAnYXVkaW8vd2VibTtjb2RlY3M9b3B1cyc7XG4gIH1cblxuICBjb25zb2xlLmxvZygpO1xuXG4gIGxldCB2aWRlb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLnZpZGVvQml0c1BlclNlY29uZCB8fCAxNjtcbiAgbGV0IGF1ZGlvQml0c1BlclNlY29uZCA9IG1lc3NhZ2UuYXVkaW9CaXRzUGVyU2Vjb25kIHx8IDEyODtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1pbWVUeXBlLFxuICAgIGF1ZGlvQml0c1BlclNlY29uZDogYXVkaW9CaXRzUGVyU2Vjb25kICogMTAwMCxcbiAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IHZpZGVvQml0c1BlclNlY29uZCAqIDEwMDAwMDAsXG4gIH07XG5cbiAgY29uc29sZS5sb2coJ01lZGlhUmVjb3JkZXIgb3B0aW9ucycsIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpKTtcblxuICByZWNvcmRlciA9IG5ldyBNZWRpYVJlY29yZGVyKG1lZGlhLCBvcHRpb25zKTtcbiAgcmVjb3JkZXIub25kYXRhYXZhaWxhYmxlID0gKGV2ZW50KSA9PiBkYXRhLnB1c2goZXZlbnQuZGF0YSk7XG4gIHJlY29yZGVyLm9uc3RvcCA9ICgpID0+IHtcbiAgICAvLyBjb25zdCBibG9iID0gbmV3IEJsb2IoZGF0YSwgeyB0eXBlOiBgdmlkZW8vJHtmb3JtYXR9YCB9KTtcbiAgICBjb25zdCBibG9iRm9ybWF0ID0gbWltZVR5cGUuc3BsaXQoJzsnKVswXTtcbiAgICBibG9iID0gbmV3IEJsb2IoZGF0YSwgeyB0eXBlOiBibG9iRm9ybWF0IH0pO1xuXG4gICAgY29udmVydFN0cmVhbXMoYmxvYiwgbWVzc2FnZSk7XG5cbiAgICBkYXRhID0gW107XG4gIH07XG4gIHJlY29yZGVyLnN0YXJ0KCk7XG5cbiAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAncmVjb3JkaW5nJztcbn1cblxuZnVuY3Rpb24gc3RvcFJlY29yZGluZyhtZXNzYWdlKSB7XG4gIHJlY29yZGVyLnN0b3AoKTtcbiAgcmVjb3JkZXIuc3RyZWFtLmdldFRyYWNrcygpLmZvckVhY2goKHQpID0+IHQuc3RvcCgpKTtcbiAgcmVjb3JkZXIgPSB1bmRlZmluZWQ7XG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRTdHJlYW1zKHZpZGVvQmxvYiwgbWVzc2FnZSkge1xuICB2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gIGZpbGVSZWFkZXIub25sb2FkID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIC8vIHZhciBibG9iID0gbmV3IEZpbGUoW3Jlc3VsdC5kYXRhXSwgJ3Rlc3QubXA0Jywge1xuICAgIC8vICAgdHlwZTogJ3ZpZGVvL21wNCcsXG4gICAgLy8gfSk7XG5cbiAgICBsZXQgaW5wdXRGaWxlTmFtZSA9IFwic2FtcGxlX3ZpZGVvLndlYm1cIjtcbiAgICBsZXQgb3V0cHV0RmlsZU5hbWUgPSBcInNhbXBsZV92aWRlby5tcDRcIjtcbiAgICBsZXQgZG93bmxvYWRFeHRlbnNpb24gPSBcIm1wNFwiO1xuICAgIGxldCBjb21tYW5kU3RyO1xuXG4gICAgaWYgKG1lc3NhZ2UuZXhwb3J0VmlkZW8pIHtcbiAgICAgIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgICAgIGNvbW1hbmRTdHIgPSBgZmZtcGVnIC1pICR7aW5wdXRGaWxlTmFtZX0gLWM6diBjb3B5IC1jOmEgYWFjICR7b3V0cHV0RmlsZU5hbWV9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbW1hbmRTdHIgPSBgZmZtcGVnIC1pICR7aW5wdXRGaWxlTmFtZX0gLWM6diBjb3B5ICR7b3V0cHV0RmlsZU5hbWV9YDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZG93bmxvYWRFeHRlbnNpb24gPSBcIm00YVwiO1xuICAgICAgb3V0cHV0RmlsZU5hbWUgPSBgc2FtcGxlX3ZpZGVvLm00YWA7XG4gICAgICBjb21tYW5kU3RyID0gYGZmbXBlZyAtaSAke2lucHV0RmlsZU5hbWV9IC1jOmEgYWFjICR7b3V0cHV0RmlsZU5hbWV9YDtcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlTmFtZSA9IGNyZWF0ZUZpbGVuYW1lT25seSgpO1xuICAgIGNvbnN0IGRvd25sb2FkRmlsZU5hbWUgPSBgJHtmaWxlTmFtZX0uJHtkb3dubG9hZEV4dGVuc2lvbn1gO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcnVuRkZtcGVnKGlucHV0RmlsZU5hbWUsIG91dHB1dEZpbGVOYW1lLCBjb21tYW5kU3RyLCBuZXcgVWludDhBcnJheSh0aGlzLnJlc3VsdCkpO1xuICAgIHZhciBibG9iID0gbmV3IEZpbGUoW3Jlc3VsdF0sIGRvd25sb2FkRmlsZU5hbWUsIHtcbiAgICAgIHR5cGU6IGB2aWRlby8ke2Rvd25sb2FkRXh0ZW5zaW9ufWAsXG4gICAgfSk7XG5cbiAgICBjb25zdCB2aWRlb1VSTE1lc3NhZ2UgPSBPYmplY3QuYXNzaWduKHt9LCBtZXNzYWdlKTtcbiAgICBPYmplY3QuYXNzaWduKHZpZGVvVVJMTWVzc2FnZSwge1xuICAgICAgdHlwZTogJ3Njcm9sbENhcHR1cmVWaWRlb1VSTCcsXG4gICAgICB2aWRlb1VSTDogVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSxcbiAgICAgIGZpbGVOYW1lOiBkb3dubG9hZEZpbGVOYW1lLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCd2aWRlb1VSTE1lc3NhZ2UudmlkZW9VUkwnLCB2aWRlb1VSTE1lc3NhZ2UudmlkZW9VUkwpXG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UodmlkZW9VUkxNZXNzYWdlKTtcbiAgfTtcbiAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih2aWRlb0Jsb2IpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5GRm1wZWcoaW5wdXRGaWxlTmFtZSwgb3V0cHV0RmlsZU5hbWUsIGNvbW1hbmRTdHIsIGZpbGUpIHtcbiAgaWYgKGZmbXBlZy5pc0xvYWRlZCgpKSB7XG4gICAgYXdhaXQgZmZtcGVnLmV4aXQoKTtcbiAgfVxuXG4gIGF3YWl0IGZmbXBlZy5sb2FkKCk7XG5cbiAgY29uc3QgY29tbWFuZExpc3QgPSBjb21tYW5kU3RyLnNwbGl0KCcgJyk7XG4gIGlmIChjb21tYW5kTGlzdC5zaGlmdCgpICE9PSAnZmZtcGVnJykge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc3RhcnQgd2l0aCBmZm1wZWcnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmZm1wZWcuRlMoJ3dyaXRlRmlsZScsIGlucHV0RmlsZU5hbWUsIGF3YWl0IGZldGNoRmlsZShmaWxlKSk7XG4gIGNvbnNvbGUubG9nKGNvbW1hbmRMaXN0KTtcbiAgYXdhaXQgZmZtcGVnLnJ1biguLi5jb21tYW5kTGlzdCk7XG4gIGNvbnN0IGRhdGEgPSBmZm1wZWcuRlMoJ3JlYWRGaWxlJywgb3V0cHV0RmlsZU5hbWUpO1xuICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2RhdGEuYnVmZmVyXSk7XG4gIHJldHVybiBibG9iO1xuICAvLyBkb3dubG9hZEZpbGUoYmxvYiwgb3V0cHV0RmlsZU5hbWUpO1xufVxuXG5mdW5jdGlvbiBkb3dubG9hZEZpbGUoYmxvYiwgZmlsZU5hbWUpIHtcbiAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgYS5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcbiAgYS5kb3dubG9hZCA9IGZpbGVOYW1lO1xuICBhLmNsaWNrKCk7XG59XG4iXSwibmFtZXMiOlsidGltZUFNUE0iLCJhZGRMZWFkaW5nWmVybyIsImNyZWF0ZUZpbGVuYW1lIiwiZXh0ZW5zaW9uIiwidGV4dCIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIm5hbWUiLCJjcmVhdGVGaWxlbmFtZU9ubHkiLCJkYXRlIiwiRGF0ZSIsImFtcG1UaW1lIiwiZGF0ZURhdGEiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImFtcG0iLCJ0b1VwcGVyQ2FzZSIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiZm9ybWF0QU1QTSIsInNwYWNlQmV0d2VlbiIsInN0clRpbWUiLCJ0b1VuaXhTdHJpbmciLCJ0b1VuaXhVVENTdHJpbmciLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldFVUQ0hvdXJzIiwiZ2V0VVRDTWludXRlcyIsImdldFVUQ1NlY29uZHMiLCJhZGRIb3VycyIsInNldFRpbWUiLCJnZXRUaW1lIiwiYWRkRGF5cyIsImRheXMiLCJtb250aHMiLCJlbiIsImZyIiwibGFuZ3VhZ2UiLCJnZXRBZ2UiLCJiaXJ0aERhdGUiLCJ0b2RheSIsImFnZSIsIm0iLCJ0cmVhdEFzVVRDIiwicmVzdWx0Iiwic2V0TWludXRlcyIsImdldFRpbWV6b25lT2Zmc2V0IiwibWludXRlc0JldHdlZW4iLCJzdGFydERhdGUiLCJlbmREYXRlIiwibWlsbGlzZWNvbmRzUGVyTWludXRlIiwiaG91cnNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVySG91ciIsImRheXNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyRGF5Iiwid2Vla3NCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyV2VlayIsIm1vbnRoc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJNb250aCIsInllYXJzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1BlclllYXIiLCJnZXRGYW1pbGlhclRpbWVCZXR3ZWVuIiwieWVhcnNCZXR3ZWVuRmxvb3IiLCJNYXRoIiwiZmxvb3IiLCJ0b1N0cmluZyIsIm1vbnRoc0JldHdlZW5GbG9vciIsIndlZWtzQmV0d2VlbkZsb29yIiwiZGF5c0JldHdlZW5GbG9vciIsImhvdXJzQmV0d2VlbkZsb29yIiwibWludXRlc0JldHdlZW5GbG9vciIsImdldFJhbmRvbUFyYml0cmFyeSIsIm1pbiIsIm1heCIsInJhbmRvbSIsImdldFJhbmRvbUludCIsImdldFJhbmRvbUludEluY2x1c2l2ZSIsInJhbmRvbVdpdGhpblJhbmdlIiwicmFuZG9tSW50ZWdlcldpdGhpblJhbmdlIiwiaXNFdmVuIiwidmFsdWUiLCJpc09kZCIsImlzSW50ZWdlciIsImlzUHJpbWUiLCJzIiwic3FydCIsImkiLCJyb3VuZERlY2ltYWxUb1BsYWNlIiwicGxhY2UiLCJwIiwicG93Iiwicm91bmQiLCJyb3VuZDEiLCJyb3VuZDIiLCJyb3VuZDMiLCJsb29wSW5kZXgiLCJpbmRleCIsImlzQmV0d2VlbiIsImZpcnN0VmFsdWUiLCJzZWNvbmRWYWx1ZSIsImNvbnN0cmFpbiIsImNyZWF0ZVN0ZXBzQmV0d2VlbiIsImJlZ2luIiwiZW5kIiwic3RlcHMiLCJzdGVwc0JldHdlZW4iLCJpbmNyZW1lbnQiLCJwdXNoIiwiaW50ZXJwb2xhdGUiLCJhbW91bnQiLCJtYXAiLCJtaW4xIiwibWF4MSIsIm1pbjIiLCJtYXgyIiwibGVycCIsIm5vcm0iLCJnZXRXZWlnaHRlZEF2ZXJhZ2UiLCJkZXN0IiwibiIsImZvcm1hdCIsImtEZWxpbSIsIm1pbkxlbmd0aCIsImZpbGxDaGFyIiwiaXNOYU4iLCJyZW1haW5kZXIiLCJudW0iLCJsZW4iLCJhZGRDaGFyIiwidG90YWxEZWxpbSIsInRvdGFsUmVtYWluIiwibnVtU3BsaXQiLCJzcGxpdCIsInNwbGljZSIsInNoaWZ0Iiwiam9pbiIsInN1YnN0ciIsImZvcm1hdEN1cnJlbmN5IiwiZm9yY2VEZWNpbWFscyIsImN1cnJlbmN5IiwidG9GaXhlZCIsImdldE9yZGluYWxTdWZmaXgiLCJzcGVsbCIsIkVycm9yIiwib25lc1NwZWxsaW5ncyIsInRlbnNTcGVsbGluZ3MiLCJzcGVsbGluZyIsIm1pbGxpb25zIiwidGhvdXNhbmRzIiwiaHVuZHJlZHMiLCJ0ZW5zIiwib25lcyIsImNvbXBvbmVudFRvSGV4IiwiYyIsImhleCIsInJnYlRvSGV4IiwicmdiIiwiciIsImciLCJiIiwiaGV4VG9SZ2IiLCJleGVjIiwicGFyc2VJbnQiLCJkZWdUb1JhZCIsImRlZ3JlZXMiLCJQSSIsInJhZFRvRGVnIiwicmFkIiwic21vb3Roc3RlcCIsIngiLCJhIiwidCIsIm1peCIsImNsYW1wIiwibW9kIiwibW9kV3JhcCIsInJhbmRvbTFEIiwic2VlZCIsInNpbiIsIm5vaXNlMUQiLCJmIiwidSIsInJhbmRvbVJhbmdlIiwicmFuZG9tSW50IiwibWFwQ2xhbXAiLCJzaW5lV2F2ZSIsImFuZ2xlIiwiZnJlcXVlbmN5IiwidGltZSIsInNwZWVkIiwiYW1wbGl0dWRlIiwiY2xhbXBUaW1lIiwic3RhcnRUaW1lIiwiZHVyYXRpb24iLCJlYXNlT3V0IiwidGFyZ2V0IiwiZnJpY3Rpb24iLCJzcHJpbmciLCJlbGFzdGljaXR5IiwicmVtb3ZlTXVsdGlwbGVSb3RhdGlvbnMiLCJjaXJjbGUiLCJoZXhDb2xvclN0cmluZ1RvTnVtYmVyIiwiTnVtYmVyIiwicmVwbGFjZSIsImNyZWF0ZUZGbXBlZyIsImZldGNoRmlsZSIsIkZGbXBlZyIsImZmbXBlZyIsImNvcmVQYXRoIiwiY2hyb21lIiwicnVudGltZSIsImdldFVSTCIsImxvZyIsIm1haW5OYW1lIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJtZXNzYWdlIiwidHlwZSIsInN0YXJ0UmVjb3JkaW5nIiwic3RvcFJlY29yZGluZyIsInJlY29yZGVyIiwiZGF0YSIsImJsb2IiLCJzdGF0ZSIsImNvbnNvbGUiLCJzaXplIiwidGFiV2lkdGgiLCJ5IiwidGFiSGVpZ2h0IiwicGl4ZWxSYXRpbyIsImNvbnN0cmFpbnRzIiwiZXhwb3J0VmlkZW8iLCJ2aWRlbyIsIm1hbmRhdG9yeSIsImNocm9tZU1lZGlhU291cmNlIiwiY2hyb21lTWVkaWFTb3VyY2VJZCIsInN0cmVhbUlkIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm1pbkZyYW1lUmF0ZSIsIm1heEZyYW1lUmF0ZSIsImV4cG9ydEF1ZGlvIiwiYXVkaW8iLCJKU09OIiwic3RyaW5naWZ5IiwibWVkaWEiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJvdXRwdXQiLCJBdWRpb0NvbnRleHQiLCJzb3VyY2UiLCJjcmVhdGVNZWRpYVN0cmVhbVNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsIm1pbWVUeXBlIiwidmlkZW9CaXRzUGVyU2Vjb25kIiwiYXVkaW9CaXRzUGVyU2Vjb25kIiwib3B0aW9ucyIsIk1lZGlhUmVjb3JkZXIiLCJvbmRhdGFhdmFpbGFibGUiLCJldmVudCIsIm9uc3RvcCIsImJsb2JGb3JtYXQiLCJCbG9iIiwiY29udmVydFN0cmVhbXMiLCJzdGFydCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaGFzaCIsInN0b3AiLCJzdHJlYW0iLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidmlkZW9CbG9iIiwiZmlsZVJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJpbnB1dEZpbGVOYW1lIiwib3V0cHV0RmlsZU5hbWUiLCJkb3dubG9hZEV4dGVuc2lvbiIsImNvbW1hbmRTdHIiLCJmaWxlTmFtZSIsImRvd25sb2FkRmlsZU5hbWUiLCJydW5GRm1wZWciLCJVaW50OEFycmF5IiwiRmlsZSIsInZpZGVvVVJMTWVzc2FnZSIsIk9iamVjdCIsImFzc2lnbiIsInZpZGVvVVJMIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwic2VuZE1lc3NhZ2UiLCJyZWFkQXNBcnJheUJ1ZmZlciIsImZpbGUiLCJpc0xvYWRlZCIsImV4aXQiLCJsb2FkIiwiY29tbWFuZExpc3QiLCJhbGVydCIsIkZTIiwicnVuIiwiYnVmZmVyIiwiZG93bmxvYWRGaWxlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siXSwic291cmNlUm9vdCI6IiJ9