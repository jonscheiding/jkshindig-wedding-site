import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';

import BackgroundImage from './BackgroundImage';

const ProfilePicture = ({image}) => (
  <Parallax className='profile-picture' strength={50}>
    <Background>
      <BackgroundImage className='profile-image' image={image} />
    </Background>
    <div className='profile-border' />
  </Parallax>
);

ProfilePicture.propTypes = {
  image: PropTypes.string.isRequired
};

export default ProfilePicture;
