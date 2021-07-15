import React, { Component } from 'react';

import UserInfoCategory from './UserInfoCategory';
import MyOrderList from './MyOrderList';
import { API } from '../../config';
import Coupon from './Coupon/Coupon';
import { Link } from 'react-router-dom';

import './Mypage.scss';

class Mypage extends Component {
  state = {
    userInfo: [],
    selectedCategory: Array(ORDERDATA_LIST.length).fill(false),
  };

  componentDidMount() {
    fetch(`${API.USERS_ME}`, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => this.setState({ userInfo: data.result }));
  }

  handleCategoryClick = idx => {
    const newArr = Array(ORDERDATA_LIST.length).fill(false);

    newArr[idx] = true;
    this.setState({ selectedCategory: newArr });
  };
  handleLogout = () => {
    localStorage.removeItem('token');
  };

  render() {
    const { userInfo, selectedCategory } = this.state;
    const { myData } = this.props.match.params;

    return (
      <div className="mypageWrapper">
        <div>
          <p className="mypageTitle">마이페이지</p>
          <section className="mypageContainer">
            <div className="userInfoData">
              <div className="userInfo-head">
                <p className="userName"> Hello,{userInfo.name}</p>
                {userInfo.isAvailable && (
                  <i className="fas fa-rocket">신선배송 가능 지역</i>
                )}

                <Link to="/">
                  <button className="logout" onClick={this.handleLogout}>
                    로그아웃
                  </button>
                </Link>
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
              {ORDERDATA_LIST.map((category, idx) => {
                return (
                  <UserInfoCategory
                    key={category.id}
                    id={category.id}
                    title={category.name}
                    category={category.category}
                    selectedCategory={selectedCategory[idx]}
                    categorys={selectedCategory}
                    handleCategoryClick={() => this.handleCategoryClick(idx)}
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
                        orderCount={order.totalAmount}
                        arrivalDate={order.deliveryDate}
                      />
                    );
                  })
                : ''}
              {myData === 'coupon'
                ? userInfo.coupons &&
                  userInfo.coupons.map((coupon, idx) => {
                    return (
                      <Coupon
                        key={coupon.id}
                        id={coupon.id}
                        order={idx}
                        couponName={coupon.name}
                        couponValue={coupon.couponValue}
                      />
                    );
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
