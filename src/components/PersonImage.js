import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Square from './Square';
import BackgroundImage from './BackgroundImage';
import overlay from '../assets/picture-overlay.png';
import styled from 'styled-components';

function getImage({first, last}) {
  const filename = `${first}.${last}`
    .replace(/[^a-zA-Z.]*/g, '');
  return require(`../content/images/${filename}.png`);
}

const OverlaySquare = styled(Square)`
  transform: scale(1.01);
`;

const PersonImage = ({name, className}) => {
  return (
    <Parallax strength={10} bgImage={getImage(name)} className={className}>
      <OverlaySquare size='100%'>
        <BackgroundImage image={overlay} style={{height: '100%'}} />
      </OverlaySquare>
    </Parallax>
  );
};

PersonImage.propTypes = {
  name: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default PersonImage;
