import { createMuiTheme, darken, lighten } from '@material-ui/core';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#0be881',
      dark: darken('#0be881', 0.24),
      light: lighten('#0be881', 0.24),
    },
  },

  typography: {
    h5: {
      fontWeight: 'bold',
    },
  },
});
