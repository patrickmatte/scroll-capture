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
  console.log('startRecording', JSON.stringify(message));
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
        minWidth: size.x,
        maxWidth: size.x * pixelRatio,
        minHeight: size.y,
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
  console.log('navigator.mediaDevices.getUserMedia', JSON.stringify(constraints));
  const media = await navigator.mediaDevices.getUserMedia(constraints);
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
  console.log('runFFmpeg commandStr', commandStr);
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
  await ffmpeg.run(...commandList);
  const data = ffmpeg.FS('readFile', outputFileName);
  console.log('ffmpeg data', data);
  const blob = new Blob([data.buffer]);
  console.log('ffmpeg blob', blob);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0VBQ3JDMUksQ0FBQyxDQUFDMkksSUFBSSxHQUFHaEIsR0FBRyxDQUFDQyxlQUFlLENBQUN4RSxJQUFJLENBQUM7RUFDbENwRCxDQUFDLENBQUM0SSxRQUFRLEdBQUcxQixRQUFRO0VBQ3JCbEgsQ0FBQyxDQUFDNkksS0FBSyxDQUFDLENBQUM7QUFDWCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vanMvbW9kZWwvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvdHN1bmFtaS91dGlscy9udW1iZXIuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vanMvb2Zmc2NyZWVuLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRpbWVBTVBNIH0gZnJvbSAnLi4vLi4vbGliL3RzdW5hbWkvdXRpbHMvZGF0ZSc7XG5pbXBvcnQgeyBhZGRMZWFkaW5nWmVybyB9IGZyb20gJy4uLy4uL2xpYi90c3VuYW1pL3V0aWxzL251bWJlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGaWxlbmFtZShleHRlbnNpb24sIHRleHQgPSAnU2Nyb2xsIENhcHR1cmUnKSB7XG4gIGNvbnN0IG5hbWUgPSBjcmVhdGVGaWxlbmFtZU9ubHkodGV4dCk7XG4gIHJldHVybiBgJHtuYW1lfS4ke2V4dGVuc2lvbn1gO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRmlsZW5hbWVPbmx5KHRleHQgPSAnU2Nyb2xsIENhcHR1cmUnKSB7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IGFtcG1UaW1lID0gdGltZUFNUE0oZGF0ZSk7XG4gIGxldCBkYXRlRGF0YSA9IHtcbiAgICB5ZWFyOiBkYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgbW9udGg6IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpLFxuICAgIGRhdGU6IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSxcbiAgfTtcbiAgYW1wbVRpbWUuYW1wbSA9IGFtcG1UaW1lLmFtcG0udG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIGAke3RleHR9ICR7ZGF0ZURhdGEueWVhcn0tJHtkYXRlRGF0YS5tb250aH0tJHtkYXRlRGF0YS5kYXRlfSBhdCAke2FtcG1UaW1lLmhvdXJzfS4ke2FtcG1UaW1lLm1pbnV0ZXN9LiR7YW1wbVRpbWUuc2Vjb25kc30gJHthbXBtVGltZS5hbXBtfWA7XG59IiwiaW1wb3J0IHthZGRMZWFkaW5nWmVyb30gZnJvbSBcIi4vbnVtYmVyXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiB0aW1lQU1QTShkYXRlKSB7XG5cdGxldCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcblx0bGV0IGFtcG0gPSBob3VycyA+PSAxMiA/ICdwbScgOiAnYW0nO1xuXHRsZXQgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0TWludXRlcygpKTtcblx0bGV0IHNlY29uZHMgPSBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG5cdGhvdXJzID0gaG91cnMgJSAxMjtcblx0aG91cnMgPSBob3VycyA/IGhvdXJzIDogMTI7IC8vIHRoZSBob3VyICcwJyBzaG91bGQgYmUgJzEyJ1xuXHRyZXR1cm4geyBob3VycywgbWludXRlcywgc2Vjb25kcywgYW1wbSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0QU1QTShkYXRlLCBzcGFjZUJldHdlZW4gPSBcIlwiKSB7XG5cdGxldCBkYXRlRGF0YSA9IHRpbWVBTVBNKGRhdGUpO1xuXHRsZXQgc3RyVGltZSA9IGRhdGVEYXRhLmhvdXJzICsgJzonICsgZGF0ZURhdGEubWludXRlcyArIHNwYWNlQmV0d2VlbiArIGFtcG07XG5cdHJldHVybiBzdHJUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9Vbml4U3RyaW5nKGRhdGUpIHtcblx0cmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKSArIFwiIFwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRIb3VycygpKSArIFwiOlwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRNaW51dGVzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFNlY29uZHMoKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1VuaXhVVENTdHJpbmcoZGF0ZSkge1xuXHRyZXR1cm4gZGF0ZS5nZXRVVENGdWxsWWVhcigpICsgXCItXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSArIFwiLVwiICsgYWRkTGVhZGluZ1plcm8oZGF0ZS5nZXRVVENEYXRlKCkpICsgXCIgXCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ0hvdXJzKCkpICsgXCI6XCIgKyBhZGRMZWFkaW5nWmVybyhkYXRlLmdldFVUQ01pbnV0ZXMoKSkgKyBcIjpcIiArIGFkZExlYWRpbmdaZXJvKGRhdGUuZ2V0VVRDU2Vjb25kcygpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEhvdXJzKGRhdGUsIGhvdXJzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChob3VycyAqIDYwICogNjAgKiAxMDAwKSk7XG5cdHJldHVybiBkYXRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkRGF5cyhkYXRlLCBkYXlzKSB7XG5cdGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIChkYXlzICogMjQgKiA2MCAqIDYwICogMTAwMCkpO1xuXHRyZXR1cm4gZGF0ZTtcbn1cblxuZXhwb3J0IGxldCBtb250aHMgPSB7XG5cdGVuOltcIkphbnVhcnlcIiwgXCJGZWJydWFyeVwiLCBcIk1hcmNoXCIsIFwiQXByaWxcIiwgXCJNYXlcIiwgXCJKdW5lXCIsIFwiSnVseVwiLCBcIkF1Z3VzdFwiLCBcIlNlcHRlbWJlclwiLCBcIk9jdG9iZXJcIiwgXCJOb3ZlbWJlclwiLCBcIkRlY2VtYmVyXCJdLFxuXHRmcjpbXCJKYW52aWVyXCIsIFwiRsOpdnJpZXJcIiwgXCJNYXJzXCIsIFwiQXZyaWxcIiwgXCJNYWlcIiwgXCJKdWluXCIsIFwiSnVpbGxldFwiLCBcIkFvw7t0XCIsIFwiU2VwdGVtYnJlXCIsIFwiT2N0b2JyZVwiLCBcIk5vdmVtYnJlXCIsIFwiRMOpY2VtYnJlXCJdXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9udGgoZGF0ZSwgbGFuZ3VhZ2UpIHtcblx0aWYgKCFsYW5ndWFnZSkge1xuXHRcdGxhbmd1YWdlID0gXCJlblwiO1xuXHR9XG5cdGxldCBtb250aDtcblx0c3dpdGNoKGxhbmd1YWdlKSB7XG5cdFx0Y2FzZSBcImVuXCI6XG5cdFx0XHRtb250aCA9IG1vbnRoc1tsYW5ndWFnZV1bZGF0ZS5nZXRNb250aCgpXTtcblx0XHRcdGJyZWFrO1xuXHR9XG5cdHJldHVybiBtb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEFnZShiaXJ0aERhdGUpIHtcblx0bGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcblx0bGV0IGFnZSA9IHRvZGF5LmdldEZ1bGxZZWFyKCkgLSBiaXJ0aERhdGUuZ2V0RnVsbFllYXIoKTtcblx0bGV0IG0gPSB0b2RheS5nZXRNb250aCgpIC0gYmlydGhEYXRlLmdldE1vbnRoKCk7XG5cdGlmIChtIDwgMCB8fCAobSA9PT0gMCAmJiB0b2RheS5nZXREYXRlKCkgPCBiaXJ0aERhdGUuZ2V0RGF0ZSgpKSkge1xuXHRcdGFnZS0tO1xuXHR9XG5cdHJldHVybiBhZ2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cmVhdEFzVVRDKGRhdGUpIHtcblx0bGV0IHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUpO1xuXHRyZXN1bHQuc2V0TWludXRlcyhyZXN1bHQuZ2V0TWludXRlcygpIC0gcmVzdWx0LmdldFRpbWV6b25lT2Zmc2V0KCkpO1xuXHRyZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWludXRlc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNaW51dGUgPSA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNaW51dGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBob3Vyc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJIb3VyID0gNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJIb3VyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGF5c0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJEYXkgPSAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyRGF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSkge1xuXHRsZXQgbWlsbGlzZWNvbmRzUGVyV2VlayA9IDcgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyV2Vlaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCBtaWxsaXNlY29uZHNQZXJNb250aCA9IDM2NSAvIDEyICAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cdHJldHVybiAodHJlYXRBc1VUQyhlbmREYXRlKSAtIHRyZWF0QXNVVEMoc3RhcnREYXRlKSkgLyBtaWxsaXNlY29uZHNQZXJNb250aDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpIHtcblx0bGV0IG1pbGxpc2Vjb25kc1BlclllYXIgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXHRyZXR1cm4gKHRyZWF0QXNVVEMoZW5kRGF0ZSkgLSB0cmVhdEFzVVRDKHN0YXJ0RGF0ZSkpIC8gbWlsbGlzZWNvbmRzUGVyWWVhcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZhbWlsaWFyVGltZUJldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKSB7XG5cdGxldCB0ZXh0ID0gXCJcIjtcblx0bGV0IHllYXJzQmV0d2VlbiA9IHllYXJzQmV0d2VlbihzdGFydERhdGUsIGVuZERhdGUpO1xuXHRpZiAoeWVhcnNCZXR3ZWVuID49IDEpIHtcblx0XHRsZXQgeWVhcnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKHllYXJzQmV0d2Vlbik7XG5cdFx0aWYgKHllYXJzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFycyBhZ29cIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGV4dCA9IHllYXJzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB5ZWFyIGFnb1wiO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRsZXQgbW9udGhzQmV0d2VlbiA9IG1vbnRoc0JldHdlZW4oc3RhcnREYXRlLCBlbmREYXRlKTtcblx0XHRpZiAobW9udGhzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRsZXQgbW9udGhzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtb250aHNCZXR3ZWVuKTtcblx0XHRcdGlmIChtb250aHNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRocyBhZ29cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRleHQgPSBtb250aHNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIG1vbnRoIGFnb1wiO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgd2Vla3NCZXR3ZWVuID0gd2Vla3NCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRpZiAod2Vla3NCZXR3ZWVuID49IDEpIHtcblx0XHRcdFx0bGV0IHdlZWtzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcih3ZWVrc0JldHdlZW4pO1xuXHRcdFx0XHRpZiAod2Vla3NCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0dGV4dCA9IHdlZWtzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiB3ZWVrcyBhZ29cIjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0ZXh0ID0gd2Vla3NCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIHdlZWsgYWdvXCI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBkYXlzQmV0d2VlbiA9IGRheXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdGlmIChkYXlzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0bGV0IGRheXNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGRheXNCZXR3ZWVuKTtcblx0XHRcdFx0XHRpZiAoZGF5c0JldHdlZW5GbG9vciA+IDEpIHtcblx0XHRcdFx0XHRcdHRleHQgPSBkYXlzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBkYXlzIGFnb1wiO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0ZXh0ID0gZGF5c0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgZGF5IGFnb1wiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuID0gaG91cnNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0aWYgKGhvdXJzQmV0d2VlbiA+PSAxKSB7XG5cdFx0XHRcdFx0XHRsZXQgaG91cnNCZXR3ZWVuRmxvb3IgPSBNYXRoLmZsb29yKGhvdXJzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRpZiAoaG91cnNCZXR3ZWVuRmxvb3IgPiAxKSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBob3Vyc0JldHdlZW5GbG9vci50b1N0cmluZygpICsgXCIgaG91cnMgYWdvXCI7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR0ZXh0ID0gaG91cnNCZXR3ZWVuRmxvb3IudG9TdHJpbmcoKSArIFwiIGhvdXIgYWdvXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbiA9IG1pbnV0ZXNCZXR3ZWVuKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG5cdFx0XHRcdFx0XHRpZiAobWludXRlc0JldHdlZW4gPiAxKSB7XG5cdFx0XHRcdFx0XHRcdGxldCBtaW51dGVzQmV0d2VlbkZsb29yID0gTWF0aC5mbG9vcihtaW51dGVzQmV0d2Vlbik7XG5cdFx0XHRcdFx0XHRcdGlmIChtaW51dGVzQmV0d2VlbkZsb29yID4gMSkge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGVzIGFnb1wiO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRleHQgPSBtaW51dGVzQmV0d2VlbkZsb29yLnRvU3RyaW5nKCkgKyBcIiBtaW51dGUgYWdvXCI7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHRleHQgPSBcIkp1c3Qgbm93XCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0ZXh0O1xufSIsIi8vIFJldHVybnMgYSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIChpbmNsdXNpdmUpIGFuZCBtYXggKGV4Y2x1c2l2ZSlcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21BcmJpdHJhcnkobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoZXhjbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbn1cblxuLy8gUmV0dXJucyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIChpbmNsdWRlZCkgYW5kIG1heCAoaW5jbHVkZWQpXG4vLyBVc2luZyBNYXRoLnJvdW5kKCkgd2lsbCBnaXZlIHlvdSBhIG5vbi11bmlmb3JtIGRpc3RyaWJ1dGlvbiFcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUobWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG59XG5cbi8qKlxuIENyZWF0ZXMgYSByYW5kb20gbnVtYmVyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gbnVtYmVyIGNhbiBiZS5cbiBAcGFyYW0gbWluOiBUaGUgbWF4aW11bSB2YWx1ZSB0aGUgcmFuZG9tIG51bWJlciBjYW4gYmUuXG4gQHJldHVybiBSZXR1cm5zIGEgcmFuZG9tIG51bWJlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tV2l0aGluUmFuZ2UobWluLCBtYXgpIHtcbiAgcmV0dXJuIG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbn1cblxuLyoqXG4gQ3JlYXRlcyBhIHJhbmRvbSBpbnRlZ2VyIHdpdGhpbiB0aGUgZGVmaW5lZCByYW5nZS5cblxuIEBwYXJhbSBtaW46IFRoZSBtaW5pbXVtIHZhbHVlIHRoZSByYW5kb20gaW50ZWdlciBjYW4gYmUuXG4gQHBhcmFtIG1pbjogVGhlIG1heGltdW0gdmFsdWUgdGhlIHJhbmRvbSBpbnRlZ2VyIGNhbiBiZS5cbiBAcmV0dXJuIFJldHVybnMgYSByYW5kb20gaW50ZWdlciB3aXRoaW4gdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50ZWdlcldpdGhpblJhbmdlKG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMSArIG1heCAtIG1pbikgKyBtaW4pO1xufVxuXG4vKipcbiBEZXRlcm1pbmVzIGlmIHRoZSBudW1iZXIgaXMgZXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGRpdmlzaWJsZSBieSA8Y29kZT4yPC9jb2RlPi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBldmVuOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNFdmVuKDcpKTsgLy8gVHJhY2VzIGZhbHNlXG4gY29uc29sZS5sb2coaXNFdmVuKDEyKSk7IC8vIFRyYWNlcyB0cnVlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNFdmVuKHZhbHVlKSB7XG4gIHJldHVybiAodmFsdWUgJiAxKSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIG9kZC5cblxuIEBwYXJhbSB2YWx1ZTogQSBudW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIG5vdCBkaXZpc2libGUgYnkgPGNvZGU+MjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIDxjb2RlPnRydWU8L2NvZGU+IGlmIHRoZSBudW1iZXIgaXMgb2RkOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNPZGQoNykpOyAvLyBUcmFjZXMgdHJ1ZVxuIGNvbnNvbGUubG9nKGlzT2RkKDEyKSk7IC8vIFRyYWNlcyBmYWxzZVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzT2RkKHZhbHVlKSB7XG4gIHJldHVybiAhaXNFdmVuKHZhbHVlKTtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIGFuIGludGVnZXIuXG5cbiBAcGFyYW0gdmFsdWU6IEEgbnVtYmVyIHRvIGRldGVybWluZSBpZiBpdCBjb250YWlucyBubyBkZWNpbWFsIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBhbiBpbnRlZ2VyOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEzKSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNJbnRlZ2VyKDEuMjM0NSkpOyAvLyBUcmFjZXMgZmFsc2VcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICUgMSA9PT0gMDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBpZiB0aGUgbnVtYmVyIGlzIHByaW1lLlxuXG4gQHBhcmFtIHZhbHVlOiBBIG51bWJlciB0byBkZXRlcm1pbmUgaWYgaXQgaXMgb25seSBkaXZpc2libGUgYnkgPGNvZGU+MTwvY29kZT4gYW5kIGl0c2VsZi5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBpcyBwcmltZTsgb3RoZXJ3aXNlIDxjb2RlPmZhbHNlPC9jb2RlPi5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzUHJpbWUoMTMpKTsgLy8gVHJhY2VzIHRydWVcbiBjb25zb2xlLmxvZyhpc1ByaW1lKDQpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNQcmltZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IDEgfHwgdmFsdWUgPT09IDIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmIChpc0V2ZW4odmFsdWUpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgcyA9IE1hdGguc3FydCh2YWx1ZSk7XG4gIGZvciAobGV0IGkgPSAzOyBpIDw9IHM7IGkrKykge1xuICAgIGlmICh2YWx1ZSAlIGkgPT09IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gUm91bmRzIGEgbnVtYmVyJ3MgZGVjaW1hbCB2YWx1ZSB0byBhIHNwZWNpZmljIHBsYWNlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgbnVtYmVyIHRvIHJvdW5kLlxuIEBwYXJhbSBwbGFjZTogVGhlIGRlY2ltYWwgcGxhY2UgdG8gcm91bmQuXG4gQHJldHVybiBSZXR1cm5zIHRoZSB2YWx1ZSByb3VuZGVkIHRvIHRoZSBkZWZpbmVkIHBsYWNlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cocm91bmRUb1BsYWNlKDMuMTQxNTksIDIpKTsgLy8gVHJhY2VzIDMuMTRcbiBjb25zb2xlLmxvZyhyb3VuZFRvUGxhY2UoMy4xNDE1OSwgMykpOyAvLyBUcmFjZXMgMy4xNDJcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCBwbGFjZSA9IDEpIHtcbiAgY29uc3QgcCA9IE1hdGgucG93KDEwLCBwbGFjZSk7XG5cbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiBwKSAvIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByb3VuZDEodmFsdWUpIHtcbiAgcmV0dXJuIHJvdW5kRGVjaW1hbFRvUGxhY2UodmFsdWUsIDEpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcm91bmQyKHZhbHVlKSB7XG4gIHJldHVybiByb3VuZERlY2ltYWxUb1BsYWNlKHZhbHVlLCAyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJvdW5kMyh2YWx1ZSkge1xuICByZXR1cm4gcm91bmREZWNpbWFsVG9QbGFjZSh2YWx1ZSwgMyk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgaW5kZXggaXMgaW5jbHVkZWQgd2l0aGluIHRoZSBjb2xsZWN0aW9uIGxlbmd0aCBvdGhlcndpc2UgdGhlIGluZGV4IGxvb3BzIHRvIHRoZSBiZWdpbm5pbmcgb3IgZW5kIG9mIHRoZSByYW5nZSBhbmQgY29udGludWVzLlxuXG4gQHBhcmFtIGluZGV4OiBTaG9wIHRvIGxvb3AgaWYgbmVlZGVkLlxuIEBwYXJhbSBsZW5ndGg6IFRoZSB0b3RhbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiBAcmV0dXJuIEEgdmFsaWQgemVyby1iYXNlZCBpbmRleC5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIHZhciBjb2xvcnM6QXJyYXkgPSBuZXcgQXJyYXkoXCJSZWRcIiwgXCJHcmVlblwiLCBcIkJsdWVcIik7XG5cbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoMiwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEJsdWVcbiBjb25zb2xlLmxvZ2NvbG9yc1tsb29wSW5kZXgoNCwgY29sb3JzLmxlbmd0aCldKTsgLy8gVHJhY2VzIEdyZWVuXG4gY29uc29sZS5sb2djb2xvcnNbbG9vcEluZGV4KC02LCBjb2xvcnMubGVuZ3RoKV0pOyAvLyBUcmFjZXMgUmVkXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9vcEluZGV4KGluZGV4LCBsZW5ndGgpIHtcbiAgaWYgKGluZGV4IDwgMCkge1xuICAgIGluZGV4ID0gbGVuZ3RoICsgKGluZGV4ICUgbGVuZ3RoKTtcbiAgfVxuXG4gIGlmIChpbmRleCA+PSBsZW5ndGgpIHtcbiAgICByZXR1cm4gaW5kZXggJSBsZW5ndGg7XG4gIH1cblxuICByZXR1cm4gaW5kZXg7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdGhlIHZhbHVlIGlzIGluY2x1ZGVkIHdpdGhpbiBhIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgPGNvZGU+dHJ1ZTwvY29kZT4gaWYgdGhlIG51bWJlciBmYWxscyB3aXRoaW4gdGhlIHJhbmdlOyBvdGhlcndpc2UgPGNvZGU+ZmFsc2U8L2NvZGU+LlxuIEB1c2FnZU5vdGUgVGhlIHJhbmdlIHZhbHVlcyBkbyBub3QgbmVlZCB0byBiZSBpbiBvcmRlci5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGlzQmV0d2VlbigzLCAwLCA1KSk7IC8vIFRyYWNlcyB0cnVlXG4gY29uc29sZS5sb2coaXNCZXR3ZWVuKDcsIDAsIDUpKTsgLy8gVHJhY2VzIGZhbHNlXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCZXR3ZWVuKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gIShcbiAgICB2YWx1ZSA8IE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSB8fFxuICAgIHZhbHVlID4gTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIERldGVybWluZXMgaWYgdmFsdWUgZmFsbHMgd2l0aGluIGEgcmFuZ2U7IGlmIG5vdCBpdCBpcyBzbmFwcGVkIHRvIHRoZSBuZWFyZXN0IHJhbmdlIHZhbHVlLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gZGV0ZXJtaW5lIGlmIGl0IGlzIGluY2x1ZGVkIGluIHRoZSByYW5nZS5cbiBAcGFyYW0gZmlyc3RWYWx1ZTogRmlyc3QgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBzZWNvbmRWYWx1ZTogU2Vjb25kIHZhbHVlIG9mIHRoZSByYW5nZS5cbiBAcmV0dXJuIFJldHVybnMgZWl0aGVyIHRoZSBudW1iZXIgYXMgcGFzc2VkLCBvciBpdHMgdmFsdWUgb25jZSBzbmFwcGVkIHRvIG5lYXJlc3QgcmFuZ2UgdmFsdWUuXG4gQHVzYWdlTm90ZSBUaGUgY29uc3RyYWludCB2YWx1ZXMgZG8gbm90IG5lZWQgdG8gYmUgaW4gb3JkZXIuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjb25zdHJhaW4oMywgMCwgNSkpOyAvLyBUcmFjZXMgM1xuIGNvbnNvbGUubG9nKGNvbnN0cmFpbig3LCAwLCA1KSk7IC8vIFRyYWNlcyA1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uc3RyYWluKHZhbHVlLCBmaXJzdFZhbHVlLCBzZWNvbmRWYWx1ZSkge1xuICByZXR1cm4gTWF0aC5taW4oXG4gICAgTWF0aC5tYXgodmFsdWUsIE1hdGgubWluKGZpcnN0VmFsdWUsIHNlY29uZFZhbHVlKSksXG4gICAgTWF0aC5tYXgoZmlyc3RWYWx1ZSwgc2Vjb25kVmFsdWUpXG4gICk7XG59XG5cbi8qKlxuIENyZWF0ZXMgZXZlbmx5IHNwYWNlZCBudW1lcmljYWwgaW5jcmVtZW50cyBiZXR3ZWVuIHR3byBudW1iZXJzLlxuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAcGFyYW0gc3RlcHM6IFRoZSBudW1iZXIgb2YgaW5jcmVtZW50cyBiZXR3ZWVuIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIHZhbHVlcy5cbiBAcmV0dXJuIFJldHVybnMgYW4gQXJyYXkgY29tcHJpc2VkIG9mIHRoZSBpbmNyZW1lbnRzIGJldHdlZW4gdGhlIHR3byB2YWx1ZXMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhjcmVhdGVTdGVwc0JldHdlZW4oMCwgNSwgNCkpOyAvLyBUcmFjZXMgMSwyLDMsNFxuIGNvbnNvbGUubG9nKGNyZWF0ZVN0ZXBzQmV0d2VlbigxLCAzLCAzKSk7IC8vIFRyYWNlcyAxLjUsMiwyLjVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdGVwc0JldHdlZW4oYmVnaW4sIGVuZCwgc3RlcHMpIHtcbiAgc3RlcHMrKztcblxuICBsZXQgaSA9IDA7XG4gIGNvbnN0IHN0ZXBzQmV0d2VlbiA9IFtdO1xuICBjb25zdCBpbmNyZW1lbnQgPSAoZW5kIC0gYmVnaW4pIC8gc3RlcHM7XG5cbiAgd2hpbGUgKCsraSA8IHN0ZXBzKSB7XG4gICAgc3RlcHNCZXR3ZWVuLnB1c2goaSAqIGluY3JlbWVudCArIGJlZ2luKTtcbiAgfVxuXG4gIHJldHVybiBzdGVwc0JldHdlZW47XG59XG5cbi8qKlxuIERldGVybWluZXMgYSB2YWx1ZSBiZXR3ZWVuIHR3byBzcGVjaWZpZWQgdmFsdWVzLlxuXG4gQHBhcmFtIGFtb3VudDogVGhlIGxldmVsIG9mIGludGVycG9sYXRpb24gYmV0d2VlbiB0aGUgdHdvIHZhbHVlcy4gSWYgPGNvZGU+MDwvY29kZT4sIDxjb2RlPmJlZ2luPC9jb2RlPiB2YWx1ZSBpcyByZXR1cm5lZDsgaWYgPGNvZGU+MTwvY29kZT4sIDxjb2RlPmVuZDwvY29kZT4gdmFsdWUgaXMgcmV0dXJuZWQuXG4gQHBhcmFtIGJlZ2luOiBUaGUgc3RhcnRpbmcgdmFsdWUuXG4gQHBhcmFtIGVuZDogVGhlIGVuZGluZyB2YWx1ZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGludGVycG9sYXRlKDAuNSwgMCwgMTApKTsgLy8gVHJhY2VzIDVcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZShhbW91bnQsIGJlZ2luLCBlbmQpIHtcbiAgcmV0dXJuIGJlZ2luICsgKGVuZCAtIGJlZ2luKSAqIGFtb3VudDtcbn1cblxuLyoqXG4gRGV0ZXJtaW5lcyBhIHBlcmNlbnRhZ2Ugb2YgYSB2YWx1ZSBpbiBhIGdpdmVuIHJhbmdlLlxuXG4gQHBhcmFtIHZhbHVlOiBUaGUgdmFsdWUgdG8gYmUgY29udmVydGVkLlxuIEBwYXJhbSBtaW5pbXVtOiBUaGUgbG93ZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBwYXJhbSBtYXhpbXVtOiBUaGUgdXBwZXIgdmFsdWUgb2YgdGhlIHJhbmdlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2cobm9ybWFsaXplKDgsIDQsIDIwKS5kZWNpbWFsUGVyY2VudGFnZSk7IC8vIFRyYWNlcyAwLjI1XG4gPC9jb2RlPlxuICovXG4vLyBleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplKHZhbHVlLCBtaW5pbXVtLCBtYXhpbXVtKSB7XG4vLyAgIHJldHVybiBuZXcgUGVyY2VudCgodmFsdWUgLSBtaW5pbXVtKSAvIChtYXhpbXVtIC0gbWluaW11bSkpO1xuLy8gfVxuXG4vKipcbiBNYXBzIGEgdmFsdWUgZnJvbSBvbmUgY29vcmRpbmF0ZSBzcGFjZSB0byBhbm90aGVyLlxuXG4gQHBhcmFtIHZhbHVlOiBWYWx1ZSBmcm9tIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlIHRvIG1hcCB0byB0aGUgb3V0cHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjE6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBpbnB1dCBjb29yZGluYXRlIHNwYWNlLlxuIEBwYXJhbSBtYXgxOiBFbmRpbmcgdmFsdWUgb2YgdGhlIGlucHV0IGNvb3JkaW5hdGUgc3BhY2UuXG4gQHBhcmFtIG1pbjI6IFN0YXJ0aW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAcGFyYW0gbWF4MjogRW5kaW5nIHZhbHVlIG9mIHRoZSBvdXRwdXQgY29vcmRpbmF0ZSBzcGFjZS5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKG1hcCgwLjc1LCAwLCAxLCAwLCAxMDApKTsgLy8gVHJhY2VzIDc1XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFwKHZhbHVlLCBtaW4xLCBtYXgxLCBtaW4yLCBtYXgyKSB7XG4gIHJldHVybiBsZXJwKG5vcm0odmFsdWUsIG1pbjEsIG1heDEpLCBtaW4yLCBtYXgyKTtcbn1cbi8vIGV4cG9ydCBmdW5jdGlvbiBtYXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbi8vIFx0cmV0dXJuIG1pbjIgKyAobWF4MiAtIG1pbjIpICogKCh2YWx1ZSAtIG1pbjEpIC8gKG1heDEgLSBtaW4xKSk7XG4vLyB9XG5cbi8qKlxuIExvdyBwYXNzIGZpbHRlciBhbG9ncml0aG0gZm9yIGVhc2luZyBhIHZhbHVlIHRvd2FyZCBhIGRlc3RpbmF0aW9uIHZhbHVlLiBXb3JrcyBiZXN0IGZvciB0d2VlbmluZyB2YWx1ZXMgd2hlbiBubyBkZWZpbml0ZSB0aW1lIGR1cmF0aW9uIGV4aXN0cyBhbmQgd2hlbiB0aGUgZGVzdGluYXRpb24gdmFsdWUgY2hhbmdlcy5cblxuIElmIDxjb2RlPigwLjUgPCBuIDwgMSk8L2NvZGU+LCB0aGVuIHRoZSByZXN1bHRpbmcgdmFsdWVzIHdpbGwgb3ZlcnNob290IChwaW5nLXBvbmcpIHVudGlsIHRoZXkgcmVhY2ggdGhlIGRlc3RpbmF0aW9uIHZhbHVlLiBXaGVuIDxjb2RlPm48L2NvZGU+IGlzIGdyZWF0ZXIgdGhhbiAxLCBhcyBpdHMgdmFsdWUgaW5jcmVhc2VzLCB0aGUgdGltZSBpdCB0YWtlcyB0byByZWFjaCB0aGUgZGVzdGluYXRpb24gYWxzbyBpbmNyZWFzZXMuIEEgcGxlYXNpbmcgdmFsdWUgZm9yIDxjb2RlPm48L2NvZGU+IGlzIDUuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBjdXJyZW50IHZhbHVlLlxuIEBwYXJhbSBkZXN0OiBUaGUgZGVzdGluYXRpb24gdmFsdWUuXG4gQHBhcmFtIG46IFRoZSBzbG93ZG93biBmYWN0b3IuXG4gQHJldHVybiBUaGUgd2VpZ2h0ZWQgYXZlcmFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdlaWdodGVkQXZlcmFnZSh2YWx1ZSwgZGVzdCwgbikge1xuICByZXR1cm4gdmFsdWUgKyAoZGVzdCAtIHZhbHVlKSAvIG47XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBrRGVsaW06IFRoZSBjaGFyYWN0ZXIgdXNlZCB0byBzZXBlcmF0ZSB0aG91c2FuZHM7IGRlZmF1bHRzIHRvIDxjb2RlPlwiXCI8L2NvZGU+LlxuIEBwYXJhbSBtaW5MZW5ndGg6IFRoZSBtaW5pbXVtIGxlbmd0aCBvZiB0aGUgbnVtYmVyOyBkZWZhdWx0cyB0byA8Y29kZT4wIDwvY29kZT4uXG4gQHBhcmFtIGZpbGxDaGFyOiBUaGUgbGVhZGluZyBjaGFyYWN0ZXIgdXNlZCB0byBtYWtlIHRoZSBudW1iZXIgdGhlIG1pbmltdW0gbGVuZ3RoOyBkZWZhdWx0cyB0byA8Y29kZT5cIjBcIjwvY29kZT4uXG4gQHJldHVybiBSZXR1cm5zIHRoZSBmb3JtYXR0ZWQgbnVtYmVyIGFzIGEgU3RyaW5nLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coZm9ybWF0KDEyMzQ1NjcsIFwiLFwiLCA4KSk7IC8vIFRyYWNlcyAwMSwyMzQsNTY3XG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBrRGVsaW0sIG1pbkxlbmd0aCwgZmlsbENoYXIpIHtcbiAgaWYgKCFrRGVsaW0pIHtcbiAgICBrRGVsaW0gPSBcIixcIjtcbiAgfVxuICBpZiAoaXNOYU4obWluTGVuZ3RoKSkge1xuICAgIG1pbkxlbmd0aCA9IDA7XG4gIH1cbiAgaWYgKCFmaWxsQ2hhcikge1xuICAgIGZpbGxDaGFyID0gXCIwXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgbnVtID0gTWF0aC5mbG9vcih2YWx1ZSkudG9TdHJpbmcoKTtcbiAgY29uc3QgbGVuID0gbnVtLmxlbmd0aDtcblxuICBpZiAobWluTGVuZ3RoICE9PSAwICYmIG1pbkxlbmd0aCA+IGxlbikge1xuICAgIG1pbkxlbmd0aCAtPSBsZW47XG5cbiAgICBjb25zdCBhZGRDaGFyID0gZmlsbENoYXIgfHwgXCIwXCI7XG5cbiAgICB3aGlsZSAobWluTGVuZ3RoLS0pIHtcbiAgICAgIG51bSA9IGFkZENoYXIgKyBudW07XG4gICAgfVxuICB9XG5cbiAgaWYgKGtEZWxpbSAhPT0gbnVsbCAmJiBudW0ubGVuZ3RoID4gMykge1xuICAgIGNvbnN0IHRvdGFsRGVsaW0gPSBNYXRoLmZsb29yKG51bS5sZW5ndGggLyAzKTtcbiAgICBjb25zdCB0b3RhbFJlbWFpbiA9IG51bS5sZW5ndGggJSAzO1xuICAgIGNvbnN0IG51bVNwbGl0ID0gbnVtLnNwbGl0KFwiXCIpO1xuICAgIGxldCBpID0gLTE7XG5cbiAgICB3aGlsZSAoKytpIDwgdG90YWxEZWxpbSkge1xuICAgICAgbnVtU3BsaXQuc3BsaWNlKHRvdGFsUmVtYWluICsgNCAqIGksIDAsIGtEZWxpbSk7XG4gICAgfVxuXG4gICAgaWYgKHRvdGFsUmVtYWluID09PSAwKSB7XG4gICAgICBudW1TcGxpdC5zaGlmdCgpO1xuICAgIH1cblxuICAgIG51bSA9IG51bVNwbGl0LmpvaW4oXCJcIik7XG4gIH1cblxuICBpZiAocmVtYWluZGVyICE9PSAwKSB7XG4gICAgbnVtICs9IHJlbWFpbmRlci50b1N0cmluZygpLnN1YnN0cigxKTtcbiAgfVxuXG4gIHJldHVybiBudW07XG59XG5cbi8qKlxuIEZvcm1hdHMgYSBudW1iZXIgYXMgYSBjdXJyZW5jeSBzdHJpbmcuXG5cbiBAcGFyYW0gdmFsdWU6IFRoZSBudW1iZXIgeW91IHdpc2ggdG8gZm9ybWF0LlxuIEBwYXJhbSBmb3JjZURlY2ltYWxzOiBJZiB0aGUgbnVtYmVyIHNob3VsZCBhbHdheXMgaGF2ZSB0d28gZGVjaW1hbCBwbGFjZXMgPGNvZGU+dHJ1ZTwvY29kZT4sIG9yIG9ubHkgc2hvdyBkZWNpbWFscyBpcyB0aGVyZSBpcyBhIGRlY2ltYWxzIHZhbHVlIDxjb2RlPmZhbHNlPC9jb2RlPjsgZGVmYXVsdHMgdG8gPGNvZGU+dHJ1ZTwvY29kZT4uXG4gQHBhcmFtIGtEZWxpbTogVGhlIGNoYXJhY3RlciB1c2VkIHRvIHNlcGVyYXRlIHRob3VzYW5kczsgZGVmYXVsdHMgdG8gPGNvZGU+XCIsXCI8L2NvZGU+LlxuIEByZXR1cm4gUmV0dXJucyB0aGUgZm9ybWF0dGVkIG51bWJlciBhcyBhIFN0cmluZy5cbiBAZXhhbXBsZVxuIDxjb2RlPlxuIGNvbnNvbGUubG9nKGZvcm1hdEN1cnJlbmN5KDEyMzQuNSkpOyAvLyBUcmFjZXMgXCIxLDIzNC41MFwiXG4gPC9jb2RlPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0Q3VycmVuY3kodmFsdWUsIGZvcmNlRGVjaW1hbHMsIGtEZWxpbSkge1xuICBpZiAoZm9yY2VEZWNpbWFscyA9PT0gbnVsbCkge1xuICAgIGZvcmNlRGVjaW1hbHMgPSB0cnVlO1xuICB9XG4gIGlmICgha0RlbGltKSB7XG4gICAga0RlbGltID0gXCIsXCI7XG4gIH1cbiAgY29uc3QgcmVtYWluZGVyID0gdmFsdWUgJSAxO1xuICBsZXQgY3VycmVuY3kgPSBmb3JtYXQoTWF0aC5mbG9vcih2YWx1ZSksIGtEZWxpbSk7XG5cbiAgaWYgKHJlbWFpbmRlciAhPT0gMCB8fCBmb3JjZURlY2ltYWxzKSB7XG4gICAgY3VycmVuY3kgKz0gcmVtYWluZGVyLnRvRml4ZWQoMikuc3Vic3RyKDEpO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbmN5O1xufVxuXG4vKipcbiBGaW5kcyB0aGUgZW5nbGlzaCBvcmRpbmFsIHN1ZmZpeCBmb3IgdGhlIG51bWJlciBnaXZlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGZpbmQgdGhlIG9yZGluYWwgc3VmZml4IG9mLlxuIEByZXR1cm4gUmV0dXJucyB0aGUgc3VmZml4IGZvciB0aGUgbnVtYmVyLCAyIGNoYXJhY3RlcnMuXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZygzMiArIGdldE9yZGluYWxTdWZmaXgoMzIpKTsgLy8gVHJhY2VzIDMybmRcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmRpbmFsU3VmZml4KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+PSAxMCAmJiB2YWx1ZSA8PSAyMCkge1xuICAgIHJldHVybiBcInRoXCI7XG4gIH1cblxuICBpZiAodmFsdWUgPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHN3aXRjaCAodmFsdWUgJSAxMCkge1xuICAgIGNhc2UgMzpcbiAgICAgIHJldHVybiBcInJkXCI7XG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIFwibmRcIjtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gXCJzdFwiO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gXCJ0aFwiO1xuICB9XG59XG5cbi8qKlxuIEFkZHMgYSBsZWFkaW5nIHplcm8gZm9yIG51bWJlcnMgbGVzcyB0aGFuIHRlbi5cblxuIEBwYXJhbSB2YWx1ZTogTnVtYmVyIHRvIGFkZCBsZWFkaW5nIHplcm8uXG4gQHJldHVybiBOdW1iZXIgYXMgYSBTdHJpbmc7IGlmIHRoZSBudW1iZXIgd2FzIGxlc3MgdGhhbiB0ZW4gdGhlIG51bWJlciB3aWxsIGhhdmUgYSBsZWFkaW5nIHplcm8uXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiBjb25zb2xlLmxvZyhhZGRMZWFkaW5nWmVybyg3KSk7IC8vIFRyYWNlcyAwN1xuIGNvbnNvbGUubG9nKGFkZExlYWRpbmdaZXJvKDExKSk7IC8vIFRyYWNlcyAxMVxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA8IDEwID8gXCIwXCIgKyB2YWx1ZSA6IHZhbHVlLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuIFNwZWxscyB0aGUgcHJvdmlkZWQgbnVtYmVyLlxuXG4gQHBhcmFtIHZhbHVlOiBOdW1iZXIgdG8gc3BlbGwuIE5lZWRzIHRvIGJlIGxlc3MgdGhhbiA5OTk5OTk5OTkuXG4gQHJldHVybiBUaGUgbnVtYmVyIHNwZWxsZWQgb3V0IGFzIGEgU3RyaW5nLlxuIEB0aHJvd3MgPGNvZGU+RXJyb3I8L2NvZGU+IGlmIDxjb2RlPnZhbHVlPC9jb2RlPiBpcyBncmVhdGVyIHRoYW4gOTk5OTk5OTk5LlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gY29uc29sZS5sb2coc3BlbGwoMCkpOyAvLyBUcmFjZXMgWmVyb1xuIGNvbnNvbGUubG9nKHNwZWxsKDIzKSk7IC8vIFRyYWNlcyBUd2VudHktVGhyZWVcbiBjb25zb2xlLmxvZyhzcGVsbCgyMDA1Njc4KSk7IC8vIFRyYWNlcyBUd28gTWlsbGlvbiwgRml2ZSBUaG91c2FuZCwgU2l4IEh1bmRyZWQgU2V2ZW50eS1FaWdodFxuIDwvY29kZT5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNwZWxsKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA+IDk5OTk5OTk5OSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlZhbHVlIHRvbyBsYXJnZSBmb3IgdGhpcyBtZXRob2QuXCIpO1xuICB9XG5cbiAgY29uc3Qgb25lc1NwZWxsaW5ncyA9IFtcbiAgICBcIlwiLFxuICAgIFwiT25lXCIsXG4gICAgXCJUd29cIixcbiAgICBcIlRocmVlXCIsXG4gICAgXCJGb3VyXCIsXG4gICAgXCJGaXZlXCIsXG4gICAgXCJTaXhcIixcbiAgICBcIlNldmVuXCIsXG4gICAgXCJFaWdodFwiLFxuICAgIFwiTmluZVwiLFxuICAgIFwiVGVuXCIsXG4gICAgXCJFbGV2ZW5cIixcbiAgICBcIlR3ZWx2ZVwiLFxuICAgIFwiVGhpcnRlZW5cIixcbiAgICBcIkZvdXJ0ZWVuXCIsXG4gICAgXCJGaWZ0ZWVuXCIsXG4gICAgXCJTaXh0ZWVuXCIsXG4gICAgXCJTZXZlbnRlZW5cIixcbiAgICBcIkVpZ2h0ZWVuXCIsXG4gICAgXCJOaW5ldGVlblwiLFxuICBdO1xuICBjb25zdCB0ZW5zU3BlbGxpbmdzID0gW1xuICAgIFwiXCIsXG4gICAgXCJcIixcbiAgICBcIlR3ZW50eVwiLFxuICAgIFwiVGhpcnR5XCIsXG4gICAgXCJGb3J0eVwiLFxuICAgIFwiRmlmdHlcIixcbiAgICBcIlNpeHR5XCIsXG4gICAgXCJTZXZlbnR5XCIsXG4gICAgXCJFaWdodHlcIixcbiAgICBcIk5pbmV0eVwiLFxuICBdO1xuICBsZXQgc3BlbGxpbmcgPSBcIlwiO1xuXG4gIGNvbnN0IG1pbGxpb25zID0gdmFsdWUgLyAxMDAwMDAwO1xuICB2YWx1ZSAlPSAxMDAwMDAwO1xuXG4gIGNvbnN0IHRob3VzYW5kcyA9IHZhbHVlIC8gMTAwMDtcbiAgdmFsdWUgJT0gMTAwMDtcblxuICBjb25zdCBodW5kcmVkcyA9IHZhbHVlIC8gMTAwO1xuICB2YWx1ZSAlPSAxMDA7XG5cbiAgY29uc3QgdGVucyA9IHZhbHVlIC8gMTA7XG4gIHZhbHVlICU9IDEwO1xuXG4gIGNvbnN0IG9uZXMgPSB2YWx1ZSAlIDEwO1xuXG4gIGlmIChtaWxsaW9ucyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwobWlsbGlvbnMpICsgXCIgTWlsbGlvblwiO1xuICB9XG5cbiAgaWYgKHRob3VzYW5kcyAhPT0gMCkge1xuICAgIHNwZWxsaW5nICs9IHNwZWxsaW5nLmxlbmd0aCA9PT0gMCA/IFwiXCIgOiBcIiwgXCI7XG4gICAgc3BlbGxpbmcgKz0gc3BlbGwodGhvdXNhbmRzKSArIFwiIFRob3VzYW5kXCI7XG4gIH1cblxuICBpZiAoaHVuZHJlZHMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIsIFwiO1xuICAgIHNwZWxsaW5nICs9IHNwZWxsKGh1bmRyZWRzKSArIFwiIEh1bmRyZWRcIjtcbiAgfVxuXG4gIGlmICh0ZW5zICE9PSAwIHx8IG9uZXMgIT09IDApIHtcbiAgICBzcGVsbGluZyArPSBzcGVsbGluZy5sZW5ndGggPT09IDAgPyBcIlwiIDogXCIgXCI7XG5cbiAgICBpZiAodGVucyA8IDIpIHtcbiAgICAgIHNwZWxsaW5nICs9IG9uZXNTcGVsbGluZ3NbdGVucyAqIDEwICsgb25lc107XG4gICAgfSBlbHNlIHtcbiAgICAgIHNwZWxsaW5nICs9IHRlbnNTcGVsbGluZ3NbdGVuc107XG5cbiAgICAgIGlmIChvbmVzICE9PSAwKSB7XG4gICAgICAgIHNwZWxsaW5nICs9IFwiLVwiICsgb25lc1NwZWxsaW5nc1tvbmVzXTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc3BlbGxpbmcubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIFwiWmVyb1wiO1xuICB9XG5cbiAgcmV0dXJuIHNwZWxsaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50VG9IZXgoYykge1xuICBjb25zdCBoZXggPSBjLnRvU3RyaW5nKDE2KTtcbiAgcmV0dXJuIGhleC5sZW5ndGggPT09IDEgPyBcIjBcIiArIGhleCA6IGhleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJnYlRvSGV4KHJnYikge1xuICByZXR1cm4gY29tcG9uZW50VG9IZXgocmdiLnIpICsgY29tcG9uZW50VG9IZXgocmdiLmcpICsgY29tcG9uZW50VG9IZXgocmdiLmIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGV4VG9SZ2IoaGV4KSB7XG4gIGNvbnN0IHJlc3VsdCA9IC9eIz8oW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkkL2kuZXhlYyhoZXgpO1xuICByZXR1cm4gcmVzdWx0XG4gICAgPyB7XG4gICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICBnOiBwYXJzZUludChyZXN1bHRbMl0sIDE2KSxcbiAgICAgICAgYjogcGFyc2VJbnQocmVzdWx0WzNdLCAxNiksXG4gICAgICAgIHRvU3RyaW5nOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIFwicjpcIiArIHRoaXMuciArIFwiLGc6XCIgKyB0aGlzLmcgKyBcIixiOlwiICsgdGhpcy5iO1xuICAgICAgICB9LFxuICAgICAgfVxuICAgIDogbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcbiAgcmV0dXJuIChkZWdyZWVzICogTWF0aC5QSSkgLyAxODA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYWRUb0RlZyhyYWQpIHtcbiAgcmV0dXJuIChyYWQgKiAxODApIC8gTWF0aC5QSTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aHN0ZXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gIGNvbnN0IHggPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbikpKTtcbiAgcmV0dXJuIHggKiB4ICogKDMgLSAyICogeCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGEsIGIsIHQpIHtcbiAgcmV0dXJuIGEgKyB0ICogKGIgLSBhKTtcbiAgLy8gcmV0dXJuIGEoMS10KSArIGJ0XG4gIC8vcmV0dXJuIG1pbiArIChtYXggLSBtaW4pICogdmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtaXgoYSwgYiwgdCkge1xuICByZXR1cm4gbGVycChhLCBiLCB0KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG5vcm0odmFsdWUsIG1pbiwgbWF4KSB7XG4gIHJldHVybiAodmFsdWUgLSBtaW4pIC8gKG1heCAtIG1pbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbW9kKG4sIG0pIHtcbiAgcmV0dXJuICgobiAlIG0pICsgbSkgJSBtO1xufVxuXG4vL2EgbW9kdWxvIGZ1bmN0aW9uIHRoYXQgaGFuZGxlcyBuZWdhdGl2ZXMgbnVtYmVycyAnY29ycmVjdGx5J1xuZXhwb3J0IGZ1bmN0aW9uIG1vZFdyYXAobiwgbSkge1xuICByZXR1cm4gKChuICUgbSkgKyBtKSAlIG07XG59XG5cbi8vcmFuZG9tIHdpdGggc2VlZCwgcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiByYW5kb20xRChzZWVkKSB7XG4gIHJldHVybiBtb2RXcmFwKE1hdGguc2luKHNlZWQpICogNDM3NTguNTQ1MywgMSk7XG59XG5cbi8vcmV0dXJucyAwLTEgcmFuZ2VcbmV4cG9ydCBmdW5jdGlvbiBub2lzZTFEKHgpIHtcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IoeCk7XG4gIGNvbnN0IGYgPSBtb2RXcmFwKHgsIDEpO1xuICBjb25zdCB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XG4gIHJldHVybiBsZXJwKHUsIHJhbmRvbTFEKGkpLCByYW5kb20xRChpICsgMS4wKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByYW5kb21SYW5nZShtaW4sIG1heCkge1xuICByZXR1cm4gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBNYXRoLmZsb29yKG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFwQ2xhbXAodmFsdWUsIG1pbjEsIG1heDEsIG1pbjIsIG1heDIpIHtcbiAgcmV0dXJuIGNsYW1wKGxlcnAobm9ybSh2YWx1ZSwgbWluMSwgbWF4MSksIG1pbjIsIG1heDIpLCBtaW4yLCBtYXgyKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNpbmVXYXZlKFxuICBhbmdsZSA9IDAsXG4gIGZyZXF1ZW5jeSA9IE1hdGguUEksXG4gIHRpbWUgPSAwLFxuICBzcGVlZCA9IDEsXG4gIGFtcGxpdHVkZSA9IDFcbikge1xuICByZXR1cm4gTWF0aC5zaW4oYW5nbGUgKiBmcmVxdWVuY3kgKyB0aW1lICogc3BlZWQpICogYW1wbGl0dWRlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXBUaW1lKHRpbWUsIHN0YXJ0VGltZSwgZHVyYXRpb24pIHtcbiAgcmV0dXJuIGNsYW1wKHRpbWUgLSBzdGFydFRpbWUsIDAuMCwgZHVyYXRpb24pIC8gZHVyYXRpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcmV0dXJuIFRoZSBlYXNlIHZhbHVlXG4gQGV4YW1wbGVcbiA8Y29kZT5cbiB2YWx1ZSArPSBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uKTtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlYXNlT3V0KHZhbHVlLCB0YXJnZXQsIGZyaWN0aW9uID0gMC4xKSB7XG4gIHJldHVybiAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbi8qKlxuIEVhc2UgYSB2YWx1ZSB3aXRoIHNvbWUgZWxhc3RpY2l0eVxuIEBwYXJhbSB2YWx1ZTogVGhlIGN1cnJlbnQgdmFsdWVcbiBAcGFyYW0gdGFyZ2V0OiBUaGUgdGFyZ2V0IHZhbHVlXG4gQHBhcmFtIGZyaWN0aW9uOiBUaGUgZnJpY3Rpb24gZnJvbSAwIHRvIDFcbiBAcGFyYW0gc3BlZWQ6IFRoZSBjdXJyZW50IHNwZWVkXG4gQHBhcmFtIGVsYXN0aWNpdHk6IFRoZSBlbGFzdGljaXR5IGZyb20gMCB0byAxXG4gQHJldHVybiBUaGUgbmV3IHNwZWVkIHZhbHVlLlxuIEBleGFtcGxlXG4gPGNvZGU+XG4gc3BlZWQgPSBzcHJpbmcodmFsdWUsIHRhcmdldCwgZnJpY3Rpb24sIHNwZWVkLCBlbGFzdGljaXR5KTtcbiB2YWx1ZSArPSBzcGVlZDtcbiA8L2NvZGU+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzcHJpbmcoXG4gIHZhbHVlLFxuICB0YXJnZXQgPSAwLFxuICBmcmljdGlvbiA9IDAuMSxcbiAgc3BlZWQgPSAwLFxuICBlbGFzdGljaXR5ID0gMFxuKSB7XG4gIHJldHVybiBzcGVlZCAqIGVsYXN0aWNpdHkgKyAodGFyZ2V0IC0gdmFsdWUpICogZnJpY3Rpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyhhbmdsZSkge1xuICBjb25zdCBjaXJjbGUgPSBNYXRoLlBJICogMjtcbiAgd2hpbGUgKGFuZ2xlID4gY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlIC09IGNpcmNsZTtcbiAgfVxuICB3aGlsZSAoYW5nbGUgPCAtY2lyY2xlIC8gMikge1xuICAgIGFuZ2xlICs9IGNpcmNsZTtcbiAgfVxuICByZXR1cm4gYW5nbGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoZXhDb2xvclN0cmluZ1RvTnVtYmVyKHZhbHVlKSB7XG4gIHJldHVybiBOdW1iZXIodmFsdWUucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUZpbGVuYW1lLCBjcmVhdGVGaWxlbmFtZU9ubHkgfSBmcm9tICcuL21vZGVsL3V0aWxzJztcblxuY29uc3QgeyBjcmVhdGVGRm1wZWcsIGZldGNoRmlsZSB9ID0gRkZtcGVnO1xuXG5jb25zdCBmZm1wZWcgPSBjcmVhdGVGRm1wZWcoe1xuICBjb3JlUGF0aDogY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKCdmZm1wZWctY29yZS5qcycpLFxuICBsb2c6IHRydWUsXG4gIG1haW5OYW1lOiAnbWFpbicsXG59KTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlKSA9PiB7XG4gIGlmIChtZXNzYWdlLnRhcmdldCA9PT0gJ29mZnNjcmVlbicpIHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0YXJ0T2Zmc2NyZWVuUmVjb3JkaW5nJzpcbiAgICAgICAgc3RhcnRSZWNvcmRpbmcobWVzc2FnZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2Nyb2xsQ2FwdHVyZVN0b3BPZmZzY3JlZW5SZWNvcmRpbmcnOlxuICAgICAgICBzdG9wUmVjb3JkaW5nKG1lc3NhZ2UpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5yZWNvZ25pemVkIG1lc3NhZ2U6JywgbWVzc2FnZS50eXBlKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5sZXQgcmVjb3JkZXI7XG5sZXQgZGF0YSA9IFtdO1xubGV0IGJsb2I7XG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0UmVjb3JkaW5nKG1lc3NhZ2UpIHtcbiAgaWYgKHJlY29yZGVyPy5zdGF0ZSA9PT0gJ3JlY29yZGluZycpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxlZCBzdGFydFJlY29yZGluZyB3aGlsZSByZWNvcmRpbmcgaXMgaW4gcHJvZ3Jlc3MuJyk7XG4gIH1cbiAgY29uc29sZS5sb2coJ3N0YXJ0UmVjb3JkaW5nJywgSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICBjb25zdCBzaXplID0geyB4OiBtZXNzYWdlLnRhYldpZHRoLCB5OiBtZXNzYWdlLnRhYkhlaWdodCB9O1xuICBjb25zdCBwaXhlbFJhdGlvID0gbWVzc2FnZS5waXhlbFJhdGlvO1xuICBjb25zdCBjb25zdHJhaW50cyA9IHt9O1xuICBpZiAobWVzc2FnZS5leHBvcnRWaWRlbykge1xuICAgIGNvbnN0cmFpbnRzLnZpZGVvID0ge1xuICAgICAgbWFuZGF0b3J5OiB7XG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlOiAndGFiJyxcbiAgICAgICAgY2hyb21lTWVkaWFTb3VyY2VJZDogbWVzc2FnZS5zdHJlYW1JZCxcbiAgICAgICAgbWluV2lkdGg6IHNpemUueCxcbiAgICAgICAgbWF4V2lkdGg6IHNpemUueCAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1pbkhlaWdodDogc2l6ZS55LFxuICAgICAgICBtYXhIZWlnaHQ6IHNpemUueSAqIHBpeGVsUmF0aW8sXG4gICAgICAgIG1pbkZyYW1lUmF0ZTogMzAsXG4gICAgICAgIG1heEZyYW1lUmF0ZTogNjAsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICBjb25zdHJhaW50cy5hdWRpbyA9IHtcbiAgICAgIG1hbmRhdG9yeToge1xuICAgICAgICBjaHJvbWVNZWRpYVNvdXJjZTogJ3RhYicsXG4gICAgICAgIGNocm9tZU1lZGlhU291cmNlSWQ6IG1lc3NhZ2Uuc3RyZWFtSWQsXG4gICAgICB9LFxuICAgIH07XG4gIH1cbiAgY29uc29sZS5sb2coJ25hdmlnYXRvci5tZWRpYURldmljZXMuZ2V0VXNlck1lZGlhJywgSlNPTi5zdHJpbmdpZnkoY29uc3RyYWludHMpKTtcbiAgY29uc3QgbWVkaWEgPSBhd2FpdCBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYShjb25zdHJhaW50cyk7XG4gIGNvbnNvbGUubG9nKCdtZWRpYT0nLCBtZWRpYSk7XG5cbiAgaWYgKG1lc3NhZ2UuZXhwb3J0QXVkaW8pIHtcbiAgICBjb25zdCBvdXRwdXQgPSBuZXcgQXVkaW9Db250ZXh0KCk7XG4gICAgY29uc3Qgc291cmNlID0gb3V0cHV0LmNyZWF0ZU1lZGlhU3RyZWFtU291cmNlKG1lZGlhKTtcbiAgICBzb3VyY2UuY29ubmVjdChvdXRwdXQuZGVzdGluYXRpb24pO1xuICB9XG5cbiAgbGV0IG1pbWVUeXBlO1xuICBpZiAobWVzc2FnZS5leHBvcnRWaWRlbykge1xuICAgIG1pbWVUeXBlID0gJ3ZpZGVvL3dlYm07Y29kZWNzPWgyNjQnO1xuICAgIGlmIChtZXNzYWdlLmV4cG9ydEF1ZGlvKSB7XG4gICAgICBtaW1lVHlwZSArPSAnLG9wdXMnO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtaW1lVHlwZSA9ICdhdWRpby93ZWJtO2NvZGVjcz1vcHVzJztcbiAgfVxuXG4gIGxldCB2aWRlb0JpdHNQZXJTZWNvbmQgPSBtZXNzYWdlLnZpZGVvQml0c1BlclNlY29uZCB8fCAxNjtcbiAgbGV0IGF1ZGlvQml0c1BlclNlY29uZCA9IG1lc3NhZ2UuYXVkaW9CaXRzUGVyU2Vjb25kIHx8IDEyODtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIG1pbWVUeXBlLFxuICAgIGF1ZGlvQml0c1BlclNlY29uZDogYXVkaW9CaXRzUGVyU2Vjb25kICogMTAwMCxcbiAgICB2aWRlb0JpdHNQZXJTZWNvbmQ6IHZpZGVvQml0c1BlclNlY29uZCAqIDEwMDAwMDAsXG4gIH07XG5cbiAgY29uc29sZS5sb2coJ01lZGlhUmVjb3JkZXInLCBKU09OLnN0cmluZ2lmeShvcHRpb25zKSk7XG5cbiAgcmVjb3JkZXIgPSBuZXcgTWVkaWFSZWNvcmRlcihtZWRpYSwgb3B0aW9ucyk7XG4gIHJlY29yZGVyLm9uZGF0YWF2YWlsYWJsZSA9IChldmVudCkgPT4gZGF0YS5wdXNoKGV2ZW50LmRhdGEpO1xuICByZWNvcmRlci5vbnN0b3AgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ2RhdGE9JywgZGF0YSk7XG4gICAgY29uc3QgYmxvYkZvcm1hdCA9IG1pbWVUeXBlLnNwbGl0KCc7JylbMF07XG4gICAgY29uc29sZS5sb2coJ2Jsb2JGb3JtYXQ9JywgYmxvYkZvcm1hdCk7XG4gICAgYmxvYiA9IG5ldyBCbG9iKGRhdGEsIHsgdHlwZTogYmxvYkZvcm1hdCB9KTtcbiAgICBjb25zb2xlLmxvZygnYmxvYj0nLCBibG9iKTtcblxuICAgIGNvbnZlcnRTdHJlYW1zKGJsb2IsIG1lc3NhZ2UpO1xuXG4gICAgZGF0YSA9IFtdO1xuICB9O1xuICByZWNvcmRlci5zdGFydCgpO1xuXG4gIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJ3JlY29yZGluZyc7XG59XG5cbmZ1bmN0aW9uIHN0b3BSZWNvcmRpbmcobWVzc2FnZSkge1xuICByZWNvcmRlci5zdG9wKCk7XG4gIHJlY29yZGVyLnN0cmVhbS5nZXRUcmFja3MoKS5mb3JFYWNoKCh0KSA9PiB0LnN0b3AoKSk7XG4gIHJlY29yZGVyID0gdW5kZWZpbmVkO1xuICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3RyZWFtcyh2aWRlb0Jsb2IsIG1lc3NhZ2UpIHtcbiAgdmFyIGZpbGVSZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICBmaWxlUmVhZGVyLm9ubG9hZCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAvLyB2YXIgYmxvYiA9IG5ldyBGaWxlKFtyZXN1bHQuZGF0YV0sICd0ZXN0Lm1wNCcsIHtcbiAgICAvLyAgIHR5cGU6ICd2aWRlby9tcDQnLFxuICAgIC8vIH0pO1xuXG4gICAgbGV0IGlucHV0RmlsZU5hbWUgPSAnc2FtcGxlX3ZpZGVvLndlYm0nO1xuICAgIGxldCBvdXRwdXRGaWxlTmFtZSA9ICdzYW1wbGVfdmlkZW8ubXA0JztcbiAgICBsZXQgZG93bmxvYWRFeHRlbnNpb24gPSAnbXA0JztcbiAgICBsZXQgY29tbWFuZFN0cjtcblxuICAgIGlmIChtZXNzYWdlLmV4cG9ydFZpZGVvKSB7XG4gICAgICBpZiAobWVzc2FnZS5leHBvcnRBdWRpbykge1xuICAgICAgICBjb21tYW5kU3RyID0gYGZmbXBlZyAtaSAke2lucHV0RmlsZU5hbWV9IC1jOnYgY29weSAtYzphIGFhYyAke291dHB1dEZpbGVOYW1lfWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21tYW5kU3RyID0gYGZmbXBlZyAtaSAke2lucHV0RmlsZU5hbWV9IC1jOnYgY29weSAke291dHB1dEZpbGVOYW1lfWA7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvd25sb2FkRXh0ZW5zaW9uID0gJ200YSc7XG4gICAgICBvdXRwdXRGaWxlTmFtZSA9IGBzYW1wbGVfdmlkZW8ubTRhYDtcbiAgICAgIGNvbW1hbmRTdHIgPSBgZmZtcGVnIC1pICR7aW5wdXRGaWxlTmFtZX0gLWM6YSBhYWMgJHtvdXRwdXRGaWxlTmFtZX1gO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbGVOYW1lID0gY3JlYXRlRmlsZW5hbWVPbmx5KCk7XG4gICAgY29uc3QgZG93bmxvYWRGaWxlTmFtZSA9IGAke2ZpbGVOYW1lfS4ke2Rvd25sb2FkRXh0ZW5zaW9ufWA7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBydW5GRm1wZWcoaW5wdXRGaWxlTmFtZSwgb3V0cHV0RmlsZU5hbWUsIGNvbW1hbmRTdHIsIG5ldyBVaW50OEFycmF5KHRoaXMucmVzdWx0KSk7XG4gICAgdmFyIGJsb2IgPSBuZXcgRmlsZShbcmVzdWx0XSwgZG93bmxvYWRGaWxlTmFtZSwge1xuICAgICAgdHlwZTogYHZpZGVvLyR7ZG93bmxvYWRFeHRlbnNpb259YCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHZpZGVvVVJMTWVzc2FnZSA9IE9iamVjdC5hc3NpZ24oe30sIG1lc3NhZ2UpO1xuICAgIE9iamVjdC5hc3NpZ24odmlkZW9VUkxNZXNzYWdlLCB7XG4gICAgICB0eXBlOiAnc2Nyb2xsQ2FwdHVyZVZpZGVvVVJMJyxcbiAgICAgIHZpZGVvVVJMOiBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpLFxuICAgICAgZmlsZU5hbWU6IGRvd25sb2FkRmlsZU5hbWUsXG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJ3ZpZGVvVVJMTWVzc2FnZS52aWRlb1VSTCcsIHZpZGVvVVJMTWVzc2FnZS52aWRlb1VSTCk7XG4gICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2UodmlkZW9VUkxNZXNzYWdlKTtcbiAgfTtcbiAgZmlsZVJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcih2aWRlb0Jsb2IpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBydW5GRm1wZWcoaW5wdXRGaWxlTmFtZSwgb3V0cHV0RmlsZU5hbWUsIGNvbW1hbmRTdHIsIGZpbGUpIHtcbiAgY29uc29sZS5sb2coJ3J1bkZGbXBlZyBjb21tYW5kU3RyJywgY29tbWFuZFN0cik7XG5cbiAgaWYgKGZmbXBlZy5pc0xvYWRlZCgpKSB7XG4gICAgYXdhaXQgZmZtcGVnLmV4aXQoKTtcbiAgfVxuXG4gIGF3YWl0IGZmbXBlZy5sb2FkKCk7XG5cbiAgY29uc3QgY29tbWFuZExpc3QgPSBjb21tYW5kU3RyLnNwbGl0KCcgJyk7XG4gIGlmIChjb21tYW5kTGlzdC5zaGlmdCgpICE9PSAnZmZtcGVnJykge1xuICAgIGFsZXJ0KCdQbGVhc2Ugc3RhcnQgd2l0aCBmZm1wZWcnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmZm1wZWcuRlMoJ3dyaXRlRmlsZScsIGlucHV0RmlsZU5hbWUsIGF3YWl0IGZldGNoRmlsZShmaWxlKSk7XG4gIGF3YWl0IGZmbXBlZy5ydW4oLi4uY29tbWFuZExpc3QpO1xuICBjb25zdCBkYXRhID0gZmZtcGVnLkZTKCdyZWFkRmlsZScsIG91dHB1dEZpbGVOYW1lKTtcbiAgY29uc29sZS5sb2coJ2ZmbXBlZyBkYXRhJywgZGF0YSk7XG5cbiAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtkYXRhLmJ1ZmZlcl0pO1xuICBjb25zb2xlLmxvZygnZmZtcGVnIGJsb2InLCBibG9iKTtcbiAgcmV0dXJuIGJsb2I7XG4gIC8vIGRvd25sb2FkRmlsZShibG9iLCBvdXRwdXRGaWxlTmFtZSk7XG59XG5cbmZ1bmN0aW9uIGRvd25sb2FkRmlsZShibG9iLCBmaWxlTmFtZSkge1xuICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICBhLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICBhLmRvd25sb2FkID0gZmlsZU5hbWU7XG4gIGEuY2xpY2soKTtcbn1cbiJdLCJuYW1lcyI6WyJ0aW1lQU1QTSIsImFkZExlYWRpbmdaZXJvIiwiY3JlYXRlRmlsZW5hbWUiLCJleHRlbnNpb24iLCJ0ZXh0IiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwibmFtZSIsImNyZWF0ZUZpbGVuYW1lT25seSIsImRhdGUiLCJEYXRlIiwiYW1wbVRpbWUiLCJkYXRlRGF0YSIsInllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYW1wbSIsInRvVXBwZXJDYXNlIiwiaG91cnMiLCJtaW51dGVzIiwic2Vjb25kcyIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiLCJmb3JtYXRBTVBNIiwic3BhY2VCZXR3ZWVuIiwic3RyVGltZSIsInRvVW5peFN0cmluZyIsInRvVW5peFVUQ1N0cmluZyIsImdldFVUQ0Z1bGxZZWFyIiwiZ2V0VVRDTW9udGgiLCJnZXRVVENEYXRlIiwiZ2V0VVRDSG91cnMiLCJnZXRVVENNaW51dGVzIiwiZ2V0VVRDU2Vjb25kcyIsImFkZEhvdXJzIiwic2V0VGltZSIsImdldFRpbWUiLCJhZGREYXlzIiwiZGF5cyIsIm1vbnRocyIsImVuIiwiZnIiLCJsYW5ndWFnZSIsImdldEFnZSIsImJpcnRoRGF0ZSIsInRvZGF5IiwiYWdlIiwibSIsInRyZWF0QXNVVEMiLCJyZXN1bHQiLCJzZXRNaW51dGVzIiwiZ2V0VGltZXpvbmVPZmZzZXQiLCJtaW51dGVzQmV0d2VlbiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJtaWxsaXNlY29uZHNQZXJNaW51dGUiLCJob3Vyc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJIb3VyIiwiZGF5c0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJEYXkiLCJ3ZWVrc0JldHdlZW4iLCJtaWxsaXNlY29uZHNQZXJXZWVrIiwibW9udGhzQmV0d2VlbiIsIm1pbGxpc2Vjb25kc1Blck1vbnRoIiwieWVhcnNCZXR3ZWVuIiwibWlsbGlzZWNvbmRzUGVyWWVhciIsImdldEZhbWlsaWFyVGltZUJldHdlZW4iLCJ5ZWFyc0JldHdlZW5GbG9vciIsIk1hdGgiLCJmbG9vciIsInRvU3RyaW5nIiwibW9udGhzQmV0d2VlbkZsb29yIiwid2Vla3NCZXR3ZWVuRmxvb3IiLCJkYXlzQmV0d2VlbkZsb29yIiwiaG91cnNCZXR3ZWVuRmxvb3IiLCJtaW51dGVzQmV0d2VlbkZsb29yIiwiZ2V0UmFuZG9tQXJiaXRyYXJ5IiwibWluIiwibWF4IiwicmFuZG9tIiwiZ2V0UmFuZG9tSW50IiwiZ2V0UmFuZG9tSW50SW5jbHVzaXZlIiwicmFuZG9tV2l0aGluUmFuZ2UiLCJyYW5kb21JbnRlZ2VyV2l0aGluUmFuZ2UiLCJpc0V2ZW4iLCJ2YWx1ZSIsImlzT2RkIiwiaXNJbnRlZ2VyIiwiaXNQcmltZSIsInMiLCJzcXJ0IiwiaSIsInJvdW5kRGVjaW1hbFRvUGxhY2UiLCJwbGFjZSIsInAiLCJwb3ciLCJyb3VuZCIsInJvdW5kMSIsInJvdW5kMiIsInJvdW5kMyIsImxvb3BJbmRleCIsImluZGV4IiwiaXNCZXR3ZWVuIiwiZmlyc3RWYWx1ZSIsInNlY29uZFZhbHVlIiwiY29uc3RyYWluIiwiY3JlYXRlU3RlcHNCZXR3ZWVuIiwiYmVnaW4iLCJlbmQiLCJzdGVwcyIsInN0ZXBzQmV0d2VlbiIsImluY3JlbWVudCIsInB1c2giLCJpbnRlcnBvbGF0ZSIsImFtb3VudCIsIm1hcCIsIm1pbjEiLCJtYXgxIiwibWluMiIsIm1heDIiLCJsZXJwIiwibm9ybSIsImdldFdlaWdodGVkQXZlcmFnZSIsImRlc3QiLCJuIiwiZm9ybWF0Iiwia0RlbGltIiwibWluTGVuZ3RoIiwiZmlsbENoYXIiLCJpc05hTiIsInJlbWFpbmRlciIsIm51bSIsImxlbiIsImFkZENoYXIiLCJ0b3RhbERlbGltIiwidG90YWxSZW1haW4iLCJudW1TcGxpdCIsInNwbGl0Iiwic3BsaWNlIiwic2hpZnQiLCJqb2luIiwic3Vic3RyIiwiZm9ybWF0Q3VycmVuY3kiLCJmb3JjZURlY2ltYWxzIiwiY3VycmVuY3kiLCJ0b0ZpeGVkIiwiZ2V0T3JkaW5hbFN1ZmZpeCIsInNwZWxsIiwiRXJyb3IiLCJvbmVzU3BlbGxpbmdzIiwidGVuc1NwZWxsaW5ncyIsInNwZWxsaW5nIiwibWlsbGlvbnMiLCJ0aG91c2FuZHMiLCJodW5kcmVkcyIsInRlbnMiLCJvbmVzIiwiY29tcG9uZW50VG9IZXgiLCJjIiwiaGV4IiwicmdiVG9IZXgiLCJyZ2IiLCJyIiwiZyIsImIiLCJoZXhUb1JnYiIsImV4ZWMiLCJwYXJzZUludCIsImRlZ1RvUmFkIiwiZGVncmVlcyIsIlBJIiwicmFkVG9EZWciLCJyYWQiLCJzbW9vdGhzdGVwIiwieCIsImEiLCJ0IiwibWl4IiwiY2xhbXAiLCJtb2QiLCJtb2RXcmFwIiwicmFuZG9tMUQiLCJzZWVkIiwic2luIiwibm9pc2UxRCIsImYiLCJ1IiwicmFuZG9tUmFuZ2UiLCJyYW5kb21JbnQiLCJtYXBDbGFtcCIsInNpbmVXYXZlIiwiYW5nbGUiLCJmcmVxdWVuY3kiLCJ0aW1lIiwic3BlZWQiLCJhbXBsaXR1ZGUiLCJjbGFtcFRpbWUiLCJzdGFydFRpbWUiLCJkdXJhdGlvbiIsImVhc2VPdXQiLCJ0YXJnZXQiLCJmcmljdGlvbiIsInNwcmluZyIsImVsYXN0aWNpdHkiLCJyZW1vdmVNdWx0aXBsZVJvdGF0aW9ucyIsImNpcmNsZSIsImhleENvbG9yU3RyaW5nVG9OdW1iZXIiLCJOdW1iZXIiLCJyZXBsYWNlIiwiY3JlYXRlRkZtcGVnIiwiZmV0Y2hGaWxlIiwiRkZtcGVnIiwiZmZtcGVnIiwiY29yZVBhdGgiLCJjaHJvbWUiLCJydW50aW1lIiwiZ2V0VVJMIiwibG9nIiwibWFpbk5hbWUiLCJvbk1lc3NhZ2UiLCJhZGRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJ0eXBlIiwic3RhcnRSZWNvcmRpbmciLCJzdG9wUmVjb3JkaW5nIiwicmVjb3JkZXIiLCJkYXRhIiwiYmxvYiIsInN0YXRlIiwiY29uc29sZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaXplIiwidGFiV2lkdGgiLCJ5IiwidGFiSGVpZ2h0IiwicGl4ZWxSYXRpbyIsImNvbnN0cmFpbnRzIiwiZXhwb3J0VmlkZW8iLCJ2aWRlbyIsIm1hbmRhdG9yeSIsImNocm9tZU1lZGlhU291cmNlIiwiY2hyb21lTWVkaWFTb3VyY2VJZCIsInN0cmVhbUlkIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm1pbkZyYW1lUmF0ZSIsIm1heEZyYW1lUmF0ZSIsImV4cG9ydEF1ZGlvIiwiYXVkaW8iLCJtZWRpYSIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsIm91dHB1dCIsIkF1ZGlvQ29udGV4dCIsInNvdXJjZSIsImNyZWF0ZU1lZGlhU3RyZWFtU291cmNlIiwiY29ubmVjdCIsImRlc3RpbmF0aW9uIiwibWltZVR5cGUiLCJ2aWRlb0JpdHNQZXJTZWNvbmQiLCJhdWRpb0JpdHNQZXJTZWNvbmQiLCJvcHRpb25zIiwiTWVkaWFSZWNvcmRlciIsIm9uZGF0YWF2YWlsYWJsZSIsImV2ZW50Iiwib25zdG9wIiwiYmxvYkZvcm1hdCIsIkJsb2IiLCJjb252ZXJ0U3RyZWFtcyIsInN0YXJ0Iiwid2luZG93IiwibG9jYXRpb24iLCJoYXNoIiwic3RvcCIsInN0cmVhbSIsImdldFRyYWNrcyIsImZvckVhY2giLCJ2aWRlb0Jsb2IiLCJmaWxlUmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImlucHV0RmlsZU5hbWUiLCJvdXRwdXRGaWxlTmFtZSIsImRvd25sb2FkRXh0ZW5zaW9uIiwiY29tbWFuZFN0ciIsImZpbGVOYW1lIiwiZG93bmxvYWRGaWxlTmFtZSIsInJ1bkZGbXBlZyIsIlVpbnQ4QXJyYXkiLCJGaWxlIiwidmlkZW9VUkxNZXNzYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwidmlkZW9VUkwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJzZW5kTWVzc2FnZSIsInJlYWRBc0FycmF5QnVmZmVyIiwiZmlsZSIsImlzTG9hZGVkIiwiZXhpdCIsImxvYWQiLCJjb21tYW5kTGlzdCIsImFsZXJ0IiwiRlMiLCJydW4iLCJidWZmZXIiLCJkb3dubG9hZEZpbGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayJdLCJzb3VyY2VSb290IjoiIn0=