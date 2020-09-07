import * as THREE from "three";
import { randomRange } from "../utils/number";
import Point from "../geom/Point";
import Rectangle from "../geom/Rectangle";

export function toScreenPosition(obj, camera, width, height) {
  let vector = new THREE.Vector3();

  let widthHalf = width / 2;
  let heightHalf = height / 2;

  obj.updateMatrixWorld();
  vector.setFromMatrixPosition(obj.matrixWorld);
  vector.project(camera);

  return new THREE.Vector2(vector.x * widthHalf + widthHalf, vector.y * -heightHalf + heightHalf);
}

export function localToGlobal3d(element, root, point = new THREE.Vector3(), debug = false) {
  while (element != root) {
    if (debug) {
      console.log("$$$ element", element, element.position);
    }
    point.x += element.position.x;
    point.y += element.position.y;
    point.z += element.position.z;
    element = element.parent;
  }
  return point;
}

export function randomVector3(range) {
  return new THREE.Vector3(randomRange(-range, range), randomRange(-range, range), randomRange(-range, range));
}

export function randomVector2(range) {
  return new THREE.Vector2(randomRange(-range, range), randomRange(-range, range));
}

export function screenCoordinatesFromCenter(point, screenRectangle) {
  let pointFromCenter = new Point();
  pointFromCenter.x = (point.x / screenRectangle.width) * 2 - 1;
  pointFromCenter.y = -(point.y / screenRectangle.height) * 2 + 1;
  return pointFromCenter;
}

export function raycastRectangle(raycaster, camera, plane, topLeft2d, bottomRight2d) {
  raycaster.setFromCamera(topLeft2d, camera);
  let topLeft3d;
  let intersects = raycaster.intersectObject(plane);
  if (intersects.length > 0) topLeft3d = intersects[0].point;
  raycaster.setFromCamera(bottomRight2d, camera);
  let bottomRight3d;
  intersects = raycaster.intersectObject(plane);
  if (intersects.length > 0) bottomRight3d = intersects[0].point;
  let box = new THREE.Box3();
  box.setFromPoints([topLeft3d, bottomRight3d]);
  return box;
}
