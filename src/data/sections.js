import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/* PLACEHOLDER STUFF */
const StyledSection = styled.section`
  padding-top: 2.5rem;
  text-align: center;
  font-size: 3rem;
  height: 70vh;
  text-transform: uppercase;
`;

const NamedSection = ({name}) => (<StyledSection id={name}>{name}</StyledSection>);
NamedSection.propTypes = {
  name: PropTypes.string.isRequired
};

const SECTIONS = {
  people: <NamedSection name='people' />,
  event: <NamedSection name='event' />,
  gifts: <NamedSection name='gifts' />,
  rsvp: <NamedSection name='rsvp' />
};

export const SECTION_IDS = Object.keys(SECTIONS);
export const SECTION_COMPONENTS = SECTION_IDS.map(id => SECTIONS[id]);
