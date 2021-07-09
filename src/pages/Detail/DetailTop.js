import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AmountOption from './AmountOption';

// select -> state
// 함수를 만들어서 자식한테 전달
// 자식에서 함수기 실행되면은 select된 값을 변경

export class DetailTop extends Component {
  //state초기화
  constructor(props) {
    super(props);
    this.state = {
      numValue: 1,
      isOn: false,
      amountOption: [],
      selectedOption: this.props.productOption[0],
      productOption: '',
      option: '',
    };
    this.onClickToggleHandler = this.onClickToggleHandler.bind(this);
  }
  //수량 증가 감소
  onClickHandler = () => {
    this.setState({ numValue: this.state.numValue + 1 });
  };
  onClickhandlerRemove = () => {
    //const { numValue } = this.state.numValue;
    if (this.state.numValue > 1) {
      this.setState({ numValue: this.state.numValue - 1 });
    }
  };
  //종류 추가
  onClickToggleHandler = () => {
    //const { isOn } = this.state.isOn;
    //console.log(isOn);
    this.setState({
      isOn: !this.state.isOn,
    });
  };

  selectOption = option => {
    this.setState({
      selectedOption: option,
    });
    this.onClickToggleHandler();
  };

  render() {
    const productInfo = this.props;
    const selectedOption = this.state.selectedOption;
    //console.log(productInfo.productOption);
    //console.log(this.state.productOption);
    console.log(selectedOption, 'dfdfd');
    return (
      <section className="detail-top-wrap" key="{productInfo.key}">
        <div className="detail-top-container">
          <div className="detail-top-data">
            <picture>
              <img src={productInfo.productImg} alt="제품 이미지" />
            </picture>
            <article className="detail-top-info-wrap">
              <h2>{productInfo.productName}</h2>
              <p className="product-standard">
                100g당 {productInfo.productStandard}원
              </p>
              <p className="product-price">
                기준가 {productInfo.productPrice}원 (500g)
              </p>
              <div className="detail-top-option">
                <p className="detail-top-tit">옵션</p>
                <div className="detail-option-wrap info-box">
                  <button
                    onClick={this.onClickToggleHandler}
                    className={this.state.isOn ? 'active' : ''}
                  >
                    {selectedOption}
                    <i className="fas fa-chevron-down drop-down-arrow"></i>
                  </button>
                  <div
                    className={
                      this.state.isOn ? 'option-wrap' : 'option-wrap disable'
                    }
                  >
                    <ul>
                      {productInfo.productOption.map(el => {
                        return (
                          <AmountOption
                            key={el.key}
                            productOption={el}
                            selectOption={this.selectOption}
                            // onClick={this.onClickToggleHandler}
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
                    onClick={this.onClickhandlerRemove}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <div className="count-counter">
                    <span>{this.state.numValue}</span>
                  </div>
                  <button
                    className="plus-button button-wrap"
                    name="inc"
                    onClick={this.onClickHandler}
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
