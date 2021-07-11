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
    fetch('http://localhost:3000/data/detailProduct.json', {
      method: 'GET',
    })
      .then(results => {
        return results.json();
      })
      .then(results => {
        this.setState({
          productInfo: results.results,
        });
        //console.log(this.state.productInfo);
      });
  }
  render() {
    const productInfo = this.state;
    return (
      <div className="detail-wrap">
        <DetailTop
          productImg={productInfo.productInfo.thumbnail}
          productName={productInfo.productInfo.name}
          productStandard={productInfo.productInfo.grams}
          productPrice={productInfo.productInfo.price}
          productOption={productInfo.productInfo.options}
          //productInfo={productInfo.productInfo}
        />
        <DetailTab />
        <DetailDescContationer DesImg={productInfo.productInfo.images} />
      </div>
    );
  }
}

export default Detail;
