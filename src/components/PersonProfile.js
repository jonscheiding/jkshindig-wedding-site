import React from 'react';
import styled from 'styled-components';

import { PropTypesContent } from '../PropTypesCustom';
import { getImage } from '../content';
import Square from './Square';
import PortraitImage from './PortraitImage';
import { Breakpoint } from '../styles/responsive';

const PersonImageWrapper = styled(Square)`
  width: '100%';
  margin: auto;
  ${Breakpoint.md` width: 80%; `}
  ${Breakpoint.lg` width: 70%; `}
`;

const PersonImage = styled(PortraitImage)`
  width: 100%;
  height: 100%;
`;

const PersonProfile = ({person}) => (
  <div>
    <PersonImageWrapper>
      <PersonImage image={person.photo} />
    </PersonImageWrapper>
    <h4>
      <div>{person.firstName}</div>
      <div>{person.middleName}</div>
      <div>{person.lastName}</div>
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
