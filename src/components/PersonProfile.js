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
    <h4>
      <div>{person.name.first}</div>
      <div>{person.name.middle}</div>
      <div>{person.name.last}</div>
    </h4>
    <h5><i>{person.title}</i></h5>
    {person.subtitle 
      ? <h6><i>{person.subtitle}</i></h6> 
      : null}
  </div>
);

PersonProfile.propTypes = {
  person: PropTypesContent.spouse.isRequired
};

export default PersonProfile;
