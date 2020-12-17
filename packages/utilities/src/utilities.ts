import {css} from 'styled-components';

function transform(suffix: string) {
  return (arr: number | number[]) => {
    if (!Array.isArray(arr)) {
      return `${arr.toString()}${suffix}`;
    }

    return arr.map((val) => `${val.toString()}${suffix}`);
  };
}

export const toMs = transform('ms');
export const toPx = transform('px');
export const toEm = transform('em');

export const reset = css`
  appearance: none;
  border: none;
  background: none;
  font-size: 100%;
  font-family: inherit;
  margin: 0;
  padding: 0;
`;

export function createScale(
  initial: number,
  multiplier: number,
  length: number,
  transformFunction?: (val: number[]) => string[],
) {
  const values = Array.from({length}, (_, index) => {
    return initial * multiplier * (index + 1);
  });

  if (typeof transformFunction === 'function') {
    return transformFunction(values);
  }

  return values;
}
