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
      bucket: {
        name: 'all',
        c: 0,
        m: 0,
        y: 0
      }
    };

    this.selectColor = this.selectColor.bind(this);
    this.addDrop = this.addDrop.bind(this);
  }

  componentDidMount() {
    api.get('62717e86c2bd1f47fa7eaa06')
      .then((bucket) => {
        this.setState({bucket: bucket})
      })
      .catch((err) => console.error(err));
  }

  addDrop(e) {
    api.put(this.state.bucket.id, this.state.color)
      .then((bucket) => {
        console.log(bucket);
        this.setState({bucket: bucket});
      });
  }

  selectColor(e) {
    this.setState({
      color: e.target.value
    });
  }

  render() {
    return (
      <div className="main">
        <Nav/>
        <Bucket bucket={this.state.bucket} addDrop={this.addDrop}/>
        <Selector color={this.state.color} select={this.selectColor} />
      </div>
    );
  }
}

export default App;