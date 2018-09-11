import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import format from 'string-format';
import styled from 'styled-components';

import { PropTypesContent } from '../../PropTypesCustom';
import PersonProfile from '../PersonProfile';
import Separator from '../Separator';

const Story = styled.p`
  text-align: justify;
`;

const QA = styled.div`
  margin-bottom: 1.5rem;
  p b { 
    display: inline-block;
    margin-bottom: 0.5rem; 
  }
`;

const Attendant = ({attendant, spouses, questions, index}) => {
  const spouse = spouses[attendant.spouse];
  const mappedQuestions = questions.map(q => format(q, spouse));
  const isEven = index % 2 === 0;

  return (
    <div>
      <Row reverse={isEven}>
        <Col xs4={1} />
        <Col xs4={2}>
          <PersonProfile person={attendant.person} />
        </Col>
      </Row>
      <Row>
        <Col xs4={4}>
          {attendant.answers.map((a, i) => (
            <QA key={i}>
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
    <h3>The Wedding Party</h3>
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
