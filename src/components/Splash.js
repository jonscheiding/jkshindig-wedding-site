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
    `;

    const names = content.names.map(n => n.first);
    const date = dateFormat(content.date, 'mmmm d, yyyy');
    const { address, city, state, zip } = content.location;
    const location = content.location.name;

    return (
      <Parallax strength={350}>
        <Background>
          <BackgroundImage className='splash-image' />
          <div className='splash-overlay' />
        </Background>
        <div className='splash-content'>
          <h1>{names[0]} <span className='secondary-text block-md'>and</span> {names[1]}</h1>
          <h2>{date}</h2>
          <h2 className='secondary-text'>save the date</h2>
          <div className='bottom'>
            <h2>{location}</h2>
            <h3 className='secondary-text'>
              <div>{address}</div>
              <div>{city}, {state} {zip}</div>
            </h3>
          </div>
        </div>
      </Parallax>
    );
  }
}