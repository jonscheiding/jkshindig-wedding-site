import React from 'react';

const Banner = (props) => (
  <div style={{height: '100vh', width: '100vw', display: 'table'}}>
    <div style={{height: '100vh', display: 'table-cell', verticalAlign: 'middle'}}>
      {props.children}
    </div>
  </div>
);

export default () => {
  const link = `http://app.contentful.com/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`;

  return (
    <Banner>
      <h3>There's nothing here yet!</h3>
      <h5><p>Go to <u><a href={link} target='_blank'>Contentful</a></u> to get started.</p></h5>
    </Banner>
  );
};
