import { maxNumber } from './index';

describe('maxNumber', () => {
  describe('given empty attay', () => {
    it('returns 0', () => {
      expect(maxNumber([])).toEqual(0);
    });
  });

  describe('given an array of numbers', () => {
    it('returns the max number', () => {
      expect(maxNumber([1, 2, 3])).toEqual(3);
    });
  });
});
