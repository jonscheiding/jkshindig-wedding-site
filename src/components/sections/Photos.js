import React, { Component } from 'react';
import { Row, Col } from 'react-material-responsive-grid';

import BackgroundImage from '../BackgroundImage';
import Square from '../Square';

class Photos extends Component {
  render() {
    const { photos } = this.props.content;
    console.log(this.props.content);

    if(!photos) {
      return null;
    }

    return (
      <div>
        <p>{photos.summary}</p>
        <Row>
          {photos.galleries.map(p => (
            <Col xs4={4} sm4={4} sm8={4} sm8Offset={2} lg={4} lgOffset={0}>
              {this.renderPhotoGallery(p)}
            </Col>
          ))}
        </Row>
      </div>
    );
  }

  renderPhotoGallery(gallery) {
    console.log(gallery);
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

Photos.title = 'Photos';

export default Photos;
