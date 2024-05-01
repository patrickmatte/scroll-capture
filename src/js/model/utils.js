import { timeMilitary } from '../../lib/tsunami/utils/date';
import { addLeadingZero } from '../../lib/tsunami/utils/number';

export function createFilename(extension, text = 'ScrollCapture') {
  const name = createFilenameOnly(text);
  return `${name}.${extension}`;
}

export function createFilenameOnly(text = 'ScrollCapture') {
  let date = new Date();
  let ampmTime = timeMilitary(date);
  let dateData = {
    year: date.getFullYear(),
    month: addLeadingZero(date.getMonth() + 1),
    date: addLeadingZero(date.getDate()),
  };
  return `${text} ${dateData.year}-${dateData.month}-${dateData.date} at ${ampmTime.hours}.${ampmTime.minutes}.${ampmTime.seconds}`;
}
