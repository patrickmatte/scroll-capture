/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Data =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Data, _EventDispatcher);

  function Data() {
    _classCallCheck(this, Data);

    return _possibleConstructorReturn(this, _getPrototypeOf(Data).call(this));
  }

  _createClass(Data, [{
    key: "serialize",
    value: function serialize() {
      return this.value;
    }
  }, {
    key: "deserialize",
    value: function deserialize(data) {
      this.value = data;
    }
  }, {
    key: "copy",
    value: function copy(data) {
      this.value = data.value;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.value = null;
      return _get(_getPrototypeOf(Data.prototype), "destroy", this).call(this);
    }
  }, {
    key: "value",
    get: function get() {
      return this;
    },
    set: function set(val) {}
  }], [{
    key: "serialize",
    value: function serialize(obj) {
      var str = [];

      for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
          str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
      }

      return str.join("&");
    }
  }, {
    key: "CHANGE",
    get: function get() {
      return "change";
    }
  }]);

  return Data;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return evalProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return define; });
/* unused harmony export decorateElement */
/* unused harmony export createComponent */
/* unused harmony export setScope */
/* unused harmony export directives */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return applyDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return importTemplate; });
/* unused harmony export destroyElement */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return destroyElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getAllObjects; });
function evalProperty(path, scope) {
  if (path == ".") {
    return scope;
  }

  var array = path.split(".");
  var object = scope;

  while (array.length > 0) {
    var name = array.shift();
    var arr = name.split("[");

    for (var i = 0; i < arr.length; i++) {
      var prop = arr[i].split("]")[0];
      object = object[prop];

      if (object == null) {
        console.log("Error! The reference " + prop + " in " + path + " is undefined");
      }
    }
  }

  return object;
}
var classes = {};
function define(name, classReference) {
  classes[name] = classReference;
} // export function registerClass(classReference, name) {
// 	classes[name] = classReference;
// }

function decorateElement(element, scope) {
  var dataWrapper = element.getAttribute("data-wrapper");

  if (dataWrapper) {
    var wrappers = dataWrapper.split(" ");

    for (var i = 0; i < wrappers.length; i++) {
      var wrapper = wrappers[i];

      if (wrapper) {
        var method = evalProperty(wrapper, window);

        if (method) {
          method(element);

          if ("createdCallback" in element) {
            element.createdCallback();
          }
        }
      }
    }
  }
}
function createComponent(element, scope) {
  var className = element.nodeName.toLowerCase();
  var classReference = classes[className];

  if (!classReference) {
    className = element.getAttribute("is");

    if (className) {
      classReference = classes[className];
    }
  }

  if (classReference) {
    var component = new classReference(element); // element.component = component;
  }
}
function setScope(element, scope) {
  if (element.component) {
    element.component.scope = scope;
  }
}
var directives = [createComponent, setScope];
function applyDirectives(element, scope) {
  var array = [element];
  var elements = getAllObjects(element, array);

  for (var j = 0; j < directives.length; j++) {
    var directive = directives[j];

    for (var i = elements.length - 1; i > -1; i--) {
      //for (let i = 0; i < elements.length; i++) {
      var el = elements[i];
      directive(el, scope);
    }
  }
}
var factories = [];

for (var i = 0; i < 5; i++) {
  factories.push(document.createElement("div"));
} //
// export function importTemplate(template, scope) {
// 	if (window.renderTemplate) {
// 		template = window.renderTemplate(template, scope);
// 	}
// 	let factory = factories.shift();
// 	factories.push(factory);
// 	factory.innerHTML = template;
// 	let child = factory.children.item(0);
// 	// if (window.CustomElements) {
// 	// 	CustomElements.upgradeSubtree(child);
// 	// }
// 	applyDirectives(child, scope);
// 	return child;
// }


function importTemplate(template, scope, debug) {
  var child;

  if (window.renderTemplate) {
    template = window.renderTemplate(template, scope);
  }

  var factory = factories.shift();
  factories.push(factory);
  factory.innerHTML = template;

  if (factory.children.length > 0) {
    child = factory.children.item(0);
  }

  applyDirectives(child, scope);
  return child;
}
function destroyElement(element) {
  if (element) {
    var elements = getAllObjects(element);

    for (var _i = elements.length - 1; _i > -1; _i--) {
      var el = elements[_i];

      if (el.component) {
        if (el.component.destroy) {
          try {
            el.component.destroy();
          } catch (e) {}
        }

        el.component = null;
      } // destroyElement(el);

    }

    element.innerHTML = null;

    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }

    if (element.component) {
      if (element.component.destroy) {
        try {
          element.component.destroy();
        } catch (e) {}
      }

      element.component = null;
    }
  }
}
function destroyElements(elements) {
  for (var _i2 = 0; _i2 < elements.length; _i2++) {
    var element = elements[_i2];
    destroyElement(element);
  }
}
function getAllObjects(parent, array) {
  if (!array) {
    array = [];
  }

  if (parent.children) {
    for (var _i3 = 0; _i3 < parent.children.length; _i3++) {
      var child = parent.children.item(_i3);

      switch (child.nodeName) {
        case "#text":
        case "#comment":
        case "BR":
        case "TEMPLATE":
        case "SCRIPT":
          break;

        default:
          array.push(child);
          getAllObjects(child, array);
          break;
      }
    }
  }

  return array;
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./js/tsunami/geom/math.js
function math_lerp(a, b, t) {
  return a + t * (b - a); // return a(1-t) + bt
}
// CONCATENATED MODULE: ./js/tsunami/geom/Point.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Point_Point; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Point_Point =
/*#__PURE__*/
function () {
  function Point() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Point);

    this.x = x;
    this.y = y;
  }

  _createClass(Point, [{
    key: "add",
    value: function add(p) {
      return new Point(this.x + p.x, this.y + p.y);
    }
  }, {
    key: "abs",
    value: function abs() {
      return new Point(Math.abs(this.x), Math.abs(this.y));
    }
  }, {
    key: "clamp",
    value: function clamp(minX, maxX, minY, maxY) {
      this.clampX(minX, maxX);
      this.clampY(minY, maxY);
    }
  }, {
    key: "clampX",
    value: function clampX(min, max) {
      this.x = Math.max(this.x, min);
      this.x = Math.min(this.x, max);
    }
  }, {
    key: "clampY",
    value: function clampY(min, max) {
      this.y = Math.max(this.y, min);
      this.y = Math.min(this.y, max);
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(p) {
      this.x = p.x;
      this.y = p.y;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Point(this.x, this.y);
    }
  }, {
    key: "equals",
    value: function equals(point) {
      return this.x == point.x && this.y == point.y;
    }
  }, {
    key: "divide",
    value: function divide(p) {
      return new Point(this.x / p.x, this.y / p.y);
    }
  }, {
    key: "divideScalar",
    value: function divideScalar(scalar) {
      return new Point(this.x / scalar, this.y / scalar);
    }
  }, {
    key: "multiply",
    value: function multiply(p) {
      return new Point(this.x * p.x, this.y * p.y);
    }
  }, {
    key: "multiplyScalar",
    value: function multiplyScalar(scalar) {
      return new Point(this.x * scalar, this.y * scalar);
    }
  }, {
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "subtract",
    value: function subtract(p) {
      return new Point(this.x - p.x, this.y - p.y);
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[Point" + " x=" + this.x + " y=" + this.y + "]";
    }
  }, {
    key: "magnitude",
    get: function get() {
      return Point.distance(this);
    }
  }], [{
    key: "lerp",
    value: function lerp(p0, p1, t) {
      return new Point(math_lerp(p0.x, p1.x, t), math_lerp(p0.y, p1.y, t));
    }
  }, {
    key: "distance",
    value: function distance(p1) {
      var p2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Point();
      return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
    }
  }, {
    key: "polar",
    value: function polar(len, radians) {
      return new Point(len * Math.cos(radians), len * Math.sin(radians));
    }
  }, {
    key: "getAngle",
    value: function getAngle(point) {
      var center = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Point();
      return Math.atan2(point.y - center.y, point.x - center.x);
    }
  }]);

  return Point;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return events; });
/* unused harmony export createCustomEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseEvent; });
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var events = {
  mouseover: "mouseover",
  mouseout: "mouseout",
  mousedown: "mousedown",
  mouseup: "mouseup",
  mousemove: "mousemove",
  click: "click",
  transitionend: 'transitionend',
  animationstart: 'animationstart',
  animationiteration: 'animationiteration',
  animationend: 'animationend'
};

if (_window__WEBPACK_IMPORTED_MODULE_0__[/* isTouch */ "a"]) {
  events.mouseover = "touchstart";
  events.mouseout = "touchend";
  events.mousedown = "touchstart";
  events.mouseup = "touchend";
  events.mousemove = "touchmove";
  events.click = "click";
}

var platforms = {
  'OTransition': {
    transitionend: 'otransitionend',
    animationstart: 'oanimationstart',
    animationiteration: 'oanimationiteration',
    animationend: 'oanimationend'
  },
  'MozTransition': {
    transitionend: 'transitionend',
    animationstart: 'moznimationstart',
    animationiteration: 'moznimationiteration',
    animationend: 'moznimationend'
  },
  'WebkitTransition': {
    transitionend: 'webkitTransitionEnd',
    animationstart: 'webkitAnimationStart',
    animationiteration: 'webkitAnimationIteration',
    animationend: 'webkitAnimationEnd'
  }
};
window.addEventListener("load", function () {
  for (var i in platforms) {
    var data = platforms[i];

    if (document.body.style[i] !== undefined) {
      events.transitionend = data.transitionend;
      events.animationstart = data.animationstart;
      events.animationiteration = data.animationiteration;
      events.animationend = data.animationend;
    }
  }
});
function createCustomEvent(type, params) {
  var event;

  try {
    event = new CustomEvent(event, params);
  } catch (e) {
    event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, params.bubbles, params.bubbles, params.detail);
  }

  return event;
}

var BaseEvent =
/*#__PURE__*/
function () {
  function BaseEvent(type, value) {
    _classCallCheck(this, BaseEvent);

    this.type = type;
    this.value = value;
  }

  _createClass(BaseEvent, [{
    key: "stopPropagation",
    value: function stopPropagation() {}
  }, {
    key: "stopImmediatePropagation",
    value: function stopImmediatePropagation() {}
  }, {
    key: "preventDefault",
    value: function preventDefault() {}
  }]);

  return BaseEvent;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberData; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NumberData =
/*#__PURE__*/
function (_Data) {
  _inherits(NumberData, _Data);

  function NumberData() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : NaN;
    var modifiers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, NumberData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumberData).call(this));
    _this.modifiers = modifiers;
    _this.value = value;
    return _this;
  }

  _createClass(NumberData, [{
    key: "add",
    value: function add() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.value = this._value + value;
    }
  }, {
    key: "subtract",
    value: function subtract() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      this.value = this._value - value;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.value = 0;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.modifiers = [];

      if (this.validation instanceof _Validation__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) {
        this.validation.destroy();
      }

      this.validation = null;
      return _get(_getPrototypeOf(NumberData.prototype), "destroy", this).call(this);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      value = Number(value);

      for (var i = 0; i < this.modifiers.length; i++) {
        var modifier = this.modifiers[i];
        value = modifier(value);
      }

      if (value != this._value || this.forceChangeEvent) {
        this._value = value;
        this.dispatchEvent({
          type: _Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CHANGE,
          value: this._value
        });
      }
    }
  }], [{
    key: "roundDecimal1",
    value: function roundDecimal1(val) {
      return Math.round(val * 10) / 10;
    }
  }, {
    key: "roundDecimal2",
    value: function roundDecimal2(val) {
      return Math.round(val * 100) / 100;
    }
  }, {
    key: "roundDecimal3",
    value: function roundDecimal3(val) {
      return Math.round(val * 1000) / 1000;
    }
  }]);

  return NumberData;
}(_Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./js/tsunami/data/Data.js
var Data = __webpack_require__(0);

// EXTERNAL MODULE: ./js/tsunami/data/NumberData.js
var NumberData = __webpack_require__(4);

// EXTERNAL MODULE: ./js/tsunami/data/BooleanData.js
var BooleanData = __webpack_require__(11);

// CONCATENATED MODULE: ./js/tsunami/data/ObjectData.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ObjectData_ObjectData =
/*#__PURE__*/
function (_Data) {
  _inherits(ObjectData, _Data);

  function ObjectData(value) {
    var _this;

    _classCallCheck(this, ObjectData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ObjectData).call(this));
    _this.value = value;
    return _this;
  }

  _createClass(ObjectData, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "_deselectValue",
    value: function _deselectValue(data) {
      if (data) {
        if (data.isSelected) {
          if (data.isSelected instanceof BooleanData["a" /* default */]) {
            data.isSelected.value = false;
          }
        }
      }
    }
  }, {
    key: "_selectValue",
    value: function _selectValue(data) {
      if (data) {
        if (data.isSelected) {
          if (data.isSelected instanceof BooleanData["a" /* default */]) {
            data.isSelected.value = true;
          }
        }
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (value != this._value) {
        this._deselectValue(this._value);

        this._value = value;

        this._selectValue(this._value);

        this.dispatchEvent({
          type: Data["a" /* default */].CHANGE,
          value: this._value
        });
      }
    }
  }]);

  return ObjectData;
}(Data["a" /* default */]);


// EXTERNAL MODULE: ./js/tsunami/events.js
var events = __webpack_require__(3);

// CONCATENATED MODULE: ./js/tsunami/data/ArrayData.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayData_ArrayData; });
function ArrayData_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ArrayData_typeof = function _typeof(obj) { return typeof obj; }; } else { ArrayData_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ArrayData_typeof(obj); }

function ArrayData_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ArrayData_possibleConstructorReturn(self, call) { if (call && (ArrayData_typeof(call) === "object" || typeof call === "function")) { return call; } return ArrayData_assertThisInitialized(self); }

function ArrayData_getPrototypeOf(o) { ArrayData_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ArrayData_getPrototypeOf(o); }

function ArrayData_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ArrayData_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ArrayData_createClass(Constructor, protoProps, staticProps) { if (protoProps) ArrayData_defineProperties(Constructor.prototype, protoProps); if (staticProps) ArrayData_defineProperties(Constructor, staticProps); return Constructor; }

function ArrayData_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ArrayData_setPrototypeOf(subClass, superClass); }

function ArrayData_setPrototypeOf(o, p) { ArrayData_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ArrayData_setPrototypeOf(o, p); }






