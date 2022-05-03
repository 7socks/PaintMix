import React from 'react';

const Selector = ({color, selectColor}) => {
  return (
    <div className="selector">
      <button
        className={color === "cyan" ? "selector-cyan selected" : "selector-cyan"}
        onClick={selectColor}>cyan
      </button>
      <button
        className={color === "magenta" ? "selector-magenta selected" : "selector-magenta"}
        onClick={selectColor}>magenta
      </button>
      <button
        className={color === "yellow" ? "selector-yellow selected" : "selector-yellow"}
        onClick={selectColor}>yellow
      </button>
    </div>
  );
};

export default Selector;