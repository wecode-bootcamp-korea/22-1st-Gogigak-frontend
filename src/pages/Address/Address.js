import React from 'react';
import DaumPostcode from 'react-daum-postcode';

import './Address.scss';
const POST_CODE_STYLE = {
  position: 'absolute',
  width: '770px',
  height: '400px',
  top: 0,
  left: 0,
  zIndex: '20',
  padding: '7px',
};

class Address extends React.Component {
  state = {
    isPost: false,
  };
  handleComplete = data => {
    let fullAddress = data.address;

    console.log(fullAddress);
  };

  handlePost = () => {
    this.setState({
      isPost: !this.state.isPost,
    });
  };

  render() {
    return (
      <section className="delivery">
        <img
          className="deliveryImg"
          src="/images/deliverylogo.svg"
          alt="logoImg"
        />
        <h3 className="title">신선배송</h3>
        <p className="subTitle">
          가장 빠르게 초신선을 만나는 법, 정육각의 ‘신선배송’을 소개합니다.
        </p>
        <div className="delievery_desc">
          <p>
            가장 빠르게 초신선을 만나는 법, 정육각의 ‘신선배송’을 소개합니다.
            <br />
            전날 저녁 계획한 아침식사를 도와 줄 새벽배송, <br />
            전국 어디든 하루만에 도착하는 우체국배송까지. <br />
            신선함을 먹는 습관을 위한 최적의 배송 서비스를 경험해보세요!
          </p>
        </div>

        <h3 className="searchText">
          정육각 <span className="text-highlight">신선배송 지역</span>은 계속
          <span className="text-highlight">확대</span> 중!
          <br /> 지금 우리 집에는 어떤 배송이 오는지 확인해보세요.
        </h3>
        <div className="searchContainer">
          <div className="searchbox" onClick={this.handlePost}>
            <div className="searchWhite">
              <p className="searchText">주소를 입력해주세요.</p>
            </div>
            <div className="searchBtn">
              <i class="fas fa-search"></i>
            </div>
            {this.state.isPost && (
              <DaumPostcode
                onComplete={this.handleComplete}
                style={POST_CODE_STYLE}
                autoClose
              />
            )}
          </div>
          <div className="searchResult">
            <p>
              고객님은 <span className="text-bold">당일배송</span>,
              <span className="text-bold">새벽배송</span>으로
              <br /> 받아보실 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Address;
