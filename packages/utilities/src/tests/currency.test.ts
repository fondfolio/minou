import {formatCurrency, formatCurrencyPerContributor} from '../currency';

describe('currency', () => {
  describe('formatCurrency', () => {
    it('formats number of cents to currency in dollars', () => {
      const formatted = formatCurrency(24000);

      expect(formatted).toStrictEqual('$240.00');
    });
  });

  describe('formatCurrencyPerContributor', () => {
    it('formats the cost based on the number of contributors', () => {
      const formatted = formatCurrencyPerContributor(24000, 10);

      expect(formatted).toStrictEqual('$24.00');
    });
  });
});
