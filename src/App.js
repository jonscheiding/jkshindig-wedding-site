import React, { Component } from 'react';
import styled from 'styled-components';

import flourishImage from './assets/large-flourish.png';
import Splash from './components/Splash';
import NavigationMenu from './components/NavigationMenu';
import sections from './data/sections';
import content from './data/content';

class App extends Component {
  render() {
    return (
      <div>
        <div id='splash'>
          <Splash />
        </div>
        <NavigationMenu />
        <div className='flourish' />
        {sections.map(s => s.component)}
      </div>
    );
  }

  componentDidMount() {
    const names = content.spouses.map(s => s.name.first);
    document.title = `${names[0]} and ${names[1]}`;
  }
}

export default App;