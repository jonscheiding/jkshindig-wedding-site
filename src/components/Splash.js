import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import styled, { css } from 'styled-components';
import dateFormat from 'dateformat';

import BackgroundImage from './BackgroundImage';
import { Breakpoint } from '../styles/responsive';
import image from '../assets/splash-image.jpg';

class Splash extends Component {
  render() {
    const { date, names, location } = this.props;
    const { street, city, state, zip } = location.address;

    const viewportSize = css`
      width: 100vw;
      height: 100vh;
      min-height: 28rem;

      ${Breakpoint.sm` min-height: 37.5rem; `}
      ${Breakpoint.lg` min-height: 45.0rem; `}
      ${Breakpoint.xl` min-height: 50.0rem; `}
    `

    const SplashParallax = styled(Parallax)`${viewportSize}`;

    const SplashBackgroundImage = styled(BackgroundImage)`
      ${viewportSize}

      filter: blur(3px);
      transform: scale(1.05);
    `;

    const SplashContent = styled.div`
      ${viewportSize}

      padding-top: 1rem;
      box-sizing: border-box;

      > .names > i {
        display: block;

        ${Breakpoint.md` display: inline; `}
      }

      > h1, h2, h3, h4, h5, h6 { text-align: center }
      > footer { 
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    `;

    const Teaser = styled.div`
      background-color: ${props => props.theme['background-color']};
      margin-top: 1rem;

      i { display: block; }
    `;

    const dateFormatted = dateFormat(date, 'mmmm d, yyyy');

    return (
      <SplashParallax strength={300}>
        <Background>
          <SplashBackgroundImage image={image} />
        </Background>
        <SplashContent>
          <h1 className='names'>{names[0]} <i>and</i> {names[1]}</h1>
          <h2>{dateFormatted}</h2>
          <h2><i>save the date</i></h2>
          <footer>
            <h2>{location.name}</h2>
            <h3>
              <div><i>{street}</i></div>
              <div><i>{city}, {state} {zip}</i></div>
            </h3>
            <Teaser>
              <h6><i>Soon:</i> Meet the wedding party</h6>
            </Teaser>
          </footer>
        </SplashContent>
      </SplashParallax>
    );
  }
}

Splash.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  location: PropTypes.object.isRequired
};

export default Splash;
