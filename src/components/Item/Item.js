import React from 'react';
import './Item.scss';

class Item extends React.Component {
  render() {
    const { title, img, gram, price } = this.props;
    return (
      <li className="item">
        <div className="imgContainer">
          <img src={img} alt="itemImg" />
          <div className="cartBackground">
            <i class="fas fa-shopping-cart"></i>
          </div>
        </div>
        <h6 className="itemTitlte">{title}</h6>
        <p className="priceInfo">
          기준가 {price}원/{gram}g
        </p>
      </li>
    );
  }
}

export default Item;
