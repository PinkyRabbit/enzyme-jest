import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('rendered correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('has gifts in state', () => {
    expect(app.state().gifts).toEqual([]);
  });

  describe('when clicking the `add-gift` button', () => {
    const id = 1;

    beforeEach(() => {
      app.find('.btn-add').simulate('click');
    });

    afterEach(() => {
      app.setState({ gifts: [] });
    });

    it('add a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }]);
    });

    it('adds a new gift to rendered list', () => {
      expect(app.find('.gifts-list').children().length).toEqual(1);
    });

    it('`Gift` component inserted', () => {
      expect(app.find('Gift').exists()).toBe(true);
    });

    it('and after wants to delete a gift - shoul delete it from the `state`', () => {
      app.instance().removeGift(id);
      expect(app.state().gifts).toEqual([]);
    })
  });

  it('`Wallet` component inserted', () => {
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  });
});
