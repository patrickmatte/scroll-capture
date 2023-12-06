float greaterThanMultiplier(float a, float b) {
    return min(floor(a / b), 1.0);
}

float lesserThanMultiplier(float a, float b) {
    return max(1.0 - floor(a / b), 0.0);
}
