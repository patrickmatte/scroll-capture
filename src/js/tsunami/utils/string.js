export function truncate(str, length, addAfter) {
	if (str.length > length) {
		str = str.substr(0, 30) + addAfter;
	}
	return str;
}

export function numberWithCommas (x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function capitalize(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

