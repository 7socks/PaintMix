import React from 'react';
import styled from 'styled-components';
import { random } from 'colord';

const HomeButton = styled.button`
  margin: 5px 20px;
  font-size: 32px;
  font-weight: 700;
  background: transparent;
  border: none;
  color: white;

  &:hover {
    color: ${() => { return random().toHex(); }};
  }
`;

const Nav = ({setView, getHome}) => {
  return (
    <div className="nav">
      <HomeButton name="title" onClick={getHome}>PAINT</HomeButton>
      <div className="nav-btns">
        <button name="home" onClick={getHome}>Home</button>
        <button name="browse" onClick={setView}>Browse</button>
        <button name="create" onClick={setView}>Create</button>
      </div>
    </div>
  );
};

export default Nav;