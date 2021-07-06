import React, { Component } from 'react';

import DetailDateDisplay from './DetailDateDisplay';

export class DetailDescContationer extends Component {
  render() {
    return (
      <section className="detail-desc-wrap">
        <article>
          <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fdescriptions%2Fweb%2Fporkbelly-fresh1.png?alt=media"></img>
        </article>
        <DetailDateDisplay></DetailDateDisplay>
        <article>
          <img src="https://firebasestorage.googleapis.com/v0/b/jyg-custom-seoul-app/o/frontend%2Fdescriptions%2Fweb%2Fporkbelly-fresh2.png?alt=media" />
        </article>
      </section>
    );
  }
}

export default DetailDescContationer;
