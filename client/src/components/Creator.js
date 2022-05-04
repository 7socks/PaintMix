import React from 'react';

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

  }

  render() {
    return (
      <form>
        <label htmlFor="name">Bucket name</label>
        <input type="text" name="name" value={this.state.name} onChange={this.change}/>
        <label htmlFor="color">Choose a starting color</label>
        <input type="radio" name="color" value="cyan" className="selector sel-cyan" defaultChecked={true}/>
        <input type="radio" name="color" value="magenta" className="selector sel-magenta"/>
        <input type="radio" name="color" value="yellow" className="selector sel-yellow"/>
        <button onClick={this.submit}>Create Bucket</button>
      </form>
    )
  }
}

export default Creator;