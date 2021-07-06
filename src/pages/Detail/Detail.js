import React, { Component } from 'react';

import './Detail.scss';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import DetailTop from './DetailTop';
import DetailTab from './DetailTab';
export class Detail extends Component {
  render() {
    return (
      <div className="detail-wrap">
        <Nav></Nav>
        <DetailTop></DetailTop>
        <DetailTab></DetailTab>
        {/*<DetailDescContationer></DetailDescContationer> */}
        <Footer></Footer>
      </div>
    );
  }
}

export default Detail;
