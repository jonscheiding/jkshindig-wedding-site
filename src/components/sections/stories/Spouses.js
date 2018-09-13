import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import styled from 'styled-components';

import { PropTypesContent } from '../../../PropTypesCustom';
import PersonProfile from '../../PersonProfile';

const Story = styled.p`
  text-align: justify;
  margin-top: 1em;
`;

const Spouses = ({spouses, story}) => (
  <div>
    <Row>
      <Col sm8='1' md='2' />
      {spouses.map((s, i) => (
        <Col key={i} xs4='2' xs8='4' sm8='3' md='4'>
          <PersonProfile person={s} />
        </Col>
    ))}
    </Row>
    <Row>
      <Col xs4='4' sm8='6' md='8' sm8Offset='1' mdOffset='2'>
        <Story>{story}</Story>
      </Col>
    </Row>
  </div>
);

Spouses.propTypes = {
  spouses: PropTypesContent.spouses.isRequired,
  story: PropTypes.string.isRequired
};

export default Spouses;
