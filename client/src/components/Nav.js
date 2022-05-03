import React from 'react';

const Nav = ({setView}) => {
  return (
    <div className="nav">
      <button className="home-btn"><h1>PAINT</h1></button>
      <div className="nav-btns">
        <button>Browse</button>
        <button>Create</button>
      </div>
    </div>
  );
};

export default Nav;