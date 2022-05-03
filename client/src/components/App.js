import React from 'react';
import axios from 'axios';

import Nav from './Nav.js';
import Bucket from './Bucket.js';
import Selector from './Selector.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'cyan',
      bucket: {}
    };
  }

  selectColor() {
    //this.setState();
  }

  render() {
    return (
      <div className="main">
        <Nav/>
        <Bucket bucket={this.state.bucket}/>
        <Selector color={this.state.color} select={this.selectColor} />
      </div>
    );
  }
}

export default App;