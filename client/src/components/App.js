import React from 'react';
import api from '../util/api.js';

import Nav from './Nav.js';
import Sidebar from './Sidebar.js';
import Bucket from './Bucket.js';
import Selector from './Selector.js';
import Creator from './Creator.js';
import BrowseList from './BrowseList.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'bucket', // change later when 'home' bucket is implemented
      color: 'cyan',
      bucket: {
        createdAt: Date.now(),
        name: 'all',
        c: 0,
        m: 0,
        y: 0
      },
      list: []
    };

    this.selectColor = this.selectColor.bind(this);
    this.addDrop = this.addDrop.bind(this);
    this.setView = this.setView.bind(this);
    this.createBucket = this.createBucket.bind(this);
    this.selectBucket = this.selectBucket.bind(this);
  }

  componentDidMount() {
    api.get('62717e86c2bd1f47fa7eaa06') // change to 'all' later
      .then((bucket) => {
        this.setState({bucket: bucket})
      })
      .catch((err) => console.error(err));
  }

  addDrop(e) {
    api.put(this.state.bucket.id, this.state.color)
      .then((bucket) => {
        this.setState({bucket: bucket});
      });
  }

  selectColor(e) {
    this.setState({
      color: e.target.value
    });
  }

  setView(e) {
    this.setState({
      view: e.target.name
    });
  }

  createBucket(data) {
    api.post(data)
      .then((bucket) => {
        this.setState({
          view: 'bucket',
          bucket: bucket
        });
      });
  }

  selectBucket(id) {
    api.get(id)
      .then((bucket) => {
        this.setState({
          view: 'bucket',
          bucket: bucket
        });
      });
  }

  render() {
    let page;
    if (this.state.view === 'home') {
      page = <div className="page">
        <Bucket bucket={this.state.bucket}/>
        </div>
    } else if (this.state.view === 'bucket') {
      page = <div className="page">
        <Sidebar bucket={this.state.bucket}/>
        <Bucket bucket={this.state.bucket} addDrop={this.addDrop}/>
        <Selector color={this.state.color} select={this.selectColor} />
      </div>
    } else if (this.state.view === 'browse') {
      page = <div className="page browse">
        <BrowseList list={this.state.list} select={this.selectBucket}/>
      </div>;
    } else if (this.state.view === 'create') {
      page = <div className="page creator">
        <Creator submit={this.createBucket}/>
      </div>;
    }

    return (
      <div className="main">
        <Nav setView={this.setView} view={this.state.view}/>
        {page}
      </div>
    );
  }
}

export default App;