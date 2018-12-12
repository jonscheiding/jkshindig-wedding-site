import PropTypes from 'prop-types';
import styled from 'styled-components';
import Textfit from 'react-textfit';

const FitText = styled(Textfit)`
  > div {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
`;

FitText.propTypes = {
  children: PropTypes.string
};

export default FitText;
