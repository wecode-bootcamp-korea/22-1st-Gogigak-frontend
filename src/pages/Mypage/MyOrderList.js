import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './MyOrderList.scss';

class MyOrderList extends Component {
  render() {
    const { id, orderNum, productName, totalPrice, arrivalDate } = this.props;
    return (
      <>
        <li className="listContent">
          <div>
            <div className="orderList">
              <div className="orderList-index">{orderNum}</div>
              <div className="orderList-number">
                <p className="orderDataTitle">주문번호</p>
                <p className="orderDataContent">{id}</p>
              </div>
              <div className="orderList-summary">
                <p className="orderDataTitle">주문요약</p>
                <div className="orderDataContent">
                  <p>{productName}</p>
                </div>
              </div>
              <div className="totalPrice">
                <p className="orderDataTitle">총 금액</p>
                <p className="orderDataContent">{totalPrice}</p>
              </div>
              <div className="shippingDate">
                <p className="orderDataTitle">도착 희망일</p>
                <p className="orderDataContent">{arrivalDate}</p>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }
}

export default MyOrderList;
