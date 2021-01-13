import {pascalCase} from 'change-case';

import {Icons, IconName} from './Icons';

export function useIcon(iconName?: IconName) {
  if (!iconName) {
    return Icons.LogoIcon;
  }

  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
  if (!Icons[iconName]) {
    throw Error(
      `Attempted to use Icon: ${Icons[iconName]}, but it does not exist`,
    );
  }

  return Icons[iconName];
}

export function useFondfolioIcon(
  fondfolio: {event: string} = {event: 'Birthday'},
  size = '',
) {
  const iconName: IconName = `Event${pascalCase(
    fondfolio.event,
  )}${size}` as IconName;

  return useIcon(iconName);
}
