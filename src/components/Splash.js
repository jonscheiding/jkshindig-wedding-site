import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import image from '../assets/splash-image.jpg';
import content from '../data/content';

export default class Splash extends Component {
  render() {
    const BackgroundImage = styled.div`
      background-image: url(${image});
      background-size: cover;
      background-position: center;
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

    const names = content.names.map(n => n.first);
    const date = dateFormat(content.date, 'mmmm d, yyyy');
    const { address, city, state, zip } = content.location;
    const location = content.location.name;

    return (
      <Parallax strength={350}>
        <Background>
          <BackgroundImage className='splash-image' />
          <SplashOverlay />
        </Background>
        <div className='splash-contents'>
          <h1>{names[0]} <span className='script break-md'>and</span> {names[1]}</h1>
          <h2>{date}</h2>
          <h2 className='script'>save the date</h2>
          <Bottom>
            <h2>{location}</h2>
            <h3 className='script'>
              <div>{address}</div>
              <div>{city}, {state} {zip}</div>
            </h3>
          </Bottom>
        </div>
      </Parallax>
    );
  }
}