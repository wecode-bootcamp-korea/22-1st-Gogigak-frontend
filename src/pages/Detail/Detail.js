import React, { Component } from 'react';

import './Detail.scss';

import DetailTop from './DetailTop';
import DetailTab from './DetailTab';
import DetailDescContationer from './DetailDescContationer';

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
      .then(res => {
        return res.json();
      })
      .then(res => {
        this.setState({
          productInfo: res.data,
        });
      });
  }
  render() {
    const { productInfo } = this.state;
    return (
      <div className="detail-wrap">
        {productInfo.map(el => {
          return (
            <DetailTop
              key={el.key}
              productImg={el.productImg}
              productName={el.productName}
              productStandard={el.productStandard}
              productPrice={el.productPrice}
              productOption={el.productOption}
            />
          );
        })}
        {/* <DetailTop /> */}
        <DetailTab />
        <DetailDescContationer />
      </div>
    );
  }
}

export default Detail;
