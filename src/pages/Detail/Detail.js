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
  render() {
    const { productInfo } = this.state;
    // console.log('state', this.state);
    console.log('options', this.state.productInfo.options);
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
