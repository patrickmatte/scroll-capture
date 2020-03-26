import {addLeadingZero} from "./number";

export function timeAMPM(date) {
	let hours = date.getHours();
	let ampm = hours >= 12 ? 'pm' : 'am';
	let minutes = addLeadingZero(date.getMinutes());
	let seconds = addLeadingZero(date.getSeconds());
	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	return { hours, minutes, seconds, ampm };
}

export function formatAMPM(date, spaceBetween = "") {
	let dateData = timeAMPM(date);
	let strTime = dateData.hours + ':' + dateData.minutes + spaceBetween + ampm;
	return strTime;
}

export function toUnixString(date) {
	return date.getFullYear() + "-" + addLeadingZero(date.getMonth() + 1) + "-" + addLeadingZero(date.getDate()) + " " + addLeadingZero(date.getHours()) + ":" + addLeadingZero(date.getMinutes()) + ":" + addLeadingZero(date.getSeconds());
}

export function toUnixUTCString(date) {
	return date.getUTCFullYear() + "-" + addLeadingZero(date.getUTCMonth() + 1) + "-" + addLeadingZero(date.getUTCDate()) + " " + addLeadingZero(date.getUTCHours()) + ":" + addLeadingZero(date.getUTCMinutes()) + ":" + addLeadingZero(date.getUTCSeconds());
}

export function addHours(date, hours) {
	date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
	return date;
}

export function addDays(date, days) {
	date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
	return date;
}

export let months = {
	en:["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	fr:["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]
};

export function getMonth(date, language) {
	if (!language) {
		language = "en";
	}
	let month;
	switch(language) {
		case "en":
			month = months[language][date.getMonth()];
			break;
	}
	return month;
}

export function getAge(birthDate) {
	let today = new Date();
	let age = today.getFullYear() - birthDate.getFullYear();
	let m = today.getMonth() - birthDate.getMonth();
	if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
		age--;
	}
	return age;
}

export function treatAsUTC(date) {
	let result = new Date(date);
	result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
	return result;
}

export function minutesBetween(startDate, endDate) {
	let millisecondsPerMinute = 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerMinute;
}

export function hoursBetween(startDate, endDate) {
	let millisecondsPerHour = 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerHour;
}

export function daysBetween(startDate, endDate) {
	let millisecondsPerDay = 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
}

export function weeksBetween(startDate, endDate) {
	let millisecondsPerWeek = 7 * 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerWeek;
}

export function monthsBetween(startDate, endDate) {
	let millisecondsPerMonth = 365 / 12  * 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerMonth;
}

export function yearsBetween(startDate, endDate) {
	let millisecondsPerYear = 365 * 24 * 60 * 60 * 1000;
	return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerYear;
}

export function getFamiliarTimeBetween(startDate, endDate) {
	let text = "";
	let yearsBetween = yearsBetween(startDate, endDate);
	if (yearsBetween >= 1) {
		let yearsBetweenFloor = Math.floor(yearsBetween);
		if (yearsBetweenFloor > 1) {
			text = yearsBetweenFloor.toString() + " years ago";
		} else {
			text = yearsBetweenFloor.toString() + " year ago";
		}
	} else {
		let monthsBetween = monthsBetween(startDate, endDate);
		if (monthsBetween >= 1) {
			let monthsBetweenFloor = Math.floor(monthsBetween);
			if (monthsBetweenFloor > 1) {
				text = monthsBetweenFloor.toString() + " months ago";
			} else {
				text = monthsBetweenFloor.toString() + " month ago";
			}
		} else {
			let weeksBetween = weeksBetween(startDate, endDate);
			if (weeksBetween >= 1) {
				let weeksBetweenFloor = Math.floor(weeksBetween);
				if (weeksBetweenFloor > 1) {
					text = weeksBetweenFloor.toString() + " weeks ago";
				} else {
					text = weeksBetweenFloor.toString() + " week ago";
				}
			} else {
				let daysBetween = daysBetween(startDate, endDate);
				if (daysBetween >= 1) {
					let daysBetweenFloor = Math.floor(daysBetween);
					if (daysBetweenFloor > 1) {
						text = daysBetweenFloor.toString() + " days ago";
					} else {
						text = daysBetweenFloor.toString() + " day ago";
					}
				} else {
					let hoursBetween = hoursBetween(startDate, endDate);
					if (hoursBetween >= 1) {
						let hoursBetweenFloor = Math.floor(hoursBetween);
						if (hoursBetweenFloor > 1) {
							text = hoursBetweenFloor.toString() + " hours ago";
						} else {
							text = hoursBetweenFloor.toString() + " hour ago";
						}
					} else {
						let minutesBetween = minutesBetween(startDate, endDate);
						if (minutesBetween > 1) {
							let minutesBetweenFloor = Math.floor(minutesBetween);
							if (minutesBetweenFloor > 1) {
								text = minutesBetweenFloor.toString() + " minutes ago";
							} else {
								text = minutesBetweenFloor.toString() + " minute ago";
							}
						} else {
							text = "Just now";
						}
					}
				}
			}
		}
	}
	return text;
}