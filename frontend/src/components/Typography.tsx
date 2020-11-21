import {
  Typography as MuiTypography,
  TypographyProps,
} from '@material-ui/core';
import React from 'react';

function Typography({
  children,
  ...props
}: React.PropsWithChildren<TypographyProps>) {
  return <MuiTypography {...props}>{children}</MuiTypography>;
}

export default Typography;
