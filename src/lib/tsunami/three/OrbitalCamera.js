import * as THREE from 'three';
import Vector3D from '../geom/Vector3D';
import { round3 } from '../utils/number';

export default class OrbitalCamera {
  constructor(camera, radius = 100, theta = 0, phi = 0, target = null) {
    this.camera = camera;
    this.radius = radius;
    this.theta = theta;
    this.phi = phi;
    this.phiOffset = 0;
    this.thetaOffset = 0;
    this.target = target || new THREE.Vector3(0, 0, 0);
  }

  get target() {
    return this._target;
  }

  set target(value) {
    this._target = value;
  }

  get theta() {
    return this._theta;
  }

  set theta(value) {
    this._theta = value;
  }

  get phi() {
    return this._phi;
  }

  set phi(value) {
    this._phi = value;
  }

  get radius() {
    return this._radius;
  }

  set radius(value) {
    this._radius = value;
  }

  update() {
    const vec3 = Vector3D.spherePoint(this.radius, this.theta + this.thetaOffset, this.phi + this.phiOffset);
    this.camera.position.x = round3(vec3.x + this.target.x);
    this.camera.position.y = round3(vec3.y + this.target.y);
    this.camera.position.z = round3(vec3.z + this.target.z);
    this.camera.lookAt(this.target);
  }
}
