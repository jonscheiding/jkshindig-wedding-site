import React from 'react';
import dateFormat from 'dateformat';

import { PropTypesContent } from '../../PropTypesCustom';

const Event = ({content}) => {
  const { date } = content;
  const { name, address } = content.location;
  const { street, city, state, zip } = address;

  const mapQuery = `${name}, ${address}, ${city}, ${state}, ${zip}`;
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <div className='event'>
      <h3>{dateFormat(date, 'dddd, mmmm dd, yyyy')}</h3>
      <h3>{dateFormat(date, 'h:MM tt')}</h3>
      <h4>CEREMONY AND RECEPTION</h4>
      <h4>
        <i>
          <div>{name}</div>
          <a href={mapUrl} target='_blank'>
            <div>{street}</div>
            <div>{city}, {state}, {zip}</div>
          </a>
        </i>
      </h4>
    </div>
  );
};

Event.propTypes = {
  content: PropTypesContent.content
};

export default Event;