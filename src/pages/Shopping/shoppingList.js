import React, { Component } from 'react';
import Category from './Category/Category';
import Item from '../../components/Item/Item';

import './ShoppingList.scss';

const CATEGORY_LIST = [
  {
    id: 1,
    title: 'allmeat',
    name: '전체',
  },
  {
    id: 2,
    title: 'pig',
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
    title: 'susan',
    name: '수산',
  },
];

class ShoppingList extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    fetch('/data/itemList.json', {
      headers: {
        method: 'GET',
      },
    })
      .then(res => res.json())
      .then(data => this.setState({ items: data }));
  }

  render() {
    const { params } = this.props.match;
    const { items } = this.state;
    return (
      <section className="shoppingList">
        <div className="categoryImg">
          <img
            src={
              params.name ? `/images/${params.name}.png` : `/images/allmeat.png`
            }
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
              const allowedPath = [undefined, 'allmeat', item.category];
              if (allowedPath.includes(params.name)) {
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
