import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  border,
  shadow,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
  BorderProps,
  ShadowProps,
} from 'styled-system';

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps,
    BorderProps,
    ShadowProps {
  /** specify the underlaying component  */
  as?: React.ElementType;
}

export const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${border}
  ${shadow}
`;

export const Flex = styled(Box)`
  display: flex;
`;
