import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './Nav.scss';

export class Nav extends Component {
  render() {
    return (
      <div className="Navigation">
        <div>상단배너</div>
        <header>
          <div className="navigationContainer">
            <div className="navigationLeft">
              <div
                className="mainLogo"
                onClick={() => {
                  window.scrollTo(0, 0);
                  this.props.history.push('./');
                }}
              >
                <i className="fas fa-drumstick-bite"></i>
                고기각
              </div>
              <ul className="navigationMenu">
                <li
                  className="navigationMenuList"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    this.props.history.push('./list');
                  }}
                >
                  쇼핑하기
                </li>
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
                <li
                  className="navigationMenuList"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    this.props.history.push('./login');
                  }}
                >
                  로그인
                </li>
                <li
                  className="navigationMenuList"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    this.props.history.push('./sign-up');
                  }}
                >
                  회원가입
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Nav);
