import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme.json';
import App from './App';

const AppWrapper = (props) => (
  <ThemeProvider theme={theme}>
    <App {...props} />
  </ThemeProvider>
);

export default AppWrapper;