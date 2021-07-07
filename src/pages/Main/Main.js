import React, { Component } from 'react';
import Item from '../Shopping/Item/Item';
import './Main.scss';

export default class Main extends Component {
  render() {
    return (
      <div className="mainPage">
        <section className="mainBannerContainer">
          <div className="mainBanner"></div>
        </section>
        <section className="eventBannerContainer">
          <div className="mainEvent">
            <div>당일배송</div>
          </div>
          <div className="freshPlan">
            <div>신선플랜</div>
          </div>
        </section>
        <section className="bestItemContainer">
          <h5>정육각 베스트 상품</h5>
          <ul className="bestItems">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ul>
        </section>
        <div className="shoppingBanner"></div>
      </div>
    );
  }
}
