import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Square from './Square';
import BackgroundImage from './BackgroundImage';
import overlay from '../assets/picture-overlay.png';
import styled from 'styled-components';

const OverlaySquare = styled(Square)`
  transform: scale(1.01);
`;

const PersonImage = ({image, className}) => {
  return (
    <Parallax strength={10} bgImage={image} className={className}>
      <OverlaySquare size='100%'>
        <BackgroundImage image={overlay} style={{height: '100%'}} />
      </OverlaySquare>
    </Parallax>
  );
};

PersonImage.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default PersonImage;
