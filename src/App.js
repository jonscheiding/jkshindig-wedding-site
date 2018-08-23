import React, { Component } from 'react';

import Splash from './components/Splash';
import NavigationMenu from './components/NavigationMenu';

class App extends Component {
  render() {
    return (
      <div>
        <Splash />
        <NavigationMenu />
        <div style={{height: '1000vh'}}>
          {/* Placeholder to test out parallax effects */}
        </div>
      </div>
    );
  }
}

export default App;