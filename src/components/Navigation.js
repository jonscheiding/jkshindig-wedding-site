import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import cx from 'classnames';
import styled from 'styled-components';
import { lighten, transparentize } from 'polished';

import { SECTION_NAMES } from './Sections';
import { Breakpoint } from '../styles/responsive';

const Menu = styled(Scrollspy)`
  background-color: ${p => 
    transparentize(0.4, lighten(0.1, p.theme['background-color']))};
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 2;
`;

const MenuItem = styled.li`
  font-size: 2rem;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;

  display: inline-block;
  width: ${ 100 / SECTION_NAMES.length }%;

  &.current { color: ${p => p.theme['highlight-color']}; }

  ${Breakpoint.smallest`
    :not(.next) { display: none; }
    width: 100%;

    .icon {
      font-family: 'Material Icons';
      text-transform: none;
      vertical-align: bottom;
    }
  `}

  ${Breakpoint.sm`
    .icon { display: none }
    &.top { display: none }
  `};
`;

class Navigation extends Component {
  constructor() { super();
    this.state = { 
      nextSection: SECTION_NAMES[0],
      atEnd: false
    };

    this.updateNextSection = this.updateNextSection.bind(this);
  }

  render() {
    return (
      <Menu items={['Stories', 'Event']}
        onUpdate={this.updateNextSection}
        currentClassName='current'>
        {SECTION_NAMES.map(name => (
          <MenuItem className={cx({next: name === this.state.nextSection})}>
            <a href={`#${name}`}>
              {name}
              <span className='icon'>keyboard_arrow_right</span>
            </a>
          </MenuItem>
        ))}
        <MenuItem className={cx({next: this.state.nextSection === null}, 'top')}>
          <a href='#top' className='icon'>keyboard_arrow_up</a>
        </MenuItem>
      </Menu>
    );
  }

  updateNextSection(e) {
    const currentSection = e ? e.id : undefined;
    const nextSection = this.determineNextSection(currentSection);

    if(this.state.nextSection === nextSection) { return; }

    this.setState({nextSection});
  }

  determineNextSection(currentSection) {
    if(!currentSection) {
      return SECTION_NAMES[0];
    }

    const nextSectionIndex = SECTION_NAMES.indexOf(currentSection) + 1;
    if(nextSectionIndex >= SECTION_NAMES.length) {
      return null;
    }

    return SECTION_NAMES[nextSectionIndex];
  }
}

export default Navigation;
