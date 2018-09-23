import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PortraitImage from './PortraitImage';

const PersonImage = styled(PortraitImage)`
  width: 100%;
  height: 100%;
`;

const PersonProfile = ({person, fullImage}) => {
  const style = {};
  if(fullImage) {
    style.maxWidth = '100%';
  }

  return (
    <div>
      <PersonImage image={person.photo} style={style} />
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
};

PersonProfile.propTypes = {
  person: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    middleName: PropTypes.string,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
  }),
  fullImage: PropTypes.bool
};

export default PersonProfile;
