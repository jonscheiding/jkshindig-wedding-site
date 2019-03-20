import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { DateTime } from 'luxon';
import { Row, Col } from 'react-material-responsive-grid';

import FitText from '../FitText';
import PortraitImage from '../PortraitImage';
import ProfileIcons from '../ProfileIcons';
import Separator from '../Separator';
import { ALL_SIZES, Breakpoint } from '../../responsive-styles';

const OtherEventRow = styled(Row)`
  margin-top: 1em;
`;

const BreakLarge = styled.div`
  display: inline;
  
  &::after { content: ' ' }

  ${Breakpoint.lg`
    display: block;
  `}
`;

class Event extends Component {
  render() {
    return (
      <div>
        {this.renderMainEvent()}
        {this.renderOtherEvents()}
        {this.renderAccommodations()}
      </div>
    );
  }

  renderMainEvent() {
    const { mainEvent } = this.props.content;
    const { date, title, description, location } = mainEvent;

    return (
      <div>
        <Row>
          <Col xs4={4}>
            <h3>{date.toFormat('cccc, LLLL dd, yyyy')}</h3>
            <h3>{date.toFormat('h:mm a')}</h3>
          </Col>
        </Row> 
        <Row middle={['md', 'lg', 'xl']} center={ALL_SIZES}>
          <Col xs4={2} md={4} mdOffset={0}>
            <PortraitImage image={location.photo} sizes={{xs: 'half', md: 'full'}} />
          </Col>
          <Col xs4={4} md={4}>
            <h4>{title}</h4>
            <h4><i>{location.name}</i></h4>
            {this.renderPlaceInformation(location)}
          </Col>
          <Col xs4={4} md={8}>
            <ReactMarkdown source={description} />
          </Col>
        </Row>
      </div>
    );
  }

  renderOtherEvents() {
    const { otherEvents } = this.props.content;

    if(!otherEvents || otherEvents.length === 0) {
      return null;
    }

    return (
      <div>
        <Separator small flip />
        <h3>Other Events</h3>
        <Row center={ALL_SIZES}>
          {otherEvents.map((e, index) => (
            <Col xs4={4} xs8={4} key={index}>
              {this.renderOtherEvent(e)}
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  renderOtherEvent(event) {
    return (
      <OtherEventRow center={ALL_SIZES}>
        <Col xs4={4}>
          <h6><FitText className='header-height'>{event.title}</FitText></h6>
        </Col>
        <Col xs4={4} lg={6}>
          <h6>
            {event.date.toFormat('cccc,')}
            <BreakLarge />
            {event.date.toFormat('LLLL dd')}
          </h6>
          <h6>{event.date.toFormat('h:mm a')}</h6>
          <h6><FitText className='header-height'><i>{event.location.name}</i></FitText></h6>
          {this.renderPlaceInformation(event.location, true)}
        </Col>
        <Col xs4={4} lg={6}>
          <p>{event.description}</p>
        </Col>
      </OtherEventRow>
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

  renderPlaceInformation(place, small = false) {
    const { streetAddress, city, state, zipCode, url, phoneNumber } = place;

    const Header = ({children}) => (
      small
        ? <h6>{children}</h6>
        : <h5>{children}</h5>
    );

    return (
      <Header>
        <i>
          <div>{streetAddress}</div>
          <div>{city}, {state}, {zipCode}</div>
          <div>{phoneNumber}</div>
        </i>
        <ProfileIcons location={place} phoneNumber={phoneNumber} website={url} />
      </Header>
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
  date: PropTypes.instanceOf(DateTime).isRequired,
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