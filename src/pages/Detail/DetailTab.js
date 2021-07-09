import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Detail.scss';

export class DetailTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabOn: false,
    };
  }
  render() {
    return (
      <div className="detail-tab">
        <ul>
          <li>
            <Link to="#!" className="active">
              상품설명
            </Link>
          </li>
          <li>
            <Link to="#!">상품리뷰</Link>
          </li>
          {/* <li>
            <Link to="#!">상품정보안내</Link>
          </li> */}
        </ul>
      </div>
    );
  }
}

export default DetailTab;
