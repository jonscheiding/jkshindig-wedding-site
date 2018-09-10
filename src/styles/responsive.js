import { css } from 'styled-components';

import theme from '../theme.json';

const labels = ['sm', 'md', 'lg', 'xl'];

const Breakpoint = labels.reduce(
  (m, label) => {
    const size = theme[`breakpoint-${label}`];
    m[label] = (...args) => css`
      @media only screen and (min-width: ${size}) {
        ${css(...args)}
      }
    `;
    return m;
  },
  {}
);

export { Breakpoint };
