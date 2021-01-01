import {
  format as dateFnsFormat,
  formatDistanceToNow as dateFnsFormatDistanceToNow,
} from 'date-fns';

export function formatDateFromNow(date: string) {
  return dateFnsFormatDistanceToNow(convertTimestampToDate(date));
}

export function formatDate(
  date: number | string,
  formatString = 'MMMM dd, yyyy',
) {
  return dateFnsFormat(convertTimestampToDate(date), formatString);
}

function convertTimestampToDate(date: number | string) {
  return new Date(typeof date === 'string' ? parseInt(date, 10) : date);
}
