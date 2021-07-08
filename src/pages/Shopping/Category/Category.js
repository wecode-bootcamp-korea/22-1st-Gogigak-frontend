import React from 'react';
import { withRouter } from 'react-router';

import './Category.scss';

class Category extends React.Component {
  render() {
    const { name, history } = this.props;

    return (
      <section className="categorys">
        {name.map(e => {
          return (
            <ul className="categoryContainer">
              <li
                className={e.title}
                key={e.title}
                onClick={() => history.push(`/List/${e.title}`)}
              >
                <p>{e.name}</p>
              </li>
            </ul>
          );
        })}
      </section>
    );
  }
}

export default withRouter(Category);
