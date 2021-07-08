import React, { Component } from 'react';
import './Login.scss';

export class Login extends Component {
  state = {
    id: '',
    password: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    return (
      console.log(this.state.id, this.state.password),
      console.log(
        this.validateEmail(this.state.id),
        this.validatePassword(this.state.password)
      )
    );
  };

  validateEmail = value => {
    let regExp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;

    return regExp.test(value);
  };

  validatePassword = value => {
    let regExp = /^[a-zA-Z0-9]{8,20}$/;
    return regExp.test(value);
  };

  render() {
    return (
      <div className="login">
        <div className="loginTitle">로그인</div>
        <p className="loginSubTitle">이메일 로그인</p>
        <form>
          <section className="LoginSection">
            <input
              className="LoginIdInput"
              name="id"
              placeholder="아이디(이메일 주소)를 입력하세요"
              onChange={this.handleChange}
            />
            <input
              className="LoginIdPw"
              name="password"
              placeholder="비밀번호를 입력하세요"
              onChange={this.handleChange}
            />
          </section>
          <button className="loginButton">로그인</button>
        </form>

        <article class="findInfo">
          <section className="findMyId">
            <p>아이디 / 비밀번호 찾기</p>
          </section>
        </article>
        <p className="loginSubTitle">SNS 간편 로그인</p>
        <article>
          <div>
            <button className="loginWithKakao">
              <div>
                <i className="fas fa-comment"></i>
                <span>&nbsp; 카카오로 시작하기</span>
              </div>
            </button>
          </div>
        </article>
        <article>
          <div>
            <button className="loginWithNaver">
              <div>
                <i className="fas fa-portrait"></i>
                <span>&nbsp;&nbsp;네이버로 시작하기</span>
              </div>
            </button>
          </div>
        </article>
        <p className="firstRegister">
          정육각이 처음이신가요? &nbsp;
          <span className="goTosignUp">회원가입하기</span>
        </p>
      </div>
    );
  }
}

export default Login;
