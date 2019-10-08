import balanceReducer from './balance';
import balanceReducer2 from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
  describe('when initializing', () => {
    const balance = 10;

    it('set a blalance', () => {
      expect(balanceReducer(undefined, { type: constants.SET_BALANCE, balance })).toEqual(balance);
    });

    describe('then re-initializing', () => {
      it('reads the balance from cookies', () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      });
    });
  });

  it('deposit into the balance', () => {
    const deposit = 10;
    const initialState = 5;

    expect(balanceReducer(initialState, { type: constants.DEPOSIT, deposit }))
      .toEqual(deposit + initialState);
  });

  it('withdraw the balance', () => {
    const withdraw = 10;
    const initialState = 15;

    expect(balanceReducer(initialState, { type: constants.WITHDRAW, withdraw }))
      .toEqual(initialState - withdraw);
  })
});
