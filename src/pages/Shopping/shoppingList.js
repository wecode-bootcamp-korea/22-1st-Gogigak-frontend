import React, { Component } from 'react';
import Category from './Category/Category';
import Item from '../../components/Item/Item';
import { API } from '../../config';

import './ShoppingList.scss';

const CATEGORY_LIST = [
  {
    id: 1,
    title: 'all',
    name: '전체',
  },
  {
    id: 2,
    title: 'pork',
    name: '돼지',
  },

  {
    id: 3,
    title: 'beef',
    name: '소',
  },
  {
    id: 4,
    title: 'chicken',
    name: '닭',
  },
  {
    id: 5,
    title: 'seafood',
    name: '수산',
  },
];

class ShoppingList extends Component {
  state = {
    items: [],
    isClicked: false,
  };

  fetchData = apiAddress => {
    fetch(apiAddress)
      .then(res => res.json())
      .then(data => this.setState({ items: data.results }));
  };
  componentDidMount() {
    this.fetchData(
      `${API.LIST}?category=${this.props.match.params.name || 'all'}`
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.fetchData(
        `${API.LIST}?category=${this.props.match.params.name || 'all'}`
      );
    }
  }

  render() {
    const { items } = this.state;

    return (
      <section className="shoppingList">
        <div className="categoryImg">
          {items[0] && (
            <img src={`${items[0].category_image}`} alt="categoryImg" />
          )}
        </div>
        <Category categoryList={CATEGORY_LIST} />
        <form action="">
          <select className="itemFilter" name="filterItem">
            <option value="">필터링</option>
            <option value="sell">판매순</option>
            <option value="price">가격순</option>
            <option value="review">리뷰순</option>
          </select>
        </form>
        <section className="itemContainer">
          <ul className="items">
            {items[1] &&
              items[1].map((item, idx) => {
                return (
                  <Item
                    key={idx}
                    id={item.id}
                    img={item.thumbnail}
                    price={item.price}
                    gram={item.grams}
                    title={item.name}
                  />
                );
              })}
          </ul>
        </section>
      </section>
    );
  }
}

export default ShoppingList;
