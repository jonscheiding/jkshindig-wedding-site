import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Splash from './components/Splash';
import Navigation, { MENU_HEIGHT } from './components/Navigation';
import Sections from './components/Sections';
import styled from 'styled-components';
import Attributions from './components/Attributions';

const AppContainer = styled.div`
  margin-bottom: ${ MENU_HEIGHT };
`;

class App extends Component {
  render() {
    const { content } = this.props;
    const { venue, date, spouses, splash } = content;

    return (
      <AppContainer className='app'>
        <Splash 
          venue={venue} date={date} 
          names={spouses.map(s => s.firstName)}
          splash={splash} />
        <Navigation />
        <Sections content={content} />
        <Attributions attributions={content.attributions} />
      </AppContainer>
    );
  }

  componentDidMount() {
    const nicknames = this.props.content.spouses.map(s => s.nickname);
    document.title = `${nicknames[0]} and ${nicknames[1]}`;
  }
}

App.propTypes = {
  content: PropTypes.object.isRequired
};

export default App;