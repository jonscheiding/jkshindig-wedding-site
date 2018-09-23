import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Square from './Square';
import BackgroundImage from './BackgroundImage';
import overlay from '../assets/picture-overlay.png';
import styled from 'styled-components';
import { Breakpoint } from '../styles/responsive';

const OverlaySquare = styled(Square)`
  transform: scale(1.05);
  width: 100%;
`;

const SizedParallax = styled(Parallax)`
  margin: auto; 
  max-width: 50%;
  ${Breakpoint.sm` 
    max-width: ${p => p.fullImage ? '100%' : '50%'};
  `};
  ${Breakpoint.md`
    max-width: ${p => p.fullImage ? '100%' : '50%'};
  `};
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
  className: PropTypes.string
};

export default PortraitImage;
