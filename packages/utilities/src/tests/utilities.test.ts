import {createScale} from '../utilities';

describe('utilities', () => {
  describe('createScale', () => {
    it('creates a scale for a given initial value, length and multiplier', () => {
      const scale = createScale(200, 2, 3);

      expect(scale).toStrictEqual(expect.arrayContaining([400, 800, 1200]));
    });

    it('creates a scale with a given transform function', () => {
      const transformFunction = jest.fn((arr: any[]) =>
        arr.map((val) => `${val.toString()}-transformed`),
      );
      const scale = createScale(200, 2, 2, transformFunction);

      expect(transformFunction).toHaveBeenCalled();
      expect(scale).toStrictEqual(
        expect.arrayContaining(['400-transformed', '800-transformed']),
      );
    });
  });
});
