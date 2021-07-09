import React, { Component } from 'react';

export class AmountOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numValue: 1,
      isOn: false,
      option: '',
    };
    //this.onClickToggleHandler = this.onClickToggleHandler.bind(this);
    //() => console.log('asdasdas')
  }
  //option = React.createRef();
  // handleClick = option => {
  //   this.props.selectOption(this.props.amountOption);
  //   console.log(this.props.amountOption);
  // };

  render() {
    const amountOption = this.props.productOption;
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
