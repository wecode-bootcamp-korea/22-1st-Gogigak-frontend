import React, { Component } from 'react';
import './CouponModal.scss';
export default class CouponList extends Component {
  seletcAndClose = () => {
    this.props.selectCoupon(this.props.couponValue);
    this.props.toggleCoupon();
  };
  render() {
    return (
      <div className="couponList">
        <div className="couponListLeft">
          <span className="coupons">{this.props.couponId}</span>
          <span className="coupons">{this.props.couponName}</span>
        </div>
        <div className="couponListRight">
          <div>
            <i
              className="fas fa-plus-circle"
              onClick={() => this.seletcAndClose()}
            ></i>
          </div>
        </div>
      </div>
    );
  }
}
