import React, {forwardRef} from 'react';
import NextLink from 'next/link';
import styled from 'styled-components';

const StyledLink = styled(NextLink)`
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: inline-block;
  color: ${({theme}) => theme.colors.teal};
  &:hover {
    color: ${({theme}) => theme.colors.tealDark};
    text-decoration: underline;
  }
`;

interface Props {}

type CombinedProps = Props & React.ComponentProps<typeof StyledLink>;

export const Link = forwardRef<HTMLAnchorElement, CombinedProps>(
  ({external, ...props}, ref) => {
    return <StyledLink ref={ref} {...props} />;
  },
);

Link.displayName = 'Link';
