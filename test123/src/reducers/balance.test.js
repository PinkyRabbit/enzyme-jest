import balanceReducer from './balance';
import balanceResucer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  const balance = 10;

  it('set a balance', () => {
    expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
  });

  describe('re-initializing', () => {
    it('reads the balance from cookies', () => {
      expect(balanceResucer2(undefined, {})).toEqual(balance);
    });
  });

  it('make a deposit', () => {
    const balance = 10;
    const deposit = 5;
    expect(balanceReducer(balance, { type: constants.DEPOSIT, deposit }))
      .toEqual(balance + deposit);
  });

  it('withdraw from balance', () => {
    const balance = 20;
    const withdraw = 5;
    expect(balanceReducer(balance, { type: constants.WITHDRAW, withdraw }))
      .toEqual(balance - withdraw);
  });
});
