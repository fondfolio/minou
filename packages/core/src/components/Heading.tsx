import React from 'react';
import styled from 'styled-components';

import {Text, TextProps} from './Text';

export interface HeadingProps extends TextProps {
  level?: number;
}

const StyledHeader = styled(Text)<HeadingProps>``;

export function Heading({level, ...props}: HeadingProps) {
  const commonProps = {
    ...props,
    fontFamily: 'sans',
  };
  switch (level) {
    case 1:
      return (
        <StyledHeader {...commonProps} fontFamily="serif" fontSize={[6, 7]} />
      );
    case 2:
      return <StyledHeader {...commonProps} fontSize={[5, 6]} />;
    case 3:
      return <StyledHeader {...commonProps} fontSize={[4]} />;
    case 4:
      return (
        <StyledHeader {...commonProps} fontFamily="serif" fontSize={[3]} />
      );
    case 5:
      return <StyledHeader {...commonProps} fontWeight="bold" fontSize={[3]} />;
    case 6:
      return (
        <StyledHeader
          {...commonProps}
          lineHeight="body"
          letterSpacing="0.08em"
          fontSize={[1]}
        />
      );
    default:
      return <StyledHeader {...commonProps} fontSize={[1, 7]} />;
  }
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
