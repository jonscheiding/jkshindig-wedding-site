import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Square from './Square';
import BackgroundImage from './BackgroundImage';
import overlay from '../assets/picture-overlay.png';
import styled from 'styled-components';

const OverlaySquare = styled(Square)`
  transform: scale(1.05);
  width: 100%;
`;

const SizedParallax = styled(Parallax)`
  margin: auto; 
  max-width: ${p => p.half ? '50%' : '100%'};
`;

const PortraitImage = ({image, ...props}) => {
  return (
    <SizedParallax strength={10} bgImage={image} {...props}>
      <OverlaySquare>
        <BackgroundImage image={overlay} style={{height: '100%'}} />
      </OverlaySquare>
    </SizedParallax>
  );
};

PortraitImage.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  half: PropTypes.bool
};

PortraitImage.defaultProps = {
  half: false
};

export default PortraitImage;
