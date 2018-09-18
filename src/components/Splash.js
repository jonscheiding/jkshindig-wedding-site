import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import styled, { css } from 'styled-components';
import dateFormat from 'dateformat';

import { Breakpoint } from '../styles/responsive';
import BackgroundImage from './BackgroundImage';
import { MENU_HEIGHT } from './Navigation';

class Splash extends Component {
  render() {
    const { date, names, venue, splash } = this.props;

    const viewportSize = css`
      width: 100vw;
      height: 100vh;
      min-height: 24rem;

      ${Breakpoint.sm` min-height: 28rem; `}
      ${Breakpoint.lg` min-height: 32rem; `}
      ${Breakpoint.xl` min-height: 36rem; `}
    `;

    const SplashParallax = styled(Parallax)`
      ${viewportSize}
      width: 100%;
    `;

    const SplashBackgroundImage = styled(BackgroundImage)`
      ${viewportSize}

      filter: blur(3px);
      transform: scale(1.05);
    `;

    const SplashContent = styled.div`
      ${viewportSize}

      padding-top: 1rem;

      > .names > i {
        display: block;

        ${Breakpoint.md` display: inline; `}
      }

      > footer { 
        position: absolute;
        bottom: ${ MENU_HEIGHT };
        width: 100%;
      }
    `;

    const dateFormatted = dateFormat(date, 'mmmm d, yyyy');

    return (
      <SplashParallax strength={300}>
        <Background>
          <SplashBackgroundImage image={splash} />
        </Background>
        <SplashContent>
          <h1 className='names'>{names[0]} <i>and</i> {names[1]}</h1>
          <h2>{dateFormatted}</h2>
          <h2><i>save the date</i></h2>
          <footer>
            <h2>{venue.name}</h2>
            <h3>
              <div><i>{venue.city}, {venue.state}</i></div>
            </h3>
          </footer>
        </SplashContent>
      </SplashParallax>
    );
  }
}

Splash.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  names: PropTypes.arrayOf(PropTypes.string).isRequired,
  venue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  splash: PropTypes.string.isRequired
};

export default Splash;
