import React, { Component } from 'react';

export default class CartList extends Component {
  render() {
    // console.log(this.props.thumbnail, '디스프랍스섬네일');
    return (
      <div>
        <ul>
          <li className="itemList">
            <img src={this.props.thumbnail} alt="itemIm" />
            <div className="infoContainer">
              <p className="productName">{this.props.name}</p>
              <p className="selectOption">{this.props.option}</p>
            </div>
            <p className="cartWeight">{Math.floor(this.props.grams)}g 기준</p>
            <div className="counterContainer">
              <div>
                <i
                  className="fas fa-minus"
                  onClick={() =>
                    this.props.quantityMinus(
                      this.props.cartItemId,
                      this.props.cartIndex
                    )
                  }
                ></i>
              </div>
              <p>{this.props.quantity}</p>
              <div>
                <i
                  className="fas fa-plus"
                  onClick={() =>
                    this.props.quantityPlus(
                      this.props.cartItemId,
                      this.props.cartIndex
                    )
                  }
                ></i>
              </div>
            </div>
            <div className="itemPrice">
              <p>{Math.floor(this.props.price).toLocaleString()}</p>
            </div>
            <button
              className="deleteBtn"
              onClick={() => this.props.deleteCartItem(this.props.cartItemId)}
            >
              x
            </button>
          </li>
        </ul>
      </div>
    );
  }
}
