import React from 'react';
import { Grid } from 'react-material-responsive-grid';

import { PropTypesContent } from '../PropTypesCustom';
import Stories from './sections/Stories';

const sections = [
  Stories
];

const Sections = ({content}) => (
  <Grid fixed='center'>
    {sections.map(SectionComponent => 
      <section key={SectionComponent.name}>
        <SectionComponent content={content} />
      </section>
    )}
  </Grid>
);

Sections.propTypes = {
  content: PropTypesContent.content
};

export default Sections;
