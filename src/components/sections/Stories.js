import React from 'react';

import { PropTypesContent } from '../../PropTypesCustom';
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
        spouses={content.spouses}
        questions={content.questions} />
    )}
  </div>
);

Stories.title = 'Stories';

Stories.propTypes = {
  content: PropTypesContent.content
};

export default Stories;
