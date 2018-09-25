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
      {person.subtitles 
        ? person.subtitles.map((s, i) => 
          <h6 key={i}><i>{s}</i></h6>
        ) 
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
  imageSizes: PropTypes.any
};

export default PersonProfile;
