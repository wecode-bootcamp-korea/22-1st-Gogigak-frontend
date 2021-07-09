import React, { Component } from 'react';
import Category from './Category/Category';
import Item from '../../components/Item/Item';

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
  };

  componentDidMount() {
    fetch(
      `http://10.58.7.59:8000/list?category=${this.props.match.params.name}`,
      {
        method: 'GET',
      }
    )
      .then(res => res.json())
      .then(data => this.setState({ items: data.results }));
  }

  render() {
    const { params } = this.props.match;
    const { items } = this.state;

    return (
      <section className="shoppingList">
        <div className="categoryImg">
          <img
            src={params.name ? items[0]['category_image'] : `/images/all.png`}
            alt="categoryImg"
          />
        </div>
        <Category name={CATEGORY_LIST} />
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
            {items.map(item => {
              const allowedPath = [undefined, 'all', item.category];
              if (allowedPath.includes(params.name)) {
                return (
                  <Item
                    key={item.name}
                    id={item.id}
                    img={item.thumbnail}
                    price={item.price}
                    title={item.name}
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
