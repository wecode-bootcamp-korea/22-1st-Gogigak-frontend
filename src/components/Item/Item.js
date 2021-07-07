import React from 'react';
import './Item.scss';

class Item extends React.Component {
  render() {
    return (
      <li className="item">
        <div className="imgContainer">
          <img src={this.props.img} alt="itemImg" />
          <div className="cartBackground">
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
        <h6 className="itemTitlte">{this.props.title}</h6>
        <p className="priceInfo">{this.props.price}</p>
      </li>
    );
  }
}

export default Item;
