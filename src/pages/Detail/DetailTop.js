import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AmountOption from './AmountOption';

export class DetailTop extends Component {
  //state초기화
  constructor(props) {
    super(props);
    this.state = {
      itemCountNumValue: 1,
      isLoginModalOn: false,
      amountOption: [],
      selectedOption: this.props.productOption,
      productOption: '',
      options: '',
    };
  }
  //수량 증가 감소
  increaseCount = () => {
    this.setState({ itemCountNumValue: this.state.itemCountNumValue + 1 });
  };
  increaseCountRemove = () => {
    if (this.state.itemCountNumValue > 1) {
      this.setState({ itemCountNumValue: this.state.itemCountNumValue - 1 });
    }
  };
  //종류 추가
  onClickToggleHandler = () => {
    this.setState({
      isLoginModalOn: !this.state.isLoginModalOn,
    });
  };

  selectOption = options => {
    this.setState({
      selectedOption: options,
    });
    this.onClickToggleHandler();
  };

  render() {
    const selectedOption = this.state.selectedOption;
    return (
      <section className="detail-top-wrap">
        <div className="detail-top-container">
          <div className="detail-top-data">
            <picture>
              <img src={this.props.productImg} alt="제품 이미지" />
            </picture>
            <article className="detail-top-info-wrap">
              <h2>{this.props.productName}</h2>
              <p className="product-standard">
                100g당 {this.props.productStandard}원
              </p>
              <p className="product-price">
                기준가 {this.props.productPrice}원 (500g)
              </p>
              <div className="detail-top-option">
                <p className="detail-top-tit">옵션</p>
                <div className="detail-option-wrap info-box">
                  <button
                    onClick={this.onClickToggleHandler}
                    className={this.state.isLoginModalOn ? 'active' : ''}
                  >
                    {selectedOption && selectedOption}
                    <i className="fas fa-chevron-down drop-down-arrow"></i>
                  </button>
                  <div
                    className={
                      this.state.isLoginModalOn
                        ? 'option-wrap'
                        : 'option-wrap disable'
                    }
                  >
                    <ul>
                      {this.props.productOption &&
                        this.props.productOption.map(el => {
                          return (
                            <AmountOption
                              key={el.key}
                              productOption={el}
                              selectOption={this.selectOption}
                            />
                          );
                        })}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="count-wrap">
                <p className="detail-top-tit">수량</p>
                <div className="count-container info-box">
                  <button
                    className="minus-button button-wrap"
                    name="dec"
                    onClick={this.increaseCountRemove}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="count-counter">
                    <span>{this.state.itemCountNumValue}</span>
                  </div>
                  <button
                    className="plus-button button-wrap"
                    name="inc"
                    onClick={this.increaseCount}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              <div className="buy-wrap">
                <ul>
                  <li>
                    <Link to="/Login" className="btn btn-buy">
                      바로구매
                    </Link>
                  </li>
                  <li>
                    <Link to="/Login" className="btn btn-cart">
                      장바구니
                    </Link>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}

export default DetailTop;
