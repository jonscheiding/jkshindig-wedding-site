import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import sections from '../data/sections';

export default class NavigationMenu extends Component {
  render() {
    const sectionIds = sections.map(s => s.id);

    return (
      <Scrollspy 
        items={['splash', ...sectionIds]} 
        offset={-5}
        currentClassName='current' className='navigation'>
        <li style={{ display: 'none' }} />
        {sectionIds.map(id => (
          <li><a href={`#${id}`}>{id}</a></li>
        ))}
      </Scrollspy>
    );
  }
}