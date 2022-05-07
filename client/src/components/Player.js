import React from 'react';
import styled from 'styled-components';
import { mixColor, randomMix, colorScore } from '../util/color.js';

import Bucket from './Bucket.js';
import Selector from './Selector.js';

const Swatch = styled.div`
  height: 1.5em;
  width: 5.2em;
  border: 2px solid #505050;
  background: ${({ hex }) => { return hex; }};
`;

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      view: 'menu',
      color: 'cyan',
      solution: {},
      qty: 2,
      c: 0,
      m: 0,
      y: 0
    };

    this.play = this.play.bind(this);
    this.change = this.change.bind(this);
    this.addDrop = this.addDrop.bind(this);
    this.selectColor = this.selectColor.bind(this);
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  play(e) {
    e.preventDefault();
    this.setState({
      view: 'play',
      solution: randomMix(this.state.qty)
    });
  }

  addDrop() {
    var drops = this.state.c + this.state.m + this.state.y + 1;
    var color = this.state.color.slice(0, 1);
    this.setState({
      [color]: this.state[color] + 1,
      view: drops === this.state.qty ? 'end' : 'play'
    });
  };

  selectColor(e) {
    this.setState({
      color: e.target.value
    });
  }

  render() {
    if (this.state.view === 'menu') {
      return (
        <div className="page player game-menu">
          <form className="dialog">
            <div className="dialog-header">Game Settings</div>
            <label htmlFor="qty"> Number of drops<br/>
            <input type="number"
              id="qty"
              name="qty"
              value={this.state.qty}
              onChange={this.change}
            />
            </label>
            <button name="play" onClick={this.play}>Start</button>
          </form>
        </div>
      );
    } else if (this.state.view === 'play') {
      let drops = this.state.c + this.state.m + this.state.y;
      let bucket = {
        c: this.state.c,
        m: this.state.m,
        y: this.state.y
      };
      return (
        <div className="page player game-play">
          <div className="sidebar gamebar">
            <h2>Your Bucket</h2>
            <div className="gb-drops">
              <span>Drops</span>
              <span>{drops} of {this.state.qty}</span>
            </div>
            <div>Target color</div>
            <Swatch hex={mixColor(this.state.solution)} />
          </div>
          <Bucket bucket={bucket} addDrop={this.addDrop} />
          <Selector color={this.state.color} select={this.selectColor} />
        </div>
      );
    } else if (this.state.view === 'end') {
      let bucket = {
        c: this.state.c,
        m: this.state.m,
        y: this.state.y
      };
      return (
        <div className="page player game-end">
          <div className="dialog">
            <div className="dialog-header">Your Score</div>
            <div>{colorScore(this.state.solution, bucket)} of {this.state.qty} points</div>
            <div>insert % proximity to target here :)</div>
            <div className="compare-swatches">
              <div className="swatch">
                <div>Target color</div>
                <Swatch hex={mixColor(this.state.solution)} />
                <div className="hexbox"><input type="text" value={mixColor(this.state.solution)} onFocus={(e) => { e.target.select(); }} readOnly /></div>
              </div>
              <div className="swatch">
                <div>Your color</div>
                <Swatch hex={mixColor(bucket)} />
                <div className="hexbox"><input type="text" value={mixColor(bucket)} onFocus={(e) => { e.target.select(); }} readOnly /></div>
              </div>
            </div>
            <div className="game-end-nav">
              <button onClick={this.play}>Play Again</button>
              <button>Settings</button>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Player;