import React, { Component } from 'react';

export class AmountOption extends Component {
  render() {
    const { optionId, productOption, selectOption } = this.props;
    //console.log('this.props', this.props);
    return (
      <li>
        <button onClick={() => selectOption(productOption, optionId)}>
          {productOption}
        </button>
      </li>
    );
  }
}

export default AmountOption;
