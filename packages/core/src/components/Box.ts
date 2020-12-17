import styled from 'styled-components';
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  FlexboxProps,
} from 'styled-system';
import {reset} from '@minou/utilities';

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    TypographyProps,
    ColorProps,
    FlexboxProps {
  as?: React.ElementType;
}

export const Box = styled.div<BoxProps>`
  ${reset}
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

export const Flex = styled(Box)`
  display: flex;
`;
