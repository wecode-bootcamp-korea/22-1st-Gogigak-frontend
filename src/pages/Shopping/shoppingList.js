import React, { Component } from 'react';
import Item from './Item/Item';

import './shoppingList.scss';

export class shoppingList extends Component {
  render() {
    return (
      <>
        <section className="shoppingList">
          <div className="categoryImg">
            <img
              src="https://lh3.googleusercontent.com/proxy/XnO8ZKm0Rh7o8xnbW6jA-CC0BPGasCGJl_5Gpesc5Wa3AIjDAjmgeOj5g6I0fbHIHIedNJLIobN1XAAtRY2oQQKiclqLZuVtkFJuWzBun9OfhV3LhvViloBwA9oLJe-xSumO9NAisFYhXkr_5j5PIgGuTgauEYWOZ903cNOyjym8qXIsvJp5wLwlbITSV1WVUdW9pg"
              alt="categoryImg"
            />
          </div>
          <section className="categorys">
            <ul className="categoryContainer">
              <li className="category all">
                <p>전체</p>
              </li>
              <li className="category pig">
                <p>돼지</p>
              </li>
              <li className="category cow">
                <p>소</p>
              </li>
              <li className="category chicken">
                <p>닭</p>
              </li>
              <li className="category seafood">
                <p>수산</p>
              </li>
            </ul>
          </section>
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
              <Item />
              <Item />
              <Item />
              <Item />
              <Item />
            </ul>
          </section>
        </section>
      </>
    );
  }
}

export default shoppingList;
