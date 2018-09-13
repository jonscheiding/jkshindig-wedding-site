import React from 'react';
import { Grid } from 'react-material-responsive-grid';

import { PropTypesContent } from '../PropTypesCustom';
import Separator from './Separator';
import Stories from './sections/Stories';
import Event from './sections/Event';

const sections = [
  Stories,
  Event
];

const Sections = ({content}) => (
  <Grid fixed='center'>
    {sections.map(SectionComponent => 
      <div>
        <Separator />
        <h1>{SectionComponent.name}</h1>
        <section key={SectionComponent.name}>
          <SectionComponent content={content} />
        </section>
      </div>
    )}
  </Grid>
);

Sections.propTypes = {
  content: PropTypesContent.content
};

export default Sections;
