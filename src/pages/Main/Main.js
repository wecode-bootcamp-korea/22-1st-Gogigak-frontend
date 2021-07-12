import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Item from '../../components/Item/Item';
import { API } from '../../config';
import SlideImg from './SlideImg';

import './Main.scss';
export default class Main extends Component {
  state = {
    slideIndex: 0,
    mainSlideImage: [],
  };

  slideContainer = React.createRef();
  btn = React.createRef();

  componentDidMount() {
    fetch(API.SLIDE, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(result =>
        this.setState(
          { mainSlideImage: result },
          console.log(this.state, '컴디마')
        )
      );
  }

  slideNext = () => {
    if (this.state.slideIndex < 4) {
      this.setState({ slideIndex: this.state.slideIndex + 1 }, () => {
        this.slideContainer.current.style.transition = '  transform 2s';
        this.slideContainer.current.style.transform = `translateX(-${
          1184 * this.state.slideIndex
        }px)`;
      });
    }
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
    this.state.mainSlideImage.results &&
      console.log(this.state.mainSlideImage.results, '렌더');
    return (
      <div className="mainPage">
        <div className="slideOverFlow">
          <div className="slideContentContainer" ref={this.slideContainer}>
            {this.state.mainSlideImage.results &&
              this.state.mainSlideImage.results.map(img => (
                <SlideImg image={img.image} />
              ))}
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
