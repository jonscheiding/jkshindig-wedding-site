import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';

export default class ProfilePicture extends Component {
  render() {
    return (
      <Parallax className='profile-picture' strength={50}>
        <Background>
          <div className='profile-image' />
        </Background>
        <div className='profile-border' />
      </Parallax>
    );
  }
}
