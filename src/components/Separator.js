import React from 'react';
import PropTypes from 'prop-types';

import separatorSmall from '../assets/separator-small.png';
import separatorLarge from '../assets/separator-large.png';
import BackgroundImage from './BackgroundImage';

const Separator = ({small, flip}) => {
  const imageStyle = {
    height: small ? '30px' : '40px',
    margin: small ? 0 : '10px 0',
    transform: flip ? 'rotate(180deg)' : 'none'
  };

  return (
    <BackgroundImage 
      image={small ? separatorSmall : separatorLarge}
      style={imageStyle}
      contain />
  );
};

Separator.propTypes = {
  small: PropTypes.bool,
  flip: PropTypes.bool
};

export default Separator;
