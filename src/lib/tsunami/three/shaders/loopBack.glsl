float loopBack(float time) {
  float valueStep = step(time, 0.5);
  float value1 = time / 0.5 * valueStep;
  float value2 = (1.0 - time) / 0.5 * (1.0 - valueStep);
  return value1 + value2;
}        
