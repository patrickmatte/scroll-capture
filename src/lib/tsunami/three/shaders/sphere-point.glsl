vec2 polar(float r, float a) {
	float x = r * cos(a);
  float y = r * sin(a);
  return vec2(x, y);
}

vec3 polarX(float r, float a) {
    vec2 p = polar(r, a);
    return vec3(0.0, p.y, p.x);
}

vec3 polarY(float r, float a) {
    vec2 p = polar(r, a);
    return vec3(p.x, 0.0, p.y);
}

vec3 polarZ(float r, float a) {
    vec2 p = polar(r, a);
    return vec3(p.x, p.y, 0.0);
}

vec3 spherePoint(float r, vec2 a) {
    float x = r * cos(a.x) * cos(a.y);
    float y = r * sin(a.x);
    float z = r * cos(a.x) * sin(a.y);
    return vec3(x, y, z);
}

vec2 rotateX(vec2 p, float a) {
    float x = cos(a) * p.x - sin(a) * p.y;
    float y = sin(a) * p.x + cos(a) * p.y;
    return vec2(x, y);
}

vec3 rotateX(vec3 p, float a) {
    float x = cos(a) * p.z - sin(a) * p.y;
    float y = sin(a) * p.z + cos(a) * p.y;
    return vec3(p.x, y, x);
}

vec2 rotateY(vec2 p, float a) {
    float x = cos(a) * p.x - sin(a) * p.y;
    float y = sin(a) * p.x + cos(a) * p.y;
    return vec2(x, y);
}

vec3 rotateY(vec3 p, float a) {
    float x = cos(a) * p.x - sin(a) * p.z;
    float y = sin(a) * p.x + cos(a) * p.z;
    return vec3(x, p.y, y);
}

vec2 rotateZ(vec2 p, float a) {
    float x = cos(a) * p.x - sin(a) * p.y;
    float y = sin(a) * p.x + cos(a) * p.y;
    return vec2(x, y);
}

vec3 rotateZ(vec3 p, float a) {
    float x = cos(a) * p.x - sin(a) * p.y;
    float y = sin(a) * p.x + cos(a) * p.y;
    return vec3(x, y, p.z);
}

vec3 rotate3(vec3 p, vec3 a) {
    p = rotateX(p, a.x);
    p = rotateY(p, a.y);
    p = rotateZ(p, a.z);
    return p;
}

float getAngle(vec2 point, vec2 center) {
  float y = point.y - center.y;
  float x = point.x - center.x;
  return atan(y, x + 0.0000000001);
}
