import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import styled from 'styled-components';

const VerticalCentered = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
          recipes.links.map((r, i) => (
            <Col key={i} xs4={2} xs4Offset={1} lg={4} lgOffset={0}>
              <VerticalCentered>
                <a href={r.url} target='_blank' rel='noopener noreferrer'>
                  <h5>{r.text}</h5>
                </a>
              </VerticalCentered>
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