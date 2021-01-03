import {formatCurrency} from '../currency';

describe('currency', () => {
  describe('formatCurrency', () => {
    it('formats number of cents to currency in dollars', () => {
      const formatted = formatCurrency(24000);

      expect(formatted).toStrictEqual('$240.00');
    });
  });
});
