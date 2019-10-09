import React from 'react';
import { shallow } from 'enzyme';

import Gift from './Gift';

describe('Gift', () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it('rendered correctly', () => {
    expect(gift).toMatchSnapshot();
  });

  it('has `person` and `present` in state', () => {
    expect(gift.state()).toEqual({ person: '', present: '' });
  });

  describe('if user change a `person`', () => {
    const person = 'Uncle';

    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person } });
    });

    afterEach(() => {
      gift.setState({ person: '' });
    });

    it('state should be changed', () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe('if user wants to change present', () => {
    const present = "Golf Club";

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present } });
    });

    afterEach(() => {
      gift.setState({ present: '' });
    });

    it('should add `present` to state', () => {
      expect(gift.state().present).toEqual(present);
    });
  });

  describe('when clicking `Remove Gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    });

    it('remove gift with correct id', () => {
      expect(mockRemove).toHaveBeenCalledWith(id);
    });
  });
});
