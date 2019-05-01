import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';
import ReactMarkdown from 'react-markdown/with-html';

import { CrowdRiseClient } from '../../crowdrise-client';

import BackgroundImage from '../BackgroundImage';
import FitText from '../FitText';
import Separator from '../Separator';
import ProfileIcons from '../ProfileIcons';
import { ALL_SIZES } from '../../responsive-styles';
import Square from '../Square';

export class RegistryLink extends Component {
  constructor(props) {
    super(props);
    this.state = { status: null };
  }

  componentDidMount() {
    const { scrapeCrowdRise, registryLink } = this.props;
    if(!scrapeCrowdRise) {
      return;
    }

    this.client = new CrowdRiseClient(registryLink.url);
    this.client.on('refresh', (status) => this.setState({status}));
  }

  componentWillUnmount() {
    if(!this.client) {
      return;
    }
    
    this.client.stop();
  }

  render() {
    const { registryLink } = this.props;
    const { image, url, comments, title } = registryLink;

    return (
      <Col xs4={4} sm8={4} md={4} lg={3}>
        <Square style={{ width: '50%', margin: 'auto' }} aspect={1.6}>
          <BackgroundImage image={image} />
        </Square>
        <div>
          <h4>
            <FitText className='header-height'>
              {title}
            </FitText>
          </h4>
          {this.renderCampaignStatus()}
          <h5>
            <ProfileIcons website={url} />
          </h5>
          <p className='smaller'>{comments}</p>
        </div>
      </Col>
    );
  }

  renderCampaignStatus() {
    const { status } = this.state;
    if(!status) {
      return null;
    }

    return (
      <p className='smaller'><b>{status.raised} raised</b></p>
    );
  }
}

class Gifts extends Component {
  constructor() { super();
    this.renderRegistry = this.renderRegistry.bind(this);
    this.renderRegistryLink = this.renderRegistryLink.bind(this);
  }

  render() {
    const { registries, mainEvent } = this.props.content;

    const isPostWedding = mainEvent.date.diffNow('days').days < 0;

    if(!registries) { return null; }

    let registriesToDisplay = registries;
    if(isPostWedding) {
      registriesToDisplay = registriesToDisplay.filter(
        r => r.displayPostWedding);
    }

    return (
      <div>
        {registriesToDisplay.map((r, i) => this.renderRegistry(r, i, isPostWedding))}
      </div>
    );
  }

  renderRegistry(registry, i, isPostWedding) {
    return (
      <div key={registry.title}>
        <Separator small flip={i % 2 === 1} />
        <Row>
          <Col xs4={4} xs8={6} xs8Offset={1} md={6} mdOffset={3}>
            <ReactMarkdown escapeHtml={false}
              source={isPostWedding ? registry.commentsPostWedding : registry.comments} />
          </Col>
        </Row>
        <Row center={ALL_SIZES}>
          {registry.links.map((r, i) => this.renderRegistryLink(r, registry.scrapeCrowdRise, i))}
        </Row>
      </div>
    );
  }

  renderRegistryLink(registryLink, scrapeCrowdRise, i) {
    return (<RegistryLink key={i} registryLink={registryLink} scrapeCrowdRise={scrapeCrowdRise} />);
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
  scrapeCrowdRise: PropTypes.bool,
  links: PropTypes.arrayOf(PropTypes.shape(SHAPE_REGISTRYLINK))
};

const SHAPE_CONTENT = {
  registries: PropTypes.arrayOf(PropTypes.shape(SHAPE_REGISTRY))
};

Gifts.propTypes = { content: PropTypes.shape(SHAPE_CONTENT) };
RegistryLink.propTypes = { 
  registryLink: PropTypes.shape(SHAPE_REGISTRYLINK),
  scrapeCrowdRise: PropTypes.bool
};

export default Gifts;