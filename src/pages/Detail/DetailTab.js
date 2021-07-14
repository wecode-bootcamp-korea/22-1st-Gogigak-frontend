import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Detail.scss';

export class DetailTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOn: true,
    };
  }
  render() {
    return (
      <div className="detail-tab">
        <ul>
          <li>
            <Link
              to="#!"
              className={this.state.tabOn ? 'active' : null}
              onClick={this.onClickToggleHandler}
            >
              상품설명
            </Link>
          </li>
          <li>
            <Link
              to="#!"
              className={!this.state.tabOn ? 'active' : null}
              onClick={this.onClickToggleHandler}
            >
              상품리뷰
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default DetailTab;
