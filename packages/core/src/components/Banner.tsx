import React from 'react';
import styled from 'styled-components';
import {Icons} from '@minou/icons';

import {Flex} from './Box';
import {Text} from './Text';
import {Icon} from './Icon';
import {Italic} from './Italic';

interface Props {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning';
  title?: string;
}

export const StyledBanner = styled(Flex)<Props>`
  border: 1px solid
    ${({theme, variant}) =>
      variant ? theme.colors[variant] : theme.colors.secondary};
  width: 100%;
`;

export function Banner({children, variant, title, ...props}: Props) {
  const titleMarkup = title ? (
    <Text p={0} pl={1} color={variant || 'secondary'}>
      <Italic>{title}</Italic>
    </Text>
  ) : null;

  return (
    <StyledBanner
      bg="white"
      borderRadius={2}
      mb={3}
      p={3}
      alignItems="center"
      variant={variant}
      {...props}
    >
      <Icon icon={iconForVariant(variant)} color={variant || 'secondary'} />
      {titleMarkup}
      <Text p={0} pl={1}>
        {children}
      </Text>
    </StyledBanner>
  );
}

function iconForVariant(variant?: 'success' | 'error' | 'warning') {
  console.log(variant);
  switch (variant) {
    case 'success':
      return Icons.Success;
    case 'warning':
      return Icons.Warning;
    case 'error':
      return Icons.Error;
    default:
      return Icons.Info;
  }
}
