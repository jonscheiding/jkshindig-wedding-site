import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import separatorSmall from '../assets/separator-small.png';
import separatorLarge from '../assets/separator-large.png';
import BackgroundImage from './BackgroundImage';
import { Breakpoint } from '../styles/responsive';

const Separator = ({small, flip}) => {
  const size = small ? '2.5rem' : '5rem';
  
  const Image = styled(BackgroundImage)`
    transform: ${flip ? 'rotate(180deg)' : 'none'};
    font-size: ${size};
    /* margin: 0.25em 0; */
    height: 1em;
    background-size: contain;

    ${Breakpoint.sm` font-size: calc(${size} + 1.0em); margin: 0.25em; `}
    ${Breakpoint.md` font-size: calc(${size} + 1.2em); `}
    ${Breakpoint.lg` font-size: calc(${size} + 1.5em); `}
    ${Breakpoint.xl` font-size: calc(${size} + 2.5em); `}
  `;

  return (
    <Image 
      image={small ? separatorSmall : separatorLarge}
      contain />
  );
};

Separator.propTypes = {
  small: PropTypes.bool,
  flip: PropTypes.bool
};

export default Separator;
