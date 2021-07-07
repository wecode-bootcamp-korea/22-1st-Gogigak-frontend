import React, { Component } from 'react';
import Category from './Category/Category';
import Item from '../../components/Item/Item';

import './ShoppingList.scss';

class ShoppingList extends Component {
  state = {
    items: [],
    name: [
      {
        id: 1,
        name: 'allmeat',
      },
      {
        id: 2,
        name: 'pig',
      },

      {
        id: 3,
        name: 'beef',
      },
      {
        id: 4,
        name: 'chicken',
      },
      {
        id: 5,
        name: 'susan',
      },
    ],
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/itemList.json', {
      headers: {
        method: 'GET',
      },
    })
      .then(res => res.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    return (
      <section className="shoppingList">
        <div className="categoryImg">
          {this.props.match.params.name ? (
            <img
              src={`/images/${this.props.match.params.name}.png`}
              alt="categoryImg"
            />
          ) : (
            <img src={`/images/allmeat.png`} alt="categoryImg" />
          )}
        </div>
        <Category name={this.state.name} />
        <form action="">
          <select className="itemFilter" name="filterItem">
            <option value="">필터링</option>
            <option value="학생">판매순</option>
            <option value="회사원">가격순</option>
            <option value="기타">리뷰순</option>
          </select>
        </form>
        <section className="itemContainer">
          <ul className="items">
            {this.state.items.map(item => {
              if (
                undefined === this.props.match.params.name ||
                'allmeat' === this.props.match.params.name
              ) {
                return (
                  <Item
                    key={item.title}
                    id={item.id}
                    img={item.img}
                    price={item.price}
                    title={item.title}
                  />
                );
              } else if (item.category === this.props.match.params.name) {
                return (
                  <Item
                    key={item.title}
                    id={item.id}
                    img={item.img}
                    price={item.price}
                    title={item.title}
                  />
                );
              }
            })}
          </ul>
        </section>
      </section>
    );
  }
}

export default ShoppingList;
