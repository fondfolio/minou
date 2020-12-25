import React from 'react';

import {Heading, HeadingProps} from './Heading';

interface Props extends HeadingProps {
  /** The content to display inside the button */
  children: React.ReactNode;
}

export function Title(props: Props) {
  return <Heading level={2} {...props} />;
}
