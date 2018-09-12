import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import format from 'string-format';
import styled from 'styled-components';

import { PropTypesContent } from '../../PropTypesCustom';
import PersonProfile from '../PersonProfile';
import Separator from '../Separator';
import { Breakpoint } from '../../styles/responsive';

const Story = styled.p`
  text-align: justify;
  margin-top: 1em;
`;

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

const Attendant = ({attendant, spouses, questions, index}) => {
  const spouse = spouses[attendant.spouse];
  const mappedQuestions = questions.map(q => format(q, spouse));
  const isEven = index % 2 === 0;

  return (
    <div>
      <Row reverse={isEven}>
        <Col xs4={1} hiddenUp='sm8' />
        <Col xs4={2} sm8={3} md={4}  mdOffset={1} >
          <PersonProfile person={attendant.person} />
        </Col>
        <Col xs4={1} hiddenUp='sm8' />
        <Col xs4={4} sm8={5} md={6} >
          {attendant.answers.map((a, i) => (
            <QA key={i} right={!isEven}>
              <p><b>{mappedQuestions[i]}</b></p>
              <p>{a}</p>
            </QA>
          ))}
        </Col>
      </Row>
      <Separator small flip={isEven} />
    </div>
  );
};

const Spouses = ({spouses, story}) => (
  <div>
    <Separator />
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
        <Story>{story}</Story>
      </Col>
    </Row>
    <Separator flip />
  </div>
);

const Stories = ({content}) => (
  <div>
    <Spouses spouses={content.spouses} story={content.story} />
    <h2><i>The Wedding Party</i></h2>
    {content.attendants.map((a, i) => 
      <Attendant key={i} index={i}
        attendant={a} 
        spouses={content.spouses}
        questions={content.questions} />
    )}
  </div>
);

Attendant.propTypes = {
  attendant: PropTypesContent.attendant,
  spouses: PropTypesContent.spouses,
  questions: PropTypesContent.questions,
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
