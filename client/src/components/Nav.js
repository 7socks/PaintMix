import React from 'react';

const Nav = ({setView}) => {
  return (
    <div className="nav">
      <button name="home" className="home-btn"><h1>PAINT</h1></button>
      <div className="nav-btns">
        <button name="browse" onClick={setView}>Browse</button>
        <button name="create" onClick={setView}>Create</button>
      </div>
    </div>
  );
};

export default Nav;