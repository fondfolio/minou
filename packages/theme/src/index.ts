import {toMs, createScale} from '@minou/utilities';

/**
 * Preset minou theme based on https://theme-ui.com/theme-spec/
 */

export const pallet = {
  teal: '#005D63',
  tealDark: '#00383C',
  tealLight: '#90DEE3',
  blue: '#3FC5D9',
  blueLightest: '#EEFBFD',
  green: '#0EC8A9',
  greenLightest: '#EEFBF8',
  grey: '#7E7A7E',
  greyLight: '#EAEAEA',
  greySuperlight: '#F5F5F5',
  greyLightest: '#FBFBFB',
  greyMedium: '#C0BEC0',
  greyDark: '#5B585B',
  red: '#EE5E5E',
  redDark: '#B62A34',
  redLightest: '#FDEEEE',
  yellow: '#F8D04D',
  yellowLightest: '#FDFCF6',
  white: '#FFFFFF',
  black: '#231D24',
};

const gray = ['#EAEAEA', '#F5F5F5', '#FBFBFB', '#C0BEC0', '#7E7A7E', '#5B585B'];

// const sans =
const sans =
  'Franca, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";';
const timings = createScale(200, 2, 3, toMs);

const timing = timings[0];

export const theme = {
  breakpoints: ['40em', '56em', '64em'],

  borderRadius: '4px',
  radii: {
    button: '2px',
    input: '2px',
  },

  // text	Body foreground color
  // background	Body background color
  // primary	Primary brand color for links, buttons, etc.
  // secondary	A secondary brand color for alternative styling
  // accent	A contrast color for emphasizing UI
  // highlight	A background color for highlighting text
  // muted	A faint color for backgrounds, borders, and accents that do not require high contrast with the background color
  colors: {
    ...pallet,
    gray,
    primary: pallet.teal,
    secondary: pallet.grey,
    text: pallet.black,
    background: pallet.white,
    accent: pallet.blue,
    highlight: pallet.yellow,
    muted: pallet.greyLight,
    error: pallet.red,
  },

  fonts: {
    body: sans,
    heading: 'Fragen, Georgia, serif',
    serif: 'Fragen, Georgia, serif',
    sans,
  },

  fontSizes: [10, 12, 14, 16, 18, 22, 24, 32, 48, 64, 96],

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontWeights: {
    body: 400,
    normal: 400,
    bold: 500,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  shadows: {
    large: 'rgba(0, 0, 0, 0.12) 0px 5px 10px 0px',
  },

  transitions: {
    all: `all ${timing} ease`,
    background: `background ${timing}`,
    color: `color  ${timing} ease`,
  },

  zIndices: {
    header: 10,
  },
};

export default theme;

// bodyLarge: {
//   fontFamily: 'sans',
//   lineHeight: 'body',
//   fontWeight: 'normal',
//   fontSize: [3],
// },
// body: {
//   fontFamily: 'sans',
//   lineHeight: 'body',
//   fontWeight: 'normal',
//   fontSize: [2],
// },
// caption: {
//   fontFamily: 'sans',
//   lineHeight: 'body',
//   fontWeight: 'normal',
//   fontSize: [1],
// },
// caps: {
//   textTransform: 'uppercase',
//   letterSpacing: '0.5em',
// },
