import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Typography from './Typography';

const useStyles = makeStyles(
  () => ({
    root: {
      padding: 20,
      minHeight: 300,
    },
  }),
  { name: 'Card' },
);

type CardProps = MuiCardProps & {
  title: string;
};

function Card({ title, children }: React.PropsWithChildren<CardProps>) {
  const classes = useStyles();
  return (
    <MuiCard elevation={2} className={classes.root}>
      <Typography variant='body1'>{title}</Typography>
      {children}
    </MuiCard>
  );
}

export default Card;
