import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class DetailTop extends Component {
  //state초기화
  constructor(props) {
    super(props);
    this.state = {
      numValue: 1,
    };
  }
  onClickHandler = () => {
    this.setState({ numValue: this.state.numValue + 1 });
  };
  onClickhandlerRemove = () => {
    //const { numValue } = this.state.numValue;
    if (this.state.numValue <= 1) {
      alert('1개 이하는 없습니다.');
    } else {
      this.setState({ numValue: this.state.numValue - 1 });
    }
  };
  render() {
    console.log(this.state.numValue);
    return (
      <section className="detail-top-wrap">
        <div className="detail-top-container">
          <div className="detail-top-data">
            <picture>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fmanilaclam-water-detail.png?alt=media"
                alt="제품 이미지"
              />
            </picture>
            <article className="detail-top-info-wrap">
              <h2>초신선 왕바지락</h2>
              <p className="product-standard">100g당 1,300원</p>
              <p className="product-price">기준가 6,500원 (500g)</p>
              <div className="detail-top-option">
                <p className="detail-top-tit">옵션</p>
                <div className="detail-option-wrap info-box">
                  <button>
                    보통(16mm)
                    <i className="fas fa-chevron-down drop-down-arrow"></i>
                  </button>
                  <div className="option-wrap disable">
                    <ul>
                      <li>
                        <button> 보통(16mm)</button>
                      </li>
                      <li>
                        <button> 보통(16mm)</button>
                      </li>
                      <li>
                        <button> 보통(16mm)</button>
                      </li>
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
