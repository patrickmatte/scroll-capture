//Adds bind support
if (!('bind' in Function.prototype)) {
	Function.prototype.bind = function(owner) {
		var that = this;
		var args = Array.prototype.slice.call(arguments, 1);
		return function() {
			return that.apply(owner, args.length===0? arguments : arguments.length===0? args : args.concat(Array.prototype.slice.call(arguments, 0)));
		};
	};
}

//Adds Promise support
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function e(t){return"function"==typeof t}function n(t){I=t}function r(t){J=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof H?function(){H(a)}:c()}function s(){var t=0,e=new V(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<G;t+=2){var e=$[t],n=$[t+1];e(n),$[t]=void 0,$[t+1]=void 0}G=0}function f(){try{var t=require,e=t("vertx");return H=e.runOnLoop||e.runOnContext,i()}catch(n){return c()}}function l(t,e){var n=arguments,r=this,o=new this.constructor(p);void 0===o[et]&&k(o);var i=r._state;return i?!function(){var t=n[i-1];J(function(){return x(i,o,t,r._result)})}():E(r,o,t,e),o}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return it.error=e,it}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){J(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===rt?S(t,e._result):e._state===ot?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===it?(j(t,it.error),it.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===nt&&(t._result=e,t._state=rt,0!==t._subscribers.length&&J(T,t))}function j(t,e){t._state===nt&&(t._state=ot,t._result=e,J(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+rt]=n,o[i+ot]=r,0===i&&t._state&&J(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?x(n,r,o,i):o(i);t._subscribers.length=0}}function M(){this.error=null}function P(t,e){try{return t(e)}catch(n){return st.error=n,st}}function x(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=P(r,o),s===st?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==nt||(i&&c?g(n,s):a?j(n,u):t===rt?S(n,s):t===ot&&j(n,s))}function C(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function O(){return ut++}function k(t){t[et]=ut++,t._state=void 0,t._result=void 0,t._subscribers=[]}function Y(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[et]||k(this.promise),B(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&S(this.promise,this._result))):j(this.promise,q())}function q(){return new Error("Array Methods must be provided an Array")}function F(t){return new Y(this,t).promise}function D(t){var e=this;return new e(B(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function K(t){var e=this,n=new e(p);return j(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function N(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function U(t){this[et]=O(),this._result=this._state=void 0,this._subscribers=[],p!==t&&("function"!=typeof t&&L(),this instanceof U?C(this,t):N())}function W(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=U}var z=void 0;z=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var B=z,G=0,H=void 0,I=void 0,J=function(t,e){$[G]=t,$[G+1]=e,G+=2,2===G&&(I?I(a):tt())},Q="undefined"!=typeof window?window:void 0,R=Q||{},V=R.MutationObserver||R.WebKitMutationObserver,X="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),Z="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,$=new Array(1e3),tt=void 0;tt=X?o():V?s():Z?u():void 0===Q&&"function"==typeof require?f():c();var et=Math.random().toString(36).substring(16),nt=void 0,rt=1,ot=2,it=new M,st=new M,ut=0;return Y.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===nt&&n<t;n++)this._eachEntry(e[n],n)},Y.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==nt)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===U){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},Y.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===nt&&(this._remaining--,t===ot?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},Y.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(rt,e,t)},function(t){return n._settledAt(ot,e,t)})},U.all=F,U.race=D,U.resolve=h,U.reject=K,U._setScheduler=n,U._setAsap=r,U._asap=J,U.prototype={constructor:U,then:l,"catch":function(t){return this.then(null,t)}},U.polyfill=W,U.Promise=U,U.polyfill(),U});

//Adds window.location.origin support
if (!window.location.origin) {
	window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
}

(function () {

	if (!window.CustomEvent) {

		var CustomEvent = function ( event, params ) {
			params = params || { bubbles: false, cancelable: false, detail: undefined };
			var evt = document.createEvent( 'CustomEvent' );
			evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
			return evt;
		}

		CustomEvent.prototype = window.Event.prototype;

		window.CustomEvent = CustomEvent;

	}

})();

