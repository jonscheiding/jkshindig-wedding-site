import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import styled from 'styled-components';

import Separator from '../Separator';
import PersonProfile from '../PersonProfile';
import { ALL_SIZES, Breakpoint } from '../../responsive-styles';

const QA = styled.div`
  margin-bottom: 1em;

  p {
    ${ Breakpoint.sm`
      text-align: ${ props => props.right ? 'right' : 'left' };
    `}
  }
`;

class Stories extends Component {
  render() {
    return (
      <div>
        {this.renderSpouses()}
        {this.renderStory()}
        <Separator flip />
        {this.renderAttendants()}
      </div>
    );
  }

  renderStory() {
    const { story } = this.props.content;
    return (
      <Row center={ALL_SIZES}>
        <Col xs4={4} sm8={6} md={8}>
          <p>{story}</p>
        </Col>
      </Row>
    );
  }

  renderSpouses() {
    const { spouses } = this.props.content;
    return (
      <Row center={ALL_SIZES}>
        {spouses.map((s, i) => (
          <Col key={i} xs4={2} xs8={4} sm8={3} md={4}>
            <PersonProfile person={s} imageSizes='full' />
          </Col>
        ))}
      </Row>
    );
  }

  renderAttendants() {
    const { attendants } = this.props.content;

    if(attendants === undefined || attendants.length === 0) {
      return null;
    }

    return (
      <div>
        <h2><i>The Wedding Party</i></h2>
        {attendants.map((a, i) => this.renderAttendant(a, i))}
      </div>
    );
  }

  renderAttendant(attendant, i) {
    const { attendants } = this.props.content;

    const qa = attendant.qa || [];
    const isEven = i % 2 === 0;
    const isLast = i === attendants.length - 1;
    
    return (
      <div key={i}>
        <Row reverse={isEven} middle={ALL_SIZES} center={ALL_SIZES}>
          <Col xs4={2} sm8={3} md={4}>
            <PersonProfile person={attendant} imageSizes={{md: 'full'}} />
          </Col>
          {this.renderQuestions(qa, isEven)}
        </Row>
        {isLast ? null : <Separator small flip={isEven} />}
      </div>
    );
  }

  renderQuestions(qa, isEven) {
    if(qa.length === 0) {
      return null;
    }

    return (
      <Col xs4={4} sm8={5} md={6}>
        {qa.map((item, i) => (
          <QA key={i} right={!isEven}>
            <p><b>{item.question}</b></p>
            <p>{item.answer}</p>
          </QA>
        ))}
      </Col>
    );
  }
}

Stories.title = 'Stories';

const SHAPE_QA = { 
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

const SHAPE_ATTENDANT = {
  qa: PropTypes.arrayOf(PropTypes.shape(SHAPE_QA))
};

const SHAPE_SPOUSE = { };

const SHAPE_CONTENT = {
  spouses: PropTypes.arrayOf(PropTypes.shape(SHAPE_SPOUSE)).isRequired,
  attendants: PropTypes.arrayOf(PropTypes.shape(SHAPE_ATTENDANT)),
  story: PropTypes.string
};

Stories.propTypes = {
  content: PropTypes.shape(SHAPE_CONTENT)
};

export default Stories;
