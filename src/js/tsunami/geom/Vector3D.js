export default class Vector3D {
	
	constructor(x = 0, y = 0, z = 0) {
		this.x = x;
		this.y = y;
		this.z = z;
	}

	static interpolate(v1, v2, position) {
		let x = (v1.x + v2.x) * position;
		let y = (v1.y + v2.y) * position;
		let z = (v1.z + v2.z) * position;
		return new Vector3D(x, y, z);
	}

	static distance(v1, v2) {
		return Math.sqrt((v1.x - v2.x) * (v1.x - v2.x) + (v1.y - v2.y) * (v1.y - v2.y) + (v1.z - v2.z) * (v1.z - v2.z));
	};

	static polar(length, radians) {
		let vector = new Vector3D();
		vector.x = length * Math.cos(radians);
		vector.y = length * Math.sin(radians);
		return vector;
	}

	static spherePoint(radius, radiansX, radiansY) {
		let xCoord2 = radius * Math.cos(radiansX);
		let yCoord2 = radius * Math.sin(radiansX);
		let xCoord = xCoord2 * Math.cos(radiansY);
		let yCoord = xCoord2 * Math.sin(radiansY);
		return new Vector3D(xCoord, yCoord2, yCoord);
	}

	clone() {
		return new Vector3D(this.x, this.y, this.z);
	}
	
	add(vector) {
		this.x += vector.x;
		this.y += vector.y;
		this.z += vector.z;
		return this;
	}
	
	multiply(vector) {
		this.x = this.x * vector.x;
		this.y = this.y * vector.y;
		this.z = this.z * vector.z;
		return this;
	}
	
	divide(vector) {
		this.x = this.x / vector.x;
		this.y = this.y / vector.y;
		this.z = this.z / vector.z;
		return this;
	}
	
	copyFrom(vector) {
		this.x = vector.x;
		this.y = vector.y;
		this.z = vector.z;
		return this;
	}
	
	subtract(v) {
		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;
		return this;
	}
	
	toString() {
		return "[Vector3D" + " x=" + this.x + " y=" + this.y + " z=" + this.z + "]";
	}
	
}
