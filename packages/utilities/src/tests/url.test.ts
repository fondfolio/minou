import {looksExternal} from '../url';

describe('url', () => {
  describe('looksExternal', () => {
    it('returns true for mail links', () => {
      expect(looksExternal('mailto:hello@fondfolio.com')).toStrictEqual(true);
    });

    it('returns true for http links', () => {
      expect(looksExternal('http://cartogram.ca')).toStrictEqual(true);
    });

    it('returns true for https links', () => {
      expect(looksExternal('https://cartogram.ca')).toStrictEqual(true);
    });

    it('returns false for empty values', () => {
      expect(looksExternal('')).toStrictEqual(false);
      expect(looksExternal()).toStrictEqual(false);
      expect(looksExternal()).toStrictEqual(false);
    });

    it('returns false for relative urls', () => {
      expect(looksExternal('/relative')).toStrictEqual(false);
    });
  });
});
