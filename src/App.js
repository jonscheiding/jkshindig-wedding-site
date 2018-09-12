import React, { Component } from 'react';

import Splash from './components/Splash';
import content from './content.json';

content.date = new Date(Date.parse(content.date));

class App extends Component {
  render() {
    const { location, date, spouses } = content;

    const style = { height: process.env.REACT_APP_HACK_HEIGHT ? '10000px' : 'auto' };

    return (
      <div style={style}>
        <Splash 
          location={location} date={date} 
          names={spouses.map(s => s.name)} />
      </div>
    );
  }

  componentDidMount() {
    const nicknames = content.spouses.map(s => s.nickname);
    document.title = `${nicknames[0]} and ${nicknames[1]}`;
  }
}

export default App;
