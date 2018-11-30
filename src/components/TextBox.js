import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import MainText from './MainText';
import SubtitleText from './SubtitleText';
import Button from '@material-ui/core/Button';
import FooterGraphic from './FooterGraphic';

const styles = () => ({
  textWhite: {
    color: '#fff'
  },
  actionBtn: {
    color: '#000',
    fontSize: '1.5rem',
    padding: '6px 16px',
    marginTop: '3rem'
  }
});

class TextBox extends Component {
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
    const { classes, windowWidth } = this.props;
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Typography
          gutterBottom
          className={classes.textWhite}
          variant="h2"
          color="textSecondary"
          align="center"
        >
          <MainText windowWidth={windowWidth} />
        </Typography>
        <br />
        <SubtitleText />
        <Button
          size="large"
          variant="contained"
          color="secondary"
          className={classes.actionBtn}
        >
          ฝากขายอสังหาฯ
        </Button>
        <FooterGraphic />
      </div>
    );
  }
}

export default withStyles(styles)(TextBox);
