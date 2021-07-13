import React, { Component } from 'react';
import './Footer.scss';

export class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="footerNavigation">
            <section className="footerNavigationLeft">
              <p className="footerNavigationMenu">이용약관</p>
              <p className="footerNavigationMenu">개인정보처리방침</p>
            </section>
            <section className="footerNavigationRight">
              <i className="fas fa-comment"></i>
              <i className="fab fa-instagram"></i>
            </section>
          </div>
        </div>
        <div className="footerSplit"></div>
        <section className="footerMain">
          <article className="footerMainInfo">
            <div>
              <div className="footerLogo">
                <i className="fas fa-drumstick-bite"></i> 고기각
              </div>
              <div className="footerInfo">(주) 고기각</div>
              <div className="footerInfo">사업자등록번호 : 12345678</div>
              <div className="footerInfo">개인정보관리책임자 : 이재현</div>
            </div>
          </article>
          <article className="footerCs">
            <h6>고객센터</h6>
            <h3>1234-5678</h3>
            <p>
              평일: 08:30 - 17:30
              <br />
              점심: 12:30 - 13:30
              <br />
              "(토, 일 및 공휴일 휴무)"
            </p>
            <div className="footerCsContact">
              <p>
                카카오톡: <span>@정육각</span>
                <span>이메일:1234 </span>
              </p>
            </div>
          </article>
        </section>
      </>
    );
  }
}

export default Footer;
