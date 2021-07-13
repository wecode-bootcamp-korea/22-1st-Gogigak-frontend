import React, { Component } from 'react';
import { API } from '../../config';
import './Cart.scss';
import CartList from './CartList';

export class Cart extends Component {
  state = {
    cartData: '',
    id: '',
    user: '',
    isCoupon: false,
  };

  quantityPlus = (cartItemId, cartIndex) => {
    let newCartData = [...this.state.cartData];
    if (newCartData[cartIndex].quantity < 100) {
      newCartData[cartIndex].quantity = newCartData[cartIndex].quantity + 1;
      this.setState({ cartData: newCartData });

      fetch(`${API.CART}/${cartItemId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          changeQuantity: this.state.cartData[cartIndex].quantity,
        }),
      });
    }
  };

  quantityMinus = (cartItemId, cartIndex) => {
    let newCartData = [...this.state.cartData];
    if (newCartData[cartIndex].quantity > 1) {
      newCartData[cartIndex].quantity = newCartData[cartIndex].quantity - 1;
      this.setState({ cartData: newCartData });

      fetch(`${API.CART}/${cartItemId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          changeQuantity: newCartData[cartIndex].quantity,
        }),
      });
    }
  };

  deleteCartItem = cartItemId => {
    fetch(`${API.CART}/${cartItemId}`, {
      method: 'DELETE',
      body: cartItemId,
    });

    let newCartData = [...this.state.cartData];
    console.log(newCartData);
    newCartData = newCartData.filter(
      cartItem => cartItem.cartItemId !== cartItemId
    );
    this.setState({ cartData: newCartData });
  };

  componentDidMount() {
    fetch(API.CART)
      .then(res => res.json())
      .then(data => {
        this.setState({
          cartData: data.cartItems,
        });
      });

    fetch(`${API.USERS_ME}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ user: data.result });
      });
  }

  toggleCoupon = () => {
    this.setState({ isCoupon: !this.state.isCoupon });
  };

  render() {
    console.log(this.state, '렌더');

    const { cartData } = this.state;
    const totalValue =
      cartData &&
      cartData
        .map(cart => cart.price * cart.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const isFirstPayment = false;

    return (
      <div className="cart">
        <p className="cartTitle">장바구니</p>
        <div className="sectionWrap">
          {this.state.cartData && this.state.cartData.length !== 0 && (
            <>
              <section className="cartContainer">
                <div className="listHeader">
                  <div className="header-info">상품정보</div>
                  <div className="header-count">수량</div>
                  <div className="header-price">가격</div>
                </div>
                {this.state.cartData.map((cartData, idx) => (
                  <CartList
                    cartIndex={idx}
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
                    <p className="productPrice__price">
                      {totalValue.toLocaleString()}원
                    </p>
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
                    {isFirstPayment && (
                      <div className="firstPayment">
                        <span className="firstBuyText">첫구매 무료배송</span>
                        <span>-100%</span>
                      </div>
                    )}
                  </div>
                  {isFirstPayment && (
                    <p className="paymentMessage">
                      첫구매 무료배송 혜택이 적용되었습니다.
                    </p>
                  )}
                  <div className="useCoupon dropbtn">
                    <div onClick={this.toggleCoupon}>
                      쿠폰 사용하기 <i class="far fa-check-circle"></i>
                    </div>
                  </div>

                  {this.state.isCoupon && (
                    <>
                      <div className="useCoupon dropbtn">쿠폰쓰지마세요</div>
                      <div className="useCoupon dropbtn">쿠폰쓰지마세요</div>
                      <div className="useCoupon dropbtn">쿠폰쓰지마세요</div>
                    </>
                  )}

                  <div className="totalPrice">
                    <p className="totalPrice-text">예상 결제 금액</p>
                    <p className="totalPrice-won">
                      {totalValue.toLocaleString()}원
                    </p>
                  </div>
                  <button className="paymentBtn">전체상품 주문하기</button>
                  <button className="keepShoppingBtn">쇼핑계속하기</button>
                </div>
              </section>
            </>
          )}

          {this.state.cartData.length === 0 && <div> 장바구니 없어요 </div>}
        </div>
      </div>
    );
  }
}

export default Cart;
