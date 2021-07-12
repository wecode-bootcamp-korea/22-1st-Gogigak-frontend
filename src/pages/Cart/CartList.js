import React, { Component } from 'react';

export default class CartList extends Component {
  render() {
    // console.log(this.props.thumbnail, '디스프랍스섬네일');
    // console.log(this.props, '디스프랍스통째로');
    return (
      <div>
        <ul>
          <li className="itemList">
            <img src="asd" alt="itemIm" />
            <div className="infoContainer">
              <p className="productName">초신선 무항생제 돼지 삼겹살 구이용</p>
              <p className="selectOption">보통(16mm)</p>
            </div>
            <p className="cartWeight">600g 기주운</p>
            <div className="counterContainer">
              <div>
                <i className="fas fa-minus"></i>
              </div>
              <p>1</p>
              <div>
                <i className="fas fa-plus"></i>
              </div>
            </div>
            <div className="itemPrice">
              <p>19,800원</p>
            </div>
            <button className="deleteBtn">x</button>
          </li>
        </ul>
      </div>
    );
  }
}
