import React from 'react';
import PropTypes from 'prop-types';

import Separator from '../Separator';
import Attendant from './stories/Attendant';
import Spouses from './stories/Spouses';

const Stories = ({content}) => (
  <div>
    <Spouses spouses={content.spouses} story={content.story} />
    <Separator flip />
    <h2><i>The Wedding Party</i></h2>
    {content.attendants.map((a, i) => 
      <Attendant key={i} index={i} count={content.attendants.length}
        attendant={a} 
        spouses={content.spouses} />
    )}
  </div>
);

Stories.title = 'Stories';

Stories.propTypes = {
  content: PropTypes.shape({
    spouses: PropTypes.array,
    attendants: PropTypes.array,
    story: PropTypes.string.isRequired
  })
};

export default Stories;
