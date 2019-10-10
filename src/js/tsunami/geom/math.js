export function lerp(a, b, t) {
	return a + t * (b - a);
	// return a(1-t) + bt
}