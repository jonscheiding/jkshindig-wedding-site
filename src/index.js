import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import vhCheck from 'vh-check';
import { ThemeProvider } from 'styled-components';

import './index.css';
import theme from './theme.json';
import App from './App';

import { ContentClient } from './content-client';

if(process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

vhCheck('browser-address-bar');

const rootEl = document.getElementById('root');

const client = new ContentClient();
let content;

const render = (AppComponent) => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <AppComponent content={content} />
    </ThemeProvider>,
    rootEl
  );
};

client.fetchContent().then(c => {
  content = c;
  render(App);
});

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
