import React from 'react';
import styled from 'styled-components';

import { PropTypesContent } from '../PropTypesCustom';
import Square from './Square';
import PersonImage from './PersonImage';

const PersonImageFill = styled(PersonImage)`
  width: 100%;
  height: 100%;
`;

const PersonProfile = ({person}) => (
  <div>
    <Square>
      <PersonImageFill name={person.name} />
    </Square>
    <h4>{person.name.first} {person.name.last}</h4>
    <h5><i>{person.title}</i></h5>
  </div>
)

PersonProfile.propTypes = {
  person: PropTypesContent.spouse.isRequired
};

export default PersonProfile;
