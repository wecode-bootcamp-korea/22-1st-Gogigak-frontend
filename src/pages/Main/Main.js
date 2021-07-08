import React, { Component } from 'react';
import Item from '../Shopping/Item/Item';
import './Main.scss';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.slideContainer = React.createRef();
  }

  state = {
    slideIndex: 0,
  };

  slideNext() {
    this.setState({ slideIndex: this.state.slideIndex + 1 }, () => {
      this.slideContainer.current.style.transition = '  transform 2s';
      this.slideContainer.current.style.transform = `translateX(-${
        1184 * this.state.slideIndex
      }px)`;
    });
  }

  slidePrevious() {
    this.setState({ slideIndex: this.state.slideIndex - 1 }, () => {
      this.slideContainer.current.style.transition = ' transform 1s';
      this.slideContainer.current.style.transform = `translateX(-${
        1184 * this.state.slideIndex
      }px)`;
    });
  }

  render() {
    return (
      <div className="mainPage">
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
        <div className="slideIndexBar">
          <div className="slideBtn" onClick={() => this.slidePrevious()}>
            {`<`}
          </div>
          <div>{this.state.slideIndex}</div>
          <div className="slideBtn" onClick={() => this.slideNext()}>
            {`>`}
          </div>
        </div>
        <section className="eventBannerContainer">
          <div className="mainEvent"></div>
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
