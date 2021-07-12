import React, { Component } from 'react';

export class AmountOption extends Component {
  render() {
    const amountOption = this.props.productOption;
    console.log(this.props.selectOption);
    return (
      <li>
        <button onClick={() => this.props.selectOption(amountOption)}>
          {amountOption}
        </button>
      </li>
    );
  }
}

export default AmountOption;
