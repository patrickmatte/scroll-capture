import BaseEvent, {events} from "../events";
import {isTouch} from "../window";
import Point from "../geom/Point";
import Rectangle from "../geom/Rectangle";
import UIComponent from "./UIComponent";
import Tween from "../animation/Tween";
import TweenProperty from "../animation/TweenProperty";
import Easing from "../animation/Easing";
import BooleanData from "../data/BooleanData";

export default class UIScrollPane extends UIComponent {

	constructor(element, listSelector = ".panel") {
		super(element);

		this.scrollingPanel = this.element.querySelector(listSelector);

		this.wheelDirection = 1;

		this._autoScrollFactor = 0;
		this.infiniteLoop = {x: false, y: false};
		this.loopPoint = new Point(0, 0);
		this.autoScrollSpeed = 1;
		this.scrollTarget = new Point();
		this.scroll = new Point();
		this.speed = new Point();
		this.momentum = new Point();
		this.minScroll = new Point();
		this.maxScroll = new Point();
		this.size = new Rectangle();
		this.panelSize = new Rectangle();

		this.startTouchDiff = new Point();

		this.springiness = 0;
		this.inertia = 1;

		this.elasticScrollInertia = 0.1;
		this.elasticScrollElasticity = new Point(0.15, 0);

		this.momentumFriction = 0.965;
		this.momentumScaleLimit = 0.5;

		this.maxScrollReached = {
			x:new BooleanData(),
			y:new BooleanData()
		};

		this.wheelHandler = this.wheelHandler.bind(this);
		this.mousedownHandler = this.mousedownHandler.bind(this);
		this.mousemoveHandler = this.mousemoveHandler.bind(this);
		this.mouseupHandler = this.mouseupHandler.bind(this);

		this.element.addEventListener(events.mousedown, this.mousedownHandler);

		this.autoScrollTimeoutDuration = 4;
		this._startAutoScroll = this._startAutoScroll.bind(this);

		if(this.debug) {
			console.log("events", events);
		}
	}

	set autoScroll(value) {
		this._autoScroll = value;
		this._stopAutoScroll();
		if (value) {
			this._startAutoScroll();
		}
	}

	get autoScroll() {
		return this._autoScroll;
	}

	get wheelEnabled() {
		return this._wheelEnabled;
	}

	set wheelEnabled(value) {
		this._wheelEnabled = value;
		if(value) {
			this.addWheelHandler();
		} else {
			this.removeWheelHandler();
		}
	}

	addWheelHandler() {
		this.removeWheelHandler();
		this.element.addEventListener("wheel", this.wheelHandler);
	}

	removeWheelHandler() {
		this.element.removeEventListener("wheel", this.wheelHandler);
	}

	wheelHandler(event) {
		event.preventDefault();
		this.stopTween();
		if(this.maxScroll.y > 0) {
			this.scrollTarget.y += event.deltaY * this.wheelDirection;
		}
		this.dispatchEvent(new BaseEvent(UIScrollPane.WHEEL, event));
	}

	_startAutoScrollTimeout() {
		this._stopAutoScrollTimeout();
		if (this.autoScroll) {
			this._autoScrollTimeout = setTimeout(this._startAutoScroll, this.autoScrollTimeoutDuration * 1000);
		}
	}

	_stopAutoScrollTimeout() {
		clearTimeout(this._autoScrollTimeout);
	}

	_startAutoScroll() {
		if (this.autoScroll) {
			this.autoScrollTween = new Tween(0, 2, [new TweenProperty(this, "_autoScrollFactor", 0, 1, Easing.cubic.easeInOut)]);
			this.autoScrollTween.start();
		}
	}

	_stopAutoScroll() {
		this._stopAutoScrollTimeout();
		if(this.autoScrollTween) {
			this.autoScrollTween.stop();
		}
		this._autoScrollFactor = 0;
	}

	tweenTo(targetX = 0, targetY = 0) {
		this.stopTween();
		this.tweenPromise = Promise.resolve();

		let currentX = this.scroll.x;
		let currentY = this.scroll.y;

		if(this.infiniteLoop.x) {
			if (this.panelSize.width > 0) {
				while ((currentX - targetX) > this.panelSize.width / 2) {
					currentX -= this.panelSize.width;
				}

				while ((currentX - targetX) < this.panelSize.width / -2) {
					currentX += this.panelSize.width;
				}
			}
		}

		if(this.infiniteLoop.y) {
			if (this.panelSize.height > 0) {
				while ((currentY - targetY) > this.panelSize.height / 2) {
					currentY -= this.panelSize.height;
				}

				while ((currentY - targetY) < this.panelSize.height / -2) {
					currentY += this.panelSize.height;
				}
			}
		}

		let props = [];
		if (currentX != targetX) {
			props.push(new TweenProperty(this.scrollTarget, "x", currentX, targetX, Easing.cubic.easeOut, 100));
		}
		if (currentY != targetY) {
			props.push(new TweenProperty(this.scrollTarget, "y", currentY, targetY, Easing.cubic.easeOut, 100));
		}
		if (props.length > 0) {
			this.tween = new Tween(0, 0.75, props);
			this.tweenPromise = this.tween.start();
		}
		return this.tweenPromise;
	}

	stopTween() {
		if(this.tween) {
			this.tween.stop();
		}
	}

