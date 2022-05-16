import React from 'react';
import styled from 'styled-components';
import { randomHex } from '../util/color.js';

const HomeButton = styled.button`
  margin: 5px 20px;
  font-size: 32px;
  font-weight: 700;
  background: transparent;
  border: none;
  color: white;

  &:hover {
    color: ${() => { return randomHex(); }};
  }
`;

const Nav = ({setView, getHome, getRandom}) => {
  return (
    <div className="nav">
      <HomeButton name="title" onClick={getRandom}>PaintMix</HomeButton>
      <div className="nav-btns">
        <button name="home" onClick={getHome}>Home</button>
        <button name="play" onClick={setView}>Play</button>
        <button name="browse" onClick={setView}>Browse</button>
        <button name="create" onClick={setView}>Create</button>
      </div>
    </div>
  );
};

export default Nav;