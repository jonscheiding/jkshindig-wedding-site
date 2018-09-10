import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';

import './index.css';
import content from './content/content.json';
import theme from './theme.json';
import App from './App';

if(process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

content.date = new Date(Date.parse(content.date));

const rootEl = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App content={content} />
  </ThemeProvider>,
  rootEl
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <NextApp />,
      rootEl
    );
  });
}