import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { ThemeProvider } from 'styled-components';

import Splash from './components/Splash';
import content from './content.json';
import theme from './theme.json';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

content.date = new Date(Date.parse(content.date));

class App extends Component {
  render() {
    const { location, date, spouses } = content;

    const style = { height: process.env.REACT_APP_HACK_HEIGHT ? '10000px' : 'auto' };

    return (
      <ThemeProvider theme={theme}>
        <div style={style}>
          <Splash 
            location={location} date={date} 
            names={spouses.map(s => s.name.first)} />
        </div>
      </ThemeProvider>
    );
  }

  componentDidMount() {
    const nicknames = content.spouses.map(s => s.nickname);
    document.title = `${nicknames[0]} and ${nicknames[1]}`;
  }
}

export default App;