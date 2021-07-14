import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './UserInfoCategory.scss';

class UserInfoCategory extends Component {
  handleClick = () => {
    this.props.history.push(`/Mypage/${this.props.category}`);
  };

  render() {
    let { selectedCategory, handleCategoryClick } = this.props;
    let arr = this.props.categorys;
    arr[0] = true;

    return (
      <div onClick={this.handleClick}>
        <div
          className={` ${selectedCategory ? 'mypageCategory' : 'category'}`}
          onClick={() => handleCategoryClick()}
        >
          {this.props.title}
        </div>
      </div>
    );
  }
}
export default withRouter(UserInfoCategory);
