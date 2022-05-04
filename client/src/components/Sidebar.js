import React from 'react';
import { format, parseISO } from 'date-fns';
import mixColor from '../util/color.js';

const Sidebar = ({bucket}) => {
  let total = bucket.c + bucket.m + bucket.y;
  return (
    <div className="sidebar">
      <h2>{bucket.name}</h2>
      <div>Created {format(new Date(bucket.createdAt), 'MMMM do, yyyy')}</div>
      <div>Contains {total} drops of paint</div>
      <br/>
      <div>Hex color:</div>
      <div className="hexbox"><input type="text" value={mixColor(bucket)} onFocus={(e) => { e.target.select(); }} readOnly/></div>
    </div>
  );
};

export default Sidebar;