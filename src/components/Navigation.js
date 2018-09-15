import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import cx from 'classnames';
import styled from 'styled-components';
import { transparentize } from 'polished';

import { SECTION_NAMES } from './Sections';

const Menu = styled(Scrollspy)`
  background-color: ${props => 
    transparentize(0.4, props.theme['highlight-color'])};
  position: fixed;
  width: 100%;
  bottom: 0;
  z-index: 2;
`;

const MenuItem = styled.li`
  display: none;
  text-align: center;
  font-size: 2rem;
  padding: 5px;
  text-transform: uppercase;

  &.next {
    display: inline-block;
    width: 100%;

    a {
      .icon {
        font-family: 'Material Icons';
        text-transform: none;
        vertical-align: bottom;
      }
    }
  }
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
