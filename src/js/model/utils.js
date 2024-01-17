import { timeAMPM } from '../../lib/tsunami/utils/date';
import { addLeadingZero } from '../../lib/tsunami/utils/number';

export function createFilename(extension) {
  let date = new Date();
  let ampmTime = timeAMPM(date);
  let dateData = {
    year: date.getFullYear(),
    month: addLeadingZero(date.getMonth() + 1),
    date: addLeadingZero(date.getDate()),
  };
  ampmTime.ampm = ampmTime.ampm.toUpperCase();
  return `Scroll Capture ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds} ${ampmTime.ampm}.${extension}`;
}
