import React from 'react';

import PeopleSection from '../components/PeopleSection';

const wrap = (element, id) => (<div id={id}>{element}</div>);

const sections = [
  { id: 'people', component: wrap(<PeopleSection />, 'people') }
];

export default {
  components: sections.map(s => s.component),
  ids: sections.map(s => s.id),
  showNavigation: sections.length > 1
};
