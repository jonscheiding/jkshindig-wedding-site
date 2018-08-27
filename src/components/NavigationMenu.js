import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Scrollspy from 'react-scrollspy';

export default class NavigationMenu extends Component {
  render() {
    const { sections } = this.props;
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
};

NavigationMenu.propTypes = {
  sections: PropTypes.object
};
