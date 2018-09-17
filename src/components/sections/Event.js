import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import DirectionsIcon from '@material-ui/icons/Directions';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import dateFormat from 'dateformat';

import PortraitImage from '../PortraitImage';
import { LinkButton } from '../Button';

const Event = ({content}) => {
  const { date } = content;
  const { name, streetAddress, city, state, zipCode, url, photo } = content.venue;

  const mapQuery = `${name}, ${streetAddress}, ${city}, ${state}, ${zipCode}`;
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <div>
      <Row>
        <Col xs4={4}>
          <h3>{dateFormat(date, 'dddd, mmmm dd, yyyy')}</h3>
          <h3>{dateFormat(date, 'h:MM tt')}</h3>
        </Col>
      </Row>
      <Row middle={['md', 'lg', 'xl']}>
        <Col xs4={2} xs4Offset={1} md={4} mdOffset={2}>
          <PortraitImage image={photo} />
        </Col>
        <Col xs4={4} md={4}>
          <h4>CEREMONY AND RECEPTION</h4>
          <h4>
            <i>
              <div>{name}</div>
              <div>{streetAddress}</div>
              <div>{city}, {state}, {zipCode}</div>
              <div>
                <LinkButton href={mapUrl} target='_blank'><DirectionsIcon /></LinkButton>
                <LinkButton href={url} target='_blank'><OpenInBrowserIcon /></LinkButton>
              </div>
            </i>
          </h4>
        </Col>
      </Row>
    </div>
  );
};

Event.title = 'Event';

Event.propTypes = {
  content: PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    venue: PropTypes.shape({
      streetAddress: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired
    })
  })
};

export default Event;