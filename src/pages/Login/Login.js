import React, { Component } from 'react';
import './Login.scss';

export class Login extends Component {
  render() {
    return (
      <frameElement>
        <div className="loginTitle">로그인</div>
        <p className="loginSubTitle">이메일 로그인</p>
        <form>
          <section className="LoginSection">
            <input placeholder="아이디(이메일 주소)를 입력하세요" />
            <input placeholder="비밀번호를 입력하세요" />
          </section>
          <button>로그인</button>
        </form>

        <article>
          <section className="findMyId">
            <p>아이디 / 비밀번호 찾기</p>
          </section>
        </article>
        <p className="loginSubTitle">SNS 간편 로그인</p>

        <article>
          <div>
            <button className="loginWithKakao">
              <div>
                <i class="fas fa-comment"></i>
                <span>&nbsp; 카카오로 시작하기</span>
              </div>
            </button>
          </div>
        </article>
        <article>
          <div>
            <button className="loginWithNaver">
              <div>
                <i class="fas fa-portrait"></i>
                <span>&nbsp;&nbsp;네이버로 시작하기</span>
              </div>
            </button>
          </div>
        </article>
        <p className="firstRegister">
          정육각이 처음이신가요? &nbsp;
          <span>회원가입하기</span>
        </p>
      </frameElement>
    );
  }
}

export default Login;
