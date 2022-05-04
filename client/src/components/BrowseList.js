import React from 'react';
import api from '../util/api.js';

class BrowseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      list: []
    };

    this.select = this.select.bind(this);
  }

  componentDidMount() {
    api.getAll()
      .then((data) => {
        console.log(data);
        this.setState({
          list: data
        });
      })
  }

  select(bucket) {
    console.log(bucket);
  }

  render() {
    let list = this.state.list.slice(this.state.page, this.state.page + 10);
    return (
      <ul>
        {list.map((bucket, i) => {
          return <li
            key={i}
            onClick={() => { this.select(bucket); }}
          >{bucket.name}</li>;
        })}
      </ul>
    )
  }
}

export default BrowseList;