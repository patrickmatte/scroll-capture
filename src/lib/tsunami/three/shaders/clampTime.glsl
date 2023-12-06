float clampTime(float time, float startTime, float duration) {
    return clamp(time - startTime, 0.0, duration) / duration;
}
