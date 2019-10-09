import { maxNumber } from './index';

describe('helpers', () => {
  describe('maxNumber', () => {
    it('returns 0 on empty array', () => {
      expect(maxNumber([])).toEqual(0);
    });

    it('return max number in array', () => {
      const array = [3, 5, 1];
      expect(maxNumber(array)).toEqual(5);
    });
  });
});