var ArrayData_ArrayData =
/*#__PURE__*/
function (_Data) {
  ArrayData_inherits(ArrayData, _Data);

  ArrayData_createClass(ArrayData, null, [{
    key: "shuffle",
    value: function shuffle(o) {
      for (var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x) {
        ;
      }

      return o;
    }
  }, {
    key: "nodeListToArray",
    value: function nodeListToArray(nodeList) {
      return Array.prototype.slice.call(nodeList); // let array = new Array();
      // for (let i = 0; i < nodeList.length; i++) {
      // 	array.push(nodeList.item(i));
      // }
      // return array;
    }
  }, {
    key: "ITEM_CHANGE",
    get: function get() {
      return "item-change";
    }
  }]);

  function ArrayData() {
    var _this;

    ArrayData_classCallCheck(this, ArrayData);

    _this = ArrayData_possibleConstructorReturn(this, ArrayData_getPrototypeOf(ArrayData).call(this));
    _this.dataItemChangeBind = _this.dataItemChangeHandler.bind(ArrayData_assertThisInitialized(_this));
    _this.lastIndex = new NumberData["a" /* default */]();
    _this.length = new NumberData["a" /* default */]();

    _this.length.addEventListener(Data["a" /* default */].CHANGE, function () {
      _this.lastIndex.value = _this.length.value - 1;
    });

    _this.length.value = arguments.length;
    _this._value = [];
    _this.selectedItem = new ObjectData_ObjectData();
    _this.selectedItemChange = _this.selectedItemChange.bind(ArrayData_assertThisInitialized(_this));

    _this.selectedItem.addEventListener(Data["a" /* default */].CHANGE, _this.selectedItemChange);

    _this.selectedIndex = new NumberData["a" /* default */]();
    _this.selectedIndexChange = _this.selectedIndexChange.bind(ArrayData_assertThisInitialized(_this));

    _this.selectedIndex.addEventListener(Data["a" /* default */].CHANGE, _this.selectedIndexChange);

    _this.nextIndex = new NumberData["a" /* default */]();
    _this.prevIndex = new NumberData["a" /* default */]();
    _this.dataClass = Object;

    _this.push.apply(ArrayData_assertThisInitialized(_this), arguments);

    return _this;
  }

  ArrayData_createClass(ArrayData, [{
    key: "selectedItemChange",
    value: function selectedItemChange(event) {
      this.selectedIndex.removeEventListener(Data["a" /* default */].CHANGE, this.selectedIndexChange);
      var index = this.value.indexOf(this.selectedItem.value);
      this.selectedIndex.value = index;
      this.selectedIndex.addEventListener(Data["a" /* default */].CHANGE, this.selectedIndexChange);
      this.setSelectedData(this.selectedItem.value);
    }
  }, {
    key: "setSelectedData",
    value: function setSelectedData(value) {
      if (this.previousSelectedItem) {
        if (this.previousSelectedItem.isSelectedItem instanceof Data["a" /* default */]) {
          this.previousSelectedItem.isSelectedItem.value = false;
        }
      }

      if (this.selectedData) {
        this.selectedData.copy(value);
      }

      this.previousSelectedItem = value;

      if (this.previousSelectedItem) {
        if (this.previousSelectedItem.isSelectedItem instanceof Data["a" /* default */]) {
          this.previousSelectedItem.isSelectedItem.value = true;
        }
      }

      var index = this.selectedIndex.value;
      var nextIndex = index + 1;

      if (nextIndex > this.value.length - 1) {
        nextIndex = 0;
      }

      this.nextIndex.value = nextIndex;

      if (this.nextData) {
        this.nextData.copy(this.value[this.nextIndex.value]);
      }

      var prevIndex = index - 1;

      if (prevIndex < 0) {
        prevIndex = this.value.length - 1;
      }

      this.prevIndex.value = prevIndex;

      if (this.prevData) {
        this.prevData.copy(this.value[this.prevIndex.value]);
      }
    }
  }, {
    key: "selectedIndexChange",
    value: function selectedIndexChange(event) {
      var index = this.selectedIndex.value;
      this.selectedItem.removeEventListener(Data["a" /* default */].CHANGE, this.selectedItemChange);
      this.selectedItem.value = this.value[index];
      this.selectedItem.addEventListener(Data["a" /* default */].CHANGE, this.selectedItemChange);
      this.setSelectedData(this.selectedItem.value);
    }
  }, {
    key: "dataItemChangeHandler",
    value: function dataItemChangeHandler(e) {
      var event = new events["a" /* default */](ArrayData.ITEM_CHANGE, this.value);
      this.dispatchEvent(event);
    }
  }, {
    key: "item",
    value: function item(index) {
      return this._value[index];
    }
  }, {
    key: "indexOf",
    value: function indexOf(searchElement, fromIndex) {
      return this._value.indexOf(searchElement, fromIndex);
    }
  }, {
    key: "map",
    value: function map(callback) {
      return this._value.map(callback);
    }
  }, {
    key: "find",
    value: function find(callback) {
      return this._value.find(callback);
    }
  }, {
    key: "findByKey",
    value: function findByKey(key, value) {
      var selected = this.find(function (element) {
        return element[key].toString() == value.toString();
      });
      return selected;
    }
  }, {
    key: "filter",
    value: function filter(callback) {
      return this._value.filter(callback);
    }
  }, {
    key: "pop",
    value: function pop() {
      var item = this._value.pop();

      if (item instanceof Data["a" /* default */]) {
        item.removeEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
      }

      this.length.value = this._value.length;
      this.dispatchEvent({
        type: "remove",
        value: [item],
        index: this.value.length,
        total: 1
      });
      this.dispatchChangeEvent();
      return item;
    }
  }, {
    key: "push",
    value: function push() {
      var previousLength = this.value.length;

      var length = this._value.push.apply(this._value, arguments);

      this.length.value = length;
      var added = [];

      for (var i = 0; i < arguments.length; i++) {
        added.push(arguments[i]);
      }

      for (var _i = 0; _i < added.length; _i++) {
        var item = added[_i];

        if (item instanceof Data["a" /* default */]) {
          item.addEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
        }
      }

      if (added.length > 0) {
        this.dispatchEvent({
          type: "add",
          value: added,
          index: previousLength,
          total: arguments.length
        });
        this.dispatchChangeEvent();
      }

      return length;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      this._value.reverse();

      this.dispatchEvent({
        type: "reverse",
        value: this._value
      });
      this.dispatchChangeEvent();
    }
  }, {
    key: "shift",
    value: function shift() {
      var item = this._value.shift();

      if (item instanceof Data["a" /* default */]) {
        item.removeEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
      }

      this.length.value = this._value.length;
      this.dispatchEvent({
        type: "remove",
        value: [item],
        index: 0,
        total: 1
      });
      this.dispatchChangeEvent();
      return item;
    }
  }, {
    key: "sort",
    value: function sort(compareFunction) {
      this._value.sort(compareFunction);

      this.dispatchEvent({
        type: "sort",
        value: this._value
      });
      this.dispatchChangeEvent();
    }
  }, {
    key: "splice",
    value: function splice() {
      var elements = this._value.splice.apply(this._value, arguments);

      for (var i = 0; i < elements.length; i++) {
        var item = elements[i];

        if (item instanceof Data["a" /* default */]) {
          item.removeEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
        }
      }

      var added = [];

      for (var _i2 = 2; _i2 < arguments.length; _i2++) {
        added.push(arguments[_i2]);
      }

      this.length.value = this._value.length;

      for (var _i3 = 0; _i3 < added.length; _i3++) {
        var _item = added[_i3];

        if (_item instanceof Data["a" /* default */]) {
          _item.addEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
        }
      }

      var index = arguments[0];

      if (elements.length > 0) {
        this.dispatchEvent({
          type: "remove",
          value: elements,
          index: index,
          total: elements.length
        });
      }

      if (added.length > 0) {
        this.dispatchEvent({
          type: "add",
          value: added,
          index: index,
          total: added.length
        });
      }

      if (elements.length > 0 || added.length > 0) {
        this.dispatchChangeEvent();
      }

      return elements;
    }
  }, {
    key: "remove",
    value: function remove(element) {
      var index = this.indexOf(element);

      if (index != -1) {
        this.splice(index, 1);
      }
    }
  }, {
    key: "unshift",
    value: function unshift() {
      var length = this._value.unshift.apply(this._value, arguments);

      this.length.value = length;
      var added = [];

      for (var i = 0; i < arguments.length; i++) {
        added.push(arguments[i]);
      }

      for (var _i4 = 0; _i4 < added.length; _i4++) {
        var item = added[_i4];

        if (item instanceof Data["a" /* default */]) {
          item.addEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
        }
      }

      if (added.length > 0) {
        this.dispatchEvent({
          type: "add",
          value: added,
          index: 0,
          total: arguments.length
        });
        this.dispatchChangeEvent();
      }

      return length;
    }
  }, {
    key: "dispatchChangeEvent",
    value: function dispatchChangeEvent() {
      this.dataItemChangeHandler(null);
      this.dispatchEvent({
        type: Data["a" /* default */].CHANGE,
        value: this._value
      });
    }
  }, {
    key: "includes",
    value: function includes(element) {
      var index = this.indexOf(element);
      return index != -1;
    }
  }, {
    key: "join",
    value: function join() {
      return this._value.join.apply(this._value, arguments);
    }
  }, {
    key: "concat",
    value: function concat() {
      return this._value.concat.apply(this._value, arguments);
    }
  }, {
    key: "slice",
    value: function slice() {
      return this._value.slice.apply(this._value, arguments);
    }
  }, {
    key: "serialize",
    value: function serialize() {
      var array = [];
      this.map(function (obj) {
        array.push(obj.serialize());
      });
      return array;
    }
  }, {
    key: "deserialize",
    value: function deserialize(data) {
      var _this2 = this;

      var array = [];
      data.map(function (obj) {
        var instance = new _this2.dataClass();
        instance.deserialize(obj);
        array.push(instance);
      });
      this.value = array;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      for (var i = 0; i < this._value.length; i++) {
        var oldItem = this._value[i];

        if (oldItem instanceof Data["a" /* default */]) {
          oldItem.removeEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
        }
      }

      if (!value) {
        value = [];
      }

      this._value = value;

      for (var _i5 = 0; _i5 < this._value.length; _i5++) {
        var item = this._value[_i5];

        if (item instanceof Data["a" /* default */]) {
          item.addEventListener(Data["a" /* default */].CHANGE, this.dataItemChangeBind);
        }
      }

      this.length.value = this._value.length;
      this.dispatchEvent({
        type: "reset",
        value: this._value
      });
      this.dispatchChangeEvent();
    }
  }]);

  return ArrayData;
}(Data["a" /* default */]);



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./js/tsunami/tsunami.js
var tsunami = __webpack_require__(1);

// EXTERNAL MODULE: ./js/tsunami/data/Data.js
var Data = __webpack_require__(0);

// CONCATENATED MODULE: ./js/tsunami/components/Attribute.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Attribute_Attribute =
/*#__PURE__*/
function () {
  function Attribute(element, name, model) {
    var unit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";

    _classCallCheck(this, Attribute);

    this.modelChangeBind = this.modelChange.bind(this);
    this.element = element;
    this.name = name;
    this.model = model;
    this.unit = unit;
  }

  _createClass(Attribute, [{
    key: "modelChange",
    value: function modelChange(event) {
      this.updateValue(this._model.value);
    }
  }, {
    key: "updateValue",
    value: function updateValue(value) {
      if (value == null || value == undefined) {
        value = "";
      }

      var string = value.toString();

      if (string && this.unit) {
        string += this.unit;
      }

      this.element.setAttribute(this.name, string);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.model = null;
    }
  }, {
    key: "model",
    get: function get() {
      return this._model;
    },
    set: function set(value) {
      if (this._model) {
        if (this._model instanceof Data["a" /* default */]) {
          this._model.removeEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);
        }
      }

      this._model = value;

      if (value instanceof Data["a" /* default */]) {
        value.addEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);
        this.modelChange();
      } else {
        this.updateValue(value);
      }
    }
  }]);

  return Attribute;
}();


// EXTERNAL MODULE: ./js/tsunami/components/Style.js
var Style = __webpack_require__(28);

// EXTERNAL MODULE: ./js/tsunami/await.js
var tsunami_await = __webpack_require__(16);

// EXTERNAL MODULE: ./js/tsunami/data/ArrayData.js + 1 modules
var ArrayData = __webpack_require__(5);

// EXTERNAL MODULE: ./js/tsunami/data/ArrayDataOperation.js
var ArrayDataOperation = __webpack_require__(21);

// EXTERNAL MODULE: ./js/tsunami/geom/Rectangle.js
var Rectangle = __webpack_require__(10);

// EXTERNAL MODULE: ./js/tsunami/window.js
var tsunami_window = __webpack_require__(8);

// EXTERNAL MODULE: ./js/tsunami/EventDispatcher.js
var EventDispatcher = __webpack_require__(9);

// CONCATENATED MODULE: ./js/tsunami/Branch.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Branch_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Branch_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Branch_createClass(Constructor, protoProps, staticProps) { if (protoProps) Branch_defineProperties(Constructor.prototype, protoProps); if (staticProps) Branch_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Branch =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Branch, _EventDispatcher);

  function Branch() {
    var _this;

    Branch_classCallCheck(this, Branch);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Branch).call(this));
    _this.branches = {};
    _this.slug = null;
    _this.parent = null;
    _this.router = null;
    _this.path = null;
    _this.arrowKeyHandler = _this.arrowKeyHandler.bind(_assertThisInitialized(_this));
    return _this;
  }

  Branch_createClass(Branch, [{
    key: "getBranch",
    value: function getBranch(slug) {
      var branch;

      if (this.branches[slug]) {
        branch = this.branches[slug];
      } else if (this.branches["*"]) {
        branch = this.branches["*"];
      } else {
        branch = new Branch();
      }

      return branch;
    }
  }, {
    key: "load",
    value: function load(assetList) {
      return Promise.resolve();
    }
  }, {
    key: "show",
    value: function show() {
      return Promise.resolve();
    }
  }, {
    key: "hide",
    value: function hide() {
      return Promise.resolve();
    }
  }, {
    key: "arrowKeyHandler",
    value: function arrowKeyHandler(event) {
      var increment = 0;

      switch (event.keyCode) {
        case 37:
        case 38:
          increment = -1;
          break;

        case 39:
        case 40:
          increment = 1;
          break;
      }

      return increment;
    }
  }, {
    key: "defaultChild",
    get: function get() {
      return this._defaultChild;
    },
    set: function set(value) {
      this._defaultChild = value;
    }
  }, {
    key: "arrowKeyNavigation",
    get: function get() {
      return this._arrowKeyNavigation;
    },
    set: function set(value) {
      this._arrowKeyNavigation = value;
      window.removeEventListener("keyup", this.arrowKeyHandler);

      if (value) {
        window.addEventListener("keyup", this.arrowKeyHandler);
      }
    }
  }]);

  return Branch;
}(EventDispatcher["a" /* default */]);


// EXTERNAL MODULE: ./js/tsunami/geom/Point.js + 1 modules
var Point = __webpack_require__(2);

// CONCATENATED MODULE: ./js/tsunami/components/UIComponent.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIComponent_UIComponent; });
function UIComponent_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UIComponent_typeof = function _typeof(obj) { return typeof obj; }; } else { UIComponent_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UIComponent_typeof(obj); }

function UIComponent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UIComponent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UIComponent_createClass(Constructor, protoProps, staticProps) { if (protoProps) UIComponent_defineProperties(Constructor.prototype, protoProps); if (staticProps) UIComponent_defineProperties(Constructor, staticProps); return Constructor; }

function UIComponent_possibleConstructorReturn(self, call) { if (call && (UIComponent_typeof(call) === "object" || typeof call === "function")) { return call; } return UIComponent_assertThisInitialized(self); }

function UIComponent_getPrototypeOf(o) { UIComponent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UIComponent_getPrototypeOf(o); }

function UIComponent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UIComponent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UIComponent_setPrototypeOf(subClass, superClass); }

function UIComponent_setPrototypeOf(o, p) { UIComponent_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UIComponent_setPrototypeOf(o, p); }













