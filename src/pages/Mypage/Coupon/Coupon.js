import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Coupon.scss';

export class Coupon extends Component {
  render() {
    return (
      <li className="Mycoupon">
        <div className="coupon-index">
          <span>0</span>1
        </div>
        <div className="orderList-number">
          <p className="orderDataTitle">회원가입 축하 쿠폰</p>
        </div>
      </li>
    );
  }
}

export default Coupon;
