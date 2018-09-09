import React, { Component } from 'react';

import Splash from './components/Splash';
import content from './content.json';

content.date = new Date(Date.parse(content.date));

class App extends Component {
  render() {
    const { location, date, spouses } = content;

    return (
      <Splash 
        location={location} date={date} 
        names={spouses.map(s => s.name.first)} />
    );
  }
}

export default App;