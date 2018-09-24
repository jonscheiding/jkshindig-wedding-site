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

function getSize(sizes, breakpoint) {
  switch(sizes) {
    case 'full': return '100%';
    case 'half': return '50%';
    case 'third': return '33%';
    case undefined: 
      if(breakpoint === 'xs') { return '50%'; }
      return undefined;
    default:
      return getSize(sizes[breakpoint], breakpoint);
  }
}

function getStylesFromProps(breakpoint) {
  return p => {
    const size = getSize(p.sizes, breakpoint);
    if(size === undefined) { return null; }
    return { maxWidth: size };
  };
}

const SizedParallax = styled(Parallax)`
  margin: auto; 

  ${getStylesFromProps('xs')};

  ${Breakpoint.sm` ${getStylesFromProps('sm')}; `};
  ${Breakpoint.md` ${getStylesFromProps('md')}; `};
  ${Breakpoint.lg` ${getStylesFromProps('lg')}; `};
  ${Breakpoint.xl` ${getStylesFromProps('xl')}; `};
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

const size = PropTypes.oneOf('half', 'full');

PortraitImage.propTypes = {
  image: PropTypes.string.isRequired,
  className: PropTypes.string,
  sizes: PropTypes.oneOfType(
    PropTypes.shape({
      xs: size,
      sm: size,
      md: size,
      lg: size,
      xl: size
    }),
    size
  )
};

export default PortraitImage;
