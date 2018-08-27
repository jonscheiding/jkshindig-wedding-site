import React, { Component } from 'react';

import ProfilePicture from '../ProfilePicture';
import content from '../../data/content';

export default class StoriesSection extends Component {
  render() {
    const Spouse = ({image, title, name}) => (
      <div className='spouse'>
        <ProfilePicture image={image} />
        <h3>{title}</h3>
        <h4>{name.first} {name.last}</h4>
      </div>
    );

    return (
      <div>
        <h2>Stories</h2>
        <div className='spouses'>
          <div>
            <Spouse {...content.spouses[0]} />
            <Spouse {...content.spouses[1]} />
          </div>
          <div className='story'>
            <p>{content.story}</p>
          </div>
        </div>
      </div>
    );
  }
}
