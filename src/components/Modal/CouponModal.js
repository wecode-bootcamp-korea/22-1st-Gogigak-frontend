import React, { Component } from 'react';
import CouponList from './CouponList';

export default class CouponModal extends Component {
  render() {
    return (
      <section className="backgroundContainer">
        <div className="modalContainer" onClick={e => e.stopPropagation()}>
          <h3 className="modalTitle">쿠폰</h3>

          <div className="optionContainer">
            <p className="couponOption">쿠폰선택</p>
            {this.props.couponData.map(x => (
              <CouponList
                couponName={x.name}
                couponValue={x.couponValue}
                couponId={x.id}
                selectCoupon={this.props.selectCoupon}
                toggleCoupon={this.props.toggleCoupon}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
