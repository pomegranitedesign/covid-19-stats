import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Typography from './Typography';

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: 'Footer' },
);

function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item>
        <Typography variant='body2' align='center'>
          Hello World
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
