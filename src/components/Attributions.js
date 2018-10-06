import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Attribution = styled.div`
  text-align: center;
  height: 4rem;
  margin-top: 4rem;

  img {
    height: 2rem;
    width: auto;
    margin: 1rem;
    box-sizing: content-box;
  }
`;

const Attributions = ({attributions}) => (
  <Attribution>
    {attributions.map(a => (
      <a href={a.url} title={a.title} key={a.title} target='_blank'>
        <img src={a.icon} alt={a.title} />
      </a>
    ))}
  </Attribution>
);

Attributions.propTypes = {
  attributions: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string,
      icon: PropTypes.string.isRequired
    })
  )
};

export default Attributions;