import React, { Component } from 'react';
import './Cart.scss';

export class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <p className="cartTitle">장바구니</p>
        <div className="sectionWrap">
          <section className="cartContainer">
            <div className="listHeader">
              <div className="header-info">상품정보</div>
              <div className="header-count">수량</div>
              <div className="header-price">가격</div>
            </div>
            <ul>
              <li className="itemList">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fporkbelly-clean-list.png?alt=media"
                  alt="itemIm"
                />
                <div>
                  <p>초신선 무항생제 돼지 삼겹살 구이용</p>
                  <p>보통(16mm)</p>
                </div>
                <p>600g 기준</p>
                <div className="itemCounter">
                  <div>
                    <i class="fas fa-minus"></i>
                  </div>
                  <p>1</p>
                  <div>
                    <i class="fas fa-plus"></i>
                  </div>
                </div>
                <p>19,800원</p>
                <i class="far fa-window-close"></i>
              </li>
            </ul>
          </section>
          <section className="paymentContainer">
            <div className="paymentBox">
              <div className="productPrice">
                <p className="productPrice__text">총 상품 금액</p>
                <p className="productPrice__price">36,600원</p>
              </div>
              <div className="shippingPrice">
                <div className="shippingPrice-total">
                  <p>총 배송비</p>
                  <p>0원</p>
                </div>
                <div className="shippingPrice-basic">
                  <p>기본 배송비</p>
                  <p>2500원</p>
                </div>
                <div className="firstPayment">
                  <p>첫구매 무료배송</p>
                  <p>-100%</p>
                </div>
              </div>
              <p classNam="paymentMessage">
                첫구매 무료배송 혜택이 적용되었습니다.
              </p>
              <div className="totalPrice"></div>
              <button className="paymentBtn">전체상품 주문하기</button>
              <button className="keepShoppingBtn">쇼핑계속하기</button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Cart;
