import {isTouch} from "./window";

export let events = {
	mouseover:"mouseover",
	mouseout:"mouseout",
	mousedown:"mousedown",
	mouseup:"mouseup",
	mousemove:"mousemove",
	click:"click",
	transitionend:'transitionend',
	animationstart:'animationstart',
	animationiteration:'animationiteration',
	animationend:'animationend'
};

if (isTouch) {
	events.mouseover = "touchstart";
	events.mouseout = "touchend";
	events.mousedown = "touchstart";
	events.mouseup = "touchend";
	events.mousemove = "touchmove";
	events.click = "click";
}

let platforms = {
	'OTransition':{
		transitionend:'otransitionend',
		animationstart:'oanimationstart',
		animationiteration:'oanimationiteration',
		animationend:'oanimationend'
	},
	'MozTransition':{
		transitionend:'transitionend',
		animationstart:'moznimationstart',
		animationiteration:'moznimationiteration',
		animationend:'moznimationend'
	},
	'WebkitTransition':{
		transitionend:'webkitTransitionEnd',
		animationstart:'webkitAnimationStart',
		animationiteration:'webkitAnimationIteration',
		animationend:'webkitAnimationEnd'
	}
};

window.addEventListener("load", function() {
	for (let i in platforms) {
		let data = platforms[i];
		if (document.body.style[i] !== undefined) {
			events.transitionend = data.transitionend;
			events.animationstart = data.animationstart;
			events.animationiteration = data.animationiteration;
			events.animationend = data.animationend;
		}
	}
});

export function createCustomEvent (type, params) {
	let event;
	try {
		event = new CustomEvent(event, params);
	} catch(e) {
		event =  document.createEvent('CustomEvent');
		event.initCustomEvent(type, params.bubbles, params.bubbles, params.detail);
	}
	return event;
}

export default class BaseEvent {

	constructor(type, value) {
		this.type = type;
		this.value = value;
	}

	stopPropagation(){}

	stopImmediatePropagation(){}

	preventDefault(){}

}