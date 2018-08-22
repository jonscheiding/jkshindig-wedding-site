import React, { Component } from 'react';

import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url('/splash-image.jpg');
  background-size: cover;
  background-position: center;

  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  z-index: -2;

  filter: blur(3px);
`;

const BackgroundOverlay = styled.div`
  height: 100vh;
  width: 100vw;

  position: absolute;
  top: 0;
  z-index: -1;

  background: linear-gradient(
    rgba(33, 48, 61, 1),
    rgba(33, 48, 61, 0.5) 20%,
    rgba(0, 0, 0, 0) 40%
  );
  /* /background-color: rgba(33, 48, 61, 0.5); */
`

const Header1 = styled.h1`
  text-align: center;
  text-transform: uppercase;

  font-size: 7vh;
  padding: 2vh;
  margin: 0;
`;

const Header2 = styled.h2`
  text-align: center;
  text-transform: uppercase;

  font-size: 5vh;
  padding: 2vh;
  margin: 0;
`

const Script = styled.span`
  text-transform: none;
  font-family: 'Allura', 'Zeyada', 'La Belle Aurore', cursive;
`;

class App extends Component {
  render() {
    return (
      <div>
        <BackgroundImage />
        <BackgroundOverlay />
        <Header1>
          Kaleigh <Script>and</Script> Jonathan
        </Header1>
        <Header2>
          March 29, 2019
        </Header2>
        <Header2 style={{position: 'absolute', bottom: '1vh', width: '100%', boxSizing: 'border-box'}}>
          Newport Syndicate
          <Script style={{display: 'block', fontSize: '3vh'}}>
            <div>18 East 5th Street</div>
            <div>Newport, Kentucky 41073</div>
          </Script>
        </Header2>
      </div>
    );
  }
}

export default App;