var UIComponent_UIComponent =
/*#__PURE__*/
function (_Branch) {
  UIComponent_inherits(UIComponent, _Branch);

  function UIComponent(element) {
    var _this;

    UIComponent_classCallCheck(this, UIComponent);

    _this = UIComponent_possibleConstructorReturn(this, UIComponent_getPrototypeOf(UIComponent).call(this));
    _this.element = element;
    _this.calculateGlobalPosition = false;
    _this.childrenSelector = ":scope > *";
    _this.rectangle = new Rectangle["a" /* default */]();
    _this.globalRectangle = new Rectangle["a" /* default */]();
    _this.windowSize = {};
    _this.attributes = {};

    if (_this.element) {
      _this.debug = _this.element.getAttribute("data-debug") == "true";
      _this.doChildrenAnimationFrame = _this.element.getAttribute("data-children-animation-frame") == "true";
      _this.style = new Style["a" /* default */](_this.element.style);
      _this.alsoShowChildren = _this.element.getAttribute("data-also-show-children") == "true";
    }

    _this.modelChangeBind = _this.modelChange.bind(UIComponent_assertThisInitialized(_this));
    _this._scope = UIComponent_assertThisInitialized(_this);
    _this.showDuration = 0;
    _this.showDelay = 0;
    _this.hideDuration = 0;
    _this.hideDelay = 0;
    _this.showChildrenDelay = NaN;
    _this.hideChildrenDelay = NaN;
    _this.alsoShowChildren = false;
    return _this;
  }

  UIComponent_createClass(UIComponent, [{
    key: "getBranch",
    value: function getBranch(slug) {
      var branch;

      if (this.branches[slug]) {
        branch = this.branches[slug];
      } else if (this.branches["*"]) {
        branch = this.branches["*"];
      } else {
        branch = new Branch();
      }

      return branch;
    }
  }, {
    key: "removeChild",
    value: function removeChild(value) {
      if (value) {
        if (this.componentContainer == value.parentNode) {
          value.parentNode.removeChild(value);
        }
      }
    }
  }, {
    key: "appendChild",
    value: function appendChild(value) {
      if (value) {
        this.componentContainer.appendChild(value);

        if (this.isAdded) {
          UIComponent.callElementAdded(value);
        }

        var component = value.component;

        if (component) {
          if (component.windowResize) {
            component.windowResize(this.windowSize);
          }

          if (component.windowScroll) {
            component.windowScroll(this.windowScrollPoint);
          }
        }
      }
    }
  }, {
    key: "prependChild",
    value: function prependChild(child) {
      this.appendChildAt(child, 0);
    }
  }, {
    key: "appendChildAt",
    value: function appendChildAt(child) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var children = this.children;

      if (index >= children.length) {
        this.appendChild(child);
      } else {
        this.insertBefore(child, children[index]);
      }
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(value, ref) {
      if (value) {
        if (ref) {
          this.componentContainer.insertBefore(value, ref);

          if (this.isAdded) {
            UIComponent.callElementAdded(value);
          }

          var component = value.component;

          if (component) {
            if (component.windowResize) {
              component.windowResize(this.windowSize);
            }

            if (component.windowScroll) {
              component.windowScroll(this.windowScrollPoint);
            }
          }
        }
      }
    }
  }, {
    key: "getSVGPathTotalLength",
    value: function getSVGPathTotalLength() {
      return this.element.getTotalLength();
    }
  }, {
    key: "modelChange",
    value: function modelChange(event) {
      if (this.debug) {
        console.log("UIComponent.modelChange", this.model.value);
      }

      this.updateValue(this.model.value);
    }
  }, {
    key: "load",
    value: function load() {
      var promises = [];
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var component = children[i].component;

        if (component) {
          promises.push(component.load());
        }
      }

      return Promise.all(promises);
    }
  }, {
    key: "show",
    value: function show() {
      var _this2 = this;

      var promise1 = Object(tsunami_await["b" /* awaitTimeout */])(this.showDelay);
      var promise2 = promise1.then(function () {
        _this2.showPromises = [_this2.showDelayComplete()];

        if (_this2.alsoShowChildren) {
          _this2.showPromises.push(_this2.showChildren());
        }

        return Promise.all(_this2.showPromises);
      });
      return promise2.then(this.showComplete.bind(this));
    }
  }, {
    key: "showDelayComplete",
    value: function showDelayComplete() {
      if (this.element) {
        this.element.setAttribute("data-state", "show");
      }

      return Object(tsunami_await["b" /* awaitTimeout */])(this.showDuration);
    }
  }, {
    key: "showComplete",
    value: function showComplete() {}
  }, {
    key: "showChildren",
    value: function showChildren() {
      var promises = [];
      var delay = 0;
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var component = children[i].component;

        if (component) {
          if (!isNaN(this.showChildrenDelay)) {
            component.showDelay = delay;
            delay += this.showChildrenDelay;
          }

          promises.push(component.show());
        }
      }

      return Promise.all(promises);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this3 = this;

      var promise1 = Object(tsunami_await["b" /* awaitTimeout */])(this.hideDelay);
      var promise2 = promise1.then(function () {
        _this3.hidePromises = [_this3.hideDelayComplete()];

        if (_this3.alsoShowChildren) {
          _this3.hidePromises.push(_this3.hideChildren());
        }

        return Promise.all(_this3.hidePromises);
      });
      return promise2.then(this.hideComplete.bind(this));
    }
  }, {
    key: "hideDelayComplete",
    value: function hideDelayComplete() {
      if (this.element) {
        this.element.setAttribute("data-state", "hide");
      }

      return Object(tsunami_await["b" /* awaitTimeout */])(this.hideDuration);
    }
  }, {
    key: "hideComplete",
    value: function hideComplete() {}
  }, {
    key: "hideChildren",
    value: function hideChildren() {
      var promises = [];
      var delay = 0;
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var component = children[i].component;

        if (component) {
          if (!isNaN(this.hideChildrenDelay)) {
            component.hideDelay = delay;
            delay += this.hideChildrenDelay;
          }

          promises.push(component.hide());
        }
      }

      return Promise.all(promises);
    }
  }, {
    key: "updateValue",
    value: function updateValue(value) {}
  }, {
    key: "windowResize",
    value: function windowResize(windowSize) {
      this.windowSize = windowSize; // this.rectangle = this.getRect();

      this.rectangle = new Rectangle["a" /* default */](this.element.offsetLeft, this.element.offsetTop, this.element.offsetWidth, this.element.offsetHeight);

      if (this.calculateGlobalPosition) {
        this.globalRectangle = this.rectangle.clone();
        this.globalRectangle.position = Object(tsunami_window["b" /* localToGlobal */])(this.element, document.body);
      }

      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        var component = child.component;

        if (component) {
          if (component.windowResize) {
            component.windowResize(windowSize);
          }
        }
      }
    }
  }, {
    key: "windowScroll",
    value: function windowScroll(point) {
      this.windowScrollPoint = point;
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var component = children[i].component;

        if (component) {
          if (component.windowScroll) {
            component.windowScroll(point);
          }
        }
      }
    }
  }, {
    key: "animationFrame",
    value: function animationFrame(data) {
      this.animationFrameData = data;

      if (this.doChildrenAnimationFrame) {
        var children = this.children;

        for (var i = 0; i < children.length; i++) {
          var component = children[i].component;

          if (component) {
            component.animationFrame(data);
          }
        }
      }
    }
  }, {
    key: "orientationChange",
    value: function orientationChange(orientation) {
      this.orientation = orientation;
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var component = children[i].component;

        if (component) {
          if (component.orientationChange) {
            component.orientationChange(orientation);
          }
        }
      }
    }
  }, {
    key: "elementAdded",
    value: function elementAdded() {}
  }, {
    key: "elementRemoved",
    value: function elementRemoved() {}
  }, {
    key: "destroy",
    value: function destroy() {
      this.model = null;
      this.style.destroy();
      this.style = null;
      this.scope = null;

      for (var i in this.attributes) {
        var attribute = this.attributes[i];
        attribute.destroy();
      }

      if (this.element.parentNode) {
        this.element.parentNode.removeChild(this.element);
      }

      this.element = null;
      this.element.compopnent = null;

      for (var _i in this) {
        this[_i] = null;
      }
    }
  }, {
    key: "getRect",
    value: function getRect(parent, debug) {
      return UIComponent.getRect(this.element, parent);
    }
  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      var element = this.element.querySelector(selector);

      if (!element) {
        console.log("No element with selector " + selector + " in " + this);
      }

      return element.component || element;
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      var array = [];
      var elements = this.element.querySelectorAll(selector);

      for (var i = 0; i < elements.length; i++) {
        var element = elements.item(i);
        array.push(element.component || element);
      }

      return array;
    }
  }, {
    key: "getTouchPoint",
    value: function getTouchPoint(event) {
      var touch = event;

      if (tsunami_window["a" /* isTouch */]) {
        touch = event.touches[0];
      }

      return new Point["a" /* default */](touch.pageX, touch.pageY);
    }
  }, {
    key: "element",
    get: function get() {
      return this._element;
    },
    set: function set(value) {
      this._element = value;

      if (value) {
        value.component = this;
      }
    }
  }, {
    key: "componentContainer",
    get: function get() {
      return this.element;
    }
  }, {
    key: "isAdded",
    get: function get() {
      var parent;

      if (this.element) {
        parent = this.element.parentNode;
      }

      while (parent && parent != document.body) {
        parent = parent.parentNode;
      }

      var isAdded = parent == document.body;
      return isAdded;
    }
  }, {
    key: "children",
    get: function get() {
      var array = [];

      if (this.element) {
        array = ArrayData["a" /* default */].nodeListToArray(this.element.children);
      }

      return array;
    }
  }, {
    key: "scope",
    get: function get() {
      return this._scope;
    },
    set: function set(value) {
      this._scope = value;

      if (this.debug) {
        console.log("scope", value);
      }

      var showDuration = this.element.getAttribute("data-show-duration");

      if (showDuration) {
        this.showDuration = Number(showDuration);
      }

      var hideDuration = this.element.getAttribute("data-hide-duration");

      if (hideDuration) {
        this.hideDuration = Number(hideDuration);
      }

      var showChildrenDelay = this.element.getAttribute("data-show-children-delay");

      if (showChildrenDelay) {
        this.showChildrenDelay = Number(showChildrenDelay);
      }

      var hideChildrenDelay = this.element.getAttribute("data-hide-children-delay");

      if (hideChildrenDelay) {
        this.hideChildrenDelay = Number(hideChildrenDelay);
      }

      for (var i = 0; i < this.element.attributes.length; i++) {
        var attribute = this.element.attributes[i];

        if (this.debug) {
          console.log("attribute.name", attribute.name, "attribute.value", attribute.value);
        }

        if (attribute.value.indexOf("[[") != -1) {
          var attributeData = new ArrayDataOperation["a" /* default */]();
          attributeData.parseString(attribute.value, value);
          var attr = new Attribute_Attribute(this.element, attribute.name, attributeData, "");
          attr.debug = this.debug;
          this.attributes[attribute.name] = attr;
        }
      }

      if (this.element.hasAttribute("data-model")) {
        var model = this.element.getAttribute("data-model");

        if (model) {
          this.model = Object(tsunami["d" /* evalProperty */])(model, value);
        } else {
          this.model = value;
        }
      }
    }
  }, {
    key: "model",
    get: function get() {
      return this._model;
    },
    set: function set(value) {
      if (this.debug) {
        console.log("set model", value);
      }

      if (this._model) {
        if (this._model instanceof Data["a" /* default */]) {
          this._model.removeEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);
        }
      }

      this._model = value;

      if (value) {
        if (value instanceof Data["a" /* default */]) {
          value.addEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);
          this.modelChange();
        } else {
          this.updateValue(value);
        }
      } else {
        this.updateValue(value);
      }
    }
  }], [{
    key: "callElementAdded",
    value: function callElementAdded(element) {
      var component = element.component;

      if (component) {
        if (component instanceof UIComponent) {
          component.elementAdded();

          if (component.windowResize) {
            component.windowResize(component.windowSize);
          }
        }
      }

      var objects = Object(tsunami["e" /* getAllObjects */])(element);

      for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        var objectComponent = object.component;

        if (objectComponent) {
          if (objectComponent instanceof UIComponent) {
            objectComponent.elementAdded();

            if (objectComponent.windowResize && element.component) {
              objectComponent.windowResize(element.component.windowSize);
            }
          }
        }
      }
    }
  }, {
    key: "callElementRemoved",
    value: function callElementRemoved(element) {
      var component = element.component;

      if (component) {
        if (component instanceof UIComponent) {
          component.elementRemoved();
        }
      }

      var objects = Object(tsunami["e" /* getAllObjects */])(element);

      for (var i = 0; i < objects.length; i++) {
        var object = objects[i];
        var objectComponent = object.component;

        if (objectComponent) {
          if (objectComponent instanceof UIComponent) {
            objectComponent.elementRemoved();
          }
        }
      }
    }
  }, {
    key: "getRect",
    value: function getRect(element, parent, debug) {
      if (!parent) {
        parent = document.body;
      }

      var rectangle = new Rectangle["a" /* default */](0, 0, element.offsetWidth, element.offsetHeight);

      if (element.parentNode) {
        rectangle.position = Object(tsunami_window["b" /* localToGlobal */])(element, parent, null, debug);
      }

      return rectangle;
    }
  }]);

  return UIComponent;
}(Branch);



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Clock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clock; });
/* harmony import */ var _tsunami_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Clock =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Clock, _EventDispatcher);

  function Clock() {
    var _this;

    _classCallCheck(this, Clock);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Clock).call(this));
    _this.index = 0;
    _this.seconds = 0;
    _this.allFrames = 0;
    _this.animationFrame = _this.animationFrame.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Clock, [{
    key: "start",
    value: function start() {
      this.isRunning = true;
      this.animationFrame(0);
      this.fpsTimeout = setTimeout(this.dispatchFrameSeconds.bind(this), 1000);
    }
  }, {
    key: "pause",
    value: function pause() {
      this.isRunning = false;
      clearTimeout(this.fpsTimeout);
    }
  }, {
    key: "animationFrame",
    value: function animationFrame(time) {
      this.time = time;
      this.index++;
      this.dispatchEvent(new _events__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"](Clock.TICK, this.time));

      if (this.isRunning) {
        window.requestAnimationFrame(this.animationFrame);
      }
    }
  }, {
    key: "dispatchFrameSeconds",
    value: function dispatchFrameSeconds() {
      this.allFrames += this.index;
      this.seconds++;
      this.dispatchEvent({
        type: Clock.FPS,
        frames: this.index,
        averageFrames: Math.round(this.allFrames / this.seconds * 10) / 10
      });
      this.index = 0;
      setTimeout(this.dispatchFrameSeconds.bind(this), 1000);
    }
  }], [{
    key: "TICK",
    get: function get() {
      return "tick";
    }
  }, {
    key: "FPS",
    get: function get() {
      return "fps";
    }
  }]);

  return Clock;
}(_tsunami_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);


var clock = new Clock();
clock.start();

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export isMobile */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isTouch; });
/* unused harmony export getCookie */
/* unused harmony export getSearchParams */
/* unused harmony export getRect */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return localToGlobal; });
/* unused harmony export localToGlobalX */
/* unused harmony export localToGlobalY */
/* unused harmony export isHidden */
/* unused harmony export getDeviceMotionDifference */
/* unused harmony export forceProtocol */
/* unused harmony export fileExists */
/* harmony import */ var _geom_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _geom_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


var isMobile = {
  android: navigator.userAgent.match(/Android/i) ? true : false,
  blackBerry: navigator.userAgent.match(/BlackBerry/i) ? true : false,
  iOS: navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false,
  windows: navigator.userAgent.match(/IEMobile/i) ? true : false
};
isMobile.any = isMobile.android || isMobile.blackBerry || isMobile.iOS || isMobile.windows;
var isTouch = "ontouchend" in window;
function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }

  return "";
}
function getSearchParams(url, dontDecodeURI) {
  var obj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (!url) {
    url = window.location.href;
  }

  if (url.indexOf('?') != -1) {
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

    for (var i = 0; i < hashes.length; i++) {
      var string = hashes[i];
      var equalIndex = string.indexOf("=");

      if (equalIndex != -1) {
        var hash = []; //let hash = hashes[i].split('=');

        hash[0] = string.substr(0, equalIndex);
        hash[1] = string.substr(equalIndex + 1);

        if (dontDecodeURI) {
          obj[hash[0]] = hash[1];
        } else {
          obj[hash[0]] = decodeURI(hash[1]);
        }
      } else {
        obj[string] = null;
      }
    }
  }

  return obj;
}
function getRect() {
  var rectangle = new _geom_Rectangle__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]();
  rectangle.width = window.innerWidth;
  rectangle.height = window.innerHeight;
  return rectangle;
}
function localToGlobal(element, root, point) {
  var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!point) {
    point = new _geom_Point__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
  }

  while (element && element != root) {
    //point.x += element.offsetLeft - element.parentNode.scrollLeft;
    //point.y += element.offsetTop - element.parentNode.scrollTop;
    // if (debug) {
    // 	console.log("localToGlobal element", element.className, element.offsetTop);
    // }
    point.x += element.offsetLeft;
    point.y += element.offsetTop;
    element = element.parentNode;
  }

  return point;
}
function localToGlobalX(element, root) {
  var x = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  while (element != root) {
    // if (debug) {
    // 	console.log("element", element.className, element.offsetLeft);
    // }
    x += element.offsetLeft;
    element = element.parentNode;
  }

  return x;
}
function localToGlobalY(element, root) {
  var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var debug = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  while (element != root) {
    // if (debug) {
    // 	console.log("element", element.nodeName, element.className, element.offsetTop);
    // }
    y += element.offsetTop;
    element = element.parentNode;
  }

  return y;
}
function isHidden() {
  return document[window.hidden];
}
var devideOrientation = "";
var deviceDirection = "";
function getDeviceMotionDifference(event) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var devideOrientation = "landscape";
  var deviceDirection = "up";
  var x = 0;
  var y = 0;

  if (height > width) {
    devideOrientation = "portrait";
  }

  if (devideOrientation == "portrait") {
    if (event.accelerationIncludingGravity.y > 0) {
      deviceDirection = "down";
    }

    x = event.accelerationIncludingGravity.x;
    y = event.accelerationIncludingGravity.z;
  }

  if (devideOrientation == "landscape") {
    if (event.accelerationIncludingGravity.x > 0) {
      deviceDirection = "down";
    }

    x = event.accelerationIncludingGravity.y;
    y = event.accelerationIncludingGravity.z;
  }

  if (devideOrientation != devideOrientation || deviceDirection != deviceDirection) {
    devideOrientation = devideOrientation;
    deviceDirection = deviceDirection;
    this.initialAccelerationIncludingGravity = {
      x: x,
      y: y
    };
  }

  var diff = {
    x: x - this.initialAccelerationIncludingGravity.x,
    y: y - this.initialAccelerationIncludingGravity.y
  };
  return diff;
}
function forceProtocol(url, protocol) {
  var isHttps = protocol.indexOf("https") != -1;
  var urlIsHttps = url.indexOf("https") != -1;

  if (isHttps && !urlIsHttps) {
    url = url.split("http").join("https");
  } else if (!isHttps && urlIsHttps) {
    url = url.split("https").join("http");
  }

  return url;
}
function fileExists(url) {
  var req = new XMLHttpRequest();
  req.open('HEAD', url, false);
  req.send();
  return req.status !== 404;
}

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDispatcher; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventDispatcher =
/*#__PURE__*/
function () {
  function EventDispatcher() {
    _classCallCheck(this, EventDispatcher);

    this.listeners = [];
    this._debug = false;
  }

  _createClass(EventDispatcher, [{
    key: "addEventListener",
    value: function addEventListener(type, func) {
      this.listeners.push({
        type: type,
        func: func
      });
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, func) {
      var newListeners = [];

      for (var i = 0; i < this.listeners.length; i++) {
        var listener = this.listeners[i];

        if (listener.type == type && listener.func == func) {} else {
          newListeners.push(listener);
        }
      }

      this.listeners = newListeners;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      event.target = this;

      if (!event.currentTarget) {
        event.currentTarget = this;
      }

      var listeners = this.listeners.slice();

      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];

        if (listener.type == event.type) {
          var index = this.listeners.indexOf(listener);

          if (index != -1) {
            listener.func(event);
          }
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.listeners = [];
    }
  }, {
    key: "debug",
    set: function set(value) {
      this._debug = value;
    },
    get: function get() {
      return this._debug;
    }
  }]);

  return EventDispatcher;
}();



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rectangle; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Rectangle =
/*#__PURE__*/
function () {
  function Rectangle() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    _classCallCheck(this, Rectangle);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  _createClass(Rectangle, [{
    key: "contains",
    value: function contains(point) {
      var hit = point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height ? true : false;
      return hit;
    }
  }, {
    key: "intersects",
    value: function intersects(rect) {
      return rect.x + rect.width > this.x && rect.y + rect.height > this.y && rect.x < this.x + this.width && rect.y < this.y + this.height;
    }
  }, {
    key: "intersect",
    value: function intersect(b) {
      var a = this;
      var x = Math.max(a.x, b.x);
      var num1 = Math.min(a.x + a.width, b.x + b.width);
      var y = Math.max(a.y, b.y);
      var num2 = Math.min(a.y + a.height, b.y + b.height);
      var result;

      if (num1 >= x && num2 >= y) {
        result = new Rectangle(x, y, num1 - x, num2 - y);
      } else {
        result = new Rectangle();
      }

      return result;
    }
  }, {
    key: "equals",
    value: function equals(rect) {
      return this.x == rect.x && this.y == rect.y && this.width == rect.width && this.height == rect.height;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Rectangle(this.x, this.y, this.width, this.height);
    }
  }, {
    key: "copyFrom",
    value: function copyFrom(rect) {
      this.x = rect.x;
      this.y = rect.y;
      this.width = rect.width;
      this.height = rect.height;
    }
  }, {
    key: "toString",
    value: function toString() {
      return "[Rectangle" + " x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
    }
  }, {
    key: "scaleWidth",
    value: function scaleWidth(height) {
      return new Rectangle(this.x, this.y, height * this.widthToHeight, height);
    }
  }, {
    key: "scaleHeight",
    value: function scaleHeight(width) {
      return new Rectangle(this.x, this.y, width, width * this.heightToWidth);
    }
  }, {
    key: "scaleToFillRect",
    value: function scaleToFillRect(rect) {
      // let scaled = this.scaleHeight(rect.width);
      //
      // if (scaled.height < rect.height) {
      // 	scaled = this.scaleWidth(rect.height);
      // }
      var amount = this.getScaleToFill(rect);
      return this.scale(amount, amount);
    }
  }, {
    key: "scaleToFitRect",
    value: function scaleToFitRect(rect) {
      // let scaled = this.scaleHeight(rect.width);
      //
      // if (scaled.height > rect.height) {
      // 	scaled = this.scaleWidth(rect.height);
      // }
      // scaled.x = (rect.width - scaled.width) / 2;
      // scaled.y = (rect.height - scaled.height) / 2;
      var amount = this.getScaleToFitRect(rect);
      return this.scale(amount, amount);
    }
  }, {
    key: "scale",
    value: function scale(x, y) {
      return new Rectangle(this.x, this.y, this.width * x, this.height * y);
    }
  }, {
    key: "scaleToArea",
    value: function scaleToArea(area) {
      var height = Math.sqrt(area / this.widthToHeight);
      var width = area / height;
      return new Rectangle(0, 0, width, height);
    }
  }, {
    key: "getScaleToFill",
    value: function getScaleToFill(rect) {
      var scale;

      if (this.widthToHeight > rect.widthToHeight) {
        scale = rect.height / this.height;
      } else {
        scale = rect.width / this.width;
      }

      return scale;
    }
  }, {
    key: "getScaleToFitRect",
    value: function getScaleToFitRect(rect) {
      var scale;

      if (this.widthToHeight > rect.widthToHeight) {
        scale = rect.width / this.width;
      } else {
        scale = rect.height / this.height;
      }

      return scale;
    }
  }, {
    key: "position",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this.x, this.y);
    },
    set: function set(point) {
      this.x = point.x;
      this.y = point.y;
    }
  }, {
    key: "area",
    get: function get() {
      return this.width * this.height;
    }
  }, {
    key: "size",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this.width, this.height);
    },
    set: function set(point) {
      this.width = point.x;
      this.height = point.y;
    }
  }, {
    key: "center",
    get: function get() {
      return new _Point__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](this.x + this.width / 2, this.y + this.height / 2);
    }
  }, {
    key: "widthToHeight",
    get: function get() {
      return this.width / this.height;
    }
  }, {
    key: "heightToWidth",
    get: function get() {
      return this.height / this.width;
    }
  }, {
    key: "isPortrait",
    get: function get() {
      return this.width <= this.height;
    }
  }, {
    key: "isLandscape",
    get: function get() {
      return this.height <= this.width;
    }
  }]);

  return Rectangle;
}();



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooleanData; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var BooleanData =
/*#__PURE__*/
function (_Data) {
  _inherits(BooleanData, _Data);

  function BooleanData() {
    var _this;

    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    _classCallCheck(this, BooleanData);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BooleanData).call(this));
    _this.value = value;
    return _this;
  }

  _createClass(BooleanData, [{
    key: "toString",
    value: function toString() {
      return this.value.toString();
    }
  }, {
    key: "reset",
    value: function reset() {
      this.value = true;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.validation instanceof _Validation__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) {
        this.validation.destroy();
      }

      this.validation = null;
      return _get(_getPrototypeOf(BooleanData.prototype), "destroy", this).call(this);
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      if (value != this._value) {
        this._value = value;
        this.dispatchEvent({
          type: _Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CHANGE,
          value: this._value
        });
      }
    }
  }]);

  return BooleanData;
}(_Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Validation; });
/* harmony import */ var _BooleanData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Validation =
/*#__PURE__*/
function (_BooleanData) {
  _inherits(Validation, _BooleanData);

  function Validation(data) {
    var _this;

    var methods = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Validation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Validation).call(this));
    _this.dataChangeBind = _this.validate.bind(_assertThisInitialized(_this));
    _this.methods = methods;
    _this.data = data;
    return _this;
  }

  _createClass(Validation, [{
    key: "validate",
    value: function validate(event) {
      var isValid = false;

      if (this.data) {
        for (var i = 0; i < this.methods.length; i++) {
          var method = this.methods[i];
          isValid = method(this.data.value);
        }
      }

      this.value = isValid;
    }
  }, {
    key: "addValidation",
    value: function addValidation(method) {
      this.methods.push(method);
      this.validate();
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.methods = null;
      this.data = null;
      return _get(_getPrototypeOf(Validation.prototype), "destroy", this).call(this);
    }
  }, {
    key: "data",
    get: function get() {
      return this._data;
    },
    set: function set(value) {
      if (this._data) {
        this._data.removeEventListener(_Data__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].CHANGE, this.dataChangeBind);
      }

      this._data = value;

      if (this._data) {
        this._data.addEventListener(_Data__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].CHANGE, this.dataChangeBind);
      }

      this.validate();
    }
  }]);

  return Validation;
}(_BooleanData__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);



