export function usePageTitle(prefix?: string) {
  const seperator = ' ~ ';
  const titleParts = [
    'Fondfolio',
    'Handmade, collaborative memory books for special occasions',
  ];

  return [prefix, ...titleParts].join(seperator);
}
