import {
  format as dateFnsFormat,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
  add as dateFnsAdd,
} from 'date-fns';

const FORMAT_STRING = 'MMMM dd, yyyy';

type DateType = number | string | Date;

export function formatDateFromNow(date: string | number) {
  return dateFnsFormatDistanceToNow(convertTimestampToDate(date));
}

export function formatDate(date: DateType, formatString = FORMAT_STRING) {
  return dateFnsFormat(convertTimestampToDate(date), formatString);
}

export function formatDateWithAddedDays(date: number | string, amount: number) {
  return formatDate(dateFnsAdd(convertTimestampToDate(date), {days: amount}));
}

function convertTimestampToDate(date: DateType) {
  return new Date(typeof date === 'string' ? parseInt(date, 10) : date);
}
