import React from 'react';
import CartModal from '../Modal/CartModal';
import './Item.scss';

class Item extends React.Component {
  state = {
    isModal: false,
  };

  handleClick = () => {
    this.setState({ isModal: !this.state.isModal });
  };

  render() {
    const { title, img, gram, price, options, id } = this.props;
    const { isModal } = this.state;

    return (
      <li className="item">
        <div className="imgContainer">
          <img src={img} alt="itemImg" />
          <div className="cartBackground" onClick={this.handleClick}>
            {isModal && (
              <CartModal
                price={price}
                title={title}
                options={options}
                productId={id}
              />
            )}
            <i className="fas fa-shopping-cart"></i>
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
