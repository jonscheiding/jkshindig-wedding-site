import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';

import sections from '../data/sections';

export default class NavigationMenu extends Component {
  render() {
    const { ids, showNavigation } = sections;

    if(!showNavigation) {
      return null;
    }

    return (
      <Scrollspy 
        items={['splash', ...ids]} 
        offset={-5}
        currentClassName='current' className='navigation'>
        <li style={{ display: 'none' }} />
        {ids.map(id => (
          <li><a href={`#${id}`}>{id}</a></li>
        ))}
      </Scrollspy>
    );
  }
}