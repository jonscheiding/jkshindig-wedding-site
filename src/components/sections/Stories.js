import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import styled from 'styled-components';

import { ALL_SIZES, Breakpoint } from '../../responsive-styles';
import Separator from '../Separator';
import PersonProfile from '../PersonProfile';

const QA = styled.div`
  margin-bottom: 1em;
`;

const StoriesWrapper = styled.div`
  ${Breakpoint.lg`
    p { font-size: 1.2rem };
  `}
`;

class Stories extends Component {
  render() {
    return (
      <StoriesWrapper>
        {this.renderSpouses()}
        {this.renderStory()}
        <Separator flip />
        {this.renderAttendants()}
      </StoriesWrapper>
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

    const isEven = i % 2 === 0;
    const isLast = i === attendants.length - 1;
    
    return (
      <div key={i}>
        <Row reverse={isEven} middle={ALL_SIZES} center={ALL_SIZES}>
          <Col xs4={2} sm8={3} md={3}>
            <PersonProfile person={attendant} imageSizes={{md: 'full'}} />
          </Col>
          {this.renderAttendantContent(attendant, isEven)}
        </Row>
        {isLast ? null : <Separator small flip={isEven} />}
      </div>
    );
  }

  renderAttendantContent(attendant, isEven) {
    const { story, qa } = attendant;

    if(!story && (!qa || qa.length === 0)) {
      return null;
    }

    const content = this.renderQuestions(qa, isEven) || <p>{story}</p>;

    return (
      <Col xs4={4} sm8={5} md={7}>
        {content}
      </Col>
    );
  }

  renderQuestions(qa) {
    if(!qa || qa.length === 0) {
      return null;
    }

    return qa.map((item, i) => (
      <QA key={i}>
        <p><b>{item.question}</b></p>
        <p>{item.answer}</p>
      </QA>
    ));
  }
}

Stories.title = 'Stories';

const SHAPE_QA = { 
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

const SHAPE_ATTENDANT = {
  qa: PropTypes.arrayOf(PropTypes.shape(SHAPE_QA)),
  story: PropTypes.string
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
