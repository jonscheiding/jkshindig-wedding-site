import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Outer = styled.div`
  width: '100%';
  position: relative;
    
  &:before {
    content: "";
    display: block;
    padding-top: ${p => 100 / p.aspect}%;
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Square = ({children, ...props}) => (
  <Outer {...props}>
    <Inner>{children}</Inner>
  </Outer>
);

Square.propTypes = {
  aspect: PropTypes.number,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
};

Square.defaultProps = {
  aspect: 1
};

export default Square;