/***/ }),
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tween; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _EventDispatcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _Clock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Tween =
/*#__PURE__*/
function (_EventDispatcher) {
  _inherits(Tween, _EventDispatcher);

  function Tween(startTime, duration, tweenProps, updateHandler, completeHandler) {
    var _this;

    _classCallCheck(this, Tween);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tween).call(this));
    _this.tick = _this.tick.bind(_assertThisInitialized(_this));
    _this.startTime = startTime;
    _this.duration = duration;
    _this.tweenProps = tweenProps;
    _this.updateHandler = updateHandler;
    _this.completeHandler = completeHandler;
    _this._startTime = startTime;
    _this._duration = duration;
    _this._tweenTime = 0;
    _this.forceUpdate = false;
    return _this;
  }

  _createClass(Tween, [{
    key: "start",
    value: function start() {
      var tween = this;
      var promise;

      if (Promise) {
        promise = new Promise(function (resolve, reject) {
          var tweenComplete = function tweenComplete(event) {
            tween.removeEventListener(Tween.COMPLETE, tweenComplete);
            resolve(tween);
          };

          tween.addEventListener(Tween.COMPLETE, tweenComplete);
        });
      }

      this.clockStartTime = NaN;
      _Clock__WEBPACK_IMPORTED_MODULE_2__[/* clock */ "a"].addEventListener(_Clock__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].TICK, this.tick);
      return promise;
    }
  }, {
    key: "tick",
    value: function tick(event) {
      if (isNaN(this.clockStartTime)) {
        this.clockStartTime = _Clock__WEBPACK_IMPORTED_MODULE_2__[/* clock */ "a"].time;
      }

      var clockTime = (_Clock__WEBPACK_IMPORTED_MODULE_2__[/* clock */ "a"].time - this.clockStartTime) / 1000;

      if (clockTime >= this.startTime + this.duration) {
        clockTime = this.startTime + this.duration;
        this.time = clockTime;
        this.stop();

        if (this.completeHandler) {
          this.completeHandler();
        }

        this.dispatchEvent({
          type: Tween.COMPLETE,
          target: this
        });
      } else {
        this.time = clockTime;
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      _Clock__WEBPACK_IMPORTED_MODULE_2__[/* clock */ "a"].removeEventListener(_Clock__WEBPACK_IMPORTED_MODULE_2__[/* default */ "b"].TICK, this.tick);
      this.dispatchEvent({
        type: Tween.COMPLETE,
        target: this
      });
    }
  }, {
    key: "startTime",
    get: function get() {
      return this._startTime;
    },
    set: function set(value) {
      this._startTime = value;
      this.dispatchEvent(new _events__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](Tween.CHANGE));
    }
  }, {
    key: "duration",
    get: function get() {
      return this._duration;
    },
    set: function set(value) {
      this._duration = value;
      this.dispatchEvent(new _events__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"](Tween.CHANGE));
    }
  }, {
    key: "time",
    get: function get() {
      return this._time;
    },
    set: function set(value) {
      value = Math.min(this.startTime + this.duration, value);
      value = Math.max(0, value);
      this._time = value;
      var tweenTime = value - this.startTime;
      tweenTime = Math.round(tweenTime * 1000) / 1000;
      tweenTime = Math.max(tweenTime, 0);
      tweenTime = Math.min(tweenTime, this.duration);

      if (tweenTime != this._tweenTime || this.forceUpdate) {
        this._tweenTime = tweenTime;

        for (var i = 0; i < this.tweenProps.length; i++) {
          var tweenProp = this.tweenProps[i];
          tweenProp.calculate(tweenTime, this.duration);
        }

        var updateEvent = {
          type: Tween.UPDATE,
          target: this,
          currentTarget: this
        };

        if (this.updateHandler) {
          this.updateHandler(updateEvent);
        }

        this.dispatchEvent(updateEvent);
      }
    }
  }], [{
    key: "COMPLETE",
    get: function get() {
      return "complete";
    }
  }, {
    key: "UPDATE",
    get: function get() {
      return "update";
    }
  }, {
    key: "CHANGE",
    get: function get() {
      return "change";
    }
  }]);

  return Tween;
}(_EventDispatcher__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Easing; });
/* unused harmony export Quadratic */
/* unused harmony export Cubic */
/* unused harmony export Quartic */
/* unused harmony export Quintic */
/* unused harmony export Sine */
/* unused harmony export Exponential */
/* unused harmony export Circular */
/* unused harmony export Elastic */
/* unused harmony export Back */
/* unused harmony export Bounce */
/* unused harmony export Linear */
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Easing =
/*#__PURE__*/
function () {
  function Easing() {
    _classCallCheck(this, Easing);

    this.easeIn = this.easeIn.bind(this);
    this.easeOut = this.easeOut.bind(this);
    this.easeInOut = this.easeInOut.bind(this);
  }

  _createClass(Easing, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {}
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {}
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {}
  }]);

  return Easing;
}();


var Quadratic =
/*#__PURE__*/
function (_Easing) {
  _inherits(Quadratic, _Easing);

  function Quadratic() {
    _classCallCheck(this, Quadratic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Quadratic).apply(this, arguments));
  }

  _createClass(Quadratic, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return c * (t /= d) * t + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t + b;
      return -c / 2 * (--t * (t - 2) - 1) + b;
    }
  }]);

  return Quadratic;
}(Easing);
var Cubic =
/*#__PURE__*/
function (_Easing2) {
  _inherits(Cubic, _Easing2);

  function Cubic() {
    _classCallCheck(this, Cubic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Cubic).apply(this, arguments));
  }

  _createClass(Cubic, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return c * (t /= d) * t * t + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  }]);

  return Cubic;
}(Easing);
var Quartic =
/*#__PURE__*/
function (_Easing3) {
  _inherits(Quartic, _Easing3);

  function Quartic() {
    _classCallCheck(this, Quartic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Quartic).apply(this, arguments));
  }

  _createClass(Quartic, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  }]);

  return Quartic;
}(Easing);
var Quintic =
/*#__PURE__*/
function (_Easing4) {
  _inherits(Quintic, _Easing4);

  function Quintic() {
    _classCallCheck(this, Quintic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Quintic).apply(this, arguments));
  }

  _createClass(Quintic, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  }]);

  return Quintic;
}(Easing);
var Sine =
/*#__PURE__*/
function (_Easing5) {
  _inherits(Sine, _Easing5);

  function Sine() {
    _classCallCheck(this, Sine);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sine).apply(this, arguments));
  }

  _createClass(Sine, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    }
  }]);

  return Sine;
}(Easing);
var Exponential =
/*#__PURE__*/
function (_Easing6) {
  _inherits(Exponential, _Easing6);

  function Exponential() {
    _classCallCheck(this, Exponential);

    return _possibleConstructorReturn(this, _getPrototypeOf(Exponential).apply(this, arguments));
  }

  _createClass(Exponential, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      if (t == 0) return b;
      if (t == d) return b + c;
      if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  }]);

  return Exponential;
}(Easing);
var Circular =
/*#__PURE__*/
function (_Easing7) {
  _inherits(Circular, _Easing7);

  function Circular() {
    _classCallCheck(this, Circular);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circular).apply(this, arguments));
  }

  _createClass(Circular, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  }]);

  return Circular;
}(Easing);
var Elastic =
/*#__PURE__*/
function (_Easing8) {
  _inherits(Elastic, _Easing8);

  function Elastic() {
    var _this;

    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;

    _classCallCheck(this, Elastic);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Elastic).call(this));
    _this.s = s;
    return _this;
  }

  _createClass(Elastic, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      var s = this.s;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * .3;

      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(c / a);

      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      var s = this.s;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d) == 1) return b + c;
      if (!p) p = d * .3;

      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(c / a);

      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      var s = this.s;
      var p = 0;
      var a = c;
      if (t == 0) return b;
      if ((t /= d / 2) == 2) return b + c;
      if (!p) p = d * (.3 * 1.5);

      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else var s = p / (2 * Math.PI) * Math.asin(c / a);

      if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    }
  }]);

  return Elastic;
}(Easing);
var Back =
/*#__PURE__*/
function (_Easing9) {
  _inherits(Back, _Easing9);

  function Back() {
    var _this2;

    var s = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.70158;

    _classCallCheck(this, Back);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Back).call(this));
    _this2.s = s;
    return _this2;
  }

  _createClass(Back, [{
    key: "easeIn",
    value: function easeIn(t, b, c, d, s) {
      if (s == undefined) s = this.s;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    }
  }, {
    key: "easeOut",
    value: function easeOut(t, b, c, d, s) {
      if (s == undefined) s = this.s;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d, s) {
      if (s == undefined) s = this.s;
      if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  }]);

  return Back;
}(Easing);
var Bounce =
/*#__PURE__*/
function (_Easing10) {
  _inherits(Bounce, _Easing10);

  function Bounce() {
    _classCallCheck(this, Bounce);

    return _possibleConstructorReturn(this, _getPrototypeOf(Bounce).apply(this, arguments));
  }

  _createClass(Bounce, [{
    key: "easeOut",
    value: function easeOut(t, b, c, d) {
      if ((t /= d) < 1 / 2.75) {
        return c * (7.5625 * t * t) + b;
      } else if (t < 2 / 2.75) {
        return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
      } else if (t < 2.5 / 2.75) {
        return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
      }
    }
  }, {
    key: "easeIn",
    value: function easeIn(t, b, c, d) {
      return c - this.easeOut(d - t, 0, c, d) + b;
    }
  }, {
    key: "easeInOut",
    value: function easeInOut(t, b, c, d) {
      if (t < d / 2) return this.easeIn(t * 2, 0, c, d) * .5 + b;else return this.easeOut(t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
  }]);

  return Bounce;
}(Easing);
var Linear =
/*#__PURE__*/
function () {
  function Linear() {
    _classCallCheck(this, Linear);

    this.ease = this.ease.bind(this);
  }

  _createClass(Linear, [{
    key: "ease",
    value: function ease(t, b, c, d) {
      return c * t / d + b;
    }
  }]);

  return Linear;
}();
Easing.quadratic = new Quadratic();
Easing.cubic = new Cubic();
Easing.quartic = new Quartic();
Easing.quintic = new Quintic();
Easing.sine = new Sine();
Easing.exponential = new Exponential();
Easing.circular = new Circular();
Easing.elastic = new Elastic();
Easing.back = new Back();
Easing.bounce = new Bounce();
Easing.linear = new Linear();

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export awaitEvent */
/* unused harmony export awaitTransition */
/* unused harmony export awaitAnimation */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return awaitTimeout; });
/* unused harmony export awaitCallback */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return awaitAnimationFrame; });
/* unused harmony export awaitVideoFirstFrame */
function awaitEvent(dispatcher, eventName, stopPropagation, stopImmediatePropagation, preventDefault) {
  var promise;
  promise = new Promise(function (resolve, reject) {
    var eventHandler = function eventHandler(event) {
      event.stopPropagation();

      if (stopPropagation) {
        event.stopPropagation();
      }

      if (stopImmediatePropagation) {
        event.stopImmediatePropagation();
      }

      if (preventDefault) {
        event.preventDefault();
      }

      dispatcher.removeEventListener(eventName, eventHandler);
      resolve(event);
    };

    dispatcher.addEventListener(eventName, eventHandler);
  });
  return promise;
}
function awaitTransition(dispatcher, cssProperties) {
  var promise;
  promise = new Promise(function (resolve, reject) {
    var eventName = "transitionend";
    var eventNames = {
      'OTransition': 'otransitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (var i in eventNames) {
      if (document.body.style[i] !== undefined) {
        eventName = eventNames[i];
      }
    }

    var eventHandler = function eventHandler(event) {
      var isProperty;

      for (var _i = 0; _i < cssProperties.length; _i++) {
        var prop = cssProperties[_i];

        if (prop === event.propertyName) {
          isProperty = true;
        }
      }

      if (!isProperty) {
        return;
      }

      event.stopPropagation(); //event.stopImmediatePropagation();
      //event.preventDefault();

      dispatcher.removeEventListener(eventName, eventHandler);
      resolve(event);
    };

    dispatcher.addEventListener(eventName, eventHandler);
  });
  return promise;
}
function awaitAnimation(dispatcher, animationName) {
  var promise;
  promise = new Promise(function (resolve, reject) {
    var eventName = "animationend";
    var eventNames = {
      'OTransition': 'oanimationend',
      'MozTransition': 'moznimationend',
      'WebkitTransition': 'webkitAnimationEnd'
    };

    for (var i in eventNames) {
      if (document.body.style[i] !== undefined) {
        eventName = eventNames[i];
      }
    }

    var eventHandler = function eventHandler(event) {
      if (animationName != event.animationName || dispatcher != event.target) {
        return;
      }

      event.stopPropagation();
      event.stopImmediatePropagation();
      event.preventDefault();
      dispatcher.removeEventListener(eventName, eventHandler);
      resolve(event);
    };

    dispatcher.addEventListener(eventName, eventHandler);
  });
  return promise;
}
function awaitTimeout() {
  var milliseconds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if (isNaN(milliseconds) || milliseconds <= 0) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve, reject) {
      var timeout = setTimeout(function () {
        resolve();
      }, milliseconds);
    });
  }
}
function awaitCallback(target, method) {
  var promise;
  promise = new Promise(function (resolve, reject) {
    target[method] = function () {
      target[method] = function () {};

      resolve(arguments);
    };
  });
  return promise;
}
function awaitAnimationFrame() {
  var total = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  total = Math.max(1, Math.round(total));
  var count = 0;
  var promise;
  promise = new Promise(function (resolve, reject) {
    function animationFrame() {
      count++;

      if (count >= total) {
        resolve();
      } else {
        window.requestAnimationFrame(animationFrame);
      }
    }

    window.requestAnimationFrame(animationFrame);
  });
  return promise;
}
function awaitVideoFirstFrame(video) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;
  var debug = arguments.length > 2 ? arguments[2] : undefined;
  var loadedmetadata = awaitEvent(video, "loadedmetadata");
  var loadedmetadataTimeout = awaitTimeout(timeout);
  var promise = Promise.race([loadedmetadata]);
  return promise.then(function (event) {
    if (debug) {
      console.log("loadedmetadata");
    }

    var loadeddataPromise = awaitEvent(video, "loadeddata");
    var playPromise = video.play();

    if (!playPromise) {
      playPromise = loadeddataPromise;
    }

    var playPromiseTimeout = awaitTimeout(timeout);
    var promise = Promise.race([playPromise]);
    return promise.then(function () {
      if (debug) {
        console.log("playPromise or loadeddata");
      }

      video.pause();
      return video;
    });
  });
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TweenProperty; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TweenProperty =
/*#__PURE__*/
function () {
  function TweenProperty(target, name, startValue, endValue, ease) {
    var roundingValue = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10000;
    var debug = arguments.length > 6 ? arguments[6] : undefined;

    _classCallCheck(this, TweenProperty);

    this.target = target;
    this.name = name;
    this.startValue = startValue;
    this.endValue = endValue;
    this.ease = ease;
    this.roundingValue = roundingValue;
    this.debug = debug;
  }

  _createClass(TweenProperty, [{
    key: "calculate",
    value: function calculate(time, duration) {
      var value = this.ease(time, this.startValue, this.endValue - this.startValue, duration);
      this.target[this.name] = Math.round(value * this.roundingValue) / this.roundingValue;
    }
  }]);

  return TweenProperty;
}();



