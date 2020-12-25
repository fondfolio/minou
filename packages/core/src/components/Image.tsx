import React from 'react';
import NextImage, {ImageProps as NextImageProps} from 'next/image';
import styled from 'styled-components';

interface ImageProps {
  multiply?: boolean;
}

type CombinedProps = ImageProps & NextImageProps;

const StyledImage = styled(NextImage)<ImageProps>`
  ${({multiply}) => (multiply ? `mix-blend-mode: multiply;` : '')}
`;

export function Image(props: CombinedProps) {
  return <StyledImage {...props} />;
}
