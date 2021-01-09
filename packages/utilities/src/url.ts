export function looksExternal(url?: string) {
  if (!url) {
    return false;
  }
  return url.startsWith('http') || url.startsWith('mailto');
}
