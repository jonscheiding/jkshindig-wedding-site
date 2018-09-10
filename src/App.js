import React, { Component } from 'react';
import ReactGA from 'react-ga';

import Splash from './components/Splash';
import content from './content.json';

ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

content.date = new Date(Date.parse(content.date));

class App extends Component {
  render() {
    const { location, date, spouses } = content;

    const style = { height: process.env.REACT_APP_HACK_HEIGHT ? '10000px' : 'auto' };

    return (
      <div style={style}>
        <Splash 
          location={location} date={date} 
          names={spouses.map(s => s.name.first)} />
      </div>
    );
  }

  componentDidMount() {
    const nicknames = content.spouses.map(s => s.nickname);
    document.title = `${nicknames[0]} and ${nicknames[1]}`;
  }
}

export default App;