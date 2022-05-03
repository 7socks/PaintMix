import React from 'react';
import { format, parseISO } from 'date-fns';

const Sidebar = ({bucket}) => {
  let total = bucket.c + bucket.m + bucket.y;
  return (
    <div className="sidebar">
      <h2>{bucket.name}</h2>
      <div>Created {format(new Date(bucket.createdAt), 'MMMM do, yyyy')}</div>
      <div>Contains {total} drops of paint</div>
    </div>
  );
};

export default Sidebar;