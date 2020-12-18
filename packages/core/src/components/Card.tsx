import styled from 'styled-components';
import {variant} from 'styled-system';

interface Props {
  variant?: 'large' | 'normal';
}

export const Card = styled.div<Props>`
  ${variant({
    variants: {
      normal: {
        padding: 2,
        boxShadow: 'default',
        borderRadius: 2,
      },
      large: {
        padding: 4,
        boxShadow: 'large',
        borderRadius: 4,
      },
    },
  })}
`;
