export function truncate(inputString: string, length: number, suffix = '…') {
  const trimmedString = inputString.trim();
  return trimmedString.length > length
    ? `${trimmedString.substring(0, length)}${suffix}`
    : inputString;
}

export function reverseTruncate(
  inputString: string,
  length: number,
  prefix = '…',
) {
  const trimmedString = inputString.trim();
  const stringLength = trimmedString.length;
  return stringLength > length
    ? `${prefix}${trimmedString.substring(stringLength - length, stringLength)}`
    : inputString;
}
