import { css } from 'styled-components';

const breakpoints = {
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920
};

const mixins = Object.keys(breakpoints).reduce(
  (m, label) => {
    const emSize = breakpoints[label] / 16;
    m[label] = (...args) => css`
      @media only screen and (min-width: ${emSize}em) {
        ${css(...args)}
      }
    `;
    return m;
  },
  {}
);

export default mixins;
