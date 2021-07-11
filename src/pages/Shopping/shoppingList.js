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
    orderingValue: 'all',
    selectedCategory: Array(CATEGORY_LIST.length).fill(false),
  };

  fetchData = apiAddress => {
    fetch(apiAddress)
      .then(res => res.json())
      .then(data => this.setState({ items: data.results }));
  };
  componentDidMount() {
    this.fetchData(
      `http://${API.LIST}?category=${
        this.props.match.params.name || 'all'
      }&sort=${this.state.orderingValue}`
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.name !== prevProps.match.params.name) {
      this.fetchData(
        `http://${API.LIST}?category=${this.props.match.params.name}&sort=${this.state.orderingValue}`
      );
    }
    if (this.state.orderingValue !== prevState.orderingValue) {
      this.fetchData(
        `http://${API.LIST}?category=${this.props.match.params.name}&sort=${this.state.orderingValue}`
      );
    }
  }

  handleChange = event => {
    this.setState({ orderingValue: event.target.value });
  };

  handleCategoryClick = idx => {
    const newArr = Array(CATEGORY_LIST.length).fill(false);
    newArr[idx] = true;
    this.setState({ selectedCategory: newArr });
  };

  render() {
    const { items, selectedCategory } = this.state;

    return (
      <section className="shoppingList">
        <div className="categoryImg">
          {items[0] && (
            <img src={`${items[0].category_image}`} alt="categoryImg" />
          )}
        </div>
        <section className="categorys">
          <ul className="categoryContainer">
            {CATEGORY_LIST.map((category, idx) => {
              return (
                <Category
                  categoryIdx={idx}
                  key={category.id}
                  id={category.id}
                  title={category.title}
                  name={category.name}
                  isSelected={selectedCategory[idx]}
                  handleCategoryClick={() => this.handleCategoryClick(idx)}
                />
              );
            })}
          </ul>
        </section>

        <form action="">
          <select
            className="itemFilter"
            name="filterItem"
            onChange={this.handleChange}
          >
            <option value="all">최신순</option>
            <option value="sales">판매량 기준</option>
            <option value="price-desc">높은 가격순 </option>
            <option value="price-asc">낮은 가격순 </option>
            <option value="reviews">리뷰순</option>
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
                    options={item.options}
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
