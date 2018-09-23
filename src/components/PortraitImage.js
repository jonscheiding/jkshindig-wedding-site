import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Square from './Square';
import BackgroundImage from './BackgroundImage';
import overlay from '../assets/picture-overlay.png';
import styled from 'styled-components';

const OverlaySquare = styled(Square)`
  transform: scale(1.01);
  width: 100%;
`;

const SizedParallax = styled(Parallax)`
  margin: auto; 
  max-width: 50%;
`;

const PersonImage = ({image, ...props}) => {
  return (
    <SizedParallax strength={10} bgImage={image} {...props}>
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
