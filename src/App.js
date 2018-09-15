import React, { Component } from 'react';

import { PropTypesContent } from './PropTypesCustom';
import Splash from './components/Splash';
import Navigation from './components/Navigation';
import Sections from './components/Sections';

class App extends Component {
  render() {
    const { content } = this.props;
    const { location, date, spouses } = content;

    return (
      <div className='app'>
        <Splash 
          location={location} date={date} 
          names={spouses.map(s => s.name.first)} />
        <Navigation />
        <Sections content={content} />
      </div>
    );
  }

  componentDidMount() {
    const nicknames = this.props.content.spouses.map(s => s.nickname);
    document.title = `${nicknames[0]} and ${nicknames[1]}`;
  }
}

App.propTypes = {
  content: PropTypesContent.content.isRequired
};

export default App;