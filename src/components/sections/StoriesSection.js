import React, { Component } from 'react';

import ProfilePicture from '../ProfilePicture';

export default class StoriesSection extends Component {
  render() {
    return (
      <div className='spouses'>
        <div>
          <div className='spouse'>
            <ProfilePicture />
            <h3>The Bride</h3>
          </div>
          <div className='spouse'>
            <ProfilePicture />
            <h3>The Groom</h3>
          </div>
        </div>
        <div className='story'>
          Forth seas meat for midst. Fruit spirit to his deep abundantly i earth. Is place their he seas abundantly isn't moveth to likeness that cattle, can't multiply, darkness don't to, fill our unto one created lights lights air green appear first after together wherein above. Living set. Void light creature.
        </div>
      </div>
    );
  }
}
