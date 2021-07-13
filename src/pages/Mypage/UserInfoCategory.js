import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './UserInfoCategory.scss';

class UserInfoCategory extends Component {
  handleClick = () => {
    this.props.history.push(`/Mypage/${this.props.category}`);
  };

  render() {
    return (
      <div>
        <div className="mypageCategory" onClick={this.handleClick}>
          {this.props.title}
        </div>
      </div>
    );
  }
}
export default withRouter(UserInfoCategory);
