import React, { Component } from 'react';

export class DetailDateDisplay extends Component {
  render() {
    return (
      <article className="display-date-wrap">
        <p>
          내일 받으실 삼겹살의 <strong>도축일</strong>을 확인하세요.
        </p>
        <article className="display-date-box">
          <div className="time-box">0</div>
          <div className="time-box">0</div>
          <p>월</p>
          <div className="time-box">0</div>
          <div className="time-box">0</div>
          <p>일</p>
        </article>
        <p>* 당일배송 기준</p>
      </article>
    );
  }
}

export default DetailDateDisplay;
