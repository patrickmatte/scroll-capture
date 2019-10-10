import {isTouch} from "../window";
import Point from "../geom/Point";

export default class MovementMonitor {

	constructor(maxRot = 5, friction = 0.9) {
		this.maxRot = maxRot;
		this.friction = friction;

		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.deviceMotionHandler = this.deviceMotionHandler.bind(this);

		this.value = {
			y: 0,
			x: 0
		};

		this.easedValue = {
			y: 0,
			x: 0
		};

		this.values = {
			raw:this.value,
			eased:this.easedValue
		}

		// this.defaultTiltMultiplier = {
		// 	y: 5,
		// 	x: 5
		// };
		//
		// this.tiltMultiplier = {
		// 	y: this.defaultTiltMultiplier.y,
		// 	x: this.defaultTiltMultiplier.x
		// };
		//
		// this.easedTilt = {
		// 	y: 0,
		// 	x: 0
		// };
		//
		// this.tiltDrag = {
		// 	y: 0,
		// 	x: 0
		// };
		//
		// this.friction = 0.1;
	}

	start() {
		this.initialAccelerationIncludingGravity = {x:0, y:0};

		if (!isTouch) {
			document.body.addEventListener("mousemove", this.mouseMoveHandler);
		}

		window.addEventListener("devicemotion", this.deviceMotionHandler);
	}

	stop() {
		window.removeEventListener("devicemotion", this.deviceMotionHandler);

		if (!isTouch) {
			document.body.removeEventListener("mousemove", this.mouseMoveHandler);
		}
	}

	windowResize(rect) {
		this.rect = rect;
	}

	deviceMotionHandler (event) {
		let diff = this.getDeviceMotionDifference(event);
		if (diff.x != 0 && diff.y != 0 && !isNaN(diff.x) && !isNaN(diff.y)) {
			document.body.removeEventListener("mousemove", this.mouseMoveHandler);
		}

		let y = Math.round(diff.y * 10000) / 10000;
		let x = Math.round(diff.x * 10000) / 10000;

		if (y < -this.maxRot) {
			y = -this.maxRot;
		}
		if (y > this.maxRot) {
			y = this.maxRot;
		}

		if (x < -this.maxRot) {
			x = -this.maxRot;
		}
		if (x > this.maxRot) {
			x = this.maxRot;
		}

		this.value.y = Math.round(y / this.maxRot * 1000) / 1000;
		this.value.x = Math.round(x / this.maxRot * 1000) / 1000;
	}

	mouseMoveHandler (event) {
		let mouse = event;
		if (isTouch) {
			mouse = event.touches[0];
		}
		let mousePoint = new Point(mouse.pageX, mouse.pageY - window.pageYOffset);

		let halfWidth = this.rect.width / 2;
		let halfHeight = this.rect.height / 2;

		let yFactor = (mousePoint.y - halfHeight) / halfHeight;
		let xFactor = (mousePoint.x - halfWidth) / halfWidth;

		if (xFactor > 0) {
			xFactor = Math.min(xFactor, 1);
		}
		if (xFactor < 0) {
			xFactor = Math.max(xFactor, -1);
		}

		//console.log(mousePoint.x, halfWidth, xFactor, mousePoint.y, halfHeight, yFactor);

		this.value.y = yFactor;
		this.value.x = xFactor;
	}

	getDeviceMotionDifference (event) {
		let width = this.rect.width;
		let height = this.rect.height;
		let deviceOrientation = "landscape";
		let deviceDirection = "up";
		let x = 0;
		let y = 0;

		if (height > width) {
			deviceOrientation = "portrait"
		}

		if (deviceOrientation == "portrait") {
			if (event.accelerationIncludingGravity.y > 0) {
				deviceDirection = "down";
			}
			x = event.accelerationIncludingGravity.x;
			y = event.accelerationIncludingGravity.z;

		} else if (deviceOrientation == "landscape") {
			if (event.accelerationIncludingGravity.x > 0) {
				deviceDirection = "down";
			}
			x = event.accelerationIncludingGravity.y;
			y = event.accelerationIncludingGravity.z;
		}

		if (deviceOrientation != this.deviceOrientation || deviceDirection != this.deviceDirection) {
			this.deviceOrientation = deviceOrientation;
			this.deviceDirection = deviceDirection;
			this.initialAccelerationIncludingGravity = {x: x, y: y};
		}

		let diff = {
			x: x - this.initialAccelerationIncludingGravity.x,
			y: y - this.initialAccelerationIncludingGravity.y
		};

		return diff;
	}

	animationFrame() {
		this.easedValue.x += (this.value.x - this.easedValue.x) * (1 - this.friction);
		this.easedValue.y += (this.value.y - this.easedValue.y) * (1 - this.friction);
	}

}