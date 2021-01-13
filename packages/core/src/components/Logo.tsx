import React from 'react';

import {Icon, IconName} from './Icon';
import {Link} from './Link';

interface Props {
  color?: 'primary';
}

export const Logo = ({color, ...rest}: Props) => (
  <Link unstyled url="/" {...rest}>
    <Icon icon={IconName.LogoWord} color={color} />
  </Link>
);
