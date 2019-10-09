import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Gift from './Gift';
import Wallet from './Wallet';

class App extends Component{
  state = {
    gifts: [],
  };

  addGift = () => {
    const { gifts } = this.state;

    const ids = gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(ids) : 0;

    gifts.push({ id: maxId + 1 });

    this.setState({ gifts });
  };

  removeGift = (id) => {
    const gifts = this.state.gifts
      .filter(gift => gift.id !== id);

    this.setState({ gifts });
  };

  render() {
    return (
      <div>
        <h2>Hello world!</h2>
        <div className="gifts-list">
          {
            this.state.gifts.map(gift => {
              return <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />;
            })
          }
        </div>
        <Button
          className="btn-add"
          onClick={this.addGift}
        >Add new gift</Button>
        <hr />
        <Wallet />
      </div>
    );
  }
}

export default App;
