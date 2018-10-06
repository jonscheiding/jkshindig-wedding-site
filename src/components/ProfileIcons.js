import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DirectionsIcon from '@material-ui/icons/Directions';
import OpenInBrowserIcon from '@material-ui/icons/OpenInBrowser';
import PhoneIcon from '@material-ui/icons/Phone';

import { LinkButton } from './Button';
import styled from 'styled-components';

class ProfileIcons extends Component {
  createMapUrl(location) {
    const { name, streetAddress, city, state, zipCode } = location;
    const mapQuery = `${name}, ${streetAddress}, ${city}, ${state}, ${zipCode}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`;
  }

  render() {
    const Wrapper = styled.div`
      font-size: 1.2em;
      text-align: center;
    `;

    return (
      <Wrapper>
        {this.renderMapsButton()}
        {this.renderPhoneButton()}
        {this.renderWebsiteButton()}
      </Wrapper>
    );
  }

  renderMapsButton() {
    const { location } = this.props;
    if(location === undefined) { return null; }

    return this.renderButton(DirectionsIcon, this.createMapUrl(location));
  }

  renderPhoneButton() {
    const { phoneNumber } = this.props;
    if(phoneNumber === undefined) { return null; }

    return this.renderButton(PhoneIcon, `tel:${phoneNumber}`);
  }

  renderWebsiteButton() {
    const { website } = this.props;
    if(website === undefined) { return null; }

    return this.renderButton(OpenInBrowserIcon, website);
  }

  renderButton(IconComponent, url) {
    return (
      <LinkButton href={url} external>
        <IconComponent className='icon' />
      </LinkButton>
    );
  }
}

ProfileIcons.propTypes = {
  website: PropTypes.string,
  phoneNumber: PropTypes.string,
  location: PropTypes.shape({
    name: PropTypes.string,
    streetAddress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zipCode: PropTypes.string.isRequired
  })
};

export default ProfileIcons;