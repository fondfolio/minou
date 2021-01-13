import React from 'react';

import {Icon, IconName} from './Icon';
import {Flex, BoxProps} from './Box';

export function Spinner(props: BoxProps) {
  return (
    <Flex alignItems="center" justifyContent="center" {...props}>
      <Icon
        overrides={{
          viewBox: '0 0 100 100',
        }}
        icon={IconName.LogoAnimated}
      />
    </Flex>
  );
}
