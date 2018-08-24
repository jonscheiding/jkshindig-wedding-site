import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

import { SECTION_IDS } from '../data/sections';

export default class NavigationMenu extends Component {
  render() {
    const Menu = styled(Scrollspy)`
      > li {
        display: inline-block;
        width: 25%;
        text-align: center;
        text-transform: uppercase;
      }

      position: sticky;
      top: 0;
      margin: 0;
    `;

    return (
      <Menu 
        items={['splash', ...SECTION_IDS]} 
        offset={-5}
        currentClassName='current' className='navigation'>
        <li style={{ display: 'none' }} />
        {SECTION_IDS.map(id => (
          <li><a href={`#${id}`}>{id}</a></li>
        ))}
      </Menu>
    );
  }
}