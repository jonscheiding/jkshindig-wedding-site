import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Square from './Square';
import BackgroundImage from './BackgroundImage';
import overlay from '../assets/picture-overlay.png';
import styled from 'styled-components';

import { Breakpoint } from '../styles/responsive';

const OverlaySquare = styled(Square)`
  transform: scale(1.01);
  width: 100%;
`;

const SizedParallax = styled(Parallax)`
  ${Breakpoint.smallest` 
    max-width: 50vw; 
    margin: auto; 
  `}
`;

const PersonImage = ({image, className}) => {
  return (
    <SizedParallax strength={10} bgImage={image} className={className}>
      <OverlaySquare>
        <BackgroundImage image={overlay} style={{height: '100%'}} />
      </OverlaySquare>
    </SizedParallax>
  );
};

PersonImage.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default PersonImage;
