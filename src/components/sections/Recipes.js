import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-material-responsive-grid';

import ProfileIcons from '../ProfileIcons';
import { Breakpoint } from '../../responsive-styles';
import Separator from '../Separator';

const Narrower = styled.div`
  width: 100%;
  margin: auto;
  
  ${Breakpoint.sm`
    width: 70%;
  `}

  ${Breakpoint.lg`
    width: 100%;
  `}
`;

const MdAndBelow = styled.div`
  ${Breakpoint.lg`
    display: none;
  `}
`;

class Recipes extends Component {
  render() {
    const { recipes } = this.props.content;

    if(!recipes) {
      return null;
    }

    return (
      <div>
        <p>{recipes.summary}</p>
        <Row>{
          recipes.recipes.map((r, i) => (
            <Col key={i} xs4={4} lg={4} lgOffset={0}>
              <MdAndBelow>
                <Separator small flip={i % 2 === 1} />
              </MdAndBelow>
              <Narrower>
                <h5>{r.name}</h5>
                <h6><ProfileIcons website={r.originalUrl} /></h6>
                <p className='smaller'>{r.notes}</p>
              </Narrower>
            </Col>
          ))
        }</Row>
      </div>
    );
  }
}

const SHAPE_LINK = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

const SHAPE_RECIPES = {
  summary: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(SHAPE_LINK)).isRequired
};

const SHAPE_CONTENT = {
  recipes: PropTypes.shape(SHAPE_RECIPES)
};

Recipes.propTypes = {
  content: PropTypes.shape(SHAPE_CONTENT)
};

Recipes.title = 'Recipes';

export default Recipes;