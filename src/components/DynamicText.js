import React, { Component, Fragment } from 'react';
import Typist from 'react-typist';

class DynamicText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: true
    };
  }

  done = () => {
    this.setState({ typing: false }, () => {
      this.setState({ typing: true });
    });
  };

  render() {
    const words = [
      'การตลาด',
      'ลงประกาศ',
      'โฆษณาออนไลน์',
      'ประเมินราคา',
      'จัดการสินเชื่อ'
    ];
    return (
      <Fragment>
        {this.state.typing ? (
          <Typist onTypingDone={this.done} className="inline">
            {words.map(word => (
              <span key={Math.random()}>
                <Typist.Delay ms={1500} />
                <span> {word}</span>
                <Typist.Backspace count={word.length} delay={1500} />
              </span>
            ))}
          </Typist>
        ) : (
          ''
        )}
      </Fragment>
    );
  }
}

export default DynamicText;
