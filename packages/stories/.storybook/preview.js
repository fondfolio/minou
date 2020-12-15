import theme from '@minou/theme';

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
};

import {addDecorator} from '@storybook/react';
import {withThemesProvider} from 'storybook-addon-styled-component-theme';

const themes = [theme];
addDecorator(withThemesProvider(themes));
