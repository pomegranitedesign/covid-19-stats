import {
  Card as MuiCard,
  CardProps as MuiCardProps,
  GridProps as MuiGridProps,
  Grid,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import Typography from './Typography';
import Value from './Value';
import { extractNumbers } from '../utils/extractDigits';

const useStyles = makeStyles(
  () => ({
    root: {
      padding: 20,
      minHeight: 400,
      width: 'auto',
    },
    title: {
      marginBottom: 20,
    },
  }),
  { name: 'Card' },
);

type TypographyAlignType = 'center' | 'left' | 'right' | 'inherit' | 'justify';

type CardProps = MuiGridProps &
  MuiCardProps & {
    title: string;
    titleAlign?: TypographyAlignType;
  };

function Card({
  title,
  children,
  titleAlign,
}: React.PropsWithChildren<CardProps>) {
  const classes = useStyles();
  const [textPart, digitsPart] = extractNumbers(title);

  return (
    <Grid lg={12} item>
      <MuiCard elevation={4} className={classes.root}>
        <Typography variant='h5' align={titleAlign} className={classes.title}>
          {digitsPart ? (
            <React.Fragment>
              {textPart} <Value value={digitsPart} />
            </React.Fragment>
          ) : (
            title
          )}
        </Typography>
        {children}
      </MuiCard>
    </Grid>
  );
}

export default Card;
