import React, { Component } from 'react';

import ProfilePicture from '../ProfilePicture';
import content from '../../data/content';

export default class GiftsSection extends Component {
  render() {
    const gifts = content.gifts;
    const charity = gifts.charity;
    
    return (
      <div className='gifts'>
        <p>{charity.blurb}</p>
        <div className='gift-profiles'>
          {charity.charities.map(c => (
            <div className='gift-profile'>
              <ProfilePicture image={c.image} />
              <p>{c.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}