import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-material-responsive-grid';

import Square from '../Square';
import PersonImage from '../PersonImage';

const PersonImageFill = styled(PersonImage)`
  width: 100%;
  height: 100%;
`;

const Stories = ({content}) => (
  <Row>
    {content.spouses.map((s, i) => (
      <Col key={i} xs4={2} xs8={4}>
        <Square>
          <PersonImageFill name={s.name} />
        </Square>
      </Col>
    ))}
  </Row>
);

Stories.propTypes = {
  content: PropTypes.object
};

export default Stories;
