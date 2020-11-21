import React from 'react';
import AppBar from '@material-ui/core/AppBar/AppBar';
import { makeStyles } from '@material-ui/core';
import Typography from './Typography';

const useStyles = makeStyles(
  (theme) => ({
    root: {
      marginBottom: 20,
      padding: 20,
      backgroundColor: theme.palette.primary.main,
    },
  }),
  { name: 'Header' },
);

function Header() {
  const classes = useStyles();
  return (
    <AppBar elevation={0} position='sticky' className={classes.root}>
      <Typography variant='h5' align='center'>
        COVID-19 Statistics
      </Typography>
    </AppBar>
  );
}

export default Header;
