import React, { Component } from 'react';
import './Register.scss';

export class Register extends Component {
  state = {
    id: '',
    password: '',
    passwordCheck: '',
    name: '',
    phone: '',
  };

  register = () => {
    fetch('http://10.58.0.244:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.password,
        name: this.state.name,
        phone_number: this.state.phone,
      }),
    })
      .then(res => res.json())
      .then(this.props.history.push('./login'));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });

    return console.log(
      this.validateEmail(this.state.id) &&
        this.validatePassword(this.state.password) &&
        this.validatephone(this.state.phone)
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

  validatephone = value => {
    let regExp = /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/;
    return regExp.test(value);
  };

  render() {
    return (
      <div className="register">
        <div className="registerTitle">회원가입</div>
        <section className="registerForm">
          <p>가입정보 입력</p>
          <div className="registerInputBox">
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p className="registerInput">아이디(이메일주소)</p>
              </div>
              <div className="registerInputContent">
                <input
                  className="registerInputContentInput"
                  name="id"
                  type="text"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p className="registerInput">비밀번호</p>
              </div>
              <div className="registerInputContent">
                <input
                  className="registerInputContentInput"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p className="registerInput">비밀번호 확인</p>
              </div>
              <div className="registerInputContent">
                <input
                  className="registerInputContentInput"
                  name="passwordCheck"
                  type="passwordCheck"
                  value={this.state.passwordCheck}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p className="registerInput">이름</p>
              </div>
              <div className="registerInputContent">
                <input
                  className="registerInputContentInput"
                  name="name"
                  type="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="registerInputLine">
              <div className="registerInputTitle">
                <p className="registerInput">휴대폰 번호</p>
              </div>
              <div className="registerInputContent registerInputContentPhone ">
                <input
                  className="registerInputContentInput"
                  name="phone"
                  type="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                ></input>

                {/* 추가 구현사항 */}
                {/* <select className="phoneNumberSelect">
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="019">019</option>
                </select>
                <input className="registerInputContentPhoneNumber"></input>
                <input className="registerInputContentPhoneNumber"></input> */}
              </div>
            </div>
          </div>
          <div className="registerButtonArea">
            <button
              className="goPrevious"
              onClick={() => this.props.history.push('./sign-up')}
            >
              이전으로
            </button>
            <button className="goResiter" onClick={this.register}>
              가입하기
            </button>
          </div>
        </section>
      </div>
    );
  }
}

export default Register;
