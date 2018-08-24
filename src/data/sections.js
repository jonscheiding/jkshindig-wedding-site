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

const ids = [ 'people', 'events', 'gifts', 'rsvp' ];
export default ids.map(id => ({
  id, component: <NamedSection name={id} />
}));
