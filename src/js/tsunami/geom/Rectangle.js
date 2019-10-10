import Point from "./Point";

export default class Rectangle {

	constructor(x = 0, y = 0, width = 0, height = 0) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

    contains(point) {
		let hit = (point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height)?true:false;
		return hit;
    }

	intersects(rect) {
		return rect.x + rect.width > this.x && rect.y + rect.height > this.y && rect.x < this.x + this.width && rect.y < this.y + this.height;
	}

	intersect(b) {
		let a = this;
		let x = Math.max(a.x, b.x);
		let num1 = Math.min(a.x + a.width, b.x + b.width);
		let y = Math.max(a.y, b.y);
		let num2 = Math.min(a.y + a.height, b.y + b.height);
		let result;
		if (num1 >= x && num2 >= y) {
			result = new Rectangle(x, y, num1 - x, num2 - y);
		} else {
			result = new Rectangle();
		}
		return result;
	}
	
	equals(rect) {
		return (this.x == rect.x && this.y == rect.y && this.width == rect.width && this.height == rect.height);
	}

	clone() {
		return new Rectangle(this.x, this.y, this.width, this.height);
	}

	copyFrom(rect) {
		this.x = rect.x;
		this.y = rect.y;
		this.width = rect.width;
		this.height = rect.height;
	}

	get position() {
		return new Point(this.x, this.y);
	}

	set position(point) {
		this.x = point.x;
		this.y = point.y;
	}

	get area() {
		return this.width * this.height;
	}

	get size() {
        return new Point(this.width, this.height);
	}

	set size(point) {
        this.width = point.x;
        this.height = point.y;
	}

	get center() {
		return new Point(this.x + this.width / 2, this.y + this.height / 2);
	}

	toString() {
		return "[Rectangle" + " x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + "]";
	}

	get widthToHeight() {
		return this.width / this.height;
	}

	get heightToWidth() {
		return this.height / this.width;
	}

	scaleWidth(height) {
		return new Rectangle(this.x, this.y, height * this.widthToHeight, height);
	}

	scaleHeight(width) {
		return new Rectangle(this.x, this.y, width, width * this.heightToWidth);
	}

	scaleToFillRect(rect) {
		// let scaled = this.scaleHeight(rect.width);
		//
		// if (scaled.height < rect.height) {
		// 	scaled = this.scaleWidth(rect.height);
		// }
		let amount = this.getScaleToFill(rect);
		return this.scale(amount, amount);
	}

	scaleToFitRect(rect) {
		// let scaled = this.scaleHeight(rect.width);
		//
		// if (scaled.height > rect.height) {
		// 	scaled = this.scaleWidth(rect.height);
		// }
		// scaled.x = (rect.width - scaled.width) / 2;
		// scaled.y = (rect.height - scaled.height) / 2;
		let amount = this.getScaleToFitRect(rect);
		return this.scale(amount, amount);
	}

	scale(x, y) {
		return new Rectangle(this.x, this.y, this.width * x, this.height * y);
	}

	scaleToArea(area) {
		let height = Math.sqrt(area / this.widthToHeight);
		let width = area / height;
		return new Rectangle(0, 0, width, height);
	}

	getScaleToFill(rect) {
		let scale;
		if (this.widthToHeight > rect.widthToHeight) {
			scale = rect.height / this.height;
		} else {
			scale = rect.width / this.width;
		}
		return scale;
	}

	getScaleToFitRect(rect) {
		let scale;
		if (this.widthToHeight > rect.widthToHeight) {
			scale = rect.width / this.width;
		} else {
			scale = rect.height / this.height;
		}
		return scale;
	}

	get isPortrait() {
		return this.width <= this.height;
	}

	get isLandscape() {
		return this.height <= this.width;
	}

}