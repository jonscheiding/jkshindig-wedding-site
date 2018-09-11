import PropTypes from 'prop-types';
import styled from 'styled-components';

const BackgroundImage = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  background-size: ${props => props.contain ? 'contain' : 'cover'};
  background-position: center;

  /* ${props => props.style} */
`;

BackgroundImage.propTypes = {
  image: PropTypes.string.isRequired
};

export default BackgroundImage;
