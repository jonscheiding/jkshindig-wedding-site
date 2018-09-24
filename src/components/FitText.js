import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Breakpoint } from '../responsive-styles';

function calcFontSize({children, breakpoint, scale}) {
  const size = 100 - (scale * Math.floor(children.length / breakpoint));
  return `${size}%`;
}

const FitText = styled.div`
  ${Breakpoint.sm`
    font-size: ${ p => calcFontSize(p) }
    min-height: 2.5rem;
  `};
`;

FitText.propTypes = {
  children: PropTypes.string,
  breakpoint: PropTypes.number,
  scale: PropTypes.number
};

FitText.defaultProps = {
  breakpoint: 10,
  scale: 12
};

export default FitText;
