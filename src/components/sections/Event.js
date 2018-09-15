import React from 'react';
import { Row, Col } from 'react-material-responsive-grid';
import DirectionsIcon from '@material-ui/icons/Directions';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import dateFormat from 'dateformat';

import { PropTypesContent } from '../../PropTypesCustom';
import { getImage } from '../../content';
import PortraitImage from '../PortraitImage';
import { LinkButton } from '../Button';

const Event = ({content}) => {
  const { date } = content;
  const { name, address, url } = content.location;
  const { street, city, state, zip } = address;

  const image = getImage(name);

  const mapQuery = `${name}, ${address}, ${city}, ${state}, ${zip}`;
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;

  return (
    <div>
      <Row>
        <Col xs4='4'>
          <h3>{dateFormat(date, 'dddd, mmmm dd, yyyy')}</h3>
          <h3>{dateFormat(date, 'h:MM tt')}</h3>
        </Col>
      </Row>
      <Row middle={['md', 'lg', 'xl']}>
        <Col xs4='2' xs4Offset='1' md='4' mdOffset='2'>
          <PortraitImage image={image} />
        </Col>
        <Col xs4='4' md='4'>
          <h4>CEREMONY AND RECEPTION</h4>
          <h4>
            <i>
              <div>{name}</div>
              <div>{street}</div>
              <div>{city}, {state}, {zip}</div>
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
  content: PropTypesContent.content
};

export default Event;