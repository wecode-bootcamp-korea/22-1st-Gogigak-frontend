import React from 'react';
import './Item.scss';

class Item extends React.Component {
  render() {
    return (
      <>
        <li className="item">
          <div className="imgContainer">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fthumbnails%2Ftransparent_background%2Fmanilaclam-water-detail.png?alt=media"
              alt="itemImg"
            />
            <div className="cartBackground">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
          <h6 className="itemTitlte">초신선 왕바지락</h6>
          <p className="priceInfo">기준가 6,500원/500g</p>
        </li>
      </>
    );
  }
}

export default Item;
