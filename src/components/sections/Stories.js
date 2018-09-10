import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';

import PersonProfile from '../PersonProfile';

const Stories = ({content}) => (
  <div>
    <Row>
      {content.spouses.map((s, i) => (
        <Col key={i} xs4={2} xs8={4}>
          <PersonProfile person={s} />
        </Col>
      ))}
    </Row>
    <Row>
      <Col xs4={4}>
        <p>{content.story}</p>
      </Col>
    </Row>
  </div>
);

Stories.propTypes = {
  content: PropTypes.object
};

export default Stories;
