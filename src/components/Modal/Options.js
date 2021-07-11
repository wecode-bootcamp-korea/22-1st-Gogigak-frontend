import React, { Component } from 'react';
import './Options.scss';

class Options extends Component {
  handleOptionClick = element => {
    this.props.changeOptionId(element.id);
    this.props.handleMenuClick();
    this.props.changeOptionName(element.name);
  };
  render() {
    const { options } = this.props;
    return (
      <>
        <div className="optionsBox">
          <ul className="dropdownContent">
            {options &&
              options.map(element => {
                return (
                  <li
                    key={element.id}
                    className="optionContent"
                    onClick={() => this.handleOptionClick(element)}
                  >
                    {element.name}
                  </li>
                );
              })}
          </ul>
        </div>
      </>
    );
  }
}
export default Options;
