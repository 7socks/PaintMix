import React from 'react';
import api from '../util/api.js';

class BrowseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      list: []
    };
  }

  componentDidMount() {
    api.getAll()
      .then((data) => {
        this.setState({
          list: data
        });
      })
  }

  render() {
    let list = this.state.list.slice(this.state.page, this.state.page + 10);
    return (
      <ul>
        {list.map((bucket, i) => {
          return <li
            key={i}
            onClick={() => { this.props.select(bucket.id); }}
          >
            <span>{bucket.name}</span>
          </li>;
        })}
      </ul>
    )
  }
}

export default BrowseList;