import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

export default class NavigationMenu extends Component {
  render() {
    const Menu = styled(Scrollspy)`
      > li {
        display: inline-block;
        width: 25%;
        text-align: center;
      }

      position: sticky;
      top: 0;
      margin: 0;
    `;

    return (
      <Menu 
        items={['splash', 'people', 'event', 'gifts', 'rsvp']} 
        offset={-5}
        currentClassName='current' className='navigation'>
        <li style={{ display: 'none' }} />
        <li><a href='#people'>PEOPLE</a></li>
        <li><a href='#event'>EVENT</a></li>
        <li><a href='#gifts'>GIFTS</a></li>
        <li><a href='#rsvp'>RSVP</a></li>
      </Menu>
    );
  }
}