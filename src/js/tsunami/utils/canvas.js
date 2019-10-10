export function patternFill(canvas, pattern) {
	let ctx = canvas.getContext("2d");
	let x = 0;
	let y = 0;
	while (y < canvas.height) {
		x = 0;
		while (x < canvas.width) {
			ctx.drawImage(pattern, x, y);
			x += pattern.width;
		}
		y += pattern.height;
	}
}

export function cloneImage(image, scaleX, scaleY, canvas) {
	if (isNaN(scaleX)) {
		scaleX = 1;
	}
	if (isNaN(scaleY)) {
		scaleY = 1;
	}
	if (canvas == null) {
		canvas = document.createElement("canvas");
	}
	canvas.width = image.width * scaleX;
	canvas.height = image.height * scaleY;
	let ctx = canvas.getContext("2d");
	ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, canvas.width, canvas.height);
	return canvas;
}
