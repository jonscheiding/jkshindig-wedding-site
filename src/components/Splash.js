import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import BackgroundImage from './BackgroundImage';
import { Breakpoint } from '../styles/responsive';
import image from '../assets/splash-image.jpg';

class Splash extends Component {
  render() {
    const { date, names, location } = this.props;
    const { street, city, state, zip } = location.address;

    const SplashBackgroundImage = styled(BackgroundImage)`
      width: 100vw;
      height: 100vh;
      filter: blur(3px);
      transform: scale(1.05);
    `;

    const SplashContent = styled.div`
      width: 100vw;
      height: 100vh;
      padding-top: 1rem;
      box-sizing: border-box;

      > .names > i {
        display: block;

        ${Breakpoint.md` display: inline; `}
      }

      > h1, h2, h3 { text-align: center }
      > footer { 
        position: absolute;
        bottom: 1rem;
        width: 100%;
      }
    `;

    const Names = styled.h1`
      i {
        display: block;
        padding-right: 0.4em;
        ${Breakpoint.md` display: inline; `}
      }

      ${Breakpoint.md`
        display: table;
        width: auto;
        margin: auto;

        > div { 
          display: table-row;

          > span {
            display: table-cell;
            vertical-align: middle;
            padding: 0 0.1em;
          }
        }
      `};
    `;

    const Last = styled.div`
      display: none;
      @media only screen and (min-width: 1200px) {
        display: block;
      }
    `;

    const dateFormatted = dateFormat(date, 'mmmm d, yyyy');

    return (
      <Parallax strength={300} style={{ width: '100vw', height: '100vh' }}>
        <Background>
          <SplashBackgroundImage image={image} />
        </Background>
        <SplashContent>
          <Names>
            <div>
              <span>{names[0].first} <Last>{names[0].last}</Last></span>
              <span><i>and</i></span>
              <span>{names[1].first} <Last>{names[1].last}</Last></span>
            </div>
          </Names>
          <h2>{dateFormatted}</h2>
          <h2><i>save the date</i></h2>
          <footer>
            <h2>{location.name}</h2>
            <h3>
              <div><i>{street}</i></div>
              <div><i>{city}, {state} {zip}</i></div>
            </h3>
          </footer>
        </SplashContent>
      </Parallax>
    );
  }
}

Splash.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.object.isRequired
};

export default Splash;
