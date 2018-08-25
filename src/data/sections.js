import React from 'react';

import PeopleSection from '../components/PeopleSection';

const wrap = (element, id) => (<div id={id}>{element}</div>);

export default [
  { id: 'people', component: wrap(<PeopleSection />, 'people') }
];
