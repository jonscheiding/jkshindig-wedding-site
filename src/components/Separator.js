import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import separatorSmall from '../assets/separator-small.png';
import separatorLarge from '../assets/separator-large.png';
import BackgroundImage from './BackgroundImage';

const SeparatorWrapper = styled.div`
  height: ${props => props.small ? '20px' : '40px'};
  margin-top: 10px;
`;

const Separator = ({small, flip}) => {
  const imageStyle = {
    height: small ? '20px' : '40px',
    marginTop: '10px',
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