/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIButton; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _UIComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _tsunami__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { set = Reflect.set; } else { set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var UIButton =
/*#__PURE__*/
function (_UIComponent) {
  _inherits(UIButton, _UIComponent);

  function UIButton(element) {
    var _this;

    _classCallCheck(this, UIButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIButton).call(this, element));

    _this.onRelease = function () {};

    _this.clickHandler = _this.clickHandler.bind(_assertThisInitialized(_this));
    _this.pressHandler = _this.pressHandler.bind(_assertThisInitialized(_this));

    _this.element.addEventListener(_events__WEBPACK_IMPORTED_MODULE_0__[/* events */ "b"].click, _this.clickHandler);

    _this.element.addEventListener(_events__WEBPACK_IMPORTED_MODULE_0__[/* events */ "b"].mousedown, _this.pressHandler);

    return _this;
  }

  _createClass(UIButton, [{
    key: "pressHandler",
    value: function pressHandler(event) {
      this.element.setAttribute("data-event", "press");
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(event) {
      this.element.setAttribute("data-event", "click");

      if (this.onRelease) {
        this.onRelease(event);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener(_events__WEBPACK_IMPORTED_MODULE_0__[/* events */ "b"].click, this.clickHandler);
      this.element.removeEventListener(_events__WEBPACK_IMPORTED_MODULE_0__[/* events */ "b"].mousedown, this.pressHandler);

      _get(_getPrototypeOf(UIButton.prototype), "destroy", this).call(this);
    }
  }, {
    key: "scope",
    get: function get() {
      return _get(_getPrototypeOf(UIButton.prototype), "scope", this);
    },
    set: function set(value) {
      var _this2 = this;

      _set(_getPrototypeOf(UIButton.prototype), "scope", value, this, true);

      var click = this.element.getAttribute("data-click");

      if (click) {
        this.onRelease = function (event) {
          var method = Object(_tsunami__WEBPACK_IMPORTED_MODULE_2__[/* evalProperty */ "d"])(click, _this2.scope);
          method(event);
        };
      }
    }
  }]);

  return UIButton;
}(_UIComponent__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./js/tsunami/components/UIComponent.js + 2 modules
var UIComponent = __webpack_require__(6);

// EXTERNAL MODULE: ./js/tsunami/tsunami.js
var tsunami = __webpack_require__(1);

// EXTERNAL MODULE: ./js/tsunami/data/ArrayData.js + 1 modules
var ArrayData = __webpack_require__(5);

// EXTERNAL MODULE: ./js/tsunami/data/Data.js
var Data = __webpack_require__(0);

// EXTERNAL MODULE: ./js/tsunami/events.js
var events = __webpack_require__(3);

// CONCATENATED MODULE: ./js/tsunami/Scope.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Scope =
/*#__PURE__*/
function () {
  function Scope(data) {
    var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : NaN;
    var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : NaN;

    _classCallCheck(this, Scope);

    this.data = data;
    this.parent = parent;
    this.index = index;

    if (!isNaN(index)) {
      this.index1 = index + 1;
    }

    this.length = length;
  }

  _createClass(Scope, [{
    key: "toString",
    value: function toString() {
      return "Scope" + " " + this.parent;
    }
  }, {
    key: "root",
    get: function get() {
      var root = this;
      var scope = this;

      while (scope) {
        scope = scope.parent;

        if (scope) {
          root = scope;
        }
      }

      return root;
    }
  }]);

  return Scope;
}();


// CONCATENATED MODULE: ./js/tsunami/components/UIList.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UIList_UIList; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function UIList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UIList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UIList_createClass(Constructor, protoProps, staticProps) { if (protoProps) UIList_defineProperties(Constructor.prototype, protoProps); if (staticProps) UIList_defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UIList_set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { UIList_set = Reflect.set; } else { UIList_set = function set(target, property, value, receiver) { var base = _superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return UIList_set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = UIList_set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var UIList_UIList =
/*#__PURE__*/
function (_UIComponent) {
  _inherits(UIList, _UIComponent);

  function UIList(element) {
    var _this;

    UIList_classCallCheck(this, UIList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIList).call(this, element));
    _this.template = "<li><span is=\"ui-text\">[[item]]</span></li>";
    _this.templates = {};
    _this._provider = [];
    _this._providerChange = _this._providerChange.bind(_assertThisInitialized(_this));
    _this._providerAdd = _this._providerAdd.bind(_assertThisInitialized(_this));
    _this._providerRemove = _this._providerRemove.bind(_assertThisInitialized(_this));
    _this._providerSort = _this._providerSort.bind(_assertThisInitialized(_this));
    var templates = [];

    if (_this.element) {
      _this.children.map(function (el) {
        if (el.nodeName.toUpperCase() == "TEMPLATE") {
          templates.push(el);
        }
      });
    }

    for (var i = 0; i < templates.length; i++) {
      var template = templates[i];
      var type = template.getAttribute("data-type") || "*";
      _this.templates[type] = template.innerHTML;
    }

    return _this;
  }

  UIList_createClass(UIList, [{
    key: "_removeElements",
    value: function _removeElements(array) {
      for (var i = 0; i < array.length; i++) {
        var element = array[i];

        if (this.isAdded) {
          UIComponent["a" /* default */].callElementRemoved(element);
        }
      }

      Object(tsunami["c" /* destroyElements */])(array);
    }
  }, {
    key: "_addElements",
    value: function _addElements(array) {
      var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      for (var i = 0; i < array.length; i++) {
        var data = array[i];
        var scope = new Scope(data, this.scope, index + i, array.length);
        var template = this.getTemplateForModel(data);

        if (!template) {
          throw new Error("UIList component for " + this.element.outerHTML + " returned no template");
        }

        var element = Object(tsunami["f" /* importTemplate */])(template, scope); // element.model = model;
        // if(element.component instanceof UIComponent) {
        // 	element.component.model = model;
        // }

        this.appendChildAt(element, index + i);

        if (this.isAdded) {
          UIComponent["a" /* default */].callElementAdded(element);
        }
      }

      this.dispatchEvent(new events["a" /* default */]("listChange", array));
    }
  }, {
    key: "getModelType",
    value: function getModelType(model) {
      var type = model.type;

      if (type instanceof Data["a" /* default */]) {
        type = type.value;
      }

      return type;
    }
  }, {
    key: "getTemplateForModel",
    value: function getTemplateForModel(model) {
      var selectedTemplate;

      if (model) {
        var type = this.getModelType(model);
        selectedTemplate = this.templates[type];
      }

      if (!selectedTemplate) {
        selectedTemplate = this.templates["*"] || this.template;
      }

      return selectedTemplate;
    }
  }, {
    key: "_providerChange",
    value: function _providerChange(event) {
      var children = this.children.slice();

      this._removeElements(children);

      this._addElements(this._provider.value);
    }
  }, {
    key: "_providerAdd",
    value: function _providerAdd(event) {
      var addedElements = [];
      var start = event.index;
      var end = event.index + event.total;

      for (var i = start; i < end; i++) {
        var model = this.dataProvider.value[i];
        addedElements.push(model);
      }

      this._addElements(addedElements, start);
    }
  }, {
    key: "_providerRemove",
    value: function _providerRemove(event) {
      var children = this.children;
      var removedElements = [];
      var start = event.index;
      var end = event.index + event.total;

      for (var i = start; i < end; i++) {
        removedElements.push(children[i]);
      } // this.children.splice(event.index, event.total);


      this._removeElements(removedElements);
    }
  }, {
    key: "_providerSort",
    value: function _providerSort(event) {
      for (var i = 0; i < this.dataProvider.value.length; i++) {
        var model = this.dataProvider.value[i];
        var child = this.getElementByModel(model);

        if (child) {
          this.element.appendChild(child);
        }
      }
    }
  }, {
    key: "getElementByModel",
    value: function getElementByModel(model) {
      var element;
      var children = this.children;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child.model == model) {
          element = child;
        }
      }

      return element;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.dataProvider = null;

      _get(_getPrototypeOf(UIList.prototype), "destroy", this).call(this);
    }
  }, {
    key: "scope",
    get: function get() {
      return _get(_getPrototypeOf(UIList.prototype), "scope", this);
    },
    set: function set(value) {
      _set(_getPrototypeOf(UIList.prototype), "scope", value, this, true);

      var dataProvider = this.element.getAttribute("data-provider");

      if (dataProvider) {
        this.dataProvider = Object(tsunami["d" /* evalProperty */])(dataProvider, value);
      }
    }
  }, {
    key: "dataProvider",
    get: function get() {
      return this._provider;
    },
    set: function set(value) {
      if (this.debug) {
        console.log("dataProvider", value);
      }

      if (this._provider) {
        if (this._provider instanceof ArrayData["a" /* default */]) {
          this._provider.removeEventListener("add", this._providerAdd);

          this._provider.removeEventListener("remove", this._providerRemove);

          this._provider.removeEventListener("reset", this._providerChange);

          this._provider.removeEventListener("sort", this._providerSort);
        }
      }

      this._removeElements(this.children.slice());

      this._provider = value;

      if (this._provider) {
        if (this._provider instanceof ArrayData["a" /* default */]) {
          this._provider.addEventListener("add", this._providerAdd);

          this._provider.addEventListener("remove", this._providerRemove);

          this._provider.addEventListener("reset", this._providerChange);

          this._provider.addEventListener("sort", this._providerSort);

          this._addElements(this._provider.value);
        } else {
          this._addElements(this._provider);
        }
      } // this.model = this.model;

    }
  }]);

  return UIList;
}(UIComponent["a" /* default */]);



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayDataOperation; });
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _ArrayData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _tsunami__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var _Validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ArrayDataOperation =
/*#__PURE__*/
function (_Data) {
  _inherits(ArrayDataOperation, _Data);

  function ArrayDataOperation() {
    var _this;

    var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ArrayDataOperation.ADD;
    var arrayData = arguments.length > 1 ? arguments[1] : undefined;
    var modifiers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

    _classCallCheck(this, ArrayDataOperation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ArrayDataOperation).call(this));

    if (!arrayData) {
      arrayData = new _ArrayData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]();
    }

    _this.modifiers = modifiers;
    _this.itemChangeHandler = _this.itemChangeHandler.bind(_assertThisInitialized(_this));
    _this.operation = operation;
    _this.arrayData = arrayData;
    return _this;
  }

  _createClass(ArrayDataOperation, [{
    key: "itemChangeHandler",
    value: function itemChangeHandler(event) {
      var newValue;
      var array = this.arrayData;

      if (array) {
        if (this._array instanceof _ArrayData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) {
          array = this.arrayData.value;
        }

        if (array.length > 0) {
          var firstItem = array[0];
          newValue = firstItem;

          if (firstItem instanceof _Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
            newValue = firstItem.value;
          }

          for (var i = 1; i < array.length; i++) {
            var item = array[i];
            var itemValue = item;

            if (item instanceof _Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
              itemValue = item.value;
            }

            newValue = this.operation(newValue, itemValue);
          }
        }
      } // if(this.debug) {
      // 	console.log("ArrayDataOperation.itemChangeHandler newValue", newValue);
      // }


      this.value = newValue; // if (this._value != newValue) {
      // 	this._value = newValue;
      // 	this.dispatchEvent(new BaseEvent(Data.CHANGE, this.value));
      // }
    }
  }, {
    key: "parseString",
    value: function parseString(string, scope) {
      var chunks = string.split("[[");
      var array = [];

      for (var i = 0; i < chunks.length; i++) {
        var chunk = chunks[i];

        if (chunk.indexOf("]]") == -1) {
          array.push(chunk);
        } else {
          var chunkArray = chunk.split("]]");

          for (var j = 0; j < chunkArray.length; j++) {
            var chunk2 = chunkArray[j];

            if (j == 0) {
              var model = Object(_tsunami__WEBPACK_IMPORTED_MODULE_3__[/* evalProperty */ "d"])(chunk2, scope);
              array.push(model);
            } else {
              array.push(chunk2);
            }
          }
        }
      }

      this.arrayData.value = array;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.arrayData instanceof _Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]) {
        this.arrayData.destroy();
      }

      this.arrayData = null;
      this.modifiers = [];

      if (this.validation instanceof _Validation__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]) {
        this.validation.destroy();
      }

      return _get(_getPrototypeOf(ArrayDataOperation.prototype), "destroy", this).call(this);
    }
  }, {
    key: "arrayData",
    get: function get() {
      return this._array;
    },
    set: function set(value) {
      if (this._array) {
        if (this._array instanceof _ArrayData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) {
          this._array.removeEventListener(_ArrayData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ITEM_CHANGE, this.itemChangeHandler);
        }
      }

      this._array = value;

      if (this._array) {
        if (this._array instanceof _ArrayData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]) {
          this._array.addEventListener(_ArrayData__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].ITEM_CHANGE, this.itemChangeHandler);
        }
      }

      this.itemChangeHandler();
    }
  }, {
    key: "value",
    get: function get() {
      return this._value;
    },
    set: function set(value) {
      for (var i = 0; i < this.modifiers.length; i++) {
        var modifier = this.modifiers[i];
        value = modifier(value);
      }

      if (value != this._value) {
        this._value = value;
        this.dispatchEvent({
          type: _Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].CHANGE,
          value: this._value
        });
      }
    }
  }], [{
    key: "ADD",
    value: function ADD(value1, value2) {
      return value1 + value2;
    }
  }, {
    key: "SUBTRACT",
    value: function SUBTRACT(value1, value2) {
      return value1 - value2;
    }
  }, {
    key: "MULTIPLY",
    value: function MULTIPLY(value1, value2) {
      return value1 * value2;
    }
  }, {
    key: "DIVIDE",
    value: function DIVIDE(value1, value2) {
      return value1 / value2;
    }
  }, {
    key: "MIN",
    value: function MIN(value1, value2) {
      return Math.min(value1, value2);
    }
  }, {
    key: "MAX",
    value: function MAX(value1, value2) {
      return Math.max(value1, value2);
    }
  }]);

  return ArrayDataOperation;
}(_Data__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);



