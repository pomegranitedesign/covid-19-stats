import { Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import Card from './Card';

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: 'Cards' },
);

function Cards() {
  const classes = useStyles();
  return (
    <Container>
      <Grid container spacing={6} className={classes.root}>
        <Grid md={3} item>
          <Card title={'Card'} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Cards;
