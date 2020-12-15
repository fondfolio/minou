import React, {forwardRef} from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
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

export const Link = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof StyledLink>
>((props, ref) => <StyledLink ref={ref} {...props} />);

Link.displayName = 'Link';
