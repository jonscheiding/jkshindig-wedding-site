import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';
import styled from 'styled-components';

export default class NavigationMenu extends Component {
  render() {
    const { sections } = this.props;
    const { ids, showNavigation } = sections;

    if(!showNavigation) {
      return null;
    }

    const MenuItem = styled.li`
      width: ${100 / ids.length}%;
    `;

    return (
      <Scrollspy 
        items={['splash', ...ids]} 
        offset={-5}
        currentClassName='current' className='navigation'>
        <li style={{ display: 'none' }} />
        {ids.map(id => (
          <MenuItem><a href={`#${id}`}>{id}</a></MenuItem>
        ))}
      </Scrollspy>
    );
  }
};

NavigationMenu.propTypes = {
  sections: PropTypes.object
};
