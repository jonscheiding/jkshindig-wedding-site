import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import styled from 'styled-components';
import format from 'string-format';

import { PropTypesContent } from '../../../PropTypesCustom';
import { Breakpoint } from '../../../styles/responsive';
import PersonProfile from '../../PersonProfile';
import Separator from '../../Separator';

const QA = styled.div`
  margin-bottom: 1em;
  
  &:last-child {
    margin-bottom: 0;
  }

  p {
    text-align: center;

    ${ Breakpoint.sm`
      text-align: ${ props => props.right ? 'right' : 'left' };
    `}

    b { 
      display: inline-block;
      margin-bottom: 0.5em; 
    }
  }
`;

class Attendant extends Component {
  render() {
    const {attendant, spouses, questions, index, count} = this.props;
    const spouse = spouses[attendant.spouse];
    const mappedQuestions = questions.map(q => format(q, spouse));
    const isEven = index % 2 === 0;
    const isLast = index === count - 1;

    return (
      <div>
        <Row reverse={isEven} middle={['sm8', 'sm4', 'md', 'lg', 'xl']}>
          <Col xs4='2' md='4' xs4Offset='1' 
            sm8={attendant.answers.length > 0 ? 3 : 4} 
            sm8Offset={attendant.answers.length > 0 ? '0' : 2}
            mdOffset={attendant.answers.length > 0 ? 1 : 4}>
            <PersonProfile person={attendant.person} />
          </Col>
          {this.renderQuestions(mappedQuestions, attendant.answers, isEven)}
        </Row>
        {isLast ? null : <Separator small flip={isEven} />}
      </div>
    );
  }

  renderQuestions(mappedQuestions, answers, isEven) {
    if(answers.length === 0) {
      return null;
    }

    return (
      <Col xs4='4' sm8='5' md='6'>
        {answers.map((a, i) => (
          <QA key={i} right={!isEven}>
            <p><b>{mappedQuestions[i]}</b></p>
            <p>{a}</p>
          </QA>
        ))}
      </Col>
    );
  }
};

Attendant.propTypes = {
  attendant: PropTypesContent.attendant,
  spouses: PropTypesContent.spouses,
  questions: PropTypesContent.questions,
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};

export default Attendant;