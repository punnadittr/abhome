import React, { Component } from 'react';
import DynamicText from './DynamicText';

class MainText extends Component {
  render() {
    const { windowWidth } = this.props;
    if (windowWidth < 768) {
      return (
        <div className="main-text">
          ฝากขายวันนี้ <br />
          ฟรี
          <DynamicText />
        </div>
      );
    } else {
      return (
        <div className="main-text">
          ฝากขายวันนี้ ฟรี
          <DynamicText />
        </div>
      );
    }
  }
}

export default MainText;
