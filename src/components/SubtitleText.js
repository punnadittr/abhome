import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  textWhite: {
    color: '#fff'
  }
});

const SubtitleText = props => {
  const { classes } = props;
  return (
    <div>
      <Typography gutterBottom variant="h5" className={classes.textWhite}>
        <div>จ่ายเบาๆเพียง 3% จากราคาซื้อขายจริง</div>
      </Typography>
    </div>
  );
};

export default withStyles(styles)(SubtitleText);
