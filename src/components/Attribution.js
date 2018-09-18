import React from 'react';
import { lighten, darken, transparentize } from 'polished';

import logoNetlify from '../assets/logo-netlify.svg';
import logoGithub from '../assets/logo-github.svg';
import logoContentful from '../assets/logo-contentful.svg';
import styled from 'styled-components';

const Attribution = styled.div`
  text-align: center;
  height: 4rem;
  margin-top: 4rem;
  background-color: ${p => transparentize(0.75, darken(0.1, p.theme['foreground-color']))};

  > img {
    height: 2rem;
    width: auto;
    margin: 1rem;
    box-sizing: content-box;
  }
`;

export default () => (
  <Attribution>
    <img src={logoNetlify} />
    <img src={logoGithub} />
    <img src={logoContentful} />
  </Attribution>
);
