import Point from './Point';

export default class CubicBezier {
  constructor(p0, p1, p2, p3, samples = 100) {
    this.p0 = p0 || new Point(0, 0);
    this.p1 = p1 || new Point(0, 0);
    this.p2 = p2 || new Point(1, 1);
    this.p3 = p3 || new Point(1, 1);
    this.samples = samples;
    this.calculateLength();
  }

  clone() {
    return new CubicBezier(this.p0.clone(), this.p1.clone(), this.p2.clone(), this.p3.clone(), this.samples);
  }

  calculateLength() {
    this.distances = [0];
    this.distancesX = [0];
    this.totalLength = 0;
    this.totalX = 0;
    let prev = this.p0;
    for (let i = 1; i < this.samples; i++) {
      const t = i / (this.samples - 1);
      // console.log("i", i, "t", t);
      const pt = this.getPoint(t);
      const diff = prev.subtract(pt); //( prev - pt );
      this.totalLength += diff.magnitude;
      this.distances[i] = this.totalLength;
      this.totalX -= diff.x;
      this.distancesX[i] = this.totalX;
      prev = pt;
    }
    // console.log("this.totalX", this.totalX);
    // console.log("this.distancesX", this.distancesX);
  }

  getPoint(t) {
    const a = Point.lerp(this.p0, this.p1, t);
    const b = Point.lerp(this.p1, this.p2, t);
    const c = Point.lerp(this.p2, this.p3, t);
    const d = Point.lerp(a, b, t);
    const e = Point.lerp(b, c, t);
    const point = Point.lerp(d, e, t);
    return point;
  }

  getPointOnCurve(t) {
    const time = this.sampleAt(t, this.distances);
    return this.getPoint(time);
  }

  getPointAtX(t) {
    const time = this.sampleAt(t, this.distancesX);
    const point = this.getPoint(time);
    point.x = t;
    return point;
  }

  sampleAt(u, array) {
    let i = 0;
    const lastIndex = array.length - 1;
    const targetArcLength = u * array[lastIndex];
    // binary search for the index with largest value smaller than target u distance
    let low = 0;
    let high = lastIndex;
    let comparison;
    while (low <= high) {
      i = Math.floor(low + (high - low) / 2); // less likely to overflow, though probably not issue here, JS doesn't really have integers, all numbers are floats
      comparison = array[i] - targetArcLength;
      if (comparison < 0) {
        low = i + 1;
      } else if (comparison > 0) {
        high = i - 1;
      } else {
        high = i;
        break;
        // DONE
      }
    }
    i = high;
    if (array[i] === targetArcLength) {
      return i / lastIndex;
    }
    // we could get finer grain at lengths, or use simple interpolation between two points
    const lengthBefore = array[i];
    const lengthAfter = array[i + 1];
    const segmentLength = lengthAfter - lengthBefore;
    // determine where we are between the 'before' and 'after' points
    const segmentFraction = (targetArcLength - lengthBefore) / segmentLength;
    // add that fractional amount to t
    return (i + segmentFraction) / lastIndex;
  }
}
