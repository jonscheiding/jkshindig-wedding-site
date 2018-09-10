import React from 'react';
import { Grid } from 'react-material-responsive-grid';
import styled from 'styled-components';

import PropTypesEx from '../PropTypesEx';

const sections = [];

const Section = styled.section`
  padding-top: 1rem;
`;

const Sections = ({content}) => (
  <Grid fixed='center'>
    {sections.map(SectionComponent => 
      <Section key={Section.name}>
        <SectionComponent content={content} />
      </Section>
    )}
  </Grid>
);

Sections.propTypes = {
  content: PropTypesEx.content
};

export default Sections;
