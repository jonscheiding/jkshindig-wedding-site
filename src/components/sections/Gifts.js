import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Row, Col } from 'react-material-responsive-grid';

import PortraitImage from '../PortraitImage';
import FitText from '../FitText';
import Separator from '../Separator';
import { Breakpoint } from '../../styles/responsive';
import ProfileIcons from '../ProfileIcons';

const CenteredRow = styled(Row)` 
  ${Breakpoint.md`justify-content: center;`} 
`;

const Md3Col = styled(Col)`
  ${Breakpoint.md`
    &.col-xs4-4 { 
      flex-basis: 33%;
    }
  `}

  .react-parallax {
    .react-parallax-bgimage {
      filter: blur(2px);
    }
  }
`;

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
          <Col xs4={4} xs8={4} xs8Offset={2} md={6} mdOffset={3}>
            <p>
              {registry.comments}
            </p>
          </Col>
        </Row>
        <CenteredRow>
          {registry.links.map(this.renderRegistryLink)}
        </CenteredRow>
      </div>
    );
  }

  renderRegistryLink(registryLink) {
    return (
      <Md3Col key={registryLink.title} xs4={4} sm8={4} sm8Offset={2} mdOffset={0}>
        <PortraitImage image={registryLink.image} />
        <div>
          <h4>
            <FitText>
              {registryLink.title}
            </FitText>
          </h4>
          <h5>
            <ProfileIcons website={registryLink.url} />
          </h5>
          <p>{registryLink.comments}</p>
        </div>
      </Md3Col>
    );
  }
}

Gifts.title = 'Gifts';

Gifts.propTypes = {
  content: PropTypes.shape({
    registries: PropTypes.any
  })
};

export default Gifts;