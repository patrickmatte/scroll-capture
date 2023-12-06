float invertOnDirection(float value, float direction) {
  return mix(value, 1.0 - value, direction);
}