import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Gift from './Gift';
import { maxNumber } from '../helper';

class App extends Component {
  state = {
    gifts: [],
  };

  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id);

    gifts.push({ id: maxNumber(ids) + 1 });

    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);

    this.setState({ gifts });
  }

  render() {
    return (
      <div>
        <h2>Gift Giver</h2>
        <div className="gift-list">
          {
            this.state.gifts.map(gift => {
              return <Gift
                key={gift.id}
                gift={gift}
                removeGift={this.removeGift}
              />;
            })
          }
        </div>
        <Button className="btn-add" onClick={this.addGift}>Add gift</Button>
      </div>
    );
  }
}

export default App;
