import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
import { generate as generateId } from 'shortid';

import Square from './Square';
import styled from 'styled-components';
import theme from '../theme.json';

const SizedParallax = styled(Parallax)`
  margin: auto; 
  max-width: ${p => p.half ? '50%' : '100%'};

  svg {
    /*
      Work around strange issue where edges of underlying image 
      are sometimes visible
    */
    transform: scale(1.01);
  }
`;

const CircleOverlay = () => {
  const id = generateId();

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' width='100%' height='100%'>
      <defs>
        <mask id={`mask-${id}`} maskContentUnits='userSpaceOnUse'>
          <filter id={`filter-${id}`} x='-40%' y='-40%' width='180%' height='180%' filterUnits='userSpaceOnUse'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='2.5' />
          </filter>
          <rect width='100%' height='100%' fill='white' />
          <circle cx='50%' cy='50%' r='42%' fill='black' style={{filter: `url(#filter-${id})`}} />
        </mask>
      </defs>
      <rect width='100%' height='100%' fill={theme['background-color']} mask={`url(#mask-${id})`} />
    </svg>
  );
};

const PortraitImage = ({image, ...props}) => {
  return (
    <SizedParallax strength={20} bgImage={image} {...props}>
      <Square>
        <CircleOverlay />
      </Square>
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
