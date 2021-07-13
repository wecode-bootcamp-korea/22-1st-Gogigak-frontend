import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/Item/Item';
import './Main.scss';

export default class Main extends Component {
  state = {
    slideIndex: 0,
    mainSlideImage: [],
  };

  slideContainer = React.createRef();
  btn = React.createRef();

  componentDidMount() {
    fetch('http://10.58.7.59:8000/products/list?category=all', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result => this.setState({ mainSlideImage: result }));
  }

  slideNext = () => {
    this.setState({ slideIndex: this.state.slideIndex + 1 }, () => {
      this.slideContainer.current.style.transition = '  transform 2s';
      this.slideContainer.current.style.transform = `translateX(-${
        1184 * this.state.slideIndex
      }px)`;
    });
  };

  slidePrevious = () => {
    if (this.state.slideIndex > 0) {
      this.setState({ slideIndex: this.state.slideIndex - 1 }, () => {
        this.slideContainer.current.style.transition = ' transform 1s';
        this.slideContainer.current.style.transform = `translateX(-${
          1184 * this.state.slideIndex
        }px)`;
      });
    } else {
      return;
    }
  };

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
            <i className="fas fa-arrow-left"></i>
          </div>
          <div>{this.state.slideIndex}</div>
          <div className="slideBtn" onClick={() => this.slideNext()}>
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
        <section className="eventBannerContainer">
          <div className="mainEvent"></div>
        </section>
        <section className="bestItemContainer">
          <div className="bestItemList">정육각 베스트 상품</div>
          <ul className="bestItems">
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </ul>
        </section>
        <div
          className="shoppingBanner"
          onClick={() => {
            window.scrollTo(0, 0);
            this.props.history.push('./list');
          }}
        />
      </div>
    );
  }
}
