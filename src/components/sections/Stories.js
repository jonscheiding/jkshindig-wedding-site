import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';

import { PropTypesContent } from '../../PropTypesCustom';
import PersonProfile from '../PersonProfile';

const Attendant = ({attendant, index}) => (
  <Row reverse={index % 2 === 0}>
    <Col xs4={2}>
      <PersonProfile person={attendant.person} />
    </Col>
  </Row>
);

const Spouses = ({spouses, story}) => (
  <div>
    <Row>
      <Col sm8={1} md={2} />
      {spouses.map((s, i) => (
        <Col key={i} xs4={2} xs8={4} sm8={3} md={4}>
          <PersonProfile person={s} />
        </Col>
      ))}
    </Row>
    <Row>
      <Col xs4={4} sm8={6} md={8} sm8Offset={1} mdOffset={2}>
        <p>{story}</p>
      </Col>
    </Row>
  </div>
);

const Stories = ({content}) => (
  <div>
    <Spouses spouses={content.spouses} story={content.story} />
    {content.attendants.map((a, i) => 
      <Attendant key={i} attendant={a} index={i} />
    )}
  </div>
);

Attendant.propTypes = {
  attendant: PropTypesContent.attendant,
  index: PropTypes.number.isRequired
};

Spouses.propTypes = {
  spouses: PropTypesContent.spouses.isRequired,
  story: PropTypes.string.isRequired
};

Stories.propTypes = {
  content: PropTypesContent.content
};

export default Stories;
