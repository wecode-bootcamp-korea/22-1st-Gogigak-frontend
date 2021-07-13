import React, { Component } from 'react';

import UserInfoCategory from './UserInfoCategory';
import MyOrderList from './MyOrderList';
import { API } from '../../config';
import './Mypage.scss';
import Coupon from './Coupon/Coupon';

class Mypage extends Component {
  state = { userInfo: [] };

  componentDidMount() {
    fetch(`${API.MYPAGE}`)
      .then(res => res.json())
      .then(data => this.setState({ userInfo: data.result }));
  }

  changeList = listName => {
    const data = this.props.match.params.myData;

    if (data === 'orderList' || data === undefined) {
      return;
    }
  };

  render() {
    const { userInfo } = this.state;
    const { myData } = this.props.match.params;
    console.log(userInfo);

    return (
      <div className="mypageWrapper">
        <div>
          <p className="mypageTitle">마이페이지</p>
          <section className="mypageContainer">
            <div className="userInfoData">
              <div className="userInfo-head">
                <p className="userName"> Hello,{userInfo.name}</p>
                <button className="logout"> 로그아웃</button>
              </div>
              <div className="splitLine"></div>
              <ul className="userInfoList">
                <li>
                  <div>
                    <h3 className="title">회원등급</h3>
                    <p className="content">[Wellcome]</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="title">적립금</h3>
                    <p className="content">[{userInfo.point}]</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="title">쿠폰</h3>
                    <p className="content">[{userInfo.coupon}]</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="title">구매</h3>
                    <p className="content">[{userInfo.orderCount}]</p>
                  </div>
                </li>
                <li>
                  <div>
                    <h3 className="title">회원번호</h3>
                    <p className="content">[{userInfo.userNumber}]</p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <div className="categoryContainer">
            <div className="categorys">
              {ORDERDATA_LIST.map(category => {
                return (
                  <UserInfoCategory
                    key={category.id}
                    id={category.id}
                    title={category.name}
                    category={category.category}
                  />
                );
              })}
            </div>
          </div>
          <div className="line"></div>
          <section className="listContainer">
            <ul className="orderListContainer">
              {myData === 'orderList' || myData === undefined
                ? userInfo.view &&
                  userInfo.view.map((order, idx) => {
                    return (
                      <MyOrderList
                        id={order.orderNumber}
                        orderNum={idx + 1}
                        key={order.orderNumber}
                        productName={order.orderSummary}
                        totalPrice={order.totalPrice}
                        arrivalDate={order.deliveryDate}
                      />
                    );
                  })
                : ''}
              {myData === 'coupon'
                ? userInfo.view &&
                  userInfo.view.map((order, idx) => {
                    return <Coupon />;
                  })
                : ''}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}

const ORDERDATA_LIST = [
  {
    id: 1,
    name: '주문내역',
    category: 'orderList',
  },
  {
    id: 2,
    name: '적립금내역',
    category: 'points',
  },
  {
    id: 3,
    name: '쿠폰관리',
    category: 'coupon',
  },
  {
    id: 4,
    name: '신선플랜',
    category: 'membership',
  },
  {
    id: 5,
    name: '개인정보관리',
    category: 'myInfo',
  },
];

export default Mypage;
