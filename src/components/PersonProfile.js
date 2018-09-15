import React from 'react';
import styled from 'styled-components';

import { PropTypesContent } from '../PropTypesCustom';
import { getImage } from '../content';
import Square from './Square';
import PortraitImage from './PortraitImage';
import { Breakpoint } from '../styles/responsive';

function getPersonImage(name) {
  return getImage([name.first, name.last], 'people');
}

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
      <PersonImage image={getPersonImage(person.name)} />
    </PersonImageWrapper>
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
