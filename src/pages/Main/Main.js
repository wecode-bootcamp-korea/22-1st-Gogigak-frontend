import React, { Component } from 'react';
import Item from '../Shopping/Item/Item';
import './Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.slideContainer = React.createRef();
  }

  slideByNumber(e) {
    this.slideContainer.current.style.transition =
      'width 2s, height 2s, background-color 2s, transform 1s';

    this.slideContainer.current.style.transform = `translateX(-${
      576 * e.target.innerHTML
    }px)`;

    // console.log(this.slideContainer.current.style);
  }
  // slideNext() {
  // console.log(carousel);
  // let index = 0;
  // if (index === 0) {
  //   this.slideContainer.current.style.transform = `translateX(-${576}px)`;
  //   index = index + 1;
  // } else {
  //   this.slideContainer.current.style.transform = `translateX(-${576}px)`;
  //   index = index + 1;
  // }
  // console.log(this.slideContainer.current.style.transform);
  // console.log(index);
  // }

  // slidePrevious() {
  //   // console.log(carousel);

  //   let index = 0;

  //   if (index === 0) {
  //     this.slideContainer.current.style.transform = `translateX(-${576 * 2}px)`;
  //     index = index + 1;
  //   } else {
  //     this.slideContainer.current.style.transform = `translateX(+${576}px)`;
  //     index = index + 1;
  //   }
  //   console.log(this.slideContainer.current.style.transform);
  //   console.log(index);
  // }

  render() {
    return (
      <div className="mainPage">
        <section className="mainBannerContainer">
          <div className="mainBanner"></div>
        </section>
        <section className="eventBannerContainer">
          <div className="mainEvent">
            <div className="slideOverFlow">
              <div className="slideContentContainer" ref={this.slideContainer}>
                <div className="eventSlide red"> </div>
                <div className="eventSlide blue"> </div>
                <div className="eventSlide yellow"> </div>
                <div className="eventSlide gr"> </div>
                <div className="eventSlide wh"> </div>
                <div className="eventSlide bk"> </div>
              </div>
            </div>
            <div>
              <div className="slideBtn" onClick={e => this.slideByNumber(e)}>
                1
              </div>
              <div className="slideBtn" onClick={e => this.slideByNumber(e)}>
                2
              </div>
              <div className="slideBtn" onClick={e => this.slideByNumber(e)}>
                3
              </div>
              <div className="slideBtn" onClick={e => this.slideByNumber(e)}>
                4
              </div>
              <div className="slideBtn" onClick={e => this.slideByNumber(e)}>
                5
              </div>
            </div>
          </div>
          {/* <div onClick={() => this.slideNext()}>슬라이드 버튼</div> */}
          {/* <div onClick={() => this.slidePrevious()}>슬라이드 버튼</div> */}

          <div className="freshPlan">신선배송~</div>
        </section>
        <section className="bestItemContainer">
          <h5>정육각 베스트 상품</h5>
          <ul className="bestItems">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ul>
        </section>
        <div className="shoppingBanner"></div>
      </div>
    );
  }
}

const carousel = document.querySelector('.slideContentContainer');
