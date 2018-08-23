import React, { Component } from 'react';
import styled from 'styled-components';

export default class NavigationMenu extends Component {
  render() {
    const Menu = styled.ul`
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
      <Menu className='navigation'>
        <li>PEOPLE</li>
        <li>EVENT</li>
        <li>GIFTS</li>
        <li>RSVP</li>
      </Menu>
    );
  }
}