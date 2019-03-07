import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Splash from './components/Splash';
import NoContent from './NoContent';
import Navigation, { MENU_HEIGHT } from './components/Navigation';
import Sections from './components/Sections';
import styled from 'styled-components';
import Attributions from './components/Attributions';

const AppContainer = styled.div`
  margin-bottom: ${ MENU_HEIGHT };
`;

class App extends Component {
  render() {
    if(!this.props.content) {
      return <NoContent />;
    }

    const { content } = this.props;
    const { mainEvent, spouses, splash } = content;
    const { location, date } = mainEvent;

    return (
      <AppContainer className='app'>
        <Splash 
          venue={location} date={date} 
          names={spouses.map(s => s.firstName)}
          splash={splash} />
        <Navigation />
        <Sections content={content} />
        <Attributions attributions={content.attributions} />
      </AppContainer>
    );
  }
}

App.propTypes = {
  content: PropTypes.object.isRequired
};

export default App;