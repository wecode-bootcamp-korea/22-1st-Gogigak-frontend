import React from 'react';
import { withRouter } from 'react-router';

import './Category.scss';

class Category extends React.Component {
  handleClick = () => {
    this.props.history.push(`/List/${this.props.title}`);
  };

  render() {
    const { title, name, selectedIdx, isSelected, handleCategoryClick } =
      this.props;

    return (
      <li className={title} key={title} onClick={() => this.handleClick()}>
        <p
          className={`${isSelected ? 'category-activated' : 'category'}`}
          onClick={() => handleCategoryClick(selectedIdx)}
        >
          {name}
        </p>
      </li>
    );
  }
}

export default withRouter(Category);
