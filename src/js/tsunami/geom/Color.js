import * as THREE from 'three';

export default class Color extends THREE.Color {
  get hexString() {
    return this.getHexString();
  }

  get rgbString() {
    return '' + Math.round(this.r * 255) + ',' + Math.round(this.g * 255) + ',' + Math.round(this.b * 255);
  }
}
