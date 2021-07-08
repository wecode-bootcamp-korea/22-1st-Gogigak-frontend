import React, { Component } from 'react';

import './Detail.scss';

import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import DetailTop from './DetailTop';
import DetailTab from './DetailTab';
import DetailDescContationer from './DetailDescContationer';

export class Detail extends Component {
  render() {
    return (
      <div className="detail-wrap">
        <Nav />
        <DetailTop />
        <DetailTab />
        <DetailDescContationer />
        <Footer />
      </div>
    );
  }
}

export default Detail;
