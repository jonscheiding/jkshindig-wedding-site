import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import dateFormat from 'dateformat';

import FitText from '../FitText';
import PortraitImage from '../PortraitImage';
import ProfileIcons from '../ProfileIcons';
import Separator from '../Separator';
import { ALL_SIZES } from '../../responsive-styles';

class Event extends Component {
  render() {
    return (
      <div>
        {this.renderMainEvent()}
        {this.renderAccommodations()}
      </div>
    );
  }

  renderMainEvent() {
    const { mainEvent } = this.props.content;
    return this.renderEvent(mainEvent);
  }

  renderEvent = (event) => {
    const { title, description, date, location } = event;
    const { name, photo } = location;
  
    return (
      <div>
        <Row>
          <Col xs4={4}>
            <h3>{dateFormat(date, 'dddd, mmmm dd, yyyy')}</h3>
            <h3>{dateFormat(date, 'h:MM tt')}</h3>
          </Col>
        </Row> 
        <Row middle={['md', 'lg', 'xl']} center={ALL_SIZES}>
          <Col xs4={2} md={4} mdOffset={0}>
            <PortraitImage image={photo} sizes={{xs: 'half', md: 'full'}} />
          </Col>
          <Col xs4={4} md={4}>
            <h4>{title}</h4>
            <h4><i>{name}</i></h4>
            {this.renderPlaceInformation(location)}
          </Col>
          <Col xs4={4} md={8}>
            <ReactMarkdown source={description} />
          </Col>
        </Row>
      </div>
    );
  }

  renderAccommodations() {
    const { accommodations } = this.props.content;

    if(accommodations === undefined || accommodations.length === 0) { 
      return null;
    }

    return (
      <div>
        <Separator small />
        <Row>
          <Col xs4={4} md={8} mdOffset={2}>
            <h3>Accommodations</h3>
            <p>{accommodations.notes}</p>
          </Col>
        </Row>
        <Row center={ALL_SIZES}>
          {accommodations.hotels.map((h, i) => this.renderHotel(h, i))}
        </Row>
      </div>
    );
  }
  
  renderHotel(hotel, i) {
    const { name, photo } = hotel;

    return (
      <Col key={i} xs4={4} sm8={4}>
        <h4><FitText className='header-height'>{name}</FitText></h4>
        <PortraitImage image={photo} half />
        {this.renderPlaceInformation(hotel)}
        <p>{hotel.venueNotes}</p>
      </Col>
    );
  }

  renderPlaceInformation(place) {
    const { streetAddress, city, state, zipCode, url, phoneNumber } = place;

    return (
      <h5>
        <i>
          <div>{streetAddress}</div>
          <div>{city}, {state}, {zipCode}</div>
          <div>{phoneNumber}</div>
        </i>
        <ProfileIcons location={place} phoneNumber={phoneNumber} website={url} />
      </h5>
    );
  }
};

Event.title = 'Event';

const SHAPE_PLACE = {
  streetAddress: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zipCode: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const SHAPE_HOTEL = {
  ...SHAPE_PLACE,
  phoneNumber: PropTypes.string.isRequired
};

const SHAPE_VENUE = {
  ...SHAPE_PLACE,
  accommodations: PropTypes.arrayOf(PropTypes.shape(SHAPE_HOTEL))
};

const SHAPE_EVENT = {
  date: PropTypes.date.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.shape(SHAPE_VENUE)
};

const SHAPE_CONTENT = {
  mainEvent: PropTypes.shape(SHAPE_EVENT),
  otherEvents: PropTypes.arrayOf(PropTypes.shape(SHAPE_EVENT))
};

Event.propTypes = {
  content: PropTypes.shape(SHAPE_CONTENT)
};

export default Event;