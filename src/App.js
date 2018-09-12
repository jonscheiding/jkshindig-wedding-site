import React, { Component } from 'react';

/* eslint import/no-webpack-loader-syntax: off */
const content = require('json-loader!remote-loader!env-loader?CONTENT_JSON_URL!');
content.date = new Date(Date.parse(content.date));

class App extends Component {
  render() {
    return (
      <div />
    );
  }
}

export default App;