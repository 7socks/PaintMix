import React from 'react';
import { ImDroplet } from 'react-icons/im';

class Creator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      color: 'cyan',
    };

    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    if (this.state.name.length > 0) {
      this.props.submit(this.state);
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Bucket name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.change} />
        <div>Choose a starting color</div>

        <div className="sc-creator">
          <label className="sel-label" htmlFor="cyan">
            <input type="radio" name="color" value="cyan" id="cyan"
              onChange={this.change}
              defaultChecked={true}
            /><span className="selector sel-cyan"><ImDroplet /></span>
          </label>
          <label className="sel-label" htmlFor="magenta">
            <input type="radio" name="color" value="magenta" id="magenta"
              onChange={this.change}
            /><span className="selector sel-magenta"><ImDroplet /></span>
          </label>
          <label className="sel-label" htmlFor="yellow">
            <input type="radio" name="color" value="yellow" id="yellow"
              onChange={this.change}
            /><span className="selector sel-yellow"><ImDroplet /></span>
          </label>
        </div>

        <button onClick={this.submit}>Create Bucket</button>
      </form>
    )
  }
}

export default Creator;