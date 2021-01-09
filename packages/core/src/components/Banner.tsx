import React from 'react';
import styled from 'styled-components';
import {Icons} from '@minou/icons';

import {Flex, BoxProps} from './Box';
import {Text} from './Text';
import {Icon} from './Icon';
import {Italic} from './Italic';
import {Flag} from './Flag';

interface Props extends BoxProps {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning';
  title?: string;
  flag?: React.ComponentProps<typeof Flag>;
}

export const StyledBanner = styled(Flex)<Props>`
  border: 1px solid
    ${({theme, variant}) =>
      variant ? theme.colors[variant] : theme.colors.secondary};
  width: 100%;
`;

export function Banner({children, variant, title, flag, ...props}: Props) {
  const titleMarkup = title ? (
    <Text p={0} pl={2} color={variant || 'secondary'}>
      <Italic>{title}</Italic>
    </Text>
  ) : null;

  const error = variant === 'error' || flag?.error;

  return (
    <>
      <StyledBanner
        bg="white"
        borderRadius={2}
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
      <Flag error={error} content={flag?.content} />
    </>
  );
}

function iconForVariant(variant?: 'success' | 'error' | 'warning') {
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
