import React from 'react';

const Selector = ({color, selectColor}) => {
  return (
    <div className="selector-container">
      <label>
      <input type="radio" name="color" value="cyan"
        className="selector sel-cyan"
        onClick={selectColor}
        defaultChecked={true}
      />cyan</label>
      <label>
      <input type="radio" name="color" value="magenta"
        className="selector sel-magenta"
        onClick={selectColor}
      />magenta</label>
      <label>
      <input type="radio" name="color" value="yellow"
        className="selector sel-yellow"
        onClick={selectColor}
      />yellow</label>
    </div>
  );
};

export default Selector;