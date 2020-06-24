import { randomRange } from "../utils/number";

export function randomVector3(range) {
    return new THREE.Vector3(
        randomRange(-range, range),
        randomRange(-range, range),
        randomRange(-range, range)
    );
}

export function randomVector2(range) {
    return new THREE.Vector2(randomRange(-range, range), randomRange(-range, range));
}
