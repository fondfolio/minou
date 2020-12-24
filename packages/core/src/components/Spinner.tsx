import React from 'react';

import {Icon} from './Icon';
import {Flex} from './Box';

export function Spinner() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Icon
        overrides={{
          viewBox: '0 0 100 100',
        }}
        icon={{
          path: (
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#005d63"
              strokeWidth="4"
              r="37"
              strokeDasharray="174.35839227423352 60.119464091411174"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.6097560975609756s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              />
            </circle>
          ),
        }}
      />
    </Flex>
  );
}
