import React, { Component } from 'react';
import { Row, Col } from 'react-material-responsive-grid';

import BackgroundImage from '../BackgroundImage';
import Square from '../Square';
import styled from 'styled-components';

const PaddedRow = styled(Row)`
  /* margin-top: 1rem;
  margin-bottom: 1rem; */
`;

class Photos extends Component {
  render() {
    const { photoGalleries } = this.props.content;
    return (
      <PaddedRow>
        {photoGalleries.map(p => (
          <Col xs4={4} lg={4}>
            {this.renderPhotoGallery(p)}
          </Col>
        ))}
      </PaddedRow>
    );
  }

  renderPhotoGallery(gallery) {
    console.log(gallery);
    return (
      <div>
        <a href={gallery.url} target='_blank'>
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
