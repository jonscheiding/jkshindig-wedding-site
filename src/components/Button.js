import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { lighten, darken, transparentize } from 'polished';

const Button = styled.span`
  background-color: ${p => 
    transparentize(0.0, lighten(0.1, p.theme['background-color']))
  };
  margin: 0.35em;
  padding: 0.25em;
  display: inline-block;
  box-shadow: 0.1em 0.1em 1em -0.15em ${p => 
    darken(0.1, p.theme['background-color'])};
`;

const LinkButton = ({children, external, ...props}) => {
  if(external && !props.target) {
    props.target = '_blank';
  }
  return (<Button><a {...props}>{children}</a></Button>);
};

LinkButton.propTypes = {
  external: PropTypes.bool
};

export default Button;
export { LinkButton };