	animationFrame(data) {
		super.animationFrame(data);

		let scale = this.windowSize.remScale || 1;

		if (this.maxScroll.x > 0) {
			this.scrollTarget.x += Math.round(scale * this.autoScrollSpeed * this._autoScrollFactor * 10) / 10;
		}
		if (this.maxScroll.y > 0) {
			this.scrollTarget.y += Math.round(scale * this.autoScrollSpeed * this._autoScrollFactor * 10) / 10;
		}

		let previousScroll = this.scroll.clone();

		if (!this.isDragging && !this.ignoreElasticScroll) {

			this.scrollTarget.x = this.scrollTarget.x + this.momentum.x;
			this.scrollTarget.y = this.scrollTarget.y + this.momentum.y;

			let clamp = {x:NaN, y:NaN};
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

			let elasticityX = this.size.width * this.elasticScrollElasticity.x;
			let elasticityY = this.size.height * this.elasticScrollElasticity.y;

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

		this.maxScrollReached.x.value = (this.scroll.x >= this.maxScroll.x);
		this.maxScrollReached.y.value = (this.scroll.y >= this.maxScroll.y);

		let x = Math.round(this.scroll.x * 10) / 10;
		let y = Math.round(this.scroll.y * 10) / 10;

		if(this.infiniteLoop.y) {
			let minY = 0 - this.loopPoint.y;
			let maxY = this.panelSize.height - this.size.height + this.loopPoint.y;

			while (y < minY) {
				y += this.panelSize.height;
			}

			while (y > maxY) {
				y -= this.panelSize.height;
			}
		}

		this.updateTransform(x, y);
	}

	updateTransform(x, y) {
		this.scrollingPanel.style.transform = "translate3d(" + -x + "px, " + -y + "px, 0)";
		// this.scrollingPanel.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
	}

	windowResize(windowSize) {
		super.windowResize(windowSize);
		this.updatePanelSize();
		this.updateMaxScroll();
	}

	updatePanelSize() {
		this.size.width = this.rectangle.width;
		this.size.height = this.rectangle.height;
		this.panelSize.width = this.scrollingPanel.offsetWidth;
		this.panelSize.height = this.scrollingPanel.offsetHeight;
	}

	updateMaxScroll() {
		this.maxScroll.x = Math.max(this.panelSize.width - this.size.width, 0);
		this.maxScroll.y = Math.max(this.panelSize.height - this.size.height, 0);
		if(this.infiniteLoop.x) {
			this.minScroll.x = Number.MAX_VALUE * -1;
			this.maxScroll.x = Number.MAX_VALUE;
		}
		if(this.infiniteLoop.y) {
			this.minScroll.y = Number.MAX_VALUE * -1;
			this.maxScroll.y = Number.MAX_VALUE;
		}
		this.element.setAttribute("data-scroll-x", (this.maxScroll.x > 0));
		this.element.setAttribute("data-scroll-y", (this.maxScroll.y > 0));
	}

	mousedownHandler(event) {
		this.stopTween();
		this.removeWheelHandler();
		this.momentum.x = this.momentum.y = 0;
		this.scrollTarget.copyFrom(this.scroll);

		if(event.target.tagName.toLowerCase() === 'input') {
			return;
		}

		if (this.maxScroll.x <= 0 && this.maxScroll.y <= 0) {
			return;
		}

		if (!isTouch) {
			event.preventDefault();
		}

		if(this.autoScroll) {
			this._stopAutoScroll();
		}

		this.isDragging = false;

		this.scrollStart = this.scroll.clone();
		this.touchStart = this.getTouchPoint(event);
		this.touchPrevious = this.touchStart;

		window.addEventListener(events.mousemove, this.mousemoveHandler);
		window.addEventListener(events.mouseup, this.mouseupHandler);
	}

	get isDragging() {
		return this._isDragging;
	}

	set isDragging(value) {
		this._isDragging = value;
		if (value) {
			this.element.classList.add("drag");
		} else {
			this.element.classList.remove("drag");
		}
	}

	static get DRAG_START() {
		return "dragStart";
	}

	static get DRAG_END() {
		return "dragEnd";
	}

	static get WHEEL() {
		return "wheel";
	}

	mousemoveHandler(event) {
		// if (!isTouch) {
		event.preventDefault();
		// }

		let touchNew = this.getTouchPoint(event);

		let distance = Point.distance(touchNew, this.touchStart);

		if (Math.abs(distance) > 2 && !this.isDragging) {
			this.isDragging = true;
			this.dispatchEvent(new Event(UIScrollPane.DRAG_START));
		}

		this.momentum = this.touchPrevious.subtract(touchNew);
		this.startTouchDiff = this.touchStart.subtract(touchNew);

		this.scrollTarget = new Point(this.scrollStart.x + this.startTouchDiff.x, this.scrollStart.y + this.startTouchDiff.y);

		this.touchPrevious = touchNew;

		let clamp = {x:NaN, y:NaN};
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

	getMinimumAbsoluteMomentum(value, max) {
		let valueScale = (value < 0)?-1:1;
		let valueAbs = Math.min(Math.abs(value), max);
		value = valueAbs * valueScale;
		return value;
	}

	mouseupHandler(event) {
		// if (this.isDragging) {
		// event.preventDefault();
		// }
		window.removeEventListener(events.mousemove, this.mousemoveHandler);
		window.removeEventListener(events.mouseup, this.mouseupHandler);
		if(this.wheelEnabled) {
			this.addWheelHandler();
		}

		if(this.autoScroll) {
			this._startAutoScrollTimeout();
		}

		this.isDragging = false;

		let momentumScaleX = this.size.width * this.momentumScaleLimit;
		this.momentum.x = this.getMinimumAbsoluteMomentum(this.momentum.x, momentumScaleX);

		let momentumScaleY = this.size.height * this.momentumScaleLimit;
		this.momentum.y = this.getMinimumAbsoluteMomentum(this.momentum.y, momentumScaleY);

		this.dispatchEvent(new Event(UIScrollPane.DRAG_END));
	}

}