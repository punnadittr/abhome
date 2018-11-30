import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  transparent: {
    opacity: 0
  },
  whiteText: {
    color: '#fff',
    fontSize: '1.2rem'
  }
};

function Navbar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#00314E' }}>
        <Toolbar>
          <img src="ablogo.png" alt="ablogo" width="100px" />
          <div className={classes.grow} />
          <Button variant="outlined" color="secondary">
            <Typography className={classes.whiteText}> ลงประกาศฟรี</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Navbar);
