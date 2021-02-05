import React from 'react';
import styled from 'styled-components';
import {Icons} from '@minou/icons';

import {Error} from '../types';

import {Flag} from './Flag';
import {Flex, Box, BoxProps} from './Box';
import {Text} from './Text';
import {Icon} from './Icon';
import {Italic} from './Italic';

interface Props extends BoxProps {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning';
  title?: string;
}

export const StyledBanner = styled(Flex)<Props>`
  margin-top: -1px;
  border: 1px solid
    ${({theme, variant}) =>
      variant ? theme.colors[variant] : theme.colors.secondary};
  width: 100%;
`;

export function Banner({children, variant, title, ...props}: Props) {
  const titleMarkup = title ? (
    <Text small p={0} pt={1} pl={2} color={variant || 'secondary'}>
      <Italic>{title}</Italic>
    </Text>
  ) : null;

  return (
    <>
      <StyledBanner
        bg="white"
        borderRadius={2}
        px={3}
        py={2}
        alignItems="flex-start"
        variant={variant}
        {...props}
      >
        <Icon icon={iconForVariant(variant)} color={variant || 'secondary'} />
        {titleMarkup}
        <Text small p={0} pt={1} pl={1}>
          {children}
        </Text>
      </StyledBanner>
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

interface BannerGroupProps {
  error?: boolean;
  content?: string;
  errors?: Error[];
}

export function BannerGroup({error, content, errors}: BannerGroupProps) {
  if (!errors || errors.length === 0) {
    return null;
  }
  const errorMarkup = errors.map((error, index) => {
    const message = typeof error === 'string' ? error : error.message;
    return (
      <Banner variant="error" key={`${message}${index}`}>
        {message}
      </Banner>
    );
  });
  const contentMarkup = content ? (
    <Flag mount="top" error={error} content={content} />
  ) : null;

  return (
    <Box mb={3}>
      {contentMarkup}
      {errorMarkup}
    </Box>
  );
}
