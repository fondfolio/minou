import {truncate, reverseTruncate} from '../string';

describe('strings', () => {
  describe('truncate()', () => {
    it('does not truncate a string of equal or shorter length', () => {
      expect(truncate('foo', 4)).toBe('foo');
      expect(truncate('foo', 3)).toBe('foo');
    });

    it('truncates a string of longer length', () => {
      expect(truncate('foo', 2)).toBe('fo…');
      expect(truncate('foo', 1)).toBe('f…');
    });

    it('truncates with a custom prefix', () => {
      const suffix = 'etc…';

      expect(truncate('foo', 2, suffix)).toBe(`fo${suffix}`);
      expect(truncate('foo', 1, suffix)).toBe(`f${suffix}`);
    });

    it('trims leading and trailing spaces', () => {
      expect(truncate(' foo ', 2)).toBe('fo…');
      expect(truncate(' foo ', 1)).toBe('f…');
    });
  });

  describe('reverseTruncate', () => {
    it('does not reverse truncate a string of equal or shorter length', () => {
      expect(reverseTruncate('foo', 4)).toBe('foo');
      expect(reverseTruncate('foo', 3)).toBe('foo');
    });

    it('reverse truncates a string of longer length', () => {
      expect(reverseTruncate('foo', 2)).toBe('…oo');
      expect(reverseTruncate('foo', 1)).toBe('…o');
    });

    it('reverse truncates with a custom prefix', () => {
      const prefix = '#';

      expect(reverseTruncate('foo', 2, prefix)).toBe(`${prefix}oo`);
      expect(reverseTruncate('foo', 1, prefix)).toBe(`${prefix}o`);
    });

    it('trims leading and trailing spaces', () => {
      expect(reverseTruncate(' foo ', 2)).toBe('…oo');
      expect(reverseTruncate(' foo ', 1)).toBe('…o');
    });
  });
});
