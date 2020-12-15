/**
 * Preset minou theme based on https://theme-ui.com/theme-spec/
 */

export const theme = {
  breakpoints: ['40em', '56em', '64em'],

  borderRadius: '4px',

  colors: {
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
  },

  fonts: {
    body: 'Karla, sans-serif, system-ui',
    heading: 'inherit',
    serif: 'Lora, Georgia, serif',
    sans: 'Karla, sans-serif',
    monospace: 'Inconsolata, monospace',
  },

  fontSizes: [12, 14, 16, 18, 22, 24, 32, 48, 64, 96],

  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fontWeights: {
    body: 400,
    normal: 400,
    bold: 700,
  },

  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },

  text: {
    heading1: {
      fontFamily: 'serif',
      lineHeight: 'heading',
      fontWeight: 'normal',
      fontSize: [6, 7],
    },
    heading2: {
      fontFamily: 'serif',
      lineHeight: 'heading',
      fontWeight: 'normal',
      fontSize: [5, 6],
    },
    heading3: {
      fontFamily: 'sans',
      lineHeight: 'heading',
      fontWeight: 'normal',
      fontSize: [4],
    },
    heading4: {
      fontFamily: 'sans',
      lineHeight: 'heading',
      fontWeight: 'bold',
      fontSize: [3],
    },
    heading5: {
      fontFamily: 'sans',
      lineHeight: 'heading',
      fontWeight: 'bold',
      fontSize: [2],
    },
    heading6: {
      fontFamily: 'monospace',
      lineHeight: 'body',
      fontWeight: 'bold',
      fontSize: [1],
    },
    bodyLarge: {
      fontFamily: 'sans',
      lineHeight: 'body',
      fontWeight: 'normal',
      fontSize: [3],
    },
    body: {
      fontFamily: 'sans',
      lineHeight: 'body',
      fontWeight: 'normal',
      fontSize: [2],
    },
    caption: {
      fontFamily: 'sans',
      lineHeight: 'body',
      fontWeight: 'normal',
      fontSize: [1],
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.5em',
    },
  },

  buttons: {
    primary: {
      fontSize: 2,
      fontWeight: 'bold',
      color: 'white',
      bg: 'tealDark',
      borderRadius: 'default',
    },
    outline: {
      variant: 'buttons.primary',
      color: 'tealDark',
      bg: 'white',
      boxShadow: 'inset 0 0 2px',
    },
  },
};

export default theme;
