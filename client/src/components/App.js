import React from 'react';
import api from '../util/api.js';

import Nav from './Nav.js';
import Bucket from './Bucket.js';
import Selector from './Selector.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'cyan',
      bucket: api.get('62717e86c2bd1f47fa7eaa06')
    };

    this.selectColor = this.selectColor.bind(this);
  }

  componentDidMount() {
    // this.get('')
    //   .then((bucket) => {
    //     this.setState({bucket: bucket})
    //   })
    //   .catch((err) => console.error(err));
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