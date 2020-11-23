import { makeStyles } from '@material-ui/core';
import React from 'react';
import Typography from './Typography';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bottom: 0,
      marginTop: 50,
      height: 80,
      width: '100% !important',
      background: theme.palette.secondary.main,
      color: theme.palette.secondary.dark,
    },
  }),
  { name: 'Footer' },
);

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.root}>
      <Typography variant='body2'>Copyright@2020</Typography>
    </footer>
  );
}

export default Footer;
