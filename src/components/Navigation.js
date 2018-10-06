import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import cx from 'classnames';
import styled, { css } from 'styled-components';
import { lighten, transparentize } from 'polished';
import URL from 'url';

import { SECTION_NAMES } from './Sections';
import { Breakpoint } from '../responsive-styles';

export const MENU_HEIGHT = '2.65rem';

const Menu = styled(Scrollspy)`
  background-color: ${p => 
    transparentize(0.4, lighten(0.1, p.theme['background-color']))};
  position: fixed;
  width: 100%;
  height: ${ MENU_HEIGHT };
  bottom: 0;
  z-index: 2;
`;

const MenuItem = styled.li`
  font-size: 2rem;
  padding: 5px;
  text-align: center;
  text-transform: uppercase;

  display: inline-block;

  &.current { color: ${p => p.theme['highlight-color']}; }

  :not(.next) { display: none; }
  width: 100%;

  ${() => {
    if(SECTION_NAMES.length === 1) { return null; }

    return css`
      ${Breakpoint.sm`
        width: ${ 100 / SECTION_NAMES.length }%;
        :not(.next) { display: inline-block; }

        .icon { display: none }
        &.top { display: none }
      `};
    `;
  }}
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
    if(SECTION_NAMES.length === 0) {
      return null;
    }
    
    return (
      <Menu items={SECTION_NAMES}
        onUpdate={this.updateNextSection}
        currentClassName='current'>
        {SECTION_NAMES.map(name => (
          <MenuItem key={name} className={cx({next: name === this.state.nextSection})}>
            <a onClick={() => this.navigateTo(name)}>
              {name}
              <KeyboardArrowRightIcon className='icon' />
            </a>
          </MenuItem>
        ))}
        <MenuItem className={cx('top', { 'next': this.state.nextSection === null })}>
          <a onClick={this.navigateToTop}><KeyboardArrowUpIcon className='icon' /></a>
        </MenuItem>
      </Menu>
    );
  }

  navigateTo = (section) => {
    if(!section) {
      this.navigateToTop();
      return;
    }

    section = SECTION_NAMES.find(
      s => s.toUpperCase() === section.toUpperCase()
    )
    
    this.updateUrl(section);
    document.getElementById(section).scrollIntoView();
  }

  navigateToTop = () => {
    this.updateUrl(null);
    window.scrollTo(0, 0);
  }

  updateNextSection(e) {
    const currentSection = e ? e.id : undefined;
    const nextSection = this.determineNextSection(currentSection);

    this.updateUrl(currentSection);

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

  componentDidMount() {
    var currentUrl = URL.parse(window.location.href);
    var section = currentUrl.path.replace(/^\//, '');
    this.navigateTo(section);
  }

  updateUrl(section) {
    if(!window.history.pushState) {
      return;
    }

    window.history.pushState(null, null, `/${section || ''}`);
  }
}

export default Navigation;
