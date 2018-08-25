import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import dateFormat from 'dateformat';
import cx from 'classnames';

import BackgroundImage from './BackgroundImage';
import image from '../assets/splash-image.jpg';
import content from '../data/content';
import sections from '../data/sections';

export default class Splash extends Component {
  render() {
    const names = content.spouses.map(n => n.name.first);
    const date = dateFormat(content.date, 'mmmm d, yyyy');
    const { address, city, state, zip } = content.location;
    const location = content.location.name;

    const { showNavigation } = sections;

    return (
      <Parallax strength={300} className={cx('splash', { 'show-navigation': showNavigation })}>
        <Background>
          <BackgroundImage image={image} className='splash-image' />
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