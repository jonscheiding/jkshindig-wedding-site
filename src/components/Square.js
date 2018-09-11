import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { PropTypesEx } from '../PropTypesCustom';

const Outer = styled.div`
  width: ${({size}) => size || '100%'};
  position: relative;
    
  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Square = ({children, size, className}) => (
  <Outer size={size} className={className}>
    <Inner>{children}</Inner>
  </Outer>
);

Square.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  children: PropTypesEx.children
};

export default Square;
