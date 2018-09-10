import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import './index.css';
import App from './App';

if(process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const rootEl = document.getElementById('root');

ReactDOM.render(
  <App />,
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