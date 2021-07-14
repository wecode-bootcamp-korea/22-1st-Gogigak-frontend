import React, { Component } from 'react';
import './SignUp.scss';

export class SignUp extends Component {
  render() {
    return (
      <div className="signUp">
        <div className="signUpTitle">회원가입</div>
        <p className="signUpSubTitle">SNS 계정으로 가입하기</p>

        <article>
          <div>
            <button className="signUpWithKakao">
              <div>
                <i className="fas fa-comment"></i>
                <span>&nbsp; 카카오로 시작하기</span>
              </div>
            </button>
          </div>
        </article>
        <article>
          <div>
            <button className="signUpWithNaver">
              <div>
                <i className="fas fa-portrait"></i>
                <span>&nbsp;&nbsp;네이버로 시작하기</span>
              </div>
            </button>
          </div>
        </article>
        <p className="signUpSubTitle">이메일로 가입하기</p>
        <button className="signUpWithEmail">
          <div>
            <span
              onClick={() => {
                window.scrollTo(0, 0);
                this.props.history.push('./register');
              }}
            >
              정육각 회원가입 하기
            </span>
          </div>
        </button>
      </div>
    );
  }
}

export default SignUp;
