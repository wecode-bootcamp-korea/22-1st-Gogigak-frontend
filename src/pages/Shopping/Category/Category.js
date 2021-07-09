import React from 'react';
import { withRouter } from 'react-router';

import './Category.scss';

class Category extends React.Component {
  render() {
    const { categoryList, history } = this.props;

    return (
      <section className="categorys">
        {categoryList.map(category => {
          return (
            <ul className="categoryContainer">
              <li
                className={category.title}
                key={category.title}
                onClick={() => history.push(`/List/${category.title}`)}
              >
                <p>{category.name}</p>
              </li>
            </ul>
          );
        })}
      </section>
    );
  }
}

export default withRouter(Category);
