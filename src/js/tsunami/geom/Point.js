import { lerp } from '../utils/number';

export default class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  static lerp(p0, p1, t) {
    return new Point(lerp(p0.x, p1.x, t), lerp(p0.y, p1.y, t));
  }

  static distance(p1, p2 = new Point()) {
    return Math.sqrt((p1.x - p2.x) * (p1.x - p2.x) + (p1.y - p2.y) * (p1.y - p2.y));
  }

  static polar(len, radians) {
    return new Point(len * Math.cos(radians), len * Math.sin(radians));
  }

  static getAngle(point, center = new Point()) {
    return Math.atan2(point.y - center.y, point.x - center.x);
  }

  static random() {
    return new Point(Math.random(), Math.random());
  }

  static rotate(p, a) {
    const x = Math.cos(a) * p.x - Math.sin(a) * p.y;
    const y = Math.sin(a) * p.x + Math.cos(a) * p.y;
    p.x = x;
    p.y = y;
  }

  add(p) {
    return new Point(this.x + p.x, this.y + p.y);
  }

  get magnitude() {
    return Point.distance(this);
  }

  abs() {
    return new Point(Math.abs(this.x), Math.abs(this.y));
  }

  clamp(minX, maxX, minY, maxY) {
    this.clampX(minX, maxX);
    this.clampY(minY, maxY);
  }

  clampX(min, max) {
    this.x = Math.max(this.x, min);
    this.x = Math.min(this.x, max);
  }

  clampY(min, max) {
    this.y = Math.max(this.y, min);
    this.y = Math.min(this.y, max);
  }

  copyFrom(p) {
    this.x = p.x;
    this.y = p.y;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  equals(point) {
    return this.x === point.x && this.y === point.y;
  }

  divide(p) {
    return new Point(this.x / p.x, this.y / p.y);
  }

  divideScalar(scalar) {
    return new Point(this.x / scalar, this.y / scalar);
  }

  multiply(p) {
    return new Point(this.x * p.x, this.y * p.y);
  }

  multiplyScalar(scalar) {
    return new Point(this.x * scalar, this.y * scalar);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }

  subtract(p) {
    return new Point(this.x - p.x, this.y - p.y);
  }

  serialize() {
    return { x: this.x, y: this.y };
  }

  deserialize(obj) {
    this.copyFrom(obj);
  }

  math(callback) {
    this.x = callback(this.x);
    this.y = callback(this.y);
    return this;
  }

  toString() {
    return '[Point x=' + this.x + ' y=' + this.y + ']';
  }
}
