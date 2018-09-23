import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import dateFormat from 'dateformat';
import showdown from 'showdown';

import PortraitImage from '../PortraitImage';
import ProfileIcons from '../ProfileIcons';
import Separator from '../Separator';

const converter = new showdown.Converter();

const Hotel = ({hotel}) => {
  const { name, streetAddress, city, state, zipCode, url, phoneNumber, photo, venueNotes } = hotel;

  return (
    <Col xs4={4} md={3}>
      <h4>{name}</h4>
      <p>{venueNotes}</p>
      <div>
        <PortraitImage image={photo} />
      </div>
      <h5>
        <i>
          <div>{streetAddress}</div>
          <div>{city}, {state}, {zipCode}</div>
          <div>{phoneNumber}</div>
        </i>
        <ProfileIcons location={hotel} phoneNumber={phoneNumber} website={url} />
      </h5>
    </Col>
  );
};

Hotel.propTypes = {
  hotel: PropTypes.shape({
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired,
    venueNotes: PropTypes.string,
    url: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
  })
};

const Event = ({content}) => {
  const { date, accommodations } = content;
  const { name, streetAddress, city, state, zipCode, url, photo, venueNotes } = content.venue;

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
          <h4><i>{name}</i></h4>
          <h5>
            <i>
              <div>{streetAddress}</div>
              <div>{city}, {state}, {zipCode}</div>
            </i>
            <ProfileIcons location={content.venue} website={url} />
          </h5>
        </Col>
        <Col xs4={4} md={8} mdOffset={2}>
          <p dangerouslySetInnerHTML={{__html: converter.makeHtml(venueNotes)}} />
        </Col>
      </Row>
      <Separator small />
      <Row>
        <Col xs4={4} md={8} mdOffset={2}>
          <h3>Accommodations</h3>
          <p>{accommodations.notes}</p>
        </Col>
      </Row>
      <Row>
        <Col hidden={['xs4', 'xs8']} md={3} />
        {accommodations.hotels.map(h => <Hotel key={h.name} hotel={h} />)}
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
      venueNotes: PropTypes.string,
      url: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      accommodations: PropTypes.object
    })
  })
};

export default Event;