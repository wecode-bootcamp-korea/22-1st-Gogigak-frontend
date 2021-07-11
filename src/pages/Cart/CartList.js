import React, { Component } from 'react';

export default class CartList extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul>
          <li className="itemList">
            <img src={this.props.cartData.thumbnail} alt="itemIm" />
            <div className="infoContainer">
              <p className="productName">초신선 무항생제 돼지 삼겹살 구이용</p>
              <p className="selectOption">보통(16mm)</p>
            </div>
            <p className="cartWeight">600g 기주운</p>
            <div className="counterContainer">
              <div>
                <i class="fas fa-minus"></i>
              </div>
              <p>1</p>
              <div>
                <i class="fas fa-plus"></i>
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
