import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';

import './index.css';
// import content from './content/content.json';
import theme from './theme.json';
import App from './App';

import loadContent from './content/load-content';

if(process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const rootEl = document.getElementById('root');

const render = (AppComponent) => {
  loadContent().then(content => 
    ReactDOM.render(
      <ThemeProvider theme={theme}>
        <AppComponent content={content} />
      </ThemeProvider>,
      rootEl
    )
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(NextApp);
  });
}
