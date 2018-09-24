import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';

import PortraitImage from '../PortraitImage';
import FitText from '../FitText';
import Separator from '../Separator';
import ProfileIcons from '../ProfileIcons';
import { ALL_SIZES } from '../../responsive-styles';

class Gifts extends Component {
  constructor() { super();
    this.renderRegistry = this.renderRegistry.bind(this);
    this.renderRegistryLink = this.renderRegistryLink.bind(this);
  }

  render() {
    const { registries } = this.props.content;

    return (
      <div>
        {registries.map(this.renderRegistry)}
      </div>
    );
  }

  renderRegistry(registry, i) {
    return (
      <div key={registry.title}>
        <Separator small flip={i % 2 === 1} />
        <Row>
          <Col xs4={4} xs8={6} xs8Offset={1} md={6} mdOffset={3}>
            <p>
              {registry.comments}
            </p>
          </Col>
        </Row>
        <Row center={ALL_SIZES}>
          {registry.links.map((r, i) => this.renderRegistryLink(r, i))}
        </Row>
      </div>
    );
  }

  renderRegistryLink(registryLink, i) {
    const { image, url, comments, title } = registryLink;

    return (
      <Col key={i} xs4={4} sm8={4} md={4} lg={3}>
        <PortraitImage image={image} half />
        <div>
          <h4>
            <FitText>
              {title}
            </FitText>
          </h4>
          <h5>
            <ProfileIcons website={url} />
          </h5>
          <p>{comments}</p>
        </div>
      </Col>
    );
  }
}

Gifts.title = 'Gifts';

const SHAPE_REGISTRYLINK = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  comments: PropTypes.string
};

const SHAPE_REGISTRY = {
  title: PropTypes.string.isRequired,
  comments: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape(SHAPE_REGISTRYLINK))
};

const SHAPE_CONTENT = {
  registries: PropTypes.arrayOf(PropTypes.shape(SHAPE_REGISTRY))
};

Gifts.propTypes = { content: PropTypes.shape(SHAPE_CONTENT) };

export default Gifts;