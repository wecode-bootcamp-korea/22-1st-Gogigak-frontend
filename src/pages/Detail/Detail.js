import React, { Component } from 'react';

import DetailTop from './DetailTop';
import DetailTab from './DetailTab';
import DetailDescContationer from './DetailDescContationer';
import { API } from '../../config';

import './Detail.scss';

export class Detail extends Component {
  constructor(props) {
    super(props);
    //state생성
    this.state = {
      productInfo: {},
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
    const { productInfo } = this.state;
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
            />
            <DetailTab />
            <DetailDescContationer
              DesImg={productInfo.images}
              DesDate={productInfo.butcheredDate}
              productCloseBtn={productInfo.isOrganic}
            />
          </>
        )}
      </div>
    );
  }
}

export default Detail;
