import React from 'react';
import { withRouter } from 'react-router';

import './Category.scss';

class Category extends React.Component {
  render() {
    const { name, itemList } = this.props;

    return (
      <section className="categorys">
        <ul className="categoryContainer">
          <li
            className="category all"
            onClick={() => this.props.history.push(`/List/${name[0].name}`)}
          >
            <p>전체</p>
          </li>
          <li
            className="category pig"
            onClick={() => this.props.history.push(`/List/${name[1].name}`)}
          >
            <p>돼지</p>
          </li>
          <li
            className="category cow"
            onClick={() => this.props.history.push(`/List/${name[2].name}`)}
          >
            <p>소</p>
          </li>
          <li
            className="category chicken"
            onClick={() => this.props.history.push(`/List/${name[3].name}`)}
          >
            <p>닭</p>
          </li>
          <li
            className="category seafood"
            onClick={() => this.props.history.push(`/List/${name[4].name}`)}
          >
            <p>수산</p>
          </li>
        </ul>
      </section>
    );
  }
}

export default withRouter(Category);
