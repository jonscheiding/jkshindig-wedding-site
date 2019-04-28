import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-material-responsive-grid';

import BackgroundImage from '../BackgroundImage';
import Square from '../Square';

class Photos extends Component {
  render() {
    const { photos } = this.props.content;

    if(!photos) {
      return null;
    }

    return (
      <div>
        <p>{photos.summary}</p>
        <Row>
          {photos.galleries.map((p, i) => (
            <Col key={i} xs4={4} sm4={4} sm8={4} sm8Offset={2} lg={4} lgOffset={0}>
              {this.renderPhotoGallery(p)}
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  renderPhotoGallery(gallery) {
    return (
      <div>
        <a href={gallery.url} target='_blank' rel='noopener noreferrer'>
          <h4>{gallery.title}</h4>
          <Square aspect={1.777}>
            <BackgroundImage image={gallery.coverImage} />
          </Square>
        </a>
        <p>
          {gallery.description}
        </p>
      </div>
    );
  }
}

const SHAPE_GALLERY = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  coverImage: PropTypes.string.isRequired
};

const SHAPE_PHOTOS = {
  summary: PropTypes.string,
  galleries: PropTypes.arrayOf(PropTypes.shape(SHAPE_GALLERY)).isRequired
};

const SHAPE_CONTENT = {
  photos: PropTypes.shape(SHAPE_PHOTOS)
};

Photos.propTypes = {
  content: PropTypes.shape(SHAPE_CONTENT)
};

Photos.title = 'Photos';

export default Photos;
