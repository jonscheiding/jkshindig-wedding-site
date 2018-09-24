import React from 'react';
import PropTypes from 'prop-types';

import PortraitImage from './PortraitImage';

const PersonProfile = ({person, imageSizes}) => {
  const style = {};

  return (
    <div>
      <PortraitImage image={person.photo} style={style} sizes={imageSizes} />
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
  imageSizes: PropTypes.object
};

export default PersonProfile;
