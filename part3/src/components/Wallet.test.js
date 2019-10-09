import React from 'react';
import { shallow } from 'enzyme';

import { Wallet } from './Wallet';

describe('Wallet', () => {
  const mockDeposit = jest.fn();
  const mockWithdraw = jest.fn();
  const baseBalance = 20;
  const props = { balance: baseBalance, deposit: mockDeposit, withdraw: mockWithdraw };
  const wallet = shallow(<Wallet {...props} />);

  it('rendered correctly', () => {
    expect(wallet).toMatchSnapshot();
  });

  it('has `balance` in `state`', () => {
    expect(wallet.state().balance).toBe(0);
  });

  it('display `wallet` balance from props', () => {
    expect(wallet.find('.balance').text()).toEqual(`Your current balance is: ${baseBalance}`);
  });

  it('input for change balance is exist', () => {
    expect(wallet.find('.input-balance').exists()).toBe(true);
  });

  describe('when user type in `wallet input`', () => {
    const updatedBalance = 25;

    beforeEach(() => {
      wallet.find('.input-balance')
        .simulate('change', { target: { value: updatedBalance } });
    });

    it('updates the local balance in `state` and convert it to numbers', () => {
      expect(wallet.state().balance).toEqual(updatedBalance);
    });

    describe('user wants to make deposit', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click');
      });

      it('dispatches the `deposit()` from props with local balance', () => {
        expect(mockDeposit).toHaveBeenCalledWith(updatedBalance);
      });
    });

    describe('user wants to withdraw from balance', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click');
      });

      it('dispatches the `withdraw()` from props with local balance', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(updatedBalance);
      });
    });
  });
});
