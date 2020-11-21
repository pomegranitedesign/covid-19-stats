import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { render } from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { theme } from './theme';
import './index.scss';

render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
