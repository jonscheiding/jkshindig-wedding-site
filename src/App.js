import React, { Component } from 'react';

import Splash from './components/Splash';
import NavigationMenu from './components/NavigationMenu';

import flourishImage from './assets/large-flourish.png';
import styled from 'styled-components';

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
        <section id='people' style={{height: '70vh'}}>PEOPLE</section>
        <section id='event' style={{height: '70vh'}}>EVENT</section>
        <section id='gifts' style={{height: '70vh'}}>GIFTS</section>
        <section id='rsvp' style={{height: '70vh'}}>RSVP</section>
      </div>
    );
  }
}

export default App;