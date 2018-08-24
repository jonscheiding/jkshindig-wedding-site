import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';

import image from '../assets/splash-image.jpg';

export default class Splash extends Component {
  render() {
    const BackgroundImage = styled.div`
      background-image: url(${image});
      background-size: cover;
      background-position: center;
    
      height: 100vh;
      width: 100vw;
    
      filter: blur(3px);
      transform: scale(1.05);
    `;

    const Overlay = styled.div`
      height: 100%;
      width: 100%;

      position: absolute;
      top: 0;
    `;

    const SplashOverlay = styled(Overlay)`
      background: linear-gradient(
        rgba(33, 48, 61, 1),
        rgba(33, 48, 61, 0.25) 25%,
        rgba(0, 0, 0, 0) 50%
      );
    `;

    const Bottom = styled.div`
      position: absolute;
      bottom: 1vh;
      width: 100%;
    `;

    return (
      <Parallax strength={350}>
        <Background>
          <BackgroundImage />
          <SplashOverlay />
        </Background>
        <div style={{height: '100vh', minHeight: '320px'}}>
          <div style={{zIndex: '1'}}>
            <h1>Kaleigh <span className='script break-md'>and</span> Jonathan</h1>
            <h2>March 29, 2019</h2>
            <h2 className='script'>save the date</h2>
            <Bottom>
              <h2>Newport Syndicate</h2>
              <h3 className='script'>
                <div>18 East 5th Street</div>
                <div>Newport, Kentucky 41073</div>
              </h3>
            </Bottom>
          </div>
        </div>
      </Parallax>
    );
  }
}