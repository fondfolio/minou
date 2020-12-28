import React from 'react';
import NextImage, {ImageProps} from 'next/image';
import styled from 'styled-components';

type Props = ImageProps & {
  circle?: boolean;
};

export function Image({circle, ...props}: Props) {
  const imageContent = <NextImage {...props} />;

  if (circle) {
    return <Circle>{imageContent}</Circle>;
  }
  return imageContent;
}

const Circle = styled.figure`
  border-radius: 50%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;
