import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import GlobalData from './GlobalData';
import CountryData from './CountryData';

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: 'Cards' },
);

function Data() {
  const classes = useStyles();

  return (
    <Container>
      <Grid container spacing={6} className={classes.root}>
        <GlobalData />
        <CountryData />
      </Grid>
    </Container>
  );
}

export default Data;
