import React, { Component } from 'react';
import { API } from '../../config';
import './Cart.scss';
import CartList from './CartList';

export class Cart extends Component {
  state = {
    cartData: '',
  };

  quantityPlus = (cartIndex, cartItemId) => {
    let newCartData = [...this.state.cartData];
    if (newCartData[cartIndex - 1].quantity < 100) {
      newCartData[cartIndex - 1].quantity =
        newCartData[cartIndex - 1].quantity + 1;
      this.setState({ cartData: newCartData });
    } else {
      this.setState({ cartData: newCartData });
    }

    fetch(`${API.CART}/${cartItemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ changeQuantity: +1 }),
    });
  };

  quantityMinus = (cartIndex, cartItemId) => {
    let newCartData = [...this.state.cartData];
    if (newCartData[cartIndex - 1].quantity > 1) {
      newCartData[cartIndex - 1].quantity =
        newCartData[cartIndex - 1].quantity - 1;
      this.setState({ cartData: newCartData });
    } else {
      this.setState({ cartData: newCartData });
    }

    fetch(`${API.CART}/${cartItemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ changeQuantity: -1 }),
    });
  };

  deleteCartItem = (cartIndex, cartItemId) => {
    let newCartData = [...this.state.cartData];
    console.log(newCartData);
    newCartData = newCartData.filter(
      cartItem => cartItem.cartItemId !== cartIndex
    );
    this.setState({ cartData: newCartData });

    fetch(`${API.CART}/${cartItemId}`, {
      method: 'DELETE',
      body: cartItemId,
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartData: data.cartItems,
        });
      });
    console.log(this.state.cartData, '장바구니 삭제');
  };

  componentDidMount() {
    fetch(API.CART)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartData: data.cartItems,
        });
        console.log(this.state.cartData, '컨디마');
      });
  }

  render() {
    return (
      <div className="cart">
        <p className="cartTitle">장바구니</p>
        <div className="sectionWrap">
          {this.state.cartData ? (
            <>
              <section className="cartContainer">
                <div className="listHeader">
                  <div className="header-info">상품정보</div>
                  <div className="header-count">수량</div>
                  <div className="header-price">가격</div>
                </div>
                {this.state.cartData.map((cartData, idx) => (
                  <CartList
                    cartIndex={idx + 1}
                    cartItemId={cartData.cartItemId}
                    cartData={cartData.thumbnail}
                    grams={cartData.grams}
                    thumbnail={cartData.thumbnail}
                    name={cartData.name}
                    option={cartData.option}
                    price={cartData.price}
                    quantity={cartData.quantity}
                    quantityPlus={this.quantityPlus}
                    quantityMinus={this.quantityMinus}
                    deleteCartItem={this.deleteCartItem}
                  />
                ))}
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
                      <span className="basic-text">기본 배송비</span>
                      <span className="basic-price">2500원</span>
                    </div>
                    <div className="firstPayment">
                      <span className="firstBuyText">첫구매 무료배송</span>
                      <span>-100%</span>
                    </div>
                  </div>
                  <p className="paymentMessage">
                    첫구매 무료배송 혜택이 적용되었습니다.
                  </p>
                  <div>
                    쿠폰 사용하기 <i class="far fa-check-circle"></i>
                  </div>
                  <div className="totalPrice">
                    <p className="totalPrice-text">예상 결제 금액</p>
                    <p className="totalPrice-won">36,600원</p>
                  </div>
                  <button className="paymentBtn">전체상품 주문하기</button>
                  <button className="keepShoppingBtn">쇼핑계속하기</button>
                </div>
              </section>
            </>
          ) : (
            <>
              <div className="emptyCart"> 장바구니에 담은 상품이 없습니다.</div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Cart;
