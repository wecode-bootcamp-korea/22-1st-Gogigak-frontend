import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.scss';

export class Nav extends Component {
  state = {
    isLogin: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({
        isLogin: localStorage.getItem('token') !== null,
      });
      // if (localStorage.getItem('token') !== null) {
      //   this.setState({ isLogin: true });
      //   // console.log(localStorage.getItem('token'), '컴디업 위');
      // } else if (localStorage.getItem('token') === null) {
      //   this.setState({ isLogin: false });
      //   // console.log(localStorage.getItem('token'), '컴디업 아래');
      // }
    }
  }

  render() {
    return (
      <div className="Navigation">
        <div>상단배너</div>
        <header>
          <div className="navigationContainer">
            <div className="navigationLeft">
              <Link to="/" className="moveOtherPages">
                <div
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  className="mainLogo"
                >
                  <i className="fas fa-drumstick-bite"></i>
                  고기각
                </div>
              </Link>
              <ul className="navigationMenu">
                <Link to="/list" className="moveOtherPages">
                  <li
                    className="navigationMenuList"
                    onClick={() => {
                      window.scrollTo(0, 0);
                    }}
                  >
                    쇼핑하기
                  </li>
                </Link>
                <Link to="/Address" className="moveOtherPages">
                  <li className="navigationMenuList">새벽배송가이드</li>
                </Link>
                <li className="navigationMenuList">이벤트</li>
              </ul>
            </div>
            <div className="navigationRight">
              <ul className="navigationMenu">
                <li className="navigationMenuList">공지사항</li>
                <li className="navigationMenuList">고객센터</li>
              </ul>

              <div className="navigationSubMenuSplit"></div>

              {this.state.isLogin === true ? (
                <ul className="navigationMenu">
                  <li
                    className="navigationMenuList"
                    onClick={() => {
                      this.props.history.push('/mypage');
                    }}
                  >
                    마이페이지
                  </li>
                  <li className="navigationMenuList">
                    <i
                      className="fas fa-shopping-cart"
                      onClick={() => {
                        this.props.history.push('/cart');
                      }}
                    />
                  </li>
                </ul>
              ) : (
                <ul className="navigationMenu">
                  <Link to="/login" className="moveOtherPages">
                    <li
                      className="navigationMenuList"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      로그인
                    </li>
                  </Link>
                  <Link to="/sign-up" className="moveOtherPages">
                    <li
                      className="navigationMenuList"
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    >
                      회원가입
                    </li>
                  </Link>
                </ul>
              )}
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Nav);
