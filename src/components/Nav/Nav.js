import React, { Component } from 'react';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <frameElement>
        <div>상단배너</div>
        <header>
          <div className="navigationContainer">
            <div className="navigationLeft">
              <img alt="네비아이콘" />
              <ul className="navigationMainMenu">
                <li>쇼핑하기</li>
                <li>이용가이드</li>
                <li>이벤트</li>
              </ul>
            </div>
            <div className="navigationRight">
              <ul>
                <li>공지사항</li>
                <li>고객센터</li>
              </ul>
              <div className="navigationSubMenuSplit"></div>
              <ul>
                <li>공지사항</li>
                <li>고객센터</li>
              </ul>
            </div>
          </div>
        </header>
      </frameElement>
    );
  }
}

export default Nav;
