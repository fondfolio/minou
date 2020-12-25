import React from 'react';

import {Heading, HeadingProps} from './Heading';

interface Props extends HeadingProps {
  /** The content to display inside the button */
  children: React.ReactNode;
}

export function Subtitle(props: Props) {
  return <Heading level={3} {...props} />;
}

// text: {

//   heading3: {
//     fontFamily: 'sans',
//     lineHeight: 'heading',
//     fontWeight: 'normal',
//     fontSize: [4],
//   },
//   heading4: {
//     fontFamily: 'sans',
//     lineHeight: 'heading',
//     fontWeight: 'bold',
//     fontSize: [3],
//   },
//   heading5: {
//     fontFamily: 'sans',
//     lineHeight: 'heading',
//     fontWeight: 'bold',
//     fontSize: [2],
//   },
//   heading6: {
//     fontFamily: 'monospace',
//     lineHeight: 'body',
//     fontWeight: 'bold',
//     fontSize: [1],
//   },
//   bodyLarge: {
//     fontFamily: 'sans',
//     lineHeight: 'body',
//     fontWeight: 'normal',
//     fontSize: [3],
//   },
//   body: {
//     fontFamily: 'sans',
//     lineHeight: 'body',
//     fontWeight: 'normal',
//     fontSize: [2],
//   },
//   caption: {
//     fontFamily: 'sans',
//     lineHeight: 'body',
//     fontWeight: 'normal',
//     fontSize: [1],
//   },
//   caps: {
//     textTransform: 'uppercase',
//     letterSpacing: '0.5em',
//   },
// },
