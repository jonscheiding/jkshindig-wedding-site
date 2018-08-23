import React, { Component } from 'react';
import styled from 'styled-components';

import Splash from './components/Splash';


class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <div style={{height: '1000vh'}}>
          {/* Placeholder to test out parallax effects */}
        </div>
      </div>
    );
  }
}

export default App;