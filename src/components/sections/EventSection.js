import React, { Component } from 'react';
import { Parallax, Background } from 'react-parallax';
import dateFormat from 'dateformat';

import ProfilePicture from '../ProfilePicture';
import content from '../../data/content';

export default class EventSection extends Component {
  render() {
    const { date } = content;
    const { name, address, city, state, zip, image } = content.location;

    const mapQuery = `${name}, ${address}, ${city}, ${state}, ${zip}`;
    const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

    return (
      <div className='event'>
        <h3>{dateFormat(date, 'dddd, mmmm dd, yyyy')}</h3>
        <h3>{dateFormat(date, 'h:MM tt')}</h3>
        <ProfilePicture image={image} />
        <h3>CEREMONY AND RECEPTION</h3>
        <h4>{name}</h4>
        <a href={mapUrl} target='_blank'>
          <h4>{address}</h4>
          <h4>{city}, {state}, {zip}</h4>
        </a>
      </div>
    );
  }
}