/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Style; });
/* unused harmony export StyleUnits */
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Style =
/*#__PURE__*/
function () {
  function Style(style) {
    _classCallCheck(this, Style);

    this.style = style;
    this.units = new StyleUnits();
    this._transform = "";
    this.updateTransform = this.updateTransform.bind(this);
    this.getTransform = this.getTransform.bind(this);
    this.getTranslate3d = this.getTranslate3d.bind(this);
    this.getRotateX = this.getRotateX.bind(this);
    this.getRotateY = this.getRotateY.bind(this);
    this.getRotateZ = this.getRotateZ.bind(this);
    this.transformBindings = [this.getTransform];
  }

  _createClass(Style, [{
    key: "transformSpace",
    value: function transformSpace() {
      return this.transform ? " " : "";
    }
  }, {
    key: "updateTransform",
    value: function updateTransform() {
      var style = this.style;
      var transform = this.getCalculatedTransform();
      style.msTransform = transform;
      style.webkitTransform = transform;
      style.transform = transform;
      this.setTransform("");
    }
  }, {
    key: "setTransform",
    value: function setTransform(value) {
      this._transform = value;
    }
  }, {
    key: "getTransform",
    value: function getTransform() {
      return this._transform;
    }
  }, {
    key: "getCalculatedTransform",
    value: function getCalculatedTransform() {
      var transform = "";

      for (var i = 0; i < this.transformBindings.length; i++) {
        if (i > 0) {
          transform += " ";
        }

        var method = this.transformBindings[i];
        transform += method();
      }

      return transform;
    }
  }, {
    key: "getTranslate3d",
    value: function getTranslate3d() {
      return "translate3d(" + this.round(this.translateX) + this.units.translateX + ", " + this.round(this.translateY) + this.units.translateY + "," + this.round(this.translateZ) + this.units.translateZ + ")";
    }
  }, {
    key: "getRotateX",
    value: function getRotateX() {
      return "rotateX(" + this.round(this.rotateX) + "deg)";
    }
  }, {
    key: "getRotateY",
    value: function getRotateY() {
      return "rotateY(" + this.round(this.rotateY) + "deg)";
    }
  }, {
    key: "getRotateZ",
    value: function getRotateZ() {
      return "rotateZ(" + this.round(this.rotateZ) + "deg)";
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.style = null;
    }
  }, {
    key: "round",
    value: function round(value) {
      return Math.round(value * 10) / 10;
    }
  }, {
    key: "bottom",
    get: function get() {
      return eval(this.style.bottom.split(this.units.bottom)[0]) || 0;
    },
    set: function set(value) {
      this.style.bottom = value + this.units.bottom;
    }
  }, {
    key: "fontSize",
    get: function get() {
      return eval(this.style.fontSize.split(this.units.fontSize)[0]) || 0;
    },
    set: function set(value) {
      this.style.fontSize = value + this.units.fontSize;
    }
  }, {
    key: "height",
    get: function get() {
      return eval(this.style.height.split(this.units.height)[0]) || 0;
    },
    set: function set(value) {
      this.style.height = value + this.units.height;
    }
  }, {
    key: "left",
    get: function get() {
      return eval(this.style.left.split(this.units.left)[0]) || 0;
    },
    set: function set(value) {
      this.style.left = value + this.units.left;
    }
  }, {
    key: "marginBottom",
    get: function get() {
      return eval(this.style.marginBottom.split(this.units.marginBottom)[0]) || 0;
    },
    set: function set(value) {
      this.style.marginBottom = value + this.units.marginBottom;
    }
  }, {
    key: "marginLeft",
    get: function get() {
      return eval(this.style.marginLeft.split(this.units.marginLeft)[0]) || 0;
    },
    set: function set(value) {
      this.style.marginLeft = value + this.units.marginLeft;
    }
  }, {
    key: "marginRight",
    get: function get() {
      return eval(this.style.marginRight.split(this.units.marginRight)[0]) || 0;
    },
    set: function set(value) {
      this.style.marginRight = value + this.units.marginRight;
    }
  }, {
    key: "marginTop",
    get: function get() {
      return eval(this.style.marginTop.split(this.units.marginTop)[0]) || 0;
    },
    set: function set(value) {
      this.style.marginTop = value + this.units.marginTop;
    }
  }, {
    key: "maxHeight",
    get: function get() {
      return eval(this.style.maxHeight.split(this.units.maxHeight)[0]) || 0;
    },
    set: function set(value) {
      this.style.maxHeight = value + this.units.maxHeight;
    }
  }, {
    key: "opacity",
    get: function get() {
      return this._opacity; // return (isNaN(this.style.opacity))?1:this.style.opacity;
    },
    set: function set(value) {
      this._opacity = value;
      this.style.opacity = this.round(value);
    }
  }, {
    key: "paddingBottom",
    get: function get() {
      return eval(this.style.paddingBottom.split(this.units.paddingBottom)[0]) || 0;
    },
    set: function set(value) {
      this.style.paddingBottom = value + this.units.paddingBottom;
    }
  }, {
    key: "paddingLeft",
    get: function get() {
      return eval(this.style.paddingLeft.split(this.units.paddingLeft)[0]) || 0;
    },
    set: function set(value) {
      this.style.paddingLeft = value + this.units.paddingLeft;
    }
  }, {
    key: "paddingRight",
    get: function get() {
      return eval(this.style.paddingRight.split(this.units.paddingRight)[0]) || 0;
    },
    set: function set(value) {
      this.style.paddingRight = value + this.units.paddingRight;
    }
  }, {
    key: "paddingTop",
    get: function get() {
      return eval(this.style.paddingTop.split(this.units.paddingTop)[0]) || 0;
    },
    set: function set(value) {
      this.style.paddingTop = value + this.units.paddingTop;
    }
  }, {
    key: "strokeDashoffset",
    get: function get() {
      return isNaN(this.style.strokeDashoffset) ? 0 : this.style.strokeDashoffset;
    },
    set: function set(value) {
      this.style.strokeDashoffset = value;
    }
  }, {
    key: "right",
    get: function get() {
      return eval(this.style.right.split(this.units.right)[0]) || 0;
    },
    set: function set(value) {
      this.style.right = value + this.units.right;
    }
  }, {
    key: "top",
    get: function get() {
      return eval(this.style.top.split(this.units.top)[0]) || 0;
    },
    set: function set(value) {
      this.style.top = value + this.units.top;
    }
  }, {
    key: "width",
    get: function get() {
      return eval(this.style.width.split(this.units.width)[0]) || 0;
    },
    set: function set(value) {
      this.style.width = value + this.units.width;
    }
  }, {
    key: "translateX",
    get: function get() {
      return isNaN(this._translateX) ? 0 : this._translateX;
    },
    set: function set(value) {
      this._translateX = value;
      this._transform += this.transformSpace() + "translateX(" + value + this.units.translateX + ")";
    }
  }, {
    key: "translateY",
    get: function get() {
      return isNaN(this._translateY) ? 0 : this._translateY;
    },
    set: function set(value) {
      this._translateY = value;
      this._transform += this.transformSpace() + "translateY(" + value + this.units.translateY + ")";
    }
  }, {
    key: "translateZ",
    get: function get() {
      return isNaN(this._translateZ) ? 0 : this._translateZ;
    },
    set: function set(value) {
      this._translateZ = value;
      this._transform += this.transformSpace() + "translateZ(" + value + this.units.translateZ + ")";
    }
  }, {
    key: "scale",
    get: function get() {
      return this.scaleX;
    },
    set: function set(value) {
      this.scaleX = value;
      this.scaleY = value;
    }
  }, {
    key: "scaleX",
    get: function get() {
      return isNaN(this._scaleX) ? 1 : this._scaleX;
    },
    set: function set(value) {
      this._scaleX = value;
      this._transform += this.transformSpace() + "scaleX(" + value + ")";
    }
  }, {
    key: "scaleY",
    get: function get() {
      return isNaN(this._scaleY) ? 1 : this._scaleY;
    },
    set: function set(value) {
      this._scaleY = value;
      this._transform += this.transformSpace() + "scaleY(" + value + ")";
    }
  }, {
    key: "scaleZ",
    get: function get() {
      return isNaN(this._scaleZ) ? 1 : this._scaleZ;
    },
    set: function set(value) {
      this._scaleZ = value;
      this._transform += this.transformSpace() + "scaleZ(" + value + ")";
    }
  }, {
    key: "rotateX",
    get: function get() {
      return isNaN(this._rotateX) ? 0 : this._rotateX;
    },
    set: function set(value) {
      this._rotateX = value;
      this._transform += this.transformSpace() + "rotateX(" + value + "deg)";
    }
  }, {
    key: "rotateY",
    get: function get() {
      return isNaN(this._rotateY) ? 0 : this._rotateY;
    },
    set: function set(value) {
      this._rotateY = value;
      this._transform += this.transformSpace() + "rotateY(" + value + "deg)";
    }
  }, {
    key: "rotateZ",
    get: function get() {
      return isNaN(this._rotateZ) ? 0 : this._rotateZ;
    },
    set: function set(value) {
      this._rotateZ = value;
      this._transform += this.transformSpace() + "rotateZ(" + value + "deg)";
    }
  }, {
    key: "rotate",
    get: function get() {
      return isNaN(this._rotate) ? 0 : this._rotate;
    },
    set: function set(value) {
      this._rotate = value;
      this._transform += this.transformSpace() + "rotate(" + value + "deg)";
    }
  }, {
    key: "skewX",
    get: function get() {
      return isNaN(this._skewX) ? 0 : this._skewX;
    },
    set: function set(value) {
      this._skewX = value;
      this._transform += this.transformSpace() + "skewX(" + value + "deg)";
    }
  }, {
    key: "skewY",
    get: function get() {
      return isNaN(this._skewY) ? 0 : this._skewY;
    },
    set: function set(value) {
      this._skewY = value;
      this._transform += this.transformSpace() + "skewY(" + value + "deg)";
    }
  }]);

  return Style;
}();


var StyleUnits = function StyleUnits() {
  _classCallCheck(this, StyleUnits);

  this.fontSize = "px";
  this.marginTop = "px";
  this.marginBottom = "px";
  this.marginRight = "px";
  this.marginLeft = "px";
  this.paddingTop = "px";
  this.paddingBottom = "px";
  this.paddingRight = "px";
  this.paddingLeft = "px";
  this.width = "px";
  this.height = "px";
  this.maxHeight = "px";
  this.left = "px";
  this.top = "px";
  this.right = "px";
  this.bottom = "px";
  this.translateX = "px";
  this.translateY = "px";
  this.translateZ = "px";
};

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./js/tsunami/tsunami.js
var tsunami = __webpack_require__(1);

// EXTERNAL MODULE: ./js/tsunami/components/UIComponent.js + 2 modules
var UIComponent = __webpack_require__(6);

// EXTERNAL MODULE: ./js/tsunami/components/UIButton.js
var UIButton = __webpack_require__(19);

// EXTERNAL MODULE: ./js/tsunami/components/UIList.js + 1 modules
var UIList = __webpack_require__(20);

// EXTERNAL MODULE: ./js/tsunami/data/Data.js
var Data = __webpack_require__(0);

// CONCATENATED MODULE: ./js/tsunami/components/UIInput.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var UIInput_UIInput =
/*#__PURE__*/
function (_UIComponent) {
  _inherits(UIInput, _UIComponent);

  function UIInput(element) {
    var _this;

    _classCallCheck(this, UIInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UIInput).call(this, element));
    _this.inputBind = _this.inputHandler.bind(_assertThisInitialized(_this));

    _this.element.addEventListener("input", _this.inputBind);

    _this.changeBind = _this.changeHandler.bind(_assertThisInitialized(_this)); // this.element.addEventListener("change", this.changeBind);

    return _this;
  }

  _createClass(UIInput, [{
    key: "updateValue",
    value: function updateValue(value) {
      switch (this.element.type) {
        case "checkbox":
          this.element.checked = value;
          break;

        case "radio":
          var checked = value == this.element.value;

          if (checked != this.element.checked) {
            this.element.checked = checked;
          }

          break;

        default:
          this.element.value = value;
          break;
      }
    }
  }, {
    key: "inputHandler",
    value: function inputHandler(event) {
      if (this._model) {
        if (this._model instanceof Data["a" /* default */]) {
          this._model.removeEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);

          switch (this.element.type) {
            case "checkbox":
              this._model.value = this.element.checked;
              break;

            case "radio":
            default:
              this._model.value = this.element.value;
              break;
          }

          this._model.addEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);
        }
      }
    }
  }, {
    key: "changeHandler",
    value: function changeHandler(event) {
      if (this._model) {
        if (this._model instanceof Data["a" /* default */]) {
          this._model.removeEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);

          switch (this.element.type) {
            case "checkbox":
              this._model.value = this.element.checked;
              break;

            case "radio":
            default:
              this._model.value = this.element.value;
              break;
          }

          this._model.addEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);
        }
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener("input", this.inputBind);
      this.element.removeEventListener("change", this.changeBind);

      _get(_getPrototypeOf(UIInput.prototype), "destroy", this).call(this);
    }
  }]);

  return UIInput;
}(UIComponent["a" /* default */]);


// CONCATENATED MODULE: ./js/tsunami/components/UISelect.js
function UISelect_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UISelect_typeof = function _typeof(obj) { return typeof obj; }; } else { UISelect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UISelect_typeof(obj); }

function UISelect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UISelect_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UISelect_createClass(Constructor, protoProps, staticProps) { if (protoProps) UISelect_defineProperties(Constructor.prototype, protoProps); if (staticProps) UISelect_defineProperties(Constructor, staticProps); return Constructor; }

function UISelect_possibleConstructorReturn(self, call) { if (call && (UISelect_typeof(call) === "object" || typeof call === "function")) { return call; } return UISelect_assertThisInitialized(self); }

function UISelect_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UISelect_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { UISelect_get = Reflect.get; } else { UISelect_get = function _get(target, property, receiver) { var base = UISelect_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return UISelect_get(target, property, receiver || target); }

function UISelect_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = UISelect_getPrototypeOf(object); if (object === null) break; } return object; }

function UISelect_getPrototypeOf(o) { UISelect_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UISelect_getPrototypeOf(o); }

function UISelect_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UISelect_setPrototypeOf(subClass, superClass); }

function UISelect_setPrototypeOf(o, p) { UISelect_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UISelect_setPrototypeOf(o, p); }





var UISelect_UISelect =
/*#__PURE__*/
function (_UIList) {
  UISelect_inherits(UISelect, _UIList);

  function UISelect(element) {
    var _this;

    UISelect_classCallCheck(this, UISelect);

    _this = UISelect_possibleConstructorReturn(this, UISelect_getPrototypeOf(UISelect).call(this, element));
    _this.valuePath = element.getAttribute("data-valuePath") || ".";
    _this.template = "<option value=\"[[item]]\" is=\"ui-text\">[[item]]</option>";
    _this.getModel = _this.getModel.bind(UISelect_assertThisInitialized(_this));
    _this.inputHandler = _this.inputHandler.bind(UISelect_assertThisInitialized(_this));

    _this.element.addEventListener("input", _this.inputHandler);

    return _this;
  }

  UISelect_createClass(UISelect, [{
    key: "updateValue",
    value: function updateValue(model) {
      if (model) {
        var value = Object(tsunami["d" /* evalProperty */])(this.valuePath, model);
        this.element.value = value;
      }
    }
  }, {
    key: "inputHandler",
    value: function inputHandler(e) {
      if (this._model) {
        this._model.removeEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);

        this._model.value = this.dataProvider.find(this.getModel);

        if (this._model) {
          this._model.addEventListener(Data["a" /* default */].CHANGE, this.modelChangeBind);
        }
      }
    }
  }, {
    key: "getModel",
    value: function getModel(model) {
      var value = Object(tsunami["d" /* evalProperty */])(this.valuePath, model);
      var match = value == this.element.value;
      return match;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.element.removeEventListener("input", this.inputHandler);

      UISelect_get(UISelect_getPrototypeOf(UISelect.prototype), "destroy", this).call(this);
    }
  }]);

  return UISelect;
}(UIList["a" /* default */]);


// EXTERNAL MODULE: ./js/tsunami/data/ArrayDataOperation.js
var ArrayDataOperation = __webpack_require__(21);

// CONCATENATED MODULE: ./js/tsunami/components/UIText.js
function UIText_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UIText_typeof = function _typeof(obj) { return typeof obj; }; } else { UIText_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UIText_typeof(obj); }

function UIText_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UIText_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UIText_createClass(Constructor, protoProps, staticProps) { if (protoProps) UIText_defineProperties(Constructor.prototype, protoProps); if (staticProps) UIText_defineProperties(Constructor, staticProps); return Constructor; }

function UIText_possibleConstructorReturn(self, call) { if (call && (UIText_typeof(call) === "object" || typeof call === "function")) { return call; } return UIText_assertThisInitialized(self); }

function UIText_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UIText_set(target, property, value, receiver) { if (typeof Reflect !== "undefined" && Reflect.set) { UIText_set = Reflect.set; } else { UIText_set = function set(target, property, value, receiver) { var base = UIText_superPropBase(target, property); var desc; if (base) { desc = Object.getOwnPropertyDescriptor(base, property); if (desc.set) { desc.set.call(receiver, value); return true; } else if (!desc.writable) { return false; } } desc = Object.getOwnPropertyDescriptor(receiver, property); if (desc) { if (!desc.writable) { return false; } desc.value = value; Object.defineProperty(receiver, property, desc); } else { _defineProperty(receiver, property, value); } return true; }; } return UIText_set(target, property, value, receiver); }

function _set(target, property, value, receiver, isStrict) { var s = UIText_set(target, property, value, receiver || target); if (!s && isStrict) { throw new Error('failed to set property'); } return value; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function UIText_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { UIText_get = Reflect.get; } else { UIText_get = function _get(target, property, receiver) { var base = UIText_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return UIText_get(target, property, receiver || target); }

function UIText_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = UIText_getPrototypeOf(object); if (object === null) break; } return object; }

function UIText_getPrototypeOf(o) { UIText_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UIText_getPrototypeOf(o); }

function UIText_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UIText_setPrototypeOf(subClass, superClass); }

function UIText_setPrototypeOf(o, p) { UIText_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UIText_setPrototypeOf(o, p); }




var UIText_UIText =
/*#__PURE__*/
function (_UIComponent) {
  UIText_inherits(UIText, _UIComponent);

  function UIText(element) {
    UIText_classCallCheck(this, UIText);

    return UIText_possibleConstructorReturn(this, UIText_getPrototypeOf(UIText).call(this, element));
  }

  UIText_createClass(UIText, [{
    key: "updateValue",
    value: function updateValue(value) {
      this.element.innerHTML = value;
    }
  }, {
    key: "scope",
    get: function get() {
      return UIText_get(UIText_getPrototypeOf(UIText.prototype), "scope", this);
    },
    set: function set(value) {
      _set(UIText_getPrototypeOf(UIText.prototype), "scope", value, this, true);

      var innerHTML = this.element.innerHTML;

      if (innerHTML.indexOf("[[") != -1) {
        var arrayOperation = new ArrayDataOperation["a" /* default */]();
        arrayOperation.parseString(innerHTML, value);
        this.model = arrayOperation;
      }
    }
  }]);

  return UIText;
}(UIComponent["a" /* default */]);


// EXTERNAL MODULE: ./js/tsunami/animation/Tween.js
var Tween = __webpack_require__(14);

// EXTERNAL MODULE: ./js/tsunami/animation/TweenProperty.js
var TweenProperty = __webpack_require__(17);

// EXTERNAL MODULE: ./js/tsunami/animation/Easing.js
var Easing = __webpack_require__(15);

