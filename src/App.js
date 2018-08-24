import React, { Component } from 'react';
import styled from 'styled-components';

import flourishImage from './assets/large-flourish.png';
import Splash from './components/Splash';
import NavigationMenu from './components/NavigationMenu';
import { SECTION_COMPONENTS } from './data/sections';

const LargeFlourish = styled.div`
  background-image: url(${flourishImage});
  height: 20vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

class App extends Component {
  render() {
    return (
      <div>
        <div id='splash'>
          <Splash />
        </div>
        <NavigationMenu />
        <LargeFlourish />
        {SECTION_COMPONENTS}
      </div>
    );
  }
}

export default App;