// Adds ES5 Object.create functionality
if (typeof Object.create != 'function') {
	Object.create = (function(undefined) {
		var Temp = function() {};
		return function (prototype, propertiesObject) {
			if(prototype !== Object(prototype) && prototype !== null) {
				throw TypeError('Argument must be an object, or null');
			}
			Temp.prototype = prototype || {};
			if (propertiesObject !== undefined) {
				Object.defineProperties(Temp.prototype, propertiesObject);
			}
			var result = new Temp();
			Temp.prototype = null;
			// to imitate the case of Object.create(null)
			if(prototype === null) {
				result.__proto__ = null;
			}
			return result;
		};
	})();
}


// Adds ES2015 Object.assign functionality
if (typeof Object.assign != 'function') {
	Object.assign = function(target) {
		'use strict';
		if (target == null) {
			throw new TypeError('Cannot convert undefined or null to object');
		}

		target = Object(target);
		for (var index = 1; index < arguments.length; index++) {
			var source = arguments[index];
			if (source != null) {
				for (var key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
		}
		return target;
	};
}




// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}
	if(!window.requestAnimationFrame)
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	if(!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
}());


// Production steps of ECMA-262, Edition 5, 15.4.4.19
// Reference: http://es5.github.io/#x15.4.4.19
if (!Array.prototype.map) {

	Array.prototype.map = function(callback, thisArg) {

		var T, A, k;

		if (this == null) {
			throw new TypeError(' this is null or not defined');
		}

		// 1. Let O be the result of calling ToObject passing the |this|
		//    value as the argument.
		var O = Object(this);

		// 2. Let lenValue be the result of calling the Get internal
		//    method of O with the argument "length".
		// 3. Let len be ToUint32(lenValue).
		var len = O.length >>> 0;

		// 4. If IsCallable(callback) is false, throw a TypeError exception.
		// See: http://es5.github.com/#x9.11
		if (typeof callback !== 'function') {
			throw new TypeError(callback + ' is not a function');
		}

		// 5. If thisArg was supplied, let T be thisArg; else let T be undefined.
		if (arguments.length > 1) {
			T = thisArg;
		}

		// 6. Let A be a new array created as if by the expression new Array(len)
		//    where Array is the standard built-in constructor with that name and
		//    len is the value of len.
		A = new Array(len);

		// 7. Let k be 0
		k = 0;

		// 8. Repeat, while k < len
		while (k < len) {

			var kValue, mappedValue;

			// a. Let Pk be ToString(k).
			//   This is implicit for LHS operands of the in operator
			// b. Let kPresent be the result of calling the HasProperty internal
			//    method of O with argument Pk.
			//   This step can be combined with c
			// c. If kPresent is true, then
			if (k in O) {

				// i. Let kValue be the result of calling the Get internal
				//    method of O with argument Pk.
				kValue = O[k];

				// ii. Let mappedValue be the result of calling the Call internal
				//     method of callback with T as the this value and argument
				//     list containing kValue, k, and O.
				mappedValue = callback.call(T, kValue, k, O);

				// iii. Call the DefineOwnProperty internal method of A with arguments
				// Pk, Property Descriptor
				// { Value: mappedValue,
				//   Writable: true,
				//   Enumerable: true,
				//   Configurable: true },
				// and false.

				// In browsers that support Object.defineProperty, use the following:
				// Object.defineProperty(A, k, {
				//   value: mappedValue,
				//   writable: true,
				//   enumerable: true,
				//   configurable: true
				// });

				// For best browser support, use the following:
				A[k] = mappedValue;
			}
			// d. Increase k by 1.
			k++;
		}

		// 9. return A
		return A;
	};
}







/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-07-23
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if ("document" in self) {

// Full polyfill for browsers with no classList support
	if (!("classList" in document.createElement("_"))) {

		(function (view) {

			"use strict";

			if (!('Element' in view)) return;

			var
				classListProp = "classList"
				, protoProp = "prototype"
				, elemCtrProto = view.Element[protoProp]
				, objCtr = Object
				, strTrim = String[protoProp].trim || function () {
						return this.replace(/^\s+|\s+$/g, "");
					}
				, arrIndexOf = Array[protoProp].indexOf || function (item) {
						var
							i = 0
							, len = this.length
							;
						for (; i < len; i++) {
							if (i in this && this[i] === item) {
								return i;
							}
						}
						return -1;
					}
			// Vendors: please allow content code to instantiate DOMExceptions
				, DOMEx = function (type, message) {
					this.name = type;
					this.code = DOMException[type];
					this.message = message;
				}
				, checkTokenAndGetIndex = function (classList, token) {
					if (token === "") {
						throw new DOMEx(
							"SYNTAX_ERR"
							, "An invalid or illegal string was specified"
						);
					}
					if (/\s/.test(token)) {
						throw new DOMEx(
							"INVALID_CHARACTER_ERR"
							, "String contains an invalid character"
						);
					}
					return arrIndexOf.call(classList, token);
				}
				, ClassList = function (elem) {
					var
						trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
						, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
						, i = 0
						, len = classes.length
						;
					for (; i < len; i++) {
						this.push(classes[i]);
					}
					this._updateClassName = function () {
						elem.setAttribute("class", this.toString());
					};
				}
				, classListProto = ClassList[protoProp] = []
				, classListGetter = function () {
					return new ClassList(this);
				}
				;
// Most DOMException implementations don't allow calling DOMException's toString()
// on non-DOMExceptions. Error's toString() is sufficient here.
			DOMEx[protoProp] = Error[protoProp];
			classListProto.item = function (i) {
				return this[i] || null;
			};
			classListProto.contains = function (token) {
				token += "";
				return checkTokenAndGetIndex(this, token) !== -1;
			};
			classListProto.add = function () {
				var
					tokens = arguments
					, i = 0
					, l = tokens.length
					, token
					, updated = false
					;
				do {
					token = tokens[i] + "";
					if (checkTokenAndGetIndex(this, token) === -1) {
						this.push(token);
						updated = true;
					}
				}
				while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.remove = function () {
				var
					tokens = arguments
					, i = 0
					, l = tokens.length
					, token
					, updated = false
					, index
					;
				do {
					token = tokens[i] + "";
					index = checkTokenAndGetIndex(this, token);
					while (index !== -1) {
						this.splice(index, 1);
						updated = true;
						index = checkTokenAndGetIndex(this, token);
					}
				}
				while (++i < l);

				if (updated) {
					this._updateClassName();
				}
			};
			classListProto.toggle = function (token, force) {
				token += "";

				var
					result = this.contains(token)
					, method = result ?
					force !== true && "remove"
						:
					force !== false && "add"
					;

				if (method) {
					this[method](token);
				}

				if (force === true || force === false) {
					return force;
				} else {
					return !result;
				}
			};
			classListProto.toString = function () {
				return this.join(" ");
			};

			if (objCtr.defineProperty) {
				var classListPropDesc = {
					get: classListGetter
					, enumerable: true
					, configurable: true
				};
				try {
					objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
				} catch (ex) { // IE 8 doesn't support enumerable:true
					if (ex.number === -0x7FF5EC54) {
						classListPropDesc.enumerable = false;
						objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
					}
				}
			} else if (objCtr[protoProp].__defineGetter__) {
				elemCtrProto.__defineGetter__(classListProp, classListGetter);
			}

		}(self));

	} else {
// There is full or partial native classList support, so just check if we need
// to normalize the add/remove and toggle APIs.

		(function () {
			"use strict";

			var testElement = document.createElement("_");

			testElement.classList.add("c1", "c2");

			// Polyfill for IE 10/11 and Firefox <26, where classList.add and
			// classList.remove exist but support only one argument at a time.
			if (!testElement.classList.contains("c2")) {
				var createMethod = function(method) {
					var original = DOMTokenList.prototype[method];

					DOMTokenList.prototype[method] = function(token) {
						var i, len = arguments.length;

						for (i = 0; i < len; i++) {
							token = arguments[i];
							original.call(this, token);
						}
					};
				};
				createMethod('add');
				createMethod('remove');
			}

			testElement.classList.toggle("c3", false);

			// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
			// support the second argument.
			if (testElement.classList.contains("c3")) {
				var _toggle = DOMTokenList.prototype.toggle;

				DOMTokenList.prototype.toggle = function(token, force) {
					if (1 in arguments && !this.contains(token) === !force) {
						return force;
					} else {
						return _toggle.call(this, token);
					}
				};

			}

			testElement = null;
		}());

	}

}








/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */

window.matchMedia || (window.matchMedia = function() {
	"use strict";

	// For browsers that support matchMedium api such as IE 9 and webkit
	var styleMedia = (window.styleMedia || window.media);

	// For those that don't support matchMedium
	if (!styleMedia) {
		var style       = document.createElement('style'),
			script      = document.getElementsByTagName('script')[0],
			info        = null;

		style.type  = 'text/css';
		style.id    = 'matchmediajs-test';

		script.parentNode.insertBefore(style, script);

		// 'style.currentStyle' is used by IE <= 8 and 'window.getComputedStyle' for all other browsers
		info = ('getComputedStyle' in window) && window.getComputedStyle(style, null) || style.currentStyle;

		styleMedia = {
			matchMedium: function(media) {
				var text = '@media ' + media + '{ #matchmediajs-test { width: 1px; } }';

				// 'style.styleSheet' is used by IE <= 8 and 'style.textContent' for all other browsers
				if (style.styleSheet) {
					style.styleSheet.cssText = text;
				} else {
					style.textContent = text;
				}

				// Test if media query is true or false
				return info.width === '1px';
			}
		};
	}

	return function(media) {
		return {
			matches: styleMedia.matchMedium(media || 'all'),
			media: media || 'all'
		};
	};
}());

/*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
(function(){
	// Bail out for browsers that have addListener support
	if (window.matchMedia && window.matchMedia('all').addListener) {
		return false;
	}

	var localMatchMedia = window.matchMedia,
		hasMediaQueries = localMatchMedia('only all').matches,
		isListening     = false,
		timeoutID       = 0,    // setTimeout for debouncing 'handleChange'
		queries         = [],   // Contains each 'mql' and associated 'listeners' if 'addListener' is used
		handleChange    = function(evt) {
			// Debounce
			clearTimeout(timeoutID);

			timeoutID = setTimeout(function() {
				for (var i = 0, il = queries.length; i < il; i++) {
					var mql         = queries[i].mql,
						listeners   = queries[i].listeners || [],
						matches     = localMatchMedia(mql.media).matches;

					// Update mql.matches value and call listeners
					// Fire listeners only if transitioning to or from matched state
					if (matches !== mql.matches) {
						mql.matches = matches;

						for (var j = 0, jl = listeners.length; j < jl; j++) {
							listeners[j].call(window, mql);
						}
					}
				}
			}, 30);
		};

	window.matchMedia = function(media) {
		var mql         = localMatchMedia(media),
			listeners   = [],
			index       = 0;

		mql.addListener = function(listener) {
			// Changes would not occur to css media type so return now (Affects IE <= 8)
			if (!hasMediaQueries) {
				return;
			}

			// Set up 'resize' listener for browsers that support CSS3 media queries (Not for IE <= 8)
			// There should only ever be 1 resize listener running for performance
			if (!isListening) {
				isListening = true;
				window.addEventListener('resize', handleChange, true);
			}

			// Push object only if it has not been pushed already
			if (index === 0) {
				index = queries.push({
					mql         : mql,
					listeners   : listeners
				});
			}

			listeners.push(listener);
		};

		mql.removeListener = function(listener) {
			for (var i = 0, il = listeners.length; i < il; i++){
				if (listeners[i] === listener){
					listeners.splice(i, 1);
				}
			}
		};

		return mql;
	};
}());
