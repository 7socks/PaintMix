import React from 'react';

const Selector = ({color, select}) => {
  return (
    <div className="selector-container">
      <label>
      <input type="radio" name="color" value="cyan"
        className="selector sel-cyan"
        onChange={select}
        defaultChecked={true}
      />cyan</label>
      <label>
      <input type="radio" name="color" value="magenta"
        className="selector sel-magenta"
        onChange={select}
      />magenta</label>
      <label>
      <input type="radio" name="color" value="yellow"
        className="selector sel-yellow"
        onChange={select}
      />yellow</label>
    </div>
  );
};

export default Selector;