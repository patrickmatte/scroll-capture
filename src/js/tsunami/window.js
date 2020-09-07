import Rectangle from "./geom/Rectangle";
import Point from "./geom/Point";

export let isMobile;
if (typeof navigator !== "undefined") {
	isMobile = {
		android: navigator.userAgent.match(/Android/i) ? true : false,
		blackBerry: navigator.userAgent.match(/BlackBerry/i) ? true : false,
		iOS: navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false,
		windows: navigator.userAgent.match(/IEMobile/i) ? true : false,
	}
	isMobile.any = isMobile.android || isMobile.blackBerry || isMobile.iOS || isMobile.windows;
}

export let isTouch;

if (typeof window !== "undefined") {
	isTouch = "ontouchend" in window;
}

export function getCookie(cname) {
	let name = cname + "=";
	let ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == " ") c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}

export function serialize(obj) {
	let str = [];
	for (let p in obj) {
		if (obj.hasOwnProperty(p)) {
			str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
		}
	}
	return str.join("&");
}

export function getSearchParams(url, dontDecodeURI, obj = {}) {
	if (!url) {
		url = window.location.href;
	}

	if (url.indexOf("?") != -1) {
		let hashes = window.location.href
			.slice(window.location.href.indexOf("?") + 1)
			.split("&");
		for (let i = 0; i < hashes.length; i++) {
			let string = hashes[i];
			let equalIndex = string.indexOf("=");
			if (equalIndex != -1) {
				let hash = [];
				//let hash = hashes[i].split('=');
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

export function getRect() {
	let rectangle = new Rectangle();
	rectangle.width = window.innerWidth;
	rectangle.height = window.innerHeight;
	return rectangle;
}

export function localToGlobal(element, root, point, debug = false) {
	if (!point) {
		point = new Point();
	}
	while (element && element != root) {
		//point.x += element.offsetLeft - element.parentNode.scrollLeft;
		//point.y += element.offsetTop - element.parentNode.scrollTop;
		if (debug) console.log("localToGlobal element", element.nodeName, element.className, element.offsetTop);
		point.x += element.offsetLeft;
		point.y += element.offsetTop;
		element = element.parentNode;
	}
	return point;
}

export function localToGlobalX(element, root, x = 0, debug = false) {
	while (element != root) {
		// if (debug) {
		// 	console.log("element", element.className, element.offsetLeft);
		// }
		x += element.offsetLeft;
		element = element.parentNode;
	}
	return x;
}

export function localToGlobalY(element, root, y = 0, debug = false) {
	while (element != root) {
		// if (debug) {
		// 	console.log("element", element.nodeName, element.className, element.offsetTop);
		// }
		y += element.offsetTop;
		element = element.parentNode;
	}
	return y;
}

export function hasWebGL() {
	try {
		let canvas = document.createElement("canvas");
		return !!(
			window.WebGLRenderingContext &&
			(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
		);
	} catch (e) {
		return false;
	}
}

export function isHidden() {
	return document[window.hidden];
}

let devideOrientation = "";
let deviceDirection = "";

export function getDeviceMotionDifference(event) {
	let width = window.innerWidth;
	let height = window.innerHeight;
	let devideOrientation = "landscape";
	let deviceDirection = "up";
	let x = 0;
	let y = 0;

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

	if (
		devideOrientation != devideOrientation ||
		deviceDirection != deviceDirection
	) {
		devideOrientation = devideOrientation;
		deviceDirection = deviceDirection;
		this.initialAccelerationIncludingGravity = { x: x, y: y };
	}

	let diff = {
		x: x - this.initialAccelerationIncludingGravity.x,
		y: y - this.initialAccelerationIncludingGravity.y,
	};
	return diff;
}

export function forceProtocol(url, protocol) {
	let isHttps = protocol.indexOf("https") != -1;
	let urlIsHttps = url.indexOf("https") != -1;
	if (isHttps && !urlIsHttps) {
		url = url.split("http").join("https");
	} else if (!isHttps && urlIsHttps) {
		url = url.split("https").join("http");
	}
	return url;
}

export function fileExists(url) {
	var req = new XMLHttpRequest();
	req.open("HEAD", url, false);
	req.send();
	return req.status !== 404;
}

export function getElementSelector(element) {
	let names = [];
	while (element) {
		let elSelector = element.nodeName;
		let className = element.className;
		if (className) {
			elSelector = elSelector + "." + className.split(" ").join(".");
		}
		names.push(elSelector);
		if (element != document.body) {
			element = element.parentNode;
		} else {
			element = null;
		}
	}
	names = names.reverse();
	let selector = names.join(" > ");
	return selector;
}
