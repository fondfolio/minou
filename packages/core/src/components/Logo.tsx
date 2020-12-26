import React from 'react';
import {Icons} from '@minou/icons';

import {Icon} from './Icon';
import {Link} from './Link';

interface Props {
  color?: 'primary';
}

export const Logo = ({color, ...rest}: Props) => (
  <Link unstyled url="/" {...rest}>
    <Icon icon={Icons.LogoWord} color={color} />
  </Link>
);
