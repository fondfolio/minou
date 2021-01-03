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
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const visuallyHidden = css`
  position: absolute !important;
  top: 0;
  clip: rect(1px, 1px, 1px, 1px) !important;
  overflow: hidden !important;
  height: 1px !important;
  width: 1px !important;
  padding: 0 !important;
  border: 0 !important;
`;

export const center = (
  {x, y}: {x: boolean; y: boolean} = {x: false, y: false},
) => {
  if (x && y) {
    return css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `;
  } else if (x) {
    return css`
      left: 50%;
      transform: translate(-50%, 0);
    `;
  } else if (y) {
    return css`
      top: 50%;
      transform: translate(0, -50%);
    `;
  }
  return ``;
};

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
