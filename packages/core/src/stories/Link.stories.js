import React from 'react';

import {Link} from '../components';

const config = {
  title: 'Example/Link',
  component: Link,
};

export default config;

const Template = (args) => <Link {...args} />;

export const LinkOne = Template.bind({});

LinkOne.args = {
  children: 'This is a link',
};
