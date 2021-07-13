import React, { Component } from 'react';

export class DetailDateDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = { butcheredDate: '' };
  }

  render() {
    const month = this.props.DesDate.split('-')[1];
    const date = this.props.DesDate.split('-')[2];

    return (
      <article className="display-date-wrap">
        <p>
          내일 받으실 삼겹살의 <strong>도축일</strong>을 확인하세요.
        </p>
        <article className="display-date-box">
          <div className="time-box">{month[0]}</div>
          <div className="time-box">{month[1]}</div>
          <p>월</p>
          <div className="time-box">{date[0]}</div>
          <div className="time-box">{date[1]}</div>
          <p>일</p>
        </article>
        <p>* 당일배송 기준</p>
      </article>
    );
  }
}

export default DetailDateDisplay;