// CONCATENATED MODULE: ./js/tsunami/utils/number.js
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
} // Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
} // Returns a random integer between min (included) and max (included)
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
  return (value & 1) == 0;
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
  return value % 1 == 0;
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
  if (value == 1 || value == 2) return true;
  if (isEven(value)) return false;
  var s = Math.sqrt(value);

  for (var i = 3; i <= s; i++) {
    if (value % i == 0) return false;
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

function roundDecimalToPlace(value, place) {
  var p = Math.pow(10, place);
  return Math.round(value * p) / p;
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
  if (index < 0) index = length + index % length;
  if (index >= length) return index % length;
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
  var i = 0;
  var stepsBetween = [];
  var increment = (end - begin) / steps;

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

function normalize(value, minimum, maximum) {
  return new Percent((value - minimum) / (maximum - minimum));
}
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
  return min2 + (max2 - min2) * ((value - min1) / (max1 - min1));
}
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

function number_format(value, kDelim, minLength, fillChar) {
  if (!kDelim) {
    kDelim = ",";
  }

  if (isNaN(minLength)) {
    minLength = 0;
  }

  if (!fillChar) {
    fillChar = "0";
  }

  var remainder = value % 1;
  var num = Math.floor(value).toString();
  var len = num.length;

  if (minLength != 0 && minLength > len) {
    minLength -= len;
    var addChar = fillChar || '0';

    while (minLength--) {
      num = addChar + num;
    }
  }

  if (kDelim != null && num.length > 3) {
    var totalDelim = Math.floor(num.length / 3);
    var totalRemain = num.length % 3;
    var numSplit = num.split('');
    var i = -1;

    while (++i < totalDelim) {
      numSplit.splice(totalRemain + 4 * i, 0, kDelim);
    }

    if (totalRemain == 0) numSplit.shift();
    num = numSplit.join('');
  }

  if (remainder != 0) num += remainder.toString().substr(1);
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
  if (forceDecimals == null) {
    forceDecimals = true;
  }

  if (!kDelim) {
    kDelim = ",";
  }

  var remainder = value % 1;
  var currency = number_format(Math.floor(value), kDelim);
  if (remainder != 0 || forceDecimals) currency += remainder.toFixed(2).substr(1);
  return currency;
}
/**
 Finds the english ordinal suffix for the number given.

 @param value: Number to find the ordinal suffix of.
 @return Returns the suffix for the number, 2 characters.
 @example
 <code>
 console.log32 + getOrdinalSuffix(32)); // Traces 32nd
 </code>
 */

function getOrdinalSuffix(value) {
  if (value >= 10 && value <= 20) return 'th';
  if (value == 0) return '';

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
    throw 'Value too large for this method.';
  }

  var onesSpellings = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
  var tensSpellings = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  var spelling = '';
  var millions = value / 1000000;
  value %= 1000000;
  var thousands = value / 1000;
  value %= 1000;
  var hundreds = value / 100;
  value %= 100;
  var tens = value / 10;
  value %= 10;
  var ones = value % 10;

  if (millions != 0) {
    spelling += spelling.length == 0 ? '' : ', ';
    spelling += spell(millions) + ' Million';
  }

  if (thousands != 0) {
    spelling += spelling.length == 0 ? '' : ', ';
    spelling += spell(thousands) + ' Thousand';
  }

  if (hundreds != 0) {
    spelling += spelling.length == 0 ? '' : ', ';
    spelling += spell(hundreds) + ' Hundred';
  }

  if (tens != 0 || ones != 0) {
    spelling += spelling.length == 0 ? '' : ' ';
    if (tens < 2) spelling += onesSpellings[tens * 10 + ones];else {
      spelling += tensSpellings[tens];
      if (ones != 0) spelling += '-' + onesSpellings[ones];
    }
  }

  if (spelling.length == 0) return 'Zero';
  return spelling;
}
function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(rgb) {
  return componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    toString: function toString() {
      return "r:" + this.r + ",g:" + this.g + ",b:" + this.b;
    }
  } : null;
}
// CONCATENATED MODULE: ./js/tsunami/components/UINumber.js
function UINumber_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UINumber_typeof = function _typeof(obj) { return typeof obj; }; } else { UINumber_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UINumber_typeof(obj); }

function UINumber_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UINumber_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UINumber_createClass(Constructor, protoProps, staticProps) { if (protoProps) UINumber_defineProperties(Constructor.prototype, protoProps); if (staticProps) UINumber_defineProperties(Constructor, staticProps); return Constructor; }

function UINumber_possibleConstructorReturn(self, call) { if (call && (UINumber_typeof(call) === "object" || typeof call === "function")) { return call; } return UINumber_assertThisInitialized(self); }

function UINumber_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UINumber_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { UINumber_get = Reflect.get; } else { UINumber_get = function _get(target, property, receiver) { var base = UINumber_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return UINumber_get(target, property, receiver || target); }

function UINumber_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = UINumber_getPrototypeOf(object); if (object === null) break; } return object; }

function UINumber_getPrototypeOf(o) { UINumber_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UINumber_getPrototypeOf(o); }

function UINumber_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UINumber_setPrototypeOf(subClass, superClass); }

function UINumber_setPrototypeOf(o, p) { UINumber_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UINumber_setPrototypeOf(o, p); }







var UINumber_UINumber =
/*#__PURE__*/
function (_UIText) {
  UINumber_inherits(UINumber, _UIText);

  function UINumber(element) {
    var _this;

    UINumber_classCallCheck(this, UINumber);

    _this = UINumber_possibleConstructorReturn(this, UINumber_getPrototypeOf(UINumber).call(this, element));
    _this._currentValue = 0;
    _this.roundDecimal = 10;
    _this.easing = Easing["a" /* default */].cubic.easeOut;

    var isRank = _this.element.getAttribute("data-is-rank");

    if (isRank == "true") {
      _this.isRank = true;
    }

    var roundDecimal = _this.element.getAttribute("data-round-decimal");

    if (roundDecimal) {
      _this.roundDecimal = Number(roundDecimal);
    }

    var format = _this.element.getAttribute("data-format");

    if (format) {
      _this.applyFormat = Boolean(format);
    }

    return _this;
  }

  UINumber_createClass(UINumber, [{
    key: "updateValue",
    value: function updateValue(value) {
      if (isNaN(value)) {
        value = 0;
      }

      var tween = new Tween["a" /* default */](0, 0.5, [new TweenProperty["a" /* default */](this, "currentValue", this.currentValue, value, this.easing)]);
      tween.start();
    }
  }, {
    key: "updateCurrentValue",
    value: function updateCurrentValue(value) {
      if (this.applyFormat) {
        var split = value.toString().split(".");

        if (split.length > 0) {
          split[0] = number_format(split[0], ",");

          if (split.length > 0) {
            value = split.join('.');
          } else {
            value = split[0];
          }
        }
      }

      if (this.isRank) {
        value = value + getOrdinalSuffix(value);
      }

      UINumber_get(UINumber_getPrototypeOf(UINumber.prototype), "updateValue", this).call(this, value);
    }
  }, {
    key: "currentValue",
    get: function get() {
      return this._currentValue;
    },
    set: function set(value) {
      this._currentValue = value;
      var newValue = Math.round(value * this.roundDecimal) / this.roundDecimal;
      this.updateCurrentValue(newValue);
    }
  }]);

  return UINumber;
}(UIText_UIText);


// EXTERNAL MODULE: ./js/tsunami/events.js
var events = __webpack_require__(3);

// EXTERNAL MODULE: ./js/tsunami/window.js
var tsunami_window = __webpack_require__(8);

// EXTERNAL MODULE: ./js/tsunami/geom/Point.js + 1 modules
var Point = __webpack_require__(2);

// EXTERNAL MODULE: ./js/tsunami/geom/Rectangle.js
var Rectangle = __webpack_require__(10);

// EXTERNAL MODULE: ./js/tsunami/data/BooleanData.js
var BooleanData = __webpack_require__(11);

// CONCATENATED MODULE: ./js/tsunami/components/UIScrollPane.js
function UIScrollPane_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UIScrollPane_typeof = function _typeof(obj) { return typeof obj; }; } else { UIScrollPane_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UIScrollPane_typeof(obj); }

function UIScrollPane_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UIScrollPane_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UIScrollPane_createClass(Constructor, protoProps, staticProps) { if (protoProps) UIScrollPane_defineProperties(Constructor.prototype, protoProps); if (staticProps) UIScrollPane_defineProperties(Constructor, staticProps); return Constructor; }

function UIScrollPane_possibleConstructorReturn(self, call) { if (call && (UIScrollPane_typeof(call) === "object" || typeof call === "function")) { return call; } return UIScrollPane_assertThisInitialized(self); }

function UIScrollPane_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UIScrollPane_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { UIScrollPane_get = Reflect.get; } else { UIScrollPane_get = function _get(target, property, receiver) { var base = UIScrollPane_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return UIScrollPane_get(target, property, receiver || target); }

function UIScrollPane_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = UIScrollPane_getPrototypeOf(object); if (object === null) break; } return object; }

function UIScrollPane_getPrototypeOf(o) { UIScrollPane_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UIScrollPane_getPrototypeOf(o); }

function UIScrollPane_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UIScrollPane_setPrototypeOf(subClass, superClass); }

function UIScrollPane_setPrototypeOf(o, p) { UIScrollPane_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UIScrollPane_setPrototypeOf(o, p); }











var UIScrollPane_UIScrollPane =
/*#__PURE__*/
function (_UIComponent) {
  UIScrollPane_inherits(UIScrollPane, _UIComponent);

  function UIScrollPane(element) {
    var _this;

    var listSelector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ".panel";

    UIScrollPane_classCallCheck(this, UIScrollPane);

    _this = UIScrollPane_possibleConstructorReturn(this, UIScrollPane_getPrototypeOf(UIScrollPane).call(this, element));
    _this.scrollingPanel = _this.element.querySelector(listSelector);
    _this.wheelDirection = 1;
    _this._autoScrollFactor = 0;
    _this.autoScrollSpeed = 1;
    _this.scrollTarget = new Point["a" /* default */]();
    _this.scroll = new Point["a" /* default */]();
    _this.speed = new Point["a" /* default */]();
    _this.momentum = new Point["a" /* default */]();
    _this.minScroll = new Point["a" /* default */]();
    _this.maxScroll = new Point["a" /* default */]();
    _this.size = new Rectangle["a" /* default */]();
    _this.panelSize = new Rectangle["a" /* default */]();
    _this.loopScroll = new Point["a" /* default */](NaN, NaN);
    _this.startTouchDiff = new Point["a" /* default */]();
    _this.springiness = 0;
    _this.inertia = 1;
    _this.elasticScrollInertia = 0.1;
    _this.elasticScrollElasticity = new Point["a" /* default */](0.15, 0);
    _this.momentumFriction = 0.965;
    _this.momentumScaleLimit = 0.5;
    _this.maxScrollReached = {
      x: new BooleanData["a" /* default */](),
      y: new BooleanData["a" /* default */]()
    };
    _this.wheelHandler = _this.wheelHandler.bind(UIScrollPane_assertThisInitialized(_this));
    _this.mousedownHandler = _this.mousedownHandler.bind(UIScrollPane_assertThisInitialized(_this));
    _this.mousemoveHandler = _this.mousemoveHandler.bind(UIScrollPane_assertThisInitialized(_this));
    _this.mouseupHandler = _this.mouseupHandler.bind(UIScrollPane_assertThisInitialized(_this));

    _this.element.addEventListener(events["b" /* events */].mousedown, _this.mousedownHandler);

    _this.autoScrollTimeoutDuration = 4;
    _this._startAutoScroll = _this._startAutoScroll.bind(UIScrollPane_assertThisInitialized(_this));

    if (_this.debug) {
      console.log("events", events["b" /* events */]);
    }

    return _this;
  }

  UIScrollPane_createClass(UIScrollPane, [{
    key: "addWheelHandler",
    value: function addWheelHandler() {
      this.removeWheelHandler();
      this.element.addEventListener("wheel", this.wheelHandler);
    }
  }, {
    key: "removeWheelHandler",
    value: function removeWheelHandler() {
      this.element.removeEventListener("wheel", this.wheelHandler);
    }
  }, {
    key: "wheelHandler",
    value: function wheelHandler(event) {
      event.preventDefault();

      if (this.maxScroll.y > 0) {
        this.scrollTarget.y += event.deltaY * this.wheelDirection;
      }

      this.dispatchEvent(new events["a" /* default */](UIScrollPane.WHEEL, event));
    }
  }, {
    key: "_startAutoScrollTimeout",
    value: function _startAutoScrollTimeout() {
      this._stopAutoScrollTimeout();

      if (this.autoScroll) {
        this._autoScrollTimeout = setTimeout(this._startAutoScroll, this.autoScrollTimeoutDuration * 1000);
      }
    }
  }, {
    key: "_stopAutoScrollTimeout",
    value: function _stopAutoScrollTimeout() {
      clearTimeout(this._autoScrollTimeout);
    }
  }, {
    key: "_startAutoScroll",
    value: function _startAutoScroll() {
      if (this.autoScroll) {
        this.autoScrollTween = new Tween["a" /* default */](0, 2, [new TweenProperty["a" /* default */](this, "_autoScrollFactor", 0, 1, Easing["a" /* default */].cubic.easeInOut)]);
        this.autoScrollTween.start();
      }
    }
  }, {
    key: "_stopAutoScroll",
    value: function _stopAutoScroll() {
      this._stopAutoScrollTimeout();

      if (this.autoScrollTween) {
        this.autoScrollTween.stop();
      }

      this._autoScrollFactor = 0;
    }
  }, {
    key: "animationFrame",
    value: function animationFrame(data) {
      UIScrollPane_get(UIScrollPane_getPrototypeOf(UIScrollPane.prototype), "animationFrame", this).call(this, data);

      var scale = this.windowSize.remScale || 1;

      if (this.maxScroll.x > 0) {
        this.scrollTarget.x += Math.round(scale * this.autoScrollSpeed * this._autoScrollFactor * 10) / 10;
      }

      if (this.maxScroll.y > 0) {
        this.scrollTarget.y += Math.round(scale * this.autoScrollSpeed * this._autoScrollFactor * 10) / 10;
      }

      var previousScroll = this.scroll.clone();

      if (!this.isDragging && !this.ignoreElasticScroll) {
        this.scrollTarget.x = this.scrollTarget.x + this.momentum.x;
        this.scrollTarget.y = this.scrollTarget.y + this.momentum.y;
        var clamp = {
          x: NaN,
          y: NaN
        };

        if (this.scrollTarget.x < this.minScroll.x) {
          clamp.x = this.minScroll.x;
        }

        if (this.scrollTarget.x > this.maxScroll.x) {
          clamp.x = this.maxScroll.x;
        }

        if (!isNaN(clamp.x)) {
          this.scrollTarget.x += (clamp.x - this.scrollTarget.x) * this.elasticScrollInertia;
        }

        if (this.scrollTarget.y < this.minScroll.y) {
          clamp.y = this.minScroll.y;
        }

        if (this.scrollTarget.y > this.maxScroll.y) {
          clamp.y = this.maxScroll.y;
        }

        if (!isNaN(clamp.y)) {
          this.scrollTarget.y += (clamp.y - this.scrollTarget.y) * this.elasticScrollInertia;
        }

        this.momentum.x *= this.momentumFriction;
        this.momentum.y *= this.momentumFriction;
        var elasticityX = this.size.width * this.elasticScrollElasticity.x;
        var elasticityY = this.size.height * this.elasticScrollElasticity.y;

        if (this.scrollTarget.x < this.minScroll.x - elasticityX) {
          this.momentum.x = 0;
          this.scrollTarget.x = this.minScroll.x - elasticityX;
        }

        if (this.scrollTarget.x > this.maxScroll.x + elasticityX) {
          this.momentum.x = 0;
          this.scrollTarget.x = this.maxScroll.x + elasticityX;
        }

        if (this.scrollTarget.y < this.minScroll.y - elasticityY) {
          this.momentum.y = 0;
          this.scrollTarget.y = this.minScroll.y - elasticityY;
        }

        if (this.scrollTarget.y > this.maxScroll.y + elasticityY) {
          this.momentum.y = 0;
          this.scrollTarget.y = this.maxScroll.y + elasticityY;
        }
      }

      this.speed.x = this.speed.x * this.springiness + (this.scrollTarget.x - this.scroll.x) / this.inertia;
      this.scroll.x += this.speed.x;
      this.speed.y = this.speed.y * this.springiness + (this.scrollTarget.y - this.scroll.y) / this.inertia;
      this.scroll.y += this.speed.y;
      this.scrollDiff = this.scroll.subtract(previousScroll);

      if (!isNaN(this.loopScroll.x)) {
        while (this.scroll.x > this.loopScroll.x) {
          this.scroll.x -= this.loopScroll.x;
          this.scrollTarget.x -= this.loopScroll.x;
        }
      }

      this.maxScrollReached.x.value = this.scroll.x >= this.maxScroll.x;
      this.maxScrollReached.y.value = this.scroll.y >= this.maxScroll.y;
      var x = Math.round(this.scroll.x * 10) / 10;
      var y = Math.round(this.scroll.y * 10) / 10;
      this.updateTransform(x, y);
    }
  }, {
    key: "updateTransform",
    value: function updateTransform(x, y) {
      this.scrollingPanel.style.transform = "translate3d(" + -x + "px, " + -y + "px, 0)"; // this.scrollingPanel.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    }
  }, {
    key: "windowResize",
    value: function windowResize(windowSize) {
      UIScrollPane_get(UIScrollPane_getPrototypeOf(UIScrollPane.prototype), "windowResize", this).call(this, windowSize);

      this.updatePanelSize();
    }
  }, {
    key: "updatePanelSize",
    value: function updatePanelSize() {
      this.size.width = this.rectangle.width;
      this.size.height = this.rectangle.height;
      this.panelSize.width = this.scrollingPanel.offsetWidth;
      this.panelSize.height = this.scrollingPanel.offsetHeight;
      this.updateMaxScroll();
    }
  }, {
    key: "updateMaxScroll",
    value: function updateMaxScroll() {
      this.maxScroll.x = Math.max(this.panelSize.width - this.size.width, 0);
      this.maxScroll.y = Math.max(this.panelSize.height - this.size.height, 0);
      this.element.setAttribute("data-scroll-x", this.maxScroll.x > 0);
      this.element.setAttribute("data-scroll-y", this.maxScroll.y > 0);
    }
  }, {
    key: "mousedownHandler",
    value: function mousedownHandler(event) {
      this.removeWheelHandler();
      this.momentum.x = this.momentum.y = 0;
      this.scrollTarget.copyFrom(this.scroll);

      if (event.target.tagName.toLowerCase() === 'input') {
        return;
      }

      if (this.maxScroll.x <= 0 && this.maxScroll.y <= 0) {
        return;
      }

      if (!tsunami_window["a" /* isTouch */]) {
        event.preventDefault();
      }

      if (this.autoScroll) {
        this._stopAutoScroll();
      }

      this.isDragging = false;
      this.scrollStart = this.scroll.clone();
      this.touchStart = this.getTouchPoint(event);
      this.touchPrevious = this.touchStart;
      window.addEventListener(events["b" /* events */].mousemove, this.mousemoveHandler);
      window.addEventListener(events["b" /* events */].mouseup, this.mouseupHandler);
    }
  }, {
    key: "mousemoveHandler",
    value: function mousemoveHandler(event) {
      // if (!isTouch) {
      event.preventDefault(); // }

      var touchNew = this.getTouchPoint(event);
      var distance = Point["a" /* default */].distance(touchNew, this.touchStart);

      if (Math.abs(distance) > 2 && !this.isDragging) {
        this.isDragging = true;
        this.dispatchEvent(new events["a" /* default */](UIScrollPane.DRAG_START));
      }

      this.momentum = this.touchPrevious.subtract(touchNew);
      this.startTouchDiff = this.touchStart.subtract(touchNew);
      this.scrollTarget = new Point["a" /* default */](this.scrollStart.x + this.startTouchDiff.x, this.scrollStart.y + this.startTouchDiff.y);
      this.touchPrevious = touchNew;
      var clamp = {
        x: NaN,
        y: NaN
      };

      if (this.scrollTarget.x < this.minScroll.x) {
        clamp.x = this.minScroll.x;
      }

      if (this.scrollTarget.x > this.maxScroll.x) {
        clamp.x = this.maxScroll.x;
      }

      if (!isNaN(clamp.x)) {
        this.scrollTarget.x = clamp.x + (this.scrollTarget.x - clamp.x) * this.elasticScrollElasticity.x;
      }

      if (this.scrollTarget.y < this.minScroll.y) {
        clamp.y = this.minScroll.y;
      }

      if (this.scrollTarget.y > this.maxScroll.y) {
        clamp.y = this.maxScroll.y;
      }

      if (!isNaN(clamp.y)) {
        this.scrollTarget.y = clamp.y + (this.scrollTarget.y - clamp.y) * this.elasticScrollElasticity.y;
      }
    }
  }, {
    key: "getMinimumAbsoluteMomentum",
    value: function getMinimumAbsoluteMomentum(value, max) {
      var valueScale = value < 0 ? -1 : 1;
      var valueAbs = Math.min(Math.abs(value), max);
      value = valueAbs * valueScale;
      return value;
    }
  }, {
    key: "mouseupHandler",
    value: function mouseupHandler(event) {
      // if (this.isDragging) {
      // event.preventDefault();
      // }
      window.removeEventListener(events["b" /* events */].mousemove, this.mousemoveHandler);
      window.removeEventListener(events["b" /* events */].mouseup, this.mouseupHandler);

      if (this.wheelEnabled) {
        this.addWheelHandler();
      }

      if (this.autoScroll) {
        this._startAutoScrollTimeout();
      }

      this.isDragging = false;
      var momentumScaleX = this.size.width * this.momentumScaleLimit;
      this.momentum.x = this.getMinimumAbsoluteMomentum(this.momentum.x, momentumScaleX);
      var momentumScaleY = this.size.height * this.momentumScaleLimit;
      this.momentum.y = this.getMinimumAbsoluteMomentum(this.momentum.y, momentumScaleY);
      this.dispatchEvent(new events["a" /* default */](UIScrollPane.DRAG_END));
    }
  }, {
    key: "autoScroll",
    set: function set(value) {
      this._autoScroll = value;

      this._stopAutoScroll();

      if (value) {
        this._startAutoScroll();
      }
    },
    get: function get() {
      return this._autoScroll;
    }
  }, {
    key: "wheelEnabled",
    get: function get() {
      return this._wheelEnabled;
    },
    set: function set(value) {
      this._wheelEnabled = value;

      if (value) {
        this.addWheelHandler();
      } else {
        this.removeWheelHandler();
      }
    }
  }, {
    key: "isDragging",
    get: function get() {
      return this._isDragging;
    },
    set: function set(value) {
      this._isDragging = value;

      if (value) {
        this.element.classList.add("drag");
      } else {
        this.element.classList.remove("drag");
      }
    }
  }], [{
    key: "DRAG_START",
    get: function get() {
      return "dragStart";
    }
  }, {
    key: "DRAG_END",
    get: function get() {
      return "dragEnd";
    }
  }, {
    key: "WHEEL",
    get: function get() {
      return "wheel";
    }
  }]);

  return UIScrollPane;
}(UIComponent["a" /* default */]);


// CONCATENATED MODULE: ./js/tsunami/utils/validation.js
// export function validateEmail(emailAddress) {
// 	var sQtext = '[^\\x0d\\x22\\x5c\\x80-\\xff]';
// 	var sDtext = '[^\\x0d\\x5b-\\x5d\\x80-\\xff]';
// 	var sAtom = '[^\\x00-\\x20\\x22\\x28\\x29\\x2c\\x2e\\x3a-\\x3c\\x3e\\x40\\x5b-\\x5d\\x7f-\\xff]+';
// 	var sQuotedPair = '\\x5c[\\x00-\\x7f]';
// 	var sDomainLiteral = '\\x5b(' + sDtext + '|' + sQuotedPair + ')*\\x5d';
// 	var sQuotedString = '\\x22(' + sQtext + '|' + sQuotedPair + ')*\\x22';
// 	var sDomain_ref = sAtom;
// 	var sSubDomain = '(' + sDomain_ref + '|' + sDomainLiteral + ')';
// 	var sWord = '(' + sAtom + '|' + sQuotedString + ')';
// 	var sDomain = sSubDomain + '(\\x2e' + sSubDomain + ')*';
// 	var sLocalPart = sWord + '(\\x2e' + sWord + ')*';
// 	var sAddrSpec = sLocalPart + '\\x40' + sDomain; // complete RFC822 email address spec
// 	var sValidEmail = '^' + sAddrSpec + '$'; // as whole string
//
// 	var reValidEmail = new RegExp(sValidEmail);
//
// 	if (reValidEmail.test(emailAddress)) {
// 		return true;
// 	}
//
// 	return false;
// }
// export function validateEmail(email) {
// 	let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// 	return re.test(String(email).toLowerCase());
// }
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
function hasValue(val) {
  return val != null && val != undefined && val != "";
}
// CONCATENATED MODULE: ./js/tsunami/components/UIMedia.js
function UIMedia_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UIMedia_typeof = function _typeof(obj) { return typeof obj; }; } else { UIMedia_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UIMedia_typeof(obj); }

