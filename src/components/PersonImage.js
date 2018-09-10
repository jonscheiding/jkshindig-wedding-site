import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

function getImage({first, last}) {
  return require(`../content/images/${first}.${last}.png`);
}

const PersonImage = ({name, className}) => {
  return (
    <Parallax strength={10} bgImage={getImage(name)} className={className} />
  );
};

PersonImage.propTypes = {
  name: PropTypes.object.isRequired,
  className: PropTypes.string
};

export default PersonImage;
