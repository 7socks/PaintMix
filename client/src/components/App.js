import React from 'react';
import api from '../util/api.js';

import Nav from './Nav.js';
import Sidebar from './Sidebar.js';
import Bucket from './Bucket.js';
import Selector from './Selector.js';
import Creator from './Creator.js';
import Player from './Player.js';
import BrowseList from './BrowseList.js';
import SidebarHome from './SidebarHome.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'home',
      color: 'cyan',
      bucket: {
        id: null,
        createdAt: Date.now(),
        name: 'all',
        c: 0,
        m: 0,
        y: 0
      },
      info: {}
    };

    this.selectColor = this.selectColor.bind(this);
    this.addDrop = this.addDrop.bind(this);
    this.setView = this.setView.bind(this);
    this.createBucket = this.createBucket.bind(this);
    this.selectBucket = this.selectBucket.bind(this);
    this.getHome = this.getHome.bind(this);
    this.getRandom = this.getRandom.bind(this);
  }

  componentDidMount() {
    this.getHome();
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

  getRandom() {
    api.getRandom()
      .then((bucket) => {
        this.setState({
          view: 'bucket',
          bucket: bucket
        });
      });
  }

  getHome() {
    api.getHome()
      .then((data) => {
        this.setState({
          view: 'home',
          bucket: {
            id: null,
            createdAt: Date.now(),
            name: 'all',
            c: data.c,
            m: data.m,
            y: data.y
          },
          info: {
            qty: data.qty
          }
        });
      });
  }

  render() {
    let page;
    if (this.state.view === 'home') {
      page = <div className="page home">
        <SidebarHome bucket={this.state.bucket} info={this.state.info}/>
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
        <BrowseList select={this.selectBucket}/>
      </div>;
    } else if (this.state.view === 'create') {
      page = <div className="page creator">
        <Creator submit={this.createBucket}/>
      </div>;
    } else if (this.state.view === 'play') {
      page = <Player/>;
    }

    return (
      <div className="main">
        <Nav setView={this.setView} getHome={this.getHome} getRandom={this.getRandom}/>
        {page}
      </div>
    );
  }
}

export default App;