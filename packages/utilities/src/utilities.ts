import {css} from 'styled-components';

function transform(suffix: string) {
  return (arr: string | number | (string | number)[]) => {
    if (!Array.isArray(arr)) {
      return [`${arr.toString()}${suffix}`];
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

/**
 * Shorthand to set the height and width properties in a single statement.
 * @example
 * // Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */
export function size(height: string | number, width: string | number = height) {
  return {
    height,
    width,
  };
}
