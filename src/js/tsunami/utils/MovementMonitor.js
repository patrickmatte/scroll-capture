import {isTouch} from "../window";
import Point from "../geom/Point";

export default class MovementMonitor {

	constructor(component, rotationMax = 5, friction = 0.9) {
		this.component = component;
		this.rotationMax = rotationMax;
		this.friction = friction;

		this.mouseMoveHandler = this.mouseMoveHandler.bind(this);
		this.deviceMotionHandler = this.deviceMotionHandler.bind(this);
		this.touchstartHandlerIOS = this.touchstartHandlerIOS.bind(this);

		this.value = new Point();
		this.easedValue = new Point();
	}

	start() {
		this.initialAccelerationIncludingGravity = new Point();

		if (!isTouch) {
			this.component.element.addEventListener("mousemove", this.mouseMoveHandler);
		}
		let hasDeviceMotion = ('DeviceMotionEvent' in window);
		// console.log("hasDeviceMotion", hasDeviceMotion);
		if(hasDeviceMotion) {
			if (typeof DeviceMotionEvent.requestPermission === 'function') {
				// iOS 13+
				document.body.addEventListener("click", this.touchstartHandlerIOS);
			}
		} else {
			// non iOS 13+
			window.addEventListener("devicemotion", this.deviceMotionHandler);
		}
	}

	touchstartHandlerIOS(event) {
		// console.log("touchstartHandlerIOS", event.type);
		document.body.removeEventListener("click", this.touchstartHandlerIOS);
		DeviceMotionEvent.requestPermission().then(response => {
			// console.log("requestPermission", response);
			if (response == 'granted') {
				window.addEventListener("devicemotion", this.deviceMotionHandler);
			}
		}).catch(console.error);
	}

	stop() {
		window.removeEventListener("devicemotion", this.deviceMotionHandler);

		if (!isTouch) {
			this.component.element.removeEventListener("mousemove", this.mouseMoveHandler);
		}
	}

	removeMouseMove() {
		this.component.element.removeEventListener("mousemove", this.mouseMoveHandler);
	}

	deviceMotionHandler(event) {
		let diff = this.getDeviceMotionDifference(event);
		if (diff.x != 0 && diff.y != 0 && !isNaN(diff.x) && !isNaN(diff.y)) {
			this.removeMouseMove();
		}

		let y = -diff.y;
		let x = -diff.x;

		// if (y < -this.rotationMax) y = -this.rotationMax;
		// if (y > this.rotationMax) y = this.rotationMax;
		// if (x < -this.rotationMax) x = -this.rotationMax;
		// if (x > this.rotationMax) x = this.rotationMax;

		this.value.y = Math.round(y * 1000) / 1000;
		this.value.x = Math.round(x * 1000) / 1000;
	}

	mouseMoveHandler (event) {
		let point = new Point(event.pageX, event.pageY);
		let diff = point.subtract(this.component.globalRectangle.center);
		let multiplier = diff.divide(this.component.globalRectangle.halfSize);
		let widthToHeight = this.component.globalRectangle.size.x / this.component.globalRectangle.size.y;
		this.value.x = multiplier.x * this.rotationMax;
		this.value.y = multiplier.y * this.rotationMax / widthToHeight;
	}

	getDeviceMotionDifference (event) {
		let width = this.component.rectangle.width;
		let height = this.component.rectangle.height;
		let deviceOrientation = "landscape";
		let deviceDirection = "up";
		let acceleration = new Point(0, 0);

		if (height > width) {
			deviceOrientation = "portrait"
		}

		if (deviceOrientation == "portrait") {
			if (event.accelerationIncludingGravity.y > 0) {
				deviceDirection = "down";
			}
			acceleration.x = event.accelerationIncludingGravity.x;
			acceleration.y = event.accelerationIncludingGravity.z;

		} else if (deviceOrientation == "landscape") {
			if (event.accelerationIncludingGravity.x > 0) {
				deviceDirection = "down";
			}
			acceleration.x = event.accelerationIncludingGravity.y;
			acceleration.y = event.accelerationIncludingGravity.z;
		}

		if (deviceOrientation != this.deviceOrientation || deviceDirection != this.deviceDirection) {
			this.deviceOrientation = deviceOrientation;
			this.deviceDirection = deviceDirection;
			this.initialAccelerationIncludingGravity = acceleration.clone();
			// console.log("initialAccelerationIncludingGravity", this.initialAccelerationIncludingGravity.toString());
		}

		let diff = acceleration.subtract(this.initialAccelerationIncludingGravity);
		return diff;
	}

	animationFrame() {
		this.easedValue.x += (this.value.x - this.easedValue.x) * (1 - this.friction);
		this.easedValue.y += (this.value.y - this.easedValue.y) * (1 - this.friction);
	}

}