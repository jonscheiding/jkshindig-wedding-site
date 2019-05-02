import React, { Component } from 'react';

import Gifts from './Gifts';

class Giving extends Component {
  render() {
    return <Gifts {...this.props} />;
  }
}

Giving.title = 'Giving';

export default Giving;