import React, { Component } from 'react';

import Splash from './components/Splash';
import NavigationMenu from './components/NavigationMenu';
import sections from './data/sections';
import content from './data/content';

class App extends Component {
  render() {
    return (
      <div>
        <Splash content={content} showNavigation={sections.showNavigation} />
        <NavigationMenu sections={sections} />
        {this.renderContents()}
      </div>
    );
  }

  renderContents() {
    if(sections.components.length === 0) {
      return null;
    }

    return (
      <div>
        <div className='large-flourish' />
        <div className='sections'>
          {sections.components.map(c =>
            <section id={c.id}><c.component /></section>
          )}
          <div style={{height: '1000px'}} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const names = content.spouses.map(s => s.name.first);
    document.title = `${names[0]} and ${names[1]}`;
  }
}

export default App;