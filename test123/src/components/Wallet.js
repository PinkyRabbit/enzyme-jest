import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component {
  state = {
    balance: 0,
  };

  updateBalance = (event) => {
    const balance = parseInt(event.target.value, 10);
    this.setState({ balance });
  };

  render() {
    return (
      <div>
        <h2>Wallet</h2>
        <br />
        <h3 className="balance">Your current balance is: {this.props.balance}</h3>
        <hr />
        <input
          className="input-balance"
          onChange={this.updateBalance}
        />
        <br />
        <Button
          className="btn-deposit"
          onClick={() => this.props.deposit(this.state.balance)}
        >Deposit</Button>
        <Button
          className="btn-withdraw"
          onClick={() => this.props.withdraw(this.state.balance)}
        >Withdraw</Button>
      </div>
    );
  }
}

export default connect(state => ({ balance: state }), {
  deposit,
  withdraw,
})(Wallet);
