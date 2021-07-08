import React, { Component } from 'react';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <div className="Navigation">
        <div>상단배너</div>
        <header>
          <div className="navigationContainer">
            <div className="navigationLeft">
              <div className="mainLogo">
                <i className="fas fa-drumstick-bite"></i>
                고기각
              </div>
              <ul className="navigationMenu">
                <li className="navigationMenuList">쇼핑하기</li>
                <li className="navigationMenuList">새벽배송가이드</li>
                <li className="navigationMenuList">이벤트</li>
              </ul>
            </div>
            <div className="navigationRight">
              <ul className="navigationMenu">
                <li className="navigationMenuList">공지사항</li>
                <li className="navigationMenuList">고객센터</li>
              </ul>
              <div className="navigationSubMenuSplit"></div>
              <ul className="navigationMenu">
                <li className="navigationMenuList">공지사항</li>
                <li className="navigationMenuList">고객센터</li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Nav;
