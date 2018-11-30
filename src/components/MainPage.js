import React, { Fragment } from 'react';
import TextBox from './TextBox';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  bgMain: {
    background: '#00314E'
  }
};

const Mainpage = props => {
  const { classes, windowWidth } = props;
  return (
    <Fragment>
      <Grid
        container
        alignContent="center"
        alignItems="center"
        className={classes.bgMain}
      >
        <Grid item xs>
          <TextBox windowWidth={windowWidth} />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default withStyles(styles)(Mainpage);
