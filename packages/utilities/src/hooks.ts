export function usePageTitle(prefix?: string) {
  const seperator = ' ~ ';
  const titleParts = ['Fondfolio', 'Collaborative books, hand made in Toronto'];

  return [prefix, ...titleParts].join(seperator);
}
