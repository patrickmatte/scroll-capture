export function truncate(string, maxLength, addAfter = '') {
  if (string.length > maxLength) {
    string = string.substr(0, maxLength - addAfter.length) + addAfter;
  }
  return string;
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function isLengthMinimum1(string) {
  return string.length > 0;
}

export function boolify(value = false) {
  return ['true', '1', 'yes', 'y', 'on'].indexOf(String(value).toLowerCase()) !== -1;
}

export function serialize(obj) {
  const str = [];
  for (const p in obj) {
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  }
  return str.join('&');
}
