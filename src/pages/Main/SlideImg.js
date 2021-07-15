import React, { Component } from 'react';
import './Main.scss';

export default class SlideImg extends Component {
  render() {
    return (
      <div className="slide">
        {' '}
        <img
          src={this.props.image}
          alt="슬라이더"
          className="eventSlide"
        />{' '}
      </div>
    );
  }
}
