import React, { Component } from 'react';
import './Register.scss';

export class Register extends Component {
  render() {
    return (
      <frameElement>
        <div className="registerTitle">회원가입</div>
        <section>
          <p>가입정보 입력</p>
          <div className="registerInputBox">
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p>아이디(이메일주소)</p>
              </div>
              <div className="registerInputContent">
                <input className="registerInputContentInput" />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p>비밀번호</p>
              </div>
              <div className="registerInputContent">
                <input className="registerInputContentInput" />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p>비밀번호 확인</p>
              </div>
              <div className="registerInputContent">
                <input className="registerInputContentInput" />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p>이름</p>
              </div>
              <div className="registerInputContent">
                <input className="registerInputContentInput" />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p>휴대폰 번호</p>
              </div>
              <div className="registerInputContent registerInputContentPhone ">
                <select>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="019">019</option>
                </select>
                <input className="registerInputContentPhoneNumber"></input>
                <input className="registerInputContentPhoneNumber"></input>
              </div>
            </div>
          </div>
          <div className="registerButtonArea">
            <button className="goPrevious">이전으로</button>
            <button className="goResiter">가입하기</button>
          </div>
        </section>
      </frameElement>
    );
  }
}

export default Register;
