import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Breakpoint } from '../styles/responsive';

function calcFontSize(text, breakpoint, factor) {
  const size = 100 - (factor * Math.floor(text.length / breakpoint));
  return `${size}%`;
}

const FitText = styled.div`
  ${Breakpoint.sm`
    font-size: ${ p => calcFontSize(p.children, 10, 12) }
    min-height: 2rem;
  `};
`;

FitText.propTypes = {
  children: PropTypes.string
};

export default FitText;
