import Point from './Point';

export default class Rectangle {
  constructor(x = 0, y = 0, width = 0, height = 0) {
    this._position = new Point();
    this._size = new Point();
    this.center = new Point();
    this.halfSize = new Point();
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  get x() {
    return this.position.x;
  }

  set x(value) {
    this.position.x = value;
    this.center.x = this.position.x + this.halfSize.x;
  }

  get y() {
    return this.position.y;
  }

  set y(value) {
    this.position.y = value;
    this.center.y = this.position.y + this.halfSize.y;
  }

  get width() {
    return this.size.x;
  }

  set width(value) {
    this.size.x = value;
    this.halfSize.x = value / 2;
    this.center.x = this.position.x + this.halfSize.x;
  }

  get height() {
    return this.size.y;
  }

  set height(value) {
    this.size.y = value;
    this.halfSize.y = value / 2;
    this.center.y = this.position.y + this.halfSize.y;
  }

  contains(point) {
    const hit =
      point.x >= this.x && point.x <= this.x + this.width && point.y >= this.y && point.y <= this.y + this.height
        ? true
        : false;
    return hit;
  }

  intersects(rect) {
    return (
      rect.x + rect.width > this.x &&
      rect.y + rect.height > this.y &&
      rect.x < this.x + this.width &&
      rect.y < this.y + this.height
    );
  }

  intersect(b) {
    const a = this;
    const x = Math.max(a.x, b.x);
    const num1 = Math.min(a.x + a.width, b.x + b.width);
    const y = Math.max(a.y, b.y);
    const num2 = Math.min(a.y + a.height, b.y + b.height);
    let result;
    if (num1 >= x && num2 >= y) {
      result = new Rectangle(x, y, num1 - x, num2 - y);
    } else {
      result = new Rectangle();
    }
    return result;
  }

  equals(rect) {
    return this.x === rect.x && this.y === rect.y && this.width === rect.width && this.height === rect.height;
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
    return this._position;
  }

  set position(value) {
    this._position = value;
    this.center.x = this.position.x + this.halfSize.x;
    this.center.y = this.position.y + this.halfSize.y;
  }

  get size() {
    return this._size;
  }

  set size(value) {
    this._size = value;
  }

  get area() {
    return this.size.x * this.size.y;
  }

  toString() {
    return '[Rectangle x=' + this.x + ' y=' + this.y + ' width=' + this.width + ' height=' + this.height + ']';
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
    const amount = this.getScaleToFill(rect);
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
    const amount = this.getScaleToFitRect(rect);
    return this.scale(amount, amount);
  }

  scale(x, y) {
    return new Rectangle(this.x, this.y, this.width * x, this.height * y);
  }

  scaleToArea(area) {
    const height = Math.sqrt(area / this.widthToHeight);
    const width = area / height;
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

  get topLeft() {
    return this.position;
  }

  get topRight() {
    return new Point(this.x + this.width, this.y);
  }

  get bottomRight() {
    return this.position.add(this.size);
  }

  get bottomLeft() {
    return new Point(this.x, this.y + this.height);
  }

  getRandomPoint() {
    const randomSize = Point.random();
    randomSize.x *= this.size.x;
    randomSize.y *= this.size.y;
    return this.position.add(randomSize);
  }
}
