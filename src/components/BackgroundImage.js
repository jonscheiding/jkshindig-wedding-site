import React from 'react';
import PropTypes from 'prop-types';

const BackgroundImage = 
  ({image, children, style = {}, ...props}) => (
    <div 
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: 'no-repeat',
        ...style
      }} 
      {...props}
      >
      {children}
    </div>
  );

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.children
};

export default BackgroundImage;
