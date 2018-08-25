import React from 'react';

import StoriesSection from '../components/sections/StoriesSection';

const wrap = (element, id) => (<section id={id}>{element}</section>);

const sections = [
  { id: 'stories', component: wrap(<StoriesSection />, 'stories') }
];

export default {
  components: sections.map(s => s.component),
  ids: sections.map(s => s.id),
  showNavigation: sections.length > 1
};
