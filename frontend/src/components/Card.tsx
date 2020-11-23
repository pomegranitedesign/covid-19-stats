import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Typography from './Typography';

const useStyles = makeStyles(
  () => ({
    root: {
      padding: 20,
      minHeight: 300,
      width: 'auto',
    },
    title: {
      marginBottom: 20,
    },
  }),
  { name: 'Card' },
);

type TypographyAlignType = 'center' | 'left' | 'right' | 'inherit' | 'justify';

type CardProps = MuiCardProps & {
  title: string;
  titleAlign?: TypographyAlignType;
};

function Card({
  title,
  children,
  titleAlign,
}: React.PropsWithChildren<CardProps>) {
  const classes = useStyles();
  return (
    <Grid item>
      <MuiCard elevation={4} className={classes.root}>
        <Typography variant='h5' align={titleAlign} className={classes.title}>
          {title}
        </Typography>
        {children}
      </MuiCard>
    </Grid>
  );
}

export default Card;
