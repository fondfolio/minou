import styled from 'styled-components';
import {
  space,
  layout,
  typography,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps {
  as?: React.ElementType;
}

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  min-width: 0;
  ${space}
  ${layout}
  ${color}
  ${typography}
  ${flexbox}
`;

export const Flex = styled(Box)`
  display: flex;
`;
