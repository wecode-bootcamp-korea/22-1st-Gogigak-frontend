import React from 'react';
import DaumPostcode from 'react-daum-postcode';

import './Address.scss';

class Address extends React.Component {
  handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress);
  };
  postCodeStyle = {
    position: 'absolute',
    width: '720px',
    height: '400px',
    top: '450px',
    left: '450px',
    zIndex: '20',
    padding: '7px',
  };
  render() {
    return (
      <DaumPostcode
        onComplete={this.handleComplete}
        style={this.postCodeStyle}
      />
    );
  }
}

export default Address;
