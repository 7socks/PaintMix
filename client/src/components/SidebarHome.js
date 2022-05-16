import React from 'react';
import mixColor from '../util/color.js';

const SidebarHome = ({bucket, info}) => {
  let total = bucket.c + bucket.m + bucket.y;
  return (
    <div className="sidebar">
      <h2>Welcome!</h2>
      <div>Our bucket contains {total} drops of paint</div>
      <div>Browse or create a new bucket to add to the mix!</div>
      <br/>
      <div>Hex color:</div>
      <div className="hexbox">
        <input type="text" value={mixColor(bucket)} onFocus={(e) => { e.target.select(); }} readOnly/>
      </div>
    </div>
  );
};

export default SidebarHome;