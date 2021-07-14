import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './Coupon.scss';

export class Coupon extends Component {
  render() {
    const { couponName, order } = this.props;
    return (
      <li className="Mycoupon">
        <div className="coupon-index">{order + 1}</div>
        <div className="orderList-number">
          <p className="orderDataTitle">{couponName}</p>
        </div>
      </li>
    );
  }
}

export default Coupon;
