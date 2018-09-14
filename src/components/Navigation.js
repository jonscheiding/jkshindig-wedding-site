import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import cx from 'classnames';
import styled from 'styled-components';

import { SECTION_NAMES } from './Sections';

class Navigation extends Component {
  constructor() { super();
    this.state = { 
      nextSection: SECTION_NAMES[0],
      atEnd: false
    };

    this.updateNextSection = this.updateNextSection.bind(this);
  }

  render() {
    const Menu = styled(Scrollspy)`
      background: ${props => props.theme['background-color']};
      position: fixed;
      width: 100%;
      bottom: 0;
      z-index: 2;
    `;

    const MenuItem = styled.li`
      display: none;

      &.next {
        display: inline-block;
        width: 100%;

        a {
          
          &::after {
            content: '➡';
            padding-left: 0.5em;
          }

          &.return::after {
            content: '⬆'
          }
        }
      }
    `;

    return (
      <Menu items={['Stories', 'Event']}
        onUpdate={this.updateNextSection}
        currentClassName='current'>
        {SECTION_NAMES.map(name => (
          <MenuItem className={cx({next: name === this.state.nextSection})}>
            <h5>
              <a href={`#${name}`}>{name}</a>
            </h5>
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
