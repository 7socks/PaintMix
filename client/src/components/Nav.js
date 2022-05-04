import React from 'react';

const Nav = ({setView, getHome}) => {
  return (
    <div className="nav">
      <button name="title" className="home-btn" onClick={getHome}>PAINT</button>
      <div className="nav-btns">
        <button name="home" onClick={getHome}>Home</button>
        <button name="browse" onClick={setView}>Browse</button>
        <button name="create" onClick={setView}>Create</button>
      </div>
    </div>
  );
};

export default Nav;