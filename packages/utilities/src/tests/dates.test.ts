import {formatDate, formatDateFromNow} from '../dates';

describe('dates', () => {
  describe('formatDate', () => {
    it('formats date to from millesecond date string', () => {
      const formatted = formatDate('1609268548013');

      expect(formatted).toStrictEqual('December 29, 2020');
    });
  });

  describe('formatDistance', () => {
    it('return the distance to now in words from millesecond date string', () => {
      Date.now = jest.fn(() => 1609284811556);
      const formatted = formatDateFromNow('1609268548013');

      expect(formatted).toStrictEqual('about 5 hours');
    });
  });
});
