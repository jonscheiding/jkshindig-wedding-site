import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import styled from 'styled-components';

import { Breakpoint } from '../../../styles/responsive';
import PersonProfile from '../../PersonProfile';
import Separator from '../../Separator';

const QA = styled.div`
  margin-bottom: 1em;
  
  &:last-child {
    margin-bottom: 0;
  }

  p {
    ${ Breakpoint.sm`
      text-align: ${ props => props.right ? 'right' : 'left' };
    `}

    b { 
      display: inline-block;
    }
  }
`;

class Attendant extends Component {
  render() {
    const {attendant, index, count} = this.props;
    const qa = attendant.qa || [];
    const isEven = index % 2 === 0;
    const isLast = index === count - 1;

    return (
      <div>
        <Row reverse={isEven} middle={['sm8', 'sm4', 'md', 'lg', 'xl']}>
          <Col xs4={4} md={4} 
            sm8={qa.length > 0 ? 3 : 4} 
            sm8Offset={qa.length > 0 ? 0 : 2}
            mdOffset={qa.length > 0 ? 1 : 4}>
            <PersonProfile person={attendant} fullImage />
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
};

Attendant.propTypes = {
  attendant: PropTypes.shape({
    qa: PropTypes.arrayOf(
      PropTypes.shape({
        question: PropTypes.string.isRequired,
        answer: PropTypes.string.isRequired
      })
    )
  }),
  index: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
};

export default Attendant;