function UIMedia_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UIMedia_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UIMedia_createClass(Constructor, protoProps, staticProps) { if (protoProps) UIMedia_defineProperties(Constructor.prototype, protoProps); if (staticProps) UIMedia_defineProperties(Constructor, staticProps); return Constructor; }

function UIMedia_possibleConstructorReturn(self, call) { if (call && (UIMedia_typeof(call) === "object" || typeof call === "function")) { return call; } return UIMedia_assertThisInitialized(self); }

function UIMedia_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UIMedia_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { UIMedia_get = Reflect.get; } else { UIMedia_get = function _get(target, property, receiver) { var base = UIMedia_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return UIMedia_get(target, property, receiver || target); }

function UIMedia_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = UIMedia_getPrototypeOf(object); if (object === null) break; } return object; }

function UIMedia_getPrototypeOf(o) { UIMedia_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UIMedia_getPrototypeOf(o); }

function UIMedia_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UIMedia_setPrototypeOf(subClass, superClass); }

function UIMedia_setPrototypeOf(o, p) { UIMedia_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UIMedia_setPrototypeOf(o, p); }




var UIMedia_UIMedia =
/*#__PURE__*/
function (_UIComponent) {
  UIMedia_inherits(UIMedia, _UIComponent);

  function UIMedia(element) {
    UIMedia_classCallCheck(this, UIMedia);

    return UIMedia_possibleConstructorReturn(this, UIMedia_getPrototypeOf(UIMedia).call(this, element));
  }

  UIMedia_createClass(UIMedia, [{
    key: "updateValue",
    value: function updateValue(value) {
      if (hasValue(value)) {
        this.element.src = value;
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      var url = this.element.src;
      this.element.src = url;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      var image = this.element;

      var result = UIMedia_get(UIMedia_getPrototypeOf(UIMedia.prototype), "destroy", this).call(this);

      image.removeAttribute('src');
      return result;
    }
  }]);

  return UIMedia;
}(UIComponent["a" /* default */]);


// CONCATENATED MODULE: ./js/tsunami/components/UIToggle.js
function UIToggle_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UIToggle_typeof = function _typeof(obj) { return typeof obj; }; } else { UIToggle_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UIToggle_typeof(obj); }

function UIToggle_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UIToggle_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UIToggle_createClass(Constructor, protoProps, staticProps) { if (protoProps) UIToggle_defineProperties(Constructor.prototype, protoProps); if (staticProps) UIToggle_defineProperties(Constructor, staticProps); return Constructor; }

function UIToggle_possibleConstructorReturn(self, call) { if (call && (UIToggle_typeof(call) === "object" || typeof call === "function")) { return call; } return UIToggle_assertThisInitialized(self); }

function UIToggle_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UIToggle_get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { UIToggle_get = Reflect.get; } else { UIToggle_get = function _get(target, property, receiver) { var base = UIToggle_superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return UIToggle_get(target, property, receiver || target); }

function UIToggle_superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = UIToggle_getPrototypeOf(object); if (object === null) break; } return object; }

function UIToggle_getPrototypeOf(o) { UIToggle_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UIToggle_getPrototypeOf(o); }

function UIToggle_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UIToggle_setPrototypeOf(subClass, superClass); }

function UIToggle_setPrototypeOf(o, p) { UIToggle_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UIToggle_setPrototypeOf(o, p); }



var UIToggle =
/*#__PURE__*/
function (_UIButton) {
  UIToggle_inherits(UIToggle, _UIButton);

  function UIToggle() {
    UIToggle_classCallCheck(this, UIToggle);

    return UIToggle_possibleConstructorReturn(this, UIToggle_getPrototypeOf(UIToggle).apply(this, arguments));
  }

  UIToggle_createClass(UIToggle, [{
    key: "clickHandler",
    value: function clickHandler(event) {
      event.preventDefault();

      UIToggle_get(UIToggle_getPrototypeOf(UIToggle.prototype), "clickHandler", this).call(this, event);

      this.model.value = !this.model.value;
    }
  }]);

  return UIToggle;
}(UIButton["a" /* default */]);


// EXTERNAL MODULE: ./js/tsunami/animation/Clock.js
var Clock = __webpack_require__(7);

// CONCATENATED MODULE: ./js/app.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return app_App; });
function app_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { app_typeof = function _typeof(obj) { return typeof obj; }; } else { app_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return app_typeof(obj); }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }

function app_possibleConstructorReturn(self, call) { if (call && (app_typeof(call) === "object" || typeof call === "function")) { return call; } return app_assertThisInitialized(self); }

function app_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function app_getPrototypeOf(o) { app_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return app_getPrototypeOf(o); }

function app_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) app_setPrototypeOf(subClass, superClass); }

function app_setPrototypeOf(o, p) { app_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return app_setPrototypeOf(o, p); }














var app_App =
/*#__PURE__*/
function (_UIComponent) {
  app_inherits(App, _UIComponent);

  function App(element) {
    app_classCallCheck(this, App);

    return app_possibleConstructorReturn(this, app_getPrototypeOf(App).call(this, element));
  }

  app_createClass(App, [{
    key: "init",
    value: function init(debug) {
      if (debug) {
        console.log("App.init");
      }

      tsunami["a" /* applyDirectives */](this.element, this);
      Clock["a" /* clock */].addEventListener(Clock["b" /* default */].TICK, this.clockTick.bind(this));
      window.addEventListener("resize", this.resizeHandler.bind(this));
      this.resizeHandler();
    }
  }, {
    key: "clockTick",
    value: function clockTick(event) {
      var animationData = {
        time: Clock["a" /* clock */].time
      };
      this.animationFrame(animationData);
    }
  }, {
    key: "resizeHandler",
    value: function resizeHandler(event) {
      var rectangle = this.getRect();
      rectangle.orientation = rectangle.width > rectangle.height ? "landscape" : "portrait";

      if (rectangle.orientation != this.windowSize.orientation) {
        this.orientationChange(rectangle.orientation);
      }

      this.windowResize(rectangle);
    }
  }]);

  return App;
}(UIComponent["a" /* default */]);


tsunami["b" /* define */]("ui-component", UIComponent["a" /* default */]);
tsunami["b" /* define */]("ui-button", UIButton["a" /* default */]);
tsunami["b" /* define */]("ui-list", UIList["a" /* default */]);
tsunami["b" /* define */]("ui-input", UIInput_UIInput);
tsunami["b" /* define */]("ui-select", UISelect_UISelect);
tsunami["b" /* define */]("ui-text", UIText_UIText);
tsunami["b" /* define */]("ui-number", UINumber_UINumber);
tsunami["b" /* define */]("ui-scroll-pane", UIScrollPane_UIScrollPane);
tsunami["b" /* define */]("ui-media", UIMedia_UIMedia);
tsunami["b" /* define */]("ui-toggle", UIToggle);

/***/ }),
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 37 */,
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./js/app.js + 9 modules
var app = __webpack_require__(30);

// EXTERNAL MODULE: ./js/tsunami/tsunami.js
var tsunami = __webpack_require__(1);

// EXTERNAL MODULE: ./js/tsunami/components/UIList.js + 1 modules
var UIList = __webpack_require__(20);

// CONCATENATED MODULE: ./js/view/SpacersView.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SpacersView =
/*#__PURE__*/
function (_UIList) {
  _inherits(SpacersView, _UIList);

  function SpacersView(element) {
    var _this;

    _classCallCheck(this, SpacersView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SpacersView).call(this, element));

    _this.element.addEventListener("click", function (event) {
      console.log("SpacersView", event.type, event);
    });

    return _this;
  }

  return SpacersView;
}(UIList["a" /* default */]);


// EXTERNAL MODULE: ./js/tsunami/data/ArrayData.js + 1 modules
var ArrayData = __webpack_require__(5);

// EXTERNAL MODULE: ./js/tsunami/components/UIComponent.js + 2 modules
var UIComponent = __webpack_require__(6);

// CONCATENATED MODULE: ./js/view/MyCanvas.js
function MyCanvas_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { MyCanvas_typeof = function _typeof(obj) { return typeof obj; }; } else { MyCanvas_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return MyCanvas_typeof(obj); }

function MyCanvas_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function MyCanvas_possibleConstructorReturn(self, call) { if (call && (MyCanvas_typeof(call) === "object" || typeof call === "function")) { return call; } return MyCanvas_assertThisInitialized(self); }

function MyCanvas_getPrototypeOf(o) { MyCanvas_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return MyCanvas_getPrototypeOf(o); }

function MyCanvas_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function MyCanvas_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) MyCanvas_setPrototypeOf(subClass, superClass); }

function MyCanvas_setPrototypeOf(o, p) { MyCanvas_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return MyCanvas_setPrototypeOf(o, p); }



var MyCanvas =
/*#__PURE__*/
function (_UIComponent) {
  MyCanvas_inherits(MyCanvas, _UIComponent);

  function MyCanvas(element) {
    var _this;

    MyCanvas_classCallCheck(this, MyCanvas);

    _this = MyCanvas_possibleConstructorReturn(this, MyCanvas_getPrototypeOf(MyCanvas).call(this, element));
    _this.mousedownHandler = _this.mousedownHandler.bind(MyCanvas_assertThisInitialized(_this));
    _this.mousemoveHandler = _this.mousemoveHandler.bind(MyCanvas_assertThisInitialized(_this));
    _this.mouseupHandler = _this.mouseupHandler.bind(MyCanvas_assertThisInitialized(_this));
    _this.canvas = _this.element.querySelector("canvas");

    _this.canvas.addEventListener("mousedown", _this.mousedownHandler);

    _this.context = _this.canvas.getContext("2d");
    return _this;
  }

  _createClass(MyCanvas, [{
    key: "mousedownHandler",
    value: function mousedownHandler(event) {
      document.body.addEventListener("mousemove", this.mousemoveHandler);
      document.body.addEventListener("mouseup", this.mouseupHandler);
      this.draw(event);
    }
  }, {
    key: "mousemoveHandler",
    value: function mousemoveHandler(event) {
      this.draw(event);
    }
  }, {
    key: "draw",
    value: function draw(event) {
      var point = this.getTouchPoint(event).subtract(this.rectangle.position);
      var context = this.context;
      context.beginPath();
      context.arc(point.x, point.y, 5, 0, 2 * Math.PI, false);
      context.closePath();
      context.fillStyle = 'white';
      context.fill();
    }
  }, {
    key: "mouseupHandler",
    value: function mouseupHandler(event) {
      document.body.removeEventListener("mousemove", this.mousemoveHandler);
      document.body.removeEventListener("mouseup", this.mouseupHandler);
    }
  }]);

  return MyCanvas;
}(UIComponent["a" /* default */]);


// CONCATENATED MODULE: ./js/test.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return test_Test; });
function test_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { test_typeof = function _typeof(obj) { return typeof obj; }; } else { test_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return test_typeof(obj); }

function test_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test_possibleConstructorReturn(self, call) { if (call && (test_typeof(call) === "object" || typeof call === "function")) { return call; } return test_assertThisInitialized(self); }

function test_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function test_getPrototypeOf(o) { test_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return test_getPrototypeOf(o); }

function test_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) test_setPrototypeOf(subClass, superClass); }

function test_setPrototypeOf(o, p) { test_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return test_setPrototypeOf(o, p); }







var test_Test =
/*#__PURE__*/
function (_App) {
  test_inherits(Test, _App);

  function Test(element) {
    var _this;

    test_classCallCheck(this, Test);

    _this = test_possibleConstructorReturn(this, test_getPrototypeOf(Test).call(this, element));
    _this.spacers = new ArrayData["a" /* default */]();

    for (var i = 0; i < 10; i++) {
      var spacer = {};

      _this.spacers.push(spacer);
    }

    return _this;
  }

  return Test;
}(app["a" /* default */]);


tsunami["b" /* define */]("spacers-view", SpacersView);
tsunami["b" /* define */]("my-canvas", MyCanvas);
var test = new test_Test(document.body);
test.init();

/***/ })
/******/ ]);