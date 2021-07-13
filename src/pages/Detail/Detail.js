import React, { Component } from 'react';

import DetailTop from './DetailTop';
import DetailTab from './DetailTab';
import DetailDescContationer from './DetailDescContationer';

import './Detail.scss';

export class Detail extends Component {
  constructor(props) {
    super(props);
    //state생성
    this.state = {
      productInfo: [],
    };
  }
  //mockdata받기
  componentDidMount() {
    fetch('http://ambitiouskyle.iptime.org:6389/products/12', {
      method: 'GET',
    })
      .then(results => results.json())
      .then(results => {
        this.setState({
          productInfo: results.results,
        });
      });
  }
  render() {
    const productInfo = this.state;
    console.log(productInfo.productInfo.isOrganic);
    return (
      <div className="detail-wrap">
        <DetailTop
          productImg={productInfo.productInfo.thumbnail}
          productName={productInfo.productInfo.name}
          productStandard={productInfo.productInfo.grams}
          productPrice={productInfo.productInfo.price}
          productOption={productInfo.productInfo.options}
          productCloseBtn={productInfo.productInfo.isOrganic}
        />
        <DetailTab />
        <DetailDescContationer
          DesImg={productInfo.productInfo.images}
          DesDate={productInfo.productInfo.butcheredDate}
        />
      </div>
    );
  }
}

export default Detail;
