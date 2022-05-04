import React from 'react';
import { ImDroplet } from 'react-icons/im';

const Selector = ({color, select}) => {
  return (
    <div className="selector-container">
      <div className="sel-header">Paint Color</div>
      <label className="sel-label" htmlFor="cyan">
      <input type="radio" name="color" value="cyan" id="cyan"
        onChange={select}
        defaultChecked={true}
      /><span className="selector sel-cyan"><ImDroplet/></span></label>
      <label className="sel-label" htmlFor="magenta">
      <input type="radio" name="color" value="magenta" id="magenta"
        onChange={select}
      /><span className="selector sel-magenta"><ImDroplet/></span></label>
      <label className="sel-label" htmlFor="yellow">
      <input type="radio" name="color" value="yellow" id="yellow"
        onChange={select}
      /><span className="selector sel-yellow"><ImDroplet/></span></label>
    </div>
  );
};

export default Selector;