float gradientFromCenter(float distance, float maxDistance, float revealFactor, float gradientSize) {
    float multiplier = maxDistance * revealFactor - (distance - gradientSize * revealFactor);
    multiplier = max(multiplier, 0.0) / gradientSize;
    return min(multiplier, 1.0);
}

float ramp(float edge, float time, float size) {
    float minimum = time - (1.0 - time) * size;
    float val = max(0.0, edge - minimum) / size;
    return 1.0 - min(val, 1.0);
}
