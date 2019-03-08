import './polyfills';
import './index.css';
import './prop-types-ex';

import React from 'react';
import ReactGA from 'react-ga';
import { render, hydrate } from 'react-dom';
import vhCheck from 'vh-check';

import { ContentClient } from './content-client';
import AppThemed from './AppThemed';

if(process.env.REACT_APP_GA_TRACKING_ID) {
  ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

vhCheck('browser-address-bar');

const contentClient = new ContentClient();
const rootEl = document.getElementById('root');

const renderApp = (AppComponent) => {
  contentClient.fetchContent().then(c => {
    if(rootEl.hasChildNodes()) {
      hydrate(<AppComponent content={c} />, rootEl);
    } else {
      render(<AppComponent content={c} />, rootEl);
    }
  });
};

renderApp(AppThemed);

if (module.hot) {
  module.hot.accept('./AppThemed', () => {
    const NextAppThemed = require('./AppThemed').default;
    renderApp(NextAppThemed);
  });
}
