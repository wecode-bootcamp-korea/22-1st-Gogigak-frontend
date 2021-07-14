import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DetailTop from './DetailTop';
import DetailDescContationer from './DetailDescContationer';
import { API } from '../../config';

import './Detail.scss';

export class Detail extends Component {
  constructor(props) {
    super(props);
    //state생성
    this.state = {
      productInfo: {},
      isTabOn: false,
    };
  }
  //mockdata받기
  componentDidMount() {
    fetch(
      `http://ambitiouskyle.iptime.org:6389/products/${this.props.match.params.product}`
    )
      .then(results => results.json())
      .then(results => {
        this.setState({
          productInfo: results.results,
        });
      });
  }
  //tab toggle btn
  onClickToggleHandler = () => {
    this.setState({
      isTabOn: !this.state.isTabOn,
    });
  };
  render() {
    const { productInfo } = this.state;
    // console.log('state', this.state);
    //console.log('options', this.state.productInfo.options);
    //console.log('tabOn', this.state.isTabOn);
    return (
      <div className="detail-wrap">
        {productInfo.name && (
          <>
            <DetailTop
              productImg={productInfo.thumbnail}
              productName={productInfo.name}
              productStandard={productInfo.grams}
              productPrice={productInfo.price}
              productOption={productInfo.options}
              productId={this.props.match.params.product}
            />
            <div className="detail-tab">
              <ul>
                <li>
                  <Link
                    to="#!"
                    className={!this.state.isTabOn ? 'active' : null}
                    onClick={this.onClickToggleHandler}
                  >
                    상품설명
                  </Link>
                </li>
                <li>
                  <Link
                    to="#!"
                    className={this.state.isTabOn ? 'active' : null}
                    onClick={this.onClickToggleHandler}
                  >
                    상품리뷰
                  </Link>
                </li>
              </ul>
            </div>
            <DetailDescContationer
              DesImg={productInfo.images}
              DesDate={productInfo.butcheredDate}
              productCloseBtn={productInfo.isOrganic}
              tabToggle={this.state.isTabOn}
            />
          </>
        )}
      </div>
    );
  }
}

export default Detail;
